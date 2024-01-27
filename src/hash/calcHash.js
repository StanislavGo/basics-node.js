import fs from "fs/promises";
import { createHash } from "crypto";

const pathToFile = "./src/hash/files/fileToCalculateHashFor.txt";

const calculateHash = async () => {
    const fileInfo = await fs.readFile(pathToFile);
    const calcHash = createHash("sha256").update(fileInfo).digest("hex");
    console.log(calcHash);
};

await calculateHash();