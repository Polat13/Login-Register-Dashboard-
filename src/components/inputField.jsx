import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';

function InputField({ id, label, type = 'text', value, onChange }) {
  return (
    <FloatLabel>
      <InputText
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full"
        required
      />
      <label htmlFor={id}>{label}</label>
    </FloatLabel>
  );
}

export default InputField;