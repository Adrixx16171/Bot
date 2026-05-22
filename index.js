const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const app = express();

// Servidor web para que Koyeb mantenga vivo el bot 24/7
app.get('/', (req, res) => {
  res.send('¡El bot está encendido y funcionando 24/7!');
});

app.listen(8000, () => {
  console.log('Servidor de actividad web listo en el puerto 8000.');
});

// Configuración básica del bot de Discord
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('ready', () => {
  console.log(`¡Listo! Conectado a Discord como: ${client.user.tag}`);
});

// Comando básico de prueba: Si escribes "hola", el bot responde
client.on('messageCreate', (message) => {
  if (message.author.bot) return; // Ignora a otros bots

  if (message.content.toLowerCase() === 'hola') {
    message.reply('¡Hola! Estoy activo las 24 horas. 🚀');
  }
});

// Conexión segura usando la variable de entorno de Koyeb
