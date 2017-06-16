window.onload = init;

var $notes = document.getElementById( 'listOfNotes' ); 

function init(){
  let $button = document.getElementById( 'send_text' );
  $button.onclick = createNote; 

  for (let i = 0; i < localStorage.length; i++ ){
    let key = localStorage.key( i );

    if ( key.substring( 0, 4 ) === 'note' ){
      let value = localStorage.getItem( key );
      addToDOM(  key, value );
    }
  }
};

function addToDOM( key, value ){
  let note = document.createElement( 'li' );
  let span = document.createElement( 'span' );
  let removeBtn = document.createElement( 'a' );

  note.setAttribute( 'id', key );
  span.setAttribute( 'class', 'note' );
  span.innerHTML = value; 
  removeBtn.innerHTML =  " Task Complete " ;
  removeBtn.setAttribute( 'class', 'button' );
  removeBtn.addEventListener( 'click', function( e ){
    note.parentNode.removeChild( note );
    localStorage.removeItem( key );
  }, false ); 

  note.appendChild( span );
  note.appendChild( removeBtn );
  $notes.appendChild( note );

  console.log( localStorage.length );  
};

function manageIncrement(){
  let nextValue = parseInt( localStorage[ "itr" ] );
  nextValue += 1;
  localStorage[ "itr" ] = nextValue; 
  return nextValue;
};

function createNote(){

  let entry = document.getElementById( 'note_text' ).value;
  let key = "note_" + manageIncrement();
  
  localStorage.setItem( key, entry );
  addToDOM( key, entry );
  };

function removeNotes( ){
  localStorage.clear();
  localStorage[ "itr" ] = 0;

  while ( $notes.firstChild ){
    $notes.removeChild( $notes.firstChild );
  }
};








