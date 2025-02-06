import { useEffect, useState } from "react"

export default {
    title: 'useEffect demo'
}



export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log("useEffect every render");
        document.title = counter.toString();
    })

    useEffect(() => {
        console.log("useEffect only first render");
        document.title = counter.toString();
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every counter change");
        document.title = counter.toString();
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>Counter+</button>
    </>
}

export const SetTimeoutExample = () => {
/*     const [fake, setFake] = useState(1) */
    const [counter, setCounter] = useState(0)

    console.log("SetTimeoutExample");

    /* useEffect(() => {

        setTimeout(() => {
            console.log("setTimeout");
            document.title = counter.toString();
        }, 1000)

    }, [counter]) */

    useEffect(() => {

        setInterval(() => {
            setCounter(new Date().getMinutes());
        }, 1000)

    }, [])


    return <>
        Hello, {counter}
        {/* Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>Counter+</button> */}
    </>
}

