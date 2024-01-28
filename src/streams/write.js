import { createWriteStream } from "fs";

const pathToFile = "./src/streams/files/fileToWrite.txt";
const writableStream = createWriteStream(pathToFile);

const write = async () => {
    process.stdin.pipe(writableStream);
};

await write();