class MainModel {
    constructor () {
        this.getValues = this.getValues.bind(this);
        this.getColumns = this.getColumns.bind(this);
    }

    getValues() {
        const modelKeys = Object.keys(this);
        let arrayKeys = new Array();

        modelKeys.map((key) => {
            if (typeof this[key] === "function") {  } else {
                if (typeof this[key] === "string") {
                    arrayKeys.push(`'${this[key]}'`);
                } else {
                    arrayKeys.push(this[key]);
                }
            }
        })

        return "(" + arrayKeys.join(", ") + ")"
    }

    getColumns() {
        const modelKeys = Object.keys(this);
        let columns = "("

        modelKeys.map((key) => {
            if (typeof this[key] === "function") {  } else {
                columns += key + ", ";
            }
        })
        
        return columns.slice(0, columns.length-2) + ")";
    }
}


module.exports = MainModel;