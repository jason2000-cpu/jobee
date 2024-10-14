function countTimeFrom(dateString) {
	const givenDate = new Date(dateString);

	const currentDate = new Date();

	const differenceInTime = currentDate - givenDate;

	const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

	if (differenceInDays >= 1) {
	  return `${differenceInDays} day${differenceInDays === 1 ? '' : 's'} ago`;
	}

	const differenceInHours = Math.floor(differenceInTime / (1000 * 60 * 60));

	if (differenceInHours >= 1) {
	  return `${differenceInHours} hour${differenceInHours === 1 ? '' : 's'} ago`;
	}

	const differenceInMinutes = Math.floor(differenceInTime / (1000 * 60));

	if (differenceInMinutes >= 1) {
	  return `${differenceInMinutes} minute${differenceInMinutes === 1 ? '' : 's'} ago`;
	}

	return 'Just now';
  }

  // Example usage:
//   const timePassed = countTimeFrom('2024-09-25T11:30:00.000Z');
//   console.log(`Time passed: ${timePassed}`);


  export default countTimeFrom;