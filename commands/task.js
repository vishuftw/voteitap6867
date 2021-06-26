/*CMD
  command: task
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.data){
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

Api.deleteMessage({
  chat_id: chat_id,
  message_id: message_id
})

}
var button = [[{ title: "🎧I am Doing the Task🎧", command: "task1join" }],[{ title: "🔙Back To Tasks", command: "🧑‍💻Task🧑‍💻" }]]
Bot.sendInlineKeyboard(
  button,
  "*Task Reward- 20 Vote It\n\n🚫Start the below bot\nThen join  the Channel\nThen click Joined\nClick a Screenshot and then press the below button 🎧I am Doing the Task🎧\n\n♦️Bot Link👇👇\n\nhttps://t.me/hpnstokenbot?start=Bot4824075\n\nOur admins will check the screenshot and reward you 20 Vote It*"
)
