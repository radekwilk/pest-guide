// DOM variables
const ratCard = document.getElementById('rat-card');
const cardBtn = document.querySelectorAll('.card-btn')

// modal for pest issues
const modalBody_PestModal = document.getElementById('modal-body-pests')
const mainHeading = document.getElementById('main-heading');
const closeRat = document.getElementById('close-rat');
const closeBtn = document.getElementById('close-btn');
const main = document.getElementById('main');
const ratModal = document.getElementById('rat-modal');
const seeMoreTitle = document.querySelector('.see-more-title');
const closeFooterBtnRat = document.getElementById('rat-footer-close-btn')

// modal for external issues:
const extModalHeader = document.getElementById('modal-header-external')
const extModalTitle = document.getElementById('modal-title-external')
const extModalText = document.getElementById('modal-text-external')
const extModalListContainer = document.getElementById('modal-list-issues-external')
const extModalFooterText = document.getElementById('modal-footer-text-external')
const extModalSection = document.getElementById('external-issues-modal')
const hoverImage = document.getElementById('hover-img')
const closeFooterBtn = document.getElementById('footer-close-btn')

// Image display Modal
const imgDisplayModal = document.getElementById('img-display-modal')
const closeImgModal = document.getElementById('close-btn-img')

// READ MORE button, for the LOOK FOR section:
const lookForBtn = document.getElementById("read-more-button-6")


// to track the clicks of info button clicks and the display of the image hoverImgStatus = {
   // Tracks the currently clicked button's ID btnClicked: 0,   
  // Tracks whether the image is currently displayed  displayed: false 
// };

// Object to track the state of each button
const hoverImgStatus = {
    buttons: {} // Stores the status of each button by ID (e.g., {1: true, 2: false})
};

const dumpster = document.querySelector('.exterior-dumpster');// this need to be changed later


