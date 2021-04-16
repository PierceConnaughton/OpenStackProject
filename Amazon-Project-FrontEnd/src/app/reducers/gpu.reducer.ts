import { Action } from '@ngrx/store'
import { Gpu } from './../model/gpu'
import * as GpuActions from './../actions/gpu.actions'


const initialState: Gpu = {
    id: "ID 1",
    brand: "Sample Brand",
    manufacturer: "Sample Manufacturer",
    series: "Sample Series",
    color: "Sample Color",
    hardDrive: "Sample HardDrive",
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