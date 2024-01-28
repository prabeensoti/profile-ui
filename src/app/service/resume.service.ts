import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_ENDPOINT: string = "https://api.prabeensoti.com/v1";

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  constructor(private http: HttpClient) {
  }

  getResumeUri():Observable<any>{
    return this.http.get<any>(API_ENDPOINT+"/resume");
  }
}
