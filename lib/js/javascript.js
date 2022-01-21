(function(win,doc){
    'use strict';

    let calendarEl = doc.querySelector('.calendar');
    let calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
    headerToolbar:{
        start: 'prev,next,today',
        center: 'title',
        end: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    buttonText:{
        today:    'hoje',
        month:    'mês',
        week:     'semana',
        day:      'dia'
    },
    locale:'pt-br',
    dateClick: function(info) {
        alert('Clicked on: ' + info.dateStr);
        // change the day's background color just for fun
        info.dayEl.style.backgroundColor = 'green';
    },
    events: [
        {
            title: 'Evento 1',
            start: '2022-01-01',
            end: '2022-01-02'
        },
        {
            title: 'Evento 2',
            start: '2022-01-04',
            end: '2022-01-07'
        }
    ]
    });
    calendar.render();
})(window,document);