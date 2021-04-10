import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Gpu} from '../model/gpu';
import {Cpu} from '../model/cpu';
import {Observable,throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import { UserItem } from '../model/user-Item';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {

  apiURL = 'https://us-central1-open-stack-project-bee7f.cloudfunctions.net'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
     'Content-Type': 'application/json'
    })
  }

  //#region "Cpu Functions"

  getCpus(): Observable<Cpu> {
    return this.http.get<Cpu>('https://us-central1-open-stack-project-bee7f.cloudfunctions.net/getCpus')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
 

  delCpu(id:string): Observable<Cpu> {

    return this.http.delete<Cpu>(this.apiURL + '/deleteCpu?id=' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  updateCpu(id:string, model: string, manufacturer: string, speed: string, processors: string): Observable<Cpu> {

    return this.http.put<Cpu>(this.apiURL + '/updateCpu?id=' + id + '&model=' + model + '&manufacturer=' + manufacturer + '&speed=' + speed + '&processors=' + processors,null)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  addCpu(model: string, manufacturer: string, speed: string, processors: string): Observable<Cpu> {

    return this.http.post<Cpu>(this.apiURL + '/addCpu?model=' + model + '&manufacturer=' + manufacturer  + '&speed=' + speed + '&processors=' + processors,null)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  //#endregion "Cpu Function"

  //#region "Gpu Functions"

  getGpus(): Observable<Gpu> {
    return this.http.get<Gpu>(this.apiURL + '/getGpus')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  delGpu(id:string): Observable<Gpu> {

    return this.http.delete<Gpu>(this.apiURL + '/deleteGpu?id=' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  updateGpu(id:string, brand: string, manufacturer: string, series: string, color: string, hardDrive:string): Observable<Gpu> {

    return this.http.put<Gpu>(this.apiURL + '/updateGpu?id=' + id + '&brand=' + brand + '&manufacturer=' + manufacturer + '&series=' + series + '&color=' + color + '&hardDrive=' + hardDrive,null)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  addGpu(brand: string, manufacturer: string, series: string, color: string, hardDrive:string): Observable<Gpu> {

    return this.http.post<Gpu>(this.apiURL + '/addGpu?brand=' + brand + '&manufacturer=' + manufacturer + '&series=' + series + '&color=' + color + '&hardDrive=' + hardDrive,null)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
 
  //#endregion "Gpu Function"

   //#region "Gpu Functions"

   getParts(): Observable<UserItem[]> {
    return this.http.get<UserItem[]>(this.apiURL + '/getParts')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  delPart(id:string): Observable<UserItem> {

    return this.http.delete<UserItem>(this.apiURL + '/deletePart?id=' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  addPart(asin: string, title: string, value: Number, rating: Number, image:string, link:string): Observable<UserItem> {

    return this.http.post<UserItem>(this.apiURL + '/addPart?asin=' + asin + '&title=' + title + '&value=' + value + '&rating=' + rating + '&image=' + image + '&link=' + link ,null)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
 
  //#endregion "Gpu Function"


  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
