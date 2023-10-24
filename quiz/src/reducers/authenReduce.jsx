const authenReducer = (state = false, action) => {
    switch (action.type) {
        case "CHECK_AUTHEN":
            return action.status
        default:
            return state;
    }
}
export default authenReducer;