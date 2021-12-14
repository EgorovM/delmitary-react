class Cart {
    constructor() {
        this.goods = [];
        this.totalPrice = this.totalPrice.bind(this);
        this.toJson = this.toJson.bind(this);
    }

    toJson() {
        return {
            goods: this.goods.map(good => {
                return good.toJson()
            }),
            totalPrice: this.totalPrice(),
        }
    }

    static fromJson(json) {
        let cart = new Cart();
        cart.goods = json.goods.map(jsonGood => {
            return CartGood.fromJson(jsonGood)
        });
        return cart;
    }

    appendGood(good) {
        for(var i = 0; i < this.goods.length; i++) {
            console.log(this.goods[i].id, good.id);
            if(this.goods[i].id === good.id) {
                this.goods[i].count += 1;
                return;
            }
        }
        good['count'] = 1;
        this.goods.push(CartGood.fromJson(good));
    }

    removeGood(good) {
        for(var i = 0; i < this.goods.length; i++) {
            if(this.goods[i].id === good.id) {
                this.goods[i].count -= 1;
                if(this.goods[i].count === 0) {
                    delete this.goods[i];
                }
                break;
            }
        }
    }

    totalPrice() {
        let totalPrice = 0;
        for(var i = 0; i < this.goods.length; i++) {
            totalPrice += this.goods[i].price * this.goods[i].count;
        }
        return totalPrice;
    }
}

class CartGood {
    constructor(id, count, price, name, icon) {
        this.id = id;
        this.count = count;
        this.price = price;
        this.name = name;
        this.icon = icon;
    }

    static fromJson(jsonGood) {
        return new CartGood(
            jsonGood.id,
            jsonGood.count,
            jsonGood.price,
            jsonGood.name,
            jsonGood.icon,
        )
    }

    toJson() {
        return {
            id: this.id,
            count: this.count,
            price: this.price,
            name: this.name,
            icon: this.icon,
        }
    }
}

export default Cart;