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
    .option('f', {
        alias: 'forever',
        describe: 'Starts the server as a daemon'
    })
    .command("stop", "Stops the Laravel Echo Server daemon.", cli.stop)
    .command("restart", "Restarts the Laravel Echo Server daemon.", cli.restart)
    .command("status", "returns the status of the Laravel Echo Server daemon.", cli.status)
    .demand(1, "Please provide a valid command.")
    .help("h")
    .alias("h", "help")
    .argv;
