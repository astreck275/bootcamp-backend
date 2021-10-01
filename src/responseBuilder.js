
const responseBuilder = (statusCode, { message, error }) => {
    if (message) {
        return JSON.stringify({ statusCode: statusCode, message: message })
    } else if (error) {
        return JSON.stringify({ statusCode: statusCode, error: error })
    }
}
module.exports = responseBuilder;