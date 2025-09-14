import React, { useEffect, useState, useTransition } from "react";
import countrydata from "../components/api/ApiCountry";
import { NavLink } from "react-router-dom";
import { Search } from "../components/ui/Search";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");   // ✅ start as empty string
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    let cancelled = false;

    const fetchCountries = async () => {
      try {
        const res = await countrydata();
        if (cancelled) return;
        startTransition(() => {
          setCountries(res?.data || []);
        });
      } catch (e) {
        if (!cancelled) setError(e?.message || "Failed to load countries");
      }
    };

    fetchCountries();
    return () => { cancelled = true; };
  }, [startTransition]);

  // ✅ Search + filter logic
  const filteredCountries = countries.filter((country) => {
    const countryName = country?.name?.common?.toLowerCase() || "";
    const searchValue = search.toLowerCase();
    const filterValue = filter.toLowerCase();

    const matchesSearch = countryName.includes(searchValue);
    const matchesFilter =
      filterValue === "all" || country.region?.toLowerCase() === filterValue;

    return matchesSearch && matchesFilter;
  });

  if (error) return <h1 style={{ color: "crimson" }}>{error}</h1>;
  if (isPending && countries.length === 0) return <h1>Loading...</h1>;

  return (
    <div className="container">
      <header>
        <h1>World Countries</h1>
        <p className="subtitle">
          Discover interesting facts about countries around the world
        </p>
      </header>

      {/* ✅ Pass consistent camelCase props */}
      <Search
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <div className="cards-container">
        {filteredCountries.map((item, index) => (
          <div className="country-card" key={item.cca3 || item.ccn3 || index}>
            <div className="flag-section">
              <img
                src={item.flags?.png}
                alt={item.flags?.alt || `${item.name?.common} Flag`}
              />
            </div>

            <div className="card-content">
              <h2 className="country-name">
                <i className="fas fa-globe-americas" /> {item.name?.common}
              </h2>

              <div className="info-item">
                <i className="fas fa-id-card" />
                <span className="info-text">
                  <strong>Official:</strong> {item.name?.official}
                </span>
              </div>

              <div className="info-item">
                <i className="fas fa-users" />
                <span className="info-text">
                  <strong>Population:</strong>{" "}
                  {item.population?.toLocaleString()}
                </span>
              </div>

              <div className="info-item">
                <i className="fas fa-landmark" />
                <span className="info-text">
                  <strong>Capital:</strong>{" "}
                  {Array.isArray(item.capital)
                    ? item.capital.join(", ")
                    : item.capital || "N/A"}
                </span>
              </div>

              <div className="info-item">
                <i className="fas fa-globe" />
                <span className="info-text">
                  <strong>Region:</strong> {item.region}
                </span>
              </div>

              <div className="info-item">
                <i className="fas fa-language" />
                <span className="info-text">
                  <strong>Languages:</strong>
                </span>
              </div>
              <div className="languages">
                {item.languages
                  ? Object.values(item.languages).map((lang, i) => (
                      <span className="language-tag" key={i}>
                        {lang}
                      </span>
                    ))
                  : item.name?.nativeName
                  ? Object.values(item.name.nativeName).map((n, i) => (
                      <span className="language-tag" key={i}>
                        {n.common}
                      </span>
                    ))
                  : <span className="language-tag">N/A</span>}
              </div>
            </div>
            <NavLink to={`/detail/${item.cca3}`}>
              <button>see more</button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};
