import {filterData} from './utils/handler'

export const LOAD_DATA = 'LOAD_DATA'
export const CLEAN_DATA = 'CLEAN_DATA'
export const UPDATE_DATA = 'UPDATE_DATA'

export function loadInitialData(newGeoData) {
    return {
        type:LOAD_DATA,
        newGeoData
    }
}

export function cleanInitialData() {
    return {type:CLEAN_DATA}
}

export function updateFilteredData(filters,initialGeoData) {
    const newGeoData = filterData(filters,initialGeoData)
    return {
        type:UPDATE_DATA,
        newGeoData
    }
}