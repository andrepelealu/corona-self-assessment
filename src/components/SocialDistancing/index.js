import React from 'react'
import {Row,Col,Container} from 'reactstrap'
import YouTube from 'react-youtube-embed'

export default function SocialDistance() {

    return (
        <Container>
        <Row>
            <Col md="5">
                <h3>Apa itu Social Distancing ?</h3>
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
                <YouTube id="oCXVNn3-uBk"/>
            </Col>
        </Row>
        </Container>
    )
}
