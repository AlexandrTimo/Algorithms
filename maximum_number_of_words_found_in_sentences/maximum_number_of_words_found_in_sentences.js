var mostWordsFound = function(sentences) {
    sentences.reduce((a, c) => Math.max(a, c.split(" ").length), 0);
};

// Example 1
console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]));