import React, { useState, useEffect } from 'react';

const App = () => {
   const [posts, setPosts] = useState([]);
   const [date, setDate] = useState([]);
   useEffect(() => {
		const interval = setInterval(() => {
			fetch('https://api.thingspeak.com/channels/1998255/feeds.json')
			.then((response) => response.json())
			.then((data) => {
			setPosts(data['feeds']);
			setDate(new Date())
			})
			.catch((err) => {
				console.log(err.message);
			});

		}, 100);
return () => clearInterval(interval);
   }, []);

	return (
		<div className="posts-container">
			{posts.length > 0 ? 
						<div class="widget">
<div class="left-panel panel">
                <div class="date">
					{date.toLocaleDateString()}
                </div>
				<div class="date">
					{date.toLocaleTimeString()}
                </div>
                <div class="city">
                    Bangalore
                </div>
                <div class="temp">
{
					parseFloat(posts[posts.length-1].field1) >= 0.07 ? 'Bad ' :
					parseFloat(posts[posts.length-1].field1) >= 0.04 ? 'Moderate ' :
					'Good '
				}
				{parseFloat(posts[posts.length-1].field1)}
                </div>
            </div>
		</div>
: 'Loading data ...' }
			{posts.length > 0 && posts.map((post) => {
					
					}
				)
			}
	   </div>
	);
};

export default App;
