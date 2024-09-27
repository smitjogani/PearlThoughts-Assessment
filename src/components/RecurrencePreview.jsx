'use client'
import { useRecurrenceStore } from '../store/recurrenceStore';
import { addDays, addWeeks, addMonths, addYears } from 'date-fns';

const RecurrencePreview = () => {
  const { startDate, recurrenceType, recurrenceOptions } = useRecurrenceStore();

  const getRecurringDates = () => {
    if (!startDate) return [];

    const dates = [];
    let currentDate = new Date(startDate);

    for (let i = 0; i < 10; i++) {
      if (recurrenceType === 'daily') {
        currentDate = addDays(currentDate, recurrenceOptions.interval);
      } else if (recurrenceType === 'weekly') {
        currentDate = addWeeks(currentDate, recurrenceOptions.interval);
      } else if (recurrenceType === 'monthly') {
        currentDate = addMonths(currentDate, recurrenceOptions.interval);
      } else if (recurrenceType === 'yearly') {
        currentDate = addYears(currentDate, recurrenceOptions.interval);
      }
      dates.push(new Date(currentDate));
    }

    return dates;
  };

  const recurringDates = getRecurringDates();

  return (
    <div>
      <h3 className="text-lg font-semibold">Recurring Dates Preview</h3>
      <ul className="list-disc pl-5">
        {recurringDates.map((date, index) => (
          <li key={index}>{date.toDateString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecurrencePreview;