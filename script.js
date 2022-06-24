const year = new Date().getFullYear();

// api url
const api_url =
	"https://nolaborables.com.ar/api/v2/feriados/"+year;
	
	
const diasem = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}

// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Motivo</th>
		<th>Fecha</th>
		</tr>`;
	
	let date = new Date();
	let month = date.getMonth();
	let day = date.getDate();
	
	// Loop to access all rows
	for (let r of Object.keys(data)) {
		let fechaferiado = new Date(2022, data[r].mes-1, data[r].dia)
		let diffTime = Math.abs(fechaferiado - date);
		let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		let diasemana = diasem[fechaferiado.getDay()-1];
		if (diffDays <= 7) {
			tab += `<tr>
				<td style="color:red;">${data[r].motivo} </td>
				<td style="color:red;">${diasemana} ${data[r].dia}/${data[r].mes}</td>
				</tr>`;
		}
		/* else {
			tab += `<tr>
				<td>${data[r].motivo} </td>
				<td>${data[r].dia}/${data[r].mes}</td>
				</tr>`;
		} */
	}
	
	
	
	// Setting innerHTML as tab variable
	document.getElementById("feriados").innerHTML = tab;
}
