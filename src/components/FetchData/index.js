import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Container,Row,Col,CardText,CardTitle,Card, Jumbotron, Button, CardImg, CardBody, CardSubtitle} from 'reactstrap';
import demamPng from '../../assets/demam.png'
export default function FetchData(){
    const [data, setData] = useState([])
    const [cases, setCases] = useState([])
    const [death, setDeath] = useState([])

    // const [dataLength, setDataLength]= useState(0)
    console.log('here')
    useEffect(()=>{
        axios.get('https://covid-193.p.rapidapi.com/history',{
            headers:{
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "5a2621269fmsh4ae57f11c23f86fp14e34cjsnac0d7615a46a"
            },
            params:{
                "country": "Indonesia"
            }
        }).then(
            res=>{
                    setData(res.data.response[0])
                    setCases(res.data.response[0].cases)
                    setDeath(res.data.response[0].deaths)
                })

            },[]
        )
         
          console.log(data)
          console.log("Cases: ",cases)
    return(
        <div>
          <Container fluid>
          <Jumbotron>
                            <h2>Kena Corona ga ya ? :(</h2>
                            <p className="lead">
                                Belakangan ini pasti banyak dari kalian yang parno sama Corona, 
                                batuk langsung panik, demam makin takut ...<br/>
                                Buat ngeyakinin, coba deh self-assement disini,tapi sebelum itu... <br/>
                                Coba deh kenalin dulu gejala nya .. 
                            </p>
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
                                    <CardImg top style={{width:'78px',height:'100px'}} src={demamPng} alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle><h3>Demam</h3></CardTitle>
                                    <CardText>Demam menunjukkan gejala awal corona, demam biasanya mencapai suhu 38 derajat celcius keatas</CardText>
                                    </CardBody>
                                </Card>
                                </Col>
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
                                    <CardImg top style={{width:'78px',height:'100px'}} src={demamPng} alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle><h3>Demam</h3></CardTitle>
                                    <CardText>Demam menunjukkan gejala awal corona, demam biasanya mencapai suhu 38 derajat celcius keatas</CardText>
                                    </CardBody>
                                </Card>
                                </Col>

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
                                    <CardImg top style={{width:'78px',height:'100px'}} src={demamPng} alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle><h3>Demam</h3></CardTitle>
                                    <CardText>Demam menunjukkan gejala awal corona, demam biasanya mencapai suhu 38 derajat celcius keatas</CardText>
                                    </CardBody>
                                </Card>
                                </Col>
                            </Row>

                            <p>
                                *Hasil dari self-assement ini bukan hasil final, kalo kamu ngerasa harus periksa ..
                                periksa aja, atau kalo ngerasa sakit, lebih baik isolasi mandiri dulu dirumah 
                                stay save semua !! cheerz ...
                            </p>
                            <p className="lead">
                            <Button color="primary">Coba Test Corona</Button>
                            </p>
                        </Jumbotron>
                        
              <Row className="text-center">
                  <Col md="12">
                  <h3 className="text-center">Data Real time Indonesia</h3>
                  </Col>
                        <Col sm="4">
                            <Card body className="">
                                <CardTitle><h5>Total Kasus <b >{cases.total}</b> Orang</h5></CardTitle>
                                <CardText>Penambahan hari ini: <b className="text-danger">{cases.new}</b></CardText>
                            </Card> 
                        </Col>
                        <Col sm="4">
                            <Card body className="">
                                <CardTitle><h5 >Total Sembuh <b className="text-success">{cases.recovered}</b> Orang</h5></CardTitle>
                                <CardText><br></br></CardText>
                            </Card> 
                        </Col>
                        <Col sm="4">
                            <Card body className="">
                                <CardTitle><h5>Total Meninggal <b>{death.total}</b> Orang</h5></CardTitle>
                                <CardText>Penambahan hari ini: <b className="text-danger">{death.new}</b></CardText>
                            </Card> 
                        </Col>
                        <Card body className="text-center">
                            <CardText>Terakhir di update: {data.day}</CardText>
                        </Card>

              </Row>
          </Container>
        </div>
    )
}