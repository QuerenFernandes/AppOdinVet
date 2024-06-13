document.addEventListener('DOMContentLoaded', function () {
    const calendarDates = document.getElementById('calendar-dates');
    const monthYear = document.getElementById('monthYear');
    const prevMonth = document.getElementById('prevMonth');
    const nextMonth = document.getElementById('nextMonth');
    
    let currentDate = new Date();
    
    function renderCalendar(date) {
        calendarDates.innerHTML = '';
        monthYear.textContent = date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });

        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            calendarDates.appendChild(emptyCell);
        }

        for (let i = 1; i <= lastDate; i++) {
            const dateCell = document.createElement('div');
            dateCell.textContent = i;
            dateCell.addEventListener('click', function () {
                alert(`Você selecionou ${i} de ${monthYear.textContent}`);
            });
            calendarDates.appendChild(dateCell);
        }
    }

    prevMonth.addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextMonth.addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});
