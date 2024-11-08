class MainModel {
    constructor () {
        this.getValues = this.getValues.bind(this);
        this.getColumns = this.getColumns.bind(this);
    }

    getValues() {
        const modelKeys = Object.keys(this);
        let arrayKeys = new Array();

        modelKeys.map((key) => {
            if (typeof this[key] === "string") {
                arrayKeys.push(`'${this[key]}'`)
            } else {
                arrayKeys.push(this[key]);
            }
        })

        return "(" + arrayKeys.join(", ") + ")"
    }

    getColumns() {
        const modelKeys = Object.keys(this);
        let columns = "("

        modelKeys.map((key) => {
            columns += key + ", ";
        })

        return columns + ")";
    }
}

module.exports = new MainModel();