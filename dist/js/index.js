"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); // runtime imports provided by skypack - how cool is that??


var _react = require("https://cdn.skypack.dev/react@17.0.1");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("https://cdn.skypack.dev/react-dom@17.0.1");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var author = "Kahlil Gibran";

var targetChapterID = String(window.location.hash).split('#')[1];

var chapters = {
  theComingOfTheShip: {
    title: 'The Coming of the Ship',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "The Coming of the Ship"
      ),
      _react2.default.createElement(
        "em",
        null,
        "for Nadi"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Almustafa, the chosen and the beloved, who was a dawn unto his own day, had waited twelve years in the city of Orphalese for his ship that was to return and bear him back to the isle of his birth. ",
        _react2.default.createElement("br", null),
        "And in the twelfth year, on the seventh day of Ielool, the month of reaping, he climbed the hill without the city walls and looked seaward; and he beheld his ship coming with the mist. ",
        _react2.default.createElement("br", null),
        "Then the gates of his heart were flung open, and his joy flew far over the sea. And he closed his eyes and prayed in the silences of his soul."
      ),
      _react2.default.createElement(
        "p",
        null,
        "But as he descended the hill, a sadness came upon him, and he thought in his heart: ",
        _react2.default.createElement("br", null),
        "How shall I go in peace and without sorrow? Nay, not without a wound in the spirit shall I leave this city. ",
        _react2.default.createElement("br", null),
        "Long were the days of pain I have spent within its walls, and long were the nights of aloneness; and who can depart of his pain and his aloneness without regret? ",
        _react2.default.createElement("br", null),
        "Too many fragments of the spirit have I scattered in these streets, and too many are the children of my longing that walk naked among these hills, and I cannot withdraw from them without a burden and an ache. ",
        _react2.default.createElement("br", null),
        "It is not a garment I cast off this day, but a skin that I tear with my own hands. ",
        _react2.default.createElement("br", null),
        "Nor is it a thought I leave behind me, but a heart made sweet with hunger and with thirst."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Yet I cannot tarry longer. ",
        _react2.default.createElement("br", null),
        "The sea that calls all things unto her calls me, and I must embark. ",
        _react2.default.createElement("br", null),
        "For, to stay, though the hours burn in the night, is to freeze and crystallize and be bound in a mould. ",
        _react2.default.createElement("br", null),
        "Fain would I take with me all that is here. But how shall I? ",
        _react2.default.createElement("br", null),
        "A voice cannot carry the tongue and the lips that gave it wings. Alone must it seek the ether. ",
        _react2.default.createElement("br", null),
        "And along and without his nest shall the eagle fly across the sun."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Now when he reached the foot of the hill, he turned again towards the sea, and he saw his ship approaching the harbor, and upon her prow the mariners, the men of his own land."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And his soul cried out to them, and he said: ",
        _react2.default.createElement("br", null),
        "Sons of my ancient mother, you riders of the tides, ",
        _react2.default.createElement("br", null),
        "How often have you sailed in my dreams. and now you come in my awakening, which is my deeper dream. ",
        _react2.default.createElement("br", null),
        "Ready am I to go, and my eagerness with sails full set awaits the wind. ",
        _react2.default.createElement("br", null),
        "Only another breath will I breathe in this still air, only another loving look cast backward, ",
        _react2.default.createElement("br", null),
        "And then I shall stand among you, a seafarer among seafarers. ",
        _react2.default.createElement("br", null),
        "And you, vast sea, sleepless mother, ",
        _react2.default.createElement("br", null),
        "Who alone are peace and freedom to the river and the stream, ",
        _react2.default.createElement("br", null),
        "Only another winding will this stream make, only another murmur in this glade, ",
        _react2.default.createElement("br", null),
        "And then shall I come to you, a boundless drop to a boundless ocean."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And as he walked he saw from afar men and women leaving their fields and their vineyards and hastening towards the city gates. ",
        _react2.default.createElement("br", null),
        "And he heard their voices calling his name, and shouting from field to field telling one another of the coming of the ship."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And he said to himself: ",
        _react2.default.createElement("br", null),
        "Shall the day of parting be the day of gathering? ",
        _react2.default.createElement("br", null),
        "And shall it be said that my eve was in truth my dawn? ",
        _react2.default.createElement("br", null),
        "And what shall I give unto him who has left his plough in midfurrow, or to him who has stopped the wheel of his winepress? ",
        _react2.default.createElement("br", null),
        "Shall my heart become a tree heavy-laden with fruit that I may gather and give unto them? ",
        _react2.default.createElement("br", null),
        "And shall my desires flow like a fountain that I may fill their cups? ",
        _react2.default.createElement("br", null),
        "Am I a harp that the hand of the mighty may touch me, or a flute that his breath may pass through me ",
        _react2.default.createElement("br", null),
        "A seeker of silences am I, and what treasure have I found in silences that I may dispense with confidence? ",
        _react2.default.createElement("br", null),
        "If this is my day of harvest, in what fields have I sowed the seed, and in what unremembered seasons? ",
        _react2.default.createElement("br", null),
        "If this indeed be the hour in which I lift up my lantern, it is not my flame that shall burn therein. ",
        _react2.default.createElement("br", null),
        "Empty and dark shall I raise my lantern, ",
        _react2.default.createElement("br", null),
        "And the guardian of the night shall fill it with oil and he shall light it also."
      ),
      _react2.default.createElement(
        "p",
        null,
        "These things he said in words but much in his heart remained unsaid. For he himself could not speak his deeper secret."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And when he entered into the city all the people came to meet him, and they were crying out to him as with one voice. ",
        _react2.default.createElement("br", null),
        "And the elders of the city stood forth and said: ",
        _react2.default.createElement("br", null),
        "Go not yet away from us. ",
        _react2.default.createElement("br", null),
        "A noontide have you been in our twilight, and your youth has given us dreams to dream. ",
        _react2.default.createElement("br", null),
        "No stranger are you among us, nor a guest, but our sun and our dearly beloved. ",
        _react2.default.createElement("br", null),
        "Suffer not yet our eyes to hunger for your face."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And the priests and the priestesses said unto him: ",
        _react2.default.createElement("br", null),
        "Let not the waves of the sea separate us now, and the years you have spent in our midst become a memory. ",
        _react2.default.createElement("br", null),
        "You have walked among us a spirit, and your shadow has been a light upon our faces. ",
        _react2.default.createElement("br", null),
        "Much have we loved you. But speechless was our love, and with veils has it been veiled. ",
        _react2.default.createElement("br", null),
        "Yet now it cries aloud unto you, and would stand revealed before you. ",
        _react2.default.createElement("br", null),
        "And ever has it been that love knows not its own depth until the hour of separation. ",
        _react2.default.createElement("br", null),
        "And others came also and entreated him. But he answered them not. He only bent his head; and those who stood near saw his tears falling upon his breast. ",
        _react2.default.createElement("br", null),
        "And he and the people proceeded towards the great square before the temple."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And there came out of the sanctuary a woman whose name was Almitra. And she was a seeress. ",
        _react2.default.createElement("br", null),
        "And he looked upon her with exceeding tenderness, for it was she who had first sought and believed in him when he had been but a day in their city. ",
        _react2.default.createElement("br", null),
        "And she hailed him, saying: ",
        _react2.default.createElement("br", null),
        "Prophet of God, in quest of the uttermost, long have you searched the distances for your ship. ",
        _react2.default.createElement("br", null),
        "And now your ship has come, and you must needs go. ",
        _react2.default.createElement("br", null),
        "Deep is your longing for the land of your memories and the dwelling place of your greater desires; and our love would not bind you nor our needs hold you. ",
        _react2.default.createElement("br", null),
        "Yet this we ask ere you leave us, that you speak to us and give us of your truth. ",
        _react2.default.createElement("br", null),
        "And we will give it unto our children, and they unto their children, and it shall not perish. ",
        _react2.default.createElement("br", null),
        "In your aloneness you have watched with our days, and in your wakefulness you have listened to the weeping and the laughter of our sleep. ",
        _react2.default.createElement("br", null),
        "Now therefore disclose us to ourselves, and tell us all that has been shown you of that which is between birth and death."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And he answered, ",
        _react2.default.createElement("br", null),
        "People of Orphalese, of what can I speak save of that which is even now moving within your souls?"
      ),
      _react2.default.createElement(
        "div",
        { className: "lightbox" },
        _react2.default.createElement("img", { src: "https://spiral9.com/img/ship2.jpg", alt: "TheShip" })
      )
    )
  },
  onLove: {
    title: 'On Love',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Love"
      ),
      _react2.default.createElement(
        "p",
        null,
        "When love beckons to you, follow him,",
        _react2.default.createElement("br", null),
        "Though his ways are hard and steep.",
        _react2.default.createElement("br", null),
        "And when his wings enfold you yield to him,",
        _react2.default.createElement("br", null),
        "Though the sword hidden among his pinions may wound you.",
        _react2.default.createElement("br", null),
        "And when he speaks to you believe in him,",
        _react2.default.createElement("br", null),
        "Though his voice may shatter your dreams",
        _react2.default.createElement("br", null),
        "as the north wind lays waste the garden."
      ),
      _react2.default.createElement(
        "p",
        null,
        "For even as love crowns you so shall he crucify you. Even as he is for your growth so is he for your pruning.",
        _react2.default.createElement("br", null),
        "Even as he ascends to your height and caresses your tenderest branches that quiver in the sun,",
        _react2.default.createElement("br", null),
        "So shall he descend to your roots and shake them in their clinging to the earth.",
        _react2.default.createElement("br", null)
      ),
      _react2.default.createElement(
        "p",
        null,
        "Like sheaves of corn he gathers you unto himself.",
        _react2.default.createElement("br", null),
        "He threshes you to make you naked.",
        _react2.default.createElement("br", null),
        "He sifts you to free you from your husks.",
        _react2.default.createElement("br", null),
        "He grinds you to whiteness.",
        _react2.default.createElement("br", null),
        "He kneads you until you are pliant;",
        _react2.default.createElement("br", null),
        "And then he assigns you to his sacred fire, that you may become sacred bread for God's sacred feast."
      ),
      _react2.default.createElement(
        "p",
        null,
        "All these things shall love do unto you that you may know the secrets of your heart, and in that knowledge become a fragment of Life's heart."
      ),
      _react2.default.createElement(
        "p",
        null,
        "But if in your fear you would seek only love's peace and love's pleasure,",
        _react2.default.createElement("br", null),
        "Then it is better for you that you cover your nakedness and pass out of love's threshing-floor,",
        _react2.default.createElement("br", null),
        "Into the seasonless world where you shall laugh, but not all of your laughter, and weep, but not all of your tears.",
        _react2.default.createElement("br", null),
        "Love gives naught but itself and takes naught but from itself.",
        _react2.default.createElement("br", null),
        "Love possesses not nor would it be possessed;",
        _react2.default.createElement("br", null),
        "For love is sufficient unto love."
      ),
      _react2.default.createElement(
        "p",
        null,
        "When you love you should not say, \"God is in my heart,\" but rather, \"I am in the heart of God.\"",
        _react2.default.createElement("br", null),
        "And think not you can direct the course of love, for love, if it finds you worthy, directs your course."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Love has no other desire but to fulfill itself.",
        _react2.default.createElement("br", null),
        "But if you love and must needs have desires, let these be your desires:",
        _react2.default.createElement("br", null),
        "To melt and be like a running brook that sings its melody to the night.",
        _react2.default.createElement("br", null),
        "To know the pain of too much tenderness.",
        _react2.default.createElement("br", null),
        "To be wounded by your own understanding of love;",
        _react2.default.createElement("br", null),
        "And to bleed willingly and joyfully.",
        _react2.default.createElement("br", null),
        "To wake at dawn with a winged heart and give thanks for another day of loving;",
        _react2.default.createElement("br", null),
        "To rest at the noon hour and meditate love's ecstasy;",
        _react2.default.createElement("br", null),
        "To return home at eventide with gratitude;",
        _react2.default.createElement("br", null),
        "And then to sleep with a prayer for the beloved in your heart and a song of praise upon your lips."
      )
    )
  },
  onMarriage: {
    title: 'On Marriage',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Marriage"
      ),
      _react2.default.createElement(
        "p",
        null,
        "You were born together, and together you shall be forevermore.",
        _react2.default.createElement("br", null),
        "You shall be together when the white wings of death scatter your days.",
        _react2.default.createElement("br", null),
        "Ay, you shall be together even in the silent memory of God.",
        _react2.default.createElement("br", null),
        "But let there be spaces in your togetherness,",
        _react2.default.createElement("br", null),
        "And let the winds of the heavens dance between you."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Love one another, but make not a bond of love:",
        _react2.default.createElement("br", null),
        "Let it rather be a moving sea between the shores of your souls.",
        _react2.default.createElement("br", null),
        "Fill each other's cup but drink not from one cup.",
        _react2.default.createElement("br", null),
        "Give one another of your bread but eat not from the same loaf",
        _react2.default.createElement("br", null),
        "Sing and dance together and be joyous, but let each one of you be alone,",
        _react2.default.createElement("br", null),
        "Even as the strings of a lute are alone though they quiver with the same music."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Give your hearts, but not into each other's keeping.",
        _react2.default.createElement("br", null),
        "For only the hand of Life can contain your hearts.",
        _react2.default.createElement("br", null),
        "And stand together yet not too near together:",
        _react2.default.createElement("br", null),
        "For the pillars of the temple stand apart,",
        _react2.default.createElement("br", null),
        "And the oak tree and the cypress grow not in each other's shadow."
      ),
      _react2.default.createElement("br", null)
    )
  },
  onChildren: {
    title: 'On Children',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Children"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Your children are not your children.",
        _react2.default.createElement("br", null),
        "They are the sons and daughters of Life's longing for itself.",
        _react2.default.createElement("br", null),
        "They come through you but not from you,",
        _react2.default.createElement("br", null),
        "And though they are with you yet they belong not to you."
      ),
      _react2.default.createElement(
        "p",
        null,
        "You may give them your love but not your thoughts,",
        _react2.default.createElement("br", null),
        "For they have their own thoughts.",
        _react2.default.createElement("br", null),
        "You may house their bodies but not their souls,",
        _react2.default.createElement("br", null),
        "For their souls dwell in the house of tomorrow, ",
        _react2.default.createElement("br", null),
        "which you cannot visit, not even in your dreams.",
        _react2.default.createElement("br", null),
        "You may strive to be like them, ",
        _react2.default.createElement("br", null),
        "but seek not to make them like you.",
        _react2.default.createElement("br", null),
        "For life goes not backward nor tarries with yesterday."
      ),
      _react2.default.createElement(
        "p",
        null,
        "You are the bows from which your children",
        _react2.default.createElement("br", null),
        "as living arrows are sent forth.",
        _react2.default.createElement("br", null),
        "The archer sees the mark upon the path of the infinite, ",
        _react2.default.createElement("br", null),
        "and He bends you with His might ",
        _react2.default.createElement("br", null),
        "that His arrows may go swift and far.",
        _react2.default.createElement("br", null),
        "Let your bending in the archer's hand be for gladness;",
        _react2.default.createElement("br", null),
        "For even as He loves the arrow that flies, ",
        _react2.default.createElement("br", null),
        "so He loves also the bow that is stable."
      )
    )
  },
  onGiving: {
    title: 'On Giving',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Giving"
      ),
      _react2.default.createElement(
        "p",
        null,
        "You give but little when you give of your possessions.",
        _react2.default.createElement("br", null),
        "It is when you give of yourself that you truly give.",
        _react2.default.createElement("br", null),
        "For what are your possessions but things you keep and guard for fear you may need them tomorrow?",
        _react2.default.createElement("br", null),
        "And tomorrow, what shall tomorrow bring to the overprudent dog burying bones in the trackless sand as he follows the pilgrims to the holy city?",
        _react2.default.createElement("br", null),
        "And what is fear of need but need itself?",
        _react2.default.createElement("br", null),
        "Is not dread of thirst when your well is full, the thirst that is unquenchable?"
      ),
      _react2.default.createElement(
        "p",
        null,
        "There are those who give little of the much which they have--and they give it for recognition and their hidden desire makes their gifts unwholesome.",
        _react2.default.createElement("br", null),
        "And there are those who have little and give it all.",
        _react2.default.createElement("br", null),
        "These are the believers in life and the bounty of life, and their coffer is never empty.",
        _react2.default.createElement("br", null),
        "There are those who give with joy, and that joy is their reward."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And there are those who give with pain, and that pain is their baptism.",
        _react2.default.createElement("br", null),
        "And there are those who give and know not pain in giving, nor do they seek joy, nor give with mindfulness of virtue;",
        _react2.default.createElement("br", null),
        "They give as in yonder valley the myrtle breathes its fragrance into space.",
        _react2.default.createElement("br", null),
        "Through the hands of such as these God speaks, and from behind their eyes He smiles upon the earth."
      ),
      _react2.default.createElement(
        "p",
        null,
        "It is well to give when asked, but it is better to give unasked, through understanding;",
        _react2.default.createElement("br", null),
        "And to the open-handed the search for one who shall receive is joy greater than giving.",
        _react2.default.createElement("br", null),
        "And is there aught you would withhold?",
        _react2.default.createElement("br", null),
        "All you have shall some day be given;",
        _react2.default.createElement("br", null),
        "Therefore give now, that the season of giving may be yours and not your inheritors'."
      ),
      _react2.default.createElement(
        "p",
        null,
        "You often say, \"I would give, but only to the deserving.\"",
        _react2.default.createElement("br", null),
        "The trees in your orchard say not so, nor the flocks in your pasture.",
        _react2.default.createElement("br", null),
        "They give that they may live, for to withhold is to perish."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Surely he who is worthy to receive his days and his nights, is worthy of all else from you.",
        _react2.default.createElement("br", null),
        "And he who has deserved to drink from the ocean of life deserves to fill his cup from your little stream.",
        _react2.default.createElement("br", null),
        "And what desert greater shall there be, than that which lies in the courage and the confidence, nay the charity, of receiving?",
        _react2.default.createElement("br", null),
        "And who are you that men should rend their bosom and unveil their pride, that you may see their worth naked and their pride unabashed?",
        _react2.default.createElement("br", null),
        "See first that you yourself deserve to be a giver, and an instrument of giving.",
        _react2.default.createElement("br", null),
        "For in truth it is life that gives unto life while you, who deem yourself a giver, are but a witness."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And you receivers\u2014and you are all receivers\u2014assume no weight of gratitude, lest you lay a yoke upon yourself and upon him who gives.",
        _react2.default.createElement("br", null),
        "Rather rise together with the giver on his gifts as on wings;",
        _react2.default.createElement("br", null),
        "For to be overmindful of your debt, is to doubt his generosity who has the freehearted earth for mother, and God for father."
      )
    )
  },
  onEatingAndDrinking: {
    title: 'On Eating & Drinking',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Eating & Drinking"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Would that you could live on the fragrance of the earth, and like an air plant be sustained by the light.",
        _react2.default.createElement("br", null),
        "But since you must kill to eat, and rob the newly born of its mother's milk to quench your thirst, let it then be an act of worship.",
        _react2.default.createElement("br", null),
        "And let your board stand an altar on which the pure and the innocent of forest and plain are sacrificed for that which is purer and still more innocent in man."
      ),
      _react2.default.createElement(
        "p",
        null,
        "When you kill a beast say to him in your heart,",
        _react2.default.createElement("br", null),
        "\"By the same power that slays you, I too am slain; and I too shall be consumed.",
        _react2.default.createElement("br", null),
        "For the law that delivered you into my hand shall deliver me into a mightier hand.",
        _react2.default.createElement("br", null),
        "Your blood and my blood is naught but the sap that feeds the tree of heaven.\""
      ),
      _react2.default.createElement(
        "p",
        null,
        "And when you crush an apple with your teeth, say to it in your heart,",
        _react2.default.createElement("br", null),
        "\"Your seeds shall live in my body,",
        _react2.default.createElement("br", null),
        "And the buds of your tomorrow shall blossom in my heart, ",
        _react2.default.createElement("br", null),
        "And your fragrance shall be my breath,",
        _react2.default.createElement("br", null),
        "And together we shall rejoice through all the seasons.\""
      ),
      _react2.default.createElement(
        "p",
        null,
        "And in the autumn, when you gather the grapes of your vineyards for the winepress, say in your heart,",
        _react2.default.createElement("br", null),
        "\"I too am a vineyard, and my fruit shall be gathered for the winepress,",
        _react2.default.createElement("br", null),
        "And like new wine I shall be kept in eternal vessels.\"",
        _react2.default.createElement("br", null),
        "And in winter, when you draw the wine, let there be in your heart a song for each cup;",
        _react2.default.createElement("br", null),
        "And let there be in the song a remembrance for the autumn days, and for the vineyard, and for the winepress.",
        _react2.default.createElement("br", null)
      )
    )
  },
  onWork: {
    title: 'On Work',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Work"
      ),
      _react2.default.createElement(
        "p",
        null,
        "You work that you may keep pace with the earth and the soul of the earth.",
        _react2.default.createElement("br", null),
        "For to be idle is to become a stranger unto the seasons, ",
        _react2.default.createElement("br", null),
        "and to step out of life's procession, that marches in majesty and proud submission towards the infinite.",
        _react2.default.createElement("br", null)
      ),
      _react2.default.createElement(
        "p",
        null,
        "When you work you are a flute through whose heart the whispering of the hours turns to music.",
        _react2.default.createElement("br", null),
        "Which of you would be a reed, dumb and silent, when all else sings together in unison?",
        _react2.default.createElement("br", null)
      ),
      _react2.default.createElement(
        "p",
        null,
        "Always you have been told that work is a curse and labour a misfortune.",
        _react2.default.createElement("br", null),
        "But I say to you that when you work you fulfil a part of earth's furthest dream, assigned to you when that dream was born,",
        _react2.default.createElement("br", null),
        "And in keeping yourself with labour you are in truth loving life,",
        _react2.default.createElement("br", null),
        "And to love life through labour is to be intimate with life's inmost secret.",
        _react2.default.createElement("br", null)
      ),
      _react2.default.createElement(
        "p",
        null,
        "But if you in your pain call birth an affliction and the support of the flesh a curse written upon your brow, then I answer that naught but the sweat of your brow shall wash away that which is written."
      ),
      _react2.default.createElement(
        "p",
        null,
        "You have been told also that life is darkness, and in your weariness you echo what was said by the weary.",
        _react2.default.createElement("br", null),
        "And I say that life is indeed darkness save when there is urge,",
        _react2.default.createElement("br", null),
        "And all urge is blind save when there is knowledge,",
        _react2.default.createElement("br", null),
        "And all knowledge is vain save when there is work,",
        _react2.default.createElement("br", null),
        "And all work is empty save when there is love;",
        _react2.default.createElement("br", null),
        "And when you work with love you bind yourself to yourself, and to one another, and to God."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And what is it to work with love?",
        _react2.default.createElement("br", null),
        "It is to weave the cloth with threads drawn from your heart, ",
        _react2.default.createElement("br", null),
        "even as if your beloved were to wear that cloth.",
        _react2.default.createElement("br", null),
        "It is to build a house with affection, ",
        _react2.default.createElement("br", null),
        "even as if your beloved were to dwell in that house.",
        _react2.default.createElement("br", null),
        "It is to sow seeds with tenderness and reap the harvest with joy, ",
        _react2.default.createElement("br", null),
        "even as if your beloved were to eat the fruit.",
        _react2.default.createElement("br", null),
        "It is to charge all things you fashion with a breath of your own spirit,",
        _react2.default.createElement("br", null),
        "And to know that all the blessed dead ",
        _react2.default.createElement("br", null),
        "are standing about you and watching."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Often have I heard you say, as if speaking in sleep, \"He who works in marble, and finds the shape of his own soul in the stone, is nobler than he who ploughs the soil.",
        _react2.default.createElement("br", null),
        "And he who seizes the rainbow to lay it on a cloth in the likeness of man, is more than he who makes the sandals for our feet.\"",
        _react2.default.createElement("br", null),
        "But I say, not in sleep but in the overwakefulness of noontide, that the wind speaks not more sweetly to the giant oaks than to the least of all the blades of grass;",
        _react2.default.createElement("br", null),
        "And he alone is great who turns the voice of the wind into a song made sweeter by his own loving."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Work is love made visible.",
        _react2.default.createElement("br", null),
        "And if you cannot work with love but only with distaste, it is better that you should leave your work and sit at the gate of the temple and take alms of those who work with joy.",
        _react2.default.createElement("br", null),
        "For if you bake bread with indifference, you bake a bitter bread that feeds but half man's hunger.",
        _react2.default.createElement("br", null),
        "And if you grudge the crushing of the grapes, your grudge distils a poison in the wine.",
        _react2.default.createElement("br", null),
        "And if you sing though as angels, and love not the singing, you muffle man's ears to the voices of the day and the voices of the night."
      )
    )
  },
  onJoyAndSorrow: {
    title: 'On Joy & Sorrow',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Joy & Sorrow"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Your joy is your sorrow unmasked.",
        _react2.default.createElement("br", null),
        "And the selfsame well from which your laughter rises was oftentimes filled with your tears.",
        _react2.default.createElement("br", null),
        "And how else can it be?",
        _react2.default.createElement("br", null),
        "The deeper that sorrow carves into your being, the more joy you can contain.",
        _react2.default.createElement("br", null),
        "Is not the cup that holds your wine the very cup that was burned in the potter's oven?",
        _react2.default.createElement("br", null),
        "And is not the lute that soothes your spirit, the very wood that was hollowed with knives?",
        _react2.default.createElement("br", null),
        "When you are joyous, look deep into your heart and you shall find it is only that which has given you sorrow that is giving you joy.",
        _react2.default.createElement("br", null),
        "When you are sorrowful look again in your heart, and you shall see that in truth you are weeping for that which has been your delight."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Some of you say, \"Joy is greater thar sorrow,\" and others say, \"Nay, sorrow is the greater.\"",
        _react2.default.createElement("br", null),
        "But I say unto you, they are inseparable.",
        _react2.default.createElement("br", null),
        "Together they come, and when one sits, alone with you at your board, remember that the other is asleep upon your bed."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Verily you are suspended like scales between your sorrow and your joy.",
        _react2.default.createElement("br", null),
        "Only when you are empty are you at standstill and balanced.",
        _react2.default.createElement("br", null),
        "When the treasure-keeper lifts you to weigh his gold and his silver, needs must your joy or your sorrow rise or fall."
      )
    )
  },
  onHouses: {
    title: 'On Houses',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Houses"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Build of your imaginings a bower in the wilderness ere you build a house within the city walls.",
        _react2.default.createElement("br", null),
        "For even as you have home-comings in your twilight, so has the wanderer in you, the ever distant and alone. Your house is your larger body.",
        _react2.default.createElement("br", null),
        "It grows in the sun and sleeps in the stillness of the night; and it is not dreamless. Does not your house dream? and dreaming, leave the city for grove or hill-top?"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Would that I could gather your houses into my hand, and like a sower scatter them in forest and meadow. Would the valleys were your streets, and the green paths your alleys, that you might seek one another through vineyards, and come with the fragrance of the earth in your garments. But these things are not yet to be."
      ),
      _react2.default.createElement(
        "p",
        null,
        "In their fear your forefathers gathered you too near together. And that fear shall endure a little longer. A little longer shall your city walls separate your hearths from your fields."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And tell me, people of OrphaIese, what have you in these houses? And what is it you guard with fastened doors? Have you peace, the quiet urge that reveals your power?",
        _react2.default.createElement("br", null),
        "Have you remembrances, the glimmering arches that span the summits of the mind?",
        _react2.default.createElement("br", null),
        "Have you beauty, that leads the heart from things fashioned of wood and stone to the holy mountain? Tell me, have you these in your houses? ",
        _react2.default.createElement("br", null),
        "Or have you only comfort, and the lust for comfort, that stealthy thing that enters the house a guest, and then becomes a host and then a master?"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Ay, and it becomes a tamer, and with hook and scourge makes puppets of your larger desires.",
        _react2.default.createElement("br", null),
        "Though its hands are silken, its heart is of iron.",
        _react2.default.createElement("br", null),
        "It lulls you to sleep only to stand by your bed and jeer at the dignity of the flesh.",
        _react2.default.createElement("br", null),
        "It makes mock of your sound senses, and lays them in thistledown like fragile vessels.",
        _react2.default.createElement("br", null),
        "Verily the lust for comfort murders the passion of the soul, and then walks grinning in the funeral."
      ),
      _react2.default.createElement(
        "p",
        null,
        "But you, children of space, you restless in rest, you shall not be trapped nor tamed.",
        _react2.default.createElement("br", null),
        "Your house shall be not an anchor but a mast.",
        _react2.default.createElement("br", null),
        "It shall not be a glistening film that covers a wound, but an eyelid that guards the eye.",
        _react2.default.createElement("br", null),
        "You shall not fold your wings that you may pass through doors, nor bend your heads that they strike not against a ceiling, nor fear to breathe lest walls should crack and fall down.",
        _react2.default.createElement("br", null),
        "You shall not dwell in tombs made by the dead for the living.",
        _react2.default.createElement("br", null),
        "And though of magnificence and splendour, your house shall not hold your secret nor shelter your longing. For that which is boundless in you abides in the mansion of the sky, whose door is the morning mist, and whose windows are the songs and the silences of night."
      )
    )
  },
  onClothes: {
    title: 'On Clothes',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Clothes"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Your clothes conceal much of your beauty, yet they hide not the unbeautiful.",
        _react2.default.createElement("br", null),
        "And though you seek in garments the freedom of privacy you may find in them a harness and a chain."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Would that you could meet the sun and the wind with more of your skin and less of your raiment,",
        _react2.default.createElement("br", null),
        "For the breath of life is in the sunlight and the hand of life is in the wind."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Some of you say, \"It is the north wind who has woven the clothes we wear.\"",
        _react2.default.createElement("br", null),
        "And I say, Ay, it was the north wind,",
        _react2.default.createElement("br", null),
        "But shame was his loom, and the softening of the sinews was his thread.",
        _react2.default.createElement("br", null),
        "And when his work was done he laughed in the forest.",
        _react2.default.createElement("br", null),
        "Forget not that modesty is for a shield against the eye of the unclean."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And when the unclean shall be no more, what were modesty but a fetter and a fouling of the mind?",
        _react2.default.createElement("br", null),
        "And forget not that the earth delights to feel your bare feet and the winds long to play with your hair."
      )
    )
  },
  onBuyingAndSelling: {
    title: 'On Buying & Selling',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Buying & Selling"
      ),
      _react2.default.createElement(
        "p",
        null,
        "To you the earth yields her fruit, and you shall not want if you but know how to fill your hands.",
        _react2.default.createElement("br", null),
        "It is in exchanging the gifts of the earth that you shall find abundance and be satisfied.",
        _react2.default.createElement("br", null),
        "Yet unless the exchange be in love and kindly justice, it will but lead some to greed and others to hunger."
      ),
      _react2.default.createElement(
        "p",
        null,
        "When in the market place you toilers of the sea and fields and vineyards meet the weavers and the potters and the gatherers of spices,",
        _react2.default.createElement("br", null),
        "Invoke then the master spirit of the earth, to come into your midst and sanctify the scales and the reckoning that weighs value against value."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And suffer not the barren-handed to take part in your transactions, who would sell their words for your labour.",
        _react2.default.createElement("br", null),
        "To such men you should say,",
        _react2.default.createElement("br", null),
        "\"Come with us to the field, or go with our brothers to the sea and cast your net;",
        _react2.default.createElement("br", null),
        "For the land and the sea shall be bountiful to you even as to us.\""
      ),
      _react2.default.createElement(
        "p",
        null,
        "And if there come the singers and the dancers and the flute players, buy of their gifts also.",
        _react2.default.createElement("br", null),
        "For they too are gatherers of fruit and frankincense, and that which they bring, though fashioned of dreams, is raiment and food for your soul."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And before you leave the market place, see that no one has gone his way with empty hands.",
        _react2.default.createElement("br", null),
        "For the master spirit of the earth shall not sleep peacefully upon the wind till the needs of the least of you are satisfied."
      )
    )
  },
  onCrimeAndPunishment: {
    title: 'On Crime & Punishment',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Crime & Punishment"
      ),
      _react2.default.createElement(
        "p",
        null,
        "It is when your spirit goes wandering upon the wind,",
        _react2.default.createElement("br", null),
        "That you, alone and unguarded, commit a wrong unto others and therefore unto yourself.",
        _react2.default.createElement("br", null),
        "And for that wrong committed must you knock and wait a while unheeded at the gate of the blessed."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Like the ocean is your god-self;",
        _react2.default.createElement("br", null),
        "It remains for ever undefiled.",
        _react2.default.createElement("br", null),
        "And like the ether it lifts but the winged. Even like the sun is your god-self;",
        _react2.default.createElement("br", null),
        "It knows not the ways of the mole nor seeks it the holes of the serpent.",
        _react2.default.createElement("br", null),
        "But your god-self dwells not alone in your being.",
        _react2.default.createElement("br", null),
        "Much in you is still man, and much in you is not yet man,",
        _react2.default.createElement("br", null),
        "But a shapeless pigmy that walks asleep in the mist searching for its own awakening.",
        _react2.default.createElement("br", null),
        "And of the man in you would I now speak.",
        _react2.default.createElement("br", null),
        "For it is he and not your god-self nor the pigmy in the mist, that knows crime and the punishment of crime."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Oftentimes have I heard you speak of one who commits a wrong as though he were not one of you, but a stranger unto you and an intruder upon your world.",
        _react2.default.createElement("br", null),
        "But I say that even as the holy and the righteous cannot rise beyond the highest which is in each one of you,",
        _react2.default.createElement("br", null),
        "So the wicked and the weak cannot fall lower than the lowest which is in you also.",
        _react2.default.createElement("br", null),
        "And as a single leaf turns not yellow but with the silent knowledge of the whole tree,",
        _react2.default.createElement("br", null),
        "So the wrong-doer cannot do wrong without the hidden will of you all.",
        _react2.default.createElement("br", null),
        "Like a procession you walk together towards your god-self.",
        _react2.default.createElement("br", null),
        "You are the way and the wayfarers.",
        _react2.default.createElement("br", null),
        "And when one of you falls down he falls for those behind him, a caution against the stumbling stone.",
        _react2.default.createElement("br", null),
        "Ay, and he falls for those ahead of him, who though faster and surer of foot, yet removed not the stumbling stone."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And this also, though the word lie heavy upon your hearts:",
        _react2.default.createElement("br", null),
        "The murdered is not unaccountable for his own murder,",
        _react2.default.createElement("br", null),
        "And the robbed is not blameless in being robbed.",
        _react2.default.createElement("br", null),
        "The righteous is not innocent of the deeds of the wicked,",
        _react2.default.createElement("br", null),
        "And the white-handed is not clean in the doings of the felon.",
        _react2.default.createElement("br", null),
        "Yea, the guilty is oftentimes the victim of the injured,",
        _react2.default.createElement("br", null),
        "And still more often the condemned is the burden bearer for the guiltless and unblamed.",
        _react2.default.createElement("br", null),
        "You cannot separate the just from the unjust and the good from the wicked;",
        _react2.default.createElement("br", null),
        "For they stand together before the face of the sun even as the black thread and the white are woven together.",
        _react2.default.createElement("br", null),
        "And when the black thread breaks, the weaver shall look into the whole cloth, and he shall examine the loom also."
      ),
      _react2.default.createElement(
        "p",
        null,
        "If any of you would bring to judgment the unfaithful wife,",
        _react2.default.createElement("br", null),
        "Let him also weigh the heart of her husband in scales, and measure his soul with measurements.",
        _react2.default.createElement("br", null),
        "And let him who would lash the offender look unto the spirit of the offended.",
        _react2.default.createElement("br", null),
        "And if any of you would punish in the name of righteousness and lay the ax unto the evil tree, let him see to its roots;",
        _react2.default.createElement("br", null),
        "And verily he will find the roots of the good and the bad, the fruitful and the fruitless, all entwined together in the silent heart of the earth.",
        _react2.default.createElement("br", null),
        "And you judges who would be just, ",
        _react2.default.createElement("br", null),
        "What judgment pronounce you upon him who though honest in the flesh yet is a thief in spirit?",
        _react2.default.createElement("br", null),
        "What penalty lay you upon him who slays in the flesh yet is himself slain in the spirit?",
        _react2.default.createElement("br", null),
        "And how prosecute you him who in action is a deceiver and an oppressor,",
        _react2.default.createElement("br", null),
        "Yet who also is aggrieved and outraged?"
      ),
      _react2.default.createElement(
        "p",
        null,
        "And how shall you punish those whose remorse is already greater than their misdeeds?",
        _react2.default.createElement("br", null),
        "Is not remorse the justice which is administered by that very law which you would fain serve?",
        _react2.default.createElement("br", null),
        "Yet you cannot lay remorse upon the innocent nor lift it from the heart of the guilty.",
        _react2.default.createElement("br", null),
        "Unbidden shall it call in the night, that men may wake and gaze upon themselves.",
        _react2.default.createElement("br", null),
        "And you who would understand justice, how shall you unless you look upon all deeds in the fullness of light?",
        _react2.default.createElement("br", null),
        "Only then shall you know that the erect and the fallen are but one man standing in twilight between the night of his pigmy-self and the day of his god-self,",
        _react2.default.createElement("br", null),
        "And that the corner-stone of the temple is not higher than the lowest stone in its foundation."
      )
    )
  },
  onLaws: {
    title: 'On Laws',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Laws"
      ),
      _react2.default.createElement(
        "p",
        null,
        "You delight in laying down laws,",
        _react2.default.createElement("br", null),
        "Yet you delight more in breaking them. ",
        _react2.default.createElement("br", null),
        "Like children playing by the ocean who build sand-towers with constancy and then destroy them with laughter.",
        _react2.default.createElement("br", null),
        "But while you build your sand-towers the ocean brings more sand to the shore,",
        _react2.default.createElement("br", null),
        "And when you destroy them the ocean laughs with you.",
        _react2.default.createElement("br", null),
        "Verily the ocean laughs always with the innocent."
      ),
      _react2.default.createElement(
        "p",
        null,
        "But what of those to whom life is not an ocean, and man-made laws are not sandtowers,",
        _react2.default.createElement("br", null),
        "But to whom life is a rock, and the law a chisel with which they would carve it in their own likeness?",
        _react2.default.createElement("br", null),
        "What of the cripple who hates dancers? ",
        _react2.default.createElement("br", null),
        "What of the ox who loves his yoke and deems the elk and deer of the forest stray and vagrant things?",
        _react2.default.createElement("br", null),
        "What of the old serpent who cannot shed his skin, and calls all others naked and shameless?",
        _react2.default.createElement("br", null),
        "And of him who comes early to the wedding-feast, and when over-fed and tired goes his way saying that all feasts are violation and all feasters lawbreakers?"
      ),
      _react2.default.createElement(
        "p",
        null,
        "What shall I say of these save that they too stand in the sunlight, but with their backs to the sun?",
        _react2.default.createElement("br", null),
        "They see only their shadows, and their shadows are their laws.",
        _react2.default.createElement("br", null),
        "And what is the sun to them but a caster of shadows?",
        _react2.default.createElement("br", null),
        "And what is it to acknowledge the laws but to stoop down and trace their shadows upon the earth?",
        _react2.default.createElement("br", null),
        "But you who walk facing the sun, what images drawn on the earth can hold you?",
        _react2.default.createElement("br", null),
        "You who travel with the wind, what weather-vane shall direct your course?",
        _react2.default.createElement("br", null),
        "What man's law shall bind you if you break your yoke but upon no man's prison door?",
        _react2.default.createElement("br", null),
        "What laws shall you fear if you dance but stumble against no man's iron chains?",
        _react2.default.createElement("br", null),
        "And who is he that shall bring you to judgment if you tear off your garment yet leave it in no man's path?"
      ),
      _react2.default.createElement(
        "p",
        null,
        "People of Orphalese, you can muffle the drum, and you can loosen the strings of the lyre, but who shall command the skylark not to sing?"
      )
    )
  },
  onFreedom: {
    title: 'On Freedom',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Freedom"
      ),
      _react2.default.createElement(
        "p",
        null,
        "At the city gate and by your fireside I have seen you prostrate yourself and worship your own freedom,",
        _react2.default.createElement("br", null),
        "Even as slaves humble themselves before a tyrant and praise him though he slays them.",
        _react2.default.createElement("br", null),
        "Ay, in the grove of the temple and in the shadow of the citadel I have seen the freest among you wear their freedom as a yoke and a handcuff.",
        _react2.default.createElement("br", null),
        "And my heart bled within me; for you can only be free when even the desire of seeking freedom becomes a harness to you, and when you cease to speak of freedom as a goal and a fulfilment."
      ),
      _react2.default.createElement(
        "p",
        null,
        "You shall be free indeed when your days are not without a care nor your nights without a want and a grief,",
        _react2.default.createElement("br", null),
        "But rather when these things girdle your life and yet you rise above them naked and unbound."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And how shall you rise beyond your days and nights unless you break the chains which you at the dawn of your understanding have fastened around your noon hour?",
        _react2.default.createElement("br", null),
        "In truth that which you call freedom is the strongest of these chains, though its links glitter in the sun and dazzle your eyes."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And what is it but fragments of your own self you would discard that you may become free?",
        _react2.default.createElement("br", null),
        "If it is an unjust law you would abolish, that law was written with your own hand upon your own forehead.",
        _react2.default.createElement("br", null),
        "You cannot erase it by burning your law books nor by washing the foreheads of your judges, though you pour the sea upon them.",
        _react2.default.createElement("br", null),
        "And if it is a despot you would dethrone, see first that his throne erected within you is destroyed.",
        _react2.default.createElement("br", null),
        "For how can a tyrant rule the free and the proud, but for a tyranny in their own freedom and a shame in their own pride?",
        _react2.default.createElement("br", null),
        "And if it is a care you would cast off, that care has been chosen by you rather than imposed upon you.",
        _react2.default.createElement("br", null),
        "And if it is a fear you would dispel, the seat of that fear is in your heart and not in the hand of the feared."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Verily all things move within your being in constant half embrace, the desired and the dreaded, the repugnant and the cherished, the pursued and that which you would escape.",
        _react2.default.createElement("br", null),
        "These things move within you as lights and shadows in pairs that cling.",
        _react2.default.createElement("br", null),
        "And when the shadow fades and is no more, the light that lingers becomes a shadow to another light.",
        _react2.default.createElement("br", null),
        "And thus your freedom when it loses its fetters becomes itself the fetter of a greater freedom."
      )
    )
  },
  onReasonAndPassion: {
    title: 'On Reason & Passion',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Reason & Passion"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Your soul is oftentimes a battlefield, upon which your reason and your judgment wage war against your passion and your appetite.",
        _react2.default.createElement("br", null),
        "Would that I could be the peacemaker in your soul, that I might turn the discord and the rivalry of your elements into oneness and melody.",
        _react2.default.createElement("br", null),
        "But how shall I, unless you yourselves be also the peacemakers, nay, the lovers of all your elements?"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Your reason and your passion are the rudder and the sails of your seafaring soul. If either your sails or your rudder be broken, you can but toss and drift, or else be held at a standstill in mid-seas.",
        _react2.default.createElement("br", null),
        "For reason, ruling alone, is a force confining; and passion, unattended, is a flame that burns to its own destruction.",
        _react2.default.createElement("br", null),
        "Therefore let your soul exalt your reason to the height of passion, that it may sing;",
        _react2.default.createElement("br", null),
        "And let it direct your passion with reason, that your passion may live through its own daily resurrection, and like the phoenix rise above its own ashes."
      ),
      _react2.default.createElement(
        "p",
        null,
        "I would have you consider your judgment and your appetite even as you would two loved guests in your house.",
        _react2.default.createElement("br", null),
        "Surely you would not honour one guest above the other; for he who is more mindful of one loses the love and the faith of both."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Among the hills, when you sit in the cool shade of the white poplars, sharing the peace and serenity of distant fields and meadows\u2014then let your heart say in silence, \"God rests in reason.\"",
        _react2.default.createElement("br", null),
        "And when the storm comes, and the mighty wind shakes the forest, and thunder and lightning proclaim the majesty of the sky\u2014then let your heart say in awe, \"God moves in passion.\"",
        _react2.default.createElement("br", null),
        "And since you are a breath in God's sphere, and a leaf in God's forest, you too should rest in reason and move in passion."
      )
    )
  },
  onPain: {
    title: 'On Pain',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Pain"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Your pain is the breaking of the shell that encloses your understanding.",
        _react2.default.createElement("br", null),
        "Even as the stone of the fruit must break, that its heart may stand in the sun, so must you know pain.",
        _react2.default.createElement("br", null),
        "And could you keep your heart in wonder at the daily miracles of your life, your pain would not seem less wondrous than your joy;",
        _react2.default.createElement("br", null),
        "And you would accept the seasons of your heart, even as you have always accepted the seasons that pass over your fields.",
        _react2.default.createElement("br", null),
        "And you would watch with serenity through the winters of your grief."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Much of your pain is self-chosen.",
        _react2.default.createElement("br", null),
        "It is the bitter potion by which the physician within you heals your sick self.",
        _react2.default.createElement("br", null),
        "Therefore trust the physician, and drink his remedy in silence and tranquillity:",
        _react2.default.createElement("br", null),
        "For his hand, though heavy and hard, is guided by the tender hand of the Unseen,",
        _react2.default.createElement("br", null),
        "And the cup he brings, though it burn your lips, has been fashioned of the clay which the Potter has moistened with His own sacred tears."
      )
    )
  },
  onSelfKnowledge: {
    title: 'On Self-Knowledge',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Self-knowledge"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Your hearts know in silence the secrets of the days and the nights.",
        _react2.default.createElement("br", null),
        "But your ears thirst for the sound of your heart's knowledge.",
        _react2.default.createElement("br", null),
        "You would know in words that which you have always known in thought.",
        _react2.default.createElement("br", null),
        "You would touch with your fingers the naked body of your dreams."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And it is well you should.",
        _react2.default.createElement("br", null),
        "The hidden well-spring of your soul must needs rise and run murmuring to the sea;",
        _react2.default.createElement("br", null),
        "And the treasure of your infinite depths would be revealed to your eyes.",
        _react2.default.createElement("br", null),
        "But let there be no scales to weigh your unknown treasure;",
        _react2.default.createElement("br", null),
        "And seek not the depths of your knowledge with staff or sounding line.",
        _react2.default.createElement("br", null),
        "For self is a sea boundless and measureless."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Say not, \"I have found the truth,\" but rather, \"I have found a truth.\"",
        _react2.default.createElement("br", null),
        "Say not, \"I have found the path of the soul.\" Say rather, \"I have met the soul walking upon my path.\"",
        _react2.default.createElement("br", null),
        "For the soul walks upon all paths.",
        _react2.default.createElement("br", null),
        "The soul walks not upon a line, neither does it grow like a reed.",
        _react2.default.createElement("br", null),
        "The soul unfolds itself like a lotus of countless petals."
      )
    )
  },
  onTeaching: {
    title: 'On Teaching',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Teaching"
      ),
      _react2.default.createElement(
        "p",
        null,
        "No man can reveal to you aught but that which already lies half asleep in the dawning of your knowledge."
      ),
      _react2.default.createElement(
        "p",
        null,
        "The teacher who walks in the shadow of the temple, among his followers, gives not of his wisdom but rather of his faith and his lovingness."
      ),
      _react2.default.createElement(
        "p",
        null,
        "If he is indeed wise he does not bid you enter the house of his wisdom, but rather leads you to the threshold of your own mind."
      ),
      _react2.default.createElement(
        "p",
        null,
        "The astronomer may speak to you of his understanding of space, but he cannot give you his understanding."
      ),
      _react2.default.createElement(
        "p",
        null,
        "The musician may sing to you of the rhythm which is in all space, but he cannot give you the ear which arrests the rhythm nor the voice that echoes it."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And he who is versed in the science of numbers can tell of the regions of weight and measure, but he cannot conduct you thither."
      ),
      _react2.default.createElement(
        "p",
        null,
        "For the vision of one man lends not its wings to another man."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And even as each one of you stands alone in God's knowledge, so must each one of you be alone in his knowledge of God and in his understanding of the earth."
      )
    )
  },
  onFriendship: {
    title: 'On Friendship',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Friendship"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Your friend is your needs answered.",
        _react2.default.createElement("br", null),
        "He is your field which you sow with love and reap with thanksgiving.",
        _react2.default.createElement("br", null),
        "And he is your board and your fireside.",
        _react2.default.createElement("br", null),
        "For you come to him with your hunger, and you seek him for peace."
      ),
      _react2.default.createElement(
        "p",
        null,
        "When your friend speaks his mind you fear not the \"nay\" in your own mind, nor do you withhold the \"ay.\"",
        _react2.default.createElement("br", null),
        "And when he is silent your heart ceases not to listen to his heart;",
        _react2.default.createElement("br", null),
        "For without words, in friendship, all thoughts, all desires, all expectations are born and shared, with joy that is unacclaimed.",
        _react2.default.createElement("br", null),
        "When you part from your friend, you grieve not;",
        _react2.default.createElement("br", null),
        "For that which you love most in him may be clearer in his absence, as the mountain to the climber is clearer from the plain.",
        _react2.default.createElement("br", null),
        "And let there be no purpose in friendship save the deepening of the spirit.",
        _react2.default.createElement("br", null),
        "For love that seeks aught but the disclosure of its own mystery is not love but a net cast forth: and only the unprofitable is caught."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And let your best be for your friend.",
        _react2.default.createElement("br", null),
        "If he must know the ebb of your tide, let him know its flood also.",
        _react2.default.createElement("br", null),
        "For what is your friend that you should seek him with hours to kill?",
        _react2.default.createElement("br", null),
        "Seek him always with hours to live.",
        _react2.default.createElement("br", null),
        "For it is his to fill your need, but not your emptiness.",
        _react2.default.createElement("br", null),
        "And in the sweetness of friendship let there be laughter, and sharing of pleasures.",
        _react2.default.createElement("br", null),
        "For in the dew of little things the heart finds its morning and is refreshed."
      )
    )
  },
  onTalking: {
    title: 'On Talking',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Talking"
      ),
      _react2.default.createElement(
        "p",
        null,
        "You talk when you cease to be at peace with your thoughts;",
        _react2.default.createElement("br", null),
        "And when you can no longer dwell in the solitude of your heart you live in your lips, and sound is a diversion and a pastime.",
        _react2.default.createElement("br", null),
        "And in much of your talking, thinking is half murdered.",
        _react2.default.createElement("br", null),
        "For thought is a bird of space, that in a cage of words may indeed unfold its wings but cannot fly."
      ),
      _react2.default.createElement(
        "p",
        null,
        "There are those among you who seek the talkative through fear of being alone.",
        _react2.default.createElement("br", null),
        "The silence of aloneness reveals to their eyes their naked selves and they would escape.",
        _react2.default.createElement("br", null),
        "And there are those who talk, and without knowledge or forethought reveal a truth which they themselves do not understand.",
        _react2.default.createElement("br", null),
        "And there are those who have the truth within them, but they tell it not in words.",
        _react2.default.createElement("br", null),
        "In the bosom of such as these the spirit dwells in rhythmic silence."
      ),
      _react2.default.createElement(
        "p",
        null,
        "When you meet your friend on the roadside or in the market place, let the spirit in you move your lips and direct your tongue.",
        _react2.default.createElement("br", null),
        "Let the voice within your voice speak to the ear of his ear;",
        _react2.default.createElement("br", null),
        "For his soul will keep the truth of your heart as the taste of the wine is remembered",
        _react2.default.createElement("br", null),
        "When the colour is forgotten and the vessel is no more."
      )
    )
  },
  onTime: {
    title: 'On Time',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Time"
      ),
      _react2.default.createElement(
        "p",
        null,
        "You would measure time the measureless and the immeasurable.",
        _react2.default.createElement("br", null),
        "You would adjust your conduct and even direct the course of your spirit according to hours and seasons.",
        _react2.default.createElement("br", null),
        "Of time you would make a stream upon whose bank you would sit and watch its flowing."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Yet the timeless in you is aware of life's timelessness,",
        _react2.default.createElement("br", null),
        "And knows that yesterday is but today's memory and tomorrow is today's dream.",
        _react2.default.createElement("br", null),
        "And that that which sings and contemplates in you is still dwelling within the bounds of that first moment which scattered the stars into space.",
        _react2.default.createElement("br", null),
        "Who among you does not feel that his power to love is boundless?",
        _react2.default.createElement("br", null),
        "And yet who does not feel that very love, though boundless, encompassed within the centre of his being, and moving not from love thought to love thought, nor from love deeds to other love deeds?",
        _react2.default.createElement("br", null),
        "And is not time even as love is, undivided and spaceless?"
      ),
      _react2.default.createElement(
        "p",
        null,
        "But if in your thought you must measure time into seasons, let each season encircle all the other seasons,",
        _react2.default.createElement("br", null),
        "And let today embrace the past with remembrance and the future with longing."
      )
    )
  },
  onGoodAndEvil: {
    title: 'On Good & Evil',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Good & Evil"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Of the good in you I can speak, but not of the evil.",
        _react2.default.createElement("br", null),
        "For what is evil but good tortured by its own hunger and thirst?",
        _react2.default.createElement("br", null),
        "Verily when good is hungry it seeks food even in dark caves, and when it thirsts it drinks even of dead waters."
      ),
      _react2.default.createElement(
        "p",
        null,
        "You are good when you are one with yourself.",
        _react2.default.createElement("br", null),
        "Yet when you are not one with yourself you are not evil.",
        _react2.default.createElement("br", null),
        "For a divided house is not a den of thieves; it is only a divided house.",
        _react2.default.createElement("br", null),
        "And a ship without rudder may wander aimlessly among perilous isles yet sink not to the bottom."
      ),
      _react2.default.createElement(
        "p",
        null,
        "You are good when you strive to give of yourself.",
        _react2.default.createElement("br", null),
        "Yet you are not evil when you seek gain for yourself.",
        _react2.default.createElement("br", null),
        "For when you strive for gain you are but a root that clings to the earth and sucks at her breast.",
        _react2.default.createElement("br", null),
        "Surely the fruit cannot say to the root, \"Be like me, ripe and full and ever giving of your abundance.\"",
        _react2.default.createElement("br", null),
        "For to the fruit giving is a need, as receiving is a need to the root."
      ),
      _react2.default.createElement(
        "p",
        null,
        "You are good when you are fully awake in your speech,",
        _react2.default.createElement("br", null),
        "Yet you are not evil when you sleep while your tongue staggers without purpose.",
        _react2.default.createElement("br", null),
        "And even stumbling speech may strengthen a weak tongue."
      ),
      _react2.default.createElement(
        "p",
        null,
        "You are good when you walk to your goal firmly and with bold steps.",
        _react2.default.createElement("br", null),
        "Yet you are not evil when you go thither limping.",
        _react2.default.createElement("br", null),
        "Even those who limp go not backward. But you who are strong and swift, see that you do not limp before the lame, deeming it kindness."
      ),
      _react2.default.createElement(
        "p",
        null,
        "You are good in countless ways, and you are not evil when you are not good,",
        _react2.default.createElement("br", null),
        "You are only loitering and sluggard.",
        _react2.default.createElement("br", null),
        "Pity that the stags cannot teach swiftness to the turtles."
      ),
      _react2.default.createElement(
        "p",
        null,
        "In your longing for your giant self lies your goodness: and that longing is in all of you.",
        _react2.default.createElement("br", null),
        "But in some of you that longing is a torrent rushing with might to the sea, carrying the secrets of the hillsides and the songs of the forest.",
        _react2.default.createElement("br", null),
        "And in others it is a flat stream that loses itself in angles and bends and lingers before it reaches the shore.",
        _react2.default.createElement("br", null),
        "But let not him who longs much say to him who longs little, \"Wherefore are you slow and halting?\"",
        _react2.default.createElement("br", null),
        "For the truly good ask not the naked, \"Where is your garment?\" nor the houseless, \"What has befallen your house?\""
      )
    )
  },
  onPrayer: {
    title: 'On Prayer',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Prayer"
      ),
      _react2.default.createElement(
        "p",
        null,
        "You pray in your distress and in your need; would that you might pray also in the fullness of your joy and in your days of abundance."
      ),
      _react2.default.createElement(
        "p",
        null,
        "For what is prayer but the expansion of yourself into the living ether?",
        _react2.default.createElement("br", null),
        "And if it is for your comfort to pour your darkness into space, it is also for your delight to pour forth the dawning of your heart.",
        _react2.default.createElement("br", null),
        "And if you cannot but weep when your soul summons you to prayer, she should spur you again and yet again, though weeping, until you shall come laughing.",
        _react2.default.createElement("br", null),
        "When you pray you rise to meet in the air those who are praying at that very hour, and whom save in prayer you may not meet.",
        _react2.default.createElement("br", null),
        "Therefore let your visit to that temple invisible be for naught but ecstasy and sweet communion.",
        _react2.default.createElement("br", null),
        "For if you should enter the temple for no other purpose than asking you shall not receive:",
        _react2.default.createElement("br", null),
        "And if you should enter into it to humble yourself you shall not be lifted:",
        _react2.default.createElement("br", null),
        "Or even if you should enter into it to beg for the good of others you shall not be heard.",
        _react2.default.createElement("br", null),
        "It is enough that you enter the temple invisible."
      ),
      _react2.default.createElement(
        "p",
        null,
        "I cannot teach you how to pray in words. God listens not to your words save when He Himself utters them through your lips.",
        _react2.default.createElement("br", null),
        "And I cannot teach you the prayer of the seas and the forests and the mountains.",
        _react2.default.createElement("br", null),
        "But you who are born of the mountains and the forests and the seas can find their prayer in your heart,",
        _react2.default.createElement("br", null),
        "And if you but listen in the stillness of the night you shall hear them saying in silence,",
        _react2.default.createElement("br", null),
        "\"Our God, who art our winged self, it is thy will in us that willeth."
      ),
      _react2.default.createElement(
        "p",
        null,
        "It is thy desire in us that desireth.",
        _react2.default.createElement("br", null),
        "It is thy urge in us that would turn our nights, which are thine, into days which are thine also.",
        _react2.default.createElement("br", null),
        "We cannot ask thee for aught, for thou knowest our needs before they are born in us:",
        _react2.default.createElement("br", null),
        "Thou art our need; and in giving us more of thyself thou givest us all.\""
      )
    )
  },
  onPleasure: {
    title: 'On Pleasure',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Pleasure"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Pleasure is a freedom-song, But it is not freedom.",
        _react2.default.createElement("br", null),
        "It is the blossoming of your desires,",
        _react2.default.createElement("br", null),
        "But it is not their fruit.",
        _react2.default.createElement("br", null),
        "It is a depth calling unto a height, But it is not the deep nor the high. It is the caged taking wing,",
        _react2.default.createElement("br", null),
        "But it is not space encompassed.",
        _react2.default.createElement("br", null),
        "Ay, in very truth, pleasure is a freedomsong.",
        _react2.default.createElement("br", null),
        "And I fain would have you sing it with fullness of heart; yet I would not have you lose your hearts in the singing."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Some of your youth seek pleasure as if it were all, and they are judged and rebuked.",
        _react2.default.createElement("br", null),
        "I would not judge nor rebuke them. I would have them seek."
      ),
      _react2.default.createElement(
        "p",
        null,
        "For they shall find pleasure, but not her alone;",
        _react2.default.createElement("br", null),
        "Seven are her sisters, and the least of them is more beautiful than pleasure.",
        _react2.default.createElement("br", null),
        "Have you not heard of the man who was digging in the earth for roots and found a treasure?"
      ),
      _react2.default.createElement(
        "p",
        null,
        "And some of your elders remember pleasures with regret like wrongs committed in drunkenness.",
        _react2.default.createElement("br", null),
        "But regret is the beclouding of the mind and not its chastisement.",
        _react2.default.createElement("br", null),
        "They should remember their pleasures with gratitude, as they would the harvest of a summer.",
        _react2.default.createElement("br", null),
        "Yet if it comforts them to regret, let them be comforted."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And there are among you those who are neither young to seek nor old to remember;",
        _react2.default.createElement("br", null),
        "And in their fear of seeking and remembering they shun all pleasures, lest they neglect the spirit or offend against it.",
        _react2.default.createElement("br", null),
        "But even in their foregoing is their pleasure.",
        _react2.default.createElement("br", null),
        "And thus they too find a treasure though they dig for roots with quivering hands.",
        _react2.default.createElement("br", null),
        "But tell me, who is he that can offend the spirit?",
        _react2.default.createElement("br", null),
        "Shall the nightingale offend the stillness of the night, or the firefly the stars?",
        _react2.default.createElement("br", null),
        "And shall your flame or your smoke burden the wind?",
        _react2.default.createElement("br", null),
        "Think you the spirit is a still pool which you can trouble with a staff?"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Oftentimes in denying yourself pleasure you do but store the desire in the recesses of your being.",
        _react2.default.createElement("br", null),
        "Who knows but that which seems omitted today, waits for tomorrow?",
        _react2.default.createElement("br", null),
        "Even your body knows its heritage and its rightful need and will not be deceived.",
        _react2.default.createElement("br", null),
        "And your body is the harp of your soul,",
        _react2.default.createElement("br", null),
        "And it is yours to bring forth sweet music from it or confused sounds."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And now you ask in your heart, \"How shall we distinguish that which is good in pleasure from that which is not good?\"",
        _react2.default.createElement("br", null),
        "Go to your fields and your gardens, and you shall learn that it is the pleasure of the bee to gather honey of the flower,",
        _react2.default.createElement("br", null),
        "But it is also the pleasure of the flower to yield its honey to the bee.",
        _react2.default.createElement("br", null),
        "For to the bee a flower is a fountain of life,",
        _react2.default.createElement("br", null),
        "And to the flower a bee is a messenger of love,",
        _react2.default.createElement("br", null),
        "And to both, bee and flower, the giving and the receiving of pleasure is a need and an ecstasy."
      ),
      _react2.default.createElement(
        "p",
        null,
        "People of Orphalese, be in your pleasures like the flowers and the bees."
      )
    )
  },
  onBeauty: {
    title: 'On Beauty',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Beauty"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Where shall you seek beauty, and how shall you find her unless she herself be your way and your guide?",
        _react2.default.createElement("br", null),
        "And how shall you speak of her except she be the weaver of your speech?"
      ),
      _react2.default.createElement(
        "p",
        null,
        "The aggrieved and the injured say, \"Beauty is kind and gentle.",
        _react2.default.createElement("br", null),
        "Like a young mother half-shy of her own glory she walks among us.\"",
        _react2.default.createElement("br", null),
        "And the passionate say, \"Nay, beauty is a thing of might and dread.",
        _react2.default.createElement("br", null),
        "Like the tempest she shakes the earth beneath us and the sky above us.\""
      ),
      _react2.default.createElement(
        "p",
        null,
        "The tired and the weary say, \"Beauty is of soft whisperings. She speaks in our spirit.",
        _react2.default.createElement("br", null),
        "Her voice yields to our silences like a faint light that quivers in fear of the shadow.\"",
        _react2.default.createElement("br", null),
        "But the restless say, \"We have heard her shouting among the mountains,",
        _react2.default.createElement("br", null),
        "And with her cries came the sound of hoofs, and the beating of wings and the roaring of lions.\""
      ),
      _react2.default.createElement(
        "p",
        null,
        "At night the watchmen of the city say, \"Beauty shall rise with the dawn from the east.\"",
        _react2.default.createElement("br", null),
        "And at noontide the toilers and the wayfarers say,",
        _react2.default.createElement("br", null),
        "\"We have seen her leaning over the earth from the windows of the sunset.\""
      ),
      _react2.default.createElement(
        "p",
        null,
        "In winter say the snow-bound, \"She shall come with the spring leaping upon the hills.\" ",
        _react2.default.createElement("br", null),
        "And in the summer heat the reapers say, ",
        _react2.default.createElement("br", null),
        "\"We have seen her dancing with the autumn leaves, ",
        _react2.default.createElement("br", null),
        "and we saw a drift of snow in her hair.\"",
        _react2.default.createElement("br", null),
        "All these things have you said of beauty, ",
        _react2.default.createElement("br", null),
        "Yet in truth you spoke not of her but of needs unsatisfied,",
        _react2.default.createElement("br", null),
        "And beauty is not a need but an ecstasy. ",
        _react2.default.createElement("br", null),
        "It is not a mouth thirsting nor an empty hand stretched forth,",
        _react2.default.createElement("br", null),
        "But rather a heart enflamed and a soul enchanted."
      ),
      _react2.default.createElement(
        "p",
        null,
        "It is not the image you would see nor the song you would hear,",
        _react2.default.createElement("br", null),
        "But rather an image you see though you close your eyes and a song you hear though you shut your ears.",
        _react2.default.createElement("br", null),
        "It is not the sap within the furrowed bark, nor a wing attached to a claw,",
        _react2.default.createElement("br", null),
        "But rather a garden for ever in bloom and a flock of angels for ever in flight."
      ),
      _react2.default.createElement(
        "p",
        null,
        "People of Orphalese, beauty is life when life unveils her holy face.",
        _react2.default.createElement("br", null),
        "But you are life and you are the veil.",
        _react2.default.createElement("br", null),
        "Beauty is eternity gazing at itself in a mirror.",
        _react2.default.createElement("br", null),
        "But you are eternity and you are the mirror."
      )
    )
  },
  onReligion: {
    title: 'On Religion',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Religion"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Have I spoken this day of aught else?",
        _react2.default.createElement("br", null),
        "Is not religion all deeds and all reflection, ",
        _react2.default.createElement("br", null),
        "And that which is neither deed nor reflection, but a wonder and a surprise ever springing in the soul, even while the hands hew the stone or tend the loom?",
        _react2.default.createElement("br", null),
        "Who can separate his faith from his actions, or his belief from his occupations?",
        _react2.default.createElement("br", null),
        "Who can spread his hours before him, saying, \"This for God and this for myself; This for my soul, and this other for my body?\"",
        _react2.default.createElement("br", null),
        "All your hours are wings that beat through space from self to self.",
        _react2.default.createElement("br", null),
        "He who wears his morality but as his best garment were better naked.",
        _react2.default.createElement("br", null),
        "The wind and the sun will tear no holes in his skin.",
        _react2.default.createElement("br", null),
        "And he who defines his conduct by ethics imprisons his song-bird in a cage.",
        _react2.default.createElement("br", null),
        "The freest song comes not through bars and wires.",
        _react2.default.createElement("br", null),
        "And he to whom worshipping is a window, to open but also to shut, has not yet visited the house of his soul whose windows are from dawn to dawn."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Your daily life is your temple and your religion.",
        _react2.default.createElement("br", null),
        "Whenever you enter into it take with you your all.",
        _react2.default.createElement("br", null),
        "Take the plough and the forge and the mallet and the lute,",
        _react2.default.createElement("br", null),
        "The things you have fashioned in necessity or for delight.",
        _react2.default.createElement("br", null),
        "For in revery you cannot rise above your achievements nor fall lower than your failures.",
        _react2.default.createElement("br", null),
        "And take with you all men:",
        _react2.default.createElement("br", null),
        "For in adoration you cannot fly higher than their hopes nor humble yourself lower than their despair."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And if you would know God be not therefore a solver of riddles.",
        _react2.default.createElement("br", null),
        "Rather look about you and you shall see Him playing with your children.",
        _react2.default.createElement("br", null),
        "And look into space; you shall see Him walking in the cloud, outstretching His arms in the lightning and descending in rain.",
        _react2.default.createElement("br", null),
        "You shall see Him smiling in flowers, then rising and waving His hands in trees."
      )
    )
  },
  onDeath: {
    title: 'On Death',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran on Death"
      ),
      _react2.default.createElement(
        "p",
        null,
        "You would know the secret of death.",
        _react2.default.createElement("br", null),
        "But how shall you find it unless you seek it in the heart of life?",
        _react2.default.createElement("br", null),
        "The owl whose night-bound eyes are blind unto the day cannot unveil the mystery of light.",
        _react2.default.createElement("br", null),
        "If you would indeed behold the spirit of death, open your heart wide unto the body of life.",
        _react2.default.createElement("br", null),
        "For life and death are one, even as the river and the sea are one."
      ),
      _react2.default.createElement(
        "p",
        null,
        "In the depth of your hopes and desires lies your silent knowledge of the beyond;",
        _react2.default.createElement("br", null),
        "And like seeds dreaming beneath the snow your heart dreams of spring.",
        _react2.default.createElement("br", null),
        "Trust the dreams, for in them is hidden the gate to eternity.",
        _react2.default.createElement("br", null),
        "Your fear of death is but the trembling of the shepherd when he stands before the king whose hand is to be laid upon him in honour.",
        _react2.default.createElement("br", null),
        "Is the shepherd not joyful beneath his trembling, that he shall wear the mark of the king?",
        _react2.default.createElement("br", null),
        "Yet is he not more mindful of his trembling?"
      ),
      _react2.default.createElement(
        "p",
        null,
        "For what is it to die but to stand naked in the wind and to melt into the sun?",
        _react2.default.createElement("br", null),
        "And what is it to cease breathing, but to free the breath from its restless tides, that it may rise and expand and seek God unencumbered?"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Only when you drink from the river of silence shall you indeed sing.",
        _react2.default.createElement("br", null),
        "And when you have reached the mountain top, then you shall begin to climb.",
        _react2.default.createElement("br", null),
        "And when the earth shall claim your limbs, then shall you truly dance."
      )
    )
  },
  theFarewell: {
    title: 'The Farewell',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "The Farewell"
      ),
      _react2.default.createElement(
        "em",
        null,
        "for Nadi"
      ),
      _react2.default.createElement(
        "p",
        null,
        "And now it was evening. ",
        _react2.default.createElement("br", null),
        "And Almitra, the seeress said: \"blessed be this day and this place and your spirit that has spoken.\" ",
        _react2.default.createElement("br", null),
        "And he answered, Was it I who spoke? Was I not also a listener?"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Then he descended the steps of the Temple and all the people followed him. And he reached his ship and stood upon the deck. ",
        _react2.default.createElement("br", null),
        "And facing the people again, he raised his voice and said: ",
        _react2.default.createElement("br", null),
        "People of Orphalese, the wind bids me leave you. ",
        _react2.default.createElement("br", null),
        "Less hasty am I than the wind, yet I must go. ",
        _react2.default.createElement("br", null),
        "We wanderers, ever seeking the lonelier way, begin no day where we have ended another day; and no sunrise finds us where sunset left us. ",
        _react2.default.createElement("br", null),
        "Even while the earth sleeps we travel. ",
        _react2.default.createElement("br", null),
        "We are the seeds of the tenacious plant, and it is in our ripeness and our fullness of heart that we are given to the wind and are scattered."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Brief were my days among you, and briefer still the words I have spoken. But should my voice fade in your ears, and my love vanish in your memory, then I will come again, ",
        _react2.default.createElement("br", null),
        "And with a richer heart and lips more yielding to the spirit will I speak. ",
        _react2.default.createElement("br", null),
        "Yea, I shall return with the tide, ",
        _react2.default.createElement("br", null),
        "And though death may hide me, and the greater silence enfold me, yet again will I seek your understanding. ",
        _react2.default.createElement("br", null),
        "And not in vain will I seek. ",
        _react2.default.createElement("br", null),
        "If aught I have said is truth, that truth shall reveal itself in a clearer voice, and in words more kin to your thoughts."
      ),
      _react2.default.createElement(
        "p",
        null,
        "I go with the wind, people of Orphalese, but not down into emptiness; ",
        _react2.default.createElement("br", null),
        "And if this day is not a fulfilment of your needs and my love, then let it be a promise till another day. ",
        _react2.default.createElement("br", null),
        "Man's needs change, but not his love, nor his desire that his love should satisfy his needs. ",
        _react2.default.createElement("br", null),
        "Know therefore, that from the greater silence I shall return. ",
        _react2.default.createElement("br", null),
        "The mist that drifts away at dawn, leaving but dew in the fields, shall rise and gather into a cloud and then fall down in rain. ",
        _react2.default.createElement("br", null),
        "And not unlike the mist have I been. ",
        _react2.default.createElement("br", null),
        "In the stillness of the night I have walked in your streets, and my spirit has entered your houses, ",
        _react2.default.createElement("br", null),
        "And your heart-beats were in my heart, and your breath was upon my face, and I knew you all. ",
        _react2.default.createElement("br", null),
        "Ay, I knew your joy and your pain, and in your sleep your dreams were my dreams. ",
        _react2.default.createElement("br", null),
        "And oftentimes I was among you a lake among the mountains. ",
        _react2.default.createElement("br", null),
        "I mirrored the summits in you and the bending slopes, and even the passing flocks of your thoughts and your desires. ",
        _react2.default.createElement("br", null),
        "And to my silence came the laughter of your children in streams, and the longing of your youths in rivers. ",
        _react2.default.createElement("br", null),
        "And when they reached my depth the streams and the rivers ceased not yet to sing."
      ),
      _react2.default.createElement(
        "p",
        null,
        "But sweeter still than laughter and greater than longing came to me. ",
        _react2.default.createElement("br", null),
        "It was the boundless in you; ",
        _react2.default.createElement("br", null),
        "The vast man in whom you are all but cells and sinews; ",
        _react2.default.createElement("br", null),
        "He in whose chant all your singing is but a soundless throbbing. ",
        _react2.default.createElement("br", null),
        "It is in the vast man that you are vast, ",
        _react2.default.createElement("br", null),
        "And in beholding him that I beheld you and loved you. ",
        _react2.default.createElement("br", null),
        "For what distances can love reach that are not in that vast sphere? ",
        _react2.default.createElement("br", null),
        "What visions, what expectations and what presumptions can outsoar that flight? ",
        _react2.default.createElement("br", null),
        "Like a giant oak tree covered with apple blossoms in the vast man in you. ",
        _react2.default.createElement("br", null),
        "His might binds you to the earth, his fragrance lifts you into space, and in his durability you are deathless."
      ),
      _react2.default.createElement(
        "p",
        null,
        "You have been told that, even like a chain, you are as weak as your weakest link. ",
        _react2.default.createElement("br", null),
        "This is but half the truth. You are also as strong as your strongest link. ",
        _react2.default.createElement("br", null),
        "To measure you by your smallest deed is to reckon the power of the ocean by the frailty of its foam. ",
        _react2.default.createElement("br", null),
        "To judge you by your failures is to cast blame upon the seasons for their inconstancy."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Ay, you are like an ocean, ",
        _react2.default.createElement("br", null),
        "And though heavy-grounded ships await the tide upon your shores, yet, even like an ocean, you cannot hasten your tides. ",
        _react2.default.createElement("br", null),
        "And like the seasons you are also, ",
        _react2.default.createElement("br", null),
        "And though in your winter you deny your spring, ",
        _react2.default.createElement("br", null),
        "Yet spring, reposing within you, smiles in her drowsiness and is not offended. ",
        _react2.default.createElement("br", null),
        "Think not I say these things are in order that you may say the one to the other, \"He praised us well. He saw but the good in us.\" ",
        _react2.default.createElement("br", null),
        "I only speak to you in words of that which you yourselves know in thought. ",
        _react2.default.createElement("br", null),
        "And what is word knowledge but a shadow of wordless knowledge? ",
        _react2.default.createElement("br", null),
        "Your thoughts and my words are waves from a sealed memory that keeps records of our yesterdays, ",
        _react2.default.createElement("br", null),
        "And of the ancient days when the earth knew not us nor herself, ",
        _react2.default.createElement("br", null),
        "And of nights when earth was upwrought with confusion."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Wise men have come to you to give you of their wisdom. I came to take of your wisdom: ",
        _react2.default.createElement("br", null),
        "And behold I have found that which is greater than wisdom. ",
        _react2.default.createElement("br", null),
        "It is a flame spirit in you ever gathering more of itself, ",
        _react2.default.createElement("br", null),
        "While you, heedless of its expansion, bewail the withering of your days. ",
        _react2.default.createElement("br", null),
        "It is life in quest of life in bodies that fear the grave."
      ),
      _react2.default.createElement(
        "p",
        null,
        "There are no graves here. ",
        _react2.default.createElement("br", null),
        "These mountains and plains are a cradle and a stepping-stone. ",
        _react2.default.createElement("br", null),
        "Whenever you pass by the field where you have laid your ancestors look well thereupon, and you shall see yourselves and your children dancing hand in hand. ",
        _react2.default.createElement("br", null),
        "Verily you often make merry without knowing."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Others have come to you to whom for golden promises made unto your faith you have given but riches and power and glory. ",
        _react2.default.createElement("br", null),
        "Less than a promise have I given, and yet more generous have you been to me. ",
        _react2.default.createElement("br", null),
        "You have given me my deeper thirsting after life. ",
        _react2.default.createElement("br", null),
        "Surely there is no greater gift to a man than that which turns all this aims into parching lips and all life into a fountain. ",
        _react2.default.createElement("br", null),
        "And in this lies my honour and my reward,- ",
        _react2.default.createElement("br", null),
        "That whenever I come to the fountain to drink I find the living water itself thirsty; ",
        _react2.default.createElement("br", null),
        "And it drinks me while I drink it."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Some of you have deemed me proud and over-shy to receive gifts. ",
        _react2.default.createElement("br", null),
        "Too proud indeed am I to receive wages, but not gifts. ",
        _react2.default.createElement("br", null),
        "And though I have eaten berries among the hills when you would have had me sit at your board, ",
        _react2.default.createElement("br", null),
        "And slept in the portico of the temple when you would gladly have sheltered me, ",
        _react2.default.createElement("br", null),
        "Yet was it not your loving mindfulness of my days and my nights that made food sweet to my mouth and girdled my sleep with visions?"
      ),
      _react2.default.createElement(
        "p",
        null,
        "For this I bless you most: ",
        _react2.default.createElement("br", null),
        "You give much and know not that you give at all. ",
        _react2.default.createElement("br", null),
        "Verily the kindness that gazes upon itself in a mirror turns to stone, ",
        _react2.default.createElement("br", null),
        "And a good deed that calls itself by tender names becomes the parent to a curse."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And some of you have called me aloof, and drunk with my own aloneness, ",
        _react2.default.createElement("br", null),
        "And you have said, \"He holds council with the trees of the forest but not with men.\" ",
        _react2.default.createElement("br", null),
        "He sits alone on hill-tops and looks down upon our city.\" ",
        _react2.default.createElement("br", null),
        "True it is that I have climbed the hills and walked in remote places. ",
        _react2.default.createElement("br", null),
        "How could I have seen you save from a great height or a great distance? ",
        _react2.default.createElement("br", null),
        "How can one be indeed near unless he be far?"
      ),
      _react2.default.createElement(
        "p",
        null,
        "And others among you called unto me, not in words, and they said, ",
        _react2.default.createElement("br", null),
        "\"Stranger, stranger, lover of unreachable heights, why dwell you among the summits where eagles build their nests? ",
        _react2.default.createElement("br", null),
        "Why seek you the unattainable? ",
        _react2.default.createElement("br", null),
        "What storms would you trap in your net, ",
        _react2.default.createElement("br", null),
        "And what vaporous birds do you hunt in the sky? ",
        _react2.default.createElement("br", null),
        "Come and be one of us. ",
        _react2.default.createElement("br", null),
        "Descend and appease your hunger with our bread and quench your thirst with our wine.\" ",
        _react2.default.createElement("br", null),
        "In the solitude of their souls they said these things; ",
        _react2.default.createElement("br", null),
        "But were their solitude deeper they would have known that I sought but the secret of your joy and your pain, ",
        _react2.default.createElement("br", null),
        "And I hunted only your larger selves that walk the sky."
      ),
      _react2.default.createElement(
        "p",
        null,
        "But the hunter was also the hunted; ",
        _react2.default.createElement("br", null),
        "For many of my arrows left my bow only to seek my own breast. ",
        _react2.default.createElement("br", null),
        "And the flier was also the creeper; ",
        _react2.default.createElement("br", null),
        "For when my wings were spread in the sun their shadow upon the earth was a turtle. ",
        _react2.default.createElement("br", null),
        "And I the believer was also the doubter; ",
        _react2.default.createElement("br", null),
        "For often have I put my finger in my own wound that I might have the greater belief in you and the greater knowledge of you."
      ),
      _react2.default.createElement(
        "p",
        null,
        "And it is with this belief and this knowledge that I say, ",
        _react2.default.createElement("br", null),
        "You are not enclosed within your bodies, nor confined to houses or fields. ",
        _react2.default.createElement("br", null),
        "That which is you dwells above the mountain and roves with the wind. ",
        _react2.default.createElement("br", null),
        "It is not a thing that crawls into the sun for warmth or digs holes into darkness for safety, ",
        _react2.default.createElement("br", null),
        "But a thing free, a spirit that envelopes the earth and moves in the ether."
      ),
      _react2.default.createElement(
        "p",
        null,
        "If these be vague words, then seek not to clear them. ",
        _react2.default.createElement("br", null),
        "Vague and nebulous is the beginning of all things, but not their end, ",
        _react2.default.createElement("br", null),
        "And I fain would have you remember me as a beginning. ",
        _react2.default.createElement("br", null),
        "Life, and all that lives, is conceived in the mist and not in the crystal. ",
        _react2.default.createElement("br", null),
        "And who knows but a crystal is mist in decay?"
      ),
      _react2.default.createElement(
        "p",
        null,
        "This would I have you remember in remembering me: ",
        _react2.default.createElement("br", null),
        "That which seems most feeble and bewildered in you is the strongest and most determined. ",
        _react2.default.createElement("br", null),
        "Is it not your breath that has erected and hardened the structure of your bones? ",
        _react2.default.createElement("br", null),
        "And is it not a dream which none of you remember having dreamt, that builded your city and fashioned all there is in it? ",
        _react2.default.createElement("br", null),
        "Could you but see the tides of that breath you would cease to see all else, ",
        _react2.default.createElement("br", null),
        "And if you could hear the whispering of the dream you would hear no other sound."
      ),
      _react2.default.createElement(
        "p",
        null,
        "But you do not see, nor do you hear, and it is well. ",
        _react2.default.createElement("br", null),
        "The veil that clouds your eyes shall be lifted by the hands that wove it, ",
        _react2.default.createElement("br", null),
        "And the clay that fills your ears shall be pierced by those fingers that kneaded it. ",
        _react2.default.createElement("br", null),
        "And you shall see ",
        _react2.default.createElement("br", null),
        "And you shall hear. ",
        _react2.default.createElement("br", null),
        "Yet you shall not deplore having known blindness, nor regret having been deaf. ",
        _react2.default.createElement("br", null),
        "For in that day you shall know the hidden purposes in all things, ",
        _react2.default.createElement("br", null),
        "And you shall bless darkness as you would bless light."
      ),
      _react2.default.createElement(
        "p",
        null,
        "After saying these things he looked about him, and he saw the pilot of his ship standing by the helm and gazing now at the full sails and now at the distance. ",
        _react2.default.createElement("br", null),
        "And he said: ",
        _react2.default.createElement("br", null),
        "Patient, over patient, is the captain of my ship. ",
        _react2.default.createElement("br", null),
        "The wind blows, and restless are the sails; ",
        _react2.default.createElement("br", null),
        "Even the rudder begs direction; ",
        _react2.default.createElement("br", null),
        "Yet quietly my captain awaits my silence. ",
        _react2.default.createElement("br", null),
        "And these my mariners, who have heard the choir of the greater sea, they too have heard me patiently. ",
        _react2.default.createElement("br", null),
        "Now they shall wait no longer. ",
        _react2.default.createElement("br", null),
        "I am ready. ",
        _react2.default.createElement("br", null),
        "The stream has reached the sea, and once more the great mother holds her son against her breast."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Fare you well, people of Orphalese. ",
        _react2.default.createElement("br", null),
        "This day has ended. ",
        _react2.default.createElement("br", null),
        "It is closing upon us even as the waterlily upon its own tomorrow ",
        _react2.default.createElement("br", null),
        "What was given us here we shall keep, ",
        _react2.default.createElement("br", null),
        "And it if suffices not, then again must we come together and together stretch our hands unto the giver. ",
        _react2.default.createElement("br", null),
        "Forget not that I shall come back to you. ",
        _react2.default.createElement("br", null),
        "A little while, and my longing shall gather dust and foam for another body. ",
        _react2.default.createElement("br", null),
        "A little while, a moment of rest upon the wind, and another woman shall bear me."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Farewell to you and the youth I have spent with you. ",
        _react2.default.createElement("br", null),
        "It was but yesterday we met in a dream. ",
        _react2.default.createElement("br", null),
        "You have sung to me in my aloneness, and I of your longings have built a tower in the sky. ",
        _react2.default.createElement("br", null),
        "But now our sleep has fled and our dream is over, and it is no longer dawn. ",
        _react2.default.createElement("br", null),
        "The noontide is upon us and our half waking has turned to fuller day, and we must part. ",
        _react2.default.createElement("br", null),
        "If in the twilight of memory we should meet once more, we shall speak again together and you shall sing to me a deeper song. ",
        _react2.default.createElement("br", null),
        "And if our hands should meet in another dream we shall build another tower in the sky."
      ),
      _react2.default.createElement(
        "p",
        null,
        "So saying he made a signal to the seamen, and straightway they weighed anchor and cast the ship loose from its moorings, and they moved eastward. ",
        _react2.default.createElement("br", null),
        "And a cry came from the people as from a single heart, and it rose into the dusk and was carried out over the sea like a great trumpeting. ",
        _react2.default.createElement("br", null),
        "Only Almitra was silent, gazing after the ship until it had vanished into the mist. ",
        _react2.default.createElement("br", null),
        "And when all the people were dispersed she still stood alone upon the sea-wall, remembering in her heart his saying,"
      ),
      _react2.default.createElement(
        "p",
        null,
        "\"A little while, a moment of rest upon the wind, and another woman shall bear me.\""
      )
    )
  },
  onKahlilGibran: {
    title: 'On Kahlil Gibran',
    html: _react2.default.createElement(
      "div",
      { className: "chapter" },
      _react2.default.createElement(
        "h1",
        null,
        "Kahlil Gibran",
        _react2.default.createElement("br", null),
        "1883-1931"
      ),
      _react2.default.createElement(
        "p",
        null,
        _react2.default.createElement(
          "div",
          { className: "lightbox" },
          _react2.default.createElement("img", { alt: "Kahlil Gibran", src: "https://spiral9.com/img/gibran.jpg" })
        )
      ),
      _react2.default.createElement(
        "p",
        null,
        "\"His power came from some great reservoir of spiritual life else it could not have been so universal and so potent, but the majesty and beauty of the language with which he clothed it were all his own.\" \u2014Claude Bragdon"
      )
    )
  }
};

var chapterIDs = Object.keys(chapters);

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function App() {
  var _useState = (0, _react.useState)(targetChapterID || getRandomElement(Object.keys(chapters))),
      _useState2 = _slicedToArray(_useState, 2),
      chapterID = _useState2[0],
      setChapterID = _useState2[1];

  (0, _react.useEffect)(function () {
    window.location.hash = chapterID;
  }, [chapterID]);

  function Nav() {
    return _react2.default.createElement(
      "nav",
      null,
      chapterIDs.map(function (chapterKey) {
        return _react2.default.createElement(
          "button",
          { onClick: function onClick() {
              return setChapterID(chapterKey);
            } },
          chapters[chapterKey].title
        );
      }),
      " "
    );
  }

  return _react2.default.createElement(
    "div",
    { className: "page" },
    chapters[chapterID].html,
    _react2.default.createElement(Nav, null)
  );
}

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('root'));