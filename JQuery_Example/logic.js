function newItem( name ){

  let controls =  ' <div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div>';

  let newItem = $( '<li><span class="shopping-item">' + name  + '</span>' + controls + '</li>' );

  return newItem;
};

function main(){

  $( "#js-shopping-list-form" ).submit( function( event ){
    event.preventDefault();
    let nextItem = $( '#js-shopping-list-form' ).find( 'input[name="shopping-list-entry"]' ).val();

    let pleaseAdd = newItem( nextItem );
    $( '.shopping-list' ).append( pleaseAdd );
  } ); 

  $('.shopping-list').on('click', '.shopping-item-delete', function ( event ){
    $( this ).closest( 'li' ).remove( ); 
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function ( event ){
    $( this ).closest( 'li' ).find( '.shopping-item' ).toggleClass( "shopping-item__checked" ); 
  });
};


$(main);


