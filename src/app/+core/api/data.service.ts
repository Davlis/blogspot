import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { AuthService } from '../services/auth.service';
import { environment as env } from '../../../environments/environment';

@Injectable()
export class DataService {
  
  private headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': ''
  });

  constructor(private http: Http, 
              private auth: AuthService) {
  }

  getData(endpoint: string): Promise<any> {
    const url = `${env.api_url}/${endpoint}`;
    this.headers.set('Authorization', this.auth.getAuthHeader());

    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(response => {
        return response.json();
      }).catch(err => {
        return this.handleError(err);
      });
  }

  getQueryData(endpoint: string, query: any): Promise<any> {
    let url = `${env.api_url}/${endpoint}`;
    url += this.getQuery(query);
    this.headers.set('Authorization', this.auth.getAuthHeader());

    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(response => {
        return response.json();
      }).catch(err => {
        return this.handleError(err);
      });
  }

  postData(endpoint: string, data: any): Promise<any> {
    const url = `${env.api_url}/${endpoint}`;
    this.headers.set('Authorization', this.auth.getAuthHeader());

    return this.http
      .post(url, JSON.stringify(data), { headers: this.headers })
      .toPromise()
      .then(response => {
        return response.json();
      }).catch(err => {
        return this.handleError(err);
      });
  }

  deleteData(endpoint: string): Promise<any> {
    const url = `${env.api_url}/${endpoint}`;
    this.headers.set('Authorization', this.auth.getAuthHeader());

    return this.http
      .delete(url, { headers: this.headers })
      .toPromise()
      .then(() => {
        return null;
      }).catch(err => {
        return this.handleError(err);
      });
  }

  putData(endpoint: string, data: any): Promise<any> {
    const url = `${env.api_url}/${endpoint}`;
    this.headers.set('Authorization', this.auth.getAuthHeader());

    return this.http
      .put(url, JSON.stringify(data), { headers: this.headers })
      .toPromise()
      .then(response => {
        return response.json();
      }).catch(err => {
        return this.handleError(err);
      });
  }

  patchData(endpoint: string, data: any): Promise<any> {
    const url = `${env.api_url}/${endpoint}`;
    this.headers.set('Authorization', this.auth.getAuthHeader());

    return this.http
      .patch(url, JSON.stringify(data), { headers: this.headers })
      .toPromise()
      .then(response => {
        return response.json();
      }).catch(err => {
        return this.handleError(err);
      });
  }

  getObservableDataQuery(endpoint: string, query: any) : Observable<any[]> {
    let url = `${env.api_url}/${endpoint}`;
    url += this.getQuery(query);
    this.headers.set('Authorization', this.auth.getAuthHeader());

    return this.http
      .get(url, { headers: this.headers })
      .map(response => {
        return response.json()
      }).catch(err => {
        this.handleError(err);
        return Observable.of([]);
      });
  }

  private handleError(error: any): Promise<any> {
    // TODO: Better system;
    console.error(error);
    return Promise.reject(error);
  }

  private getQuery(query) {
    let q = '?';
    for(let key in query) {
      if(query.hasOwnProperty(key)) {
        q += key + '=' + query[key] + '&';
      }
    }

    q = q.substr(0, q.length - 1);

    return q;
  }

}
