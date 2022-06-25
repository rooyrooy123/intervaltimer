//1インターバル
//hour range
const setshowhour = (val) => {
    const showhour = document.getElementById('show-hour');
    showhour.innerHTML= val + 'hour';
}

const onrangehour = (e) => {
    setshowhour(e.target.value);
    
}

window.addEventListener('load', () => {
    const inputbar = document.getElementById('timer-hour');
    const showhour = document.getElementById('show-hour');
    showhour.innerHTML= inputbar.value;
    setshowhour(inputbar.value);
    inputbar.addEventListener('input', onrangehour);
    

})

// minute range
const setshowminute = (val) => {
    const showminute = document.getElementById('show-minute');
    showminute.innerHTML= val + 'minute';
}

const onrangeminute = (e) => {
    setshowminute(e.target.value);
    
}

window.addEventListener('load', () => {
    const inputbar = document.getElementById('timer-minute');
    const showminute = document.getElementById('show-minute');
    showminute.innerHTML= inputbar.value;
    setshowminute(inputbar.value);
    inputbar.addEventListener('input', onrangeminute);

})
// second range

const setshowsecond = (val) => {
    const showsecond = document.getElementById('show-second');
    showsecond.innerHTML= val + 'second';
}

const onrangesecond = (e) => {
    setshowsecond(e.target.value);
    
}

window.addEventListener('load', () => {
    const inputbar = document.getElementById('timer-second');
    const showsecond = document.getElementById('show-second');
    showsecond.innerHTML= inputbar.value;
    setshowsecond(inputbar.value);
    inputbar.addEventListener('input', onrangesecond);

})


window.addEventListener('load', () => {
    const updatetime = document.querySelectorAll('.timer-range');
    for(var i = 0; i < updatetime.length; i++) {
        updatetime[i].addEventListener('input', showintervaltime1);
    }

})
function showintervaltime1(){

    var show1time = document.getElementById('interval1time');
    var show1minute = document.getElementById('timer-minute').value;
    var show1second= document.getElementById('timer-second').value;
    var show1hour = document.getElementById('timer-hour').value;
    show1time.innerHTML = 'Interval: 1 ⇒' + show1hour + ':' + show1minute + ':' + show1second;
}

//2インターバル
//hour range
const setshowhour2 = (val) => {
    const showhour2 = document.getElementById('show-hour2');
    showhour2.innerHTML= val + 'hour';
}

const onrangehour2 = (e) => {
    setshowhour2(e.target.value);
    
}

window.addEventListener('load', () => {
    const inputbar = document.getElementById('timer-hour2');
    const showhour2 = document.getElementById('show-hour2');
    showhour2.innerHTML= inputbar.value;
    setshowhour2(inputbar.value);
    inputbar.addEventListener('input', onrangehour2);
    

})

// minute2 range
const setshowminute2 = (val) => {
    const showminute2 = document.getElementById('show-minute2');
    showminute2.innerHTML= val + 'minute';
}

const onrangeminute2 = (e) => {
    setshowminute2(e.target.value);
    
}

window.addEventListener('load', () => {
    const inputbar = document.getElementById('timer-minute2');
    const showminute2 = document.getElementById('show-minute2');
    showminute2.innerHTML= inputbar.value;
    setshowminute2(inputbar.value);
    inputbar.addEventListener('input', onrangeminute2);

})



// second2 range

const setshowsecond2 = (val) => {
    const showsecond2 = document.getElementById('show-second2');
    showsecond2.innerHTML= val + 'second';
}

const onrangesecond2 = (e) => {
    setshowsecond2(e.target.value);
    
}

window.addEventListener('load', () => {
    const inputbar = document.getElementById('timer-second2');
    const showsecond2 = document.getElementById('show-second2');
    showsecond2.innerHTML= inputbar.value;
    setshowsecond2(inputbar.value);
    inputbar.addEventListener('input', onrangesecond2);

})



window.addEventListener('load', () => {
    const updatetime = document.querySelectorAll('.timer-range');
    for(var i = 0; i < updatetime.length; i++) {
        updatetime[i].addEventListener('input', showintervaltime2);
    }

})
function showintervaltime2(){

    var show2time = document.getElementById('interval2time');
    var show2minute = document.getElementById('timer-minute2').value;
    var show2second= document.getElementById('timer-second2').value;
    var show2hour = document.getElementById('timer-hour2').value;
    show2time.innerHTML = 'Interval: 2 ⇒' + show2hour + ':' + show2minute + ':' + show2second;
}





