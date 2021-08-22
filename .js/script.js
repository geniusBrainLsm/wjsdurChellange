const progress = document.querySelector(".progress");
const progressPercentageText = document.querySelector(".bar p")
const Ddate = document.querySelector(".date");

const currentTime = (new Date());
const date = new Date('2022/07/04');
const diffDate = (date.getTime() - currentTime.getTime()) /(1000*3600*24)+1;
//1을 더하는 이유는 시간단위로 하기때문에 소수점을 반올림해서임
Ddate.innerText = `D-${diffDate.toFixed(0)}`;


function moveProgressBar(displayDdate){
    calcPercentage = (545 - (diffDate)) / (545) * 100;
    console.log(calcPercentage.toFixed(1));    
    progressPercentageText.innerText = calcPercentage.toFixed(1) + '%' ;
    progress.style.width = '10%';
}

moveProgressBar();

