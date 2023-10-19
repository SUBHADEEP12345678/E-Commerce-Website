import express from "express";
import { requireSignIn, isAdmin } from "../middlewares/authMiddlewares.js";
import { createProductController } from "../controllers/productController.js";
import formidable from "express-formidable";
//import ExpressFormidable from "express-formidable";
const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

export default router;
