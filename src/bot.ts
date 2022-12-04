import { Bot, Context } from 'grammy';

import { config } from './config';

type MyContext = Context & {

};

const bot = new Bot<MyContext>(config.BOT_TOKEN);

bot
  .chatType('private')
  .on('message', async ctx => {
    await ctx.reply(`<code>${JSON.stringify(ctx, null, 2)}</code>`, {
      parse_mode: 'HTML',
      reply_to_message_id: ctx.message.message_id
    });
  });

bot.command('msgdump', async ctx => {
  const isGroup = (ctx.chat.type === 'group' || ctx.chat.type === 'supergroup');

  if (config.IN_GROUP_RESTRICT && isGroup) {
    const chatAdmins = await ctx.getChatAdministrators();
    const result = chatAdmins.find(item => item.user.id === ctx.from.id);

    if (!result) {
      return;
    }
  }

  const message_to_dump = ctx.message.reply_to_message || ctx;
  await ctx.reply(`<code>${JSON.stringify(message_to_dump, null, 2)}</code>`, {
    parse_mode: 'HTML',
    reply_to_message_id: ctx.message.message_id
  });
});

bot.start({
  onStart: ({ username }) => {
    console.log(`Bot @${username} has started.`)
  }
});
