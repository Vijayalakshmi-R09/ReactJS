
import React from 'react'

export default function Labelname(props) 
{
    console.log("USERNAME: "+props.data);
    return (
        <div>
            <label style={{borderBlockEndStyle:"groove",textDecorationStyle:"solid",alignSelf:"stretch"}}>USERNAME: {props.data}</label>
        </div>
    );
}
