import {dirname, join} from "path";
import {fileURLToPath} from "url";
import {isFileExist} from "../utils/fs.js";
import {cpus} from "os";
import {Worker} from "worker_threads";
const performCalculations = async () => {
    const filePath = join(dirname(fileURLToPath(import.meta.url)), 'worker.js')
    const error = 'No such file'

    if (!await isFileExist(filePath)) {
        throw new Error(error)
    }

    const cores = cpus().length;
    const workerPromises = [];

    for (let i = 0; i < cores; i++) {
        const worker = new Worker(filePath, {
            workerData: i + 10
        });

        const workerPromise = new Promise((resolve) => {

            worker.on('message', (result) => {
                resolve({status: 'resolved', data: result});
            });

            worker.on('error', () => {
                resolve({status: 'error', data: null});
            });
        });

        workerPromises.push(workerPromise);
    }

    try {
        const results = await Promise.all(workerPromises);
        console.log('Results:', results);
    } catch (error) {
        console.error('Error:', error);
    }
};

await performCalculations();
