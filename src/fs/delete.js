import {dirname, join} from "path";
import {fileURLToPath} from "url";
import {isFileExist} from "../utils/fs.js";
import {promises as fs} from "fs";

const remove = async () => {
    const curDir = dirname(fileURLToPath(import.meta.url))
    const file  = join(curDir, 'files', 'fileToRemove.txt')
    const error = 'FS operation failed: no such file'

    if(!await isFileExist(file)) {
        throw Error(error)
    } else {
        await fs.rm(file)
    }
};

await remove();
