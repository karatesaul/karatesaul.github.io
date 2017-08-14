angular.module('karatesaul').component('linksPage', {
    templateUrl: 'src/links/links.html',
    controller: LinksPageCtrl
});

function LinksPageCtrl () {
    this.links = [
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/saul-winer-30b69858/',
            linkText: 'www.linkedin.com/in/saul-winer-30b69858/'
        }, {
            name: 'Old Portfolio',
            href: 'https://saulwiner.carbonmade.com',
            linkText: 'saulwiner.carbonmade.com'
        }, {
            name: 'Shocase Profile',
            href: 'https://www.shocase.com/saulwiner',
            linkText: 'www.shocase.com/saulwiner'
        }
    ];
}
