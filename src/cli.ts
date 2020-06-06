/*
 * Copyright 2019 Thoughtworks Inc. All rights reserved
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import chalk from 'chalk';
import commander from 'commander';
import fs from 'fs';
import Logger, {createLogger} from './logger';

const logger = createLogger('cli');
logger.setLevel(Logger.INFO);

const cli = (args: any = process.argv) => {
  logger.info(chalk.yellow('TOPO C4 Presenter'));
  commander
    .description('Please select one of the following actions: ')
    .option('--host <host>', 'Set host')
    .parse(process.argv);

  let jsonObject;

  try {
    logger.info('Do something');
  } catch (error) {
    errorMessage(error);
  }
};

const errorMessage = (message: string) => {
  logger.error(
    chalk.red('Something went wrong... please see above logs for details'),
  );
  logger.debug(message);
};

export default cli;
