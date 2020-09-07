
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

const _jsonToGeoJson = (location,id) => {
    const geometry = _coordinateToGeometry(location.Coordinates)
    const properties = _featToProperties(location)
    return {"type": "Feature",geometry,properties,id}
}

export const _getGeoJsonArray = (jsonArray) => {
    return jsonArray.map((x,id)=>_jsonToGeoJson(x,id))
}

export const config = {delimiter:";", header:true}

export const filterData = (filters,data) => {
    const {type, price, parking} = filters
    const typeBuilding = (type === '')?data:data.filter(elem => elem.properties.buildingType === type)
    const priceBuilding = (price === '')?typeBuilding:typeBuilding.filter(elem => elem.properties.price >= price[0] && elem.properties.price <= price[1])
    const parkingBuilding = (parking === '')?priceBuilding:priceBuilding.filter(elem => elem.properties.parking===parking)
    return parkingBuilding
}