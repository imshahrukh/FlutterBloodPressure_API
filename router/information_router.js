const express = require("express");
const informationController = require("./../controller/information");
const infomationRouter = express.Router();
// POST
// localhost:8000/v1/member

infomationRouter.route("/information").post(informationController.addNewBlood);
//   .get(informationController.getAllBlood);

infomationRouter
  .route("/information/:id")
  .get(informationController.getAllBlood);
// .patch(memberController.updateMemberByID);
module.exports = infomationRouter;
