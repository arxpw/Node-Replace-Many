import { Argument, Command } from 'commander';
import ReplaceCommandHandler from './src/Handlers/ReplaceCommandHandler.js'
import FileExists from './src/Utilities/FileExists.js';

const program = new Command();

program.configureHelp({
  sortSubcommands: true,
  subcommandTerm: (cmd) => cmd.name()
});

program
  .option('-d, --dry', 'Will only show show what will change')
  .option('-o, --overwrite', 'Overwrite the original file instead of creating a copy!')
  .description("A basic tool to mass-rename items within a file")
  .addArgument(new Argument('[input]', 'file containing some comma-seperated strings to find and replace with').argRequired())
  .addArgument(new Argument('[replace]', 'file to be target and replace strings').argRequired())
  .action((input, replace) => {
    FileExists(input, program)
    FileExists(replace, program)

    ReplaceCommandHandler(program)
  });

program.parse();
