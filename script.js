document.addEventListener("DOMContentLoaded", function () {
    const aboutDescription = document.getElementById("about-description");

    // Get the "About Us" link in the navigation
    const aboutLink = document.querySelector('nav a[href="#about"]');

    // Add a click event listener to the "About Us" link
    aboutLink.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default link behavior (scrolling to the section)

        // Toggle the visibility of the description
        if (aboutDescription.style.display === "none") {
            aboutDescription.style.display = "block";
        } else {
            aboutDescription.style.display = "none";
        }
    });
});

const facilities = [
    {
        name: "1.",
        description: " Full AC Study Hall.",
    },
    {
        name: "2.",
        description: " RO water.",
    },
    {
        name: "3.",
        description: " 24*7 Free WiFi Access .",
    },
    {
        name: "4.",
        description: "CCTV for Security Purpose .",
    },
    {
        name: "5.",
        description: "Hindi, English, News Paper and Magazines.",
    },
    {
        name: "6.",
        description: "Faculty of Monthly Current Affairs.",
    },
    {
        name: "7.",
        description: "Separated Cabin/Row for Girls .",
    },
    {
        name: "8.",
        description: "Suitable and Peaceful environment for Study.",
    },
    {
        name: "9.",
        description: "Two days Free trial classes.",
    },
    // Add more facility details as needed
];

const showFacilityDetailsButton = document.getElementById("show-facility-details");
const facilityDetailsTable = document.getElementById("facility-details");

// Event listener for the "Show Facility Details" button
showFacilityDetailsButton.addEventListener("click", function () {
    if (facilityDetailsTable.style.display === "none" || facilityDetailsTable.style.display === "") {
        // Build and display the facility details table
        buildFacilityDetailsTable(facilities);
        facilityDetailsTable.style.display = "table";
        showFacilityDetailsButton.textContent = "Hide Facility Details";
    } else {
        // Hide the facility details table
        facilityDetailsTable.style.display = "none";
        showFacilityDetailsButton.textContent = "Show Facility Details";
    }
});

// Function to build the facility details table
function buildFacilityDetailsTable(facilityArray) {
    // Create the table header
    let tableHTML = `
        <thead>
            <tr>
                <th>No.</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
    `;

    // Create table rows with facility details
    for (const facility of facilityArray) {
        tableHTML += `
            <tr>
                <td>${facility.name}</td>
                <td>${facility.description}</td>
            </tr>
        `;
    }

    // Close the table
    tableHTML += `</tbody>`;

    // Set the generated HTML as the innerHTML of the table
    facilityDetailsTable.innerHTML = tableHTML;
}

const batchTimings = [
    {
        batch: "Batch 1",
        timings: " All 7 days, 6:00 AM - 12:00 PM",
        fee: " Rs.399",
    },
    {
        batch: "Batch 2",
        timings: " All 7 days, 12:00 PM - 6:00 PM",
        fee: " Rs.449",
    },
    {
        batch: "Batch 3",
        timings: " All 7 days, 6:00 PM - 11:00 PM",
        fee: " Rs.299",
    },
    // Add more batch timing details as needed
];

const showBatchTimingsButton = document.getElementById("show-batch-timings");
const batchTimingsTable = document.getElementById("batch-timings-table");

// Event listener for the "Show Batch Timings" button
showBatchTimingsButton.addEventListener("click", function () {
    if (batchTimingsTable.style.display === "none" || batchTimingsTable.style.display === "") {
        // Build and display the batch timing details table
        buildBatchTimingsTable(batchTimings);
        batchTimingsTable.style.display = "table";
        showBatchTimingsButton.textContent = "Hide Batch Timings";
    } else {
        // Hide the batch timing details table
        batchTimingsTable.style.display = "none";
        showBatchTimingsButton.textContent = "Show Batch Timings";
    }
});

