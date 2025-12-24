
document.addEventListener('DOMContentLoaded', () => {
    const summary = document.getElementById('summary');
    const container = document.getElementById('cardContainer');
    const filters = document.querySelectorAll('.filter');
    let total = 0;
    let sum = 0;

    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    function updateSummary() {
        summary.textContent = `总件数: ${total} | 总金额: ¥${sum}`;
    }

    updateSummary();
});
