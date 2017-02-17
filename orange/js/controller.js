/**
 * Created by Administrator on 2017/2/16.
 */
app.controller("myBody",function ($scope,$state,$http,$location) {
    $http.jsonp("http://localhost:3000/users/select?tables=massage&callback=JSON_CALLBACK").success(function (data) {
        $scope.infoData = data;
    });
    //按钮后退
    $scope.back = function () {
        $scope.hash = $location.path().substr(1);
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
        $http({
            url:"http://localhost:3000/users/add/?callback=JSON_CALLBACK",
            method:"jsonp",
            params:{
                "users":$scope.users,
                "pwd":$scope.pwd,
                "tel":$scope.tel,
                "tables": "user"
            }
        }).success(function(data) {
            if(data.code == "1"){
                $state.go("login");
            }
        }).error(function(data) {
            console.log("注册失败");
        });
    };
    //登录
    $scope.login = function () {
        if($scope.tel != undefined)
            $http.jsonp(
                "http://localhost:3000/users/find?callback=JSON_CALLBACK&tel="+$scope.tel).success(function (data) {
                if(data){
                    if(data[0].pwd != $scope.pwd){
                        console.log("用户密码错误")
                    }else{
                        $state.go("index");
                    }
                }else {
                    alert(2)
                }
            })
        };
    //修改密码
    
});

//渲染页面
// app.controller("myInfo",function ($scope,$state,$http) {
//
// });