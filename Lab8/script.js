function showProblem(problemNumber) {
    for (let i = 1; i <= 4; i++) {
        document.getElementById('problem' + i).style.display = 'none';
        document.getElementById('nav-p' + i).classList.remove('current');
    }
    document.getElementById('problem' + problemNumber).style.display = 'block';
    document.getElementById('nav-p' + problemNumber).classList.add('current');
    jsConsole.clear();
}
showProblem(1);

function runProblem1() {
    jsConsole.clear();
    const a = jsConsole.read('#p1-a');
    const b = jsConsole.read('#p1-b');
    const result = conc(a, b);
    jsConsole.writeLine(`conc(${a}, ${b}) -> ${result}`);
}

function conc(a, b) {
    return String(a) + String(b);
}

function runProblem2() {
    jsConsole.clear();
    const comp = function(a, b) {
        return a === b ? 1 : -1;
    };
    const a = jsConsole.read('#p2-a');
    const b = jsConsole.read('#p2-b');
    jsConsole.writeLine(`comp('${a}', '${b}') -> ${comp(a, b)}`);
    jsConsole.writeLine(`comp('abC', 'abc') -> ${comp('abC', 'abc')}`);
}

function runProblem3() {
    jsConsole.clear();
    (function() {
        jsConsole.writeLine('message in console');
    })();
}

function fib(n) {
    if (n <= 0) return 0n;
    if (n <= 2) return 1n;

    let prev = 1n;
    let current = 1n;

    for (let i = 3; i <= n; i++) {
        let next = prev + current;
        prev = current;
        current = next;
    }
    return current;
}

function runProblem4() {
    jsConsole.clear();
    const n = jsConsole.readInteger('#p4-number');
    jsConsole.writeLine(`Ваш запрос: fib(${n}) -> ${fib(n)}`);
    jsConsole.writeLine('---');
    jsConsole.writeLine('Лог:');
    for (let i = 1; i < n; i++) {
        jsConsole.writeLine(`fib(${i}) -> ${fib(i)}`);
    }
}