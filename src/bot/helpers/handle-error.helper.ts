import { BotError } from 'grammy';
import { BotContext } from '../types/context';

export const handleError = async (error: BotError<BotContext>) => {
  const { ctx } = error;
  const err = error.error;

  console.error(ctx.update.update_id, err);
};
