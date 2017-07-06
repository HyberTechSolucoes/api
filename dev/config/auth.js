/**
 * Created by kennedy on 05/07/17.
 */
export default {
    facebookAuth : {
        clientID 		: '318873928552846', // your App ID
        clientSecret 	: '3537143b5afe2ee42a0bb04bc0823d17', // your App Secret
        callbackURL 	: 'http://localhost:8080/auth/facebook/callback'
    },
    twitterAuth : {
        consumerKey 		: 'your-consumer-key-here',
        consumerSecret 	: 'your-client-secret-here',
        callbackURL 		: 'http://localhost:8080/auth/twitter/callback'
    },
    googleAuth : {
        clientID 		: 'your-secret-clientID-here',
        clientSecret 	: 'your-client-secret-here',
        callbackURL 	: 'http://localhost:8080/auth/google/callback'
    }
};
