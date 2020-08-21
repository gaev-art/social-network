import React, {useState} from 'react';
import styles from './Paginator.module.css';

function Paginator(props) {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let leftPortionPageNumber = (props.portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = props.portionNumber * props.portionSize;

    const incrementPage = () => {
        props.nextPortion(props.portionNumber + 1)
    }
    const decrementPage = () => {
        props.prevPortion(props.portionNumber - 1)
    }

    const setFirstPage = () => {
        props.firstPortion(1)
    }

    return (
        <div>
            {props.portionNumber > 1 &&
            <>
                <button onClick={setFirstPage}> first
                </button>
                <button onClick={decrementPage}>Prev
                </button>
            </>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <button
                        className={props.currentPage === p && styles.selectedPage}
                        key={p}
                        onClick={(e) => {
                            props.onPageChanged(p);
                        }}>{p}</button>
                })}
            {portionCount > props.portionNumber &&
            <button onClick={incrementPage}>Next</button>}
        </div>
    )
}


export default Paginator;

