let codes=document.getElementById("codes");
let remove=document.getElementById("remove");
let run=document.getElementById("run");
let result=document.getElementById("result");
run.onclick=()=>{
result.innerHTML=codes.value
localStorage.setItem("cod",codes.value)
};
remove.onclick=()=>{
	result.innerHTML=null;
	codes.value="";
}
onload=()=>{
var stored=localStorage.getItem("cod");
codes.value=stored;
result.innerHTML=codes.value;
}
