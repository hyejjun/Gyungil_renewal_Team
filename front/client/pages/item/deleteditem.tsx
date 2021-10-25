import React, { useState } from "react";
import DeletedItemComponent from '../../components/item/DeletedItemComponent';

const DeletedItem = () =>{
    const [text, setText] = useState<string>("자바스크립트");
    return(
        <DeletedItemComponent/>
    )
}

export default DeletedItem
