//CREATE THE GLOBAL VARIABLE with a JSON OBJECT containing your name and githubProfile

document.onreadystatechange = function() {
    if (document.readyState == 'complete') {
        setName();
        setGithubProfile();
        registerClickOnMyName();
    }
}

function setName() {
    var myNameElement = getMyNameElement();
    var html = myNameElement.innerHTML;
    //concatenate your name (from the JSON) to the html
    
    //set the innerHTML property of myNameElement to html
    
}

function setGithubProfile() {
    var linkElement = document.getElementsByTagName('a')[0];
    //set the attribute href of linkElement to your githubProfile
    
}

function registerClickOnMyName() {
    var myNameElement = getMyNameElement();
    myNameElement.onclick = function() {
        //set the color of the element to 'blue'
        
    }
}

function getMyNameElement() {
    return document.getElementById('myname');
}