// This class holds al the required info about the external issue to look for - this data is used to render information on the modals
const externalIssues = {
    // dumpster area    
    el_1: {
        title: 'Dumpster area - why keep it clean?',
        text: 'A clean dumpster area helps prevent pests around a restaurant. When this area is dirty or messy, it can attract unwanted pests, which can cause health problems and affect the business. Click the Read more... button to learn why a clean dumpster area is important for keeping pests away.',
        issueList: [
            {item_title: 'Stops feeding pests',
             item_text: 'Food scraps in dirty dumpsters attract rats, cockroaches, and flies. A clean area means no food for pests.'
            },
            {item_title: 'Prevents pest breeding',
              item_text: 'Wet areas and old food in dumpsters are perfect for flies to breed. Keeping the area clean and dry stops this.'
            },
            {item_title: 'Reduces bad smells',
             item_text: 'Dirty dumpsters smell bad, and pests can smell these from far away. Regular cleaning keeps smells down.'},
             {item_title: 'Blocks rats and mice',
              item_text: 'Rats love messy waste areas and can use trash piles to get into buildings. A clean area gives them nowhere to hide or nest.'},
            {item_title: 'Keeps pests out of the restaurant',
             item_text: 'Pests that live in dumpsters can easily move into the restaurant. A clean dumpster area makes this harder.'
            },
            {item_title: 'Complies with Health and Safety regulations',
             item_text: 'Health inspectors check dumpster areas. Keeping them clean helps the restaurant to pass inspections and avoid fines.'
            },
            {item_title: "Protects the restaurant\’s reputation",
             item_text: 'Customers and passersby may notice an unclean, pest-infested dumpster area, which can harm the restaurant\’s image. A clean dumpster area shows customers the restaurant cares about cleanliness. This makes them trust the restaurant more.'
            }
        ],
        bannerImg: 'external-2-long.png',
        modalTitle: 'Dumpster Area',
        modalText: 'Why keep the dumpster area clean? A clean dumpster area helps keep pests away from a restaurant. When dumpsters are dirty, they attract rats, flies, and cockroaches because of food waste and smells. These pests can spread germs and get into the restaurant, which is bad for business. By keeping dumpsters clean, with tight lids, and emptying them regularly, will stop pests from coming near the restaurant. This helps keep the restaurant safe and clean for customers. In summary, clean dumpster area will help with the following:',
        keySignsHeading: 'Examples:',
        keySigns: [
            {
                signType: 'Litter and food around the dumpster area',
                signDescription: 'Advice the restaurant to clean it as soon as possible',
                signsImg: ['external-img-6.png', 'external-img-1.png', 'food-source-2.jpg']
            }
        ]
    },
    // Landscaping
    el_2: {
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
    el_3: {
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
    el_4: {
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
    el_5: {
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
    el_6: {
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




// Event listeners for the buttons on the cards
cardBtn.forEach(btn => {

    btn.addEventListener('click', ()=> {
    //    main.classList.remove('show')
    //    main.classList.add('hide')
    //    mainHeading.classList.remove('show')
    //    mainHeading.classList.add('hide')

       hideMainContainer(main, mainHeading)
       ratModal.classList.remove('hide')
       ratModal.classList.add('show')

       let elID = btn.id
       let pestName = elID.split('-',2)
       pestName = pestName[0]

       // Create an instance and populate the list
       const listPopulator = new ListPopulator_pestsIssues('modal-body-pests')


       //get the heading for the selected pest issues
       listPopulator.getModalHeading(pestInfo, pestName)

      // go thrught the info for the pest related to the button which was clicked
       listPopulator.populateLookForList(pestInfo[`${pestName}_info`]['issueList'])

       // Populate the "What to Check" section
        listPopulator.populateWhatToCheck(
             pestInfo[`${pestName}_info`].whatToCheckHeading,
             pestInfo[`${pestName}_info`].whatToCheck[0].findings
         );

       
    })
    

})

// This is the button to close the modal for cards
closeRat.addEventListener('click', ()=> {

    showMainContainer(main, mainHeading)
    closeModal(ratModal)
})

closeBtn.addEventListener('click',()=> {
    showMainContainer(main, mainHeading)
    closeModal(extModalSection)
})

closeFooterBtn.addEventListener('click', (event) => {
    event.preventDefault()
    showMainContainer(main, mainHeading)
    closeModal(extModalSection)
})

closeFooterBtnRat.addEventListener('click',(event)=> {
    event.preventDefault()

    showMainContainer(main, mainHeading)
    closeModal(ratModal)
})

// function to close the modal
function closeModal(modalName) {
    modalName.classList.remove('show')
    modalName.classList.add('hide')
}

function showMainContainer(container, heading) {
    container.classList.remove('hide')
    container.classList.add('show')
    heading.classList.remove('hide')
    heading.classList.add('show')
}

function hideMainContainer(container, heading) {
    container.classList.remove('show')
    container.classList.add('hide')
    heading.classList.remove('show')
    heading.classList.add('hide')
}

// Function to toggle image visibility
function toggleImage(IDNumber) {
    // Initialize the status for this button if it hasn't been clicked before
    if (hoverImgStatus.buttons[IDNumber] === undefined) {
        hoverImgStatus.buttons[IDNumber] = false;
    }

    // Toggle the current button's status
    hoverImgStatus.buttons[IDNumber] = !hoverImgStatus.buttons[IDNumber];

    // Log the current state for debugging
    console.log(`Button ${IDNumber}: ${hoverImgStatus.buttons[IDNumber] ? 'Visible' : 'Hidden'}`);

}

// This event listener is listen for clicks on the external issues list info icon
document.querySelectorAll('.img-icon').forEach((el)=> {
   el.addEventListener('click',()=> {
    let elID = el.id
    let IDNumber = elID.split('-',2)
    IDNumber = IDNumber[1]
    
    toggleImage(IDNumber)

    // set the image path based on the number extracted from the clicked info button
    const newBackgroundImage = `url(../img/external/external-img-${IDNumber}.png)`; 
    const defaultBackgroundImage = ''; // Default background (empty or a different image)

    if(hoverImgStatus.buttons[IDNumber] === true) {
         hoverImage.classList.add('hover-img-js')
         hoverImage.style.backgroundImage = newBackgroundImage
        
    } else {
        hoverImage.classList.remove('hover-img-js')
        hoverImage.style.backgroundImage = defaultBackgroundImage
       
    }
     
    

    let displayElement = `issue-description-${IDNumber}`
    const seeMoreText = document.querySelector(`#see-more-text-${IDNumber}`);

    displayElement = document.getElementById(displayElement)

    const issueRender = new renderSeeMoreBox('issue-description',IDNumber)

    let issueNumber = `el_${IDNumber}`

    issueRender.getTheExternalIssue(externalIssues[issueNumber])

    addButton(seeMoreText, IDNumber)

     displayElement.classList.toggle('active')
   })
})

const addImage = (el) => {
    const img = document.createElement("img");

    // Set the src and alt attributes for the image
    img.src = "img/icons/read-more.png"; // Path to your image
    img.alt = "Info icon"; // Alternative text for the image
    img.className = "img-read-more"; // Optional: add a class for styling

    // Append the image to the end of the <p> element
    el.appendChild(img);
}

// this function will add the button to the element, giving it a class name and an ID (id is given as an argument)
const addButton = (el, id) => {
    const button = document.createElement("button");

   // Set the button text
    button.textContent = "Read more...";
    button.className = "read-more-button"; 
    button.id = `read-more-button-${id}`

    // Append the image to the end of the <p> element
    el.appendChild(button);
}


// Class to render the issue list
class IssueListRenderer {
    constructor(containerId) {
        // Get the container element where the list will be added
        this.container = document.getElementById(containerId);
    }

    renderTitleAndText(issueData) {
        const modalTitle = document.createElement('h4')
        modalTitle.className = 'modal-title'
        modalTitle.id = 'modal-title-external'

        const modalText = document.createElement('p')
        modalText.className = 'modal-text'
        modalText.id = 'modal-text-external'

        modalTitle.innerText = issueData.modalTitle
        modalText.innerText = issueData.modalText

        this.container.appendChild(modalTitle)
        this.container.appendChild(modalText)
    }

    // Method to generate the issue list as a UL with LI items
    renderIssueList(issueData, clickedID) {
        // Create a UL element
        const ulElement = document.createElement('ul');
              ulElement.className = 'modal-list'

        const ulKeyIssuesContainer = document.createElement('ul')
              ulKeyIssuesContainer.classList.add('modal-key-signs-list', 'modal-list')

        
        // Iterate over the issueList array in the issueData
        issueData.issueList.forEach(issue => {
            // Create LI element for each issue
            const liElement = document.createElement('li');

             // Create H6 element for the issue title
              const titleElement = document.createElement('h6');
        
             // Create and add the arrow icon inside the title
             const iconElement = document.createElement('img');
             iconElement.src = '/img/icons/arrow.png';
             iconElement.alt = 'Arrow icon';
             iconElement.className = 'list-icon';
             titleElement.appendChild(iconElement);
        
           // Add the text to the title element
            const titleText = document.createTextNode(issue.item_title);
            titleElement.appendChild(titleText);
            
            // Create P element for the issue text
            const textElement = document.createElement('p');
            textElement.textContent = issue.item_text;
            
            // Append H6 and P elements to the LI element
            liElement.appendChild(titleElement);
            liElement.appendChild(textElement);
            
            // Append the LI element to the UL
            ulElement.appendChild(liElement);
        });

        // iterate over the list of the key signs of pests
        issueData.keySigns.forEach(keySign => {
            // Create LI element for each issue
            const liElement = document.createElement('li');
            
            // Create H6 element for the issue title
            const titleElement = document.createElement('h6');
            titleElement.textContent = keySign.signType;
            
            // Create P element for the issue text
            const textElement = document.createElement('p');
            textElement.textContent = keySign.signDescription;
            
            // Append H6 and P elements to the LI element
            liElement.appendChild(titleElement);
            liElement.appendChild(textElement);



            // Check if signsImg array is not empty
            if (keySign.signsImg && keySign.signsImg.length > 0) {
                // Create a container for the images
                const imageContainer = document.createElement('div');
                imageContainer.className = 'image-container';

                // Loop through the first 3 images in the signsImg array
                keySign.signsImg.slice(0, 5).forEach(imgSrc => {
                    const imgElement = document.createElement('img');
                    const imgPath = `/img/external/${imgSrc}` //set the path of the image
                    imgElement.src = imgPath; // Set the source of the image
                    imgElement.alt = `Image for ${keySign.signType}`; // Add alt text
                    imgElement.className = 'sign-image'; // Add a class for styling

                    // Append the image to the container
                    imageContainer.appendChild(imgElement);
                });

            // Append the image container to the LI element
            liElement.appendChild(imageContainer);
        }

            // Append the LI element to the UL
            ulKeyIssuesContainer.appendChild(liElement);
        });

        // Create H2 element for the key signs heading
        const keySignsHeadingElement = document.createElement('h2');
        keySignsHeadingElement.className = 'module-key-signs-heading'
        keySignsHeadingElement.innerText = issueData.keySignsHeading

        // Append the UL to the specified container
        
            this.container.appendChild(ulElement);
            this.container.appendChild(keySignsHeadingElement)
            this.container.appendChild(ulKeyIssuesContainer)
        
       
       
    }


}

// This class is called when the READ MORE... buttons is clicked
class renderSeeMoreBox {
    constructor(seeMoreBox, boxId) {
        this.boxId = boxId
        this.infoBox = document.getElementById(`${seeMoreBox}-${boxId}`)
    }

    // Method to extract the title and text for the given external issue
    getTheExternalIssue(issueData) {
        const title = document.getElementById(`see-more-title-${this.boxId}`)
        const text = document.getElementById(`see-more-text-${this.boxId}`)
        

        title.innerText = issueData.title
        text.innerText = issueData.text
    }
}

// This function will add the background image to the modal header
const fillModalData = (img, header) => {
        const imgPath = '../img/'

        header.style.background = `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0, 0.4)), url(${imgPath}${img})`;
        header.style.backgroundSize = 'cover'
        header.style.backgroundPosition = 'center'
        header.style.backgroundRepeat = 'no-repeat'
}

// This is event listener for clicks on the Read-more buttons 
document.querySelectorAll('.see-more-text').forEach(para => {
    para.addEventListener('click', (event)=> {
        // get the ID of the parent paragraph, where the button is nested
        let paraID = para.id
        // get the ID number only
        let IDNumber = paraID.split('-',4)
         IDNumber = IDNumber[3]
        //  need the button ID to display the modal with correct information
        let btnID = `read-more-button-${IDNumber}`

        if(para.name) {
            let btnData = para.name 
        } else  {
            btnData = false
        }



        //check if button is clicked
        if (event.target && event.target.matches(`#${btnID}`)) {

            // this variable will give us element number needed to retrieve info from class with all info
            let issueNumber = `el_${IDNumber}`   
            
            // clear all the HTML in the MODAL body container
            extModalListContainer.innerHTML = ''
            
            // this class will run the method to list all of the possible issues
            const externalIssuesListGenerator = new IssueListRenderer('modal-list-issues-external')

            //get the modal title and the general text
            externalIssuesListGenerator.renderTitleAndText(externalIssues[issueNumber])

            //get the list of the possible external issues (ID number is to check if the button with ID == 6 was clicked )
            externalIssuesListGenerator.renderIssueList(externalIssues[issueNumber], btnData)

            // get the info about the image name for the given external issue
            const headerImg = externalIssues[issueNumber]['bannerImg'] 
            const title = externalIssues[issueNumber]['modalTitle']
            const modalText = externalIssues[issueNumber]['modalText']

            

            // use the fillModalData function to fill all the information on the Modal for external issues
            fillModalData(headerImg, extModalHeader)

            //extModalTitle.innerText = title
            //extModalText.innerText = modalText
            // extModalFooterText.innerText  = 'Test'

            hideMainContainer(main, mainHeading)

             extModalSection.classList.remove('hide')
             extModalSection.classList.add('show')
        }
    })
})


// This class will populate the modal based on the selected pest type:
class ListPopulator_pestsIssues {
    constructor(containerId) {
        this.container = document.getElementById(containerId)
    }

    populateLookForList(items) {
        //create the <ul> element
        const ul = document.createElement('ul')
        ul.className = 'list-issues'

        //loop through the items to create the <li> elements
        items.forEach(item => {
            const li = document.createElement('li')
            li.className = 'list-item'
            const h5 = document.createElement('h5')
            h5.className = 'list-title'
            h5.textContent = item.item_title
            li.appendChild(h5)

            // create paragraphs
            const p1 = document.createElement('p')
            const p2 = document.createElement('p')
            p1.className = 'list-text'
            p2.className = 'list-text'

            //issue span
            const issueSpan = document.createElement('span')
            issueSpan.className = 'issue'
            issueSpan.textContent = `Issue: `

            const issueText = document.createTextNode(item.issue)

            // Impact span
            const impactSpan = document.createElement('span')
            impactSpan.className = 'issue'
            impactSpan.textContent = `Impact: `

            const impactText = document.createTextNode(item.impact)

            // Append the Issue and Impact to paragraphs
            p1.appendChild(issueSpan)
            p1.appendChild(issueText)

            p2.appendChild(impactSpan)
            p2.appendChild(impactText)

            // Append the paragraphs to the <li>
            li.appendChild(p1)
            li.appendChild(p2)

            // Append the <ul>
            ul.appendChild(li)

        })
        // add the ul to the container
        this.container.appendChild(ul)
    }

    getModalHeading(data, pestName) {
        // Getting the modal title
        const h4_modal_title = document.createElement('h4')
        h4_modal_title.className = 'modal-title'
        h4_modal_title.textContent = data[`${pestName}_info`]['title']

         // Getting the modal main paragraph
         const p_modal_text = document.createElement('p')
         p_modal_text.className = 'modal-text'
         p_modal_text.textContent = data[`${pestName}_info`]['text']



        // Clear the container and add the <h4> and modal text to the container
        this.container.innerHTML = ''
        this.container.appendChild(h4_modal_title)
        this.container.appendChild(p_modal_text)

    }

    // *******************************************
     // New method for populating the "What to Check" section
    populateWhatToCheck(heading, findings) {
        // Create and append the heading
        const headingElement = document.createElement('h3');
        headingElement.textContent = heading;
        headingElement.className = 'module-key-signs-heading';
        this.container.appendChild(headingElement);

        // Loop through findings
        findings.forEach(section => {
            // Create a section for each "area"
            const sectionContainer = document.createElement('div');
            sectionContainer.className = 'findings-section';

            // Add area name as a subheading
            const areaHeading = document.createElement('h4');
            areaHeading.className = 'area-heading';
            areaHeading.textContent = section.area;
            sectionContainer.appendChild(areaHeading);

            // Create a list for the "findingList"
            const ul = document.createElement('ul');
            ul.className = 'modal-list';

            section.findingList.forEach(finding => {
                const li = document.createElement('li');
                li.className = 'finding-item';

                // Add "lookFor" in an <h4>
                const lookForHeading = document.createElement('h6');
                lookForHeading.className = 'finding-look-for';
                lookForHeading.textContent = finding.lookFor;
                li.appendChild(lookForHeading);

                // Add "description" in a <p>
                const descriptionParagraph = document.createElement('p');
                descriptionParagraph.className = 'finding-description';
                descriptionParagraph.textContent = finding.description;
                li.appendChild(descriptionParagraph);

                // Add example images
                if (finding.exampleImages && finding.exampleImages.length > 0) {
                    const imageContainer = this.createImageGallery(finding.exampleImages, 4);
                    li.appendChild(imageContainer);
                }

                // Append the <li> to the list
                ul.appendChild(li);
            });

            // Append the list to the section container
            sectionContainer.appendChild(ul);

            // Append the section container to the main container
            this.container.appendChild(sectionContainer);
        });
    }

    // Method to create an image gallery, rendering max 4 images
    createImageGallery(images, maxImages) {
        const galleryContainer = document.createElement('div');
        galleryContainer.className = 'image-container';

        images.slice(0, maxImages).forEach(imageUrl => {
            const img = document.createElement('img');
            img.className = 'sign-image';
            img.src = `/img/external/${imageUrl}`;
            img.alt = 'Example Image';
            img.loading = 'lazy'; // Improves performance for larger lists
            galleryContainer.appendChild(img);
        });

        return galleryContainer;
    }

    // ********************************************
}

// listen if the image in the external modal container was clicked
extModalListContainer.addEventListener('click', (event) => {
    zoomInImage('full-img-modal', event)
})



// listen if the image in the external modal container was clicked
modalBody_PestModal.addEventListener('click', (event) => {
    zoomInImage('full-img-modal', event)
})

// listen for clicks on the closing mark on the zoomed in image modal, close the modal when X mark is clicked
closeImgModal.addEventListener('click', ()=> {
    closeModal(imgDisplayModal)
})


// this function will ZOOM IN the clicked image  - one of the images clicked on the Modal Info 
function zoomInImage(container, event) {
    // Get the modal container where the clicked image will be displayed
    const modalImage = document.getElementById(container);

    if (event.target.tagName === 'IMG' && event.target.classList.contains('sign-image')) {
        const clickedImage = event.target; // The clicked image

        modalImage.src = clickedImage.src; // Use the source of the clicked image
       
         console.log(`You are genius Radek, this image was clicked on: ${clickedImage.src}`)

         imgDisplayModal.classList.remove('hide')
         imgDisplayModal.classList.add('show')
    }
}

lookForBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('The FOR FOR BUTTON was clicked')

        //  need the button ID to display the modal with correct information
        let btnID = lookForBtn.name   
        let IDNumber = 6   

            // this variable will give us element number needed to retrieve info from class with all info
            let issueNumber = `el_${IDNumber}`   
            
            // clear all the HTML in the MODAL body container
            extModalListContainer.innerHTML = ''
            
            // this class will run the method to list all of the possible issues
            const externalIssuesListGenerator = new IssueListRenderer('modal-list-issues-external')

            //get the modal title and the general text
            externalIssuesListGenerator.renderTitleAndText(externalIssues[issueNumber])

            //get the list of the possible external issues
            externalIssuesListGenerator.renderIssueList(externalIssues[issueNumber], btnID)

            // get the info about the image name for the given external issue
            const headerImg = externalIssues[issueNumber]['bannerImg'] 
            const title = externalIssues[issueNumber]['modalTitle']
            const modalText = externalIssues[issueNumber]['modalText']

            

            // use the fillModalData function to fill all the information on the Modal for external issues
            fillModalData(headerImg, extModalHeader)

            //extModalTitle.innerText = title
            //extModalText.innerText = modalText
            // extModalFooterText.innerText  = 'Test'

            hideMainContainer(main, mainHeading)

             extModalSection.classList.remove('hide')
             extModalSection.classList.add('show')
        })
    


