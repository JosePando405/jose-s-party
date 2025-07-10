
const getMoreInfo = async (id) => {
  try {
      const response = await fetch(
          `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-CT-WEB-PT/events/${id}`
      );
      const data = await response.json();
      console.log(data);
      displayDetails(data.data); 
  } catch (error) {
      console.error(error);
  }
};

const displayDetails = (event) => {
  const $detailsDiv = document.querySelector("#details"); 
  $detailsDiv.innerHTML = `
    <h3>Event Name: ${event.name}</h3>
    <p>Description: ${event.description}</p>
    <p>Date: ${new Date(event.date).toLocaleDateString()}</p>
    <p>Location: ${event.location}</p>
  `; 
  return $detailsDiv 
};

const displayResults = (events) => {
  const $app = document.querySelector("#app");
  $app.innerHTML = ""; 
  for (const element of events) {
      const $div = document.createElement("div");
      const $h2 = document.createElement("h2");
      $h2.textContent = element.name;
      const $button = document.createElement("button");
      $button.textContent = "View Details";
      $button.addEventListener("click", () => getMoreInfo(element.id)); 
      $div.append($h2, $button);
      $app.append($div);
  }
};

const fetchData = async () => {
  try {
      const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-CT-WEB-PT/events");
      const data = await response.json();
      console.log(data);
      displayResults(data.data);
  } catch (error) {
      console.error(error);
  }
};

const Party = () => {
  console.log("Party planner");
  const $h1 = document.createElement("h1");
  $h1.textContent = "Party Planner";
  $h1.style.margin = "10 auto";
  $h1.style.width = "20%";
  document.body.append($h1);

  const $detailsDiv = document.createElement("div");
  $detailsDiv.id = "details"; 
  document.body.append($detailsDiv);

  fetchData();
};

Party();








// const api = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-CT-WEB-PT/events";
// let  = []



// // const getMoreInfo = async (id) => {
// //     try {
// //       const response = await fetch(
// //         `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-CT-WEB-PT/events/${id}`
// //       );
// //       const data = await response.json();
// //       console.log(data);
// //       // displaydetails(data.data);
// //     } catch (error) {
// //       console.error(error);

// //     }
    
// //   };
//     const displayDetails = (event) => {





//   const displayResults = (events) => {
//     $app = document.querySelector("#app");
//     for (const element of events) {
//       $div = document.createElement("div");
//       $h2 = document.createElement("h2");
//       // $h2.textContent = element.;
//       $button = document.createElement("button");
//       $button.textContent = element.name.;
//       $button.addEventListener("click", () => partyinfo(data.data));
//       $div.append($h2);
//       $div.append($button);
//       $app.append($div);
//     }
//   };

// const fetchData = async () => {
//     try {
//       const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-CT-WEB-PT/events");
//       const data = await response.json();
//       console.log(data)
//       displayResults(data.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const Party = () => {
//     console.log("Party planner");
//     const $h1 = document.createElement("h1");
//     $h1.textContent = "party";
//     $h1.style.margin = "10 auto";
//     $h1.style.width = "20%"

   
    

//      fetchData();
//   };
//   Party();
