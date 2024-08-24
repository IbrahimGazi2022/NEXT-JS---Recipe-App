import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

const RecipeList = ({ recipeList }) => {
  return (
    <div>
      <div className="p-6">
        <div className="flex justify-between">
          <h2 className="text-4xl font-bold text-gray-700 mb-6">All Recipe List</h2>
          <Link href={"/"}>
            <Button variant="destructive">Go To Homepage</Button>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {recipeList && recipeList.length > 0 ? recipeList.map((recipe) => (
            <Link href={`/recipe-list-page/${recipe.id}`}>
              <Card key={recipe.id}>
                <CardContent>
                  <div>
                    <div>
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="cursor-pointer"
                      />
                    </div>
                    <h3 className="text-lg font-bold pt-4">{recipe.name}</h3>
                    <div className="pt-2 flex justify-between">
                      <p className="text-gray-600">Rating: {recipe.rating}</p>
                      <p className="text-gray-500 font-bold">{recipe.cuisine}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )) : null}
        </div>
      </div>˝
    </div>
  );
};

export default RecipeList;
