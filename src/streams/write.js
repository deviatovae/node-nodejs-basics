import {createWriteStream} from 'node:fs';
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import {isFileExist} from "../utils/fs.js";

const write = async () => {
    const curDir = dirname(fileURLToPath(import.meta.url))
    const filePath = join(curDir, 'files', 'fileToWrite.txt')
    const error = 'No such file'

    if (!await isFileExist(filePath)) {
        throw Error(error)
    }

    const writableStream = createWriteStream(filePath)
    process.stdin.on('data', (data) => writableStream.write(data))
};

await write();
