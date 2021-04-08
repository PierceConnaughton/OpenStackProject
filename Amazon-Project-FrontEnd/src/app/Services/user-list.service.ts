import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'


import { UserItem } from '../model/user-Item';

import { AmazonCasesResponse } from '../model/AmazonCasesResponse';
import { AmazonCpusResponse } from '../model/AmazonCpuResponse';
import { AmazonMonitorResponse } from '../model/AmazonMonitorResponse';

import { Gpu } from '../model/gpu';
import { IMonitor } from '../model/monitor';


@Injectable({
  providedIn: 'root'
})
export class UserListService {

  private dataUri = 'http://localhost:3000/pcs'

  constructor(private http: HttpClient) { }

  // getPcItems(): Observable<UserItem[]> {
  //   //TODO: Mapping the obtained result to our UserItem props. (pipe() and map())
  //   return this.http.get<UserItem[]>(this.dataUri).pipe(
  //     map((result: any[]) => {
  //       let userItems: UserItem[] = [];

  //       for (let item of result) {
  //         let productExists = false

  //         for (let i in userItems) {
  //           if (userItems[i].productId === item.product.id) {
  //             userItems[i].qty++
  //             productExists = true
  //             break;
  //           }
  //         }

  //         if (!productExists) {
  //           userItems.push(new UserItem(item.id, item.product));
  //         }
  //       }

  //       return userItems;
  //     })
  //   );
  // }

   getPcItems(): Observable<UserItem[]> {
    return this.http.get<UserItem[]>(this.dataUri);
  }

  addPartToPc(newPart: UserItem): Observable<UserItem> {

    console.log("add part has been called");

    return this.http.post<UserItem>(this.dataUri, newPart)
      .pipe(
        catchError(this.handleError)
      )
  }


  deletePcItem(id: string): Observable<UserItem> {

    console.log("delete pc item called");

    let pcUri: string = this.dataUri + '/' + id
    
    return this.http.delete<UserItem>(pcUri)
    .pipe(
      catchError(this.handleError)
    );
    
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

 
}
