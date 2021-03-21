const timeStamp = '1616359383';
const apiKey = '33a2e389da8ef7446287d0caf9f217d0';
const md5 = '7f2a027861f161291b3b68caf5405b19';
fetch(`http://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}=${md5}&limit=100`).then((response) =>{
  return response.json():
  }).then((jsonParsed) =>{
    
  })
export default api;
