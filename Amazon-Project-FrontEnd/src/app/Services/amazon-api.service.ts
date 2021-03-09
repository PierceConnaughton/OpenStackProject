import { Injectable,Component,OnInit,Input } from '@angular/core';
import {HttpClient, HttpErrorResponse,HttpHeaders,HttpClientModule} from "@angular/common/http";
import { Observable } from 'rxjs';
import {catchError,tap} from 'rxjs/operators';
import {AmazonMonitorResponse} from '../model/AmazonMonitorResponse';

import {AmazonCpusResponse} from '../model/AmazonCpuResponse';
import {AmazonGpusResponse} from '../model/AmazonGpuResponse';
import {AmazonCasesResponse} from '../model/AmazonCasesResponse';

@Injectable({
  providedIn: 'root'
})
export class AmazonApiService {

  amazonMonitorData:Observable<AmazonMonitorResponse[]>

  allAmazonMonitorsData:AmazonMonitorResponse[];

  amazonCpuData:Observable<AmazonCpusResponse[]>

  allAmazonCpusData:AmazonCpusResponse[];

  amazonCasesData:Observable<AmazonCasesResponse[]>

  allAmazonCasessData:AmazonCasesResponse[];

  amazonGpuData:Observable<AmazonGpusResponse[]>

  allAmazonGpusData:AmazonGpusResponse[];
  
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
  
  private _url_cases="&url=https://www.amazon.com/Best-Sellers-Computers-Accessories-Computer-Cases/zgbs/pc/572238"
  private _url_cpu="&url=https://www.amazon.com/Best-Sellers-Computers-Accessories-Computer-CPU-Processors/zgbs/pc/229189"
  private _url_gpu="&url=https://www.amazon.com/Best-Sellers-Computers-Accessories-Computer-Graphics-Cards/zgbs/pc/284822"


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

getCasesAmazonList(): Observable<AmazonCasesResponse> {
  return this._http.get<AmazonCasesResponse>(this._siteURL + this._key + this._best_sellers + this._url_cases) 
  .pipe(
    tap(data => console.log('Amazondata/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
  );  
}

getCpuAmazonList(): Observable<AmazonCpusResponse> {
  return this._http.get<AmazonCpusResponse>(this._siteURL + this._key + this._best_sellers + this._url_cpu) 
  .pipe(
    tap(data => console.log('Amazondata/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
  );  
}

getGpuAmazonList(): Observable<AmazonGpusResponse> {
  return this._http.get<AmazonGpusResponse>(this._siteURL + this._key + this._best_sellers + this._url_gpu) 
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
