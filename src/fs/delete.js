import fs from "fs/promises";

const remove = async () => {
    try {
        fs.rm("./src/fs/files/fileToRemove.txt");
    } catch {
        throw new Error("FS operation failed");
    }
};

await remove();