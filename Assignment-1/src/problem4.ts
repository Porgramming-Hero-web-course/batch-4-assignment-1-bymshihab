{
  const PI = 3.1416;
  interface FindingAreaOfCircle {
    shape: string;
    radius: number;
  }

  interface FindingAreaOfRectangle {
    shape: string;
    height: number;
    width: number;
  }

  type shapeType = FindingAreaOfCircle | FindingAreaOfRectangle;

  function calculateShapeArea(objShape: shapeType): number {
    if (objShape.shape === "circle") {
      //using typeGuard for circle
      return PI * objShape.radius * objShape.radius;
    } else if (objShape.shape === "rectangle") {
      //using  typeGuard for circle
      return objShape.height * objShape.width;
    } else {
      return 0;
    }
  }

  const circleArea = calculateShapeArea({
    shape: "circle",
    radius: 5,
  });
  console.log("Area of Circle:", circleArea);

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log("Area of rectangleArea:", rectangleArea);
}
