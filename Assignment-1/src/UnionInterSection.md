Union and Intersection are powerful tools in TypeScript. The significance of union and intersection types in  TS ability to give flexibility and define the shape of behavior. A union type allows a variable to match at least one of the specified types, while an intersection type requires it to satisfy all the specified types.

## What is Union ( | )

Union is actually used when we need to combine more than one type. It accepts that at least one data type should be matched.  We define union Type as `string | number| boolean` , Sometimes call it ‘OR’ operator.
According to that type. here is a quick example

```tsx
type RollNumber = string | number;

function validateRollNumber(rollnum: RollNumber): string {
    if (typeof rollnum === 'string') {
        const ulimateRoll = parseInt(rollnum);
        return `The roll number is provided as a string and converts to the number ${ulimateRoll}.`;
    } else if (typeof rollnum === 'number') {
        return `The roll number is provided as a number: ${rollnum}.`;
    } else {
        return `Invalid roll number type.`;
    }
}

console.log(validateRollNumber("100"));
```

In this example, we saw validateRollNumber function only accepts “string”  or “number” type inputs.  

Here is another example of Union

```tsx
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
```

Here calculateShapeArea function accepts only objShape according  shapeType(FindingAreaOfCircle or FindingAreaOfRectangle).

So, union is a powerful tool in TypeScript. It gives up type safety. Using a union, we can know that when we need more than one type and not others, we can easily define it.

## What is Intersection (&)

Intersection is actually used when we need to combine more than one type. But in this case, it must accept both data types to match.  We define union Type as `string & number` , Sometimes call it ‘AND’ operator.

According to that type. here is a quick example

```tsx
type GuestUser ={
    name: string;
    browser:string;
}

type Customer={
    customerId:number;
    name:string;
}

type SpecialCustomer = GuestUser & Customer;

const customerOne : SpecialCustomer = {
    customerId:1,
    name:"Abul Kashem",
    browser:"Chrome"
}  
```

Here customerOne type is SpecialCustomer  that is accept both GuestUser  and Customer. If one is missing it will be invalid.