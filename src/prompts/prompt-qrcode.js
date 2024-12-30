import chalk from 'chalk';

const promptQRCode = [
  {
    name: 'link',
    description: chalk.yellow.bold(
      '🔗 Insira o link que deseja gerar o QR Code: '
    ),
  },
  {
    name: 'type',
    description: chalk.yellow('Escolha entre: \n 1- Imagem \n 2- Terminal'),
    pattern: /^[1,2]+$/,
    message: chalk.red('Escolha apenas entre 1 e 2'),
    required: true,
  },
];

export default promptQRCode;
