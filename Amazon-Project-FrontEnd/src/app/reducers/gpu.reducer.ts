import { Action } from '@ngrx/store'
import { Gpu } from './../model/gpu'
import * as GpuActions from './../actions/gpu.actions'


const initialState: Gpu = {
    id: "a",
    brand: "string",
    manufacturer: "string",
    series: "string",
    color: "string",
    hardDrive: "string",
}


export function reducerGpu(state: Gpu[] = [initialState], action: GpuActions.Actions) {

    switch(action.type){
        case GpuActions.ADD_GPU:
            return [...state, action.payload];

        case GpuActions.REMOVE_GPU:
            state.splice(action.payload, 1)
            return state;

        default:
            return state;
    }
}