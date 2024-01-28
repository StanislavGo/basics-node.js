import { Transform, pipeline } from "stream";

const transformString = new Transform({
    transform(chunk, _, callback) {
        callback(null, chunk.toString().split("").reverse().join(""));
    }
});

const transform = async () => {
    pipeline(
        process.stdin,
        transformString,
        process.stdout,
        (error) => console.log(error)
    );
};

await transform();