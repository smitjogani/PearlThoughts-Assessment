'use client'
import DatePicker from './DatePicker';
import RecurrenceOptions from './RecurrenceOptions';
import RecurrencePreview from './RecurrencePreview';
import { useRecurrenceStore } from '../store/recurrenceStore';

const RecurrencePicker = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurrenceStore();

  return (
    <div className="p-4 bg-white shadow rounded-lg space-y-4">
      <h2 className="text-2xl font-bold">Select Recurring Dates</h2>

      {/* Date Picker for Start and End Dates */}
      <DatePicker label="Start Date" selectedDate={startDate} onChange={setStartDate} />
      <DatePicker label="End Date (optional)" selectedDate={endDate} onChange={setEndDate} />

      {/* Recurrence Options */}
      <RecurrenceOptions />

      {/* Recurrence Preview */}
      <RecurrencePreview />
    </div>
  );
};

export default RecurrencePicker;