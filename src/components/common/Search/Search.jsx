import React from 'react';
import SearchReduxForm from './SearchReduxForm';


export const Search = (props) => {

    const onSubmit = (formData) => {
        props.searchName(formData.search)
    }

    return <SearchReduxForm onSubmit={onSubmit}/>
}


export default Search;