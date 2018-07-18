import {SDKName} from '../../config';
import util from '../../util';
import debug from 'debug';

export default class SpectrumMetricsService {
  constructor(client) {
    this._debug = debug(`${SDKName}:spectrum:metrics`);
    this._client = client;
    this._basePath = '/spectrum/metrics';
  }
  
  /**
   * query for specific metric statistics
   * @param params todo: should we list out the params here?
   * @returns {Promise}
   */
  query(params = {}, callback) {
    return new Promise((resolve, reject) => {
      this._debug('initiating a new query request, params=', params);
      
      this._debug('preparing body');
      const body = params;
      this._debug('body=', body);
      
      const url = `${this._basePath}/metricStatisticsQuery?accountId=${params.accountId}`;
      const req = this._client._newRequest('POST', url, body);
      
      this._debug('making query request');
      this._client._requireOK(this._client._doRequest(req))
        .then((res) => {
          this._debug('promise resolved');
          util.resolveOnSuccess(res.response.items[0], callback, resolve);
        })
        .catch((err) => {
          this._debug('promise rejected', err);
          util.rejectOnFailure(err.toString(), callback, reject);
        });
    });
  }
  
  /**
   * publishes metric data points to Spotinst Spectrum
   * @param params
   * @returns {Promise}
   */
  report(params = {}, callback) {
    return new Promise((resolve, reject) => {
      this._debug('initiating a new report request, params=', params);
      const url = `${this._basePath}/metricData?accountId=${params.accountId}`;
      
      delete params.accountId;
  
      this._debug('preparing body');
      const body = {metricData: [params]};
      this._debug('body=', body);
      
      const req = this._client._newRequest('POST', url, body);
  
      this._debug('making report request');
      this._client._requireOK(this._client._doRequest(req))
        .then((res) => {
          this._debug('promise resolved');
          util.resolveOnSuccess(res.response, callback, resolve);
        })
        .catch((err) => {
          this._debug('promise rejected', err);
          util.rejectOnFailure(err.toString(), callback, reject);
        });
    });
  }
  
  /**
   * get metric metadata by filters.
   * @param params
   * @returns {Promise}
   */
  metricMetadata(params = {}, callback) {
    return new Promise((resolve, reject) => {
      this._debug('initiating a new metricMetadata request, params=', params);
  
      const url = `${this._basePath}/metricMetadata?namespace=${params.namespace}&dimension=${params.dimension}&metric=${params.metric}&accountId=${params.accountId}`;
      const req = this._client._newRequest('GET', url);
      
      this._debug('making metricMetadata request');
      this._client._requireOK(this._client._doRequest(req))
        .then((res) => {
          this._debug('promise resolved');
          util.resolveOnSuccess(res.response.items[0], callback, resolve);
        })
        .catch((err) => {
          this._debug('promise rejected', err);
          util.rejectOnFailure(err.toString(), callback, reject);
        });
    });
  }
}

