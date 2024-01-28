import { createReadStream } from "fs";

const pathTofile = "./src/streams/files/fileToRead.txt";
const readableStream = createReadStream(pathTofile);

const read = async () => {
    readableStream.pipe(process.stdout);
};

await read();