import { useState } from "react";
export default function Ludoboard(){
    let [moves, setMoves] = useState({ blue:0, red:0, yellow:0, green:0});
    let [arr, setArr] = useState(["no moves"]);
    let updateBlue = () => {
        moves.blue +=1;
        console.log(`moves.blue = ${moves.blue}`);
        setMoves({...moves});

        setArr([...arr, "blue moves"]);
        console.log(arr);
    }
    let updateYellow = () => {
        moves.yellow +=1;
        console.log(`moves.yellow = ${moves.yellow}`);
        setMoves({...moves});
    }
    let updateGreen = () => {
        moves.green +=1;
        console.log(`moves.green = ${moves.green}`);
        setMoves({...moves});
    }
    let updateRed = () => {
        moves.red +=1;
        console.log(`moves.red = ${moves.red}`);
        setMoves({...moves});
    }
    return (
        <div>
            <p>Game Begins</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
            </div>
         </div>
    );
}