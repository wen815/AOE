function ftop(){
scroll(0,0);
}

var btop=document.getElementById("btop");
         btop.style.display='none'; 
window.onscroll =function(){
if(document.documentElement.scrollTop+document.body.scrollTop>0){
    btop.style.display='block';
}
else{
       btop.style.display='none'; 
}
}
function fab(){
scroll(0,500);
}
function fse(){
scroll(0,1000);
}
function fco(){
scroll(0,1500);
}



