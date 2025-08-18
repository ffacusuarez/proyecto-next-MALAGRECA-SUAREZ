"use client"

import styles from "@/app/componentes/Button.module.css"
import clsx from "clsx"

export default function Button(props) {

    return(
        <>
            <button className={
                clsx(
                    {
                    [styles.button] : true,
                    [styles.incremental] : props.color == "green",
                    [styles.decreciente] : props.color == "blue"
                    }
                )
            } onClick={props.onClick}>{props.text}</button>
        </>
    )
}