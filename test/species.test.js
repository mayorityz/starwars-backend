const request = require("supertest");
const app = require("../server/index");
const db = require("../util/database").mongoConnect;

// test db connection
describe("//Connect To DB before testing Api End Points", () => {
  before(done => {
    const Connection = () => {
      db(() => {
        done();
      });
    };
    Connection();
  });

  it("TEST /Movie With Most Opening Crawl", done => {
    return request(app)
      .get("/films")
      .expect("Content-Type", /json/)
      .expect(200, done());
  });

  it("TEST /Returns A List Of Most Appearing Characters In JSON", done => {
    return request(app)
      .get("/most-appearance")
      .expect("Content-Type", /json/)
      .expect(200, done());
  });

  it("TEST /Returns A List Of Most Appearing species", done => {
    return request(app)
      .get("/species")
      .expect("Content-Type", /json/)
      .expect(200, done());
  });
});
