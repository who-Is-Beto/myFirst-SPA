// const getHash = () => location.hash //retornará #/1/
const getHash = () =>
  location.hash.slice(1).toLocaleLowerCase().split('/')[1] //['', '1' , ''] 
  || '/';

export default getHash;

