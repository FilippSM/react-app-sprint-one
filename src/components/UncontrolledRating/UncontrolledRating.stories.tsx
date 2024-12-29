import type { Meta } from '@storybook/react';

import { UncontrolledRating } from './UncontrolledRating';
import { useState } from 'react';

const meta: Meta<typeof UncontrolledRating> = {
  component: UncontrolledRating,
};

export default meta;

export const RatingChanging = () => {
    return <UncontrolledRating/>
}

/* export const RatingChanging = () => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    return <Rating value={ratingValue} onClick={setRatingValue} />
} */