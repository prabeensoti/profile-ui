import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_ENDPOINT: string = "https://prabeensoti.com/v1";

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  constructor(private http: HttpClient) {
  }

  getResumeUri():Observable<string>{
    return this.http.get<string>(API_ENDPOINT+"/resume");
  }
}
