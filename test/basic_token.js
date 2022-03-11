const BasicToken = artifacts.require("BasicToken");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("BasicToken", function (accounts) {
  const [_owner, alice, bob] = accounts;

  let instance;
  beforeEach(async () => {
    instance = await BasicToken.new("Test Token","TTN",10000);
    console.log(instance);
  });

  describe("Variables", () => {
    it("it should create a new token", async () => {
      const totalSupply = await instance.totalSupply();
      console.log("WAGMI " +totalSupply);
      assert.equal(totalSupply, 10000000000000000000000, 'function', "the contract should have a total supply");
    });

    it("it should have ERC20 properties", async () => {
      const totalSupply = await instance.totalSupply();
      const name = await instance.name();
      const symbol = await instance.symbol();
      const decimals = await instance.decimals();
      console.log("Name of token:  " +name);
      console.log("Symbol:  " +symbol);
      console.log("Total supply :  " +totalSupply);
      assert.equal(totalSupply, 10000000000000000000000, "the contract should have a total supply");
      assert.equal(name, "Test Token", "Basic token should have a name");
      assert.equal(symbol, "TTN", "Basic token should have a symbol");
      assert.equal(decimals, "18", "Basic token should have a symbol");

      // SHould have the methods
      assert.equal(typeof instance.allowance, "function", "Should have an approval method");
      assert.equal(typeof instance.approve, "function", "Should have an approve method");
      assert.equal(typeof instance.transfer, "function", "Should have a transfer method");
      assert.equal(typeof instance.balanceOf, "function", "Should contain a balanceOf method");
      assert.equal(typeof instance.transferFrom, "function", "Should contain the transfer from method");
      assert.equal(typeof instance.decreaseAllowance,'function', 'Should contain decrease allowance method');
      assert.equal(typeof instance.increaseAllowance,'function', 'Should contain increase allowance method');
    });
  });


});
