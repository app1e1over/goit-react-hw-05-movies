import axios from "axios";
const key = '?api_key=86578dfddf7782a9a93a7a7356ef0e77';

export function getPopular(){
    return axios.get("https://api.themoviedb.org/3/movie/popular"+key).then(r=>r.data.results)
}
export function getById(id){
    return axios.get(`https://api.themoviedb.org/3/movie/`+id+key).then(r=>r.data)
}

export function getImage(id, width) {
    return "https://image.tmdb.org/t/p/w"+width+id;
}

export function getAdditional(id, add){
    if(add==="cast"){
        add="credits"
    }
    return axios.get('https://api.themoviedb.org/3/movie/'+id+'/'+add+key).then(d=>d.data)
}

export function findByQuery(query) {
    return axios.get("https://api.themoviedb.org/3/search/movie"+key+"&query="+query).then(v=>v.data.results);
    
}