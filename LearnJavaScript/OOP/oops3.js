console.log('learning Asynchronous Programming');
// This will complete the priority code 1st
setTimeout(() => {
    for (let index = 0; index < 4520; index++) {
        const element = index;
    
        console.log('This is the index of' + index);
    }
}, 100);
console.log('Done printing');
// This will complete the loop then printing the done printing console

/*
for (let index = 0; index < 4520; index++) {
    const element = index;

    console.log('This is the index of' + index);
}
console.log('Done printing');
*/





















/*

Sync program vs Async program

Any computation we do required processor for our engine to get the job done!

Many request interact with things outsides of the processor. For example, they may communicate over a nerwork or request data from the storage disk.

This is a lot slower than getting it from memory.

we dont want our processor to sit idle when such things are happening.


3 way to write the async programming



*/



