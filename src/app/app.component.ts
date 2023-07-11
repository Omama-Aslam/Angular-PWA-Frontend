import { Component, OnInit, Directive } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { PushNotificationService } from './service/push-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'pwa-frontend';
  AllSubscriber: any = [];
  private publicKey =
    'BE1DOuy5qzVVanYhcD8cnd7NIMuv5PDinH6YO-rwaEGzTax4WWck_CZ9tFPi_zsBeDs5r6IYAP8K1XZ8x8_KW5o';
  constructor(
    private swPush: SwPush,
    private service: PushNotificationService
  ) {}

  pushSubscription() {
    if (!this.swPush.isEnabled) {
      console.log('Notifications is not enabled.');
      return;
    }
    this.swPush
      .requestSubscription({ serverPublicKey: this.publicKey })
      .then((subscription) => {
        // send subscription to the server
        this.service.sendSubscriptionToTheServer(subscription).subscribe();
        console.log(JSON.stringify(subscription));
      })
      .catch((error) => console.log(error));
  }

  getAllSubscriber() {
    this.service.getSubscriberFromDatabase().subscribe((res) => {
      this.AllSubscriber = res;
      console.log("AllSubscriber Object  : " , this.AllSubscriber);
    });
  }

  ngOnInit(): void {}
}
