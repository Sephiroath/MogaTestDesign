import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shouldShowNavBar = false;
  navigation = [
    { link: 'pasttrials', label: 'Past Trials' },
    { link: 'howitworks', label: 'How It Works' },
    { link: 'login', label: 'Log in/Sign Up' }
  ];
}
