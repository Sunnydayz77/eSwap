const User = require('.../models/user')
const Item = require('.../models/item')
const db = require('.../db')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getItemById = async (req, res) => {
    try {
        const { id } = req.params
        const item = await Item.findById(id)
        if (item) {
            return res.status(200).json({ item })
        }
        return res.status(404).send('Item with the specified ID does not exists')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        await Item.findByIdAndUpdate(id, req.body, { new: true }, (err, item) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!item) {
                res.status(500).send('Item not found!');
            }
            return res.status(200).json(item)
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Item.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Item deleted");
        }
        throw new Error("Item not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
