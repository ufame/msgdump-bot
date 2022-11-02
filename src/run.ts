import { bot } from './bot';

const run = () => {
  bot.start({
    onStart: ({ username }) => {
      console.log(`Bot @${username} has started.`)
    }
  })
};

run();
