import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FirebaseApiService } from './firebase-api.service';

describe('FirebaseApiService', () => {
  let service: FirebaseApiService;
  let httpMock: HttpTestingController;

  let apiUrl = "https://us-central1-open-stack-project-bee7f.cloudfunctions.net"

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable Gpu', () => {
    const dummyGpu = 
      { 
        brand: "Gigabyte", 
        manufacturer: "Gigabyte", 
        series: "Gtx 1660",
        color: "Red", 
        hardDrive:"16GB" 
      };

    service.getGpus().subscribe((gpu) => {
      expect(gpu).toEqual(dummyGpu);
    });

    const req = httpMock.expectOne(apiUrl + "/getGpus");
    expect(req.request.method).toBe("GET");
    req.flush(dummyGpu);
  });

  it('should return an Observable Cpu', () => {
    const dummyCpu = 
      { 
        model: "ABC", 
        manufacturer: "Manufacturer Sample",
        speed: "Speed Sample",
        processors: "Processors Sample"
      };

    service.getCpus().subscribe(cpu => {
      expect(cpu).toEqual(dummyCpu);
    });

    const req = httpMock.expectOne(apiUrl + "/getCpus");
    expect(req.request.method).toBe("GET");
    req.flush(dummyCpu);
  });

  it('should delete an Observable Cpu', () => {
    
    const req = httpMock.expectOne(apiUrl +  '/deleteCpu?id=' + 1);
    expect(req.request.method).toBe("DELETE");
    
  });

  it('should delete an Observable Gpu', () => {
    
    const req = httpMock.expectOne(apiUrl +  '/deleteGpu?id=' + 1);
    expect(req.request.method).toBe("DELETE");
    
  });

  it('should add an Observable Cpu', () => {
    const dummyCpu = 
      { 
        model: "ABC", 
        manufacturer: "Manufacturer Sample",
        speed: "Speed Sample",
        processors: "Processors Sample"
      };
    
    const req = httpMock.expectOne(apiUrl + '/addCpu?model=' + dummyCpu.model + '&manufacturer=' + dummyCpu.manufacturer  + '&speed=' + dummyCpu.speed + 
    '&processors=' + dummyCpu.processors,null);
    expect(req.request.method).toBe("POST");
    
  });

  it('should add an Observable Gpu', () => {
    
    const dummyGpu = 
      { 
        brand: "Gigabyte", 
        manufacturer: "Gigabyte", 
        series: "Gtx 1660",
        color: "Red", 
        hardDrive:"16GB" 
      };

    const req = httpMock.expectOne(apiUrl + '/addGpu?brand=' + dummyGpu.brand + '&manufacturer=' + dummyGpu.manufacturer + 
    '&series=' + dummyGpu.series + '&color=' + dummyGpu.color + '&hardDrive=' + dummyGpu.hardDrive, null);
    expect(req.request.method).toBe("POST");
    
  });

  it('should update an Observable Cpu', () => {
    const dummyCpu = 
      { 
        model: "ABC", 
        manufacturer: "Manufacturer Sample",
        speed: "Speed Sample",
        processors: "Processors Sample"
      };
    
    const req = httpMock.expectOne(apiUrl + '/updateCpu?id=' + 1 + '&model=' + dummyCpu.model + '&manufacturer=' + dummyCpu.manufacturer + '&speed=' + dummyCpu.speed 
    + '&processors=' + dummyCpu.processors,null);
    expect(req.request.method).toBe("PUT");
    
  });

  it('should update an Observable Gpu', () => {
    
    const dummyGpu = 
      { 
        brand: "Gigabyte", 
        manufacturer: "Gigabyte", 
        series: "Gtx 1660",
        color: "Red", 
        hardDrive:"16GB" 
      };

    const req = httpMock.expectOne(apiUrl + + '/updateGpu?id=' + 1 + '&brand=' + dummyGpu.brand + '&manufacturer=' + dummyGpu.manufacturer + 
    '&series=' + dummyGpu.series + '&color=' + dummyGpu.color + '&hardDrive=' + dummyGpu.hardDrive,null);
    expect(req.request.method).toBe("PUT");
    
  });

});
