import StudentVue from 'studentvue'; /* Please open a support ticket for help, I did things 
like tsc --target ES6 for like the async function.

Also credits to EGGaming for the TypeScript API it was very EGGaming, check the github page for this to 
find a link to his GitHub profile, a true gamer. */

const DISTRICT_URL = ''; // Domain is like the links from here https://github.com/StudentVue/DistrictFinder/blob/master/miners/top_50_zips_per_state_districts.csv from the official StudentVue github page also in the description of this github when I update it.
const USERNAME = ''; // Enter in your student ID in my case, 99771660
const PASSWORD = ''; // Password is pretty self explanatory

async function synergy() {
  const sv = await StudentVue.login(DISTRICT_URL, {
    username: USERNAME,
    password: PASSWORD,
  });

  sv.gradebook(3).then(console.log);
}

synergy();

// Remember to open issues if you have any!
