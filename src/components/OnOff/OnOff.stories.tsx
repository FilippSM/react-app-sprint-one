import type { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { OnOff } from './OnOff';
import { useState } from 'react';

const meta: Meta<typeof OnOff> = {
    component: OnOff,
};

export default meta;


const callback = action("on or off clicked")

export const OnMode = () => {
    return <OnOff on={true} onChange={callback} />
}
export const OffMode = () => {
    return <OnOff on={false} onChange={callback} />
}

export const RatingChanging = () => {
    let [switchOn, setSwitchOn] = useState<boolean>(false);
    return <OnOff on={switchOn} onChange={setSwitchOn} />
}