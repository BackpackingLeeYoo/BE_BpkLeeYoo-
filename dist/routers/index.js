"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
var auth_router_1 = __importDefault(require("./auth-router"));
// import userRouter from "./user-router";
router.use("/auth", auth_router_1.default);
// router.use("/user", userRouter);
exports.default = router;
