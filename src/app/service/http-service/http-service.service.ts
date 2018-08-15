import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class HttpServiceService {
    private httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http:HttpClient) { }


    httpGet(){
	return this.http.get('/api/food/');
    }

}
