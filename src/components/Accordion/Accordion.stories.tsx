import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Accordion } from './Accordion';
import { useState } from 'react';

export default {
    component: Accordion
};

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () => {
    return <Accordion
        titleValue={"Menu"}
        collapsed={true}
        onChange={callback}
        items={[]}
        onClick={onClickCallback}
    />
}

export const UserUncollapsedMode = () => {
    return <Accordion
        titleValue={"Users"}
        collapsed={false}
        onChange={callback}
        items={[{title: "Dimych", value: 1}, {title: "Valera", value: 2}, {title: "Artem", value: 3}]}
        onClick={onClickCallback}
    />
}

export const AccordionDemo = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion
        titleValue={"Users"}
        collapsed={value}
        onChange={() => {setValue(!value)}}
        items={[
            {title: "Dimych", value: 1}, 
            {title: "Valera", value: 2}, 
            {title: "Artem", value: 3}
        ]}
        onClick={onClickCallback}
    />
}


/* const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
    return <Accordion
        titleValue={"Collapsed Accordion"}
        collapsed={true}
        onChange={onChangeHandler}
    />
}

export const OpenedAccordion = () => {
    return <Accordion
        titleValue={"Opened Accordion"}
        collapsed={false}
        onChange={() => {}}
    />
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion
        titleValue={"Accordion"}
        collapsed={collapsed}
        onChange={() => {setCollapsed(!collapsed)}}
    />
} */