/*  clock */
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

/*  play button */
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const playBtn = document.querySelector('.circle__btn');
const wave1 = document.querySelector('.circle__back-1');
const wave2 = document.querySelector('.circle__back-2');
const bthChange1 = document.querySelector('.btn__primary') //切歌
const bthChange2 = document.querySelector('.btn__secondary') // 重放

/*  rate slider */
const container = document.querySelector('.slider__box');
const btn = document.querySelector('.slider__btn');
const color = document.querySelector('.slider__color');
const tooltip = document.querySelector('.slider__tooltip');

/* 倒计时容器 */
const dateBox = document.querySelector('.nowDate');

// 获取歌词容器
const ul = $("#lrclist")[0];//获取ul

//主题按钮
const switch_1 = $('#switch-1')[0]

const switch_2 = $('#switch-2')[0]

clock = () => {
  let today = new Date();
  let h = (today.getHours() % 12) + today.getMinutes() / 59; // 22 % 12 = 10pm
  let m = today.getMinutes(); // 0 - 59
  let s = today.getSeconds(); // 0 - 59

  h *= 30; // 12 * 30 = 360deg
  m *= 6;
  s *= 6; // 60 * 6 = 360deg

  rotation(hours, h);
  rotation(minutes, m);
  rotation(seconds, s);

  // call every second
  setTimeout(clock, 500);
}

rotation = (target, val) => {
  target.style.transform = `rotate(${val}deg)`;
}

window.onload = clock();

let audio = document.getElementById('audio');

dragElement = (target, btn) => {
  target.addEventListener('mousedown', (e) => {
    onMouseMove(e);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  });

  onMouseMove = (e) => {
    e.preventDefault();
    let targetRect = target.getBoundingClientRect();
    let x = e.pageX - targetRect.left + 10;
    if (x > targetRect.width) { x = targetRect.width };
    if (x < 0) { x = 0 };
    btn.x = x - 10;
    btn.style.left = btn.x + 'px';

    // get the position of the button inside the container (%)
    let percentPosition = (btn.x + 10) / targetRect.width * 100;

    // color width = position of button (%)
    color.style.width = percentPosition + "%";

    // move the tooltip when button moves, and show the tooltip
    tooltip.style.left = btn.x - 5 + 'px';
    tooltip.style.opacity = 1;

    // show the percentage in the tooltip
    tooltip.textContent = Math.round(percentPosition) + '%';
    console.log(tooltip.textContent);
    audio.volume = Math.round(percentPosition) / 100
  };

  onMouseUp = (e) => {
    window.removeEventListener('mousemove', onMouseMove);
    tooltip.style.opacity = 0;

    btn.addEventListener('mouseover', function () {
      tooltip.style.opacity = 1;
    });

    btn.addEventListener('mouseout', function () {
      tooltip.style.opacity = 0;
    });
  };
};

dragElement(container, btn);

/*  play button  */
// 歌曲列表
let musicList = [
  {
    name:'梦里花',
    url:'http://m701.music.126.net/20221225132154/0de3dcf111ae6791e54b0b906b2fce7c/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/23062615037/e431/6231/5789/33069f21a76dd2abf71283f3464cdd22.mp3'
  },
  {
    name:'屋顶',
    url:'https://m701.music.126.net/20221225142135/f4abecc4e1cefd6e671dbba0d7c2879a/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/9444694535/c8bb/65da/db54/9e257ff0610f84e4242cf0127dac6005.mp3'
  }
]

