/*CMD
  command: 🧑‍💻Task🧑‍💻
  help: 
  need_reply: 
  auto_retry_time: 
  folder: mainmenu
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
{
  var buttons = [
    [
      { title: "🎧Task 1", command: "task" },
    ],
    [
      { title: "🎧Task 2", command: "task2" },
    ],
    [{ title: "🔙Back To Menu ", command: "main_menu" }]
    
  ]

  Bot.sendInlineKeyboard(buttons, "👨🏻‍💻Complete All The Task Below")
}
