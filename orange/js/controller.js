/**
 * Created by Administrator on 2017/2/16.
 */
app.controller("myBody",function ($scope,$state,$http,$location,$interval) {
    $scope.num=0;
    //信息
    $http.jsonp("http://localhost:3000/users/select?tables=massage&callback=JSON_CALLBACK").success(function (data) {
        $scope.infoData = data;
        $scope.num = data.length;
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
                $http.jsonp("http://localhost:3000/test?callback=JSON_CALLBACK").success(function (data) {
                    if(data.code == "1"){
                        $scope.number = data.test;
                    }
                })
            }
        },1000)
    }


    //按钮后退
    $scope.back = function () {
        $scope.hash = $location.path().substr(1);
        console.log($scope.hash);
        if($scope.hash == "info"||$scope.hash == ""){
            $scope.hash == "index";
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
                url: "http://localhost:3000/users/add/?callback=JSON_CALLBACK",
                method: "jsonp",
                params: {
                    "users": $scope.users,
                    "pwd": $scope.pwd,
                    "tel": $scope.tel,
                    "tables": "user"
                }
            }).success(function (data) {
                if (data.code == "1") {
                    $state.go("login");
                }
            }).error(function (data) {
                console.log("注册失败");
            });
        } else {
            console.log("不能为空")
        }
    };
    //登录
    $scope.login = function () {
        if($scope.tel != undefined)
            $http.jsonp("http://localhost:3000/users/find?callback=JSON_CALLBACK&tel="+$scope.tel).success(function (data) {
                if(data){
                    if(data[0].pwd != $scope.pwd){
                        console.log("用户密码错误");
                    }else{
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
                url: "http://localhost:3000/users/updates?callback=JSON_CALLBACK",
                method:"jsonp",
                params:{
                    "pwd": $scope.pwd,
                    "tel": $scope.tel
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

    }
});

// 渲染页面

//订单状态
app.controller("myind",function ($scope,$state,$http) {
    $http.jsonp("http://localhost:3000/users/select?tables=myind&callback=JSON_CALLBACK").success(function (data) {
        $scope.ind = data;
    });
});
//评论管理
app.controller("myCom",function ($scope,$state,$http) {
    $http.jsonp("http://localhost:3000/users/select?tables=comment&callback=JSON_CALLBACK").success(function (data) {
        $scope.comment = data;
    });
});
//粉丝
app.controller("myfans",function ($scope,$state,$http) {
    $http.jsonp("http://localhost:3000/users/select?tables=fans&callback=JSON_CALLBACK").success(function (data) {
        $scope.fans = data;
    });
});
//更多查询
app.controller("myselect",function ($scope,$state,$http) {
    $http.jsonp("http://localhost:3000/users/select?tables=record&callback=JSON_CALLBACK").success(function (data) {
        $scope.select = data;
    });
});