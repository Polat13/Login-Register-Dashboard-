import { Password } from 'primereact/password';
import { FloatLabel } from 'primereact/floatlabel';

function PasswordField({ id, label, value, onChange }) {
  return (
    <FloatLabel>
      <Password
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        toggleMask
        required
      />
      <label htmlFor={id}>{label}</label>
    </FloatLabel>
  );
}

export default PasswordField;