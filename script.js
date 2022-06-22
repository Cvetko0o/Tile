const generateBlocks = () => {
    let generatedBlocks = [];
    
    for (let i = 0; i < 100; i++){
        const div = document.createElement("div");
        div.className = 'block'
        
        generatedBlocks.push(div)
    }
    
    return generatedBlocks;
}

const addBlocksToWrapper = (blocks) => {
    const wrapperId = 'wrapper';
    const wrapper = document.getElementById(wrapperId);
    
    for (let i = 0; i < blocks.length; i++){
        wrapper.append(blocks[i])
    }
}

const generateRandomColor = () => {
    console.log(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

const shuffleBlockIndexes = () => {
    let indexes = [];
    
    for (let i = 0; i < 100; i++){
        indexes.push(i)
    }
    
    return shuffle(indexes);
}

const init = () => {    
    const blocks = generateBlocks();
    const shuffledIndexes = shuffleBlockIndexes();
    addBlocksToWrapper(blocks);
    let currentIndex = 0;
    
    setInterval(() => {
        if (currentIndex === 100){
            let executionEndedTitle = document.getElementById('title')
            executionEndedTitle.textContent = 'Completed!';

            return;
        }
        
        const currentShuffledIndex = shuffledIndexes[currentIndex];
        const blockByShuffledIndex = blocks[currentShuffledIndex];
        blockByShuffledIndex.style.backgroundColor = generateRandomColor();
        console.log(blockByShuffledIndex.style.backgroundColor)
        
        currentIndex++;
    }, 20);
}

init();

// 1. Generate 100 blocks with a class "block" V
// 2. Add the generate blocks to the wrapper V
// 3. Start a timer for 1 sec. V
// 4. Function for a random color V
// 5. Generate an array of randomly shuffled block indexes V
// 6. Change the color of the random selected block V
// 7. Display "Completed" when the execution ends V