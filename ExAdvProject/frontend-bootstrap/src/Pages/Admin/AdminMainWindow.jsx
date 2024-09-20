import { Container, Row, Col, Button, Image, ListGroup } from 'react-bootstrap'
import ManageUsersIcon from 'D:/Projects/ExAdvProject/frontend-bootstrap/src/assets/Pictures/manageUsersIcon.png'
import ManageExercisesIcon from 'D:/Projects/ExAdvProject/frontend-bootstrap/src/assets/Pictures/manageExIcon.png'




export default function AdminMainWindow() {

    function goManageUsers(){
        window.location.href='http://localhost:5173/manage-users';
    }

    function goManageExercises(){
        window.location.href='http://localhost:5173/manage-exercises';
    }



    return (
        <div>
            <h1 style={{textAlign:'center', marginTop:'10px'}}>Administrator Main Window</h1>
            <Container style={{ textAlign: 'center' }}>
                <Row style={{marginTop:'10px'}}>
                                       
                    <Col style={{border:'solid 1px', borderRadius:'100px', marginRight:'10px'}}>
                        <Image width= "300px" src={ManageUsersIcon}></Image>
                        <p></p>                        
                        <Button variant='outline-danger' onClick={goManageUsers}>Manage Users!</Button>
                        <Container style={{marginTop:'10px'}}>
                            <p><b>Here you can manage the data from the Users table!</b></p>
                            <p>Data like:</p>
                            <p>-update user info</p>
                            <p>-add users</p>
                            <p>-delete users</p>
                        </Container>
                    </Col>
                    
                    <Col style={{border:'solid 1px', borderRadius:'100px', marginLeft:'10px'}}>
                        <Image width= "300px" src={ManageExercisesIcon}></Image>
                        <p></p>                        
                        <Button variant='outline-danger' onClick={goManageExercises}>Manage Exercises!</Button>
                        <Container style={{marginTop:'10px'}}>
                            <p><b>Here you can manage the data from the Users table!</b></p>
                            <p>Data like:</p>
                            <p>-update exercises info</p>
                            <p>-add exercises</p>
                            <p>-delete exercises</p>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}