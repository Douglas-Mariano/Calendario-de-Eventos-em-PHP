(function(win,doc){
    'use strict';

    //Exibir o calendÃ¡rio
    function getCalendar(perfil, div)
    {
        let calendarEl=doc.querySelector(div);
        let calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            headerToolbar:{
                start: 'prev,next,today',
                center: 'title',
                end: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            buttonText:{
                today:    'hoje',
                month:    'mÃªs',
                week:     'semana',
                day:      'dia'
            },
            locale:'pt-br',
            dateClick: function(info) {
                if(perfil == 'manager'){
                    calendar.changeView('timeGrid', info.dateStr);
                }else{
                    if(info.view.type == 'dayGridMonth'){
                        calendar.changeView('timeGrid', info.dateStr);
                    }else{
                        win.location.href='/views/user/add.php?date='+info.dateStr;
                    }
                }
            },
            events: '/controllers/ControllerEvents.php',
            eventClick: function(info) {
                if(perfil == 'manager'){
                    win.location.href=`/views/manager/editar.php?id=${info.event.id}`;
                }
            }
        });
        calendar.render();
    }

    if(doc.querySelector('.calendarUser')){
        getCalendar('user','.calendarUser');
    }else if(doc.querySelector('.calendarManager')){
        getCalendar('manager','.calendarManager');
    }
})(window,document);