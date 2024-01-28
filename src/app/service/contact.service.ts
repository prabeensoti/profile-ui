import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ContactModel} from "../model/contact.model";
import {HttpClient} from "@angular/common/http";

const API_ENDPOINT: string = "https://api.prabeensoti.com/v1";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) {
  }
  sendContactMessage(contact: ContactModel): Observable<string>{
    return this.http.post<string>(API_ENDPOINT+"/contact",contact);
  }
}
