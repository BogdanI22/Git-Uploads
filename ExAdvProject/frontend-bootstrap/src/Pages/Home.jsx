import { Container, Row, Col, Image } from "react-bootstrap"
import Physical from 'D:/Projects/ExAdvProject/frontend-bootstrap/src/assets/Pictures/physicalHealth.png'
import Mental from 'D:/Projects/ExAdvProject/frontend-bootstrap/src/assets/Pictures/mentalHealth.png'
import Social from 'D:/Projects/ExAdvProject/frontend-bootstrap/src/assets/Pictures/socialBenefits.png'
import Quality from 'D:/Projects/ExAdvProject/frontend-bootstrap/src/assets/Pictures/qualityOfLife.png'


export default function Home() {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Home</h1>
            <div style={{margin:'20px 100px'}}>
                <h5 style={{ textAlign: 'center' }}>An exercise advisor program offers personalized guidance, ensuring workouts are tailored to individual goals and
                    fitness levels while teaching proper technique to prevent injuries. It provides motivation, consistency, and
                    accountability, helping maintain commitment to fitness routines. Advisors optimize workouts for efficiency, track
                    progress, and adjust plans to avoid plateaus. They also offer nutrition advice, enhancing overall results.
                    By educating clients about fitness and nutrition, advisors empower them to make informed decisions, leading to
                    long-term health benefits and improved confidence. Overall, such programs ensure a safe, effective, and engaging
                    fitness journey.</h5>
                <h5 style={{ textAlign: 'center' }}>The gym plays a crucial role in many people's lives for several reasons,
                    contributing to both physical and mental well-being. Here are some key points highlighting the importance
                    of the gym:</h5>
            </div>
            <Container>
                <Row style={{ marginTop: '30px' }}>
                    <Col>
                        <Image src = {Physical}
                            rounded />
                    </Col>
                    <Col>
                        <h2>1.Physical Health</h2>
                        <p><b>Strength and Conditioning:</b>
                            Regular workouts improve muscle strength and cardiovascular endurance, helping to build a more resilient body.</p>
                        <p><b>Weight Management: </b>
                            Consistent exercise at the gym helps in burning calories, managing weight, and reducing body fat.</p>
                        <p><b>Chronic Disease Prevention:</b>
                            Regular physical activity can lower the risk of developing chronic diseases like heart disease, diabetes, and certain cancers.</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: '20px' }}>
                    <Col>
                        <h2>2. Mental Health</h2>
                        <p><b>Stress Relief:</b>
                            Exercise is known to reduce levels of the body's stress hormones, such as adrenaline and cortisol. It also stimulates the production of
                            endorphins, which are natural mood lifters.</p>
                        <p><b>Improved Sleep: </b>
                            Regular exercise can help you fall asleep faster and enjoy deeper sleep.</p>
                        <p><b>Mental Clarity and Cognitive Function: </b>
                            Physical activity increases blood flow to the brain, which can help with memory, focus, and overall cognitive function.</p>

                    </Col>
                    <Col>
                        <Image src={Mental}
                            style={{width:'650px', height:'290px'}}
                            rounded />
                    </Col>
                </Row>
                <Row style={{ marginTop: '20px' }}>
                    <Col>
                        <Image src={Social}
                            style={{width:'600px'}}
                            rounded />
                    </Col>
                    <Col>
                        <h2>3. Social Benefits</h2>
                        <p><b>Community and Support:</b>
                            Gyms often foster a sense of community. Group classes and regular gym attendance can lead to new friendships and a support system.</p>
                        <p><b>Motivation and Accountability:</b>
                            Working out in a gym setting can provide motivation and accountability through trainers and fellow gym-goers.</p>

                    </Col>
                </Row>
                <Row style={{ marginTop: '20px', borderBottom: 'solid', borderColor: 'grey' }}>
                    <Col>
                        <h2>4. Enhanced Quality of Life</h2>
                        <p><b>Increased Energy Levels:</b>
                            Regular exercise increases overall energy levels and reduces feelings of fatigue.</p>
                        <p><b>Better Posture and Flexibility:  </b>
                            Gym workouts often include stretching and flexibility exercises, which can improve posture and reduce the risk of injuries.</p>
                        <p><b>Enhanced Mobility and Balance: </b>
                            Strength training and functional exercises improve mobility and balance, particularly important as we age.</p>

                    </Col>
                    <Col>
                        <Image src={Quality}
                            style={{width:'600px'}}
                            rounded />
                    </Col>
                    <p></p>
                </Row>
                <Row style={{ marginBottom: '50px', textAlign: 'center' }}>
                    <p></p>
                    <p>About Us: ....................................</p>
                </Row>

            </Container>
        </>
    )
}