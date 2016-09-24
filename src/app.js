import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';


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



let c = new Car('A123');
let drone = new Drone('A123', 'Flyer');

console.log("ID: " + drone.id + " is called " + drone.name);

console.log(c.licenseNum);
console.log(c.gpsEnabled);

Car.getCompanyName();
