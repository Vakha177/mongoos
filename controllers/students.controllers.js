const Student = require("../models/Student.model");

module.exports.studentController = {
  
  postStudents : (req, res) => {
    Student.create({
      name: 'имя студента',
      phone: 'номер телефона',
      age: 19
    }).then(() => {
      res.json("Студент добавлен")
    })
},

  getStudents : (req, res) => {
   Student.find({}).then(() => {
    res.json(`Все студенты`)
   })

  },
 
  deleteStudents: (req, res) =>{
    Student.findByIdAndRemove(req.params.id).then(() => {
      res.json(`Студент по id ${req.params.id} удален`)
  });
  },
    
  patchStudents : (req, res) =>{
    Student.findByIdAndUpdate(req.params.id, {name: req.body.name}).then(() => {
      res.json('Имя изменен')
    }
    )
  }

  }