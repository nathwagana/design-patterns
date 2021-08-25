class User {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class SuperUser {
    constructor(user, args) {
        this.user = user;
        this.user.nivel = args.nivel;

        this.user.permissions = {
            create: args.nivel === 3,
            read: args.nivel > 1,
            remove: args.nivel === 3,
            update: args.nivel === 3,
        }
    }
}

const newUser = new SuperUser(new User('Nath'), {nivel: 3})

console.log(newUser)