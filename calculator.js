document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector('.text');
    const buttons = document.querySelectorAll('input[type=button]');
    let expression = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;

            if (value === 'AC') {
                expression = '';
                display.value = '0';
            } else if (value === 'C') {
                expression = expression.slice(0, -1);
                display.value = expression || '0';
            } else if (value === '=') {
                if (expression) {
                    expression = expression.replace('÷', '/').replace('×', '*');
                    const result = eval(expression);
                    display.value = result;
                    expression = result.toString();
                }
            } else {
                expression += value.replace('÷', '/').replace('×', '*');
                display.value = expression;
            }
        });
    });
});
