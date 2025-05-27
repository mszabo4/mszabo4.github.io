// Variables globales
let currentExpression = { dominant: 'happy', intensity: 0.8 };
let smoothIntensity = 0;

// Funciones personalizadas para las figuras
function figuraFelic(intensitat) {
  // Código para dibujar la figura de felicidad
}

function figuraTrist(intensitat) {
  // Código para dibujar la figura de tristeza
}

// Función draw principal
function draw() {
  background(240);
  
  // Transición suave de la intensidad
  smoothIntensity = lerp(smoothIntensity, currentExpression.intensity, 0.1);

  // Dibuja la figura geométrica grande centrada según el sentimiento
  push();
  translate(width / 2, height / 2);
  switch(currentExpression.dominant) {
    case 'happy':      figuraFelic(smoothIntensity); break;
    case 'sad':        figuraTrist(smoothIntensity); break;
    // ... otros casos
  }
  pop();
  
  // Resto del código (vídeo, texto, etc.)
}
