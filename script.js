const apiUrl = "http://192.168.1.100"; // Ganti dengan IP ESP8266

async function togglePump() {
    let state = document.getElementById("pumpSwitch").checked ? "ON" : "OFF";
    try {
        await fetch(apiUrl + "/toggle?state=" + state, { method: "GET" });
    } catch (error) {
        console.error("Gagal mengontrol pompa:", error);
    }
}
