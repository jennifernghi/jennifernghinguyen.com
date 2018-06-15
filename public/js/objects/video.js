class video{
    constructor(video_link){
        this._video_link = video_link;
    }

    set setVideoLink(video_link){
        this._video_link = video_link;
    }

    get getVideoLink(){
        return this._video_link;
    }

}

module.exports = video;