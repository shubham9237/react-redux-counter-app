const initState = 10;

const reduce = (state = initState, action) => {

    switch (action.type) {
        case "INC":
            state++;
            return state;
        case "DEC":
            state--;
            return state;
        default:
            return state;
    }
}
export default reduce;