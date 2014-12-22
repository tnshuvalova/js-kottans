function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(function(el){
        return goodUsers.some(function(gu){return gu.id == el.id;});
    }); 
  };
}

module.exports = checkUsersValid
