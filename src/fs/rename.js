import fs from "fs/promises";

const wrongFile = "./src/fs/files/wrongFilename.txt";
const correctFile = "./src/fs/files/properFilename.md";

const rename = async () => {
    try {
        await fs.rename(wrongFile, correctFile);
    } catch (error) {
        throw new Error ("FS operation failed");
    }
};

await rename();