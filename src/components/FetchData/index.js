import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Row,Col,CardText,CardTitle,Card} from 'reactstrap';
import "./style.css"
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
                    setData(res.data.response.map(p=>(p.cases.new)))
                    setCases(res.data.response[0].cases)
                    setDeath(res.data.response[0].deaths)
                })

            },[]
        )
         
          console.log("ini data: ",data)
          console.log("Cases: ",cases)
          const persentase= (num,total)=>{
            var a = num/total*100
            return a.toFixed(2)
          }
    return(
        <>

                        

              <Row className="text-center">
                  <Col md="12">
                  <h3 className="text-center">Data Real time Indonesia</h3>
                  </Col>
                        <Col sm="4">
                            <Card body style={{background:'#fcf7bb'}}>
                                <CardTitle><h5>Total Kasus <b >{cases.total}</b> Orang</h5></CardTitle>
                                <CardText>Penambahan : <b className="text-danger">{cases.new}</b></CardText>
                            </Card> 
                        </Col>
                        <Col sm="4">
                            <Card body style={{background:'#cbe2b0'}}>
                                <CardTitle><h5 >Total Sembuh <b>{cases.recovered}</b> Orang</h5></CardTitle>
                                <CardText><br></br></CardText>
                            </Card> 
                        </Col>
                        <Col sm="4">
                            <Card body style={{background:'#ffaaa5'}}className="">
                                <CardTitle><h5>Total Meninggal <b>{death.total}</b> Orang</h5></CardTitle>
                                <CardText>Penambahan : <b className="text-danger">{death.new}</b></CardText>
                            </Card> 
                        </Col>
                        <Col sm="6">
                            <Card body style={{background:''}}className="">
                                <CardTitle><h5>Persentase Sembuh <b>{persentase(cases.recovered,cases.total)}</b> %</h5></CardTitle>
                            </Card> 
                        </Col>
                        <Col sm="6">
                            <Card body style={{background:''}}className="">
                                <CardTitle><h5>Persentase Meninggal <b>{persentase(death.total,cases.total)}</b> %</h5></CardTitle>
                            </Card> 
                        </Col>
                        <Card body className="text-center">
                            <CardText>Terakhir di update: {data.day}</CardText>
                            <CardText>{Date(data.time)}</CardText>

                        </Card>

              </Row>

        </>
    )
}