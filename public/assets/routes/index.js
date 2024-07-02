const noteRouter = require('express').Router();
const {createNewNote, deleteNote} = require('../db/notesServise');
let { notesArray } = require('../db/db.json');

noteRouter.get('/notes', (req, res) => {
  let receivedNotes = notesArray;
  res.json(receivedNotes);
});

  noteRouter.post('/notes', (req, res) => {
    
    if(notesArray){
    req.body.id = notesArray.length.toString();
    } else 
    {req.body.id = 0}
    res.json(createNewNote(req.body, notesArray));
  });

  noteRouter.delete('/notes/:id',   (req, res) => {
    const {id} = req.params
    notesArray = deleteNote(id, notesArray);
    res.end();
  });

  module.exports = { noteRouter };
