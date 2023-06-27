import {createReadStream} from 'node:fs';
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import {isFileExist} from "../utils/fs.js";

const read = async () => {
    const curDir = dirname(fileURLToPath(import.meta.url))
    const filePath = join(curDir, 'files', 'fileToRead.txt')
    const error = 'No such file'

    if (!await isFileExist(filePath)) {
        throw Error(error)
    }

    const readableStream = createReadStream(filePath);
    readableStream.on('data', (chunk) => process.stdout.write(chunk))
};

await read();
