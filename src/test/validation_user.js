const assert = require('assert')
const User = require('../models/User')
let chai = require('chai');
let should = chai.should();

describe('Validating records', () => {
    ////////////////////////////INVALID NAME
    it('it should not save user - name invalid -undefined', async () => {
        const user = new User({ name: undefined, email: "joe@gmail.com", password: 123456 })
        try {
            await user.save()
            assert(false, 'error - user shouldn\'t be saved')
        } catch (error) {
            const { message } = error.errors['name']
            assert.strictEqual(message, 'Value is required')
        }
    })
    it('it should not save user - name invalid - size', async () => {
        const user = new User({ name: "Al", email: "joe@gmail.com", password: 123456 })
        try {
            await user.save()
            assert(false, 'error - user shouldn\'t be saved')
        } catch (error) {
            const { message } = error.errors['name']
            assert.strictEqual(message, 'Invalid name size')
        }
    })
    it('it should not save user - name invalid - null', (done) => {
        const user = new User({ email: "joe@gmail.com", password: 123456 })
        user.save()
            .then(() => done('error - user shouldn\'t be saved'))
            .catch(err => {
                const { message } = err.errors['name']
                assert.strictEqual(message, 'Value is required')
                done()
            })
            .catch((err) => {
                done(err)
            })
    })
    ///////////////////////////////////////INVALID EMAIL
    it('it should not save user - invalid email - undefined', async () => {
        try {
            const user = new User({ name: "Joe", email: undefined, password: 123456 })
            await user.save()
            assert(false)
        } catch (error) {
            const { message } = error.errors['email']
            assert.strictEqual(message, 'Email is required')
        }
    })
    it('it should not save user - invalid email - not exists', (done) => {
        const user = new User({ name: "Joe", email: 123456, password: 123456 })
        user.save()
            .then(() => done('error - user shouldn\'t be saved'))
            .catch(err => {
                const { message } = err.errors['email']
                assert.strictEqual(message, 'Invalid email format')
                done()
            })
            .catch((err) => {
                done(err)
            })
    })
    it('it should not save user - invalid email - duplicated', async () => {
        try {
            let user = new User({ name: "Joe", email: "joe@gmail.com", password: 123456 })
            await user.save()
            let newUser = new User({ name: "Joe", email: "joe@gmail.com", password: 123456 })
            await newUser.save()
            assert(false)
        } catch (error) {
            const { message } = error.errors['email']
            assert.strictEqual(message, 'Email not available')
        }
    })
    it('it should not save user - invalid email - format', (done) => {
        const user = new User({ name: "Joe", email: "1@1.c", password: 123456 })
        user.save()
            .then(() => done('error - user shouldn\'t be saved'))
            .catch(err => {
                const { message } = err.errors['email']
                assert.strictEqual(message, 'Invalid email size')
                done()
            })
            .catch((err) => {
                done(err)
            })
    })
    /////////////////////////////INVALID PASSWORD
    it('it should not save user - invalid password - required', async () => {
        const user = new User({ name: "Joe", email: "joe@gmail.com"})
        try {
            await user.save()
            assert(false, 'error - user shouldn\'t be saved')
        } catch (error) {
            const { message } = error.errors['password']
            assert.strictEqual(message, 'Password is required')
        }
    })
    it('it should not save user - invalid password - size', async () => {
        const user = new User({ name: "Joe", email: "joe@gmail.com",password:123})
        try {
            await user.save()
            assert(false, 'error - user shouldn\'t be saved')
        } catch (error) {
            const { message } = error.errors['password']
            assert.strictEqual(message, 'Invalid password size')
        }
    })

})