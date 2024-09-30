import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

function Tanstack() {
  const query = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axios.get<User[]>(
        'https://jsonplaceholder.typicode.com/users'
      );

      return res.data;
    },
  });

  return (
    <>
      {query.isLoading && <p>Loading...</p>}
      {query.isError && <p>Error: {query.error.message}</p>}
      {query.isSuccess && (
        <ul>
          {query.data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Tanstack;
