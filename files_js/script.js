function rever(){
	let s = document.getElementById("inp").value.split('').reverse().join('');
	
	const d = new Date();
  	d.setTime(d.getTime() + (10 *24*60*60*1000));
  	let expires = "expires="+ d.toUTCString();
  	document.cookie = "name=" + s + ";" + expires + ";path=/";
	
	alert(s);
}

function recol(){
	let s =  document.getElementById("inp").value;
	if (!!s){
		col = "#" + s
		let ar = document.getElementsByName('bl');
		for (let i = 0; i < ar.length; i++){
			ar[i].style.border = "solid " + col;
		}
		localStorage.setItem("color", col);
	}
	else{
		let col = localStorage.getItem("color")
		let ar = document.getElementsByName('bl');
		for (let i = 0; i < ar.length; i++){
			ar[i].style.border = "solid " + col;
		}
	}	
}
recol()
const w = window.getComputedStyle(document.getElementById("3"));
let sty = new Map();
sty.set("backgroundColor", String(window.getComputedStyle(document.getElementById("3")).backgroundColor));
sty.set("textAlign", String(window.getComputedStyle(document.getElementById("3")).textAlign));
console.log(window.getComputedStyle(document.getElementById("3")).backgroundColor)
console.log(sty)
st = new Map()

function cl(){
	let s = document.getElementById("4").innerHTML;
	let inp1 = document.createElement("input");
	inp1.id = "inp1";
	inp1.style.width = "50%";
	inp1.style.border = "1px solid #c0c0c0";
	inp1.style.borderRadius = "4px";
	let inp2 = document.createElement("input");
	inp2.id = "inp2";
	inp2.style.width = "50%";
	inp2.style.border = "1px solid #c0c0c0";
	inp2.style.borderRadius = "4px";
	
	let four = document.getElementById("4");
	four.innerHTML = "Изменение стилей блока 3:<br>Что изменить:";
	four.appendChild(inp1);
	four.innerHTML += "Значение:";
	four.appendChild(inp2);
	four.innerHTML += "<button onclick='chstyle()'>Изменить</button>";
	four.innerHTML += "<button onclick='retstyle()'>Вернуть</button>";
	
	
}

function chstyle(){
	let s1 = document.getElementById("inp1").value;
	
	//sty.set(s1, window.getComputedStyle(document.getElementById("3")).s1);
	console.log(sty);
	let s2 = document.getElementById("inp2").value;
	
	eval("document.getElementById('3').style." + s1 + " = s2");
	
	localStorage.setItem(s1, s2);
}

function retstyle(){
	console.log(sty.size);
	for (let key of sty.keys()){
		eval("document.getElementById('3').style."+key+" = sty.get(key)");
	}
	localStorage.clear();
}