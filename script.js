// PIPEX Basic Test Project JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const demoButton = document.getElementById('demo-button');
    const outputDiv = document.getElementById('output');
    const messageParagraph = document.getElementById('message');
    
    if (demoButton && outputDiv && messageParagraph) {
        demoButton.addEventListener('click', function() {
            // Show output div
            outputDiv.style.display = 'block';
            
            // Change message and add dynamic timestamp
            const now = new Date();
            const timeString = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            messageParagraph.textContent = `¡Hola Engel! PIPEX ejecutando JavaScript autónomamente. Hora: ${timeString}.`;
            
            // Change button text temporarily
            const originalText = demoButton.textContent;
            demoButton.textContent = '¡Ejecutado!';
            demoButton.style.backgroundColor = '#27ae60';
            
            // Reset button after 2 seconds
            setTimeout(() => {
                demoButton.textContent = originalText;
                demoButton.style.backgroundColor = '';
            }, 2000);
        });
    }
    
    // Log a simple console message
    console.log('PIPEX: script.js cargado y listo para acción.');
});