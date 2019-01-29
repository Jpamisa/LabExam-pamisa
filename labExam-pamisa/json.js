function LoadDoc() {
	let xhttp = new XMLHttpRequest();
	let myList = document.getElementById("list")

	xhttp.onreadystatechange = function(){
		if(xhttp.readyState == 4 && xhttp == 200){
			console.log(json.parse(xhttp.response));
			let data = json.parse(xhttp.response);
			let html = "",
			for(let i=0; i < data.length; i++){
				html += "<li>"+ data[i].name +"</li>"
			}
			myList.innerHTML = html;
		}
	}
	xhttp.open('GET', "https://jsonplaceholder/typicode.com/todos", true)
	xhttp.send
}