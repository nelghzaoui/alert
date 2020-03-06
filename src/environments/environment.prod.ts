import { ApiConfig, Environment, SslPinning } from '@core/models/environments';

export const environment = new Environment('dev', 5, false, new ApiConfig('http://localhost:8080', SslPinning.NOCHECK));
