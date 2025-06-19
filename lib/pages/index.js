import { useEffect, useState } from 'react';
import supabase from '../lib/supabase';

export default function Home() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    supabase
      .from('services')
      .select('*')
      .then(({ data }) => setServices(data || []));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">All Services</h1>
      <ul>
        {services.map(s => (
          <li key={s.id} className="my-2">
            <strong>{s.title}</strong>: {s.description}
          </li>
        ))}
      </ul>
    </div>
  );
        }
