import { Injectable ,Inject} from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private httpClient:HttpClient, @Inject("BASE_URL") private baseUrl: string) { }
  Api_Base = this.baseUrl;


  get(id){

    return this.httpClient.get(`${this.Api_Base}/get_package/`+id);
  }


 
}
