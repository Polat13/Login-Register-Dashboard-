import { Checkbox } from 'primereact/checkbox';

function RememberMe({ checked, onChange , label}) {
  return (
    <div className="flex justify-between text-sm text-white/80">
    <div className="flex items-center gap-2">
      <Checkbox onChange={(e) => onChange(e.checked)} checked={checked} />
      <label>{label}</label>
      </div>
      <a href="#" className="hover:underline">Şifremi Unuttum?</a>
    </div>
  );
}

export default RememberMe;