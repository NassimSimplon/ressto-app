import { fetchAllPlats  ,fetchAddPlat} from "../../request/request"

 
 
export function getAllPlats() {
    return dispatch => {
        fetchAllPlats()
        .then (plats =>dispatch (
            {type: "GET_PLATS_SUCCED",payload: plats}) 
        )

        .catch(err=>dispatch( {
            type: "GET_PLATS_FAILED",
            payload: err
          }))
    }

}

 
export const addPlat=(platName,platImage,description,prix)=> async (dispatch) =>{
    try{
        const res=await fetchAddPlat (platName,platImage,description,prix);
        dispatch ({
            type:"ADD_PLATS_SUCCED",
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}