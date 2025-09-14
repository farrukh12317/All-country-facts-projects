export const Search = ({ filter, setFilter, setSearch, search }) => {


  const HandleApi = (event) => {
   event.preventDefault()
    setSearch(event.target.value);
  };

   const Handlefilter = (event) => {
    event.preventDefault()
    setFilter(event.target.value);
  };
  console.log(search , filter);
  
  return (
    <>
 <input
  type="text"
  placeholder="Search"
  className="search-input"
  value={search}
  onChange={HandleApi}
/>

<select
  id="continent"
  name="continent"
  className="search-filter"
  value={filter}
  onChange={Handlefilter}
>
  <option value="africa">Africa</option>
  <option value="asia">Asia</option>
  <option value="europe">Europe</option>
  <option value="north-america">North America</option>
  <option value="south-america">South America</option>
  <option value="oceania">Oceania</option>
  <option value="antarctica">Antarctica</option>
</select>

    </>
  );
};
