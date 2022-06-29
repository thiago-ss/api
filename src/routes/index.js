import express from 'express'
import user from './userRoutes.js'
import task from './taskRoutes.js'

const routes = (app) => {
  // app.route('/').get((req, res) => {
  //   res.status(200).send('API rodando')
  // })

  app.use(express.json(), user, task)
}

export default routes
