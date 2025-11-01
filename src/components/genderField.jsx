import { RadioButton } from 'primereact/radiobutton';

 function GenderSelect({ value, onChange ,labelone, labeltwo}) {
  return (
    <div className="flex items-center gap-2">
      <label className="text-white">Cinsiyet:</label>
      <RadioButton inputId="male" name="gender" value="Male" onChange={(e) => onChange(e.value)} checked={value === 'Male'}  required/>
      <label htmlFor="male" className="text-white">{labelone}</label>
      <RadioButton inputId="female" name="gender" value="Female" onChange={(e) => onChange(e.value)} checked={value === 'Female'}  required/>
      <label htmlFor="female" className="text-white">{labeltwo}</label>
    </div>
  );
}
export default GenderSelect;