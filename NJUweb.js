var y=document.getElementById("w");

function pull(){
  console.log("open:YES");
  if(y.style.height==0+"px"){
    y.style.height=320+"px";
  }else{
    y.style.height=0+"px";
  }
  console.log("open:NO");
}
pull();
