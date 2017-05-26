'use strict'

import ExpressController from '../express-controller'

export default class IndexController extends ExpressController {
  getName () {
    return ''
  }

  initRoutes () {
    this.get('/', this.helloWorld)
  }

  helloWorld (req, res) {
    res.send('Hello World!')
  }
}
