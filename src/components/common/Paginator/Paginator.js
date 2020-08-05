import React, {useState} from 'react';
import styles from "./Paginator.module.css";

function Paginator(props) {

    let portionSize = 5

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div>
            <button onClick={() => { setPortionNumber(1) }}> first </button>
            { portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button> }

            {pages
                .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map((p) => {
                    return <button
                        className={props.currentPage === p && styles.selectedPage}
                                 key={p}
                                 onClick={(e) => {
                                     props.onPageChanged(p);
                                 }}>{p}</button>
                })}
            { portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button> }
        </div>
    )
}


export default Paginator;

