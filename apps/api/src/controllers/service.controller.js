const router = require('express');
const Service = require('../services/Service');

const controller = router();
const service = new Service();

controller.get('/jobs', async (req, res) => {
    const data = await service.getData();
    res.send({data});
});


controller.put('/jobs/:id', async (req, res) => {
    const jobId = req.params.id;
    const newData = req.body;

    try {
        const data = await service.getData();

        const index = data.findIndex(job => job.id === jobId);
        if (index !== -1) {
            data[index] = {...data[index], ...newData};

            await service.writeData(data);

            res.status(200).json({message: 'Job updated successfully'});
        } else {
            res.status(404).json({message: 'Job not found'});
        }
    } catch (error) {
        console.error('Error updating job:', error);
        res.status(500).json({message: 'Internal server error'});
    }
});

controller.post('/jobs', async (req, res) => {
    const newJob = req.body;

    try {
        const data = await service.getData();
        data.push(newJob);

        await service.writeData(data);

        res.status(201).json({message: 'Job added successfully'});
    } catch (error) {
        console.error('Error adding job:', error);
        res.status(500).json({message: 'Internal server error'});
    }
});

controller.delete('/jobs/:id', async (req, res) => {
    const jobId = req.params.id;

    try {
        const data = await service.getData();
        const newData = data.filter(job => job.id !== jobId);

        await service.writeData(newData);

        res.status(200).json({message: 'Job removed successfully'});
    } catch (error) {
        console.error('Error removing job:', error);
        res.status(500).json({message: 'Internal server error'});
    }
});
module.exports = controller;