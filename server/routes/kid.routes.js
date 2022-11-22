const KidController = require('../controllers/kid.controller')

module.exports = (app) => {
    app.get('/api/kids', KidController.findAllKids)
    app.post('/api/kids', KidController.createKid)
    app.get('/api/kids/:id', KidController.findKidById)
    app.put('/api/kids/:id', KidController.updateKid)
    app.delete('/api/kids/:id', KidController.deleteKid)
}