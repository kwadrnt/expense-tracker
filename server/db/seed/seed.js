const mongoose = require('mongoose')
const csv = require('csvtojson')
const uuid = require('uuid/v4')
const uniq = require('lodash/uniq')
const find = require('lodash/find')
const get = require('lodash/get')

const { LOCAL_ENDPOINT, ALT_LOCAL_ENDPOINT } = require('../constants/endpoints')

const Accounts = require('../models/accounts')
const Transactions = require('../models/transactions')
const Categories = require('../models/categories')
const TransactionTypes = require('../models/transactionTypes')

const expensesFilePath = './server/db/seed/expenses.csv'
const incomeFilePath = './server/db/seed/income.csv'
const transfersFilePath = './server/db/seed/transfers.csv'

async function readFiles() {
    const expenses = await csv().fromFile(expensesFilePath)
    const income = await csv().fromFile(incomeFilePath)
    const transfers = await csv().fromFile(transfersFilePath)

    return { expenses, income, transfers }
}

async function createAccounts(csvTransactions) {
    const accounts = await parseTransactionsForAccounts(csvTransactions)

    await Accounts.create(accounts)
}

async function parseTransactionsForAccounts({ expenses, income, transfers }) {
    const accounts = []

    expenses.forEach((item) => { accounts.push(item.accountFrom) })
    income.forEach((item) => { accounts.push(item.accountFrom) })
    transfers.forEach((item) => {
        accounts.push(item.accountFrom)
        accounts.push(item.accountsTo)
    })

    const uniqAccounts = []

    uniq(accounts).forEach((account) => {
        if (account) {
            uniqAccounts.push({ name: account, id: uuid() })
        }
    })

    return uniqAccounts
}

async function createCategories(csvTransactions) {
    const categories = await parseTransactionsForCategories(csvTransactions)

    await Categories.create(categories)
}

async function parseTransactionsForCategories({ expenses, income }) {
    const categories = []

    expenses.forEach((item) => { categories.push(item.category) })
    income.forEach((item) => { categories.push(item.category) })

    return uniq(categories).map((category) => ({ name: category, id: uuid() }))
}

async function createTransactionTypes() {
    const transactionTypes = [
        { name: 'EXPENSE', id: uuid() },
        { name: 'INCOME', id: uuid() },
        { name: 'TRANSFER', id: uuid() },
    ]

    await TransactionTypes.create(transactionTypes)
}

async function createTranscations({ expenses, income, transfers }) {
    const transactions = []

    const accounts = await Accounts.find()
    const categories = await Categories.find()
    const transactionTypes = await TransactionTypes.find()

    const mongooseDB = { accounts, categories, transactionTypes }

    expenses.forEach((transaction) => {
        if (transaction.date) {
            transactions.push(createTransactionObject(transaction, 'EXPENSE', mongooseDB))
        }
    })

    income.forEach((transaction) => {
        if (transaction.date) {
            transactions.push(createTransactionObject(transaction, 'INCOME', mongooseDB))
        }
    })

    transfers.forEach((transaction) => {
        if (transaction.date) {
            transactions.push(createTransactionObject(transaction, 'TRANSFER', mongooseDB))
        }
    })

    await Transactions.create(transactions)
}

function createTransactionObject(transaction, transactionType, mongooseDB) {
    const { date, description, category, accountFrom, price, accountTo } = transaction
    const { accounts, categories, transactionTypes } = mongooseDB

    return {
        id: uuid(),
        date,
        description,
        category: get(find(categories, { name: category }), 'id', null),
        accountFrom: get(find(accounts, { name: accountFrom }), 'id', null),
        price: price.replace('$ ', ''),
        accountTo: get(find(accounts, { name: accountTo }), 'id', null),
        type: get(find(transactionTypes, { name: transactionType }), 'id', null),
    }
}

async function seedDatabase() {
    mongoose.connect(LOCAL_ENDPOINT, { useNewUrlParser: true })
        .catch(() => { mongoose.connect(ALT_LOCAL_ENDPOINT, { useNewUrlParser: true }) })

    const csvTransactions = await readFiles()
    await createAccounts(csvTransactions)
    await createCategories(csvTransactions)
    await createTransactionTypes()
    await createTranscations(csvTransactions)
    mongoose.connection.close()
}

seedDatabase()
