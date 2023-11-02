const { Router } = require('express')
const {studentController} = require('../controllers/students.controllers')

const router = Router()

router.get('/students',studentController.getStudents)
router.post('/students',studentController.postStudents)
router.patch('/students/:id',studentController.patchStudents)
router.delete('/students/:id',studentController.deleteStudents)

module.exports = router