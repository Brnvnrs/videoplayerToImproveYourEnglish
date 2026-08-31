class Main{
    subtitles;
    listOfWords;
    constructor(sbt){
        this.subtitles = required("fs").readFileSync(sbt+".srt", "utf8");
        this.listOfWords = {};
    }
    /* word => meaning */
    #getWords(){ //
        /* */
        this.listOfWords = this.subtitles.split(/\s+/);// I get every word or symbol between spaces
        /*we have to quit the number here */
        this.listOfWords = filterNumber(this.listOfWords); //the numbers gonna be [0,1,2,3,4,5,6,7,8,9]
        this.listOfWords = filterSymbol(this.listOfWords); //the symbols gonna be [-,>]


    }


}