export const fetchPokeAPI = (limit: number) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const fetchPokeAPIItem = (url: string) => {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
