// Enum declaration
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// Using the enum
let userDirection: Direction = Direction.Up;

// Switch statement with enum
switch (userDirection) {
  case Direction.Up:
    console.log("Moving Up");
    break;
  case Direction.Down:
    console.log("Moving down")
