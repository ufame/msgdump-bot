import 'dotenv/config';
import {
  str,
  bool,
  cleanEnv
} from 'envalid';

export const config/*: Readonly<{ NODE_ENV: string; BOT_TOKEN: string; }>*/ = cleanEnv(process.env, {
  NODE_ENV: str({
    choices: [
      'development',
      'production'
    ]
  }),
  BOT_TOKEN: str(),
  IN_GROUP_RESTRICT: bool()
});
