import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import * as AOS from 'aos';
import 'aos/dist/aos.css';


bootstrapApplication(App, appConfig).then(()=>{
   AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out'
  });
})
  .catch((err) => console.error(err));