// 歌词
let lrcList = [
  "[00:02.13]作词:吴易纬\n[00:02.43]作曲:花輪/小王子\n[00:02.91]原唱：张韶涵\n[00:03.24]唯一纯白的茉莉花\n[00:08.37]盛开在琥珀色月牙\n[00:14.76]就算失去所有爱的力量\n[00:21.51]我也不曾害怕\n[00:40.89]天空透露着微光\n[00:43.89]照亮虚无迷惘\n[00:47.16]在残垣废墟之中\n[00:49.92]寻找唯一梦想\n[00:53.52]古老的巨石神像\n[00:56.43]守护神秘时光\n[00:59.79]清澈的蓝色河流\n[01:02.61]指引真实方向\n[01:05.67]穿越过风沙\n[01:08.82]划破了手掌\n[01:12.03]坚定着希望去闯\n[01:18.00]唯一纯白的茉莉花\n[01:24.18]盛开在琥珀色月牙\n[01:30.48]就算失去所有爱的力量\n[01:37.35]我也不曾害怕\n[02:12.48]古老的巨石神像\n[02:15.39]守护神秘时光\n[02:18.72]清澈的蓝色河流\n[02:21.54]指引真实方向\n[02:24.63]穿越过风沙\n[02:27.81]划破了手掌\n[02:30.96]坚定着希望去闯\n[02:36.93]唯一纯白的茉莉花\n[02:43.11]盛开在琥珀色月牙\n[02:49.44]就算失去所有爱的力量\n[02:56.25]我也不曾害怕\n[03:02.22]唯一纯白的茉莉花\n[03:08.40]盛开在琥珀色月牙\n[03:14.73]就算失去所有爱的力量\n[03:23.13]我也不曾害怕\n",
  "[00:00.000] 作词 : 周杰伦\n[00:01.000] 作曲 : 周杰伦\n[00:02.000] 编曲 : 屠颖\n[00:23.74]半夜睡不着觉把心情哼成歌\n[00:29.15]只好到屋顶找另一个梦境\n[00:40.10]睡梦中被敲醒我还是不确定\n[00:45.55]怎会有动人旋律在对面的屋顶\n[00:51.10]我悄悄关上门带着希望上去\n[00:56.43]原来是我梦里常出现的那个人\n[01:00.74]那个人不就是我梦里\n[01:03.89]那模糊的人\n[01:06.19]我们有同样的默契\n[01:11.55]用天线\n[01:12.98]用天线排成爱你的形状hoho\n[01:20.81]在屋顶唱着你的歌\n[01:23.93]在屋顶和我爱的人\n[01:26.63]让星星点缀成最浪漫的夜晚\n[01:32.49]拥抱这时刻这一分一秒全都停止\n[01:40.74]爱开始纠结\n[01:42.94]在屋顶唱着你的歌\n[01:45.71]在屋顶和我爱的人\n[01:48.43]将泛黄的夜献给最孤独的月\n[01:54.31]拥抱这时刻这一分一秒全都停止\n[02:02.56]爱开始纠结梦有你而美\n[02:42.63]半夜睡不着觉把心情哼成歌\n[02:48.43]只好到屋顶找另一个梦境\n[02:59.17]睡梦中被敲醒我还是不确定\n[03:04.76]怎会有动人旋律在对面的屋顶\n[03:10.24]我悄悄关上门带着希望上去\n[03:15.71]原来是我梦里常出现的那个人\n[03:19.97]那个人不就是我梦里\n[03:22.76]那模糊的人\n[03:25.29]我们有同样的默契\n[03:30.66]用天线[03:32.16]用天线排成爱你的形状hoho\n[03:40.27]在屋顶唱着你的歌\n[03:43.18]在屋顶和我爱的人\n[03:45.86]让星星点缀成最浪漫的夜晚\n[03:51.86]拥抱这时刻这一分一秒全都停止\n[04:00.80]爱开始纠结\n[04:02.13]在屋顶唱着你的歌\n[04:04.94]在屋顶和我爱的人\n[04:07.59]将泛黄的夜献给最孤独的月\n[04:13.59]拥抱这时刻这一分一秒全都停止\n[04:21.85]爱开始纠结梦有你而美\n[04:37.70]让我爱你是谁\n[04:40.31]让你爱我是谁\n[04:43.16]怎会有动人旋律环绕在我俩的身边\n[04:48.39]让我爱你是谁\n[04:51.30]让你爱我是谁\n[04:54.00]原来是这屋顶有美丽的邂逅\n[05:04.50]在屋顶唱着你的歌\n[05:07.10]在屋顶和我爱的人",
  "[00:00.000] 作词 : 小寒\n[00:00.140] 作曲 : 蔡健雅\n[00:00.280] 编曲 : 曾吴秋杰\n[00:00.420] 原唱 : 蔡健雅\n[00:00.560]出品：网易电波×网易子弹\n[00:00.970]我们总在爱情里死不悔改\n[00:07.230]选择苦捱放逐他漂流人海\n[00:28.170]和平不争执就放开彼此\n[00:34.460]是因为骄傲或潜意识\n[00:40.800]想假装高尚的仁慈\n[00:44.350]真心话都禁止\n[00:48.550]不可一世\n[00:54.200]我们总在爱情里死不悔改\n[01:00.570]选择苦捱放逐他漂流人海\n[01:06.659]把想说的变胡扯\n[01:09.819]一个个的失语者\n[01:13.170]But we are\n[01:16.180]We are no better\n[01:34.620]当初的说辞不适合彼此\n[01:40.970]只是藏匿懦弱的台词\n[01:47.319]都怪我觉悟得太迟\n[01:50.440]结束了爱你才开始\n[01:55.030]如此讽刺\n[02:00.689]我们总在爱情里死不悔改\n[02:07.030]选择苦捱放逐他漂流人海\n[02:13.129]把想说的变胡扯\n[02:16.370]一个个的失语者\n[02:19.610]But we are\n[02:22.620]We are no better\n[02:27.000]总在爱情里我看不明白\n[02:33.139]既然有爱好歹也说个明白\n[02:39.080]我嘲笑着失败者\n[02:42.340]是眼睁睁放手的\n[02:45.520]But we are\n[02:48.639]We are no better\n[02:51.370]No better\n[02:59.919]制作人：曾吴秋杰\n[03:00.900]混音/母带：何世渝\n[03:01.759]和声：熊楚\n[03:02.659]人声录音师:Sleepinkid@源音創樂\n[03:03.419]制作统筹：沈子恂/刘京/苏丹慧\n[03:03.780]商务统筹：颜阿达/陈亦心\n[03:04.159]监制:lil老王/沈子恂/Ocd\n[03:04.430]宣发：叶增辉/单杰妮/黄慧卿\n[03:04.740]出品人:Dylan刘勇/如风/张浩\n[03:05.030]联合出品：无忧音乐\n[03:05.439]OP:Funkie Monkies Publishing Pte Ltd/Tangy Music Publishing (Warner Chappell Music, Hong Kong Limited Taiwan Branch)\n[03:05.770]SP:Warner Chappell Music Publishing Agency (Beijing) Ltd.\n",
]
var currentLine = 0;//当前播放到哪一句了
playBtn.addEventListener('click', function (e) {
  e.preventDefault();
  pause.classList.toggle('visibility');
  play.classList.toggle('visibility');
  playBtn.classList.toggle('shadow');
  wave1.classList.toggle('paused');
  wave2.classList.toggle('paused');
  e.target.parentElement.classList.value !== 'ionicon s-ion-icon play visibility' ? audio.play() : audio.pause()
});

