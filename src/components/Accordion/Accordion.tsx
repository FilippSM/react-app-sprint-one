
type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log("rendiring Accordion");
    return (
        <div>
            <AccordionTitle 
                title={props.titleValue}
                onChange={props.onChange} 
            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string;
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("rendiring AccordionTitle");
 /*    return <h3 onClick={props.onChange}>{props.title}</h3> */
    return <h3 onClick={(event) => props.onChange()}>{props.title}</h3>
}


type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("rendiring AccordionBody");
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}
