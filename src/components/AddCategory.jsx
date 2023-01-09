import { useState } from "react"


    export const AddCategory = ( { onNewCategory } ) => {    
    const [category, setCategory] = useState( '' );
    
    const handleAddCategory = ( event ) =>{
        setCategory( event.target.value );        
    }

    const onSubmit = (event) => { 
        event.preventDefault();
        //console.log( category );

        if(category.trim().length <= 1) return;

        //setCategories( (categories) => [category, ...categories] );
        onNewCategory(category.trim());
        setCategory('');
    };  

    return (

        /* <form onSubmit={ ( event ) => onSubmit(event) }> */
        // simplificado
        <form onSubmit={ onSubmit }> 
            <input type="text" placeholder="Busque la categoría" value={ category } onChange={ handleAddCategory } />            
        </form>
    )
}
