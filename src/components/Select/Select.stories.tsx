import type { Meta } from '@storybook/react';

import { Select } from './Select';
import { action } from '@storybook/addon-actions';


const meta: Meta<typeof Select> = {
    component: Select,
};

export default meta;

export const WithValue = () => {
    return <Select
        onChange={action('Value changed')}
        value={'2'}
        items={[
            { value: '1', title: 'Minsk' },
            { value: '2', title: 'Moscow' },
            { value: '3', title: 'Kiev' },
        ]}
    />
}

export const WithoutValue = () => {
    return <Select
        onChange={action('Value changed')}
        items={[
            { value: '1', title: 'Minsk' },
            { value: '2', title: 'Moscow' },
            { value: '3', title: 'Kiev' },
        ]}
    />
}
