import React from 'react'

const EditExpensePage = (props) => {
    console.log(props);
    return(
        <div>
           Editting Page for {props.match.params.id}
        </div>
    )
}

export default EditExpensePage;