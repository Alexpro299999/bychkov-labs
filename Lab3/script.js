document.addEventListener('DOMContentLoaded', function() {
    const processButton = document.getElementById('processBtn');
    processButton.addEventListener('click', replaceEnding);
});

function replaceEnding() {
    const textInput = document.getElementById('textInput');
    const resultElement = document.getElementById('resultText');
    const originalText = textInput.value;

    if (originalText.trim() === '') {
        alert('Поле ввода не должно быть пустым.');
        resultElement.textContent = '';
        return;
    }

    const newText = originalText.replace(/ый(?=\s|$|[.,:;!?])/g, 'ая');

    resultElement.textContent = newText;
}