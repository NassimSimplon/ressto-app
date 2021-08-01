const statez = {
    plats:[]
};

export  const platsReducer = (state = statez, action ) => {
    const { type, payload } = action;
    switch( type) {
        case   "GET_PLATS_SUCCED":
            return {
                ...state,
                plats: payload 
              }
            case   "ADD_PLATS_SUCCED":
                return {
                    ...state,
                    plats: [...state.plats, payload]
              
                   }

    }
return state
};