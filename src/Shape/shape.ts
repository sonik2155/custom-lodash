interface Shape {
     a?: number[];
     b?: number[];
     c?: number[];
     d?: number[];
}

class Circle implements Shape {
    public radius: number;
    public a: number[];
    constructor(radius: number, a: number[]) {
    this.radius = radius;
    this.a = a;
    }

    public calculateSquare(): number {
    const pi = Math.PI;
    return Math.pow(this.radius, 2,) * pi;
    }

    public draw(): number[] {
    return [this.a[0], this.a[1], this.radius]
    }
}

class Rectangle implements Shape {
    public sideA: number;
    public sideB: number;
     a: number[];
     b: number[];
     c: number[];
     d: number[];
    constructor(a:number[], b:number[], c:number[], d:number[]) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.sideA = Math.abs(Math.sqrt(Math.pow((this.a[0]-this.b[0]),2) + Math.pow((this.a[1] - this.b[1]),2)));
        this.sideB = Math.abs(Math.sqrt(Math.pow((this.a[0]-this.b[0]),2) + Math.pow((this.a[1] - this.b[1]),2)));
    }

    public calculateSquare(): number {
    return this.sideA * this.sideB
    }

    public draw(): number[] {
        return [this.sideA, this.sideA, this.sideB, this.sideB]
    }
}

class Triangle implements Shape {
    public sideA: number;
    public sideB: number;
    public sideC: number;
     a: number[];
     b: number[];
     c: number[];
    constructor(a:number[], b:number[], c:number[]) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.sideA = Math.abs(Math.sqrt(Math.pow((this.a[0] - this.b[0]),2) + Math.pow((this.a[1] - this.b[1]),2)));
        this.sideB = Math.abs(Math.sqrt(Math.pow((this.a[0] - this.b[0]),2) + Math.pow((this.a[1] - this.b[1]),2)));
        this.sideC = Math.abs(Math.sqrt(Math.pow((this.c[0] - this.b[0]),2) + Math.pow((this.c[1] - this.b[1]),2)));
    }

    public calculateSquare(): number {
        const halfPerimeter = (this.sideA + this.sideB + this.sideC)/2;
        return Math.sqrt(halfPerimeter * (halfPerimeter - this.sideA) * (halfPerimeter - this.sideB) * (halfPerimeter - this.sideC))
    }

    public draw(): number[] {
        return [this.sideA, this.sideB, this.sideC];
    }
}

function shape() {
    const circle = new Circle( 10, [1, 2]);
    const triangle = new Triangle([2, 3], [6, 3], [2, 8],);
    const rectangle = new Rectangle([2, 3], [6, 3], [3, 8], [6, 8]);

    const array = [ circle, triangle, rectangle ];
    let result: number[] = [];
    let nums = [];

    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        let res = arrayElement?.calculateSquare();
        let num = arrayElement?.draw();
        result.push(res);
        nums.push(num)
    }
    const newVar = [result, nums];
    return newVar
}

console.log(shape())



