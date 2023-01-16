interface IForm {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  handleQuery: (e: React.FormEvent<HTMLFormElement>) => void;
}
const Form: React.FC<IForm> = ({query, setQuery, handleQuery}) =>{
  return (
    <form onSubmit={handleQuery}>
      <input
        id="query-input"
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />
      <button>Search</button>
    </form>
  )
}

export default Form;