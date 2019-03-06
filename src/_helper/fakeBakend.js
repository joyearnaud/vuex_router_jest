export function configureFakeBackend() {
	let users = [
		{
			id: 1,
			username: 'test',
			password: 'test',
			firstName: 'Arn',
			lastName: 'Boy',
      picture: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Sunglasses&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Red&clotheType=BlazerSweater&clotheColor=PastelGreen&eyeType=Dizzy&eyebrowType=UnibrowNatural&mouthType=Sad&skinColor=Black'
		},
		{
			id: 2,
			username: 't',
			password: 't',
			firstName: 'Ula',
			lastName: 'Czer',
      picture: 'https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Round&hatColor=PastelGreen&hairColor=Platinum&facialHairType=BeardMagestic&facialHairColor=Auburn&clotheType=Overall&clotheColor=White&eyeType=WinkWacky&eyebrowType=DefaultNatural&mouthType=Eating&skinColor=Light'
		},
	];
	let realFetch = window.fetch;
	window.fetch = function(url, opts) {
		return new Promise((resolve, reject) => {
			// wrap in timeout to simulate server api call
			setTimeout(() => {
				// authenticate
				if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
					// get parameters from post request
					let params = JSON.parse(opts.body);

					// find if any user matches login credentials
					let filteredUsers = users.filter(user => {
						return (
							user.username === params.username &&
							user.password === params.password
						);
					});

					if (filteredUsers.length) {
						// if login details are valid return user details
						let user = filteredUsers[0];
						let responseJson = {
							id: user.id,
							username: user.username,
							firstName: user.firstName,
							lastName: user.lastName,
              picture: user.picture,
						};
						resolve({
							ok: true,
							text: () => Promise.resolve(JSON.stringify(responseJson)),
						});
					} else {
						// else return error
						reject('Username or password is incorrect');
					}

					return;
				}

				// get users
				if (url.endsWith('/users') && opts.method === 'GET') {
					// check for fake auth token in header and return users if valid, this security
					// is implemented server side in a real application
					if (
						opts.headers &&
						opts.headers.Authorization === `Basic ${window.btoa('test:test')}`
					) {
						resolve({
							ok: true,
							text: () => Promise.resolve(JSON.stringify(users)),
						});
					} else {
						// return 401 not authorised if token is null or invalid
						reject('Unauthorised');
					}

					return;
				}

				// pass through any requests not handled above
				realFetch(url, opts).then(response => resolve(response));
			}, 500);
		});
	};
}
