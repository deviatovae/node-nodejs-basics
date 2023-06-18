import {fork} from "child_process";
import {dirname, join} from "path";
import {fileURLToPath} from "url";

const spawnChildProcess = async (args) => {
    const filePath = join(dirname(fileURLToPath(import.meta.url)), 'files', 'script.js')
    const child = fork(filePath, args, { stdio: 'pipe' });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

try {
    await spawnChildProcess(['arg1', 'arg2', 'arg3']);
} catch (error) {
    console.error('There was an error:', error);
}
