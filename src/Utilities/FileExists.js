import fs from 'fs';

const FileExists = (name, program) => {
  const exists = fs.existsSync(name)

  if (!exists) {
    program.error(`The file "${name}" does not exist`);
  }
}

export default FileExists;
