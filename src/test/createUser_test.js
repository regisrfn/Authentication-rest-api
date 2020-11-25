const assert = require('assert')
const { getMaxListeners } = require('../models/User')
const User = require('../models/User')

describe('Creating records', () => {
    it('saves a user', async () => {
        const joe = new User({ name: 'Joe' , email:'joe@gmail.com', password:123456})
        await joe.save()
        assert(!joe.isNew)
    })
})