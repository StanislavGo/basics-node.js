import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { pipeline } from "stream";

const inputStream = createReadStream("./src/zip/files/archive.gz");
const outputStream = createWriteStream("./src/zip/files/fileToCompress.txt");
const gunzipStream = createGunzip();

const decompress = async () => {
    pipeline(
        inputStream,
        gunzipStream,
        outputStream,
        (error) => console.log(error)
    );
};

await decompress();