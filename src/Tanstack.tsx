import { useQuery } from '@tanstack/react-query';

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
      const res = await fetch('https://jsonplaceholder.typicode.com/users');

      const data = (await res.json()) as User[];

      return data;
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
