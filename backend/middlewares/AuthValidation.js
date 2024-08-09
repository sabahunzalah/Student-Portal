import Joi from "joi";

const SignupValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(3).max(100).required(),
        role: Joi.string().valid("register", "admin-portal", "student-portal").required(),
    });
    
    const { error } = schema.validate(req.body);
    
    if (error) {
        return res.status(400).send({ message: "Bad Request", error: error.details[0].message });
    }
    
    next();
};

const LoginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(3).max(100).required(),
    });
    
    const { error } = schema.validate(req.body);
    
    if (error) {
        return res.status(400).send({ message: "Bad Request", error: error.details[0].message });
    }
    
    next();
};

export {
    SignupValidation,
    LoginValidation,
};
