const initial = {
    commandPage:[]
};

export  const commandPageReducer = (state = initial, action ) => {
    const { type, payload } = action;
    switch( type) {
        case   "GET_COMMANDPAGE_SUCCED":
            return {
                ...state,
                commandPage: payload 
              }
            

    }
return state
};