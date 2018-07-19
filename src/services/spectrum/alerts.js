import {SDKName} from '../../config';
import util from '../../util';
import debug from 'debug';


export default class SpectrumAlertsService {
  constructor(client) {
    this._debug = debug(`${SDKName}:spectrum:alerts`);
    this._client = client;
    this._basePath = '/spectrum/metrics/alert';
  }
  
  /**
   * describe a single alert.
   * @param params
   * @returns {Promise}
   */
  list(params = {}, callback) {
    return new Promise((resolve,reject)=> {
      this._debug('initiating a new list request, id=', params.alertId);
  
      const url = `${this._basePath}/${params.alertId}?accountId=${params.accountId}`;
      const req = this._client._newRequest('GET', url);
      
      this._debug('making list request');
      this._client._requireOK(this._client._doRequest(req))
        .then((res) => {
          this._debug('promise resolved');
          util.resolveOnSuccess(res.response.items, callback, resolve);
        })
        .catch((err) => {
          this._debug('promise rejected', err);
          util.rejectOnFailure(err.toString(), callback, reject);
        });
    });
  }
  
  /**
   * describe all alerts.
   * @param params
   * @returns {Promise}
   */
  listAll(params = {}, callback) {
    return new Promise((resolve,reject)=> {
      this._debug('initiating a new listAll request');
  
      const url = `${this._basePath}?accountId=${params.accountId}`;
      const req = this._client._newRequest('GET', url);
      
      this._debug('making list request');
      this._client._requireOK(this._client._doRequest(req))
        .then((res) => {
          this._debug('promise resolved');
          util.resolveOnSuccess(res.response.items, callback, resolve);
        })
        .catch((err) => {
          this._debug('promise rejected', err);
          util.rejectOnFailure(err.toString(), callback, reject);
        });
    });
  }
  
  /**
   * create an alert.
   * @param params
   * @returns {Promise}
   */
  create(params = {}, callback) {
    return new Promise((resolve,reject)=> {
      this._debug('initiating a new create alert request, params=', params);
      
      this._debug('preparing body');
      const body = {alert: Object.assign({}, params)};
      this._debug('body=', body);
      
      const url = `${this._basePath}?accountId=${params.accountId}`;
      const req = this._client._newRequest('POST', url, body);
      
      this._debug('making create alert request');
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
   * update an existing alert.
   * @param params
   * @returns {Promise}
   */
  // todo: check for correct alertId
  update(params = {}, callback) {
    return new Promise((resolve,reject)=> {
      this._debug('initiating a new update alert request, id=', params.alertId);
      
      this._debug('preparing body');
      const body = {alert: Object.assign({}, params)};
      delete body.alert.accountId;
      this._debug('body=', body);
      
      const url = `${this._basePath}/${params.alertId}?accountId=${params.accountId}`;
      const req = this._client._newRequest('PUT', url, body);
      
      this._debug('making update alert request');
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
   * delete an existing alert.
   * @param params
   * @returns {Promise}
   */
  delete(params = {}, callback) {
    return new Promise((resolve,reject)=> {
      if (!util.isValid('id', params.id, callback, reject)) {
        return;
      }
      
      this._debug('initiating a new delete request, id=', params.id);
      
      const url = `${this._basePath}/${params.id}?accountId=${params.accountId}`;
      const req = this._client._newRequest('DELETE', url);
      
      this._debug('making delete alert request');
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
}