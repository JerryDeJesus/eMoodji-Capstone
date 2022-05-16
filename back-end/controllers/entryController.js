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

entries.get("/:eid", async (req, res) => {
    try {
        const {eid} = req.params;
        const oneEntry = await getEntry(eid);
        res.status(200).json(oneEntry);
    } catch(error) {
        res.status(404).json({error: "entry not found"})
    }
});

entries.post("/", async (req, res) => {
    console.log(req.body);
    try {
        const entry = await createEntry(req.body);
        res.status(200).json(entry);
    } catch(error) {
        res.status(500).json({error: "entry creation error"})
    }
});

entries.delete("/:eid", async (req, res) => {
    try {
        const {eid} = req.params;
        const deletedEntry = await deleteEntry(eid);
        res.status(200).json(deletedEntry);
    } catch (error) {
        res.status(500).json({error: "entry delete error"})
    }
});

entries.put("/:eid", async (req, res) => {
    try {
        const {eid} = req.params;
        const {body} = req;
        const updatedEntry = await updateEntry(eid, body);
        res.status(200).json(updatedEntry);
    } catch (error) {
        res.status(404).json({error: "entry not found"})
    }
});

module.exports = entries;
