import chalk from 'chalk';

const mainPrompt = [
  {
    name: 'select',
    description: chalk.yellow.bold(
      '🔍 Escolha a ferramenta: \n 1- QR Code \n 2- Gerador de senha \n'
    ),
    pattern: /^[1,2]+$/,
    message: chalk.red('Escolha apenas entre 1 e 2'),
    required: true,
  },
];

export default mainPrompt;
