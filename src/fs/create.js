import {promises as fs} from 'fs'
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
import {isFileExist} from "../utils/fs.js";

const create = async () => {
    const curDir = dirname(fileURLToPath(import.meta.url))
    const destPath = join(curDir, 'files', 'fresh.txt')
    const fileContent = 'I am fresh and young'
    const error = 'FS operation failed: File already exists'

    if (await isFileExist(destPath)) {
        throw Error(error)
    } else {
        await fs.writeFile(destPath, fileContent)
    }
};

await create();
