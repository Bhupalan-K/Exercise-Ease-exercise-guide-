export const apiOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '18c2f992fdmsh8b233e4a905b01fp1ac81ajsnbaec211f2d93',
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