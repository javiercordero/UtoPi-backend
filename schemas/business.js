var Joi = require('joi');
module.exports = Joi.object().keys({
// defining the scehma  of business
  _rev: Joi.string(),
  _id: Joi.string(),
  name: Joi.string().required()

});
