import { useId } from "react";

interface searcInterface {
    searchTerm: string,
    setSearchTerm: (term: string) => void
}

const Search = ({searchTerm, setSearchTerm}: searcInterface) => { 
   
    const id = useId();

    return (
        <div className="search-container">
            <label htmlFor={id+"search"} id={id+"label"}>
                Filter animals: 
            </label>
            <input type="text" placeholder="Type here" 
            id={id+"search"} 
            className="input w-full max-w-xs" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    )
}

export default Search;