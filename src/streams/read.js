import { createReadStream } from "fs";

const pathTofile = "./src/streams/files/fileToRead.txt";
const readStream = createReadStream(pathTofile);

const read = async () => {
    readStream.pipe(process.stdout);
};

await read();