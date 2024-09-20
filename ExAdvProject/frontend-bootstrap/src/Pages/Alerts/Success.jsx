import { Alert, Container} from "react-bootstrap"
import React, { useState } from "react";

export default function Success() {

    

    return (

        <div>
            <Container style={{ marginTop: '20%', textAlign: "center", fontSize: "30px" }}>
                <Alert variant="success"> SUCCESS!!!! </Alert>
                <a href="/home"> Click here to go Home Page! </a>
            </Container>

           

        </div>


    )
}