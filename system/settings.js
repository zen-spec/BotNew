let fs = require('fs') 
let chalk = require('chalk')
let moment = require('moment-timezone')

// Owner
global.owner = [
  ['6285716158365', 'Zen', 'zenitymd@gmail.com', true]
] // Put your number here
global.prems = ['6285716158365'] // Premium
global.mods = ['6285716158365'] // mods
global.rose = 'EekxFi43007K6xdQfhLaPmbRK4sTnygTwfbP6jahzkWWbaOCsOSSWwacvTS0MgxT';
global.xyro = 'ClaraKeyOfficial';
global.btc = 'Rizalzllk';
global.xzn = 'Rara';
global.lolkey = 'pentilkuda';
global.yanz = 'iyan123';
global.zein = 'zenzkey_c22460242f6e',
global.APIs = {
    // API Prefix
    // name: 'https://website'
    xteam: 'https://api.xteam.xyz',
    lol: 'https://api.lolhuman.xyz',
    males: 'https://malesin.xyz',
    neoxr: 'https://api.neoxr.eu',
    xyro: 'https://api.xyroinee.xyz',
    btc: 'https://api.betabotz.org',
    xfarr: 'https://api.xfarr.com',
    dzx: 'https://api.dhamzxploit.my.id',
    zein: 'https://api.zahwazein.xyz',
    rose: 'https://api.itsrose.life',
    popcat: 'https://api.popcat.xyz',
    xzn: 'https://skizo.tech',
    saipul: 'https://saipulanuar.cf',
}
global.APIKeys = {
    // APIKey Here
    // 'https://website': 'apikey'
    'https://api.zahwazein.xyz': 'zenzkey_c22460242f6e',
    'https://api.xteam.xyz': 'cristian9407',
    'https://api.xyroinee.xyz': 'ClaraKeyOfficial',
    'https://api.neoxr.eu': 'Composing',
    'https://api.xfarr.com': 'Kemii',
    'https://api.zahwazein.xyz': 'Kemii',
    'https://api.betabotz.org': 'Rizalzllk',
    'https://api.lolhuman.xyz': 'GataDios',
    'https://api.itsrose.life': 'EekxFi43007K6xdQfhLaPmbRK4sTnygTwfbP6jahzkWWbaOCsOSSWwacvTS0MgxT',
    'https://skizo.tech': 'Rara',
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'Linyin - Wabot'
  var sticker_author = 'Zen'
} else {
  var sticker_name = 'Linyin - Wabot'
  var sticker_author = 'Zen'
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// Document
global.minety = pickRandom(['application/msword', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'])
global.kiku = 'application/vnd.android.package-archive'

// Database
global.version = '5.0.3'
global.sessionName = 'Linyin'
global.gcbot = 'https://chat.whatsapp.com/DL8xYB4l3Sd58v1fg5J9UE'
global.instagram = 'https://www.instagram.com/namilrara'
global.namebot = '© Linyin Bot v3.0.3 (Public Bot)'
global.thumb = 'https://telegra.ph/file/834792303defa2c85f177.jpg'
global.thumbnail = 'https://telegra.ph/file/ae0b8583e5e19740c2030.jpg'

global.qris = 'https://telegra.ph/file/4bbc09a27eda11c79e0f3.jpg'
global.email = 'zenitymd@gmail.com'
global.creator = "6285716158365@s.whatsapp.net"
global.nomorbot = '6285694163284'
global.nomorown = '6285716158365'

// Harga Nokos
global.nokosindo = '7000'
global.nokosusa = '8000'
global.nokosmalay = '12000'

// Panel
global.domain = 'https://veyyyzdzz.panellprivate.my.id' // Domain Web
global.apikey = 'ptla_Jr4Thc9i6pg7ncHktjkplSrujMSzBilVdA4deV7JN5D' // Key PTLA
global.c_apikey = 'ptlc_nWaVwvaQMCtdhqDfG7KgvILkiG9LuFEquF7E1XSUQdq' // Key PTLC
global.eggs = '15'
global.locs = '1'
/*==============================*/
global.flaaa = [
    'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
    'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
]
global.hwaifu = [
    'https://telegra.ph/file/834792303defa2c85f177.jpg',
    'https://i.pinimg.com/originals/85/4d/bb/854dbbd30304cd69f305352f0183fad0.jpg',
]

/*==================================*/
// Atlantic Pedia Api
global.atlaapi = 'jiKgbG6XBgU3E0zL0UjeXdELK5ExfzDycILGo5JWQYwITQ0UAZCoNZFd1MAOC2OY1I5qBFRdSV4wHzTUZl19e6T7IZF5ciLHn1MK'

// Medan Pedia Api
global.medan = ''
global.medanid = ''

// Sosial Media
global.sig = 'https://www.instagram.com/namilrara'
global.syt = '-'
global.sgh = '-'
global.sgc = 'https://chat.whatsapp.com/KSOWP0atWuy8439hju4d1A'
global.swa = 'https://wa.me/6285863907468'
global.swb = '-' // Link Discord
global.snh = 'https://nhentai.net/g/365296/' // Link nhentai

// Pembayaran
global.pdana = '~Not Found~'
global.povo = '~Not Found~'
global.pgopay = '~Not Found~'
global.pulsa = '~Not Found~'
global.pulsa2 = '~Not Found~'
global.psaweria = '~Not Found~'
global.ptrakteer = '~Not Found~'
global.psbuzz = '~Not Found~'

// Fake Size
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

global.useMulti = true
global.autoread = true

// Watermark
global.packname = 'Linyin - Wabot'
global.author = '-'
global.wm = '© Zen'
global.wm2 = 'Zen Javanese'
global.titlebot = `${global.wm}`
global.danied = 'A K S E S  K A M U  D I  T O L A K!!'
global.done = '```Status Request :```' + ' `Succes`'
global.packname = 'Linyin - Wabot'
global.author = 'Zen'
global.nameown = 'Mitsu Zen'
global.wait = 'Tunggu sebentar ya kak...'

// Tampilan
global.htki =  '⬣───「' // Hiasan kiri
global.htka = '」───⬣' // Hiasan kanan
global.htjava = '❃' // Hiasan
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'

global.multiplier = 1000 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      atm: '💳',
      money: '💰',
      bank: '🏦',
      potion: '🥤',
      bibitanggur: '🌱',
      bibitjeruk: '🌿',
      bibitapel: '☘️',
      bibitmangga: '🍀',
      bibitpisang: '🌴',
      anggur: '🍇',
      jeruk: '🍊',
      apel: '🍎',
      mangga: '🥭',
      pisang: '🍌',
      botol: '🍾',
      plastik: '📜',
      gelas: '🧋',
      chip: '♋',
      umpan: '🪱',
      skata: '🧩',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})//