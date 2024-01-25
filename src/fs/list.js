import fs from "fs/promises";

const pathToDir = "./src/fs/files";

const list = async () => {
    try {
        const dirInfo = await fs.readdir(pathToDir);
        console.log(dirInfo);
    } catch {
        throw new Error("FS operation failed");
    }
};

await list();