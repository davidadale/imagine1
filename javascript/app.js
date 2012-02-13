$(function(){
    
    window.Member = Backbone.Model.extend();
    
    window.MemberList = Backbone.Collection.extend({
        model:Member,
        url:'http://localhost:9000/_cms/data/q/members'
    });
    
    window.Members = new MemberList;
    
    
    /* handles all the main content on the page */
    window.AppView = Backbone.View.extend({
        el:$("#main_view"),
        events: {
            "submit #theForm" : "saveMember",
            "submit #contactForm" : "sendMessage"
        },
        saveMember: function(){
            //$.post("test.php", $("#testform").serialize());
            $.post("/_cms/data/members",$("#theForm").serialize(),function(data){
                document.location = "index.html"
            });
        },
        sendMessage: function(){
            $.post("/_cms/data/messages",$("#contactForm").serialize(),function(data){
                document.location = "index.html"
            });            
        }    
    })
    
    window.App = new AppView
})