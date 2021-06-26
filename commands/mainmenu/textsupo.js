/*CMD
  command: textsupo
  help: 
  need_reply: true
  auto_retry_time: 
  folder: mainmenu
  answer: Send Your Message To Admin
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("🚀Message Sent to Admin")
Bot.sendMessageToChatWithId(1891485685, "*New Support Message\n\n🤴Name:*  ["+user.first_name+"](https://t.me/"+user.username+")\n*💡Id:* "+user.telegramid+"\n⛱️Profile [Link](tg://user?id="+user.telegramid+")\n\n*📥Message: * "+message+"")
