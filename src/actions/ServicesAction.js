import { GET_SERVICES } from "./types"

export function getServices() {
    return {
        type: GET_SERVICES,
        payload: []
    };
}