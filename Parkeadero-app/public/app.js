async function ocuparEspacio(espacioId) {
    try {
        const response = await fetch('/ocuparEspacio', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ espacioId }),
        });

        const data = await response.json();

        if (data.success) {
            alert(data.message);
            const espacioButton = document.querySelector(`button[data-id="${espacioId}"]`);
            espacioButton.classList.add('ocupado');
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
