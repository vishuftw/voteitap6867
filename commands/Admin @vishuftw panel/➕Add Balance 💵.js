/*CMD
  command: ➕Add Balance 💵
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin @vishuftw panel
  answer: _🛠Enter User id?_
  keyboard: 
  aliases: 
CMD*/

var admin = 
Bot.getProperty("admin")
if (user.telegramid ==""+admin+""){
let msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand  ("/bb2");
}else{
if (user.telegramid ==""+admin+""){
let msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand  ("/bb2");
}else{
return
}
}
