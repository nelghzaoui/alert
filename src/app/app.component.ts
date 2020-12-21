import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { environment } from '@environments/environment';

const { SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp(): void {
    console.log(environment.languages);

    this.platform.ready().then(() => {
      SplashScreen.hide();
    });
  }
}
