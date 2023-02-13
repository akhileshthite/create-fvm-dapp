// greeter.test.js
const Greeter = artifacts.require("Greeter");
const { expect } = require("chai");

contract("Greeter", (accounts) => {
  let greeter;

  beforeEach(async () => {
    greeter = await Greeter.new();
  });

  it("Should return the initial message", async () => {
    const result = await greeter.read();
    expect(result).to.equal("Hello, world!");
  });

  it("Should be able to change the message", async () => {
    await greeter.write("Goodbye, world!");
    const result = await greeter.read();
    expect(result).to.equal("Goodbye, world!");
  });
});
