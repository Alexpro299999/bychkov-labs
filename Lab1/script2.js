function processVector() {
    const inputElement = document.getElementById('arrayInput');
    const userInput = inputElement.value;

    if (userInput.trim() === "") {
        alert("Поле ввода не должно быть пустым.");
        return;
    }

    const stringArray = userInput.split(',');
    const vectorA = stringArray.map(s => parseFloat(s.trim()));

    if (vectorA.some(isNaN)) {
        alert("Ошибка! Убедитесь, что все введенные элементы являются числами.");
        return;
    }

    if (vectorA.length < 2) {
        alert("Массив должен содержать как минимум два элемента.");
        return;
    }

    const maxElement = Math.max(...vectorA);
    const minElement = Math.min(...vectorA);
    const minIndex = vectorA.indexOf(minElement);

    const newVector = [...vectorA];

    for (let i = 0; i < minIndex; i++) {
        newVector[i] = newVector[i] * maxElement;
    }

    document.getElementById('originalVector').textContent = `[${vectorA.join(', ')}]`;
    document.getElementById('maxElement').textContent = maxElement;
    document.getElementById('minElement').textContent = minElement;
    document.getElementById('resultVector').textContent = `[${newVector.join(', ')}]`;
}