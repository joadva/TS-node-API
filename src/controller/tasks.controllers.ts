

import {Handler} from 'express'
import { getConnection } from '../db'
import {nanoid} from 'nanoid';
import { write } from 'lowdb/adapters/FileSync';

export const getTasks:Handler = (req,res) => {
    const data = getConnection().get("tasks").value();
    return res.json(data);
};

export const createTasks : Handler = (req,res) => {
    const {name,description} = req.body
    const newTask = {
        name,
        description,
        id:nanoid()
    }

    try {
        getConnection().get('tasks').push(newTask).write()
        res.json(newTask)
    }catch(error) {
            res.json(newTask)

    }
}

export const getOneTask: Handler = (req, res) => {
    
     
      const taskFound=  getConnection()
      .get('tasks')
      .find({id: req.params.id})
      .value()
       if (!taskFound) return res.status(404).json("msg: 'task no encontrar'")
            res.json(taskFound)

    
}

export const deleteOneTask: Handler = (req, res) => {
    const taskFound=  getConnection()
      .get('tasks')
      .find({id: req.params.id})
      .value()
       if (!taskFound) return res.status(404).json("msg: 'task no encontrar'")
            res.json(taskFound)
     
      const deleteTask=  getConnection()
      .get('tasks')
      .remove({id: req.params.id})
      .write()
            res.json(deleteTask )

    
}

export const   updateTask : Handler = (req,res) => {


    const taskFound=  getConnection()
      .get('tasks')
      .find({id: req.params.id})
      .value()
       if (!taskFound) return res.status(404).json("msg: 'task no encontrar'")
            

 const updatedTask = getConnection()
 .get("tasks")
 .find({id: req.params.id})
 .assign(req.body)
 .write();       
 res.json(updatedTask)
        
        
        }