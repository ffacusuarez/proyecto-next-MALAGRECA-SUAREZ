"use client"

import { useEffect, useState, version } from "react"; // ES ALGOP QUE LO TENES QUE ISNTAALR SOLO, PARAMETRO DEL REACT
import Button from "../componentes/Button";
import Title from "../componentes/Title";
import Input from "../componentes/Input";
import { useRouter } from "next/navigation"; // esto es para cambiar de pagina el router





export default function Contador() { //export crear una funciopn
    
    const [cuenta, setCuenta] = useState(0) //creas la cuenta y la seteas en 0 son usesstate
    const [checkbox, setCheckbox] = useState(false)
    const [color, setColor] = useState("green")
    const router = useRouter() // llamas a userupouter
    const [nombre, setNombre] = useState("")

    useEffect(() => { // useEfectt, codigo que se ejecuta cada vez que hay un cambi en la pagibna
        if (cuenta == 20) {
            setCuenta(0)
        } else if (cuenta == -20){
            setCuenta(0)
        }

    }, [cuenta]) // para que dependa de esa variable

    useEffect(() => { 
        if (cuenta == 10) {
            router.push("../login") //lo mandas a la otra pagina
        } 
    })

    function Sumar() {
        setCuenta(cuenta + 1)
    }

    function Resta() {
        setCuenta(cuenta - 1)
    }

    function Verificacion() { //
        console.log(checkbox) 
        if (checkbox == false) {
            Resta()
        } else {
            Sumar()
        }
    }

    function llamarCheckBox(event) {  //event es el objeto toal que sufrio una modificacion
        console.log(event)
        setCheckbox(event.target.checked)
        console.log(checkbox)
        if (event.target.checked == false) {
            setColor("blue")
        } else {
            setColor("green")
        }
    }

    function ver(event) {
        setNombre(event.target.value)
    }
    return(
        <div className="contenedor">
            <Title titulo="Hola soy el titulin" className="title"></Title>
            <hr></hr>
            <h2 className="subtitulo">Contador: {cuenta}</h2>

            {cuenta == 0 && <h3>La cuenta es 0</h3>} 
            {cuenta >= 0 ? <h3>La cuenta es Positivo</h3> : <h3>La cuenta es negativa</h3>} 

            <br></br><br></br>
            <Button onClick={Verificacion} text="Hola soy el boton" color={color}></Button>
            <br></br>
            <Input type="checkbox" onChange={llamarCheckBox} className="input-checkbox"></Input>
            <br></br><hr></hr>
            <Input onChange={ver}></Input>
            <br></br>
            {nombre == "" ? <h4>Nombre: null</h4> : <h4>Nombre: {nombre}</h4>}
            

        </div>
    )
}