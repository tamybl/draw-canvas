const listeners = () => {
    console.log('Estamos ready!');
    const canvas = document.querySelector('#draw');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Definiendo estilo de linea
    ctx.strokeStyle = '#BADA55';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 20;
    
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    const draw = (e) => {
        if (!isDrawing) return;
        console.log(e);
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];


    }

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mousedown', () => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);





}

document.addEventListener('DOMContentLoaded', listeners);