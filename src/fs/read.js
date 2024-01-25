import fs from "fs/promises";

const pathToFile = "./src/fs/files/fileToRead.txt";

const read = async () => {
   try {
        const content = await fs.readFile(pathToFile, { encoding: "utf8" });
        console.log(content);
   } catch (error) {
        throw new Error("FS operation failed");
   }
};

await read();