//3インターバル
//hour range
const setshowhour3 = (val) => {
    const showhour3 = document.getElementById('show-hour3');
    showhour3.innerHTML= val + 'hour';
}

const onrangehour3 = (e) => {
    setshowhour3(e.target.value);
    
}

window.addEventListener('load', () => {
    const inputbar = document.getElementById('timer-hour3');
    const showhour3 = document.getElementById('show-hour3');
    showhour3.innerHTML= inputbar.value;
    setshowhour3(inputbar.value);
    inputbar.addEventListener('input', onrangehour3);
    

})

// minute3 range
const setshowminute3 = (val) => {
    const showminute3 = document.getElementById('show-minute3');
    showminute3.innerHTML= val + 'minute';
}

const onrangeminute3 = (e) => {
    setshowminute3(e.target.value);
    
}

window.addEventListener('load', () => {
    const inputbar = document.getElementById('timer-minute3');
    const showminute3 = document.getElementById('show-minute3');
    showminute3.innerHTML= inputbar.value;
    setshowminute3(inputbar.value);
    inputbar.addEventListener('input', onrangeminute3);

})



// second3 range

const setshowsecond3 = (val) => {
    const showsecond3 = document.getElementById('show-second3');
    showsecond3.innerHTML= val + 'second';
}

const onrangesecond3 = (e) => {
    setshowsecond3(e.target.value);
    
}

window.addEventListener('load', () => {
    const inputbar = document.getElementById('timer-second3');
    const showsecond3 = document.getElementById('show-second3');
    showsecond3.innerHTML= inputbar.value;
    setshowsecond3(inputbar.value);
    inputbar.addEventListener('input', onrangesecond3);

})



window.addEventListener('load', () => {
    const updatetime = document.querySelectorAll('.timer-range');
    for(var i = 0; i < updatetime.length; i++) {
        updatetime[i].addEventListener('input', showintervaltime3);
    }

})
function showintervaltime3(){

    var show3time = document.getElementById('interval3time');
    var show3minute = document.getElementById('timer-minute3').value;
    var show3second= document.getElementById('timer-second3').value;
    var show3hour = document.getElementById('timer-hour3').value;
    show3time.innerHTML = 'Interval: 3 ⇒' + show3hour + ':' + show3minute + ':' + show3second;
}



//タイマー処理
var counting = '';
var hour = 0;
var minute = 0;
var second = 0;
var lastcounting = '';

//インターバルで関数呼び出し
window.addEventListener('load', () => {
    const showtimer = document.getElementById('showtimer');

    setInterval(removecount, 1000);
})
//計測開始 counting 0のときは計測停止 1,2,3で何番目のインターバルかを決定
function starttimer(){
    counting = 1;
    minute = document.getElementById('timer-minute').value;
    second= document.getElementById('timer-second').value;
    hour = document.getElementById('timer-hour').value;
    var nextinterval = '';
    //alert(document.getElementById('timer-hour' + nextinterval).value + document.getElementById('timer-minute' + nextinterval).value  + document.getElementById('timer-second' + nextinterval).value )
    if (!(document.getElementById('timer-hour' + nextinterval).value + document.getElementById('timer-minute' + nextinterval).value  +document.getElementById('timer-second' + nextinterval).value == 0)){
        nextinterval = 1;
        alarmsound(nextinterval);
    }
    const tohidebtn = document.getElementById('starttimer');
    tohidebtn.classList.add('hidden');
    const toshowbtn = document.getElementById('btn-hidden');
    toshowbtn.classList.remove('hidden');
    

}
function restarttimer(){
    const restartid = document.getElementById('restarttimer');
    if (counting >= 1){ //一時停止処理
        lastcounting = counting;
        counting = 0;
        restartid.value = "インターバルタイマー 再開"
    } else if (counting == 0){//再開処理
        counting = lastcounting;
        restartid.value = "インターバルタイマー 一時停止"
    }
}

