const mainModel = require("./mainModel");


class TaskModel extends mainModel {

    constructor (title, description, id_user=null) {
        super();
        this.title = title;
        this.description = description;
        this.id_user = id_user;
    }
}


module.exports = TaskModel;