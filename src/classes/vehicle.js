export class Vehicle{
     constructor(licenseNum, model, latLong){
          this.licenseNum = licenseNum;
          this.gpsEnabled = true;
          this.license = license;
          this.latLong = latLong;
     }
     start(){
          console.log('starting vehicle');
     }
     static getCompanyName(){
          console.log('My Company');
     }
}