let index = 0;
bthChange1.addEventListener('click', function (e) {
  index++
  if (index <= musicList.length) {
    audio.src = musicList[index].url
    // cleanMusicLrc()
    createLrcObj(lrcList[index])
  } else {
    index = 0
    audio.src = musicList[index].url
    createLrcObj(lrcList[index])
  }
  dateBox.innerHTML = musicList[index].name
  cleanMusicLrc()
  reloadHtml()
  
})

bthChange2.addEventListener('click', function (e) {
  audio.load() // 重播
  cleanMusicLrc()
})

audio.addEventListener('pause', function (e) {
  console.log('暂停了');
})

//设置进入全屏
let fullscreen;
let fsEnter = document.getElementById('fullscr');
fsEnter.addEventListener('click', function (e) {
  e.preventDefault();
  if (!fullscreen) {
    fullscreen = true;
    document.documentElement.requestFullscreen();
    fsEnter.innerHTML = "退出全屏";
  }
  else {
    fullscreen = false;
    document.exitFullscreen();
    fsEnter.innerHTML = "全屏";
  }
});
// 倒计时
const station = (x, y, z) => {
  //当前时间
  var now = Date.now(),
    //结束时间
    end = new Date(x, y - 1, z),
    ends = end.getTime();
  var ss = ends - now;
  var s = Math.floor(ss / 1000);
  //相差天数
  var day = Math.floor(s / 60 / 60 / 24);
  //相差小时数
  var hours = Math.floor(s / 60 / 60 % 24);
  //相差分钟数
  var min = Math.floor(s / 60 % 60);
  //相差秒数
  var sec = Math.floor(s % 60);
  var html = "距离元旦：" + day + "天" + hours + "时" + min + "分" + sec + "秒";
  // dateBox.innerHTML = html;
}

setInterval(function () {
  station(2022, 12, 31);
}, 1000);


