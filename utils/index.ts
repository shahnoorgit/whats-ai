export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "eb56e54751mshccc12097505ff46p11dd21jsnff82cf9f122b",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}
