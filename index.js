class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
   // console.log(string)
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    // let removeChar = string.replace(/[^A-Za-z0-9-' ]+/g, '');
    //"g" means match with all the patterns that match what we seek
    let removeChar = string.replace(/[^A-Za-z0-9-' ]/g, '');
    return removeChar
  }

  static titleize(string) {
     console.log(string)
    return string.charAt(0).toUpperCase() 


  }


}

// return string.split(' ').map(word => {
//   if(word.charAt(0) == "a"){
//     return word.charAt(0).toUpperCase() + word.slice(1)
//   }
//   else if(forbidden.includes(word) || forbidden.includes(word) === "and"){
//       return word
//   } else {
//     return word.charAt(0).toUpperCase() + word.slice(1)
//   }}).join(" ")

// }

// const firstLetters = (phrase) => phrase.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")