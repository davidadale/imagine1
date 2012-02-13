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
            "submit #theForm" : "saveMember"
        },
        saveMember: function(){
            //$.post("test.php", $("#testform").serialize());
            $.post("http://localhost:9000/_cms/data/members",$("#theForm").serialize(),function(data){
                $("#main_view").html("<h1>Welcome to One Family</h1>");
            });
        }    
    })
    
    window.App = new AppView
})