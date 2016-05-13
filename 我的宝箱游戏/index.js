var threeChest=document.getElementById("three_chest");
var chestLi=threeChest.getElementsByTagName("li");
var threeCircle=document.getElementById("three_circle")
var ciecleLi=three_circle.getElementsByTagName("li")
var num=null;

function chestLeftAuto(){
	num++
	if(num>chestLi.length-1){
		num=0
	}
	for(var i=0;i<chestLi.length;i++){
		ciecleLi[i].style.backgroundColor="#cdcbcb"
	}
	ciecleLi[num].style.backgroundColor="#534c4c"
	threeChest.style.left= -num*chestLi[0].offsetWidth+ "px";
}

function chestRightAuto(){
	num--
	if(num<0){
		num=chestLi.length-1
	}
	for (var i = chestLi.length - 1; i >= 0; i--) {
		ciecleLi[i].style.backgroundColor="#cdcbcb"
	}
	ciecleLi[num].style.backgroundColor="#534c4c"
	threeChest.style.left= -num*chestLi[0].offsetWidth+ "px";
}

var rightArrow=document.getElementById("right_arrow")
var leftArrow=document.getElementById("left_arrow")

rightArrow.onclick=function(){
	chestLeftAuto()
}

leftArrow.onclick=function(){
	chestRightAuto()
}

var aImg=threeChest.getElementsByTagName("img")
for(var i=0;i<6;i++){
	aImg[i].index=i+1
	aImg[i].onmouseover=function(){
		this.src="images/"+this.index+".gif"
	}
	aImg[i].onmouseout=function(){
		this.src="images/"+this.index+".png"
	}

}







