let yargs = require("yargs");
import { Cli } from './cli';

let cli = new Cli();

/**
 * CLI Commands.
 */
var argv = yargs.usage("$0 command args")
    .command("init", "Initialize server with a config file.", yargs => cli.init(yargs))
    .command("client:add", "Register a client that can make api requests.", () => cli.clientAdd(yargs))
    .command("client:remove", "Remove a client that has been registered.", yargs => cli.clientRemove(yargs))
    .command("start", "Start up the server.", cli.start)
    .option('w', {
        alias: 'watch',
        describe: 'Starts the server in watch mode, terminating it when closed'
    })
    .command("stop", "Stops the Laravel Echo Server daemon.", cli.stop)
    .demand(1, "Please provide a valid command.")
    .help("h")
    .alias("h", "help")
    .argv;
