
//const db = req.app.get("db")
// extracts the database and stores it into a variable. 

const create = (req, res) => {
    const db = req.app.get("db");

    db.create_product([ req.body.name, req.body.description, req.body.price, req.body.image])
    .then( () => res.sendStatus(200))
    .catch( err => {
        res.status(500).send(console.log(err))
    });
}

const getOne = (req, res) => {
    const db = req.app.get("db");
    
    db.read_product(+req.params.id)
    .then( product => res.status(200).json( product ))
    .catch( err => res.status(500).send(console.log('ERRRRRRRRR', err)))
}

const getAll = (req, res) => {
    const db = req.app.get("db");

    db.read_productS()
    .then( products => {
        res.status(200).json( products )
    }).catch( err => {
        res.status(500).send(console.log("this is an errrrrrrrrr" ,err))
    })
}


const update = (req, res) => {
    const db = req.app.get("db");

    db.update_product()
    .then(() => {
        res.sendStatus(200)
    }).catch( err => {
        res.status(500).send(console.log(err))
    })
}

const remove = (req, res) => {
    const db = req.app.get("db");

    db.delete_product()
    .then(() => {
        res.sendStatus(200)
    }).catch(err => {
        console.log(err)
    })
}



module.exports = {
    create,
    getOne, 
    getAll,
    update,
    remove
}