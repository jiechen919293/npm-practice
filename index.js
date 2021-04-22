console.log('======= D A Y J S =======');
const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime');
const calendar = require('dayjs/plugin/calendar');
dayjs().format();
dayjs.extend(relativeTime)
dayjs.extend(calendar);

console.log(`1985 was ${dayjs('1985-01-01').fromNow()}`);
console.log(dayjs().calendar(dayjs('2008-01-01')));
console.log(dayjs().calendar(null, {
    sameDay: '[Today at] h:mm A',
}));
console.log(`=========================

`);

console.log('======= C H A L K =======');

const chalk = require('chalk');
console.log(chalk.blue('Hello world!'));
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
const name = 'Sindre';
console.log(chalk.green('Hello %s'), name);

console.log(`=========================

`);

console.log('==== P L U R A L I Z E ====');

const pluralize = require('pluralize');
console.log(pluralize.plural('regex'));
console.log(pluralize.singular('singles'));

console.log(`===========================

`);


console.log('==== V A L I D A T O R ====');

const validator = require('validator');

console.log(`===========================

`);