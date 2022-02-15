import React, {useEffect, useState} from 'react';
import styles from './smartCounter.module.css'
import {stat} from "fs";


const stats = [
    {id: 0, locationId: 1, result: 'pending'},
    {id: 1, locationId: 5, result: 'pending'},
    {id: 2, locationId: 9, result: 'positive'},
    {id: 3, locationId: 6, result: 'positive'},
    {id: 4, locationId: 3, result: 'negative'},
    {id: 5, locationId: 5, result: 'positive'},
    {id: 6, locationId: 3, result: 'positive'},
    {id: 7, locationId: 10, result: 'positive'},
    {id: 8, locationId: 5, result: 'pending'},
    {id: 9, locationId: 5, result: 'pending'},
    {id: 10, locationId: 7, result: 'negative'},
    {id: 11, locationId: 1, result: 'pending'},
    {id: 12, locationId: 4, result: 'negative'},
    {id: 13, locationId: 6, result: 'pending'},
    {id: 14, locationId: 6, result: 'positive'},
    {id: 15, locationId: 2, result: 'negative'},
    {id: 16, locationId: 7, result: 'pending'},
    {id: 17, locationId: 10, result: 'pending'},
    {id: 18, locationId: 1, result: 'pending'},
    {id: 19, locationId: 3, result: 'positive'},
    {id: 20, locationId: 4, result: 'pending'},
    {id: 21, locationId: 4, result: 'pending'},
    {id: 22, locationId: 6, result: 'negative'},
    {id: 23, locationId: 6, result: 'positive'},
    {id: 24, locationId: 10, result: 'pending'},
    {id: 25, locationId: 1, result: 'negative'},
    {id: 26, locationId: 7, result: 'pending'},
    {id: 27, locationId: 1, result: 'pending'},
    {id: 28, locationId: 10, result: 'negative'},
    {id: 29, locationId: 7, result: 'positive'},
    {id: 30, locationId: 8, result: 'negative'},
    {id: 31, locationId: 6, result: 'negative'},
    {id: 32, locationId: 2, result: 'negative'},
    {id: 33, locationId: 2, result: 'negative'},
    {id: 34, locationId: 5, result: 'pending'},
    {id: 35, locationId: 9, result: 'pending'},
    {id: 36, locationId: 3, result: 'negative'},
    {id: 37, locationId: 5, result: 'pending'},
    {id: 38, locationId: 1, result: 'pending'},
    {id: 39, locationId: 3, result: 'positive'},
    {id: 40, locationId: 9, result: 'negative'},
    {id: 41, locationId: 2, result: 'positive'},
    {id: 42, locationId: 3, result: 'pending'},
    {id: 43, locationId: 1, result: 'positive'},
    {id: 44, locationId: 8, result: 'negative'},
    {id: 45, locationId: 8, result: 'pending'},
    {id: 46, locationId: 1, result: 'positive'},
    {id: 47, locationId: 10, result: 'negative'},
    {id: 48, locationId: 8, result: 'negative'},
    {id: 49, locationId: 1, result: 'pending'},
    {id: 50, locationId: 6, result: 'negative'},
    {id: 51, locationId: 8, result: 'positive'},
    {id: 52, locationId: 3, result: 'pending'},
    {id: 53, locationId: 8, result: 'pending'},
    {id: 54, locationId: 6, result: 'pending'},
    {id: 55, locationId: 9, result: 'pending'},
    {id: 56, locationId: 4, result: 'negative'},
    {id: 57, locationId: 5, result: 'positive'},
    {id: 58, locationId: 3, result: 'positive'},
    {id: 59, locationId: 7, result: 'negative'},
    {id: 60, locationId: 2, result: 'pending'},
    {id: 61, locationId: 8, result: 'negative'},
    {id: 62, locationId: 10, result: 'pending'},
    {id: 63, locationId: 2, result: 'negative'},
    {id: 64, locationId: 6, result: 'negative'},
    {id: 65, locationId: 5, result: 'negative'},
    {id: 66, locationId: 5, result: 'positive'},
    {id: 67, locationId: 6, result: 'positive'},
    {id: 68, locationId: 6, result: 'negative'},
    {id: 69, locationId: 1, result: 'negative'},
    {id: 70, locationId: 3, result: 'positive'},
    {id: 71, locationId: 4, result: 'pending'},
    {id: 72, locationId: 7, result: 'negative'},
    {id: 73, locationId: 2, result: 'positive'},
    {id: 74, locationId: 9, result: 'negative'},
    {id: 75, locationId: 6, result: 'positive'},
    {id: 76, locationId: 6, result: 'positive'},
    {id: 77, locationId: 1, result: 'pending'},
    {id: 78, locationId: 1, result: 'negative'},
    {id: 79, locationId: 10, result: 'pending'},
    {id: 80, locationId: 5, result: 'negative'},
    {id: 81, locationId: 6, result: 'negative'},
    {id: 82, locationId: 3, result: 'positive'},
    {id: 83, locationId: 5, result: 'negative'},
    {id: 84, locationId: 8, result: 'positive'},
    {id: 85, locationId: 5, result: 'pending'},
    {id: 86, locationId: 6, result: 'positive'},
    {id: 87, locationId: 5, result: 'negative'},
    {id: 88, locationId: 8, result: 'positive'},
    {id: 89, locationId: 7, result: 'negative'},
    {id: 90, locationId: 4, result: 'negative'},
    {id: 91, locationId: 1, result: 'positive'},
    {id: 92, locationId: 5, result: 'positive'},
    {id: 93, locationId: 5, result: 'negative'},
    {id: 94, locationId: 5, result: 'positive'},
    {id: 95, locationId: 10, result: 'pending'},
    {id: 96, locationId: 2, result: 'positive'},
    {id: 97, locationId: 6, result: 'pending'},
    {id: 98, locationId: 10, result: 'negative'},
    {id: 99, locationId: 10, result: 'pending'},
]
// const objS = {}
// for (let i = 0; i <= stats.length; i++) {
//     let locId = stats[i].locationId
//     let res = stats[i].result
// const {locationId, result} = stats[i]
//     if (!objS[locId]) {
//         objS[locId] = {
//             positive: 0,
//             negative: 0,
//             pending: 0
//         }
//     }
//
//
//     objS[locId][res]++
// }

