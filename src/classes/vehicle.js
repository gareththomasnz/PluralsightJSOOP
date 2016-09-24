export class Vehicle{
     constructor(licenseNum){
          this.licenseNum = licenseNum;
          this.gpsEnabled = true;
     }
     start(){
          console.log('starting vehicle');
     }
     static getCompanyName(){
          console.log('My Company');
     }
}