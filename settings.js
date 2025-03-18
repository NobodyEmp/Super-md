
const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")
require('dotenv').config(); 

//======= Change settings =======\\
global.owner = process.env.OWNER_NUMBER || "2348085374966"
global.botname = process.env.BOT_NAME || "Super md"
global.ownername = process.env.OWNER_NAME || "Nobody"; //set bot owner name here 
global.prefix = process.env.PREFIX || "."; // your desired prefix symbol only
global.timezone = process.env.TIME_ZONE || "Africa/Lagos";
global.author = process.env.AUTHOR  || "Nobody";
global.packname = process.env.PACK_NAME  || "Super";
global.startup = process.env.STARTUP_MSG === 'true';
global.typeMenu = process.env.MENU_TYPE  || "v2";
global.onlypc = process.env.ONLYPC_MSG  || "Sorry buddy the bot won't work directly in group chat to reduce spam use in private chat";
global.onlygroup = process.env.ONLYGC_MSG  || "Sorry buddy the bot won't work directly in private chat to reduce spam use in group";
global.publicx = false

global.themeemoji = "😇"
global.tempatDB = 'database.json' // dont change might cause big errors 
global.pairing_code = true // if deploying on panel set true if on any other platform leave it false

// Settings Image Url
global.image = {
menu: "https://files.catbox.moe/bj888g.jpg", 
reply: "https://files.catbox.moe/9nrqqg.jpg", 
}
//newsletter 
global.amira = "120363301095727346@newsletter"
global.amiraname = "𝔸ℝℂℋℰℛ ℙℝ𝕠ʝ𝔼ℂ𝕋"
global.thumbUrl = "https://files.catbox.moe/akdqw5.jpg"
global.wagc = "https://whatsapp.com/channel/0029VagLJFx4CrfkyNJUsg1Y"
// Message Command 
global.mess = {
	owner: "*𝙱𝙾𝚃 𝙰𝙲𝙲𝙴𝚂𝚂 𝙳𝙴𝙽𝙸𝙴𝙳* This feature is for bot owners only!",
	admin: "*𝙱𝙾𝚃 𝙰𝙲𝙲𝙴𝚂𝚂 𝙳𝙴𝙽𝙸𝙴𝙳* This feature is for group admins only!!",
	botAdmin: "*𝙱𝙾𝚃 𝙰𝙲𝙲𝙴𝚂𝚂 𝙳𝙴𝙽𝙸𝙴𝙳* This feature is only for when the bot is an admin.!",
	group: "*𝙱𝙾𝚃 𝙰𝙲𝙲𝙴𝚂𝚂 𝙳𝙴𝙽𝙸𝙴𝙳* This feature is for groups only!",
	private: "*𝙱𝙾𝚃 𝙰𝙲𝙲𝙴𝚂𝚂 𝙳𝙴𝙽𝙸𝙴𝙳* This feature is for private chat only!!",
	ban: "*𝙱𝙾𝚃 𝙰𝙲𝙲𝙴𝚂𝚂 𝙳𝙴𝙽𝙸𝙴𝙳* you have been banned contact owner to unban!!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done',
	limit: 'You have reach your limit'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})