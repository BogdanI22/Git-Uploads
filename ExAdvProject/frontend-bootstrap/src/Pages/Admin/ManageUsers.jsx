import { useEffect, useState } from "react";
import { Button, Container, Table, Form, Modal } from "react-bootstrap";

export default function ManageUsers() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [usersDataAPI, setUsersDataAPI] = useState([]);
    const [userToUpdate, setUserToUpdate] = useState([]);
    const [updatedEmail, setUpdatedEmail] = useState('');
    const [updatedProgram, setUpdatedProgram] = useState('');

    function goBack() {
        window.location.href = 'http://localhost:5173/admin-main-window';
    }

    function addUser() {
        window.location.href = 'http://localhost:5173/register'
    }

    //merge
    function deleteUser(userID) {
        let deleteURL = 'http://localhost:8080/login/delete/' + userID
        fetch(deleteURL, { method: 'DELETE' })
        window.location.href = 'http://localhost:5173/manage-users'
    }

    function popUpdate(index, userId) {
        handleShow()
        setUserToUpdate(usersDataAPI[index])
    }

    function saveChanges() {
        userToUpdate.email = updatedEmail
        userToUpdate.preferedExSet = updatedProgram
        console.log(userToUpdate)
       
        const requestOptions = {
            method:'PUT',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(userToUpdate)
        }
        fetch('http://localhost:8080/login/update', requestOptions)

        handleClose();
    }




    useEffect(() => {
        async function fetchUsers() {
            const res = await fetch('http://localhost:8080/login/admin/users')
            const data = await res.json();
            setUsersDataAPI(data);
        }
        fetchUsers();
    }, [])


    return (<>
        <div style={{ textAlign: 'right' }}>
            <Button variant="outline-danger" onClick={goBack} style={{ width: '90px', fontSize: '10px' }}>
                Back to main window!
            </Button>
        </div>
        <Container style={{ textAlign: 'center' }}>
            <h1 >
                These are all the users:
            </h1>
            <p>For adding <b>MANUALLY</b> a user press &nbsp;
                <Button variant="success" onClick={addUser}>add user</Button>
            </p>
            <p style={{ fontSize: '10px' }}><b>other options are at the end of every tabel line.</b></p>
        </Container>

        <Container style={{ marginTop: '30px', marginLeft:'10%'}}>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Prefered Ex Set</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {usersDataAPI.map((item, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.preferedExSet}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <Container>
                                <Button onClick={() => deleteUser(item.id)} variant="danger" style={{ marginRight: '10px' }}>delete</Button>
                                <Button variant="primary" onClick={() => popUpdate(index, item.id)}>update</Button>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Update user:<b>{userToUpdate.firstName}&nbsp;{userToUpdate.lastName}</b></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Email address:</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder={userToUpdate.email}
                                                    autoFocus
                                                    onChange={e => setUpdatedEmail(e.target.value)}
                                                />
                                            </Form.Group>
                                            <Form.Select
                                                aria-label="Prefered Exercise Program"
                                                onChange={e => setUpdatedProgram(e.target.value)}
                                            >
                                                <option>Current:&nbsp;{userToUpdate.preferedExSet}</option>
                                                <option value="LOSS">Weight Loss</option>
                                                <option value="MASS">Mass Grown</option>
                                                <option value="DEFINE">Muscle Definition</option>
                                            </Form.Select>
                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={saveChanges}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </Container>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    </>
    )
}