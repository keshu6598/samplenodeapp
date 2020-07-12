class book{
    constructor(name,aurthor,dateofpublish,numberofpages){
        this.name = name;
        this.aurthor =  aurthor;
        this.dateofpublish = dateofpublish;
        this.numberofpages = numberofpages;
    }
    viewbook(){
        return {name: this.name,
                aurthor: this.aurthor,
                dateofpublish: this.dateofpublish,
                numberofpages: this.numberofpages
             };
    }
}

module.exports = {
 book, book 
}