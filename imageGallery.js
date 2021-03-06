/*I know that you can import and parse a JSON file but because the browser security issues I decided to put the JSON info into my JavaScript.*/
/*First we have to get the JSON so that we can parse through it. Instead of doing this I decided it would be easier to just make the JSON a local variable. */

function currentImgController($scope){
$scope.gallery = {
    "gallery-title": "Famous Creatures",
     "photos": [{
        "attribution": "Carter Brown",
        "creation-data": "2009-01-08T19:20:30+01:00",
        "description": "Annoyed at the length of the photo shoot, this otter diva barks at her assistant for another cuppachino.",
        "title": "otter",
        "src": " img/otter.jpeg"
    }, {
        "attribution": "Harrision K. B.",
        "creation-data": "2011-10-28T16:43:00+04:00",
        "description": "Considered a star in the snail community, this little guy can be seen in two shots in Pixar's 'A Bug's Life' and acheived child star status with his premiering role in 'Honey I Shrunk the Kids'. ",
        "title": "snail",
        "src": " img/snail.jpeg "
    }, {
        "attribution": "Amber Crockett",
        "creation-data": "2007-07-07T13:00:00+01:00",
        "description": "In a shameful and desperate attempt for attention, this granddaughter of the once great fox of Fox in Socks fame, claims to have been the inspiration behind the ears on Josie and her Pussycats. Aside from the obvious problem of the band's ears being feline in nature and foxes being of the canine varity, there is also the anachronistic problems, Josie predating this young fox by several decades... Just shameful!",
        "title": "Fox",
        "src": " img/fox.jpeg"
    }, {
        "attribution": "Creative Commons",
        "description": "Widely roumored to be the site of the elusive Durmstrang school for wizards, made famous (infamous?) in the works of renouned biographer J.K. Rowling's epic seven part expose on one Harry Potter, this lake in northern Russia Baikal region has long been known for it's magical properites and unexplained evnets.",
        "src": " img/Northern_Baikal_Russia.jpeg"
    }, {
        "description": "This gentle giant of the land-based arachnids is a common house pet for a legion of adolesant and pre-adolesant boys.",
        "title": "Taranchula",
        "src": " img/taranchula.jpeg"
    }, {
        "attribution": "Creative Commons",
        "description": "A plesant picnic in the grass adds some extra color to another beautiful day on the preserve",
        "title": "Chimpanzes",
        "src": " img/chimps.jpeg"
    }, {
        "attribution": "Creative Commons",
        "title": "African elephants",
        "src": " img/African_elephant.jpeg"
    }, {
        "attribution": "Creative Commons",
        "description": "A mysogonist bird makes cat calls at a passing female on his lunch break. The bird was later reported to H.R. and his union rep, but was merely given a slap on the wrist. When questioned about the diminutive punishment, the H.R. rep stated unapologetically, 'birds will be birds.' Of no comfort to the passing female as this was the thrid time this week she had been whistled at in a tone denoting that the male is available for mating",
        "title": "Bird is the word",
        "src": " img/bird.jpeg"
    }]
};
}
/*I have two designs that I could go with. 1) I could just have the JS generate an img tag for each item in the JSON or 2) I could have it generate one img tag and two buttons that would be used to cycle through the images.*/
/*Lets start by generating an img tag for each item. I'm not sure if this is the best way to do this but it gets the job done.*/