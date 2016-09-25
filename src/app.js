import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleetDataService.js';


let dataService = new FleetDataService();
dataService.loadData(fleet);

//let car = dataService.getCarByLicense('AT9900');

//let cars = dataService.getCarsSortedByLicense();

//let cars = dataService.filterCarsByMake('e');

let cars = dataService.getCarsSortedByLicense();

for (let car of cars)
     console.log(car.license);

for (let car of cars)
    console.log(car.make);
    
for (let e of dataService.errors)
    console.log(e);

let car = dataService.getCarByLicense('AT9900');
console.log(car);