const asyncHandler = (requestHandler)=>{
    return (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}


export {asyncHandler}


// same as below function
// const asyncHandler = () =>{}
// const asyncHandler = (func) => () =>{}
// const asyncHandler = (fn) => {async () => {}  }


// const asyncHandler = (fn) => async(req,res,next) => {
//     try {
//           await fn(req,res,next)
//     } catch (error) {
//          res.status(err.code || 500).json({
//             success: false,
//             mesage: err.message
//          })
//     }
// }

