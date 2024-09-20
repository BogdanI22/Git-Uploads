import { Alert, Container } from "react-bootstrap"

export default function FailAutentification() {

    return (
        <div>
            <Container style={{marginTop:'10%', textAlign:"center", fontSize:"30px"}}>
                <Alert variant="danger"> Autentification Failed!!!! </Alert>
                <p>The email does not match any account!</p>
                <p>Please <a href="/register">register</a> to continue.</p>
                <p>If you are already registered, try to <a href="/login">login</a> again.</p>
            </Container>
        </div>
    )
}