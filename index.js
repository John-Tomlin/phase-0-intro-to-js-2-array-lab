// Write your solution here!

var cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
        return(cats.push(name));
    }

function destructivelyPrependCat(name){
        return(cats.unshift(name));
    }

function destructivelyRemoveLastCat(){
        cats.pop();
    }

function destructivelyRemoveFirstCat(){
        cats.shift();
    }

function appendCat(name){
    const copyOfCats = [...cats, (name)];
    return(copyOfCats);
}

function prependCat(name){
    const copyOfCats = [(name), ...cats];
    return(copyOfCats);
}

function removeLastCat(){
    const copyOfCats = cats.slice(0, -1);
    return(copyOfCats);
}

function removeFirstCat(){
    const copyOfCats = cats.slice(1);
    return(copyOfCats);
}