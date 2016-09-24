import {Vehicle} from './vehicle.js';

export class Car extends Vehicle{
     constructor(licenseNum, model, latLong){
          super(licenseNum, model, latLong);
          this.gpsEnabled = false;
          this.miles = null;
          this.make = null;
     }
     start(){
          super.start();
          console.log('Starting Car');          
     }
     static getCompanyName(){
          super.getCompanyName();
          console.log('My Other Company');
     }
}