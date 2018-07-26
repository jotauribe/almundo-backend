var data = require('../data/data');

exports.gethotels = function (req, res, next) {

    return res.status(200).json({
      hotels: data
  });

};

exports.gethotel = function (req, res, next) {

  for(let i = 0; i < data.length; i++){
      if(data[i].id === req.params.id){

          return res.status(200).json({
              hotel: data[i]
          });
      }
  }

  return res.status(500).json({
    response: 'No se ha encontrado el hotel especificado'
  });

};

exports.gethotelforstars = function (req, res, next) {

    var hotels = [];

    for(let i = 0; i < data.length; i++){
        if(data[i].stars == req.params.starsId){
            hotels.push(data[i]);
        }
    }
    if(!hotels.length){
        return res.status(500).json({
            response: 'No se han encontrado hoteles con las estrellas de su preferencia'
        });
    }else{
        return res.status(200).json({
            response: hotels
        });
    }




};