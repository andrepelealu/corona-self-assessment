import React from 'react'
import {Row,Card, CardImg, CardBody, CardTitle,Col, CardText, Container} from 'reactstrap'
import demamPng from '../../assets/demam.png'
import batukPng from '../../assets/batuk.png'
import lelahPng from '../../assets/lelah.png'
import pusingPng from '../../assets/pusing.png'
import tenggorokPng from '../../assets/sakittenggorokan.png'
import sesakPng from '../../assets/sesak.png'
import './style.css'
const Gejala = () =>{
    return(
        <Container className="pb-5">
        <div className="text-center">
            <h2>Gimana sih gejala Corona ?</h2>
            
            <Row>
                <Col md="4">
                <Card >
                    <CardImg top className="mx-auto" style={{width:'78px',height:'100px'}} src={demamPng} alt="Card image cap" />
                    <CardBody>
                    <CardTitle><h3>Demam</h3></CardTitle>
                    <CardText >
                        Demam menunjukkan gejala awal corona, demam biasanya mencapai suhu 38 derajat celcius keatas
                    </CardText>
                    </CardBody>
                </Card>
                </Col>

                <Col md="4">
                <Card>
                    <CardImg top className="mx-auto" style={{width:'78px',height:'100px'}} src={batukPng} alt="Card image cap" />
                    <CardBody>
                    <CardTitle><h3>Batuk Kering</h3></CardTitle>
                    <CardText>
                    Batuk Kering tidak beriak dan berulang ulang merupakan tanda infeksi aktif di paru-paru, yang mungkin bisa disebabkan karena COVID-19
                    </CardText>
                    </CardBody>
                </Card>
                </Col>
                <Col md="4">
                <Card>
                    <CardImg top className="mx-auto" style={{width:'78px',height:'100px'}} src={tenggorokPng} alt="Card image cap" />
                    <CardBody>
                    <CardTitle><h3>Sakit Tenggorokan</h3></CardTitle>
                    <CardText>
                    Infeksi COVID-19 akan melalui jalur pernafasan sehingga dapat mengakibatkan radang pada tenggorokan dan rasa nyeri
                    </CardText>
                    </CardBody>
                </Card>
                </Col>
                <Col md="4">
                <Card>
                    <CardImg top className="mx-auto" style={{width:'78px',height:'100px'}} src={pusingPng} alt="Card image cap" />
                    <CardBody>
                    <CardTitle><h3>Sakit Kepala</h3></CardTitle>
                    <CardText>Dengan adanya demam yang tinggi, COVID-19 seringkali diikuti dengan gejala sakit kepala</CardText>
                    </CardBody>
                </Card>
                </Col>

                <Col md="4">
                <Card>
                    <CardImg top className="mx-auto" style={{width:'78px',height:'100px'}} src={lelahPng} alt="Card image cap" />
                    <CardBody>
                    <CardTitle><h3>Lemas</h3></CardTitle>
                    <CardText>Infeksi COVID-19 yang telah menyebar ke seluruh tubuh akan menghabiskan energi yang banyak sehingga seringkali dapat mengakibatkan lemas</CardText>
                    </CardBody>
                </Card>
                </Col>
                <Col md="4">
                <Card>
                    <CardImg className="mx-auto" top style={{width:'78px',height:'100px'}} src={sesakPng} alt="Card image cap" />
                    <CardBody>
                    <CardTitle><h3>Sesak Nafas</h3></CardTitle>
                    <CardText>Apabila COVID-19 berkembang dengan cepat dan besar di paru-paru, fungsi paru akan menurun sehingga terjadi sesak nafas</CardText>
                    </CardBody>
                </Card>
                </Col>
            </Row>
        </div>
        </Container>
    )
}

export default Gejala