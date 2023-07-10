import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PushNotificationService {
  endPoint: string = 'http://localhost:3000/api/subscribe';
  endPoint1: string = 'http://localhost:3000/subscriber';
  constructor(private http: HttpClient) {}

  public sendSubscriptionToTheServer(subscription: PushSubscription) {
    return this.http.post(this.endPoint, subscription);
  }

  public getSubscriberFromDatabase() {
    return this.http.get(this.endPoint1);
  }
}
