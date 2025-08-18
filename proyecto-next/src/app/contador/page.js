"use client"

import { useEffect, useState } from "react";
import Button from "../componentes/Button";
import Title from "../componentes/Title";
import Input from "../componentes/Input";





export default function Contador() {
    
    const [cuenta, setCuenta] = useState(0)
    const [checkbox, setCheckbox] = useState(false)
    const [color, setColor] = useState("green")
    
    useEffect(() => {
        if (cuenta == 20) {
            setCuenta(0)
        } else if (cuenta == -20){
            setCuenta(0)
        }
    }, [cuenta])

    function Sumar() {
        setCuenta(cuenta + 1)
    }

    function Resta() {
        setCuenta(cuenta - 1)
    }

    function Verificacion() {
        console.log(checkbox)
        if (checkbox == false) {
            Resta()
        } else {
            Sumar()
        }
    }

    function llamarCheckBox(event) {
        console.log(event)
        setCheckbox(event.target.checked)
        console.log(checkbox)
        if (event.target.checked == false) {
            setColor("blue")
        } else {
            setColor("green")
        }
    }

    return(
        <div className="contenedor">
            <Title titulo="Hola soy el titulin" className="title"></Title>

            <h2 className="subtitulo">Contador: {cuenta}</h2>
            <Button onClick={Verificacion} text="Hola soy el boton" className={color}></Button>
            <Input type="checkbox" onChange={llamarCheckBox} className="input-checkbox"></Input>
        </div>
    )
}