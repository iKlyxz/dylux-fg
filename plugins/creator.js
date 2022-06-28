function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
  m.reply(`
*≡ OWNER*
  *Not.Sxrgio*
▢ Instagram :
  • https://instagram.com/not.sxrgio
▢ WhatsApp :
  • (escribe solo si es necesario) 
▢ GitHub :
  • 
▢ Telegram : 
  • t.me/legalizala
  • t.me/
  • t.me/
▢ Facebook : 
  • https://facebook.com/ItzMeKingWT
  • https://facebook.com/ItzMeKingWT
▢ YouTube : 
  • 
  
 *≡ HELPERS*
  *NADA*
▢ Instagram :
▢ WhatsApp : wa.me/
  *GABRIEL*
▢ Instagram : https://
▢ WhatsApp : wa.me/51977802958
`) 


}

handler.help = ['creador']
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 


export default handler
