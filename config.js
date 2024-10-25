//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "2349139271103";
global.owner = process.env.OWNER_NUMBER || "2348189862145";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOElPcDN0MW5rNWJxbVFBbmNmYnlGSUJaclRrQkQxVE9KQVBEbFpjVDUwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTS9ZTWU1d0NQWkt0Tk95eTc2dERuOFlWUFk0ejJBcFU5SGhwSndHUTBUdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRDFYejIvenBNVVBDanlSQW03V0xYRGVsd0Q1L3ozcHZZZWJraXlrR25BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6ZXZKakdlR0Q3ZmJUeEtJL3BSdmJpazF0aVdCc3BZb093OFVjdXFnM21zPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdCV2x5NzIwRjJWbmp4QnJrRzFWRVFpUjNFZVBTdHN0K0I0NkRUVEhXSEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9IaTUwNklETmgrSklVKzhOWCtLeXoyVkFhWlBDZHlCZTdMRmFXbUowMG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU04MTBOTk9rOG9SUEdKQWVFSTUyVHB1ZkhTTkhaWU1TQlY2RGtnUUYyMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGtEcGxPcGJHZmlrSnpFR3hVSCtaVnFoM0JieGlxRk9jS3BITUh2ditBTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNKK0s0UlFmWjVVQWdKalZQMWwvU09qYnJMbXltbld5Q1l2ZWJZd21pYlpVTjJPbXk1dnhtaFNPRWlZd2ZvK3pTVE5LaWRNekk3QjVZOCtGQUEwNWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkwLCJhZHZTZWNyZXRLZXkiOiJKWkFCRmV4dGZiaDBveHJQWk9LWVNSOE00bTJPaWlub0k2N2lGOGhocHpvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJYOU5JQVcwRVNCYUZtalRBMDRJVDZnIiwicGhvbmVJZCI6Ijc4MTZmMGYyLTc0ZGYtNDIyMS1iNjdhLTdmNTAwM2MwZTc5OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSXM3R1ZETGh2VXBXOWpPNFJqOEFnbWdOeWc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiLzJIRWlnb2RBalRYemJXeGJlemJlbktEaFNVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRXS0RZWlIxIiwibWUiOnsiaWQiOiIyMzQ4MTg5ODYyMTQ1OjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi6qqcX+GotuqrgOqrgCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnpPdDlnSEVPVDI3N2dHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZzZJQ21FcHdJMHR0Nng0NnYvK3gzZWlnanBSWWkrTWd0d2YyNk5FbUJCZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoickRkaHcrQno0TU1yUjF6SjR4V2pkS1pudmoxTXNmT2k2MHI1eVZ4VTZINnJQZnB5WGJXY2lzMkMzOHZ0Nlowdndqeng1TEhVbXIycm5NTWVlWk9GRHc9PSIsImRldmljZVNpZ25hdHVyZSI6Im9zZ0JvMWlvYXlOQTdPRnNSd0l1cmphbm00MGJVY0d3MGloUi9mUFBwS0xUdThUV1ZGQ2J4V25FWXZnTzArZDQvbS9kS0NaN3VzZnRqSXpyd0RwRmd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODE4OTg2MjE0NTo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllPaUFwaEtjQ05MYmVzZU9yLy9zZDNvb0k2VVdJdmpJTGNIOXVqUkpnUVkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjk4ODcwOTAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSE8zIn0=",
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𖤍ˡᵒʳᵈꪜ_ᥴꫀꫀM⃠𝐃",
  author: process.env.PACK_AUTHER || "𖤍ˡᵒʳᵈꪜ_ᥴꫀꫀM⃠𝐃",
  packname: process.env.PACK_NAME || "ᐯ匚乇乇",
  botname: process.env.BOT_NAME || "𖤍ˡᵒʳᵈꪜ_ᥴꫀꫀM⃠𝐃",
  ownername: process.env.OWNER_NAME || "ꪜ_ᥴꫀꫀ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
