import {SDKName} from '../../config';
import util from '../../util';
import debug from 'debug';

export default class SpectrumActionsService {
  constructor(client) {
    this._debug = debug(`${SDKName}:spectrum:actions`);
    this._client = client;
    this._basePath = '/spectrum/metrics/action';
  }
  
  /**
   * describe a single action.
   * @param params
   * @returns {Promise}
   */
  list(params = {}, callback) {
    return new Promise((resolve,reject)=> {
      this._debug('initiating a new list request, id=', params.actionId);
  
      const url = `${this._basePath}/${params.actionId}?accountId=${params.accountId}`;
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
   * describe all actions.
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
   * create an action.
   * @param params
   * @returns {Promise}
   */
  create(params = {}, callback) {
    return new Promise((resolve,reject)=> {
      this._debug('initiating a new create action request, params=', params);
      
      this._debug('preparing body');
      const body = {action: Object.assign({}, params)};
      delete body.action.accountId;
      this._debug('body=', body);
      
      const url = `${this._basePath}?accountId=${params.accountId}`;
      const req = this._client._newRequest('POST', url, body);
      
      this._debug('making create action request');
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
   * update an existing action.
   * @param params
   * @returns {Promise}
   */
  // todo: id is checked in delete but not here
  update(params = {}, callback) {
    return new Promise((resolve,reject)=> {
      this._debug('initiating a new update action request, id=', params.actionId); // todo should this be actionId?
      
      this._debug('preparing body');
      const body = {action: Object.assign({}, params)};
      delete body.action.accountId;
      this._debug('body=', body);
      
      const url = `${this._basePath}/${params.actionId}?accountId=${params.accountId}`;
      const req = this._client._newRequest('PUT', url, body);
      
      this._debug('making update action request');
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
  
  // todo: both accountId and actionId are needed in many functions, we should be explicit
  /**
   * delete an existing action.
   * @param params
   * @returns {Promise}
   */
  delete(params = {}, callback) {
    return new Promise((resolve,reject)=> {
      if (!util.isValid('id', params.id, callback, reject)) {
        return;
      }
      this._debug('initiating a new delete action request, id=', params.actionId);
      
      const url = `${this._basePath}/${params.id}?accountId=${params.accountId}`;
      const req = this._client._newRequest('DELETE', url);
      this._debug('making delete action request');
      
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


