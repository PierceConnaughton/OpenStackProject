

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const admin = require('firebase-admin');

admin.initializeApp();

const dbgpu = admin.database().ref('/mygpus');

const dbcpu = admin.database().ref('/mycpus');

const dbpc = admin.database().ref('/mypcs');

exports.addAdminRole = functions.https.onCall((data) => {

  // add custom claim to user
  // setCustomerClaims is provided by firebase SDK functionality
  return admin.auth().getUserByEmail(data.email).then(user =>{
      return admin.auth.setCustomuserClaims(user.uid, {
          admin:true
      })
  }).then(() => {
      return{
          message: `${data.email} setup admin`
      }
  }).catch(err => {
      return err;
  })
})

exports.removeAdminRole = functions.https.onCall((data) => {

  // add custom claim to user
  return admin.auth().getUserByEmail(data.email).then(user =>{
      return admin.auth.setCustomuserClaims(user.uid, null)
  }).then(() => {
      return{
          message: `${data.email} removed as admin`
      }
  }).catch(err => {
      return err;
  })
})

/*
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});
*/

const getGpusFromDatabase = (res) => {
    let gpus = [];
    return dbgpu.on(
        'value',
        snapshot => {
            snapshot.forEach(gpu => {
                gpus.push({
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

const getPcsFromDatabase = (res) => {
  let parts = [];
  return dbpc.on(
      'value',
      snapshot => {
          snapshot.forEach(part => {
              parts.push({
                  id: part.key,
                  asin: part.val().asin,
                  title: part.val().title,
                  value: part.val().value,
                  rating: part.val().rating,
                  image: part.val().image,
                  link: part.val().link,
                  userID: part.val().userID
                  
              });
          });
          res.status(200).json(parts);
      },
      error => {
          res.status(error.code).json({
              message: `Error: ${error.message}`
          });
      }
  );

};

const getCpusFromDatabase = (res) => {
  let cpus = [];
  return dbcpu.on(
      'value',
      snapshot => {
          snapshot.forEach(cpu => {
              cpus.push({
                  id: cpu.key,
                  model: cpu.val().model,
                  manufacturer: cpu.val().manufacturer,
                  speed: cpu.val().speed,
                  processors: cpu.val().processors,
              });
          });
          res.status(200).json(cpus);
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

        
        dbgpu.push({ brand,manufacturer,series,color,hardDrive });
        getGpusFromDatabase(res);
    });
});



exports.addCpu = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
      if (req.method !== 'POST') {
          return res.status(401).json({
              message: 'Not allowed'
          });
      }
      
      const model = req.query.model;
      const manufacturer = req.query.manufacturer;
      const speed = req.query.speed;
      const processors = req.query.processors;
 
      dbcpu.push({ model,manufacturer,speed,processors });
      getCpusFromDatabase(res);
  });
});

exports.addPart = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
      if (req.method !== 'POST') {
          return res.status(401).json({
              message: 'Not allowed'
          });
      }
      
      const asin = req.query.asin;
      const title = req.query.title;
      const value = req.query.value;
      const rating = req.query.rating;
      const image = req.query.image;
      const link = req.query.link;
      const userID = req.query.userID;

      

      
      dbpc.push({ asin,title,value,rating,image,link,userID });
      getPcsFromDatabase(res);
  });
});

exports.deleteGpu = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
      if(req.method !== 'DELETE') {
        return res.status(401).json({
          message: 'Not allowed'
        })
      }
      const id = req.query.id;
      //admin.database().ref(`/mybooks/${id}`).remove();
      dbgpu.child(id).remove();
      getGpusFromDatabase(res);
    });
  });

  exports.deleteCpu = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
      if(req.method !== 'DELETE') {
        return res.status(401).json({
          message: 'Not allowed'
        })
      }
      const id = req.query.id;
      //admin.database().ref(`/mybooks/${id}`).remove();
      dbcpu.child(id).remove();
      getCpusFromDatabase(res);
    });
  });  

  exports.deletePart = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
      if(req.method !== 'DELETE') {
        return res.status(401).json({
          message: 'Not allowed'
        })
      }
      const id = req.query.id;
      //admin.database().ref(`/mybooks/${id}`).remove();
      dbpc.child(id).remove();
      getPcsFromDatabase(res);
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

exports.getCpus = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
      if (req.method !== 'GET') {
          return res.status(404).json({
              message: 'Not allowed'
          })
      }
      getCpusFromDatabase(res);
  });
});

exports.getParts = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
      if (req.method !== 'GET') {
          return res.status(404).json({
              message: 'Not allowed'
          })
      }
      getPcsFromDatabase(res);
  });
});

exports.updateGpu = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
      if(req.method !== 'PUT') {
        return res.status(401).json({
          message: 'Not allowed'
        })
      }
      const id = req.query.id;
      //admin.database().ref(`/mybooks/${id}`).remove();
      dbpc.child(id).remove();

      const brand = req.query.brand;
      const manufacturer = req.query.manufacturer;
      const series = req.query.series;
      const color = req.query.color;
      const hardDrive = req.query.hardDrive;

      
      dbgpu.push({ brand,manufacturer,series,color,hardDrive });
      getGpusFromDatabase(res);
    });
  });

  exports.updateCpu = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
      if(req.method !== 'PUT') {
        return res.status(401).json({
          message: 'Not allowed'
        })
      }

      const id = req.query.id;
      //admin.database().ref(`/mybooks/${id}`).remove();
      dbcpu.child(id).remove();

      const model = req.query.model;
      const manufacturer = req.query.manufacturer;
      const speed = req.query.speed;
      const processors = req.query.processors;
 
      dbcpu.push({ model,manufacturer,speed,processors });

      getCpusFromDatabase(res);
    });
  });  


  