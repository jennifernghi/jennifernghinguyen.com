class documentation{
    constructor(doc_title, doc_link){
        this._doc_title = doc_title;
        this._doc_link = doc_link; 
    }

    set setDocTitle(doc_title){
        this._doc_title = doc_title;
    }

    get getDocTitle(){
        return this._doc_title;
    }

    //---------------------------

    set setDocLink(doc_link){
        this._doc_link=doc_link;
    }

    get getDocLink(){
        return this._doc_link;
    }

}

module.exports = documentation;