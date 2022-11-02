import { Bot, Context } from 'grammy';
import { hydrateReply, parseMode } from '@grammyjs/parse-mode';

import { config } from '../config';
import { msgDumpCommand } from './commands';
import { handleError } from './helpers';
import { BotContext } from './types/context';

export const bot = new Bot<BotContext>(config.BOT_TOKEN);

bot.api.config.use(parseMode("HTML"));

bot.use(hydrateReply);

bot.use(msgDumpCommand);

if (config.isDev) {
  bot.catch(handleError);
}
