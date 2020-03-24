import React, {useEffect,useState} from 'react'
import axios from 'axios'
export default function Berita() {

    const [berita,setBerita] = useState([''])
    const [loading, setLoading]= useState('')

    useEffect(()=>{
        axios.get('https://gnews.io/api/v3/search',{
            params:{
                'lang':'id',
                'country':'id',
                'q':'corona',
                'token':'30b6c3c09152a22daab32d1881451497'
            }
        }).then(res=>{console.log('berita',res.data)})
    },[])
    return (
        <div>
            <h1>berita</h1>
        </div>
    )
}
