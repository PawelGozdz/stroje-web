import React from 'react';
import DayPicker from 'react-day-picker';

const WEEKDAYS_SHORT = {
  pl: ['Nd', 'Pn', 'Wt', 'Śr', 'Сz', 'Pt', 'So',],
};
const MONTHS = {
  pl: [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec',
    'Sierpień',
    'Wrzesień',
    'Październik',
    'Listopad',
    'Grudzień'
  ]
};
const WEEKDAYS_LONG = {
  pl: [
    'Niedziela',
    'Poniedziałek',
    'Wtorek',
    'Środa',
    'Czwartek',
    'Piątek',
    'Sobota',
  ]
};
const FIRST_DAY_OF_WEEK = {
  pl: 1
};
const LABELS = {
  pl: { nextMonth: 'Następny miesiąc', previousMonth: 'Poprzedni miesiąc' },
};

export default function Calendar(props) {
  return (
    <DayPicker
      {...props}
      months={MONTHS['pl']}
      weekdaysLong={WEEKDAYS_LONG['pl']}
      weekdaysShort={WEEKDAYS_SHORT['pl']}
      firstDayOfWeek={FIRST_DAY_OF_WEEK['pl']}
      labels={LABELS['pl']}
    />
  );
}