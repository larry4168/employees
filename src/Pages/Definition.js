import {useState, useEffect} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import NotFound from "../Components/NotFound"
import DefinitionSearch from "../Components/DefinitionSearch"

function Definition () {
    const key = uuidv4()
    const [word, setWord] = useState();
    const [notFound, setNotFound] = useState(false);
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    let {search} = useParams();

    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search )
            .then((response) => {
                if (response.status === 404 ) {
                    setNotFound(true)
                }
                else if (!response.ok === 501 ) {
                    setError(true)
                }

                return response.json();
            })
            .then((data) => setWord(data[0].meanings))
            .catch((error) => {
                throw new Error('Something went wrong')
            })
    }, []);

    if (notFound === true) {
        return (
            <>
                <NotFound />
                <Link to='/dictionary'>Search for anther word</Link>
            </>
        )
    }


    return (
        <>
            
            {word ? (
                <>
                    <h1>Here is a definition:</h1>
                    {word.map((meaning) => {
                        return (
                            <>
                                <p key = {key} >
                                    {meaning.partOfSpeech + ': '}
                                    {meaning.definitions[0].definition}

                                </p>

                            </>

                        )
                        
                    })}
                    <DefinitionSearch />
                </>
            ) : null}
            
        </>
    )
}

export default Definition