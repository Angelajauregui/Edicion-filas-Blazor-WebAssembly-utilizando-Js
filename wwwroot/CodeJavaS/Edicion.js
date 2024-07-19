//Funcion encargada de permitir mediante el boton editar la edicion de la fila en cuestion
function enableEditMode(editButton) {
    const row = editButton.closest('tr');
    const cells = row.querySelectorAll('.edit-mode');

    cells.forEach(cell => {
        const content = cell.textContent.trim();
        cell.innerHTML = `<input type="text" value="${content}" />`;
    });
    
    row.querySelector('.edit').style.display = 'none';
    row.querySelector('.save-btn').style.display = 'inline';
    row.querySelector('.cancel-btn').style.display = 'inline';
}


function saveChanges(saveButton) {
    const row = saveButton.closest('tr');
    const cells = row.querySelectorAll('.edit-mode');

    cells.forEach(cell => {
        const newValue = cell.querySelector('input').value;
        cell.textContent = newValue;
    });

    row.querySelector('.edit').style.display = 'inline';
    row.querySelector('.save-btn').style.display = 'none';
    row.querySelector('.cancel-btn').style.display = 'none';
}




function cancelEdit(cancelButton) {
    const row = cancelButton.closest('tr');
    const cells = row.querySelectorAll('.edit-mode');

    cells.forEach(cell => {
        const content = cell.querySelector('input').value;
        cell.textContent = content;
        
    });

    row.querySelector('.edit').style.display = 'inline';
    row.querySelector('.save-btn').style.display = 'none';
    row.querySelector('.cancel-btn').style.display = 'none';
}

function addRow() {
    const table = document.getElementById('editableTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);

    const cell1 = newRow.insertCell(0);
    cell1.className = 'edit-mode';
    cell1.textContent = '';

    const cell2 = newRow.insertCell(1);
    cell2.className = 'edit-mode';
    cell2.textContent = '';

    const cell3 = newRow.insertCell(2);
    cell3.className = 'edit-mode';
    cell3.textContent = '';

    const cell4 = newRow.insertCell(3);
    cell4.className = 'edit-mode';
    cell4.textContent = '';

    const cell5 = newRow.insertCell(4);
    cell5.className = 'edit-mode';
    cell5.textContent = '';
    
    const cell6 = newRow.insertCell(5);
    cell6.innerHTML = '<span class="edit" onclick="enableEditMode(this)">Edit</span>' +
        '<span class="save-btn" onclick="saveChanges(this)">Save</span>' +
        '<span class="cancel-btn" onclick="cancelEdit(this)">Cancel</span>';
}