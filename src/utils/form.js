export const serializeData = (event) => {
    let data = {}

    const formItems = Array.from(event.target)

    formItems.forEach((item) => {
        if (item.name) {
            data[item.name] = item.value
        }
    })

    return data
}
