import type { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { UncontrolledOnOff } from './UncontrolledOnOff';
import { useState } from 'react';

const meta: Meta<typeof UncontrolledOnOff> = {
    component: UncontrolledOnOff,
};

export default meta;


const callback = action("on or off clicked")

export const OnMode = () => {
    return <UncontrolledOnOff defaultOn={true} onChange={callback} />
}
export const OffMode = () => {
    return <UncontrolledOnOff defaultOn={false} onChange={callback} />
}
/* export const OffMode = () => {
    return <UncontrolledOnOff onChange={callback} />
}
 */
