module.exports = {
  Admins: ["715740884553039883", "492778616309153792"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "*Coming Soon!*", //Support Server Link
  Token: process.env.Token || "ODk5NDQ1NjkxOTE3NjkyOTI5.YWy4Ew.NKiBSP1PIbvKswy_A91Sg0o2QBw", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "899445691917692929", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "F14Fl46xK6eVthDKBjjDLBfnOo9aAMx9", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "3e436714ba794278a52439fae42d15ca", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "81665c59f4e54fe6979943fc8535e5bb", //Spotify Client Secret
  },
};
