const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Tạo dữ liệu trực tiếp trong mã nguồn
const router = jsonServer.router({
  words: [
    {
      word: 'forest',
      definition: 'A large area covered chiefly with trees and undergrowth.',
      topicId: 1,
      id: 1,
      pronunciation: '/ˈfɒɹɪst/',
      image_link: [
        'https://i.pinimg.com/236x/28/2a/ae/282aae3999df4d8cbdb31c81b610a319.jpg',
        'https://i.pinimg.com/236x/70/6a/94/706a94b62285d3945f4bc2ef6ccac314.jpg',
        'https://i.pinimg.com/236x/72/22/f2/7222f24a02d8f09e576e6234f69cc524.jpg',
        'https://i.pinimg.com/236x/0d/b3/01/0db301ba961d6649db60a2664fa56d73.jpg',
      ],
      examples: [
        'The forest was teeming with wildlife.',
        'They went for a hike in the dense forest.',
        'The sunlight barely penetrated the thick forest canopy.',
        'The forest floor was covered in a thick layer of leaves.',
      ],
      tdn: [
        {
          word: 'woods',
          definition: 'A large and thick collection of trees.',
        },
        {
          word: 'jungle',
          definition: 'A dense forest in a tropical region.',
        },
        {
          word: 'grove',
          definition: 'A small wood or group of trees.',
        },
      ],
      ttn: [
        {
          word: 'desert',
          definition:
            'An area, often covered with sand or rocks, where there is very little rain and not many plants.',
        },
        {
          word: 'sea',
          definition:
            "the expanse of salt water that covers most of the earth's surface and surrounds its landmasses.",
        },
      ],
    },
    {
      word: 'river',
      definition:
        'A large natural stream of water flowing in a channel to the sea, a lake, or another river.',
      topicId: 1,
      id: 2,
      pronunciation: '/ˈɹɪvə/',
      image_link: [
        'https://i.pinimg.com/236x/7a/6f/3f/7a6f3f66d9b7f2c482a297f11d5ba5eb.jpg',
        'https://i.pinimg.com/236x/9a/0e/b2/9a0eb2c39fd3e8b6d52b8e6d4ff13199.jpg',
        'https://i.pinimg.com/236x/c9/55/3f/c9553f9431112abd81a204aa758b88ff.jpg',
        'https://i.pinimg.com/236x/4f/39/c6/4f39c6a4d28c905d1f81954558f3b749.jpg',
      ],
      examples: [
        'The river flows gently through the valley.',
        'They spent the afternoon fishing by the river.',
        'The riverbank was a popular spot for picnics.',
        'The bridge spanned the width of the river.',
      ],
      tdn: [
        {
          word: 'stream',
          definition: 'A small, narrow river.',
        },
        {
          word: 'creek',
          definition:
            'A small stream, often a shallow or intermittent tributary to a river.',
        },
        {
          word: 'brook',
          definition: 'A small, natural stream of fresh water.',
        },
      ],
      ttn: [
        {
          word: 'valley',
          definition:
            'A low area of land between hills or mountains, typically with a river or stream flowing through it.',
        },
        {
          word: 'plain',
          definition: 'A large area of flat land with few trees.',
        },
      ],
    },
    {
      word: 'mountain',
      definition:
        "A large natural elevation of the earth's surface rising abruptly from the surrounding level.",
      topicId: 1,
      id: 3,
      pronunciation: '/ˈmaʊntɪn/',
      image_link: [
        'https://i.pinimg.com/236x/ae/3c/9e/ae3c9e80d93613ddcda6275f59e0a9e8.jpg',
        'https://i.pinimg.com/236x/3f/6c/89/3f6c89b7e2123f425cd28f0d3bfb6703.jpg',
        'https://i.pinimg.com/236x/09/1c/ed/091ced08f81831dd35097ec83c744862.jpg',
        'https://i.pinimg.com/236x/f0/94/62/f09462ac6a3ab79621b673b3f2b48f5d.jpg',
      ],
      examples: [
        'The mountain peak was covered in snow.',
        'They climbed the steep mountain trail.',
        'The mountain range stretched as far as the eye could see.',
        'A small cabin was nestled at the base of the mountain.',
      ],
      tdn: [
        {
          word: 'peak',
          definition: 'The pointed top of a mountain.',
        },
        {
          word: 'hill',
          definition:
            'A naturally raised area of land, not as high or craggy as a mountain.',
        },
        {
          word: 'ridge',
          definition: 'A long, narrow hilltop, mountain range, or watershed.',
        },
      ],
      ttn: [
        {
          word: 'lowland',
          definition:
            'flat land that is at, or not much higher than, sea level',
        },

        {
          word: 'dell',
          definition: 'a small valley, usually with trees',
        },
      ],
    },
    {
      word: 'rain',
      definition: 'Water that falls from the clouds in drops.',
      topicId: 2,
      id: 4,
      pronunciation: '/ɹeɪn/',
      image_link: [
        'https://i.pinimg.com/236x/8a/01/cd/8a01cde03fe0c96d9e6ae0445603a79c.jpg',
        'https://i.pinimg.com/236x/e2/ec/51/e2ec51531a27aa359e7646ffda4910c8.jpg',
        'https://i.pinimg.com/236x/ba/31/86/ba3186e5e9e696ee87394c991cee7965.jpg',
        'https://i.pinimg.com/236x/18/a6/a2/18a6a253fd7d1bb1b989ae488aaf70f1.jpg',
      ],
      examples: [
        'The rain fell steadily throughout the night.',
        'They were caught in a sudden rain shower.',
        'The sound of rain on the roof was soothing.',
        'The streets were slick with rain.',
      ],
      tdn: [
        {
          word: 'shower',
          definition: 'A brief and usually light fall of rain.',
        },
        {
          word: 'drizzle',
          definition: 'Light rain falling in very fine drops.',
        },
        {
          word: 'downpour',
          definition: 'A heavy fall of rain.',
        },
      ],
      ttn: [
        {
          word: 'drought',
          definition:
            'A prolonged period of abnormally low rainfall, leading to a shortage of water.',
        },
      ],
    },
    {
      word: 'snow',
      definition:
        'Atmospheric water vapor frozen into ice crystals and falling in light white flakes.',
      topicId: 2,
      id: 5,
      pronunciation: '/snəʊ/',
      image_link: [
        'https://i.pinimg.com/236x/47/77/ef/4777effd7383fb2782e845750784b93a.jpg',
        'https://i.pinimg.com/236x/92/40/3d/92403dc41ce444bb61ef6129ee552ace.jpg',
        'https://i.pinimg.com/236x/8f/27/47/8f2747babcbef285896de9ac7001442d.jpg',
        'https://i.pinimg.com/236x/f7/08/f4/f708f4349c96bcaa69c5636562a8ce3d.jpg',
      ],
      examples: [
        'Snowflakes drifted down from the sky.',
        'The ground was blanketed in fresh snow.',
        'Children were building a snowman in the yard.',
        'The snow made the landscape look magical.',
      ],
      tdn: [
        {
          word: 'flurry',
          definition: 'A brief snowfall.',
        },
        {
          word: 'blizzard',
          definition: 'A severe snowstorm with high winds and low visibility.',
        },
        {
          word: 'sleet',
          definition:
            'A form of precipitation consisting of ice pellets, often mixed with rain or snow.',
        },
      ],
      ttn: [
        {
          word: 'desert',
          definition:
            'An area, often covered with sand or rocks, where there is very little rain and not many plants.',
        },
        {
          word: 'rain',
          definition:
            'Moisture condensed from the atmosphere that falls visibly in separate drops.',
        },
      ],
    },
    {
      word: 'storm',
      definition:
        'A violent disturbance of the atmosphere with strong winds and usually rain, thunder, lightning, or snow.',
      topicId: 2,
      id: 6,
      pronunciation: '/stɔːm/',
      image_link: [
        'https://i.pinimg.com/236x/5a/84/1b/5a841b5b321ddcae329624e24f6c47e0.jpg',
        'https://i.pinimg.com/236x/a8/5a/ec/a85aec746a3e81978185fa374b7d1bbb.jpg',
        'https://i.pinimg.com/236x/09/53/29/0953292d0206ea3850790f2098220c19.jpg',
        'https://i.pinimg.com/236x/b7/33/7c/b7337c7742f0cd86554241d49fd9f3c0.jpg',
      ],
      examples: [
        'The storm brought heavy rain and strong winds.',
        'Lightning flashed across the sky during the storm.',
        'They sought shelter from the approaching storm.',
        'The storm caused widespread power outages.',
      ],
      tdn: [
        {
          word: 'tempest',
          definition: 'A violent windy storm.',
        },
        {
          word: 'hurricane',
          definition:
            'A storm with a violent wind, typically a tropical cyclone in the Caribbean.',
        },
        {
          word: 'cyclone',
          definition:
            'A system of winds rotating inward to an area of low atmospheric pressure.',
        },
      ],
      ttn: [
        {
          word: 'sunshine',
          definition:
            'Direct sunlight unbroken by cloud, especially over a comparatively large area.',
          pronunciation: '/ˈsʌnʃʌɪn/',
        },
        {
          word: 'clear',
          definition: 'Free from clouds, mist, or haze.',
          pronunciation: '/klɪr/',
        },
      ],
    },
    {
      word: 'lion',
      definition:
        'A large tawny-colored cat that lives in prides, found in Africa and northwestern India.',
      topicId: 3,
      id: 7,
      pronunciation: '/ˈlaɪən/',
      image_link: [
        'https://i.pinimg.com/236x/73/44/49/73444949fb8637d008e1672c580914a1.jpg',
        'https://i.pinimg.com/236x/51/ce/6a/51ce6a3f68585bb4bf3963a09ea7c323.jpg',
        'https://i.pinimg.com/236x/b7/8d/08/b78d087c3d1429e1619352969000a456.jpg',
        'https://i.pinimg.com/236x/02/b7/d3/02b7d33ea616c46706e84fdc51ca7743.jpg',
      ],
      examples: [
        'The lion roared loudly in the savannah.',
        'A pride of lions rested under the shade of a tree.',
        'The lion is often called the king of the jungle.',
        'Lions are known for their majestic manes.',
      ],
      tdn: [
        {
          word: 'big cat',
          definition: 'A large wild cat such as a lion, tiger, or jaguar.',
        },
        {
          word: 'panther',
          definition:
            'A large cat that is typically black, such as a jaguar or leopard.',
        },
        {
          word: 'tiger',
          definition:
            'A large predatory feline mammal, native to Asia, with a coat of reddish-orange with dark stripes.',
        },
      ],
      ttn: [
        {
          word: 'mouse',
          definition:
            'A small rodent that typically has a pointed snout, relatively large ears and eyes, and a long tail.',
          pronunciation: '/maʊs/',
        },
        {
          word: 'rabbit',
          definition:
            'A burrowing, gregarious, plant-eating mammal with long ears, long hind legs, and a short tail.',
          pronunciation: '/ˈræbɪt/',
        },
      ],
    },
    {
      word: 'eagle',
      definition:
        'A large bird of prey with a massive hooked bill and long broad wings.',
      topicId: 3,
      id: 8,
      pronunciation: '/ˈiːɡəl/',
      image_link: [
        'https://i.pinimg.com/236x/de/f1/f3/def1f3321c7340363d5e60657d4aef59.jpg',
        'https://i.pinimg.com/236x/2d/ea/db/2deadbb3d0c5094cea4a0fb3aee60d4e.jpg',
        'https://i.pinimg.com/236x/46/08/df/4608df50b89ecbedbee66768e974deeb.jpg',
        'https://i.pinimg.com/236x/e1/43/b9/e143b9445251441dd9da52e3f133a237.jpg',
      ],
      examples: [
        'The eagle soared high above the mountains.',
        'Eagles have sharp vision to spot their prey.',
        'The eagle built its nest on a cliff edge.',
        'An eagle swooped down to catch a fish.',
      ],
      tdn: [
        {
          word: 'hawk',
          definition:
            'A bird of prey with broad rounded wings and a long tail, typically taking prey by surprise with a short chase.',
        },
        {
          word: 'falcon',
          definition:
            'A bird of prey with long pointed wings and a notched beak, typically catching prey by diving on it from above.',
        },
        {
          word: 'osprey',
          definition:
            'A large raptor, also known as a sea hawk, fish eagle, or river hawk, that has a worldwide distribution.',
        },
      ],
      ttn: [
        {
          word: 'mouse',
          definition:
            'A small rodent typically with a pointed snout, small rounded ears, and a long naked or almost hairless tail.',
        },
        {
          word: 'insect',
          definition:
            'A small arthropod animal with six legs and, typically, wings.',
        },
        {
          word: 'frog',
          definition:
            'An amphibian with a short squat body, moist smooth skin, and long hind legs for leaping.',
        },
      ],
    },
    {
      word: 'dolphin',
      definition:
        'A small gregarious toothed whale that typically has a beaklike snout and a curved fin on the back.',
      topicId: 3,
      id: 9,
      pronunciation: '/ˈdɒlfɪn/',
      image_link: [
        'https://i.pinimg.com/236x/e3/46/40/e34640d9cc26eb1a08e0a833378acdd4.jpg',
        'https://i.pinimg.com/236x/6d/ad/7a/6dad7ad65b39528a8ca188051ee178c0.jpg',
        'https://i.pinimg.com/236x/50/ed/c4/50edc4fbdfc140951d2223331f438b26.jpg',
        'https://i.pinimg.com/236x/67/ad/36/67ad360f48cbedafd1ca4a145d5c55d8.jpg',
      ],
      examples: [
        'Dolphins are known for their intelligence.',
        'A pod of dolphins swam alongside the boat.',
        'Dolphins communicate using clicks and whistles.',
        'They watched a dolphin show at the aquarium.',
      ],
      tdn: [
        {
          word: 'porpoise',
          definition:
            'A small toothed whale with a low triangular dorsal fin and a blunt rounded snout.',
        },
        {
          word: 'orca',
          definition:
            'A large toothed whale belonging to the oceanic dolphin family.',
        },
        {
          word: 'cetacean',
          definition:
            'A marine mammal of the order Cetacea; a whale, dolphin, or porpoise.',
        },
      ],
      ttn: [
        {
          word: 'lion',
          definition:
            'A large, powerful carnivorous feline animal, having a short coat, a long tail, and, typically, a deep-chested body.',
        },
        {
          word: 'elephant',
          definition:
            'A very large herbivorous mammal with a trunk and tusks, native to Africa and Asia.',
        },
        {
          word: 'eagle',
          definition:
            'A large bird of prey with a massive hooked bill and long broad wings.',
        },
      ],
    },
    {
      word: 'red',
      definition:
        'The color at the end of the spectrum next to orange and opposite violet.',
      topicId: 4,
      id: 10,
      pronunciation: '/ɹɛd/',
      image_link: [
        'https://i.pinimg.com/236x/da/b4/71/dab471547abd75e78df337915f11eca6.jpg',
        'https://i.pinimg.com/236x/b1/73/ea/b173ea07791af67f28f91fbf2a30bf6b.jpg',
        'https://i.pinimg.com/236x/5a/a3/91/5aa3914b7596077c092c6117b529f3b9.jpg',
        'https://i.pinimg.com/236x/fb/8c/01/fb8c01dd7a45ff20916ad4541f962c70.jpg',
      ],
      examples: [
        'The apple was bright red and shiny.',
        'She wore a red dress to the party.',
        'Red roses are often given as a symbol of love.',
        'The sunset painted the sky in shades of red.',
      ],
      tdn: [
        {
          word: 'crimson',
          definition: 'A rich deep red color inclining to purple.',
        },
        {
          word: 'scarlet',
          definition: 'A brilliant red color.',
        },
        {
          word: 'vermilion',
          definition:
            'A brilliant red pigment made from mercury sulfide (cinnabar).',
        },
      ],
      ttn: [
        {
          word: 'blue',
          definition:
            'The color of the sky on a clear day, between green and violet in the spectrum.',
        },
        {
          word: 'green',
          definition:
            'A color that is between blue and yellow in the spectrum.',
        },
        {
          word: 'yellow',
          definition: 'A color like that of egg yolks or ripe lemons.',
        },
      ],
    },
    {
      word: 'blue',
      definition: 'The color of the clear sky and the deep sea.',
      topicId: 4,
      id: 11,
      pronunciation: '/bluː/',
      image_link: [
        'https://i.pinimg.com/236x/4d/e8/89/4de889a02803e22a3291cf31b5ed6843.jpg',
        'https://i.pinimg.com/236x/b8/61/17/b861178a4659a283675882041931fc30.jpg',
        'https://i.pinimg.com/236x/eb/df/69/ebdf698fa008b163b3df3f2f522e2284.jpg',
        'https://i.pinimg.com/236x/6a/be/2a/6abe2a21ed08b17d116a9e4c0a7d1e41.jpg',
      ],
      examples: [
        'The sky was a clear, bright blue.',
        'He wore a blue shirt to match his eyes.',
        'Blue is often associated with calmness and tranquility.',
        'The ocean appeared endless and blue.',
      ],
      tdn: [
        {
          word: 'azure',
          definition: 'A bright blue color like that of a cloudless sky.',
        },
        {
          word: 'cobalt',
          definition: 'A strong greenish-blue color.',
        },
        {
          word: 'navy',
          definition: 'A very dark shade of the color blue.',
        },
      ],
      ttn: [
        {
          word: 'Red',
          definition: 'the colour of fresh blood',
        },
        {
          word: 'Yellow',
          definition: 'a colour like that of a lemon or gold or the sun',
        },
        {
          word: 'Orange',
          definition:
            'a round sweet fruit that has a thick orange skin and an orange centre divided into many parts',
        },
      ],
    },
    {
      word: 'green',
      definition:
        'The color between blue and yellow in the spectrum; colored like grass or emeralds.',
      topicId: 4,
      id: 12,
      pronunciation: '/ɡɹiːn/',
      image_link: [
        'https://i.pinimg.com/236x/b8/04/81/b80481838c5608682b14d405d2ab12be.jpg',
        'https://i.pinimg.com/236x/c9/06/08/c90608cd56f276fe37e0da68e43fe31a.jpg',
        'https://i.pinimg.com/236x/9a/57/5e/9a575efd97f994227aa6e938c794e563.jpg',
        'https://i.pinimg.com/236x/c8/56/da/c856dae22ae48b3be4eae1dc8cbf69c4.jpg',
      ],
      examples: [
        'The fields were lush and green after the rain.',
        'She has green eyes that sparkle in the sunlight.',
        'Green is the color most often associated with nature.',
        'They painted the walls of their house a soft green.',
      ],
      tdn: [
        {
          word: 'emerald',
          definition: 'A bright green color like that of an emerald.',
        },
        {
          word: 'olive',
          definition: 'A grayish-green color like that of an unripe olive.',
        },
        {
          word: 'jade',
          definition: 'A pale to dark green color.',
        },
      ],
      ttn: [
        {
          word: 'Red',
          definition: 'used to describe hair that is an orange-brown colour',
        },
        {
          word: 'Magenta',
          definition:
            'a reddish-purple colour, one of the main colours that are used in colour printing and photography',
        },
        {
          word: 'Pink',
          definition: 'a pale red colour',
        },
      ],
    },
    {
      word: 'pizza',
      definition:
        'A dish of Italian origin consisting of a flat, round base of dough baked with a topping of tomatoes and cheese, typically with added meat or vegetables.',
      topicId: 5,
      id: 13,
      pronunciation: '/ˈpiːt.sə/',
      image_link: [
        'https://i.pinimg.com/236x/34/f4/8f/34f48f5c56c938642b80b0555e5adf82.jpg',
        'https://i.pinimg.com/236x/e6/1c/ef/e61cef37dffe3af9ce48d9e119176203.jpg',
        'https://i.pinimg.com/236x/b6/94/0e/b6940e530fa87fdf8f4e9cdf5ccafc36.jpg',
        'https://i.pinimg.com/236x/97/9c/cb/979ccb5f43a7d93b86c01d511b963dec.jpg',
      ],
      examples: [
        'They ordered a large pepperoni pizza for dinner.',
        'The pizza was topped with fresh basil and mozzarella.',
        'Pizza is a popular dish around the world.',
        'He loves making homemade pizza from scratch.',
      ],
      tdn: [
        {
          word: 'flatbread',
          definition:
            'A type of bread made with flour, water, and salt, and then thoroughly rolled into flattened dough.',
        },
        {
          word: 'pie',
          definition:
            'A baked dish of fruit, or meat and vegetables, typically with a top and base of pastry.',
        },
        {
          word: 'tart',
          definition: 'An open pastry case containing a filling.',
        },
      ],
      ttn: [
        {
          word: 'Salad',
          definition:
            'a mixture of uncooked vegetables, usually including lettuce, eaten either as a separate dish or with other food',
        },
        {
          word: 'Soup',
          definition:
            'a usually hot, liquid food made from vegetables, meat, or fish',
        },
        {
          word: 'Sushi',
          definition:
            'a type of Japanese food consisting of squares or balls of cold boiled rice, with small pieces of other food, especially raw fish, on top or rolled inside',
        },
      ],
    },
    {
      word: 'sushi',
      definition:
        'A Japanese dish consisting of small balls or rolls of vinegar-flavored cold rice served with a garnish of vegetables, egg, or raw seafood.',
      topicId: 5,
      id: 14,
      pronunciation: '/ˈsuʃi/',
      image_link: [
        'https://i.pinimg.com/236x/a8/5a/45/a85a456403479d31797655ebc1bb9082.jpg',
        'https://i.pinimg.com/236x/b1/21/41/b121419a4f6e16be30b58364b1b5681c.jpg',
        'https://i.pinimg.com/236x/2b/86/6a/2b866a8e4e0f9a9b89ea6fceaee65c2d.jpg',
        'https://i.pinimg.com/236x/9e/22/6b/9e226b439f490e3f7cf4f988ccc394ef.jpg',
      ],
      examples: [
        'They enjoyed a platter of assorted sushi.',
        'Sushi is often served with soy sauce and wasabi.',
        'She learned how to make sushi at a cooking class.',
        'Sushi chefs train for years to perfect their skills.',
      ],
      tdn: [
        {
          word: 'sashimi',
          definition:
            'A Japanese delicacy consisting of very fresh raw meat or fish sliced into thin pieces.',
        },
        {
          word: 'maki',
          definition: 'Sushi in the form of a roll.',
        },
        {
          word: 'nigiri',
          definition:
            'A type of sushi consisting of a small ball of rice, seasoned with vinegar, and topped with a slice of raw fish or other seafood.',
        },
      ],
      ttn: [
        {
          word: 'Burger',
          definition:
            'Meat or other food made into a round, fairly flat shape, fried and usually eaten between two halves of a bread roll',
        },
      ],
    },
    {
      word: 'chocolate',
      definition:
        'A food preparation in the form of a paste or solid block made from roasted and ground cacao seeds, typically sweetened.',
      topicId: 5,
      id: 15,
      pronunciation: '/ˈt͡ʃɔk(ə)lət/',
      image_link: [
        'https://i.pinimg.com/236x/e3/e4/9f/e3e49f291722baf15ff94b44af47cf42.jpg',
        'https://i.pinimg.com/236x/50/7d/f3/507df3fa48c321a0aea520b3a76a0603.jpg',
        'https://i.pinimg.com/236x/47/f9/9f/47f99f839b057ca7b2e47b158d022fa5.jpg',
        'https://i.pinimg.com/236x/79/07/7e/79077e72dbc8e2affe71944ed0c22123.jpg',
      ],
      examples: [
        'She received a box of chocolates for her birthday.',
        'Chocolate melts easily in warm temperatures.',
        'Dark chocolate has a rich, intense flavor.',
        'He enjoys a hot cup of chocolate on a cold day.',
      ],
      tdn: [
        {
          word: 'cocoa',
          definition:
            'A chocolate powder made from roasted and ground cacao seeds.',
        },
        {
          word: 'confectionery',
          definition: 'Sweets and chocolates considered collectively.',
        },
        {
          word: 'candy',
          definition:
            'A sweet food made with sugar or syrup combined with fruit, chocolate, or nuts.',
        },
      ],
      ttn: [
        {
          word: 'Lemon',
          definition:
            'an oval fruit that has a thick, yellow skin and sour juice, or the small tree on which this fruit grows',
        },
        {
          word: 'Broccoli',
          definition:
            'a vegetable with a green stem or stems and a mass or several masses of flower buds at the top. There are several kinds of broccoli',
        },
        {
          word: 'Cheese',
          definition:
            'a food made from milk, or from a milk-like substance taken from plants, that can be either firm or soft and is usually yellow or white in colour',
        },
      ],
    },
    {
      word: 'computer',
      definition:
        'An electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program.',
      topicId: 6,
      id: 16,
      pronunciation: '/kəmˈpjuːtə/',
      image_link: [
        'https://i.pinimg.com/236x/78/61/c1/7861c14686fa5b2ff32bc45dbc80da1e.jpg',
        'https://i.pinimg.com/236x/39/e6/d4/39e6d4c4f0572317e8a6c123e5d21015.jpg',
        'https://i.pinimg.com/236x/aa/0f/6d/aa0f6dea70649d495a64cd7741a4f445.jpg',
        'https://i.pinimg.com/236x/3a/ef/95/3aef9595d33685901d7c621d3ceb4b7d.jpg',
      ],
      examples: [
        'She uses a computer for her work every day.',
        'Computers have revolutionized the way we live.',
        'He is building his own computer from components.',
        'The computer crashed and lost all the data.',
      ],
      tdn: [
        {
          word: 'PC',
          definition: 'Personal computer.',
        },
        {
          word: 'laptop',
          definition: 'A small, portable personal computer.',
        },
        {
          word: 'notebook',
          definition:
            'A small, portable personal computer that can be used in a variety of locations.',
        },
      ],
      ttn: [
        {
          word: 'Book',
          definition:
            'A set of written or printed pages, usually bound with protective covers.',
        },
        {
          word: 'Typewriter',
          definition: 'A machine for writing in characters similar to print.',
        },
        {
          word: 'Typewriter',
          definition: 'A machine for writing in characters similar to print.',
        },
      ],
    },
    {
      word: 'smartphone',
      definition:
        'A mobile phone that performs many of the functions of a computer, typically having a touchscreen interface, internet access, and an operating system capable of running downloaded apps.',
      topicId: 6,
      id: 17,
      pronunciation: '/ˈsmɑːtfəʊn/',
      image_link: [
        'https://i.pinimg.com/236x/bc/c2/4d/bcc24d484db99457d18aa41ec7eba24f.jpg',
        'https://i.pinimg.com/236x/3a/8a/6c/3a8a6cc532e966db07c76f0041fe7a7b.jpg',
        'https://i.pinimg.com/236x/66/c2/3f/66c23f9566266ec63f39b2dac1a56585.jpg',
        'https://i.pinimg.com/236x/fa/28/83/fa2883910c05537c886c8950c0c4d325.jpg',
      ],
      examples: [
        'She upgraded to the latest smartphone model.',
        'Smartphones are essential tools for communication.',
        'He uses his smartphone to take high-quality photos.',
        'There are many apps available for smartphones.',
      ],
      tdn: [
        {
          word: 'cellphone',
          definition:
            'A portable telephone that can make and receive calls over a radio frequency link while the user is moving within a telephone service area.',
        },
        {
          word: 'mobile phone',
          definition:
            'A portable telephone that can make and receive calls over a radio frequency link.',
        },
        {
          word: 'handset',
          definition: 'A mobile phone.',
        },
      ],
      ttn: [
        {
          word: 'Landline telephone',
          definition:
            'A telephone that is connected by wires to a network, typically housed in a fixed location.',
        },
        {
          word: 'Analog watch',
          definition:
            'A timepiece that displays the time by means of moving hands on a dial rather than digits.',
        },
        {
          word: 'Typewriter',
          definition:
            'A mechanical or electromechanical device with keys for producing printed characters on paper.',
        },
      ],
    },
    {
      word: 'robot',
      definition:
        'A machine capable of carrying out a complex series of actions automatically, especially one programmable by a computer.',
      topicId: 6,
      id: 18,
      pronunciation: '/ˈɹoʊbət/',
      image_link: [
        'https://i.pinimg.com/236x/d0/fd/68/d0fd686d9f97f4c8ee97e6f722f06ccc.jpg',
        'https://i.pinimg.com/236x/87/89/c0/8789c0c834781599ea59fc123e1f051e.jpg',
        'https://i.pinimg.com/236x/0a/77/e7/0a77e72d650763a44f7d53bab4e2a226.jpg',
        'https://i.pinimg.com/236x/f1/7d/db/f17ddb244e3f2f6a720e61cd3f8161fb.jpg',
      ],
      examples: [
        'The robot efficiently performed the repetitive tasks.',
        'Robots are used in manufacturing to increase productivity.',
        'She programmed the robot to navigate the maze.',
        'Robots can be found in various industries.',
      ],
      tdn: [
        {
          word: 'automaton',
          definition:
            'A moving mechanical device made in imitation of a human being.',
        },
        {
          word: 'android',
          definition: 'A robot with a human appearance.',
        },
        {
          word: 'droid',
          definition: 'A robot or mechanical person.',
        },
      ],
      ttn: [
        {
          word: 'Human',
          definition:
            'A member of the species Homo sapiens; characterized by bipedal locomotion, opposable thumbs, and complex cognitive abilities.',
        },
        {
          word: 'Animal',
          definition:
            'A living organism that feeds on organic matter, typically having specialized sense organs and nervous system.',
        },
        {
          word: 'Plant',
          definition:
            'A living organism of the kingdom Plantae, characterized by photosynthesis, a cellulose cell wall, and lacking locomotive movement.',
        },
      ],
    },
    {
      word: 'soccer',
      definition:
        "A game played by two teams of eleven players with a round ball that may not be touched with the hands or arms during play except by the goalkeepers, the object being to score goals by kicking or heading the ball into the opponents' goal.",
      topicId: 7,
      id: 19,
      pronunciation: '/ˈsɒk.ə/',
      image_link: [
        'https://i.pinimg.com/236x/18/65/0a/18650aec0f6314becade44df645b7e86.jpg',
        'https://i.pinimg.com/236x/9f/4f/6f/9f4f6f8ea95fc7255b2abfe7c2778771.jpg',
        'https://i.pinimg.com/236x/b5/fd/9a/b5fd9a99bdab57f3559ccbac267174e1.jpg',
        'https://i.pinimg.com/236x/15/7e/e5/157ee5f875c54e736ec52ea07eebc96a.jpg',
      ],
      examples: [
        'Soccer is the most popular sport in the world.',
        'He scored a goal in the soccer match.',
        'They practice soccer every weekend.',
        'Soccer requires a lot of stamina and skill.',
      ],
      tdn: [
        {
          word: 'football',
          definition:
            'A game played by two teams of eleven players with a round ball that may not be touched with the hands or arms during play except by the goalkeepers.',
        },
        {
          word: 'kickball',
          definition:
            'A playground game and league game, similar to baseball, invented in the United States by Nicholas C Seuss.',
        },
        {
          word: 'futsal',
          definition:
            'A variant of soccer played on a smaller field and mainly indoors.',
        },
      ],
      ttn: [
        {
          word: 'Swimming',
          definition:
            'The act or sport of moving through water by using the limbs, often for recreation, exercise, or competition.',
        },
        {
          word: 'Chess',
          definition:
            'A strategic board game played between two players on a checkered board with 64 squares arranged in an 8×8 grid.',
        },
        {
          word: 'Golf',
          definition:
            'A sport in which players use clubs to hit balls into a series of holes on a course in as few strokes as possible.',
        },
      ],
    },
    {
      word: 'basketball',
      definition:
        "A game played between two teams of five players each on a rectangular court, usually indoors. Each team tries to score by tossing the ball through the opponent's goal, an elevated horizontal hoop and net called a basket.",
      topicId: 7,
      id: 20,
      pronunciation: '/ˈbɑːs.kɪt.bɔːl/',
      image_link: [
        'https://i.pinimg.com/236x/50/90/50/509050faf1df0dc92a11f373446fb8f0.jpg',
        'https://i.pinimg.com/236x/c7/02/6d/c7026df9477e668046299f54f2fadc30.jpg',
        'https://i.pinimg.com/236x/62/17/1c/62171cea1b7acf3d2b6c115b3992ff69.jpg',
        'https://i.pinimg.com/236x/14/c7/69/14c769a03d71cbbd26ac529b1c4d9f29.jpg',
      ],
      examples: [
        'He plays basketball every weekend.',
        'The basketball game was exciting.',
        'She scored the winning point in basketball.',
        'They practiced basketball in the gym.',
      ],
      tdn: [
        {
          word: 'hoops',
          definition: 'A nickname for the game of basketball.',
        },
        {
          word: 'b-ball',
          definition: 'A nickname for the game of basketball.',
        },
        {
          word: 'streetball',
          definition:
            'A variation of basketball, typically played on outdoor courts and featuring fewer players and less formal rules.',
        },
      ],
      ttn: [
        {
          word: 'Swimming',
          definition:
            "The sport or activity of moving through water using one's limbs, typically for recreation, exercise, or competition.",
        },
        {
          word: 'Chess',
          definition:
            'A strategic board game played between two players on a checkered board with 64 squares, each player having 16 pieces.',
        },
        {
          word: 'Track and Field',
          definition:
            'A group of sports that involve running, jumping, and throwing events held on an oval track and in field areas.',
        },
      ],
    },
    {
      word: 'tennis',
      definition:
        'A game in which two or four players strike a ball with rackets over a net stretched across a court.',
      topicId: 7,
      id: 21,
      pronunciation: '/ˈtɛn.ɪs/',
      image_link: [
        'https://i.pinimg.com/236x/dd/fc/43/ddfc4397acea3b42487cd14e282bd152.jpg',
        'https://i.pinimg.com/236x/ad/bc/85/adbc85c6aded20907344a75eb5d5957b.jpg',
        'https://i.pinimg.com/236x/fd/83/b7/fd83b7a2ece4f1676e27e535b7e98072.jpg',
        'https://i.pinimg.com/236x/fe/67/49/fe674914b51da2170019d092e19f5440.jpg',
      ],
      examples: [
        'She enjoys playing tennis with friends.',
        'The tennis match was very competitive.',
        'He bought a new tennis racket.',
        'They watched a tennis tournament on TV.',
      ],
      tdn: [
        {
          word: 'racquetball',
          definition:
            'A game played with a small rubber ball in a four-walled handball court.',
        },
        {
          word: 'badminton',
          definition:
            'A game with rackets in which a shuttlecock is played back and forth across a net.',
        },
        {
          word: 'squash',
          definition:
            'A game played with rackets and a small rubber ball in a four-walled court.',
        },
      ],
      ttn: [
        {
          word: 'Swimming',
          definition:
            "The sport or activity of moving through water using one's limbs, typically for recreation, exercise, or competition.",
        },
        {
          word: 'Weightlifting',
          definition:
            'The sport or activity of lifting heavy weights, typically to improve strength and muscle mass.',
        },
        {
          word: 'Chess',
          definition:
            'A strategic board game played between two players on a checkered board with 64 squares, each player having 16 pieces.',
        },
      ],
    },
    {
      word: 'beach',
      definition:
        'an area of sand or small stones near the sea or another area of water such as a lake.',
      topicId: 8,
      id: 22,
      pronunciation: '/biːt͡ʃ/',
      image_link: [
        'https://i.pinimg.com/236x/df/5b/11/df5b11b036dc5d371e057bb25d2e3882.jpg',
        'https://i.pinimg.com/236x/c3/bc/ad/c3bcad8ac19e64f07f6523675e2f5954.jpg',
        'https://i.pinimg.com/236x/75/84/aa/7584aa80dd00e40a337c6bad04f3c29e.jpg',
        'https://i.pinimg.com/236x/91/ab/35/91ab351e0ca4bc826cde2683b1de7759.jpg',
      ],
      examples: [
        'They went to the beach for a picnic.',
        'The beach was crowded with tourists.',
        'She loves collecting shells at the beach.',
        'The sunset at the beach was beautiful.',
      ],
      tdn: [],
    },
    {
      word: 'mountain',
      definition:
        "A large natural elevation of the earth's surface rising abruptly from the surrounding level.",
      topicId: 8,
      id: 23,
      pronunciation: '/ˈmaʊntɪn/',
      image_link: [
        'https://i.pinimg.com/236x/ae/3c/9e/ae3c9e80d93613ddcda6275f59e0a9e8.jpg',
        'https://i.pinimg.com/236x/3f/6c/89/3f6c89b7e2123f425cd28f0d3bfb6703.jpg',
        'https://i.pinimg.com/236x/09/1c/ed/091ced08f81831dd35097ec83c744862.jpg',
        'https://i.pinimg.com/236x/f0/94/62/f09462ac6a3ab79621b673b3f2b48f5d.jpg',
      ],
      examples: [
        'The mountain peak was covered in snow.',
        'They climbed the steep mountain trail.',
        'The mountain range stretched as far as the eye could see.',
        'A small cabin was nestled at the base of the mountain.',
      ],
      tdn: [
        {
          word: 'peak',
          definition: 'The pointed top of a mountain.',
        },
        {
          word: 'hill',
          definition:
            'A naturally raised area of land, not as high or craggy as a mountain.',
        },
        {
          word: 'ridge',
          definition: 'A long, narrow hilltop, mountain range, or watershed.',
        },
      ],
      ttn: [
        {
          word: 'Mountain',
          definition:
            "A large natural elevation of the earth's surface rising abruptly from the surrounding level; a large steep hill.",
        },
        {
          word: 'Forest',
          definition:
            'A large area covered chiefly with trees and undergrowth, typically with natural vegetation.',
        },
        {
          word: 'Desert',
          definition:
            'A barren area of landscape where little precipitation occurs and consequently living conditions are hostile for plant and animal life.',
        },
      ],
    },
    {
      word: 'city',
      definition: 'A large town.',
      topicId: 8,
      id: 24,
      pronunciation: '/sɪtɪ/',
      image_link: [
        'https://i.pinimg.com/236x/fe/76/02/fe76021a101f7ae6103d72e65cda437e.jpg',
        'https://i.pinimg.com/236x/94/b4/20/94b420d6ca60cf5ea8cd5f312752759b.jpg',
        'https://i.pinimg.com/236x/88/b8/bb/88b8bb8183ba4e674a058a470a227aee.jpg',
        'https://i.pinimg.com/236x/45/27/97/452797ddc0ee24619a8af6963f52d09a.jpg',
      ],
      examples: [
        'The city is known for its skyscrapers.',
        'He moved to the city for a new job.',
        'The city park is a great place to relax.',
        "They explored the city's historic district.",
      ],
      tdn: [],
      ttn: [
        {
          word: 'Village',
          definition:
            'A small community or settlement, larger than a hamlet and usually smaller than a town, typically located in a rural area.',
        },
        {
          word: 'Hamlet',
          definition:
            'A small settlement, smaller than a village, often without a church.',
        },
        {
          word: 'Countryside',
          definition:
            'Rural land outside of towns and cities, typically characterized by open fields, forests, and agricultural activities.',
        },
      ],
    },
    {
      word: 'school',
      definition: 'An institution for educating children.',
      topicId: 9,
      id: 25,
      pronunciation: '/skuːl/',
      image_link: [
        'https://i.pinimg.com/236x/15/09/96/150996d5036e9230edc3fc48decaecd4.jpg',
        'https://i.pinimg.com/236x/0a/78/99/0a7899389eb8e17c94792fc3a15a2057.jpg',
        'https://i.pinimg.com/236x/24/30/f0/2430f0496b5753ce53e420bd9a3d0559.jpg',
        'https://i.pinimg.com/236x/10/a2/65/10a2658f8d10fba1a4c903cae2866261.jpg',
      ],
      examples: [
        'She walks to school every morning.',
        'The school has a large playground.',
        'He is the best student in his school.',
        'They have a science fair at school next week.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'Workplace',
          definition:
            'A location where work is carried out, usually a place where employees perform their duties under the supervision of employers.',
        },
        {
          word: 'Playground',
          definition:
            'An outdoor area provided for children to play in, typically equipped with swings, slides, and other recreational equipment.',
        },
        {
          word: 'Home',
          definition:
            'The place where one lives permanently, especially as a member of a family or household.',
        },
      ],
    },
    {
      word: 'university',
      definition:
        'An institution of higher education and research which awards academic degrees in various academic disciplines.',
      topicId: 9,
      id: 26,
      pronunciation: '/juːnɪˈvɜːsətiː/',
      image_link: [
        'https://i.pinimg.com/236x/fc/e2/52/fce252e5e4a326d6d7d886243e345643.jpg',
        'https://i.pinimg.com/236x/1b/c5/65/1bc56564d96b69ca4afc1ea6ecc3d49a.jpg',
        'https://i.pinimg.com/236x/05/1a/b8/051ab8fc0864264e3b3159748cab830a.jpg',
        'https://i.pinimg.com/236x/e9/ac/f0/e9acf078f5983d13e3808be55e480a4b.jpg',
      ],
      examples: [
        'She graduated from a prestigious university.',
        'The university offers various degree programs.',
        'He lives in a dormitory at the university.',
        'They attended a lecture at the university.',
      ],
      tdn: [],
    },
    {
      word: 'library',
      definition:
        'A building or room containing collections of books, periodicals, and sometimes films and recorded music for use or borrowing by the public or the members of an institution.',
      topicId: 9,
      id: 27,
      pronunciation: '/ˈlaɪbɹi/',
      image_link: [
        'https://i.pinimg.com/236x/45/35/18/45351888ccceca31e9c5ae5d138c2832.jpg',
        'https://i.pinimg.com/236x/0a/bd/ab/0abdabf1dbabb91f90cb732dbd4ec295.jpg',
        'https://i.pinimg.com/236x/cc/d8/a2/ccd8a255f21166dde4af9157c73af934.jpg',
        'https://i.pinimg.com/236x/9e/b7/eb/9eb7eb32cbc7428c0c06b25b7a69295c.jpg',
      ],
      examples: [
        'She borrowed a book from the library.',
        'The library is a quiet place to study.',
        'He spent hours reading in the library.',
        'They visited the new library downtown.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'Primary school',
          definition:
            'A school that provides education for young children, usually between the ages of 5 and 12, typically focusing on basic academic subjects and social skills.',
        },
        {
          word: 'Kindergarten',
          definition:
            'A preschool educational approach traditionally based on playing, singing, practical activities such as drawing, and social interaction as part of the transition from home to school.',
        },
        {
          word: 'Vocational school',
          definition:
            'An educational institution specifically designed to teach skills required for a particular job or trade, typically not offering academic degrees.',
        },
      ],
    },
    {
      word: 'triangle',
      definition: 'A flat shape with three straight sides.',
      topicId: 10,
      id: 28,
      pronunciation: '/ˈtɹaɪəŋɡəl/',
      image_link: [
        'https://i.pinimg.com/236x/e7/f7/2e/e7f72edd1ebd0a6c7220e5126df030f1.jpg',
        'https://i.pinimg.com/236x/ab/20/0a/ab200a4774c3657b5ccda1d8fdd42007.jpg',
        'https://i.pinimg.com/236x/da/b1/64/dab16488121aa599c42a536ea9cadc70.jpg',
        'https://i.pinimg.com/236x/d1/6c/c7/d16cc7c67e52e09858ac3e232a1ed109.jpg',
      ],
      examples: [
        'A triangle has three sides.',
        'They learned about triangle shapes in math class.',
        'She drew a triangle on the paper.',
        'The artist painted a colorful triangle.',
      ],
      tdn: [],
    },
    {
      word: 'circle',
      definition:
        'a continuous curved line, the points of which are always the same distance away from a fixed central point, or the area inside such a line.',
      topicId: 10,
      id: 29,
      pronunciation: '/ˈsɜɹkəl/',
      image_link: [
        'https://i.pinimg.com/236x/d1/fe/65/d1fe65a73471637e6bca349b34cb4c61.jpg',
        'https://i.pinimg.com/236x/09/dc/40/09dc40421ccca5089f2ba51390194790.jpg',
        'https://i.pinimg.com/236x/a3/96/07/a396072fdc6d742f886ee58130fb3963.jpg',
        'https://i.pinimg.com/236x/4a/b1/1f/4ab11f1f5cb8e6c344ff4d4edcd6cdea.jpg',
      ],
      examples: [
        'The children sat in a circle.',
        'He drew a perfect circle with a compass.',
        'The cake was shaped like a circle.',
        'They danced in a circle around the bonfire.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'Circle',
          definition:
            'A closed plane curve consisting of all points at a given distance from a point within it, called the center.',
        },
        {
          word: 'Square',
          definition:
            'A regular quadrilateral, having four equal sides and four right angles.',
        },
        {
          word: 'Sphere',
          definition:
            'A perfectly round geometrical object in three-dimensional space, such as the shape of a round ball.',
        },
      ],
    },
    {
      word: 'rectangle',
      definition:
        'a flat shape with four 90° angles and four sides, with opposite sides of equal length.',
      topicId: 10,
      id: 30,
      pronunciation: '/ˈrɛktæŋɡ(ə)l/',
      image_link: [
        'https://i.pinimg.com/236x/98/4a/76/984a7602f2200e18e6a8657722c09385.jpg',
        'https://i.pinimg.com/236x/71/93/0d/71930d5347027228d898cc5f957242ef.jpg',
        'https://i.pinimg.com/236x/56/56/56/565656b0623a3d8a349af5d1a3a42c33.jpg',
        'https://i.pinimg.com/236x/74/14/fd/7414fd7fa92cbc16480aec015dffbed2.jpg',
      ],
      examples: [
        'The garden was shaped like a rectangle.',
        'He cut the paper into a rectangle.',
        "They measured the rectangle's length and width.",
        'The rectangle had equal opposite sides.',
      ],
      tdn: [
        {
          word: 'parallelogram',
          definition:
            'A four-sided shape where opposite sides are parallel and of equal length.',
        },
        {
          word: 'quadrilateral',
          definition: 'A four-sided figure.',
        },
        {
          word: 'oblong',
          definition: 'A rectangle-like shape with longer sides than others.',
        },
      ],
      ttn: [
        {
          word: 'Circle',
          definition:
            'A closed plane curve consisting of all points at a given distance from a point within it, called the center.',
        },
        {
          word: 'Oval',
          definition:
            'A geometric shape resembling an elongated circle or ellipse, having two axes of different lengths.',
        },
        {
          word: 'Triangle',
          definition: 'A polygon with three sides and three angles.',
        },
      ],
    },
    {
      word: 'guitar',
      definition:
        'A stringed musical instrument, usually played with fingers or a pick.',
      topicId: 11,
      id: 31,
      pronunciation: '/ɡɪˈtɑː(ɹ)/',
      image_link: [
        'https://i.pinimg.com/236x/c8/65/5a/c8655aae146b4b99433ab679ebeefe94.jpg',
        'https://i.pinimg.com/236x/90/12/62/901262cec19b752373669abef52a6000.jpg',
        'https://i.pinimg.com/236x/a0/03/73/a00373e7ce85609aaf1fa3a535acadf8.jpg',
        'https://i.pinimg.com/236x/a8/16/45/a81645e7ad7de8dfb5b292c01524f24a.jpg',
      ],
      examples: [
        'Guitar is in the sentence.',
        'This sentence contains the word guitar.',
        'We can use the word guitar here.',
        'Here is an example of the word guitar.',
      ],
      tdn: [
        {
          word: 'strummer',
          definition: 'A person who plays the guitar.',
        },
        {
          word: 'plucker',
          definition: 'A person who plucks the strings of an instrument.',
        },
        {
          word: 'six-string',
          definition: 'A guitar, typically with six strings.',
        },
      ],
      ttn: [
        {
          word: 'Wind instrument',
          definition:
            'A musical instrument that produces sound by the vibration of air within a tube or cavity, such as a flute, trumpet, or saxophone.',
        },
        {
          word: 'Percussion instrument',
          definition:
            'A musical instrument that is struck, shaken, or scraped to produce sound, such as drums, cymbals, or tambourines.',
        },
        {
          word: 'Keyboard',
          definition:
            'A musical instrument played by pressing keys that cause hammers to strike strings or other mechanisms to produce sound, such as a piano or organ.',
        },
      ],
    },
    {
      word: 'piano',
      definition:
        'A large keyboard musical instrument with a wooden case enclosing a soundboard and metal strings, which are struck by hammers when the keys are pressed.',
      topicId: 11,
      id: 32,
      pronunciation: '/piˈænoʊ/',
      image_link: [
        'https://i.pinimg.com/236x/db/df/80/dbdf80c5d250e1fefc4ab0116f744add.jpg',
        'https://i.pinimg.com/236x/85/35/36/853536cfc8c5d3915fffbba045b6982f.jpg',
        'https://i.pinimg.com/236x/d2/12/af/d212af93b3b693326a73a9c539be06c3.jpg',
        'https://i.pinimg.com/236x/20/42/d9/2042d92bc425a25b343038d6e2362432.jpg',
      ],
      examples: [
        'Piano is in the sentence.',
        'This sentence contains the word piano.',
        'We can use the word piano here.',
        'Here is an example of the word piano.',
      ],
      tdn: [
        {
          word: 'grand piano',
          definition: 'A large piano with a horizontal frame.',
        },
        {
          word: 'upright piano',
          definition: 'A piano with a vertical frame.',
        },
        {
          word: 'keyboard',
          definition: 'An electronic musical instrument similar to a piano.',
        },
      ],
      ttn: [],
    },
    {
      word: 'drums',
      definition:
        'A percussion instrument sounded by being struck with sticks or the hands, typically cylindrical, barrel-shaped, or bowl-shaped, with a taut membrane over one or both ends.',
      topicId: 11,
      id: 33,
      pronunciation: '/dɹʌmz/',
      image_link: [
        'https://i.pinimg.com/236x/2c/cd/ed/2ccded606c03cba35a0e1dbca6509b0d.jpg',
        'https://i.pinimg.com/236x/ae/38/26/ae382691b2e7bc4862b4fcbea2ebcfe2.jpg',
        'https://i.pinimg.com/236x/37/99/05/3799059e91622d09402b9663a6054d2a.jpg',
        'https://i.pinimg.com/236x/d8/7c/82/d87c822b9e18016a2b6bcb50e8e3f1ab.jpg',
      ],
      examples: [
        'Drums is in the sentence.',
        'This sentence contains the word drums.',
        'We can use the word drums here.',
        'Here is an example of the word drums.',
      ],
      tdn: [
        {
          word: 'percussion',
          definition: 'Musical instruments played by striking.',
        },
        {
          word: 'timpani',
          definition: 'A type of drum, also known as kettledrums.',
        },
        {
          word: 'bongo',
          definition: 'A small drum.',
        },
      ],
      ttn: [],
    },
    {
      word: 'painting',
      definition:
        'The process or art of using paint, in a picture, as a protective coating, or as decoration.',
      topicId: 12,
      id: 34,
      pronunciation: '/ˈpeɪn.tɪŋ/',
      image_link: [
        'https://i.pinimg.com/236x/b2/0e/57/b20e57bed20b4b04345d8a5de75dc17c.jpg',
        'https://i.pinimg.com/236x/8d/ca/de/8dcade54a409a76204370e48cc0a583c.jpg',
        'https://i.pinimg.com/236x/d3/18/fd/d318fdfb662f676004bacde22424a84c.jpg',
        'https://i.pinimg.com/236x/06/b9/2f/06b92f26918e202a6464c25f50b3fe8f.jpg',
      ],
      examples: [
        'Painting is in the sentence.',
        'This sentence contains the word painting.',
        'We can use the word painting here.',
        'Here is an example of the word painting.',
      ],
      tdn: [
        {
          word: 'portrait',
          definition: 'A painting, drawing, or photograph of a person.',
        },
        {
          word: 'landscape',
          definition: 'A painting of natural scenery.',
        },
        {
          word: 'canvas',
          definition: 'A piece of cloth on which an artist paints.',
        },
      ],
      ttn: [
        {
          word: 'Sculpture',
          definition:
            'The art of creating three-dimensional forms, usually by carving, modeling, or assembling materials such as stone, wood, clay, or metal.',
        },
        {
          word: 'Writing',
          definition:
            'The act or process of forming symbols on a surface to communicate thoughts, ideas, or information, typically using a system of language.',
        },
        {
          word: 'Music',
          definition:
            'An art form and cultural activity that involves organized sounds and tones, typically produced by instruments or voices, to create expression, emotion, or rhythm.',
        },
      ],
    },
    {
      word: 'sculpture',
      definition:
        'The art of making two- or three-dimensional representative or abstract forms, especially by carving stone or wood or by casting metal or plaster.',
      topicId: 12,
      id: 35,
      pronunciation: '/ˈskʌlptj(ʊ)ə/',
      image_link: [
        'https://i.pinimg.com/236x/82/f5/ce/82f5ce182a19367ec3b5d6c4efdc5a05.jpg',
        'https://i.pinimg.com/236x/6f/72/a9/6f72a9d99a538edc21c405dc34947b67.jpg',
        'https://i.pinimg.com/236x/a4/cd/e7/a4cde75ef13712c6b1e0b62987b4b302.jpg',
        'https://i.pinimg.com/236x/39/8a/16/398a1666eca1299a4d8d869a5c904119.jpg',
      ],
      examples: [
        'Sculpture is in the sentence.',
        'This sentence contains the word sculpture.',
        'We can use the word sculpture here.',
        'Here is an example of the word sculpture.',
      ],
      tdn: [
        {
          word: 'statue',
          definition: 'A carved or cast figure of a person or animal.',
        },
        {
          word: 'carving',
          definition: 'An object or design cut from a hard material.',
        },
        {
          word: 'figure',
          definition: 'A representation of a human or animal form.',
        },
      ],
      ttn: [
        {
          word: 'Destruction',
          definition:
            'The action or process of causing severe damage to something, often resulting in its complete loss or ruin.',
        },
        {
          word: 'Demolition',
          definition:
            'The act of intentionally destroying or dismantling a building, structure, or object, typically to make way for something else.',
        },
        {
          word: 'Dissolution',
          definition:
            'The process of dissolving or ending something, such as an organization, partnership, or substance, often through a gradual or systematic process.',
        },
      ],
    },
    {
      word: 'photography',
      definition: 'The art or practice of taking and processing photographs.',
      topicId: 12,
      id: 36,
      pronunciation: '/fəˈtɒɡɹəfi/',
      image_link: [
        'https://i.pinimg.com/236x/d9/e6/9b/d9e69b3533a5dac3ad4622e325a364a8.jpg',
        'https://i.pinimg.com/236x/55/c8/5b/55c85be926efc0b1a90f64d607d3ec8e.jpg',
        'https://i.pinimg.com/236x/6a/92/0d/6a920d3169cd45d0afac579942e3f3e2.jpg',
        'https://i.pinimg.com/236x/74/b7/e1/74b7e11a62ff4907ab4c797f5915d6ec.jpg',
      ],
      examples: [
        'Photography is in the sentence.',
        'This sentence contains the word photography.',
        'We can use the word photography here.',
        'Here is an example of the word photography.',
      ],
      tdn: [
        {
          word: 'snapshot',
          definition: 'A casual photograph.',
        },
        {
          word: 'image',
          definition: 'A visual representation of something.',
        },
        {
          word: 'picture',
          definition: 'A photograph or drawing.',
        },
      ],
      ttn: [
        {
          word: 'Videography',
          definition:
            'The process or art of making video films, typically involving recording, editing, and producing video footage.',
        },
        {
          word: 'Cinematography',
          definition:
            'The art and technique of making motion pictures, encompassing camera work, lighting, and other visual aspects of film production.',
        },
        {
          word: 'Photocopying',
          definition:
            'The process of making copies of printed material using a machine that scans and reproduces documents by means of photocopying technology.',
        },
      ],
    },
    {
      word: 'novel',
      definition:
        'A fictitious prose narrative of book length, typically representing character and action with some degree of realism.',
      topicId: 13,
      id: 37,
      pronunciation: '/ˈnɒvl̩/',
      image_link: [
        'https://i.pinimg.com/236x/02/27/27/0227277cba42a04de9dae33c43950fc7.jpg',
        'https://i.pinimg.com/236x/fd/c7/61/fdc761c4790a9749ff23941844cfef9a.jpg',
        'https://i.pinimg.com/236x/10/11/17/101117fb093adab12aedbd598a4368c3.jpg',
        'https://i.pinimg.com/236x/e8/f3/83/e8f3835688b86e15a6a89238c2f477e8.jpg',
      ],
      examples: [
        'Novel is in the sentence.',
        'This sentence contains the word novel.',
        'We can use the word novel here.',
        'Here is an example of the word novel.',
      ],
      tdn: [
        {
          word: 'fiction',
          definition: 'Literature created from the imagination.',
        },
        {
          word: 'tale',
          definition: 'A story.',
        },
        {
          word: 'narrative',
          definition: 'A spoken or written account of events.',
        },
      ],
      ttn: [
        {
          word: 'Non-fiction',
          definition:
            'Literature or media that presents factual information about real events, people, or phenomena, rather than fictional or imaginary elements.',
        },
        {
          word: 'True story',
          definition:
            'A narrative or account of events that actually occurred in real life, often emphasizing the factual accuracy of the events portrayed.',
        },
        {
          word: 'Fact-based',
          definition:
            'Describing a story, account, or work of art that is grounded in verifiable facts or real-life events.',
        },
      ],
    },
    {
      word: 'poem',
      definition:
        'A piece of writing that partakes of the nature of both speech and song that is nearly always rhythmical, usually metaphorical, and often exhibits such formal elements as meter, rhyme, and stanzaic structure.',
      topicId: 13,
      id: 38,
      pronunciation: '/ˈpoʊ̯ɪm/',
      image_link: [
        'https://i.pinimg.com/236x/a2/af/0f/a2af0f82802d80d8e05cad4a394cc95d.jpg',
        'https://i.pinimg.com/236x/26/35/e5/2635e5c48a4af20966ef1e23c7f120f1.jpg',
        'https://i.pinimg.com/236x/56/97/95/56979562fa43f28f032c96171d9510ee.jpg',
        'https://i.pinimg.com/236x/17/5f/2b/175f2bcfcaa90a8191a76f0b0dec6a20.jpg',
      ],
      examples: [
        'Poem is in the sentence.',
        'This sentence contains the word poem.',
        'We can use the word poem here.',
        'Here is an example of the word poem.',
      ],
      tdn: [
        {
          word: 'verse',
          definition:
            'Writing arranged with a metrical rhythm, typically having a rhyme.',
        },
        {
          word: 'rhyme',
          definition:
            'Correspondence of sound between words or the endings of words.',
        },
        {
          word: 'sonnet',
          definition:
            'A poem of fourteen lines using any of a number of formal rhyme schemes.',
        },
      ],
      ttn: [
        {
          word: 'Prose',
          definition:
            'Written or spoken language in its ordinary form, without metrical structure, as distinguished from poetry.',
        },
        {
          word: 'Non-poetry',
          definition:
            'Literature or text that is not characterized by poetic elements such as meter, rhyme, or specific verse forms.',
        },
        {
          word: 'Unmetrical',
          definition:
            'Not adhering to a specific meter or rhythmic pattern, particularly in poetry.',
        },
      ],
    },
    {
      word: 'short story',
      definition:
        'A story with a fully developed theme but significantly shorter and less elaborate than a novel.',
      topicId: 13,
      id: 39,
      pronunciation: '/ˌʃɔːrt ˈstɔːr.i/',
      image_link: [
        'https://i.pinimg.com/236x/f8/c6/3f/f8c63f549d041d78f0535c857fee5f5f.jpg',
        'https://i.pinimg.com/236x/3e/04/4b/3e044bd16d18faae2642a151f1c912dd.jpg',
        'https://i.pinimg.com/236x/20/b7/26/20b726ca8cc72f4430f2a74fb2e38711.jpg',
        'https://i.pinimg.com/236x/79/8e/3e/798e3ef06cc9500046350cd86ff50130.jpg',
      ],
      examples: [
        'Short story is in the sentence.',
        'This sentence contains the word short story.',
        'We can use the word short story here.',
        'Here is an example of the word short story.',
      ],
      tdn: [
        {
          word: 'narrative',
          definition:
            'A spoken or written account of connected events; a story.',
        },
        {
          word: 'yarn',
          definition:
            'A long or rambling story, especially one that is implausible.',
        },
        {
          word: 'anecdote',
          definition:
            'A short amusing or interesting story about a real incident or person.',
        },
      ],
      ttn: [
        {
          word: 'Long novel',
          definition:
            'A narrative work of fiction that is extensive in length, typically spanning a substantial number of pages or chapters.',
        },
        {
          word: 'Extended narrative',
          definition:
            'A story or account that is prolonged or extensive in its narrative scope, often covering a wide range of events or characters.',
        },
        {
          word: 'Lengthy tale',
          definition:
            'A narrative or story that is notably long or protracted in its telling, often involving intricate details and plot developments.',
        },
      ],
    },
    {
      word: 'world war',
      definition:
        'A war involving many large nations in all different parts of the world.',
      topicId: 14,
      id: 40,
      pronunciation: '/ˌwɝːld ˈwɔːr/',
      image_link: [
        'https://i.pinimg.com/236x/b2/63/6a/b2636aef5b64b8c0eab60bb3211e8b3b.jpg',
        'https://i.pinimg.com/236x/9b/f4/81/9bf4818c21a53d36ab0faeb95d1bce20.jpg',
        'https://i.pinimg.com/236x/f2/89/8d/f2898dd237442dac41572cfeea7c7ab9.jpg',
        'https://i.pinimg.com/236x/d9/2c/70/d92c70c6d881048114bf6f0eb7598db5.jpg',
      ],
      examples: [
        'World war is in the sentence.',
        'This sentence contains the word world war.',
        'We can use the word world war here.',
        'Here is an example of the word world war.',
      ],
      tdn: [
        {
          word: 'conflict',
          definition: 'A serious disagreement or argument.',
        },
        {
          word: 'battle',
          definition:
            'A sustained fight between large, organized armed forces.',
        },
        {
          word: 'combat',
          definition: 'Fighting between armed forces.',
        },
      ],
      ttn: [
        {
          word: 'Local conflict',
          definition:
            'A dispute, altercation, or confrontation that occurs within a specific locality or community, often involving local groups or factions.',
        },
        {
          word: 'Regional war',
          definition:
            'An armed conflict or warfare that occurs within a particular region, involving multiple parties or states within that geographical area.',
        },
        {
          word: 'Limited engagement',
          definition:
            'A military operation or conflict characterized by restricted scope, objectives, or duration, often involving targeted actions rather than full-scale warfare.',
        },
      ],
    },
    {
      word: 'revolution',
      definition:
        'A forcible overthrow of a government or social order, in favor of a new system.',
      topicId: 14,
      id: 41,
      pronunciation: '/ˌɹɛvəˈl(j)uːʃən/',
      image_link: [
        'https://i.pinimg.com/236x/b2/9b/35/b29b3509b3560e6ccda3827276f66866.jpg',
        'https://i.pinimg.com/236x/9e/59/de/9e59deeb4018344a2e53961cd4309a05.jpg',
        'https://i.pinimg.com/236x/87/ed/a1/87eda13ec0d90c192a92a9d9e2eebd9d.jpg',
        'https://i.pinimg.com/236x/38/48/ab/3848ab7d750e59e01d1e59d8f6cf024b.jpg',
      ],
      examples: [
        'Revolution is in the sentence.',
        'This sentence contains the word revolution.',
        'We can use the word revolution here.',
        'Here is an example of the word revolution.',
      ],
      tdn: [
        {
          word: 'uprising',
          definition: 'An act of resistance or rebellion.',
        },
        {
          word: 'insurrection',
          definition: 'A violent uprising against an authority or government.',
        },
        {
          word: 'rebellion',
          definition:
            'An act of violent or open resistance to an established government or ruler.',
        },
      ],
      ttn: [
        {
          word: 'Counterrevolution',
          definition:
            'A movement or action intended to overthrow a revolution or to reverse its effects, typically aiming to restore the status quo ante.',
        },
        {
          word: 'Stability',
          definition:
            'The state or quality of being stable, firm, or steadfast; the condition of not being easily disturbed or changed.',
        },
        {
          word: 'Conservatism',
          definition:
            'A political or social philosophy that advocates for traditional institutions, practices, and values, and is cautious towards change or innovation.',
        },
      ],
    },
    {
      word: 'empire',
      definition:
        'An extensive group of states or countries under a single supreme authority, formerly especially an emperor or empress.',
      topicId: 14,
      id: 42,
      pronunciation: '/ˈɛmpaɪ.ə/',
      image_link: [
        'https://i.pinimg.com/236x/14/13/05/1413051098bb7c9320417b72afe4e56c.jpg',
        'https://i.pinimg.com/236x/25/20/8c/25208c774d479ef47e504d3977b64c99.jpg',
        'https://i.pinimg.com/236x/5b/30/e0/5b30e01719ffb573a56148a67cfbd4aa.jpg',
        'https://i.pinimg.com/236x/4e/97/7a/4e977a93a4b73701d363d4c34efd8b2e.jpg',
      ],
      examples: [
        'Empire is in the sentence.',
        'This sentence contains the word empire.',
        'We can use the word empire here.',
        'Here is an example of the word empire.',
      ],
      tdn: [
        {
          word: 'kingdom',
          definition:
            'A country, state, or territory ruled by a king or queen.',
        },
        {
          word: 'realm',
          definition: 'A kingdom.',
        },
        {
          word: 'domain',
          definition:
            'An area of territory owned or controlled by a ruler or government.',
        },
      ],
      ttn: [
        {
          word: 'Colony',
          definition:
            'A territory or community under the political control of another country, typically distant from its own territory, and often established for economic or strategic purposes.',
        },
        {
          word: 'Republic',
          definition:
            "A form of government in which the country is considered a 'public matter,' where elected representatives serve the interests of the people, rather than a monarch.",
        },
        {
          word: 'Confederacy',
          definition:
            'A union or alliance of states or groups that retain their separate identity but work together for mutual benefit or defense, often with a weak central authority.',
        },
      ],
    },
    {
      word: 'gravity',
      definition:
        'The force that attracts a body toward the center of the earth, or toward any other physical body having mass.',
      topicId: 15,
      id: 43,
      pronunciation: '/ˈɡɹævɪti/',
      image_link: [
        'https://i.pinimg.com/236x/b9/b9/7e/b9b97e172972dc95e5cff2a61da89e3d.jpg',
        'https://i.pinimg.com/236x/3b/d3/2b/3bd32bbd169ba774051cf802cc8b574a.jpg',
        'https://i.pinimg.com/236x/91/83/2d/91832d46746e4e27132340503dd82357.jpg',
        'https://i.pinimg.com/236x/97/a4/07/97a407ed7c0e2f24bea82c354af5d91c.jpg',
      ],
      examples: [
        'Gravity is in the sentence.',
        'This sentence contains the word gravity.',
        'We can use the word gravity here.',
        'Here is an example of the word gravity.',
      ],
      tdn: [
        {
          word: 'force',
          definition:
            'Strength or energy as an attribute of physical action or movement.',
        },
        {
          word: 'pull',
          definition:
            'Exert force on (someone or something) so as to cause movement towards oneself.',
        },
        {
          word: 'attraction',
          definition:
            'The action or power of evoking interest, pleasure, or liking for someone or something.',
        },
      ],
      ttn: [
        {
          word: 'Levity',
          definition:
            'Humor or lack of seriousness, especially during a serious situation; lightness of manner or speech.',
        },
        {
          word: 'Weightlessness',
          definition:
            'The state or condition experienced in free fall when the effects of gravity are neutralized, often experienced by astronauts in space.',
        },
        {
          word: 'Antigravity',
          definition:
            'A hypothetical force or technology that counteracts or neutralizes the effects of gravity, potentially allowing objects to float or defy gravitational pull.',
        },
      ],
    },
    {
      word: 'atom',
      definition: 'The basic unit of a chemical element.',
      topicId: 15,
      id: 44,
      pronunciation: '/ˈatəm/',
      image_link: [
        'https://i.pinimg.com/236x/3c/b8/9a/3cb89a8248e01a5ec3b849d4175f1b85.jpg',
        'https://i.pinimg.com/236x/0b/cb/7b/0bcb7b3d287c11d2665ebb18933936f0.jpg',
        'https://i.pinimg.com/236x/eb/7d/c0/eb7dc044b18e1ba2ad1f90e644dd0b66.jpg',
        'https://i.pinimg.com/236x/af/c4/af/afc4af1ff7a654efb1351cf57c36170d.jpg',
      ],
      examples: [
        'Atom is in the sentence.',
        'This sentence contains the word atom.',
        'We can use the word atom here.',
        'Here is an example of the word atom.',
      ],
      tdn: [
        {
          word: 'molecule',
          definition: 'A group of atoms bonded together.',
        },
        {
          word: 'particle',
          definition: 'A minute portion of matter.',
        },
        {
          word: 'element',
          definition:
            'A part or aspect of something abstract, especially one that is essential or characteristic.',
        },
      ],
      ttn: [
        {
          word: 'Molecule',
          definition:
            'The smallest unit of a chemical substance that has the properties of that substance, consisting of two or more atoms held together by chemical bonds.',
        },
        {
          word: 'Compound',
          definition:
            'A substance formed when two or more chemical elements are chemically bonded together in a fixed ratio, typically resulting in a substance with different properties than its constituent elements.',
        },
        {
          word: 'Aggregate',
          definition:
            'A collection or group of distinct entities or particles gathered together into a whole mass or sum, often without specific chemical bonding.',
        },
      ],
    },
    {
      word: 'evolution',
      definition:
        'The process by which different kinds of living organisms are thought to have developed and diversified from earlier forms during the history of the earth.',
      topicId: 15,
      id: 45,
      pronunciation: '/ˈɛvəluːʃ(ə)n/',
      image_link: [
        'https://i.pinimg.com/236x/57/07/20/57072069f37f75f2b88731be57d298ae.jpg',
        'https://i.pinimg.com/236x/94/fd/ab/94fdab23a82b75d837eefb928dbe664b.jpg',
        'https://i.pinimg.com/236x/a0/1d/7c/a01d7cf27b6420aa6f41e328cd083bf1.jpg',
        'https://i.pinimg.com/236x/7c/b6/92/7cb69211bcc292bc877c7a7cccdb6d68.jpg',
      ],
      examples: [
        'Evolution is in the sentence.',
        'This sentence contains the word evolution.',
        'We can use the word evolution here.',
        'Here is an example of the word evolution.',
      ],
      tdn: [
        {
          word: 'development',
          definition: 'The process of developing or being developed.',
        },
        {
          word: 'growth',
          definition: 'The process of increasing in physical size.',
        },
        {
          word: 'progress',
          definition: 'Forward or onward movement toward a destination.',
        },
      ],
      ttn: [
        {
          word: 'Stagnation',
          definition:
            'The state or condition of lacking growth, progress, or development; a period of inactivity or sluggishness.',
        },
        {
          word: 'Regression',
          definition:
            'A return to a former or less developed state; a decline or worsening in condition, quality, or performance.',
        },
        {
          word: 'Devolution',
          definition:
            'The transfer or delegation of power or authority from a central government to regional or local governments, often with a connotation of decentralization.',
        },
      ],
    },
    {
      word: 'forest',
      definition: 'A large area covered chiefly with trees and undergrowth.',
      topicId: 1,
      id: 46,
      pronunciation: '/ˈfɒɹɪst/',
      image_link: [
        'https://i.pinimg.com/236x/28/2a/ae/282aae3999df4d8cbdb31c81b610a319.jpg',
        'https://i.pinimg.com/236x/70/6a/94/706a94b62285d3945f4bc2ef6ccac314.jpg',
        'https://i.pinimg.com/236x/72/22/f2/7222f24a02d8f09e576e6234f69cc524.jpg',
        'https://i.pinimg.com/236x/0d/b3/01/0db301ba961d6649db60a2664fa56d73.jpg',
      ],
      examples: [
        'The forest was teeming with wildlife.',
        'They went for a hike in the dense forest.',
        'The sunlight barely penetrated the thick forest canopy.',
        'The forest floor was covered in a thick layer of leaves.',
      ],
      tdn: [
        {
          word: 'woods',
          definition: 'A large and thick collection of trees.',
        },
        {
          word: 'jungle',
          definition: 'A dense forest in a tropical region.',
        },
        {
          word: 'grove',
          definition: 'A small wood or group of trees.',
        },
      ],
      ttn: [],
    },
    {
      word: 'mountain',
      definition:
        "A large natural elevation of the earth's surface rising abruptly from the surrounding level.",
      topicId: 1,
      id: 47,
      pronunciation: '/ˈmaʊntɪn/',
      image_link: [
        'https://i.pinimg.com/236x/ae/3c/9e/ae3c9e80d93613ddcda6275f59e0a9e8.jpg',
        'https://i.pinimg.com/236x/3f/6c/89/3f6c89b7e2123f425cd28f0d3bfb6703.jpg',
        'https://i.pinimg.com/236x/09/1c/ed/091ced08f81831dd35097ec83c744862.jpg',
        'https://i.pinimg.com/236x/f0/94/62/f09462ac6a3ab79621b673b3f2b48f5d.jpg',
      ],
      examples: [
        'The mountain peak was covered in snow.',
        'They climbed the steep mountain trail.',
        'The mountain range stretched as far as the eye could see.',
        'A small cabin was nestled at the base of the mountain.',
      ],
      tdn: [
        {
          word: 'peak',
          definition: 'The pointed top of a mountain.',
        },
        {
          word: 'hill',
          definition:
            'A naturally raised area of land, not as high or craggy as a mountain.',
        },
        {
          word: 'ridge',
          definition: 'A long, narrow hilltop, mountain range, or watershed.',
        },
      ],
      ttn: [],
    },
    {
      word: 'ocean',
      definition:
        'A very large expanse of sea, in particular, each of the main areas into which the sea is divided geographically.',
      topicId: 1,
      id: 48,
      pronunciation: '/ˈəʊ.ʃən/',
      image_link: [
        'https://i.pinimg.com/236x/cb/96/c1/cb96c16f1ec3bcd98b6ddf0748dddd6b.jpg',
        'https://i.pinimg.com/236x/69/c1/a4/69c1a4b3d90f600f6125dfd2d651eba0.jpg',
        'https://i.pinimg.com/236x/9d/97/9d/9d979d3b03cf230fe6cb5f0586497de2.jpg',
        'https://i.pinimg.com/236x/45/15/e1/4515e15e1a612497987e61ba6bf9e6d1.jpg',
      ],
      examples: [
        'Ocean is in the sentence.',
        'This sentence contains the word ocean.',
        'We can use the word ocean here.',
        'Here is an example of the word ocean.',
      ],
      tdn: [
        {
          word: 'sea',
          definition:
            "The expanse of salt water that covers most of the earth's surface.",
        },
        {
          word: 'marine',
          definition: 'Of, found in, or produced by the sea.',
        },
        {
          word: 'oceanic',
          definition: 'Relating to the ocean.',
        },
      ],
      ttn: [
        {
          word: 'Land',
          definition:
            "the solid ground or earth's surface as distinct from the sea or air.",
        },
        {
          word: 'Continent',
          definition:
            "any of the world's main continuous expanses of land (Europe, Asia, Africa, North America, South America, Australia, Antarctica).",
        },
        {
          word: 'Island',
          definition: 'a piece of land surrounded by water.',
        },
      ],
    },
    {
      word: 'valley',
      definition:
        'A low area of land between hills or mountains, typically with a river or stream flowing through it.',
      topicId: 1,
      id: 49,
      pronunciation: '/ˈvæli/',
      image_link: [
        'https://i.pinimg.com/236x/61/a8/d8/61a8d88d41bd6453e1143009ea03ee9d.jpg',
        'https://i.pinimg.com/236x/77/c0/93/77c0936288cc58f0feb2fd79cf3bec61.jpg',
        'https://i.pinimg.com/236x/e5/ad/ab/e5adab4ba970a4e5954dd4f25e279df9.jpg',
        'https://i.pinimg.com/236x/88/8c/1e/888c1eb43035c0600ade071cc61629ad.jpg',
      ],
      examples: [
        'Valley is in the sentence.',
        'This sentence contains the word valley.',
        'We can use the word valley here.',
        'Here is an example of the word valley.',
      ],
      tdn: [
        {
          word: 'glen',
          definition: 'A narrow valley.',
        },
        {
          word: 'dale',
          definition: 'A valley, especially a broad one.',
        },
        {
          word: 'ravine',
          definition: 'A deep, narrow gorge with steep sides.',
        },
      ],
      ttn: [
        {
          word: 'Mountain',
          definition: '',
        },
        {
          word: 'Peak',
          definition: '',
        },
        {
          word: 'Summit',
          definition: '',
        },
      ],
    },
    {
      word: 'island',
      definition: 'A piece of land surrounded by water.',
      topicId: 1,
      id: 50,
      pronunciation: '/ˈaɪ̯lənd/',
      image_link: [
        'https://i.pinimg.com/236x/1c/ba/28/1cba2804b24bce738afb363da92dffb2.jpg',
        'https://i.pinimg.com/236x/22/22/ea/2222ea7ae4312fd45159a8b661822234.jpg',
        'https://i.pinimg.com/236x/d8/84/79/d884790b788d70785b2cb33c0caa0278.jpg',
        'https://i.pinimg.com/236x/23/5e/a8/235ea809a415d0c8bfa70e7b65f5e2e3.jpg',
      ],
      examples: [
        'Island is in the sentence.',
        'This sentence contains the word island.',
        'We can use the word island here.',
        'Here is an example of the word island.',
      ],
      tdn: [
        {
          word: 'field',
          definition: 'An area of open land.',
        },
        {
          word: 'meadow',
          definition: 'A piece of grassland.',
        },
        {
          word: 'plain',
          definition: 'A large area of flat land.',
        },
      ],
      ttn: [
        {
          word: 'Mainland',
          definition:
            'The principal landmass of a country, region, or continent, excluding offshore islands.',
        },
        {
          word: 'Continent',
          definition:
            "A large continuous mass of land on the Earth's surface, typically distinguished by political boundaries or geological features.",
        },
        {
          word: 'Peninsula',
          definition:
            'A piece of land that is almost entirely surrounded by water but is connected to mainland via an isthmus.',
        },
      ],
    },
    {
      word: 'desert',
      definition:
        'A barren area of landscape where little precipitation occurs and consequently living conditions are hostile for plant and animal life.',
      topicId: 1,
      id: 51,
      pronunciation: '/dɪˈzɜːt/',
      image_link: [
        'https://i.pinimg.com/236x/e4/90/dd/e490ddb8eb734bff18986abaab754baa.jpg',
        'https://i.pinimg.com/236x/9e/75/d0/9e75d07263ee10035b6a69cb3c0c50eb.jpg',
        'https://i.pinimg.com/236x/de/d0/17/ded017840f7fa6881472f3b3b501442c.jpg',
        'https://i.pinimg.com/236x/2f/2a/d1/2f2ad1f3b59c7e0327358ee49aed708c.jpg',
      ],
      examples: [
        'Desert is in the sentence.',
        'This sentence contains the word desert.',
        'We can use the word desert here.',
        'Here is an example of the word desert.',
      ],
      tdn: [
        {
          word: 'automobile',
          definition:
            'A road vehicle, typically with four wheels, powered by an internal combustion engine or electric motor.',
        },
        {
          word: 'vehicle',
          definition:
            'A thing used for transporting people or goods, especially on land, such as a car, truck, or cart.',
        },
        {
          word: 'motorcar',
          definition: 'Another term for car.',
        },
      ],
      ttn: [
        {
          word: 'Oasis',
          definition:
            'A fertile spot in a desert or arid region, typically having water and vegetation, and providing relief from the surrounding barren landscape.',
        },
        {
          word: 'Jungle',
          definition:
            'A dense and tangled forest or vegetation, typically found in tropical regions with a profusion of tall trees, vines, and dense undergrowth.',
        },
        {
          word: 'Forest',
          definition:
            'A large area covered chiefly with trees and undergrowth, usually larger in scale and less dense than a jungle.',
        },
      ],
    },
    {
      word: 'lake',
      definition: 'A large body of water surrounded by land.',
      topicId: 1,
      id: 52,
      pronunciation: '/leɪk/',
      image_link: [
        'https://i.pinimg.com/236x/e4/0f/c1/e40fc1f5ba3d5be9e14776747dd3233b.jpg',
        'https://i.pinimg.com/236x/9e/1b/56/9e1b567a5445db392298cd5affa4239e.jpg',
        'https://i.pinimg.com/236x/64/cf/ae/64cfae9a58916699af42c7314d91bddc.jpg',
        'https://i.pinimg.com/236x/4e/52/27/4e5227b39eb481ba4bde0fcc41d7abd3.jpg',
      ],
      examples: [
        'Lake is in the sentence.',
        'This sentence contains the word lake.',
        'We can use the word lake here.',
        'Here is an example of the word lake.',
      ],
      tdn: [
        {
          word: 'bicycle',
          definition:
            'A vehicle composed of two wheels held in a frame one behind the other, propelled by pedals and steered with handlebars attached to the front wheel.',
        },
        {
          word: 'bike',
          definition:
            'A vehicle with two wheels that you ride by pushing its pedals with your feet.',
        },
        {
          word: 'cycle',
          definition: 'A bicycle or tricycle.',
        },
      ],
      ttn: [
        {
          word: 'Peninsula',
          definition:
            'A piece of land that is almost entirely surrounded by water but is connected to mainland via an isthmus.',
        },
        {
          word: 'Island',
          definition:
            'A piece of land surrounded by water on all sides, typically smaller than a continent.',
        },
        {
          word: 'Ocean',
          definition:
            "A vast expanse of saltwater that covers much of the Earth's surface and is divided into several principal areas, including the Atlantic, Pacific, Indian, Arctic, and Southern Oceans.",
        },
      ],
    },
    {
      word: 'volcano',
      definition:
        "A mountain or hill, typically conical, having a crater or vent through which lava, rock fragments, hot vapor, and gas are being or have been erupted from the earth's crust.",
      topicId: 1,
      id: 53,
      pronunciation: '/vɒlˈkeɪnəʊ/',
      image_link: [
        'https://i.pinimg.com/236x/89/c7/22/89c72223135e0f829f63ab4d53021884.jpg',
        'https://i.pinimg.com/236x/1c/69/95/1c699537e0de84ee6db92e8bf1db714f.jpg',
        'https://i.pinimg.com/236x/3b/cc/ec/3bccecb72c73cd4d4c5ec9106e9e011d.jpg',
        'https://i.pinimg.com/236x/46/f1/73/46f1738f64534aecb4d5f8b274a8a171.jpg',
      ],
      examples: [
        'Volcano is in the sentence.',
        'This sentence contains the word volcano.',
        'We can use the word volcano here.',
        'Here is an example of the word volcano.',
      ],
      tdn: [
        {
          word: 'airplane',
          definition:
            'A powered flying vehicle with fixed wings and a weight greater than that of the air it displaces.',
        },
        {
          word: 'aeroplane',
          definition: 'A British term for airplane.',
        },
        {
          word: 'jet',
          definition: 'An aircraft powered by jet engines.',
        },
      ],
      ttn: [
        {
          word: 'Plain',
          definition:
            'A large area of flat or gently undulating land, usually without trees.',
        },
        {
          word: 'Valley',
          definition:
            'A low area of land between hills or mountains, typically with a river or stream flowing through it.',
        },
        {
          word: 'Plateau',
          definition:
            'A flat, elevated landform that rises sharply above the surrounding area on at least one side.',
        },
      ],
    },
    {
      word: 'glacier',
      definition:
        'A slowly moving mass or river of ice formed by the accumulation and compaction of snow on mountains or near the poles.',
      topicId: 1,
      id: 54,
      pronunciation: '/ˈɡleɪ.ʃɚ/',
      image_link: [
        'https://i.pinimg.com/236x/27/6b/58/276b583be1e618131b583a07bce8cad3.jpg',
        'https://i.pinimg.com/236x/6b/5e/15/6b5e15008a626b2e98052ca4dae106d4.jpg',
        'https://i.pinimg.com/236x/82/97/f9/8297f9e4291a64c8a186f0c81def8a56.jpg',
        'https://i.pinimg.com/236x/50/b7/d3/50b7d342e3a772bbf588957977329692.jpg',
      ],
      examples: [
        'Glacier is in the sentence.',
        'This sentence contains the word glacier.',
        'We can use the word glacier here.',
        'Here is an example of the word glacier.',
      ],
      tdn: [
        {
          word: 'train',
          definition:
            'A series of connected vehicles that travel on tracks to transport goods or passengers from one place to another.',
        },
        {
          word: 'locomotive',
          definition: 'A powered rail vehicle used for pulling trains.',
        },
        {
          word: 'railway',
          definition: 'The system of tracks, stations, trains, etc.',
        },
      ],
      ttn: [
        {
          word: 'Desert',
          definition:
            'A barren area of landscape where little precipitation occurs and consequently living conditions are hostile for plant and animal life.',
        },
        {
          word: 'Tropical',
          definition:
            'Relating to or characteristic of the tropics, the region of the Earth surrounding the equator, known for its warm climate and rich biodiversity.',
        },
        {
          word: 'Arid',
          definition:
            'Having little or no rain; excessively dry or barren, often referring to regions with low precipitation and moisture levels.',
        },
      ],
    },
    {
      word: 'rainforest',
      definition:
        'A dense forest rich in biodiversity, found typically in tropical areas with consistently heavy rainfall.',
      topicId: 1,
      id: 55,
      pronunciation: '/ˈreɪn.fɔːr.ɪst/',
      image_link: [
        'https://i.pinimg.com/236x/28/1a/6a/281a6a972f87d31240e68060f1050e9c.jpg',
        'https://i.pinimg.com/236x/39/fe/15/39fe15c399af898d6b1b92ae36279e98.jpg',
        'https://i.pinimg.com/236x/0e/d0/23/0ed023459b4d79046ca81ffb6e197f3c.jpg',
        'https://i.pinimg.com/236x/c1/3e/63/c13e63c0d86989d5d1e220e4362b0b0e.jpg',
      ],
      examples: [
        'Rainforest is in the sentence.',
        'This sentence contains the word rainforest.',
        'We can use the word rainforest here.',
        'Here is an example of the word rainforest.',
      ],
      tdn: [
        {
          word: 'ship',
          definition: 'A large boat for transporting people or goods by sea.',
        },
        {
          word: 'vessel',
          definition: 'A ship or large boat.',
        },
        {
          word: 'boat',
          definition:
            'A small vessel propelled on water by oars, sails, or an engine.',
        },
      ],
      ttn: [
        {
          word: 'Desert',
          definition:
            'A barren area of landscape where little precipitation occurs and consequently living conditions are hostile for plant and animal life.',
        },
        {
          word: 'Tundra',
          definition:
            'A vast, treeless Arctic or alpine biome where the subsoil is permanently frozen and characterized by low temperatures, short growing seasons, and sparse vegetation.',
        },
        {
          word: 'Savanna',
          definition:
            'A tropical or subtropical grassland ecosystem characterized by an open canopy of trees and shrubs, interspersed with grasses.',
        },
      ],
    },
    {
      word: 'prairie',
      definition:
        'A large open area of grassland, especially in the Mississippi River valley.',
      topicId: 1,
      id: 56,
      pronunciation: '/ˈpɹɛəɹi/',
      image_link: [
        'https://i.pinimg.com/236x/dc/c2/21/dcc221851180e8f436133a433be78c40.jpg',
        'https://i.pinimg.com/236x/87/98/41/8798419d97402fc8f6b13f73e0513ac2.jpg',
        'https://i.pinimg.com/236x/e3/c1/ec/e3c1ecebf062650c04edd11f831847a4.jpg',
        'https://i.pinimg.com/236x/d3/ce/3a/d3ce3adebeecbaa53ffdd20b3a70f5b1.jpg',
      ],
      examples: [
        'Prairie is in the sentence.',
        'This sentence contains the word prairie.',
        'We can use the word prairie here.',
        'Here is an example of the word prairie.',
      ],
      tdn: [
        {
          word: 'helicopter',
          definition:
            'A type of aircraft which derives both lift and propulsion from one or two sets of horizontally revolving rotors.',
        },
        {
          word: 'chopper',
          definition: 'A slang term for a helicopter.',
        },
        {
          word: 'copter',
          definition: 'A short form of helicopter.',
        },
      ],
      ttn: [
        {
          word: 'Forest',
          definition:
            'A large area covered chiefly with trees and undergrowth, usually larger in scale and less dense than a jungle.',
        },
        {
          word: 'Jungle',
          definition:
            'A dense and tangled forest or vegetation, typically found in tropical regions with a profusion of tall trees, vines, and dense undergrowth.',
        },
        {
          word: 'Mountain',
          definition:
            "A natural elevation of the Earth's surface rising abruptly to a summit, typically higher and steeper than a hill.",
        },
      ],
    },
    {
      word: 'canyon',
      definition:
        'A deep gorge, typically one with a river flowing through it.',
      topicId: 1,
      id: 57,
      pronunciation: '/ˈkænjən/',
      image_link: [
        'https://i.pinimg.com/236x/34/1e/dc/341edc9cbdd6315033155cb65fd15bd7.jpg',
        'https://i.pinimg.com/236x/f6/46/f9/f646f94f5653281a3a4fc69d3e9fd38a.jpg',
        'https://i.pinimg.com/236x/13/83/3a/13833a0ad6acee3161b0c880d3a53440.jpg',
        'https://i.pinimg.com/236x/71/b8/09/71b809c7b5afc4a8a7580137634f6533.jpg',
      ],
      examples: [
        'Canyon is in the sentence.',
        'This sentence contains the word canyon.',
        'We can use the word canyon here.',
        'Here is an example of the word canyon.',
      ],
      tdn: [
        {
          word: 'submarine',
          definition:
            'A watercraft capable of independent operation underwater.',
        },
        {
          word: 'sub',
          definition: 'A short form of submarine.',
        },
        {
          word: 'underwater craft',
          definition: 'A vehicle designed for underwater operations.',
        },
      ],
      ttn: [
        {
          word: 'Plateau',
          definition:
            'A flat and elevated area of land that is higher than the surrounding land, with a relatively flat top.',
        },
        {
          word: 'Plain',
          definition: 'A large area of flat land with few trees.',
        },
        {
          word: 'Valley',
          definition:
            'A low area of land between hills or mountains, typically with a river or stream flowing through it.',
        },
      ],
    },
    {
      word: 'cliff',
      definition: 'A steep rock face, especially at the edge of the sea.',
      topicId: 1,
      id: 58,
      pronunciation: '/klɪf/',
      image_link: [
        'https://i.pinimg.com/236x/54/90/7e/54907e033827f1b7626b0f3a564e5987.jpg',
        'https://i.pinimg.com/236x/69/0e/c1/690ec110b0974526594010e9d7c98a82.jpg',
        'https://i.pinimg.com/236x/f0/4b/12/f04b1264ec377ab004dc5cd9eda7e1db.jpg',
        'https://i.pinimg.com/236x/30/c3/15/30c315ab90e3971e476e7fb164372665.jpg',
      ],
      examples: [
        'Cliff is in the sentence.',
        'This sentence contains the word cliff.',
        'We can use the word cliff here.',
        'Here is an example of the word cliff.',
      ],
      tdn: [
        {
          word: 'rocket',
          definition:
            'A spacecraft, aircraft, or vehicle that obtains thrust from a rocket engine.',
        },
        {
          word: 'missile',
          definition:
            'An object which is forcibly propelled at a target, either by hand or from a mechanical weapon.',
        },
        {
          word: 'spacecraft',
          definition: 'A vehicle used for traveling in space.',
        },
      ],
      ttn: [
        {
          word: 'Valley',
          definition:
            'A low area of land between hills or mountains, typically with a river or stream flowing through it.',
        },
        {
          word: 'Plain',
          definition:
            'A large area of flat or gently rolling land, typically without many trees.',
        },
        {
          word: 'Canyon',
          definition:
            'A deep, narrow valley with steep sides, often with a stream or river flowing through it.',
        },
      ],
    },
    {
      word: 'reef',
      definition:
        'A ridge of jagged rock, coral, or sand just above or below the surface of the sea.',
      topicId: 1,
      id: 59,
      pronunciation: '/ɹiːf/',
      image_link: [
        'https://i.pinimg.com/236x/54/b3/9c/54b39c725dfb0893bbf0ce9c3b84cdd1.jpg',
        'https://i.pinimg.com/236x/f2/75/a9/f275a9006215c46f691278baf8a31c66.jpg',
        'https://i.pinimg.com/236x/87/c1/ce/87c1cec8dc86f394c5963c060726a854.jpg',
        'https://i.pinimg.com/236x/39/5e/e9/395ee9ca082ed15645904faf96870e4b.jpg',
      ],
      examples: [
        'Reef is in the sentence.',
        'This sentence contains the word reef.',
        'We can use the word reef here.',
        'Here is an example of the word reef.',
      ],
      tdn: [
        {
          word: 'space shuttle',
          definition:
            'A reusable spacecraft designed to transport people and cargo between earth and space.',
        },
        {
          word: 'shuttle',
          definition:
            'A form of transportation that travels regularly between two places.',
        },
        {
          word: 'orbiter',
          definition:
            'A spacecraft designed to go into orbit, especially one not intended to land.',
        },
      ],
      ttn: [
        {
          word: 'Trench',
          definition:
            'A long, narrow ditch typically used for defense or drainage purposes, or a deep, narrow valley on the ocean floor.',
        },
        {
          word: 'Canyon',
          definition:
            'A deep, narrow valley with steep sides, often with a stream or river flowing through it.',
        },
        {
          word: 'Plain',
          definition:
            'A large area of flat or gently rolling land, typically without many trees.',
        },
      ],
    },
    {
      word: 'stream',
      definition: 'A small, narrow river.',
      topicId: 1,
      id: 60,
      pronunciation: '/stɹiːm/',
      image_link: [
        'https://i.pinimg.com/236x/86/82/4b/86824b9813ca7dd0944f45a128752acd.jpg',
        'https://i.pinimg.com/236x/23/d1/9b/23d19ba9384298fe9ea0a5249e1e459e.jpg',
        'https://i.pinimg.com/236x/19/2a/43/192a43cc952e7138c794f5ecebfe2a72.jpg',
        'https://i.pinimg.com/236x/89/a2/2c/89a22cfc0e7e5972584ee8c261a8d2ff.jpg',
      ],
      examples: [
        'Stream is in the sentence.',
        'This sentence contains the word stream.',
        'We can use the word stream here.',
        'Here is an example of the word stream.',
      ],
      tdn: [
        {
          word: 'satellite',
          definition:
            'An artificial body placed in orbit around the earth or moon or another planet in order to collect information or for communication.',
        },
        {
          word: 'orbiter',
          definition:
            'A spacecraft designed to go into orbit around a planet or other body.',
        },
        {
          word: 'space station',
          definition:
            'A large artificial satellite used as a long-term base for manned operations in space.',
        },
      ],
      ttn: [
        {
          word: 'Trench',
          definition:
            'A long, narrow ditch or excavation in the ground, typically deeper than it is wide, often dug for military defense or irrigation purposes.',
        },
        {
          word: 'Canyon',
          definition:
            'A deep, narrow valley with steep sides, often carved by a river or stream over millions of years.',
        },
        {
          word: 'Plain',
          definition:
            'A large area of flat or gently rolling land, usually devoid of trees, and typically located at low elevations.',
        },
      ],
    },
    {
      word: 'pond',
      definition: 'A small body of water, usually smaller than a lake.',
      topicId: 1,
      id: 61,
      pronunciation: '/pɒnd/',
      image_link: [
        'https://i.pinimg.com/236x/68/ad/87/68ad873dc8925a07b4a54e85675a52bf.jpg',
        'https://i.pinimg.com/236x/d5/a6/2e/d5a62ef5368b30bd1a27cbcb9e5dd03d.jpg',
        'https://i.pinimg.com/236x/c8/81/3e/c8813e5ebc12dc0099be6d6a9f075ac9.jpg',
        'https://i.pinimg.com/236x/14/ce/66/14ce66245b9eb5e4f8364f4320a8e1e8.jpg',
      ],
      examples: [
        'Pond is in the sentence.',
        'This sentence contains the word pond.',
        'We can use the word pond here.',
        'Here is an example of the word pond.',
      ],
      tdn: [
        {
          word: 'building',
          definition:
            'A structure with a roof and walls, such as a house or factory.',
        },
        {
          word: 'edifice',
          definition: 'A large, imposing building.',
        },
        {
          word: 'structure',
          definition:
            'A building or other object constructed from several parts.',
        },
      ],
      ttn: [
        {
          word: 'Ocean',
          definition:
            "A very large expanse of saltwater that covers most of the Earth's surface and is divided into several principal areas, including the Atlantic, Pacific, Indian, Arctic, and Southern Oceans.",
        },
        {
          word: 'Sea',
          definition:
            'A large body of saltwater that is partially enclosed by land.',
        },
        {
          word: 'River',
          definition:
            'A large natural stream of water flowing in a channel to the sea, a lake, or another river.',
        },
      ],
    },
    {
      word: 'tundra',
      definition:
        'A vast, flat, treeless Arctic region of Europe, Asia, and North America in which the subsoil is permanently frozen.',
      topicId: 1,
      id: 62,
      pronunciation: '/ˈtʌndɹə/',
      image_link: [
        'https://i.pinimg.com/236x/30/63/99/306399ea90acd2ba08e5a8a8880e5929.jpg',
        'https://i.pinimg.com/236x/eb/c7/27/ebc727c94c7dcd3b659707b9b16dcbf8.jpg',
        'https://i.pinimg.com/236x/73/26/d2/7326d21b567aad8060eeec010676fa81.jpg',
        'https://i.pinimg.com/236x/7c/f8/c2/7cf8c230c7176c8bcd6dad16fc1d5982.jpg',
      ],
      examples: [
        'Tundra is in the sentence.',
        'This sentence contains the word tundra.',
        'We can use the word tundra here.',
        'Here is an example of the word tundra.',
      ],
      tdn: [
        {
          word: 'house',
          definition:
            'A building for human habitation, especially one that is lived in by a family or small group of people.',
        },
        {
          word: 'home',
          definition:
            'The place where one lives permanently, especially as a member of a family or household.',
        },
        {
          word: 'residence',
          definition: "A person's home; the place where someone lives.",
        },
      ],
      ttn: [
        {
          word: 'Forest',
          definition:
            'A large area covered chiefly with trees and undergrowth, usually larger in scale and less dense than a jungle.',
        },
        {
          word: 'Jungle',
          definition:
            'A dense and tangled forest or vegetation, typically found in tropical regions with a profusion of tall trees, vines, and dense undergrowth.',
        },
        {
          word: 'Woodland',
          definition:
            'An area of land covered with trees, smaller in scale than a forest, often with open spaces between the trees.',
        },
      ],
    },
    {
      word: 'savanna',
      definition:
        'A mixed woodland grassland ecosystem characterized by the trees being sufficiently widely spaced so that the canopy does not close.',
      topicId: 1,
      id: 63,
      pronunciation: '/səˈvænə/',
      image_link: [
        'https://i.pinimg.com/236x/2d/aa/c2/2daac28e3c7e3dc782b928f4fc030b39.jpg',
        'https://i.pinimg.com/236x/f6/73/64/f673643b9ebe7d9437f9e33a02976a4a.jpg',
        'https://i.pinimg.com/236x/20/3d/75/203d751e32661182adffac28d3b1dcde.jpg',
        'https://i.pinimg.com/236x/18/7a/77/187a770a0b359686827cc9594039137d.jpg',
      ],
      examples: [
        'Savanna is in the sentence.',
        'This sentence contains the word savanna.',
        'We can use the word savanna here.',
        'Here is an example of the word savanna.',
      ],
      tdn: [
        {
          word: 'apartment',
          definition:
            'A suite of rooms forming one residence, typically on one floor and within a larger building containing a number of such residences.',
        },
        {
          word: 'flat',
          definition: 'A British term for an apartment.',
        },
        {
          word: 'condominium',
          definition:
            'A building or complex of buildings containing a number of individually owned apartments or houses.',
        },
      ],
      ttn: [
        {
          word: 'Forest',
          definition:
            'A large area covered chiefly with trees and undergrowth, typically larger in scale and less dense than a jungle.',
        },
        {
          word: 'Jungle',
          definition:
            'A dense and tangled forest or vegetation, typically found in tropical regions with a profusion of tall trees, vines, and dense undergrowth.',
        },
        {
          word: 'Woodland',
          definition:
            'An area of land covered with trees, smaller in scale than a forest, often with open spaces between the trees.',
        },
      ],
    },
    {
      word: 'archipelago',
      definition: 'A group of islands.',
      topicId: 1,
      id: 64,
      pronunciation: '/ɑːkɪˈpɛləɡəʊ/',
      image_link: [
        'https://i.pinimg.com/236x/cf/bb/9b/cfbb9bda9f01f8cbf2c34dcc8921c9f9.jpg',
        'https://i.pinimg.com/236x/d8/71/0c/d8710c9e7823a2222fd5777bc783b156.jpg',
        'https://i.pinimg.com/236x/a3/97/c0/a397c0b9ecf063d2b7aec6b6d3c34801.jpg',
        'https://i.pinimg.com/236x/5d/d5/9d/5dd59d665a20e95d1b589ab224e3f190.jpg',
      ],
      examples: [
        'Archipelago is in the sentence.',
        'This sentence contains the word archipelago.',
        'We can use the word archipelago here.',
        'Here is an example of the word archipelago.',
      ],
      tdn: [
        {
          word: 'office',
          definition:
            'A room, set of rooms, or building used as a place for commercial, professional, or bureaucratic work.',
        },
        {
          word: 'workplace',
          definition:
            'A place where people work, such as an office or factory.',
        },
        {
          word: 'bureau',
          definition:
            'An office or agency, especially one providing a particular service.',
        },
      ],
      ttn: [
        {
          word: 'Continent',
          definition:
            "A very large landmass on Earth's surface, typically separated by geographical features such as oceans.",
        },
        {
          word: 'Mainland',
          definition:
            'The principal landmass of a country or region, excluding offshore islands.',
        },
        {
          word: 'Single island',
          definition:
            'A landmass completely surrounded by water, smaller in size compared to continents and typically not part of a larger landmass.',
        },
      ],
    },
    {
      word: 'moor',
      definition:
        'A tract of open uncultivated upland, typically covered with heather.',
      topicId: 1,
      id: 65,
      pronunciation: '/moː/',
      image_link: [
        'https://i.pinimg.com/236x/40/b8/8d/40b88dd44cb59a532cf21549afcc4305.jpg',
        'https://i.pinimg.com/236x/58/2f/d0/582fd06246cc6cbf8b3a83317bd20aaa.jpg',
        'https://i.pinimg.com/236x/bb/a1/30/bba130127e4df9a86cafe1799350e2d8.jpg',
        'https://i.pinimg.com/236x/aa/fa/49/aafa49d0e1e949d61a7beef557a5de69.jpg',
      ],
      examples: [
        'Moor is in the sentence.',
        'This sentence contains the word moor.',
        'We can use the word moor here.',
        'Here is an example of the word moor.',
      ],
      tdn: [
        {
          word: 'hospital',
          definition:
            'An institution providing medical and surgical treatment and nursing care for sick or injured people.',
        },
        {
          word: 'clinic',
          definition:
            'A place or hospital department where outpatients are given medical treatment or advice, especially of a specialist nature.',
        },
        {
          word: 'infirmary',
          definition:
            'A place in a large institution for the care of those who are ill.',
        },
      ],
      ttn: [
        {
          word: 'Lowland',
          definition:
            'An area of land that is lower in elevation compared to surrounding areas, often characterized by flat or gently rolling terrain.',
        },
        {
          word: 'Plain',
          definition:
            'A large area of flat or gently rolling land, typically without many trees.',
        },
        {
          word: 'Valley',
          definition:
            'A low area of land between hills or mountains, typically with a river or stream flowing through it.',
        },
      ],
    },
    {
      word: 'wetland',
      definition: 'Land consisting of marshes or swamps; saturated land.',
      topicId: 1,
      id: 66,
      pronunciation: '',
      image_link: [
        'https://i.pinimg.com/236x/68/a0/55/68a055ba61288a8cba7b8858d2711f27.jpg',
        'https://i.pinimg.com/236x/47/c5/4b/47c54b10ec9dc1b0bd6c84d86965a289.jpg',
        'https://i.pinimg.com/236x/3d/4e/10/3d4e108678ad168173e7f753c1be541a.jpg',
        'https://i.pinimg.com/236x/06/31/fd/0631fd10ad211d401b29416dddd7932f.jpg',
      ],
      examples: [
        'Wetland is in the sentence.',
        'This sentence contains the word wetland.',
        'We can use the word wetland here.',
        'Here is an example of the word wetland.',
      ],
      tdn: [
        {
          word: 'school',
          definition: 'An institution for educating children.',
        },
        {
          word: 'academy',
          definition: 'A place of study or training in a special field.',
        },
        {
          word: 'institution',
          definition:
            'A society or organization founded for a religious, educational, social, or similar purpose.',
        },
      ],
      ttn: [
        {
          word: 'Upland',
          definition:
            'An area of high or elevated land, often compared to surrounding lowlands.',
        },
        {
          word: 'Dryland',
          definition:
            'An area characterized by low precipitation levels, typically with arid or semi-arid conditions.',
        },
        {
          word: 'Upland area',
          definition:
            'A region or zone of elevated land, often used to refer to higher terrain compared to nearby lowlands.',
        },
      ],
    },
    {
      word: 'sunshine',
      definition: 'Sunlight, especially when considered pleasant.',
      topicId: 2,
      id: 67,
      pronunciation: '/ˈsʌnʃaɪn/',
      image_link: [
        'https://i.pinimg.com/236x/0f/12/9f/0f129fb5f9270722f42878dc59b06686.jpg',
        'https://i.pinimg.com/236x/99/9a/7e/999a7e9e457e5ca8443fb217608642ae.jpg',
        'https://i.pinimg.com/236x/4f/2b/3c/4f2b3ce181439f7ca20d47310fcc40a9.jpg',
        'https://i.pinimg.com/236x/43/d3/fd/43d3fda6e52ac7c68cc775cf08c81b36.jpg',
      ],
      examples: [
        'Sunshine is in the sentence.',
        'This sentence contains the word sunshine.',
        'We can use the word sunshine here.',
        'Here is an example of the word sunshine.',
      ],
      tdn: [
        {
          word: 'university',
          definition:
            'An institution of higher education and research, which awards academic degrees in various academic disciplines.',
        },
        {
          word: 'college',
          definition:
            'An educational institution or establishment, in particular one providing higher education or specialized professional or vocational training.',
        },
        {
          word: 'alma mater',
          definition:
            'The school, college, or university that one once attended.',
        },
      ],
      ttn: [
        {
          word: 'Darkness',
          definition:
            'The absence of light, especially when perceived as a negative quality or condition.',
        },
        {
          word: 'Shade',
          definition:
            'An area of relative darkness caused by light being blocked or partially blocked by an object or substance.',
        },
        {
          word: 'Overcast',
          definition:
            'Cloudy or cloudy weather where the sky is covered with clouds and there is no sunlight.',
        },
      ],
    },
    {
      word: 'cloud',
      definition:
        'A visible mass of condensed water vapor floating in the atmosphere, typically high above the ground.',
      topicId: 2,
      id: 68,
      pronunciation: '/klaʊd/',
      image_link: [
        'https://i.pinimg.com/236x/bd/a2/67/bda2671c3b78f9ba9f0264f59782e1cc.jpg',
        'https://i.pinimg.com/236x/71/2a/55/712a55d836b454fc5fcc1e57a779d929.jpg',
        'https://i.pinimg.com/236x/76/1f/22/761f22da967029d94b6f58b2084294db.jpg',
        'https://i.pinimg.com/236x/b8/77/39/b87739514d9b55a49676d76a19c17bb0.jpg',
      ],
      examples: [
        'Cloud is in the sentence.',
        'This sentence contains the word cloud.',
        'We can use the word cloud here.',
        'Here is an example of the word cloud.',
      ],
      tdn: [
        {
          word: 'library',
          definition:
            'A building or room containing collections of books, periodicals, and sometimes films and recorded music for people to read, borrow, or refer to.',
        },
        {
          word: 'book repository',
          definition: 'A place where books are stored.',
        },
        {
          word: 'archive',
          definition:
            'A collection of historical documents or records providing information about a place, institution, or group of people.',
        },
      ],
      ttn: [
        {
          word: 'Clear sky',
          definition:
            'A sky that is free of clouds, resulting in unobstructed visibility and typically blue color.',
        },
        {
          word: 'Sunshine',
          definition:
            'Direct sunlight; the light and warmth that come from the sun when the sky is clear.',
        },
        {
          word: 'Bright sky',
          definition:
            'A sky that is filled with light, typically due to the presence of sunlight, and is usually clear or only partly cloudy.',
        },
      ],
    },
    {
      word: 'wind',
      definition:
        "Air in natural motion, as that moving horizontally at any velocity along the earth's surface.",
      topicId: 2,
      id: 69,
      pronunciation: '/ˈwaɪnd/',
      image_link: [
        'https://i.pinimg.com/236x/6c/73/52/6c7352172779dcf2a34b991554af7260.jpg',
        'https://i.pinimg.com/236x/19/d4/70/19d4701aaaea58288e779cbf6c8fa211.jpg',
        'https://i.pinimg.com/236x/40/91/37/409137414ba9c96df66128fbfab0485b.jpg',
        'https://i.pinimg.com/236x/76/d3/74/76d3743f0e5119e221d723ce7d87b2ea.jpg',
      ],
      examples: [
        'Wind is in the sentence.',
        'This sentence contains the word wind.',
        'We can use the word wind here.',
        'Here is an example of the word wind.',
      ],
      tdn: [
        {
          word: 'museum',
          definition:
            'A building in which objects of historical, scientific, artistic, or cultural interest are stored and exhibited.',
        },
        {
          word: 'gallery',
          definition:
            'A room or building for the display or sale of works of art.',
        },
        {
          word: 'exhibition hall',
          definition:
            'A large room or building used for displaying exhibitions.',
        },
      ],
      ttn: [
        {
          word: 'Calm',
          definition:
            'A state of peace and quiet, free from disturbance or agitation.',
        },
        {
          word: 'Stillness',
          definition: 'The absence of movement or sound; complete quietness.',
        },
        {
          word: 'Tranquility',
          definition: 'The quality or state of being calm and peaceful.',
        },
      ],
    },
    {
      word: 'snow',
      definition:
        'Atmospheric water vapor frozen into ice crystals and falling in light white flakes or lying on the ground as a white layer.',
      topicId: 2,
      id: 70,
      pronunciation: '/snəʊ/',
      image_link: [
        'https://i.pinimg.com/236x/47/77/ef/4777effd7383fb2782e845750784b93a.jpg',
        'https://i.pinimg.com/236x/92/40/3d/92403dc41ce444bb61ef6129ee552ace.jpg',
        'https://i.pinimg.com/236x/8f/27/47/8f2747babcbef285896de9ac7001442d.jpg',
        'https://i.pinimg.com/236x/f7/08/f4/f708f4349c96bcaa69c5636562a8ce3d.jpg',
      ],
      examples: [
        'Snowflakes drifted down from the sky.',
        'The ground was blanketed in fresh snow.',
        'Children were building a snowman in the yard.',
        'The snow made the landscape look magical.',
      ],
      tdn: [
        {
          word: 'stadium',
          definition: 'A sports arena with tiers of seats for spectators.',
        },
        {
          word: 'arena',
          definition:
            'A level area surrounded by seats for spectators, in which sports, entertainments, and other public events are held.',
        },
        {
          word: 'coliseum',
          definition: 'A large theater or stadium.',
        },
      ],
      ttn: [
        {
          word: 'Heat',
          definition:
            'Snow forms in cold conditions, so heat, which is associated with warm temperatures, is an opposite concept.',
        },
        {
          word: 'Drought',
          definition:
            'A drought indicates a lack of precipitation, including snow, thus contrasting with snow which is a form of precipitation.',
        },
        {
          word: 'Desert',
          definition:
            'Deserts are typically hot, dry environments where snow is extremely rare, making them an opposite type of environment.',
        },
      ],
    },
    {
      word: 'thunder',
      definition:
        'A loud rumbling or crashing noise heard after a lightning flash due to the expansion of rapidly heated air.',
      topicId: 2,
      id: 71,
      pronunciation: '/ˈθʌndə/',
      image_link: [
        'https://i.pinimg.com/236x/68/75/c3/6875c383c3ba22d28281c154e959304e.jpg',
        'https://i.pinimg.com/236x/82/75/55/8275556098d35e38082658b9f0639102.jpg',
        'https://i.pinimg.com/236x/e5/32/b1/e532b13df5bbde01730930d41467c01c.jpg',
        'https://i.pinimg.com/236x/5d/8f/88/5d8f88a4fb4a426d19f1fe00656f34a3.jpg',
      ],
      examples: [
        'Thunder is in the sentence.',
        'This sentence contains the word thunder.',
        'We can use the word thunder here.',
        'Here is an example of the word thunder.',
      ],
      tdn: [
        {
          word: 'road',
          definition:
            'A wide way leading from one place to another, especially one with a specially prepared surface which vehicles can use.',
        },
        {
          word: 'highway',
          definition:
            'A main road, especially one connecting major towns or cities.',
        },
        {
          word: 'street',
          definition:
            'A public road in a city, town, or village, typically with houses and buildings on one or both sides.',
        },
      ],
      ttn: [
        {
          word: 'Silence',
          definition: 'The complete absence of sound.',
        },
        {
          word: 'Stillness',
          definition: 'The absence of movement or sound; complete quietness.',
        },
        {
          word: 'Whisper',
          definition:
            'A soft or low speech produced without using the full voice.',
        },
      ],
    },
    {
      word: 'lightning',
      definition:
        'The occurrence of a natural electrical discharge of very short duration and high voltage between a cloud and the ground or within a cloud, accompanied by a bright flash and typically also thunder.',
      topicId: 2,
      id: 72,
      pronunciation: '/ˈlaɪt.nɪŋ/',
      image_link: [
        'https://i.pinimg.com/236x/69/42/43/694243ba86f1e7e3e9b7ed7358aea828.jpg',
        'https://i.pinimg.com/236x/be/07/73/be07733bf01a82515db0643c90a5e0ec.jpg',
        'https://i.pinimg.com/236x/e5/32/b1/e532b13df5bbde01730930d41467c01c.jpg',
        'https://i.pinimg.com/236x/f4/fb/bc/f4fbbc308475c02af288380a04ca52ce.jpg',
      ],
      examples: [
        'Lightning is in the sentence.',
        'This sentence contains the word lightning.',
        'We can use the word lightning here.',
        'Here is an example of the word lightning.',
      ],
      tdn: [
        {
          word: 'bridge',
          definition:
            'A structure carrying a road, path, railroad, or canal across a river, ravine, road, railroad, or other obstacle.',
        },
        {
          word: 'viaduct',
          definition:
            'A long bridge-like structure, typically a series of arches, carrying a road or railroad across a valley or other low ground.',
        },
        {
          word: 'overpass',
          definition:
            'A bridge by which a road or railroad passes over another.',
        },
      ],
      ttn: [
        {
          word: 'Calm',
          definition:
            'A state of peace and quiet, free from disturbance or agitation.',
        },
        {
          word: 'Stillness',
          definition: 'The absence of movement or sound; complete quietness.',
        },
        {
          word: 'Darkness',
          definition:
            'The absence of light, especially when perceived as a negative quality or condition.',
        },
      ],
    },
    {
      word: 'fog',
      definition:
        "A thick cloud of tiny water droplets suspended in the atmosphere at or near the earth's surface that obscures or restricts visibility.",
      topicId: 2,
      id: 73,
      pronunciation: '/fɒɡ/',
      image_link: [
        'https://i.pinimg.com/236x/3d/16/03/3d160329981acf0f68dfa8e0cd4f1c46.jpg',
        'https://i.pinimg.com/236x/db/79/29/db79296fee3600d01cfc7f9c34cb74c7.jpg',
        'https://i.pinimg.com/236x/6a/5c/3e/6a5c3eee7e10229b9fa2394990ad72f2.jpg',
        'https://i.pinimg.com/236x/2a/ee/ec/2aeeec43037021366109a8ce811f4c9b.jpg',
      ],
      examples: [
        'Fog is in the sentence.',
        'This sentence contains the word fog.',
        'We can use the word fog here.',
        'Here is an example of the word fog.',
      ],
      tdn: [
        {
          word: 'tunnel',
          definition:
            'An artificial underground passage, especially one built through a hill or under a building, road, or river.',
        },
        {
          word: 'passageway',
          definition:
            'A long, narrow way, typically having walls either side, that allows access between buildings or to different rooms within a building.',
        },
        {
          word: 'subway',
          definition: 'A tunnel under a road for use by pedestrians.',
        },
      ],
      ttn: [
        {
          word: 'Clarity',
          definition:
            'The quality of being clear, in particular the quality of transparency or purity.',
        },
        {
          word: 'Sunshine',
          definition: 'Direct sunlight unblocked by clouds or mist.',
        },
        {
          word: 'Visibility',
          definition:
            'The state of being able to see or be seen, often due to clear atmospheric conditions.',
        },
      ],
    },
    {
      word: 'hail',
      definition:
        'Pellets of frozen rain which fall in showers from cumulonimbus clouds.',
      topicId: 2,
      id: 74,
      pronunciation: '/heɪl/',
      image_link: [
        'https://i.pinimg.com/236x/ee/d2/b3/eed2b3a6aeeec415a43e9c1bb9b898da.jpg',
        'https://i.pinimg.com/236x/06/a9/e5/06a9e51b256b43381f3607b28d32b09d.jpg',
        'https://i.pinimg.com/236x/e3/c9/ae/e3c9ae4440e468b5135ff341b86f5374.jpg',
        'https://i.pinimg.com/236x/8b/1a/32/8b1a32fac62559dcda2536d256a87d8f.jpg',
      ],
      examples: [
        'Hail is in the sentence.',
        'This sentence contains the word hail.',
        'We can use the word hail here.',
        'Here is an example of the word hail.',
      ],
      tdn: [
        {
          word: 'airport',
          definition:
            'A complex of runways and buildings for the takeoff, landing, and maintenance of civil aircraft, with facilities for passengers.',
        },
        {
          word: 'airfield',
          definition:
            'An area of land set aside for the takeoff, landing, and maintenance of aircraft.',
        },
        {
          word: 'terminal',
          definition:
            'A building at an airport where passengers transfer from ground transportation to the facilities that allow them to board and disembark from aircraft.',
        },
      ],
      ttn: [
        {
          word: 'Sunshine',
          definition:
            'Direct sunlight; the light and warmth that come from the sun.',
        },
        {
          word: 'Drizzle',
          definition: 'Light rain falling in very fine drops.',
        },
        {
          word: 'Sleet',
          definition:
            'A mixture of rain and snow or hail, falling as frozen precipitation.',
        },
      ],
    },
    {
      word: 'drizzle',
      definition: 'Light rain falling in very fine drops.',
      topicId: 2,
      id: 75,
      pronunciation: '/ˈdɹɪz.l/',
      image_link: [
        'https://i.pinimg.com/236x/f7/52/40/f752404e8036da1263901293e057cce1.jpg',
        'https://i.pinimg.com/236x/64/28/c9/6428c99364e73248c6983cf6e2ae3040.jpg',
        'https://i.pinimg.com/236x/94/14/1d/94141dcaf3a1f3c9fde66f0672a65cc6.jpg',
        'https://i.pinimg.com/236x/43/d1/6a/43d16adf2f0d1c9b18a1e884c2d74854.jpg',
      ],
      examples: [
        'Drizzle is in the sentence.',
        'This sentence contains the word drizzle.',
        'We can use the word drizzle here.',
        'Here is an example of the word drizzle.',
      ],
      tdn: [
        {
          word: 'station',
          definition:
            'A place on a railway line where trains regularly stop so that passengers can get on or off.',
        },
        {
          word: 'depot',
          definition:
            'A place for the storage of large quantities of equipment, food, or goods.',
        },
        {
          word: 'stop',
          definition:
            'A designated place where a public transportation vehicle stops for passengers to get on and off.',
        },
      ],
      ttn: [
        {
          word: 'Pour',
          definition: 'Rain heavily',
        },
        {
          word: 'Downpour',
          definition: 'A heavy fall of rain',
        },
        {
          word: 'Deluge',
          definition: 'A severe flood; a heavy downpour',
        },
      ],
    },
    {
      word: 'humidity',
      definition: 'The amount of water vapor in the atmosphere.',
      topicId: 2,
      id: 76,
      pronunciation: '/hjuːˈmɪdɪti/',
      image_link: [
        'https://i.pinimg.com/236x/17/be/56/17be56ff19d20e7acb4bcf5b39963bf3.jpg',
        'https://i.pinimg.com/236x/83/95/06/839506b3167f3df4233264ed186d9014.jpg',
        'https://i.pinimg.com/236x/f7/a7/e5/f7a7e563bcbe59ae6499876d577e7a2b.jpg',
        'https://i.pinimg.com/236x/bb/a5/4a/bba54a6e490994155ee72f3e706dbc72.jpg',
      ],
      examples: [
        'Humidity is in the sentence.',
        'This sentence contains the word humidity.',
        'We can use the word humidity here.',
        'Here is an example of the word humidity.',
      ],
      tdn: [
        {
          word: 'port',
          definition:
            'A town or city with a harbor where ships load or unload, especially one where customs officers are stationed.',
        },
        {
          word: 'harbor',
          definition: 'A place on the coast where vessels may find shelter.',
        },
        {
          word: 'dock',
          definition:
            'An enclosed area of water in a port for the loading, unloading, and repair of ships.',
        },
      ],
      ttn: [
        {
          word: 'dryness',
          definition: 'lack or absence of moisture or humidity',
        },
        {
          word: 'aridity',
          definition: 'extremely dry conditions with low humidity',
        },
        {
          word: 'desiccation',
          definition: 'the process of drying out; extreme dryness',
        },
      ],
    },
    {
      word: 'cyclone',
      definition:
        'A system of winds rotating inward to an area of low atmospheric pressure, with a counterclockwise (northern hemisphere) or clockwise (southern hemisphere) circulation; a depression.',
      topicId: 2,
      id: 77,
      pronunciation: '/ˈsaɪ.kləʊn/',
      image_link: [
        'https://i.pinimg.com/236x/8e/68/be/8e68bef0ccf658ca87ff6e77475be43f.jpg',
        'https://i.pinimg.com/236x/07/92/e4/0792e4e06fad6a2cff2681674c171597.jpg',
        'https://i.pinimg.com/236x/ba/1a/75/ba1a75461ddf737e8a0dee61476a3a18.jpg',
        'https://i.pinimg.com/236x/35/9e/bf/359ebfb07ec847d5d3709370250042f1.jpg',
      ],
      examples: [
        'Cyclone is in the sentence.',
        'This sentence contains the word cyclone.',
        'We can use the word cyclone here.',
        'Here is an example of the word cyclone.',
      ],
      tdn: [
        {
          word: 'bus',
          definition:
            'A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare.',
        },
        {
          word: 'coach',
          definition:
            'A comfortably equipped single-decker bus used for longer journeys.',
        },
        {
          word: 'shuttle',
          definition:
            'A form of transportation that travels regularly between two places.',
        },
      ],
      ttn: [
        {
          word: 'anticyclone',
          definition:
            'A weather system with high atmospheric pressure at its center, around which air slowly circulates clockwise (northern hemisphere) or counterclockwise (southern hemisphere).',
        },
        {
          word: 'high-pressure system',
          definition:
            'A region in the atmosphere where the atmospheric pressure is higher than its surroundings.',
        },
        {
          word: 'high',
          definition:
            'A region of the atmosphere with higher atmospheric pressure relative to its surroundings, often associated with fair weather.',
        },
      ],
    },
    {
      word: 'tornado',
      definition:
        'A mobile, destructive vortex of violently rotating winds having the appearance of a funnel-shaped cloud and advancing beneath a large storm system.',
      topicId: 2,
      id: 78,
      pronunciation: '/tɔː(ɹ)ˈneɪ.dəʊ/',
      image_link: [
        'https://i.pinimg.com/236x/29/a5/2f/29a52f928a85e3e54da258005299a4d8.jpg',
        'https://i.pinimg.com/236x/25/42/7e/25427e5a5b4e77af96c82cc18c4fcaa8.jpg',
        'https://i.pinimg.com/236x/c8/ae/fa/c8aefa30a499d212800b9ad6d9627d20.jpg',
        'https://i.pinimg.com/236x/30/60/07/306007f11129a54639daf709adc7c0c9.jpg',
      ],
      examples: [
        'Tornado is in the sentence.',
        'This sentence contains the word tornado.',
        'We can use the word tornado here.',
        'Here is an example of the word tornado.',
      ],
      tdn: [
        {
          word: 'taxi',
          definition:
            'A car licensed to transport passengers in return for payment of a fare, typically fitted with a taximeter.',
        },
        {
          word: 'cab',
          definition: 'A taxi.',
        },
        {
          word: 'ride',
          definition: 'A journey made in a car or other vehicle.',
        },
      ],
      ttn: [
        {
          word: 'calm',
          definition: 'free from storm or wind; peaceful',
        },
        {
          word: 'stillness',
          definition: 'absence of motion or disturbance',
        },
        {
          word: 'serenity',
          definition: 'state of being calm, peaceful, and untroubled',
        },
      ],
    },
    {
      word: 'dew',
      definition:
        'Tiny drops of water that form on cool surfaces at night, when atmospheric vapor condenses.',
      topicId: 2,
      id: 79,
      pronunciation: '/djuː/',
      image_link: [
        'https://i.pinimg.com/236x/ee/e6/6f/eee66f4e22a9395417ee5336a251cf94.jpg',
        'https://i.pinimg.com/236x/15/9e/9f/159e9f81f8cde45ecc35afb8ac40ca6e.jpg',
        'https://i.pinimg.com/236x/35/5f/fa/355ffaacba752f6473079f2c632e31f2.jpg',
        'https://i.pinimg.com/236x/2e/4d/5f/2e4d5fefc4d7435282f2b6725cb9047a.jpg',
      ],
      examples: [
        'Dew is in the sentence.',
        'This sentence contains the word dew.',
        'We can use the word dew here.',
        'Here is an example of the word dew.',
      ],
      tdn: [
        {
          word: 'bicycle',
          definition:
            'A vehicle composed of two wheels held in a frame one behind the other, propelled by pedals and steered with handlebars attached to the front wheel.',
        },
        {
          word: 'bike',
          definition:
            'A vehicle with two wheels that you ride by pushing its pedals with your feet.',
        },
        {
          word: 'cycle',
          definition: 'A bicycle or tricycle.',
        },
      ],
      ttn: [
        {
          word: 'evaporate',
          definition: 'change from a liquid or solid state to a vapor',
        },
        {
          word: 'dryness',
          definition: 'lack of moisture or humidity',
        },
        {
          word: 'arid',
          definition: 'very dry, especially having little rainfall',
        },
      ],
    },
    {
      word: 'blizzard',
      definition: 'A severe snowstorm with high winds and low visibility.',
      topicId: 2,
      id: 80,
      pronunciation: '/ˈblɪ.zəd/',
      image_link: [
        'https://i.pinimg.com/236x/ed/50/2a/ed502a3df1ff18f3c956fc6c6023f8f5.jpg',
        'https://i.pinimg.com/236x/ff/19/b3/ff19b38d744bf87733e55dbee30b0be3.jpg',
        'https://i.pinimg.com/236x/04/66/7b/04667bf7768384ce6b849307393a86b0.jpg',
        'https://i.pinimg.com/236x/b2/3e/1d/b23e1d6425871a3ab1a9826b22db9aff.jpg',
      ],
      examples: [
        'Blizzard is in the sentence.',
        'This sentence contains the word blizzard.',
        'We can use the word blizzard here.',
        'Here is an example of the word blizzard.',
      ],
      tdn: [
        {
          word: 'motorcycle',
          definition:
            'A two-wheeled vehicle that is powered by a motor and has no pedals.',
        },
        {
          word: 'bike',
          definition:
            'A vehicle with two wheels that you ride by pushing its pedals with your feet or powered by a motor.',
        },
        {
          word: 'scooter',
          definition:
            'A light two-wheeled open motor vehicle on which the driver sits over an enclosed engine with legs together and feet resting on a floorboard.',
        },
      ],
      ttn: [
        {
          word: 'calm',
          definition: 'Not windy; peaceful and quiet.',
        },
        {
          word: 'breeze',
          definition: 'A light or gentle wind.',
        },
        {
          word: 'zephyr',
          definition: 'A soft, gentle breeze.',
        },
      ],
    },
    {
      word: 'mist',
      definition:
        "A cloud of tiny water droplets suspended in the atmosphere at or near the earth's surface that limits visibility (but to a lesser extent than fog).",
      topicId: 2,
      id: 81,
      pronunciation: '/mɪst/',
      image_link: [
        'https://i.pinimg.com/236x/3d/16/03/3d160329981acf0f68dfa8e0cd4f1c46.jpg',
        'https://i.pinimg.com/236x/ee/27/1e/ee271e65f8674eadb85d614633927c60.jpg',
        'https://i.pinimg.com/236x/45/f9/a7/45f9a785915c5b21974bcad7f18731f1.jpg',
        'https://i.pinimg.com/236x/f2/75/99/f2759920db05d732bea198c1bce03062.jpg',
      ],
      examples: [
        'Mist is in the sentence.',
        'This sentence contains the word mist.',
        'We can use the word mist here.',
        'Here is an example of the word mist.',
      ],
      tdn: [
        {
          word: 'truck',
          definition:
            'A large, heavy motor vehicle for transporting goods or troops.',
        },
        {
          word: 'lorry',
          definition:
            'A large, heavy motor vehicle for transporting goods or troops.',
        },
        {
          word: 'freight',
          definition:
            'Goods transported in bulk by truck, train, ship, or aircraft.',
        },
      ],
      ttn: [
        {
          word: 'clear',
          definition: 'Free from mist; unobstructed visibility.',
        },
        {
          word: 'bright',
          definition: 'Full of light; not obscured by mist.',
        },
        {
          word: 'visible',
          definition: 'Able to be seen clearly; not hidden by mist.',
        },
      ],
    },
    {
      word: 'gale',
      definition: 'A very strong wind.',
      topicId: 2,
      id: 82,
      pronunciation: '/ɡeɪl/',
      image_link: [
        'https://i.pinimg.com/236x/83/cd/3f/83cd3f03963c7508fde8f63bf72f10f9.jpg',
        'https://i.pinimg.com/236x/bd/c4/2d/bdc42dd94a98946c2315965efe864b98.jpg',
        'https://i.pinimg.com/236x/45/dd/85/45dd859a3e374763619631f1329f71c9.jpg',
        'https://i.pinimg.com/236x/81/26/1f/81261f5eaa425d8fb4fb08701ef14dbe.jpg',
      ],
      examples: [
        'Gale is in the sentence.',
        'This sentence contains the word gale.',
        'We can use the word gale here.',
        'Here is an example of the word gale.',
      ],
      tdn: [
        {
          word: 'ship',
          definition: 'A large boat for transporting people or goods by sea.',
        },
        {
          word: 'vessel',
          definition: 'A ship or large boat.',
        },
        {
          word: 'boat',
          definition:
            'A small vessel propelled on water by oars, sails, or an engine.',
        },
      ],
      ttn: [
        {
          word: 'calm',
          definition: 'not windy; peaceful',
        },
        {
          word: 'still',
          definition: 'not moving or blowing; calm',
        },
        {
          word: 'gentle',
          definition: 'mild or moderate in force or intensity',
        },
      ],
    },
    {
      word: 'overcast',
      definition: 'Covered with clouds; not sunny.',
      topicId: 2,
      id: 83,
      pronunciation: '/ˈoʊ.vɚ.kæst/',
      image_link: [
        'https://i.pinimg.com/236x/5c/65/54/5c65549a2ff33e35fd75a5c9cc4c359e.jpg',
        'https://i.pinimg.com/236x/ab/b3/20/abb320f3e58b366719ff4dcbf6f31cbe.jpg',
        'https://i.pinimg.com/236x/32/9a/19/329a19defa9aa3d1c89cf312c160ada7.jpg',
        'https://i.pinimg.com/236x/a8/8f/26/a88f269cbae556b95aa9df16a38e2ece.jpg',
      ],
      examples: [
        'Overcast is in the sentence.',
        'This sentence contains the word overcast.',
        'We can use the word overcast here.',
        'Here is an example of the word overcast.',
      ],
      tdn: [
        {
          word: 'boat',
          definition:
            'A small vessel propelled on water by oars, sails, or an engine.',
        },
        {
          word: 'dinghy',
          definition:
            'A small boat for recreation or racing, especially an open boat with a mast and sails.',
        },
        {
          word: 'raft',
          definition:
            'A flat structure, typically made of timber, used as a boat or floating platform.',
        },
      ],
      ttn: [
        {
          word: 'clear',
          definition: 'Free from clouds, bright, and sunny.',
        },
        {
          word: 'sunny',
          definition: 'Having bright sunlight; not covered by clouds.',
        },
        {
          word: 'cloudless',
          definition: 'Completely without clouds; clear.',
        },
      ],
    },
    {
      word: 'heatwave',
      definition: 'A prolonged period of abnormally hot weather.',
      topicId: 2,
      id: 84,
      pronunciation: '/ˈhiːtˌweɪv/',
      image_link: [
        'https://i.pinimg.com/236x/b3/da/1d/b3da1df1c2dbdfadac11d7b6604be34e.jpg',
        'https://i.pinimg.com/236x/9c/9c/0e/9c9c0ecb1fada362ba849dba136b31fd.jpg',
        'https://i.pinimg.com/236x/63/6e/0e/636e0ee675a9478ab6f72157d542d829.jpg',
        'https://i.pinimg.com/236x/39/c0/30/39c03034a6e3dae7a6320353507833b3.jpg',
      ],
      examples: [
        'Heatwave is in the sentence.',
        'This sentence contains the word heatwave.',
        'We can use the word heatwave here.',
        'Here is an example of the word heatwave.',
      ],
      tdn: [
        {
          word: 'plane',
          definition:
            'A powered flying vehicle with fixed wings and a weight greater than that of the air it displaces.',
        },
        {
          word: 'aircraft',
          definition:
            'A vehicle capable of atmospheric flight due to interaction with the air, such as buoyancy or lift.',
        },
        {
          word: 'jet',
          definition: 'An aircraft powered by jet engines.',
        },
      ],
      ttn: [
        {
          word: 'cold snap',
          definition: 'A sudden short period of cold weather.',
        },
        {
          word: 'chill',
          definition: 'A moderate but penetrating coldness.',
        },
        {
          word: 'freeze',
          definition: 'To become hardened into ice or become extremely cold.',
        },
      ],
    },
    {
      word: 'frost',
      definition:
        'A thin layer of ice on a solid surface, which forms from the condensation and freezing of moisture in the air.',
      topicId: 2,
      id: 85,
      pronunciation: '/fɹɑst/',
      image_link: [
        'https://i.pinimg.com/236x/ca/7d/5d/ca7d5de03e4e552c9f5920ad64cbe7e9.jpg',
        'https://i.pinimg.com/236x/97/e6/82/97e6820876b3b2b94034f9d96f0ed4dd.jpg',
        'https://i.pinimg.com/236x/e0/07/b3/e007b35117c1e9d3ec0aede0420b29ca.jpg',
        'https://i.pinimg.com/236x/a8/48/30/a848302ef726a9a58e7e26c45505126d.jpg',
      ],
      examples: [
        'Frost is in the sentence.',
        'This sentence contains the word frost.',
        'We can use the word frost here.',
        'Here is an example of the word frost.',
      ],
      tdn: [
        {
          word: 'helicopter',
          definition:
            'A type of aircraft which derives both lift and propulsion from one or two sets of horizontally revolving rotors.',
        },
        {
          word: 'chopper',
          definition: 'A slang term for a helicopter.',
        },
        {
          word: 'copter',
          definition: 'A short form of helicopter.',
        },
      ],
      ttn: [
        {
          word: 'thaw',
          definition: 'The process of ice or snow melting',
        },
        {
          word: 'melt',
          definition: 'To change from a solid to a liquid state under heat',
        },
        {
          word: 'defrost',
          definition: 'To remove ice or frost from a surface',
        },
      ],
    },
    {
      word: 'monsoon',
      definition:
        'A seasonal prevailing wind in the region of South and Southeast Asia, blowing from the southwest between May and September and bringing rain (the wet monsoon), or from the northeast between October and April (the dry monsoon).',
      topicId: 2,
      id: 86,
      pronunciation: '/mɒnˈsuːn/',
      image_link: [
        'https://i.pinimg.com/236x/f8/81/fe/f881feaafcc4af352ee9e49f9426bf02.jpg',
        'https://i.pinimg.com/236x/dd/fb/81/ddfb8194ff764f1798ccefe0d5e8bad7.jpg',
        'https://i.pinimg.com/236x/4a/dd/89/4add894f147d5032bb87692918ff0652.jpg',
        'https://i.pinimg.com/236x/d7/56/c4/d756c4ddcbf7290585e87dfe70a58bf4.jpg',
      ],
      examples: [
        'Monsoon is in the sentence.',
        'This sentence contains the word monsoon.',
        'We can use the word monsoon here.',
        'Here is an example of the word monsoon.',
      ],
      tdn: [
        {
          word: 'bus',
          definition:
            'A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare.',
        },
        {
          word: 'coach',
          definition:
            'A comfortably equipped single-decker bus used for longer journeys.',
        },
        {
          word: 'shuttle',
          definition:
            'A form of transportation that travels regularly between two places.',
        },
      ],
      ttn: [
        {
          word: 'dry season',
          definition:
            'A period of the year characterized by minimal rainfall, opposite to the wet monsoon.',
        },
        {
          word: 'calm',
          definition:
            'Lack of significant wind or precipitation, contrasting with the strong winds of the monsoon.',
        },
        {
          word: 'arid',
          definition:
            'Describing regions with low rainfall, particularly contrasting with the wet monsoon periods.',
        },
      ],
    },
    {
      word: 'sleet',
      definition:
        'A form of precipitation consisting of ice pellets, often mixed with rain or snow.',
      topicId: 2,
      id: 87,
      pronunciation: '/sliːt/',
      image_link: [
        'https://i.pinimg.com/236x/d8/f2/f0/d8f2f04d4f6bfb3262594f95f4551634.jpg',
        'https://i.pinimg.com/236x/b8/f2/3d/b8f23d7e000417883e508d6945e9be09.jpg',
        'https://i.pinimg.com/236x/2a/6c/d4/2a6cd4270d4d4e6568c39469066cf6ae.jpg',
        'https://i.pinimg.com/236x/39/5b/21/395b2196e9c7c0ef3490aae2111df53a.jpg',
      ],
      examples: [
        'Sleet is in the sentence.',
        'This sentence contains the word sleet.',
        'We can use the word sleet here.',
        'Here is an example of the word sleet.',
      ],
      tdn: [
        {
          word: 'subway',
          definition: 'An underground electric railroad.',
        },
        {
          word: 'metro',
          definition:
            'An underground railway system in a city, especially in Europe.',
        },
        {
          word: 'tube',
          definition: 'A British term for the subway.',
        },
      ],
      ttn: [
        {
          word: 'clear',
          definition: 'Free from cloudiness, obscurity, or haze.',
        },
        {
          word: 'rain',
          definition:
            'Water drops condensed from atmospheric vapor and falling in drops.',
        },
        {
          word: 'hail',
          definition:
            'Pellets of frozen rain that fall in showers from cumulonimbus clouds.',
        },
      ],
    },
    {
      word: 'elephant',
      definition:
        'A large herbivorous mammal with a trunk, long ears, and tusks.',
      topicId: 3,
      id: 88,
      pronunciation: '/ˈɛləfənt/',
      image_link: [
        'https://i.pinimg.com/236x/8c/f2/55/8cf255a30e17347bd0b9c9f3d0c58bf2.jpg',
        'https://i.pinimg.com/236x/2e/c0/77/2ec0773a1fcd847a5bd258ea4bba668e.jpg',
        'https://i.pinimg.com/236x/8c/1b/d8/8c1bd8f1c0a5fc9b60957d1c0f157674.jpg',
        'https://i.pinimg.com/236x/65/2f/50/652f50b01b521a932cdb6b1d477f7fcc.jpg',
      ],
      examples: [
        'Elephant is in the sentence.',
        'This sentence contains the word elephant.',
        'We can use the word elephant here.',
        'Here is an example of the word elephant.',
      ],
      tdn: [
        {
          word: 'tram',
          definition:
            'A rail vehicle that runs on tracks along public urban streets and also sometimes on separate rights of way.',
        },
        {
          word: 'trolley',
          definition:
            'A wheeled vehicle that runs on rails and is propelled by electricity.',
        },
        {
          word: 'streetcar',
          definition:
            'A public vehicle running regularly along certain streets, usually on rails.',
        },
      ],
      ttn: [
        {
          word: 'mouse',
          definition:
            'A small rodent typically having a pointed snout, small rounded ears, and a long naked or almost hairless tail.',
        },
        {
          word: 'ant',
          definition:
            'A small insect typically having a sting and living in a complex social colony with one or more breeding queens.',
        },
        {
          word: 'sparrow',
          definition:
            'A small bird with brown, gray, or white plumage and a short bill.',
        },
      ],
    },
    {
      word: 'tiger',
      definition:
        'A large predatory feline mammal, native to Asia, with a coat of reddish-orange with dark stripes.',
      topicId: 3,
      id: 89,
      pronunciation: '/ˈtaɪɡə/',
      image_link: [
        'https://i.pinimg.com/236x/f2/f7/47/f2f7476029a17db0b271362de16996af.jpg',
        'https://i.pinimg.com/236x/5f/3b/4d/5f3b4d18e4c8b1ca2d05bce43706072f.jpg',
        'https://i.pinimg.com/236x/6a/1c/05/6a1c0509ba8bc2b27b1ac464a950ce4d.jpg',
        'https://i.pinimg.com/236x/fb/dd/d2/fbddd2d54736910f152c1081d5ea8fb3.jpg',
      ],
      examples: [
        'Tiger is in the sentence.',
        'This sentence contains the word tiger.',
        'We can use the word tiger here.',
        'Here is an example of the word tiger.',
      ],
      tdn: [
        {
          word: 'ferry',
          definition:
            'A boat or ship for conveying passengers and goods, especially over a relatively short distance and as a regular service.',
        },
        {
          word: 'boat',
          definition:
            'A small vessel propelled on water by oars, sails, or an engine.',
        },
        {
          word: 'vessel',
          definition: 'A ship or large boat.',
        },
      ],
      ttn: [
        {
          word: 'mouse',
          definition:
            'A small rodent mammal that typically has a pointed snout, small rounded ears, and a long naked or almost hairless tail.',
        },
        {
          word: 'rabbit',
          definition:
            'A small, burrowing mammal with long ears, long hind legs, and a short tail.',
        },
        {
          word: 'canary',
          definition:
            'A small songbird of the finch family, typically yellow or yellow-green in color.',
        },
      ],
    },
    {
      word: 'penguin',
      definition:
        'A flightless bird, native to the colder regions of the southern hemisphere, with black upper parts and white underparts.',
      topicId: 3,
      id: 90,
      pronunciation: '/ˈpɛŋɡwɪn/',
      image_link: [
        'https://i.pinimg.com/236x/a4/c4/0f/a4c40fb085c3b43964bb0941c4de6af4.jpg',
        'https://i.pinimg.com/236x/f9/de/54/f9de5496498decd51b622373d044a9da.jpg',
        'https://i.pinimg.com/236x/63/99/4f/63994fb744bbbe6ec5d11ac281184b9c.jpg',
        'https://i.pinimg.com/236x/9a/75/6b/9a756b72fc2b503491b3f993b0fcd7b3.jpg',
      ],
      examples: [
        'Penguin is in the sentence.',
        'This sentence contains the word penguin.',
        'We can use the word penguin here.',
        'Here is an example of the word penguin.',
      ],
      tdn: [
        {
          word: 'spaceship',
          definition: 'A spacecraft, especially one controlled by a crew.',
        },
        {
          word: 'spacecraft',
          definition: 'A vehicle used for traveling in space.',
        },
        {
          word: 'rocket',
          definition:
            'A spacecraft, aircraft, or vehicle that obtains thrust from a rocket engine.',
        },
      ],
      ttn: [
        {
          word: 'eagle',
          definition:
            'A large bird of prey with a massive hooked bill and long broad wings, known for its powerful flight and keen sight.',
        },
        {
          word: 'parrot',
          definition:
            'A bird, often colorful, that can mimic sounds and is known for its ability to fly, found in warmer regions.',
        },
        {
          word: 'hummingbird',
          definition:
            'A very small bird known for its ability to hover in mid-air by rapidly flapping its wings, native to the Americas and thriving in warm climates.',
        },
      ],
    },
    {
      word: 'giraffe',
      definition:
        'A tall African mammal with a very long neck and forelegs, having a coat patterned with brown patches separated by lighter lines.',
      topicId: 3,
      id: 91,
      pronunciation: '/dʒɪˈɹɑːf/',
      image_link: [
        'https://i.pinimg.com/236x/99/36/9e/99369e78cab5258468a5d5337bd43ccd.jpg',
        'https://i.pinimg.com/236x/21/a7/8e/21a78ee8b3c3940bafa81a4e6dc6a4f3.jpg',
        'https://i.pinimg.com/236x/fd/63/e8/fd63e805e89709958dbdfd1f03b5b9b2.jpg',
        'https://i.pinimg.com/236x/16/8d/bc/168dbc65c9e4db9488474deb98289469.jpg',
      ],
      examples: [
        'Giraffe is in the sentence.',
        'This sentence contains the word giraffe.',
        'We can use the word giraffe here.',
        'Here is an example of the word giraffe.',
      ],
      tdn: [
        {
          word: 'planet',
          definition:
            'A celestial body moving in an elliptical orbit around a star.',
        },
        {
          word: 'world',
          definition:
            'The earth, together with all of its countries, peoples, and natural features.',
        },
        {
          word: 'globe',
          definition: 'The earth.',
        },
      ],
      ttn: [
        {
          word: 'dwarf',
          definition:
            'An extremely small person, animal, or plant; significantly smaller than the usual size.',
        },
        {
          word: 'short',
          definition: 'Of little height or length; not tall or long.',
        },
        {
          word: 'tiny',
          definition: 'Very small in size or amount; minuscule.',
        },
      ],
    },
    {
      word: 'zebra',
      definition:
        'An African wild horse with black-and-white stripes and an erect mane.',
      topicId: 3,
      id: 92,
      pronunciation: '/ˈziːbɹə/',
      image_link: [
        'https://i.pinimg.com/236x/6f/56/55/6f56557ab4ca9cb08bc1dcdf64e3e4d7.jpg',
        'https://i.pinimg.com/236x/cf/c0/ed/cfc0ed6f82e6d89ecb027dfa3482c06c.jpg',
        'https://i.pinimg.com/236x/0c/3a/f5/0c3af5949f5053c5285e00bfeb1ef446.jpg',
        'https://i.pinimg.com/236x/87/92/ff/8792ffa946fe265495b31ea700fa6909.jpg',
      ],
      examples: [
        'Zebra is in the sentence.',
        'This sentence contains the word zebra.',
        'We can use the word zebra here.',
        'Here is an example of the word zebra.',
      ],
      tdn: [
        {
          word: 'star',
          definition:
            'A fixed luminous point in the night sky that is a large, remote incandescent body like the sun.',
        },
        {
          word: 'sun',
          definition: 'The star around which the earth orbits.',
        },
        {
          word: 'luminary',
          definition: 'A natural light-giving body, especially a star.',
        },
      ],
      ttn: [
        {
          word: 'domesticated',
          definition:
            'Tamed and kept as a pet or on a farm, typically referring to animals that live in close association with humans, unlike the wild zebra.',
        },
        {
          word: 'monochrome',
          definition:
            'Consisting of or displaying images in black and white or in varying tones of only one color, in contrast to the distinct black-and-white stripes of a zebra.',
        },
        {
          word: 'stripeless',
          definition:
            'Lacking stripes, referring to animals or objects that do not have the characteristic black-and-white striped pattern of a zebra.',
        },
      ],
    },
    {
      word: 'kangaroo',
      definition:
        'A large plant-eating marsupial with powerful hind legs for leaping, native to Australia.',
      topicId: 3,
      id: 93,
      pronunciation: '/kaŋ.ɡə.ˈɹuː/',
      image_link: [
        'https://i.pinimg.com/236x/c9/3e/d5/c93ed53ca3e60498c2e92c54fffcebe4.jpg',
        'https://i.pinimg.com/236x/8f/0a/95/8f0a958ec40c91dfdef6e1d0ea3f256d.jpg',
        'https://i.pinimg.com/236x/26/56/98/265698e45c965ded46819c07a2a8ed3c.jpg',
        'https://i.pinimg.com/236x/8d/f2/06/8df206dafc9f5c13d3e641ea20a5e433.jpg',
      ],
      examples: [
        'Kangaroo is in the sentence.',
        'This sentence contains the word kangaroo.',
        'We can use the word kangaroo here.',
        'Here is an example of the word kangaroo.',
      ],
      tdn: [
        {
          word: 'galaxy',
          definition:
            'A system of millions or billions of stars, together with gas and dust, held together by gravitational attraction.',
        },
        {
          word: 'milky way',
          definition: 'The galaxy that contains our Solar System.',
        },
        {
          word: 'nebula',
          definition:
            'A cloud of gas and dust in outer space, visible in the night sky either as an indistinct bright patch or as a dark silhouette against other luminous matter.',
        },
      ],
      ttn: [
        {
          word: 'predator',
          definition:
            'An animal that naturally preys on others, often hunting and eating other animals.',
        },
        {
          word: 'reptile',
          definition:
            'A cold-blooded vertebrate of a class that includes snakes, lizards, crocodiles, turtles, and tortoises.',
        },
        {
          word: 'bird',
          definition:
            'A warm-blooded egg-laying vertebrate distinguished by the possession of feathers, wings, and a beak and typically by being able to fly.',
        },
      ],
    },
    {
      word: 'rhinoceros',
      definition:
        'A large, thick-skinned mammal with one or two upright horns on the snout, native to Africa and southern Asia.',
      topicId: 3,
      id: 94,
      pronunciation: '/ɹaɪˈnɒsəɹəs/',
      image_link: [
        'https://i.pinimg.com/236x/a5/65/eb/a565eb0c7e133eee30c30a4f613e18ce.jpg',
        'https://i.pinimg.com/236x/18/27/81/182781c1c3a1f71903bf0e4801ee752a.jpg',
        'https://i.pinimg.com/236x/1f/d8/40/1fd840fe1ea3b116cce1bff1459933c6.jpg',
        'https://i.pinimg.com/236x/e5/9b/83/e59b834457e39fa733b17fbbd26c8f19.jpg',
      ],
      examples: [
        'Rhinoceros is in the sentence.',
        'This sentence contains the word rhinoceros.',
        'We can use the word rhinoceros here.',
        'Here is an example of the word rhinoceros.',
      ],
      tdn: [
        {
          word: 'comet',
          definition:
            'A celestial object consisting of a nucleus of ice and dust and, when near the sun, a “tail” of gas and dust particles pointing away from the sun.',
        },
        {
          word: 'asteroid',
          definition: 'A small rocky body orbiting the sun.',
        },
        {
          word: 'meteoroid',
          definition:
            "A small body moving in the solar system that would become a meteor if it entered the earth's atmosphere.",
        },
      ],
      ttn: [
        {
          word: 'bird',
          definition:
            'A warm-blooded egg-laying vertebrate characterized by feathers, a beak, and typically the ability to fly.',
        },
        {
          word: 'insect',
          definition:
            'A small arthropod animal that has six legs and generally one or two pairs of wings.',
        },
        {
          word: 'fish',
          definition:
            'A cold-blooded vertebrate animal that lives in water, has gills, and typically has fins and scales.',
        },
      ],
    },
    {
      word: 'lion',
      definition:
        'A large tawny-colored cat that lives in prides, found in Africa and northwestern India.',
      topicId: 3,
      id: 95,
      pronunciation: '/ˈlaɪən/',
      image_link: [
        'https://i.pinimg.com/236x/73/44/49/73444949fb8637d008e1672c580914a1.jpg',
        'https://i.pinimg.com/236x/51/ce/6a/51ce6a3f68585bb4bf3963a09ea7c323.jpg',
        'https://i.pinimg.com/236x/b7/8d/08/b78d087c3d1429e1619352969000a456.jpg',
        'https://i.pinimg.com/236x/02/b7/d3/02b7d33ea616c46706e84fdc51ca7743.jpg',
      ],
      examples: [
        'The lion roared loudly in the savannah.',
        'A pride of lions rested under the shade of a tree.',
        'The lion is often called the king of the jungle.',
        'Lions are known for their majestic manes.',
      ],
      tdn: [
        {
          word: 'moon',
          definition:
            'The natural satellite of the earth, visible (chiefly at night) by reflected light from the sun.',
        },
        {
          word: 'satellite',
          definition: 'A celestial body orbiting the earth or another planet.',
        },
        {
          word: 'luna',
          definition: 'The Latin name for the moon.',
        },
      ],
      ttn: [
        {
          word: 'mouse',
          definition:
            'A small rodent with a pointed snout, small rounded ears, and a long tail.',
        },
        {
          word: 'rabbit',
          definition:
            'A small, burrowing, herbivorous mammal with long ears, long hind legs, and a short fluffy tail.',
        },
        {
          word: 'deer',
          definition:
            'A hoofed grazing or browsing animal, typically with branched bony antlers that are shed annually and typically borne only by the male.',
        },
      ],
    },
    {
      word: 'leopard',
      definition:
        'A large solitary cat that has a fawn or brown coat with black spots, native to the forests of Africa and southern Asia.',
      topicId: 3,
      id: 96,
      pronunciation: '/ˈlɛpəd/',
      image_link: [
        'https://i.pinimg.com/236x/80/27/b7/8027b71068b4f342302c8339e3396d79.jpg',
        'https://i.pinimg.com/236x/74/8f/d2/748fd25d9a92e4d470d075f99fcce6ff.jpg',
        'https://i.pinimg.com/236x/cb/fe/f4/cbfef43d82fa6292a65289f40594dd46.jpg',
        'https://i.pinimg.com/236x/c8/ab/e3/c8abe35a14493db44720113a51212aca.jpg',
      ],
      examples: [
        'Leopard is in the sentence.',
        'This sentence contains the word leopard.',
        'We can use the word leopard here.',
        'Here is an example of the word leopard.',
      ],
      tdn: [
        {
          word: 'asteroid',
          definition: 'A small rocky body orbiting the sun.',
        },
        {
          word: 'planetoid',
          definition: 'A small celestial body resembling a planet.',
        },
        {
          word: 'minor planet',
          definition:
            'A celestial body that orbits the sun and is smaller than a planet but larger than a meteoroid.',
        },
      ],
      ttn: [
        {
          word: 'prey',
          definition:
            'An animal that is hunted and killed by another for food.',
        },
        {
          word: 'herbivore',
          definition: 'An animal that feeds on plants.',
        },
        {
          word: 'domesticated',
          definition: 'An animal that is tamed and kept as a pet or on a farm.',
        },
      ],
    },
    {
      word: 'wolf',
      definition:
        'A wild carnivorous mammal which is the largest member of the dog family, living and hunting in packs.',
      topicId: 3,
      id: 97,
      pronunciation: '/wʊlf/',
      image_link: [
        'https://i.pinimg.com/236x/ac/25/19/ac2519b7348d669f2a81237136eb32d0.jpg',
        'https://i.pinimg.com/236x/b4/a0/1c/b4a01c8b474de8e4799e89aaa57d0c7c.jpg',
        'https://i.pinimg.com/236x/62/8d/84/628d847adbdef259d2964eb0fa512648.jpg',
        'https://i.pinimg.com/236x/4f/8e/56/4f8e564933a455b5a667723de6e6598a.jpg',
      ],
      examples: [
        'Wolf is in the sentence.',
        'This sentence contains the word wolf.',
        'We can use the word wolf here.',
        'Here is an example of the word wolf.',
      ],
      tdn: [
        {
          word: 'black hole',
          definition:
            'A region of space having a gravitational field so intense that no matter or radiation can escape.',
        },
        {
          word: 'singularity',
          definition:
            'A point in space where the density of matter and the gravitational field are infinite.',
        },
        {
          word: 'event horizon',
          definition:
            'The boundary around a black hole beyond which no light or other radiation can escape.',
        },
      ],
      ttn: [
        {
          word: 'domestic',
          definition:
            'relating to or suited for use in the home or everyday life; tame',
        },
        {
          word: 'dog',
          definition:
            'a domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking, howling, or whining voice',
        },
        {
          word: 'tame',
          definition: 'not dangerous or frightened of people; domesticated',
        },
      ],
    },
    {
      word: 'bear',
      definition:
        'A large heavy mammal with thick fur and a very short tail, found chiefly in the forests of the Northern Hemisphere.',
      topicId: 3,
      id: 98,
      pronunciation: '/bɛə(ɹ)/',
      image_link: [
        'https://i.pinimg.com/236x/7a/51/b9/7a51b95ffc4d7cbac381c30cc5fbe077.jpg',
        'https://i.pinimg.com/236x/6e/f3/fe/6ef3feb207e300a827785cd1b9c32839.jpg',
        'https://i.pinimg.com/236x/38/a9/9e/38a99ef27007cfae409d65c0b935c9d8.jpg',
        'https://i.pinimg.com/236x/fa/7e/62/fa7e626b38dd4e33baa77453b1ee3132.jpg',
      ],
      examples: [
        'Bear is in the sentence.',
        'This sentence contains the word bear.',
        'We can use the word bear here.',
        'Here is an example of the word bear.',
      ],
      tdn: [
        {
          word: 'nebula',
          definition:
            'A cloud of gas and dust in outer space, visible in the night sky either as an indistinct bright patch or as a dark silhouette against other luminous matter.',
        },
        {
          word: 'cloud',
          definition:
            'A visible mass of condensed watery vapor floating in the atmosphere, typically high above the ground.',
        },
        {
          word: 'mist',
          definition:
            "A cloud of tiny water droplets suspended in the atmosphere at or near the earth's surface.",
        },
      ],
      ttn: [
        {
          word: 'small',
          definition: 'of a size that is less than normal or usual',
        },
        {
          word: 'light',
          definition: 'having little weight; not heavy',
        },
        {
          word: 'thin',
          definition: 'having little thickness or depth',
        },
      ],
    },
    {
      word: 'fox',
      definition:
        'A carnivorous mammal of the dog family with a pointed muzzle and bushy tail, proverbially noted for its cunning.',
      topicId: 3,
      id: 99,
      pronunciation: '/fɒks/',
      image_link: [
        'https://i.pinimg.com/236x/b5/36/5b/b5365b6ffec9d785e29584d489904776.jpg',
        'https://i.pinimg.com/236x/5d/59/43/5d59430f5d17f71dc244eba8a01462b9.jpg',
        'https://i.pinimg.com/236x/7d/42/e0/7d42e0e49879f662ea93b6ae14d1d068.jpg',
        'https://i.pinimg.com/236x/2e/67/7d/2e677d46f25aeb321da4469d7e0c4a7f.jpg',
      ],
      examples: [
        'Fox is in the sentence.',
        'This sentence contains the word fox.',
        'We can use the word fox here.',
        'Here is an example of the word fox.',
      ],
      tdn: [
        {
          word: 'universe',
          definition:
            'All existing matter and space considered as a whole; the cosmos.',
        },
        {
          word: 'cosmos',
          definition: 'The universe seen as a well-ordered whole.',
        },
        {
          word: 'macrocosm',
          definition:
            'The whole of a complex structure, especially the world or the universe, contrasted with a small or representative part of it.',
        },
      ],
      ttn: [
        {
          word: 'innocent',
          definition:
            'not guilty of a crime or offense; not causing harm or damage',
        },
        {
          word: 'naive',
          definition:
            'lacking experience, wisdom, or judgment; innocent and unsuspecting',
        },
        {
          word: 'gullible',
          definition: 'easily deceived or cheated',
        },
      ],
    },
    {
      word: 'owl',
      definition:
        'A nocturnal bird of prey with large forward-facing eyes surrounded by facial disks, a hooked beak, and typically a loud call.',
      topicId: 3,
      id: 100,
      pronunciation: '/aʊl/',
      image_link: [
        'https://i.pinimg.com/236x/76/80/d4/7680d4af58425ee8cfb31874b7b734d3.jpg',
        'https://i.pinimg.com/236x/95/5f/4e/955f4e92b6721997bf7f6b04c14d7d2b.jpg',
        'https://i.pinimg.com/236x/e9/f5/29/e9f52940be4ade51f8cc0c1e50cb8d0d.jpg',
        'https://i.pinimg.com/236x/6e/44/4e/6e444e2abee60b62c6bb22e6710282e4.jpg',
      ],
      examples: [
        'Owl is in the sentence.',
        'This sentence contains the word owl.',
        'We can use the word owl here.',
        'Here is an example of the word owl.',
      ],
      tdn: [
        {
          word: 'gravity',
          definition:
            'The force that attracts a body toward the center of the earth, or toward any other physical body having mass.',
        },
        {
          word: 'gravitation',
          definition:
            'The force of attraction between all masses in the universe.',
        },
        {
          word: 'weight',
          definition: 'The force exerted on a body by gravity.',
        },
      ],
      ttn: [
        {
          word: 'diurnal',
          definition: 'active during the day',
        },
        {
          word: 'daytime',
          definition: 'occurring during the day',
        },
        {
          word: 'daylight',
          definition: 'the natural light of the day',
        },
      ],
    },
    {
      word: 'white',
      definition:
        'Is a color that is the result of the reflection or emission of all colors.',
      topicId: 4,
      id: 101,
      pronunciation: '/waɪt/',
      image_link: [
        'https://i.pinimg.com/236x/00/77/80/00778091f156323e85e4506bcc6b2cf2.jpg',
        'https://i.pinimg.com/236x/04/f3/5c/04f35c1dec569b4f4414355355ee9f72.jpg',
        'https://i.pinimg.com/236x/f0/0d/62/f00d620f570b474b68413e0a23a6beed.jpg',
        'https://i.pinimg.com/236x/03/9e/6c/039e6c65077fcf7073cd1cbb7792776b.jpg',
      ],
      examples: [
        'White is in the sentence.',
        'This sentence contains the word white.',
        'We can use the word white here.',
        'Here is an example of the word white.',
      ],
      tdn: [
        {
          word: 'orbit',
          definition:
            'The curved path of a celestial object or spacecraft around a star, planet, or moon, especially a periodic elliptical revolution.',
        },
        {
          word: 'trajectory',
          definition:
            'The path followed by a projectile flying or an object moving under the action of given forces.',
        },
        {
          word: 'path',
          definition: 'A course along which someone or something moves.',
        },
      ],
      ttn: [
        {
          word: 'black',
          definition: 'Is the absence of light and color.',
        },
        {
          word: 'dark',
          definition: 'Lacking brightness or light.',
        },
        {
          word: 'colored',
          definition: 'Having hue or color other than white or black.',
        },
      ],
    },
    {
      word: 'red',
      definition:
        'Is a color at the end of the visible spectrum of light, next to orange and opposite violet.',
      topicId: 4,
      id: 102,
      pronunciation: '/ɹɛd/',
      image_link: [
        'https://i.pinimg.com/236x/da/b4/71/dab471547abd75e78df337915f11eca6.jpg',
        'https://i.pinimg.com/236x/b1/73/ea/b173ea07791af67f28f91fbf2a30bf6b.jpg',
        'https://i.pinimg.com/236x/5a/a3/91/5aa3914b7596077c092c6117b529f3b9.jpg',
        'https://i.pinimg.com/236x/fb/8c/01/fb8c01dd7a45ff20916ad4541f962c70.jpg',
      ],
      examples: [
        'The apple was bright red and shiny.',
        'She wore a red dress to the party.',
        'Red roses are often given as a symbol of love.',
        'The sunset painted the sky in shades of red.',
      ],
      tdn: [
        {
          word: 'telescope',
          definition:
            'An optical instrument designed to make distant objects appear nearer, containing an arrangement of lenses or of curved mirrors and lenses, by which rays of light are collected and focused and the resulting image magnified.',
        },
        {
          word: 'scope',
          definition: 'A device used to magnify distant objects.',
        },
        {
          word: 'binoculars',
          definition:
            'An optical instrument with a lens for each eye, used for viewing distant objects.',
        },
      ],
      ttn: [
        {
          word: 'blue',
          definition:
            'Is a color at the end of the visible spectrum of light, next to green and opposite orange.',
        },
        {
          word: 'green',
          definition:
            'Is a color at the end of the visible spectrum of light, next to blue and opposite red.',
        },
        {
          word: 'yellow',
          definition:
            'Is a color at the end of the visible spectrum of light, next to green and opposite purple.',
        },
      ],
    },
    {
      word: 'blue',
      definition:
        'Is a color that is seen as part of the visible spectrum, between green and violet.',
      topicId: 4,
      id: 103,
      pronunciation: '/bluː/',
      image_link: [
        'https://i.pinimg.com/236x/6a/be/2a/6abe2a21ed08b17d116a9e4c0a7d1e41.jpg',
        'https://i.pinimg.com/236x/4d/e8/89/4de889a02803e22a3291cf31b5ed6843.jpg',
        'https://i.pinimg.com/236x/59/07/7a/59077a3f292e3ec17b1885c80e700265.jpg',
        'https://i.pinimg.com/236x/b5/e4/3d/b5e43ddf425c00ee58cdff46a2f0f33a.jpg',
      ],
      examples: [
        'The sky was a clear, bright blue.',
        'He wore a blue shirt to match his eyes.',
        'Blue is often associated with calmness and tranquility.',
        'The ocean appeared endless and blue.',
      ],
      tdn: [
        {
          word: 'spacesuit',
          definition:
            'A garment worn by astronauts in outer space, designed to keep them alive in the harsh environment of space.',
        },
        {
          word: 'pressure suit',
          definition:
            'A suit designed to protect the wearer from high or low pressure.',
        },
        {
          word: 'flight suit',
          definition:
            'A full-body garment worn while flying an aircraft, often by astronauts.',
        },
      ],
      ttn: [
        {
          word: 'red',
          definition:
            'Is a color that is seen as part of the visible spectrum, between orange and violet.',
        },
        {
          word: 'yellow',
          definition:
            'Is a color that is seen as part of the visible spectrum, between green and orange.',
        },
        {
          word: 'orange',
          definition:
            'Is a color that is seen as part of the visible spectrum, between red and yellow.',
        },
      ],
    },
    {
      word: 'green',
      definition: 'Is a color between blue and yellow in the spectrum.',
      topicId: 4,
      id: 104,
      pronunciation: '/ɡɹiːn/',
      image_link: [
        'https://i.pinimg.com/236x/b8/04/81/b80481838c5608682b14d405d2ab12be.jpg',
        'https://i.pinimg.com/236x/c9/06/08/c90608cd56f276fe37e0da68e43fe31a.jpg',
        'https://i.pinimg.com/236x/9a/57/5e/9a575efd97f994227aa6e938c794e563.jpg',
        'https://i.pinimg.com/236x/c8/56/da/c856dae22ae48b3be4eae1dc8cbf69c4.jpg',
      ],
      examples: [
        'The fields were lush and green after the rain.',
        'She has green eyes that sparkle in the sunlight.',
        'Green is the color most often associated with nature.',
        'They painted the walls of their house a soft green.',
      ],
      tdn: [
        {
          word: 'rover',
          definition:
            'A vehicle for exploring the surface of an extraterrestrial body (such as the moon and Mars).',
        },
        {
          word: 'explorer',
          definition:
            'A person who explores an unfamiliar area; an adventurer.',
        },
        {
          word: 'scout',
          definition:
            "A person sent out ahead of a main force to gather information about the enemy's position, strength, or movements.",
        },
      ],
      ttn: [
        {
          word: 'red',
          definition:
            'Is a primary color at the longer-wavelengths end of the spectrum.',
        },
        {
          word: 'yellow',
          definition: 'Is a color between green and orange in the spectrum.',
        },
        {
          word: 'blue',
          definition: 'Is a color between violet and green on the spectrum.',
        },
      ],
    },
    {
      word: 'yellow',
      definition: 'Is a color between green and orange in the spectrum.',
      topicId: 4,
      id: 105,
      pronunciation: '/jɛlə/',
      image_link: [
        'https://i.pinimg.com/236x/c4/6d/6b/c46d6b5f8b8bb1ae1defd9206a02aefc.jpg',
        'https://i.pinimg.com/236x/d6/f5/11/d6f5118b769faff48836573139ceaaa4.jpg',
        'https://i.pinimg.com/236x/27/99/b5/2799b528b67a625387b5edf7ed861636.jpg',
        'https://i.pinimg.com/236x/e3/a5/62/e3a562d50f81479b6388a4069b43cddc.jpg',
      ],
      examples: [
        'Yellow is in the sentence.',
        'This sentence contains the word yellow.',
        'We can use the word yellow here.',
        'Here is an example of the word yellow.',
      ],
      tdn: [
        {
          word: 'mission',
          definition:
            'An important assignment carried out for political, religious, or commercial purposes, typically involving travel.',
        },
        {
          word: 'expedition',
          definition:
            'A journey undertaken by a group of people with a particular purpose, especially that of exploration, research, or war.',
        },
        {
          word: 'quest',
          definition: 'A long or arduous search for something.',
        },
      ],
      ttn: [
        {
          word: 'blue',
          definition: 'Is a color between green and violet in the spectrum.',
        },
        {
          word: 'black',
          definition: 'Is the darkest color due to the absence of light.',
        },
        {
          word: 'white',
          definition:
            'Is the color of fresh snow or milk, due to the reflection of all visible light.',
        },
      ],
    },
    {
      word: 'orange',
      definition: 'Is a color between red and yellow in the spectrum.',
      topicId: 4,
      id: 106,
      pronunciation: '/ˈɔɹɪ̈nd͡ʒ/',
      image_link: [
        'https://i.pinimg.com/236x/7a/aa/a5/7aaaa545e00e8a434850e80b8910dd94.jpg',
        'https://i.pinimg.com/236x/b4/cb/5a/b4cb5a3c0c437cda70ec9b434da0519d.jpg',
        'https://i.pinimg.com/236x/6a/15/f1/6a15f1d69875464cc729ce86de6be5c8.jpg',
        'https://i.pinimg.com/236x/30/f2/85/30f2856aed9c8621a33d146e068a9866.jpg',
      ],
      examples: [
        'Orange is in the sentence.',
        'This sentence contains the word orange.',
        'We can use the word orange here.',
        'Here is an example of the word orange.',
      ],
      tdn: [
        {
          word: 'launch',
          definition:
            'To set in motion by pushing it or allowing it to roll into the water.',
        },
        {
          word: 'send off',
          definition: 'To cause someone to leave a place.',
        },
        {
          word: 'blast off',
          definition: 'To leave the ground and begin flight.',
        },
      ],
      ttn: [
        {
          word: 'purple',
          definition: 'A color formed by mixing red and blue.',
        },
        {
          word: 'green',
          definition: 'A color formed by mixing yellow and blue.',
        },
        {
          word: 'blue',
          definition:
            'A primary color on the spectrum, between green and violet.',
        },
      ],
    },
    {
      word: 'purple',
      definition: 'Is a color intermediate between red and blue.',
      topicId: 4,
      id: 107,
      pronunciation: '/ˈpɜː(ɹ).pəl/',
      image_link: [
        'https://i.pinimg.com/236x/3f/c7/21/3fc7215a989943d3c5ec2bc7b205ccb1.jpg',
        'https://i.pinimg.com/236x/b4/e6/aa/b4e6aad21af6d945a44b271edf4fdd10.jpg',
        'https://i.pinimg.com/236x/02/ff/1f/02ff1feafd330a5e3e7010554c8f0941.jpg',
        'https://i.pinimg.com/236x/f0/b7/d7/f0b7d748d1b0233f6d9e162e06435c3d.jpg',
      ],
      examples: [
        'Purple is in the sentence.',
        'This sentence contains the word purple.',
        'We can use the word purple here.',
        'Here is an example of the word purple.',
      ],
      tdn: [
        {
          word: 'landing',
          definition:
            'The act of returning to the ground or another surface after a flight or voyage.',
        },
        {
          word: 'touchdown',
          definition:
            "The moment at which an aircraft's wheels or part of a spacecraft make contact with the ground during landing.",
        },
        {
          word: 'arrival',
          definition: 'The action or process of arriving.',
        },
      ],
      ttn: [
        {
          word: 'yellow',
          definition: 'Is a color resembling the sun or gold.',
        },
        {
          word: 'green',
          definition: 'Is a color resembling the leaves of plants.',
        },
        {
          word: 'orange',
          definition: 'Is a color resembling the fruit of the same name.',
        },
      ],
    },
    {
      word: 'pink',
      definition: 'Is a pale red color.',
      topicId: 4,
      id: 108,
      pronunciation: '/pɪŋk/',
      image_link: [
        'https://i.pinimg.com/236x/62/f8/2a/62f82ac00b46da4acb2c082d2a346e6a.jpg',
        'https://i.pinimg.com/236x/e8/73/5e/e8735e0fd41ed9978999acdbe736ddda.jpg',
        'https://i.pinimg.com/236x/8e/a1/f7/8ea1f7bf7f4dd7a727c41fdbbc1083c1.jpg',
        'https://i.pinimg.com/236x/34/17/2d/34172d8413e4c23cac22b260ae341b86.jpg',
      ],
      examples: [
        'Pink is in the sentence.',
        'This sentence contains the word pink.',
        'We can use the word pink here.',
        'Here is an example of the word pink.',
      ],
      tdn: [
        {
          word: 'satellite',
          definition:
            'An artificial body placed in orbit around the earth or moon or another planet in order to collect information or for communication.',
        },
        {
          word: 'orbiter',
          definition:
            'A spacecraft designed to go into orbit around a planet or other body.',
        },
        {
          word: 'space station',
          definition:
            'A large artificial satellite used as a long-term base for manned operations in space.',
        },
      ],
      ttn: [
        {
          word: 'white',
          definition:
            'the color of milk or fresh snow, due to the reflection of all visible rays of light; the opposite of black',
        },
        {
          word: 'black',
          definition:
            'the darkest color, the result of the absence or complete absorption of visible light; the opposite of white',
        },
        {
          word: 'red',
          definition:
            'a color at the end of the visible spectrum of light, next to orange and opposite violet; the opposite of green',
        },
      ],
    },
    {
      word: 'black',
      definition:
        'Is the darkest color, resulting from the absence or complete absorption of visible light.',
      topicId: 4,
      id: 109,
      pronunciation: '/blak/',
      image_link: [
        'https://i.pinimg.com/236x/4f/c3/a4/4fc3a4db6c4f400b49f353e045f3f8c9.jpg',
        'https://i.pinimg.com/236x/15/21/5f/15215faed10955ed1d40c2a149420b2e.jpg',
        'https://i.pinimg.com/236x/39/95/e1/3995e1196e99d10da48bb5e6a5ac8cac.jpg',
        'https://i.pinimg.com/236x/9e/23/5e/9e235e325994522e5dc45b6347d380d2.jpg',
      ],
      examples: [
        'Black is in the sentence.',
        'This sentence contains the word black.',
        'We can use the word black here.',
        'Here is an example of the word black.',
      ],
      tdn: [
        {
          word: 'astronaut',
          definition: 'A person who is trained to travel in a spacecraft.',
        },
        {
          word: 'cosmonaut',
          definition: 'A Russian astronaut.',
        },
        {
          word: 'spaceman',
          definition: 'A person trained to travel in a spacecraft.',
        },
      ],
      ttn: [
        {
          word: 'white',
          definition:
            'Of the color of milk or fresh snow, due to the reflection of all visible rays of light; the opposite of black.',
        },
        {
          word: 'bright',
          definition: 'Giving out or reflecting a lot of light; shining.',
        },
        {
          word: 'light',
          definition:
            'The natural agent that stimulates sight and makes things visible; the opposite of darkness.',
        },
      ],
    },
    {
      word: 'brown',
      definition: 'Is a color produced by combining red, yellow, and black.',
      topicId: 4,
      id: 110,
      pronunciation: '/bɹaʊn/',
      image_link: [
        'https://i.pinimg.com/236x/c7/7a/dd/c77add2060c1f6080335677da0bc82f3.jpg',
        'https://i.pinimg.com/236x/c8/d3/a1/c8d3a186b5315c029d186d18758f7341.jpg',
        'https://i.pinimg.com/236x/6f/a0/9b/6fa09bac199c1b91838666b555794eef.jpg',
        'https://i.pinimg.com/236x/5c/dd/b9/5cddb9722ce973583f816c2b76d6cff1.jpg',
      ],
      examples: [
        'Brown is in the sentence.',
        'This sentence contains the word brown.',
        'We can use the word brown here.',
        'Here is an example of the word brown.',
      ],
      tdn: [
        {
          word: 'spaceship',
          definition: 'A spacecraft, especially one controlled by a crew.',
        },
        {
          word: 'spacecraft',
          definition: 'A vehicle used for traveling in space.',
        },
        {
          word: 'rocket',
          definition:
            'A spacecraft, aircraft, or vehicle that obtains thrust from a rocket engine.',
        },
      ],
      ttn: [
        {
          word: 'white',
          definition: 'Is the color of pure snow, milk, or chalk.',
        },
        {
          word: 'black',
          definition:
            'Is the darkest color, the result of the absence or complete absorption of visible light.',
        },
        {
          word: 'red',
          definition:
            'Is the color at the end of the visible spectrum of light, next to orange and opposite violet.',
        },
      ],
    },
    {
      word: 'gray',
      definition: 'Is a color between black and white.',
      topicId: 4,
      id: 111,
      pronunciation: '/ɡɹeɪ/',
      image_link: [
        'https://i.pinimg.com/236x/f3/3d/52/f33d52baeb8aae4b8cc7031d42663a0d.jpg',
        'https://i.pinimg.com/236x/99/b4/2e/99b42e1a16c09f244c5c18a9eec43dd7.jpg',
        'https://i.pinimg.com/236x/32/50/df/3250df5c032cbd8d644c9fa909301ae7.jpg',
        'https://i.pinimg.com/236x/c1/de/8b/c1de8be4e4f54f060275aedbb47b2132.jpg',
      ],
      examples: [
        'Gray is in the sentence.',
        'This sentence contains the word gray.',
        'We can use the word gray here.',
        'Here is an example of the word gray.',
      ],
      tdn: [
        {
          word: 'computer',
          definition:
            'An electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program.',
        },
        {
          word: 'PC',
          definition: 'Personal computer.',
        },
        {
          word: 'laptop',
          definition: 'A small, portable personal computer.',
        },
      ],
      ttn: [
        {
          word: 'black',
          definition:
            'Is the darkest color, the result of the absence or complete absorption of visible light.',
        },
        {
          word: 'white',
          definition:
            'The color of fresh snow, reflecting all visible light without absorbing any.',
        },
        {
          word: 'colorful',
          definition: 'Having many different colors; bright and vivid.',
        },
      ],
    },
    {
      word: 'magenta',
      definition: 'Is a color that is a combination of red and blue.',
      topicId: 4,
      id: 112,
      pronunciation: '/məˈdʒɛntə/',
      image_link: [
        'https://i.pinimg.com/236x/fc/6d/73/fc6d73234796dcd0d3da5b335f6557aa.jpg',
        'https://i.pinimg.com/236x/38/13/9e/38139e9c190cf8ca89b1b6dfa576d17b.jpg',
        'https://i.pinimg.com/236x/0f/82/3c/0f823ceabbe68f7e4d04acdf166a8d13.jpg',
        'https://i.pinimg.com/236x/5e/de/fe/5edefe4daa76d467d33306d0d583b124.jpg',
      ],
      examples: [
        'Magenta is in the sentence.',
        'This sentence contains the word magenta.',
        'We can use the word magenta here.',
        'Here is an example of the word magenta.',
      ],
      tdn: [
        {
          word: 'smartphone',
          definition:
            'A mobile phone that performs many of the functions of a computer, typically having a touchscreen interface, internet access, and an operating system capable of running downloaded apps.',
        },
        {
          word: 'cellphone',
          definition:
            'A portable telephone that can make and receive calls over a radio frequency link while the user is moving within a telephone service area.',
        },
        {
          word: 'mobile phone',
          definition:
            'A portable telephone that can make and receive calls over a radio frequency link.',
        },
      ],
      ttn: [
        {
          word: 'colorless',
          definition: 'Without any color; lacking hue.',
        },
        {
          word: 'monochrome',
          definition:
            'Consisting of or displaying only one color or shades of one color.',
        },
        {
          word: 'dull',
          definition:
            'Lacking brightness, vividness, or luster; not intense in color.',
        },
      ],
    },
    {
      word: 'cyan',
      definition: 'Is a color between blue and green in the spectrum.',
      topicId: 4,
      id: 113,
      pronunciation: '/ˈsaɪ.ən/',
      image_link: [
        'https://i.pinimg.com/236x/62/77/b8/6277b8a9eea67f8dbb935feea045fec0.jpg',
        'https://i.pinimg.com/236x/7f/0b/8e/7f0b8e2f319d77e746212d0e54563150.jpg',
        'https://i.pinimg.com/236x/ad/31/c7/ad31c7c58cae4aa6b79cd3b40deaa4be.jpg',
        'https://i.pinimg.com/236x/4f/f3/4a/4ff34ad6940f01c610a63042854eddf6.jpg',
      ],
      examples: [
        'Cyan is in the sentence.',
        'This sentence contains the word cyan.',
        'We can use the word cyan here.',
        'Here is an example of the word cyan.',
      ],
      tdn: [
        {
          word: 'robot',
          definition:
            'A machine capable of carrying out a complex series of actions automatically, especially one programmable by a computer.',
        },
        {
          word: 'automaton',
          definition:
            'A moving mechanical device made in imitation of a human being.',
        },
        {
          word: 'android',
          definition: 'A robot with a human appearance.',
        },
      ],
    },
    {
      word: 'turquoise',
      definition: 'Is a blue-green color.',
      topicId: 4,
      id: 114,
      pronunciation: '/ˈtɝː.kɔɪz/',
      image_link: [
        'https://i.pinimg.com/236x/98/e7/2d/98e72de89c7fbc44bc81ffecd27e12d5.jpg',
        'https://i.pinimg.com/236x/4d/d1/ae/4dd1ae8853100d555f70e8fc4808be13.jpg',
        'https://i.pinimg.com/236x/cf/6b/fa/cf6bfa684bc4b513c09231d33b0c6933.jpg',
        'https://i.pinimg.com/236x/86/37/ee/8637ee0d0ab7f2d146d7461e0ec94365.jpg',
      ],
      examples: [
        'Turquoise is in the sentence.',
        'This sentence contains the word turquoise.',
        'We can use the word turquoise here.',
        'Here is an example of the word turquoise.',
      ],
      tdn: [
        {
          word: 'drone',
          definition: 'A remote-controlled pilotless aircraft or missile.',
        },
        {
          word: 'unmanned aerial vehicle',
          definition:
            'An aircraft piloted by remote control or onboard computers.',
        },
        {
          word: 'quadcopter',
          definition: 'A type of drone with four rotors.',
        },
      ],
      ttn: [
        {
          word: 'magenta',
          definition: 'Is a color between red and blue in the spectrum.',
        },
        {
          word: 'yellow',
          definition: 'Is a primary color that is complementary to cyan.',
        },
        {
          word: 'black',
          definition:
            'Absorbs all colors and reflects none; opposite to white.',
        },
      ],
    },
    {
      word: 'indigo',
      definition: 'Is a deep and rich color close to the color wheel blue.',
      topicId: 4,
      id: 115,
      pronunciation: '/ˈɪn.dɪˌɡəʊ/',
      image_link: [
        'https://i.pinimg.com/236x/53/54/36/53543626d63720faf987588f375e0daf.jpg',
        'https://i.pinimg.com/236x/85/ae/f5/85aef5aa351464e62ad0b4a05232470c.jpg',
        'https://i.pinimg.com/236x/9d/f6/f1/9df6f1010ff6dc28af358728e02b45ba.jpg',
        'https://i.pinimg.com/236x/81/fc/b9/81fcb9ef06dd4ca13c4c1ab370caed91.jpg',
      ],
      examples: [
        'Indigo is in the sentence.',
        'This sentence contains the word indigo.',
        'We can use the word indigo here.',
        'Here is an example of the word indigo.',
      ],
      tdn: [
        {
          word: 'network',
          definition: 'A group or system of interconnected people or things.',
        },
        {
          word: 'web',
          definition: 'A complex system of interconnected elements.',
        },
        {
          word: 'system',
          definition:
            'A set of connected things or parts forming a complex whole.',
        },
      ],
    },
    {
      word: 'violet',
      definition:
        'Is a color at the end of the visible spectrum of light, next to blue and opposite red.',
      topicId: 4,
      id: 116,
      pronunciation: '/ˈvaɪlət/',
      image_link: [
        'https://i.pinimg.com/236x/5f/25/ec/5f25ec5d2ca511dd74549f7aefffbc2d.jpg',
        'https://i.pinimg.com/236x/b2/b3/80/b2b380cd6fd36a0cdce6afea3460f423.jpg',
        'https://i.pinimg.com/236x/f3/79/83/f379839c8570c3db5b26372d37b9b81f.jpg',
        'https://i.pinimg.com/236x/55/f8/1e/55f81ec7e708ba9117d6d9a62d48a735.jpg',
      ],
      examples: [
        'Violet is in the sentence.',
        'This sentence contains the word violet.',
        'We can use the word violet here.',
        'Here is an example of the word violet.',
      ],
      tdn: [
        {
          word: 'internet',
          definition:
            'A global computer network providing a variety of information and communication facilities, consisting of interconnected networks using standardized communication protocols.',
        },
        {
          word: 'web',
          definition:
            'A network of fine threads constructed by a spider from fluid secreted by its spinnerets, used to catch its prey.',
        },
        {
          word: 'cyberspace',
          definition:
            'The notional environment in which communication over computer networks occurs.',
        },
      ],
      ttn: [
        {
          word: 'light',
          definition: 'Having little weight or less weight than usual.',
        },
        {
          word: 'pale',
          definition: 'Very light in color or almost white.',
        },
        {
          word: 'bright',
          definition: 'Radiating or reflecting light; shining; luminous.',
        },
      ],
    },
    {
      word: 'lime',
      definition: 'Is a color that is a shade of green.',
      topicId: 4,
      id: 117,
      pronunciation: '/laɪm/',
      image_link: [
        'https://i.pinimg.com/236x/9c/0b/f9/9c0bf91c82bc3b378c39a623b06f32ef.jpg',
        'https://i.pinimg.com/236x/4d/34/41/4d344107d12f81c85a647013d293a988.jpg',
        'https://i.pinimg.com/236x/32/59/14/325914f6b545587f7f5a77e01d42debd.jpg',
        'https://i.pinimg.com/236x/70/e8/8a/70e88a9cad6eabf4e53ac77fac812008.jpg',
      ],
      examples: [
        'Lime is in the sentence.',
        'This sentence contains the word lime.',
        'We can use the word lime here.',
        'Here is an example of the word lime.',
      ],
      tdn: [
        {
          word: 'software',
          definition:
            'The programs and other operating information used by a computer.',
        },
        {
          word: 'program',
          definition:
            'A set of related measures or activities with a particular long-term aim.',
        },
        {
          word: 'application',
          definition:
            'A program or piece of software designed and written to fulfill a particular purpose of the user.',
        },
      ],
      ttn: [
        {
          word: 'magenta',
          definition: 'Is a color that is a shade of pink-purple.',
        },
        {
          word: 'crimson',
          definition: 'Is a color that is a shade of deep red.',
        },
        {
          word: 'amber',
          definition: 'Is a color that is a shade of yellow-orange.',
        },
      ],
    },
    {
      word: 'gold',
      definition: 'Is a metallic yellow color.',
      topicId: 4,
      id: 118,
      pronunciation: '/ɡɒʊld/',
      image_link: [
        'https://i.pinimg.com/236x/96/7f/01/967f014497470dc589c5ac8021737449.jpg',
        'https://i.pinimg.com/236x/fa/3b/3e/fa3b3e9f25fe4cf32de67013ce6c0dd6.jpg',
        'https://i.pinimg.com/236x/cb/02/d9/cb02d911ce43d056c5ed348ea567cdf7.jpg',
        'https://i.pinimg.com/236x/3d/65/85/3d65858e2e0ca59e32071fc18e2a17b3.jpg',
      ],
      examples: [
        'Gold is in the sentence.',
        'This sentence contains the word gold.',
        'We can use the word gold here.',
        'Here is an example of the word gold.',
      ],
      tdn: [
        {
          word: 'hardware',
          definition:
            'The machines, wiring, and other physical components of a computer or other electronic system.',
        },
        {
          word: 'equipment',
          definition: 'The necessary items for a particular purpose.',
        },
        {
          word: 'device',
          definition:
            'A thing made or adapted for a particular purpose, especially a piece of mechanical or electronic equipment.',
        },
      ],
      ttn: [
        {
          word: 'silver',
          definition: 'Is a metallic white-grey color.',
        },
        {
          word: 'bronze',
          definition: 'Is a metallic brown color.',
        },
        {
          word: 'copper',
          definition: 'Is a metallic reddish-brown color.',
        },
      ],
    },
    {
      word: 'silver',
      definition: 'Is a metallic gray color.',
      topicId: 4,
      id: 119,
      pronunciation: '/ˈsɪl.və/',
      image_link: [
        'https://i.pinimg.com/236x/fd/15/08/fd1508378571572cbd9d1e4f6838ea7a.jpg',
        'https://i.pinimg.com/236x/38/79/76/38797659d08e52caaef5b8ac697ff5a6.jpg',
        'https://i.pinimg.com/236x/04/81/9c/04819cbc3da36e6542fcbd54a2723649.jpg',
        'https://i.pinimg.com/236x/a6/d3/46/a6d34634a7ad223746f35fec411be61b.jpg',
      ],
      examples: [
        'Silver is in the sentence.',
        'This sentence contains the word silver.',
        'We can use the word silver here.',
        'Here is an example of the word silver.',
      ],
      tdn: [
        {
          word: 'server',
          definition:
            'A computer or computer program which manages access to a centralized resource or service in a network.',
        },
        {
          word: 'host',
          definition:
            'A person who receives or entertains other people as guests.',
        },
        {
          word: 'mainframe',
          definition:
            'A large high-speed computer, especially one supporting numerous workstations or peripherals.',
        },
      ],
      ttn: [
        {
          word: 'silver',
          definition: 'Is a metallic white-grey color.',
        },
        {
          word: 'bronze',
          definition: 'Is a metallic brown color.',
        },
        {
          word: 'copper',
          definition: 'Is a metallic reddish-brown color.',
        },
      ],
    },
    {
      word: 'apple',
      definition:
        'Is a fruit with red, yellow, or green skin and a sweet, crisp flesh.',
      topicId: 5,
      id: 120,
      pronunciation: '/ˈæp.əl/',
      image_link: [
        'https://i.pinimg.com/236x/60/7b/b8/607bb825ee1f51f11d848d0e21161371.jpg',
        'https://i.pinimg.com/236x/db/fe/75/dbfe75990174020a7ebf8799999212d8.jpg',
        'https://i.pinimg.com/236x/32/27/95/3227954985c87baf2031aa7eba4e1b20.jpg',
        'https://i.pinimg.com/236x/c6/2e/f3/c62ef387e25399388d9689691c58a627.jpg',
      ],
      examples: [
        'Apple is in the sentence.',
        'This sentence contains the word apple.',
        'We can use the word apple here.',
        'Here is an example of the word apple.',
      ],
      tdn: [
        {
          word: 'database',
          definition:
            'A structured set of data held in a computer, especially one that is accessible in various ways.',
        },
        {
          word: 'data bank',
          definition:
            'A large repository of data on a particular subject or for a particular purpose.',
        },
        {
          word: 'archive',
          definition:
            'A collection of historical documents or records providing information about a place, institution, or group of people.',
        },
      ],
      ttn: [
        {
          word: 'meat',
          definition:
            'The flesh of animals (including fish and birds and snails) used as food.',
        },
        {
          word: 'vegetable',
          definition:
            'A plant or part of a plant used as food, typically as a savory dish rather than a sweet dish.',
        },
        {
          word: 'mineral',
          definition:
            "A naturally occurring substance that is solid and inorganic, representing a part of the Earth's crust.",
        },
      ],
    },
    {
      word: 'banana',
      definition:
        'Is a long, curved fruit with a thick peel and soft, sweet flesh inside.',
      topicId: 5,
      id: 121,
      pronunciation: '/bəˈnɑːnə/',
      image_link: [
        'https://i.pinimg.com/236x/4e/c8/d0/4ec8d08d78eab77c3428e2c7ab7d3f15.jpg',
        'https://i.pinimg.com/236x/1c/16/62/1c1662f546cc85a1d77732c840ff9113.jpg',
        'https://i.pinimg.com/236x/e8/a4/0a/e8a40ad31ad518b5f729ab224572e465.jpg',
        'https://i.pinimg.com/236x/a3/37/0b/a3370bfbc03bc8de595f417f08f7fa5e.jpg',
      ],
      examples: [
        'Banana is in the sentence.',
        'This sentence contains the word banana.',
        'We can use the word banana here.',
        'Here is an example of the word banana.',
      ],
      tdn: [
        {
          word: 'algorithm',
          definition:
            'A process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.',
        },
        {
          word: 'procedure',
          definition: 'An established or official way of doing something.',
        },
        {
          word: 'formula',
          definition:
            'A mathematical relationship or rule expressed in symbols.',
        },
      ],
      ttn: [
        {
          word: 'meat',
          definition:
            'The flesh of animals (including fish and birds) used as food.',
        },
        {
          word: 'vegetable',
          definition:
            'A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as cabbage, potato, carrot, or bean.',
        },
        {
          word: 'grain',
          definition:
            'The seeds of cultivated cereals such as wheat, rice, or corn used as food.',
        },
      ],
    },
    {
      word: 'grape',
      definition: 'Is a small, round fruit that grows in clusters on a vine.',
      topicId: 5,
      id: 122,
      pronunciation: '/ɡɹeɪp/',
      image_link: [
        'https://i.pinimg.com/236x/64/21/6a/64216aaa8ea25c0a5a4d542982c0c998.jpg',
        'https://i.pinimg.com/236x/b8/8b/d7/b88bd72ec9038f6354c12e6462eb1dca.jpg',
        'https://i.pinimg.com/236x/6f/07/c7/6f07c721184d57001d0d867ac8529670.jpg',
        'https://i.pinimg.com/236x/5e/04/de/5e04de53467a91cef8258d67eb88feb6.jpg',
      ],
      examples: [
        'Grape is in the sentence.',
        'This sentence contains the word grape.',
        'We can use the word grape here.',
        'Here is an example of the word grape.',
      ],
      tdn: [
        {
          word: 'code',
          definition:
            'A system of words, letters, figures, or symbols used to represent others, especially for the purposes of secrecy.',
        },
        {
          word: 'cipher',
          definition: 'A secret or disguised way of writing; a code.',
        },
        {
          word: 'script',
          definition: 'Handwriting as distinct from print; written characters.',
        },
      ],
      ttn: [
        {
          word: 'meat',
          definition: 'The flesh of an animal (especially a mammal) as food.',
        },
        {
          word: 'vegetable',
          definition:
            'A plant or part of a plant used as food, typically as an accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.',
        },
        {
          word: 'stone',
          definition:
            'A hard, solid nonmetallic mineral matter of which rock is made, especially as a building material.',
        },
      ],
    },
    {
      word: 'orange',
      definition:
        'Is a round, orange-colored citrus fruit with a sweet-tart flavor.',
      topicId: 5,
      id: 123,
      pronunciation: '/ˈɔɹɪ̈nd͡ʒ/',
      image_link: [
        'https://i.pinimg.com/236x/7a/aa/a5/7aaaa545e00e8a434850e80b8910dd94.jpg',
        'https://i.pinimg.com/236x/b4/cb/5a/b4cb5a3c0c437cda70ec9b434da0519d.jpg',
        'https://i.pinimg.com/236x/6a/15/f1/6a15f1d69875464cc729ce86de6be5c8.jpg',
        'https://i.pinimg.com/236x/30/f2/85/30f2856aed9c8621a33d146e068a9866.jpg',
      ],
      examples: [
        'Orange is in the sentence.',
        'This sentence contains the word orange.',
        'We can use the word orange here.',
        'Here is an example of the word orange.',
      ],
      tdn: [
        {
          word: 'password',
          definition:
            'A secret word or phrase that must be used to gain admission to something.',
        },
        {
          word: 'passcode',
          definition:
            'A string of characters used for user authentication to prove identity or access approval to gain access to a resource.',
        },
        {
          word: 'key',
          definition:
            'A small piece of shaped metal with incisions cut to fit the wards of a particular lock and moved within it.',
        },
      ],
      ttn: [
        {
          word: 'lemon',
          definition: 'Is a yellow-colored citrus fruit with a sour flavor.',
        },
        {
          word: 'lime',
          definition:
            'Is a small, green-colored citrus fruit with a sour and slightly bitter flavor.',
        },
        {
          word: 'grapefruit',
          definition:
            'Is a large, yellow or pink-colored citrus fruit with a bitter-tart flavor.',
        },
      ],
    },
    {
      word: 'strawberry',
      definition: 'Is a small, red fruit with tiny seeds on its surface.',
      topicId: 5,
      id: 124,
      pronunciation: '/ˈstɹɔːb(ə)ɹi/',
      image_link: [
        'https://i.pinimg.com/236x/1c/ac/37/1cac37c5520085aba52654b18beb225a.jpg',
        'https://i.pinimg.com/236x/42/a9/4c/42a94c7a273b50f6fe24b3e9b961fd6c.jpg',
        'https://i.pinimg.com/236x/3e/b2/37/3eb237f0b6413e85e8361a04a28d680f.jpg',
        'https://i.pinimg.com/236x/a4/a0/56/a4a056be7de363dcc2bb46c88d83e83c.jpg',
      ],
      examples: [
        'Strawberry is in the sentence.',
        'This sentence contains the word strawberry.',
        'We can use the word strawberry here.',
        'Here is an example of the word strawberry.',
      ],
      tdn: [
        {
          word: 'encryption',
          definition:
            'The process of converting information or data into a code, especially to prevent unauthorized access.',
        },
        {
          word: 'encoding',
          definition:
            'The action of converting information or an instruction into a particular form.',
        },
        {
          word: 'ciphering',
          definition: 'The action of writing or solving codes.',
        },
      ],
      ttn: [
        {
          word: 'vegetable',
          definition:
            'A type of food that is often savory and not sweet, typically not a fruit.',
        },
        {
          word: 'meat',
          definition:
            'The flesh of animals used as food, which is a protein source rather than a fruit.',
        },
        {
          word: 'citrus',
          definition:
            'A type of fruit that is often sour or tangy, such as oranges, lemons, and limes, which contrasts with the sweet taste of strawberries.',
        },
      ],
    },
    {
      word: 'watermelon',
      definition:
        'Is a large, green fruit with a sweet, juicy, red or pink flesh.',
      topicId: 5,
      id: 125,
      pronunciation: '/ˈwɔːtəˌmɛlən/',
      image_link: [
        'https://i.pinimg.com/236x/65/18/ab/6518abc699988a36ef33f5f8a0de0f4b.jpg',
        'https://i.pinimg.com/236x/f2/26/5b/f2265b159e725e86bba232725514bdec.jpg',
        'https://i.pinimg.com/236x/bd/29/5f/bd295f8dc822fee37e94b3e89f56d5a8.jpg',
        'https://i.pinimg.com/236x/f5/52/25/f5522551c5a750869e2453979df67264.jpg',
      ],
      examples: [
        'Watermelon is in the sentence.',
        'This sentence contains the word watermelon.',
        'We can use the word watermelon here.',
        'Here is an example of the word watermelon.',
      ],
      tdn: [
        {
          word: 'firewall',
          definition:
            'A part of a computer system or network which is designed to block unauthorized access while permitting outward communication.',
        },
        {
          word: 'security system',
          definition:
            'A system designed to detect intrusion – unauthorized entry – into a building or other area.',
        },
        {
          word: 'barrier',
          definition:
            'A fence or other obstacle that prevents movement or access.',
        },
      ],
      ttn: [
        {
          word: 'stone',
          definition:
            'A hard, solid non-edible mineral matter of which rock is made.',
        },
        {
          word: 'meat',
          definition:
            'The flesh of animals as food, typically excluding fish and other seafood.',
        },
        {
          word: 'dryness',
          definition: 'The state of being free from moisture or liquid.',
        },
      ],
    },
    {
      word: 'pear',
      definition: 'Is a sweet fruit with a rounded base and an elongated top.',
      topicId: 5,
      id: 126,
      pronunciation: '/per/',
      image_link: [
        'https://i.pinimg.com/236x/d2/36/4a/d2364ac02dbf0cd131e24c65790c1c47.jpg',
        'https://i.pinimg.com/236x/af/bf/64/afbf6429e91a83229edea43375a58312.jpg',
        'https://i.pinimg.com/236x/9b/0d/71/9b0d71d7a5d9515628e77c75837f7efd.jpg',
        'https://i.pinimg.com/236x/65/db/25/65db2579f9a4ca7fd45c132cbfb42a60.jpg',
      ],
      examples: [
        'Pear is in the sentence.',
        'This sentence contains the word pear.',
        'We can use the word pear here.',
        'Here is an example of the word pear.',
      ],
      tdn: [
        {
          word: 'malware',
          definition:
            'Software that is specifically designed to disrupt, damage, or gain unauthorized access to a computer system.',
        },
        {
          word: 'virus',
          definition:
            'A piece of code that is capable of copying itself and typically has a detrimental effect, such as corrupting the system or destroying data.',
        },
        {
          word: 'spyware',
          definition:
            "Software that enables a user to obtain covert information about another's computer activities by transmitting data covertly from their hard drive.",
        },
      ],
      ttn: [
        {
          word: 'vegetable',
          definition:
            'A plant or part of a plant used as food, such as cabbage, potato, or bean, that is not a fruit.',
        },
        {
          word: 'meat',
          definition: 'The flesh of an animal (especially a mammal) as food.',
        },
        {
          word: 'grain',
          definition:
            'A small, hard seed, especially the seed of a food plant such as wheat, corn, rye, oats, rice, or millet.',
        },
      ],
    },
    {
      word: 'pineapple',
      definition:
        'Is a tropical fruit with a tough, spiky exterior and sweet, juicy, yellow flesh.',
      topicId: 5,
      id: 127,
      pronunciation: '/ˈpaɪnəpəl/',
      image_link: [
        'https://i.pinimg.com/236x/a0/77/c8/a077c84037cd1e27b87d81ad8ca88209.jpg',
        'https://i.pinimg.com/236x/8b/f2/8e/8bf28e6b9a718175dd44a8e5103c1cae.jpg',
        'https://i.pinimg.com/236x/d9/45/e9/d945e9db9bda5d0be8b09705957245a9.jpg',
        'https://i.pinimg.com/236x/5e/66/55/5e6655130d8711421b02ac3af74870e6.jpg',
      ],
      examples: [
        'Pineapple is in the sentence.',
        'This sentence contains the word pineapple.',
        'We can use the word pineapple here.',
        'Here is an example of the word pineapple.',
      ],
      tdn: [
        {
          word: 'bandwidth',
          definition:
            'The range of frequencies within a given band, in particular that used for transmitting a signal.',
        },
        {
          word: 'capacity',
          definition: 'The maximum amount that something can contain.',
        },
        {
          word: 'rate',
          definition:
            'A measure, quantity, or frequency, typically one measured against some other quantity or measure.',
        },
      ],
    },
    {
      word: 'cherry',
      definition: 'Is a small, round fruit that is typically red or black.',
      topicId: 5,
      id: 128,
      pronunciation: '/ˈtʃer.i/',
      image_link: [
        'https://i.pinimg.com/236x/20/68/d2/2068d220432a0bf052c713b3587943a6.jpg',
        'https://i.pinimg.com/236x/29/52/1b/29521bb74d8d04d7eff3e0a438529ec1.jpg',
        'https://i.pinimg.com/236x/67/66/45/676645350af6e931070a015c99140dea.jpg',
        'https://i.pinimg.com/236x/d6/b8/85/d6b8859894470e7b7c0e854f1dba7283.jpg',
      ],
      examples: [
        'Cherry is in the sentence.',
        'This sentence contains the word cherry.',
        'We can use the word cherry here.',
        'Here is an example of the word cherry.',
      ],
      tdn: [
        {
          word: 'modem',
          definition:
            'A combined device for modulation and demodulation, for example, between the digital data of a computer and the analog signal of a telephone line.',
        },
        {
          word: 'transceiver',
          definition:
            'A device that can both transmit and receive communications, in particular a combined radio transmitter and receiver.',
        },
        {
          word: 'adapter',
          definition:
            'A device for connecting pieces of equipment that cannot be connected directly.',
        },
      ],
      ttn: [
        {
          word: 'vegetable',
          definition:
            'A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.',
        },
        {
          word: 'meat',
          definition: 'The flesh of an animal (especially a mammal) as food.',
        },
        {
          word: 'stone',
          definition:
            'A hard, solid non-metallic mineral matter of which rock is made, especially as a building material.',
        },
      ],
    },
    {
      word: 'mango',
      definition:
        'Is a tropical fruit with a smooth skin and sweet, orange flesh.',
      topicId: 5,
      id: 129,
      pronunciation: '/ˈmæŋ.ɡoʊ/',
      image_link: [
        'https://i.pinimg.com/236x/c4/41/60/c44160336851753abc03b27896af17b4.jpg',
        'https://i.pinimg.com/236x/d5/df/d3/d5dfd38026e2b5a460efb75aad63193f.jpg',
        'https://i.pinimg.com/236x/26/ce/34/26ce340af8b2265815a2c27f3e13185b.jpg',
        'https://i.pinimg.com/236x/6d/c0/13/6dc0138f240932023a22f1b4828ed0fd.jpg',
      ],
      examples: [
        'Mango is in the sentence.',
        'This sentence contains the word mango.',
        'We can use the word mango here.',
        'Here is an example of the word mango.',
      ],
      tdn: [
        {
          word: 'router',
          definition:
            'A device that forwards data packets to the appropriate parts of a computer network.',
        },
        {
          word: 'switch',
          definition:
            'A device for making and breaking the connection in an electric circuit.',
        },
        {
          word: 'hub',
          definition:
            'The effective center of an activity, region, or network.',
        },
      ],
      ttn: [
        {
          word: 'vegetable',
          definition:
            'A plant or part of a plant used as food, typically as an accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.',
        },
        {
          word: 'meat',
          definition: 'The flesh of an animal (especially a mammal) as food.',
        },
        {
          word: 'grain',
          definition:
            'A small, hard seed, especially the seed of a food plant such as wheat, corn, rye, oats, rice, or millet.',
        },
      ],
    },
    {
      word: 'blueberry',
      definition: 'Is a small, blue-black fruit that grows in clusters.',
      topicId: 5,
      id: 130,
      pronunciation: '/ˈbluːˌber.i/',
      image_link: [
        'https://i.pinimg.com/236x/71/1a/c9/711ac927c461541d4c934fe4ca93357f.jpg',
        'https://i.pinimg.com/236x/90/ec/82/90ec822bdae3d798f3ab4eebfd980fb8.jpg',
        'https://i.pinimg.com/236x/89/b0/c9/89b0c9845b94d67cea9737971e868047.jpg',
        'https://i.pinimg.com/236x/53/5f/d9/535fd967962b90f73e391ef8d2a8faf8.jpg',
      ],
      examples: [
        'Blueberry is in the sentence.',
        'This sentence contains the word blueberry.',
        'We can use the word blueberry here.',
        'Here is an example of the word blueberry.',
      ],
      tdn: [
        {
          word: 'protocol',
          definition:
            'A set of rules governing the exchange or transmission of data between devices.',
        },
        {
          word: 'procedure',
          definition: 'An established or official way of doing something.',
        },
        {
          word: 'standard',
          definition: 'A level of quality or attainment.',
        },
      ],
      ttn: [
        {
          word: 'cranberry',
          definition:
            'Is a small, red fruit that grows in clusters, typically more tart in taste.',
        },
        {
          word: 'grapefruit',
          definition:
            'Is a large, citrus fruit with a bitter and sour taste, usually yellow or pink in color.',
        },
        {
          word: 'banana',
          definition:
            'Is a long, yellow fruit with a sweet taste and soft texture.',
        },
      ],
    },
    {
      word: 'kiwi',
      definition:
        'Is a small, brown fruit with green flesh and tiny black seeds.',
      topicId: 5,
      id: 131,
      pronunciation: '/ˈkiːwi/',
      image_link: [
        'https://i.pinimg.com/236x/d6/6b/25/d66b257fa3fb12c27b3b0e5f9ebf3885.jpg',
        'https://i.pinimg.com/236x/c5/c7/d6/c5c7d6162d9dbc5e2bdc564dcc50eea4.jpg',
        'https://i.pinimg.com/236x/3c/81/f2/3c81f24b6bf739858dd1c16e714b18be.jpg',
        'https://i.pinimg.com/236x/09/c1/62/09c1620190ff88813fe4201d346a731c.jpg',
      ],
      examples: [
        'Kiwi is in the sentence.',
        'This sentence contains the word kiwi.',
        'We can use the word kiwi here.',
        'Here is an example of the word kiwi.',
      ],
      tdn: [
        {
          word: 'networking',
          definition:
            'The action or process of interacting with others to exchange information and develop professional or social contacts.',
        },
        {
          word: 'socializing',
          definition:
            'Participate in social activities; mix socially with others.',
        },
        {
          word: 'connecting',
          definition: 'Join or associate together.',
        },
      ],
      ttn: [
        {
          word: 'animal',
          definition:
            'A living organism that feeds on organic matter, typically having specialized sense organs and nervous system.',
        },
        {
          word: 'large',
          definition:
            'Of considerable or relatively great size, extent, or capacity.',
        },
        {
          word: 'citrus',
          definition:
            'A genus of flowering trees and shrubs in the rue family, Rutaceae, known for their juicy fruits.',
        },
      ],
    },
    {
      word: 'avocado',
      definition:
        'Is a pear-shaped fruit with a rough skin and creamy green flesh.',
      topicId: 5,
      id: 132,
      pronunciation: '/ævəˈkɑːdəʊ/',
      image_link: [
        'https://i.pinimg.com/236x/d6/91/06/d69106481e4d662a9ebbe31ebd43ba29.jpg',
        'https://i.pinimg.com/236x/50/f9/7b/50f97bce611b9709ef562fa46d743967.jpg',
        'https://i.pinimg.com/236x/a9/10/f7/a910f76ccc5a6a547078d18eb4a3189d.jpg',
        'https://i.pinimg.com/236x/2e/a5/98/2ea598f82ff085e3190604c5838a049d.jpg',
      ],
      examples: [
        'Avocado is in the sentence.',
        'This sentence contains the word avocado.',
        'We can use the word avocado here.',
        'Here is an example of the word avocado.',
      ],
      tdn: [
        {
          word: 'hacking',
          definition:
            'The gaining of unauthorized access to data in a system or computer.',
        },
        {
          word: 'breaching',
          definition: 'Make a gap in and break through.',
        },
        {
          word: 'infiltrating',
          definition:
            'Enter or gain access to (an organization, place, etc.) surreptitiously and gradually, especially in order to acquire secret information.',
        },
      ],
      ttn: [
        {
          word: 'word',
          definition:
            'Is a unit of language typically consisting of one or more spoken sounds or their written representation, that functions as a principal carrier of meaning.',
        },
        {
          word: 'number',
          definition: 'A quantity or amount, a mathematical value.',
        },
        {
          word: 'concept',
          definition:
            'An abstract or general idea inferred or derived from specific instances.',
        },
      ],
    },
    {
      word: 'coconut',
      definition:
        'Is a large, hard-shelled fruit with a fibrous husk and white flesh inside.',
      topicId: 5,
      id: 133,
      pronunciation: '/ˈkoʊ.kə.nʌt/',
      image_link: [
        'https://i.pinimg.com/236x/66/34/e9/6634e99ee0fa7dd16dba9952ae0d188b.jpg',
        'https://i.pinimg.com/236x/2b/35/3f/2b353f1778e3b9d96c00eed15c395ff2.jpg',
        'https://i.pinimg.com/236x/1b/25/68/1b2568f9f641056af4e41681e448be8a.jpg',
        'https://i.pinimg.com/236x/60/2e/81/602e8172be648d922bbe015880516e80.jpg',
      ],
      examples: [
        'Coconut is in the sentence.',
        'This sentence contains the word coconut.',
        'We can use the word coconut here.',
        'Here is an example of the word coconut.',
      ],
      tdn: [
        {
          word: 'phishing',
          definition:
            'The fraudulent practice of sending emails purporting to be from reputable companies in order to induce individuals to reveal personal information, such as passwords and credit card numbers.',
        },
        {
          word: 'scamming',
          definition: 'A dishonest scheme; a fraud.',
        },
        {
          word: 'deceiving',
          definition: 'Cause someone to believe something that is not true.',
        },
      ],
      ttn: [
        {
          word: 'vegetable',
          definition:
            'a plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.',
        },
        {
          word: 'mineral',
          definition: 'a solid inorganic substance of natural occurrence.',
        },
        {
          word: 'animal',
          definition:
            'a living organism that feeds on organic matter, typically having specialized sense organs and nervous system and able to respond rapidly to stimuli.',
        },
      ],
    },
    {
      word: 'lemon',
      definition: 'Is a yellow, oval citrus fruit with a tart flavor.',
      topicId: 5,
      id: 134,
      pronunciation: '/ˈlɛmən/',
      image_link: [
        'https://i.pinimg.com/236x/f2/0b/16/f20b16883386bc8ec55f9f751e3ef454.jpg',
        'https://i.pinimg.com/236x/0e/d4/fb/0ed4fb745ec7a23e67385fb0d0db0993.jpg',
        'https://i.pinimg.com/236x/0e/0e/79/0e0e7955c7f106d90b70732d98611440.jpg',
        'https://i.pinimg.com/236x/a1/cf/1b/a1cf1bab4340fef642bae5bd40fe9055.jpg',
      ],
      examples: [
        'Lemon is in the sentence.',
        'This sentence contains the word lemon.',
        'We can use the word lemon here.',
        'Here is an example of the word lemon.',
      ],
      tdn: [
        {
          word: 'cloud computing',
          definition:
            'The practice of using a network of remote servers hosted on the Internet to store, manage, and process data, rather than a local server or a personal computer.',
        },
        {
          word: 'online storage',
          definition:
            'A model of computer data storage in which the digital data is stored in logical pools, the physical storage spans multiple servers, and the physical environment is typically owned and managed by a hosting company.',
        },
        {
          word: 'web-based computing',
          definition:
            'Using a network of remote servers hosted on the Internet to store, manage, and process data, rather than a local server or a personal computer.',
        },
      ],
      ttn: [
        {
          word: 'sweet',
          definition: 'Having a sugary taste; not sour.',
        },
        {
          word: 'ripe',
          definition:
            'Fully developed and matured, usually indicating a pleasant flavor.',
        },
        {
          word: 'orange',
          definition:
            'A round citrus fruit with a tough orange-yellow rind and an orange pulp.',
        },
      ],
    },
    {
      word: 'lime',
      definition: 'Is a small, green citrus fruit with a tart flavor.',
      topicId: 5,
      id: 135,
      pronunciation: '/laɪm/',
      image_link: [
        'https://i.pinimg.com/236x/9c/0b/f9/9c0bf91c82bc3b378c39a623b06f32ef.jpg',
        'https://i.pinimg.com/236x/4d/34/41/4d344107d12f81c85a647013d293a988.jpg',
        'https://i.pinimg.com/236x/32/59/14/325914f6b545587f7f5a77e01d42debd.jpg',
        'https://i.pinimg.com/236x/70/e8/8a/70e88a9cad6eabf4e53ac77fac812008.jpg',
      ],
      examples: [
        'Lime is in the sentence.',
        'This sentence contains the word lime.',
        'We can use the word lime here.',
        'Here is an example of the word lime.',
      ],
      tdn: [
        {
          word: 'artificial intelligence',
          definition:
            'The theory and development of computer systems able to perform tasks that normally require human intelligence, such as visual perception, speech recognition, decision-making, and translation between languages.',
        },
        {
          word: 'AI',
          definition: 'Artificial Intelligence.',
        },
        {
          word: 'machine learning',
          definition:
            'A type of artificial intelligence (AI) that allows software applications to become more accurate in predicting outcomes without being explicitly programmed.',
        },
      ],
      ttn: [
        {
          word: 'sweet',
          definition: 'Having a sugary taste; not sour.',
        },
        {
          word: 'ripe',
          definition:
            'Fully developed and matured, usually indicating a pleasant flavor.',
        },
        {
          word: 'orange',
          definition:
            'A round citrus fruit with a tough orange-yellow rind and an orange pulp.',
        },
      ],
    },
    {
      word: 'peach',
      definition:
        'Is a soft, round fruit with fuzzy skin and sweet yellow or white flesh.',
      topicId: 5,
      id: 136,
      pronunciation: '/piːt͡ʃ/',
      image_link: [
        'https://i.pinimg.com/236x/f7/39/ab/f739ab4963ca285073a41e0af061a791.jpg',
        'https://i.pinimg.com/236x/a5/4c/3a/a54c3a1344c127c2ff70f6d615ff76c5.jpg',
        'https://i.pinimg.com/236x/6d/b0/32/6db0321da5910a614765c4f756677f5e.jpg',
        'https://i.pinimg.com/236x/48/16/5c/48165c5805716ddc5b83e67cbeef34c5.jpg',
      ],
      examples: [
        'Peach is in the sentence.',
        'This sentence contains the word peach.',
        'We can use the word peach here.',
        'Here is an example of the word peach.',
      ],
      tdn: [
        {
          word: 'virtual reality',
          definition:
            'The computer-generated simulation of a three-dimensional image or environment that can be interacted with in a seemingly real or physical way by a person using special electronic equipment, such as a helmet with a screen inside or gloves fitted with sensors.',
        },
        {
          word: 'VR',
          definition: 'Virtual Reality.',
        },
        {
          word: 'augmented reality',
          definition:
            "A technology that superimposes a computer-generated image on a user's view of the real world, thus providing a composite view.",
        },
      ],
      ttn: [
        {
          word: 'vegetable',
          definition:
            'A plant or part of a plant used as food, typically as accompaniment to main courses.',
        },
        {
          word: 'citrus',
          definition:
            'A fruit belonging to the genus Citrus, such as oranges, lemons, and limes, typically with a juicy pulp and a fragrant zest.',
        },
        {
          word: 'berry',
          definition:
            'A small roundish juicy fruit without a stone, such as strawberries or raspberries.',
        },
      ],
    },
    {
      word: 'plum',
      definition:
        'Is a small, round fruit with smooth skin and a sweet or tart flesh.',
      topicId: 5,
      id: 137,
      pronunciation: '/plʌm/',
      image_link: [
        'https://i.pinimg.com/236x/8c/64/b7/8c64b7147e20822115f5583d2c77a566.jpg',
        'https://i.pinimg.com/236x/f7/52/97/f752970a4051228f31b42c6450fe8193.jpg',
        'https://i.pinimg.com/236x/e9/32/8a/e9328abd9a7f104345b48a4757900b87.jpg',
        'https://i.pinimg.com/236x/84/22/8a/84228a18b839eeb8e35497048b913d58.jpg',
      ],
      examples: [
        'Plum is in the sentence.',
        'This sentence contains the word plum.',
        'We can use the word plum here.',
        'Here is an example of the word plum.',
      ],
      tdn: [
        {
          word: 'augmented reality',
          definition:
            "A technology that superimposes a computer-generated image on a user's view of the real world, thus providing a composite view.",
        },
        {
          word: 'AR',
          definition: 'Augmented Reality.',
        },
        {
          word: 'mixed reality',
          definition:
            'The merging of real and virtual worlds to produce new environments and visualizations where physical and digital objects co-exist and interact in real time.',
        },
      ],
      ttn: [
        {
          word: 'vegetable',
          definition: 'a plant or part of a plant used as food',
        },
        {
          word: 'citrus',
          definition: 'a type of fruit with a leathery rind and juicy pulp',
        },
        {
          word: 'melon',
          definition: 'a large round fruit with a hard rind and juicy flesh',
        },
      ],
    },
    {
      word: 'raspberry',
      definition: 'Is a small, red or black fruit with many tiny seeds.',
      topicId: 5,
      id: 138,
      pronunciation: '/ˈɹɑːzbɹi/',
      image_link: [
        'https://i.pinimg.com/236x/7d/44/dc/7d44dc4298dfe48a873a7adb0515f1f3.jpg',
        'https://i.pinimg.com/236x/26/f6/36/26f636ddd9bd6d1436e734a6455a21bb.jpg',
        'https://i.pinimg.com/236x/91/fa/2a/91fa2a87736740be6b6e5c6bf280f0b7.jpg',
        'https://i.pinimg.com/236x/3b/97/76/3b97760699fbb503b6186698f89b9958.jpg',
      ],
      examples: [
        'Raspberry is in the sentence.',
        'This sentence contains the word raspberry.',
        'We can use the word raspberry here.',
        'Here is an example of the word raspberry.',
      ],
      tdn: [
        {
          word: 'blockchain',
          definition:
            'A system in which a record of transactions made in bitcoin or another cryptocurrency is maintained across several computers that are linked in a peer-to-peer network.',
        },
        {
          word: 'distributed ledger',
          definition:
            'A consensus of replicated, shared, and synchronized digital data geographically spread across multiple sites, countries, or institutions.',
        },
        {
          word: 'cryptocurrency',
          definition:
            'A digital currency in which transactions are verified and records maintained by a decentralized system using cryptography, rather than by a centralized authority.',
        },
      ],
      ttn: [
        {
          word: 'animal',
          definition:
            'a living organism that feeds on organic matter, typically having specialized sense organs and nervous system',
        },
        {
          word: 'vegetable',
          definition:
            'a plant or part of a plant used as food, typically savory rather than sweet',
        },
        {
          word: 'mineral',
          definition:
            'a solid inorganic substance of natural occurrence, with a characteristic chemical composition and crystalline structure',
        },
      ],
    },
    {
      word: 'smartphone',
      definition:
        'Is a mobile phone that performs many functions of a computer.',
      topicId: 6,
      id: 139,
      pronunciation: '/ˈsmɑːtfəʊn/',
      image_link: [
        'https://i.pinimg.com/236x/bc/c2/4d/bcc24d484db99457d18aa41ec7eba24f.jpg',
        'https://i.pinimg.com/236x/3a/8a/6c/3a8a6cc532e966db07c76f0041fe7a7b.jpg',
        'https://i.pinimg.com/236x/66/c2/3f/66c23f9566266ec63f39b2dac1a56585.jpg',
        'https://i.pinimg.com/236x/fa/28/83/fa2883910c05537c886c8950c0c4d325.jpg',
      ],
      examples: [
        'She upgraded to the latest smartphone model.',
        'Smartphones are essential tools for communication.',
        'He uses his smartphone to take high-quality photos.',
        'There are many apps available for smartphones.',
      ],
      tdn: [
        {
          word: 'cryptocurrency',
          definition:
            'A digital currency in which transactions are verified and records maintained by a decentralized system using cryptography, rather than by a centralized authority.',
        },
        {
          word: 'crypto',
          definition: 'Short for cryptocurrency.',
        },
        {
          word: 'digital currency',
          definition:
            'A type of currency available only in digital form, not in physical form (such as banknotes and coins).',
        },
      ],
      ttn: [
        {
          word: 'dumbphone',
          definition:
            'A basic mobile phone that lacks advanced features and functionalities.',
        },
        {
          word: 'feature phone',
          definition:
            'A mobile phone that has fewer capabilities than a smartphone, typically with limited internet access and basic apps.',
        },
        {
          word: 'flip phone',
          definition:
            'A mobile phone with a folding form factor, usually offering basic functionality and limited internet access.',
        },
      ],
    },
    {
      word: 'laptop',
      definition: 'Is a small, portable personal computer.',
      topicId: 6,
      id: 140,
      pronunciation: '/ˈlæp.tɒp/',
      image_link: [
        'https://i.pinimg.com/236x/4a/bb/86/4abb8659d4d951a6fefefe401a02aeb7.jpg',
        'https://i.pinimg.com/236x/a5/7f/79/a57f7940a24d9ddbbe2aa4e72f5c48f5.jpg',
        'https://i.pinimg.com/236x/ee/3e/4c/ee3e4c0c619248199d6cef77294db156.jpg',
        'https://i.pinimg.com/236x/61/1f/ce/611fce23521963883f7c4a07b4e730ca.jpg',
      ],
      examples: [
        'Laptop is in the sentence.',
        'This sentence contains the word laptop.',
        'We can use the word laptop here.',
        'Here is an example of the word laptop.',
      ],
      tdn: [
        {
          word: 'bitcoin',
          definition:
            'A type of digital currency in which a record of transactions is maintained and new units of currency are generated by the computational solution of mathematical problems, and which operates independently of a central bank.',
        },
        {
          word: 'BTC',
          definition: 'The symbol for bitcoin.',
        },
        {
          word: 'digital gold',
          definition: 'A term used to describe bitcoin as a store of value.',
        },
      ],
      ttn: [
        {
          word: 'desktop',
          definition: 'Is a stationary personal computer.',
        },
        {
          word: 'tablet',
          definition: 'Is a portable device with a touch screen.',
        },
        {
          word: 'server',
          definition:
            'Is a computer system designed for networked environments.',
        },
      ],
    },
    {
      word: 'tablet',
      definition:
        'Is a wireless, portable personal computer with a touchscreen interface.',
      topicId: 6,
      id: 141,
      pronunciation: '/ˈtæblət/',
      image_link: [
        'https://i.pinimg.com/236x/b0/69/e6/b069e6c613ce32a462e570bf76326130.jpg',
        'https://i.pinimg.com/236x/a2/22/2e/a2222e2845bc2cc301074a9ddb856175.jpg',
        'https://i.pinimg.com/236x/93/03/1f/93031f023f7adbccc9bd89b8434e4892.jpg',
        'https://i.pinimg.com/236x/3b/81/f3/3b81f3a7aa5410d8228ec92b0a319e52.jpg',
      ],
      examples: [
        'Tablet is in the sentence.',
        'This sentence contains the word tablet.',
        'We can use the word tablet here.',
        'Here is an example of the word tablet.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'paper',
          definition:
            'Material manufactured in thin sheets from the pulp of wood or other fibrous substances.',
        },
        {
          word: 'desktop',
          definition:
            'A personal computer designed to be used at a desk or table.',
        },
        {
          word: 'laptop',
          definition:
            "A portable computer that is small enough to use on one's lap.",
        },
      ],
    },
    {
      word: 'desktop',
      definition: 'Is a personal computer designed to fit on a desk.',
      topicId: 6,
      id: 142,
      pronunciation: '[ˈdɛsk.ˌtɔp]',
      image_link: [
        'https://i.pinimg.com/236x/a6/00/2c/a6002c180d0f925d224aa72d7a1ff8cd.jpg',
        'https://i.pinimg.com/236x/8c/0a/b1/8c0ab142b57cc14476c9f2cf987de4e0.jpg',
        'https://i.pinimg.com/236x/04/8c/fc/048cfc0ef20d193e952cd1882f9305c3.jpg',
        'https://i.pinimg.com/236x/dd/80/a9/dd80a99119680fe49d5504c621f88e25.jpg',
      ],
      examples: [
        'Desktop is in the sentence.',
        'This sentence contains the word desktop.',
        'We can use the word desktop here.',
        'Here is an example of the word desktop.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'mobile',
          definition:
            'Capable of moving or being moved easily from place to place.',
        },
        {
          word: 'laptop',
          definition: "A portable computer small enough to use on one's lap.",
        },
        {
          word: 'tablet',
          definition: 'A mobile device typically with a touch screen display.',
        },
      ],
    },
    {
      word: 'printer',
      definition: 'Is a device that prints text or illustrations on paper.',
      topicId: 6,
      id: 143,
      pronunciation: '/ˈprɪn.tər/',
      image_link: [
        'https://i.pinimg.com/236x/91/c3/82/91c382be2031c07666296ed9e5db4eeb.jpg',
        'https://i.pinimg.com/236x/ed/7f/00/ed7f0084582eafbbd4c58b71949caf8f.jpg',
        'https://i.pinimg.com/236x/19/52/d1/1952d12136653ed5470433f70dc8c7a7.jpg',
        'https://i.pinimg.com/236x/b4/f9/d5/b4f9d5aea9f99c552ddafd3e63ee9b61.jpg',
      ],
      examples: [
        'Printer is in the sentence.',
        'This sentence contains the word printer.',
        'We can use the word printer here.',
        'Here is an example of the word printer.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'word',
          definition:
            'Is a unit of language that carries meaning and consists of one or more morphemes.',
        },
        {
          word: 'digital',
          definition:
            'Relating to or using signals or information represented by discrete values (digits) rather than by a continuous spectrum of values.',
        },
        {
          word: 'analogue',
          definition:
            'Relating to or using signals or information represented by continuously variable physical quantities.',
        },
      ],
    },
    {
      word: 'router',
      definition:
        'Is a device that forwards data packets between computer networks.',
      topicId: 6,
      id: 144,
      pronunciation: '/ˈɹuːtə(ɹ)/',
      image_link: [
        'https://i.pinimg.com/236x/8e/ee/cc/8eeecc164cf45e741b74409f0cab1eda.jpg',
        'https://i.pinimg.com/236x/48/ea/1f/48ea1f3996ed1c66781c2158ed9f83ff.jpg',
        'https://i.pinimg.com/236x/2a/14/b9/2a14b9d4fd59877b37a5c537c26adb0c.jpg',
        'https://i.pinimg.com/236x/7e/0c/e4/7e0ce4c71a38df5e89946e73d222edd2.jpg',
      ],
      examples: [
        'Router is in the sentence.',
        'This sentence contains the word router.',
        'We can use the word router here.',
        'Here is an example of the word router.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'receiving',
          definition:
            'Receiving devices typically accept data rather than forwarding it.',
        },
        {
          word: 'end device',
          definition:
            'An end device does not route data but rather sends or receives it directly.',
        },
        {
          word: 'terminal',
          definition:
            'A terminal is a device at the end of a communication channel where data is either sent to or received from.',
        },
      ],
    },
    {
      word: 'monitor',
      definition:
        'Is an output device that displays information in pictorial form.',
      topicId: 6,
      id: 145,
      pronunciation: '/ˈmɒnɨtə/',
      image_link: [
        'https://i.pinimg.com/236x/4b/f8/f7/4bf8f700dacfffc09c61e933622496d9.jpg',
        'https://i.pinimg.com/236x/32/53/b6/3253b657b173887057d956a73846b71e.jpg',
        'https://i.pinimg.com/236x/4c/0e/6c/4c0e6c0ab559bf5ed1dabafeb583b7b7.jpg',
        'https://i.pinimg.com/236x/26/31/16/263116ff7f3d5af1e08a47f4a8231a73.jpg',
      ],
      examples: [
        'Monitor is in the sentence.',
        'This sentence contains the word monitor.',
        'We can use the word monitor here.',
        'Here is an example of the word monitor.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'ignore',
          definition:
            'Refuse to take notice of or acknowledge; disregard intentionally.',
        },
        {
          word: 'disregard',
          definition: 'Pay no attention to; ignore.',
        },
        {
          word: 'disapprove',
          definition:
            'To have or express an unfavorable opinion about something.',
        },
      ],
    },
    {
      word: 'keyboard',
      definition:
        'Is an input device consisting of a set of keys used to input data into a computer.',
      topicId: 6,
      id: 146,
      pronunciation: '/ˈkiːbɔːd/',
      image_link: [
        'https://i.pinimg.com/236x/5d/8f/d2/5d8fd2a6d0dd903f4bbd2c2c73fcb508.jpg',
        'https://i.pinimg.com/236x/18/3f/15/183f1553f4183095cc45c32eec165cc3.jpg',
        'https://i.pinimg.com/236x/16/88/8a/16888ac3ba41a97649dbe0aab05b9ecb.jpg',
        'https://i.pinimg.com/236x/4a/77/2f/4a772f7b4df1435642192c33cb8c9cc9.jpg',
      ],
      examples: [
        'Keyboard is in the sentence.',
        'This sentence contains the word keyboard.',
        'We can use the word keyboard here.',
        'Here is an example of the word keyboard.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'mouse',
          definition:
            'Is an input device used to interact with a computer by moving a cursor around a screen.',
        },
        {
          word: 'joystick',
          definition:
            'Is a control device used primarily for playing games, consisting of a stick that pivots on a base and detects its angle or direction.',
        },
        {
          word: 'touchscreen',
          definition:
            'Is a display screen that is sensitive to touch, allowing the user to interact directly with what is displayed.',
        },
      ],
    },
    {
      word: 'mouse',
      definition:
        'Is a handheld input device used to control a cursor in a graphical user interface.',
      topicId: 6,
      id: 147,
      pronunciation: '/maʊs/',
      image_link: [
        'https://i.pinimg.com/236x/a2/ce/8e/a2ce8ede8b157ddbc8b37b2a5a9d1524.jpg',
        'https://i.pinimg.com/236x/94/4d/9a/944d9ab32f028617f923697c88a97471.jpg',
        'https://i.pinimg.com/236x/0c/c5/5b/0cc55be168b35e494871359c29e11452.jpg',
        'https://i.pinimg.com/236x/82/aa/01/82aa017d0cd6886aaedac3fe3e1763e5.jpg',
      ],
      examples: [
        'Mouse is in the sentence.',
        'This sentence contains the word mouse.',
        'We can use the word mouse here.',
        'Here is an example of the word mouse.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'keyboard',
          definition:
            'A device consisting of a set of keys used for inputting text and commands into a computer.',
        },
        {
          word: 'trackpad',
          definition:
            'A touch-sensitive pad used as a pointing device, typically found on laptops.',
        },
        {
          word: 'joystick',
          definition:
            'A device used for controlling the movement of a cursor or a character in a computer.',
        },
      ],
    },
    {
      word: 'camera',
      definition: 'Is a device used to capture photographs or videos.',
      topicId: 6,
      id: 148,
      pronunciation: '/ˈkæməɹə/',
      image_link: [
        'https://i.pinimg.com/236x/f7/6f/a4/f76fa4b9f6763461b0e2bf9bdf552809.jpg',
        'https://i.pinimg.com/236x/48/e6/19/48e619d37144aa7218bd2c6aca9babe9.jpg',
        'https://i.pinimg.com/236x/b3/54/c2/b354c27f30e94652111e313a4fc5447a.jpg',
        'https://i.pinimg.com/236x/bb/70/40/bb704096070b10a4205f9856916204e8.jpg',
      ],
      examples: [
        'Camera is in the sentence.',
        'This sentence contains the word camera.',
        'We can use the word camera here.',
        'Here is an example of the word camera.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'word',
          definition:
            'a single distinct meaningful element of speech or writing, used with others (or sometimes alone) to form a sentence and typically shown with a space on either side when written or printed.',
        },
        {
          word: 'phrase',
          definition:
            'a small group of words standing together as a conceptual unit, typically forming a component of a clause.',
        },
        {
          word: 'term',
          definition:
            'a word or phrase used to describe a thing or to express a concept, especially in a particular kind of language or branch of study.',
        },
      ],
    },
    {
      word: 'scanner',
      definition:
        'Is a device that captures images from photographic prints, posters, magazine pages, and similar sources for computer editing and display.',
      topicId: 6,
      id: 149,
      pronunciation: '/ˈskænə/',
      image_link: [
        'https://i.pinimg.com/236x/2a/ce/62/2ace62f519d9dc1306e8ecad1023a07d.jpg',
        'https://i.pinimg.com/236x/4d/b1/d8/4db1d8e17096cdfe06c5af9c2d524f3d.jpg',
        'https://i.pinimg.com/236x/d7/bb/9a/d7bb9a82b5f5fbcc3ab5715b92f6b3b1.jpg',
        'https://i.pinimg.com/236x/0a/81/a0/0a81a0877b0c1cbb6bce482d36e5736c.jpg',
      ],
      examples: [
        'Scanner is in the sentence.',
        'This sentence contains the word scanner.',
        'We can use the word scanner here.',
        'Here is an example of the word scanner.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'word',
          definition:
            'a single distinct meaningful element of speech or writing',
        },
        {
          word: 'phrase',
          definition:
            'a small group of words standing together as a conceptual unit, typically forming a component of a clause',
        },
        {
          word: 'vocabulary',
          definition:
            'the body of words used in a particular language or by a particular person or group',
        },
      ],
    },
    {
      word: 'headphones',
      definition:
        "Are a pair of small loudspeaker drivers worn on or around the head over a user's ears.",
      topicId: 6,
      id: 150,
      pronunciation: '/ˈhed.foʊnz/',
      image_link: [
        'https://i.pinimg.com/236x/55/a8/04/55a8040b27b707747534297f70dbf1af.jpg',
        'https://i.pinimg.com/236x/85/bc/9f/85bc9fe18d4faa6f76538485caad784b.jpg',
        'https://i.pinimg.com/236x/7b/bc/57/7bbc5782a17e37c2cc3b8b0eac1b1bfd.jpg',
        'https://i.pinimg.com/236x/0a/27/de/0a27de78ad75b78cbbd248cf7f721d42.jpg',
      ],
      examples: [
        'Headphones is in the sentence.',
        'This sentence contains the word headphones.',
        'We can use the word headphones here.',
        'Here is an example of the word headphones.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'loudspeakers',
          definition:
            'Are devices that convert electrical signals into sound. They emit sound from a single source.',
        },
        {
          word: 'earbuds',
          definition:
            'Are small, compact audio devices worn inside the ear canal, typically with no headband.',
        },
        {
          word: 'earphones',
          definition:
            'Are compact audio devices worn inside or around the ear, typically without a headband.',
        },
      ],
    },
    {
      word: 'microphone',
      definition: 'Is a device that converts sound into an electrical signal.',
      topicId: 6,
      id: 151,
      pronunciation: '/ˈmaɪ.kɹəˌfəʊn/',
      image_link: [
        'https://i.pinimg.com/236x/0d/01/2b/0d012b4469ed89df29ac9953ba4cf06b.jpg',
        'https://i.pinimg.com/236x/38/c3/e0/38c3e09dcae69400fd06b3b21fcefd2a.jpg',
        'https://i.pinimg.com/236x/e7/df/35/e7df3557ae8c341dbaf513804f1e746f.jpg',
        'https://i.pinimg.com/236x/96/8a/6e/968a6e25030b966bbc34898e5aac0963.jpg',
      ],
      examples: [
        'Microphone is in the sentence.',
        'This sentence contains the word microphone.',
        'We can use the word microphone here.',
        'Here is an example of the word microphone.',
      ],
      tdn: [
        {
          word: 'ether',
          definition:
            'The cryptocurrency generated by the Ethereum platform, used to pay for transaction fees and computational services on the Ethereum network.',
        },
        {
          word: 'ETH',
          definition: 'The symbol for ether.',
        },
        {
          word: 'ethereum',
          definition:
            'A decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, fraud, or third-party interference.',
        },
      ],
      ttn: [
        {
          word: 'muted',
          definition:
            'Silenced or turned off, especially referring to sound or volume.',
        },
        {
          word: 'silence',
          definition: 'Complete absence of sound; the state of being quiet.',
        },
        {
          word: 'mute',
          definition:
            'A device or setting that reduces or eliminates sound transmission.',
        },
      ],
    },
    {
      word: 'speaker',
      definition: 'Is an output device that produces sound.',
      topicId: 6,
      id: 152,
      pronunciation: '/ˈspiːkə/',
      image_link: [
        'https://i.pinimg.com/236x/dc/f2/b7/dcf2b7d826bc90ff797879dae030560c.jpg',
        'https://i.pinimg.com/236x/72/d8/6c/72d86cdcde2d8b5b6954531522e35d34.jpg',
        'https://i.pinimg.com/236x/9e/da/b8/9edab83c4fe18f9d13b7fc16075ad314.jpg',
        'https://i.pinimg.com/236x/ac/ba/c5/acbac5cc03c3cbc833b794ae8d186455.jpg',
      ],
      examples: [
        'Speaker is in the sentence.',
        'This sentence contains the word speaker.',
        'We can use the word speaker here.',
        'Here is an example of the word speaker.',
      ],
      tdn: [
        {
          word: 'token',
          definition:
            'A unit of value issued by a project or company, similar to shares in a company.',
        },
        {
          word: 'coin',
          definition:
            'A cryptocurrency that operates independently of any other platform.',
        },
        {
          word: 'digital asset',
          definition:
            'Anything that exists in a binary format and comes with the right to use.',
        },
      ],
      ttn: [
        {
          word: 'listener',
          definition:
            'A person who pays attention to and understands spoken language.',
        },
        {
          word: 'mute',
          definition: 'Unable to speak.',
        },
        {
          word: 'silence',
          definition: 'Complete absence of sound.',
        },
      ],
    },
    {
      word: 'USB drive',
      definition:
        'Is a small, portable device used for data storage that includes a flash memory and an integrated USB interface.',
      topicId: 6,
      id: 153,
      pronunciation: '',
      image_link: [
        'https://i.pinimg.com/236x/f4/b1/c1/f4b1c13de37c59c6aa8b622c0865110e.jpg',
        'https://i.pinimg.com/236x/0b/5d/d8/0b5dd8680669bb581814b4fbf4ca097b.jpg',
        'https://i.pinimg.com/236x/95/2f/3e/952f3ed0a749682ba7b2d1c637674701.jpg',
        'https://i.pinimg.com/236x/18/2d/93/182d93ab83a5db2d00893effd3095fd6.jpg',
      ],
      examples: [
        'Usb drive is in the sentence.',
        'This sentence contains the word USB drive.',
        'We can use the word USB drive here.',
        'Here is an example of the word USB drive.',
      ],
      tdn: [
        {
          word: 'smart contract',
          definition:
            'A self-executing contract with the terms of the agreement between buyer and seller being directly written into lines of code.',
        },
        {
          word: 'self-executing contract',
          definition:
            'A contract in which the terms of the agreement are pre-programmed with the ability to execute and enforce the terms.',
        },
        {
          word: 'automated contract',
          definition:
            'A contract that is automatically enforced by computer protocols.',
        },
      ],
      ttn: [
        {
          word: 'image',
          definition:
            'A visual representation or likeness of an object, person, or scene.',
        },
        {
          word: 'silence',
          definition: 'Complete absence of sound or noise.',
        },
        {
          word: 'gesture',
          definition:
            'A movement of part of the body, especially a hand or the head, to express an idea or meaning.',
        },
      ],
    },
    {
      word: 'external hard drive',
      definition:
        'Is a portable storage device that can be attached to a computer through a USB or other interface.',
      topicId: 6,
      id: 154,
      pronunciation: '',
      image_link: [
        'https://i.pinimg.com/236x/78/2d/4d/782d4d9cea6b1dd588d3f504c7e93cf3.jpg',
        'https://i.pinimg.com/236x/6d/23/e0/6d23e0624f57ccb993d15a08fefb8171.jpg',
        'https://i.pinimg.com/236x/c2/f5/8a/c2f58a49bfafcdb7ecf323ffa825f13f.jpg',
        'https://i.pinimg.com/236x/e1/ba/dc/e1badc29e4fa3fe17ae58f4f7d0ee03d.jpg',
      ],
      examples: [
        'External hard drive is in the sentence.',
        'This sentence contains the word external hard drive.',
        'We can use the word external hard drive here.',
        'Here is an example of the word external hard drive.',
      ],
      tdn: [
        {
          word: 'decentralized application',
          definition:
            'An application that runs on a decentralized network, such as a blockchain, rather than a centralized server.',
        },
        {
          word: 'dApp',
          definition: 'Short for decentralized application.',
        },
        {
          word: 'distributed app',
          definition:
            'An application that runs on a distributed network, such as a blockchain, rather than a centralized server.',
        },
      ],
      ttn: [
        {
          word: 'internal',
          definition:
            'Located or occurring within the confines of something; inner.',
        },
        {
          word: 'integrated',
          definition: 'Combined or amalgamated into a single unit.',
        },
        {
          word: 'built-in',
          definition:
            'Incorporated as an integral part of a structure or device.',
        },
      ],
    },
    {
      word: 'drone',
      definition:
        'Is an unmanned aircraft that can be remotely controlled or fly autonomously.',
      topicId: 6,
      id: 155,
      pronunciation: '/dɹəʊn/',
      image_link: [
        'https://i.pinimg.com/236x/1c/06/a7/1c06a7ee9933ff45bb4990010236564a.jpg',
        'https://i.pinimg.com/236x/2a/3a/c1/2a3ac1c6a09c2470d9974417f50764ae.jpg',
        'https://i.pinimg.com/236x/0f/59/53/0f5953aff53eaae0b3509e160abe44f0.jpg',
        'https://i.pinimg.com/236x/9f/86/ea/9f86eaa291893d81bbb29affa533f64d.jpg',
      ],
      examples: [
        'Drone is in the sentence.',
        'This sentence contains the word drone.',
        'We can use the word drone here.',
        'Here is an example of the word drone.',
      ],
      tdn: [
        {
          word: 'initial coin offering',
          definition:
            'A type of funding using cryptocurrencies. It is often a form of crowdfunding, although a private ICO (Initial Coin Offering) which does not seek public investment is also possible.',
        },
        {
          word: 'ICO',
          definition: 'Short for initial coin offering.',
        },
        {
          word: 'token sale',
          definition:
            'The process of selling tokens to investors to raise funds for a project.',
        },
      ],
      ttn: [
        {
          word: 'pilot',
          definition: 'A person who operates an aircraft.',
        },
        {
          word: 'manned aircraft',
          definition: 'An aircraft with a human pilot on board.',
        },
        {
          word: 'controller',
          definition:
            'A device or person that directs or regulates something, such as an aircraft.',
        },
      ],
    },
    {
      word: 'ball',
      definition:
        'Any object in the shape of a sphere, especially one used as a toy by children or in various sports such as tennis and football.',
      topicId: 7,
      id: 156,
      pronunciation: '/bɔːl/',
      image_link: [
        'https://i.pinimg.com/236x/1b/ca/e2/1bcae2230d784d878127366dc9cee332.jpg',
        'https://i.pinimg.com/236x/a5/5d/c8/a55dc8fd478c32463bdb397b552fa910.jpg',
        'https://i.pinimg.com/236x/6b/38/ef/6b38ef66e69c53fc92a56766ff56adff.jpg',
        'https://i.pinimg.com/236x/66/c0/2a/66c02a87060ac06d01d2b4d5def3800c.jpg',
      ],
      examples: [
        'Ball is in the sentence.',
        'This sentence contains the word ball.',
        'We can use the word ball here.',
        'Here is an example of the word ball.',
      ],
      tdn: [
        {
          word: 'mining',
          definition:
            'The process of using computational power to process transactions and secure the network, and in return, earning rewards in the form of cryptocurrency.',
        },
        {
          word: 'cryptomining',
          definition:
            'The process of validating and adding transactions to a blockchain.',
        },
        {
          word: 'hashing',
          definition:
            'The process of converting an input of any length into a fixed-size string of text using a mathematical function.',
        },
      ],
      ttn: [
        {
          word: 'cube',
          definition: 'A solid object with six square faces of equal size.',
        },
        {
          word: 'pyramid',
          definition:
            'A structure with a square or triangular base and sloping sides that meet at a point.',
        },
        {
          word: 'cylinder',
          definition:
            'A solid geometric figure with straight parallel sides and a circular or oval cross section.',
        },
      ],
    },
    {
      word: 'baseball',
      definition:
        'A bat-and-ball game played between two teams of nine players each who take turns batting and fielding.',
      topicId: 7,
      id: 157,
      pronunciation: '/ˈbeɪs.bɔːl/',
      image_link: [
        'https://i.pinimg.com/236x/82/ae/6d/82ae6d1c305822e7f37499661dc42f22.jpg',
        'https://i.pinimg.com/236x/25/53/f6/2553f6504f3d2421d74d421771a3410d.jpg',
        'https://i.pinimg.com/236x/89/a8/f1/89a8f190b103b751ba2927a8efc5830b.jpg',
        'https://i.pinimg.com/236x/13/57/60/135760c18cd58d6c289ac73b7f8f4d5b.jpg',
      ],
      examples: [
        'Baseball is in the sentence.',
        'This sentence contains the word baseball.',
        'We can use the word baseball here.',
        'Here is an example of the word baseball.',
      ],
      tdn: [
        {
          word: 'proof of work',
          definition:
            'A consensus algorithm for blockchain networks that requires participants to solve a difficult mathematical problem to validate transactions and create new blocks.',
        },
        {
          word: 'PoW',
          definition: 'Short for proof of work.',
        },
        {
          word: 'mining',
          definition:
            'The process of using computational power to process transactions and secure the network, and in return, earning rewards in the form of cryptocurrency.',
        },
      ],
      ttn: [
        {
          word: 'silent',
          definition: 'Making no sound; not speaking.',
        },
        {
          word: 'football',
          definition:
            'A game played with a round ball by two teams of eleven players on a field with a goal at each end.',
        },
        {
          word: 'hockey',
          definition:
            "A game played on ice or on a field by two teams of 11 players who try to hit a small rubber disc into the opponent's goal with a stick.",
        },
      ],
    },
    {
      word: 'golf',
      definition:
        'A sport in which players use clubs to hit a small ball into a series of holes on a course in as few strokes as possible.',
      topicId: 7,
      id: 158,
      pronunciation: '/ɡɒlf/',
      image_link: [
        'https://i.pinimg.com/236x/55/ac/0e/55ac0ef959078df310388ccbcfbdc4ba.jpg',
        'https://i.pinimg.com/236x/09/4c/89/094c89048a4abd2c764de83dda041dcc.jpg',
        'https://i.pinimg.com/236x/a2/79/45/a27945f9ba3389840ad16e3660e0e161.jpg',
        'https://i.pinimg.com/236x/9f/d6/cc/9fd6cc961cc10bc003992d350a9f6855.jpg',
      ],
      examples: [
        'Golf is in the sentence.',
        'This sentence contains the word golf.',
        'We can use the word golf here.',
        'Here is an example of the word golf.',
      ],
      tdn: [
        {
          word: 'proof of stake',
          definition:
            "A consensus algorithm for blockchain networks that selects validators based on the number of coins they hold and are willing to 'stake' as collateral.",
        },
        {
          word: 'PoS',
          definition: 'Short for proof of stake.',
        },
        {
          word: 'staking',
          definition:
            'The process of holding funds in a cryptocurrency wallet to support the operations of a blockchain network.',
        },
      ],
      ttn: [
        {
          word: 'indoor',
          definition:
            'Activities or sports that are conducted inside, away from an outdoor environment.',
        },
        {
          word: 'team',
          definition:
            'A sport where players work together as a group towards a common goal, often involving teamwork and coordination.',
        },
        {
          word: 'individual',
          definition:
            'A sport or activity where participants compete alone, without teammates or partners.',
        },
      ],
    },
    {
      word: 'swimming',
      definition:
        'The sport or activity of moving through water by using the arms, legs, and body in motions called strokes.',
      topicId: 7,
      id: 159,
      pronunciation: '/ˈswɪmɪŋ/',
      image_link: [
        'https://i.pinimg.com/236x/88/2a/a4/882aa40a27b566089d6fc8f0d8f2e0ac.jpg',
        'https://i.pinimg.com/236x/51/2b/0a/512b0ac1c5acc1f2f1e7a95851226de7.jpg',
        'https://i.pinimg.com/236x/18/ec/f5/18ecf5ba4331f0c0e7c8f4cd5b72e115.jpg',
        'https://i.pinimg.com/236x/e0/37/ec/e037ec889868c28e513c5ebab1c3ce90.jpg',
      ],
      examples: [
        'Swimming is in the sentence.',
        'This sentence contains the word swimming.',
        'We can use the word swimming here.',
        'Here is an example of the word swimming.',
      ],
      tdn: [
        {
          word: 'wallet',
          definition:
            'A digital tool that allows a user to store and manage their cryptocurrency holdings.',
        },
        {
          word: 'digital wallet',
          definition:
            'An electronic device or online service that allows an individual to make electronic transactions.',
        },
        {
          word: 'crypto wallet',
          definition:
            'A digital wallet that allows an individual to store and manage their cryptocurrency holdings.',
        },
      ],
      ttn: [
        {
          word: 'land',
          definition:
            "The solid part of the Earth's surface that is not covered by water.",
        },
        {
          word: 'running',
          definition:
            'The sport or activity of moving rapidly on foot, typically faster than walking.',
        },
        {
          word: 'stillness',
          definition: 'The absence of movement or sound.',
        },
      ],
    },
    {
      word: 'cricket',
      definition:
        'A bat-and-ball game played between two teams of eleven players on a field at the center of which is a 22-yard pitch.',
      topicId: 7,
      id: 160,
      pronunciation: '/ˈkrɪk.ɪt/',
      image_link: [
        'https://i.pinimg.com/236x/f3/3c/40/f33c40bc2645d97343b917a18ef6cd23.jpg',
        'https://i.pinimg.com/236x/f0/b6/86/f0b686f13d92e6c32492396fa2555fab.jpg',
        'https://i.pinimg.com/236x/d3/1f/f6/d31ff6977c0519e469bf3eef0673f4f5.jpg',
        'https://i.pinimg.com/236x/40/d4/33/40d43308663e3cdb26a3c204b0064e09.jpg',
      ],
      examples: [
        'Cricket is in the sentence.',
        'This sentence contains the word cricket.',
        'We can use the word cricket here.',
        'Here is an example of the word cricket.',
      ],
      tdn: [
        {
          word: 'exchange',
          definition:
            'A digital marketplace where traders can buy and sell cryptocurrencies using different fiat currencies or altcoins.',
        },
        {
          word: 'trading platform',
          definition:
            'A platform that facilitates the trading of financial instruments, such as cryptocurrencies.',
        },
        {
          word: 'marketplace',
          definition: 'A place where buyers and sellers meet to trade goods.',
        },
      ],
      ttn: [
        {
          word: 'silence',
          definition: 'Complete absence of sound.',
        },
        {
          word: 'action',
          definition: 'The fact or process of doing something.',
        },
        {
          word: 'deed',
          definition:
            'An action that is performed intentionally or consciously.',
        },
      ],
    },
    {
      word: 'rugby',
      definition:
        'A team sport played with an oval ball that may be kicked, carried, and passed from hand to hand.',
      topicId: 7,
      id: 161,
      pronunciation: '/ˈɹʌɡbi/',
      image_link: [
        'https://i.pinimg.com/236x/64/7d/6b/647d6b5da36a71e68d022c1f1a367b03.jpg',
        'https://i.pinimg.com/236x/c7/ec/c1/c7ecc1d24191d4544af96ce492d399b9.jpg',
        'https://i.pinimg.com/236x/ce/ae/d6/ceaed69ba76e011ea9b909bc34ae2aa7.jpg',
        'https://i.pinimg.com/236x/af/70/e6/af70e6c42dee4a7dac2fcfe49929e78c.jpg',
      ],
      examples: [
        'Rugby is in the sentence.',
        'This sentence contains the word rugby.',
        'We can use the word rugby here.',
        'Here is an example of the word rugby.',
      ],
      tdn: [
        {
          word: 'ether',
          definition:
            'The cryptocurrency generated by the Ethereum platform, used to pay for transaction fees and computational services on the Ethereum network.',
        },
        {
          word: 'ETH',
          definition: 'The symbol for ether.',
        },
        {
          word: 'ethereum',
          definition:
            'A decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, fraud, or third-party interference.',
        },
      ],
      ttn: [
        {
          word: 'individual',
          definition:
            'Relating to a single person or thing, as opposed to a group or team.',
        },
        {
          word: 'solo',
          definition: 'Performed alone; unaccompanied.',
        },
        {
          word: 'non-contact',
          definition: 'Not involving physical contact, especially in sports.',
        },
      ],
    },
    {
      word: 'volleyball',
      definition:
        'A game in which two teams hit an inflated ball over a high net using their hands.',
      topicId: 7,
      id: 162,
      pronunciation: '/ˈvɒlibɔ(ː)l/',
      image_link: [
        'https://i.pinimg.com/236x/54/d4/18/54d418a0ba14119027523e1e79a3c1f6.jpg',
        'https://i.pinimg.com/236x/41/e9/56/41e9563b318ca2c6cb9e129ce01ff72b.jpg',
        'https://i.pinimg.com/236x/d0/0b/bf/d00bbf37fa55481e1207a23df6b7b254.jpg',
        'https://i.pinimg.com/236x/eb/71/92/eb7192df474c686502b8045522e7079c.jpg',
      ],
      examples: [
        'Volleyball is in the sentence.',
        'This sentence contains the word volleyball.',
        'We can use the word volleyball here.',
        'Here is an example of the word volleyball.',
      ],
      tdn: [
        {
          word: 'token',
          definition:
            'A unit of value issued by a project or company, similar to shares in a company.',
        },
        {
          word: 'coin',
          definition:
            'A cryptocurrency that operates independently of any other platform.',
        },
        {
          word: 'digital asset',
          definition:
            'Anything that exists in a binary format and comes with the right to use.',
        },
      ],
      ttn: [
        {
          word: 'individual',
          definition:
            'Related to a single person or entity, rather than a group.',
        },
        {
          word: 'solitary',
          definition:
            'Being alone or performed alone without companionship or assistance.',
        },
        {
          word: 'non-team',
          definition:
            'Not involving or pertaining to a group of people working together.',
        },
      ],
    },
    {
      word: 'badminton',
      definition:
        'A racquet sport played using racquets to hit a shuttlecock across a net.',
      topicId: 7,
      id: 163,
      pronunciation: '/ˈbæd.mɪn.tən/',
      image_link: [
        'https://i.pinimg.com/236x/e6/ee/1e/e6ee1e5a56e5f5dc7dd32fef9a9eb1c1.jpg',
        'https://i.pinimg.com/236x/ae/5c/33/ae5c33441ef2a2b4ad4586604deb6628.jpg',
        'https://i.pinimg.com/236x/2d/2a/bc/2d2abcceb7d190475adb3549f8f8d91e.jpg',
        'https://i.pinimg.com/236x/23/1a/b1/231ab1ad7761163944343c96deed7b56.jpg',
      ],
      examples: [
        'Badminton is in the sentence.',
        'This sentence contains the word badminton.',
        'We can use the word badminton here.',
        'Here is an example of the word badminton.',
      ],
      tdn: [
        {
          word: 'smart contract',
          definition:
            'A self-executing contract with the terms of the agreement between buyer and seller being directly written into lines of code.',
        },
        {
          word: 'self-executing contract',
          definition:
            'A contract in which the terms of the agreement are pre-programmed with the ability to execute and enforce the terms.',
        },
        {
          word: 'automated contract',
          definition:
            'A contract that is automatically enforced by computer protocols.',
        },
      ],
      antonyms: [
        {
          word: 'football',
          definition:
            'A game played between two teams of eleven players with a round ball that may not be touched with the hands or arms during play except by the goalkeepers.',
        },
        {
          word: 'baseball',
          definition:
            'A bat-and-ball game played between two teams of nine players each, who take turns batting and fielding.',
        },
        {
          word: 'basketball',
          definition:
            'A game played between two teams of five players each, scoring points by throwing a ball through a high hoop mounted at each end of the court.',
        },
      ],
    },
    {
      word: 'cycling',
      definition: 'The sport or activity of riding a bicycle.',
      topicId: 7,
      id: 164,
      pronunciation: '/ˈsaɪk(ə)lɪŋ/',
      image_link: [
        'https://i.pinimg.com/236x/09/8e/5c/098e5cac17d2b721897ea1924a967057.jpg',
        'https://i.pinimg.com/236x/10/70/46/1070462f14c4d020c0a0df34839ef187.jpg',
        'https://i.pinimg.com/236x/e6/25/42/e62542b3bf023d44cd3be4e585a0305d.jpg',
        'https://i.pinimg.com/236x/88/43/ca/8843ca121254e3131839adf6a859dc23.jpg',
      ],
      examples: [
        'Cycling is in the sentence.',
        'This sentence contains the word cycling.',
        'We can use the word cycling here.',
        'Here is an example of the word cycling.',
      ],
      tdn: [
        {
          word: 'decentralized application',
          definition:
            'An application that runs on a decentralized network, such as a blockchain, rather than a centralized server.',
        },
        {
          word: 'dApp',
          definition: 'Short for decentralized application.',
        },
        {
          word: 'distributed app',
          definition:
            'An application that runs on a distributed network, such as a blockchain, rather than a centralized server.',
        },
      ],
      ttn: [
        {
          word: 'driving',
          definition: 'The act of operating a motor vehicle.',
        },
        {
          word: 'walking',
          definition: 'The act of moving on foot.',
        },
        {
          word: 'stationary',
          definition: 'Not moving; at rest.',
        },
      ],
    },
    {
      word: 'hockey',
      definition:
        "A sport in which two teams play against each other by trying to maneuver a ball or a puck into the opponent's goal using a hockey stick.",
      topicId: 7,
      id: 165,
      pronunciation: '/ˈhɒki/',
      image_link: [
        'https://i.pinimg.com/236x/28/c1/44/28c1447c83b6ee8c8d15a55ab2893aab.jpg',
        'https://i.pinimg.com/236x/2f/77/3f/2f773f62d5b9c98b067a3dabd1d0fd19.jpg',
        'https://i.pinimg.com/236x/b2/f0/ec/b2f0eccf75c44ba8eb39da70e31d5d3d.jpg',
        'https://i.pinimg.com/236x/7a/b9/1f/7ab91fcc2e07d9aa7c5ef3c978a2cb53.jpg',
      ],
      examples: [
        'Hockey is in the sentence.',
        'This sentence contains the word hockey.',
        'We can use the word hockey here.',
        'Here is an example of the word hockey.',
      ],
      tdn: [
        {
          word: 'initial coin offering',
          definition:
            'A type of funding using cryptocurrencies. It is often a form of crowdfunding, although a private ICO (Initial Coin Offering) which does not seek public investment is also possible.',
        },
        {
          word: 'ICO',
          definition: 'Short for initial coin offering.',
        },
        {
          word: 'token sale',
          definition:
            'The process of selling tokens to investors to raise funds for a project.',
        },
      ],
      ttn: [
        {
          word: 'word',
          definition:
            'A single distinct meaningful element of speech or writing, used with others (or sometimes alone) to form a sentence and typically shown with a space on either side when written or printed.',
        },
        {
          word: 'cryptography',
          definition: 'The art of writing or solving codes.',
        },
        {
          word: 'silence',
          definition: 'Complete absence of sound.',
        },
      ],
    },
    {
      word: 'surfing',
      definition:
        'The sport or activity of riding a wave toward the shore while standing or lying on a surfboard.',
      topicId: 7,
      id: 166,
      pronunciation: '/ˈsɝfɪŋ/',
      image_link: [
        'https://i.pinimg.com/236x/e1/26/84/e1268429511a4bb5b2c0567e8fe1a002.jpg',
        'https://i.pinimg.com/236x/3c/11/ac/3c11acc80ba52f843cb7abdfa2a44a2b.jpg',
        'https://i.pinimg.com/236x/2e/2c/fa/2e2cfaaab5b0eb62a1e564f887785137.jpg',
        'https://i.pinimg.com/236x/fb/90/0f/fb900f05899cb7bc93420fc7206aefbe.jpg',
      ],
      examples: [
        'Surfing is in the sentence.',
        'This sentence contains the word surfing.',
        'We can use the word surfing here.',
        'Here is an example of the word surfing.',
      ],
      tdn: [
        {
          word: 'mining',
          definition:
            'The process of using computational power to process transactions and secure the network, and in return, earning rewards in the form of cryptocurrency.',
        },
        {
          word: 'cryptomining',
          definition:
            'The process of validating and adding transactions to a blockchain.',
        },
        {
          word: 'hashing',
          definition:
            'The process of converting an input of any length into a fixed-size string of text using a mathematical function.',
        },
      ],
      ttn: [
        {
          word: 'mountain climbing',
          definition: 'The sport or activity of ascending mountains.',
        },
        {
          word: 'skiing',
          definition: 'The sport or activity of sliding over snow on skis.',
        },
        {
          word: 'swimming',
          definition:
            'The sport or activity of moving through water by means of the limbs.',
        },
      ],
    },
    {
      word: 'skating',
      definition: 'The activity or sport of moving on skates.',
      topicId: 7,
      id: 167,
      pronunciation: '/ˈskeɪtɪŋ/',
      image_link: [
        'https://i.pinimg.com/236x/c6/b0/79/c6b0794887e04f02027147fc8970e7b5.jpg',
        'https://i.pinimg.com/236x/35/af/0d/35af0d4eeb8b02e0626be0eb9ee462ef.jpg',
        'https://i.pinimg.com/236x/81/7f/2c/817f2caf8bdb79d7e63a021abae494f3.jpg',
        'https://i.pinimg.com/236x/58/d8/82/58d882f5a6ef43c73a178f2e6ec038b3.jpg',
      ],
      examples: [
        'Skating is in the sentence.',
        'This sentence contains the word skating.',
        'We can use the word skating here.',
        'Here is an example of the word skating.',
      ],
      tdn: [
        {
          word: 'proof of work',
          definition:
            'A consensus algorithm for blockchain networks that requires participants to solve a difficult mathematical problem to validate transactions and create new blocks.',
        },
        {
          word: 'PoW',
          definition: 'Short for proof of work.',
        },
        {
          word: 'mining',
          definition:
            'The process of using computational power to process transactions and secure the network, and in return, earning rewards in the form of cryptocurrency.',
        },
      ],
      ttn: [
        {
          word: 'walking',
          definition: 'Moving on foot at a normal pace.',
        },
        {
          word: 'running',
          definition: 'Moving swiftly on foot, faster than walking.',
        },
        {
          word: 'cycling',
          definition: 'Riding a bicycle or moving on a bicycle.',
        },
      ],
    },
    {
      word: 'skiing',
      definition: 'The sport or activity of moving over snow on skis.',
      topicId: 7,
      id: 168,
      pronunciation: '/ˈskiɪŋ/',
      image_link: [
        'https://i.pinimg.com/236x/eb/ef/27/ebef274e527bab0274b9cb03058ea9b8.jpg',
        'https://i.pinimg.com/236x/36/be/12/36be1290508048c9fdd3bf1511ffa592.jpg',
        'https://i.pinimg.com/236x/5d/39/89/5d3989a359641449574f0d744540fb36.jpg',
        'https://i.pinimg.com/236x/4f/1e/7e/4f1e7e87311626f9782898a1611409f1.jpg',
      ],
      examples: [
        'Skiing is in the sentence.',
        'This sentence contains the word skiing.',
        'We can use the word skiing here.',
        'Here is an example of the word skiing.',
      ],
      tdn: [
        {
          word: 'proof of stake',
          definition:
            "A consensus algorithm for blockchain networks that selects validators based on the number of coins they hold and are willing to 'stake' as collateral.",
        },
        {
          word: 'PoS',
          definition: 'Short for proof of stake.',
        },
        {
          word: 'staking',
          definition:
            'The process of holding funds in a cryptocurrency wallet to support the operations of a blockchain network.',
        },
      ],
      ttn: [
        {
          word: 'word',
          definition: 'The sport or activity of moving over snow on skis.',
        },
        {
          word: 'snowboarding',
          definition:
            'The sport or activity of riding on a board over snow, especially while performing tricks.',
        },
        {
          word: 'surfing',
          definition:
            'The sport or activity of riding on waves while standing or lying on a surfboard.',
        },
        {
          word: 'skating',
          definition:
            'The sport or activity of moving on ice skates, roller skates, or a skateboard.',
        },
      ],
    },
    {
      word: 'table tennis',
      definition:
        'A sport in which two or four players hit a lightweight ball back and forth across a table using small rackets.',
      topicId: 7,
      id: 169,
      pronunciation: '/ˈteɪ.bəl ˌten.ɪs/',
      image_link: [
        'https://i.pinimg.com/236x/07/cf/7b/07cf7b58d6034ea69503fdee952faff0.jpg',
        'https://i.pinimg.com/236x/33/09/f5/3309f5576155bf667feaac5d4ca2da96.jpg',
        'https://i.pinimg.com/236x/f7/92/71/f79271f6d70c01a9833d9ab45fdb2a40.jpg',
        'https://i.pinimg.com/236x/f0/02/85/f0028598f740c197f8e98bb4994f75ab.jpg',
      ],
      examples: [
        'Table tennis is in the sentence.',
        'This sentence contains the word table tennis.',
        'We can use the word table tennis here.',
        'Here is an example of the word table tennis.',
      ],
      tdn: [
        {
          word: 'wallet',
          definition:
            'A digital tool that allows a user to store and manage their cryptocurrency holdings.',
        },
        {
          word: 'digital wallet',
          definition:
            'An electronic device or online service that allows an individual to make electronic transactions.',
        },
        {
          word: 'crypto wallet',
          definition:
            'A digital wallet that allows an individual to store and manage their cryptocurrency holdings.',
        },
      ],
      ttn: [
        {
          word: 'silence',
          definition: 'Complete absence of sound.',
        },
        {
          word: 'stillness',
          definition: 'Absence of movement or sound.',
        },
        {
          word: 'calm',
          definition:
            'Not showing or feeling nervousness, anger, or other strong emotions.',
        },
      ],
    },
    {
      word: 'gymnastics',
      definition:
        'A sport involving exercises requiring balance, strength, flexibility, agility, coordination, and endurance.',
      topicId: 7,
      id: 170,
      pronunciation: '/dʒɪmˈnæs.tɪks/',
      image_link: [
        'https://i.pinimg.com/236x/39/00/e0/3900e040f2bb2718391567ed048c66d6.jpg',
        'https://i.pinimg.com/236x/72/b7/96/72b7969a52020b3b2ec5801b12dccefd.jpg',
        'https://i.pinimg.com/236x/57/ca/6a/57ca6aaa6bbe46b713f62de6518331f3.jpg',
        'https://i.pinimg.com/236x/a9/ae/e4/a9aee4b75f2be081c60ad5681d992011.jpg',
      ],
      examples: [
        'Gymnastics is in the sentence.',
        'This sentence contains the word gymnastics.',
        'We can use the word gymnastics here.',
        'Here is an example of the word gymnastics.',
      ],
      tdn: [
        {
          word: 'exchange',
          definition:
            'A digital marketplace where traders can buy and sell cryptocurrencies using different fiat currencies or altcoins.',
        },
        {
          word: 'trading platform',
          definition:
            'A platform that facilitates the trading of financial instruments, such as cryptocurrencies.',
        },
        {
          word: 'marketplace',
          definition: 'A place where buyers and sellers meet to trade goods.',
        },
      ],
      ttn: [
        {
          word: 'inactivity',
          definition: 'Lack of physical movement or exercise.',
        },
        {
          word: 'lethargy',
          definition: 'A state of tiredness, sluggishness, or laziness.',
        },
        {
          word: 'immobility',
          definition:
            'The state of not being able to move or being motionless.',
        },
      ],
    },
    {
      word: 'fencing',
      definition:
        'A sport in which two competitors fight using rapier-style swords, winning points by making contact with their opponent.',
      topicId: 7,
      id: 171,
      pronunciation: '/ˈfɛnsɪŋ/',
      image_link: [
        'https://i.pinimg.com/236x/f3/66/78/f36678a75ccddae385e7b563ceb7a774.jpg',
        'https://i.pinimg.com/236x/2f/e9/a2/2fe9a261378cf375918b3d82267d3e3c.jpg',
        'https://i.pinimg.com/236x/54/83/26/54832661066ae7ddac4a101b988a75fd.jpg',
        'https://i.pinimg.com/236x/00/fe/34/00fe340ce3e9d6a9fbc4b919fe106149.jpg',
      ],
      examples: [
        'Fencing is in the sentence.',
        'This sentence contains the word fencing.',
        'We can use the word fencing here.',
        'Here is an example of the word fencing.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'action',
          definition: 'A deed or something done.',
        },
        {
          word: 'agreement',
          definition: 'Harmony or conformity in opinion or feeling.',
        },
        {
          word: 'peace',
          definition: 'Freedom from disturbance; tranquility.',
        },
      ],
    },
    {
      word: 'rowing',
      definition: 'The sport or activity of moving a boat by using oars.',
      topicId: 7,
      id: 172,
      pronunciation: '/ˈɹoʊɪŋ/',
      image_link: [
        'https://i.pinimg.com/236x/b5/5a/58/b55a58f032fc4b2c0c0c61dcb3161b33.jpg',
        'https://i.pinimg.com/236x/d3/28/49/d32849e09559b681fd42f69783fa3a5e.jpg',
        'https://i.pinimg.com/236x/ce/b8/9d/ceb89d35232998481367da10fc7d9c6a.jpg',
        'https://i.pinimg.com/236x/56/df/5f/56df5f6d9d68f32c46628ff5f951f10b.jpg',
      ],
      examples: [
        'Rowing is in the sentence.',
        'This sentence contains the word rowing.',
        'We can use the word rowing here.',
        'Here is an example of the word rowing.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'word',
          definition:
            'A single distinct meaningful element of speech or writing.',
        },
        {
          word: 'running',
          definition: 'Moving on foot at a faster pace than walking.',
        },
        {
          word: 'drifting',
          definition:
            'Being carried along by currents of air or water without control.',
        },
      ],
    },
    {
      word: 'archery',
      definition: 'The sport or skill of shooting arrows with a bow.',
      topicId: 7,
      id: 173,
      pronunciation: '/ɑɹtʃəɹiː/',
      image_link: [
        'https://i.pinimg.com/236x/a6/75/ff/a675fff46b722ff49532529bebd9ecd0.jpg',
        'https://i.pinimg.com/236x/1f/c6/66/1fc666e8086f228013e05130b71bef70.jpg',
        'https://i.pinimg.com/236x/b2/4f/60/b24f60701488d071763f2e6c9b50bbfa.jpg',
        'https://i.pinimg.com/236x/78/65/7f/78657fcd709e2c637e710725d97574d5.jpg',
      ],
      examples: [
        'Archery is in the sentence.',
        'This sentence contains the word archery.',
        'We can use the word archery here.',
        'Here is an example of the word archery.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'word',
          definition: 'archery',
        },
        {
          word: 'ignorance',
          definition: 'lack of knowledge or awareness',
        },
        {
          word: 'incompetence',
          definition: 'lack of skill or ability',
        },
        {
          word: 'disinterest',
          definition: 'lack of interest or concern',
        },
      ],
    },
    {
      word: 'boxing',
      definition:
        'A sport in which two people fight by hitting each other with their fists, usually while wearing boxing gloves in a boxing ring.',
      topicId: 7,
      id: 174,
      pronunciation: '/ˈbɒksɪŋ/',
      image_link: [
        'https://i.pinimg.com/236x/67/27/8f/67278f16933ba1e7260f740e123c47db.jpg',
        'https://i.pinimg.com/236x/b1/5d/b4/b15db460abc9aa637b377a68f8395280.jpg',
        'https://i.pinimg.com/236x/d4/c5/a4/d4c5a4438599eb6fb4c52210479ea360.jpg',
        'https://i.pinimg.com/236x/b5/80/2d/b5802de5e3d1b704763b5b61ec7fc65d.jpg',
      ],
      examples: [
        'Boxing is in the sentence.',
        'This sentence contains the word boxing.',
        'We can use the word boxing here.',
        'Here is an example of the word boxing.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'peace',
          definition: 'A state or period in which there is no war or fighting.',
        },
        {
          word: 'pacifism',
          definition:
            'The belief that disputes between nations should and can be settled peacefully.',
        },
        {
          word: 'nonviolence',
          definition:
            'The policy, practice, or technique of refraining from the use of violence.',
        },
      ],
    },
    {
      word: 'adventure',
      definition:
        'An exciting or unusual experience, often involving travel or exploration.',
      topicId: 8,
      id: 175,
      pronunciation: '/ædˈvɛnt͡ʃɚ/',
      image_link: [
        'https://i.pinimg.com/236x/34/9d/45/349d45d4bb3e76c72a4475b9163de5cc.jpg',
        'https://i.pinimg.com/236x/fa/41/d1/fa41d199e9be453fe1f0dc103e4c615f.jpg',
        'https://i.pinimg.com/236x/b9/17/fd/b917fdc63744ad30426969f6d5402ce8.jpg',
        'https://i.pinimg.com/236x/de/57/c5/de57c584a1bf7660b44a3ecbe719696d.jpg',
      ],
      examples: [
        'Adventure is in the sentence.',
        'This sentence contains the word adventure.',
        'We can use the word adventure here.',
        'Here is an example of the word adventure.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'routine',
          definition:
            'A sequence of actions regularly followed; a fixed program.',
        },
        {
          word: 'boredom',
          definition:
            'The state of being weary and restless through lack of interest.',
        },
        {
          word: 'monotony',
          definition:
            'Lack of variety and interest; tedious repetition and routine.',
        },
      ],
    },
    {
      word: 'exploration',
      definition:
        'The action of traveling in or through an unfamiliar area in order to learn about it.',
      topicId: 8,
      id: 176,
      pronunciation: '/ˌɛkspləˈɹeɪʃən/',
      image_link: [
        'https://i.pinimg.com/236x/9a/94/c6/9a94c6c0285e8a92b70ccdbb4d2766d9.jpg',
        'https://i.pinimg.com/236x/c2/0a/f3/c20af35202c83af1b5af9b44ed32d222.jpg',
        'https://i.pinimg.com/236x/40/25/20/4025208c6cb2955a3ba193f99244cd88.jpg',
        'https://i.pinimg.com/236x/d7/54/74/d75474fc7743a748b218bcef972953e9.jpg',
      ],
      examples: [
        'Exploration is in the sentence.',
        'This sentence contains the word exploration.',
        'We can use the word exploration here.',
        'Here is an example of the word exploration.',
      ],
      tdn: [],
    },
    {
      word: 'journey',
      definition:
        'An act of traveling from one place to another, especially over a long distance.',
      topicId: 8,
      id: 177,
      pronunciation: '/ˈd͡ʒɜːni/',
      image_link: [
        'https://i.pinimg.com/236x/24/65/10/246510cb9fcd1211372b3afebede8369.jpg',
        'https://i.pinimg.com/236x/4b/af/1a/4baf1abf215eeab23c5f784e39a47138.jpg',
        'https://i.pinimg.com/236x/6f/48/12/6f4812b5c5ed679d0487491e9768aa13.jpg',
        'https://i.pinimg.com/236x/83/f3/a6/83f3a60a17059bda45a5c4528d3bd24f.jpg',
      ],
      examples: [
        'Journey is in the sentence.',
        'This sentence contains the word journey.',
        'We can use the word journey here.',
        'Here is an example of the word journey.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'stationary',
          definition: 'Not moving; staying in one place.',
        },
        {
          word: 'destination',
          definition:
            'The place to which someone or something is going or being sent.',
        },
        {
          word: 'arrival',
          definition: 'The action or process of arriving at a destination.',
        },
      ],
    },
    {
      word: 'tour',
      definition:
        'A journey during which several places are visited, especially for pleasure or education.',
      topicId: 8,
      id: 178,
      pronunciation: '/tɔː(ɹ)/',
      image_link: [
        'https://i.pinimg.com/236x/55/07/da/5507dac495713459405a1dd6dc891d61.jpg',
        'https://i.pinimg.com/236x/f9/4c/58/f94c5898fcc5227a6b969b303bf8a1b6.jpg',
        'https://i.pinimg.com/236x/76/cd/6c/76cd6c6aedd584cfa88d0ddd4207cc8f.jpg',
        'https://i.pinimg.com/236x/dd/42/ac/dd42acaa45c952bafc459f7f158f1cd4.jpg',
      ],
      examples: [
        'Tour is in the sentence.',
        'This sentence contains the word tour.',
        'We can use the word tour here.',
        'Here is an example of the word tour.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'stay',
          definition: 'To remain in one place or location without traveling.',
        },
        {
          word: 'stagnation',
          definition:
            'A state of not moving or progressing; lack of development or activity.',
        },
        {
          word: 'residence',
          definition:
            'The act or fact of dwelling in a place for a prolonged period.',
        },
      ],
    },
    {
      word: 'excursion',
      definition:
        'A short journey or trip, especially one taken as a leisure activity.',
      topicId: 8,
      id: 179,
      pronunciation: '/ɛks.kɜː(ɹ).ʃən/',
      image_link: [
        'https://i.pinimg.com/236x/11/17/8c/11178c53c672dbba0d2481bf84bdb3ec.jpg',
        'https://i.pinimg.com/236x/b2/db/41/b2db419d08bb89d91fe7b7d3389485d0.jpg',
        'https://i.pinimg.com/236x/12/cd/7b/12cd7bec536a5b3c5d16a7f9849bc1b8.jpg',
        'https://i.pinimg.com/236x/ed/a8/d3/eda8d311ce7e136a3ae9772680805ee6.jpg',
      ],
      examples: [
        'Excursion is in the sentence.',
        'This sentence contains the word excursion.',
        'We can use the word excursion here.',
        'Here is an example of the word excursion.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'stagnation',
          definition: 'A state of inactivity or lack of movement.',
        },
        {
          word: 'commute',
          definition:
            "A regular journey of some distance to and from one's place of work.",
        },
        {
          word: 'restraint',
          definition:
            'The action of keeping something under control or within limits.',
        },
      ],
    },
    {
      word: 'voyage',
      definition: 'A long journey involving travel by sea or in space.',
      topicId: 8,
      id: 180,
      pronunciation: '/ˈvɔɪ.ɪdʒ/',
      image_link: [
        'https://i.pinimg.com/236x/ff/84/21/ff84217b83a2622df74618c038a898a4.jpg',
        'https://i.pinimg.com/236x/fa/95/98/fa95986f2c408098531ca7cc78aee3a4.jpg',
        'https://i.pinimg.com/236x/21/46/53/214653fca16c0b37d87225fa84031e1e.jpg',
        'https://i.pinimg.com/236x/8b/b4/7b/8bb47bda070fa3952b519d0808dcf5e2.jpg',
      ],
      examples: [
        'Voyage is in the sentence.',
        'This sentence contains the word voyage.',
        'We can use the word voyage here.',
        'Here is an example of the word voyage.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'stay',
          definition: 'To remain in one place; not to go on a journey.',
        },
        {
          word: 'arrival',
          definition:
            'The act of reaching a destination or endpoint of a journey.',
        },
        {
          word: 'departure',
          definition: 'The act of leaving or beginning a journey.',
        },
      ],
    },
    {
      word: 'picturesque',
      definition:
        'Visually attractive, especially in a quaint or charming way.',
      topicId: 8,
      id: 181,
      pronunciation: '/pɪktʃəˈɹɛsk/',
      image_link: [
        'https://i.pinimg.com/236x/7e/f0/3c/7ef03c956640d2a84bd09a3d20d6a2b2.jpg',
        'https://i.pinimg.com/236x/70/12/75/701275b888049e4a6c3a031e946250f2.jpg',
        'https://i.pinimg.com/236x/4c/0c/17/4c0c173491302e0683821f672007fd49.jpg',
        'https://i.pinimg.com/236x/30/af/c6/30afc615d0cf76c22adbb017bb240b07.jpg',
      ],
      examples: [
        'Picturesque is in the sentence.',
        'This sentence contains the word picturesque.',
        'We can use the word picturesque here.',
        'Here is an example of the word picturesque.',
      ],
      tdn: [
        {
          word: 'automation',
          definition:
            'The use of largely automatic equipment in a system of operation or production.',
        },
        {
          word: 'robotization',
          definition: 'The use of robots in manufacturing or other processes.',
        },
        {
          word: 'mechanization',
          definition:
            'The process of changing from working largely or exclusively by hand or with animals to doing that work with machinery.',
        },
      ],
      ttn: [
        {
          word: 'stay',
          definition: 'To remain in one place; not to go on a journey.',
        },
        {
          word: 'arrival',
          definition:
            'The act of reaching a destination or endpoint of a journey.',
        },
        {
          word: 'departure',
          definition: 'The act of leaving or beginning a journey.',
        },
      ],
    },
    {
      word: 'exotic',
      definition:
        'Originating from or characteristic of a distant foreign country.',
      topicId: 8,
      id: 182,
      pronunciation: '/ɪɡˈzɒtɪk/',
      image_link: [
        'https://i.pinimg.com/236x/40/27/f9/4027f9735cb4346203c184a350da9a41.jpg',
        'https://i.pinimg.com/236x/21/0e/88/210e883eb29a4d611722807bbdbc1775.jpg',
        'https://i.pinimg.com/236x/3a/e4/88/3ae488c16eca2f1b8554bc027f876366.jpg',
        'https://i.pinimg.com/236x/44/14/05/4414053ed3f38963397c9cfc85d58c57.jpg',
      ],
      examples: [
        'Exotic is in the sentence.',
        'This sentence contains the word exotic.',
        'We can use the word exotic here.',
        'Here is an example of the word exotic.',
      ],
      tdn: [
        {
          word: 'cybersecurity',
          definition:
            'The state of being protected against the criminal or unauthorized use of electronic data, or the measures taken to achieve this.',
        },
        {
          word: 'information security',
          definition:
            'The practice of preventing unauthorized access, use, disclosure, disruption, modification, or destruction of information.',
        },
        {
          word: 'network security',
          definition:
            'The practice of protecting a computer network from intruders, whether targeted attackers or opportunistic malware.',
        },
      ],
      ttn: [
        {
          word: 'familiar',
          definition: 'Commonly or generally known or seen.',
        },
        {
          word: 'native',
          definition: 'Belonging to a particular place by birth or origin.',
        },
        {
          word: 'local',
          definition:
            'Relating to or occurring in a particular area, city, or town.',
        },
      ],
    },
    {
      word: 'scenic',
      definition: 'Having beautiful natural scenery.',
      topicId: 8,
      id: 183,
      pronunciation: '/ˈsiːnɪk/',
      image_link: [
        'https://i.pinimg.com/236x/01/04/bf/0104bfaa3bc8db5a634befb62b1c3606.jpg',
        'https://i.pinimg.com/236x/74/57/cc/7457cc81683f06cc139551fdb8330305.jpg',
        'https://i.pinimg.com/236x/c5/30/e1/c530e10750dee6ee870a4cf1c9adfad2.jpg',
        'https://i.pinimg.com/236x/68/66/7e/68667ed6b6e62368245460eabf601b2d.jpg',
      ],
      examples: [
        'Scenic is in the sentence.',
        'This sentence contains the word scenic.',
        'We can use the word scenic here.',
        'Here is an example of the word scenic.',
      ],
      tdn: [
        {
          word: 'big data',
          definition:
            'Extremely large data sets that may be analyzed computationally to reveal patterns, trends, and associations, especially relating to human behavior and interactions.',
        },
        {
          word: 'data analytics',
          definition:
            'The process of examining data sets in order to draw conclusions about the information they contain.',
        },
        {
          word: 'data science',
          definition:
            'An inter-disciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.',
        },
      ],
      ttn: [
        {
          word: 'unsightly',
          definition: 'Unpleasant to look at; not attractive.',
        },
        {
          word: 'dreary',
          definition:
            'Dull, bleak, and lifeless, often referring to landscapes.',
        },
        {
          word: 'bleak',
          definition: 'Lacking vegetation and exposed to the elements; barren.',
        },
      ],
    },
    {
      word: 'cultural',
      definition:
        'Relating to the ideas, customs, and social behavior of a society.',
      topicId: 8,
      id: 184,
      pronunciation: '/ˈkʌlt͡ʃəɹəl/',
      image_link: [
        'https://i.pinimg.com/236x/18/c9/f6/18c9f60817c8cb3fb2fec6b3ecf93d92.jpg',
        'https://i.pinimg.com/236x/89/14/9f/89149f707f2c3e14e3ea4799e0d7612f.jpg',
        'https://i.pinimg.com/236x/85/5a/92/855a9277d2e5c2687cd41f37ccc0c4f8.jpg',
        'https://i.pinimg.com/236x/c6/f3/89/c6f38931b6deab22d0a02bffe3c5487f.jpg',
      ],
      examples: [
        'Cultural is in the sentence.',
        'This sentence contains the word cultural.',
        'We can use the word cultural here.',
        'Here is an example of the word cultural.',
      ],
      tdn: [
        {
          word: 'internet of things',
          definition:
            'The interconnection via the Internet of computing devices embedded in everyday objects, enabling them to send and receive data.',
        },
        {
          word: 'IoT',
          definition: 'Abbreviation for Internet of Things.',
        },
        {
          word: 'connected devices',
          definition:
            'Devices that can connect to the internet and communicate with other devices.',
        },
      ],
      ttn: [
        {
          word: 'physical',
          definition:
            'Relating to the body or material things, rather than the mind or spirit.',
        },
        {
          word: 'individual',
          definition:
            'Relating to a single person or thing, considered separately rather than as part of a group.',
        },
        {
          word: 'universal',
          definition:
            'Relating to or done by all people or things in the world or in a particular group; applicable to all cases.',
        },
      ],
    },
    {
      word: 'authentic',
      definition: 'Representing something in its true or original form.',
      topicId: 8,
      id: 185,
      pronunciation: '/ɒ.ˈθɛn.tɪk/',
      image_link: [
        'https://i.pinimg.com/236x/6d/46/27/6d46273807bcc43cd3024bb48cbf9786.jpg',
        'https://i.pinimg.com/236x/14/54/e0/1454e087310e2cf4c7f7bc39b7f05375.jpg',
        'https://i.pinimg.com/236x/53/d7/7a/53d77a63f4fd87e17e29622585add4d4.jpg',
        'https://i.pinimg.com/236x/5a/f6/fd/5af6fd15a5e4329606365debd1315bb9.jpg',
      ],
      examples: [
        'Authentic is in the sentence.',
        'This sentence contains the word authentic.',
        'We can use the word authentic here.',
        'Here is an example of the word authentic.',
      ],
      tdn: [
        {
          word: 'machine learning',
          definition:
            'A type of artificial intelligence (AI) that allows software applications to become more accurate in predicting outcomes without being explicitly programmed.',
        },
        {
          word: 'ML',
          definition: 'Abbreviation for machine learning.',
        },
        {
          word: 'algorithm training',
          definition:
            'The process of using data to train an algorithm to make accurate predictions.',
        },
      ],
      ttn: [
        {
          word: 'fake',
          definition: 'Not genuine; counterfeit or false.',
        },
        {
          word: 'spurious',
          definition: 'Not genuine, authentic, or true; false or fake.',
        },
        {
          word: 'inauthentic',
          definition:
            'Not truly representing the origin or authorship; not genuine.',
        },
      ],
    },
    {
      word: 'historic',
      definition: 'Famous or important in history, or potentially so.',
      topicId: 8,
      id: 186,
      pronunciation: '/(h)ɪˈstɒɹɪk/',
      image_link: [
        'https://i.pinimg.com/236x/6f/de/df/6fdedfdca55dba605220ea3b49735ac5.jpg',
        'https://i.pinimg.com/236x/d7/bd/ad/d7bdaddd77f61725c0937a794c35832a.jpg',
        'https://i.pinimg.com/236x/87/b9/5b/87b95b19e4e56d4742a5bd89bc2599bb.jpg',
        'https://i.pinimg.com/236x/ba/e5/5a/bae55ae95111a8702f22132992682ef2.jpg',
      ],
      examples: [
        'Historic is in the sentence.',
        'This sentence contains the word historic.',
        'We can use the word historic here.',
        'Here is an example of the word historic.',
      ],
      tdn: [
        {
          word: 'cloud storage',
          definition:
            'A model of computer data storage in which the digital data is stored in logical pools, the physical storage spans multiple servers, and the physical environment is typically owned and managed by a hosting company.',
        },
        {
          word: 'online storage',
          definition:
            'A model of computer data storage in which the digital data is stored in logical pools, the physical storage spans multiple servers, and the physical environment is typically owned and managed by a hosting company.',
        },
        {
          word: 'remote storage',
          definition:
            "A model of computer data storage where data is stored on remote servers accessed from the internet or 'cloud'.",
        },
      ],
      ttn: [
        {
          word: 'ordinary',
          definition:
            'Commonplace or unremarkable, lacking historical significance.',
        },
        {
          word: 'obscure',
          definition: 'Not well-known or important in history.',
        },
        {
          word: 'mundane',
          definition:
            'Routine, ordinary, lacking special historical importance.',
        },
      ],
    },
    {
      word: 'explore',
      definition:
        'Travel in or through (an unfamiliar country or area) in order to learn about or familiarize oneself with it.',
      topicId: 8,
      id: 187,
      pronunciation: '/ɪkˈsplɔː/',
      image_link: [
        'https://i.pinimg.com/236x/bd/7b/1d/bd7b1d5a5e7720a7a78db5872f0aaae0.jpg',
        'https://i.pinimg.com/236x/76/d0/e2/76d0e2342720e8da948492f61df7d7a6.jpg',
        'https://i.pinimg.com/236x/20/80/c8/2080c8c261970badad2b9301b4d02e7b.jpg',
        'https://i.pinimg.com/236x/12/cf/d0/12cfd0dd1d064cd21770d3767c20ddab.jpg',
      ],
      examples: [
        'Explore is in the sentence.',
        'This sentence contains the word explore.',
        'We can use the word explore here.',
        'Here is an example of the word explore.',
      ],
      tdn: [
        {
          word: '5G',
          definition:
            'The fifth generation technology standard for broadband cellular networks, which cellular phone companies began deploying worldwide in 2019, and is the planned successor to the 4G networks which provide connectivity to most current cellphones.',
        },
        {
          word: 'fifth generation',
          definition: 'The latest generation of cellular network technology.',
        },
        {
          word: 'next-gen wireless',
          definition:
            'The latest generation of wireless technology, typically referring to 5G.',
        },
      ],
      ttn: [
        {
          word: 'ignore',
          definition:
            'Refuse to take notice of or acknowledge; disregard intentionally.',
        },
        {
          word: 'stay',
          definition: 'Remain in the same place or position.',
        },
        {
          word: 'confine',
          definition:
            'Keep or restrict someone or something within certain limits.',
        },
      ],
    },
    {
      word: 'discover',
      definition:
        'Find (something or someone) unexpectedly or in the course of a search.',
      topicId: 8,
      id: 188,
      pronunciation: '/dɪsˈkʊvə/',
      image_link: [
        'https://i.pinimg.com/236x/e3/e4/03/e3e403bb600030802dc694fb043bc8b7.jpg',
        'https://i.pinimg.com/236x/45/7b/40/457b40ee8a7a4a1612cb438ffb883efc.jpg',
        'https://i.pinimg.com/236x/ba/01/8a/ba018a210eb5c12ca50e0c64ac45edd5.jpg',
        'https://i.pinimg.com/236x/79/a3/a6/79a3a61f3f5a13fb7bf8aa9c1d684c9a.jpg',
      ],
      examples: [
        'Discover is in the sentence.',
        'This sentence contains the word discover.',
        'We can use the word discover here.',
        'Here is an example of the word discover.',
      ],
      tdn: [
        {
          word: 'quantum computing',
          definition:
            'The use of quantum-mechanical phenomena such as superposition and entanglement to perform computation.',
        },
        {
          word: 'quantum processor',
          definition:
            'A processor that uses quantum-mechanical phenomena to perform computation.',
        },
        {
          word: 'quantum technology',
          definition: 'Technology that uses principles of quantum mechanics.',
        },
      ],
      ttn: [
        {
          word: 'conceal',
          definition: 'Keep from sight; hide.',
        },
        {
          word: 'ignore',
          definition: 'Refuse to take notice of or acknowledge.',
        },
        {
          word: 'overlook',
          definition: 'Fail to notice or consider.',
        },
      ],
    },
    {
      word: 'experience',
      definition: 'Undergo (an event or occurrence).',
      topicId: 8,
      id: 189,
      pronunciation: '/ɪkˈspɪə.ɹɪəns/',
      image_link: [
        'https://i.pinimg.com/236x/72/e1/17/72e117538c1fe1a0e9c082278d3aed30.jpg',
        'https://i.pinimg.com/236x/b8/2f/67/b82f670ee23247b741e059e65b3db94f.jpg',
        'https://i.pinimg.com/236x/e0/71/9e/e0719ec3fa1a8993b85393b6345b940d.jpg',
        'https://i.pinimg.com/236x/57/1d/6c/571d6cf54da8c29660a349a98d3dd0be.jpg',
      ],
      examples: [
        'Experience is in the sentence.',
        'This sentence contains the word experience.',
        'We can use the word experience here.',
        'Here is an example of the word experience.',
      ],
      tdn: [
        {
          word: 'wearable technology',
          definition:
            'Electronics that can be worn on the body, either as an accessory or as part of material used in clothing.',
        },
        {
          word: 'wearables',
          definition:
            'A category of electronic devices that can be worn on the body.',
        },
        {
          word: 'body-worn technology',
          definition: 'Electronic devices that are worn on the body.',
        },
      ],
      ttn: [
        {
          word: 'ignorance',
          definition: 'Lack of knowledge or information.',
        },
        {
          word: 'inexperience',
          definition: 'Lack of practical knowledge or skill.',
        },
        {
          word: 'novice',
          definition:
            'A person who is new to or inexperienced in a certain skill or activity.',
        },
      ],
    },
    {
      word: 'wander',
      definition: 'Walk or move in a leisurely, casual, or aimless way.',
      topicId: 8,
      id: 190,
      pronunciation: '/ˈwɒndə/',
      image_link: [
        'https://i.pinimg.com/236x/48/81/77/48817792ac362cd9135e7f473f4856ec.jpg',
        'https://i.pinimg.com/236x/e4/12/34/e41234161191a99b04114f9c18498d23.jpg',
        'https://i.pinimg.com/236x/8f/4c/d3/8f4cd30a74c2b91b2660b5023f66378a.jpg',
        'https://i.pinimg.com/236x/2f/29/e0/2f29e0dbd93ad012ca145687cdc86d68.jpg',
      ],
      examples: [
        'Wander is in the sentence.',
        'This sentence contains the word wander.',
        'We can use the word wander here.',
        'Here is an example of the word wander.',
      ],
      tdn: [
        {
          word: 'smart home',
          definition:
            'A home equipped with lighting, heating, and electronic devices that can be controlled remotely by smartphone or computer.',
        },
        {
          word: 'home automation',
          definition:
            'The automatic control of electronic devices in your home.',
        },
        {
          word: 'connected home',
          definition:
            'A home where devices are connected to the internet and can be controlled remotely.',
        },
      ],
      ttn: [
        {
          word: 'purposeful',
          definition: 'Having or showing determination or resolve.',
        },
        {
          word: 'direct',
          definition:
            'Proceeding to a point or end without deviation or interruption.',
        },
        {
          word: 'stay',
          definition: 'To remain in a specified place.',
        },
      ],
    },
    {
      word: 'immerse',
      definition:
        'Involve oneself deeply in a particular activity or interest.',
      topicId: 8,
      id: 191,
      pronunciation: '/ɪˈmɜː(ɹ)s/',
      image_link: [
        'https://i.pinimg.com/236x/e4/77/4c/e4774c1fb9561e98e4bc6a2a8f745487.jpg',
        'https://i.pinimg.com/236x/f7/79/be/f779be0811d86f8dacdac455848847cc.jpg',
        'https://i.pinimg.com/236x/3e/2f/c6/3e2fc63b808da7036125d608471b3e57.jpg',
        'https://i.pinimg.com/236x/6c/d7/82/6cd7827d69b516a1f57cead8aa6ef860.jpg',
      ],
      examples: [
        'Immerse is in the sentence.',
        'This sentence contains the word immerse.',
        'We can use the word immerse here.',
        'Here is an example of the word immerse.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'detach',
          definition: 'To disconnect or separate from something',
        },
        {
          word: 'distract',
          definition: 'To draw attention away from something; to divert',
        },
        {
          word: 'superficial',
          definition: 'Concerned only with surface aspects or lacking depth',
        },
      ],
    },
    {
      word: 'explorer',
      definition:
        'Someone who travels to places where no one has ever been in order to find out what is there.',
      topicId: 8,
      id: 192,
      pronunciation: '/ɛkˈsplɔːɹə(ɹ)/',
      image_link: [
        'https://i.pinimg.com/236x/6b/62/50/6b6250456f655d21b786bb3d42e0f6a8.jpg',
        'https://i.pinimg.com/236x/b8/a5/06/b8a506537057a5c2a95ee0785b387d64.jpg',
        'https://i.pinimg.com/236x/88/32/f7/8832f793b10a24f547d6a55b4ac8ac67.jpg',
        'https://i.pinimg.com/236x/2f/a1/b6/2fa1b6f92312fac7fa6e47bb204c26a4.jpg',
      ],
      examples: [
        'Explorer is in the sentence.',
        'This sentence contains the word explorer.',
        'We can use the word explorer here.',
        'Here is an example of the word explorer.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'settler',
          definition:
            'Someone who establishes residence in a new place, typically forming a community.',
        },
        {
          word: 'local',
          definition:
            'Someone who is familiar with and belongs to a particular place or community.',
        },
        {
          word: 'resident',
          definition: 'Someone who lives permanently in a particular place.',
        },
      ],
    },
    {
      word: 'knowledge',
      definition:
        'Facts, information, and skills acquired through experience or education.',
      topicId: 9,
      id: 193,
      pronunciation: '/ˈnɒlɪdʒ/',
      image_link: [
        'https://i.pinimg.com/236x/86/de/25/86de25bf5b2b497bb8be816e43e60bc0.jpg',
        'https://i.pinimg.com/236x/14/49/c7/1449c7c8fe31ccadb8911b7ac7f68408.jpg',
        'https://i.pinimg.com/236x/aa/5a/dd/aa5add0e0bf21b1f1c6feef68dafe03a.jpg',
        'https://i.pinimg.com/236x/fc/ec/31/fcec31db9c82e698aedf2206789b14fe.jpg',
      ],
      examples: [
        'Knowledge is in the sentence.',
        'This sentence contains the word knowledge.',
        'We can use the word knowledge here.',
        'Here is an example of the word knowledge.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'ignorance',
          definition: 'Lack of knowledge or information.',
        },
        {
          word: 'inexperience',
          definition: 'Lack of practical knowledge or skill.',
        },
        {
          word: 'naivety',
          definition: 'Lack of experience, wisdom, or judgment.',
        },
      ],
    },
    {
      word: 'learning',
      definition:
        'The acquisition of knowledge or skills through study, experience, or being taught.',
      topicId: 9,
      id: 194,
      pronunciation: '/ˈlɜːnɪŋ/',
      image_link: [
        'https://i.pinimg.com/236x/55/7c/64/557c64034ecc52a10522dd77a80c8700.jpg',
        'https://i.pinimg.com/236x/90/9b/6b/909b6b53276598fe06ac2fc0605c0824.jpg',
        'https://i.pinimg.com/236x/81/7a/73/817a7373f5bf9e12d9b57f2e1c5bb9af.jpg',
        'https://i.pinimg.com/236x/6e/b9/0e/6eb90ee6451a22bee98534642cec66c2.jpg',
      ],
      examples: [
        'Learning is in the sentence.',
        'This sentence contains the word learning.',
        'We can use the word learning here.',
        'Here is an example of the word learning.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'ignorance',
          definition: 'Lack of knowledge or information.',
        },
        {
          word: 'forgetting',
          definition: 'Ceasing to remember or retain information.',
        },
        {
          word: 'unlearning',
          definition:
            'The process of discarding or reversing learned information or habits.',
        },
      ],
    },
    {
      word: 'study',
      definition:
        'The devotion of time and attention to acquiring knowledge on an academic subject.',
      topicId: 9,
      id: 195,
      pronunciation: '/ˈstʌdi/',
      image_link: [
        'https://i.pinimg.com/236x/6d/74/40/6d7440e904d4cc840f3e8cb39108665a.jpg',
        'https://i.pinimg.com/236x/d7/f1/5a/d7f15a31e2e076bc50fcc6e7db787f81.jpg',
        'https://i.pinimg.com/236x/c5/ed/e8/c5ede8dfc74cbf94da91b50c9de63594.jpg',
        'https://i.pinimg.com/236x/10/1e/7b/101e7b651a4fe0721d6a08ecdb580f1e.jpg',
      ],
      examples: [
        'Study is in the sentence.',
        'This sentence contains the word study.',
        'We can use the word study here.',
        'Here is an example of the word study.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'ignore',
          definition: 'To pay no attention to; disregard',
        },
        {
          word: 'neglect',
          definition: 'To fail to care for or attend to properly',
        },
        {
          word: 'distract',
          definition: 'To divert the attention of; draw away',
        },
      ],
    },
    {
      word: 'research',
      definition:
        'Systematic investigation into and study of materials and sources in order to establish facts and reach new conclusions.',
      topicId: 9,
      id: 196,
      pronunciation: '/ɹɪˈsɜːtʃ/',
      image_link: [
        'https://i.pinimg.com/236x/86/d6/5c/86d65c162a1de465fbb1ae388182a9fd.jpg',
        'https://i.pinimg.com/236x/47/af/9b/47af9b89db1c367df7c275410e21c934.jpg',
        'https://i.pinimg.com/236x/4f/25/8d/4f258d6928bf02a872e5e78f18309667.jpg',
        'https://i.pinimg.com/236x/ef/8d/cf/ef8dcfce3ee48d1c74d49848713e2321.jpg',
      ],
      examples: [
        'Research is in the sentence.',
        'This sentence contains the word research.',
        'We can use the word research here.',
        'Here is an example of the word research.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'ignorance',
          definition: 'Lack of knowledge or information.',
        },
        {
          word: 'neglect',
          definition: 'Fail to care for properly.',
        },
        {
          word: 'conclusion',
          definition: 'A judgment or decision reached by reasoning.',
        },
      ],
    },
    {
      word: 'curiosity',
      definition: 'A strong desire to know or learn something.',
      topicId: 9,
      id: 197,
      pronunciation: '/ˌkjʊəɹɪˈɒsɪti/',
      image_link: [
        'https://i.pinimg.com/236x/87/b6/30/87b6307487a3ac15163a38049825a7bf.jpg',
        'https://i.pinimg.com/236x/8c/63/ff/8c63ffbe515fa0bf8587d326a46fa17e.jpg',
        'https://i.pinimg.com/236x/87/31/0a/87310afc39ca8608bfad3cc8eb1e9927.jpg',
        'https://i.pinimg.com/236x/be/1d/11/be1d11e04be265ba115e82f1c0ab34b4.jpg',
      ],
      examples: [
        'Curiosity is in the sentence.',
        'This sentence contains the word curiosity.',
        'We can use the word curiosity here.',
        'Here is an example of the word curiosity.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'indifference',
          definition: 'Lack of interest or concern.',
        },
        {
          word: 'apathy',
          definition: 'Lack of enthusiasm or interest.',
        },
        {
          word: 'disinterest',
          definition: 'Lack of interest or concern.',
        },
      ],
    },
    {
      word: 'intellectual',
      definition:
        'Relating to the ability to think and understand ideas at a high level.',
      topicId: 9,
      id: 198,
      pronunciation: '/ˌɪntəˈlɛk(t)ʃʊəl/',
      image_link: [
        'https://i.pinimg.com/236x/4c/a4/7b/4ca47b5add2ec127752e9abdd182c83b.jpg',
        'https://i.pinimg.com/236x/a7/67/de/a767de839e42600f01947ca05ef59b9e.jpg',
        'https://i.pinimg.com/236x/e8/c7/fe/e8c7fec31faadb1a3686f2226d9d22c0.jpg',
        'https://i.pinimg.com/236x/5e/a3/73/5ea373bbc25f69990045029d78094e3d.jpg',
      ],
      examples: [
        'Intellectual is in the sentence.',
        'This sentence contains the word intellectual.',
        'We can use the word intellectual here.',
        'Here is an example of the word intellectual.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'simple',
          definition: 'Not complex or complicated; easy to understand.',
        },
        {
          word: 'unintelligent',
          definition: 'Lacking intelligence or mental capacity.',
        },
        {
          word: 'uneducated',
          definition: 'Not having been educated or knowledgeable.',
        },
      ],
    },
    {
      word: 'scholarship',
      definition: 'Academic study or achievement; learning at a high level.',
      topicId: 9,
      id: 199,
      pronunciation: '/ˈskɑː.lɚ.ʃɪp/',
      image_link: [
        'https://i.pinimg.com/236x/1b/80/f2/1b80f2d5745bca5f4bc619c4d2a5084f.jpg',
        'https://i.pinimg.com/236x/39/2a/25/392a2569b920734b2edab058992c66af.jpg',
        'https://i.pinimg.com/236x/83/91/af/8391af5465ba7bdb0d7b7ac35899fb2c.jpg',
        'https://i.pinimg.com/236x/af/94/b3/af94b30e201a1f44bcf923d3d1eb6ac3.jpg',
      ],
      examples: [
        'Scholarship is in the sentence.',
        'This sentence contains the word scholarship.',
        'We can use the word scholarship here.',
        'Here is an example of the word scholarship.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'ignorance',
          definition:
            'Lack of knowledge or awareness in general; uneducated or unsophisticated.',
        },
        {
          word: 'illiteracy',
          definition: 'Inability to read or write.',
        },
        {
          word: 'stupidity',
          definition: 'Behavior that shows a lack of good sense or judgment.',
        },
      ],
    },
    {
      word: 'academic',
      definition: 'Relating to education and scholarship.',
      topicId: 9,
      id: 200,
      pronunciation: '/ˌækəˈdɛmɪk/',
      image_link: [
        'https://i.pinimg.com/236x/a2/ef/7b/a2ef7bdef4126e5f299883f6168c0331.jpg',
        'https://i.pinimg.com/236x/78/02/06/780206cfd15d98be582fcf315007a805.jpg',
        'https://i.pinimg.com/236x/06/a7/43/06a74388324aac86c4210728bee7afb1.jpg',
        'https://i.pinimg.com/236x/b2/ac/67/b2ac67f9dcc1b3b2d0f395613e5584aa.jpg',
      ],
      examples: [
        'Academic is in the sentence.',
        'This sentence contains the word academic.',
        'We can use the word academic here.',
        'Here is an example of the word academic.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'nonacademic',
          definition: 'Not relating to education or scholarship.',
        },
        {
          word: 'practical',
          definition:
            'Relating to real-life applications rather than theoretical knowledge.',
        },
        {
          word: 'vocational',
          definition:
            'Relating to skills and training for a specific occupation or trade.',
        },
      ],
    },
    {
      word: 'knowledgeable',
      definition: 'Having or showing knowledge or intelligence.',
      topicId: 9,
      id: 201,
      pronunciation: '/ˈnɑl.ɪd͡ʒ.ə.bəl/',
      image_link: [
        'https://i.pinimg.com/236x/af/8e/2e/af8e2e86a18396ca1f19cd292e85dd9a.jpg',
        'https://i.pinimg.com/236x/aa/5a/dd/aa5add0e0bf21b1f1c6feef68dafe03a.jpg',
        'https://i.pinimg.com/236x/03/1d/62/031d62557328a2f80771ff9204aea73d.jpg',
        'https://i.pinimg.com/236x/86/de/25/86de25bf5b2b497bb8be816e43e60bc0.jpg',
      ],
      examples: [
        'Knowledgeable is in the sentence.',
        'This sentence contains the word knowledgeable.',
        'We can use the word knowledgeable here.',
        'Here is an example of the word knowledgeable.',
      ],
      tdn: [
        {
          word: 'biotech',
          definition:
            'The use of living systems and organisms to develop or make products, or any technological application that uses biological systems, living organisms, or derivatives thereof, to make or modify products or processes for specific use.',
        },
        {
          word: 'biotechnology',
          definition:
            'The exploitation of biological processes for industrial and other purposes, especially the genetic manipulation of microorganisms for the production of antibiotics, hormones, etc.',
        },
        {
          word: 'life sciences technology',
          definition:
            'Technology related to the study of living organisms, such as plants, animals, and humans.',
        },
      ],
      ttn: [
        {
          word: 'ignorant',
          definition:
            'Lacking knowledge or awareness in general; uneducated or unsophisticated.',
        },
        {
          word: 'uninformed',
          definition:
            'Not having or showing awareness or knowledge of something.',
        },
        {
          word: 'uneducated',
          definition: 'Not having been educated to a good standard.',
        },
      ],
    },
    {
      word: 'educational',
      definition: 'Relating to education; intended to educate or enlighten.',
      topicId: 9,
      id: 202,
      pronunciation: '/ˌɛdʒʊˈkeɪʃənəl/',
      image_link: [
        'https://i.pinimg.com/236x/52/ea/60/52ea60168e964c67f9ecdf8058e95fac.jpg',
        'https://i.pinimg.com/236x/d1/88/da/d188da345a1aa258f410cae6f82d4818.jpg',
        'https://i.pinimg.com/236x/a5/c8/b6/a5c8b693b4553524d899c6affc1947a9.jpg',
        'https://i.pinimg.com/236x/e8/63/f2/e863f25078a613a6716d5ebfecdbcc7e.jpg',
      ],
      examples: [
        'Educational is in the sentence.',
        'This sentence contains the word educational.',
        'We can use the word educational here.',
        'Here is an example of the word educational.',
      ],
      tdn: [
        {
          word: 'medtech',
          definition:
            'Medical technology, which encompasses a wide range of healthcare products and is used to diagnose, monitor, and treat diseases or medical conditions affecting humans.',
        },
        {
          word: 'medical technology',
          definition:
            'The application of scientific knowledge to develop solutions for health problems and improve quality of life.',
        },
        {
          word: 'healthcare technology',
          definition: 'Technology that supports the delivery of healthcare.',
        },
      ],
      ttn: [
        {
          word: 'non-educational',
          definition:
            'Not related to education; not intended to educate or enlighten.',
        },
        {
          word: 'uninstructive',
          definition:
            'Not providing instruction or guidance; lacking educational value.',
        },
        {
          word: 'recreational',
          definition:
            'Relating to activities done for enjoyment, rather than education.',
        },
      ],
    },
    {
      word: 'learn',
      definition:
        'Gain or acquire knowledge of or skill in (something) by study, experience, or being taught.',
      topicId: 9,
      id: 203,
      pronunciation: '/lɜːn/',
      image_link: [
        'https://i.pinimg.com/236x/90/9b/6b/909b6b53276598fe06ac2fc0605c0824.jpg',
        'https://i.pinimg.com/236x/c0/42/10/c0421049a702f18d363d194ffe6db59a.jpg',
        'https://i.pinimg.com/236x/ab/03/4c/ab034cb3582c828362f9bf7b146000a0.jpg',
        'https://i.pinimg.com/236x/f6/95/f3/f695f3447b3aa21835c5c59d1e18d39c.jpg',
      ],
      examples: [
        'Learn is in the sentence.',
        'This sentence contains the word learn.',
        'We can use the word learn here.',
        'Here is an example of the word learn.',
      ],
      tdn: [
        {
          word: 'regtech',
          definition:
            'Regulatory technology, a new technology that uses information technology to enhance regulatory processes.',
        },
        {
          word: 'regulatory technology',
          definition:
            'Technology that addresses regulatory challenges in financial services through innovative solutions.',
        },
        {
          word: 'compliance technology',
          definition:
            'Technology that helps organizations comply with regulatory requirements.',
        },
      ],
      ttn: [
        {
          word: 'ignore',
          definition:
            'Refuse to take notice of or acknowledge; disregard intentionally.',
        },
        {
          word: 'forget',
          definition: 'Fail to remember.',
        },
        {
          word: 'neglect',
          definition: 'Fail to care for properly.',
        },
      ],
    },
    {
      word: 'teacher',
      definition: 'A person who teaches, especially in a school.',
      topicId: 9,
      id: 204,
      pronunciation: '/ˈtiːt͡ʃə/',
      image_link: [
        'https://i.pinimg.com/236x/93/fe/91/93fe91c6b2b675333d54e0796d1af119.jpg',
        'https://i.pinimg.com/236x/83/1d/73/831d73d97bc2317822846fcbf1a09eec.jpg',
        'https://i.pinimg.com/236x/5b/54/58/5b54586fd4c7357f482618ebbf27ef8e.jpg',
        'https://i.pinimg.com/236x/fe/33/58/fe3358e81b0de77cd4224e02fc032b61.jpg',
      ],
      examples: [
        'Teacher is in the sentence.',
        'This sentence contains the word teacher.',
        'We can use the word teacher here.',
        'Here is an example of the word teacher.',
      ],
      tdn: [
        {
          word: 'govtech',
          definition:
            'Government technology, which refers to the use of technology to improve government operations and public services.',
        },
        {
          word: 'government technology',
          definition:
            'The use of technology to enhance the efficiency and effectiveness of government operations and services.',
        },
        {
          word: 'public sector technology',
          definition:
            'Technology that is used by government agencies to serve the public.',
        },
      ],
      ttn: [
        {
          word: 'student',
          definition:
            'A person who is learning under the guidance of a teacher.',
        },
        {
          word: 'pupil',
          definition: 'A young person who is learning in a school.',
        },
        {
          word: 'learner',
          definition: 'Someone who is acquiring knowledge or a skill.',
        },
      ],
    },
    {
      word: 'degree',
      definition:
        'An academic rank conferred by a college or university after examination or after completion of a course.',
      topicId: 9,
      id: 205,
      pronunciation: '/dɪˈɡɹiː/',
      image_link: [
        'https://i.pinimg.com/236x/d1/88/da/d188da345a1aa258f410cae6f82d4818.jpg',
        'https://i.pinimg.com/236x/bc/be/ed/bcbeed46426594962fdb3066912f51b0.jpg',
        'https://i.pinimg.com/236x/ae/94/dc/ae94dccbc76b0a9d88344bc72aca538e.jpg',
        'https://i.pinimg.com/236x/4a/47/96/4a47960a5f1e74c302aada6ace33fb15.jpg',
      ],
      examples: [
        'Degree is in the sentence.',
        'This sentence contains the word degree.',
        'We can use the word degree here.',
        'Here is an example of the word degree.',
      ],
      tdn: [
        {
          word: 'adtech',
          definition:
            'Advertising technology, which refers to software and tools that help agencies and brands target, deliver, and analyze their digital advertising efforts.',
        },
        {
          word: 'advertising technology',
          definition:
            'Technology used to manage and analyze advertising campaigns.',
        },
        {
          word: 'marketing technology',
          definition:
            'Technology used to manage and execute marketing processes.',
        },
      ],
      ttn: [
        {
          word: 'silence',
          definition: 'Absence of sound or noise; quietness.',
        },
        {
          word: 'action',
          definition:
            'The process of doing something, typically to achieve an aim.',
        },
        {
          word: 'deed',
          definition:
            'An action that is performed intentionally or consciously.',
        },
      ],
    },
    {
      word: 'graduation',
      definition:
        'The receiving or conferring of an academic degree or diploma.',
      topicId: 9,
      id: 206,
      pronunciation: '/ˌɡɹædʒuˈeɪʃən/',
      image_link: [
        'https://i.pinimg.com/236x/ae/94/dc/ae94dccbc76b0a9d88344bc72aca538e.jpg',
        'https://i.pinimg.com/236x/86/cb/2b/86cb2b38264c678fb4b38b3767bfdef0.jpg',
        'https://i.pinimg.com/236x/42/df/79/42df79039ce28d489cf75d9ea1efe6eb.jpg',
        'https://i.pinimg.com/236x/24/30/f0/2430f0496b5753ce53e420bd9a3d0559.jpg',
      ],
      examples: [
        'Graduation is in the sentence.',
        'This sentence contains the word graduation.',
        'We can use the word graduation here.',
        'Here is an example of the word graduation.',
      ],
      tdn: [
        {
          word: 'martech',
          definition:
            'Marketing technology, which refers to software and technology tools that assist in achieving marketing goals or objectives.',
        },
        {
          word: 'marketing technology',
          definition:
            'Technology used to manage and execute marketing processes.',
        },
        {
          word: 'digital marketing tools',
          definition: 'Technology tools used in digital marketing efforts.',
        },
      ],
      ttn: [
        {
          word: 'enrollment',
          definition:
            'The act or process of entering or registering in a roll, list, or record.',
        },
        {
          word: 'dropout',
          definition: 'A person who withdraws from a school or group.',
        },
        {
          word: 'dismissal',
          definition: 'The act of removing someone from a position or office.',
        },
      ],
    },
    {
      word: 'intelligent',
      definition: 'Having or showing intelligence, especially of a high level.',
      topicId: 9,
      id: 207,
      pronunciation: '/ɪnˈtɛlɪd͡ʒənt/',
      image_link: [
        'https://i.pinimg.com/236x/e1/11/f3/e111f3642012bb4b2c9a6515990cfeb1.jpg',
        'https://i.pinimg.com/236x/c2/6b/67/c26b67e0cf4d603ac40549917e168cec.jpg',
        'https://i.pinimg.com/236x/a8/d3/38/a8d338b3c7e9016235f484644a734ced.jpg',
        'https://i.pinimg.com/236x/4b/78/16/4b78166fc51592e02a76f7ab344e93cd.jpg',
      ],
      examples: [
        'Intelligent is in the sentence.',
        'This sentence contains the word intelligent.',
        'We can use the word intelligent here.',
        'Here is an example of the word intelligent.',
      ],
      tdn: [
        {
          word: 'sportstech',
          definition:
            'Sports technology, which refers to the use of technology to enhance sports performance and the experience of sports fans.',
        },
        {
          word: 'sports technology',
          definition:
            'Technology used to improve sports performance and fan engagement.',
        },
        {
          word: 'athletic technology',
          definition:
            'Technology used to support athletic performance and training.',
        },
      ],
      ttn: [
        {
          word: 'stupid',
          definition: 'Lacking intelligence or common sense.',
        },
        {
          word: 'ignorant',
          definition:
            'Lacking knowledge, information, or awareness about something in particular.',
        },
        {
          word: 'unintelligent',
          definition:
            'Not possessing or showing intelligence; lacking intellectual capacity.',
        },
      ],
    },
    {
      word: 'student',
      definition:
        'A person who is studying at a school, college, or university.',
      topicId: 9,
      id: 208,
      pronunciation: '/ˈstjuː.dənt/',
      image_link: [
        'https://i.pinimg.com/236x/09/79/d2/0979d236e1b754f84bbc1300c0c71ff1.jpg',
        'https://i.pinimg.com/236x/46/55/ca/4655cae1688ddbc4ebf14423beae30ef.jpg',
        'https://i.pinimg.com/236x/42/36/e8/4236e8efe43ae4a6c7f42c932aa3c01b.jpg',
        'https://i.pinimg.com/236x/36/2c/a5/362ca55140c97cce4c6a1cd7640a8475.jpg',
      ],
      examples: [
        'Student is in the sentence.',
        'This sentence contains the word student.',
        'We can use the word student here.',
        'Here is an example of the word student.',
      ],
      tdn: [
        {
          word: 'foodtech',
          definition:
            'Food technology, which refers to the application of technology to improve food production, processing, and distribution.',
        },
        {
          word: 'food technology',
          definition:
            'The application of technology to the production, processing, and distribution of food.',
        },
        {
          word: 'agri-food technology',
          definition: 'Technology used in the agriculture and food industries.',
        },
      ],
      ttn: [
        {
          word: 'teacher',
          definition: 'A person who teaches, especially in a school.',
        },
        {
          word: 'graduate',
          definition:
            'A person who has successfully completed a course of study or training.',
        },
        {
          word: 'professor',
          definition:
            'A teacher of the highest academic rank in a college or university.',
        },
      ],
    },
    {
      word: 'instructive',
      definition: 'Useful and informative.',
      topicId: 9,
      id: 209,
      pronunciation: '/ɪnˈstɹʌktɪv/',
      image_link: [
        'https://i.pinimg.com/236x/0c/34/90/0c3490dbe44719d4af332a95499a75ee.jpg',
        'https://i.pinimg.com/236x/6f/a0/48/6fa048ba2e79aac25e25ac5ffb376cbe.jpg',
        'https://i.pinimg.com/236x/c0/3a/4e/c03a4e6dc39322f44642a5afa7b5e866.jpg',
        'https://i.pinimg.com/236x/d0/e8/e2/d0e8e2b9041b53a083f46d1c44180726.jpg',
      ],
      examples: [
        'Instructive is in the sentence.',
        'This sentence contains the word instructive.',
        'We can use the word instructive here.',
        'Here is an example of the word instructive.',
      ],
      tdn: [
        {
          word: 'traveltech',
          definition:
            'Travel technology, which refers to the use of technology to plan, book, and enjoy travel experiences.',
        },
        {
          word: 'travel technology',
          definition:
            'Technology used to facilitate travel planning, booking, and experiences.',
        },
        {
          word: 'tourism technology',
          definition:
            'Technology used in the tourism industry to enhance travel experiences.',
        },
      ],
      ttn: [
        {
          word: 'uninstructive',
          definition: 'Not useful or informative.',
        },
        {
          word: 'misleading',
          definition: 'Giving the wrong idea or impression.',
        },
        {
          word: 'confusing',
          definition:
            'Causing bewilderment; unclear or difficult to understand.',
        },
      ],
    },
    {
      word: 'educate',
      definition:
        'Give intellectual, moral, and social instruction to someone, typically at a school or university.',
      topicId: 9,
      id: 210,
      pronunciation: '/ˈedʒɘkæet/',
      image_link: [
        'https://i.pinimg.com/236x/d1/88/da/d188da345a1aa258f410cae6f82d4818.jpg',
        'https://i.pinimg.com/236x/fa/b5/62/fab562cc10a00c6ac1fa5320a2236467.jpg',
        'https://i.pinimg.com/236x/70/d6/94/70d694b555761aa01899272114211202.jpg',
        'https://i.pinimg.com/236x/e3/97/5f/e3975f7a1cd69690472a82925771e941.jpg',
      ],
      examples: [
        'Educate is in the sentence.',
        'This sentence contains the word educate.',
        'We can use the word educate here.',
        'Here is an example of the word educate.',
      ],
      tdn: [
        {
          word: 'fashiontech',
          definition:
            'Fashion technology, which refers to the use of technology to enhance the design, production, and retail of fashion products.',
        },
        {
          word: 'fashion technology',
          definition:
            'The use of technology in the design, production, and retail of fashion products.',
        },
        {
          word: 'apparel technology',
          definition:
            'Technology used in the apparel industry to improve design and production processes.',
        },
      ],
      ttn: [
        {
          word: 'misinform',
          definition: 'Give incorrect or misleading information to someone.',
        },
        {
          word: 'neglect',
          definition: 'Fail to care for properly.',
        },
        {
          word: 'ignore',
          definition:
            'Refuse to take notice of or acknowledge; disregard intentionally.',
        },
      ],
    },
    {
      word: 'circle',
      definition:
        'A round plane figure whose boundary consists of points equidistant from the center.',
      topicId: 10,
      id: 211,
      pronunciation: '/ˈsɜɹkəl/',
      image_link: [
        'https://i.pinimg.com/236x/d1/fe/65/d1fe65a73471637e6bca349b34cb4c61.jpg',
        'https://i.pinimg.com/236x/09/dc/40/09dc40421ccca5089f2ba51390194790.jpg',
        'https://i.pinimg.com/236x/a3/96/07/a396072fdc6d742f886ee58130fb3963.jpg',
        'https://i.pinimg.com/236x/4a/b1/1f/4ab11f1f5cb8e6c344ff4d4edcd6cdea.jpg',
      ],
      examples: [
        'The children sat in a circle.',
        'He drew a perfect circle with a compass.',
        'The cake was shaped like a circle.',
        'They danced in a circle around the bonfire.',
      ],
      tdn: [
        {
          word: 'agritech',
          definition:
            'The use of technology in agriculture, horticulture, and aquaculture with the aim of improving yield, efficiency, and profitability.',
        },
        {
          word: 'agriculture technology',
          definition:
            'Technology used to improve the efficiency and output of agricultural processes.',
        },
        {
          word: 'farming technology',
          definition:
            'Technology used in farming to increase efficiency and productivity.',
        },
      ],
      ttn: [
        {
          word: 'square',
          definition:
            'A four-sided plane figure with straight sides and equal length adjacent sides at right angles to each other.',
        },
        {
          word: 'triangle',
          definition:
            'A three-sided plane figure with straight sides and three angles.',
        },
        {
          word: 'rectangle',
          definition:
            'A four-sided plane figure with opposite sides equal and parallel, and four right angles.',
        },
      ],
    },
    {
      word: 'square',
      definition:
        'A plane figure with four equal straight sides and four right angles.',
      topicId: 10,
      id: 212,
      pronunciation: '/skwer/',
      image_link: [
        'https://i.pinimg.com/236x/8b/ad/cd/8badcd8c097fb07442af11f4113e99cb.jpg',
        'https://i.pinimg.com/236x/63/bb/68/63bb68606c4fbade5b3f0f367f2d03eb.jpg',
        'https://i.pinimg.com/236x/eb/30/60/eb306038f5f9123f23e274bd79b4a1c6.jpg',
        'https://i.pinimg.com/236x/09/5c/47/095c475e2bc4955d32edcd98edea39af.jpg',
      ],
      examples: [
        'Square is in the sentence.',
        'This sentence contains the word square.',
        'We can use the word square here.',
        'Here is an example of the word square.',
      ],
      tdn: [
        {
          word: 'greentech',
          definition:
            'Technology whose use is intended to mitigate or reverse the effects of human activity on the environment.',
        },
        {
          word: 'green technology',
          definition:
            'Technology that is considered environmentally friendly based on its production process or supply chain.',
        },
        {
          word: 'sustainable technology',
          definition:
            'Technology that seeks to improve environmental sustainability.',
        },
      ],
      ttn: [
        {
          word: 'circle',
          definition:
            'A round plane figure whose boundary consists of points equidistant from a fixed center.',
        },
        {
          word: 'triangle',
          definition:
            'A plane figure with three straight sides and three angles.',
        },
        {
          word: 'irregular',
          definition: 'Not even or balanced in shape or arrangement.',
        },
      ],
    },
    {
      word: 'triangle',
      definition: 'A plane figure with three straight sides and three angles.',
      topicId: 10,
      id: 213,
      pronunciation: '/ˈtɹaɪəŋɡəl/',
      image_link: [
        'https://i.pinimg.com/236x/e7/f7/2e/e7f72edd1ebd0a6c7220e5126df030f1.jpg',
        'https://i.pinimg.com/236x/ab/20/0a/ab200a4774c3657b5ccda1d8fdd42007.jpg',
        'https://i.pinimg.com/236x/da/b1/64/dab16488121aa599c42a536ea9cadc70.jpg',
        'https://i.pinimg.com/236x/d1/6c/c7/d16cc7c67e52e09858ac3e232a1ed109.jpg',
      ],
      examples: [
        'A triangle has three sides.',
        'They learned about triangle shapes in math class.',
        'She drew a triangle on the paper.',
        'The artist painted a colorful triangle.',
      ],
      tdn: [
        {
          word: 'cleantech',
          definition:
            'Products or services that improve operational performance, productivity, or efficiency while reducing costs, inputs, energy consumption, waste, or environmental pollution.',
        },
        {
          word: 'clean technology',
          definition:
            'Technology that reduces negative environmental impacts through significant energy efficiency improvements, the sustainable use of resources, or environmental protection activities.',
        },
        {
          word: 'eco-friendly technology',
          definition: 'Technology that is environmentally friendly.',
        },
      ],
      ttn: [
        {
          word: 'circle',
          definition:
            'A closed plane curve consisting of all points at a given distance from a point within it.',
        },
        {
          word: 'square',
          definition:
            'A plane figure with four equal straight sides and four right angles.',
        },
        {
          word: 'pentagon',
          definition:
            'A plane figure with five straight sides and five angles.',
        },
      ],
    },
    {
      word: 'rectangle',
      definition:
        'A plane figure with four straight sides and four right angles, especially one with unequal adjacent sides, in contrast to a square.',
      topicId: 10,
      id: 214,
      pronunciation: '/ˈrɛktæŋɡ(ə)l/',
      image_link: [
        'https://i.pinimg.com/236x/98/4a/76/984a7602f2200e18e6a8657722c09385.jpg',
        'https://i.pinimg.com/236x/71/93/0d/71930d5347027228d898cc5f957242ef.jpg',
        'https://i.pinimg.com/236x/56/56/56/565656b0623a3d8a349af5d1a3a42c33.jpg',
        'https://i.pinimg.com/236x/74/14/fd/7414fd7fa92cbc16480aec015dffbed2.jpg',
      ],
      examples: [
        'The garden was shaped like a rectangle.',
        'He cut the paper into a rectangle.',
        "They measured the rectangle's length and width.",
        'The rectangle had equal opposite sides.',
      ],
      tdn: [
        {
          word: 'fintech',
          definition:
            'Computer programs and other technology used to support or enable banking and financial services.',
        },
        {
          word: 'financial technology',
          definition:
            'Technology and innovation that aims to compete with traditional financial methods in the delivery of financial services.',
        },
        {
          word: 'digital finance',
          definition: 'The use of technology to deliver financial services.',
        },
      ],
      ttn: [
        {
          word: 'circle',
          definition:
            'A round plane figure whose boundary consists of points equidistant from a fixed center.',
        },
        {
          word: 'triangle',
          definition:
            'A plane figure with three straight sides and three angles.',
        },
        {
          word: 'oval',
          definition:
            'A closed curve resembling the outline of an egg or an ellipse.',
        },
      ],
    },
    {
      word: 'oval',
      definition: 'A shape like a flattened circle or an egg.',
      topicId: 10,
      id: 215,
      pronunciation: '/ˈəʊvəl/',
      image_link: [
        'https://i.pinimg.com/236x/52/d0/6d/52d06d5a0fbc93160e65ca60ca7cb374.jpg',
        'https://i.pinimg.com/236x/55/ec/8b/55ec8b109101d681206d4f4709bc5b6d.jpg',
        'https://i.pinimg.com/236x/22/b7/87/22b787f37fa2c5abac5b7a04e7eab045.jpg',
        'https://i.pinimg.com/236x/69/ef/5d/69ef5db476372c183a2b084a47ec792a.jpg',
      ],
      examples: [
        'Oval is in the sentence.',
        'This sentence contains the word oval.',
        'We can use the word oval here.',
        'Here is an example of the word oval.',
      ],
      tdn: [
        {
          word: 'edtech',
          definition:
            'The practice of using technology to support teaching and the effective day-to-day management of educational institutions.',
        },
        {
          word: 'educational technology',
          definition:
            'Technology devoted to the development and application of tools (including software, hardware, and processes) intended to promote education.',
        },
        {
          word: 'digital learning',
          definition: 'Any type of learning that uses technology.',
        },
      ],
      ttn: [
        {
          word: 'square',
          definition: 'A shape with four equal sides and four right angles.',
        },
        {
          word: 'round',
          definition:
            'Having a curved or spherical shape; not angular or sharp-edged.',
        },
        {
          word: 'angular',
          definition: 'Having sharp corners or edges; forming an angle.',
        },
      ],
    },
    {
      word: 'hexagon',
      definition: 'A plane figure with six straight sides and angles.',
      topicId: 10,
      id: 216,
      pronunciation: '/ˈhek.sə.ɡɑːn/',
      image_link: [
        'https://i.pinimg.com/236x/a6/bb/2c/a6bb2c08aac377e19808b861a252b722.jpg',
        'https://i.pinimg.com/236x/12/db/21/12db211640f937f38551c771342c56ac.jpg',
        'https://i.pinimg.com/236x/12/2a/9d/122a9da55e70ebdc9127ea4711c36077.jpg',
        'https://i.pinimg.com/236x/9f/e4/a6/9fe4a68350eb2b1aacbf34b8291a8578.jpg',
      ],
      examples: [
        'Hexagon is in the sentence.',
        'This sentence contains the word hexagon.',
        'We can use the word hexagon here.',
        'Here is an example of the word hexagon.',
      ],
      tdn: [
        {
          word: 'healthtech',
          definition:
            'Technology used to improve or support the delivery of healthcare.',
        },
        {
          word: 'health technology',
          definition:
            'The application of organized knowledge and skills in the form of devices, medicines, vaccines, procedures, and systems developed to solve a health problem and improve quality of life.',
        },
        {
          word: 'digital health',
          definition:
            'The convergence of digital technologies with health, healthcare, living, and society to enhance the efficiency of healthcare delivery and make medicines more personalized and precise.',
        },
      ],
      ttn: [
        {
          word: 'circle',
          definition:
            'A plane figure with all points equidistant from the center.',
        },
        {
          word: 'triangle',
          definition:
            'A plane figure with three straight sides and three angles.',
        },
        {
          word: 'square',
          definition:
            'A plane figure with four equal straight sides and four right angles.',
        },
      ],
    },
    {
      word: 'pentagon',
      definition: 'A plane figure with five straight sides and five angles.',
      topicId: 10,
      id: 217,
      pronunciation: '/ˈpɛn.tə.ɡɑn/',
      image_link: [
        'https://i.pinimg.com/236x/a3/6f/e6/a36fe644f4284ba9cd5666e7f15d31ac.jpg',
        'https://i.pinimg.com/236x/de/03/b9/de03b9f064bd921a3b980e83dab7f9ab.jpg',
        'https://i.pinimg.com/236x/ae/10/27/ae10273b8365de220b6e423e3b45b266.jpg',
        'https://i.pinimg.com/236x/11/d5/85/11d585827207c83758d2ebde0c7aff9b.jpg',
      ],
      examples: [
        'Pentagon is in the sentence.',
        'This sentence contains the word pentagon.',
        'We can use the word pentagon here.',
        'Here is an example of the word pentagon.',
      ],
      tdn: [
        {
          word: 'proptech',
          definition:
            'Technology designed to streamline the process of buying, selling, and managing real estate.',
        },
        {
          word: 'property technology',
          definition:
            'The use of information technology to help individuals and companies research, buy, sell, and manage real estate.',
        },
        {
          word: 'real estate technology',
          definition:
            'Technology that helps in buying, selling, and managing real estate.',
        },
      ],
      ttn: [
        {
          word: 'circle',
          definition:
            'A plane figure with all points equidistant from a fixed center.',
        },
        {
          word: 'triangle',
          definition:
            'A plane figure with three straight sides and three angles.',
        },
        {
          word: 'square',
          definition:
            'A plane figure with four equal straight sides and four right angles.',
        },
      ],
    },
    {
      word: 'octagon',
      definition: 'A plane figure with eight straight sides and eight angles.',
      topicId: 10,
      id: 218,
      pronunciation: '/ˈɑːk.tə.ɡɑːn/',
      image_link: [
        'https://i.pinimg.com/236x/28/d9/b5/28d9b5011d02072e4ce8301fbd2a6b0a.jpg',
        'https://i.pinimg.com/236x/13/54/7a/13547a3ade8ad197b5dd81b5278ba127.jpg',
        'https://i.pinimg.com/236x/0d/02/ca/0d02ca772bc47609ac75b9e6d02a1d54.jpg',
        'https://i.pinimg.com/236x/0e/b4/79/0eb4798a85c08dd436861912af1fdab6.jpg',
      ],
      examples: [
        'Octagon is in the sentence.',
        'This sentence contains the word octagon.',
        'We can use the word octagon here.',
        'Here is an example of the word octagon.',
      ],
      tdn: [
        {
          word: 'legaltech',
          definition:
            'Technology that aims to support, supplement, or replace traditional methods for delivering legal services, or that helps consumers access legal advice or justice.',
        },
        {
          word: 'legal technology',
          definition:
            'Technology used to support or replace traditional methods of delivering legal services.',
        },
        {
          word: 'lawtech',
          definition: 'Another term for legal technology.',
        },
      ],
      ttn: [
        {
          word: 'circle',
          definition:
            'A round plane figure whose boundary consists of points equidistant from a fixed center.',
        },
        {
          word: 'triangle',
          definition:
            'A plane figure with three straight sides and three angles.',
        },
        {
          word: 'pentagon',
          definition:
            'A plane figure with five straight sides and five angles.',
        },
      ],
    },
    {
      word: 'sphere',
      definition:
        'A round solid figure, or its surface, with every point on its surface equidistant from its center.',
      topicId: 10,
      id: 219,
      pronunciation: '/sfɪə/',
      image_link: [
        'https://i.pinimg.com/236x/b8/5b/a3/b85ba387c4f3795fd441a40b77dabf48.jpg',
        'https://i.pinimg.com/236x/d1/13/51/d11351308cf7fbf81b43e4dd5e486693.jpg',
        'https://i.pinimg.com/236x/bc/c0/3d/bcc03d3836addd918a45632b8c8a3721.jpg',
        'https://i.pinimg.com/236x/5c/82/92/5c82921fc3b7c35a317802871977307c.jpg',
      ],
      examples: [
        'Sphere is in the sentence.',
        'This sentence contains the word sphere.',
        'We can use the word sphere here.',
        'Here is an example of the word sphere.',
      ],
      tdn: [
        {
          word: 'insurtech',
          definition:
            'The use of technology innovations designed to squeeze out savings and efficiency from the current insurance industry model.',
        },
        {
          word: 'insurance technology',
          definition:
            'Technology designed to improve the efficiency and effectiveness of the insurance industry.',
        },
        {
          word: 'digital insurance',
          definition:
            'The use of technology to deliver and manage insurance products and services.',
        },
      ],
      ttn: [
        {
          word: 'plane',
          definition:
            'A flat, two-dimensional surface that extends infinitely in all directions.',
        },
        {
          word: 'cube',
          definition:
            'A three-dimensional shape with six square or rectangular sides, edges of equal length, and corners of equal angles.',
        },
        {
          word: 'pyramid',
          definition:
            'A three-dimensional shape with a polygonal base and triangular sides that meet at a common vertex.',
        },
      ],
    },
    {
      word: 'cube',
      definition:
        'A symmetrical three-dimensional shape, either solid or hollow, contained by six equal squares.',
      topicId: 10,
      id: 220,
      pronunciation: '/kjuːb/',
      image_link: [
        'https://i.pinimg.com/236x/12/51/ab/1251ab1a9a8d45c3ea7d09d517e9189e.jpg',
        'https://i.pinimg.com/236x/e4/b4/23/e4b42388056325a05018428058aff3a5.jpg',
        'https://i.pinimg.com/236x/5f/4c/cd/5f4ccd3ebfa0df3846971d429278bc65.jpg',
        'https://i.pinimg.com/236x/0d/dc/84/0ddc84f6c28cdc53a136359a3b480c25.jpg',
      ],
      examples: [
        'Cube is in the sentence.',
        'This sentence contains the word cube.',
        'We can use the word cube here.',
        'Here is an example of the word cube.',
      ],
      tdn: [
        {
          word: 'agritech',
          definition:
            'The use of technology in agriculture, horticulture, and aquaculture with the aim of improving yield, efficiency, and profitability.',
        },
        {
          word: 'agriculture technology',
          definition:
            'Technology used to improve the efficiency and output of agricultural processes.',
        },
        {
          word: 'farming technology',
          definition:
            'Technology used in farming to increase efficiency and productivity.',
        },
      ],
      ttn: [
        {
          word: 'sphere',
          definition:
            'A symmetrical three-dimensional shape, resembling a ball, with every point on its surface equidistant from its center.',
        },
        {
          word: 'pyramid',
          definition:
            'A polyhedron with a polygonal base and triangular faces that meet at a common vertex.',
        },
        {
          word: 'cylinder',
          definition:
            'A three-dimensional geometric shape with two parallel circular bases connected by a curved surface.',
        },
      ],
    },
    {
      word: 'cylinder',
      definition:
        'A solid geometric figure with straight parallel sides and a circular or oval cross section.',
      topicId: 10,
      id: 221,
      pronunciation: '/ˈsɪlɪndə(ɹ)/',
      image_link: [
        'https://i.pinimg.com/236x/45/0d/0d/450d0d0ff8c304a21acdfa82c75b8e35.jpg',
        'https://i.pinimg.com/236x/ec/de/fd/ecdefd1100054fd472d8e408e9c1b0b3.jpg',
        'https://i.pinimg.com/236x/50/f1/4d/50f14df595bcaa52482908cc6a4c142b.jpg',
        'https://i.pinimg.com/236x/9a/e4/50/9ae45097c4b65c9c67d22eb3ad799a40.jpg',
      ],
      examples: [
        'Cylinder is in the sentence.',
        'This sentence contains the word cylinder.',
        'We can use the word cylinder here.',
        'Here is an example of the word cylinder.',
      ],
      tdn: [
        {
          word: 'regtech',
          definition:
            'Regulatory technology, a new technology that uses information technology to enhance regulatory processes.',
        },
        {
          word: 'regulatory technology',
          definition:
            'Technology that addresses regulatory challenges in financial services through innovative solutions.',
        },
        {
          word: 'compliance technology',
          definition:
            'Technology that helps organizations comply with regulatory requirements.',
        },
      ],
      ttn: [
        {
          word: 'flat',
          definition: 'Having a level surface; without curves or indentations.',
        },
        {
          word: 'sphere',
          definition:
            'A perfectly round geometrical object in three-dimensional space.',
        },
        {
          word: 'cone',
          definition:
            'A solid or hollow object that tapers from a circular or roughly circular base to a point.',
        },
      ],
    },
    {
      word: 'cone',
      definition:
        'A solid or hollow object that tapers from a circular or roughly circular base to a point.',
      topicId: 10,
      id: 222,
      pronunciation: '/kəʊn/',
      image_link: [
        'https://i.pinimg.com/236x/7b/2c/cf/7b2ccf839d982aa7a13885f1722e6467.jpg',
        'https://i.pinimg.com/236x/e8/cb/57/e8cb5721b0b8a57620d4db782579ea83.jpg',
        'https://i.pinimg.com/236x/b3/72/c6/b372c6344be296d7b41396c057269ab3.jpg',
        'https://i.pinimg.com/236x/19/50/fa/1950fa073df6a9231ff2b29a27df2aab.jpg',
      ],
      examples: [
        'Cone is in the sentence.',
        'This sentence contains the word cone.',
        'We can use the word cone here.',
        'Here is an example of the word cone.',
      ],
      tdn: [
        {
          word: 'govtech',
          definition:
            'Government technology, which refers to the use of technology to improve government operations and public services.',
        },
        {
          word: 'government technology',
          definition:
            'The use of technology to enhance the efficiency and effectiveness of government operations and services.',
        },
        {
          word: 'public sector technology',
          definition:
            'Technology that is used by government agencies to serve the public.',
        },
      ],
      ttn: [
        {
          word: 'sphere',
          definition:
            'A round solid figure, or its surface, with every point on its surface equidistant from its center.',
        },
        {
          word: 'cube',
          definition:
            'A solid object with six square faces that are all of equal size and shape, and each angle is a right angle.',
        },
        {
          word: 'cylinder',
          definition:
            'A solid geometrical figure with straight parallel sides and a circular or oval cross section.',
        },
      ],
    },
    {
      word: 'pyramid',
      definition:
        'A monumental structure with a square or triangular base and sloping sides that meet in a point at the top.',
      topicId: 10,
      id: 223,
      pronunciation: '/ˈpɪɹəmɪd/',
      image_link: [
        'https://i.pinimg.com/236x/49/9b/4d/499b4d024f9fa428d41e5eddcf99ca10.jpg',
        'https://i.pinimg.com/236x/ce/0e/c9/ce0ec9e3c0e636d9359a61aa9e9ee12e.jpg',
        'https://i.pinimg.com/236x/db/71/63/db716344115fb9260976ac3d7c5adba1.jpg',
        'https://i.pinimg.com/236x/9c/70/7b/9c707b0ffd93a9a3268815dbed5b2fb0.jpg',
      ],
      examples: [
        'Pyramid is in the sentence.',
        'This sentence contains the word pyramid.',
        'We can use the word pyramid here.',
        'Here is an example of the word pyramid.',
      ],
      tdn: [
        {
          word: 'adtech',
          definition:
            'Advertising technology, which refers to software and tools that help agencies and brands target, deliver, and analyze their digital advertising efforts.',
        },
        {
          word: 'advertising technology',
          definition:
            'Technology used to manage and analyze advertising campaigns.',
        },
        {
          word: 'marketing technology',
          definition:
            'Technology used to manage and execute marketing processes.',
        },
      ],
      ttn: [
        {
          word: 'valley',
          definition:
            'A low area of land between hills or mountains, typically with a river or stream flowing through it.',
        },
        {
          word: 'plain',
          definition: 'A large area of flat land with few trees.',
        },
        {
          word: 'pit',
          definition: 'A large hole in the ground.',
        },
      ],
    },
    {
      word: 'parallelogram',
      definition:
        'A four-sided plane rectilinear figure with opposite sides parallel.',
      topicId: 10,
      id: 224,
      pronunciation: '/ˌpæ.ɹə.ˈlɛl.ə.ˌɡɹæm/',
      image_link: [
        'https://i.pinimg.com/236x/96/4d/5b/964d5b57d3924c1398803d1b5eb78317.jpg',
        'https://i.pinimg.com/236x/8c/58/00/8c5800ce19c02f275502268b4ab757b4.jpg',
        'https://i.pinimg.com/236x/8a/4d/8e/8a4d8e82d004434432ad52a1883effc1.jpg',
        'https://i.pinimg.com/236x/3f/ee/9e/3fee9eaea50af564d34639feba25e32b.jpg',
      ],
      examples: [
        'Parallelogram is in the sentence.',
        'This sentence contains the word parallelogram.',
        'We can use the word parallelogram here.',
        'Here is an example of the word parallelogram.',
      ],
      tdn: [
        {
          word: 'martech',
          definition:
            'Marketing technology, which refers to software and technology tools that assist in achieving marketing goals or objectives.',
        },
        {
          word: 'marketing technology',
          definition:
            'Technology used to manage and execute marketing processes.',
        },
        {
          word: 'digital marketing tools',
          definition: 'Technology tools used in digital marketing efforts.',
        },
      ],
      ttn: [
        {
          word: 'circle',
          definition:
            'A round plane figure whose boundary consists of points equidistant from a fixed center.',
        },
        {
          word: 'triangle',
          definition:
            'A plane figure with three straight sides and three angles.',
        },
        {
          word: 'hexagon',
          definition: 'A six-sided plane figure.',
        },
      ],
    },
    {
      word: 'rhombus',
      definition: 'A quadrilateral whose four sides all have the same length.',
      topicId: 10,
      id: 225,
      pronunciation: '/ˈrɑːm.bəs/',
      image_link: [
        'https://i.pinimg.com/236x/3d/bf/11/3dbf1150e0ff0747d032511bf72e54ee.jpg',
        'https://i.pinimg.com/236x/7d/d3/a3/7dd3a3cdd46578d10842b7a240cc5023.jpg',
        'https://i.pinimg.com/236x/8b/25/33/8b25334e6b41ece25af6c55af9ccaea4.jpg',
        'https://i.pinimg.com/236x/bd/c5/94/bdc594fd6a40aaab657ea879510a9785.jpg',
      ],
      examples: [
        'Rhombus is in the sentence.',
        'This sentence contains the word rhombus.',
        'We can use the word rhombus here.',
        'Here is an example of the word rhombus.',
      ],
      tdn: [
        {
          word: 'sportstech',
          definition:
            'Sports technology, which refers to the use of technology to enhance sports performance and the experience of sports fans.',
        },
        {
          word: 'sports technology',
          definition:
            'Technology used to improve sports performance and fan engagement.',
        },
        {
          word: 'athletic technology',
          definition:
            'Technology used to support athletic performance and training.',
        },
      ],
      ttn: [
        {
          word: 'circle',
          definition:
            'A closed plane curve consisting of all points at a given distance from a point within it.',
        },
        {
          word: 'rectangle',
          definition:
            'A quadrilateral with opposite sides parallel and all angles equal to 90 degrees.',
        },
        {
          word: 'triangle',
          definition: 'A polygon with three edges and three vertices.',
        },
      ],
    },
    {
      word: 'trapezoid',
      definition: 'A quadrilateral with only one pair of parallel sides.',
      topicId: 10,
      id: 226,
      pronunciation: '/ˈtɹæpəzɔɪd/',
      image_link: [
        'https://i.pinimg.com/236x/a0/fc/c7/a0fcc71fceec13e0062ead58ce6cc0f1.jpg',
        'https://i.pinimg.com/236x/c8/6f/a6/c86fa66dde7b0aa195abfd94cf0aad39.jpg',
        'https://i.pinimg.com/236x/7e/6b/db/7e6bdbf036a6b162c9594dd84e90094d.jpg',
        'https://i.pinimg.com/236x/24/a7/36/24a736875184e808049d7defc71e7e0f.jpg',
      ],
      examples: [
        'Trapezoid is in the sentence.',
        'This sentence contains the word trapezoid.',
        'We can use the word trapezoid here.',
        'Here is an example of the word trapezoid.',
      ],
      tdn: [
        {
          word: 'foodtech',
          definition:
            'Food technology, which refers to the application of technology to improve food production, processing, and distribution.',
        },
        {
          word: 'food technology',
          definition:
            'The application of technology to the production, processing, and distribution of food.',
        },
        {
          word: 'agri-food technology',
          definition: 'Technology used in the agriculture and food industries.',
        },
      ],
      ttn: [
        {
          word: 'rectangle',
          definition:
            'A quadrilateral with all angles equal to 90 degrees and opposite sides parallel.',
        },
        {
          word: 'parallelogram',
          definition: 'A quadrilateral with opposite sides parallel.',
        },
        {
          word: 'rhombus',
          definition: 'A quadrilateral with all sides of equal length.',
        },
      ],
    },
    {
      word: 'ellipse',
      definition:
        'A regular oval shape, traced by a point moving in a plane so that the sum of its distances from two other points (the foci) is constant.',
      topicId: 10,
      id: 227,
      pronunciation: '/iˈlɪps/',
      image_link: [
        'https://i.pinimg.com/236x/98/df/7b/98df7bc05657ca4b2593d5a81c3265aa.jpg',
        'https://i.pinimg.com/236x/14/8b/b9/148bb9296854536a0f9e263d9b48ab95.jpg',
        'https://i.pinimg.com/236x/3b/2a/c3/3b2ac334acb54a23d95ac08a85026be0.jpg',
        'https://i.pinimg.com/236x/c9/c4/88/c9c488ae52cb5e978ef16aee2d78c183.jpg',
      ],
      examples: [
        'Ellipse is in the sentence.',
        'This sentence contains the word ellipse.',
        'We can use the word ellipse here.',
        'Here is an example of the word ellipse.',
      ],
      tdn: [
        {
          word: 'traveltech',
          definition:
            'Travel technology, which refers to the use of technology to plan, book, and enjoy travel experiences.',
        },
        {
          word: 'travel technology',
          definition:
            'Technology used to facilitate travel planning, booking, and experiences.',
        },
        {
          word: 'tourism technology',
          definition:
            'Technology used in the tourism industry to enhance travel experiences.',
        },
      ],
      ttn: [
        {
          word: 'line',
          definition:
            'A straight or curved continuous extent of length without breadth.',
        },
        {
          word: 'circle',
          definition: 'A perfectly round shape.',
        },
        {
          word: 'square',
          definition: 'A four-sided figure with equal sides and angles.',
        },
      ],
    },
    {
      word: 'torus',
      definition:
        'A surface generated by a circle rotating about an axis in its plane that does not intersect the circle.',
      topicId: 10,
      id: 228,
      pronunciation: '/ˈtɔːɹəs/',
      image_link: [
        'https://i.pinimg.com/236x/8d/a1/5c/8da15c9b53f0a05942d1e7d7d7b73e9d.jpg',
        'https://i.pinimg.com/236x/6e/7e/52/6e7e526e07837182aaaae13574bb7122.jpg',
        'https://i.pinimg.com/236x/0a/fc/06/0afc0687b7cb8b6c71970750b069c70a.jpg',
        'https://i.pinimg.com/236x/28/af/21/28af219a703ba5072301e37b0da46672.jpg',
      ],
      examples: [
        'Torus is in the sentence.',
        'This sentence contains the word torus.',
        'We can use the word torus here.',
        'Here is an example of the word torus.',
      ],
      tdn: [
        {
          word: 'fashiontech',
          definition:
            'Fashion technology, which refers to the use of technology to enhance the design, production, and retail of fashion products.',
        },
        {
          word: 'fashion technology',
          definition:
            'The use of technology in the design, production, and retail of fashion products.',
        },
        {
          word: 'apparel technology',
          definition:
            'Technology used in the apparel industry to improve design and production processes.',
        },
      ],
      ttn: [
        {
          word: 'line',
          definition:
            'A one-dimensional geometric figure that extends infinitely in both directions.',
        },
        {
          word: 'point',
          definition:
            'A fundamental geometric element with no dimensions; it specifies a location.',
        },
        {
          word: 'plane',
          definition:
            'A two-dimensional flat surface that extends infinitely in all directions.',
        },
      ],
    },
    {
      word: 'prism',
      definition:
        'A solid geometric figure whose two ends are similar, equal, and parallel rectilinear figures, and whose sides are parallelograms.',
      topicId: 10,
      id: 229,
      pronunciation: '/ˈpɹɪzəm/',
      image_link: [
        'https://i.pinimg.com/236x/bf/a6/37/bfa6374a1fd5891b7864baf6a20bfd58.jpg',
        'https://i.pinimg.com/236x/ad/96/a0/ad96a059370685a4cc5f3c137c666e36.jpg',
        'https://i.pinimg.com/236x/e0/37/73/e03773335e899df2688123e80b0d81cf.jpg',
        'https://i.pinimg.com/236x/bd/58/76/bd5876ba30bc0afb107b7a183ddb9a83.jpg',
      ],
      examples: [
        'Prism is in the sentence.',
        'This sentence contains the word prism.',
        'We can use the word prism here.',
        'Here is an example of the word prism.',
      ],
      tdn: [
        {
          word: 'insurtech',
          definition:
            'The use of technology innovations designed to squeeze out savings and efficiency from the current insurance industry model.',
        },
        {
          word: 'insurance technology',
          definition:
            'Technology designed to improve the efficiency and effectiveness of the insurance industry.',
        },
        {
          word: 'digital insurance',
          definition:
            'The use of technology to deliver and manage insurance products and services.',
        },
      ],
      ttn: [
        {
          word: 'solid',
          definition:
            'Having a definite shape and volume; not liquid or gaseous.',
        },
        {
          word: 'pyramid',
          definition:
            'A polyhedron having a polygonal base and triangular faces meeting at a common vertex.',
        },
        {
          word: 'sphere',
          definition:
            'A three-dimensional geometric object whose surface consists of all points equidistant from a given point.',
        },
      ],
    },
    {
      word: 'sonata',
      definition: 'A composition for an instrumental soloist.',
      topicId: 11,
      id: 230,
      pronunciation: '/səˈnɑːtə/',
      image_link: [
        'https://i.pinimg.com/236x/63/5e/ae/635eae12bafef3fc0b12995f04f7241f.jpg',
        'https://i.pinimg.com/236x/1e/b6/73/1eb6738e383c9008c725c5411c84734d.jpg',
        'https://i.pinimg.com/236x/0b/24/7f/0b247f2bb44bfbcfdb7417ad270050c9.jpg',
        'https://i.pinimg.com/236x/89/27/74/8927743ed309fe220426999c35af46a4.jpg',
      ],
      examples: [
        'Sonata is in the sentence.',
        'This sentence contains the word sonata.',
        'We can use the word sonata here.',
        'Here is an example of the word sonata.',
      ],
      tdn: [
        {
          word: 'sportstech',
          definition:
            'Sports technology, which refers to the use of technology to enhance sports performance and the experience of sports fans.',
        },
        {
          word: 'sports technology',
          definition:
            'Technology used to improve sports performance and fan engagement.',
        },
        {
          word: 'athletic technology',
          definition:
            'Technology used to support athletic performance and training.',
        },
      ],
      ttn: [
        {
          word: 'chorale',
          definition:
            'A hymn or psalm sung to a traditional or composed melody.',
        },
        {
          word: 'symphony',
          definition:
            'A complex musical composition typically consisting of multiple movements for orchestra.',
        },
        {
          word: 'ballad',
          definition: 'A narrative song or poem.',
        },
      ],
    },
    {
      word: 'tempo',
      definition: 'The speed at which a passage of music is played.',
      topicId: 11,
      id: 230,
      pronunciation: '/ˈtɛmpoʊ/',
      image_link: [
        'https://i.pinimg.com/236x/17/e8/ad/17e8ad18a14bc6181bff51675d662e3d.jpg',
        'https://i.pinimg.com/236x/86/68/07/866807e7803cc248add9dee858f7053d.jpg',
        'https://i.pinimg.com/236x/9e/a4/a2/9ea4a2da3e7e0ce28f2f9d023b94cc42.jpg',
        'https://i.pinimg.com/236x/ab/99/de/ab99de97374d42c661f86a5fd9f60c80.jpg',
      ],
      examples: [
        'Tempo is in the sentence.',
        'This sentence contains the word tempo.',
        'We can use the word tempo here.',
        'Here is an example of the word tempo.',
      ],
      tdn: [
        {
          word: 'sportstech',
          definition:
            'Sports technology, which refers to the use of technology to enhance sports performance and the experience of sports fans.',
        },
        {
          word: 'sports technology',
          definition:
            'Technology used to improve sports performance and fan engagement.',
        },
        {
          word: 'athletic technology',
          definition:
            'Technology used to support athletic performance and training.',
        },
      ],
      ttn: [
        {
          word: 'pause',
          definition: 'A temporary stop or break in music.',
        },
        {
          word: 'rhythm',
          definition: 'The pattern of beats or stresses in music.',
        },
        {
          word: 'lento',
          definition: 'Slow tempo in music.',
        },
      ],
    },
    {
      word: 'overture',
      definition: 'An orchestral piece at the beginning of an opera.',
      topicId: 11,
      id: 232,
      pronunciation: '/ˈoʊvərtʃər/',
      image_link: [
        'https://i.pinimg.com/236x/ae/a8/59/aea859309a639c16eb3603dca994a9c4.jpg',
        'https://i.pinimg.com/236x/1e/7c/7f/1e7c7fac94d7d697611c7f9ea5d3f375.jpg',
        'https://i.pinimg.com/236x/1b/13/52/1b135263af824750e426d6c56998bd75.jpg',
        'https://i.pinimg.com/236x/3d/d7/0b/3dd70bf4dc487ed19c6c368fd0e4c93a.jpg',
      ],
      examples: [
        'Overture is in the sentence.',
        'This sentence contains the word overture.',
        'We can use the word overture here.',
        'Here is an example of the word overture.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'finale',
          definition: 'The concluding part of a performance or piece of music.',
        },
        {
          word: 'finis',
          definition: 'The end or conclusion of something.',
        },
        {
          word: 'epilogue',
          definition:
            'A section or speech at the end of a book or play that serves as a comment on or a conclusion to what has happened.',
        },
      ],
    },
    {
      word: 'octave',
      definition:
        'A series of eight notes occupying the interval between two notes.',
      topicId: 11,
      id: 235,
      pronunciation: '/ˈɑːktɪv/',
      image_link: [
        'https://i.pinimg.com/236x/65/c4/af/65c4afaabc9d4c99c488b606d50fda8f.jpg',
        'https://i.pinimg.com/236x/c8/55/ad/c855ad8ef785ba536c4bc245d852f281.jpg',
        'https://i.pinimg.com/236x/48/f8/e4/48f8e42afade8816ae240dcbcefcbc15.jpg',
        'https://i.pinimg.com/236x/89/c0/cb/89c0cb6bfd945c65a7529ec3fd4788c3.jpg',
      ],
      examples: [
        'Octave is in the sentence.',
        'This sentence contains the word octave.',
        'We can use the word octave here.',
        'Here is an example of the word octave.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'unison',
          definition: 'A single note or pitch.',
        },
        {
          word: 'interval',
          definition: 'The distance between two musical pitches.',
        },
        {
          word: 'semitone',
          definition: 'Half of a whole tone in music.',
        },
      ],
    },
    {
      word: 'ensemble',
      definition: 'A group of musicians who perform together.',
      topicId: 11,
      id: 238,
      pronunciation: '/ɑːnˈsɑːmbəl/',
      image_link: [
        'https://i.pinimg.com/236x/90/ec/63/90ec63023123ac49bd394449bfeb40cc.jpg',
        'https://i.pinimg.com/236x/56/83/a5/5683a5f1d7a2589603f34e091249fd08.jpg',
        'https://i.pinimg.com/236x/9b/e3/1f/9be31f1f1029e7d03be03f01fd253100.jpg',
        'https://i.pinimg.com/236x/46/fe/52/46fe52bfa6420b4d2a3a885c53f30fb0.jpg',
      ],
      examples: [
        'Ensemble is in the sentence.',
        'This sentence contains the word ensemble.',
        'We can use the word ensemble here.',
        'Here is an example of the word ensemble.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'soloist',
          definition: 'A musician who performs alone.',
        },
        {
          word: 'individual',
          definition: 'A single person or entity.',
        },
        {
          word: 'duo',
          definition: 'A group of two musicians who perform together.',
        },
      ],
    },
    {
      word: 'scale',
      definition: 'A series of notes ordered by pitch.',
      topicId: 11,
      id: 239,
      pronunciation: '/skeɪl/',
      image_link: [
        'https://i.pinimg.com/236x/21/a4/ac/21a4ac6663bfe085d1af6dc6ba1aa5d3.jpg',
        'https://i.pinimg.com/236x/37/9d/60/379d60d190d3e7a27bae141e688a4185.jpg',
        'https://i.pinimg.com/236x/f2/50/22/f25022be6192073d663b3613a1fc0903.jpg',
        'https://i.pinimg.com/236x/04/96/24/049624f9eb301a75c294c3b151d5e3d8.jpg',
      ],
      examples: [
        'Scale is in the sentence.',
        'This sentence contains the word scale.',
        'We can use the word scale here.',
        'Here is an example of the word scale.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'random',
          definition: 'Having no specific order or sequence.',
        },
        {
          word: 'disorder',
          definition: 'A state of confusion or lack of organization.',
        },
        {
          word: 'chaos',
          definition: 'Complete disorder and confusion.',
        },
      ],
    },
    {
      word: 'melody',
      definition: 'A sequence of single notes that is musically satisfying.',
      topicId: 11,
      id: 240,
      pronunciation: '/ˈmɛlədi/',
      image_link: [
        'https://i.pinimg.com/236x/8f/8e/f1/8f8ef11883162affbc58d951d64fb606.jpg',
        'https://i.pinimg.com/236x/b8/5b/be/b85bbe6d6783dd2a31e7e98fc9e95214.jpg',
        'https://i.pinimg.com/236x/a9/c4/1f/a9c41f17f6bf359b380a57cd89bccc5c.jpg',
        'https://i.pinimg.com/236x/0d/e9/21/0de921fc70ea6a89a54b3bc046bb1d1a.jpg',
      ],
      examples: [
        'Melody is in the sentence.',
        'This sentence contains the word melody.',
        'We can use the word melody here.',
        'Here is an example of the word melody.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'discord',
          definition: 'A lack of harmony or agreement',
        },
        {
          word: 'noise',
          definition: 'Sound, especially of a loud, harsh, or confused kind',
        },
        {
          word: 'cacophony',
          definition: 'A harsh, discordant mixture of sounds',
        },
      ],
    },
    {
      word: 'conductor',
      definition: 'A person who directs the performance of an orchestra.',
      topicId: 11,
      id: 241,
      pronunciation: '/kənˈdʌktər/',
      image_link: [
        'https://i.pinimg.com/236x/ab/bd/76/abbd76276b6d6a0cb9ba7a6d2d2f906a.jpg',
        'https://i.pinimg.com/236x/5d/75/32/5d7532cdefb3bf142ab1f33de3e08f2c.jpg',
        'https://i.pinimg.com/236x/23/5d/fe/235dfea1ba0652d17b0d156e2aef3a44.jpg',
        'https://i.pinimg.com/236x/ab/76/cf/ab76cf7b0fd7c52f65cf7aba33bc3f3c.jpg',
      ],
      examples: [
        'Conductor is in the sentence.',
        'This sentence contains the word conductor.',
        'We can use the word conductor here.',
        'Here is an example of the word conductor.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'audience',
          definition: 'A group of spectators or listeners at a performance.',
        },
        {
          word: 'musician',
          definition:
            'A person who plays a musical instrument, especially as a profession.',
        },
        {
          word: 'spectator',
          definition: 'A person who watches at a show, game, or other event.',
        },
      ],
    },
    {
      word: 'symphony',
      definition: 'An elaborate musical composition for a full orchestra.',
      topicId: 11,
      id: 242,
      pronunciation: '/ˈsɪmfəni/',
      image_link: [
        'https://i.pinimg.com/236x/46/9f/74/469f74707e67589957e6fedd1281ba2a.jpg',
        'https://i.pinimg.com/236x/6b/9b/f6/6b9bf6d80ee16ecaade3b9256318434f.jpg',
        'https://i.pinimg.com/236x/e8/0b/8e/e80b8e7942a117718bf0ca5497bc40c0.jpg',
        'https://i.pinimg.com/236x/26/c4/9a/26c49a90b9048f57bb2dc0aeb0551155.jpg',
      ],
      examples: [
        'Symphony is in the sentence.',
        'This sentence contains the word symphony.',
        'We can use the word symphony here.',
        'Here is an example of the word symphony.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'silence',
          definition: 'Complete absence of sound or noise.',
        },
        {
          word: 'discord',
          definition: 'Lack of harmony or agreement.',
        },
        {
          word: 'cacophony',
          definition: 'A harsh, discordant mixture of sounds.',
        },
      ],
    },
    {
      word: 'rhythm',
      definition: 'A strong, regular, repeated pattern of movement or sound.',
      topicId: 11,
      id: 243,
      pronunciation: '/ˈrɪðəm/',
      image_link: [
        'https://i.pinimg.com/236x/64/a0/68/64a068f5b63a7af21cc597943b5993c0.jpg',
        'https://i.pinimg.com/236x/cf/7c/d3/cf7cd344572cf436af5d23f1e5fe58e2.jpg',
        'https://i.pinimg.com/236x/c9/b8/32/c9b83239df2a60c64a07f34b327aff65.jpg',
        'https://i.pinimg.com/236x/02/bc/5c/02bc5c8432b1dc55f4a4e20706517524.jpg',
      ],
      examples: [
        'Rhythm is in the sentence.',
        'This sentence contains the word rhythm.',
        'We can use the word rhythm here.',
        'Here is an example of the word rhythm.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'chaos',
          definition: 'Complete disorder and confusion.',
        },
        {
          word: 'disorder',
          definition: 'A state of confusion or untidiness.',
        },
        {
          word: 'randomness',
          definition: 'Lacking any definite plan or prearranged order.',
        },
      ],
    },
    {
      word: 'pitch',
      definition: 'The quality of a sound governed by the rate of vibrations.',
      topicId: 11,
      id: 247,
      pronunciation: '/pɪtʃ/',
      image_link: [
        'https://i.pinimg.com/236x/e8/8e/d2/e88ed2fc7cf4e24d7f6eb8b96c388766.jpg',
        'https://i.pinimg.com/236x/24/c4/f6/24c4f6ae553c4c5118aa6452f4e477c9.jpg',
        'https://i.pinimg.com/236x/da/57/51/da5751b450180b351390bcf0462e3a96.jpg',
        'https://i.pinimg.com/236x/c7/e2/4c/c7e24c7fd87b06afa2e3ad779290a635.jpg',
      ],
      examples: [
        'Pitch is in the sentence.',
        'This sentence contains the word pitch.',
        'We can use the word pitch here.',
        'Here is an example of the word pitch.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'silence',
          definition: 'Complete absence of sound.',
        },
        {
          word: 'tone',
          definition:
            'A musical or vocal sound with reference to its pitch, quality, and strength.',
        },
        {
          word: 'flat',
          definition:
            'Having a level surface; without raised areas or indentations.',
        },
      ],
    },
    {
      word: 'chord',
      definition: 'A group of notes sounded together.',
      topicId: 11,
      id: 248,
      pronunciation: '/kɔːrd/',
      image_link: [
        'https://i.pinimg.com/236x/ad/39/24/ad39240b0a4f56603793e3f429ae8ff3.jpg',
        'https://i.pinimg.com/236x/3e/e4/46/3ee4464120cd7045ed674547edcf9e85.jpg',
        'https://i.pinimg.com/236x/5e/10/33/5e10338a59dd0400886ac343ebe38d94.jpg',
        'https://i.pinimg.com/236x/12/34/b0/1234b019101e64a7a55c9bb3fbbaebf0.jpg',
      ],
      examples: [
        'Chord is in the sentence.',
        'This sentence contains the word chord.',
        'We can use the word chord here.',
        'Here is an example of the word chord.',
      ],
      tdn: [],
    },
    {
      word: 'sculpture',
      definition:
        'The art of making two- or three-dimensional representative or abstract forms.',
      topicId: 12,
      id: 261,
      pronunciation: '/ˈskʌlptʃər/',
      image_link: [
        'https://i.pinimg.com/236x/82/f5/ce/82f5ce182a19367ec3b5d6c4efdc5a05.jpg',
        'https://i.pinimg.com/236x/6f/72/a9/6f72a9d99a538edc21c405dc34947b67.jpg',
        'https://i.pinimg.com/236x/a4/cd/e7/a4cde75ef13712c6b1e0b62987b4b302.jpg',
        'https://i.pinimg.com/236x/39/8a/16/398a1666eca1299a4d8d869a5c904119.jpg',
      ],
      examples: [
        'Sculpture is in the sentence.',
        'This sentence contains the word sculpture.',
        'We can use the word sculpture here.',
        'Here is an example of the word sculpture.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'word',
          definition:
            'A single distinct meaningful element of speech or writing.',
        },
        {
          word: 'sound',
          definition:
            "Vibrations that travel through the air or another medium and can be heard when they reach a person's or animal's ear.",
        },
        {
          word: 'concept',
          definition: 'An abstract idea or general notion.',
        },
      ],
    },
    {
      word: 'protagonist',
      definition:
        'The main character in a literary work, often considered the hero or central figure.',
      topicId: 13,
      id: 267,
      pronunciation: '/pɹəˈtæ.ɡə.nɪst/',
      image_link: [
        'https://i.pinimg.com/236x/cb/4d/a2/cb4da2442823ba18d7a8947530e12b3e.jpg',
        'https://i.pinimg.com/236x/4c/20/d7/4c20d71d1be694bc866b33a5b82ac5e6.jpg',
        'https://i.pinimg.com/236x/35/b3/a3/35b3a3347bbf63567b67ef977481a7bd.jpg',
        'https://i.pinimg.com/236x/fc/1d/63/fc1d63c3b94d7824f59de0acd7b9763f.jpg',
      ],
      examples: [
        'Protagonist is in the sentence.',
        'This sentence contains the word protagonist.',
        'We can use the word protagonist here.',
        'Here is an example of the word protagonist.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'antagonist',
          definition:
            'A character or force in conflict with the protagonist; often considered the villain or opposing force.',
        },
        {
          word: 'supporting character',
          definition:
            'A character in a literary work who assists the protagonist but is not the main focus.',
        },
        {
          word: 'minor character',
          definition:
            'A character who plays a lesser role in the story compared to the protagonist or supporting characters.',
        },
      ],
    },
    {
      word: 'antagonist',
      definition:
        'A character or force in conflict with the main character, often considered the villain.',
      topicId: 13,
      id: 268,
      pronunciation: '/ænˈtæɡənɪst/',
      image_link: [
        'https://i.pinimg.com/236x/8a/f4/80/8af4801f46773ec9e4ecb1cf1c1c51fc.jpg',
        'https://i.pinimg.com/236x/de/b8/6a/deb86af111468561c65a2b00d1ee47b1.jpg',
        'https://i.pinimg.com/236x/f9/8e/85/f98e8543e7c04ee30976f1c597f1fc52.jpg',
        'https://i.pinimg.com/236x/4b/e9/58/4be958ca65b346518b86f86fa9d2a869.jpg',
      ],
      examples: [
        'Antagonist is in the sentence.',
        'This sentence contains the word antagonist.',
        'We can use the word antagonist here.',
        'Here is an example of the word antagonist.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'protagonist',
          definition:
            'The main character in a story, often considered the hero.',
        },
        {
          word: 'ally',
          definition:
            'A person or group that is on the same side as another in a conflict.',
        },
        {
          word: 'supporter',
          definition:
            'Someone who provides assistance or encouragement to another person or cause.',
        },
      ],
    },
    {
      word: 'metaphor',
      definition:
        'A figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable.',
      topicId: 13,
      id: 269,
      pronunciation: '/ˈmɛt.ə.fɔː(ɹ)/',
      image_link: [
        'https://i.pinimg.com/236x/82/b8/ee/82b8eeda6aca89922c5934d6e85f03f8.jpg',
        'https://i.pinimg.com/236x/f4/f3/c2/f4f3c24ec12d7d4f3fecbeab983059fc.jpg',
        'https://i.pinimg.com/236x/95/76/55/957655a498e814a37ad9d6c62c67865a.jpg',
        'https://i.pinimg.com/236x/ba/44/f0/ba44f0772152e9a0848203348d34f597.jpg',
      ],
      examples: [
        'Metaphor is in the sentence.',
        'This sentence contains the word metaphor.',
        'We can use the word metaphor here.',
        'Here is an example of the word metaphor.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'literal',
          definition:
            'Taking words in their usual or most basic sense without metaphor or allegory.',
        },
        {
          word: 'explicit',
          definition:
            'Stated clearly and in detail, leaving no room for confusion or doubt.',
        },
        {
          word: 'fact',
          definition: 'A thing that is known or proved to be true.',
        },
      ],
    },
    {
      word: 'symbolism',
      definition:
        'The use of symbols to represent ideas or qualities in literature.',
      topicId: 13,
      id: 270,
      pronunciation: '/ˈsɪmbəˌlɪzəm/',
      image_link: [
        'https://i.pinimg.com/236x/00/7b/5c/007b5cdf849c5581ff55eddd9024ce3a.jpg',
        'https://i.pinimg.com/236x/a9/7c/78/a97c78ccf85fbbe99190e7fcb4bc48a0.jpg',
        'https://i.pinimg.com/236x/fb/b6/78/fbb6781ee72741dee138c8c48419f07a.jpg',
        'https://i.pinimg.com/236x/39/60/6b/39606b8534d9e4c0fd58853df8a4e524.jpg',
      ],
      examples: [
        'Symbolism is in the sentence.',
        'This sentence contains the word symbolism.',
        'We can use the word symbolism here.',
        'Here is an example of the word symbolism.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'concrete',
          definition:
            'Relating to or involving specific people, things, or actions rather than general ideas or qualities.',
        },
        {
          word: 'explicit',
          definition:
            'Stated clearly and in detail, leaving no room for confusion or doubt.',
        },
        {
          word: 'literal',
          definition:
            'Taking words in their usual or most basic sense without metaphor or allegory.',
        },
      ],
    },
    {
      word: 'allegory',
      definition:
        'A story, poem, or picture that can be interpreted to reveal a hidden meaning, typically a moral or political one.',
      topicId: 13,
      id: 271,
      pronunciation: '/ˈæl.ɘˌɡoʊɹ.i/',
      image_link: [
        'https://i.pinimg.com/236x/ff/ab/ef/ffabef03ffd20908a824f62b87102958.jpg',
        'https://i.pinimg.com/236x/b8/df/1c/b8df1c2e9fadb9bd86569711a66f265d.jpg',
        'https://i.pinimg.com/236x/e5/8a/a6/e58aa63342861dce3d1a1645b562ed5c.jpg',
        'https://i.pinimg.com/236x/17/32/92/173292d63436cbbb824370a284bde3b1.jpg',
      ],
      examples: [
        'Allegory is in the sentence.',
        'This sentence contains the word allegory.',
        'We can use the word allegory here.',
        'Here is an example of the word allegory.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'concrete',
          definition:
            'Relating to or involving specific people, things, or actions rather than general ideas or qualities.',
        },
        {
          word: 'explicit',
          definition:
            'Stated clearly and in detail, leaving no room for confusion or doubt.',
        },
        {
          word: 'literal',
          definition:
            'Taking words in their usual or most basic sense without metaphor or allegory.',
        },
      ],
    },
    {
      word: 'genre',
      definition:
        'A category of artistic composition, as in music or literature, characterized by similarities in form, style, or subject matter.',
      topicId: 13,
      id: 272,
      pronunciation: '/(d)ʒɒn.ɹə/',
      image_link: [
        'https://i.pinimg.com/236x/3a/fc/53/3afc53e8ad44bdb8653e9140675af5e1.jpg',
        'https://i.pinimg.com/236x/8d/6d/97/8d6d97362b85817c7a9d41413bacecb3.jpg',
        'https://i.pinimg.com/236x/90/97/e0/9097e07acf2ede91dcfa00afb489196a.jpg',
        'https://i.pinimg.com/236x/c5/f3/8a/c5f38af5688cfad7dcb9690a24b26b8b.jpg',
      ],
      examples: [
        'Genre is in the sentence.',
        'This sentence contains the word genre.',
        'We can use the word genre here.',
        'Here is an example of the word genre.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'prose',
          definition:
            'Ordinary language without metrical structure, opposed to verse.',
        },
        {
          word: 'nonfiction',
          definition:
            'Prose writing that is based on facts, real events, and real people.',
        },
        {
          word: 'individuality',
          definition:
            'The quality or character of a particular person or thing that distinguishes them from others of the same kind.',
        },
      ],
    },
    {
      word: 'foreshadowing',
      definition:
        'A literary device in which a writer gives an advance hint of what is to come later in the story.',
      topicId: 13,
      id: 273,
      pronunciation: '/fɔrˈʃæd·oʊ·ɪŋ/',
      image_link: [
        'https://i.pinimg.com/236x/ef/2e/0d/ef2e0d01d3cbdfc679b111eaceca253c.jpg',
        'https://i.pinimg.com/236x/ca/46/2b/ca462b0ba6a1616208e081208354f23b.jpg',
        'https://i.pinimg.com/236x/68/92/21/6892211896c59565fac6dc67c8d54b79.jpg',
        'https://i.pinimg.com/236x/5c/4e/ff/5c4eff5e7ed6a9f06fbdde06b83095fc.jpg',
      ],
      examples: [
        'Foreshadowing is in the sentence.',
        'This sentence contains the word foreshadowing.',
        'We can use the word foreshadowing here.',
        'Here is an example of the word foreshadowing.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'retrospective',
          definition:
            'Looking back on or dealing with past events or situations.',
        },
        {
          word: 'surprise',
          definition: 'An unexpected or astonishing event, fact, or thing.',
        },
        {
          word: 'spontaneity',
          definition:
            'The quality of being spontaneous; occurring naturally or without effort.',
        },
      ],
    },
    {
      word: 'climax',
      definition:
        'The most intense, exciting, or important point of a story; a culmination or apex.',
      topicId: 13,
      id: 274,
      pronunciation: '/ˈklaɪmæks/',
      image_link: [],
      examples: [
        'Climax is in the sentence.',
        'This sentence contains the word climax.',
        'We can use the word climax here.',
        'Here is an example of the word climax.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'beginning',
          definition: 'The initial point or starting phase of something.',
        },
        {
          word: 'nadir',
          definition: 'The lowest point; the opposite of a peak or climax.',
        },
        {
          word: 'anticlimax',
          definition:
            'A disappointing end to an exciting or impressive series of events.',
        },
      ],
    },
    {
      word: 'irony',
      definition:
        "The expression of one's meaning by using language that normally signifies the opposite, typically for humorous or emphatic effect.",
      topicId: 13,
      id: 275,
      pronunciation: ' /ˈaɪ.rə.ni/',
      image_link: [
        'https://i.pinimg.com/236x/87/4f/fe/874ffe15fc423d5b17722a5d46641c4c.jpg',
        'https://i.pinimg.com/236x/8a/02/0c/8a020cd51f866bcf04a6a460c6992263.jpg',
        'https://i.pinimg.com/236x/89/3d/23/893d23aa1cad5988e66d77fcd6d52413.jpg',
        'https://i.pinimg.com/236x/ce/bf/e3/cebfe3cd4bc9bcd97dcd8972f7f8e03f.jpg',
      ],
      examples: [
        'Irony is in the sentence.',
        'This sentence contains the word irony.',
        'We can use the word irony here.',
        'Here is an example of the word irony.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'literal',
          definition:
            'Following the exact words in their usual sense without metaphor or allegory.',
        },
        {
          word: 'directness',
          definition:
            'The quality of being straightforward and clear in communication.',
        },
        {
          word: 'seriousness',
          definition:
            'The state or quality of being solemn, earnest, or grave in manner or expression.',
        },
      ],
    },
    {
      word: 'narrative',
      definition: 'A spoken or written account of connected events; a story.',
      topicId: 13,
      id: 276,
      pronunciation: '/ˈnæɹətɪv/',
      image_link: [
        'https://i.pinimg.com/236x/d5/23/6c/d5236c7f7f44e1d1d8285758ffe19afc.jpg',
        'https://i.pinimg.com/236x/91/a7/01/91a701fe3fbbb3569efb7a92c109f3d9.jpg',
        'https://i.pinimg.com/236x/22/30/b4/2230b471d792d5cf069e085bba998f04.jpg',
        'https://i.pinimg.com/236x/b5/e5/ad/b5e5ad8f35187a279457fe5ba965ee86.jpg',
      ],
      examples: [
        'Narrative is in the sentence.',
        'This sentence contains the word narrative.',
        'We can use the word narrative here.',
        'Here is an example of the word narrative.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'fact',
          definition:
            'A statement that can be proven true or false; something that actually exists or has occurred.',
        },
        {
          word: 'nonfiction',
          definition:
            'Prose writing that is based on facts, real events, and real people, such as biography or history.',
        },
        {
          word: 'non-narrative',
          definition:
            'Not following or characterized by a story or account of events; lacking a sequential storyline.',
        },
      ],
    },
    {
      word: 'epilogue',
      definition:
        'A section or speech at the end of a book or play that serves as a comment on or a conclusion to what has happened.',
      topicId: 13,
      id: 277,
      pronunciation: '/ˈɛpɪlɑɡ/',
      image_link: [
        'https://i.pinimg.com/236x/39/da/b5/39dab53f4331a0cad93e27736b04cdc2.jpg',
        'https://i.pinimg.com/236x/46/ab/89/46ab8949467d417184a9de9af3604a0e.jpg',
        'https://i.pinimg.com/236x/67/0e/f0/670ef053d92f0532cf2ac69b03751907.jpg',
        'https://i.pinimg.com/236x/1b/e9/b2/1be9b282d9855c02c2bb1ced5cbca3fd.jpg',
      ],
      examples: [
        'Epilogue is in the sentence.',
        'This sentence contains the word epilogue.',
        'We can use the word epilogue here.',
        'Here is an example of the word epilogue.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'prologue',
          definition: 'An introductory section of a literary work.',
        },
        {
          word: 'preface',
          definition:
            'An introduction to a book, typically stating its subject, scope, or aims.',
        },
        {
          word: 'foreword',
          definition:
            'A short introductory essay preceding the text of a book.',
        },
      ],
    },
    {
      word: 'prologue',
      definition:
        'A separate introductory section of a literary or musical work.',
      topicId: 13,
      id: 278,
      pronunciation: '/ˈpɹəʊlɒɡ/',
      image_link: [
        'https://i.pinimg.com/236x/48/9e/37/489e373cfe276197b11a2d0754e2a104.jpg',
        'https://i.pinimg.com/236x/dc/b3/32/dcb332e71cee43ac3daa1271e93feeca.jpg',
        'https://i.pinimg.com/236x/11/85/df/1185df7586bf16de1d84a395c354e72a.jpg',
        'https://i.pinimg.com/236x/5c/ac/dc/5cacdc14f53dd4dbe4762f26decd203c.jpg',
      ],
      examples: [
        'Prologue is in the sentence.',
        'This sentence contains the word prologue.',
        'We can use the word prologue here.',
        'Here is an example of the word prologue.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'epilogue',
          definition:
            'A separate concluding section of a literary or musical work.',
        },
        {
          word: 'postscript',
          definition:
            'A note or series of notes added informally after the main body of a letter or book.',
        },
        {
          word: 'main body',
          definition: 'The central or most important part of a literary work.',
        },
      ],
    },
    {
      word: 'dialogue',
      definition:
        'Conversation between two or more characters in a book, play, or movie.',
      topicId: 13,
      id: 279,
      pronunciation: '/ˈdaɪəlɑɡ/',
      image_link: [
        'https://i.pinimg.com/236x/fa/30/3c/fa303c8f6cf0f6b26c8aa240ef6e0a53.jpg',
        'https://i.pinimg.com/236x/e3/6c/ab/e36cab14185af1b4bdc53e6c05c4b66d.jpg',
        'https://i.pinimg.com/236x/e8/e7/aa/e8e7aa686355f73e7b99e8ccf3156874.jpg',
        'https://i.pinimg.com/236x/b7/2a/16/b72a1678dd03e0e9cd4dcdd7317b074f.jpg',
      ],
      examples: [
        'Dialogue is in the sentence.',
        'This sentence contains the word dialogue.',
        'We can use the word dialogue here.',
        'Here is an example of the word dialogue.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'monologue',
          definition:
            'A long speech by one actor in a play or movie, or as part of a theatrical or broadcast program.',
        },
        {
          word: 'soliloquy',
          definition:
            "An act of speaking one's thoughts aloud when by oneself or regardless of any hearers, especially by a character in a play.",
        },
        {
          word: 'silence',
          definition: 'Complete absence of sound; quietness.',
        },
      ],
    },
    {
      word: 'theme',
      definition: 'The central topic, subject, or message within a narrative.',
      topicId: 13,
      id: 280,
      pronunciation: '/θiːm/',
      image_link: [
        'https://i.pinimg.com/236x/76/ed/b5/76edb50491f67e3f7e0fac2399653b24.jpg',
        'https://i.pinimg.com/236x/3c/c3/14/3cc31483268a120fed0b5f832a48c224.jpg',
        'https://i.pinimg.com/236x/f5/14/be/f514be8a52562204f7233ea6ad1b8eeb.jpg',
        'https://i.pinimg.com/236x/00/ff/a8/00ffa8fc268ece45868f51b295fc44b0.jpg',
      ],
      examples: [
        'Theme is in the sentence.',
        'This sentence contains the word theme.',
        'We can use the word theme here.',
        'Here is an example of the word theme.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'random',
          definition: 'Having no specific pattern, purpose, or theme.',
        },
        {
          word: 'variant',
          definition:
            'A version of something that differs in some way from other versions.',
        },
        {
          word: 'divergence',
          definition:
            'The act of moving away in different direction from a common point or path.',
        },
      ],
    },
    {
      word: 'plot',
      definition:
        'The main events of a play, novel, movie, or similar work, devised and presented by the writer as an interrelated sequence.',
      topicId: 13,
      id: 281,
      pronunciation: '/plɒt/',
      image_link: [
        'https://i.pinimg.com/236x/4e/7b/f7/4e7bf7d5b443e0ac2f1f68aaeda1360d.jpg',
        'https://i.pinimg.com/236x/15/fd/7b/15fd7b4ec5f72248f2b66f7ce27a695f.jpg',
        'https://i.pinimg.com/236x/08/6a/95/086a954478096a8b40d0919c4d9d4751.jpg',
        'https://i.pinimg.com/236x/b6/05/fc/b605fc1edf79152e8738d25d6eaedcda.jpg',
      ],
      examples: [
        'Plot is in the sentence.',
        'This sentence contains the word plot.',
        'We can use the word plot here.',
        'Here is an example of the word plot.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'chaos',
          definition: 'Complete disorder and confusion.',
        },
        {
          word: 'randomness',
          definition: 'The quality or state of lacking a pattern or purpose.',
        },
        {
          word: 'fragment',
          definition: 'A small part broken or separated off something.',
        },
      ],
    },
    {
      word: 'setting',
      definition: 'The time and place in which the story takes place.',
      topicId: 13,
      id: 282,
      pronunciation: '/ˈsɛtɪŋ/',
      image_link: [
        'https://i.pinimg.com/236x/67/df/ad/67dfad99545c615837ce912546497f18.jpg',
        'https://i.pinimg.com/236x/49/37/5e/49375ee9c233789f9be6b0cf0ea8ab31.jpg',
        'https://i.pinimg.com/236x/fa/22/02/fa22024e5175964727d32d7562a1f99c.jpg',
        'https://i.pinimg.com/236x/8f/30/59/8f30591fe888b530a68ec0eb3ab8b776.jpg',
      ],
      examples: [
        'Setting is in the sentence.',
        'This sentence contains the word setting.',
        'We can use the word setting here.',
        'Here is an example of the word setting.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'unsettled',
          definition: 'Not settled or established; uncertain.',
        },
        {
          word: 'unsetting',
          definition: 'Not fixed or arranged; not setting into place.',
        },
        {
          word: 'unset',
          definition:
            'A state of not setting or placing; the opposite of setting.',
        },
      ],
    },
    {
      word: 'imagery',
      definition:
        'Visually descriptive or figurative language, especially in a literary work.',
      topicId: 13,
      id: 283,
      pronunciation: '/ˈɪm.ə.dʒər.i/',
      image_link: [
        'https://i.pinimg.com/236x/05/c5/95/05c5953a6b70ecd69ccbf40c98f22d06.jpg',
        'https://i.pinimg.com/236x/9e/34/44/9e3444e0d852b8d8caec6646caf44847.jpg',
        'https://i.pinimg.com/236x/1c/d4/50/1cd45026d0b1fe935017b3dd70551f10.jpg',
        'https://i.pinimg.com/236x/0f/02/8d/0f028d888139e2a18eb11d824621b74b.jpg',
      ],
      examples: [
        'Imagery is in the sentence.',
        'This sentence contains the word imagery.',
        'We can use the word imagery here.',
        'Here is an example of the word imagery.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'reality',
          definition:
            'The state of things as they actually exist, rather than as they may appear or be imagined.',
        },
        {
          word: 'clarity',
          definition:
            'The quality of being clear, coherent, and intelligible; the absence of obscurity or confusion.',
        },
        {
          word: 'plainness',
          definition:
            'The quality or state of being plain; absence of ornamentation or elaboration.',
        },
      ],
    },
    {
      word: 'characterization',
      definition: 'The creation or construction of a fictional character.',
      topicId: 13,
      id: 284,
      pronunciation: '/ˌker.ək.tə.rəˈzeɪ.ʃən/',
      image_link: [
        'https://i.pinimg.com/236x/39/13/fb/3913fb236e917df6981bd500890e11e3.jpg',
        'https://i.pinimg.com/236x/b5/f0/60/b5f06058631a26be44804124568d5025.jpg',
        'https://i.pinimg.com/236x/4c/9b/62/4c9b62afe2c37b6f069e73af22751230.jpg',
        'https://i.pinimg.com/236x/06/93/9c/06939c657397b64ae09eb785a0e8156f.jpg',
      ],
      examples: [
        'Characterization is in the sentence.',
        'This sentence contains the word characterization.',
        'We can use the word characterization here.',
        'Here is an example of the word characterization.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'reality',
          definition: 'The state of things as they actually exist.',
        },
        {
          word: 'fact',
          definition: 'Something that is known to have occurred or to exist.',
        },
        {
          word: 'truth',
          definition: 'The quality or state of being true.',
        },
      ],
    },
    {
      word: 'dynasty',
      definition: 'A line of hereditary rulers of a country.',
      topicId: 14,
      id: 284,
      pronunciation: '/ˈdɪnəsti/',
      image_link: [
        'https://i.pinimg.com/236x/b7/0e/b8/b70eb861af33a737a0295918a3c9faf0.jpg',
        'https://i.pinimg.com/236x/ea/e2/1f/eae21fa14eb6a209f7a37ccc1d3e65b6.jpg',
        'https://i.pinimg.com/236x/0f/c6/be/0fc6bec867dc0b7bf4e58e7b9e251cfe.jpg',
        'https://i.pinimg.com/236x/8b/c9/55/8bc955aa39241c3baba65fdeee5f155a.jpg',
      ],
      examples: [
        'Dynasty is in the sentence.',
        'This sentence contains the word dynasty.',
        'We can use the word dynasty here.',
        'Here is an example of the word dynasty.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'ephemeral',
          definition: 'Lasting for a very short time; transient.',
        },
      ],
    },
    {
      word: 'colonization',
      definition:
        'The action or process of settling among and establishing control over the indigenous people of an area.',
      topicId: 14,
      id: 285,
      pronunciation: '/ˌkɑː.lə.nəˈzeɪ.ʃən/',
      image_link: [
        'https://i.pinimg.com/236x/ec/47/31/ec47310cd1143bd65957e93863f2ae0b.jpg',
        'https://i.pinimg.com/236x/07/59/fd/0759fd1abc2d7175fdabd8d488852a9d.jpg',
        'https://i.pinimg.com/236x/aa/b8/54/aab8549de0352391ca0e4edeb1f41280.jpg',
        'https://i.pinimg.com/236x/7d/3d/af/7d3dafcafc8b81c190f9d320caccb7e6.jpg',
      ],
      examples: [
        'Colonization is in the sentence.',
        'This sentence contains the word colonization.',
        'We can use the word colonization here.',
        'Here is an example of the word colonization.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'decolonization',
          definition:
            'The action or process of undoing or reversing colonization, especially when indigenous peoples reclaim their lands and cultures.',
        },
        {
          word: 'liberation',
          definition:
            'The act or process of setting free from oppression, domination, or control by another.',
        },
        {
          word: 'independence',
          definition:
            'The state of being free from outside control; self-government.',
        },
      ],
    },
    {
      word: 'artifact',
      definition:
        'An object made by a human being, typically one of cultural or historical interest.',
      topicId: 14,
      id: 286,
      pronunciation: '/ˈɑːtɪfækt/',
      image_link: [
        'https://i.pinimg.com/236x/ff/17/e4/ff17e4b52993b5c8e763c3ec173a52a2.jpg',
        'https://i.pinimg.com/236x/53/d5/c3/53d5c3caedcd73cb0459b2966b349d9b.jpg',
        'https://i.pinimg.com/236x/21/62/84/216284704de0cef3fd52501ebe024cbb.jpg',
        'https://i.pinimg.com/236x/81/e7/45/81e745f6226af8551d166ece015a0fc1.jpg',
      ],
      examples: [
        'Artifact is in the sentence.',
        'This sentence contains the word artifact.',
        'We can use the word artifact here.',
        'Here is an example of the word artifact.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'natural object',
          definition:
            'An object not created or significantly altered by human activity.',
        },
        {
          word: 'phenomenon',
          definition:
            'A fact or situation that is observed to exist or happen, especially one whose cause or explanation is in question.',
        },
        {
          word: 'abstract',
          definition:
            'Existing in thought or as an idea but not having a physical or concrete existence.',
        },
      ],
    },
    {
      word: 'medieval',
      definition: 'Relating to the Middle Ages.',
      topicId: 14,
      id: 287,
      pronunciation: '/mɪd.ˈiː.vəl/',
      image_link: [
        'https://i.pinimg.com/236x/18/df/00/18df00cd87cb3a149d9588715ab80794.jpg',
        'https://i.pinimg.com/236x/12/75/42/12754276fb821720adc169ea2a64b7fb.jpg',
        'https://i.pinimg.com/236x/03/6a/86/036a86a2d1826fee7db87d9d4789ae43.jpg',
        'https://i.pinimg.com/236x/8c/a1/7b/8ca17bd64434c3d6087c3c8291122336.jpg',
      ],
      examples: [
        'Medieval is in the sentence.',
        'This sentence contains the word medieval.',
        'We can use the word medieval here.',
        'Here is an example of the word medieval.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'modern',
          definition: 'Relating to the present or recent times.',
        },
        {
          word: 'contemporary',
          definition: 'Belonging to the same time period; current.',
        },
        {
          word: 'future',
          definition: 'Relating to a time yet to come; subsequent.',
        },
      ],
    },
    {
      word: 'renaissance',
      definition:
        'The revival of art and literature under the influence of classical models in the 14th–16th centuries.',
      topicId: 14,
      id: 288,
      pronunciation: '/ˈɹɛnəˌsɑns/',
      image_link: [
        'https://i.pinimg.com/236x/6e/1c/a4/6e1ca44c0b454f6d71095a2329484118.jpg',
        'https://i.pinimg.com/236x/07/66/ce/0766cee4073c92f0f79e21862002b24c.jpg',
        'https://i.pinimg.com/236x/bc/3a/b5/bc3ab556f91278f0d144a862f62ab7b7.jpg',
        'https://i.pinimg.com/236x/c9/eb/ba/c9ebbac92cebf76e7e9a2449afd63df5.jpg',
      ],
      examples: [
        'Renaissance is in the sentence.',
        'This sentence contains the word renaissance.',
        'We can use the word renaissance here.',
        'Here is an example of the word renaissance.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'decline',
          definition: 'A gradual decrease or deterioration.',
        },
        {
          word: 'fall',
          definition: 'A sudden or sharp decline.',
        },
        {
          word: 'decay',
          definition: 'Gradual decline in quality, quantity, or strength.',
        },
      ],
    },
    {
      word: 'ancient',
      definition:
        'Belonging to the very distant past and no longer in existence.',
      topicId: 14,
      id: 289,
      pronunciation: '/ˈeɪn.ʃənt/',
      image_link: [
        'https://i.pinimg.com/236x/96/de/13/96de13076a06df7873602b4fbfdcd3d4.jpg',
        'https://i.pinimg.com/236x/14/13/05/1413051098bb7c9320417b72afe4e56c.jpg',
        'https://i.pinimg.com/236x/a0/d2/00/a0d200a67237554aa04044191945d657.jpg',
        'https://i.pinimg.com/236x/23/fa/cd/23facd0832e7fd6b8d2e13b360ceb2c3.jpg',
      ],
      examples: [
        'Ancient is in the sentence.',
        'This sentence contains the word ancient.',
        'We can use the word ancient here.',
        'Here is an example of the word ancient.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'modern',
          definition: 'Belonging to the present time or recent past.',
        },
        {
          word: 'contemporary',
          definition: 'Belonging to the same period of time; current.',
        },
        {
          word: 'current',
          definition:
            'Belonging to the present time; happening or being used or done now.',
        },
      ],
    },
    {
      word: 'crusade',
      definition:
        'Any of the medieval military expeditions made by Europeans to recover the Holy Land from the Muslims in the 11th, 12th, and 13th centuries.',
      topicId: 14,
      id: 290,
      pronunciation: '/kɹuːˈseɪd/',
      image_link: [
        'https://i.pinimg.com/236x/07/c4/4a/07c44a8721f4433ac6086a38fda3b3d8.jpg',
        'https://i.pinimg.com/236x/a5/53/94/a55394a77e0df239e394fa6c97acf4a2.jpg',
        'https://i.pinimg.com/236x/22/9b/53/229b5310c07b42d3370cd295344015fc.jpg',
        'https://i.pinimg.com/236x/22/63/6e/22636e1811bf3163a8306e73d1041e92.jpg',
      ],
      examples: [
        'Crusade is in the sentence.',
        'This sentence contains the word crusade.',
        'We can use the word crusade here.',
        'Here is an example of the word crusade.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'retreat',
          definition:
            'The act of withdrawing or going back, especially to avoid danger or difficulty.',
        },
        {
          word: 'peace',
          definition: 'Freedom from disturbance; tranquility.',
        },
        {
          word: 'truce',
          definition:
            'An agreement between enemies or opponents to stop fighting or arguing for a certain time.',
        },
      ],
    },
    {
      word: 'civilization',
      definition:
        'The stage of human social and cultural development and organization that is considered most advanced.',
      topicId: 14,
      id: 291,
      pronunciation: '[ˌsɪv.ə.lɑeˈzæɪ.ʃən]',
      image_link: [
        'https://i.pinimg.com/236x/1c/3c/f3/1c3cf3e8114c41b18ba71d4638405725.jpg',
        'https://i.pinimg.com/236x/71/65/77/716577392d06222f235b549a6886ec25.jpg',
        'https://i.pinimg.com/236x/61/da/85/61da85e6093a89564a2e73724e25f9b7.jpg',
        'https://i.pinimg.com/236x/db/62/dc/db62dc97fd2d413459b10bc1b4260103.jpg',
      ],
      examples: [
        'Civilization is in the sentence.',
        'This sentence contains the word civilization.',
        'We can use the word civilization here.',
        'Here is an example of the word civilization.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'barbarism',
          definition:
            'The condition of being without civilizing influences, primitive, savage behavior.',
        },
        {
          word: 'savagery',
          definition:
            'The quality of being fierce, violent, or untamed; lack of civilization.',
        },
        {
          word: 'primitiveness',
          definition:
            'The state of being primitive or undeveloped, lacking sophistication or advanced features.',
        },
      ],
    },
    {
      word: 'historian',
      definition:
        'An expert in or student of history, especially that of a particular period, geographical region, or social phenomenon.',
      topicId: 14,
      id: 292,
      pronunciation: '/hɪˈstɔəɹɪən/',
      image_link: [
        'https://i.pinimg.com/236x/ef/f8/4b/eff84bd20366cfd19b537092c2f9212e.jpg',
        'https://i.pinimg.com/236x/5b/98/75/5b98759edaf9d141a32c27590c51ce59.jpg',
        'https://i.pinimg.com/236x/c6/8d/fe/c68dfed3addb1e7917f619105159ff7b.jpg',
        'https://i.pinimg.com/236x/be/f6/9b/bef69b3155de6284a8f143674a117f15.jpg',
      ],
      examples: [
        'Historian is in the sentence.',
        'This sentence contains the word historian.',
        'We can use the word historian here.',
        'Here is an example of the word historian.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'amnesiac',
          definition:
            'A person affected by amnesia, who has partial or total loss of memory.',
        },
        {
          word: 'novice',
          definition:
            'A person who is new to or inexperienced in a certain task or field.',
        },
        {
          word: 'ignoramus',
          definition:
            'An ignorant or uninformed person; someone lacking knowledge or awareness.',
        },
      ],
    },
    {
      word: 'industrialization',
      definition:
        'The development of industries in a country or region on a wide scale.',
      topicId: 14,
      id: 293,
      pronunciation: '/ɪnˌdʌs.tri.ə.ləˈzeɪ.ʃən/',
      image_link: [
        'https://i.pinimg.com/236x/62/a3/e6/62a3e60e0a31789d57189fb382af2fe1.jpg',
        'https://i.pinimg.com/236x/c3/c3/1c/c3c31c834c9538a8434812b0f3d67dd6.jpg',
        'https://i.pinimg.com/236x/c8/32/be/c832beea0d9c6f4c696556aef686fcb6.jpg',
        'https://i.pinimg.com/236x/56/b8/14/56b814c077bf05a9d354404b7f57c282.jpg',
      ],
      examples: [
        'Industrialization is in the sentence.',
        'This sentence contains the word industrialization.',
        'We can use the word industrialization here.',
        'Here is an example of the word industrialization.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'deindustrialization',
          definition:
            'The decline or reduction of industrial activity in a region or economy.',
        },
        {
          word: 'ruralization',
          definition:
            'The process of becoming more rural or agricultural in character or composition.',
        },
        {
          word: 'decentralization',
          definition:
            'The transfer of authority from central to local government.',
        },
      ],
    },
    {
      word: 'archaeology',
      definition:
        'The study of human history and prehistory through the excavation of sites and the analysis of artifacts and other physical remains.',
      topicId: 14,
      id: 294,
      pronunciation: '/ˌɑː.kiˈɒ.lə.dʒi/',
      image_link: [
        'https://i.pinimg.com/236x/d4/d2/93/d4d293f12fa515506ed49afa2200bbe6.jpg',
        'https://i.pinimg.com/236x/5d/1a/82/5d1a8283157bf1da1500eeaf075ed196.jpg',
        'https://i.pinimg.com/236x/19/5f/ad/195fad46c74c38a14641b6f7ef6e01bc.jpg',
        'https://i.pinimg.com/236x/87/c5/67/87c567a00aa334d9e90b66f2573ca2b4.jpg',
      ],
      examples: [
        'Archaeology is in the sentence.',
        'This sentence contains the word archaeology.',
        'We can use the word archaeology here.',
        'Here is an example of the word archaeology.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'astronomy',
          definition:
            'The study of celestial objects, space, and the universe as a whole.',
        },
        {
          word: 'ethnography',
          definition:
            'The scientific description of the customs of individual peoples and cultures.',
        },
        {
          word: 'geology',
          definition:
            "The science that deals with the earth's physical structure and substance, its history, and the processes that act on it.",
        },
      ],
    },
    {
      word: 'feudalism',
      definition:
        'The dominant social system in medieval Europe, in which the nobility held lands from the Crown in exchange for military service, and vassals were in turn tenants of the nobles.',
      topicId: 14,
      id: 295,
      pronunciation: '/ˈfju.dəlɪzəm/',
      image_link: [
        'https://i.pinimg.com/236x/3f/dd/55/3fdd55f1923f58c899db9738e806de50.jpg',
        'https://i.pinimg.com/236x/b1/a7/d3/b1a7d399daa2622d9648d741ed35a4ff.jpg',
        'https://i.pinimg.com/236x/3c/88/0d/3c880d76264290ce485e324b505f9770.jpg',
        'https://i.pinimg.com/236x/2b/30/7d/2b307dc62357e5d1f700f6d93e77fda2.jpg',
      ],
      examples: [
        'Feudalism is in the sentence.',
        'This sentence contains the word feudalism.',
        'We can use the word feudalism here.',
        'Here is an example of the word feudalism.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'democracy',
          definition:
            'A system of government by the whole population or all the eligible members of a state, typically through elected representatives.',
        },
        {
          word: 'communism',
          definition:
            'A political and economic ideology advocating for the collective ownership of the means of production and the absence of social classes.',
        },
        {
          word: 'capitalism',
          definition:
            "An economic and political system in which a country's trade and industry are controlled by private owners for profit, rather than by the state.",
        },
      ],
    },
    {
      word: 'colonial',
      definition: 'Relating to or characteristic of a colony or colonies.',
      topicId: 14,
      id: 296,
      pronunciation: '/kəˈləʊ.ni.əl/',
      image_link: [
        'https://i.pinimg.com/236x/30/23/be/3023be30a991fa48ce9e9eac89e3cdd8.jpg',
        'https://i.pinimg.com/236x/f8/7b/15/f87b15b8014fd7f35e317aeafe03d0c4.jpg',
        'https://i.pinimg.com/236x/3a/4a/08/3a4a080bcfbe950fb2996b8991f7b156.jpg',
        'https://i.pinimg.com/236x/ae/d6/50/aed650b23e9f188d0e32b94bad3b152a.jpg',
      ],
      examples: [
        'Colonial is in the sentence.',
        'This sentence contains the word colonial.',
        'We can use the word colonial here.',
        'Here is an example of the word colonial.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'independent',
          definition:
            "Free from outside control; not subject to another's authority.",
        },
        {
          word: 'autonomous',
          definition:
            'Having self-government, or acting independently or having the freedom to do so.',
        },
        {
          word: 'sovereign',
          definition: 'A supreme ruler, especially a monarch.',
        },
      ],
    },
    {
      word: 'renaissance',
      definition:
        'The revival of art and literature under the influence of classical models in the 14th–16th centuries.',
      topicId: 14,
      id: 297,
      pronunciation: '/ˈɹɛnəˌsɑns/',
      image_link: [
        'https://i.pinimg.com/236x/6e/1c/a4/6e1ca44c0b454f6d71095a2329484118.jpg',
        'https://i.pinimg.com/236x/07/66/ce/0766cee4073c92f0f79e21862002b24c.jpg',
        'https://i.pinimg.com/236x/bc/3a/b5/bc3ab556f91278f0d144a862f62ab7b7.jpg',
        'https://i.pinimg.com/236x/c9/eb/ba/c9ebbac92cebf76e7e9a2449afd63df5.jpg',
      ],
      examples: [
        'Renaissance is in the sentence.',
        'This sentence contains the word renaissance.',
        'We can use the word renaissance here.',
        'Here is an example of the word renaissance.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'decline',
          definition:
            'A gradual and continuous loss of strength, numbers, quality, or value.',
        },
        {
          word: 'regression',
          definition:
            'A return to a former or less developed state; the process of reverting backward.',
        },
        {
          word: 'retrogression',
          definition:
            'The process of returning to an earlier state, typically a worse one.',
        },
      ],
    },
    {
      word: 'antiquity',
      definition:
        'The ancient past, especially the period before the Middle Ages.',
      topicId: 14,
      id: 298,
      pronunciation: '/ænˈtɪk.wɪ.ti/',
      image_link: [
        'https://i.pinimg.com/236x/11/4b/0f/114b0fe14be67cdfd32f800f6d97e885.jpg',
        'https://i.pinimg.com/236x/8a/45/9f/8a459f376e400243cc60779e99b49adb.jpg',
        'https://i.pinimg.com/236x/dd/ff/a6/ddffa673bc54fcb3f646410796c4786e.jpg',
        'https://i.pinimg.com/236x/0c/dc/1b/0cdc1b518a70ee47f9a2e0cfe2b38372.jpg',
      ],
      examples: [
        'Antiquity is in the sentence.',
        'This sentence contains the word antiquity.',
        'We can use the word antiquity here.',
        'Here is an example of the word antiquity.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'modern',
          definition:
            'Relating to the present or recent times as opposed to the remote past.',
        },
        {
          word: 'contemporary',
          definition: 'Belonging to or occurring in the present.',
        },
        {
          word: 'current',
          definition:
            'Belonging to the present time; happening or being used or done now.',
        },
      ],
    },
    {
      word: 'treaty',
      definition:
        'A formally concluded and ratified agreement between countries.',
      topicId: 14,
      id: 299,
      pronunciation: '/ˈtɹiːti/',
      image_link: [
        'https://i.pinimg.com/236x/71/ee/41/71ee41f72c1b1060b95bd95dcc879ef6.jpg',
        'https://i.pinimg.com/236x/f7/21/f7/f721f7c57452a27992e41fd273dc4c32.jpg',
        'https://i.pinimg.com/236x/2b/47/4c/2b474c0804dc8bb418fb605a14bf5a59.jpg',
        'https://i.pinimg.com/236x/2e/0d/8d/2e0d8d3af6ef94d89955838665661cc0.jpg',
      ],
      examples: [
        'Treaty is in the sentence.',
        'This sentence contains the word treaty.',
        'We can use the word treaty here.',
        'Here is an example of the word treaty.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'conflict',
          definition:
            'A serious disagreement or argument, typically a protracted one.',
        },
        {
          word: 'hostility',
          definition: 'Unfriendly or aggressive behavior.',
        },
        {
          word: 'war',
          definition:
            'A state of armed conflict between different nations or states or different groups within a nation or state.',
        },
      ],
    },
    {
      word: 'medieval',
      definition: 'Relating to the Middle Ages.',
      topicId: 14,
      id: 300,
      pronunciation: '/mɪd.ˈiː.vəl/',
      image_link: [
        'https://i.pinimg.com/236x/18/df/00/18df00cd87cb3a149d9588715ab80794.jpg',
        'https://i.pinimg.com/236x/12/75/42/12754276fb821720adc169ea2a64b7fb.jpg',
        'https://i.pinimg.com/236x/03/6a/86/036a86a2d1826fee7db87d9d4789ae43.jpg',
        'https://i.pinimg.com/236x/8c/a1/7b/8ca17bd64434c3d6087c3c8291122336.jpg',
      ],
      examples: [
        'Medieval is in the sentence.',
        'This sentence contains the word medieval.',
        'We can use the word medieval here.',
        'Here is an example of the word medieval.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'modern',
          definition:
            'Relating to the present or recent times as opposed to the remote past.',
        },
        {
          word: 'contemporary',
          definition: 'Belonging to or occurring in the present.',
        },
        {
          word: 'current',
          definition:
            'Belonging to the present time; happening or being used or done now.',
        },
      ],
    },
    {
      word: 'chronology',
      definition:
        'The arrangement of events or dates in the order of their occurrence.',
      topicId: 14,
      id: 301,
      pronunciation: '/kɹəˈnɒl.ə.dʒi/',
      image_link: [
        'https://i.pinimg.com/236x/f4/9a/4e/f49a4e0b72777033d82e5afe45bf6613.jpg',
        'https://i.pinimg.com/236x/a4/b5/f0/a4b5f0aa371ba9a8eac875830dbe1831.jpg',
        'https://i.pinimg.com/236x/cf/7b/0e/cf7b0e910b9204f32623bdb394d8b3d1.jpg',
        'https://i.pinimg.com/236x/ae/af/0a/aeaf0ab1d38e947bea86238c12f82b50.jpg',
      ],
      examples: [
        'Chronology is in the sentence.',
        'This sentence contains the word chronology.',
        'We can use the word chronology here.',
        'Here is an example of the word chronology.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'randomness',
          definition:
            'The quality or state of lacking a definite plan, purpose, or pattern.',
        },
        {
          word: 'disarray',
          definition: 'A state of disorganization or untidiness.',
        },
        {
          word: 'chaos',
          definition: 'Complete disorder and confusion.',
        },
      ],
    },
    {
      word: 'relic',
      definition:
        'An object surviving from an earlier time, especially one of historical or sentimental interest.',
      topicId: 14,
      id: 302,
      pronunciation: '/ˈɹɛlɪk/',
      image_link: [
        'https://i.pinimg.com/236x/87/46/61/874661788170a1b887de73cc4b4124b8.jpg',
        'https://i.pinimg.com/236x/9f/dd/5a/9fdd5a9bf8da419cab34a93f95fc1a73.jpg',
        'https://i.pinimg.com/236x/16/88/bd/1688bdded969621ca73dec86886c7c3e.jpg',
        'https://i.pinimg.com/236x/58/62/77/586277a9720918cad6a538a3509a07be.jpg',
      ],
      examples: [
        'Relic is in the sentence.',
        'This sentence contains the word relic.',
        'We can use the word relic here.',
        'Here is an example of the word relic.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'modern',
          definition:
            'Relating to the present or recent times as opposed to the remote past.',
        },
        {
          word: 'contemporary',
          definition: 'Belonging to or occurring in the present.',
        },
        {
          word: 'current',
          definition:
            'Belonging to the present time; happening or being used or done now.',
        },
      ],
    },
    {
      word: 'renaissance',
      definition:
        'The revival of art and literature under the influence of classical models in the 14th–16th centuries.',
      topicId: 14,
      id: 303,
      pronunciation: '/ˈɹɛnəˌsɑns/',
      image_link: [
        'https://i.pinimg.com/236x/6e/1c/a4/6e1ca44c0b454f6d71095a2329484118.jpg',
        'https://i.pinimg.com/236x/07/66/ce/0766cee4073c92f0f79e21862002b24c.jpg',
        'https://i.pinimg.com/236x/bc/3a/b5/bc3ab556f91278f0d144a862f62ab7b7.jpg',
        'https://i.pinimg.com/236x/c9/eb/ba/c9ebbac92cebf76e7e9a2449afd63df5.jpg',
      ],
      examples: [
        'Renaissance is in the sentence.',
        'This sentence contains the word renaissance.',
        'We can use the word renaissance here.',
        'Here is an example of the word renaissance.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'decline',
          definition:
            'A gradual and continuous loss of strength, numbers, quality, or value.',
        },
        {
          word: 'regression',
          definition:
            'A return to a former or less developed state; the process of reverting backward.',
        },
        {
          word: 'retrogression',
          definition:
            'The process of returning to an earlier state, typically a worse one.',
        },
      ],
    },
    {
      word: 'photosynthesis',
      definition:
        'The process by which green plants and some other organisms use sunlight to synthesize foods with the aid of chlorophyll.',
      topicId: 15,
      id: 304,
      pronunciation: '/ˌfəʊ.təʊ.ˈsɪn.θə.sɪs/',
      image_link: [
        'https://i.pinimg.com/236x/16/4b/96/164b967272194b0894b5c699fb01cc93.jpg',
        'https://i.pinimg.com/236x/45/4a/77/454a77ffad576ed159b734783161e6b3.jpg',
        'https://i.pinimg.com/236x/96/0a/71/960a717600f614088239bb4e11b539eb.jpg',
        'https://i.pinimg.com/236x/87/0f/f2/870ff2032a6e648f69bd14a42f84c755.jpg',
      ],
      examples: [
        'Photosynthesis is in the sentence.',
        'This sentence contains the word photosynthesis.',
        'We can use the word photosynthesis here.',
        'Here is an example of the word photosynthesis.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'respiration',
          definition:
            'The process by which organisms exchange gases, especially oxygen and carbon dioxide, with the environment.',
        },
        {
          word: 'anaerobic',
          definition:
            'Relating to, involving, or requiring an absence of free oxygen.',
        },
        {
          word: 'heterotrophy',
          definition:
            'The obtaining of nutrients by consuming organic material.',
        },
      ],
    },
    {
      word: 'molecule',
      definition:
        'A group of atoms bonded together, representing the smallest fundamental unit of a chemical compound.',
      topicId: 15,
      id: 305,
      pronunciation: '/ˈmɒləkjuːl/',
      image_link: [
        'https://i.pinimg.com/236x/fa/be/d0/fabed03b7bd096cfd58486bc02202201.jpg',
        'https://i.pinimg.com/236x/31/8e/a5/318ea5680022a4f755db23a960dbe284.jpg',
        'https://i.pinimg.com/236x/ef/cd/a0/efcda0c62d7e4afa692014c6875fdf43.jpg',
        'https://i.pinimg.com/236x/cb/e1/57/cbe1579a908b95b4f24c6cceb8b4bb55.jpg',
      ],
      examples: [
        'Molecule is in the sentence.',
        'This sentence contains the word molecule.',
        'We can use the word molecule here.',
        'Here is an example of the word molecule.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'element',
          definition:
            'A substance that cannot be broken down into simpler substances by chemical means.',
        },
        {
          word: 'atom',
          definition:
            'The basic unit of a chemical element, consisting of a nucleus and one or more electrons.',
        },
        {
          word: 'particle',
          definition: 'A minute portion of matter.',
        },
      ],
    },
    {
      word: 'cell',
      definition:
        'The smallest structural and functional unit of an organism, typically microscopic.',
      topicId: 15,
      id: 306,
      pronunciation: '/sɛl/',
      image_link: [
        'https://i.pinimg.com/236x/02/10/e3/0210e3ca23f72d7aac132625e9348afe.jpg',
        'https://i.pinimg.com/236x/ea/3e/79/ea3e79d71c2566f1e224d43242a39e81.jpg',
        'https://i.pinimg.com/236x/84/37/8a/84378acc1694cffbbcaa9f4254ba387b.jpg',
        'https://i.pinimg.com/236x/12/02/56/1202563b56d3199313480a3c287ab066.jpg',
      ],
      examples: [
        'Cell is in the sentence.',
        'This sentence contains the word cell.',
        'We can use the word cell here.',
        'Here is an example of the word cell.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'organism',
          definition:
            'An individual animal, plant, or single-celled life form.',
        },
        {
          word: 'macroscopic',
          definition: 'Visible to the naked eye; not microscopic.',
        },
        {
          word: 'organ',
          definition:
            'A part of an organism that is typically self-contained and has a specific vital function.',
        },
      ],
    },
    {
      word: 'theory',
      definition:
        'A supposition or a system of ideas intended to explain something, based on general principles independent of the thing to be explained.',
      topicId: 15,
      id: 307,
      pronunciation: '/ˈθiːəɹi/',
      image_link: [
        'https://i.pinimg.com/236x/02/a9/cd/02a9cd114233bae33b11f4df92133650.jpg',
        'https://i.pinimg.com/236x/2a/c8/52/2ac852d6784d6ff6f93c4e0f3a71ae90.jpg',
        'https://i.pinimg.com/236x/0e/0f/b0/0e0fb0303dbce061e876dcfe4de7130a.jpg',
        'https://i.pinimg.com/236x/01/41/7d/01417d8e8dea551b877c58278faed24f.jpg',
      ],
      examples: [
        'Theory is in the sentence.',
        'This sentence contains the word theory.',
        'We can use the word theory here.',
        'Here is an example of the word theory.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'fact',
          definition: 'A thing that is known or proved to be true.',
        },
        {
          word: 'certainty',
          definition: 'The quality of being reliably true; inevitability.',
        },
        {
          word: 'truth',
          definition:
            'The quality or state of being true; that which is in accordance with fact or reality.',
        },
      ],
    },
    {
      word: 'quantum',
      definition:
        'The minimum amount of any physical entity involved in an interaction, fundamental in the field of quantum mechanics.',
      topicId: 15,
      id: 308,
      pronunciation: '[ˈkwɑɾ̃əm]',
      image_link: [
        'https://i.pinimg.com/236x/70/7c/10/707c108635e46daa5f4dd30e1c3563c6.jpg',
        'https://i.pinimg.com/236x/22/65/40/226540ca40a3c0e5ff2949b86108a69e.jpg',
        'https://i.pinimg.com/236x/8e/a6/f9/8ea6f9d5ecd6fa13c960bc9944eea45a.jpg',
        'https://i.pinimg.com/236x/ed/14/75/ed14753993b79240017aaac26da7e211.jpg',
      ],
      examples: [
        'Quantum is in the sentence.',
        'This sentence contains the word quantum.',
        'We can use the word quantum here.',
        'Here is an example of the word quantum.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'macroscopic',
          definition: 'Visible to the naked eye; not microscopic.',
        },
        {
          word: 'classical',
          definition:
            'Representing the most typical or traditional form of something.',
        },
        {
          word: 'continuous',
          definition: 'Forming an unbroken whole; without interruption.',
        },
      ],
    },
    {
      word: 'ecosystem',
      definition:
        'A biological community of interacting organisms and their physical environment.',
      topicId: 15,
      id: 309,
      pronunciation: '/ˈiːkəʊˌsɪstəm/',
      image_link: [
        'https://i.pinimg.com/236x/d3/ee/8c/d3ee8c3a0dc4418c9b2b6ee224594428.jpg',
        'https://i.pinimg.com/236x/ec/ed/20/eced208bcd05edbbeaa619f00021d92b.jpg',
        'https://i.pinimg.com/236x/75/0d/ff/750dff7ec40abad74b9a13c7ad9079aa.jpg',
        'https://i.pinimg.com/236x/d1/a8/e5/d1a8e5b53acc375d139bc839ca5062f0.jpg',
      ],
      examples: [
        'Ecosystem is in the sentence.',
        'This sentence contains the word ecosystem.',
        'We can use the word ecosystem here.',
        'Here is an example of the word ecosystem.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'individual',
          definition: 'Single, separate, or distinct.',
        },
        {
          word: 'isolated',
          definition:
            'Far away from other places, buildings, or people; remote.',
        },
        {
          word: 'disconnected',
          definition: 'Having been broken apart or separated.',
        },
      ],
    },
    {
      word: 'bacteria',
      definition:
        'Microscopic single-celled organisms that have a cell wall but lack a nucleus, some of which can cause disease.',
      topicId: 15,
      id: 310,
      pronunciation: '/bækˈtɪəɹ.ɪ.ə/',
      image_link: [
        'https://i.pinimg.com/236x/55/10/b5/5510b5bdb0bfc6e897f876faea810bdd.jpg',
        'https://i.pinimg.com/236x/18/ce/1e/18ce1ea3ae05459fd2f2d733585f961b.jpg',
        'https://i.pinimg.com/236x/44/79/65/4479650cc101fa1f12c36d02ac5b59f7.jpg',
        'https://i.pinimg.com/236x/c4/e9/e3/c4e9e37c2851a196487fda2aadfb0a91.jpg',
      ],
      examples: [
        'Bacteria is in the sentence.',
        'This sentence contains the word bacteria.',
        'We can use the word bacteria here.',
        'Here is an example of the word bacteria.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'eukaryote',
          definition:
            'An organism consisting of a cell or cells in which the genetic material is DNA in the form of chromosomes contained within a distinct nucleus.',
        },
        {
          word: 'multicellular',
          definition: 'Consisting of many cells.',
        },
        {
          word: 'organism',
          definition:
            'An individual animal, plant, or single-celled life form.',
        },
      ],
    },
    {
      word: 'virus',
      definition:
        'A small infectious agent that replicates only inside the living cells of an organism.',
      topicId: 15,
      id: 311,
      pronunciation: '/ˈvaɪɹəs/',
      image_link: [
        'https://i.pinimg.com/236x/22/5f/65/225f65f0bf47bc957c1d84a9c8e5205b.jpg',
        'https://i.pinimg.com/236x/e8/26/f2/e826f2e79da5cec25a2ed5874230b2aa.jpg',
        'https://i.pinimg.com/236x/14/b4/a7/14b4a7ef3aa1006ce0b821d1255e61da.jpg',
        'https://i.pinimg.com/236x/79/20/b2/7920b2bea0dc8c65600d3ae0be1c2773.jpg',
      ],
      examples: [
        'Virus is in the sentence.',
        'This sentence contains the word virus.',
        'We can use the word virus here.',
        'Here is an example of the word virus.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'noninfectious',
          definition:
            'Not able to be transmitted from one organism to another.',
        },
        {
          word: 'nonpathogenic',
          definition: 'Not capable of causing disease.',
        },
        {
          word: 'antibiotic',
          definition:
            'A medicine that inhibits the growth of or destroys microorganisms.',
        },
      ],
    },
    {
      word: 'enzyme',
      definition:
        'A substance produced by a living organism that acts as a catalyst to bring about a specific biochemical reaction.',
      topicId: 15,
      id: 312,
      pronunciation: '/ˈɛn.zaɪm/',
      image_link: [
        'https://i.pinimg.com/236x/06/48/fa/0648fac0079e22d49d366514f24b91bd.jpg',
        'https://i.pinimg.com/236x/2f/16/7e/2f167ea0a424d452ac258608696a1872.jpg',
        'https://i.pinimg.com/236x/7a/91/f2/7a91f20023181c6a45af1d0e7a24364d.jpg',
        'https://i.pinimg.com/236x/17/44/8e/17448e01f752e8789510783ba9db16f0.jpg',
      ],
      examples: [
        'Enzyme is in the sentence.',
        'This sentence contains the word enzyme.',
        'We can use the word enzyme here.',
        'Here is an example of the word enzyme.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'inhibitor',
          definition:
            'A substance that slows down or prevents a chemical reaction or other process from occurring.',
        },
        {
          word: 'blocker',
          definition:
            'Something that obstructs or prevents something from progressing.',
        },
        {
          word: 'inert',
          definition: 'Chemically inactive; lacking the ability to react.',
        },
      ],
    },
    {
      word: 'genome',
      definition:
        'The complete set of genes or genetic material present in a cell or organism.',
      topicId: 15,
      id: 313,
      pronunciation: '/ˈdʒiː.nəʊm/',
      image_link: [
        'https://i.pinimg.com/236x/cc/ab/13/ccab13a4ab7d8c6b9232a5f544d010ac.jpg',
        'https://i.pinimg.com/236x/6e/d5/0d/6ed50da059c12b99811c5518b984f442.jpg',
        'https://i.pinimg.com/236x/40/5e/00/405e000e1b9b9814915db33fe462653d.jpg',
        'https://i.pinimg.com/236x/10/58/7d/10587ddbc919816ecc49260916933b11.jpg',
      ],
      examples: [
        'Genome is in the sentence.',
        'This sentence contains the word genome.',
        'We can use the word genome here.',
        'Here is an example of the word genome.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'gene',
          definition:
            'A unit of heredity that is transferred from a parent to offspring and is held to determine some characteristic of the offspring.',
        },
        {
          word: 'chromosome',
          definition:
            'A threadlike structure of nucleic acids and protein found in the nucleus of most living cells, carrying genetic information in the form of genes.',
        },
        {
          word: 'allele',
          definition:
            'One of two or more alternative forms of a gene that arise by mutation and are found at the same place on a chromosome.',
        },
      ],
    },
    {
      word: 'neuron',
      definition:
        'A specialized cell transmitting nerve impulses; a nerve cell.',
      topicId: 15,
      id: 314,
      pronunciation: '/ˈnjəɹɑn/',
      image_link: [
        'https://i.pinimg.com/236x/ec/a6/a5/eca6a591a2ff36880b58d5d575123358.jpg',
        'https://i.pinimg.com/236x/37/71/5b/37715b137ea758e4fabf0d5cb6ef88be.jpg',
        'https://i.pinimg.com/236x/36/71/4d/36714df32578445968a1b8a304e4892f.jpg',
        'https://i.pinimg.com/236x/65/6b/f2/656bf2f5f0ed047861dc8f973a65b975.jpg',
      ],
      examples: [
        'Neuron is in the sentence.',
        'This sentence contains the word neuron.',
        'We can use the word neuron here.',
        'Here is an example of the word neuron.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'glial cell',
          definition:
            'A type of cell in the central nervous system that provides support for neurons.',
        },
        {
          word: 'non-neuronal',
          definition: 'Not relating to or consisting of neurons.',
        },
        {
          word: 'muscle cell',
          definition:
            'A cell that is specialized for contraction, especially of muscle tissue.',
        },
      ],
    },
    {
      word: 'telescope',
      definition:
        'An optical instrument designed to make distant objects appear nearer, containing an arrangement of lenses or mirrors or both.',
      topicId: 15,
      id: 315,
      pronunciation: '/ˈtɛlɪskəʊp/',
      image_link: [
        'https://i.pinimg.com/236x/6a/a1/36/6aa136333eb6d3954d4bab657f139c35.jpg',
        'https://i.pinimg.com/236x/68/ca/3e/68ca3efc5d5675920b2260bc8bebd6a1.jpg',
        'https://i.pinimg.com/236x/62/ae/99/62ae997391137516f50574db461dd7ca.jpg',
        'https://i.pinimg.com/236x/59/e5/1f/59e51fa2a7a205a98caa53b97c6c7168.jpg',
      ],
      examples: [
        'Telescope is in the sentence.',
        'This sentence contains the word telescope.',
        'We can use the word telescope here.',
        'Here is an example of the word telescope.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'microscope',
          definition:
            'An optical instrument used for viewing very small objects, typically magnified several hundred times.',
        },
        {
          word: 'binoculars',
          definition:
            'An optical instrument with a lens for each eye, used for viewing distant objects.',
        },
        {
          word: 'magnifying glass',
          definition:
            'A convex lens that is used to produce an enlarged image of an object.',
        },
      ],
    },
    {
      word: 'hypothesis',
      definition:
        'A proposed explanation for a phenomenon, to be tested through scientific research.',
      topicId: 15,
      id: 316,
      pronunciation: '/haɪˈpɑː.θə.siːz/',
      image_link: [
        'https://i.pinimg.com/236x/b2/8a/19/b28a1987f2858ee066655cbee553820c.jpg',
        'https://i.pinimg.com/236x/d1/cb/bc/d1cbbc06b1a7054232acd1be9e1d0a6b.jpg',
        'https://i.pinimg.com/236x/79/12/5a/79125a08e694fec08b2164756119f406.jpg',
        'https://i.pinimg.com/236x/41/91/54/419154b92e3180d70dd3884bb4ece636.jpg',
      ],
      examples: [
        'Hypothesis is in the sentence.',
        'This sentence contains the word hypothesis.',
        'We can use the word hypothesis here.',
        'Here is an example of the word hypothesis.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'conclusion',
          definition:
            'A judgment or decision reached by reasoning or analysis.',
        },
        {
          word: 'certainty',
          definition: 'The quality of being reliably true; inevitability.',
        },
        {
          word: 'fact',
          definition: 'A thing that is known or proved to be true.',
        },
      ],
    },
    {
      word: 'biodiversity',
      definition:
        'The variety of life in the world or in a particular habitat or ecosystem.',
      topicId: 15,
      id: 317,
      pronunciation: '/ˌbaɪoʊdɑɪˈvɚsəti/',
      image_link: [
        'https://i.pinimg.com/236x/d3/ee/8c/d3ee8c3a0dc4418c9b2b6ee224594428.jpg',
        'https://i.pinimg.com/236x/89/1c/f1/891cf1d08877f6f14fe7c5b906e352b3.jpg',
        'https://i.pinimg.com/236x/86/b1/b5/86b1b5937b86f5bd5665bb0d3133d26f.jpg',
        'https://i.pinimg.com/236x/b6/01/5d/b6015df4ebef2a18a5520db69bdaf6f4.jpg',
      ],
      examples: [
        'Biodiversity is in the sentence.',
        'This sentence contains the word biodiversity.',
        'We can use the word biodiversity here.',
        'Here is an example of the word biodiversity.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'monoculture',
          definition:
            'The cultivation or growth of a single crop in a given area.',
        },
        {
          word: 'homogeneity',
          definition:
            'The quality or state of being all the same or all of the same kind.',
        },
        {
          word: 'uniformity',
          definition:
            'The quality or state of being the same in form or character; sameness.',
        },
      ],
    },
    {
      word: 'photosynthetic',
      definition: 'Relating to or using photosynthesis.',
      topicId: 15,
      id: 318,
      pronunciation: '',
      image_link: [
        'https://i.pinimg.com/236x/39/f8/09/39f809cff88650b044cd5890867cdad0.jpg',
        'https://i.pinimg.com/236x/f2/3c/7c/f23c7c92b83519cc06bc209b89ddb9a5.jpg',
        'https://i.pinimg.com/236x/5d/61/4a/5d614aaa5a2c5c9f1eee1cfe164c171f.jpg',
        'https://i.pinimg.com/236x/93/18/7e/93187e5dfa8048a2b2467a2ae66262dc.jpg',
      ],
      examples: [
        'Photosynthetic is in the sentence.',
        'This sentence contains the word photosynthetic.',
        'We can use the word photosynthetic here.',
        'Here is an example of the word photosynthetic.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'non-photosynthetic',
          definition: 'Not relating to or not utilizing photosynthesis.',
        },
        {
          word: 'heterotrophic',
          definition: 'Obtaining nutrients by consuming organic matter.',
        },
        {
          word: 'chemosynthetic',
          definition:
            'Relating to or involving the synthesis of organic compounds by bacteria or other living organisms using energy derived from reactions involving inorganic chemicals.',
        },
      ],
    },
    {
      word: 'acidic',
      definition:
        'Having the properties of an acid, or containing acid; having a pH of less than 7.',
      topicId: 15,
      id: 319,
      pronunciation: '/əˈsɪdɪk/',
      image_link: [
        'https://i.pinimg.com/236x/b9/ab/62/b9ab620d228d3942477fabe140352fea.jpg',
        'https://i.pinimg.com/236x/0b/fc/19/0bfc197d5ebec6b8337706d49e1fdfe6.jpg',
        'https://i.pinimg.com/236x/80/ed/f2/80edf2ffe8351f4966b67f889ead12b1.jpg',
        'https://i.pinimg.com/236x/d5/1b/12/d51b12f1b74c6d56d526482af7a04c99.jpg',
      ],
      examples: [
        'Acidic is in the sentence.',
        'This sentence contains the word acidic.',
        'We can use the word acidic here.',
        'Here is an example of the word acidic.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'alkaline',
          definition:
            'Having the properties of an alkali, or containing alkali; having a pH greater than 7.',
        },
        {
          word: 'neutral',
          definition:
            'Not taking sides; not supporting or favoring either side in a conflict, dispute, or debate.',
        },
        {
          word: 'basic',
          definition:
            'Relating to or forming the base or essence; fundamental.',
        },
      ],
    },
    {
      word: 'subatomic',
      definition: 'Smaller than or occurring within an atom.',
      topicId: 15,
      id: 320,
      pronunciation: '/ˌsʌb.əˈtɑː.mɪk/',
      image_link: [
        'https://i.pinimg.com/236x/ec/e2/d0/ece2d03edbd73e6316c70a843247e6fd.jpg',
        'https://i.pinimg.com/236x/79/04/33/790433cc68de2ad161aa46e4a3c42153.jpg',
        'https://i.pinimg.com/236x/4f/13/34/4f133400be027e1265ab23d444df22f7.jpg',
        'https://i.pinimg.com/236x/62/34/25/623425f7c07d66603548d1462f126523.jpg',
      ],
      examples: [
        'Subatomic is in the sentence.',
        'This sentence contains the word subatomic.',
        'We can use the word subatomic here.',
        'Here is an example of the word subatomic.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'atomic',
          definition: 'Relating to an atom or atoms.',
        },
        {
          word: 'macroscopic',
          definition: 'Visible to the naked eye; not microscopic.',
        },
        {
          word: 'visible',
          definition: 'Able to be seen.',
        },
      ],
    },
    {
      word: 'biological',
      definition: 'Relating to biology or living organisms.',
      topicId: 15,
      id: 321,
      pronunciation: '/ˌbaɪə(ʊ)ˈlɒdʒɪkəl/',
      image_link: [
        'https://i.pinimg.com/236x/1e/08/a2/1e08a2bd6acf19fd9530717d84a4a86c.jpg',
        'https://i.pinimg.com/236x/cf/ad/a0/cfada05e22ff54e0ae5a1b1827d0f01c.jpg',
        'https://i.pinimg.com/236x/22/59/34/2259343bdabf911ce1f213365e98407a.jpg',
        'https://i.pinimg.com/236x/8b/a2/f2/8ba2f2e84330e6173f4ab1df2ff31f30.jpg',
      ],
      examples: [
        'Biological is in the sentence.',
        'This sentence contains the word biological.',
        'We can use the word biological here.',
        'Here is an example of the word biological.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'inorganic',
          definition: 'Not consisting of or deriving from living matter.',
        },
        {
          word: 'non-biological',
          definition: 'Not relating to or involving living organisms.',
        },
        {
          word: 'abiotic',
          definition:
            'Physical rather than biological; not derived from living organisms.',
        },
      ],
    },
    {
      word: 'experimental',
      definition: 'Relating to scientific experiments.',
      topicId: 15,
      id: 322,
      pronunciation: '/ɨkspɛɹəˈmɛntəl/',
      image_link: [
        'https://i.pinimg.com/236x/13/15/ab/1315ab8f6ecea571aab7e64c87d5c53d.jpg',
        'https://i.pinimg.com/236x/d4/42/41/d44241ad142db9de41cc7c6715c5e2ca.jpg',
        'https://i.pinimg.com/236x/8b/8e/20/8b8e207d70c16f5c3c0f084a8f2d3fd0.jpg',
        'https://i.pinimg.com/236x/f4/ff/26/f4ff26e037f2357e1f446a0f4076337d.jpg',
      ],
      examples: [
        'Experimental is in the sentence.',
        'This sentence contains the word experimental.',
        'We can use the word experimental here.',
        'Here is an example of the word experimental.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'theoretical',
          definition:
            'Based on or calculated through theory rather than experience or practice.',
        },
        {
          word: 'observational',
          definition:
            'Relating to or based on observation, especially of the behavior of objects or events in the external world.',
        },
        {
          word: 'theoretical',
          definition:
            'Based on or calculated through theory rather than experience or practice.',
        },
      ],
    },
    {
      word: 'conduct',
      definition:
        'To organize and carry out an activity or process, especially a scientific experiment.',
      topicId: 15,
      id: 323,
      pronunciation: '/ˈkɒndʌkt/',
      image_link: [
        'https://i.pinimg.com/236x/f0/e7/e1/f0e7e132259f00afad682ff00e4791b6.jpg',
        'https://i.pinimg.com/236x/83/ca/9e/83ca9e8da6e60389d2316a86addd25dc.jpg',
        'https://i.pinimg.com/236x/47/af/9b/47af9b89db1c367df7c275410e21c934.jpg',
        'https://i.pinimg.com/236x/d1/08/bc/d108bc26afdf461173c785e40eb0e29d.jpg',
      ],
      examples: [
        'Conduct is in the sentence.',
        'This sentence contains the word conduct.',
        'We can use the word conduct here.',
        'Here is an example of the word conduct.',
      ],
      tdn: [],
      ttn: [
        {
          word: 'abort',
          definition:
            'To terminate prematurely, especially a scientific experiment or mission.',
        },
        {
          word: 'neglect',
          definition: 'To fail to care for properly; disregard or ignore.',
        },
        {
          word: 'discontinue',
          definition:
            'To cease or stop the progress or development of something.',
        },
      ],
    },
    {
      word: 'cool',
      definition:
        '\n1. Refers to a lower temperature that is comfortably refreshing, neither warm nor cold. \n2. Fashionable in a way that people admire. \n3. Cool colours, such as blue or green, make you feel calm and relaxed. \n4. to become or cause something to become slightly colder',
      topicId: 2,
      id: 324,
      pronunciation: '/kuːl/',
      image_link: [
        'https://www.shutterstock.com/image-vector/girl-cute-cat-feel-hot-600nw-1382209688.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPL7zyQacNXuhpn5yIBqGEA6_MWlqvL60e1g&s',
        'https://m.media-amazon.com/images/I/71Y3llgWZVL._AC_UF1000,1000_QL80_.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQEjQBZd3gG-Nhnwntvzx8jvlvlAiuWXCi5w&s',
      ],
      examples: [
        'It was a lovely cool evening.',
        'Our new car is really cool.',
        'The bedroom was painted a lovely cool blue.',
        'He took off his shoes to cool his sweaty feet.',
      ],
      tdn: [
        {
          word: 'Chill',
          definition:
            'Relaxed, calm, or cool in terms of temperature. When referring to a person, it implies a state of being easygoing and not stressed.',
        },
        {
          word: 'Trendy',
          definition:
            'Means fashionable, up-to-date with the latest styles or trends. It is used to describe things that are popular and in vogue.',
        },
        {
          word: 'Calm',
          definition:
            'Means free from excitement or disturbance; peaceful and untroubled. It describes a state of tranquility and composure.',
        },
      ],
      ttn: [
        {
          word: 'Hot',
          definition:
            'Refers to a high temperature or something that is very warm. It can also describe something that is exciting or passionate.',
        },
        {
          word: 'Anxious',
          definition:
            'Describes a state of being worried, nervous, or uneasy. It is the opposite of being calm and composed.',
        },
        {
          word: 'Unfashionable',
          definition:
            'Means not in accordance with current styles or trends. It describes something that is out of date or not stylish.',
        },
      ],
    },
  ],
  topic: [
    {
      id: 1,
      topic_name: 'Nature',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_2oII-AssPFNOvcLQ6ecJ6ZWQlUbKU3j8w&s',
    },
    {
      id: 2,
      topic_name: 'Weather',
      image:
        'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?cs=srgb&dl=pexels-jplenio-1118873.jpg&fm=jpg',
    },
    {
      id: 3,
      topic_name: 'Animals',
      image:
        'https://propelsteps.wordpress.com/wp-content/uploads/2013/12/animais1.jpg',
    },
    {
      id: 4,
      topic_name: 'Colors',
      image:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQERIQDhIQEhATEBAPDw8QDg8NDxAQFR0YFxUSFRMYHiggJBolGxMTIT0jJSkrLjouFx8zQDMsNyo1LjEBCgoKDg0OGxAQGi0dHSUtKy0tLS0tLS0tLS0tKystLS0tLS0rLS0tLS0tLS0tLTc3LS03LS0tLS03KysrLSsrK//AABEIAIABiAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcDBAUCAf/EAEIQAAECAwQFCAYIBgMBAAAAAAEAAgMEFBFRUqEFBxITMwYhMTJxc7GyIjRBcnTCI1NhgYOzwcMkQkNEVJGCoqNj/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAMFAQIEBv/EAC0RAAIBAgQFBAICAwEAAAAAAAABAhESAxNRcQQFMTKxITNBwRSBI0IiYXJS/9oADAMBAAIRAxEAPwC5VMRHxAEAQHpnSO0I+hlGaP7FHETMS3NAgCAIDNB6FpIkh0MJWhynxAEAQH1vSO1DK6maL7FDjdEdUjGoDUIAgCAyQl0YPRm0TGVzvqThDIQBAAi6mDJFXZI0iY1oSBAEAQGSEt4mkjA7pPasEi6HxDIQBAfQgM8fo+9SIih1MCySBAEAQGaB7VhkczE7pPaVIuhofFkBAEAQGvUi45KTLZBchUi45JlsXIVIuOSZbFyFSLjkmWxcj7DmQSBYekXLDg6GVJVNqbibNlv2qKCqZxZUoa9QLjkt7GQ5iFQLjkljGYhUC45JYxmIVAuOSWMZiNmVibQNl6jmqMmwpVRqGaFxyUZyZiFULjkgzEKoXHJBmIVQuOSDMR9ZMi0cx6RchmM1VGzNxQ2y2329C5+Ilakdsma9WLjkuXNRpUVYuOSZqFRVi45JmoVFWLjkmahU2ZSKHA2W9PtXXw8rkzeLMBmRcclxvHjXodSgz5Ui45LGfHQWMVIuOSZ8dBYxUi45Jnx0FjPomRccllY8a9A4M2JmJsgWqwxHQjw41Zr1AuOSjvRLlsVAuOSXoZbFQLjkl6GWxUC45Jehlszy0Tats+xSYcqkWJGhrPmBaeY9JuS4nWG6HmoFxyWLjOWxUC45JcMtioFxyS4ZbPomBcckuMZbNqbibIFt6mRBhRqzVqRccltQny2KkXHJKDLYqRcckoMtipFxySgy2bEnE2rbPsWGiHFjShrxJkAkWHpNymUHQiPlULjks2MCqFxySxgVQuOSWMCqFxySxg1FMcoQBAEB6g9ZvvN8ViXRmY9Tf0j/AC/f+i58L5M8R8GkpTmCAIAgN7R/Qe1Q4vU6sDoznFQHCz4hgIAgPcPpHaENo9yN3SXQ3tK5eL6IsZmguEjCAIAgOho3od2rv4TtZJA039J7Sq2XVncuh8WDIQBAfWdI7Qsx6ow+hvT/AEDtVvjdERYPVmkoDoCAIAgNyQ/m+5T4PyQY3waMTpPaVh9Tpj0R5QyEAQH0IDf0j1R2rpicuB1Zz1udIQBAEBvaN/m+79VpI58f4NKN1ne8fFdUeiOc8LYBAEAQEerYmM5KxyoaFTmS1FbExnJMqGgzJaitiYzkmVDQZktRWxMZyTKhoMyWpmkpyIYkMFxsMRgPR0WhaYmFBQfp8M2hiSuXr8ki07ELdiw2db9FV4CrU6OLbVKf7OVUOxFdFqOO5iodiKWoXMVDsRS1C5iodiKWoXM7Og3ksdabfS/QLlx1Ro7uFbcXuR900+0+kek3LmKd4kq9T5VPxHJBmS1FU/EckGZLUVT8RyQZktTJLzL9tvpHrNuvQ2w8SV69flHZ0/ELQyw2c7v0XFzBtKNC7xDjVDsRyVZfLUiqKh2I5JfLUVFQ7EckvlqKiodiOSXy1FTtaAiFzX2m30h4K04BtxddSbD6HLiR3WnnPSV5zEx8S9+vyy5jCNF6HmodiOS0/IxNTOXHQVDsRyT8jE1GXHQVDsRyT8jE1GXHQ9Q47rRznpC3w8fEvXr8oxKEaP0Oxpp5DW2Gz0ivUcU2kqHLwkU26nI37ryuK+Wp3WR0G/deUvlqLI6DfuvKXy1FkdBv3XlL5aiyOh1dCvJD7Tbzj9V2cLJtOpw8XFJqhHJmdiB7wHHruHsvK0lJ1ZbYeDCxenwjHXRMZyWL2b5OHoK6JjOSXsZOHoK6JjOSXsZOHofWzsS0emekXLN7MPBw6dCRco4paxhabPTsyKssNepU8FFSm66HArH4jkpaIssqGgrH4jklEMqGgrH4jklEMqGgrH4jklEMqGh2+TUZzt5tG2zYs/7KPEXQr+Oio20/39HHnJp4iRAHGwRHgdF5VlCEbV6fCOAxVj8RyW2XHQCsfiOSZcdAKx+I5Jlx0ArH4jkmXHQHMqWYhmu3LloUly1FSzEM0y5aC5aipZiGaZctBctRUsxDNMuWguWpsSEw0xYQ2hxYfmCjxYSy5enw/BthyV63RKeUkQN3e0bOv8qpuHVanXxjStr/ALOJUsxDNdNrOG+OoqWYhmlrF8dRUsxDNLWL46ipZiGaWsXx1O/ydeHMdYbfT/QLk4hUkix4NpxdNSMPmWWn0h0m9cpRuca9T5UsxDNDF8dRUsxDNBfHUVLMQzQXx1MkrMM22ekOuzxCG+HON69fleSQcpogaIdps53fouDmLoonoMX4OBUMxDNVVyIRUMxDNLkBUMxDNLkBUMxDNLkCQcmogcx9ht9IeCtuXP8AxluTYXQ40WYbtO9IdY+K8ri4kViS9fl+S9inRHmpZiC0zI6m1GKlmIJmR1FGKlmIJmR1FGeoUw3ab6Q6w8VvhYkXiR9fleTWSdGd3T7wGstNnpHwXr+MaUVU5OCTcnQ4m/beFX3x1LGyWg37bwl8dRZLQb9t4S+OosloN+28JfHUWS0O1yfeCH2G3nb+q7+CaadCv42LTVSJzcw3eP8ASHXffeVpJqrLrDhKyPp8LwYqhmIZrWqJMuWgqGYhmlUMuWgqGYhmlUMuWh6ZMNtHpDpF6zVGHCVOhKuVbw2Gy02fSfoVbYXUo+AVZvYjFQ3EFNQtbWKhuIJQWsVDcQSgtYqG4glBayQ8kogdvdk28P5lFi/BW8wVLf39HDno7d7E5xxIniVa4cXYtkVpgqG4gt7WBUNxBLWBUNxBLWBUNxBLWDhqzPOhAEAQGzovjwe+heYKLH9qWz8G+F3x3XkmfLL+j+J8q8/wnydvMf6/v6IyusrAgCAICV8j+E/vP0C4uK7lsW3L+x7/AEQyJ0ntK4Tz8urPKGoQBAZ5Liw+8h+IQkwvcjuvJKeWfVhe8/wCr+adsd2enxfgiypyEIAgCAlfI3qRPfHgrnlnZLf6J8LoRuY67ved4rxfEe7Ld+T0Ue1GNQmQgCAyS/Xb7zfFTcP7sd15MS7WSrlV1IfvnwXtuY9sdzk5b3y2I2qotwgCAICRclOrE7W/qrTl3SRU8y6x/ZCJ/ixe9ieYrWXcy/wfbjsvBgWpIEAQHqH0jtCyjEujJty44UPvflcrrB6nm+W+49vshq6C5CAIAgJXyF/r/hfOoMb4Krmf9f39Ed0lxovfRfMVd4XZHZeCqNdbgIAgCA5NUbhmrLLR5m9iqNwzTLQvYqjcM0y0L2Ko3DNMtC9m3omZJmIAsHHgj24mqLHgsqez8G+FN5kd15Jry6jFu4ss5970/wDBeb4NVu/R3czlbb+/oilWbhmu6xFTmMVZuGaWIZjFWbhmliGYxVm4ZpYhmMmXIeKXQohNnFs5vdaq/jFSS2Lnlkq4ct/pEFizZ2jzDrG+9cB56Uv8meaw3DNYMXCsNwzQXCsNwzQXGeQmzvYQsHFhj24gsokwZfyR3XkmPLmJstg2Yn+AVfzTtjueqxfgiNSbhmqchFSbhmgFSbhmgFSbhmgJhyGibUOLb9YPBXPLOyW/0T4XQi8zMHbfzDruvvK8fxEFmy3fk9DDtRiqDcM1FYjYVBuGaWICoNwzSxAyy0wdtnMOu2+8KXh4LNjuvJrPtZLeWUUtZDss656exex5k6Qjuc3K1WctiKVZuGap7mXViFWbhmlzFiFWbhmlzFiFWbhmlzFiJTyMilzYttnWZ0dhVvyx1jIp+aKko/sgukJg76LzDixL8RWkn/kz0ODH+OOy8GvUG4ZrWpJYhUG4ZpUWIVBuGaVFiPcKYO0OYdYX3rKfqYlD0ZO+Xz7IMPvvlcrzB6nmOW+49vtEHqDcM10FzQVBuGaCgqDcM0FBUG4ZoKEw1fxNrf2//L51BjfBU8z/AK/v6IzpSOd/G5hxovmKvcJfxx2XgqjWqDcM1vaBUG4ZpaBUG4ZpaBUG4ZpaDlq0PLBAEAQG3oj1iB8RA87VDxHsz/5fgkwvcjuvJONYH9D8X5F5rgv7fo7ua/0/f0RBd5ThAEAQE35BcGL33ytVbxveti75V7ct/pEAi9Z3vHxVceel3M8IYCAIDY0fxoXfQvMFlEmD7kd15Jty+6sH3n+AVfzTtjuesxfghypyEIAgCAmnILhxe8HgrnlnZLf6J8LoROa67/fd4leSx/dlu/J6GHajEoTYIAgMsr12e+3xCmwPdjuvJrPtZL+W/Dhd4fBet5n2R3+iDlXfLYiKpi6CAIAgJZyH6sb3meBVxyvtluU3Ne6P7IHpHjRe+i+YrSfcz0WB7Udl4NdakoQBAe4XWb7w8VldTWXRk+1g8GF33yuV9g9Ty3LPce32iCroLkIAgCAmWrv+4/C+dQY3wVPNP6/v6IvpXjxu/i+Yq9wfbjsvBVGqpAEAQBAcFXJ5EIAgCA3dCesy3xMv52qHifZn/wAy8MlwfcjuvJO9aHRLdsb5F5Pgv7fosua/0/f0QNd5ThAEAQFi6suBG7/5GKu43uW32y75V7ct/pFbxus73neKrill3M8IYCAIDZ0Zx4PfwfM1ZRvhe5HdeUT7Wb1Jf34ngFX8y7Y7np8X4ICqkhCAIAgLB1Z8KP3rfKFb8t7Jb/SJsLoQmc4kTvH+JXmsf3Zbsvo9qMKiMhAEBmk+JD7xniFLge7HdGJdrJxrI4UHvT5SvQ839uO/0Y5P7ktvsgNioS/FiAWIBYgJ3q26kf34fgVeco7Jb/RQ857obMgGlOPG7+N5isz7nuehwPajsvBrLUkCAID3B6zfeb4rK6mJdrLJ1l8CD3/yuV9g9WeU5Z7ktvtFdroLoIAgCAnWrH+5/B+dQY3wVPNP6fv6Ippf1iP38bzOV7he3HZeCpNRSAIAgCA4tULjkrip5KgqhcckqKCqFxySooKoXHJKihvaCmAZqWFh9Zl7sbVDxL/hn/y/DJcFfyx3XknutWKGiVtt5zH6Pw15Pg3S79FnzSNbf39EAqxccl23IqMtirFxyS5DLYqxcckuQy2KsXHJLkMtlk6rYm1LxiP8j5GLg4x1ktvsueVxphy3+kVpGmRtO5j1nXXqvKiWG7meKkXHJDGWxUi45IMtipFxyQZbNnRcwN/A5jx4N2JqyjfDw3fHdeSwNaMQNZL229eJ4BcPMY1jHc9HiIr6qFxyVXlsioKoXHJMtigqhccky2KCqFxyTLYoWLqvibUGPZ9a3yhWvLo0hLf6JsPoQWdmxvInMeI+68rzmPhvMluy7jL0RgqxcclFls2uFWLjkmWxcKsXHJMti4zyU2N5D5jxGXXhS4GG8yO6NZS9GTvWdFDYMAm3iu6PdKvubKuHHf6HKHTElt9leVouOSorS+uFaLjklouFaLjklouFaLjklouLA1YRg5kxZb14fT2FXnKVSEtyi5w6yhsyvtKzI38fmPHjXYnLE+57s9BgP+KOy8GrVC45LUlqKoXHJBUVQuOSCp7gTI2m8x6zbr1ldTWT/wAWWbrPfsy8G36/5Xq9wep5XlrpiPb7RXFQLjkuipcXoVAuOSVF6FQLjklRehUC45JUXonuq2JtCZsvgfuKDG+Cq5nKtv7+iIaZmQJmYFh9Yjj2Y3K+wfbjsvBVmpVC45KQCqFxyQCqFxyQCqFxyQHBVseTCAIAgN/k/wCtyvxUv52qHifZn/y/DJcD3Y7ryWDrd6JTtj/tryfCfJacx/r+/orpdhWBAEAQFoapfVo/xHyMXDxfcti25d2S3+kVfH6zved4riKuXVmNDUIAgNvRPrED4iB52ob4ffHdeSxdbHDlvfieAXJx3aty/wAQrdVxEEAQBAWXqo4Mx3zfKFY8D2vf6JcPoV9P8WJ3kTxKoMb3JbsuY9EYFEZCAIDPIcWH3kPxClwfcjujEujLC1r8GB3zvKVdc09tbmeU98tvsrNUReBAEAQFkap+HMd5D8CrzlXZLcpObd0dmV1pb1iP8RH87lrPue7PQYPtR2Xg1FqSBAEBkl+u33m+IWV1MS7WWnrU9Xg/EfI9XmF1PKcv73t9orNTlsEAQBAWFqn6JrtgfuKHF+Cs5j/X9/RC9N+szHxMfzuV9he3HZeCtNJSAIAgCA4O9N6tKs8rQb03pVig3pvSrFBvTelWKHR5OxDWSvP/AHUt52qHiX/DP/l+CXAX8sd0WLrkcQJSy+Y/bXk+GfUtePSdv7K13hvXXVldahvDelWLUN4b0qxahvDelWLUWtqfdbLR7f8AJ+Ri4+J7lsWfAKkHv9IqmYiHbdz/AM7vErkK+UVVnjeG9YMWobw3oLUN4b0FqNvQ8Q1Evz/3EDztWTaEVct15LI1wuIhytn1kXwC5eMX+KLmZWO9N64KIjG9N6UQG9N6UQG9N6UQLS1QOJgTFv1zfKF38F2vf6JYdCudIRDvYvP/AFYnmKpMWKvluy1i/RGvvTeo7UbVG9N6WoVG9N6WoVNjR8Q72Fz/ANWH5gpMKKvjujWT9GWPrecRAl7PrneUq25kq4a3M8sbU5bFXbw3qltRc3Mbw3pahcxvDelqFzG8N6WoXMs3VA4mHM2/WQ/Aq55aqQe5T8zbco10K20xENRMc/8AcR/O5aS7nuy9wZPLjsvBqbw3rFCS5jeG9KC5jeG9KC5nuXiHbZz/AM7fELKXqYlJ2stnW44iWgWf5PyPVzh9TzHAv/N7faKs3pvU1S0uY3pvSouY3pvSouY3pvSouZY+p9xIm7b5f9xRYvwV3Hutv7+iDadiGqmef+6mPO5X2F7cdl4K80t6b1IBvTegG9N6Ab03oDiVDMQXd+Rhf+jzWTPQVDMQT8jC/wDQyZ6CoZiCfkYX/oZM9BUMxBPyML/0Mmeh0eTcw2slPSHrcsP/AEaouIx8N4U0n8PwS4GFNYkXT5RZOumIGiT2jZzzH7a8xw7SqWXGpu2n+ysalmIZrquRwWS0FSzEM0uQsloKlmIZpchZLQVLMQzS5CyWhbepqIHSsxsm3+K+SGuTiHWS2LHgk1B11+kVLMTDdt/pDru8SuU4XF1ZjqG4ghi1iobiCC1iobiCC1m5oaO2pl+ceswPO1DaEXct15LM1zRA2HK2mz6SL4Bc3FptKhbTKtqG4guKyWhHQVDcQSyWgoKhuIJZLQUFQ3EEsloKFq6m4gdAmbDb9O3yhdvCJqLrr9EkCtdIzLN9F9IcWJ5iqfFw5Xv0+SzjJURr1TMQzUeXLQ2uQqmYhmmXLQXIVTMQzTLloLkbGjplm+hekOLD8wUmFhyvXp8o1lJUZZmuOIGwJfaNn07vKVacwi3hqmpnlzSm66FU1LMQVPly0La+OoqWYgmXLQXx1FSzEEy5aC+OoqWYgmXLQXx1LS1NxA6HNbJt+kheBVvy+LUHXUquYyTlGhWOmZllTMekPWZge3G5ayhKr9PllzhY2GsOPr8LwadUzEM1iyWhJn4eoqmYhmlktBn4eoqmYhmlktBn4epklppm2z0h12X3hFCVehrLHw7X6lua44rWysAuIFszYLb9h6t8Pqee4OSUnXT7RU9ZDxjNS1RYZkdRWQ8YzSqGZHUVkPGM0qhmR1FZDxjNKoZkdSzNTMZrhObJBsMvbZ+IosRnDxsk7af7IFp+bYJuaBcLRNTIPT0iI5XmFiRUI+vwvBwmhWQ8QzW+bDUCsh4hmmbDUCsh4hmmbDUCsh4hmmbDUEaUJVhAEAQHT5MevSXxsp+YxaYnY9n4N8PvRaWvfoke2a/aVXg/JPxPwVMpzlCAIAgLn1GeqTPxZ/Lhrnxup2cN2vcpyZ67/ff4lQHI+rMaGAgCA3dBetS3xUv52obQ7luWprz4Up3sXyhR43RFhIqJc5qEAQBAXDqO9XmviG+QLowejNolUaU48bvovmKrcTuZ2roaq1MhAEBtaL48HvoXmC2w+5GH0LX15erSvxDvIV3cX2G3Bdz2KdVcWIQBAEBb2ozhTfewvKVYcJ2sruN7kVJp31qa+LmfzHLL6nVHtWy8GkhsEAQGWV4jO8Z4hDD6MufXt6pLfGD8uKuyJXYHV7FLLc6AgCAIC29QvRPdsr+6tJHPj/BWvKP12c+Nm/zXqxj2rZeCA5y2AQBAEBrWrT8iWhx5SFqfkS0GUhan5EtBlIWp+RLQZSOlyZd/HSXx0n+axYljtxap8M2hhJSTLR1+PsEj2zX7S4sOVCTGgpUKi3x+xSXsgykN8fsS9jKQ3x+xL2MpDfH7EvYykXXqHfbJzPxhH/nDUWI6s6MGNqKYmox3j+jiP8SozneEqmLfn7EGUhvz9iDKQ35+xBlI3tAxjVSvR61LfmNQysNJotfXzE2YUnZ9bF8oUeKqpHWynak3DNRWGtBUm4ZpYKCpNwzSwUFSbhmlgoXNqHibUtNW/wCS0f8ARqlwlRM2RUelZg7+PzDjxr8TlzSwE23UnU2atQbhmtfx46mcxioNwzT8eOozGKg3DNPx46jMZtaKmDv4HMOPBvxNW0cBJp1MObLc18RNmWlbP8l3kcujGgpqjM4GI4NtFMVBuGa5vxo6nT+VLRCoNwzT8aOo/KlohUG4Zp+NHUflS0QqDcM0/GjqPypaIuPUNE2oM5b9bC8pXTgwUE0jmx8RzaqVLp1/8VNfFzX5j1hx9TqWK6LZGltrFpnNY20tGaxtpaM1mWVf9IzvGeIWbTDxXQujXy6yTlfjB+XFXTE48F0bKT3hWak9w3hSouG8KVFw3hSouLe1BOtE92yv7qxIhxXWhWXKSL/Gzvx05+a9daxWktkQnO3pWc1gb0pmsDelM1gb0pmsGOIwtJa4FrgS1zXAtc0jmIIPtWhAfEAQBAdPkswunpINBJrZQ2AEmwRGEmz7ACfuWH0ZmPUtDX8w7Mi6w7IdMgusOyCRDsBN52Xf6K54m2IU8tyMIAgCAvDUKwiSmCQQDOHZJBAdZDhg2HtWkiWHQpWeYWxYjXAhwiRAWkEEEE2ggrQiZgQwEAQHQ5PMLpyUDQSTNy1gAJJ+kb7EMrqWxr8YdxJmw2CNFBNhsBLRYCfuP+lrMnZTCjMBAEAQF2ahGESs0SDYZkWGw2GxjbbCpIdDKKg0wwtmJgOBBExGBBBBHpu6QoiQ00AQBAbmh2F0xLhoJJmIAAAJJO23oCAt/X2wmVlSAbBMm0gEgWsdZaVLMQKTWhuEAQBAXRqDYdxNmw2GNCANhsJDTaAfvH+1vA0mVNyhYWzk2HAg1czaCCCLYjiOZas6V0Rz1gyEAQGeRYXRYbWglxiQwGgEkkkWAALJh9C6dfTCZKWIBIbOAuIBIbbDiAWntICmRz4fUpBZJggCAIC4dQLDszzrDsl0sA6w7JIES0A3jab/ALCwyLEKw5UQy2enQ4EGtmzYQQbDEeQbPtBB+9TroiI5iyAgCA9Q2FxDWgucSGta0FznE8wAA9qA/9k=',
    },
    {
      id: 5,
      topic_name: 'Food',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
    },
    {
      id: 6,
      topic_name: 'Technology',
      image: 'https://emeritus.org/wp-content/uploads/2023/11/tech.png.webp',
    },
    {
      id: 7,
      topic_name: 'Sports',
      image:
        'https://nativespeaker.vn/uploaded/page_1656_1712278968_1715676497.jpg',
    },
    {
      id: 8,
      topic_name: 'Travel',
      image:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/4f/7d/fc/caption.jpg?w=1200&h=1200&s=1',
    },
    {
      id: 9,
      topic_name: 'Education',
      image:
        'https://www.voicesofyouth.org/sites/voy/files/images/2022-03/educ.jpg',
    },
    {
      id: 10,
      topic_name: 'Shape',
      image: 'https://promova.com/content/small_shapes_8a8f2a8fe8.png',
    },
    {
      id: 11,
      topic_name: 'Music',
      image: 'https://leerit.com/media/blog/uploads/2017/02/06/music3.jpg',
    },
    {
      id: 12,
      topic_name: 'Art',
      image:
        'https://pixune.com/wp-content/uploads/2023/11/DALL%C2%B7E-2023-11-30-12.59.03-A-whimsical-and-colorful-illustration-of-an-artist-surrounded-by-a-whirlwind-of-various-art-styles-and-influences.-The-artist-a-middle-aged-Caucasian-1030x589.webp',
    },
    {
      id: 13,
      topic_name: 'Literature',
      image:
        'https://dreamerswriting.com/wp-content/uploads/2023/12/Point-of-view.jpg',
    },
    {
      id: 14,
      topic_name: 'History',
      image:
        'https://www.euroschoolindia.com/wp-content/uploads/2023/07/importance-of-history-scaled-1.jpg',
    },
    {
      id: 15,
      topic_name: 'Science',
      image:
        'https://nativespeaker.vn/uploaded/page_1294_1688782864_1692888675.jpg',
    },
  ],
});

server.use(middlewares);
server.use(router);

module.exports = server;
