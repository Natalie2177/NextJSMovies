import {useState} from 'react'; 

function Search(props) {
    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            props.enterHandler(search, type);
        }
    }

    const handleFilter = (event) => {
        setType(event.target.value);
        props.enterHandler(search, event.target.value);
    }

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    type="text"
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                    onKeyUp={handleEnter}
                    placeholder="For example — matrix"
                />
                <button
                    className="btn"
                    onClick={() => props.enterHandler(search, type)}>
                    Search
                </button>
            </div>
            <p>
                <label>
                    <input
                        type="radio"
                        name="type"
                        value="all"
                        onChange={handleFilter}
                        checked={type === "all"}
                        className="with-gap"
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        type="radio"
                        name="type"
                        value="movie"
                        onChange={handleFilter}
                        checked={type === "movie"}
                        className="with-gap"
                    />
                    <span>Movies only</span>
                </label>
                <label>
                    <input
                        type="radio"
                        name="type"
                        value="series"
                        onChange={handleFilter}
                        checked={type === "series"}
                        className="with-gap"
                    />
                    <span>Series only</span>
                </label>
            </p>
        </div>
    );
}

export default Search;
