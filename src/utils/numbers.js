import round from 'lodash/round'

export function formatCurrency(number) {
    return `$ ${round(number, 2).toFixed(2)}`
}
