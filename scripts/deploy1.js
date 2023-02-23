const { ethers } = require("hardhat"); 
const { upgrades } = require( "hardhat");

const proxyAddress="0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

async function main() {
console.log(proxyAddress," original ERC_20(proxy) address");
const Contract2 = await ethers.getContractFactory("MyToken1");
console.log("upgrade to ERC_20(2)...");
const contract2 = await upgrades.upgradeProxy(proxyAddress, Contract2);
console.log(contract2.address," ERC_20(2) Proxy address(should be the same)");
console.log(await upgrades.erc1967.getImplementationAddress(contract2.address), "ImplementationAddress");
console.log(await upgrades.erc1967.getAdminAddress(contract2.address), "AdminAddress");
}

main().catch((error) => { 
console.error(error)
process.exitCode = 1
})