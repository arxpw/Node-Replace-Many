const SUFFIX_DEFAULT = '-replaced';

const GenerateFallbackFile = (fileName, overwriteFile) => {
  // if we're overwriting the file, just return the input file.
  if (overwriteFile) {
    return fileName;
  }

  // we don't want to use any logic related to file extensions if the extension does not exist
  if (fileName.includes('.') === false) {
    return `${fileName}${SUFFIX_DEFAULT}`;
  }

  // otherwise, let's give it a -replaced suffix taking the file extension into account
  const dotArray = fileName.split('.');
  const lastDotElement = dotArray.pop();
  const firstDotElement = dotArray.join('.');
  
  return firstDotElement + SUFFIX_DEFAULT + '.' + lastDotElement;
}

export default GenerateFallbackFile;
