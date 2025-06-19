import { useState } from 'react';
import supabase from '../lib/supabase';

export default function AddService() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    const usr = (await supabase.auth.getUser()).data.user;
    if (!usr) {
      alert("Login first!");
      return;
    }
    const { error } = await supabase
      .from('services')
      .insert([{ title, description, user_id: usr.id }]);

    if (error) alert(error.message);
    else {
      alert("Service added!");
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl">Add Service</h2>
      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="border p-2 my-2 block"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="border p-2 my-2 block"
      />
      <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white">
        Submit
      </button>
    </div>
  );
}
