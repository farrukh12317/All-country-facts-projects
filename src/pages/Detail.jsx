import React, { useState, useTransition, useEffect } from "react";
import { useParams } from "react-router-dom";
import { countryInddata } from "../components/api/ApiCountry";

const Detail = () => {
  const { id } = useParams(); 
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchCountry = async () => {
      try {
        const res = await countryInddata(id);
        if (cancelled) return;

        startTransition(() => {
          const data = res?.data;
          const countryObj = Array.isArray(data) ? data[0] : data; // ✅ safe
          console.log("Fetched country:", countryObj);
          setCountry(countryObj || null);
        });
      } catch (e) {
        if (!cancelled) setError(e?.message || "Failed to load country");
      }
    };

    fetchCountry();
    return () => { cancelled = true; };
  }, [id, startTransition]);

  if (error) return <h1 style={{ color: "crimson" }}>{error}</h1>;
  if (isPending || !country) return <h1>Loading...</h1>;

  return (
    <div className="detail-page">
      <h1>{country.name?.common}</h1>
      <img src={country.flags?.png} alt={country.flags?.alt || country.name?.common} />
      <p><strong>Official Name:</strong> {country.name?.official}</p>
      <p><strong>Capital:</strong> {Array.isArray(country.capital) ? country.capital.join(", ") : country.capital || "N/A"}</p>
      <p><strong>Population:</strong> {country.population?.toLocaleString()}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(", ") : "N/A"}</p>
    </div>
  );
};

export default Detail;
