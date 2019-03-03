<template>
	<div>
		<div class="ui right floated header">
			<h2>Online users</h2>
			<div class="ui items ">
				<div class="item">
					<a class="ui mini image">
						<img
							src="https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Kurt&hatColor=Blue02&facialHairType=BeardMagestic&facialHairColor=Auburn&clotheType=ShirtVNeck&clotheColor=PastelYellow&eyeType=Dizzy&eyebrowType=Default&mouthType=Concerned&skinColor=Brown"
						/>
					</a>
					<div class="description">Matt</div>
				</div>
				<div class="item">
					<a class="ui mini image">
						<img
							src="https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Round&hatColor=PastelGreen&hairColor=Platinum&facialHairType=BeardMagestic&facialHairColor=Auburn&clotheType=Overall&clotheColor=White&eyeType=WinkWacky&eyebrowType=DefaultNatural&mouthType=Eating&skinColor=Light"
						/>
					</a>
					<div class="description">Elliot Fu</div>
				</div>
				<div class="item">
					<a class="ui mini image">
						<img
							src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=Blonde&facialHairType=MoustacheMagnum&facialHairColor=Red&clotheType=CollarSweater&clotheColor=PastelGreen&eyeType=Close&eyebrowType=AngryNatural&mouthType=Grimace&skinColor=Tanned"
						/>
					</a>
					<div class="description">Jenny Hess</div>
				</div>
				<div class="item">
					<a class="ui mini image">
						<img
							src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Sunglasses&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Red&clotheType=BlazerSweater&clotheColor=PastelGreen&eyeType=Dizzy&eyebrowType=UnibrowNatural&mouthType=Sad&skinColor=Black"
						/>
					</a>
					<div class="description">Joe Hende...</div>
				</div>
			</div>
		</div>

		<div class="ui threaded comments">
			<div class="comment">
				<a class="avatar">
					<img
						src="https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Kurt&hatColor=Blue02&facialHairType=BeardMagestic&facialHairColor=Auburn&clotheType=ShirtVNeck&clotheColor=PastelYellow&eyeType=Dizzy&eyebrowType=Default&mouthType=Concerned&skinColor=Brown"
					/>
				</a>
				<div class="content">
					<a class="author">Matt</a>
					<div class="metadata"><span class="date">Today at 5:42PM</span></div>
					<div class="text">How artistic!</div>
					<div class="actions"><a class="reply">Reply</a></div>
				</div>
			</div>
			<div class="comment">
				<a class="avatar">
					<img
						src="https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Round&hatColor=PastelGreen&hairColor=Platinum&facialHairType=BeardMagestic&facialHairColor=Auburn&clotheType=Overall&clotheColor=White&eyeType=WinkWacky&eyebrowType=DefaultNatural&mouthType=Eating&skinColor=Light"
					/>
				</a>
				<div class="content">
					<a class="author">Elliot Fu</a>
					<div class="metadata">
						<span class="date">Yesterday at 12:30AM</span>
					</div>
					<div class="text">
						<p>This has been very useful for my research. Thanks as well!</p>
					</div>
					<div class="actions"><a class="reply">Reply</a></div>
				</div>
				<div class="comments">
					<div class="comment">
						<a class="avatar">
							<img
								src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=Blonde&facialHairType=MoustacheMagnum&facialHairColor=Red&clotheType=CollarSweater&clotheColor=PastelGreen&eyeType=Close&eyebrowType=AngryNatural&mouthType=Grimace&skinColor=Tanned"
							/>
						</a>
						<div class="content">
							<a class="author">Jenny Hess</a>
							<div class="metadata"><span class="date">Just now</span></div>
							<div class="text">Elliot you are always so right :)</div>
						</div>
					</div>
				</div>
			</div>
			<div class="comment">
				<a class="avatar">
					<img
						src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Sunglasses&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Red&clotheType=BlazerSweater&clotheColor=PastelGreen&eyeType=Dizzy&eyebrowType=UnibrowNatural&mouthType=Sad&skinColor=Black"
					/>
				</a>
				<div class="content">
					<a class="author">Joe Henderson</a>
					<div class="metadata"><span class="date">5 days ago</span></div>
					<div class="text">Dude, this is awesome. Thanks so much</div>
					<div class="actions"><a class="reply">Reply</a></div>
				</div>
			</div>
			<form class="ui reply form">
				<div class="field"><textarea></textarea></div>
				<div class="ui blue labeled icon button">
					<i class="icon edit"></i> Add Reply
				</div>
			</form>
		</div>
	</div>
</template>
