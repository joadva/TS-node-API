import {Router} from 'express';
import {getTasks,createTasks, getOneTask, deleteOneTask, updateTask} from '../controller/tasks.controllers';


const router = Router()


router.get('/tasks',getTasks)

router.get('/tasks/count',)


router.post('/tasks/',createTasks)


router.get('/tasks/:id',getOneTask)


router.delete('/tasks/:id',deleteOneTask)

router.put('/tasks/:id',updateTask)

export default router