export const authen  = (status = false) => {
    return {
        type: "CHECK_AUTHEN",
        status: status
    };
}
