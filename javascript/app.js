$(function(){
    
    window.Member = Backbone.Model.extend({
        
    })
    
    window.MemberList = Backbone.Collection.extend({
        model: Member
    })

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
        
        initialize: function(){
            //this.el.html( this.homeTemplate );
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
        }
        
    });
    
    window.App = new AppView;
    
    App.home();
    
    //AppView.render();
})