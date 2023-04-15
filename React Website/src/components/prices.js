export default function ResiPrices(props){
    var dic = {}
    if (props["4bed / 2bath"] !== "0"){
            dic["4Bed / 2Bath"] = props["4bed / 2bath"]
    }
    if (props["4bed / 1.5bath"] !== "0"){
        dic["4Bed / 1.5Bath"] = props["4bed / 1.5bath"]
    }
    if (props["4bed / 1bath"] !== "0"){
        dic["4Bed / 1Bath"] = props["4bed / 1bath"]
    }
    if (props["2bed / 1bath"] !== "0"){
        dic["2Bed / 1Bath"] = props["2bed / 1bath"]
    }
    if (props["2bed / 1.5bath"] !== "0"){
        dic["2Bed / 1.5Bath"] = props["2bed / 1.5bath"]
    }
    if (props["1bed / 1bath"] !== "0"){
        dic["1Bed / 1Bath"] = props["1bed / 1bath"]
    }
    if (props["studio"] !== "0"){
        dic["Studio"] = props["studio"]
    }
    if (props["singles"] !== "0"){
        dic["Singles"] = props["singles"]
    }
    if (props["doubles"] !== "0"){
        dic["Doubles"] = props["doubles"]
    }
    if (props["triples"] !== "0"){
        dic["Triples"] = props["triples"]
    }
    if (props["triples with bath"] !== "0"){
        dic["Triples With Bath"] = props["triples with bath"]
    }
    if (props["quads"] !== "0"){
        dic["Quads"] = props["quads"]
    }
    if (props["quads with bath"] !== "0"){
        dic["Quads With Bath"] = props["quads with bath"]
    }
    return (dic)
}