app.controller("myBody",function ($scope,$state,$http,$location,$interval) {
    
    $scope.num=0;
    //信息
    $http.jsonp("http://www.luckykai.com/orange/?operate=select&table=massage&callback=JSON_CALLBACK").success(function (data) {
        $scope.infoData = data.data;
        $scope.num = data.data.length;
    });

    $scope.number = "";
    $scope.text  = "发送验证码";
    var timer;
    $scope.dis = function () {
        $scope.all = true;
        var i = 5;
        $scope.text  = "还剩5秒";
        timer = $interval(function () {
            i--;
            $scope.text  = "还剩"+i+"秒";
            if(i == 0){
                $scope.all = false;
                $scope.text  = "发送验证码";
                $interval.cancel(timer);
                $http.jsonp("http://www.luckykai.com/orange/index.php/Home/index/test?callback=JSON_CALLBACK").success(function (data) {
                    if(data.data.code == "1"){
                        $scope.number = data.data;
                    }
                })
            }
        },1000)
    };
    //按钮后退
    $scope.back = function () {
        $scope.hash = $location.path().substr(1);
        console.log($scope.hash);
        if($scope.hash == "info"||$scope.hash == ""){
            $scope.hash = "index";
        }
        $state.go("info");
    };
    //遮罩层
    $scope.isShow = true;
    $scope.isHide = true;
    $scope.isClick = true;
    $scope.hack = function () {
        $state.go("help");
    };
    
    //注册
    $scope.register = function () {
        if (!$scope.users && !$scope.pwd && $scope.tel) {
            $http({
                url: "http://www.luckykai.com/orange/?operate=add&callback=JSON_CALLBACK",
                method: "jsonp",
                params: {
                    "users": $scope.users,
                    "pwd": $scope.pwd,
                    "tel": $scope.tel,
                    "table": "user"
                }
            }).success(function (data) {
                if (data.data.code == "1") {
                    $state.go("login");
                }
            }).error(function (data) {
                console.log("注册失败");
            });
        } else {
            console.log("不能为空")
        }
    };

    //获取sessionStorage 存储
    for(var key in sessionStorage){
        $scope.username = key;
        $scope.mypwd = sessionStorage[key]
    }
    //登录
    $scope.login = function () {
        if(sessionStorage.length){
            $state.go("index");
        }
        if($scope.tel != undefined)
            $http.jsonp("http://www.luckykai.com/orange/?operate=find&table=user&callback=JSON_CALLBACK&tel="+$scope.tel).success(function (data) {
                if(data){
                    if(data.data[0].pwd != $scope.pwd){
                        console.log("用户密码错误");
                    }else{
                        sessionStorage.setItem(data.data[0].users,$scope.pwd);
                        $state.go("index");
                    }
                }else {
                    console.log("用户不存在");
                }
            })
        };
    //修改密码
    $scope.updatePwd = function () {
        if($scope.pwd == $scope.pwds){
            $http({
                url: "http://www.luckykai.com/orange/?callback=JSON_CALLBACK",
                method:"jsonp",
                params:{
                    "pwd": $scope.pwd,
                    "tel": $scope.tel,
                    "operate":"update",
                    "table":"user"
                }
            }).success(function (info) {
                if(info.code){
                    $state.go("login");
                }else{
                    console.log(info.msg)
                }
            })
        }else{
            console.log("二次密码不统一");
        }

    };

    //退出
    $scope.quit = function () {
        sessionStorage.removeItem($scope.username);
        $state.go("login");
    }


});

// 渲染页面

//订单状态
app.controller("myind",function ($scope,$state,$http) {
    $http.jsonp("http://www.luckykai.com/orange/?operate=select&table=myind&callback=JSON_CALLBACK").success(function (data) {
        $scope.ind = data.data;
    });
});
//评论管理
app.controller("myCom",function ($scope,$state,$http) {
    $http.jsonp("http://www.luckykai.com/orange/?operate=select&table=comment&callback=JSON_CALLBACK").success(function (data) {
        $scope.comment = data.data;
    });
});
//粉丝
app.controller("myfans",function ($scope,$state,$http) {
    $http.jsonp("http://www.luckykai.com/orange/?operate=select&table=fans&callback=JSON_CALLBACK").success(function (data) {
        $scope.fans = data.data;
        $scope.fansLeg = data.data.length;
    });
});
//更多查询
app.controller("myselect",function ($scope,$state,$http) {
    $http.jsonp("http://www.luckykai.com/orange/?operate=select&table=record&callback=JSON_CALLBACK").success(function (data) {
        $scope.select = data.data;
    });
});