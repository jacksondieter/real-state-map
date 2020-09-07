const accessToken = process.env.REACT_APP_API_KEY

const mapData = {
    coordinates:[47.3836514,8.5482374],
    zoom:13,
    mapUrl:`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${accessToken}`,
    mapAtr:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',

}
export default mapData