// A class can be defined through declaration or expression

//Declaration 
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    publicMethod () {
        return 'Hello World'
    }
}


//expression

const Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width
    }
}

class Article {
    constructor(title, date) {
        this.title = title;
        this.date= date;
    }

    //static method
    static compare(articleA, articleB) {
        return articleA.date - articleB.date
    }
}

//usage
let article =[
    new Article('HTML', new Date(2019, 1, 1)),
    new Article('CSS', new Date(2019, 0, 1)),
    new Article('JavaScript', new Date(2019, 11, 1))
];

article.sort(Article.compare)

class ClassWithPrivateField {
    #privateField;

    constructor() {
        this.#privateField = 42;
    }
}

class Subclass extends ClassWithPrivateField {
    #subPrivateField;
    constructor() {
        super();
        this.#subPrivateField = 23;
    }
}
new Subclass();