import { Api, Environment, SslPinning } from '@core/models/environments';

export const environment = new Environment('dev', 5, false, new Api('http://localhost:8080', SslPinning.NOCHECK));

console.log(environment);
