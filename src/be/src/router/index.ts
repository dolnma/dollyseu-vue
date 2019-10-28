// import {Router} from 'express';
import {DefaultController} from "../controller/DefaultController";
import {UserController} from "../controller/UserController";

// const router = Router();
//
// router.get("/", DefaultController.index);
// router.get("/users", UserController.all)
//
// export default router;

export default [{
    method: "get",
    route: "/",
    controller: DefaultController,
    action: "index"
}, {
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}];
