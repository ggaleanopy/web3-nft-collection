const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for a WorldCupBalls
  const metadataURL = "ipfs://QmTsPbduJSeP65w3cbbeKwujE61c1ZeiwkBqeuvakvy7oi/";
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so lw3PunksContract here is a factory for instances of our WorldCupBalls contract.
  */
  const worldCupBallsContract = await ethers.getContractFactory("WorldCupBalls");

  // deploy the contract
  const deployedWorldCupBallsContract = await worldCupBallsContract.deploy(metadataURL);

  await deployedWorldCupBallsContract.deployed();

  // print the address of the deployed contract
  console.log("WorldCupBalls Contract Address:", deployedWorldCupBallsContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });