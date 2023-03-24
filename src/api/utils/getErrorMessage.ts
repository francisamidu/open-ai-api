const getErrorMessage = (error: any) => {
  return error instanceof Error ? error.message : "Unknown Error";
};
export default getErrorMessage;
