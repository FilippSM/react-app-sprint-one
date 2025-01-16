import { useReducer, useState } from "react";
import { reducer, TOGGLE_COLLAPSED } from "./reducer";

type AccordionPropsType = {
    titleValue: string;
/*     collapsed: boolean; */
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("rendiring Accordion");

    /* let [collapsed, setCollapsed] = useState(false); */
    let [state, dispath] = useReducer(reducer, {collapsed: false});

    return (
        <div>
{/*             <AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>
 */}            <AccordionTitle title={props.titleValue} onClick={() => {dispath({type: TOGGLE_COLLAPSED})}}/>
            {!state.collapsed && <AccordionBody />}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string;
    onClick: () => void;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("rendiring AccordionTitle");
    return (
        <h3 onClick={() => {props.onClick()}}>-- {props.title} --</h3>
    )
}

function AccordionBody() {
    console.log("rendiring AccordionBody");
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
