import { fork } from "child_process";

const pathToChildScript = "./src/cp/files/script.js";

const spawnChildProcess = async (args) => {
    fork(pathToChildScript, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["He", "llo"]);
