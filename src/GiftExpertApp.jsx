
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GiftExpertApp = () => {

  const [ categories, setCategories ] = useState([]);

  const onAddCategory = ( newCategory ) =>{

    if( categories.includes( newCategory )) return;
    
    setCategories([ newCategory, ...categories ]);
    /* setCategories( cat => [...cat, categoryToAdd]);    otra forma de hacerlo */
  };

  return (
    <>
      <h1>GiftExpertApp</h1>

      {/* <AddCategory setCategories={ setCategories } />  enviando una función del padre al hijo */}

      {/* Emitiendo un valor desde el hijo al padre */}
      <AddCategory onNewCategory ={ (event) => { onAddCategory(event) } } />

      { 
        categories.map( category => { 
          return <GifGrid key={category} category={ category }/>
        })
      }    
    </>
  )
}
