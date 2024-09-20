import { Container, Row, Col, Image, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

import Program1 from 'D:/Projects/ExAdvProject/frontend-bootstrap/src/assets/Pictures/program1Mass.png'
import Program2 from 'D:/Projects/ExAdvProject/frontend-bootstrap/src/assets/Pictures/weightLoss.png'
import Program3 from 'D:/Projects/ExAdvProject/frontend-bootstrap/src/assets/Pictures/muscleDefinition.png'

export default function Programs() {
    return (
        <Container>
            <Row className="px-4 my-5" style={{ textAlign: "center" }} >
                <Col>
                    <Container>
                        <h1>Program 1</h1>
                        <Image
                            className="mt-2"
                            src={Program1}
                            style={{width:'350px', height:'400px'}}
                            rounded
                        />
                        <p className="mt-2">Mass growth at the gym involves a strategic blend of resistance training, proper nutrition, and recovery. It focuses on hypertrophy, where muscle fibers increase in size through consistent weightlifting routines. Key exercises such as squats, deadlifts, and bench presses are performed with progressively heavier weights to stimulate muscle growth. Adequate protein intake and balanced diets support this growth by providing essential nutrients for muscle repair and development. Rest and recovery, including proper sleep, are equally crucial as they allow muscles to rebuild and grow stronger. This comprehensive approach ensures steady gains in muscle mass and overall strength.</p>
                        <Button variant="outline-primary">See Program 1</Button>
                    </Container>
                </Col>
                <Col> <Container>
                    <h1>Program 2</h1>
                    <Image
                        className="mt-2"
                        src={Program2}
                        style={{width:'350px', height:'400px'}}
                        rounded
                    />
                    <p className="mt-2">Weight loss at the gym combines cardiovascular exercises, strength training, and a balanced diet to burn calories and reduce body fat. High-intensity interval training (HIIT), running, and cycling are effective cardio workouts that elevate heart rate and boost metabolism. Strength training with weights or bodyweight exercises helps build lean muscle, which increases the body's resting metabolic rate, aiding in fat loss. Nutrition plays a critical role, emphasizing a calorie deficit while maintaining nutrient-dense meals to fuel workouts and recovery. Consistency, discipline, and adequate hydration are key factors in achieving and sustaining weight loss goals.</p>
                    <Button variant="outline-primary">See Program 2</Button>
                </Container> </Col>
                <Col> <Container>
                    <h1>Program 3</h1>
                    <Image
                        className="mt-2"
                        src={Program3}
                        style={{width:'350px', height:'400px'}}
                        rounded
                    />
                    <p className="mt-2">Muscular definition at the gym focuses on reducing body fat while maintaining and enhancing muscle mass to achieve a toned and sculpted appearance. This involves a combination of strength training and cardiovascular exercises. Strength training routines include high-repetition sets with moderate weights, targeting all major muscle groups to ensure balanced development. Compound movements like deadlifts, pull-ups, and bench presses are particularly effective. Cardiovascular exercises, such as running, cycling, or HIIT, help burn excess fat. Nutrition is vital, emphasizing lean proteins, healthy fats, and complex carbohydrates while maintaining a calorie deficit. </p>
                    <Button variant="outline-primary">See Program 3</Button>
                </Container> </Col>
            </Row>
        </Container>
    )
}