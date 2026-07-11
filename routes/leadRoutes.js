const express = require("express");
const router = express.Router();

const {
  createLead,
  getLeads,
  updateLead,
  deleteLead,
} = require("../controllers/leadController");

const authMiddleware = require("../middleware/authMiddleware");

// Protected Routes
router.post("/", authMiddleware, createLead);
router.get("/", authMiddleware, getLeads);
router.put("/:id", authMiddleware, updateLead);
router.delete("/:id", authMiddleware, deleteLead);

module.exports = router;