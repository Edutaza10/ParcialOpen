

export class Outdoor {
  #id: number;
  #aquaticCenterld: number;
  #activityType:string;
  #participantName:string;
  #participants: number;
  #weatherTemperature:number;
  #reserveAt:number;
  constructor(props:{id:number,
    aquaticCenterld:number,
    activityType:string,
  participantName:string,
  participants:number,
  weatherTemperature:number,
  reserveAt:number,}) {
    this.#id = props.id;
    this.#aquaticCenterld=props.aquaticCenterld;
    this.#activityType=props.activityType;
    this.#participantName=props.participantName;
    this.#participants= props.participants;
    this.#weatherTemperature=props.weatherTemperature;
    this.#reserveAt=props.reserveAt;
  }
}
