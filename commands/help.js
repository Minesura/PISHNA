const Discord = require('discord.js');

module.exports = {
    name: "도움말",
    cooldown : 5,
    execute(message){

        const embed = new Discord.MessageEmbed()
        .setTitle('명령어 목록!')
        .addField("🪓**관리 명령어**🪓",'**`-전송 <맨션> <메세지>`, `-킥 <맨션>`, `-밴 <맨션>`, `-뮤트 <맨션>`,\n `-언뮤트 <맨션>`, `-템프뮤트 <맨션> <숫자> <초|분|시간|일> <사유>`,\n `-청소 <갯수>`, `-슬로우모드 <숫자>`,\n `-공지 <채널 맨션> <공지할말>`**')
        .addField("⚙️**툴 명령어**⚙️","**`-봇정보`, `-유저정보`, `-서버정보`, `-타이머 <시간> <초|분|시간>`, `-시간`,\n `-문의 <문의 할말>`,`-초대`, `-코로나 <나라이름 | 모든나라>`,\n `-검색 <검색할 내용>`, `-사전 <검색할 내용>`, `-계산 <문제>` , `-멜론`**")
        .addField("💻**재미 명령어**💻","**`-주사위`, `-무작위 적을거 적을거`, `-핑`, `-전달 <맨션> <할말>`, `-베워 <닉네임>`,\n `-스워 <닉네임>`, `-유챔 <닉네임>`, `-애니 <애니 이름>`**")
        .addField("🔗**외부 링크**🔗","[디스코드](https://discord.com/invite/tjRRC9MRXT)   ||    [초대](https://discord.com/oauth2/authorize?client_id=846362257617190952&permissions=8&scope=bot)")
        .setFooter(`${message.author.username}`, message.author.displayAvatarURL())
        message.channel.send(`<@${message.author.id}>`,embed)
    }
}
 