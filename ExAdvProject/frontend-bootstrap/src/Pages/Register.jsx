import { Button, Form, FormGroup, FormLabel, Modal } from "react-bootstrap"
import { useState } from "react";



export default function Register() {

    const id = 0;
    const [age, setAge] = useState(20);
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [weight, setWeight] = useState('');
    const [hight, sethight] = useState('');
    const [preferedExSet, setpreferedExSet] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [ApiResponse, setApiResponse] = useState();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    // functioneaza -- este apelata BD pentru inregistrare si trebuie redirectionare cu raspunsul: "inregistrare cu success sau nu"
    const onSubmit = () => {
        const person = { id, email, firstName, lastName, age, weight, hight, preferedExSet, password };
        console.log(person);
        fetch("http://localhost:8080/login/add", {
            method: "POST",
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(person)
        })
            .then((response) => { setApiResponse(response.status) })
        switch (ApiResponse) {
            case 200:
                window.location.href = "http://localhost:5173/success"
                break;
            case 208:
                setShow(true)
                break;
        }
        //console.log("APIRESPONSE: ", ApiResponse)
    };



    const handleSliderChange = (e) => {
        setAge(e.target.value);
    };

    return (
        <>
            <h1 className='px-4 my-5' style={{ textAlign: 'center' }}>Configure your profile for registration!</h1>
            <Form className='px-4 my-5' style={{ margin: '500px', textAlign: 'center' }}>
                <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <Form.Control
                        type="email"
                        aria-label="Email"
                        placeholder="Please enter your email address"
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <FormLabel>First Name</FormLabel>
                    <Form.Control
                        aria-label="First name"
                        placeholder="Please enter your first name"
                        onChange={e => setfirstName(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <FormLabel>Last name</FormLabel>
                    <Form.Control
                        aria-label="Last name"
                        placeholder="Please enter your last name"
                        onChange={e => setlastName(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <FormLabel>Weight</FormLabel>
                    <Form.Control
                        aria-label="Weight"
                        placeholder="Please enter your weight"
                        onChange={e => setWeight(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <FormLabel>hight</FormLabel>
                    <Form.Control
                        aria-label="hight"
                        placeholder="Please enter your hight"
                        onChange={e => sethight(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Form.Label>Please enter your age:</Form.Label>
                    <Form.Range
                        value={age}
                        name='age'
                        onChange={handleSliderChange}
                        className="custom-slider" />
                    <p>Selected age: {age}</p>
                </FormGroup>
                <Form.Select
                    aria-label="Prefered Exercise Program"
                    onChange={e => setpreferedExSet(e.target.value)}
                >
                    <option>Select Prefered Exercice Program</option>
                    <option value="LOSS">Weight Loss</option>
                    <option value="MASS">Mass Grown</option>
                    <option value="DEFINE">Muscle Definition</option>
                </Form.Select>
                <Form.Text id="passwordHelpBlock" muted>
                    Please take a look at the <b>"Programs"</b> section before selecting an option!
                </Form.Text>

                <Form.Group className="mb-3" controlId="formBasicPassword" style={{ marginTop: '20px' }}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        aria-describedby="passwordHelpBlock"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        Your password must be 8-20 characters long, contain letters and numbers,
                        and <b>MUST NOT CONTAIN</b> spaces, special characters, or emoji.
                    </Form.Text>
                </Form.Group>

                <Button onClick={onSubmit} className='px-4 my-5' variant="outline-primary" >Submit</Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>The email adress is already registered!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Please use another email address or login to your account with this one!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>

            </Form>
        </>
    )
}