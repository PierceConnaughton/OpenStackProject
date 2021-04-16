import { Action } from '@ngrx/store'
import { Cpu} from './../model/cpu'
import * as CpuActions from './../actions/cpu.actions'


const initialState: Cpu = {
    id: "ID 1",
    model: "Sample Model",
    manufacturer:"Sample Manufacturer",
    speed: "Sample Speed",
    processors: "Sample Processor"
}


export function reducerCpu(state: Cpu[] = [initialState], action: CpuActions.Actions) {

    switch(action.type){
        case CpuActions.ADD_CPU:
            return [...state, action.payload];

        case CpuActions.REMOVE_CPU:
            state.splice(action.payload, 1)
            return state;

        default:
            return state;
    }
}