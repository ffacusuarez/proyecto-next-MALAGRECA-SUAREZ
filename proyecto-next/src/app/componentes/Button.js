export default function Button(props) {

    function Login() {
        console.log("10")
    }

    return(
        <>
            <button onClick={Login()}></button>
        </>
    )
}