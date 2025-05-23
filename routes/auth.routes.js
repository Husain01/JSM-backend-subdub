import { Router } from "express";

const authRoutes = Router();

authRoutes.post('/sign-up', (req, res) => {
    res.send({title: 'Sign Up'})
})

authRoutes.post('/sign-in', (req, res) => {
    res.send({title: 'Sign In'})
})

authRoutes.post('/sign-out', (req, res) => {
    res.send({title: 'Sign Out'})
})

export default authRoutes;