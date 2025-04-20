
// header


fetch('Header.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('Header-placeholder').innerHTML = data

    })
    .catch(error => console.log('Error in loading Header' + error))



// footer  

fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));


//  hero-section-formdetals and model(popup from) details
  async function formDataSubmit(event) {
    event.preventDefault()
    loaderFN()

    var formdata = new FormData(event.target)
    var formdetails = {}
    for (var [key, value] of formdata)
        formdetails[key] = value
    // console.log(form)
  await  fetch('https://ampexedu-backend-server.onrender.com/usersdetails', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },

        body: JSON.stringify(formdetails),

    })
        //response from server
        
        .then(res => res.json())
        .then(data => {
          loader.innerHTML="Enroll Now"
          spinner.style.display="none"

            console.log(data, "data submitted success")

            Swal.fire({
                title: "Thank You!",
                text: "We Will Get Back to You Soon!",
                icon: "success",
                confirmButtonColor: "#3b82f6" ,

            });
            // reset form after submit
             document.getElementById('heroform').reset()

            

        })
        //error from server during submitting data
        .catch(err => {
            console.log(err, "failed to submit data")
            Swal.fire({
                title: "Enter a Valid Details",
                text: "Something went wrong!",
                icon: "error",
                timer: "10000",
                confirmButtonColor: "#3b82f6" ,
            });

        })


}
function modelformDataSubmit(event) {
    event.preventDefault()
     uiLoaderFN()

    var formdata = new FormData(event.target)
    var formdetails = {}
    formdata.forEach((value, key) => {
        formdetails[key] = value
    })
    console.log(formdetails)
    fetch('https://ampexedu-backend-server.onrender.com/usersdetails', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },

        body: JSON.stringify(formdetails),

    })
        //response from server
        .then(res => res.json())
        .then(data => {
            uiloader.innerHTML=" Request Course Details"
            uispinner.style.display="none"
  
            console.log(data, "data submitted success")
            Swal.fire({
                title: "Thank You!",
                text: "We Will Get Back to You Soon!",
                icon: "success",
                confirmButtonColor: "#3b82f6" ,

            });
    //resetting form after submit
    document.getElementById('modelform').reset()


  
        })
        //error from server during submitting data
        .catch(err => {
            console.log(err, "failed to submit data")

            Swal.fire({
                title: "Enter a Valid Details",
                text: "Something went wrong!",
                icon: "error",
                timer: "10000",
                confirmButtonColor: "#ff6600" 
            });
        })

}


// Menubar-header section
function menubar() {
    var x = document.getElementById('navlinks').classList.toggle('active')
    console.log(x)
    if (x == true) {
        document.getElementById('menuIcon').innerHTML = '✖'
    }
    else {
        document.getElementById('menuIcon').innerHTML = '☰'

    }

}
document.querySelectorAll('#navlinks a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navlinks').classList.remove('active')
        document.getElementById('menuIcon').innerHTML = '☰'
        console.log(y)
    });
});



// banner-section counter
// stats-list 
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stats-value span");
    let started = false;

    function startCounter() {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const increment = target / 120; // Adjust speed dynamically

            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCount, 30);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }

    function handleScroll() {
        const bannerSection = document.querySelector(".banner");
        const bannerPosition = bannerSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (bannerPosition < screenPosition && !started) {
            startCounter();
            started = true;
        }
    }

    window.addEventListener("scroll", handleScroll);
});



// form submit button loader
var loader=  document.getElementById("loader")
var  spinner = document.getElementById("spinner")

function loaderFN(){
     spinner.style.display="inline-block"
    loader.innerHTML="Loading..."
}
// model popup form loader
   var uiloader=  document.getElementById("ui-loader")
    var  uispinner = document.getElementById("ui-spinner")
function uiLoaderFN(){
    
   uiloader.innerHTML="Loading..."
   uispinner.style.display="inline-block"
}