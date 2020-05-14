class Calendar {

    constructor(calendarTable) {
        this.calendarTable = calendarTable;
        this.date = new Date();
    }

    clear() {

        for(let row=1; row < this.calendarTable.rows.length; row++) {

            for(let cell=0; cell < this.calendarTable.rows[row].cells.length; cell++) {

                this.calendarTable.rows[row].cells[cell].innerText = '';

            }

        }

    }

    render() {

        const year = this.date.getFullYear();

        const month = this.date.getMonth();

        const firstDayOnTheWeek = new Date(year,month,1).getDay();

        const daysInMonth = 32-new Date(year,month,32).getDate();

        const today = new Date();

        for(let counter=0; counter<daysInMonth; counter++) {

            const day = counter + firstDayOnTheWeek;

            const row = 1 + Math.floor(day/7);

            const cell = day % 7;
            
            this.calendarTable.rows[row].cells[cell].innerText = counter+1;

        }

    }

}

const calendarTable = document.querySelector('#calendar');
const calendarHeaderTitle = document.querySelector('#calendar-header h1');
const nextMonthButton = document.querySelector('#nextMonthButton');
const previosMonthButton = document.querySelector('#previosMonthButton');

const calendar = new Calendar(calendarTable);

calendarHeaderTitle.innerText = calendar.date.toLocaleString('pt-BR', { month:'long', year:'numeric' });
calendar.render();

function nextMonth() {
    const currentMonth = calendar.date.getMonth();
    calendar.date.setMonth(currentMonth+1);
    calendar.clear();
    calendar.render();
    calendarHeaderTitle.innerText = calendar.date.toLocaleString('pt-BR', { month:'long', year:'numeric' });
}

function previosMonth() {
    const currentMonth = calendar.date.getMonth();
    calendar.date.setMonth(currentMonth-1);
    calendar.clear();
    calendar.render();
    calendarHeaderTitle.innerText = calendar.date.toLocaleString('pt-BR', { month:'long', year:'numeric' });
}

previosMonthButton.addEventListener('click',(e)=> {
    e.preventDefault();
    previosMonth();
});

nextMonthButton.addEventListener('click',(e)=> {
    e.preventDefault();
    nextMonth();
});