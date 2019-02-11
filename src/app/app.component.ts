import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private toastr: ToastrService) {}
  title = 'NotificationService';

  //showSuccess(a,b) {
    //this.toastr.success('CORRECTO','');
  //}

  ErrorSuccess() {
    this.toastr.error('ERROR', 'Toastr fun!');
  }
  
  InfoSuccess(a: string) {
    this.toastr.info(a, 'Toastr fun!');
  }



}
