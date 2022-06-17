// -- Maximum Number of Words Found in Sentences --

// Regular version
var mostWordsFound = function(sentences) {
    let max = 0;
    for (let i = 0; i < sentences.length; i++) {
        let result = 1;
        for (let j = 0; j < sentences[i].length; j++) {
            sentences[i][j] === ' ' ? result += 1 : result
        }
        max = Math.max(max, result)
    }
    return max
}

// Short version
var mostWordsFound2 = function(sentences) {
    sentences.reduce((a, c) => Math.max(a, c.split(" ").length), 0);
};

// Example 1
console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));

// Example 2
console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]));

// Example 3
console.log(mostWordsFound(["w jrpihe zsyqn l dxchifbxlasaehj","nmmfrwyl jscqyxk a xfibiooix xolyqfdspkliyejsnksfewbjom","xnleojowaxwpyogyrayfgyuzhgtdzrsyococuqexggigtberizdzlyrdsfvryiynhg","krpwiazoulcixkkeyogizvicdkbrsiiuhizhkxdpssynfzuigvcbovm","rgmz rgztiup wqnvbucfqcyjivvoeedyxvjsmtqwpqpxmzdupfyfeewxegrlbjtsjkusyektigr","o lgsbechr lqcgfiat pkqdutzrq iveyv iqzgvyddyoqqmqerbmkxlbtmdtkinlk","hrvh efqvjilibdqxjlpmanmogiossjyxepotezo","qstd zui nbbohtuk","qsdrerdzjvhxjqchvuewevyzlkyydpeeblpc"]));

