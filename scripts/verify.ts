import {run} from "hardhat";

interface VerifyTask {
    address: string;
    constructorArguments: any[];
}

async function verify(verifyTasks: VerifyTask[]) {
    for (const verifyTask of verifyTasks) {
        console.log("Verifying contract: ", verifyTask.address);
        try {
            await run("verify:verify", verifyTask);
            console.log("Contract " + verifyTask.address + " successfully verified!");
        } catch (error: any) {
            if (error.message.toLowerCase().includes("already verified")) {
                console.log(verifyTask.address, " has been already verified");
            } else {
                console.error(error);
            }
        }
    }
}

verify([
    {
        address: "0xD554fCd8A335A3C487618aA0402b6Da4E828Cd2A",
        constructorArguments: [],
    },
]).then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

export default verify;
