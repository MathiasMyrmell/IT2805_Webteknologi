/* Part 2 */
console.log('PART 2')
for(i = 1; i <= 20; i++){
    console.log(i);
}
/* Part 3 */
console.log('PART 3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for(i = 0; i < numbers.length; i++){
    if(numbers[i] % 3 == 0 && numbers[i] % 5 == 0){
        console.log('eplekake');
    }
    else if(numbers[i]%3 == 0){
        console.log('eple');
    }
    else if(numbers[i]%5 == 0){
        console.log('kake');
    }
    else{
        console.log(numbers[i]);
    }
}
/* Part 4 */
document.getElementById("title").innerText = "Hello, JavaScript!";

/* Part 5 */
function changeDisplay () {
    const element = document.getElementById("magic");
    element.style.display = "none";
    console.log("changeDisplay");
}

function changeVisibility () {
    const element = document.getElementById("magic");
    element.style.visibility = "hidden";
    element.style.display = "block";
    console.log("changeVisibility");
}

function reset () {
    const element = document.getElementById("magic");
    element.style.display = "block";
    element.style.visibility = "visible";
    console.log("reset");
}

/* Part 6 */
console.log('PART 6')
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];
const element = document.getElementById("tech");
for(i = 0; i < technologies.length; i++){
    const li = document.createElement("li");
    li.innerText = technologies[i];
    element.appendChild(li);
}

