
let tempo= 3000;

function slide(){
	document.getElementById("banner").src = "imagens/img1.jpg";

	setTimeout('slide2()', tempo);
}

function slide2(){
	document.getElementById("banner").src = "imagens/img2.jpg";;
	setTimeout('slide3()', tempo);


}

function slide3(){
	document.getElementById("banner").src = "imagens/img3.jpg";;
	setTimeout('slide()', tempo);
}