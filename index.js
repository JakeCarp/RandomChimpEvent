const Discord = require('discord.js');
const chimp = new Discord.Client();
const ytdl = require('ytdl-core');


chimp.on('message', async message => {

    if(message.content == '/join') {
        if(message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            connection.play("/sounds/Chimp_Scream.mp3")
        } else {
            message.reply('Retard');
        }
    }
})
console.log("chimps in style")
chimp.login('NzMyMzE3MjM0Nzg5MDg5NDYx.XwzIQQ.Z-X2yyoMrhZj62vztvfLox4zO4E');

