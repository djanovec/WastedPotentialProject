const mongoose = require('mongoose');

collection.find({})
      .skip(1).limit(1).project({b:1}).toArray().then(function(docs) {
        test.equal(1, docs.length);
        test.equal(null, docs[0].a);
        test.equal(2, docs[0].b);

        db.close()
     })