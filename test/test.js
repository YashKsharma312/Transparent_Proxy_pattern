const { expect } = require("chai");
const { ethers,upgrades } = require("hardhat");
const { BigNumber, utils } = require("ethers");

describe("Transparent",function(){
    let Impl1;
    let Impl2;
    let Proxy;
    let addr1;
    let owner;

    beforeEach(async function(){
        [addr1,owner]=await ethers.getSigners();
        Impl1=await ethers.getContractFactory("MyToken");
        Proxy = await upgrades.deployProxy(Impl1);
        Impl2 = await ethers.getContractFactory("MyToken1");
    });

    describe("Test contract", function () {
        it("Should assign the real name of token",async function(){
            expect(await Proxy.name()).to.equal("MyToken");});
        it("Should assign the real symbol of token",async function(){
            expect(await Proxy.symbol()).to.equal("MTK");});
        it("should mint tokens",async function(){
            await Proxy.mint(addr1.address,100);
            expect(await Proxy.balanceOf(addr1.address)).to.equal(100);});
        })
    describe("check for upgrade", function () {
        it("", async () => {
            let Prox= await hre.upgrades.upgradeProxy(Proxy, Impl2);
            it("Should assign the real name of token",async function(){
                expect(await Proxy.name()).to.equal("MyToken");});
            it("Should assign the real symbol of token",async function(){
                expect(await Proxy.symbol()).to.equal("MTK");});
            it("should mint tokens",async function(){
                await Proxy.mint(addr1.address,100);
                expect(await Proxy.balanceOf(addr1.address)).to.equal(100);});
            it("check for upgraded function",async function(){
                expect(await Proxy.greet()).to.equal("Have a great Shopping");});
            })
          });
    })

