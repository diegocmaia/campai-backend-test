import express from 'express'
import morgan from 'morgan'

import * as searchController from '../controllers/search'

const router = express.Router()

router.use(morgan('dev'))

router.get('/search', searchController.searchDataByInput)

export default router
