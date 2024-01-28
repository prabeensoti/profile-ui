import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BlogsModel} from "../model/blogs.model";
import {BlogDetailsModel} from "../model/blog-details.model";

const API_ENDPOINT: string = "https://mt4942ktyj.execute-api.us-east-1.amazonaws.com/v1";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {
  }

  public getAllBlogs(): Observable<BlogsModel[]> {
    return this.http.get<BlogsModel[]>(API_ENDPOINT+"/blogs/ui");
  }

  getBlogById(id?: string): Observable<BlogDetailsModel> {
    return this.http.get<BlogDetailsModel>(API_ENDPOINT + '/blogs/' + id);
  }
}
