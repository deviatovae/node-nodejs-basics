import { Transform } from 'node:stream';
const transform = async () => {
    const reverse  = new Transform({
        transform(chunk, _, callback) {
            callback(null, chunk.reverse())
        },
    });

    reverse.on('data', data => process.stdout.write(data + '\n'))
    process.stdin.on('data', data => reverse.write(data))
};

await transform();
