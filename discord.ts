import { check } from "korcen";
import { Message, MessageEmbed } from "discord.js";

client.on("messageCreate", async (message: Message) => {
  if (message.author.id === "") return; // 특정 유저 검사 무시
  const content = message.content;
  const c = check(content);

  if (c) {
    message.delete();
    message.channel.send({
      embeds: [
        new MessageEmbed()
          .setTitle("메세지 삭제함")
          .setFooter({ text: "© Korcen" }),
      ],
    });
  }
});
