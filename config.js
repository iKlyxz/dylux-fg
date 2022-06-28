import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['977802958', 'Almighty Svd', true], 
  ['977802958'], 
  ['977802958'], 
 ['977802958'] 
  
] //Numeros de owner 

global.mods = [] 
global.prems = ['50489079501', '5219631769130', '573125484672']
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com', 
  zenz: 'https://zenzapis.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll', 
  'https://zenzapis.xyz': '675e34de8a'
}

// Sticker WM
global.packname = '𝔏𝔢𝔤𝔞𝔩𝔦𝔷𝔞𝔩𝔞 𝔭𝔢 𝔠𝔞𝔲𝔰𝔞'
global.author = '@not.sxrgio'
global.igfg = '\n▢ Sígueme en Instagram\nhttps://www.instagram.com/not.sxrgio\n' 
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://Facebook.com/iTzMeKingWT'

global.wait = '*⌛ _Cargando..._*\n*▰▰▰▱▱▱▱▱▱*'

global.multiplier = 69 


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
