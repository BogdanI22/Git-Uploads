import { useEffect, useState } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap'

export default function LogIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [personLogged, setPersonLogged] = useState('');
    const [statusResponse, setStatusResponse] = useState('');
    const [logged, setLogged] = useState(false);
    const [adminlogged, setAdminlogged] = useState(0);



    useEffect(() => {
        async function fetchLogged() {
            const res = await fetch("http://localhost:8080/login/profile");
            const data = await res.json();
            if (data.id == null || data.id ==0) {
                setLogged(false);
            }else{
                setLogged(true);
            }
        }
        fetchLogged();
    }, [])


    //stocarea persoanei logata daca este inregistrata merge si stocheaza datele persoanei. 
    const onSubmit = () => {
        const personLogInLink = "http://localhost:8080/login/email?email=" + email + "&password=" + password;
        //functioneaza o sigura problema = primeste datele de la baza de date dupa al doilea click

        async function fetchLogin() {
            const res = await fetch(personLogInLink);
            setStatusResponse(res.status)
            const data = await res.json();
            setPersonLogged(data);
        }

        //necesita implementare cand inchide aplicatia de admin.
        async function fetchAdminApp(){
            const res = await fetch("http://localhost:8080/login/adminlogging")
            if(res.status == 200){
                setAdminlogged(1);
            }
        }

        
        if(email == "admin" && password == "admin22"){
            //fetchAdminApp();
            window.location.href = "http://localhost:5173/admin-main-window"
        }else{
            fetchLogin();
        }
        

        //ar trebui diferentiate situatiile de fail -- TODO later
        switch (statusResponse) {
            case 200:
                window.location.href = "http://localhost:5173/success"
                break;
            case 400:
                window.location.href = "http://localhost:5173/fail"
                break;
            case 409:
                window.location.href = "http://localhost:5173/fail"
                break;

        }

        console.log(personLogged)
        console.log(email)
        console.log(password)
        console.log(statusResponse)
    };


    const loggedfct = () => {
        if (logged) {
            return (<div>
                <Alert variant='danger'>You are already Logged!</Alert>
                <p style={{fontSize:'12px'}}>Go to <a href='http://localhost:5173/profile'>Profile</a> to LogOut and return to this page!</p>
            </div>
            )
        } else {
            return (
                <Button onClick={onSubmit} variant="outline-primary">
                    Login
                </Button>)
        }
    }


    return (
        <Form className='px-4 my-5' style={{ margin: '500px', textAlign: 'center' }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={e => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    aria-describedby="passwordHelpBlock"
                    onChange={e => setPassword(e.target.value)}
                />
                <Form.Text id="passwordHelpBlock" muted>
                    Your password must be 8-20 characters long, contain letters and numbers,
                    and must not contain spaces, special characters, or emoji.
                </Form.Text>
            </Form.Group>
            {/*aici trebuie implemetat checkbox ul de rememener me */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" style={{ textAlign: 'start' }} />
            </Form.Group>

            <Container>{loggedfct()}</Container>

        </Form>

    )
}