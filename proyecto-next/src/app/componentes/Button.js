"use client"

export default function Button(props) {

    return(
        <>
            <button onClick={props.call}>{props.text}</button>
        </>
    )
}