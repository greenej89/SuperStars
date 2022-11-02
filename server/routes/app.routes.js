const KidController = require('../controllers/kid.controller')
const GoalController = require('../controllers/goal.controller')

module.exports = (app) => {
    app.get('/api/kids', KidController.findAllKids)
    app.post('/api/kids', KidController.createKid)
    app.get('/api/kids/:id', KidController.findKidById)
    app.put('/api/kids/:id', KidController.updateKid)
    app.delete('/api/kids/:id', KidController.deleteKid)

    app.get('/api/goals', GoalController.findAllGoals)
    app.post('/api/goals', GoalController.createGoal)
    app.get('/api/goals/:id', GoalController.findGoalById)
    app.put('/api/goals/:id', GoalController.updateGoal)
    app.delete('/api/goals/:id', GoalController.deleteGoal)
}