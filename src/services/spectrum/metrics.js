import {SDKName} from '../../config';
import util from '../../util';
import debug from 'debug';

export default class SpectrumMetricsService {
  constructor(client) {
    this._debug = debug(`${SDKName}:spectrum:metrics`);
    this._client = client;
    this._basePath = '/spectrum/metrics';
  }
  
  // todo: add Spectrum: query
  /**
   * query for specific metric statistics
   * @param params
   * @returns {Promise}
   */
  query(params = {}, callback) {
    return new Promise((resolve, reject) => {
    
    });
  }
  
  // todo: add Spectrum: report
  /**
   * publishes metric data points to Spotinst Spectrum
   * @param params
   * @returns {Promise}
   */
  report(params = {}, callback) {
    return new Promise((resolve, reject) => {
    
    });
  }
  
  // todo: add Spectrum: metric metadata
  /**
   * get metric metadata by filters.
   * @param params
   * @returns {Promise}
   */
  metricMetadata(params = {}, callback) {
    return new Promise((resolve, reject) => {
    
    });
  }
}

