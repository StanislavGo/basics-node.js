import { createGzip } from "zlib";
import { createWriteStream, createReadStream } from "fs";
import { pipeline } from "stream";

const readableStream = createReadStream("./src/zip/files/fileToCompress.txt");
const writableStream = createWriteStream("./src/zip/files/archive.gz");
const gzip = createGzip();

const compress = async () => {
    pipeline(
        readableStream, 
        gzip, 
        writableStream, 
        (error) => console.log(error)
    );
};

await compress();