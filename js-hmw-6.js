// ეს არის ფუნქცია რომელიც დაგვიწერს კენტ რიცხვებს 1-დან 100-მდე

function oddnumbers(){
    var n = 1;
    while(n<=100){
        if (n%2==1)
        document.write(n + "," + " ");
        n++;
    }
}
oddnumbers();