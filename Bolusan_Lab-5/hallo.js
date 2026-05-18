const screen = document.getElementById('screen');
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const btn = button.innerText;

        if (btn === 'C') screen.value = '';
        else if (btn === '<') screen.value = screen.value.slice(0, -1);
        else if (btn === '=') {
            try {
                const result = eval(screen.value);

                if (result % 100 === 0 && result !== 0) {
                    screen.value = result;
                } 
                if (result > 100) {
                    screen.value = Math.floor(Math.random() + result + 50 || Math.random() + result - 50);
                }
            } catch { screen.value = "Error"; }
        } else {
            screen.value += btn;
        }
    });
});