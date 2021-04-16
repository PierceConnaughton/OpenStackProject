import {Injectable} from '@angular/core'
import {Action} from '@ngrx/store'
import {Cpu} from '../model/cpu'

export const ADD_CPU       = '[CPU] Add'
export const REMOVE_CPU    = '[CPU] REMOVE'


export class AddCpu implements Action {
    readonly type = ADD_CPU

    constructor(public payload: Cpu) {}
}


export class RemoveCpu implements Action {
    readonly type = REMOVE_CPU

    constructor(public payload: number) {}
}


export type Actions = AddCpu | RemoveCpu