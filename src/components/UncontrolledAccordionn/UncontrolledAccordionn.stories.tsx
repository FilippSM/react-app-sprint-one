import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { UncontrolledAccordion } from './UncontrolledAccordionn';
import { useState } from 'react';

export default {
    component: UncontrolledAccordion
};

export const AccordionDemo = () => {
    return <UncontrolledAccordion titleValue={"MenuUnc"} /> 
}