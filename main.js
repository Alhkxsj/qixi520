// 樱花背景飘落
const sakuraBg = document.getElementById('sakura-bg');
function randomPetal(){
  const petal = document.createElement('div');
  petal.className = 'sakura-petal';
  petal.style.left = Math.random()*100+'vw';
  petal.style.top = (Math.random()*220)+'px';
  petal.style.setProperty('--r', Math.floor(Math.random()*360)+'deg');
  petal.style.setProperty('--s', (0.9+Math.random()*0.8).toFixed(2));
  sakuraBg.appendChild(petal);
  setTimeout(()=>petal.remove(), 7200);
}
setInterval(randomPetal, 620);

// 信封动画与长按寄语
const cover=document.getElementById('cover');
const envelope=document.getElementById('envelope');
const flap=document.getElementById('flap');
const openBtn=document.getElementById('openBtn');
const app=document.getElementById('app');
let longpressTimer = null;
function openEnvelope(){
  envelope.classList.add('opened');
  setTimeout(()=>{
    cover.style.opacity='0';
    setTimeout(()=>{cover.classList.add('hidden');app.classList.add('ready')},440);
  },680);
}
flap.addEventListener('click',openEnvelope);
openBtn.addEventListener('click',openEnvelope);

// 长按信封弹隐藏寄语
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const modalClose = document.getElementById('modal-close');
const secretNotes = [
  "你是我想藏在心里，偷偷欢喜一辈子的人🌸",
  "喜欢你，就像春风十里，樱花盛开，满心欢喜。",
  "如果爱有形状，那一定是你笑着看我的样子。",
  "我想和你一起看尽人间烟火，再看樱花慢慢飘落。",
  "樱花会落下，但我对你的喜欢永不会。",
  "和你在一起，每一天都是粉色的春天。",
  "你是我的小确幸，也是我所有温柔的原因。",
  "我的每一句想你，都落在樱花瓣上，随风飘向你。",
  "遇见你，是我一生中最美的浪漫。",
  "只想把全世界最温柔的樱花雨，都送给你。"
];
function showModal(msg){
  modalText.innerHTML = msg;
  modal.style.display = 'flex';
}
modalClose.addEventListener('click',()=>{modal.style.display='none';});
envelope.addEventListener('touchstart',startLongPress);
envelope.addEventListener('mousedown',startLongPress);
envelope.addEventListener('touchend',clearLongPress);
envelope.addEventListener('mouseup',clearLongPress);
envelope.addEventListener('mouseleave',clearLongPress);
function startLongPress(e){
  clearLongPress();
  longpressTimer = setTimeout(()=>{
    showModal(secretNotes[Math.floor(Math.random()*secretNotes.length)]);
  }, 670);
}
function clearLongPress(){
  if(longpressTimer){clearTimeout(longpressTimer);longpressTimer=null;}
}

// 烟花彩蛋
const title=document.getElementById('title');
title.addEventListener('click',()=>{
  const centerX = window.innerWidth/2, centerY = window.innerWidth<600? 90 : 120;
  for(let i=0;i<17+Math.floor(Math.random()*5);i++){
    const fw=document.createElement('div');
    fw.className='firework';
    const size=11+Math.random()*20;
    fw.style.width=fw.style.height=size+'px';
    fw.style.left=(centerX+Math.cos(i*0.45)*80+Math.random()*70-35)+'px';
    fw.style.top=(centerY+Math.sin(i*0.41)*60+Math.random()*44-22)+'px';
    fw.style.background=`linear-gradient(135deg,hsl(${Math.random()*360},91%,71%),#fff8)`;
    fw.style.boxShadow=`0 0 12px 2px hsl(${Math.random()*360},80%,70%)`;
    document.body.appendChild(fw);
    setTimeout(()=>fw.remove(),1200);
  }
});

