class image{
    constructor(image_link, credit){
        this._image_link = image_link;
        this._credit = credit;
    }

    set setImageLink(image_link){
        this._image_link = image_link;
    }

    get getImageLink(){
        return this._image_link;
    }

    //---------------------------

    set setCredit(credit){
        this._credit=credit;
    }

    get getCredit(){
        return this._credit;
    }

}

module.exports = image;