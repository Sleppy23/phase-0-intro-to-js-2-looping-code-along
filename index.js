// Code your solutions in this file

function writeCards(names, event){
    let message = []
    for(let i = 0; i < names.length; i++){
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)

    }
    return message;
}

  function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }














  
//   function countDown( startingNumber ) {
//     while ( startingNumber > 0 ) {
//       console.log( startingNumber );
//       startingNumber -= 1;
//     }
//     console.log( startingNumber );
//   }