let btnAdd = document.querySelector('button');
let table = document.querySelector('table');
let EmpIDInput = document.querySelector('#EmpID');
let EmpNameInput = document.querySelector('#EmpName');
let DepartmentInput = document.querySelector('#Department');
let PlaceInput = document.querySelector('#Place');
btnAdd.addEventListener('click', () => {
    let EmpID = EmpIDInput.value;
	let EmpName = EmpNameInput.value;
    let Department = DepartmentInput.value;
    let Place = PlaceInput.value;
    let template = `
                <tr>
                    <td>${EmpID}</td>
                    <td>${EmpName}</td>
                    <td>${Department}</td>
					<td>${Place}</td>
                </tr>`;
    table.innerHTML += template;
});
 

 

