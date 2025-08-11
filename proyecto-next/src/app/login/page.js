"use client"

import Button from "../componentes/Button";
import Input from "../componentes/Input";
import Title from "../componentes/Title";

export default function Login() {

        function InicioSesion() {
            console.log("10")
    }

    return(
        <>
            <Title titulo="hola"></Title>

            <h3>Inicio de Sesion:  </h3>

            <Input id="username" type="text" placeholder="Ingrese su nombre de usuario"></Input>
            <Input id="password" type="password" placeholder="Ingrese su contraseña"></Input>
            <Button text="HOLA SOY EL BOTON" call={InicioSesion}></Button>


        </>
    )
}

