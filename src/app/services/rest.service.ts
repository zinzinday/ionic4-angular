import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {UserArea} from '../models/user-area';

@Injectable({
    providedIn: 'root'
})
export class RestService {
    constructor(private http: HttpClient) {
    }

    userLocking(value: any): Observable<UserArea> {
        const a: UserArea = {id: '1', name: 'test'};
        return of(a);
    }
}
