const model = require("../models/bookinfo")

exports.logRequestPaths = (req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
};

exports.ninteeneightyfourinfo = (req, res, next) => {
  model.find({id: "1984"}, (error, book) => {
    if (error) next(error);
    req.data = book;
    next();
  });

};

exports.Catcherinfo = (req, res, next) => {
  model.find({id: "Catcher"}, (error, book) => {
    if (error) next(error);
    req.data = book;
    next();
  });
};

exports.CompanyTowninfo = (req, res, next) => {
  model.find({id: "CompanyTown"}, (error, book) => {
    if (error) next(error);
    req.data = book;
    next();
  });
};
