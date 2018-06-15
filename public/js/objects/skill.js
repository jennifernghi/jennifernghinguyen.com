class skill{
    constructor(skill_name, skill_color, skill_icon_link){
        this._skill_name = skill_name;
        this._skill_color = skill_color;
        this._skill_icon_link = skill_icon_link;
    }

    set setSkillName(skill_name){
        this._skill_name = skill_name;
    }

    get getSkillName(){
        return this._skill_name;
    }

    //---------------------------

    set setSkillColor(skill_color){
        this._skill_color = skill_color;
    }

    get getSkillColor(){
        return this._skill_color;
    }

    //---------------------------

    set setSkillIconLink(skill_icon_link){
        this._skill_icon_link = skill_icon_link;
    }

    get getSkillIconLink(){
        return this._skill_icon_link;
    }
}

module.exports = skill;