function findElementsLessThanAverage() {
    const userInput = prompt("Введите вещественные числа для вектора через запятую (например: 1.5, 2, 3.1, 4):");

    if (userInput === null || userInput.trim() === "") {
        alert("Ввод данных отменен или строка пуста.");
        return;
    }

    const stringArray = userInput.split(',');
    const vector = stringArray.map(Number);

    if (vector.some(isNaN)) {
        alert("Ошибка! Вектор должен содержать только числа. Проверьте введенные данные.");
        return;
    }

    if (vector.length === 0) {
        alert("Вектор не может быть пустым.");
        return;
    }

    const sum = vector.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / vector.length;

    let count = 0;
    for (const element of vector) {
        if (element < average) {
            count++;
        }
    }

    alert(
        `Исходный вектор: [${vector.join(', ')}]\n` +
        `Среднее арифметическое: ${average.toFixed(2)}\n` +
        `Количество элементов, меньших среднего: ${count}`
    );
}

findElementsLessThanAverage();