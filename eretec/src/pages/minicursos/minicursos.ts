import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { ServiceProvider } from '../../providers/service';


@IonicPage()
@Component({
  selector: 'page-minicursos',
  templateUrl: 'minicursos.html',
})
export class MinicursosPage {

  public obj: any;
  public result: any;

  constructor(public navCtrl: NavController,  public dados : ServiceProvider  ) {
 		
    }



// metodo para listar os episodios ao iniciar
  ionViewDidLoad() {
    this.dados.load().then(data => {
        this.obj = data;
        this.result = this.obj;
      });
  }


Mudarestado(el) {
        var display = document.getElementById(el).style.display;
        if(display == "none")
            document.getElementById(el).style.display = 'block';
        else
            document.getElementById(el).style.display = 'none';
    }


}
