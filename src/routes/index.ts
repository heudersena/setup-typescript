import { Router } from "express";
import { HomeController } from "../controllers/HomeController";

const route = Router();

const homeController = new HomeController();

route.get("/", homeController.index);

export { route };
