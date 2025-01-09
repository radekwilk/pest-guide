// This class holds al the required info about the pests - this data is used to render information on the cards and modals
const pestInfo = {
    // Rats   
    rat_info: {
        title: 'Rat related issues',
        text: 'Rats in a restaurant pose significant food safety risks, leading to serious health and hygiene concerns. Here are five key food safety issues related to the presence of rats:',
        issueList: [
            {item_title: 'Contamination of Food and Surfaces',
             issue: 'Rats carry a wide range of harmful pathogens, such as Salmonella, E. coli, and Listeria, which can be transferred to food, utensils, and food preparation surfaces through their fur, urine, feces, or saliva.',
             impact: 'Any food or surface that comes into contact with rats may become contaminated, leading to foodborne illnesses in customers.'
            },
            {item_title: 'Damage to Food Packaging',
              issue: 'Rats often chew through food packaging, compromising the integrity of sealed products and allowing contamination by bacteria and other harmful substances.',
              impact: 'This can lead to unsafe food being served to customers or stock being wasted, increasing costs and food safety risks.'
            },
            {item_title: 'Spread of Diseases',
                issue: 'Rats are known to spread diseases like Leptospirosis, Hantavirus, and Plague. These diseases can be transmitted through direct contact with rats or indirectly via contaminated food or surfaces.',
                impact: 'In a restaurant, this could result in severe health risks for both customers and staff, potentially leading to lawsuits or forced closures.'
              },
              {item_title: 'Infestation in Food Storage Areas',
                issue: 'Rats are attracted to food storage areas, where they can find food and shelter. Infestations can lead to spoilage and contamination of large quantities of food, as well as damage to storage facilities.',
                impact: 'This could result in significant food loss and operational disruptions, and the restaurant may fail health inspections or face legal penalties.'
              },
              {item_title: 'Violation of Health Codes and Regulations',
                issue: 'The presence of rats in a restaurant is a serious violation of food safety regulations and health codes. Regular inspections can result in citations, fines, or even closure if an infestation is found.',
                impact: 'Beyond the legal consequences, a restaurant\'s reputation could suffer, resulting in a loss of customers and revenue due to poor hygiene standards.'
              },
        ],
        bannerImg: 'external-2-long.png',
        conclusion: 'Addressing rat infestations and maintaining a clean, pest-free environment is critical for food safety. Proactive pest control measures, regular inspections, and strict adherence to sanitation practices are essential to prevent the health and safety risks associated with rats in a restaurant setting. Our goal as auditors it\'s to help stores to prevent pests issues.',
        whatToCheckHeading: 'What to check for rat activity:',
        whatToCheck: [
            {
                
                findings: [
                    {   
                        area: 'Physical evidence - droppings',
                        findingList: [
                            {
                                lookFor: 'Size and shape',
                                description: 'Rat droppings are typically 1/2 to 3/4 inch long. They are cylindrical, with blunt ends or pointed ends (roof rats)',
                                exampleImages: ['rat-droppings-1.jpg', 'rat-droppings-2.webp', 'rat-droppings-4.jpg', 'roof-droppings-3.png']
                              },
                              {
                                  lookFor: 'Color and Texture',
                                  description: 'Fresh droppings are usually dark brown or black and have a soft, moist texture. Older droppings turn grayish and become dry and brittle.',
                                  exampleImages: [ ]
                              },
                              {
                                  lookFor: 'Quantity',
                                  description: 'Rats produce a large number of droppings—30 to 50 per day. Droppings are often scattered in areas of activity like food storage, behind appliances, or along walls.',
                                  exampleImages: []
                              },
                              {
                                  lookFor: 'Location',
                                  description: 'Near food sources, e.g, kitchens and food storage areas. Rats tend to travel the same routes repeatedly. Then can also hide under furniture, behind equipment, or in basements or on top of the false ceiling panels.',
                                  exampleImages: []
                              },
                        ]
                    },
                    {   
                        area: 'Structural and Entry Points',
                        findingList: [
                            {
                                lookFor: 'Holes or gaps',
                                description: 'Inspect walls, ceilings, and floors for small holes or gaps (rats can squeeze through openings as small as 1/2 inch).',
                                exampleImages: ['entry-point-1.jpg', 'entry-point-2.jpg', 'entry-point-3.jpg']
                              },
                              {
                                  lookFor: 'Doors and windows',
                                  description: 'Check for gaps beneath doors or damaged weatherstripping',
                                  exampleImages: ['open-back-door.jpg', 'pest-entry-under-door.jpg']
                              },
                              {
                                  lookFor: 'Drains and pipes',
                                  description: 'Look for access points around pipes, vents, and drains.',
                                  exampleImages: ['entry-point-4.png', 'entry-point-1.jpg', 'drain-rat.webp']
                              },
                              {
                                  lookFor: 'Storage areas',
                                  description: 'Examine areas around storage rooms or dumpsters for signs of entry.',
                                  exampleImages: ['images.png', 'images.png', 'images.png']
                              },
                        ]
                    },
                    {
                        area: 'Areas of food and waste',
                        findingList: [
                            {
                                lookFor: 'Kitchen and food prep areas',
                                description: 'Inspect counters, shelves, and appliances for signs of contamination.',
                                exampleImages: ['images.png', 'images.png', 'images.png']
                              },
                              {
                                  lookFor: 'Waste disposal areas',
                                  description: 'Check dumpsters and waste bins for spills or easy access points for rodents.',
                                  exampleImages: ['images.png', 'images.png', 'images.png']
                              },
                              {
                                  lookFor: 'Dry Storage',
                                  description: 'Inspect food containers and shelves for chew marks.',
                                  exampleImages: ['images.png', 'images.png', 'images.png']
                              }
                        ]
                    },
                    {
                        area: 'Hidden Spaces',
                        findingList: [
                            {
                                lookFor: 'Behind and under equipment',
                                description: 'Look under refrigerators, fryers, and other heat generating units.',
                                exampleImages: ['images.png', 'images.png', 'images.png']
                              },
                              {
                                  lookFor: 'Ducts and ceiling panels',
                                  description: 'Examine false ceilings and air ducts - only visual check for possible entry points.',
                                  exampleImages: ['images.png', 'images.png', 'images.png']
                              },
                              {
                                  lookFor: 'Basement',
                                  description: 'Check for signs in less frequented areas',
                                  exampleImages: ['images.png', 'images.png', 'images.png']
                              },
                              {
                                lookFor: 'Electrical and boiler rooms',
                                description: 'Check for signs in electrical panels and around the boiler.',
                                exampleImages: ['images.png', 'images.png', 'images.png']
                            }
                        ]
                    },

                ]
                
                
            },

        ]
    },
    // Mice
    mice_info: {
        
    },
}
