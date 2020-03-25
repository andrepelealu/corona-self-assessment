import React from 'react'
import {Row,Col,Container} from 'reactstrap'
import YouTube from 'react-youtube-embed'
import './style.css'
export default function SocialDistance() {

    return (
        <Container fluid className="setBg">
        <Container className="pt-5" >
        <Row>
            <Col md="5" className="bgContent">
                <h2>Apa itu </h2>
                <h1><b>Social Distancing ?</b></h1>
                <p>
                    Emm social distancing, pasti kalian udah pernah denger kan, tapi gmn sih maksutnya? <br/>
                    inget2 aja <b>LDR-an</b> mirip2 kok hehe .. <br/><br/>
                    Kalo <b>LDR</b> kan kita jauh2an sama doi tuh ..<br/>
                    nah, kalo Social distancing, hampir sama .. <br/>
                    sama2 jauhan, bukan sama doi .. <br/>
                    tapi, sama interaksi sosial di sekitar kita <br/><br/>
                    <li><b>hindari dulu kerumunan masa yang banyak dan padet</b></li>
                    <li><b>Jaga jarak dulu sama orang kalo lagi ditempat umum</b></li>
                    <li><b>Gausah traveling2 dulu, karna kamu juga bisa kena meskipun ga kerasa</b></li>

                </p>
            </Col>
            <Col md="7">
                <YouTube className="front" id="oCXVNn3-uBk"/>
            </Col>
        </Row>
        </Container>
        </Container>
    )
}
