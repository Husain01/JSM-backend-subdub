import { Router } from "express";

const userRoutes = Router();

userRoutes.get('/', (req, res) => {
    res.send({title: 'GET all users'})
})

userRoutes.get('/:id', (req, res) => {
    res.send({title: 'GET user details'})
})

userRoutes.post('/', (req, res) => {
    res.send({title: 'CREATE a user'})
})

userRoutes.put('/:id', (req, res) => {
    res.send({title: 'UPDATE a user'})
})

userRoutes.delete('/:id', (req, res) => {
    res.send({title: 'DELETE a user'})
})

export default userRoutes;