class resume{
    constructor(fullName, introduction, objective, skills){
        this._full_name = fullName;
        this._introduction = introduction;
        this._objective = objective;

        //arrays
        this._skills = skills;
    }

    set setFullName(fullName){
        this._full_name = fullName;
    }

    get getFullName(){
        return this._full_name;
    }
    
    //----------------
    
    set setIntroduction(introduction){
        this._introduction = introduction;
    }

    get getIntroduction(){
        return this._introduction;
    }

    //----------------

    set setObjective(objective){
        this._objective = objective;
    }

    get getObjective(){
        return this._objective;
    }

    //----------------


    set setSkills(skills){
        this._skills = skills;
    }

    get getSkills(){
        return this._skills;
    }
}

module.exports = resume;