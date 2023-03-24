import { ValidationError } from "express-validator";
const errorFormatter = ({ msg, param, value }: ValidationError) => {
  console.log({ msg, param, value });
  if (!value && param === "prompt") {
    return {
      message: "Please provide prompt is required",
      success: false,
    };
  }
};
export default errorFormatter;
