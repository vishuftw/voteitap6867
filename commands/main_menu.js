/*CMD
  command: main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: cr
CMD*/

var userstat = User.getProperty("status");
var referbonus = User.getProperty("referbonus");
if (userstat=="member" | userstat =="administrator" | userstat =="creator"){
if (referbonus == undefined){
let refUser = Libs.ReferralLib.currentUser.attractedByUser()
if (refUser){
  var balanceref = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balanceref.add(10) // enter refer amount here and change below line as per your coin and amount
  Bot.sendMessageToChatWithId(refUser.chatId, "💲 You Earned +10 VOTE IT \n\n*👨‍💼Your Referral :* "+"["+user.username+"]" + "(" + "tg://user?id=" + user.telegramid + ")")
User.setProperty("referbonus", user.telegramid, "integer")}
}

var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
var msgid = User.getProperty("msgid")
Api.deleteMessage({
message_id : msgid
})
Bot.sendKeyboard("💵 Balance 💵,\n🏖 Refferal,🎁 Bonus 🎁,↗️Withdraw↗️,\n⚙️ Set wallet ⚙️,📊 Statistics 📊", "*▶️ Refer and Earn VOTE IT*")
}
if (userstat=="left"){
Bot.runCommand("/start");
}
