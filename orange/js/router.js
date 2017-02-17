/**
 * Created by Administrator on 2017/2/16.
 */
app.config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider) {
    // $urlRouterProvider.otherwise("index");
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
        });
}]);