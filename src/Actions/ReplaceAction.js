import fs from 'fs';
import GenerateFallbackFile from '../Utilities/GenerateFallbackFile.js';

const SPLIT_CHAR_DEFAULT = ',';
const ENCODING_DEFAULT = 'utf-8';

const ReplaceAction = (findFileName, replaceFileName, dry, overwrite) => {
  const inputsFile = fs.readFileSync(findFileName, ENCODING_DEFAULT);
  const replaceFile = fs.readFileSync(replaceFileName, ENCODING_DEFAULT);

  let updatedFileContents = replaceFile;  
  const splitLines = inputsFile.split('\n');

  splitLines.map(line => {
    // skip a line if it appears to be empty
    if (line.length < 3) {
      return;
    }

    const values = line.split(SPLIT_CHAR_DEFAULT);

    if (!values) {
      return;
    }

    const findString = values[0];
    const replaceString = values[1];

    updatedFileContents = updatedFileContents.replaceAll(findString, replaceString);
  });

  console.log('Replaced File Contents:');
  console.log(updatedFileContents);

  if (dry) {
    console.log('Replace Action Complete (dry-run, did not replace!)');
    return;
  }

  const replacedFileName = GenerateFallbackFile(replaceFileName, overwrite);

  fs.writeFileSync(replacedFileName, updatedFileContents, ENCODING_DEFAULT);
  console.log('Replace Action Complete');
  return;
}

export default ReplaceAction;
