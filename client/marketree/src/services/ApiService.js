const baseUrl = 'http://localhost:3000';

export const getUserTree = async (id) => {
  
  
  try {
    const response = await fetch(`${baseUrl}/userTree/${id}`, {
      method: 'GET',
      haeders: {
        'Content-Type': 'application/json'
      }
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

export const getSingleUser = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/user/${id}`, {
      method: 'GET',
      haeders: {
        'Content-Type': 'application/json'
      }
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
}


export const registerNewUser = async (firstName, lastName, email, password, parentId) => {
  try {
    const response = await fetch(`${baseUrl}/user/${parentId}`, {
      method: 'POST',
      body: JSON.stringify({firstName, lastName, email, password}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return await response.json();

  } catch (err) {
    console.log(err)
  }
};


export const updateStatus = async (id, newStatus) => {
  try {
    const response = await fetch(`${baseUrl}/user`, {
      method: 'POST',
      body: JSON.stringify({status: newStatus, id:id}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const addAffiliateLink = async (id, affiliateLink) => {
  try {
    const response = await fetch(`${baseUrl}/userAffiliateLink`, {
      method: 'PUT',
      body: JSON.stringify({affiliateLink: affiliateLink, id:id}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const sendEmailInvite = async (recipientEmail, id) => {
  try {
    const response = await fetch(`${baseUrl}/email/${id}`, {
      method: 'POST',
      body: JSON.stringify({recipientEmail}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};