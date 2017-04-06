"use strict";
var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
    createAuthor: function(author) {
        var newAuthor = AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: ActionTypes.CreateAuthor,
            author: newAuthor
        });        
    },
    deleteAuthor: function(id) {
        if (!id) return;
        AuthorApi.deleteAuthor(id);

        Dispatcher.dispatch({
            actionType: ActionTypes.DeleteAuthor,
            authorId: id
        });
    },    
    initializeApp: function() {
        Dispatcher.dispatch({
            actionType: ActionTypes.InitializeApp,
            initData: {
                authors: AuthorApi.getAllAuthors()
            }
        })
    }
};

module.exports = AuthorActions;