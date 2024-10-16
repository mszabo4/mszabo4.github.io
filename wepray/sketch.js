<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WristBand Simulator</title>
  <style>
    body {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: black;
    }
    canvas {
      border: 2px solid white;
    }
  </style>
</head>
<body>
  <canvas id="wristbandCanvas"></canvas>

  <script>
    const canvas = document.getElementById('wristbandCanvas');
    const ctx = canvas.getContext('2d');
    
    // Ajustar tamaño del canvas al tamaño de la pantalla
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Configuración de las cruces
    const crosses = [];
    const numCrosses = 50;

    // Función para generar un color aleatorio
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    // Función para crear cruces
    function createCross(x, y, size, color) {
      return {
        x,
        y,
        size,
        color,
        dx: (Math.random() - 0.5) * 5,
        dy: (Math.random() - 0.5) * 5
      };
    }

    // Inicializar cruces
    for (let i = 0; i < numCrosses; i++) {
      crosses.push(createCross(Math.random() * canvas.width, Math.random() * canvas.height, 20 + Math.random() * 30, getRandomColor()));
    }

    // Función para dibujar cruces
    function drawCross(cross) {
      ctx.save();
      ctx.translate(cross.x, cross.y);
      ctx.strokeStyle = cross.color;
      ctx.lineWidth = 5;

      // Dibujar cruz
      ctx.beginPath();
      ctx.moveTo(-cross.size / 2, 0);
      ctx.lineTo(cross.size / 2, 0);
      ctx.moveTo(0, -cross.size / 2);
      ctx.lineTo(0, cross.size / 2);
      ctx.stroke();
      ctx.restore();
    }

    // Actualizar cruces
    function updateCross(cross) {
      cross.x += cross.dx;
      cross.y += cross.dy;

      // Hacer que reboten en los bordes
      if (cross.x < 0 || cross.x > canvas.width) cross.dx = -cross.dx;
      if (cross.y < 0 || cross.y > canvas.height) cross.dy = -cross.dy;

      // Cambiar color aleatoriamente
      if (Math.random() < 0.01) {
        cross.color = getRandomColor();
      }
    }

    // Función de animación
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dibujar y actualizar cada cruz
      crosses.forEach(cross => {
        drawCross(cross);
        updateCross(cross);
      });

      requestAnimationFrame(animate);
    }

    // Simular que suena "We Pray"
    function playWePray() {
      console.log("We Pray está sonando...");

      // Cambiar la velocidad de las cruces para simular el efecto de la canción
      crosses.forEach(cross => {
        cross.dx *= 1.2;
        cross.dy *= 1.2;
      });
    }

    // Iniciar animación
    animate();

    // Simular el evento de la canción "We Pray"
    setTimeout(playWePray, 3000);  // 3 segundos de retraso para simular el inicio de la canción
  </script>
</body>
</html>
