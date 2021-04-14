var body = document.body;


var logo = document.getElementById("logo");
var con = document.getElementById("con");
var page1 = document.getElementById("page1");
var page2 = document.createElement("div");
page2.className = "page";
var page3 = document.createElement("div");
page3.className = "page";
var page4 = document.createElement("div");
page4.className = "page";
var page5 = document.createElement("div");
page5.className = "page";


var p2_left = document.createElement("div");
p2_left.className = "p2_left";
page2.appendChild(p2_left);

var namebox = document.createElement('div');
namebox.className = "namebox";
namebox.textContent = "이  름 : 한태우";
p2_left.appendChild(namebox);

var cls = document.createElement("div");
cls.className = "namebox";
cls.textContent = "클래스 : 게임기획자";
p2_left.appendChild(cls);

var spec = document.createElement("div");
spec.className = "spec";
spec.innerHTML = '<br/>수 많은 개발자 지망생이 모이는 인하대 산학협력원, 그는 컴퓨터 공학을 전공했으며, 최근까지 임용고시를 준비하던 고시원의 좀비였습니다. <br/>그러나 어느날 각성한 그는 게임 개발자가 되겠다는 내면의 외침을 따라 큰 뜻을 품고 여행길에 올랐고, 이곳 산학협력원에서 당신을 만나게 되었습니다.';
p2_left.appendChild(spec);

var talkbox = document.createElement("div");
talkbox.className = "talkbox";
talkbox.innerText = "\n~\n딱딱한 프로그래머 녀석들과 소통하는데에는\n나만한 사람이 없지, 잘 부탁한다!\n~";
p2_left.appendChild(talkbox);


var p2_right = document.createElement("div");
p2_right.className = "p2_right";
page2.appendChild(p2_right);
const img1 = new Image();
img1.src = 'images/pic.jpg';
p2_right.appendChild(img1);

var p3div = document.createElement("div");
p3div.className = 'p3div';
page3.appendChild(p3div);

const img2 = new Image();
img2.src = 'images/stat.png';
p3div.appendChild(img2);


var p4_left = document.createElement("div");
p4_left.className = "p4_l";
page4.appendChild(p4_left);

var skill = function(e){
  var line = lines.indexOf(e.target.parentNode);
  var space = spaces[line].indexOf(e.target);
  
  if(line == 0 && space == 0){
    ssm.innerText = "고전게임 전문화 \n \n유년기시절 페미컴 해적판 팩을 위시로한 다채로운 고전게임 경험을 가지고 있습니다.";
  }
  else if(line == 0 && space == 1){
    ssm.innerText = "유즈맵 마스터리  \n\n스타크래프트에서 워3까지 학창시절에 이어지는 풍부한 유즈맵 경험을 가지고 있습니다. 특히 전성기설의 그는 블러드류 공방의 지배자였습니다.";
  }
  else if(line == 1 && space == 0){
    ssm.innerText = "-틀-\n  \n게임포럼에서 어릴적 즐겼던 게임 이야기를 꺼내면 '그게뭔데 틀딱아'댓글이 항상 따라다닙니다.";
  }
  else if(line == 1 && space == 1){
    ssm.innerText = "뜨거운효자  \n\n그의 부모님은 그가 게임계에 뛰어드는 것을 싫어합니다.\n하지만 게임이 재밌고 즐거운걸 어쩌겠어요.";
  }
  else if(line == 2 && space == 0){
    ssm.innerText = "경험주의  \n\n이름있거나, 유명하고, 이슈를 몰고오는 게임은 웬만하면 일단 해봅니다.\n잘나가는 게임은 잘 나가는 이유가 있다는것이 그의 지론중 하나이지요.";
  }
  else if(line == 2 && space == 1){
    ssm.innerText = "다대일 전문화 \n \n교원과정, 교생실습에서의 경험이 다수와의 대치상황에서 그를 강하게 만듭니다.";
  }
  else if(line == 3 && space == 0){
    ssm.innerText = "반골기질  \n\n괜스레 반대의견을 던집니다. 본인은 고칠생각이 없는듯 합니다.";
  }
  else if(line == 3 && space == 1){
    ssm.innerText = "똥믈리에  \n\n트릭스터, 마비노기 영웅전, 킹스레이드 등 그가 3년 이상 각잡고 꾸준히 했던 온라인 게임들은 모두 아프거나 서비스를 종료했습니다.\n불쌍한 사람... 가여운 사람이에요, 이 사람";
  }
  
}

var skilltable = document.createElement("table");
var spaces = [];
var lines = [];
for(i=0; i<4; ++i){
  var LINE = document.createElement("tr");
  lines.push(LINE);
  spaces.push([]);
  for(j=0; j<2; ++j){
    var SPACE = document.createElement("td");
    SPACE.addEventListener('click', skill);
    spaces[i].push(SPACE);
    LINE.append(SPACE);
  }
  skilltable.appendChild(LINE);
}

const icon1 = new Image();
icon1.src = 'images/retro.png';
spaces[0][0].appendChild(icon1);

const icon2 = new Image();
icon2.src = 'images/usemap.jpg';
spaces[0][1].appendChild(icon2);

const icon3 = new Image();
icon3.src = 'images/teeth.png';
spaces[1][0].appendChild(icon3);

const icon4 = new Image();
icon4.src = 'images/fire.jpg';
spaces[1][1].appendChild(icon4);

const icon5 = new Image();
icon5.src = 'images/book.png';
spaces[2][0].appendChild(icon5);

const icon6 = new Image();
icon6.src = 'images/versus.jpg';
spaces[2][1].appendChild(icon6);

const icon7 = new Image();
icon7.src = 'images/born.png';
spaces[3][0].appendChild(icon7);

const icon8 = new Image();
icon8.src = 'images/images.jpg';
spaces[3][1].appendChild(icon8);


p4_left.appendChild(skilltable);


var p4_right = document.createElement("div");
p4_right.className = "p4_r";
page4.appendChild(p4_right);
var ssm = document.createElement("div");
ssm.className = "ssm";
p4_right.appendChild(ssm);

var p1 = document.createElement("p");
p1.innerText = "축하합니다.";
page5.appendChild(p1);
var p2 = document.createElement("p");
p2.innerText = "한태우 는(은) 이제부터 이 수업의 수강생이며, 당신의 동료입니다. \n그와 협력하여 본 과정을 수료하고 게임기획자로 취직하세요!"
page5.appendChild(p2);


var pagenum = 1;
var bt1 = document.getElementById("bt1");
bt1.addEventListener('click', function(event){
  event.preventDefault();
  if(pagenum == 1){
    page1.parentNode.removeChild(page1);
    con.appendChild(page2);
    logo.innerText = "개요";
    pagenum = 2;
  }
  else if(pagenum == 2){
    page2.parentNode.removeChild(page2);
    con.appendChild(page3);
    logo.innerText = "능력치";
    pagenum = 3;
  }
  else if(pagenum == 3){
    page3.parentNode.removeChild(page3);
    con.appendChild(page4);
    logo.innerText = "스킬 및 특성";
    pagenum = 4;
  }
  else if(pagenum == 4){
    page4.parentNode.removeChild(page4);
    logo.innerText = "완료";
    con.appendChild(page5);
    bt1.parentNode.removeChild(bt1);
  }
});