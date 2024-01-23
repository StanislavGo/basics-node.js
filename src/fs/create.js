import fs from "fs/promises";

const create = async () => {
    try {
        await fs.writeFile("files/fresh.txt", "I am fresh and young", { encoding: "utf-8", flag: "wx" });
    } catch {
        throw new Error("FS operation failed");
    }
};

await create();