function launchBrowser(browserName){
if(browserName==`chrome`){
    console.log("Welcome to the chrome");
    
}
else{
    console.log("bye bye");
    
}
}
launchBrowser(`chrome`)

function runTests(testType){
    switch (testType) {
        case "smoke":
            console.log("Smoke is done");
            
            break;

            case "sanity":
                console.log("sanity is done");
                break;

                case "regression":
                    console.log("regression is done");
                    break;
                
    
        default:
            console.log("Smoke is done");
            break;
    }
}
runTests("sanity")