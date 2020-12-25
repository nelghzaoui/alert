import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

const { SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private readonly platform: Platform) {
    this.initializeApp();
  }

  initializeApp(): void {
    this.platform.ready().then(() => {
      SplashScreen.hide();
    });
  }
}
