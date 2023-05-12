import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Swapi = () => {
  const [listIsRequested, setListIsRequested] = React.useState(false);
  const {
    data: people,
    isError,
    isLoading,
  } = useQuery(['getSwapiPeople'], () => getPeople(), {
    enabled: listIsRequested,
  });

  if (!listIsRequested) {
    return <button onClick={() => setListIsRequested(true)}>get it!</button>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>error occured</div>;
  }

  return (
    <div>
      {people.map((person) => (
        <div>{person.name}</div>
      ))}
    </div>
  );
};

export default Swapi;

async function getPeople() {
  const response = await fetch('https://swapi.dev/api/people?page=2');
  const data = await response.json();
  return data.results;
}
