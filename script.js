// script.js
class CraftedSmoothie {
    constructor(ingredients) {
        this.ingredients = ingredients;
    }

    getDescription() {
        return `Your craftedsmoothie contains: ${this.ingredients.join(', ')}. Yummmmmmm!`;
    }
}

document.getElementById('crafted-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // select ingredients
    const selectedIngredients = Array.from(document.querySelectorAll('select')).map(select => select.value);

   // create smoothie
    const CraftedSmoothie = new CraftedSmoothie(selectedIngredients);

    // smoothie description
    document.getElementById('smoothie-description').textContent = CraftedSmoothie.getDescription();
});
document.getElementById('order-button').addEventListener('click', function() {
    // Apply cool animation effect
    applyCoolAnimation();
    // Display cool message
    displayCoolMessage();
});

function applyCoolAnimation() {
    const orderButton = document.getElementById('order-button');
    // Add the 'pulse' class to apply the animation
    orderButton.classList.add('pulse');

    // Remove the 'pulse' class after the animation ends
    orderButton.addEventListener('animationend', function() {
        orderButton.classList.remove('pulse');
    });
}

