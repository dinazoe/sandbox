
import CategoriesData from "../../Data/Categories";
import "./Categories.css"

const Categories = () => {
    const ButtonArray = [];
    const count = CategoriesData.length;

    for (let i = 0; i < CategoriesData.length; i++) {
        console.log("Index" + i);
        ButtonArray.push(
            <div className="button">
                <button>{CategoriesData[i]['category']}</button>
            </div>
            
        );
    }
    return ButtonArray;
};

export default Categories;