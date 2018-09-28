const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://jd2rogers2:jd2rogers2@ds115283.mlab.com:15283/learning-mean', ['images']);

router.get('/images', (req, res) => {
  db.images.find((err, images) => {
    if (err) {
      res.send(err);
    }
    res.json(images);
  });
});

router.get('/image/:id', (req, res) => {
  db.images.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, image) => {
    if (err) {
      res.send(err);
    }
    res.json(image);
  });
});

router.post('/image', (req, res) => {
  db.images.save(req.body, (err, image) => {
    if (err) {
      res.send(err);
    }
    res.json(image);
  });
});

router.delete('/image/:id', (req, res) => {
  db.images.remove({_id: mongojs.ObjectId(req.params.id)}, (err, image) => {
    if (err) {
      res.send(err);
    }
    res.json(image);
  });
});

router.put('/image/:id', (req, res) => {
  db.images.update({_id: mongojs.ObjectId(req.params.id)}, req.body, {}, (err, image) => {
    if (err) {
      res.send(err);
    }
    res.json(image);
  });
});

module.exports = router;
