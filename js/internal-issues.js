// This class holds al the required info about the external issue to look for - this data is used to render information on the modals
const InternalIssues = {
    // dumpster area    
    internal_1: {
        title: 'Dry storage area - Why keep the dry storage area clean?',
        text: 'A clean dumpster area helps prevent pests around a restaurant. When this area is dirty or messy, it can attract unwanted pests, which can cause health problems and affect the business. Click the Read more... button to learn why a clean dumpster area is important for keeping pests away.',
        issueList: [
            {item_title: 'Prevents pest access to food',
             item_text: 'Properly sealed and stored food products give pests no opportunity to feed. Keep products in sealed containers and off the floor.'
            },
            {item_title: 'Eliminates hiding spots',
              item_text: 'Clean, organized shelves with proper spacing make it harder for pests to hide and nest. Regular cleaning prevents build-up of food debris that attracts pests.'
            },
            {item_title: 'Makes inspection easier',
             item_text: 'Clean storage areas allow you to quickly spot signs of pest activity like droppings or gnaw marks. Early detection means faster response.'
            },
             {item_title: 'Protects food quality',
              item_text: 'Proper storage prevents pest contamination and keeps food fresh longer. This saves money and protects customer health.'
            },
            {item_title: 'Controls moisture',
             item_text: 'Dry, well-ventilated storage areas discourage pest activity. Pests need moisture to survive, so keeping areas dry helps prevent infestations.'
            },
            {item_title: 'Ensures food rotation',
             item_text: 'Proper stock rotation prevents old products from becoming pest food sources. Using FIFO (First In, First Out) reduces pest attraction.'
            },
            {item_title: "Maintains health standards",
             item_text: 'Clean storage areas help pass health inspections. Proper storage practices are essential for food safety compliance.'
            }
        ],
        bannerImg: 'external-2-long.png',
        modalTitle: 'Dry storage area',
        modalText: 'A clean and organized dry storage area prevents pests from infesting your restaurant\'s food supplies. When storage areas are messy or poorly organized, they create perfect hiding spots for pests like rodents and cockroaches. These pests can contaminate food and spread diseases, risking your customers\' health and your business. By maintaining clean, organized storage with proper food rotation, you can prevent pest problems. Here\'s why proper dry storage maintenance matters:',
        keySignsHeading: 'Examples:',
        keySigns: [
            {
                signType: 'Disorganised storage area',
                signDescription: 'Advice the restaurant to clean it as and tidy',
                signsImg: ['external-img-6.png', 'external-img-1.png', 'food-source-2.jpg']
            }
        ]
    },
    // Landscaping
    internal_2: {
        title: 'Landscaping - why to keep it clean and maintained?',
        text: 'Clean and tidy landscaping helps keep pests away from a restaurant. When outdoor green areas aren\'t properly maintained, pests can live and hide there. This can lead to pest problems inside the restaurant. Click on the Read more... button to learn why looking after landscaping helps prevent pests:',
        issueList: [
            {item_title: 'No hiding spots',
             item_text: 'Trim plants and grass regularly. This stops pests from hiding near the restaurant.'
            },
             {item_title: 'Block entry points',
              item_text: 'Keep plants away from doors and windows. This stops pests from using them to get inside.'
            },
            {item_title: 'Remove Standing Water',
             item_text: 'Don\'t let water collect in pots or puddles. This stops flies and bugs from breeding.'
            },
            {item_title: 'Remove food sources',
             item_text: 'Clean up outdoor waste quickly. This stops pests from finding food around the restaurant.'
            },
            {item_title: 'Better pest control',
              item_text: 'Clean outdoor areas make it easier to spot and treat pest problems.'
            },
            {item_title: 'Good Image',
             item_text: 'Clean outdoor areas show customers that the restaurant cares about keeping pests away.'
            },
        ],
        bannerImg: 'landscape-long.png',
        modalTitle: 'Landscaping',
        modalText: 'Keep your landscaping areas clean to stop pests. When plants are overgrown and areas are messy, pests will come. Trim bushes, remove litter and standing water. This will help keep rats, bugs, and birds away from the restaurant. In summary, advice the restaurant to follow these steps to maintain the landscaping:',
        keySignsHeading: 'Examples',
        keySigns: [
            {
                signType: 'Poor landscaping',
                signDescription: 'Coaching is highly recommended. Advice the restaurant that the regular cleaning of litter around the restaurant is essential - waste attracts pests, and those pests will eventually find their way into your building.',
                signsImg: ['food-source-3.jpeg', 'litter-1.webp', 'litter-landscape.webp']
            }
        ]
    },

    // Standing water
    internal_3: {
        title: 'Standing Water - why keep it drained?',
        text: 'Standing water around a restaurant attracts pests like flies, mosquitoes, and rodents. When water collects in puddles, drains, buckets, or old equipment, pests use it for drinking and breeding. When noticed, ask the team to check and fix areas where water collects to keep pests away from the restaurant. Click on the Read more... button for more information:',
        issueList: [
            {item_title: 'Puddles near dumpsters',
             item_text: 'Water collecting around dumpster areas attracts pests and creates unsanitary conditions. It could be caused by uneven ground, poor drainage, or leaking dumpsters'
            },
             {item_title: 'Blocked drains',
              item_text: 'Standing water from backed-up drains creates perfect breeding spots for pests and leads to bad odors. This is usually caused by food debris, leaves, trash blocking drain holes, or damaged drain covers.'
            },
            {item_title: 'Plant pots and buckets',
             item_text: 'Stagnant water in outdoor containers provides drinking sources for pests and breeding grounds for mosquitoes. This happens when rain water collects in empty pots, from overflow after watering, or due to poor drainage in plant containers.'
            },
            {item_title: 'Old equipment left outside',
             item_text: 'Water trapped in or under abandoned equipment creates hidden water sources that attract pests. This occurs when old equipment isn\'t properly stored, equipment covers collect rainwater, or items are left in low-lying areas.'
            },
            {item_title: 'Low spots in parking lots',
              item_text: 'Water pooling in parking lot depressions becomes a constant water source for pests and breeds insects. This is typically caused by uneven pavement, settling ground, poor lot grading, or damaged asphalt.'
            },
        ],
        bannerImg: 'standing-water-banner.png',
        modalTitle: 'Standing water',
        modalText: 'Standing water is a big problem for restaurants. It attracts flies, mosquitoes, rats and mice that can get into the building. They use this water for drinking and laying eggs. Look for and fix any place where water collects, like the list below. Regular checks and quick fixing of these problems will help keep pests away from the restaurant.',
        keySignsHeading: 'Examples',
        keySigns: [
            {
                signType: 'Blocked drains & standing water issues',
                signDescription: '',
                signsImg: ['blocked-drain.jpg', 'external-img-3.png', 'standing-water.jpg', 'landscape-water.jpg']
            }
        ]
    },

    // External building maintenance
    internal_4: {
        title: 'Building Maintenance - why keep it in good condition?',
        text: 'Poor building maintenance around your restaurant attracts and allows pests to enter. When walls have cracks, doors have gaps, or windows are damaged, pests find easy ways into your building. Check and fix any building damage to keep pests out of your restaurant. Click Read more... button to learn why:',
        issueList: [
            {item_title: 'Cracks in walls',
             item_text: 'Gaps and cracks in exterior walls give pests direct access into a restaurant. These usually occur due to building settling, weather damage, or poor repairs.'
            },
             {item_title: 'Door gaps',
              item_text: 'Spaces under or around doors provide easy entry points for rodents and insects. This happens when door sweeps are worn out, doors are misaligned, or frames are damaged.'
            },
            {item_title: 'Window damage',
             item_text: 'Broken seals or gaps around windows let pests enter and can also cause moisture problems. This occurs from wear and tear, weather damage, or improper installation.'
            },
            {item_title: 'Roof damage',
             item_text: 'Holes or gaps in the roof give pests access to the building and can lead to water problems. This is often caused by weather damage, aging materials, or poor maintenance.'
            },
            {item_title: 'Utility entries',
              item_text: 'Gaps around pipes and utility lines create perfect entry points for pests. These appear when seals deteriorate, during new installations, or from building movement.'
            },
        ],
        bannerImg: 'external-building-gaps.jpg',
        modalTitle: 'Building Maintenance',
        modalText: 'Common issues to check:',
        keySignsHeading: 'Examples',
        keySigns: [
            {
                signType: 'External building issues',
                signDescription: '',
                signsImg: ['pest-entry-under-door.jpg', 'entry-point-1.jpg', 'damaged-wall.jpg', 'cracked-wall-cockroach.png', 'Mouse-Entry-Points.jpg']
            }
        ]
    },

    // Old equipment storage
    internal_5: {
        title: 'Equipment Storage - why keep it organized?',
        text: 'Old equipment stored around the restaurant attracts pests and gives them places to hide. When equipment is left outside, gets wet, or collects debris, it becomes a perfect home for pests. By remove or properly storing all unused equipment helps to keep pests away from the restaurant. Click Read more... button to learn why:',
        issueList: [
            {item_title: 'Unused equipment',
             item_text: 'Abandoned equipment outside creates perfect hiding spots and nesting areas for pests. This happens when old equipment is forgotten or waiting too long for disposal.'
            },
             {item_title: 'Wet equipment',
              item_text: 'Equipment exposed to rain collects water and creates damp conditions that pests love. This occurs when items are not properly covered or stored in sheltered areas.'
            },
            {item_title: 'Stacked equipment',
             item_text: 'Piles of equipment create dark spaces where pests can live and breed. This happens when items are stored without organization or proper spacing.'
            },
            {item_title: 'Dirty equipment',
             item_text: 'Equipment with food residue or debris attracts pests looking for food. This occurs when items aren\'t cleaned before storage.'
            },
            {item_title: 'Equipment near buildings',
              item_text: 'Equipment stored against walls creates pest highways into your restaurant. This happens when storage space is limited or items are placed without considering pest prevention.'
            },
        ],
        bannerImg: 'landscape-back-yard-banner.png',
        modalTitle: 'Old equipment storage',
        modalText: 'Common issues to check:',
        keySignsHeading: 'Examples',
        keySigns: [
            {
                signType: 'Old equipment storage',
                signDescription: '',
                signsImg: ['images.png', 'images.png', 'images.png']
            }
        ]
    },


    // READ MORE SECTION
    internal_6: {
        title: 'Pest prevention guide - exteriors',
        text: 'Here are key inspection points for exterior pest prevention, focusing on common restaurant pests:',
        issueList: [
            {item_title: 'Entry Points',
             item_text: 'Check for gaps around utility lines, pipes, and cables entering the building - mice can squeeze through holes as small as 6mm, rats need 12mm'
            },
            {item_title: 'Potential pest breeding areas',
              item_text: 'Check if there any wet areas or any old food present in dumpsters area. These are perfect for flies to breed. Keeping the area clean and dry stops this.'
            },
            {item_title: 'Check for any bad smells',
             item_text: 'Dirty dumpsters smell bad, and pests can smell these from far away. Regular cleaning keeps smells down.'},
             {item_title: 'Check for rats and mice nesting',
              item_text: 'Rats love messy waste areas and can use trash piles to get into buildings. A clean area gives them nowhere to hide or nest.'},
            {item_title: 'Help the restaurant to comply with Health and Safety regulations',
             item_text: 'Health inspectors check dumpster areas. Keeping them clean helps the restaurant to pass inspections and avoid fines.'
            },
            {item_title: "Help restaurant to protects the restaurant\’s reputation",
             item_text: 'Customers and passersby may notice an unclean, pest-infested dumpster area, which can harm the restaurant\’s image. A clean dumpster area shows customers the restaurant cares about cleanliness. This makes them trust the restaurant more.'
            }
        ],
        bannerImg: 'rat-droppings-2.webp',
        modalTitle: 'Pest prevention guide - exteriors',
        modalText: 'Here are key inspection points for exterior pest prevention, focusing on common restaurant pests:',
        keySignsHeading: 'What auditor should look for:',
        keySigns: [
            {
                signType: 'Droppings and Urine',
                signDescription: 'Dark, pellet-shaped droppings along walls and corners show rats or mice are active. Fresh droppings are dark and soft. A strong, musky, ammonia-like smell, especially in enclosed areas, indicates rodent urine and heavy rodent activity',
                signsImg: ['droppings-1.jpg', 'droppings-2.jpg', 'rat-droppings-4.jpg', 'rat-droppings.webp']
            },
            {
                signType: 'Grease Marks',
                signDescription: 'Dark, greasy marks on walls and entry points mean rats are regularly traveling these paths.',
                signsImg: ['main_rats-signs-rat-hole-product.jpg', 'grease-marks-rats-entry.jpg', 'rat-grease-marks.png']
            },

            {
                signType: 'Gnaw marks',
                signDescription: 'Rats or mice often chew on dumpster lids or edges. Gnaw marks on these surfaces are sign of rodent activity',
                signsImg: ['external-gnaw-mark-1.png','external-gnaw-mark-2.jpg', 'external-gnaw-mark-3.jpg']
            },

            {
                signType: 'Odors and stains',
                signDescription: 'Unusual odors or grease stains can attract pests. These are often left behind by pests marking their territory. ',
                signsImg: []
            },
            {
                signType: 'Entry Points',
                signDescription: 'Check for gaps around utility lines, pipes, and cables entering the building - mice can squeeze through holes as small as 6mm, rats need 12mm',
                signsImg: ['drain-rat.webp', 'entry-point-1.jpg', 'cracked-wall-cockroach.png']
            },
            {
                signType: 'Door Seals and Sweeps',
                signDescription: 'Inspect the condition of door seals and sweeps - worn or damaged seals create entry points for rodents and insects',
                signsImg: ['images.png', 'images.png', 'images.png']
            },
           
            {
                signType: 'Active Burrows',
                signDescription: 'Look for smooth-edged holes in the ground near walls - these are active rat burrows, often with droppings nearby.',
                signsImg: ['burrow-2.jpg', 'external-burrow.jpg', 'rat-holes.jpg']
            },
            {
                signType: 'Drain Flies',
                signDescription: 'Lots of small flies around drains suggest blocked or dirty drains that need cleaning',
                signsImg: ['drain-flies-eggs.webp', 'fruit-fly-fungus-gnat-drain-fly.jpg', 'drain-fly.png']
            },
            {
                signType: 'Maggots',
                signDescription: 'Maggots (fly larvae) around your restaurant are a serious sign of fly infestation and decay. These small, white, worm-like creatures show that flies are breeding nearby. In restaurants maggots are mostly found in or around dumpsters indicate rotting food and poor waste management. This happens when bins aren\'t cleaned regularly or waste sits too long. Maggots can be also found under old equipment, indicates hidden decay or moisture',
                signsImg: ['maggots.jpg', 'maggots-1.jpg', 'maggots-bin-.webp']
            },
            {
                signType: 'Cockroach Signs',
                signDescription: 'Look for cockroaches or their egg cases near warm, greasy areas like grease traps or dumpsters.',
                signsImg: ['egg-cases.jpg', 'egg-shell-2.jpg', 'egg-shell-3.webp']
            },

        ]
    },
}