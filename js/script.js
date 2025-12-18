document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('calendar-container');
    const emojis = ["🎮", "⌚", "🎧", "📸", "💻", "📱", "🧸", "⚽", "👠", "🕶️", "💍", "🧢", "🎒", "🎸", "🚲", "🛴", "🚁", "⏰", "📚", "💊", "🍔", "🌵", "💡", "🎁"];

    // Generar los 24 días
    for (let i = 1; i <= 24; i++) {
        // Lógica de precios aleatorios tipo tienda china
        const price = (Math.random() * 20 + 1).toFixed(2);
        const oldPrice = (price * 1.5).toFixed(2);
        const discount = Math.floor(((oldPrice - price) / oldPrice) * 100);
        const sold = Math.floor(Math.random() * 40 + 60);

        const card = document.createElement('div');
        card.className = 'advent-card';
        card.innerHTML = `
            <div class="day-badge">DÍA ${i}</div>
            <div class="emoji-container">${emojis[i-1] || '🎁'}</div>
            <div class="card-body">
                <div class="price-box">
                    <span class="price-now">€${price}</span>
                    <span class="price-old">€${oldPrice}</span>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-1">
                    <span class="discount-label">-${discount}% EXTRA</span>
                    <small class="text-danger fw-bold">🔥 ${sold}% vendido</small>
                </div>
                <div class="progress mt-2" style="height: 4px;">
                    <div class="progress-bar bg-danger" style="width: ${sold}%"></div>
                </div>
            </div>
        `;

        // Evento para abrir el Modal de Bootstrap
        card.onclick = () => {
            document.getElementById('modalEmoji').innerText = emojis[i-1] || '🎁';
            document.getElementById('modalTitle').innerText = `Oferta Relámpago Día ${i}`;
            document.getElementById('modalPrice').innerText = `€${price}`;
            document.getElementById('modalCoupon').innerText = `XMAS-DAY-${i}`;
            
            // Usamos la API de Bootstrap para abrir el modal
           const myModal = new Bootstrap.Modal(document.getElementById('productModal'));
            myModal.show();
        };

        container.appendChild(card);
    }
});