export default function ResiPrices(props){
    var dic = {}
    if (props["4bed / 2bath"] !== "0"){
            dic["4bed / 2bath"] = props["4bed / 2bath"]
    }
    if (props["4bed / 1.5bath"] !== "0"){
        dic["4bed / 1.5bath"] = props["4bed / 1.5bath"]
    }
    if (props["4bed / 1bath"] !== "0"){
        dic["4bed / 1bath"] = props["4bed / 1bath"]
    }
    if (props["2bed / 1bath"] !== "0"){
        dic["2bed / 1bath"] = props["2bed / 1bath"]
    }
    if (props["2bed / 1.5bath"] !== "0"){
        dic["2bed / 1.5bath"] = props["2bed / 1.5bath"]
    }
    if (props["1bed / 1bath"] !== "0"){
        dic["1bed / 1bath"] = props["1bed / 1bath"]
    }
    if (props["studio"] !== "0"){
        dic["studio"] = props["studio"]
    }
    if (props["singles"] !== "0"){
        dic["singles"] = props["singles"]
    }
    if (props["doubles"] !== "0"){
        dic["doubles"] = props["doubles"]
    }
    if (props["triples"] !== "0"){
        dic["triples"] = props["triples"]
    }
    if (props["triples with bath"] !== "0"){
        dic["triples with bath"] = props["triples with bath"]
    }
    if (props["quads"] !== "0"){
        dic["quads"] = props["quads"]
    }
    if (props["quads with bath"] !== "0"){
        dic["quads with bath"] = props["quads with bath"]
    }
    return (dic)
}