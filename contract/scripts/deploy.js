// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();
  // deploy factory
  const tokenwizard = await hre.ethers.deployContract("TokenWizard", owner)
  await tokenwizard.waitForDeployment()
  console.log("Deployed factory at: ", tokenwizard.target)
  // create token
  console.log("creating token...")
  const tx = await tokenwizard.connect(owner).createToken("MyTOken",
    "MYT",
    10000000,
    10,
    5,
    5,
    18,
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    5,
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
  )
  const receipt = await tx.wait()
  console.log("token created")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
