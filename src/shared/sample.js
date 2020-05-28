export default a => {
    const index = Math.floor(Math.random() * Math.floor(a.length))
    const [pick] = a.splice(index, 1)
    return pick
}
