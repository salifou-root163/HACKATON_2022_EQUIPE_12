

function getMonteDescente( ){
  var m =  randomIntFromInterval(1, 6)
  var d =  randomIntFromInterval(1, 6)
  for ( i=1; i<=m; i++ ){ monte.push( randomIntFromInterval(1, 20) )  }
  for ( i=1; i<=m; i++ ){ monte.push( randomIntFromInterval(21, 40) ) }
  for ( i=1; i<=m; i++ ){ monte.push( randomIntFromInterval(31, 60) ) }
  //
  for ( i=1; i<=d; i++ ){ descente.push( randomIntFromInterval(1, 20) )  }
  for ( i=1; i<=d; i++ ){ descente.push( randomIntFromInterval(21, 40) ) }
  for ( i=1; i<=d; i++ ){ descente.push( randomIntFromInterval(31, 60) ) }

}


