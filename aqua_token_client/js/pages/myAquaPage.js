$('#addFish').click(function() {
  //AquaPresentation: inserts random fish into svg div "aquarium":
  var head = Math.floor(Math.random()*2)+1;
  var tail = Math.floor(Math.random()*3)+1;
  insertNewFishToAquarium(head, tail);

  $('#createFishModal').modal('hide');

});
