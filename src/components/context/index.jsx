import React from 'react';

const userContext = React.createContext({status:null, login :()=>{}});

export { userContext };