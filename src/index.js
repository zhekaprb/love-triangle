/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count=0;
  let len = preferences.length;

  for(let i=0; i < len; i++){
    if (
      preferences[preferences[preferences[i]-1]-1] === i+1 &&
      preferences[i] !== preferences[preferences[i]-1] &&
      preferences[preferences[i]-1] && preferences[preferences[preferences[i]-1]-1] &&
      preferences[preferences[preferences[i]-1]-1] !== preferences[i]  
    ) {
       count++; 
    }
  }

return (count/3);
};


