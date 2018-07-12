import ActionsService from './actions';
import AlertsService from './alerts';
import EventsService from './events';
import MetricsService from './metrics';

export default class SpectrumService {
  constructor(client) {
    this.Actions = new ActionsService(client);
    this.Alerts = new AlertsService(client);
    this.Events = new EventsService(client);
    this.MetricsService = new MetricsService(cleint);
  }
}
