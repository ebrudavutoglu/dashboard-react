import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
//const localizer = momentLocalizer(moment)



function CalendarPage(){
    return(
        <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin, timeGridPlugin ]}
        events={[
          { title: 'event 1', date: '2019-12-01' },
          { title: 'event 2', date: '2019-12-02' }
        ]} />
    )
}

export default CalendarPage;