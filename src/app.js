class Vehicle{
     constructor(licenseNum){
          this.licenseNum = licenseNum;
          this.gpsEnabled = true;
     }
}

class Drone extends Vehicle{
     //constructor(id, name){
     //   this._id = id;
     //   this._name = name;      
     //   }
     //   fly(){
     //       console.log("Drone " + this.id + " is flying");    
     //   }
        //get id(){
        //        return this._id + " TEMPORARY";        
        //}
        //set id(){
        //       this._id = value; 
        //}
        //get name(){
        //       return this._name + " TEMPORARY";   
        //}
        //set name(){
        //      this._name = value;   
        //}
}

//Drone.maxHeight = 2000;
//
//let drone = new Drone('A123', 'Flyer');
//let drone2 = new Drone('B456', 'Twirl');
//
//drone.maxHeight = 5000;
//        
//console.log("ID: " + drone.id + " is called " + drone.name);
//console.log("ID: " + drone2.id + " is called " + drone2.name);
//console.log(Drone.maxHeight);
//console.log(drone.maxHeight);
//
//drone.fly();
//drone2.fly();

class Car extends Vehicle{
     constructor(licenseNum){
          super(licenseNum);
          this.gpsEnabled = false;
     }     
}

let c = new Car('A123');

console.log(c.licenseNum);
console.log(c.gpsEnabled);
