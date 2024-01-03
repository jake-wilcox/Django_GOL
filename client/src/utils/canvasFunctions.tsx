const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

const rectSize = 20
const squareToBorderRatio = 0.25
const rad = rectSize / 9
const space = Math.floor(rectSize * squareToBorderRatio)

const yBoarder = screenHeight % (rectSize + space)
const xBoarder = screenWidth % (rectSize + space)



export function drawGrid(context: CanvasRenderingContext2D) {
  console.log('drawing grid')
  context.fillStyle = 'white'
  context.fill();
  var i = Math.floor(yBoarder / 2) + Math.floor(space / 2)
  var j = Math.floor(xBoarder / 2) + Math.floor(space / 2)

  while (i + rectSize < screenHeight) {
    while (j + rectSize < screenWidth) {
      context.roundRect(j, i, rectSize, rectSize, rad);
      j += rectSize + space
    }
    //move down a row
    i += rectSize + Math.floor(rectSize * squareToBorderRatio)
    var j = Math.floor(xBoarder / 2) + Math.floor(space / 2)
  }
  context.fill()
}



export function hoverSquare(xCord: number, yCord: number):number[]{
  console.log('hover square')
  const xGrid = Math.round((xCord + ((space+xBoarder) / 2)) / (rectSize + space))-1
  const yGrid = Math.round((yCord + ((space+yBoarder) / 2)) / (rectSize + space))-1
  return [xGrid, yGrid]
}

export function drawSquare(context: CanvasRenderingContext2D, xGrid: number, yGrid: number, color:string){
  console.log('drawing square')
  const xpos: number = (xGrid * (rectSize + space)) + Math.floor(xBoarder/2) + Math.floor(space/2)
  const ypos: number = (yGrid * (rectSize + space)) + Math.floor(yBoarder/2) + Math.floor(space/2)

  context.roundRect(xpos, ypos, rectSize, rectSize, rad)
  context.fillStyle = color
  context.fill()
}
