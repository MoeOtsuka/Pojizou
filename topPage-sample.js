
// document.getElementById("button").onclick = function() {
    // ここに#buttonをクリックしたら発生させる処理を記述

  
//   var img = document.getElementById('star');
//   var src = star.getAttribute('./geeksalon/star.png');

  

// }


// この先マイク作業


if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
  }
  if (navigator.mediaDevices.getUserMedia === undefined) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
      var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
      if (!getUserMedia) {
        return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
      }
      return new Promise(function(resolve, reject) {
        getUserMedia.call(navigator, constraints, resolve, reject);
      });
    }
  }
  /*
    これ以降は navigator.mediaDevices.getUserMedia が使える。
  */

  /*
    マイクからの入力データの量は、マイクをつけっぱなしにしていれば当然どんどん増えていく。
    このデータ量が bufferSize に達するごとに、下のコードの😇がいるところの関数が実行される。

    ほかにもごちゃごちゃ書いているけど、大事なのは😎がいるところ！

    ① navigator.mediaDevices.getUserMedia({ audio: true　}) でオーディオデータを取得開始。
    ② processor.onaudioprocess に代入した関数(😇)が、bufferSize 分の音声データの読み込みごとに何度も実行される。
  */
  let count = 0
  let processor = null
  const bufferSize = 16384 // 😎 次のいずれかの値: 256, 512, 1024, 2048, 4096, 8192, 16384

  const initAudioContext = function(){
    const audioContext = new AudioContext()
    document.removeEventListener('click', initAudioContext);

    navigator.mediaDevices.getUserMedia({ audio: true}) /* 😎 */
    .then(( stream )=>{
      const mediaStreamSource = audioContext.createMediaStreamSource( stream )
      processor = audioContext.createScriptProcessor( bufferSize, 1, 1 )
      mediaStreamSource.connect( processor )
      processor.connect( audioContext.destination )

      processor.onaudioprocess = function(){ /* 😇 😎 */
        console.log(count++)
      }
    })
    .catch(console.log)                                 
  }
  const targets = document.getElementsByClassName('btn-top-radius');
  for(let i = 0; i < targets.length; i++){

    targets[i].addEventListener('click', initAudioContext);
  }

  let haikei = document.getElementById("haikei"); 

  let point = 0;

  let countup = function(){
    console.log(point++);
    if(point %10 === 0){
      console.log("大変だったね");
      const gradeup = document.createElement('img');
      gradeup.src = "./images/モルモット.png"
      
      gradeup.style.position = "absolute"
      
      let gradeupheight = haikei.clientHeight; 
      let grandwidth = haikei.clientWidth;
      //数字+文字列↓
      
      
      gradeup.style.top = "200px" 
      gradeup.style.left = "200px"
      gradeup.style.zIndex = "100"
      
      haikei.appendChild(gradeup);
    }
  }
  setInterval(countup, 1000);



