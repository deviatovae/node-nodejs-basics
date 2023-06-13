import {promises as fs} from 'fs'
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import {isFileExist} from "../utils/fs.js";

const copy = async () => {
    const curDir = dirname(fileURLToPath(import.meta.url))
    const destPath  = join(curDir, 'files')
    const destPathCopy = join(curDir, 'files_copy')
    const error = 'FS operation failed: directory already exists'

    if (await isFileExist(destPathCopy)) {
        throw Error(error)
    } else {
        await fs.cp(destPath, destPathCopy, {recursive: true})
    }

};

await copy();
