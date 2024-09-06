import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Naruto' ]);

    const onAddCategory = ( newCategory) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([newCategory, ...categories ]);
    }

    const onRemoveCategory = ( categoryToRemove) => {
        setCategories(categories.filter( (category) => category !== categoryToRemove ));
    }

    return (
        <>
            
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value)}
            />


            {
                categories.map( (category) => (
                    <GifGrid
                        key={category}
                        category={category}
                        onRemoveCategory={onRemoveCategory}
                    />
                ))
            }

        </>
    )
}
