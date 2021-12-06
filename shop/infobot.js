const infobot = (status, offline, latensii, totalchat, giid, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, ownerNumberrr,runtime, kyun) => {
return `ℒ⃝👾 *I N F O  B O T*

🤖 Nama BOT : 𝑨-𝑫𝒆𝒔𝒕𝒚
👨‍💻 Owner : @${ownerNumberrr.split('@')[0]}
☪️ Lib  : RenB0T Offcial
☸️ Type  : Heroku
♂️ Mode : ${status}
♀️ Status : ${offline ? 'OFFLINE' : 'ONLINE'}
👨‍👨‍👧‍👦 Group Chat : ${giid.length}
👥 Personal Chat : ${totalchat.length - giid.length}
👨‍👩‍👧‍👧 Total Chat : ${totalchat.length}
🍃 Speed : ${latensii.toFixed(4)} Second (s)
🌾 Runtime : ${kyun(runtime)}


ℒ⃝📲 *I N F O  D E V I C E*

🪀 WhatsApp V : ${wa_version}
🛑 RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
📈 MCC : ${mcc}
📉 MNC : ${mnc}
📊 OS Version : ${os_version}
📫 Merk Hp : ${device_manufacturer}
📮 Versi Hp : ${device_model}


ℒ⃝👨‍💻 *H U B U N G I  S A Y A*

⛎ Heroku : api-RenB0T.herokuapp.com
♈ YouTube : https://youtube.com/channel/UChy1o7FRCEkt8ewAkFxq0HA
♉ Github : RenB0T.github.io
♊ Instagram : Pribadi!!
♋ Tiktok : https://vt.tiktok.com/ZSeUpAGDJ/
♌ Twetter : https://twitter.com/Nataa040320?t=AIHzEX0sCHUs49lSJCg0DQ&s=09
♎ Telegram : Pribadi!!
♏ WhatsApp : wa.me/+6285845823026
`}

exports.infobot = infobot
 
