import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService],
    });

    service = TestBed.inject(HttpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should make a GET request', () => {
    const mockData = { data: 'data' };

    service.doGet('http://test.com').subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne('http://test.com');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should make a POST request', () => {
    const mockData = { data: 'data' };
    const mockPayload = { payload: 'payload' };

    service.doPost('http://test.com', mockPayload).subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne('http://test.com');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockPayload);
    req.flush(mockData);
  });

  it('should use default options if no options are provided', () => {
    const mockData = { data: 'data' };

    service.doGet('http://test.com').subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne('http://test.com');
    req.flush(mockData);
  });
});
