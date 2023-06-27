import { createGzip } from 'zlib';
import {createReadStream, createWriteStream } from 'fs';
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import {isFileExist} from "../utils/fs.js";
const compress = async () => {
    const gzip = createGzip();
    const curDir = dirname(fileURLToPath(import.meta.url))
    const source = join(curDir, 'files', 'fileToCompress.txt')
    const dest = join(curDir, 'files', 'archive.gz')
    const error = 'No such file'

    if (!await isFileExist(source)) {
        throw Error(error)
    }

    createReadStream(source).pipe(gzip).pipe(createWriteStream(dest));
};

await compress();
