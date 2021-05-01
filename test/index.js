let app = require("../index");
let chai = require("chai");
let chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

const id = 5;


describe("API Tests", () => {
  describe("Test GET All Data", () => {
    it("It should return all data", (done) => {
      chai
        .request(app)
        .get("/")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");
          response.body.length.should.not.be.eq(0);
          done();
        });
    });
  });

  describe("Test GET User By Id", () => {
      it("It should return right item", (done) => {
        chai
          .request(app)
          .get("/" + id)
          .end((err, response) => {
            response.should.have.status(201);
            response.body.should.be.a("object");
            done();
          });
      });
    });

});