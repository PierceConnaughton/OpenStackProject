

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.database().ref('/mygpus');

/*
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});
*/

const getGpusFromDatabase = (res) => {
    let gpus = [];
    return db.on(
        'value',
        snapshot => {
            snapshot.forEach(gpu => {
                gpu.push({
                    id: gpu.key,
                    brand: gpu.val().brand,
                    manufacturer: gpu.val().manufacturer,
                    series: gpu.val().series,
                    color: gpu.val().color,
                    hardDrive: gpu.val().hardDrive
                });
            });
            res.status(200).json(gpus);
        },
        error => {
            res.status(error.code).json({
                message: `Error: ${error.message}`
            });
        }
    );

};

exports.addGpu = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
        if (req.method !== 'POST') {
            return res.status(401).json({
                message: 'Not allowed'
            });
        }
        
        const brand = req.query.brand;
        const manufacturer = req.query.manufacturer;
        const series = req.query.series;
        const color = req.query.color;
        const hardDrive = req.query.hardDrive;

        
        db.push({ brand,manufacturer,series,color,hardDrive });
        getGpusFromDatabase(res);
    });
});

exports.deleteGpu = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
      if(req.method !== 'DELETE') {
        return res.status(401).json({
          message: 'Not allowed dude...'
        })
      }
      const id = req.query.id;
      //admin.database().ref(`/mybooks/${id}`).remove();
      db.child(id).remove();
      getGpusFromDatabase(res);
    });
  });

exports.getGpus = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
        if (req.method !== 'GET') {
            return res.status(404).json({
                message: 'Not allowed'
            })
        }
        getGpusFromDatabase(res);
    });
});