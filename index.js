const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Bot Online 24/7!');
});

app.listen(8000, () => {
  console.log('Servidor listo en el puerto 8000');
});

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('ready', () => {
  console.log(`Listo como ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;
  if (message.content.toLowerCase() === 'hola') {
    message.reply('¡Hola! Estoy activo las 24 horas gracias a Render. 🚀');
  }
});

client.login(process.env.TOKEN);
