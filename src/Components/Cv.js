import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'react-icons';
import { MdMail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

class Cv extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={4}>
                        <img src={this.props.Image} alt="pic" roundedCircle/>
                        <h2>Fadziso G. Ndoro</h2>
                        <h3>Junior Web Developer</h3><br></br>
                        <hr></hr>
                        <ul className="list-unstyled text-center">
                            <li><MdMail /><a href="mailto:fadzisondoro@icloud.com">  iCloud </a></li>
                            <li><MdMail /><a href="mailto:fadzisondoro.gn@gmail.com">  Gmail </a></li>
                            <li><FaLinkedin /><a href="http://linkedin.com/in/fadziso-ndoro-91b354160">  LinkedIn</a></li>
                            <li><FaWhatsapp /><a href="https://api.whatsapp.com/send?phone=27729802159">  WhatsApp</a></li>
                            <li><FaGithub /><a href="https://github.com/Fah22"> Github</a></li>
                        </ul>
                    </Col>
                    <Col sm={8}>
                        <h2 className="aboutHeading"> About </h2>
                        <hr></hr>
                        <p>I am a 21 year old young woman with a passion for design hence being extremely motivated to expand my creative side and constantly develop my skills and grow professionally in web development.</p><br></br>
                        <h2> Education History</h2>
                        <hr></hr>
                        <p>HyperionDev | <b>Feb 2020 - present</b> </p>
                        <p>Full-Stack Web Development Bootcamp</p>
                        <p>Pearson Institute Of Higher Education | <b>2018 - 2019</b> </p>
                        <p>Bachelor Of Science in Computer Science</p>
                        <p>St Johns High School Emerald Hill | <b>2015 - 2016</b> </p>
                        <p>Cambridge Advanced Subsidiary & Advanced Level</p><br></br>
                        <h2> Work Experience </h2>
                        <hr></hr>
                        <p>Part-time student assistant at Ariel Primary School in Harare | <b>Jan 2017 - Dec 2017</b></p>
                        <p>My duties included preparation of kids work, assisant supervisor at swimming & tennis.</p><br></br>
                        <h2> Skills </h2>
                        <hr></hr>
                        <ul className="skills">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>JQuery</li>
                            <li>React</li>
                            <li>The ability to follow instructions and deliver quality results</li>
                            <li>Exceptional communication skills</li>
                        </ul>
                    </Col>
                </Row>
                <hr></hr>
            </Container>
        
        );
    }
}

export default Cv;