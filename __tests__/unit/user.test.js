const bcrypt =  require("bcryptjs");
const {User} = require("../../src/app/models");
const truncate = require("../util/truncate");


describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should encrypt user password", async () => {
    const user = await User.create({nome: 'Lauro', email: 'lauro@3lsolucoes.com', password: '123456'});

    const comparehash = await bcrypt.compare('123456',user.password_hash);

    expect(comparehash).toBe(true);
  });
});