const { expect } = require("chai");
const hre = require("hardhat");

describe("Greeter", function () {
  let greeter;

  beforeEach(async () => {
    greeter = await hre.ethers.getContractFactory("Greeter");
  });

  it("Should return the initial message", async () => {
    const result = await greeter.read();
    expect(result).equal("Hello, world!");
  });

  it("Should be able to change the message", async () => {
    await greeter.write("Goodbye, world!");
    const result = await greeter.read();
    expect(result).equal("Goodbye, world!");
  });
});
