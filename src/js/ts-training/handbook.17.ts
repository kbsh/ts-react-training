enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let c: Circle = {
    kind: ShapeKind.Circle,
    //    ~~~~~~~~~~~~~~~~ Error!
    radius: 100,
}


const enum E {
    X,
    Y,
    Z = 1 + 1, 
}

declare enum F {
    X,
    Y,
    Z = 1 + 1, 
}
