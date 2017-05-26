'use strict'

import path from 'path'
import http from 'http'
import EventEmitter from 'events'
import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import IndexController from './rest/controllers/index'
import SocketManager from './rtc/socket-manager'

export default class Server {
  constructor (config) {
    this.config = config
    this.express = express()
    this.router = express.Router()
    this.httpServer = http.Server(this.express)
    this.controller = null
    this.eventEmitter = new EventEmitter()
    this.init()
  }

  init () {
    this.initDatabase()
    // this.initRestControllers()
    this.initExpress()
    this.initRoutes()
    this.initSocketManager()
    this.httpServer.listen(this.config.port, () => {
      console.log('listening on *:', this.config.port)
    })
  }

  initDatabase () {}

  initExpress () {
    this.express.use(compression())
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({extended: true}))
    for (let i = 0; i < this.config.resourcesFolders.length; i++) {
      this.express.use(express.static(this.config.resourcesFolders[i]))
    }
    // this.express.use(this.router)
  }

  initRestControllers () {
    this.controller = new IndexController(this.router, this.config.apiPrefix)
  }

  initRoutes () {
    this.express.get('/docs', (req, res) => res.sendFile(path.join(__dirname, '..', 'static', 'docs', 'index.html')))
    this.express.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', '/index.html')))
  }

  initSocketManager () {
    this.socketManager = new SocketManager(this.httpServer, this.eventEmitter)
  }
}
