import { browserHistory } from 'react-router';
import { sessionService } from 'redux-react-session';
import * as sessionData from '..sessionData';

export const login = user => {
   return () => {
      return sessionData.login(user).then(response => {
         const { token } = response;
         sessionService.saveSession({ token }).then(() => {
            sessionService.saveUser(response.data).then(() => {
               browserHistory.replace('/');
            });
         });
      });
   };
};

export const logout = () => {
   return () => {
      return sessionData
         .logout()
         .then(() => {
            sessionService.deleteSession();
            sessionService.deleteUser();
            browserHistory.replace('/login');
         })
         .catch(err => {
            throw err;
         });
   };
};
