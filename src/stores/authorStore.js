"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ChangeEvent = 'change';
var _ = require('lodash');

var _authors = [];

var AuthorStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback){
        this.on(ChangeEvent, callback);
    },
    removeChangeListener: function(callback){
        this.removeListener(ChangeEvent, callback);
    },
    emitChange: function(){
        this.emit(ChangeEvent);
    },
    getAllAuthors: function (){
        return _authors;
    },
    getAuthorById: function(id){
        return _.find(_authors, {id: id});
    }
});

Dispatcher.register(function(action){
    switch(action.actionType) {
        case ActionTypes.InitializeApp:
            _authors = action.initData.authors;
            break;
        case ActionTypes.CreateAuthor:
            _authors.push(action.author);
            break;
        case ActionTypes.DeleteAuthor:
            _.remove(_authors, function (author){
                return action.authorId === author.id
            });
            break;
    }
    AuthorStore.emitChange();
});


module.exports = AuthorStore;

