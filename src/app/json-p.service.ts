import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class JsonPService {
    private header = new Headers({
        'Content-Type': 'application/json;chartset=utf-8'
    });
    private getUrl = `/amazon/gp/customer-reviews/aj/private/reviewsGallery/get-application-resources-for-reviews-gallery`;
    constructor(private http: Http) {}
    getAmaZonData(): Promise<any> {
        return this.http.get(this.getUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.log("An error occurred:", error);
        return Promise.reject(error.message || error);
    }
}