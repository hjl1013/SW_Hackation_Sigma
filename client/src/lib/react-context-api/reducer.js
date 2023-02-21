export const initialState = {
    isLoggedIn: false,
};

export const actionTypes = {
    SET_LOGGED_IN_STATE: "SET_LOGGED_IN_STATE",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_LOGGED_IN_STATE:
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
            };
        
            default:
                return state;
    }
}

export default reducer;