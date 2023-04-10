export default function ResiAmenities(props){
    var dic = {}
    if (props["pool"] !=="0"){
        dic["Pool"] = props["pool"]
    }
    if (props["laundry"] !== "0"){
        dic["Laundry"] = props["laundry"]
    }
    if (props["private bathroom"] !== "0"){
        dic["Bathroom"] = props["private bathroom"]
    }
    if (props["parking"] !== "0"){
        dic["Parking"] = props["parking"]
    }
    if (props["private kitchen"] !== "0"){
        dic["Kitchen"] = props["private kitchen"]
    }
    if (props["gym"] !== "0"){
        dic["Gym"] = props["gym"]
    }
    return dic
}