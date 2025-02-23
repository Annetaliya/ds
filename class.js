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