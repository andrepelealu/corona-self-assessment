import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Table} from 'reactstrap'
export default function FetchProvinsi() {
    const [dataProv, setDataProv] = useState([''])

    useEffect(()=>{
        axios.get('https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')
        .then(res=>{
            setDataProv(res.data.features.map(a=>{return a.attributes}))
        })
    },[])
    // console.log(dataProv)

    return (
        <div>
            <div className="text-center">
            <h3>Data Kasus per Provinsi</h3>
            <h5>Sumber : <a href="http://covid19.bnpb.go.id">covid19.bnpb.go.id</a></h5>
            </div>
<Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Nama Provinsi</th>
          <th>Positive Corona</th>
          <th>Sembuh</th>
          <th>Meninggal</th>
        </tr>
      </thead>
      <tbody>
            {dataProv.map(a=>{
                    return <tr><td></td><td>{a.Provinsi}</td><td>{a.Kasus_Posi}</td><td>{a.Kasus_Semb}</td><td>{a.Kasus_Meni}</td></tr>
                })}

      </tbody>
    </Table>
        </div>
    )
}

