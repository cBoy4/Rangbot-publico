const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const http = require("http");
const express = require("express");
const app = express()

/// Bot////

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
  bot.user.setActivity(`Ser adorable :3`);
});

bot.on('message', msg => {
  if (msg.content === 'Pong') {
   msg.reply("Ping")
                     
  }
});


bot.on('guildMemberAdd', member => {
    member.guild.channels.get("720159428376264727").send("**BIENVENIDO **" + member + "** a la sergía del Rangod**")
  member.guild.channels.get('720159428376264727').send("<:Missile:721015479400923178>");
});
   
   
      
/////// Aqui termina Missile bot///////





bot.login("Codigo muh largo muh largo X3");
