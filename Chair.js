import React, {useState} from 'react'

function Chair({szekAdatok, setValasztottDB}) {
  const [valasztott, setValasztott] = useState(false);
  const [disabled, setDisabled] = useState(false);


 // if(szekAdatok.type === "foglalt"){
  //  setDisabled(true)
 // }

  const handleClick = () => {
    if(szekAdatok.type === "empty") {
      setValasztott(!valasztott);
    if(valasztott){
      setValasztottDB((e) => e - 1);
    }else {
      setValasztottDB((e) => e + 1);
    }
    }else {
      alert("kap majd egy üzenetet")
    }
    
  }
  
  return (
    <div className="chair-box"><i onClick={handleClick} className={valasztott ? "fa-solid fa-couch selected" : "fa-solid fa-couch"}></i></div>
  )
}

export default Chair