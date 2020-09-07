import React from 'react'
import {CSVReader} from 'react-papaparse'
import { useStateValue } from '../State';
import {_getGeoJsonArray,config} from '../utils/handler'
import BuildingCard from './BuildingCard'
import FilterContainer from './FilterContainer'


const Sidebar = () => {
    const [{ geoData }, dispatch] = useStateValue();

    const handleOnDrop = (data) => {
        const jsonArray = data.map(x => x.data)
        const geoJsonArray = _getGeoJsonArray(jsonArray)
        console.log(geoJsonArray)
        dispatch({
            type:'loadData',
            newGeoData:geoJsonArray
        })
    }

    const handleOnError = (err, file, inputElem, reason) => {
        console.log(err)
    }

    const handleOnRemoveFile = (data) => {
        dispatch({
            type:'cleanData'
        })
    }

    return (
        <div className={'sidebar-container'}>
            <div className={'bar-container'}>
                <FilterContainer />
                <CSVReader
                    onDrop={handleOnDrop}
                    noDrag
                    noProgressBar
                    onError={handleOnError}
                    addRemoveButton
                    onRemoveFile={handleOnRemoveFile}
                    style={{
                        dropArea: {
                            borderRadius: 20,
                            height: 50,
                            padding:0
                        },
                        dropAreaActive: {
                            borderColor: 'red',
                        },
                        dropFile: {
                            width: '100%',
                            height: 50,
                        },
                        fileSizeInfo: {
                            display:'none'
                        },
                        fileNameInfo: {
                            borderRadius: 3,
                            fontSize: 14,
                            lineHeight: 1,
                            padding: '0 0.4em',
                        },
                        removeButton: {
                            color: 'blue',
                        },
                    }}
                    config={config}
                >
                            <span>Click to upload.</span>
                </CSVReader>
            </div>
            <div className={'card-container'}>
                {geoData.map((building) =>(
                    <BuildingCard building={building.properties} id={building.geometry.coordinates[0]}/>
                ))}
            </div>
        </div>
    )
}

export default  Sidebar