let lrcArr = [];
var oLRC = {
  ti: "", //歌曲名
  ar: "", //演唱者
  al: "", //专辑名
  by: "", //歌词制作人
  offset: 0, //时间补偿值，单位毫秒，用于调整歌词整体位置
  ms: [] //歌词数组{t:时间,c:歌词}
};
function createLrcObj(lrc) {
  oLRC.ms = []
  if (lrc.length === 0) return;
  var lrcs = lrc.split('\n');//用回车拆分成数组
  for (var i in lrcs) {//遍历歌词数组
    if (lrcs.hasOwnProperty(i)) {
      lrcs[i] = lrcs[i].replace(/(^\s*)|(\s*$)/g, ""); //去除前后空格
      var t_lrc = lrcs[i].substring(lrcs[i].indexOf("[") + 1, lrcs[i].indexOf("]"));//取[]间的内容
      var s_text = t_lrc.split(":");//分离:号前后的文字
      if (isNaN(parseInt(s_text[0]))) { //不是数值，基本上是歌曲名、作者等信息
        for (var j in oLRC) {
          if (j !== "ms" && j === s_text[0].toLowerCase()) {
            oLRC[j] = s_text[1];
          }
        }
      } else { //是数值，基本上就是歌词时间点
        var arr = lrcs[i].match(/\[(\d+:.+?)\]/g);//提取时间字段，可能有多个
        var start = 0;
        for (var lrc_position in arr) {
          if (arr.hasOwnProperty(lrc_position)) {
            start += arr[lrc_position].length; //计算歌词位置
          }
        }
        var content = lrcs[i].substring(start);//获取歌词内容
        for (var k in arr) {
          if (arr.hasOwnProperty(k)) {
            var t = arr[k].substring(1, arr[k].length - 1);//取[]间的内容
            var s = t.split(":");//分离:前后文字
            oLRC.ms.push({//对象{t:时间,c:歌词}加入ms数组
              t: parseFloat(s[0].substr(0, 2)) * 60 + parseFloat(s[1].substring(0, 6)),//注意转换成number格式
              c: content
            });
          }
        }
      }
    }
  }
}
//调用
createLrcObj(lrcList[0])

var lrcTime = [];//歌词对应的时间数组

var i = 0;

var $li = '';
function reloadHtml(){
  // ul.empty()
  ul.innerHTML = ''
  
  for (var n in oLRC.ms) {//遍历ms数组，把歌词加入列表
    ul.innerHTML += "<li><p>" + oLRC.ms[n].c + "</p></li>";//ul里填充歌词
  }
  //加入歌词时间
  for (var x = 0; x < oLRC.ms.length; x++) {
    lrcTime[x] = oLRC.ms[x].t;
  }
  
  lrcTime[lrcTime.length] = lrcTime[lrcTime.length - 1] + 3;//如不另加一个结束时间，到最后歌词滚动不到最后一句

  $li = $("#lrclist>li")


}
reloadHtml()

// var $li = $("#lrclist>li");//获取所有li
var currentTime;//当前播放的时间
var ppxx;//保存ul的translateY值

//audio时间改变事件
audio.ontimeupdate = function () {
  currentTime = audio.currentTime;
  // $li.remove( )
  for (j = currentLine, len = lrcTime.length; j < len; j++) {
    if (currentTime < lrcTime[j + 1] && currentTime > lrcTime[j]) {
      currentLine = j;
      ppxx = 30 - (currentLine * 32); //滚动位置
      ul.style.transform = "translateY(" + ppxx + "px)";
      $li.get(currentLine - 1).className = "";
      // console.log("on" + currentLine);
      // console.log($li.get(currentLine).innerHTML);
      // $li.get(currentLine).className = "on";
      $li.get(currentLine).classList.add('on');
      break;
    }
  }
};

//audio进度更改后事件
audio.onseeked = function () {
  currentTime = audio.currentTime;
  console.log("  off" + currentLine);
  $li.get(currentLine).className = "";
  for (k = 0, len = lrcTime.length; k < len; k++) {
    if (currentTime < lrcTime[k + 1] && currentTime < lrcTime[k]) {
      currentLine = k;
      break;
    }
  }
}

function cleanMusicLrc() {
  ul.style.transform = "translateY(0px)"
  currentLine = 0;//当前播放到哪一句了
  $li.removeClass('on')
}

//换背景颜色
let swichNum = 0
switch_1.addEventListener('click',function(){

 swichNum === 0 ? switchColor2() : switchColor1()

})

function switchColor1(){
  swichNum = 0
  $('body')[0].style.setProperty('--greyLight-1','#e4ebf5')
}
function switchColor2(){
  swichNum = 1
  $('body')[0].style.setProperty('--greyLight-1','#152a48')
}