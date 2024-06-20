const API_KEY = 'lTHPxbpwqnn3thI5aiCieLtOpT1MZ85pxbkRI9tN';
const BASE_URL = 'https://api.nasa.gov/neo/rest/v1/feed';

export const fetchNEOs = async (startDate) => {
  const url = `${BASE_URL}?start_date=${startDate}&api_key=${API_KEY}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.near_earth_objects[startDate]; 
  } catch (error) {
    console.error('Error fetching NEOs:', error);
    throw error;
  }
};
