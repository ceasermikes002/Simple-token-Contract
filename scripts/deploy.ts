import { ethers } from "hardhat";

async function main() {
    // Set the initial supply (for example, 1 million tokens)
    const initialSupply = ethers.parseUnits("1000000", 18);  // 1 million tokens with 18 decimals

    // Get the contract factory for "SimpleToken"
    const SimpleToken = await ethers.getContractFactory("SimpleToken");

    // Deploy the contract with the initial supply
    const tokenContract = await SimpleToken.deploy(initialSupply);

    // Wait for the contract to be deployed
    await tokenContract.waitForDeployment();

    // Log the deployed contract address
    console.log("SimpleToken deployed at:", tokenContract.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
