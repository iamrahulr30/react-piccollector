import React from 'react'

const pagination = ({ postsPerPage, totalPosts, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i < totalPosts ; i++) {
        pageNumbers.push(i);
    }

    function pp(number = 0) { 
        console.log("hiya number : " ,number)
        paginate(number)
    }

    return (
        <div className='pm'>
            <div className='pagination'>
                {pageNumbers.map(number => (
                <div key={number} className='page-item'>
                    <button onClick={() => pp(number) } href='!#' className='page-link'>
                    {number}
                    </button>
                </div>
                ))}
            </div>
        </div>
    )
}

export default pagination
