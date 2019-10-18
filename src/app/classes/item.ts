export class Item {
    category: String;
    type: String;
    name: String;
    mfg: String;
    price: Number;
    active: boolean;
    id: Number;
    constructor(type: String, name: String, price: Number, mfg: String, category: String, active: boolean, id: Number) {
        this.category = category;
        this.type = type;
        this.name = name;
        this.price = price;
        this.mfg = mfg;
        this.active = active;
        this.id = id;
    }
}