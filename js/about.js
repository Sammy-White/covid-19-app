var i = 0;
var txt = 'This web application fetches its data from John Hopkins University Covid-19 Api, which is been updated on daily basis. The method used in extracting data from the api is the Javascript fetch Api method.  Its front end was built with pure JavaScript and I also integrated chartjs to display the numerical output in a graphical representation like bar char, While the back end was built using Node.js and Expressjs.The code for this application can be found in my github page github link can be found down below for more reference.';
var speed = 50;

function typeWriter() {
    if(i < txt.length)
    document.getElementById('para').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed)
}