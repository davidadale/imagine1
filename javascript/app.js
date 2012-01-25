$(function(){
    
    window.Member = Backbone.Model.extend({
        
    })
    
    window.MemberList = Backbone.Collection.extend({
        model: Member,
        url:'http://localhost:9000/_cms/data/q/members'
    })
    
    window.Members = new MemberList

    window.AppView = Backbone.View.extend({
        el:$("#center"),
        homeTemplate: _.template($("#home").html() ),
        envisionTemplate:_.template($("#envision").html()),
        embraceTemplate:_.template($("#embrace").html()),
        joinTemplate:_.template($("#join").html()),
        engageTemplate:_.template($("#engage").html()),
        promoteTemplate:_.template($("#promote").html()),
        joinFormTemplate:_.template($("#joinForm").html()),
        memberTemplate:_.template($("#members").html()),
        
        events: {
          "submit #theForm" : "saveMember"
        },        
        
        saveMember: function(){
            //$.post("test.php", $("#testform").serialize());
            $.post("/_cms/data/members",$("#theForm").serialize(),function(data){
                App.members();
            });
        },
        
        initialize: function(){
            //this.el.html( this.homeTemplate );
            Members.bind('add', this.addOne, this);
            Members.bind('reset',this.addAll, this);
            Members.bind('all', this.render, this);    
        },
        envision:function(){
            this.el.html( this.envisionTemplate );
        },
        embrace:function(){
            this.el.html( this.embraceTemplate );
        },
        join:function(){
            this.el.html( this.joinTemplate );
        },
        engage:function(){
            this.el.html( this.engageTemplate );
        },        
        promote:function(){
            this.el.html( this.promoteTemplate );
        },
        home:function(){
            this.el.html( this.homeTemplate );
        },
        joinForm:function(){
            this.el.html( this.joinFormTemplate );
        },
        members:function(){
            Members.fetch();
            this.el.html( this.memberTemplate );
        },
        addOne: function(member) {
            //console.log("ding ding ding: " + member[0]);     
             console.log( JSON.stringify( member ) );      
            $("#membersList").append( "<li>" + member.name(0) + "</li>" );
        },
        addAll: function(){
            console.log("bang bang bang");
            Members.each( this.addOne );
        }        
        
    });
    
    window.App = new AppView;
    
    App.home();
    
    //AppView.render();
})