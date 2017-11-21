import { GET_SERVICES } from "../actions/types"

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_SERVICES:
            return [ action.payload, ...state ];
        default:
            return state;
    }
}