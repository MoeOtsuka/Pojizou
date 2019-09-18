
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
    if(point === 10){
      console.log("大変だったね");
      const gradeup = document.createElement('img');
      gradeup.src = "./images/モルモット.png"
      
      gradeup.style.position = "absolute"
      
      
      gradeup.style.top = "20vw" 
      gradeup.style.left = "20vw"
      gradeup.style.zIndex = "100"
      
      haikei.appendChild(gradeup);
    }


    if(point === 20){
      console.log("大変だったね");
      const gradeup = document.createElement('img');
      gradeup.src = "./images/モルモット.png"
      


      gradeup.style.top = "morumottoheight" 
      gradeup.style.left = "morumottowidth"
      gradeup.style.position = "absolute"
      
      
      gradeup.style.top = "2vw" 
      gradeup.style.left = "2vw"
      gradeup.style.zIndex = "100"
      
      haikei.appendChild(gradeup);
    }

    if(point === 30){
      console.log("大変だったね");
      const gradeup = document.createElement('img');
      gradeup.src = "./images/モルモット.png"
      
      gradeup.style.position = "absolute"
      
      
      gradeup.style.top = "40vw" 
      gradeup.style.left = "50vw"
      gradeup.style.zIndex = "100"
      
      haikei.appendChild(gradeup);
    }

    if(point === 40){
      console.log("大変だったね");
      const gradeup = document.createElement('img');
      gradeup.src = "./images/モルモット.png"
      
      gradeup.style.position = "absolute"
      
      
      gradeup.style.top = "60vw" 
      gradeup.style.left = "70vw"
      gradeup.style.zIndex = "100"
      
      haikei.appendChild(gradeup);
    }


    if(point === 50){
      console.log("大変だったね");
      const gradeup = document.createElement('img');
      gradeup.src = "./images/モルモット.png"
      
      gradeup.style.position = "absolute"
      
      
      gradeup.style.top = "20vw" 
      gradeup.style.left = "70vw"
      gradeup.style.zIndex = "100"
      
      haikei.appendChild(gradeup);
    }

    if(point === 60){
      console.log("大変だったね");
      const gradeup = document.createElement('img');
      gradeup.src = "./images/モルモット.png"
      
      gradeup.style.position = "absolute"
      
      
      gradeup.style.top = "60vw" 
      gradeup.style.left = "10vw"
      gradeup.style.zIndex = "100"
      
      haikei.appendChild(gradeup);
    }

    



  }
  setInterval(countup, 2000);




  

  function LinkClick(param) {
    var elem = document.getElementById("center-image");
    elem.className="mannnaka-image";
    point = 0;

    switch (param) {
      case 0:
        elem.src = "images/pojizouCat.png";
        elem.classList.add("catImage");
        break;
      case 1:
        elem.src = "images/pojizouBuntyou.png";
        elem.classList.add("buntyoImage");
        break;
      case 2:
        elem.src = "images/pojizouKirin.png";
        elem.classList.add("kirinImage");
        break;
      case 3:
        elem.src = "images/pojizouZou.png";
        elem.classList.add("elefantImage");
        break;
      default:
        elem.src = "images/pojizouwasi.png";
        break;
    }
 
    
  }

//save機能

// const saveButton = document.getElementById("save-button")
// saveButton.addEventListener('click', function(){
//   window.localStorage.setItem([],[count]);
// })

//reset機能

const resetButton = document.getElementById("reset-button")

resetButton.addEventListener('click', function(){

point=0;


})



