import React from 'react'

const PortfolioItemPage = (props) => {
    return(
        <div>
            <h1>this page is for the item with the id of {props.match.params.id}</h1>
        </div>
    )
}

export default PortfolioItemPage;