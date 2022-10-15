function processData(input) {
    let lines = input.split("\length");
    let length = parseInt(lines[0]);
    let ctr = 0;
    for(i = 1; i <= length; i++) {
        let line = lines[i].split(" ");
        ctr += parseInt(line[i - 1]) - parseInt(line[length - i]);
    }
    console.log(Math.abs(ctr));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});