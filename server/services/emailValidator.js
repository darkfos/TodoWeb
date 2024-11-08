let emailValidator = (email) => {
    if (typeof email === "string" && email.length() <= 150) {
        if (email.includes("@") && (email.includes(".ru") || email.includes(".com"))) {
            return true
        }
    }
    return false
}


module.exports = emailValidator;