
function getDifficulte(level){

    function difficulte( nbMalus, nbBonus ){
        var m = nbMalus/3
        var b = nbBonus/3
        for ( i=1; i<=m; i++ ){ malus.push( randomIntFromInterval(1, 20) )  }
        for ( i=1; i<=m; i++ ){ malus.push( randomIntFromInterval(21, 40) ) }
        for ( i=1; i<=m; i++ ){ malus.push( randomIntFromInterval(31, 60) ) }
      
        for ( i=1; i<=b; i++ ){ bonus.push( randomIntFromInterval(1, 20) )  }
        for ( i=1; i<=b; i++ ){ bonus.push( randomIntFromInterval(21, 40) ) }
        for ( i=1; i<=b; i++ ){ bonus.push( randomIntFromInterval(31, 60) ) }
      
      
      }
      
      switch (level) {
        case 'facile':
          difficulte( 3, 9 );
          break;
        case 'moyen':
          difficulte( 6 , 6  );
          break;
        case 'difficile':
          difficulte( 9, 3 );    
          break;
        default:
          difficulte( 6 , 6  );
      }

}



