const assert = require('assert')
const User = require('../models/User')

describe('Validating records', () => {
    it('saving name invalid - undefined', async () => {
        const user = new User({ name: undefined, email: "joe@gmail.com", password: 123456 })
        try {
            await user.save()
            assert(false, 'error - user shouldn\'t be saved')
        } catch (error) {
            const { message } = error.errors['name']
            assert.strictEqual(message, 'name is required')
        }
    })
    it('saving name invalid - null', (done) => {
        const user = new User({email: "joe@gmail.com", password: 123456 })
        user.save()
            .then(() => done('error - user shouldn\'t be saved'))
            .catch(err => {
                const { message } = err.errors['name']
                assert.strictEqual(message, 'name is required')
                done()
            })
            .catch((err) =>{
                done(err)
            })
    })
    it('saving email invalid', async () => {
        try {
            const user = new User({ name: "Joe", email: undefined, password: 123456 })
            await user.save()
            assert(false)
        } catch (error) {
            const { message } = error.errors['email']
            assert.strictEqual(message, 'email is required')
        }
    })
})