const hre = require("hardhat");

async function main() {
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  // const priorityFee = await hre.ethers.provider.send("eth_maxPriorityFeePerGas", []);

  const greeter = await Greeter.deploy({
    maxPriorityFeePerGas: 199992,
  });

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
