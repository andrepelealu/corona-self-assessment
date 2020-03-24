import React from 'react'
import {Jumbotron,Button} from 'reactstrap'
const HeroSection=()=>{
    return(
        <Jumbotron>
        <h2>Kena Corona ga ya ? :(</h2>
        <p className="lead">
            Belakangan ini pasti banyak dari kalian yang parno sama Corona, 
            batuk langsung panik, demam makin takut,<br/>
            Tapi wait ...<br/>biar ga makin parnoan, 
            Coba deh kenalin dulu gejala nya .. <br/>
            Kalo udah kenal tau gejala2 nya, baru deh coba self assement disini
        </p>
        <hr/>
        <p>
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