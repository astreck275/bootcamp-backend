const responseBuilder = require("../src/responseBuilder")
describe("responseBuilder", () => {
    test("beispiel", () => {
        let actual = 10;
        let expected = 5;
        expect(actual).toBe(expected);
    })
    it("should return code 200 with message ", () => {
        const actual = responseBuilder(200, { message: "irgendwas" });
        const expected = {
            statusCode: 200,
            message: "irgendwas"
        }
        expect(JSON.parse(actual)).toEqual(expected);
    })
    it("should return code 200 with message and error", () => {
        const actual = responseBuilder(200, {message: "message", error: "error"})
        const expected = {
            statusCode: 200,
            message: "irgendwas",
            error: "error"
        }
        expect(JSON.parse(actual).message).toBeTruthy();
        expect(JSON.parse(actual).error).toBeTruthy();
    })
});
describe("calculateBirthyear", () => {
    it("    ")
})