import { Injectable } from '@angular/core';
import { DataService } from './../services/data.service';
import { Http } from '@angular/http';

@Injectable()
export class FollowersService extends DataService {
    constructor(http: Http) {
        super("https://api.github.com/users/fpenim/followers", http);
    }
}