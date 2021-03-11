import faker, { fake } from "faker";
import { Mappable } from "./CustomMap"

// we want each User to satisfy the Mappable Interface
// this is optional however!
export class User implements Mappable {
    // this is NOT initializing these props, happens in the constructor!
    name: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.name.firstName()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `User Name: ${this.name}`
    }
}