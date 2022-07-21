function solve() {
  let ingredients = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };
  let recipes = {
    apple: recipeData(0, 1, 0, 2),
    lemonade: recipeData(0, 10, 0, 20),
    burger: recipeData(0, 5, 7, 3),
    eggs: recipeData(5, 0, 1, 1),
    turkey: recipeData(10, 10, 10, 10),
  };

  function recipeData(protein, carbohydrate, fat, flavour) {
    return {
      protein,
      carbohydrate,
      fat,
      flavour,
    };
  }

  function restock(indgredient, x) {
    ingredients[indgredient] += x;
    return "Success";
  }

  function prepare(needed, qty) {
    let recipe = Object.entries(needed).map((x) => [x[0], x[1] * qty]);

    for (let i = 0; i < recipe.length; i++) {
      const [name, amount] = recipe[i];
      if (ingredients[name] - amount < 0) {
        return `Error: not enough ${name} in stock`;
      }
    }

    recipe.forEach(([name, amount]) => (ingredients[name] -= amount));
    return "Success";
  }

  let generatedReport = () =>
    Object.entries(ingredients)
      .map(([key, value]) => `${key}=${value}`)
      .join(" ");

  let instructions = {
    prepare: (r, q) => prepare(recipes[r], q),
    restock,
    report: generatedReport,
  };

  return (x) => {
    let [instruction, a, b] = x
      .split(" ")
      .map((x) => (isNaN(x) ? x : Number(x)));

    return instructions[instruction](a, b);
  };
}
