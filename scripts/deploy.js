const { ethers } = require("hardhat"); 
const { upgrades } = require( "hardhat");

async function main() {
const Contract = await ethers.getContractFactory("MyToken");
console.log("Deploying ERC_20...");
const contract = await upgrades.deployProxy(Contract);
console.log(contract.address," ERC_20 (proxy) address");
console.log(await upgrades.erc1967.getImplementationAddress(contract.address), "ImplementationAddress");
console.log(await upgrades.erc1967.getAdminAddress(contract.address), "AdminAddress");
}

main().catch((error) => { 
console.error(error)
process.exitCode = 1
})