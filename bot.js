const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("604370652622880770")
setInterval(function() {
channel.send(`skinnero skinnero skinnero skinnero skinnero`);
}, 30)
})

client.login(process.env.BOT_TOKEN);