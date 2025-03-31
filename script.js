const year = new Date().getFullYear();

// api url
//const api_url =
//	"https://nolaborables.com.ar/api/v2/feriados/"+year;
	
	
const diasem = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

// Defining async function
async function getapi(url) {
	
	// Storing response
	//const response = await fetch(url, { mode: 'no-cors'});
	
	// Storing data in form of JSON
	//var data = await response.json();
	var data = JSON.parse('{"motivo":"Año Nuevo","tipo":"inamovible","info":"https://es.wikipedia.org/wiki/A%C3%B1o_Nuevo","dia":1,"mes":1,"id":"año-nuevo"},{"motivo":"Carnaval","tipo":"inamovible","info":"https://es.wikipedia.org/wiki/Carnaval","dia":3,"mes":3,"id":"carnaval"},{"motivo":"Carnaval","tipo":"inamovible","info":"https://es.wikipedia.org/wiki/Carnaval","dia":4,"mes":3,"id":"carnaval"},{"motivo":"Día Nacional de la Memoria por la Verdad y la Justicia","tipo":"inamovible","info":"https://es.wikipedia.org/wiki/D%C3%ADa_Nacional_de_la_Memoria_por_la_Verdad_y_la_Justicia","dia":24,"mes":3,"id":"memoria-verdad-justicia"},{"motivo":"Día del Veterano y de los Caídos en la Guerra de Malvinas","tipo":"inamovible","info":"https://es.wikipedia.org/wiki/D%C3%ADa_del_Veterano_y_de_los_Ca%C3%ADdos_en_la_Guerra_de_Malvinas","dia":2,"mes":4,"id":"veteranos-malvinas"},{"motivo":"Viernes Santo Festividad Cristiana","tipo":"inamovible","info":"https://es.wikipedia.org/wiki/Viernes_Santo","dia":18,"mes":4,"id":"viernes-santo"},{"motivo":"Día del Trabajador","tipo":"inamovible","info":"https://es.wikipedia.org/wiki/D%C3%ADa_Internacional_de_los_Trabajadores","dia":1,"mes":5,"id":"trabajador"},{"motivo":"Feriado Puente Turístico","tipo":"puente","info":"https://es.wikipedia.org/wiki/Puente_festivo","dia":2,"mes":5,"id":"puente-turistico"},{"motivo":"Día de la Revolución de Mayo","tipo":"inamovible","info":"https://es.wikipedia.org/wiki/Revoluci%C3%B3n_de_Mayo","dia":25,"mes":5,"id":"revolucion-mayo"},{"motivo":"Paso a la Inmortalidad del Gral. Don Martín Güemes","tipo":"trasladable","original":"17-06","info":"https://es.wikipedia.org/wiki/Mart%C3%ADn_Miguel_de_G%C3%BCemes","dia":16,"mes":6,"id":"martin-guemes"},{"motivo":"Paso a la Inmortalidad del General Manuel Belgrano","tipo":"inamovible","info":"https://es.wikipedia.org/wiki/D%C3%ADa_de_la_Bandera_(Argentina)","dia":20,"mes":6,"id":"belgrano"},{"motivo":"Día de la Independencia","tipo":"inamovible","info":"https://es.wikipedia.org/wiki/Declaraci%C3%B3n_de_independencia_de_la_Argentina","dia":9,"mes":7,"id":"independencia"},{"motivo":"Feriado Puente Turístico","tipo":"puente","info":"https://es.wikipedia.org/wiki/Puente_festivo","dia":15,"mes":8,"id":"puente-turistico"},{"motivo":"Paso a la Inmortalidad del General José de San Martín","tipo":"trasladable","original":"17-08","info":"https://es.wikipedia.org/wiki/Jos%C3%A9_de_San_Mart%C3%ADn","dia":17,"mes":8,"id":"san-martin"},{"motivo":"Día del Respeto a la Diversidad Cultural","tipo":"trasladable","original":"12-10","info":"https://es.wikipedia.org/wiki/D%C3%ADa_del_Respeto_a_la_Diversidad_Cultural_(Argentina)","dia":12,"mes":10,"id":"diversidad"},{"motivo":"Feriado Puente Turístico","tipo":"puente","info":"https://es.wikipedia.org/wiki/Puente_festivo","dia":21,"mes":11,"id":"puente-turistico"},{"motivo":"Día de la Soberanía Nacional","tipo":"trasladable","original":"20-11","info":"https://es.wikipedia.org/wiki/D%C3%ADa_de_la_Soberan%C3%ADa_Nacional","dia":24,"mes":11,"id":"soberania-nacional"},{"motivo":"Inmaculada Concepción de María","tipo":"inamovible","info":"https://es.wikipedia.org/wiki/Inmaculada_Concepci%C3%B3n","dia":8,"mes":12,"id":"inmaculada-maria"},{"motivo":"Navidad","tipo":"inamovible","info":"https://es.wikipedia.org/wiki/Navidad","dia":25,"mes":12,"id":"navidad"}')
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
		`<thead>
			<tr>
			<th>Motivo</th>
			<th>Fecha</th>
			</tr>
		</thead>
		<tbody>`;
	
	let date = new Date();
	let month = date.getMonth();
	let day = date.getDate();
	
	// Loop to access all rows
	for (let r of Object.keys(data)) {
		let fechaferiado = new Date(year, data[r].mes-1, data[r].dia)
		let diffTime = Math.abs(fechaferiado - date);
		let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		let diasemana = diasem[fechaferiado.getDay()];
		if (diffDays <= 7) {
			tab += `<tr>
				<td>${data[r].motivo} </td>
				<td>${diasemana} ${data[r].dia}/${data[r].mes}</td>
				</tr>`;
		}
		/* else {
			tab += `<tr>
				<td>${data[r].motivo} </td>
				<td>${data[r].dia}/${data[r].mes}</td>
				</tr>`;
		} */
	}
	tab += `</tbody>
			<tfoot>
				<tr>
				</tr>
			</tfoot>`;
	
	
	
	// Setting innerHTML as tab variable
	document.getElementById("feriados").innerHTML = tab;
}
