function reverseString(str) {
    return str.split('').reverse().join('');
}

function handleReverseString() {
    const input = document.getElementById('stringInput').value;
    const result = reverseString(input);
    const resultDiv = document.getElementById('reverseResult');
    resultDiv.textContent = 'Результат: ' + result;
    resultDiv.style.display = 'block';
}

function areBracketsBalanced(expression) {
    let counter = 0;
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        if (char === '(') {
            counter++;
        } else if (char === ')') {
            counter--;
        }
        if (counter < 0) {
            return false;
        }
    }
    return counter === 0;
}

function handleCheckBrackets() {
    const input = document.getElementById('expressionInput').value;
    const isValid = areBracketsBalanced(input);
    const resultDiv = document.getElementById('bracketsResult');
    if (isValid) {
        resultDiv.textContent = 'Выражение корректно';
        resultDiv.classList.remove('invalid');
    } else {
        resultDiv.textContent = 'Выражение некорректно';
        resultDiv.classList.add('invalid');
    }
    resultDiv.style.display = 'block';
}