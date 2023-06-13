import {promises as fs} from "fs";

export const isFileExist = async (path) => {
  try {
    await fs.stat(path)
    return true
  } catch (e) {
    return false
  }
}
