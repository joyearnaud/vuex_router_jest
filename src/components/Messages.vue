<template>
	<sui-comment-group>
		<sui-comment>
			<sui-comment-avatar
				src="https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Kurt&hatColor=Blue02&facialHairType=BeardMagestic&facialHairColor=Auburn&clotheType=ShirtVNeck&clotheColor=PastelYellow&eyeType=Dizzy&eyebrowType=Default&mouthType=Concerned&skinColor=Brown"
			/>
			<sui-comment-content>
				<a is="sui-comment-author">Matt</a>
				<sui-comment-metadata>
					<div>Today at 5:42PM</div>
				</sui-comment-metadata>
				<sui-comment-text>How artistic!</sui-comment-text>
				<sui-comment-actions>
					<sui-comment-action>Reply</sui-comment-action>
				</sui-comment-actions>
			</sui-comment-content>
		</sui-comment>

		<sui-comment>
			<sui-comment-avatar
				src="https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Round&hatColor=PastelGreen&hairColor=Platinum&facialHairType=BeardMagestic&facialHairColor=Auburn&clotheType=Overall&clotheColor=White&eyeType=WinkWacky&eyebrowType=DefaultNatural&mouthType=Eating&skinColor=Light"
			/>
			<sui-comment-content>
				<a is="sui-comment-author">Elliot Fu</a>
				<sui-comment-metadata>
					<div>Yesterday at 12:30AM</div>
				</sui-comment-metadata>
				<sui-comment-text>
					<p>This has been very useful for my research. Thanks as well!</p>
				</sui-comment-text>
				<sui-comment-actions>
					<sui-comment-action>Reply</sui-comment-action>
				</sui-comment-actions>
			</sui-comment-content>
			<sui-comment-group>
				<sui-comment>
					<sui-comment-avatar
						src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=Blonde&facialHairType=MoustacheMagnum&facialHairColor=Red&clotheType=CollarSweater&clotheColor=PastelGreen&eyeType=Close&eyebrowType=AngryNatural&mouthType=Grimace&skinColor=Tanned'"
					/>
					<sui-comment-content>
						<a is="sui-comment-author">Jenny Hess</a>
						<sui-comment-metadata> <div>Just now</div> </sui-comment-metadata>
						<sui-comment-text>
							Elliot you are always so right :)
						</sui-comment-text>
						<sui-comment-actions>
							<sui-comment-action>Reply</sui-comment-action>
						</sui-comment-actions>
					</sui-comment-content>
				</sui-comment>
			</sui-comment-group>
		</sui-comment>

		<sui-comment>
			<sui-comment-avatar
				src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Sunglasses&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Red&clotheType=BlazerSweater&clotheColor=PastelGreen&eyeType=Dizzy&eyebrowType=UnibrowNatural&mouthType=Sad&skinColor=Black"
			/>
			<sui-comment-content>
				<a is="sui-comment-author">Joe Henderson</a>
				<sui-comment-metadata> <div>5 days ago</div> </sui-comment-metadata>
				<sui-comment-text>
					Dude, this is awesome. Thanks so much
				</sui-comment-text>
				<sui-comment-actions>
					<sui-comment-action>Reply</sui-comment-action>
				</sui-comment-actions>
			</sui-comment-content>
		</sui-comment>
		<sui-divider hidden />

		<div class="ui fluid action input">
			<input type="text" focus />
			<button class="ui icon button"><i class="smile icon"></i></button>
			<button class="ui blue right labeled icon button">
				<i class="edit icon"></i> Add Reply
			</button>
		</div>
	</sui-comment-group>
</template>
