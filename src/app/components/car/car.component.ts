import { Component } from '@angular/core';
import { CarApiService } from '../../services/car-api.service';
import { ICar } from '../../interfaces/car';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car',
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  @Input() carData?: ICar;
  @Output() carDeletedEvent = new EventEmitter<string>();
  carImageWidth: number = 300;

  constructor(private _carAPIService: CarApiService) { }

    deleteCar(carId:string) { 
    this._carAPIService.delCarDetails(carId).subscribe(result =>
      { 
        console.log(result);
        this.carDeletedEvent.emit("Car Deleted");
      });
  }
}
