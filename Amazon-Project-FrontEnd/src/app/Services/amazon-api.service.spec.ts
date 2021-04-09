import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AmazonApiService } from './amazon-api.service';

describe('AmazonApiService', () => {
  let service: AmazonApiService;
  let httpMock: HttpTestingController;

  const _siteURL="https://api.rainforestapi.com/request";
  const _key='?api_key=7E765D8D233049B89B3770012C96737D';

  //for specific product
  const _product="&type=product";
  const _asin="&asin="
  const _amazon_domain ="&amazon_domain=amazon.com"

  //for list
  const _best_sellers="&type=bestsellers";
  const _url_monitors="&url=https://www.amazon.com/s/zgbs/pc/1292115011"
  const _url_cases="&url=https://www.amazon.com/Best-Sellers-Computers-Accessories-Computer-Cases/zgbs/pc/572238"
  const _url_cpu="&url=https://www.amazon.com/Best-Sellers-Computers-Accessories-Computer-CPU-Processors/zgbs/pc/229189"
  const _url_gpu="&url=https://www.amazon.com/Best-Sellers-Computers-Accessories-Computer-Graphics-Cards/zgbs/pc/284822"

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmazonApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //Get Item

  it('should return an Observable AmazonGpu', () => {
    const req = httpMock.expectOne(_siteURL + _key + _product + _asin + "B08S2RWY9F" + _amazon_domain);
    expect(req.request.method).toBe("GET");
  });

  it('should return an Observable AmazonCpu', () => {
    const req = httpMock.expectOne(_siteURL + _key + _product + _asin + "B08Q841H8P" + _amazon_domain);
    expect(req.request.method).toBe("GET");
  });

  it('should return an Observable AmazonMonitor', () => {
    const req = httpMock.expectOne(_siteURL + _key + _product + _asin + "B07MQBPMJ2" + _amazon_domain);
    expect(req.request.method).toBe("GET");
  });

  it('should return an Observable AmazonCase', () => {
    const req = httpMock.expectOne(_siteURL + _key + _product + _asin + "B079P1VBDY" + _amazon_domain);
    expect(req.request.method).toBe("GET");
  });

  it('should return an Observable AmazonItem', () => {
    const req = httpMock.expectOne(_siteURL + _key + _product + _asin + "B08Q841H8P" + _amazon_domain);
    expect(req.request.method).toBe("GET");
  });

  //Get Lists

  it('should return an Observable <AmazonGpu[]>', () => {
    const req = httpMock.expectOne(_siteURL + _key + _best_sellers + _url_gpu);
    expect(req.request.method).toBe("GET");
  });

  it('should return an Observable <AmazonCpu[]>', () => {
    const req = httpMock.expectOne(_siteURL + _key + _best_sellers + _url_cpu);
    expect(req.request.method).toBe("GET");
  });

  it('should return an Observable <AmazonMonitor[]>', () => {
    const req = httpMock.expectOne(_siteURL + _key + _best_sellers + _url_monitors);
    expect(req.request.method).toBe("GET");
  });

  it('should return an Observable <AmazonCase[]>', () => {
    const req = httpMock.expectOne(_siteURL + _key + _best_sellers + _url_cases);
    expect(req.request.method).toBe("GET");
  });

  

});