// Function to build the batch timing details table
function buildBatchTimingsTable(batchTimingsArray) {
    // Create the table header
    let tableHTML = `
        <thead>
            <tr>
                <th>Batch</th>
                <th>Timings</th>
                <th>Batch Fee</th>
            </tr>
        </thead>
        <tbody>
    `;

    // Create table rows with batch timing details
    for (const batchTiming of batchTimingsArray) {
        tableHTML += `
            <tr>
                <td>${batchTiming.batch}</td>
                <td>${batchTiming.timings}</td>
                <td>${batchTiming.fee}</td>
            </tr>
        `;
    }

    // Close the table
    tableHTML += `</tbody>`;

    // Set the generated HTML as the innerHTML of the table
    batchTimingsTable.innerHTML = tableHTML;
}
document.addEventListener("DOMContentLoaded", function () {
    const showStudentDetailsButton = document.getElementById("show-student-details");
    const studentDetailsTable = document.getElementById("student-details");

    const sampleStudents = [
        {
            name: "amit yadav",
            seat: 1,
            batch: [1],
        },
        {
            name: "aman raj",
            seat: 1,
            batch: [2],
        },
        {
            name: "amit yadav",
            seat: 1,
            batch: [1],
        },
        {
            name: "anil kumar",
            seat: 2,
            batch: [2],
        },
        {
            name: "arhit dubey",
            seat: 2,
            batch: [1],
        },
        {
            name: "sandeep yadav",
            seat: 3,
            batch: [1],
        },
        {
            name: "rajan kumar",
            seat: 3,
            batch: [3],
        },
        {
            name: "arjun kumar",
            seat: 3,
            batch: [2],
        },
        {
            name: "pranjal pal",
            seat: 4,
            batch: [2],
        },
        {
            name: "lakki pal",
            seat: 5,
            batch: [2],
        },
        {
            name: "shivam pal",
            seat: 6,
            batch: [2],
        },
        {
            name: "rishabh",
            seat: 7,
            batch: [1,2],
        },
        {
            name: "sagar Ag.",
            seat: 9,
            batch: [1,2],
        },
        {
            name: "nitesh yadav",
            seat: 10,
            batch: [2],
        },
        {
            name: "chandra prakash",
            seat: 10,
            batch: [3],
        },
        {
            name: "ashish kumar ",
            seat: 11,
            batch: [1],
        },
        {
            name: "ramjeet yadav",
            seat: 11,
            batch: [3],
        },
        {
            name: "rishu singh",
            seat: 14,
            batch: [2],
        },
        {
            name: "vijay shankar",
            seat: 15,
            batch: [1],
        },
        {
            name: "vishal  yadav",
            seat: 15,
            batch: [2],
        },
        {
            name: "krishna yadav",
            seat: 16,
            batch: [1],
        },
        {
            name: "rohit kumar",
            seat: 16,
            batch: [2],
        },
        {
            name: "ayush yadav",
            seat: 17,
            batch: [1],
        },
        {
            name: "kishan yadav",
            seat: 17,
            batch: [2],
        },
        {
            name: "suraj maurya",
            seat: 18,
            batch: [1,2],
        },
        {
            name: "anil kumar",
            seat: 18,
            batch: [3],
        },
        {
            name: "ashish maurya",
            seat: 19,
            batch: [1,2],
        },
        {
            name: "aryan",
            seat: 20,
            batch: [1],
        },
        {
            name: "satyam kumar",
            seat: 21,
            batch: [3],
        },
        {
            name: "ajay yadav",
            seat: 22,
            batch: [1],
        },
        {
            name: "subham sa.",
            seat: 22,
            batch: [2],
        },
        {
            name: "ashish yadav",
            seat: 23,
            batch: [1],
        },
        {
            name: "sandeep yadav",
            seat: 24,
            batch: [1,2],
        },
        {
            name: "kanchan",
            seat: 25,
            batch: [2],
        },
        {
            name: "riya",
            seat: 25,
            batch: [3],
        },
        {
            name: "kiran yadav",
            seat: 26,
            batch: [1,2],
        },
        {
            name: "priya yadav",
            seat: 27,
            batch: [1],
        },
        {
            name: "rahua",
            seat: 28,
            batch: [ ],
        },
        {
            name: "golu agr.",
            seat: 29,
            batch: [1,2],
        },
        {
            name: "harsh tivari",
            seat: 30,
            batch: [1],
        },
        {
            name: "vikash yadav",
            seat: 30,
            batch: [3],
        },
        {
            name: "babloo gautam",
            seat: 31,
            batch: [1,2],
        },
        {
            name: "anand",
            seat: 32,
            batch: [2],
        },
        {
            name: "dharm raj ",
            seat: 32,
            batch: [3],
        },
       
    ];

    function buildStudentDetailsTable(studentArray) {
        let tableHTML = `
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Seat No.</th>
                    <th>Batch</th>
                </tr>
            </thead>
            <tbody>
        `;

        studentArray.forEach(student => {
            const batchString = student.batch.join(', ');

            tableHTML += `
                <tr>
                    <td>${student.name}</td>
                    <td>${student.seat}</td>
                    <td>${batchString}</td>
                
                </tr>
            `;
        });

        tableHTML += `</tbody>`;
        studentDetailsTable.innerHTML = tableHTML;
    }

    showStudentDetailsButton.addEventListener("click", function () {
        if (studentDetailsTable.style.display === "none") {
            buildStudentDetailsTable(sampleStudents);
            studentDetailsTable.style.display = "block";
            showStudentDetailsButton.textContent = "Hide Student Details";
        } else {
            studentDetailsTable.style.display = "none";
            showStudentDetailsButton.textContent = "Show Student Details";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const events = document.querySelectorAll(".event");
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.querySelector(".close");

    events.forEach(function (event) {
        event.addEventListener("click", function () {
            const image = event.querySelector("img");
            modalImage.src = image.src;
            modal.style.display = "block";
            document.body.classList.add("modal-open");
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    });

    // Add this code to close the modal when clicking outside the image
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
        }
    });
});

// JavaScript for "Back" button in image modal
document.addEventListener("DOMContentLoaded", function () {
    const backToSiteButton = document.getElementById("backToSite");
    const modal = document.getElementById("imageModal");

    backToSiteButton.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        // You can add additional logic here to navigate back to the website's main page.
    });
});
