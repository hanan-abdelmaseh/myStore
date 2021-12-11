import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getData(){
    const url = 'https://fakestoreapi.com/products';
    return this.http.get<any>(url).pipe(map((res:any)=>{
    return res;
    }))
     }
}
