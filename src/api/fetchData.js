export const apiOptions = {
  method: 'GET',   
  headers: {
    'x-rapidapi-key': '764c73dd0bmshbac528158ccccddp1744ebjsn37075bd86000',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
  
};
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '82e3fd9d3amshd542ff4bf96f776p1bbf16jsnd4b9b77136b5',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }

};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}