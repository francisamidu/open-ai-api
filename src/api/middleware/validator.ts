/**
 * Metadata about a validated field.
 */
export declare type Meta = {
  /**
   * The express request from which the field was validated
   */
  req: Request;
  /**
   * Which of the request objects the field was picked from
   */
  location: Location;
  /**
   * The full path of the field within the request object.
   *
   * @example
   * const meta = { req, location: 'body', path: 'foo.bar' }; // req.body.foo.bar
   */
  path: string;
};
export interface Request {
  [k: string]: any;
  body?: any;
  cookies?: Record<string, any>;
  headers?: Record<string, any>;
  params?: Record<string, any>;
  query?: Record<string, any>;
}
export declare type Location =
  | "body"
  | "cookies"
  | "headers"
  | "params"
  | "query";

const validate = (input: any, { req }: Meta) => {
  if (input !== req?.body?.prompt) {
    throw new Error("Please provide a prompt");
  }
  return true;
};
export default validate;
