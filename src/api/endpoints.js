export const API_LINK = "https://api.nasa.gov/"
export const KEY = "PjkuL0l5Q2p0PhJeXpbZlZFpDRzcp8TllVAtWim0"


// Asteroid
export const GET_ASTEROID = (start_date,end_date) =>{
    return `${API_LINK}neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${KEY}`
}