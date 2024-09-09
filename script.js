
let cvOutput = document.getElementById("cvOutput");
let downloadbtn = document.getElementById("downloadBtn");
let Form = document.querySelector("form");

Form.addEventListener("submit", function (event) {
  event.preventDefault();

  // assertion
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;
  const skills = document.getElementById("skills").value;

  cvOutput.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Contact:</strong> ${contact}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Experience</h3>
    <p>${experience}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
  `;
  
  cvOutput.style.display = "block";
  downloadbtn.style.display = "block";
});

downloadbtn.addEventListener("click", function () {
  html2pdf().from(cvOutput).set({
    margin: 1,
    filename: 'Resume.pdf', 
    html2canvas: { scale: 2, useCORS: true  },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  }).save();
});
