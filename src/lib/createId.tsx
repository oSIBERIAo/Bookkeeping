let id = parseInt(window.localStorage.getItem("idMax") || "200")

const createId = () => {
    id = id + 1
    window.localStorage.setItem("idMax", JSON.stringify(id))
    return id
}

export { createId }
