import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { OnOff } from './components/OnOff/OnOff';
import { UncontrolledAccordion } from './components/UncontrolledAccordionn/UncontrolledAccordionn';
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';
import { Rating, RatingValueType } from './components/Rating/Rating';
import { UncontrolledOnOff } from './components/UncontrolledOnOff/UncontrolledOnOff';


function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  let [switchOn, setSwitchOn] = useState<boolean>(false);


  return (
    <div className={"App"}>
      {/* <OnOff on={switchOn} onChange={on => {setSwitchOn(on)}}/> */}
      {/* можно укоротить написать */}
      <OnOff on={switchOn} onChange={setSwitchOn} />

      <p>"UncontrolledOnOff:"</p>
      <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}

      <Accordion
        titleValue={"Menu"}
        collapsed={accordionCollapsed}
        onChange={() => (setAccordionCollapsed(!accordionCollapsed))} items={[{title: "Dimych", value: 1}, 
          {title: "Valera", value: 2}, 
          {title: "Artem", value: 3}]}        
        onClick={() => {}} 
      />
      
      <UncontrolledAccordion titleValue={"MenuUnc"} />

      <Rating value={ratingValue} onClick={setRatingValue} />

      <UncontrolledRating onChange={() => ("")}/>
      {/* <PageTitle title={"This is APP comment"} />*/}

    </div>
  );
}

type PageTitlePropsType = {
  title: string;
}

function PageTitle(props: PageTitlePropsType) {
  console.log("PageTitle rendering")
  return <h1>{props.title}</h1>
}


export default App;