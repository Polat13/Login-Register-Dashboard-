import { useState } from 'react'
import { Button } from 'primereact/button';
import InputField from '../components/inputField.jsx';
import PasswordField from '../components/passwordField.jsx';
import CalendarField from '../components/calendarField.jsx';
import GenderSelect from '../components/genderField.jsx';
import { Link , useNavigate} from 'react-router-dom';

function RegisterForm() {
  const [form, setForm] = useState({
    username: '' , password: '' , email: '' , birth_date: null , gender: '' , remember: false
  });

    const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    navigate('/login'); 
  };

  return (
    <div className="min-h-screen  bg-black flex justify-center items-center">
      <div className="p-10 rounded-2xl bg-white/10 border border-white/40 ">
        <h2 className="text-white text-2xl font-semibold text-center pb-6">Kayıt Olun</h2>

        <form className="space-y-6 w-90 flex flex-col gap-2 h-115" onSubmit={handleRegister} >
            <InputField id="username" label="Kullanıcı Adı" value={form.username} onChange={(val) => handleChange('username', val)} />
            <PasswordField id="password" label="Şifre" value={form.password} onChange={(val) => handleChange('password', val)} />
            <InputField id="email" label="Email" type='email' value={form.email} onChange={(val) => handleChange('email', val)} />
            <CalendarField id="birth_date" label="Doğum Tarihi" value={form.birth_date} onChange={(val) => handleChange('birth_date', val)} />
            <GenderSelect value={form.gender} onChange={(val) => handleChange('gender', val)} labelone="Erkek" labeltwo="Kadın" />
            <Button label="Kaydol" className="w-full " severity="success" type="submit"/>
             <p className="text-white text-sm text-center"> 
              Hesabınız var mı?{' '}<Link to="/login" className='text-gray hover:underline'>
          Giriş Yap
        </Link></p>
        </form>
      </div>
      </div>
  );
}

export default RegisterForm;