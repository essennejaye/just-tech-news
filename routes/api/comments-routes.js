const router = require('express').Router();
const { User, Post, Comments } = require('../../models');
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
    Comments.findAll({})
        .then(dbCommentsData => res.json(dbCommentsData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
});
router.post('/', (req, res) => {
    Comments.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.post_id
    })
        .then(dbCommentsData => res.json(dbCommentsData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
});
router.delete('/:id', (req, res) => {
    Comments.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCommentsData => {
            if (!dbCommentsData) {
                res.status(404).json({ message: 'No comment found with that id' });
            }
            res.json(dbCommentsData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

module.exports = router;
