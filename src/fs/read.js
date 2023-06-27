import {promises as fs} from "fs";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import {isFileExist} from "../utils/fs.js";

const read = async () => {
    const curDir = dirname(fileURLToPath(import.meta.url))
    const filePath = join(curDir, 'files', 'fileToRead.txt')
    const error = 'FS operation failed: no such file'

    if (!await isFileExist(filePath)) {
        throw Error(error)
    }

    const content = (await fs.readFile(filePath)).toString()
    console.log(content)
};

await read();
