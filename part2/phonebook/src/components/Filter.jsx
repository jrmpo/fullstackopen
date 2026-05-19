const Filter = ({newSearch, searchFunc}) => {
  return <div> filter shown with: <input value={newSearch} onChange = {searchFunc} /></div>

}

export default Filter