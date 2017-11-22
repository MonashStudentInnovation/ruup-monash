import { GET_INCIDENTS } from "../actions/types"

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_INCIDENTS:
            return action.payload;
        default:
            return state;
    }
}