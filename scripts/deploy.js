const hre = require("hardhat");

async function main() {
  const Greeter = await hre.ethers.getContractFactory("Greeter");

  // "HardhatError: HH303: Unrecognized task callRPC"
  // const priorityFee = await hre.run('callRPC', {
  //   method: 'eth_maxPriorityFeePerGas',
  //   params: [],
  // });

  const greeter = await Greeter.deploy({
    maxPriorityFeePerGas: 199992,
  });

  await greeter.deployed();

  console.log("📜 Contract deployed to:", greeter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
