/*CMD
  command: task1join
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *🎊Send the Screenshot, your screenshot wil be forwarded to our admins, they will check and reward you*
  keyboard: 
  aliases: 
CMD*/

let pic = request.photo[0]
let admin = Bot.getProperty("1891485685")
Bot.setProperty("Ask")
User.getProperty("Caption")
Bot.sendMessage("*📩 Image Sent To Admins*")
Api.sendPhoto({ chat_id: 1891485685, photo: pic.file_id })

Bot.sendMessageToChatWithId(1891485685,"*📥 New Pic From User\n\n🧑🏻‍💻 User =*  ["+user.first_name+"](tg://user?id="+user.telegramid+")\n\n\*🔮 His Telegram Id :* "+user.telegramid +"\n\n*📮 His Username :* *@"+user.username+"*")
