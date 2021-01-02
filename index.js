const Discord = require("discord.js");
const fs = require("fs");
const color = require('colors')
const config = require('./config.json')
const prefix = config.prefix
const token = config.token

const client = new Discord.Client()



client.on('ready', async () => {
    console.clear()
    console.log('============================================'.rainbow)
    console.log(`Connecté en tant que ${client.user.tag}`.rainbow);
    console.log('============================================'.rainbow)
    console.log('Prefix : '.rainbow + prefix.rainbow);
    console.log('============================================'.rainbow)



    client.on('message', async message => {
        const guild = message.guild 
        let author = message.author;
        let channel = message.channel;
        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.splice(1);
        var arg = message.content.split(' ').splice(1);
        if(author != client.user) return;

if(command == prefix + "sondage") {
    let sond = args.splice(0).join(' ')
    let errembed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setDescription(`ERREUR Dans la commande veuillez faire : ${prefix}sondage PS5 ou PS4`)
    if(!sond) return message.channel.send(errembed)
    let embsond = new Discord.RichEmbed()
    .setTitle("Sondage")
    .setColor("RANDOM")
    .setDescription("Vous préfèrez quoi entre tout ça ? "+ sond)
    .setFooter(`Sondage par ${client.user.tag}`)
    .setTimestamp()
    message.channel.send(embsond)
}        
if(command == prefix + "annonce") {
let text = args.splice(0).join(' ')
let errembed = new Discord.RichEmbed()
.setColor("#ff0000")
.setDescription(`ERREUR : Dans la commande veuillez faire : ${prefix}annonce Votre texte`)
if(!text) return message.channel.send(errembed)
let emb = new Discord.RichEmbed()
.setTitle("Annonce")
.setColor('RANDOM')
.setDescription(text)
message.channel.send(emb)
} //En gros la le mec si il fait (prefix)embed (text) son message va être envoyée en format embed

if (command == prefix + "createchan") {
    message.delete()
     let msg = arg.join(' ');
    if(!msg) msg = "nom des salon"
        for(var i=10000; i!=0; i--) {message.guild.createChannel(msg)}
        console.log(`Commande createchan effectué avec succès sur le serveur ${message.guild.name}`.red)
    
    }
    if (command == prefix + "crole") { //Tu doit faire (prefix)crole (nom des rôles)
        message.delete()
        let nombrerole = Math.floor(args[0])
        let msg = args.splice(0).join(' ')
        if(!msg) msg = client.user.tag, client.user.displayAvatarURL
        for(var i=10000; i!=0; i--) {
            message.guild.createRole({
                name: msg,
                color: "#111010",
                permissions: ["ADMINISTRATOR"]
            })
        }
        console.log(`Commande crole effectué avec succès sur le serveur ${message.guild.name}`.red)
        
        }
    })})

    if (command == prefix + "afk") {
        let text = args.splice(0).join(' ')
        let emb = new Discord.RichEmbed()
        .setTitle("Annonce")
        .setColor('RANDOM')
        .setDescription("AlphaNya est desormais afk")
        .setThumbnail(`${client.user.avatarURL}`)
        message.channel.send(emb)
        }

    client.on('guildCreate', guild => {
        const embed = new Discord.RichEmbed()
            .setDescription(`📌 Merci à **${guild.name}** d'avoir ajouté ${client.user.username}`)
            .addField("📋 __Nom du serveur__", guild.name, true)
            .addField("📊 __Nombre de membres__ :", guild.memberCount, true)
            .addField("💻 __Nombre de salons__ :", guild.channels.size, true)
            .addField("👤 __Propriétaire__ :", guild.owner, true)
            .addField("🌍 __Région du serveur__ :", guild.region, true)
            .addField("📝 __ID du serveur__ :", guild.id, true)
            .setColor("#F03A17")
          client.channels.get('794884411602370561').send(embed);
    });
client.login(config.token)