const { BigNumber, utils } = require("ethers");
const hardhat = require("hardhat");
async function main() {
  const OBToken = await hardhat.ethers.getContractFactory("OBToken");
  const obtoken = await OBToken.deploy();
  await obtoken.deployed();
  console.log("[📥] OBToken deployed to address: " + obtoken.address);
  const OBVendor = await hardhat.ethers.getContractFactory("OBVendor");
  const obvendor = await OBVendor.deploy(obtoken.address);
  console.log("[📥] OBVendor deployed to address: " + obvendor.address);
  await obtoken.deployed();
  // Transfer oktokens to vendor
  await obtoken.functions.transfer(obvendor.address, utils.parseEther("10000"));
  console.log("[🚀] Tokens transferred to OBVendor");
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
