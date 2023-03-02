import ReplaceAction from '../Actions/ReplaceAction.js';

const ReplaceCommandHandler = program => {
  const options = program.opts();

  const dry = options.dry;
  const overwriteFile = options.overwriteFile;

  if (dry) {
    console.info('Notice: You are dry-running this command, no actions will be taken.')
  }

  if (overwriteFile) {
    console.warn('You will overwrite the original file with this command.')
  }

  const { args } = program;

  const inputFileName = args[0];
  const replaceFileName = args[1];
  
  ReplaceAction(inputFileName, replaceFileName, dry, overwriteFile)
}

export default ReplaceCommandHandler
