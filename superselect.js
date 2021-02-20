window.addEventListener("DOMContentLoaded",superselect);

function superselect(){
	var elems = document.getElementsByClassName("superselect");
	for(var i = 0; i < elems.length; i++){
		elems[i].addEventListener("focusin",function(ev){
			var elem = event.srcElement;
			var options = event.srcElement.attributes.options.value;
			document.getElementById(options).style.width = elem.offsetWidth+"px";
			document.getElementById(options).style.left = elem.offsetLeft+"px";
			document.getElementById(options).style.display = "block";
			if(elem.value != ""){ elem.attributes.placeholder.value = elem.value; }
			elem.value = "";
			ss_updatelist(ev);
		});
		elems[i].addEventListener("focusout",function(ev){
			var options = ev.srcElement.attributes.options.value;
			setTimeout(function(){
				document.getElementById(options).style.display = "none";
			},100);
		});
		var opt_cont = document.getElementById(elems[i].attributes.options.value);
		var options = opt_cont.children;
		for (var a = 0; a < options.length; a++){
			options[a].addEventListener("click",ss_choose);
		}
		opt_cont.addEventListener("DOMNodeInserted",function(e){
			e.srcElement.addEventListener("click",ss_choose);
		});
		opt_cont.addEventListener("DOMNodeRemoved",function(e){
			e.srcElement.removeEventListener("click",ss_choose);
		});
		elems[i].addEventListener("keyup",ss_updatelist);
	}
}
function ss_choose(ev){
	//console.log(ev);
	//console.log("selected: "+ev.target.attributes.value.value+": "+ev.target.innerHTML);
	var container = ev.target.parentElement;
	var valelem = document.getElementById(container.attributes.id.value+"_data");
	var inputelem = document.querySelector("input.superselect[options=\""+container.attributes.id.value+"\"]");
	valelem.value = ev.target.attributes.value.value;
	inputelem.value = ev.target.innerText;
	container.style.display = "none";
	if(inputelem.onchange != null){
		inputelem.onchange();
	}
	if(valelem.onchange != null){
		valelem.onchange();
	}
}
function ss_select(inputelem, val){
	var valelem = document.getElementById(inputelem.attributes.options.value+"_data");
	valelem.value = val;
	if(val == ""){
		inputelem.value = "";
		return;
	}
	var options = document.getElementById(inputelem.attributes.options.value).children;
	for (var i = 0; i < options.length; i++){
		if(options[i].attributes.value.value == val){
			inputelem.value = options[i].innerText;
		}
	}
	if(inputelem.onchange != null){
		inputelem.onchange();
	}
	if(valelem.onchange != null){
		valelem.onchange();
	}
}
function ss_updatelist(ev){
	var options = document.getElementById(ev.target.attributes.options.value).children;
	var search = ev.target.value.toLowerCase();
	for (var a = 0; a < options.length; a++){
		if(options[a].innerText.toLowerCase().indexOf(search) != -1){
			options[a].style.display = "block";
		} else {
			options[a].style.display = "none";
		}
	}
}
