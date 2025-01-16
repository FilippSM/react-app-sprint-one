import { useReducer, useState } from "react";

type AccordionPropsType = {
    titleValue: string;
/*     collapsed: boolean; */
}


type ActionType = {
    type: string
}

const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED";

const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return !state;
        default:
            throw new Error("Bad action type")
    }
}
export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("rendiring Accordion");

    /* let [collapsed, setCollapsed] = useState(false); */
    let [collapsed, dispath] = useReducer(reducer, false);

    return (
        <div>
{/*             <AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>
 */}            <AccordionTitle title={props.titleValue} onClick={() => {dispath({type: TOGGLE_CONSTANT})}}/>
            {!collapsed && <AccordionBody />}
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
