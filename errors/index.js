const BadApiError = require("./bad-request");
const CustomAPIError = require("./custom-error");
const UnauthenticatedError = require("./unauthenticated");

module.exports = {
    CustomAPIError,
    BadApiError,
    UnauthenticatedError,
}