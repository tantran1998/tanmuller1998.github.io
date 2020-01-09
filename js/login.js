// Đổi đoạn văn thành đoạn khác
function myFunction1() {
  document.getElementById("demo4").innerHTML = "Paragraph changed.";
}



function HideImage() {
	document.getElementById("a1").style.display="none"
}

function ShowImage() {
	document.getElementById("a1").style.display="inline-block"
}

function CustomImage2() {
	document.getElementById("divRed").style.display="inline-block"
}

function CustomImage3() {
	document.getElementById("div").style.width='50px';
	document.getElementById("div").style.height='200px';
	document.getElementById("div").style.borderRadius='20px';
	document.getElementById("div").style.backgroundColor='blue';
	document.getElementById("div").style.display='inline-block'
}

function CustomImage4() {
	a = document.getElementById("div1")
	a.style.width='50px';
	a.style.height='200px';
	a.style.borderRadius='20px';
	a.style.backgroundColor='orange';
	a.style.display='inline-block'
}

function CustomImage5() {
	a = document.getElementById("div2").style
	a.width='50px';
	a.height='200px';
	a.borderRadius='20px';
	a.backgroundColor='gray';
	a.display='inline-block'
}

function Test() {
	window.alert('Tân Muller')
}

//phép cộng
//phép nhân
function show() {
	window.alert(abc(5,5));
}

function abc(p1, p2) {
	return p1 * p2;
}

function show5() {
	window.alert(sum(5,5));
}

function sum(p1, p2) {
	return p1 + p2;
}

// //input
// function show2() {
// 	document.getElementById('demo').innerText = 'fgfg';
// 	alert('â')
// }

// function sum1() {
// 	var a3 = document.getElementById('a3').value
// 	var a2 = document.getElementById('a2').value
// 	return = parstInt(a1) + parstInt(a2);
// }

// function dapan() {
// 	document.getElementById('ketqua').innerText = 'tong';
// 	alert('tong')
// }

// function tong() {
// 	var sodau = document.getElementById('sodau').value;
// 	var sosau = document.getElementById('sosau').value;
// 	return = parstInt(sodau) + parstInt(sosau);
// }
