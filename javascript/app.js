$(function(){
    
    window.Member = Backbone.Model.extend({
        
    })
    
    window.MemberList = Backbone.Collection.extend({
        model: Member,
        url:'http://localhost:9000/_cms/data/q/members'
    })
    
    window.members = new MemberList

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
            MemberList.bind('add',   this.addOne, this);
            MemberList.bind('reset', this.addAll, this);
            MemberList.bind('all',   this.render, this);    
            
            members.fetch();        
            
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

            this.el.html( this.memberTemplate );
        },
        addOne: function(member) {
             $("#membersList").append("<li>"+member.name +"</li>" );
        },
        addAll: function(){
            console.log("bang bang bang");
            members.each( this.addOne );
        }        
        
    });
    
    window.App = new AppView;
    
    App.home();
    
    //AppView.render();
})