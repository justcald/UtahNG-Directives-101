// Code goes here

angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
  $scope.user1 = {
    name: 'Luke Skywalker',
    address: {
      street: 'PO Box 123',
      city: 'Secret Rebel Base',
      planet: 'Yavin 4'
    },
    friends: [
      'Han',
      'Leia',
      'Chewbacca'
    ]
  }
  $scope.user2 = {
    name: 'Han Solo',
    address: {
      street: 'PO Box 123',
      city: 'Mos Eisley',
      planet: 'Tattoine'
    },
    friends: [
      'Han',
      'Leia',
      'Chewbacca'
    ]
  }
  $scope.user3 = {
    name: 'Justin Calder',
    address: {
      street: 'PO Box 332',
      city: 'p-town',
      planet: 'crazy'
    },
    friends: [
      'Scald',
      'Hair back jack',
      'Corkles'
    ]
  }
  
});

angular.module('app').directive('userInfoCard', function() {
  return {
    templateUrl: "userInfoCard.html",
    restrict: "E",
    scope: {
      user: '='
    },
    controller: function($scope) {
      $scope.knightMe = function(user) {
        if(user.name === 'Justin Calder')
          return user.rank = "sup man"
        user.rank = "knight";
      }
    }
  }
});














