function verificar() {
    const inputs = document.querySelectorAll('input[data-solution]');
    let correcto = 0;

    inputs.forEach(input => {
        const valor = input.value.toUpperCase();
        const solucion = input.dataset.solution;

        if (valor === solucion) {
            input.style.backgroundColor = '#b2fab4';
            correcto++;
        } else {
            input.style.backgroundColor = '#fab2b2'; 
        }
    });

    
    setTimeout(() => {
        if (correcto === inputs.length) {
            alert("¡Felicidades! Has completado el crucigrama.");
        }
    }, 100);
}


document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.cell input');
    const grid = document.querySelectorAll('.cell');
    const gridColumns = 8;

    function moveFocus(currentIndex, direction) {
        let nextIndex = currentIndex + direction;

        
        while (nextIndex >= 0 && nextIndex < grid.length) {
            const nextCell = grid[nextIndex];
            const input = nextCell.querySelector('input');

            if (input) {
                input.focus();
                break;
            }

            nextIndex += direction;
        }
    }

    cells.forEach((cell, index) => {
        const parentIndex = Array.from(grid).indexOf(cell.parentElement); 

        cell.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowUp': 
                    moveFocus(parentIndex, -gridColumns);
                    break;
                case 'ArrowDown': 
                    moveFocus(parentIndex, gridColumns);
                    break;
                case 'ArrowLeft':
                    moveFocus(parentIndex, -1);
                    break;
                case 'ArrowRight':
                    moveFocus(parentIndex, 1);
                    break;
                default:
                    break;
            }
        });
    });
});
