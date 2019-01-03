import { Component, OnInit, ViewChild } from '@angular/core';
import { RoutingSignalService } from './routing-signal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private routingSignalService: RoutingSignalService) { }

@ViewChild('top') elementToFocusAfterRouting;

  ngOnInit() {
     this.routingSignalService.onRoute.subscribe( (e) => {
        this.onRoute(e);
     })
   }

   onRoute(e) {
        if(e){
           this.elementToFocusAfterRouting.nativeElement.textContent = "Top of " + e.target.innerText;
           this.elementToFocusAfterRouting.nativeElement.blur();
					 setTimeout(()=>{this.elementToFocusAfterRouting.nativeElement.focus();}, 500);
        }
   }

}
