const Express = require('express');
const hotelRouter = require('./hotels');

const APIRouter = Express.Router();

APIRouter.use('/hotel', hotelRouter);

module.export = APIRouter;
