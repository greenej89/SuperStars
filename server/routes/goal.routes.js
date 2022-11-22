const GoalController = require('../controllers/goal.controller')

module.exports = (app) => {
    app.get('/api/goals', GoalController.findAllGoals)
    app.post('/api/goals', GoalController.createGoal)
    app.get('/api/goals/:id', GoalController.findGoalById)
    app.put('/api/goals/:id', GoalController.updateGoal)
    app.delete('/api/goals/:id', GoalController.deleteGoal)
}