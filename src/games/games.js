angular.module('karatesaul').component('gamesPage', {
    templateUrl: 'src/games/games.html',
    controller: GamesPageCtrl
});

function GamesPageCtrl () {
    this.games = [];
}
