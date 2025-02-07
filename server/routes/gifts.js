import express from "express";
import GiftsController from "../controllers/gifts.js";
// import path from "path";
// import { fileURLToPath } from "url";
// import giftData from "../data/gifts.js";

const router = express.Router();

router.get("/", GiftsController.getGifts);
router.get("/:giftId", GiftsController.getGiftById);

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// router.get("/", (req, res) => {
//   res.status(200).json(giftData);
// });

// router.get("/:giftId", (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, "../public/gift.html"));
// });

export default router;