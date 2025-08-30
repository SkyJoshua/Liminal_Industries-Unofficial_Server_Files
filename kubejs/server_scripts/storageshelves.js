ServerEvents.recipes(event => {
  // Remove existing recipes for storage_shelves
  event.remove({ output: 'storage_shelves:cardboard' });
  event.remove({ output: 'storage_shelves:cardboard_box' });
  event.remove({ output: 'storage_shelves:large_cardboard_box' });

  // Add new recipes using create:cardboard

  // This recipe creates a cardboard box with a cross shape
  event.shaped(
    Item.of('storage_shelves:cardboard_box'),
    [
      ' O ',
      'O O',
      ' O '
    ],
    {
      O: 'create:cardboard'
    }
  );

  // This recipe creates a large cardboard box with an empty center
  event.shaped(
    Item.of('storage_shelves:large_cardboard_box'),
    [
      'OOO',
      'O O',
      'OOO'
    ],
    {
      O: 'create:cardboard'
    }
  );
});
