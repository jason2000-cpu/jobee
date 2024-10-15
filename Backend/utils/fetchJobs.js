const url = 'https://api.coresignal.com/cdapi/v1/professional_network/job/search/filter'
const collect_url = 'https://api.coresignal.com/cdapi/v1/professional_network/job/collect/'
const dataOne = {"title":"(Software Engineer)","application_active":true,"deleted":false}
const customHeaders = {
  "Content-Type": "application/json",
//   "Accept": "application/json",
  "Authorization": "Bearer eyJhbGciOiJFZERTQSIsImtpZCI6ImFiNzQ1ODUwLTliMWUtODg5OS0zNjYxLWJkNjhjNDdjMjdmOSJ9.eyJhdWQiOiJsb2Mtc2FmZS5jb20iLCJleHAiOjE3NjA1MzQwNTIsImlhdCI6MTcyODk3NzEwMCwiaXNzIjoiaHR0cHM6Ly9vcHMuY29yZXNpZ25hbC5jb206ODMwMC92MS9pZGVudGl0eS9vaWRjIiwibmFtZXNwYWNlIjoicm9vdCIsInByZWZlcnJlZF91c2VybmFtZSI6ImxvYy1zYWZlLmNvbSIsInN1YiI6ImZhMGM0YzljLWMyMWMtZmZkZi1jMGI5LTQ4YWVkNWFmOWMxNiIsInVzZXJpbmZvIjp7InNjb3BlcyI6ImNkYXBpIn19.puSIDF-qgnItM3mcnTZukQOT50p6QoYLnX1C0ov8O3asdR1Rc4m_LIk13TzemRr4Pvz7vfd3dSC3RC-NWYfyCw"
}

async function fetchJobDetails() {
    try {
      const response = await fetch('https://api.coresignal.com/cdapi/v1/professional_network/job/search/filter', {
        method: 'POST',
        headers: customHeaders,
        body: JSON.stringify(dataOne)
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error fetching job IDs: ${errorText}`);
      }
  
      const jobIds = await response.json();
      console.log('Job IDs:', jobIds.slice(0, 12));

      const first12Jobs = jobIds.slice(0, 12);
  
      const jobDetailsPromises = first12Jobs.map(async (jobID) => {
        const detailResponse = await fetch(`https://api.coresignal.com/cdapi/v1/professional_network/job/collect/${jobID}`, {
          method: 'GET',
          headers: customHeaders
        });
  
        if (!detailResponse.ok) {
          const errorText = await detailResponse.text();
          throw new Error(`Error fetching details for job ID ${jobID}: ${errorText}`);
        }
  
        return detailResponse.json();
      });
  
      const jobDetails = await Promise.all(jobDetailsPromises);
      console.log('Job Details:', jobDetails);
  
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  fetchJobDetails();
  


