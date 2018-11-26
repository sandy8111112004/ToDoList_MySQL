const path = require('path');
let db = require("../models");


module.exports = function (app) {
    app.get('/api/list', function (req, res) {
        db.Todo.findAll({}).then(               
            function (dbToDo) {
                res.json(dbToDo);
            }
        ).catch(
            function (err) {
                res.json(err);
            }
        );
    });

    app.post('/api/list', function (req, res) {
        db.Todo.create({
            newInput: req.body.newInput,
            inputBox: req.body.inputBox
        }).then(
            function (dbToDo) {
                res.json(dbToDo);
            }
        ).catch(
            function (err) {
                res.json(err);
            }
        );

    });

    app.put('/api/list', function (req, res) {
        db.Todo.findOne(
            {
                where:{
                    newInput: req.body.newInput
                }
            })
            .then(
                function (data) {
                    const status = data.inputBox;
                    if (status){
                        db.Todo.destroy({
                            where:{
                                newInput: req.body.newInput
                            }
                        }).then(
                            function () {
                                res.json({success: true});
                            }
                        ).catch(
                            function (err) {
                                res.json(err);
                            }
                        )
                    }else{
                    db.Todo.update({ 
                        inputBox: !status 
                        },{
                            where:{
                                newInput: req.body.newInput
                            }
                        })
                        .then(
                            function (data) {
                                res.json(data);
                            }
                        ).catch(
                            function (err) {
                                res.json(err);
                            }
                        );
                    }
                }

            );

    });


    //////////////////////////////html//

    app.get('/todo', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });


}