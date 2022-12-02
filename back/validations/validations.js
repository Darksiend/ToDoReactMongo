import { body } from "express-validator";

export const createToDoValidation = [
  body("todoName", "Invalid Title").isLength(3).isString(),
  body("todoDescription", "Put Text").isLength({ min: 5 }),
];
