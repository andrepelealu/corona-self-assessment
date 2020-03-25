import React from 'react'
import {Jumbotron,Button, Row,Col} from 'reactstrap'
import './style.css'
const HeroSection=()=>{
    return(
        <Jumbotron className="mb-5 jumboBg">
        <h2>Kena Corona ga ya ? :(</h2>
        
        <p className="lead">
            Belakangan ini pasti banyak dari kalian yang parno sama Corona, <br/>
            batuk langsung panik, demam makin takut,<br/>
            Tapi wait ...<br/><br/>biar ga makin parnoan, 
            Coba deh kenalin dulu gejala nya .. <br/>
            Kalo udah kenal tau gejala2 nya, baru deh coba self assessment disini
        </p>
        <hr/>
        <p className="child">
            *Hasil dari self-assement ini bukan hasil final, kalo kamu ngerasa harus periksa ..
            periksa aja,<br/> atau kalo ngerasa sakit, lebih baik isolasi mandiri dulu dirumah dan telfon 
            call center corona <b>119</b><br/>
            stay save semua !! cheerz ...
        </p>
      
        <p className="lead">
        <Button color="primary">Coba Test Corona</Button>
        </p>
    </Jumbotron>
    )
}
export default HeroSection