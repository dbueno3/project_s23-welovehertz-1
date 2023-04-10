export default function ResiAmenities(props){
    var dic = {}
    if (props["pool"] !=="0"){
        dic["pool"] = props["pool"]
    }
    if (props["laundry"] !== "0"){
        dic["laundry"] = props["laundry"]
    }
    if (props["private bathroom"] !== "0"){
        dic["bathroom"] = props["private bathroom"]
    }
    if (props["parking"] !== "0"){
        dic["parking"] = props["parking"]
    }
    if (props["private kitchen"] !== "0"){
        dic["kitchen"] = props["private kitchen"]
    }
    if (props["gym"] !== "0"){
        dic["gym"] = props["gym"]
    }
    return dic
}