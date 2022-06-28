import db from '../lib/database.js'

export function before(m) {
    let user = db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  ✳️ Dejaste de estar AFK ${user.afkReason ? ' \n▢ Razón ' + user.afkReason : ''}
▢ Durante ${(new Date - user.afk).toTimeString()}
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`
✳️ 𝐂𝐀𝐔𝐒𝐀 𝐃𝐄𝐉𝐀 𝐃𝐄 𝐉𝐎𝐃𝐄𝐑, 𝐄𝐒𝐓𝐎𝐘 𝐀𝐇𝐎𝐑𝐀 𝐄𝐍: 
${reason ? '▢ *Razón* : ' + reason : '*Sin razón*'}
▢ Durante : ${(new Date - afkTime).toTimeString()}
  `.trim())
    }
    return true
}
