import * as M from 'materialize-css';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('mobile') sideNav?: ElementRef;

  ngAfterViewInit(): void {
      M.Sidenav.init(this.sideNav?.nativeElement);

      document.addEventListener('DOMContentLoaded', function() {
        // var datepicker = document.querySelectorAll('.datepicker');
        // M.Datepicker.init(datepicker, undefined);

        // var select = document.querySelectorAll('select');
        // M.FormSelect.init(select, undefined);
      });
  }
}
