const Ai = (predictions = {}, action) => {
    switch (action.type) {
      case "FETCH":
        return action.payload;
        
        default :
        return predictions
 
    }
  };
  export default Ai