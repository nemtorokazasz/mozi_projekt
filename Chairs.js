import React, { useState } from 'react'
import Chair from './Chair'

function Chairs({ szekek, setValasztottDB }) {

    const [loaded, setLoaded] = useState(false);

    
if(szekek.length != 0){
    return (
        <div className="chair-container">
                    
        <div className="first-row">
            <div className="first-box-container">
                <Chair  szekAdatok={szekek[0]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[1]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[2]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[3]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[4]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[5]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[6]} setValasztottDB={setValasztottDB} />
            </div>
            <div className="first-box-container">
                <Chair  szekAdatok={szekek[7]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[8]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[9]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[10]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[11]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[12]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[13]} setValasztottDB={setValasztottDB} />
            </div>
            <div className="first-box-container">
                <Chair  szekAdatok={szekek[14]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[15]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[16]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[17]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[18]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[19]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[20]} setValasztottDB={setValasztottDB} />
            </div>
            <div className="first-box-container">
                <Chair  szekAdatok={szekek[21]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[22]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[23]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[24]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[25]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[26]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[27]} setValasztottDB={setValasztottDB} />
            </div>
            <div className="first-box-container">
                <Chair  szekAdatok={szekek[28]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[29]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[30]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[31]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[32]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[33]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[34]} setValasztottDB={setValasztottDB} />
            </div>
            <div className="first-box-container">
                <Chair  szekAdatok={szekek[35]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[36]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[37]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[38]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[39]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[40]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[41]} setValasztottDB={setValasztottDB} />
            </div>
            <div className="first-box-container">
                <Chair  szekAdatok={szekek[42]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[43]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[44]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[45]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[46]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[47]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[48]} setValasztottDB={setValasztottDB} />
            </div>
            <div className="first-box-container">
                <Chair  szekAdatok={szekek[49]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[50]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[51]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[52]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[53]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[54]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[55]} setValasztottDB={setValasztottDB} />
            </div>
            <div className="first-box-container">
                <Chair  szekAdatok={szekek[56]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[57]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[58]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[59]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[60]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[61]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[62]} setValasztottDB={setValasztottDB} />
            </div>
            <div className="first-box-container">
                <Chair  szekAdatok={szekek[63]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[64]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[65]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[66]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[67]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[68]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[69]} setValasztottDB={setValasztottDB} />
            </div>
        </div>
        <div className="second-row">
            <div className="first-box-container">
                <Chair  szekAdatok={szekek[70]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[71]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[72]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[73]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[74]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[75]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[76]} setValasztottDB={setValasztottDB} />
            </div>
            <div className="second-box-container">
                <Chair  szekAdatok={szekek[77]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[78]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[79]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[80]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[81]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[82]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[83]} setValasztottDB={setValasztottDB} />
            </div>
            <div className="second-box-container">
                <Chair  szekAdatok={szekek[84]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[85]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[86]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[87]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[88]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[89]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[90]} setValasztottDB={setValasztottDB} />
            </div>
            <div className="second-box-container">
                <Chair  szekAdatok={szekek[91]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[92]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[93]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[94]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[95]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[96]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[97]} setValasztottDB={setValasztottDB} />
            </div>
            <div className="second-box-container">
                <Chair  szekAdatok={szekek[98]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[99]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[100]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[101]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[102]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[103]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[104]} setValasztottDB={setValasztottDB} />
            </div>
            <div className="second-box-container">
                <Chair  szekAdatok={szekek[105]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[106]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[107]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[108]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[109]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[110]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[111]} setValasztottDB={setValasztottDB} />
            </div>
            <div className="second-box-container">
                <Chair  szekAdatok={szekek[112]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[113]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[114]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[115]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[116]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[117]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[118]} setValasztottDB={setValasztottDB} />
            </div>
            <div className="second-box-container">
                <Chair  szekAdatok={szekek[119]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[120]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[121]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[123]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[124]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[125]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[126]} setValasztottDB={setValasztottDB} />
            </div>
            <div className="second-box-container">
                <Chair  szekAdatok={szekek[127]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[128]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[129]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[130]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[131]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[132]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[133]} setValasztottDB={setValasztottDB} />
            </div>
            <div className="second-box-container">
                <Chair  szekAdatok={szekek[134]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[135]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[136]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[137]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[138]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[139]} setValasztottDB={setValasztottDB} />
                <Chair  szekAdatok={szekek[140]} setValasztottDB={setValasztottDB} />
            </div>
        </div>
        <div className="canvas">
        </div>
    </div>
    )
}

    
}

export default Chairs