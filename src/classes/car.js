import {Vehicle} from './vehicle.js';

export class Car extends Vehicle{
     constructor(licenseNum){
          super(licenseNum);
          this.gpsEnabled = false;
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