import './RockPaper.css'
import {useContext, useEffect} from 'react'
import GamesContext from '../../../context/games/GamesContext'
import {generateRandomNumber} from '../../../context/games/GamesActions'
import { ReactComponent as Paper }  from '../../assets/paper.svg'
import  {ReactComponent as Rock } from '../../assets/rock2.svg'
import {ReactComponent as Scissors } from '../../assets/scissors.svg'
import {ReactComponent as Versus } from '../../assets/versus.svg'
import GameTitle from '../../shared/game-title/GameTitle'


function ResultRockPaper() {
    const {rockStatus, rockSelectedElement, rockDisplayResult , randomNumber, dispatch} = useContext(GamesContext);

    useEffect(() => {
        const number = generateRandomNumber();

        dispatch({
            type: 'RANDOM_NUMBER',
            payload: number,
        })
    
    }, [])


    //USER SELECTED ELEMENT//

    let resultUser = null;
    if(rockSelectedElement === 1){
            resultUser = <Rock className="svg"/>

        } else if (rockSelectedElement === 2){
            resultUser = <Paper className="svg"/>

        } else if (rockSelectedElement === 3){
            resultUser = <Scissors className="svg"/>

        } else {    
            return null
        }

    // MACHINE RESULT//

    let resultMachine = null;
        if(randomNumber === 1){
            resultMachine = <Rock className="svg"/>

        } else if (randomNumber === 2){
            resultMachine = <Paper className="svg"/>

        } else if (randomNumber === 3){
            resultMachine = <Scissors className="svg"/>

        } else {    
            return null
        }

    //TITLE//

    let title = '';
    if(randomNumber === rockSelectedElement){
        title = 'Draw'
    } else if ((randomNumber === 1 && rockSelectedElement === 2) || (randomNumber === 2 && rockSelectedElement === 3) || (randomNumber === 3 && rockSelectedElement === 1)){
       title = 'You Won'
    } else {
        title = 'You Lost'
    }


    return (
        <>
            <GameTitle title={title}/>
            <div className="rock-icons">
                <div className="elements"><span>{resultUser}</span><p className="text-icons">You</p></div>
                <div className="elements"><span><Versus className="versus"/></span></div>
                <div className="elements"><span>{resultMachine}</span><p className="text-icons">Me</p></div>
            </div>
       </>
    )
}

export default ResultRockPaper
