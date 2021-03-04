import { Injectable,Component,OnInit,Input } from '@angular/core';
import {HttpClient, HttpErrorResponse,HttpHeaders,HttpClientModule} from "@angular/common/http";
import { Observable } from 'rxjs';
import {catchError,tap} from 'rxjs/operators';
import {AmazonMonitorResponse} from '../model/AmazonMonitorResponse';

@Injectable({
  providedIn: 'root'
})
export class AmazonApiService {

  amazonMonitorData:Observable<AmazonMonitorResponse[]>

  allAmazonMonitorsData:AmazonMonitorResponse[];
  
  errorMessage: string;

  // https://api.rainforestapi.com/request?api_key=7E765D8D233049B89B3770012C96737D&type=product&asin=B000YDDF6O&amazon_domain=amazon.com
    
  private _siteURL="https://api.rainforestapi.com/request";
  private _key='?api_key=7E765D8D233049B89B3770012C96737D';

  //for specific product
  private _product="&type=product";
  private _asin="&asin="
  private _amazon_domain ="&amazon_domain=amazon.com"

  //for list
  private _best_sellers="&type=bestsellers";
  private _url_monitors="&url=https://www.amazon.com/s/zgbs/pc/1292115011"


    constructor(private _http:HttpClient) {
     
     }
  
    getItemData(itemName): Observable<AmazonMonitorResponse> {
      return this._http.get<AmazonMonitorResponse>(this._siteURL + this._key + this._product + this._asin + itemName + this._amazon_domain) 
      .pipe(
        tap(data => console.log('Amazondata/error' + JSON.stringify(data))
        ),
        catchError(this.handleError)
      );  
  }

  getMonitorAmazonList(): Observable<AmazonMonitorResponse> {
    return this._http.get<AmazonMonitorResponse>(this._siteURL + this._key + this._best_sellers + this._url_monitors) 
    .pipe(
      tap(data => console.log('Amazondata/error' + JSON.stringify(data))
      ),
      catchError(this.handleError)
    );  
}

  private handleError(err:HttpErrorResponse){
    console.log('AmazonApiService: ' + err.message);
    return Observable.throw(err.message);
  }
}
