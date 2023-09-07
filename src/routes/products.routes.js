import { Router } from "express";
const router = Router()

import * as productsCrtl from '../controllers/products.controller'

router.get('/', productsCrtl.createProducts)
router.post('/', productsCrtl.getProducts)
router.get('/', productsCrtl.getProducts)
router.get('/', productsCrtl.getProducts)
router.get('/', productsCrtl.getProducts)


export default router;