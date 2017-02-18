/**
 * Created by Administrator on 2017/2/16.
 */
app.config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        //优橙协助
        .state("help",{
            url:"help",
            views:{
                "body":{
                    templateUrl:"help.html",
                    constroller:"myBody"
                }
            }
        })
        //验证登录
        .state("login_first",{
            url:"login_first",
            views:{
                "body":{
                    templateUrl:"login_first.html",
                    constroller:"myBody"
                }
            }
        })
        //首页
        .state("index",{
            url:"index",
            views:{
                "body":{
                    templateUrl:"index.html",
                    constroller:"myBody",
                    params:{
                        "name": "user"
                    }
                }
            }
        })
        //消息通知
        .state("info",{
            url:"info",
            views:{
                "body":{
                    templateUrl:"info.html"
                    // constroller:"myBody"
                }
            }
        })
        //评论管理
        .state("comment",{
            url:"comment",
            views:{
                "body":{
                    templateUrl:"comment.html",
                    constroller:"myBody"

                }
            }
        })
        //登录
        .state("login",{
            url:"login",
            views:{
                "body":{
                    templateUrl:"login.html",
                    controller: "myBody"
                }
            }
        })
        //我的店铺
        .state("myinf",{
            url:"myinf",
            views:{
                "body.content":{
                    templateUrl:"myinf.html",
                    constroller:"myBody"

                }
            }
        })
        //绑定支付宝
        .state("fzb",{
            url:"fzb",
            views:{
                "body":{
                    templateUrl:"fzb.html",
                    constroller:"myBody"
                }
            }
        })
        //收货信息
        .state("Modify",{
            url:"Modify",
            views:{
                "body":{
                    templateUrl:"Modify.html",
                    controller: "myBody"
                }
            }
        })
        //注册
        .state("register",{
            url:"register",
            views:{
                "body":{
                    templateUrl:"register.html",
                    controller: "myBody"
                }
            }
        })
        //密码管理
        .state("pwd",{
            url:"pwd",
            views:{
                "body":{
                    templateUrl:"pwd.html",
                    controller: "myBody"
                }
            }
        })
        .state("myind",{
            url:"myind",
            views:{
                "body.content":{
                    templateUrl:"myind.html",
                    controller: "myind"
                }
            }
        })
        .state("fans",{
            url:"fans",
            views:{
                "body":{
                    templateUrl:"fans.html",
                    controller: "myfans"
                }
            }
        })
        .state("select",{
            url:"select",
            views:{
                "body":{
                    templateUrl:"select.html",
                    controller: "myselect"
                }
            }
        })
        .state("personal",{
            url:"personal",
            views:{
                "body":{
                    templateUrl:"shops and personal.html",
                    controller: "myBody"
                }
            }
        })
        .state("release",{
            url:"release",
            views:{
                "body":{
                    templateUrl:"release.html",
                    controller: "myBody"
                }
            }
        })
        .state("money",{
            url:"money",
            views:{
                "body":{
                    templateUrl:"money.html",
                    controller: "myBody"
                }
            }
        })
        .state("top-up",{
            url:"top-up",
            views:{
                "body":{
                    templateUrl:"top-up.html",
                    controller: "myBody"
                }
            }
        })
        .state("tixian",{
            url:"tixian",
            views:{
                "body":{
                    templateUrl:"tixian.html",
                    controller: "myBody"
                }
            }
        })
        .state("card",{
            url:"card",
            views:{
                "body":{
                    templateUrl:"card.html",
                    controller: "myBody"
                }
            }
        })
        .state("deposit",{
            url:"deposit",
            views:{
                "body":{
                    templateUrl:"deposit.html",
                    controller: "myBody"
                }
            }
        })
        .state("collate",{
            url:"collate",
            views:{
                "body":{
                    templateUrl:"collate.html",
                    controller: "myBody"
                }
            }
        })
        .state("collate_two",{
            url:"collate_two",
            views:{
                "body":{
                    templateUrl:"collate_two.html",
                    controller: "myBody"
                }
            }
        })
        .state("collate_three",{
            url:"collate_three",
            views:{
                "body":{
                    templateUrl:"collate_three.html",
                    controller: "myBody"
                }
            }
        })
        .state("goods",{
            url:"goods",
            views:{
                "body":{
                    templateUrl:"goods.html",
                    controller: "myBody"
                }
            }
        });
    // $urlRouterProvider.otherwise("index");

}]);
