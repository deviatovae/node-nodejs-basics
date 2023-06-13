import {promises as fs} from "fs";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import {isFileExist} from "../utils/fs.js";

const list = async () => {

    const curDir = dirname(fileURLToPath(import.meta.url))
    const filesPath = join(curDir, 'files')
    const error = 'FS operation failed: no such file'

    if (!await isFileExist(filesPath)) {
        throw Error(error)
    }

    const files = await fs.readdir(filesPath, {recursive: true})
    console.log(files)

};

await list();
