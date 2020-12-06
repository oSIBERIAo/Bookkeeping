let id = 0

const createId = () => {
    id = id + 1
    return id
}

export { createId }
