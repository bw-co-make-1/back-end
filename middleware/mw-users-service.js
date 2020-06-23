function isValidReg(user) {
    return Boolean(
        user.username && 
        user.password && 
        typeof user.password === "string" && 
        user.firstName && 
        user.lastName && 
        user.email
        )
}

function isValidLogin(user) {
    return Boolean(
        user.username && 
        user.password && 
        typeof user.password === "string"
        )
}

module.exports = {
    isValidReg,
    isValidLogin
}