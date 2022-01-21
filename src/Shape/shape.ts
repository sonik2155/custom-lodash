class Shape {
    public a: number;
    public b: number;
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    public draw(): number[] {
        return [this.a, this.b];
    }
    public calculateSquare(): number {
        return this.a + this.b
    }
}

class Circle extends Shape {
    public radius: number;
    public c: number;
    public d: number;
    constructor(a: number, b: number, radius: number, d: number, c: number) {
    super(a, b);
    this.radius = radius;
    this.d = d;
    this.c = c;
    }

    public calculateSquare(): number {
    const pi = Math.PI
    return Math.pow(this.radius, 2,) * pi;
    }

    public draw(): number[] {
    return [this.a, this.b, this.c, this.d, this.radius]
    }
}

class Rectangle extends Shape {
    public d: number;
    public e: number;
    constructor(a: number, b: number, d: number, e: number) {
        super(a, b);
        this.d = d;
        this.e = e;
        this.a = this.d;
        this.b = this.e;
    }

    public calculateSquare(): number {
        return this.a * this.b
    }

    public draw(): number[] {
        return [this.b, this.a, this.d, this.e]
    }
}

class Triangle extends Shape {
    public height: number;
    public z: number;
    constructor(a: number, b: number, height: number, z: number) {
        super(a, b);
        this.height = height;
        this.z = z;
    }

    public calculateSquare(): number {
        return (this.a * 0.5) * this.height
    }

    public draw(): number[] {
        return [this.z, this.b, this.a];
    }
}

function shape() {
    const shape = new Shape(10, 10)
    const circle = new Circle(shape.a, shape.b, 5, 10, 10);
    const triangle = new Triangle(shape.a = 4, shape.b = 5, 5, 4);
    const rectangle = new Rectangle( null, null, shape.a = 4, shape.b = 6,);

    const array = [ circle, triangle, rectangle ];
    let result: number[] = [];
    let nums = [];

    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        let res = arrayElement.calculateSquare();
        let num = arrayElement.draw();
        result.push(res);
        nums.push(num)
    }
    const newVar = [result, nums];
    return newVar
}

console.log(shape())



