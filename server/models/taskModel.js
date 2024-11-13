const mainModel = require("./mainModel");


class TaskModel extends mainModel {

    constructor (title, description, date_create, date_upd, date_message, id_user=null) {
        super();
        this.title = title;
        this.description = description;
        this.id_user = id_user;
        this.date_create = date_create;
        this.date_to_end = date_upd;
        this.date_message = date_message
    }
}


module.exports = TaskModel;