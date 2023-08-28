import React, {useState} from 'react';
import './App.css';

function App() {
    const [inputPercentChance, setInputPercentChance] = useState('')
    const [baseChanceDrop, setBaseChanceDrop] = useState(0)
    const [collectedItems, setCollectedItems] = useState(0)
    const [rollCount, setRollCount] = useState(0)
    const [rollPerCollectCount, setRollPerCollectCount] = useState(0)
    const [rolledRndValue, setRolledRndValue] = useState(0)

    const onRandomButtonClick = () => {
        const rndValue = Math.random()
        const targetPercent = +inputPercentChance / 100
        const rndValuePlusBase = rndValue + baseChanceDrop
        setRolledRndValue(rndValuePlusBase)

        if (rndValuePlusBase > 1 - targetPercent) {
            alert("Item collected")
            setBaseChanceDrop((prevState) => 0 - targetPercent / 5)
            setCollectedItems((prevState) => prevState + 1)
            setRollPerCollectCount(0)
        } else {
            setBaseChanceDrop((prevState) => prevState + (targetPercent * rollPerCollectCount) / 100)
            setRollPerCollectCount((prevState) => prevState + 1)
            alert("Try more")
        }
        setRollCount((prevState) => prevState + 1)
    }

    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
                alignItems: "center",
                flexDirection: "column",
                alignContent: "center",
                height: '100vh',
                gap: 20
            }}>
                <div>
                    {
                        rolledRndValue
                    }
                </div>
                <div>
                    {
                        baseChanceDrop
                    }
                </div>
                <div style={{
                    display: "flex",
                    gap: 10
                }}>
                    <div>Chance</div>
                    <input
                        value={inputPercentChance}
                        onChange={(event) => {
                            setBaseChanceDrop(0)
                            setCollectedItems(0)
                            setRollCount(0)
                            setRollPerCollectCount(0)
                            setInputPercentChance(event.target.value)
                        }}/>
                    <div>%</div>
                </div>
                <button onClick={onRandomButtonClick}>
                    Random
                </button>
                <div style={{display: "flex", flexDirection: "row", gap: 5}}>
                    <div>
                        Collected items:
                    </div>
                    <div>
                        {collectedItems}
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "row", gap: 5}}>
                    <div>
                        Roll per try:
                    </div>
                    <div>
                        {rollPerCollectCount}
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "row", gap: 5}}>
                    <div>
                        Roll all times:
                    </div>
                    <div>
                        {rollCount}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
