
const _coordinateToGeometry = (coordinate) => {
    const [typ,crd] = coordinate.slice(0,-1).split("(")
    const coordinates=crd.split(" ").map(x=>parseFloat(x))
    const type = typ[0] + typ.slice(1).toLowerCase()
    return {type,coordinates}
}
const _featToProperties = (location) => {
    const price = parseFloat(location['Price/m^2'])
    const buildingType = location.BuildingType
    const parking = location.Parking === 'x'
    return {price,buildingType,parking}
}

const _jsonToGeoJson = (location) => {
    const geometry = _coordinateToGeometry(location.Coordinates)
    const properties = _featToProperties(location)
    return {"type": "Feature",geometry,properties}
}

export const _getGeoJsonArray = (jsonArray) => {
    return jsonArray.map(x=>_jsonToGeoJson(x))
}

export const config = {delimiter:";", header:true}
