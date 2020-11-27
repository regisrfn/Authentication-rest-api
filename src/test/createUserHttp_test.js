//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require("../app")
let should = chai.should();

chai.use(chaiHttp)

describe('/POST user', () => {
    it('it should post a user', (done) => {
        let user = {
            name: "Joe",
            password: "123456",
            email: "joe@gmail.com",
        }
        chai.request(server)
            .post('/api/v1/user/register')
            .send(user)
            .end((err, res) => {
                // console.log(res)
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Book successfully added!');
            })
    })
})
