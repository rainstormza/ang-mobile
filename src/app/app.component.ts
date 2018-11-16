import { Component, OnInit } from '@angular/core'

declare const Native: any
declare const Android: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  checkDevice: string

  constructor() {}

  ngOnInit() {
    // this.callMobileFunction()
    const checkDevice = this.getMobileOperatingSystem()
    this.checkDevice = checkDevice
  }

  getMobileOperatingSystem() {
    const userAgent = navigator.userAgent || navigator.vendor || window['opera']
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return 'Windows Phone'
    }
    if (/android/i.test(userAgent)) {
      return 'Android'
    }
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window['MSStream']) {
      return 'iOS'
    }
    return 'unknown'
  }

  callMobileFunction() {
    const checkDevice = this.getMobileOperatingSystem()
    if (checkDevice === 'iOS') {
      Native.calliOSFunction() // function in ios
    } else if (checkDevice === 'Android') {
      Android.callAndroidFunction() // function in android
    }
  }

  gotoHome() {
    console.log(this.checkDevice, 'Go to Home')
    if (this.checkDevice === 'iOS') {
      Native.goToHome()
    } else if (this.checkDevice === 'Android') {
      Android.goToHome()
    }
  }
  closeWebView() {
    console.log(this.checkDevice, 'Close Web View')
    if (this.checkDevice === 'iOS') {
      Native.closeWebView()
    } else if (this.checkDevice === 'Android') {
      Android.closeWebView()
    }
  }
}
