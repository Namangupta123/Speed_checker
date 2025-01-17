document.getElementById('checkSpeed').addEventListener('click', async () => {
    document.getElementById('download').textContent = 'Checking...';
    document.getElementById('upload').textContent = 'Checking...';
    document.getElementById('ping').textContent = 'Checking...';

    try {
        const response = await fetch('http://127.0.0.1:8000/speedTest');
        const data = await response.json();
        document.getElementById('download').textContent = data.download_speed.toFixed(2);
        document.getElementById('upload').textContent = data.upload_speed.toFixed(2);
        document.getElementById('ping').textContent = data.Ping.toFixed(2);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('download').textContent = 'Error';
        document.getElementById('upload').textContent = 'Error';
        document.getElementById('ping').textContent = 'Error';
    }
});