import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { retry } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'pwa-frontend';
  private publicKey =
    'BE1DOuy5qzVVanYhcD8cnd7NIMuv5PDinH6YO-rwaEGzTax4WWck_CZ9tFPi_zsBeDs5r6IYAP8K1XZ8x8_KW5o';
  constructor(private swPush: SwPush) {}

  pushSubscription() {
    if (!this.swPush.isEnabled) {
      console.log('Notifications is not enabled.');
      return;
    }
    this.swPush
      .requestSubscription({ serverPublicKey: this.publicKey })
      .then((subscription) => console.log(JSON.stringify(subscription)))
      .catch((error) => console.log(error));
  }

  public subscriptionObject = {
    endpoint:
      'https://fcm.googleapis.com/fcm/send/cNtRLM50jJo:APA91bHFW_EGQWKMCEl59lT5vm8xtGSEv5CV3488Fv-gdIvhGnLX_k-Bo_CATMwcrqDuhMex7mHjO2t-oG3LL4l9RViMkcPcnZS0NH17jCLjkEtV4CesMBp9xct9p3kacOVG7djet-DE',
    expirationTime: null,
    keys: {
      p256dh:
        'BApdbBp1zW78juj29fs50KGCU9RnbIhU6EhK77P6S-A_vTpgzX63lLhtBO9bsuKvYILDPhiODSZh6biIEiBl5Iw',
      auth: 'GolJb1OtzScVEoPRuaSyWg',
    },
  };

  ngOnInit(): void {
    this.pushSubscription();
  }
}
