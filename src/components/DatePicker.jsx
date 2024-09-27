'use client'
import React from 'react';
import ReactDatePicker from 'react-datepicker';

const DatePicker = ({ label, selectedDate, onChange }) => (
    <div>
        <label className="block text-sm font-medium">{label}</label>
        <ReactDatePicker
            selected={selectedDate}
            onChange={(date) => onChange(date)}
            className="mt-2 p-2 border border-gray-300 rounded-md"
        />
    </div>
);

export default DatePicker;