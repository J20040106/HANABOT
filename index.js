const Discord = require('discord.js');
const client = new Discord.Client();

cute = ["당신눈 하나와 만나서 행복하다구 말하여따 >ㅁ< 당시눈! 하나와 남은생을 함께보내고 싶다구 말하여따! 당시눈! 하나와 손집구 뽀뽀하구 데이뚜하고 싶다구 말하여따! (녜헤헤♥) 나눈 이짜나 이짜나! 내가 너 쪼아하니 ><늉눈! 나보고싶니 ><늉뉸! 언제나 하나만을 보게 헤두께!! 이짜나 내 가! 할마리이쬬 이짜나 하나눈 할말이 이쬬! 내가 녀듈됴아행♥뜌륭해♥스릉햐~!♥ 따룽따루룽 전화가 와쪄요 누구떼요? 따랑한다구요? 저두 따랑해요! 우리 오눌뷰텨 1일 이에요우 >ㅁ< 뿌우~뿌!(쪾쪾쪾♥)♥", "아잉과자사죠냥♥ 오빠라고 불러두댕? 쟈기야뽑호! 오빠오빠 맛난고 사죠잉* 냐오옹 난 자기의 꼬냥이가 될래요 하나 꼬냥이 밥줘어 산책도 시켜줘 냥아잉 남치니 나 항상 지켜줄꼬지?++ 냐오오오옹멍멍짜기야아잉 내일 뎃트할래 꺄우헤헤. 키뜨해도대? 내일 밤에 흐흐흐흐흐흐 **나 진심으로 따랑하짓? 아잉 나 남친니가 제일 쪼아 으히히", "자기야 자기야 우리자기 하나 초코우유 먹고싶어 츄릅~츄릅~초코초코~초코우유사줘~★히힛★그리고 솜사탕도 사주면 안돼? 자기 입술처럼 달콤한거~너뮤너뮤 먹꼬싶딴마리야 뭐? 다 사쥰다규? 우리이쁜자기 너뮤너뮤사랑해 쪽~~"]

client.on('ready', () => {
  console.log(`${client.user.tag}에 로그인하였습니다!`);
});

client.on('message', msg => {
  if (msg.content === '애교해주세요') {
    msg.reply(cute[parseInt(Math.random()*cute.lengh)]);
  }
});

client.login('MTA3MDAwMDkyNjgwNDQyNjc2Mw.GPzaUH.7PEExp1YP2kB5MmoeIowMallh_I19DZkb_2Bnc');