export const API_LINK = "https://api.nasa.gov/"
export const KEY = "PjkuL0l5Q2p0PhJeXpbZlZFpDRzcp8TllVAtWim0"
export const API_LOCATION = "https://api.opencagedata.com/"
export const LOCATION_KEY = "89381ea6bdab48a88fdfee8bd3209c5c"
export const API_MARS =     "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY&camera=FHAZ"

// Asteroid
export const GET_ASTEROID = (start_date,end_date) =>{
    return `${API_LINK}neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${KEY}`
}
export const GET_SATELLITE = (coordinates,start_date,end_date) =>{
    console.log(coordinates)
   return `${API_LINK}planetary/earth/assets?lon=${coordinates.lng}&lat=${coordinates.lat}&date=${start_date}&dim=0.15&api_key=${KEY}`

}
export const GET_LOCATION = (postcode) =>{
    return `${API_LOCATION}geocode/v1/json?q=${postcode}&key=${LOCATION_KEY}`
}

export const GET_MARS = (date,camera) => {
    return `${API_LINK}mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${KEY}&camera=${camera}`
}