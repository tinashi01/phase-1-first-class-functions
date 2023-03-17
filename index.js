function receivesAFunction(callback) {
    console.log(callback());
}

receivesAFunction(function() {return "hello"});

function returnsANamedFunction() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction() {
    return function(x) {return x*2;};
}