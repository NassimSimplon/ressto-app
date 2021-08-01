import axios from 'axios' 
import {getAllPlatsUrl,addPlatUrl} from './Urls'

export const fetchAllPlats = () =>  
    axios.get(getAllPlatsUrl,{
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }).then(res=>res.data)
 



export const fetchAddPlat = (platName,platImage,description,prix) =>
axios.post(addPlatUrl,{platName,platImage,description,prix}).then(res=>res.data)
 


