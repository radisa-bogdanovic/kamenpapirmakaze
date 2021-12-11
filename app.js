'use strict'
let divPrvi=document.querySelector('.divFirst');
let divDrugi=document.querySelector('.divSecond');
let divSecond1=document.querySelector(`.divSecond1`);
let divSecond2=document.querySelector(`.divSecond2`);
let counterHuman= document.querySelector(`.scoreHuman`);
let counterComp= document.querySelector(`.scoreComp`)
let nizDiv=[];
let nizDiv2=[];
let scoreH=[];
let counterH = localStorage.getItem('human');
if(counterH===null){counterH=0};
counterHuman.textContent= `Tvoj rezultat je: ${counterH}`;
let counterC = localStorage.getItem('computer');
if(counterC===null){counterC=0};
counterComp.textContent= `Skor racunara je: ${counterC}`;
let randomNumb= Math.floor((Math.random()*3));
for(let i=0;i<3;i++)
{
  nizDiv.push(nizDiv[i]=document.createElement('div'))
  divPrvi.appendChild(nizDiv[i]);
  nizDiv[i].classList.add(`divclass${[i]}`);
  nizDiv2.push(nizDiv2[i]=document.createElement('div'))
  nizDiv2[i].classList.add(`divclasss${[i]}`);
  scoreH.push(scoreH[i]=document.createElement(`h1`))
 nizDiv[i].onclick=function(){
     divSecond2.appendChild(nizDiv[i])
     divDrugi.appendChild(scoreH[0]);
     divPrvi.remove();
     divDrugi.classList.add(`divFirst1`)
     divSecond1.appendChild(scoreH[1])
     scoreH[1].textContent= 'Your pick:'
     divSecond2.appendChild(scoreH[2])
     scoreH[2].textContent='Computer pick:'
 switch(randomNumb){
    case 0: 
    divSecond2.appendChild(nizDiv2[0])
      if([i]==0){
        scoreH[0].textContent= `It's a draw!`
        setTimeout(function(){
            window.location.reload();
         }, 1500); 
}
     else if([i]==1){
        winHum();
    }
      else {
    winComp();
}
     break;
    case 1:
      divSecond2.appendChild(nizDiv2[1])
      if([i]==0){  
        winComp();
        }
        else if([i]==1){
        scoreH[0].textContent= `It's a draw!`
        setTimeout(function(){
            window.location.reload();
         }, 1500); 
         }
          else{
           winHum()
              }
     break;
    case 2:
      divSecond2.appendChild(nizDiv2[2])
      if([i]==0){
        winHum();
        }
        else if([i]==1){
        winComp();
        }
         else{
          scoreH[0].textContent= `It's a draw!`
           setTimeout(function(){
            window.location.reload();
             }, 1500); 
             }
     break;
}
 }
}
function winComp() {
    scoreH[0].textContent = `Computer wins`;
    counterC++;
    localStorage.setItem("computer", counterC);
    counterComp.textContent = `Skor racunara je: ${counterC}`;
    counterHuman.textContent = `Tvoj rezultat je: ${counterH}`;
    setTimeout(function () {
        window.location.reload();
    }, 2000);
}
function winHum() {
    scoreH[0].textContent = `You win!`;
    counterH++;
    localStorage.setItem("human", counterH);
    counterHuman.textContent = `Tvoj rezultat je: ${counterH}`;
    counterComp.textContent = `Skor racunara je: ${counterC}`;
    setTimeout(function () {
        window.location.reload();
    }, 2000);
}
if(counterC>4){
    alert(`Na zalost celog kombinata republike SFRJ, racunar je pobedio`);
     localStorage.clear();
     location.reload();
    }
if(counterH>4){
    alert(`Cestitamo, pobedili ste racunar. :) `); 
     localStorage.clear();
     location.reload();
    }