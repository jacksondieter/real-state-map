import React from 'react'

const BuildingCard = ({building}) => {
    const {buildingType, price, parking} = building
    return (
        <div style={{display:'flex', justifyContent:"space-between", border:'1px dotted silver'}}>
            <div>Type: {buildingType}</div>
            <div> Price: {price}</div>
            <div>Parking: {parking?'Yes':'No'}</div>
        </div>
    )
}

export default BuildingCard
