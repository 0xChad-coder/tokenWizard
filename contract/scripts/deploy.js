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
  const tx = await tokenwizard.connect(owner).createToken("TestToken",
    "TEST",
    10000000,
    10,
    5,
    5,
    18,
    "0xb1341c194b725457ee70C3a5F7255c889ec43073",
    5,
    "0xb1341c194b725457ee70C3a5F7255c889ec43073"
  )
  const receipt = await tx.wait()
  console.log("Token Created")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
