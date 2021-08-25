function plan() {
    return {
        price: 542.20,
        period: "Full"
    }
}

function course() {
    return {
        price: 149.90,
        period: "Full"
    }
}

function subject() {
    return {
        price: 39,
        period: "Full"
    }
}

function ProductFactory() {
    return {
        make
    }

    function make(type, ...args) {
        switch(type) {
            case 'plan':
                return plan(...args);
            case 'course':
                return course(...args);
            case 'subject':
                return subject(...args);
        }
    }

}

const product = ProductFactory();

console.log(product.make('plan'));