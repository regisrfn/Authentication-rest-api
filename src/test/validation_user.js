const assert = require('assert')
const User = require('../models/User')

describe('Validating records', () => {
    ////////////////////////////INVALID NAME
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
    it('saving name invalid', async () => {
        const user = new User({ name: "Al", email: "joe@gmail.com", password: 123456 })
        try {
            await user.save()
            assert(false, 'error - user shouldn\'t be saved')
        } catch (error) {
            const { message } = error.errors['name']
            assert.strictEqual(message, 'name too short')
        }
    })
    it('saving name invalid - null', (done) => {
        const user = new User({ email: "joe@gmail.com", password: 123456 })
        user.save()
            .then(() => done('error - user shouldn\'t be saved'))
            .catch(err => {
                const { message } = err.errors['name']
                assert.strictEqual(message, 'name is required')
                done()
            })
            .catch((err) => {
                done(err)
            })
    })
    ///////////////////////////////////////INVALID EMAIL
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
    it('saving email invalid', (done) => {
        const user = new User({ name: "Joe", email: 123456, password: 123456 })
        user.save()
            .then(() => done('error - user shouldn\'t be saved'))
            .catch(err => {
                const { message } = err.errors['email']
                assert.strictEqual(message, 'invalid format')
                done()
            })
            .catch((err) => {
                done(err)
            })
    })
    it('saving email invalid', (done) => {
        const user = new User({ name: "Joe", email: "1@1.c", password: 123456 })
        user.save()
            .then(() => done('error - user shouldn\'t be saved'))
            .catch(err => {
                const { message } = err.errors['email']
                assert.strictEqual(message, 'email too short')
                done()
            })
            .catch((err) => {
                done(err)
            })
    })
    /////////////////////////////INVALID PASSWORD
    it('Invalid password', async () => {
        const user = new User({ name: "Joe", email: "joe@gmail.com"})
        try {
            await user.save()
            assert(false, 'error - user shouldn\'t be saved')
        } catch (error) {
            const { message } = error.errors['password']
            assert.strictEqual(message, 'password is required')
        }
    })
    it('Invalid password', async () => {
        const user = new User({ name: "Joe", email: "joe@gmail.com",password:123})
        try {
            await user.save()
            assert(false, 'error - user shouldn\'t be saved')
        } catch (error) {
            const { message } = error.errors['password']
            assert.strictEqual(message, 'password too short')
        }
    })

})