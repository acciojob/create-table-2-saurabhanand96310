let table=document.querySelector("#myTable");


function createTable() {
      let row= prompt("Input number of rows");
	  let column= prompt("Input number of column");
	table.innerHTML='';
	
	for(let i=0;i<row;i++){
		let tr=document.createElement('tr');
		for(let j=0;j<column;j++){
			let td=document.createElement('td');
			td.innerText=`Row-${i} Column-${j}`;
			tr.appendChild(td);
		}
		table.appendChild(tr)
	}
}
