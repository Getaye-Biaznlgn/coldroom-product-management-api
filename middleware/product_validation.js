const {body, validationResult} = require('express-validator')

exports.productValidation=[
    body('name').trim()
    .isLength({min:1}),
]

exports.validationResult= (req, res, next)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422)
         .json({
            msg:"validation faild",
            errors: errors.array()
         })
    }
    next()
}