// 双击背景：樱花瓣飘落
document.body.addEventListener('dblclick',(e)=>{
  for(let i=0;i<10;i++){
    const s=document.createElement('img');
    s.src='https://img1.imgtp.com/2023/08/28/9EoH3Z6K.png';
    s.className='sakura-float';
    s.style.left=(e.clientX+Math.random()*50-30)+'px';
    s.style.top=(e.clientY+Math.random()*20-10)+'px';
    s.style.transform+='rotate('+(Math.random()*360)+'deg)';
    document.body.appendChild(s);
    setTimeout(()=>s.remove(),2700);
  }
});

// 点击头像：爱心和彩带爆发
function heartBurst(x,y){
  for(let i=0;i<9;i++){
    const h=document.createElement('div');
    h.className='heart';
    h.style.left=x+(Math.random()*44-21)+'px';
    h.style.top=y+(Math.random()*40-20)+'px';
    h.style.background=`linear-gradient(135deg,var(--accent),var(--sakura-pink),var(--mint-green))`;
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),1300);
  }
  for(let i=0;i<5;i++){
    const r=document.createElement('div');
    r.className='ribbon';
    r.style.left=x+(Math.random()*38-19)+'px';
    r.style.top=y+(Math.random()*30-15)+'px';
    r.style.transform='rotate('+Math.random()*160+'deg)';
    document.body.appendChild(r);
    setTimeout(()=>r.remove(),1200);
  }
}
document.getElementById('av-jy').addEventListener('click',e=>{
  heartBurst(e.clientX,e.clientY)
});
document.getElementById('av-xy').addEventListener('click',e=>{
  heartBurst(e.clientX,e.clientY)
});

// 句子切换
const quotes=[
  '你是我心中的樱花，盛开在最美的季节。',
  '想和你一起，看漫天樱花，直到白发苍苍。',
  '世界很大，遇见你刚刚好。',
  '温柔只为你，浪漫给樱花。',
  '你笑时，樱花都开了。',
  '樱花树下，你是我的唯一。',
  '陪你看尽繁樱似雪，是我最想做的事。',
  '所有樱花都开了，你终于来了。',
  '愿此刻如樱，岁岁年年。'
];
const q=document.getElementById('quote');
q.addEventListener('click',()=>{q.textContent='“'+quotes[Math.floor(Math.random()*quotes.length)]+'”';});

// 音乐播放器优化
const audio=document.getElementById('audio');
const player=document.getElementById('player');
const icon=player.querySelector('i');
const ring=document.getElementById('music-progress');
const musicTitle=document.getElementById('music-title');
let raf=null;
const circ=2*Math.PI*24; // 24为svg圆半径
function updateProgress(){
  if(audio.duration){
    const percent=audio.currentTime/audio.duration;
    ring.style.strokeDashoffset = circ * (1-percent);
  }
  raf=requestAnimationFrame(updateProgress);
}
function playToggle(){
  if(audio.paused){
    audio.play();
    icon.className='fa-solid fa-pause';
    player.classList.add('playing');
    musicTitle.style.opacity=1;
    updateProgress();
  }else{
    audio.pause();
    icon.className='fa-solid fa-play';
    player.classList.remove('playing');
    musicTitle.style.opacity=0;
    if(raf)cancelAnimationFrame(raf);
  }
}
player.addEventListener('click',playToggle);

// 长按/右键弹歌词（可自定义）
const lyrics = "夜色温柔，思念如乐，与你共赏，不负韶华。";
player.addEventListener('contextmenu',function(e){
  e.preventDefault();
  alert(lyrics);
});
player.addEventListener('touchstart',function(e){
  this.longpressTimer = setTimeout(()=>alert(lyrics),650);
});
player.addEventListener('touchend',function(e){
  if(this.longpressTimer)clearTimeout(this.longpressTimer);
});
// 自动还原
audio.addEventListener('ended',()=>{
  icon.className='fa-solid fa-play';
  player.classList.remove('playing');
  musicTitle.style.opacity=0;
  ring.style.strokeDashoffset = circ;
});