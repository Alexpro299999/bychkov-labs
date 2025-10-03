function findSaddlePoints() {
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

    const saddlePoints = [];

    for (let i = 0; i < n; i++) {
        let minInRow = matrix[i][0];
        let minColIndex = 0;
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] < minInRow) {
                minInRow = matrix[i][j];
                minColIndex = j;
            }
        }

        let isSaddle = true;
        for (let k = 0; k < n; k++) {
            if (matrix[k][minColIndex] > minInRow) {
                isSaddle = false;
                break;
            }
        }

        if (isSaddle) {
            saddlePoints.push(`(${i + 1}, ${minColIndex + 1})`);
        }
    }

    displayMatrix(matrix);
    const resultElement = document.getElementById('saddlePointsResult');
    if (saddlePoints.length > 0) {
        resultElement.textContent = saddlePoints.join('; ');
    } else {
        resultElement.textContent = "Седловых точек не найдено.";
    }
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