function skipinterval(){
    second = 0;
    minute = 0;
    hour = 0;
}



//計測システム
var loop = 1;
function removecount(){
    if (counting >= 1){
        var timeshow = document.getElementById('interval' + counting + 'time');
        timeshow.style.color = "red";
        timeshow.style.fontSize = "20px"
        timeshow.style.transition = "all 0.5s 0s ease";
        
        if (second > 0){
            second = second - 1;
        }
        
        else if (second <= 0){
            if (minute > 0){
                minute = minute - 1;
                second = 59;
            }
            else if(minute <= 0){
                if (hour > 0){
                    hour = hour -1;
                    minute = 59
                    second = 59;
                }
                else if (hour <= 0){ //1インターバル終了
                    timeshow.style.color = "black";
                    timeshow.style.fontSize = "large"
                    timeshow.style.transition = "all 0.5s 0s ease";
        

                    if (counting == 1){
                        
                        interval2start();
                        var nextinterval = 2;
                    }
                    else if (counting == 2){
                        interval3start();
                        var nextinterval = 3;
                        
                    }
                    else if (counting == 3){
                        starttimer();
                        var nextinterval = 1;
                            
                        }

                    counting = nextinterval;
                    loop = loop + 1;
                    var timeshow = document.getElementById('interval' + counting + 'time')
                    timeshow.style.color = "red";
                    timeshow.style.fontSize = "20px"
                    timeshow.style.transition = "all 0.5s 0s ease";
                    
                    

                }
                
            }
            
        }
        const what = document.getElementById('sound' + counting).value;
        if ((what=='')){
            showtimer.innerHTML= loop + '回目' + hour + ':' + minute + ':' + second  + '    「' + '未設定' + '」' + 'の時間です';
        }
        else{showtimer.innerHTML= loop + '回目' + hour + ':' + minute + ':' + second  + '    「' + what + '」' + 'の時間です';
        }
    }
    

}

//2つめ計測開始
function interval2start(){
    minute = document.getElementById('timer-minute2').value;
    second= document.getElementById('timer-second2').value;
    hour = document.getElementById('timer-hour2').value;
    var nextinterval = 2;
    //alert(document.getElementById('timer-hour' + nextinterval).value + document.getElementById('timer-minute' + nextinterval).value  + document.getElementById('timer-second' + nextinterval).value )
    if (!(document.getElementById('timer-hour' + nextinterval).value + document.getElementById('timer-minute' + nextinterval).value  +document.getElementById('timer-second' + nextinterval).value == 0)){
        alarmsound(nextinterval);
    }
}

//3つめ計測開始
function interval3start(){
    minute = document.getElementById('timer-minute3').value;
    second= document.getElementById('timer-second3').value;
    hour = document.getElementById('timer-hour3').value;
    var nextinterval = 3;
    //alert(document.getElementById('timer-hour' + nextinterval).value + document.getElementById('timer-minute' + nextinterval).value  + document.getElementById('timer-second' + nextinterval).value )
    if (!(document.getElementById('timer-hour' + nextinterval).value + document.getElementById('timer-minute' + nextinterval).value  +document.getElementById('timer-second' + nextinterval).value == 0)){
        alarmsound(nextinterval);
    }
    
}

// あらーむ
function alarmsound(num) {
    var text = document.getElementById('sound' + num).value;
    if (text == ''){ //目標が未設定の場合はアラーム
        var sound = new Audio('sound/chime.mp3');
        sound.play();
    }else{
        text = '時間になりました！、、、次は、、' + text + 'をする時間です。' + '期間は' + hour + '時間' + minute + '分' + second + '秒です。';
    }
    if ('speechSynthesis' in window) {
        if (!(text == '')){
            var sound = new Audio('sound/Announce.mp3');
            sound.play();
            
        }
        const uttr = new SpeechSynthesisUtterance();
        uttr.pitch = 1;
        uttr.text = text;
        var voices = speechSynthesis.getVoices();
        uttr.voice = voices[7];
        
        setTimeout(() => {
            window.speechSynthesis.speak(uttr);

        }, 5000);

        
    } else{
        if (text !== ''){
            var sound = new Audio('sound/chime.mp3');
            sound.play();
        }
    }
  }






  