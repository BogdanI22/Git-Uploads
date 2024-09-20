import { useEffect, useState } from "react";
import { Button, Container, Table, Form, Modal } from "react-bootstrap";

export default function ManageExercises() {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    const [exesDataAPI, setExesDataAPI] = useState([]);
    const [newExName, setNewExName] = useState('');
    const [newExClass, setNewExClass] = useState('');
    const [newExDifficulty, setNewExDifficulty] = useState(1);
    const [exToUpdate, setExToUpdate] = useState([]);
    const [updateExDifficulty, setUpdateExDifficulty] = useState('');
    const [updateExClass, setUpdateExClass] = useState('');

    function goBack() {
        window.location.href = 'http://localhost:5173/admin-main-window';
    }

    function addEx() {
        handleShow2();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "id": 0,
                "exName": newExName,
                "exClass": newExClass,
                "difficulty": newExDifficulty
            })
        }
        fetch('http://localhost:8080/exercises/add', requestOptions)
        window.location.href = 'http://localhost:5173/manage-exercises'
        handleClose2()
    }

    function deleteEx(exId) {
        const deleteExURL = 'http://localhost:8080/exercises/delete/' + exId
        fetch(deleteExURL, { method: 'DELETE' })

        window.location.href = 'http://localhost:5173/manage-exercises'
    }

    function popUpdate(index){
        handleShow();
        setExToUpdate(exesDataAPI[index]);
    }

    function saveChanges(){
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "id": exToUpdate.id,
                "exName": exToUpdate.exName,
                "exClass": updateExClass,
                "difficulty": updateExDifficulty
            })
        }
        fetch('http://localhost:8080/exercises/update', requestOptions)
        window.location.href = 'http://localhost:5173/manage-exercises'
        handleClose()
    }

    useEffect(() => {
        async function getAllExes() {
            const res = await fetch('http://localhost:8080/exercises/getall')
            const data = await res.json();
            setExesDataAPI(data);
        }
        getAllExes();
    }, [])



    return (<>
        <div style={{ textAlign: 'right' }}>
            <Button variant="outline-danger" onClick={goBack} style={{ width: '90px', fontSize: '10px' }}>
                Back to main window!
            </Button>
        </div>
        <Container style={{ textAlign: 'center' }}>
            <h1 >
                These are all the exercises:
            </h1>
            <p>For adding <b>MANUALLY</b> an exercise press &nbsp;
                <Button variant="success" onClick={handleShow2}>add exercise</Button>
            </p>
            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Exercise:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Exercise Name:</Form.Label>
                            <Form.Control
                                placeholder="Push-ups"
                                autoFocus
                                onChange={e => setNewExName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Select
                            aria-label="Exercise Class"
                            onChange={e => setNewExClass(e.target.value)}
                            style={{ marginBottom: '20px' }}
                        >
                            <option>Exercise class</option>
                            <option value="loss">Weight Loss(loss)</option>
                            <option value="mass">Mass Grown(mass)</option>
                            <option value="define">Muscle Definition(define)</option>
                        </Form.Select>
                        <Form.Select
                            aria-label="Exercise difficulty"
                            onChange={e => setNewExDifficulty(e.target.value)}
                        >
                            <option>Difficulty</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addEx}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <p style={{ fontSize: '10px' }}><b>other options are at the end of every tabel line.</b></p>
        </Container>

        <Container style={{ marginTop: '30px', marginLeft: '12%' }}>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Exercise Name</th>
                        <th style={{ textAlign: 'center' }}>Exercise Class</th>
                        <th style={{ textAlign: 'center' }}>Exercise Difficulty</th>
                    </tr>
                </thead>
                <tbody>
                    {exesDataAPI.map((item, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{item.exName}</td>
                            <td style={{ textAlign: 'center' }}>{item.exClass}</td>
                            <td style={{ textAlign: 'center' }}>{item.difficulty}</td>
                            <Container>
                                <Button onClick={() => deleteEx(item.id)} variant="danger" style={{ marginRight: '10px' }}>delete</Button>
                                <Button variant="primary" onClick={() => popUpdate(index)}>update</Button>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Update exercise:&nbsp;{exToUpdate.exName}<b>&nbsp;</b></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Select
                                                aria-label="Exercise Class"
                                                onChange={e => setUpdateExClass(e.target.value)}
                                                style={{ marginBottom: '20px' }}
                                            >
                                                <option>Exercise class</option>
                                                <option value="loss">Weight Loss(loss)</option>
                                                <option value="mass">Mass Grown(mass)</option>
                                                <option value="define">Muscle Definition(define)</option>
                                            </Form.Select>
                                            <Form.Select
                                                aria-label="Exercise difficulty"
                                                onChange={e => setUpdateExDifficulty(e.target.value)}
                                            >
                                                <option>Difficulty</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
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