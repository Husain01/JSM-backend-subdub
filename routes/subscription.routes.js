import { Router } from "express";

const subscriptionRoutes = Router();

subscriptionRoutes.get('/', (req, res) => {
    res.send({title: 'GET all subscriptions'})
})

subscriptionRoutes.get('/:id', (req, res) => {
    res.send({title: 'GET subscription details'})
})

subscriptionRoutes.post('/', (req, res) => {
    res.send({title: 'CREATE a subscription'})
})

subscriptionRoutes.put('/:id', (req, res) => {
    res.send({title: 'UPDATE a subscription'})
})

subscriptionRoutes.delete('/:id', (req, res) => {
    res.send({title: 'DELETE a subscription'})
}) 

subscriptionRoutes.get('/user/:id', (req, res) => {
    res.send({title: 'GET all subscriptions for a user'})
})

subscriptionRoutes.put('/:id/cancel', (req, res) => {
    res.send({title: 'CANCEL a subscription'})
})

subscriptionRoutes.get('/upcoming-renewals', (req, res) => {
    res.send({title: 'GET upcoming renewals'})
})

export default subscriptionRoutes;