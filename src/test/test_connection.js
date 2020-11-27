require('dotenv').config()
const assert = require('assert')
const { db } = require('../database/db')
const config = require('config') //we load the db location from the JSON files

before(async () => {
    //development mode
    //DATABASE_API = mongodb://localhost
    try {
        await db.connect(`${process.env.DATABASE_API}/${config.DBName}`)
    } catch (error) {
        assert.fail(error)
    }
})

describe('Connecting', () => {
    it('Connected', () => { })
})