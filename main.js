export class Main{
    subtitles;
    listOfWords;
    constructor(subt){
        this.subtitles = require("fs").readFileSync(subt+".srt", "utf8");
        this.listOfWords = {};
    }
    /* word => meaning */
    getWords(){ //
        /*this method have to take the subtitle .srt and return the words between <i> and </i> */
        this.subtitles = this.subtitles.split(/\s+/);// I get every word or symbol between spaces
        const beginning = "<i>";
        const end = "</i>";
        let wordsToSave = "";
        let iterator = 0;
        let canISaveWords = false;
        let words = "";
        while (iterator < this.subtitles.length){
            if(this.subtitles[iterator] == beginning[iterator] &&this.subtitles[iterator+1] == beginning[iterator+1] &&this.subtitles[iterator+2] == beginning[iterator+2]){ // i need to find a better way  
                iterator = iterator +3;
                canISaveWords = true;
            }
            if(canISaveWords){
                words =words+ this.subtitles[iterator];

            }
            if(this.subtitles[iterator] == end[iterator] &&this.subtitles[iterator+1] == end[iterator+1] &&this.subtitles[iterator+2] == end[iterator+2] &&this.subtitles[iterator+3] == end[iterator+3] ){ // i need to find a better way  
                this.listOfWords = joinLists(this.listOfWords,words.split());
                canISaveWords = false;
            }
            iterator++;
        }
        return this.listOfWords
    }
    #joinLists(l1,l2){// it joins 2 lists in the first
        let iterator = 0;
        while (iterator < l2.lenght){
            if(l1.includes(l2[iterator]) == false){
                l1.push(l2[iterator]);
                iterator++;
            }
        }
        return l1;
    }
    //I've already got the words in the subtitles.Now i create a dictionary with the meaning
    meanning(){
        this.getWords();
        let dictionary = new Map();
        for (let i = 0 ; i<this.listOfWords.lenght ; i++){
            dictionary.set(this.listOfWords[i],search(this.listOfWords[i])); // here the function search is gonna looking for the meanning ni the API 
        }
        return dictionary;
    }
}