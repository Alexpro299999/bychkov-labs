document.addEventListener('DOMContentLoaded', function() {
    const queryBtn = document.getElementById('queryBtn');
    const tagBtn = document.getElementById('tagBtn');
    const resetBtn = document.getElementById('resetBtn');

    function selectDivsWithQuerySelectorAll() {
        resetSelection();
        const nestedDivs = document.querySelectorAll('div > div');
        nestedDivs.forEach(div => div.classList.add('highlighted'));
    }

    function selectDivsWithGetElementsByTagName() {
        resetSelection();
        const allDivs = document.getElementsByTagName('div');
        for (let i = 0; i < allDivs.length; i++) {
            const div = allDivs[i];
            if (div.parentNode && div.parentNode.tagName === 'DIV') {
                div.classList.add('highlighted');
            }
        }
    }

    function resetSelection() {
        const highlightedDivs = document.querySelectorAll('.highlighted');
        highlightedDivs.forEach(div => div.classList.remove('highlighted'));
    }

    queryBtn.addEventListener('click', selectDivsWithQuerySelectorAll);
    tagBtn.addEventListener('click', selectDivsWithGetElementsByTagName);
    resetBtn.addEventListener('click', resetSelection);

    const logBtn = document.getElementById('logBtn');

    function logInputValue() {
        const textInput = document.getElementById('textInput');
        const value = textInput.value;
        console.log(value);
    }

    logBtn.addEventListener('click', logInputValue);

    const colorInput = document.getElementById('colorInput');

    function changeBackgroundColor() {
        const color = colorInput.value;
        document.body.style.backgroundColor = color;
    }

    colorInput.addEventListener('input', changeBackgroundColor);
});