const dayStats = stats.reduce((acc, curr) => {
    const {locationId, result} = curr
    if(!acc[locationId]) acc[locationId] = {positive: 0, pending: 0, negative: 0}
    acc[locationId][result]++
    return acc
}, {})

    /*
    const dayStats = {
      locationId: {
        positive: 10,
        negative: 0,
        pending: 12,
      },
      locationId2: {
        positive:  0,
        negative: 0,
        pending: 0,
      }
      ....
    }
    */


    const SmartCounter = ({maxValue}) => {

        const [counter, setCounter] = useState(0)
        const [incIsDisabled, setIncIsDisabled] = useState(false)
        const [resetIsDisabled, setResetIsDisabled] = useState(true)
        useEffect(() => {
            if (counter === maxValue) {
                setIncIsDisabled(true)
            }
        }, [counter, maxValue])
        const IncHandler = () => {
            setCounter(prevState => prevState + 1)
            setIncIsDisabled(false)
            setResetIsDisabled(false)
        }
        const ResetHandler = () => {
            setCounter(0)
            setResetIsDisabled(true)
            setIncIsDisabled(false);

        }

        const student = [
            {
                name: "Ana",
                id: 1
            },
            {
                name: "Vlada",
                id: 2
            },
            {
                name: "Anton",
                id: 3
            }
        ]
        const studentCopy = [...student];
        const names = () => {
            student.map(st => st.name)
        }
        const descendingOrder = (str) => {
            for (let i = 0; i < str.length; i++) {
                if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
                    console.log("false");
                    return false
                }
                console.log("true");
                return true
            }
        }
        return (
            <div>
                <button onClick={() => descendingOrder("aghjkl1")}>String</button>

                {/*<h1 className={incIsDisabled ? styles.counetrError : styles.counetr}>{counter}</h1>*/}

                {/*<button*/}
                {/*    disabled={incIsDisabled}*/}
                {/*    className={incIsDisabled ? styles.disabled : styles.active}*/}
                {/*    onClick={IncHandler}>inc*/}
                {/*</button>*/}
                {/*<button*/}
                {/*    disabled={resetIsDisabled}*/}
                {/*    className={resetIsDisabled ? styles.disabled : styles.active}*/}
                {/*    onClick={ResetHandler}>res*/}
                {/*</button>*/}


            </div>
        );
    };

export default
    SmartCounter;



