var string="";
var input=document.getElementById("input");

var buttons=document.querySelectorAll("#buttons");
 var arr=Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
     if(e.target.innerHTML == "="){
        string=eval(string);
        input.value=string;
     }
     else if(e.target.innerHTML == "AC"){
        string="";
        input.value=string;
     }
     else if(e.target.innerHTML == "DEL"){
        string=string.substring(0,string.length-1);
        input.value=string;
     }
     else{
        string += e.target.innerHTML;
        input.value=string;
     }
        
    });
    
});

var a = document.getElementsByClassName('container');
var darkinput= document.getElementsByClassName('inputs');
var btns= document.getElementsByClassName('btns');
var t= document.getElementsByClassName(' bgchange');
var suno=document.getElementsByClassName("fa-sun-o");
var moono=document.getElementsByClassName("fa-moon-o");
var modebtn=document.querySelector('.modebtn');
var num=document.querySelectorAll('.num');
var numarr=Array.from(num);
var symbol1=document.querySelectorAll('.font-color-green');
var symarr=Array.from(symbol1);
var symbol2=document.querySelectorAll('.font-color-orange');
var symarr1=Array.from(symbol2);
var darmode= document.getElementsByClassName('.darmode');

modebtn.addEventListener("click", function () {
      darkinput[0].classList.toggle("bgdark");
      a[0].classList.toggle("bgdark");
      t[0].classList.toggle("bg");
      suno[0].classList.toggle('opacity0');
      moono[0].classList.toggle('opacity1');
      btns[0].classList.toggle("bgdarkey");
    
     numarr.forEach(function (numbtn){
         // console.log(numbtn);
         numbtn.classList.toggle("bgdark");
     });
     symarr.forEach(function (symbtn){
         // console.log(numbtn);
         symbtn.classList.toggle("bgdark");
     });
     symarr1.forEach(function (symbtn){
         // console.log(numbtn);
         symbtn.classList.toggle("bgdark");
     });
     
      
   });