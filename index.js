// foo.map(function (el, ind, arr) {

//     if (arr[ind] != '-') {
//         if (arr[ind] - 1 == '-') {
//             arr[ind].toUpperCase()
//         } else { el }
//     } else if (arr[ind] == '-') { arr.splice(ind) }
// }
// );





function camelize(word) {
    let foo = word;
    foo.map(function (el, ind, arr) {

        if (arr[ind] == '-') {
            arr[ind + 1] = arr[ind + 1].toUpperCase();
            arr.splice(ind, 1)

        };
        foo.join('');
    })
}




function Calculator(expr) {
    let str = expr;
    let strz = str.split('');
    let result = function () {
        let res
        strz.find((el) => (el == '+') ? res = '+' : false);
        strz.find((el) => (el == '-') ? res = '-' : false);
        return res
    };

    let strz2 = strz.slice();

    strz2.forEach(function (el, ind, ar) {
        if (ar[ind] == '+' || ar[ind] == '-' || ar[ind] == ' ') { ar[ind] = 0 }
        else { ar[ind] = Number(ar[ind]) }
    })

    let fin = (result() == '+') ? strz2[0] + strz2[4] :
        (result() == '-') ? strz2[0] - strz2[4] : false;
    this.calculate = fin;
};


let calc = new Calculator('7 + 9');

calc.calculate



//////////////////////



function Calculator() {

    this.calculate = function (expr) {
        let str = expr;
        let strz = str.split('');

        let result = function () {
            let res
            strz.find((el) => (el == '+') ? res = '+' : false);
            strz.find((el) => (el == '-') ? res = '-' : false);
            return res
        };

        let strz2 = strz.slice();

        strz2.forEach(function (el, ind, ar) {
            if (ar[ind] == '+' || ar[ind] == '-' || ar[ind] == ' ') { ar[ind] = 0 }
            else { ar[ind] = Number(ar[ind]) }
        })

        let fin = (result() == '+') ? strz2[0] + strz2[4] :
            (result() == '-') ? strz2[0] - strz2[4] : false;

        return fin

    };

    this.addMethod = function(){
     return this.calculate = function(name, func) {

        let str = name;
        let strz = str.split('');

        let result = function () {
            let res
            strz.find((el) => (el == '+') ? res = '+' : false);
            strz.find((el) => (el == '-') ? res = '-' : false);
            strz.find((el) => (el == '*') ? res = '*' : false);
            strz.find((el) => (el == '/') ? res = '/' : false);
            strz.find((el) => (el == '**') ? res = '**' : false);
            return res
        };

        let strz2 = strz.slice();

        strz2.forEach(function (el, ind, ar) {
            if (ar[ind] == '+' || ar[ind] == '-' || ar[ind] == ' ' || ar[ind] == '*' || ar[ind] == '/') {ar[ind] == '**'} 
            else { ar[ind] = Number(ar[ind]) }
        });
       
        let fin = (result()) ==  (result() == '+') ? strz2[0] + strz2[4] : 
        (result() == '-') ? strz2[0] - strz2[4] :
        (reusult() == '*') ? strz[0] * strz2[4] :
        (reusult() == '/') ? strz[0] / strz2[4] :
        (reusult() == '/') ? Math.pow(strz[0], strz2[4]) :
        false;
        return fin
    };
    
}
};


let calcs = new Calculator;

calcs.addMethod("**", (a, b) => a ** b);


calcs.calculate("3 + 7");



//////////////////////////////////////////////////////






function Calculator() {

    this.calculate = function (expr) {
        let str = expr;
        let strz = str.split('');

        let result = function () {
            let res
            strz.find((el) => (el == '+') ? res = '+' : false);
            strz.find((el) => (el == '-') ? res = '-' : false);
            return res
        };

        let strz2 = strz.slice();

        strz2.forEach(function (el, ind, ar) {
            if (ar[ind] == '+' || ar[ind] == '-' || ar[ind] == ' ') { ar[ind] = 0 }
            else { ar[ind] = Number(ar[ind]) }
        })

        let fin = (result() == '+') ? strz2[0] + strz2[4] :
            (result() == '-') ? strz2[0] - strz2[4] : false;

        return fin

    };

    this.addMethod = function(name, func){
     return this.calculate = function(expr) {

        let str = expr;
        let strz = str.split('');

        
            let res
            strz.find((el) => (el == '+') ? res = '+' : false);
            strz.find((el) => (el == '-') ? res = '-' : false);
            strz.find((el) => (el == '*') ? res = '*' : false);
            strz.find((el) => (el == '/') ? res = '/' : false);
            strz.find((el) => (el == '**') ? res = '**' : false);
               
            
     
         let strz2 = strz.slice();

        strz2.forEach(function (el, ind, ar) {
            if (ar[ind] == '+' || ar[ind] == '-' || ar[ind] == ' ' || ar[ind] == '*' || ar[ind] == '/') {ar[ind] == '**'} 
            else { ar[ind] = Number(ar[ind]) }
        });
        

          let fin = (res == '+') ? strz2[0] + strz2[4] : 
        (res == '-') ? strz2[0] - strz2[4] :
        (res == '*' && func == '(a, b) => a * b') ? strz2[0] * strz2[4] :
        (res == '/' && func == '(a, b) => a / b') ? strz2[0] / strz2[4] :
        (res == '**' && func == '(a, b) => a ** b') ? strz2[0] ** strz2[4] :
        false;
        return fin
    
}
};}











