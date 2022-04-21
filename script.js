var numsq=6;
var colors=generateColors(numsq);
var sq=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var msDisplay= document.querySelector("#message")
var h1= document.querySelector("h1");
var resetgame= document.querySelector("#reset");
var esyBtn= document.querySelector("#esyBtn");
var midBtn= document.querySelector("#midBtn");
var hardBtn= document.querySelector("#hardBtn");
esyBtn.addEventListener("click",function(){
esyBtn.classList.add("selected");
midBtn.classList.remove("selected");
hardBtn.classList.remove("selected");
numsq=2;
colors=generateColors(numsq);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
for(var i=0;i<sq.length;++i){
    if(colors[i]){
        sq[i].style.backgroundColor=colors[i];
    }
    else{
        sq[i].style.display="none";
    }
}
});

midBtn.addEventListener("click",function(){
    midBtn.classList.add("selected");
esyBtn.classList.remove("selected");
hardBtn.classList.remove("selected");
numsq=3;
colors=generateColors(numsq);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
for(var i=0;i<sq.length;++i){
    if(colors[i]){
        sq[i].style.backgroundColor=colors[i];
    }
    else{
        sq[i].style.display="none";
    }
}
sq[2].style.display="block";
});

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    midBtn.classList.remove("selected");
    esyBtn.classList.remove("selected");
    numsq=6;
    colors=generateColors(numsq);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
for(var i=0;i<sq.length;++i){
    
        sq[i].style.backgroundColor=colors[i];

        sq[i].style.display="block";
    
}
});
resetgame.addEventListener("click", function(){
    //alert("Reset Successful");
    colors= generateColors(numsq);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<sq.length;++i){
        sq[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor="steelblue";
});
for(var i=0;i<sq.length;++i){
    sq[i].style.backgroundColor=colors[i];

    //adding click function

    sq[i].addEventListener("click",function(){
        //selecting the choice and comparing it with pickedColor
      var clickedColor= this.style.backgroundColor;
      if(clickedColor===pickedColor){
          msDisplay.textContent="Correct!";
          resetgame.textContent="Play Again?"
          changeColors(clickedColor);
          h1.style.backgroundColor= clickedColor;
      }
      else{
          this.style.backgroundColor= "#232323";
          msDisplay.textContent="Try Again!!";
          
      }

    });

}
function changeColors(color){
 for(var i=0;i<sq.length;++i){
     sq[i].style.backgroundColor=color;
 }
}
function pickColor(){
    var k= Math.floor(Math.random()*colors.length);
    return colors[k];

}
function generateColors(size){
    var arr=[];
    for(var i=0;i<size;++i){
        arr.push(randomColors());
    }
    return arr;
}
function randomColors(){
    var r= Math.floor(Math.random()*256);
    var g= Math.floor(Math.random()*256);
    var b= Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}