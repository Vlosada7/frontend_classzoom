// this file has been moved to the back

const createRoom = () => {
  
  const data = fetch('https://api.netless.link/v5/rooms', {
    method: 'POST',
    headers: {
      token:
        'NETLESSSDK_YWs9Y2d4Y1NTVG1rN25neGpkSSZub25jZT1mYzY1NGIwMC1jNzE5LTExZWQtYWM2OS1mOTc2YTcxOTk1OWUmcm9sZT0wJnNpZz1hMTU0ZWRkZTM3ODAwYjBlNjY5Mzk4NjBiZGQxZDY0ZDMyMzIyMDkzMjFhOGI3ZTNlODkzNGJjYmYzNzRmYTli',
      'Content-Type': 'application/json',
      region: 'us-sv',
    },
    body: JSON.stringify({
      isRecord: false,
    }),
  })
    .then((response) => response.json())
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
    });

  return data;
};

const getRoomToken = async (id: string) => {
  try {
    console.log(id);
    const token =  fetch(`https://api.netless.link/v5/tokens/rooms/${id}`, {
      method: 'POST',
      headers: {
        token: 'NETLESSSDK_YWs9Y2d4Y1NTVG1rN25neGpkSSZub25jZT1mYzY1NGIwMC1jNzE5LTExZWQtYWM2OS1mOTc2YTcxOTk1OWUmcm9sZT0wJnNpZz1hMTU0ZWRkZTM3ODAwYjBlNjY5Mzk4NjBiZGQxZDY0ZDMyMzIyMDkzMjFhOGI3ZTNlODkzNGJjYmYzNzRmYTli',
        'Content-Type': 'application/json',
        region: 'us-sv',
      },
      body: JSON.stringify({
        'lifespan' : 3600000, 
        'role' : 'admin'
      }),
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      }); 
        
    return token;

        
  } catch (error) {
    console.log(error);
        
  }
};

export { createRoom, getRoomToken};
