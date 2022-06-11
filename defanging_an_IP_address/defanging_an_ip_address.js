// -- Defanging an IP Address --

// Version 1
var defangIPaddr = function(address) {
    let arr = address.split("");
    arr.find((el, i, arr) => {
        el === '.' ? arr[i] = '[.]' : arr[i]
    });
    return arr.join('');
};

// Version 2
var defangIPaddr2 = function(address) {
    let arr = address.split('.').join('[.]');
    return arr
};


// Example 1
console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr2("1.1.1.1"));

// Example 2
console.log(defangIPaddr("255.100.50.0"));
console.log(defangIPaddr2("255.100.50.0"));