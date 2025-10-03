document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculateBtn');
    calculateButton.addEventListener('click', calculateColumnSum);
});

function calculateColumnSum() {
    const input = document.getElementById('matrixInput').value.trim();
    if (!input) {
        alert("Поле ввода не должно быть пустым.");
        return;
    }

    const rows = input.split('\n');
    const matrix = rows.map(row =>
        row.trim().split(/[\s,]+/).map(Number)
    );

    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        if (matrix[i].length !== n || matrix[i].some(isNaN)) {
            alert("Ошибка! Матрица должна быть квадратной и содержать только числа.");
            return;
        }
    }

    let totalSum = 0;
    const columnsToSum = new Array(n).fill(false);

    for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) {
            if (matrix[i][j] > 0) {
                columnsToSum[j] = true;
                break;
            }
        }
    }

    for (let j = 0; j < n; j++) {
        if (columnsToSum[j]) {
            for (let i = 0; i < n; i++) {
                totalSum += matrix[i][j];
            }
        }
    }

    displayMatrix(matrix);
    document.getElementById('sumResult').textContent = totalSum;
}

function displayMatrix(matrix) {
    const container = document.getElementById('originalMatrix');
    container.innerHTML = '';
    const table = document.createElement('table');
    matrix.forEach(rowData => {
        const tr = document.createElement('tr');
        rowData.forEach(cellData => {
            const td = document.createElement('td');
            td.textContent = cellData;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    container.appendChild(table);
}