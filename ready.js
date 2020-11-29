module.exports = async(client, data) => {
    client.user.setActivity(`Bot en chargement`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/nezukochan"
      });
}