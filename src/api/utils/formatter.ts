import { ValidationError } from "express-validator";
const errorFormatter = ({ msg, param, value }: ValidationError) => {
  console.log({ msg, param, value });
  if (value === "" && param === "createdAt") {
    return {
      message: "CreatedAt Date is required",
      success: false,
    };
  }
};
export default errorFormatter;
