import fs from "node:fs/promises";

export function createFile(path, file) {
    fs.writeFile(path, file, { flag: 'w', encoding: 'utf-8' });
}