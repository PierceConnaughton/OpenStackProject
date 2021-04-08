
import { Pc } from "./pcModel";


function readPcs(req, res, options = []) {
   
    const { title, price,limit, sum } = req.query;
    let filter = {};

    if (title) {

        filter.title = { $regex: `^${title}$`, $options: 'i' };
    }

    const limitNumber = parseInt(limit)

    Pc.find(filter)
        .limit(limitNumber)
        .then((result) => {
            res.json(result)
        })
        .catch((error) =>
            res.status(500).json({ error: 'An error' + error }))

}

function readPc(req, res) {
    const id = req.params.id;
    Pc.findById(id)
        .then((result) => {
            console.log('result' + result.uri);

            res.json(result)
        })
        .catch((error) =>
            res.status(404).json({ error: 'not found' }))
}


function createPc(req, res) {
    let pcDoc = new Pc(req.body);
    pcDoc.save()
        .then((result) => {
            console.log('pc saved');
            res.location(result.uri)
                .status(201)
                .json({ id: result._id, uri: result.uri })
        })
        .catch((error) => {
            res.status(412).json({ status: 'fail', message: 'not created' + error })
        });
    console.log('Promising to save');
}

function updatePc(req, res) {
    const id = req.params.id;

    console.log('updating pc' + id)

    
    Pc.findByIdAndUpdate({_id: id}, {...req.body}).
    then((result) => {
        if (result) {
            res.status(200).send({ message: 'updated' })
            M
        }
        else {
            res.status(404).send({ message: 'not found' })
        }
    })
    .catch((error) =>
        res.status(404).send({ message: 'not found' + error }));

}

function deletePc(req, res) {
    const id = req.params.id;

    Pc.findByIdAndDelete(id).
        then((result) => {
            if (result) {
                res.status(203).send({ message: 'deleted' })
            }
            else {
                res.status(404).send({ message: 'not found' })
            }
        })
        .catch((error) =>
            res.status(404).send({ message: 'not found' + error }));
}



export default { createPc, deletePc, readPcs, readPc, updatePc }
