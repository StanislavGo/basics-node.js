import fs from "fs/promises";

const copy = async () => {
    try {
        await fs.cp("./src/fs/files", "./src/fs/files_copy", { errorOnExist: true, recursive: true, force: false });
    } catch {
        throw new Error ("FS operation failed");
    }
};

await copy();
