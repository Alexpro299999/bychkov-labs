function reverseDecimalNumber(num) {
    const numStr = Math.abs(num).toString();
    const reversedStr = numStr.split('').reverse().join('');
    const reversedNum = parseInt(reversedStr);

    return num < 0 ? -reversedNum : reversedNum;
}

function handleReverseNumber() {
    const inputElement = document.getElementById('numberInput');
    const resultDiv = document.getElementById('reverseResult');
    const number = parseInt(inputElement.value);

    if (isNaN(number)) {
        alert('Пожалуйста, введите корректное число.');
        resultDiv.style.display = 'none';
        return;
    }

    const result = reverseDecimalNumber(number);
    resultDiv.textContent = 'Результат: ' + result;
    resultDiv.style.display = 'block';
}

function isBiggerThanNeighbors(arr, index) {
    if (index <= 0 || index >= arr.length - 1) {
        return false;
    }

    return arr[index] > arr[index - 1] && arr[index] > arr[index + 1];
}

function handleCheckNeighbors() {
    const arrayInput = document.getElementById('arrayInput').value;
    const indexInput = document.getElementById('indexInput').value;
    const resultDiv = document.getElementById('neighborsResult');

    const arr = arrayInput.split(',').map(s => parseInt(s.trim()));
    const index = parseInt(indexInput);

    if (arr.some(isNaN) || isNaN(index)) {
        alert('Проверьте правильность ввода массива и индекса.');
        resultDiv.style.display = 'none';
        return;
    }

    if (index < 0 || index >= arr.length) {
        alert('Индекс находится за пределами массива.');
        resultDiv.style.display = 'none';
        return;
    }

    const isBigger = isBiggerThanNeighbors(arr, index);

    if (isBigger) {
        resultDiv.textContent = `Да, элемент ${arr[index]} (индекс ${index}) больше своих соседей.`;
        resultDiv.classList.remove('invalid');
    } else {
        resultDiv.textContent = `Нет, элемент ${arr[index]} (индекс ${index}) не больше своих соседей.`;
        resultDiv.classList.add('invalid');
    }
    resultDiv.style.display = 'block';
}