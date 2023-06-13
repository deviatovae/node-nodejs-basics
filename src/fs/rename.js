import {promises as fs} from 'fs';
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import {isFileExist} from "../utils/fs.js";

const rename = async () => {
    const curDir = dirname(fileURLToPath(import.meta.url))
    const file  = join(curDir, 'files', 'wrongFilename.txt')
    const newFile  = join(curDir, 'files', 'properFilename.md')
    const error = 'FS operation failed: file already exists'

    if(await isFileExist(newFile)) {
        throw Error(error)
    } else {
        await fs.rename(file, newFile)
    }
};

await rename();
