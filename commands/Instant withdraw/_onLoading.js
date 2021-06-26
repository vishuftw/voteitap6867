/*CMD
  command: /onLoading
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Instant withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var add = User.getProperty("TRXwallet")
var amo = User.getProperty("amo")
var tx = content
var key = [{title:"↩️ Back",command:"Cr"}]
var lib = Libs.ReferralLib
  var refList = lib.currentUser.refList.get()
Api.sendPhoto({
photo:"https://telegra.ph/file/79f7044801d8a7e0b2f4b.jpg",
caption:"✅* Paid automatically \n\n⭐️ Amount - "+amo+" VOTE IT\n🍀 User ID - "+user.telegramid+"\n🦁 Username - @"+user.username+" \n💠 Wallet - "+add+"\n\n⏰ Hash - *["+content+"](https://tronscan.org/#/transaction/"+content+"",parse_mode : "Markdown" , reply_markup: { inline_keyboard: [
[
{ text: "💠 Tronscan", url: "https://tronscan.org/#/transaction/"+content+""}, {text: "🍀 Payment Channel", url:"https://t.me/ftw_payouts"} ]]},disable_web_page_preview: true
});
Api.sendMessage({
  chat_id: "@ftw_payouts",
  text:
  "✅ *New Successful Withdraw !!\n\n⭐️ Amount - "+amo+" VOTE IT\n🦁 User - @"+user.username+"\n💠 Wallet - "+add+"\n☎️ User Referrals = " +
          refList.length +
          "\n☘️Transaction ID* -\n["+content+"](https://tronscan.org/#/transaction/"+content+")\n\n🏖* Bot Link - @"+bot.name+"\n⏩ Please Check Your Wallet*",parse_mode:"Markdown",reply_markup: { inline_keyboard: [
[
{ text: "💠 Payment ID ", url: "https://tronscan.org/#/transaction/"+content+""}, {text: "🍀 Bot Link", url: "https://t.me/"+bot.name+""} ]]},disable_web_page_preview: true
})
Bot.sendMessageToChatWithId(
  1891485685,
  "✅ Withdraw successful in bot @" +
    bot.name +
    "\n\n💳 Amount: " +
    amo +
    " Lovecoin \n👜 Wallet : " +
    add +
    "\n🕹️ ☘TxID : https://tronscan.org/#/transaction/" +
    tx +
    "\n\n💹 Now check your Tron Wallet.\nUser id : @"+user.name+""
)
