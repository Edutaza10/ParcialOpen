export class OutdoorCenters {
  #id: string;
  #name: string;
  #activityType: string;
  #capacity: number;
  #latitude: number;
  #longitude: number;
  constructor(props:{id: string, name: string, activityType: string, capacity: number, latitude: number, longitude: number}) {
    this.#id = props.id;
    this.#name = props.name;
    this.#activityType = props.activityType;
    this.#capacity = props.capacity;
    this.#latitude = props.latitude;
    this.#longitude = props.longitude;
  }

  get id() {
    return this.#id;
  }
  get name() {
    return this.#name;
  }
  get activityType() {
    return this.#activityType;
  }
  get capacity() {
    return this.#capacity;
  }
  get latitude() {
    return this.#latitude;
  }
  get longitude() {
    return this.#longitude;
  }
}
