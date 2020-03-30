import React from 'react'
import { Button } from 'reactstrap'
import {Link} from 'react-router-dom'
export default function Result() {
    const satu =localStorage.getItem('satu')
    const dua =localStorage.getItem('dua')
    const tiga =localStorage.getItem('tiga')
    const empat =localStorage.getItem('empat')
    const lima =localStorage.getItem('lima')
    const enam =localStorage.getItem('enam')
    const nama =localStorage.getItem('name')


    function result(satu,dua,tiga,empat,lima,enam){
      if((satu === 'pernah' || dua === 'pernah')&& (tiga === 'pernah' || empat==='pernah' || lima==='pernah' || enam==='pernah') || (satu==='pernah' && dua=='pernah') || satu==='pernah' || dua ==='pernah'){
        return (
          <div>
            <p>Dari ciri-ciri yang {nama} kamu isi, <strong style={{color:'red'}}>lebih baik coba periksa deh</strong> atau coba telfon 
              call center corona di <strong>119</strong> <br/>
              sementara nunggu kabar dari DINKES atau yang berwenang, lebih baik kamu self isolation dulu 
              jangan keluar-keluar rumah dan kurangi kontak sama orang lain, kalo hacim juga di tutupin dulu.. <br/>
              karna dari ciri-ciri yang udah kamu masukin, kamu termasuk di kategori <b>ODP (Orang Dalam Pemantauan)</b><br/>
              pokok nya, stay save dan <strong>#DirumahAja</strong>  ... 
            </p>
          </div>
        )
      }else if(tiga === 'pernah' && (empat === 'pernah' || lima === 'pernah' || enam === 'pernah')){
        return (
          <div>
              <p>Dari ciri-ciri yang udah kamu isi, <strong style={{color:'red'}}>lebih baik coba periksa deh</strong> atau coba telfon 
              call center corona di <strong>119</strong> <br/>
              sementara nunggu kabar dari DINKES atau yang berwenang, lebih baik kamu self isolation dulu 
              jangan keluar-keluar rumah dan kurangi kontak sama orang lain, kalo hacim juga di tutupin dulu.. <br/>
              karna dari ciri-ciri yang udah kamu masukin, kamu termasuk di kategori <b>ODP (Orang Dalam Pemantauan)</b><br/>
              pokok nya, stay save dan <strong>#DirumahAja</strong>  ... 
            </p>
          </div>
        )
      }else if(empat === 'pernah' && (lima === 'pernah' || enam === 'pernah')){
        return(
          <div>
           
              <p>Dari ciri-ciri yang udah kamu isi, <strong style={{color:'red'}}>lebih baik coba periksa deh</strong> atau coba telfon 
              call center corona di <strong>119</strong> <br/></p>
              sementara nunggu kabar dari DINKES atau yang berwenang, lebih baik kamu self isolation dulu 
              <p>jangan keluar-keluar rumah dan kurangi kontak sama orang lain, kalo hacim juga di tutupin dulu.. <br/>
              karna dari ciri-ciri yang udah kamu masukin, kamu termasuk di kategori <b>ODP (Orang Dalam Pemantauan)</b><br/>
              pokok nya, stay save dan <strong>#DirumahAja</strong>  ... 
            </p>
          </div>
        )
      }else{
        return(
          <div>
              <p>Dari ciri-ciri yang udah kamu isi, kamu masih <strong style={{color:'green'}}>aman-aman</strong> aja kok
               tapi meskipun gitu, bukan berarti kamu gabisa kena virus ini juga .. <br/><br/>
              jadi lebih baik jangan keluar-keluar rumah dan kurangi kontak sama orang lain, kalo hacim juga di tutupin <br/><br/>
              <b>Virus ini bukan tentang kamu aja, tapi juga tentang orang-orang yang ada disekitar kamu </b><br/><br/>
              jadi pastiin kamu jaga diri, dan jaga juga orang lain dari paparan virus ini dengan cara yang paling simple<br/>
              mulai dari diri sendiri untuk jaga kebersihan <strong> #DirumahAja</strong>  ... 
            </p>
          </div>
        )
      }
    }
      
    
 

    return (
        <div>
          <h2>Kita coba bikin rangkuman ya buat {nama} ...</h2>
          
          <ul>
              <li>kamu <strong>{satu}</strong> ngalamin gejala penyakit pernafasan yang parah</li>
              <li><strong>{dua}</strong> ngalamin sesak nafas parah, yang bikin kamu susah aktivitas </li>
              <li>kamu  <strong>{tiga}</strong> demam, batuk, pilek, dll .. (Dalam 14 hari terakhir)</li>
              <li><strong>{empat}</strong> berkunjung ke negara yang udah kena pandemi corona</li>
              <li> <strong>{lima}</strong> ngerawat atau kontak fisik sama suspect/pasien corona</li>
              <li><strong>{enam}</strong> kontak sama temen yang dari luar negeri terus ngalamin gejala corona</li>
          </ul>
          <h3>Jadi gimana nih ??</h3>
          {result(satu,dua,tiga,empat,lima,enam)}
          <Link to="/test-corona"><Button color="primary" block onClick={localStorage.clear()}>Cek lagi</Button></Link>

        </div>
    )
}
