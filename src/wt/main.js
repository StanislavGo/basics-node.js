import { availableParallelism } from "os";
import { Worker } from "worker_threads";

const pathToWorkerFile = "./src/wt/worker.js";
const start_number = 10;

const workerService = (number) => new Promise(resolve => {
    const worker = new Worker(pathToWorkerFile, { workerData: number });

    worker.on("message", data => resolve({
        status: "resolved",
        data
    }));

    worker.on("error", error => resolve({
        status: "error",
        data: null
    }));
});

const performCalculations = async () => {
    const workers = Array.from({ length: availableParallelism() }, (_, i) => workerService(start_number + i));
    const result = await Promise.all(workers);
    console.log(result);
};

await performCalculations();