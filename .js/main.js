const progress = document.querySelector(".progress");
const progressPercentageText = document.querySelector(".bar p")
const Ddate = document.querySelector(".date");
const myname = "이상민"

const currentTime = (new Date());
const date = new Date('2022/07/04');
const diffDate = (date.getTime() - currentTime.getTime()) /(1000*3600*24)+1;
//1을 더하는 이유는 시간단위로 하기때문에 소수점을 반올림해서임
Ddate.innerText = `D-${diffDate.toFixed(0)}`;


function moveProgressBar(){
  const name = document.querySelector(".per a")
  calcPercentage = (545 - (diffDate)) / (545) * 100;
  console.log(calcPercentage.toFixed(1));    
  progressPercentageText.innerText = calcPercentage.toFixed(1) + '%' ;
  progress.style.width = `${calcPercentage}%`;
  if (calcPercentage > 10){
    name.innerText = `일병 ${myname}`
  }else if (calcPercentage > 50){
    name.innerText = `상병 ${myname}`
  }
  else if (calcPercentage > 77){
    name.innerText = `병장 ${myname}`
  }else{
    name.innerText = `이병 ${myname}`
  }
}

moveProgressBar();

