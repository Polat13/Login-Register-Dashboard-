import { useState } from 'react'
import InputField from '../components/inputField.jsx';
import PasswordField from '../components/passwordField.jsx';
import RememberMe from '../components/rememberField.jsx';
import { Button } from 'primereact/button';
import { Link , useNavigate} from 'react-router-dom';

function LoginForm() {
     const [form, setForm] = useState({
    username: '' , password: '' , remember: false
  });

    const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

    const navigate = useNavigate();
    const handleLogin = (event) => {
    event.preventDefault();
    navigate('/dashboard'); 
  };

     return (
        <div className="min-h-screen  bg-black flex justify-center items-center">
         <div className="p-10 rounded-2xl bg-white/10 border border-white/40">
        <h2 className="text-white text-2xl font-semibold text-center pb-6">Giriş Yap</h2>
        <form className="space-y-6 w-90 gap-2 flex flex-col " onSubmit={handleLogin}>
            <InputField id="username" label="Kullanıcı Adı" value={form.username} onChange={(val) => handleChange('username', val)} />
            <PasswordField id="password" label="Şifre" value={form.password} onChange={(val) => handleChange('password', val)} />
            <RememberMe checked={form.remember} onChange={(val) => handleChange('remember', val)} label="Beni Hatırla" />
            <Button label="Giriş Yap" className="w-full " severity="success" type="submit"/>
            <p className="text-white text-sm text-center"> 
              Hesabınız yok mu?{' '} <Link to="/register" className='text-gray hover:underline'>
          Kayıt Ol
        </Link></p>
        </form>
        </div>
        </div>
     );
}

export default LoginForm;