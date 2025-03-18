
require('./settings');
const fs = require('fs');
const pino = require('pino');
const path = require('path');
const axios = require('axios');
const chalk = require('chalk');
const readline = require('readline');
const FileType = require('file-type');
const { exec } = require('child_process');
const { say } = require('cfonts');
const { Boom } = require('@hapi/boom');
const NodeCache = require('node-cache');
const speed = require('performance-now');

const { default: WAConnection, generateWAMessageFromContent, 
prepareWAMessageMedia, useMultiFileAuthState, Browsers, DisconnectReason, makeInMemoryStore, makeCacheableSignalKeyStore, fetchLatestWaWebVersion, proto, PHONENUMBER_MCC, getAggregateVotesInPollMessage } = require('@whiskeysockets/baileys');

const pairingCode = global.pairing_code || process.argv.includes('--pairing-code');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

/*const { cleaningSession } = require("./library/boostsession");
(async () => {
await setInterval(async () => {
await cleaningSession("./session")
}, 10000)
})()*/


//================================================================================

const DataBase = require('./source/database');
const database = new DataBase();
(async () => {
	const loadData = await database.read()
	if (loadData && Object.keys(loadData).length === 0) {
		global.db = {
			users: {},
			groups: {},
			database: {},
			settings : {}, 
			...(loadData || {}),
		}
		await database.write(global.db)
	} else {
		global.db = loadData
	}
	
	setInterval(async () => {
		if (global.db) await database.write(global.db)
	}, 3500)
})();

//================================================================================

