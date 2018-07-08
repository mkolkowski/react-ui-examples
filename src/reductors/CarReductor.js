const carReductor = (state = { cars: [] }, action) => {
    console.log(action);

    switch (action.type) {
        case 'CAR_LOADED':
            return {
                cars: action.payload.data // data format have data
            };
        default:
            return state
    }

}

export default carReductor

