$(function(){
    
    window.Member = Backbone.Model.extend();
    
    window.MemberList = Backbone.Collection.extend({
        model:Member,
        url:'http://localhost:9000/_cms/data/q/members'
    });
    
    window.Members = new MemberList;
    
    
    /* handles all the main content on the page */
    window.MainView = Backbone.View.extend({
        el:$("#main_view"),
        homeTemplate: _.template( $("#home").html() )
        
    })
})