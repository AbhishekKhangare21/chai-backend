// this is wrapper function

// #1 - using promises
// const asyncHandler = (requestHandler) => {
//   (req, res, next) => {
//     Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err)); //use chatgpt to understand this code
//   };
// };

// export { asyncHandler };

// #2 - using trycatch

// const asyncHandler = ()=>{}
// const asyncHandler = (func)=>{const subFunc=()=>{}}
// remove curly braces and make function anonymous
// const asyncHandler = (func)=>()=>{}
// make it async
// const asyncHandler = (func)=>async()=>{}

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
