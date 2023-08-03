import express from "express";
import {
  createTour,
  getAllTour,
  deleteTour,
  getSingleTour,
  updateTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount
} from "./../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//create new tour
router.post("/api/v1/", verifyAdmin , createTour);

//update tour
router.put("/api/v1/:id", verifyAdmin , updateTour);

//delete tour
router.delete("/api/v1/:id", verifyAdmin , deleteTour);

//get single tour
router.get("/:id", getSingleTour);

//get all tours
router.get("/", getAllTour);

// get tour by search
router.get('/search/getTourBySearch',getTourBySearch);
router.get('/search/getFeaturedTours',getFeaturedTour);
router.get('/search/getTourCount',getTourCount);

export default router;
