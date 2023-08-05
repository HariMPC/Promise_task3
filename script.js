let element = document.querySelector(".demo");

async function holidays(){
    try{
        let array = []; 
        let data = await fetch("https://timezone.abstractapi.com/v1/current_time/?api_key=262c0054600f494cb561969bf11c8ba9&location=Oxford,%20United%20Kingdom")
    let response = await data.json()
    array.push(response);
    array.forEach((value)=>{
        element.innerHTML=`
       
          <div class="container">
          <div><b>TIME ZONE</b></div>
          <div> <b>Country Location:</b> ${value.requested_location}</div>
          <div> <b>Timezone Name:</b> ${value.timezone_name}</div>
          <div> <b>Timezone location:</b> ${value.timezone_location}</div>
          <div> <b>Timezone abbreviation:</b> ${value.timezone_abbreviation}</div>
          <div> <b>latitude:</b> ${value.latitude}</div>
          <div> <b>longitude:</b> ${value.longitude}</div>
          </div>
        `
    })

    }
    catch(error){
        console.log("error")
    }
        
    
}

holidays();