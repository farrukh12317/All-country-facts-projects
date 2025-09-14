
import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1"
});

// All countries
const countrydata = () => {
  return api.get("/all?fields=name,population,region,capital,flags,cca3");
};

// Single country (by name or code)
export const countryInddata = (id) => {
  if (id.length === 3) {
    // Treat as cca3 code
    return api.get(`/alpha/${encodeURIComponent(id)}?fields=name,population,region,capital,flags,languages,cca3`);
  }
  // Otherwise treat as country name
  return api.get(`/name/${encodeURIComponent(id)}?fullText=true&fields=name,population,region,capital,flags,languages,cca3`);
};

export default countrydata;
