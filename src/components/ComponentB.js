import { React } from "react";
import style from "../public/CSS/ComponentB.module.css";
import { useState , useEffect } from "react";

function ComponentB({ Cendol, setCendol }) {
  let [Circle_Color, setCircleColor] = useState("yellow");
  let [Button_Color, setButtonColor] = useState("yellow");
  let [ButtonColorCheck , setButtonColorCheck] = useState(true);

  function increaseCendol() {
    setCendol(Cendol + 10);
    setButtonColorCheck(!ButtonColorCheck);
    if(ButtonColorCheck){
        setButtonColor('blue');
    }else{
        setButtonColor('red');
    }   
   circleColorChange();
  }
  function circleColorChange(){
    setCircleColor(Button_Color);
  }
  useEffect(()=> {
    circleColorChange();
       
  } , [Button_Color])
  


  return (
    <div>
      <div className={style.container}>
        <div className={style.box}>
          <div
            style={{ backgroundColor: `${Circle_Color}` }}
            className={style.circle}
          >
            <div>
              <p>{Cendol}</p>
              <a>Click to Increase counter</a>
            </div>
          </div>
        </div>
        <button
          style={{backgroundColor: `${Button_Color}`}}
          onClick={increaseCendol}
        >
          Change Color
        </button>
      </div>
    </div>
  );
}

export default ComponentB;
