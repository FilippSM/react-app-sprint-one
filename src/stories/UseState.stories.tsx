import React, { useMemo, useState } from "react"

export default  {
    title: 'useState demo'
}

function generateData() {
    return 23231
}

export const Example1 = () => {
 /*    const initValue = useMemo(generateData, []) */

    const [counter, setCounter] = useState(generateData);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}