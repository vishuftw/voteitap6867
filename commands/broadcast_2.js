/*CMD
  command: broadcast_2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var msg = Bot.getProperty("adminBroadcast")
Bot.sendMessage("*Admin Msg\n============*" + msg)
