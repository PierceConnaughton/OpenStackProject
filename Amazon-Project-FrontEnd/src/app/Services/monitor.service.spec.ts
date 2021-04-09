import { TestBed } from '@angular/core/testing';
import { from } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MonitorService } from './monitor.service';
import {IMonitor} from '../model/monitor'

describe('MonitorService', () => {
  let service: MonitorService;
  const dataUri = 'http://localhost:3000/monitors'
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable Monitor', () => {

    
    const dummyMonitors : IMonitor[] = [
      { 
        brand: "Gigabyte", 
        monitorID: "M001", 
        size: 10,
        version: "Gtx 1660",
        color: "Red", 
        refreshRate:"60Hz", 
        keywords: ["a","a"],
        id: "a"
      },
      { 
        brand: "Gigabyte", 
        monitorID: "M001", 
        size: 10,
        version: "Gtx 1660",
        color: "Red", 
        refreshRate:"60Hz", 
        keywords: ["a","a"],
        id: "a"
      },
    ];

    service.getMonitors().subscribe((monitors) => {
      expect(monitors).toEqual(dummyMonitors);
    });

    const req = httpMock.expectOne(dataUri + "?limit=10");
    expect(req.request.method).toBe("GET");
    req.flush(dummyMonitors);
  });

  it('should delete an Observable Monitor', () => {
    
    const req = httpMock.expectOne(dataUri + '/' + 1);
    expect(req.request.method).toBe("DELETE");
    
  });

  

  
});
