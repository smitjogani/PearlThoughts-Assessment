'use client'
import { useRecurrenceStore } from '../store/recurrenceStore';

const RecurrenceOptions = () => {
    const { recurrenceType, setRecurrenceType, setRecurrenceOptions, recurrenceOptions } = useRecurrenceStore();

    const handleIntervalChange = (e) => {
        setRecurrenceOptions({ ...recurrenceOptions, interval: e.target.value });
    };

    return (
        <div className="space-y-4">
            <label className="block text-sm font-medium">Recurrence Pattern</label>
            <select
                value={recurrenceType}
                onChange={(e) => setRecurrenceType(e.target.value)}
                className=" p-2 border rounded-md"
            >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
            </select>

            {/* Fine-tuning options */}
            <div>
                <label className="block text-sm font-medium">Every:</label>
                <input
                    type="number"
                    min="1"
                    value={recurrenceOptions.interval}
                    onChange={handleIntervalChange}
                    className="p-2 border rounded-md"
                />
                <span> {recurrenceType === 'daily' ? 'days' : recurrenceType === 'weekly' ? 'weeks' : recurrenceType === 'monthly' ? 'months' : 'years'}</span>
            </div>
        </div>
    );
};

export default RecurrenceOptions;