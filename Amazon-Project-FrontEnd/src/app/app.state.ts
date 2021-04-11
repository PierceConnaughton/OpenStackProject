import {Cpu} from './model/cpu'
import {Gpu} from './model/gpu'


export interface AppState{
    readonly cpu : Cpu[];
    readonly gpu : Gpu[];
}