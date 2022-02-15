
import React, {useState} from 'react';
import styles from './select.module.css'
import PropTypes from 'prop-types';


const Select = ({value,onChange,items }: SelectPropTypes) => {

    // @ts-ignore
    const [isActive, setActive] = useState(false);
    const [header, setHeader] = useState('Countries');


    return (
        <>
            {/*<select className={styles.select}>*/}
            {/*    <option value={''}>Moskow</option>*/}
            {/*    <option value={''}>Vlada</option>*/}
            {/*    <option value={''}>Bad</option>*/}
            {/*</select>*/}
        <div>
                <div
                    tabIndex={1}
                    onBlur={()=> {
                        console.log(isActive)
                        setTimeout(()=> {
                            setActive(prevState => !prevState)
                        }, 100)
                        }}
                    onClick={(e)=> {setActive(prevState => !prevState)}}
                    className={styles.select}>
                     {header}
                  </div>
                <div
                    className={
                    isActive? `${styles.active}` : styles.option
                }

                >
                    {
                        items.map(i =>  <div
                            className={styles.optionItem}
                            onClick={(e:any)=> setHeader(e.target.innerText)}


                            key={i.value}>{i.title}</div>)
                    }
                </div>

        </div>
        </>
    );
};

type ItemType ={
    value: number
    title:string
}

type SelectPropTypes = {
    value?:any
    onChange: ()=> void
    items: ItemType[]
};

export default Select;