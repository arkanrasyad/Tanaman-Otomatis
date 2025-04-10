document.addEventListener('DOMContentLoaded', () => {
    // Fetch plant data
    function fetchData() {
        // Replace with your API endpoint
        fetch('/api/plant-data')
            .then(response => response.json())
            .then(data => {
                document.getElementById('moisture').innerText = data.moisture;
                document.getElementById('gas-levels').innerText = data.gasLevels;
                document.getElementById('temperature').innerText = data.temperature;
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // Control relay
    document.getElementById('relay-on').addEventListener('click', () => {
        fetch('/api/control-relay/on', { method: 'POST' })
            .then(response => {
                if (response.ok) {
                    alert('Relay turned on');
                }
            })
            .catch(error => console.error('Error turning on relay:', error));
    });

    document.getElementById('relay-off').addEventListener('click', () => {
        fetch('/api/control-relay/off', { method: 'POST' })
            .then(response => {
                if (response.ok) {
                    alert('Relay turned off');
                }
            })
            .catch(error => console.error('Error turning off relay:', error));
    });

    // Fetch data every 5 seconds
    setInterval(fetchData, 5000);
});
