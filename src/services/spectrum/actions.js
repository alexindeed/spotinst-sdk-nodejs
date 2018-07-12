import {SDKName} from '../../config';
import util from '../../util';
import debug from 'debug';

export default class SpectrumActionsService {
  constructor(client) {
    this._debug = debug(`${SDKName}:spectrum:actions`);
    this._client = client;
    this._basePath = '/spectrum/metrics/action';
  }
  
  // todo: add Actions: list
  /**
   * describe a single action.
   * @param params
   * @returns {Promise}
   */
  list(params = {}, callback) {
    return new Promise((resolve,reject)=> {
    
    });
  }
  
  // todo: add Actions: list all
  /**
   * describe all actions.
   * @param params
   * @returns {Promise}
   */
  listAll(params = {}, callback) {
    return new Promise((resolve,reject)=> {
    
    });
  }
  
  // todo: add Actions: create
  /**
   * create an action.
   * @param params
   * @returns {Promise}
   */
  create(params = {}, callback) {
    return new Promise((resolve,reject)=> {
    
    });
  }
  
  // todo: add Actions: update
  /**
   * update an existing action.
   * @param params
   * @returns {Promise}
   */
  update(params = {}, callback) {
    return new Promise((resolve,reject)=> {
    
    });
  }
  
  // todo: add Actions: delete
  /**
   * delete an existing action.
   * @param params
   * @returns {Promise}
   */
  delete(params = {}, callback) {
    return new Promise((resolve,reject)=> {
    
    });
  }
  
  
}


