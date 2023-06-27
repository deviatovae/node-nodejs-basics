import {createGunzip} from "zlib";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import {isFileExist} from "../utils/fs.js";
import {createReadStream, createWriteStream} from "fs";

const decompress = async () => {
    const gUnzip = createGunzip();
    const curDir = dirname(fileURLToPath(import.meta.url))
    const source = join(curDir, 'files', 'archive.gz')
    const dest = join(curDir, 'files', 'fileToCompress.txt')
    const error = 'No such file'

    if (!await isFileExist(source)) {
        throw Error(error)
    }

    createReadStream(source).pipe(gUnzip).pipe(createWriteStream(dest));
};

await decompress();
