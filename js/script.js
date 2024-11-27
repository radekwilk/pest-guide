// DOM variables
const ratCard = document.getElementById('rat-card');
const cardBtn = document.querySelectorAll('.card-btn')

const mainHeading = document.getElementById('main-heading');
const closeRat = document.getElementById('close-rat');
const closeBtn = document.getElementById('close-btn');
const main = document.getElementById('main');
const ratModal = document.getElementById('rat-modal');
const seeMoreTitle = document.querySelector('.see-more-title');

// modal for external issues:
const extModalHeader = document.getElementById('modal-header-external')
const extModalTitle = document.getElementById('modal-title-external')
const extModalText = document.getElementById('modal-text-external')
const extModalListContainer = document.getElementById('modal-list-issues-external')
const extModalFooterText = document.getElementById('modal-footer-text-external')
const extModalSection = document.getElementById('external-issues-modal')
const hoverImage = document.getElementById('hover-img')

const hoverImgStatus = {
    btnClicked: 0,
    displayed: false
} //we need this variable to control the toggle for the images

const dumpster = document.querySelector('.exterior-dumpster');// this need to be changed later


// This class holds al the required info about the external issue to look for - this data is used to render information on the modals
const externalIssues = {
    // dumpster area    
    el_1: {
        title: 'Dumpster area - why to keep it clean and maintained?',
        text: 'Ensuring that the external dumpster area of a restaurant is clean and well-maintained is critical for pest prevention. This area can easily attract pests if not managed properly, posing health, safety, and operational risks to the restaurant. Click on READ MORE button to learn about key reasons why maintaining a clean dumpster area is essential for pest prevention.',
        issueList: [
            {item_title: 'Reduces Food Sources for Pests',
             item_text: 'Waste food scraps and residues in a dumpster attract pests like rodents, cockroaches, flies, and ants. Keeping the area clean removes potential food sources, discouraging these pests from gathering.'
            },
            {item_title: 'Limits Breeding Grounds',
              item_text: 'Standing water, food remnants, and moist organic material in dumpsters or around them create ideal breeding grounds for flies and other pests. A clean and dry dumpster area minimizes these breeding opportunities.'
            },
            {item_title: 'Prevents Odor Buildup',
             item_text: 'Unclean dumpster areas often emit strong odors that attract pests from a distance. Regular cleaning reduces odor buildup, making the area less attractive to pests searching for food.'},
             {item_title: 'Mitigates Rodent Access Points',
              item_text: 'Rodents are highly attracted to waste areas but can also use trash buildup to access the restaurant. Keeping the dumpster area clean and removing clutter limits rodent entry points and makes the area less appealing for burrowing or nesting.'},
            {item_title: 'Reduces Pest Infestation Spread',
             item_text: 'Pests in the dumpster area can quickly spread to the kitchen and dining areas if they find easy access. Keeping the dumpster clean and pest-free creates a buffer zone, making it harder for pests to reach other areas of the restaurant.'
            },
            {item_title: 'Complies with Health and Safety Regulations',
             item_text: 'Many health codes require restaurants to maintain clean, pest-free dumpster areas. Failing to do so can lead to citations, fines, and reputational damage. Cleanliness ensures compliance and minimizes the risk of costly penalties.'
            },
            {item_title: "Protects the Restaurant\’s Reputation",
             item_text: 'Customers and passersby may notice an unclean, pest-infested dumpster area, which can harm the restaurant’s image. Maintaining cleanliness ensures that the restaurant presents a professional, hygienic appearance, supporting customer trust and confidence.'
            }
        ],
        bannerImg: 'external-2-long.png',
        modalTitle: 'Dumpster Area',
        modalText: 'Keeping the dumpster area clean and well-maintained is crucial for pest prevention in a restaurant. An unclean dumpster can attract pests like rats, flies, and cockroaches, drawn by food scraps and odors. These pests not only spread diseases but can also migrate into the restaurant, creating sanitation risks and damaging the restaurant\'s reputation. Regular cleaning, secure lids, and promptly removing trash limit access to food sources, helping to keep pests away from the restaurant premises. Proper maintenance of the dumpster area is essential for meeting health standards and providing a safe, hygienic dining environment.',
        keySignsHeading: 'What auditor should look for:',
        keySigns: [
            {
                signType: 'Droppings',
                signDescription: 'Look for rodent or insect droppings around the dumpster, as this can indicate active pests.'
            },

            {
                signType: 'Gnaw marks',
                signDescription: 'Rats or mice often chew on dumpster lids or edges. Gnaw marks on these surfaces are sign of rodent activity'
            },

            {
                signType: 'Odors and stains',
                signDescription: 'Unusual odors or grease stains can attract pests. These are often left behind by pests marking their territory. '
            },
            {
                signType: 'Nest materials',
                signDescription: 'Rodents may create nests in secluded areas around dumpsters. Look for materials like shredded paper, leaves, or fabrics nearby.'
            },

        ]
    },
    // Landscaping
    el_2: {
        title: 'Landscaping - why to keep it clean and maintained?',
        text: 'Ensuring that the landscaping around a restaurant is clean and well-maintained is vital for pest prevention. Landscaping areas, like gardens, lawns, and external grounds, can harbor pests if not properly cared for, leading to potential health and operational issues for the restaurant. Here are the ten most important reasons why landscaping maintenance is critical for pest prevention:',
        issueList: [
            {item_title: 'Eliminates hiding spots for pests',
             item_text: 'Overgrown plants, shrubs, and grass provide ideal hiding places for pests like rodents, insects, and other vermin. Regular trimming and maintenance reduce these hiding spots, making it less likely that pests will congregate near the restaurant.'
            },
            {item_title: 'Prevents pest habitats near entry points',
                item_text: 'Trees, bushes, and tall grass close to the restaurant\’s entry points can act as bridges for pests to enter the building. Proper landscaping maintenance removes these potential pathways for pests to access the restaurant.'
            },
            {item_title: 'Reduces standing water',
             item_text: 'Poorly maintained landscaping with stagnant water in plant containers, ponds, or areas of poor drainage can attract flies and other pests. Ensuring proper drainage and removing standing water prevents these breeding grounds.'},
             {item_title: 'Reduces food sources for pests',
              item_text: 'Landscaping that are not cleaned, waste accumulates and can attract pests such as flies, rodents, and cockroaches. Properly managing food waste and choosing non-fruit-bearing plants reduces potential food sources for pests.'},
            {item_title: 'Improves pest control efficiency',
             item_text: 'When the landscaping is clean and well-maintained, it\’s easier for pest control professionals to inspect and treat the area effectively. An overgrown or cluttered landscape makes it harder to spot signs of pest activity and can lead to less effective pest control treatments.'
            },
            {item_title: 'Enhances the restaurant\'s reputation',
             item_text: 'A well-maintained exterior, including the landscaping, is part of the restaurant\'s overall image. If the landscaping is clean and neat, it indicates to customers that the restaurant is conscientious about hygiene and pest prevention, improving customer trust and satisfaction.'
            },
        ],
        bannerImg: 'landscape-long.png',
        modalTitle: 'Landscaping',
        modalText: 'Keeping the landscape around a restaurant clean and well-maintained is essential for effective pest prevention. Overgrown plants, debris, and standing water can attract pests like rodents, insects, and birds, which may eventually enter the restaurant. Untrimmed bushes and dense vegetation offer shelter and nesting sites, while unkempt areas can become breeding grounds for flies and other insects. Regular landscaping, including trimming plants, removing debris, and preventing water accumulation, helps to reduce these attractants, creating a less inviting environment for pests and ensuring a safer, more sanitary setting around the restaurant.',
        keySignsHeading: 'What auditor should look for:',
        keySigns: [
            {
                signType: 'Burrows and holes',
                signDescription: 'Look for small burrows, especially near the building foundation, which could indicate rodents or other burrowing pests.'
            },

            {
                signType: 'Gnaw marks',
                signDescription: 'Rodents may chew on outdoor furniture, planters, or building materials. Check for gnaw marks on nearby wood, wiring, or plants.'
            },

            {
                signType: 'Droppings',
                signDescription: 'Search for droppings along the pathways, under bushes, and around outdoor waste bins, which can indicate the presence of rodents or other pests.  '
            },
            {
                signType: 'Standing water',
                signDescription: 'Flies breed in standing water. Check for water build up in flower pots, clogged gutters, blocked drains or any other standing water around the restaurant.'
            },

            {
                signType: 'Nests',
                signDescription: 'Look in bushes and around old equipment which might be left outdoors. It can provide shelter and harbouring conditions for rodents.'
            },
            {
                signType: 'Food sources',
                signDescription: 'Food debris, spilled food or litter can attract pests. Advice proper cleanliness if issues observed. '
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
                        area: 'Structural and Entry Points',
                        findingList: [
                            {
                                lookFor: 'Holes or gaps',
                                description: 'Inspect walls, ceilings, and floors for small holes or gaps (rats can squeeze through openings as small as 1/2 inch).',
                                exampleImages: ['img1.jpg', 'img2.jpg', 'img3.jpg']
                              },
                              {
                                  lookFor: 'Doors and windows',
                                  description: 'Check for gaps beneath doors or damaged weatherstripping',
                                  exampleImages: ['img1.jpg', 'img2.jpg', 'img3.jpg']
                              },
                              {
                                  lookFor: 'Drains and pipes',
                                  description: 'Look for access points around pipes, vents, and drains.',
                                  exampleImages: ['img1.jpg', 'img2.jpg', 'img3.jpg']
                              },
                              {
                                  lookFor: 'Storage areas',
                                  description: 'Examine areas around storage rooms or dumpsters for signs of entry.',
                                  exampleImages: ['img1.jpg', 'img2.jpg', 'img3.jpg']
                              },
                        ]
                    },
                    {
                        area: 'Areas of food and waste',
                        findingList: [
                            {
                                lookFor: 'Kitchen and food prep areas',
                                description: 'Inspect counters, shelves, and appliances for signs of contamination.',
                                exampleImages: ['img1.jpg', 'img2.jpg', 'img3.jpg']
                              },
                              {
                                  lookFor: 'Waste disposal areas',
                                  description: 'Check dumpsters and waste bins for spills or easy access points for rodents.',
                                  exampleImages: ['img1.jpg', 'img2.jpg', 'img3.jpg']
                              },
                              {
                                  lookFor: 'Dry Storage',
                                  description: 'Inspect food containers and shelves for chew marks.',
                                  exampleImages: ['img1.jpg', 'img2.jpg', 'img3.jpg']
                              }
                        ]
                    },
                    {
                        area: 'Hidden Spaces',
                        findingList: [
                            {
                                lookFor: 'Behind and under equipment',
                                description: 'Look under refrigerators, fryers, and other heat generating units.',
                                exampleImages: ['img1.jpg', 'img2.jpg', 'img3.jpg']
                              },
                              {
                                  lookFor: 'Ducts and ceiling panels',
                                  description: 'Examine false ceilings and air ducts - only visual check for possible entry points.',
                                  exampleImages: ['img1.jpg', 'img2.jpg', 'img3.jpg']
                              },
                              {
                                  lookFor: 'Basement',
                                  description: 'Check for signs in less frequented areas',
                                  exampleImages: ['img1.jpg', 'img2.jpg', 'img3.jpg']
                              },
                              {
                                lookFor: 'Electrical and boiler rooms',
                                description: 'Check for signs in electrical panels and around the boiler.',
                                exampleImages: ['img1.jpg', 'img2.jpg', 'img3.jpg']
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
        main.classList.remove('show')
       main.classList.add('hide')
       mainHeading.classList.remove('show')
       mainHeading.classList.add('hide')
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

       
    })
    

})

// This is the button to close the modal for cards
closeRat.addEventListener('click', ()=> {
    main.classList.remove('hide')
    main.classList.add('show')
    mainHeading.classList.remove('hide')
    mainHeading.classList.add('show')
    ratModal.classList.remove('show')
    ratModal.classList.add('hide')
})

closeBtn.addEventListener('click',()=> {
    extModalSection.classList.remove('show')
    extModalSection.classList.add('hide')
})

// This event listener is listen for clicks on the external issues list info icon
document.querySelectorAll('.img-icon').forEach((el)=> {
   el.addEventListener('click',()=> {
    let elID = el.id
    let IDNumber = elID.split('-',2)
    IDNumber = IDNumber[1]
    

    // change the status of the hoverImg variable & display or hide the hover image accordingly
    if (hoverImgStatus.btnClicked === 0) {
        hoverImgStatus.btnClicked = IDNumber
        hoverImgStatus.displayed = true
    } else if(hoverImgStatus.btnClicked > 0 && hoverImgStatus.btnClicked === IDNumber) {
        hoverImgStatus.btnClicked = 0
        hoverImgStatus.displayed = false
    } else if(hoverImgStatus.btnClicked > 0 && hoverImgStatus.btnClicked !== IDNumber) {
        hoverImgStatus.btnClicked = IDNumber
        hoverImgStatus.displayed = true
    }
    
    // set the image path based on the number extracted from the clicked info button
    const newBackgroundImage = `url(../img/external/external-img-${IDNumber}.png)`; 
    const defaultBackgroundImage = ''; // Default background (empty or a different image)
     

    //  depending on the status of the hoverImage, class hove-img-js would be added or removed
     if(hoverImgStatus.displayed) {
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
    renderIssueList(issueData) {
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
            titleElement.textContent = issue.item_title;
            
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

            //get the list of the possible external issues
            externalIssuesListGenerator.renderIssueList(externalIssues[issueNumber])

            // get the info about the image name for the given external issue
            const headerImg = externalIssues[issueNumber]['bannerImg'] 
            const title = externalIssues[issueNumber]['modalTitle']
            const modalText = externalIssues[issueNumber]['modalText']

            

            // use the fillModalData function to fill all the information on the Modal for external issues
            fillModalData(headerImg, extModalHeader)

            //extModalTitle.innerText = title
            //extModalText.innerText = modalText
            // extModalFooterText.innerText  = 'Test'

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
}