function Search({value, onChange}) {

  return (
    <div className="search">
      <input 
      type='text'
      className='search-input'
      placeholder="Поиск задач..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
export default Search