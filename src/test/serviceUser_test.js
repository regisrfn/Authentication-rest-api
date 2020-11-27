const assert = require('assert')
const { userService } = require('../services/userService')

describe("user service", () => {
    ////////////////////////////INVALID NAME
    it('saving user', async () => {
        try {
            const user = await userService.saveUser({ name: "Joe", email: "joe@gmail.com", password: 123456 })
            assert(user, "User saved")
        } catch (error) {
            console.log(error)
            assert.fail(error)
        }
    })
})