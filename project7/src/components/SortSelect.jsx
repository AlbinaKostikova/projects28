function Sort({value, onChange}) {
  return (
  <div className='sort'>
    <span className="sort-label">Сортировать:</span>
    <select className="sort-select"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    >
      <option value="date">По дате</option>
      <option value="alphabet">По алфавиту</option>
    </select>
  </div>
  )
}
export default Sort