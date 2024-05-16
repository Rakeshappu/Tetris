let maya = document.querySelector(".maya");

setTimeout(()=>{
    maya.classList.add("hide");
},1000)



// let canvas = document.querySelector("#game-canvas");
// let scoreboard = document.querySelector("#scoreboard");
// let ctx = canvas.getContext("2d");
// ctx.scale(block_side_length,block_side_length);
// let model = new gameModel(ctx);
// let score = 0;
// const game_clock = 1000;
// const block_side_length = 30;
// const rows = 20;
// const columns = 30;
// const score_worth = 10;

// setInterval(()=>{
//     newGameState();
// },game_clock);


// let newGameState = ()=>{
//     fullSend();
//     if(model.fallingPiece === null){
//         const rand = Math.round(Math.random() *6)+1;
//         const newPiece = new Piece(shapes[rand],ctx);
//         model.fallingPiece = newPiece;
//         model.moveDown();   
//     }else{
//         model.moveDown();
//     }
// }

// const fullSend = () =>{
//     const allFilled = (row) => {
//         for(let x of row){
//             if(x===0){
//                 return false;
//             }
//         }
//         return true;
//     }
//     for(let i=0;i<model.grid.length;i++){
//         if(allFilled(model.grid[i])){
//             score +=score_worth;
//             model.grid.splice(i,1);
//             model.grid.unshift([0,0,0,0,0,0,0,0,0,0])
//         }
//     }
//     scoreboard.innerHtml = "Score:"+String(score)
// }











// const shapes =[
//     [],
//     [
//         [0,0,0,0],
//         [1,1,1,1],
//         [0,0,0,0],
//         [0,0,0,0]
//     ],
//     [
//         [2,0,0],
//         [2,2,2],
//         [0,0,0]
//     ],
//     [
//         [0,0,3],
//         [3,3,3],
//         [0,0,0]
//     ],
//     [
//         [4,4],
//         [4,4]
//     ],
//     [
//         [0,5,5],
//         [5,5,0],
//         [0,0,0]
//     ],
//     [
//         [0,6,0],
//         [6,6,6],
//         [0,0,0]
//     ],
//     [
//         [7,7,0],
//         [0,7,7],
//         [0,0,0]
//     ],
    
// ]

// const colours = [
//     'black',
//     'black',
//     'black',
//     'black',
//     'black',
//     'black',
//     'black',
//     'black'
// ]


// class gameModel {
//     constructor(ctx){
//         this.ctx = ctx;
//         this.fallingPiece = null;
//         this.grid = this.makeGrid();
//     }
//     makeGrid(){
//         let grid = [];
//         for(var i=0; i<rows; i++){
//             grid.push([])
//             for(var j=0; j<columns; j++){
//                 grid[grid.lenth - 1].push(0);
//             }
//         }
//         return grid
//     }
//     collision(x,y){
//         const shape = this.fallingPiece.shape;
//         const n = shape.length;
//         for(let i=0;i<n;i++){
//             for(let j=0;j<n;j++){
//                 if(shape[i][j]>0){
//                     let p=x+j;
//                     let q=y+i;
//                     if(p>=0 && p< columns && q<rows){
//                         if(this.grid[q][p]>0){
//                             return true;
//                         }
//                         else{
//                             return true;
//                         }
//                     }
//                 }
//             }
//             return false;
//         }
//     }
//         renderGameState() {
//             for(let i=0;i<this.grid.length;i++){
//                 for(let j=0;j<this.grid[i].length;i++){
//                     let cell = this.grid[i][j];
//                     this.ctx.fillStyle = colours[cell];
//                     this.ctx.fillRect(j,i,1,1)
//                 }
//             }
//             if(this,this.fallingPiece !==null){
//                 this.fallingPiece.renderPiece();
//             }
//         }
//         moveDown(){
//             if(this.fallingPiece == null){
//                 this.renderGameState();
//                 return
//             }
//             else if(this.collision(this.fallingPiece.x, this.fallingPiece.y+1)){
//                 const shape = this.fallingPiece.shape;
//                 const x=this.fallingPiece.x;
//                 const y = this.fallingPiece.y;
//                 shape.map((row,i)=>{
//                     row.map((cell,j)=>{
//                         let p=x+j;
//                         let q=y+i;
//                         if(p>=0 && p<columns && q<rows &&cell>0){
//                             this.grid[q][p]=shape[i][j];
//                         }
//                     })
//                 })
//                 if(this.fallingPiece.y === 0 ){
//                     alert("gameOVER");
//                     this.grid = this.makeGrid()
//                 }
//                 this.fallingPiece = null;
//             }else {
//                 this.fallingPiece.y +=1;
//             }this.renderGameState();
//         }
        
//     }


// class Piece{
//     constructor(shape,ctx){
//         this.shape = shape;
//         this.ctx = ctx;
//         this.y = 0;
//         this.x = math.floor(columns/2)
//     }
//     renderPiece(){
//         this.shape.map((row ,i) => {
//             row.map((cell,j)=>{
//                 if(cell>0){
//                     this.ctx.fillStyle=colours[cell];
//                     this.ctx.fillRect(this.x + j,this.y+1,1,1)
//                 }
//             })
//         })
//     }
    
// }
