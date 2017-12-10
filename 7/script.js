
    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];
    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];
    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
	
	var age = people.some(function(person) {
		var currentDate = (new Date()).getFullYear();
		
		if(currentDate - person.year >= 19) {
			return true;
		}
	});
	
	var agee = people.some(person => {
	var currentDate = (new Date()).getFullYear();
		return currentDate - person.year >= 19;
	});
	
	console.log(agee);
	

    // Array.prototype.every() // is everyone 19 or older?
	
	var allAdult = people.every(person => {
		var currentDate = (new Date()).getFullYear();
			return currentDate - person.year >= 19;
	});
	
	console.log(allAdult);
    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
	var isid = comments.find( comment => comment.id === 823423);
	console.log(isid);
	
    // Array.prototype.findIndex()
    // Find the comment with this ID
	var index = comments.findIndex( comment => comment.id === 823423);
	console.log(index);
	// comments.splice(index, 1);
	
	var newComments = [
		...comments.slice(0, index),
		...comments.slice(index + 1)
	];
	
	console.log(newComments);
    // delete the comment with the ID of 823423