import React, {useState} from 'react';
import style from "./Paginator.module.css";


let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={style.numberPages}>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(1)}>First page</button>}
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return (
                        <span className={currentPage === p && style.selectedPage}
                              key={p}
                              onClick={(e) => {
                                  onPageChanged(p)
                              }}>{p}</span>
                    )
                })}

            {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}
            {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionCount)}>Last page</button>}
        </div>
    );
}

export default Paginator
