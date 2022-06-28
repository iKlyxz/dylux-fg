let handler = async (m, { conn, participants, groupMetadata, args }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n▢ ')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'

let text = `
≡ *STAFF DEL GRUPO* _${groupMetadata.subject}_

┌─⊷ *🍆𝐋𝐎𝐒 𝐌𝐀𝐒 𝐊𝐂𝐇𝐄𝐑𝐎𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎🍑💦*
▢ ${listAdmin}
└───────────
`.trim()
conn.sendFile(m.chat, pp, 'staff.png', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['staff']
handler.tags = ['group']
handler.command = ['staff', 'admins', 'listadmin'] 
handler.group = true
export default handler
