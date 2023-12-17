async function getAllUsers() {
    try {
      const { rows } = await client.query(`
        SELECT id, username, name, location, active 
        FROM users;
      `);
    
      return rows;
    } catch (error) {
      throw error;
    }
  }

  model.exports = {
        getAllUsers
    }