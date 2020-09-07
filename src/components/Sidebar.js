import React from 'react'
import {CSVReader} from 'react-papaparse'
import { useStateValue } from '../State';
import {_getGeoJsonArray,config} from '../utils/handler'


const Sidebar = () => {
    const [{ geoData }, dispatch] = useStateValue();
    //const [geoData, setGeoData] = useState([])

    const handleOnDrop = (data) => {
        console.log('***************************')
        console.log(data)
        console.log('---------------------------')
        const jsonArray = data.map(x => x.data)
        const geoJsonArray = _getGeoJsonArray(jsonArray)
        console.log(geoJsonArray)
        dispatch({
            type:'loadData',
            newGeoData:geoJsonArray
        })
        //setGeoData(geoJsonArray)
        console.log('***************************')
    }

    const handleOnError = (err, file, inputElem, reason) => {
        console.log(err)
    }

    const handleOnRemoveFile = (data) => {
        console.log('===========================')
        console.log(data)
        dispatch({
            type:'cleanData'
        })
        console.log('---------------------------')
    }

    return (
        <div className={'sidebar-container'}>
            <div className={'bar-container'}>
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
            <div>
                {JSON.stringify(geoData, null, 4)}
            </div>
        </div>
    )
}

export default  Sidebar