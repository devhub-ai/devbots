#!/usr/bin/env node

import axios from 'axios';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import ora from 'ora';
import chalk from "chalk"

const argv = yargs(hideBin(process.argv))
  .command('create <title> <prompt>', 'Create a new devbot', (yargs) => {
    yargs.positional('title', {
      describe: 'Title of the devbot',
      type: 'string',
    }).positional('prompt', {
      describe: 'Prompt for the devbot',
      type: 'string',
    });
  })
  .command('chat <apiKey> <query>', 'Chat with a devbot', (yargs) => {
    yargs.positional('apiKey', {
      describe: 'API key of the devbot',
      type: 'string',
    }).positional('query', {
      describe: 'Query to send to the devbot',
      type: 'string',
    });
  })
  .command('help', 'Show help information about devbots', () => {})
  .help()
  .argv;

const createDemobot = async (title, prompt) => {
  const spinner = ora('Creating devbot...').start();
  try {
    const response = await axios.post('https://devbots-server.vercel.app/api/chatbots/demobot-create', {
      title,
      prompt,
    });
    spinner.succeed('devbot created successfully!');
    console.log('API Key:', response.data.demobot.apiKey);
  } catch (error) {
    spinner.fail('Error creating devbot');
    console.error('Error:', error.response ? error.response.data : error.message);
  }
};

const chatWithDemobot = async (apiKey, query) => {
  const spinner = ora('Sending query to devbot...').start();
  try {
    const response = await axios.post('https://devbots-server.vercel.app/api/chatbots/demobot-chat', {
      apiKey,
      query,
    });
    spinner.succeed('Response received!');
    console.log(response.data.response);
  } catch (error) {
    spinner.fail('Error chatting with devbot');
    console.error('Error:', error.response ? error.response.data : error.message);
  }
};

const showHelp = () => {
  console.log(`
DevBots CLI

Commands:
  ${chalk.green('create')} <title> <prompt>   Create a new devbot with the specified title and prompt.
  ${chalk.green('chat')} <apiKey> <query>     Chat with a devbot using the provided API key and query.
  ${chalk.green('help')}                       Show this help information.

For more information, visit the DevBots documentation.
  `);
};

if (argv._.includes('create')) {
  createDemobot(argv.title, argv.prompt);
} else if (argv._.includes('chat')) {
  chatWithDemobot(argv.apiKey, argv.query);
} else if (argv._.includes('help')) {
  showHelp();
} else {
  console.log('Use --help to see available commands');
}