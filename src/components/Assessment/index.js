import React, {useState} from 'react'
import useLocalStorage from 'react-use-localstorage'
import {Button, Media, ListGroup, Modal, ModalHeader, ModalBody, ModalFooter,  UncontrolledPopover, PopoverHeader, PopoverBody} from 'reactstrap'
import {Link} from 'react-router-dom'

export default function Assessment(props) {
    
    const [item, setItem] = useLocalStorage('name') 
    const [satu, setSatu] = useLocalStorage('satu')
    const [dua, setDua] = useLocalStorage('dua')
    const [tiga, setTiga] = useLocalStorage('tiga')
    const [empat, setEmpat] = useLocalStorage('empat')
    const [lima, setLima] = useLocalStorage('lima')
    const [enam, setEnam] = useLocalStorage('enam')


    const {
        
        className
      } = props;
    
      const [modal, setModal] = useState(true);
    //   console.log('localstorage',localStorage.getItem('satu'))

      const toggle = () => setModal(!modal);
    return (
        <>
        <UncontrolledPopover trigger="legacy" placement="left" target="PopoverLegacy">
        <PopoverHeader>Tersimpan</PopoverHeader>
         </UncontrolledPopover>

        
                <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>Yuk Main Pernah/Gak Pernah</ModalHeader>
                    <ModalBody>
                        <b>Rules nya cuma 2 kok</b>:
                        <li>baca pertanyaan sampai selesai</li>
                        <li>terus jawab jujur ..</li><br/>
                        easyy ..
                        kuy lahh play
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={toggle}>Play</Button>{' '}
                    </ModalFooter>
                </Modal>
              <Media body className="text-center">
                <Media heading>
                <h2>Corona Self Assessment*</h2>
                </Media>
                <p>*Inget ya, ini bukan hasil akhir atau vonis akhir kamu kena Corona apa ngga<br/>
                Tapi ini adalah beberapa indikator awal yang dipake sama pemerintah<br/>
                Buat screening awal ODP(Orang Dalam Pengawasan).
                </p>
            </Media>
    
        
        <hr></hr>

        <ListGroup>
            <label><b>Nama kamu siapa ? </b> (Nama panggilan aja)</label>
            <input type="text" onChange={e=>{setItem(e.target.value)}} placeholder="isi nama kamu"/>
            <br/>
            <b>1. {item} kamu pernah ngalamin satu dari beberapa gejala dibawah ngga ? (dalam 14 hari terakhir)</b>
            <ul>  
                <li>Kesulitan bernafas yang parah (Bernafas dengan sangat cepat atau berbicara dalam satu kata)</li>
                <li>Nyeri dada yang parah</li>
                <li>Sulit untuk bangun karna ngerasa sesak nafas parah</li>
                <li>Merasa kebingungan (Bukan galau, plis bedain)</li>
                <li>Penurunan kesadaran (tiba-tiba berasa mau pingsan)</li>
            </ul>
        <Button color="warning" id="PopoverLegacy"
        value = "pernah" onClick={e=>{setSatu(e.target.value)}}>Pernah</Button>
        
        <Button outline color="secondary"  id="PopoverLegacy"
        value = "ga pernah" onClick={e=>{setSatu(e.target.value)}}>Ga Pernah</Button>
        </ListGroup>

        <ListGroup>
            <b>2. kalo yang ini {item} pernah ngalamin ngga ? (dalam 14 hari ke terakhir juga ya)</b>
            <ul>  
                <li>Nafas yang pendek saat istirahat</li>
                <li>Ketidakmampuan untuk berbaring karena kesulitan bernafas</li>
                <li>Kondisi kesehatan makin turun gara-gara susah bernafas</li>
            </ul>
            <Button color="warning" id="PopoverLegacy"
            value = "pernah" onClick={e=>{setDua(e.target.value)}}
            >Pernah</Button>
            <Button outline color="secondary" id="PopoverLegacy"
            value = "ga pernah" onClick={e=>{setDua(e.target.value)}}
            >Ga Pernah</Button>
        </ListGroup>

        <ListGroup>
            <b>3. Emm, okey lanjut, pernah ngalamin gejala ini ga ? ... </b>(Ini dalam 14 hari terakhir yah)
            <ul>  
                <li>Demam</li>
                <li>Batuk</li>
                <li>Bersin</li>
                <li>Sakit Tenggorokan</li>
                <li>Sulit Bernafas</li>
            </ul>
            <Button color="warning" id="PopoverLegacy"
            value = "pernah" onClick={e=>{setTiga(e.target.value)}}
            id="PopoverLegacy"
            >Pernah</Button>
            <Button outline color="secondary"  id="PopoverLegacy"
            value = "ga pernah" onClick={e=>{setTiga(e.target.value)}}
            >Ga Pernah</Button>
        </ListGroup>
        <ListGroup>
            <b>4. Emm, terus pernah travelling ke luar negeri/kota yang udah kena udah terjangkit corona ? muncul gejala ga sekitar 14 hari setelah travelling ? Gejala corona ya, bukan yang lain ..</b><br/>(China, Italy, Iran, Korea Selatan, Prancis, Spanyol, Jerman, USA) <br/>kota terjangkit misal (Jakarta, Bali, Solo, Yogyakarta, Pontianak, Manado, Bandung dll)?
            
            <Button color="warning" id="PopoverLegacy"
            value = "pernah" onClick={e=>{setEmpat(e.target.value)}}
            >Pernah</Button>
            <Button outline color="secondary"  id="PopoverLegacy"
            value = "ga pernah" onClick={e=>{setEmpat(e.target.value)}}
            >Ga Pernah</Button>
        </ListGroup>
        <ListGroup>
            <b>5. Pernah nge-rawat atau kontak fisik sama  suspect corona ? </b>(terduga positif corona / ODP) 
            
            <Button color="warning" id="PopoverLegacy"
            value = "pernah" onClick={e=>{setLima(e.target.value)}}
            >Pernah</Button>
            <Button outline color="secondary"  id="PopoverLegacy"
            value = "ga pernah" onClick={e=>{setLima(e.target.value)}}
            >Ga Pernah</Button>
        </ListGroup>
        <ListGroup>
            <b>6. Punya temen dari luar negri yang pulang ke indo terus sakit ?(batuk, demam, bersin, atau sakit tenggorokan)</b>
             pernah kontak ga sama doi ? kontak fisik ya, bukan chatan hehe .. 
            
            <Button color="warning" id="PopoverLegacy"
            value = "pernah" onClick={e=>{setEnam(e.target.value)}}
            >Pernah</Button>
            <Button outline color="secondary"  id="PopoverLegacy"
            value = "ga pernah" onClick={e=>{setEnam(e.target.value)}}
            >Ga Pernah</Button>
        </ListGroup>

        <Link to="/hasil"><Button color="success" size="lg" block>Cek Hasil</Button></Link>
      </>
    )
}
