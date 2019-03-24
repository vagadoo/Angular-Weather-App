export class Forecast {

    constructor(
        condition: string,
        windSpeed: number,
        humidity: number,
        temperature: number,
        dateTime: Date) {
            this.condition = condition;
            this.windSpeed = windSpeed;
            this.humidity = humidity;
            this.temperature = temperature;
            this.dateTime = dateTime;
        }

    condition: string;
    windSpeed: number;
    humidity: number;
    temperature: number;
    dateTime: Date;
}
