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
const hoverImageInternal = document.getElementById('hover-img-internal')
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

}

// This event listener is listen for clicks on the external issues list info icon
document.querySelectorAll('.img-icon').forEach((el)=> {
   el.addEventListener('click',()=> {
    let elID = el.id
    let IDNumber = elID.split('-',2)
    IDNumber = IDNumber[1]
    let idName = elID.split('-',1)
    const externalImagePath = 'url(../img/external/external-img'
    const internalImgPath = 'url(../img/internal/internal-img'
    
    toggleImage(IDNumber)

    const externalImage = setImagePath(IDNumber, externalImagePath)
    const internalImage = setImagePath(IDNumber, internalImgPath)
     
    if(idName == "info") {
        hoverStatus_toggleClass(IDNumber, externalImage.imgPath, externalImage.defaultImg )
        displayCheckPointSummary(IDNumber,'issue-description', 'see-more-title',  'see-more-text','el', externalIssues)
        
    } else {
        hoverStatus_toggleClass(IDNumber, internalImage.imgPath, internalImage.defaultImg )
        displayCheckPointSummary(IDNumber,'internal-issue-description', 'see-more-internal-title', 'see-more-internal-text','internal', InternalIssues)
    }
   
   })
})

// This is the function which return the path to the desired picture, with defined ID number (used in the internal and external info-buttons)
const setImagePath = (idNumber, imgPath) => {
    // set the image path based on the number extracted from the clicked info button
    const newBackgroundImage = `${imgPath}-${idNumber}.png)`; 
    const defaultBackgroundImage = ''; // Default background (empty or a different image)

    return imgPath = {
        imgPath: newBackgroundImage,
        defaultImg: defaultBackgroundImage
    }
  
}

// This function is used to add or remove the class to the external or internal picture
const hoverStatus_toggleClass = (id, imgPath, defaultImgPath) => {
    if(hoverImgStatus.buttons[id] === true) {
        hoverImage.classList.add('hover-img-js')
       //  hoverImage.style.backgroundImage = newBackgroundImage
           hoverImage.style.backgroundImage = imgPath
       
   } else {
       hoverImage.classList.remove('hover-img-js')
       // hoverImage.style.backgroundImage = defaultBackgroundImage
       hoverImage.style.backgroundImage = defaultImgPath
   }
}

const displayCheckPointSummary = (id, elName_issueDescription, elTitle, elText, elName, className) => {

    // let displayElement = `issue-description-${IDNumber}`
    let displayElement = `${elName_issueDescription}-${id}`
    // const seeMoreText = document.querySelector(`#see-more-text-${IDNumber}`);
    const seeMoreText = document.querySelector(`#${elText}-${id}`);

    displayElement = document.getElementById(displayElement)

    const issueRender = new renderSeeMoreBox(elName_issueDescription,id)

    // let issueNumber = `el_${IDNumber}`
    let issueNumber = `${elName}_${id}`

    // issueRender.getTheExternalIssue(externalIssues[issueNumber])
    issueRender.getTheExternalIssue(className[issueNumber], elTitle, elText)

    // addButton(seeMoreText, IDNumber)
    addButton(seeMoreText, id)

     displayElement.classList.toggle('active')
}

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

    if(el.dataset.location == 'external') {
        // this is for the button in the external section
        button.id = `read-more-button-${id}`
    } else {
        // This is for the button in the internal section
        button.id = `read-moreInt-button-${id}`
    }

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
   // renderIssueList(issueData, clickedID) {
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
    getTheExternalIssue(issueData, el_title, el_text) {
        // const title = document.getElementById(`see-more-title-${this.boxId}`)
        // const text = document.getElementById(`see-more-text-${this.boxId}`)
        const title = document.getElementById(`${el_title}-${this.boxId}`)
        const text = document.getElementById(`${el_text}-${this.boxId}`)

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
        //initial value of the button ID number
        let btnID
        let IDNumber
        let location = para.dataset.location  // if button on the external location clicked, LOCATION = external, if for internal, LOCATION = internal
        // get the ID of the parent paragraph, where the button is nested
        let paraID = para.id
        // get the ID number only
        //Determine if external or external issues are checked
        if(location == 'external') {
            //let btnData = para.name 
           
            IDNumber = paraID.split('-',4)
            IDNumber = IDNumber[3]
           //  need the button ID to display the modal with correct information
           btnID = `read-more-button-${IDNumber}`
           
        } else  {
           // btnData = false
            
            IDNumber = paraID.split('-',5)
            IDNumber = IDNumber[4]
           //  need the button ID to display the modal with correct information
           btnID = `read-moreInt-button-${IDNumber}`
           
        }


        //check if button is clicked
        if (event.target && event.target.matches(`#${btnID}`)) {

            // this variable will give us element number needed to retrieve info from class with all info
            //let issueNumber = `el_${IDNumber}`
            let issueNumber
            
            if(location == 'external') {
                issueNumber = `el_${IDNumber}`
            } else if(location == 'internal') {
                issueNumber = `internal_${IDNumber}`
            }
            
            // clear all the HTML in the MODAL body container
            extModalListContainer.innerHTML = ''
            
            // this class will run the method to list all of the possible issues
            const externalIssuesListGenerator = new IssueListRenderer('modal-list-issues-external')

            //get the modal title and the general text, based on the location (internal or external)

            if(location == 'external') {
                //get the modal title and the general text
                externalIssuesListGenerator.renderTitleAndText(externalIssues[issueNumber])
            } else if(location == 'internal') {
                //get the modal title and the general text
                externalIssuesListGenerator.renderTitleAndText(InternalIssues[issueNumber])
            }
  
            let headerImg 
            let title
            let modalText


            if(location == 'external') {
                externalIssuesListGenerator.renderIssueList(externalIssues[issueNumber])
                headerImg = externalIssues[issueNumber]['bannerImg'] 
                title = externalIssues[issueNumber]['modalTitle']
                modalText = externalIssues[issueNumber]['modalText']
            
            } else if(location == 'internal') {
                externalIssuesListGenerator.renderIssueList(InternalIssues[issueNumber])
                headerImg = InternalIssues[issueNumber]['bannerImg'] 
                title = InternalIssues[issueNumber]['modalTitle']
                modalText = InternalIssues[issueNumber]['modalText']
                
            }

            // use the fillModalData function to fill all the information on the Modal for external issues
            fillModalData(headerImg, extModalHeader)

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

//This is when we click the button 
lookForBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('The FOR FOR BUTTON was clicked')

        //  need the button ID to display the modal with correct information
        let btnID = lookForBtn.name   
        console.log(`The anf the LOOK FOR BTN btnName: ${btnID}`)
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
            //externalIssuesListGenerator.renderIssueList(externalIssues[issueNumber], btnID)
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

            hideMainContainer(main, mainHeading)

             extModalSection.classList.remove('hide')
             extModalSection.classList.add('show')
        })
    