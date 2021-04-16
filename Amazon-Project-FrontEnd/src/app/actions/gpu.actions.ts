import {Injectable} from '@angular/core'
import {Action} from '@ngrx/store'
import {Gpu} from '../model/gpu'

export const ADD_GPU       = '[GPU] Add'
export const REMOVE_GPU    = '[GPU] REMOVE'


export class AddGpu implements Action {
    readonly type = ADD_GPU

    constructor(public payload: Gpu) {}
}


export class RemoveGpu implements Action {
    readonly type = REMOVE_GPU

    constructor(public payload: number) {}
}


export type Actions = AddGpu | RemoveGpu