https://www.codewars.com/kata/5558cc216a7a231ac9000022/train/javascript

    function duplicates(arr) {
        arr = arr.filter((el, i) => arr.indexOf(el) !== arr.lastIndexOf(el) && i !== arr.indexOf(el));
        return arr.filter((el, i) => i === arr.indexOf(el));
    }