const { MessagesUpsert, Solving } = require('./source/message')
const { isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./library/function');

//================================================================================

async function startingBot() {
    const store = await makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
	const { state, saveCreds } = await useMultiFileAuthState('session');
	const { version, isLatest } = await fetchLatestWaWebVersion()
	
	const nØbødy = WAConnection({
        printQRInTerminal: !pairingCode, 
        logger: pino({ level: "silent" }),
        auth: state,
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 10000,
        emitOwnEvents: true,
        fireInitQueries: true,
        browser: ["Ubuntu","Chrome","20.0.04"],
        generateHighQualityLinkPreview: false, 
        syncFullHistory: false,
        markOnlineOnConnect: false,    
        getMessage: async (key) => {
        try {
        if (store) {
      const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
      return msg?.message || undefined
    }
    return { conversation: 'Super Md (By Nobody Emp)' }
  } catch (error) {
    console.error('Error loading message:', error)
    return { conversation: 'Super Md (By Nobody Emp)' }
  }
}
})

	
	
		if (pairingCode && !nØbødy.authState.creds.registered) {
		let phoneNumber;
	    phoneNumber = await question(chalk.black(chalk.red.bold("\n Super Md\n"), chalk.white.bold("© 𓄂⍣⃝𝐄𝐌𝐏𝄟✮͢≛𝐍𝐎𝐁𝐎𝐃𝐘𝄟✮\n"), chalk.white.italic(`\n# Please input your WhatsApp number ,\nFormat Number 234xx without +\n`)))
			phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
		
			let code = await nØbødy.requestPairingCode(phoneNumber);
			code = code.match(/.{1,4}/g).join(" - ") || code
			console.log(chalk.white.italic(`This is your WhatsApp pairing code please read carefully:`), chalk.red.bold(code))
	}

	
//================================================================================
	
nØbødy.ev.on('creds.update', await saveCreds)

//================================================================================

nØbødy.ev.on('connection.update', async (update) => {
		const { connection, lastDisconnect, receivedPendingNotifications } = update
		if (connection === 'close') {
			const reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.connectionLost) {
				console.log('Connection to Server Lost, Attempting to Reconnect...');
				startingBot()
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log('Connection closed, Attempting to Reconnect...');
				startingBot()
			} else if (reason === DisconnectReason.restartRequired) {
				console.log('Restart Required...');
				startingBot()
			} else if (reason === DisconnectReason.timedOut) {
				console.log('Connection Timed Out, Attempting to Reconnect...');
				startingBot()
			} else if (reason === DisconnectReason.badSession) {
				console.log('Delete Session and Scan again...');
				startingBot()
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log('Close current Session first...');
				startingBot()
			} else if (reason === DisconnectReason.loggedOut) {
				console.log('Scan again and Run...');
				exec('rm -rf ./session/*')
				process.exit(1)
			} else if (reason === DisconnectReason.Multidevicemismatch) {
				console.log('Scan again...');
				exec('rm -rf ./session/*')
				process.exit(0)
			} else {
				
nØbødy.end(`Unknown DisconnectReason : ${reason}|${connection}`)
			}
		}
		if (connection == 'open' && global.startup) {
nØbødy.sendMessage(nØbødy.user.id.split(":")[0] + "@s.whatsapp.net", {text: `\`\`\`
🚀 𝗦𝘂𝗽𝗲𝗿 𝗠𝗗 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆! 🚀

🔹 𝗣𝗿𝗲𝗳𝗶𝘅: ${global.prefix}  

📢 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 𝗖𝗵𝗮𝗻𝗻𝗲𝗹:  
🔗 https://whatsapp.com/channel/0029VagLJFx4CrfkyNJUsg1Y  

🛠 𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗚𝗿𝗼𝘂𝗽:  
🔗 https://chat.whatsapp.com/LYbkuIzUUf5KxTMg9VKbl3  

⚠ **𝗜𝗺𝗽𝗼𝗿𝘁𝗮𝗻𝘁 𝗡𝗼𝘁𝗲:**  
If the bot is **unresponsive**, kindly restart it from the host or deployment site  
Stay updated with the **latest features & improvements** in Super MD! 
> **please kindly join our channel and WhatsApp group to show love ❤** 

✨ **Thank you for choosing Super MD!**  

👑 𝗥𝗲𝗴𝗮𝗿𝗱𝘀,  
𓄂⍣⃝𝐄𝐌𝐏𝄟✮͢≛𝐍𝐎𝐁𝐎𝐃𝐘𝄟✮
\`\`\``})
console.log(chalk.magenta.italic(`Super Md successfully connected to WhatsApp✓\nThanks For Using\n`))
		} else if (receivedPendingNotifications == 'true') {
			console.log('Please wait About 1 Minute...')
		}
	});


await store.bind(nØbødy.ev)	
await Solving(nØbødy, store)
	
//================================================================================
	
nØbødy.ev.on('messages.upsert', async (message) => {
 await MessagesUpsert(nØbødy, message, store);
});

//================================================================================

nØbødy.ev.on('contacts.update', (update) => {
		for (let contact of update) {
			let id = 
nØbødy.decodeJid(contact.id)
			if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
		}
});

//================================================================================
	
nØbødy.ev.on('group-participants.update', async (anu) => {
try {
let metadata = await nØbødy.groupMetadata(anu.id)
const groupDesc = metadata.desc;
const moment = require("moment-timezone");
const welDate = moment.tz(`${global.timezone}`).format('DD/MM/YYYY')
let members = metadata.participants.length
const participants = anu.participants

for (let num of participants) {
  // Get Profile Picture User
  try {
    ppuser = await nØbødy.profilePictureUrl(num, 'image')
  } catch {
    ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
  }

  // Welcome Message
  if (global.db.groups && global.db.groups[anu.id] && global.db.groups[anu.id].welcome && anu.action == 'add') {
    let wel = `Hello 🤗 @${num.split("@")[0]} welcome to  ${metadata.subject}\n*READ GROUP DESCRIPTION!!!*\n${groupDesc}`
    await nØbødy.sendMessage(anu.id, { image: { url: ppuser }, caption: wel }).catch(e => { })
  }

  // Goodbye Message
  if (global.db.groups && global.db.groups[anu.id] && global.db.groups[anu.id].goodbye && (anu.action === 'remove' || anu.action === 'leave')) {
    let txtLeft = `Bye 😣 @${num.split("@")[0]} leaving group  ${metadata.subject}`
    await nØbødy.sendMessage(anu.id, { image: { url: ppuser }, caption: txtLeft })
  }
}
} catch (err) {
console.log(err)
}
})

//================================================================================
	

return nØbødy

}


startingBot()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});