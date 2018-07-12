import {SDKName} from '../../config';
import util from '../../util';
import debug from 'debug';

export default class SpectrumAlertsService {
  constructor(client) {
    this._debug = debug(`${SDKName}:spectrum:alerts`);
    this._client = client;
    this._basePath = '/spectrum/metrics/alert';
  }
  
  // todo: add Actions: list
  /**
   * describe a single alert.
   * @param params
   * @returns {Promise}
   */
  list(params = {}, callback) {
    return new Promise((resolve,reject)=> {
    
    });
  }
  
  // todo: add Actions: list all
  /**
   * describe all alerts.
   * @param params
   * @returns {Promise}
   */
  listAll(params = {}, callback) {
    return new Promise((resolve,reject)=> {
    
    });
  }
  
  // todo: add Actions: create
  /**
   * create an alert.
   * @param params
   * @returns {Promise}
   */
  create(params = {}, callback) {
    return new Promise((resolve,reject)=> {
    
    });
  }
  
  // todo: add Actions: update
  /**
   * update an existing alert.
   * @param params
   * @returns {Promise}
   */
  update(params = {}, callback) {
    return new Promise((resolve,reject)=> {
    
    });
  }
  
  // todo: add Actions: delete
  /**
   * delete an existing alert.
   * @param params
   * @returns {Promise}
   */
  delete(params = {}, callback) {
    return new Promise((resolve,reject)=> {
    
    });
  }
}