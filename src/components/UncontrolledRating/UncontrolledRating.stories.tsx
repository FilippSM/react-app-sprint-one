import type { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { RatingValueType, UncontrolledRating } from './UncontrolledRating';
import { useState } from 'react';

const meta: Meta<typeof UncontrolledRating> = {
  component: UncontrolledRating,
};

export default meta;

const callback = action("rating changed inside component")

export const EmptyStarts = () => {
    return <UncontrolledRating defaultValue={0} onChange={callback} />
}
export const Rating1 = () => {
    return <UncontrolledRating defaultValue={1} onChange={callback} />
}
export const Rating2 = () => {
    return <UncontrolledRating defaultValue={2} onChange={callback} />
}
export const Rating3 = () => {
    return <UncontrolledRating defaultValue={3} onChange={callback} />
}
export const Rating4 = () => {
    return <UncontrolledRating defaultValue={4} onChange={callback} />
}
export const Rating5 = () => {
    return <UncontrolledRating defaultValue={5} onChange={callback} />
}
/* export const RatingChanging = () => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    return <UncontrolledRating value={ratingValue} onClick={setRatingValue} />
} */

/* export const RatingChanging = () => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    return <Rating value={ratingValue} onClick={setRatingValue} />
} */