import { Calendar } from 'primereact/calendar';
import { FloatLabel } from 'primereact/floatlabel';

function CalendarField({ id, label, value, onChange }) {
  return (
    <FloatLabel>
      <Calendar
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
      <label htmlFor={id}>{label}</label>
    </FloatLabel>
  );
}

export default CalendarField;