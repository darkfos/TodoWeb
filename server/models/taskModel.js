const mainModel = require("./mainModel");


class TaskModel extends mainModel {

    constructor (title, description, date_end, id_user=null) {
        super();
        this.title = title;
        this.description = description;
        this.id_user = id_user;
        this.date_end = date_end;
        this.date_create = new Date();
    }
}


module.exports = TaskModel;