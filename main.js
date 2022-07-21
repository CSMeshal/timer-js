let timer;
let myTimer = document.getElementById('timer');


 
function stop(){
    clearInterval(timer);
  
  }

  function start(){
    let sec = 0;
    timer = setInterval(()=>{
      myTimer.innerHTML = '00:'+sec;
      sec ++;
    }, 1000) 
  }
  

