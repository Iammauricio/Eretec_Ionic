import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController , public dados : ServiceProvider) {

  }

PagePatrocinio(){
	this.navCtrl.push("PatrocinadoresPage")
  }


PageMinicurso(){
  this.navCtrl.push("MinicursosPage")
  }

  

}



/*
 função menu pop-up
 Mudarestado(el) {
        var display = document.getElementById(el).style.display;
        if(display == "none")
            document.getElementById(el).style.display = 'block';
        else
            document.getElementById(el).style.display = 'none';
    }


 */
