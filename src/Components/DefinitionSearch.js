import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

function DefinitionSearch() {
    const [word, setWord] = useState()
    const navigate = useNavigate()

    return (
        <form 
        className="flex space-between space-x-2 max-w-[300px]"
        onSubmit={() => {
            navigate('/dictionary/' + word);
        }}>
            <input 
            placeholder="search word"
            className="shrink min-w-0 px-2 rounded py-1"
            type='text' 
            onChange={(e) => {
                setWord(e.target.value)
            }} />
            <button className="px-3 py-1 text-sm text-purple-600 font-semibold rounded border border-3 border-purple hover:text-white hover:bg-purple-600">
                search
            </button>
        </form>
    )
}

export default DefinitionSearch;