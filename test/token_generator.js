const TokenGenerator = artifacts.require("TokenGenerator");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("TokenGenerator", function (/* accounts */) {
  it("should assert true", async function () {
    await TokenGenerator.deployed();
    return assert.isTrue(true);
  });

  beforeEach(async () => {
    instance = await TokenGenerator.new();

  });

  describe("Variables", () => {
    it("should have a generated tokens function", async () => {
      assert.equal(typeof instance.generatedTokens, 'function', "the contract has no generated token variable");
    });
  

  });

});
