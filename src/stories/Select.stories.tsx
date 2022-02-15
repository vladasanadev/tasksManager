import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Select from '../components/Select/Select';
import {actions} from "@storybook/addon-actions";

export default {
  title: 'Select',
  component: Select,
}



export const SelectWithValueExample = () =>
  <>
    <Select onChange={()=> actions('value changed')}
            items={[{value:0, title:'Kiev'}, {value:1, title:'Moskov'},{value:2, title:'Vinnytsia'}]}
            value={'2'  }/>
  </>

export const WithoutValueExample = () =>
    <>
        <Select onChange={()=> actions('value changed')}
                items={[{value:0, title:'Kiev'}, {value:1, title:'Moskov'},{value:2, title:'Vinnytsia'}]}
               />
    </>

