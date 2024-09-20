import { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup, Image, Button, Accordion } from "react-bootstrap"
import DefaultProfilePicture from '../assets/Pictures/defaultprofilepic.png'

export default function Profile() {

    const [jsonApiResponse, setJsonApiResponse] = useState('');
    const [programList, setProgramList] = useState([]);
    const [programSets, setProgramSets] = useState([]);
    


    //trebuie implementat ceva sa astepte sa faca fetch ul si dupa sa afiseze tot ce are nevoie. acum face invers. 
    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:8080/login/profile");
            const data = await res.json();
            setJsonApiResponse(data);
        }
        fetchData();
    }, [])

    useEffect(() => {
        async function fetchProgramData() {
            const res = await fetch("http://localhost:8080/login/profile/exercises");
            const data = await res.json();
            setProgramList(data);
        }
        fetchProgramData();
    }, [])

    useEffect(() => {
        async function fetchProgramSets() {
            const res = await fetch("http://localhost:8080/login/profile/exercises/sets");
            const data = await res.json();
            setProgramSets(data);
        }
        
        fetchProgramSets();
    }, [])

    function LogOut() {
        fetch("http://localhost:8080/login/logout")
        //console.log("LogOut!");
        window.location.reload();
    }


    return (
        <div>
            <Container style={{ width: '50%', textAlign: 'center' }}>
                <h1>Profile</h1>
                <Row style={{ marginTop: '50px' }}>
                    <Col>
                        <Image className="mt-2"
                            src={DefaultProfilePicture}
                            width="350px"
                            rounded />
                    </Col>
                    <Col>
                        {jsonApiResponse.id ? (
                            <Card style={{ marginTop: '30px', background: 'light-grey' }}>
                                <Card.Title>{jsonApiResponse.first} {jsonApiResponse.last}</Card.Title>
                                <Card.Subtitle>Profile characteristics:</Card.Subtitle>
                                <ListGroup>
                                    <ListGroup.Item>First name: {jsonApiResponse.first}</ListGroup.Item>
                                    <ListGroup.Item>Last name: {jsonApiResponse.last}</ListGroup.Item>
                                    <ListGroup.Item>Age: {jsonApiResponse.age}</ListGroup.Item>
                                    <ListGroup.Item>Weight: {jsonApiResponse.weight}</ListGroup.Item>
                                    <ListGroup.Item>Hight: {jsonApiResponse.hight}</ListGroup.Item>
                                    <ListGroup.Item>Prefered program: {jsonApiResponse.program}</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        ) : (<Card style={{ marginTop: '30px', background: 'light-grey' }}>
                            <Card.Title>PLEASE LOGIN !!!</Card.Title>
                            <Card.Subtitle>Profile characteristics:</Card.Subtitle>
                            <ListGroup>
                                <ListGroup.Item>First name: {jsonApiResponse.first}</ListGroup.Item>
                                <ListGroup.Item>Last name: {jsonApiResponse.last}</ListGroup.Item>
                                <ListGroup.Item>Age: {jsonApiResponse.age}</ListGroup.Item>
                                <ListGroup.Item>Weight: {jsonApiResponse.weight}</ListGroup.Item>
                                <ListGroup.Item>Hight: {jsonApiResponse.hight}</ListGroup.Item>
                                <ListGroup.Item>Prefered program: {jsonApiResponse.program}</ListGroup.Item>
                            </ListGroup>
                        </Card>)}
                    </Col>
                </Row>
                <Button onClick={LogOut} variant='outline-danger' style={{ marginLeft: '60%' }}>LogOut</Button>

            </Container>
            <Container style={{ marginTop: '20px', width: '70%', textAlign: 'center' }}>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>These is your personal program:</Accordion.Header>
                        <Accordion.Body>
                            <Container>
                                <Row>
                                    {programList.map((list, index) => (
                                        <div key={list.id} style={{ display: 'flex' }}>
                                            <Col> Exercise Class: {list.exClass}</Col>
                                            <Col> Exercise : {list.exName}</Col>
                                            <Col> Number of sets: {programSets[index]} /day {/* add logic - personalizat */}</Col>
                                        </div>
                                    ))}
                                </Row>
                            </Container>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Row style={{ marginBottom: '50px', textAlign: 'center' }}>
                    <p></p>
                    <p>About Us: ....................................</p>
                </Row>
            </Container>

        </div>
    )
}