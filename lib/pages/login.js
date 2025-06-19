import { useState } from 'react';
import supabase from '../lib/supabase';

export default function Login() {
  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) alert(error.message);
    else alert("Login link sent to your email!");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl">Login / Sign up</h2>
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="border p-2 my-2"
      />
      <br />
      <button onClick={handleLogin} className="px-4 py-2 bg-blue-500 text-white">
        Send Magic Link
      </button>
    </div>
  );
}
