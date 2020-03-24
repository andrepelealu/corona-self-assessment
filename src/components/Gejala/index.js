import React from 'react'
import {Row,Card, CardImg, CardBody, CardTitle,Col, CardText} from 'reactstrap'
import demamPng from '../../assets/demam.png'
import batukPng from '../../assets/batuk.png'
import lelahPng from '../../assets/lelah.png'
import pusingPng from '../../assets/pusing.png'
import tenggorokPng from '../../assets/sakittenggorokan.png'
import sesakPng from '../../assets/sesak.png'

const Gejala = () =>{
    return(
        <div className="text-center">
            <h2>Gimana sih gejala Corona ?</h2>
            <h4>yukk kepoin ...</h4>
            <Row>
                <Col md="4">
                <Card>
                    <CardImg top style={{width:'78px',height:'100px'}} src={demamPng} alt="Card image cap" />
                    <CardBody>
                    <CardTitle><h3>Demam</h3></CardTitle>
                    <CardText>Demam menunjukkan gejala awal corona, demam biasanya mencapai suhu 38 derajat celcius keatas</CardText>
                    </CardBody>
                </Card>
                </Col>

                <Col md="4">
                <Card>
                    <CardImg top style={{width:'78px',height:'100px'}} src={batukPng} alt="Card image cap" />
                    <CardBody>
                    <CardTitle><h3>Batuk Kering</h3></CardTitle>
                    <CardText>Demam menunjukkan gejala awal corona, demam biasanya mencapai suhu 38 derajat celcius keatas</CardText>
                    </CardBody>
                </Card>
                </Col>
                <Col md="4">
                <Card>
                    <CardImg top style={{width:'78px',height:'100px'}} src={tenggorokPng} alt="Card image cap" />
                    <CardBody>
                    <CardTitle><h3>Sakit Tenggorokan</h3></CardTitle>
                    <CardText>Demam menunjukkan gejala awal corona, demam biasanya mencapai suhu 38 derajat celcius keatas</CardText>
                    </CardBody>
                </Card>
                </Col>
                <Col md="4">
                <Card>
                    <CardImg top style={{width:'78px',height:'100px'}} src={pusingPng} alt="Card image cap" />
                    <CardBody>
                    <CardTitle><h3>Sakit Kepala</h3></CardTitle>
                    <CardText>Demam menunjukkan gejala awal corona, demam biasanya mencapai suhu 38 derajat celcius keatas</CardText>
                    </CardBody>
                </Card>
                </Col>

                <Col md="4">
                <Card>
                    <CardImg top style={{width:'78px',height:'100px'}} src={lelahPng} alt="Card image cap" />
                    <CardBody>
                    <CardTitle><h3>Lemas</h3></CardTitle>
                    <CardText>Demam menunjukkan gejala awal corona, demam biasanya mencapai suhu 38 derajat celcius keatas</CardText>
                    </CardBody>
                </Card>
                </Col>
                <Col md="4">
                <Card>
                    <CardImg top style={{width:'78px',height:'100px'}} src={sesakPng} alt="Card image cap" />
                    <CardBody>
                    <CardTitle><h3>Sesak Nafas</h3></CardTitle>
                    <CardText>Demam menunjukkan gejala awal corona, demam biasanya mencapai suhu 38 derajat celcius keatas</CardText>
                    </CardBody>
                </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Gejala