import { useState } from "react"
import { AddCategory, GifGrind } from "./components";



export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;


        //categories.push(NewCategory);
        setCategories([newCategory, ...categories])
        //console.log(NewCategory);

    }


    return (
        <>
            {/*titulo */}
            <h1>GitExpertApp</h1>

            {/* Input */}
            <AddCategory

                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                categories.map((category) => (
                    <GifGrind
                        key={category}
                        category={category} />
                ))
            }




        </>
    )
}



