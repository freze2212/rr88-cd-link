document.addEventListener("DOMContentLoaded", () => {
    function generateRandomNumbers() {
        const numbers = [];
        const min = 30;
        const max = 50;
        
        for (let i = 0; i < 6; i++) {
            const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            numbers.push(randomNum);
        }
        
        numbers.sort((a, b) => a - b);
        
        return numbers;
    }
    
    function updateCircleTexts() {
        const numbers = generateRandomNumbers();
        const circleTexts = document.querySelectorAll('.circle-text');
        
        circleTexts.forEach((text, index) => {
            text.textContent = numbers[index] + 'ms';
        });
    }
    
    updateCircleTexts();
    
    setInterval(updateCircleTexts, 5000);
});
  