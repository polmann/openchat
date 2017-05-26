'use strict'

import path from 'path'

/**
 * This class is the base to all Express controllers, and should be extended on
 * controllers.
 * Provide a way to create a route and to parse the path to this route.
 */

export default class ExpressController {
  /**
   *
   * @param router {Express.router}
   * @param config {object}
   */
  constructor (router, prefix) {
    this.prefix = prefix || ''
    this.router = router
    this.name = this.getName() || ''
    this.routes = []
    this.initRoutes()
  }

  /**
   * Return the name of the controller, it'll be used on the path.
   * Must be implemented on a child Class
   * @returns {string}
   */
  getName () {
    throw new Error('Must be implemented on a child class')
  }

  /**
   * Return all routes registered in this controller.
   * @returns {array[string]}
   */
  getRoutes () {
    return this.routes
  }

  /**
   * Init the express controllers' routes.
   * Must be implemented on a child Class.
   */
  initRoutes () {
    throw new Error('Must be implemented on a child class')
  }

  /**
   * Resolve path by adding the api prefix (if any) and the controller's name to the path
   * @param  {string} routePath The end-point path
   * @return {string}            The full resolved path
   */
  resolvePath (routePath) {
    return path.join(this.prefix, this.name, routePath)
  }

  /**
   * Register a get route to the router
   * @param  {string}   routePath     The end-point path
   * @param  {Function} callback [description]
   */
  get (routePath, callback) {
    let path = this.resolvePath(routePath)
    this.router.get(path, callback.bind(this))
    this.routes.push('GET ' + path)
  }

  /**
   * Register a post route to the router
   * @param  {string}   routePath     The end-point path
   * @param  {Function} callback [description]
   */
  post (routePath, callback) {
    let path = this.resolvePath(routePath)
    this.router.post(path, callback.bind(this))
    this.routes.push('POST ' + path)
  }

  /**
   * Register a put route to the router
   * @param  {string}   routePath     The end-point path
   * @param  {Function} callback [description]
   */
  put (routePath, callback) {
    let path = this.resolvePath(routePath)
    this.router.put(path, callback.bind(this))
    this.routes.push('PUT ' + path)
  }

  /**
   * Register a delete route to the router
   * @param  {string}   routePath     The end-point path
   * @param  {Function} callback [description]
   */
  delete (routePath, callback) {
    let path = this.resolvePath(routePath)
    this.router.delete(path, callback.bind(this))
    this.routes.push('DELETE ' + path)
  }

  /**
   * Register an all route to the router
   * @param  {string}   routePath     The end-point path
   * @param  {Function} callback [description]
   */
  all (routePath, callback) {
    let path = this.resolvePath(routePath)
    this.router.all(path, callback.bind(this))
    this.routes.push('ALL ' + path)
  }
}
