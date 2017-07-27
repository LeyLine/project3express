// SEED FILE
//     a JavaScript that saves things to your database when you run it
//     (makes onboarding easier and it allows you to recreate the old
//      data in your DB after you delete things.)

const mongoose = require('mongoose');
                                    // database name
                                    //    |
  mongoose.connect(process.env.MONGODB_URI);
                               //         |
                               // use ironshop

// We have to connect the DB again here
// because seed.js is SEPARATE from app.js.


const Styles = require('../models/yoga-models.js');

const stylesInfoArray = [

{
style:"Ashtanga"
}
];


Styles.create(
  stylesInfoArray,

  (err, stylesResults) => {
    if (err) {
      console.log('DB ERROR');
      return;
    }

    stylesResults.forEach((oneStyle) =>
  {console.log('New Style' + oneStyle.style);
});
  }
);
