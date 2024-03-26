// script.js
class Smoothie {
    constructor(ingredients) {
        this.ingredients = ingredients;
    }

    getDescription() {
        return `Your smoothie contains: ${this.ingredients.join(', ')}. Enjoy!`;
    }
}

document.getElementById('smoothie-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get selected ingredients
    const selectedIngredients = Array.from(document.querySelectorAll('select')).map(select => select.value);

    // Create smoothie object
    const smoothie = new Smoothie(selectedIngredients);

    // Display smoothie description
    document.getElementById('smoothie-description').textContent = smoothie.getDescription();
});
