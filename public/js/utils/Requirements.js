class Requirements{

    constructor(){
        
    }

    static express(){
        return require('express');
    }

    static mysql(){
        return require('mysql');
    }

    static path(){
        return require('path');
    }

    static bodyParser(){
        return require('body-parser');
    }
}

module.exports = Requirements;