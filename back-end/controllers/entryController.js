const express = require("express");
const entries = express.Router({mergeParams: true});
const { getAllEntries, getEntry, createEntry, deleteEntry, updateEntry} = require("../queries/entries.js");

entries.get("/", async (req, res) => {
    try {
        const allEntries =  await getAllEntries();
        res.status(200).json(allEntries);
    } catch(error) {
        res.status(500).json({error: "server error"})
    }
});

entries.get("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const oneEntry = await getEntry(id);
        res.status(200).json(oneEntry);
    } catch(error) {
        res.status(404).json({error: "entry not found"})
    }
});

entries.post("/", async (req, res) => {
    try {
        const entry = await createEntry(req.body);
        console.log(entry);
        res.status(200).json(entry);
    } catch(error) {
        res.status(500).json({error: "entry creation error"})
    }
});

entries.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const deletedEntry = await deleteEntry(id);
        res.status(200).json(deletedEntry);
    } catch (error) {
        res.status(500).json({error: "entry delete error"})
    }
});

entries.put("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {body} = req;
        const updatedEntry = await updateEntry(id, body);
        res.status(200).json(updatedEntry);
    } catch (error) {
        res.status(404).json({error: "entry not found"})
    }
});

module.exports = entries;
