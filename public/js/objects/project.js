class project {
    image = require('skill.js');
    constructor(id, projectName, description, start, end, images, videos, skills, documentations){
        'use strict';
        this._projectName = projectName;
        this._id = id;
        this._description = description;
        this._start = start;
        this._end = end;
        //arrays
        this._images = images;
        this._videos = videos;
        this._skills = skills;
        this._documentations = documentations;
    }

    set setProjectName(projectName){
        this._projectName = projectName;
    }

    get getProjectName(){
        return this._projectName;
    }

    //-------------------------

    set setDescription(description){
        this._description = description;
    }

    get getDescription(){
        return this._description;
    }

    //--------------------------

    set setStart(start){
        this._start = start;
    }

    get getStart(){
        return this._start;
    }

    //--------------------------

    set setEnd(end){
        this._end = end;
    }

    get getEnd(){
        return this._end;
    }

    //--------------------------

    set setImages(images){
        this._images=images;
    }

    get getImages(){
        return this._images;
    }

    //--------------------------

    set setVideos(videos){
        this._videos=videos;
    }

    get getVideo(){
        return this._videos;
    }

    //--------------------------

    set setSkills(skills){
        this._skills=skills;
    }

    get getSkills(){
        return this._skills;
    }

    //--------------------------

    set setDocumentations(documentations){
        this._documentations = documentations;
    }

    get getDocumentation(){
        return this._documentations;
    }
}


/*
ex: 
project = require('../js/objects/project.js');
var proj1 = new project(1, 'project1', 'description1', 2016, 2018, [11,12,13], [14,15,16], [17,18], [19,20]);
console.log("project name: "+ proj1.getProjectName);
proj1.setProjectName = 'proj name changed'
console.log("project name: "+ proj1.getProjectName);
*/
module.exports = project;