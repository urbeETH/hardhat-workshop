import {ethers} from "hardhat";

const TOKEN_CONTRACT_ADDRESS = "0xD554fCd8A335A3C487618aA0402b6Da4E828Cd2A";

const transferToAddress = "0x8E8C44C72cee669EBcb0933360F194C9b7cC8BEd";

async function transfer() {
    const [deployer] = await ethers.getSigners();

    const token = await ethers.getContractAt(
        "Token",
        TOKEN_CONTRACT_ADDRESS
    );

    const amountToTransfer = 50;

    console.log(`Transferring ${amountToTransfer} tokens to ${transferToAddress}...`);
    const tx = await token.transfer(transferToAddress, amountToTransfer);
    await tx.wait();
    console.log(`Successfully transferred ${amountToTransfer} tokens to ${transferToAddress}!`);

    const balanceOfAddr = await token.balanceOf(transferToAddress);
    console.log(`Now ${transferToAddress} has ${balanceOfAddr} tokens`);
}

transfer()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });