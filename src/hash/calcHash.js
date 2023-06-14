import {promises as fs} from "fs";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import crypto from "crypto";
import {isFileExist} from "../utils/fs.js";

const calculateHash = async () => {
    const curDir = dirname(fileURLToPath(import.meta.url))
    const file = join(curDir, 'files', 'fileToCalculateHashFor.txt')
    const error = 'No such file'

    if (!await isFileExist(file)) {
        throw Error(error)
    }

    const fileContent = await (fs.readFile(file))
    const hash = crypto.createHash('sha256').update(fileContent).digest('hex');

    console.log(hash);
};

await calculateHash();
