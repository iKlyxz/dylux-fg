let handler =  m => m.reply(`

≡ *DONACION*
puedes donar si quieres ayudar a mantener el bot activo

▢ *PayPal*
• *Link :* https://paypal.me/SsxrgioVD
▢ *Mercado Pago Arg*
• *Link :* 
▢ *Tigo Money*
• *N° :*  

_Al donar consigues_  *Premium* 

• Diamantes ilimitados
• comandos de *menu premium* desbloqueado
• Limite de *Descargas +250 MB*, podrá descargar archivos de 300 mb que es lo que permite WhatsApp

Únete a nuestro grupo de Telegram t.me/Legalizala
`.trim())
handler.help = ['donar']
handler.tags = ['main']
handler.command = ['donar', 'apoyar', 'donate'] 

export default handler
