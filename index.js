const fetch = require("node-fetch");
const discord = require("discord.js");

//naming your client config
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

//random stuff
client.on
client.on("ready", () => {
    client.user.setActivity(`join https://discord.gg/kMHmW4cJ for support`, { type: "WATCHING"})
})
//chatbot starts
client.on("message", async message => {
if (message.channel.name == "chatbot") {
if (message.author.bot) return;
message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
if (message.content.includes(`@`)) {
return message.channel.send(`**:x: Please dont mention anyone**`);
 }
  message.channel.startTyping();
if (!message.content) return message.channel.send("Please say something.");
fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(message.content)}&botname=${client.user.username}&ownername=aa124231231`)
    .then(res => res.json())
    .then(data => {
        message.channel.send(`> ${message.content} \n <@${message.author.id}> ${data.message}`);
    });
      message.channel.stopTyping();
}
});
client.on("message", async message => {
  const cchann = db.get(`chatbot_${message.guild.id}`);
  if (cchann === null) return;
  if (!cchann) return;
  const sender = client.channels.cache.get(cchann);
  if (message.channel.name == sender.name) {
    if (message.author.bot) return;
    message.content = message.content
      .replace(/@(everyone)/gi, "everyone")
      .replace(/@(here)/gi, "here");
    message.channel.stopTyping();
    message.channel.startTyping();
    fetch(
      `https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(
        message.content
      )}&botname=${client.user.username}&ownername=aa124231231`
    )
      .then(res => res.json())
      .then(data => {
        message.lineReply(data.message);
      });
    message.channel.stopTyping();
  }
});
//logging in to da bot kid
client.login(process.env.TOKEN);

