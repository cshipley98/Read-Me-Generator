// TODO: Create a function that returns a license badge based on which license is passed in
const renderLicenseBadge = License => {
  let LicenseBadge = 'https://img.shields.io/badge/license-';
}
// If there is no license, return an empty string
if (license === 'none'){
  return '';
} else if (license === 'MIT'){
  return licenseBadge + 'MITLicense-blue'
} else if (license === 'GNU AGPLv3'){
  return licenseBadge + 'GNUAGPLv3-brightorange';
} else if (license === 'GNU GPLv3'){
  return licenseBadge + 'GNUGPLv3-brightorange';
} else if (license === 'GNU LGPLv3'){
  return licenseBadge + 'GNULGPLv3-brightorange';
} else if (license === 'Apache 2.0'){
  return licenseBadge + 'ApacheLicense2.0-brightgreen';
} else if (license === 'Mozilla 2.0'){
  return licenseBadge + 'MozillaPublicLicense2.0-yellow'
} else if (license === 'Boost Software'){
  licenseOption = 'BootSoftwareLicense1.0';
  return licenseBadge +'BoostSoftwareLicense1.0-blueviolet';
} else if (license === 'Unlicense'){
  return licenseBadge + TheUnlicense-yellowgreen;
}

// TODO: Create a function that returns the license link
const renderLicenseLink = license => {
  let licenseLink = 'https://choosealicense.com/licenses/';
//return an empty string
if (license === 'None'){
  return licenseKink = '';
} else if (license === 'MIT'){
  return licenseLink = licenseLink + 'mit/';
} else if (license === 'GNU AGPLv3'){
  return licenseLink = licenseLink + 'agpl-3.0/';
} else if (license === 'GNU LGPLv3'){
  return licenseLink = licenseLink + 'lgpl-3.0/';
} 
}

// TODO: Create a function that returns the license section of README


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
